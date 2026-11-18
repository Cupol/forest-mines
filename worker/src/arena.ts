import { DurableObject } from "cloudflare:workers";
import { maps, width, height, shop } from "../../public/arena/maps.js";

type Team = 0 | 1;
type Tool = "pulse" | "burst" | "beam";
type Input = {x:number; y:number; ax:number; ay:number; fire:boolean};
type Player = {
  id:string; name:string; team:Team; x:number; y:number; hp:number; armor:number;
  credits:number; tool:Tool; lastShot:number; receivedAt:number; input:Input; messages:number; window:number;
  firePressed?:boolean;
};
const idle = ():Input => ({x:0,y:0,ax:0,ay:0,fire:false});
const clamp = (value:number) => Math.min(1,Math.max(-1,value));
const palette = ["Бирюзовые","Янтарные"];
const player = (id:string,name:string,team:Team):Player => ({id,name,team,x:0,y:0,hp:100,armor:0,credits:1000,tool:"pulse",
  lastShot:0,input:idle(),receivedAt:0,messages:0,window:0});

export class ArenaRoom extends DurableObject {
  private peers = new Map<WebSocket,Player>();
  private host = "";
  private map = 0;
  private phase = "lobby";
  private deadline = 0;
  private round = 0;
  private points = [0,0];
  private result = "";
  private timer?: ReturnType<typeof setInterval>;
  private frame = 0;
  private bot?: Player;
  private waypoint?: {x:number;y:number};
  private nextRoute = 0;
  private flashes:{x:number;y:number;ex:number;ey:number;team:Team}[] = [];

  async fetch(request:Request):Promise<Response>{
    const url = new URL(request.url);
    const create = url.searchParams.get("create")==="1";
    if(create && this.peers.size) return new Response("Room exists",{status:409});
    if(!create && !this.peers.size) return new Response("No room",{status:404});
    if(this.bot)return new Response("Solo room",{status:409});
    if(this.phase!=="lobby" || this.peers.size>=8) return new Response("Room unavailable",{status:409});
    const pair = new WebSocketPair(), socket = pair[1];
    socket.accept();
    const id = crypto.randomUUID();
    const member=player(id,"Игрок",0);
    if(create&&url.searchParams.get("solo")==="1")this.bot=player("arena-bot","Бот",1);
    this.peers.set(socket,member);
    this.host ||= id;
    socket.addEventListener("message",event=>this.message(socket,member,event.data));
    socket.addEventListener("close",()=>this.leave(socket));
    socket.addEventListener("error",()=>this.leave(socket));
    this.broadcast();
    return new Response(null,{status:101,webSocket:pair[0]});
  }

  private leave(socket:WebSocket){
    if(!this.peers.delete(socket))return;
    const teams=new Set([...this.peers.values()].map(player=>player.team));
    if(this.phase!=="lobby"&&teams.size<2){
      this.phase="lobby";
      this.result="Соперники покинули матч. Можно начать новую партию.";
      this.stop();
    }
    if(!this.peers.size){this.phase="lobby";this.result="";this.bot=undefined;this.stop();}
    if(![...this.peers.values()].some(p=>p.id===this.host))this.host=this.peers.values().next().value?.id??"";
    this.broadcast();
  }

  private message(socket:WebSocket,p:Player,raw:unknown){
    if(!this.peers.has(socket)||typeof raw!=="string"||raw.length>600)return;
    const now=Date.now();
    if(now-p.window>=1000){p.window=now;p.messages=0;}
    if(++p.messages>45)return;
    let m:Record<string,unknown>;
    try{m=JSON.parse(raw);if(!m||typeof m!=="object")return;}catch{return;}
    if(m.type==="name"&&this.phase==="lobby"){
      p.name=String(m.name??"").trim().slice(0,20)||"Игрок";
      this.broadcast();
    }
    if(m.type==="map"&&this.phase==="lobby"&&p.id===this.host&&typeof m.index==="number"&&maps[m.index]){
      this.map=m.index;this.broadcast();
    }
    if(m.type==="start"&&["lobby","over"].includes(this.phase)&&p.id===this.host&&(this.peers.size>=2||this.bot)){
      this.round=0;this.points=[0,0];
      let n=0;
      for(const member of this.players()){member.team=(n++%2) as Team;member.credits=1000;}
      this.prepareRound();
      this.timer??=setInterval(()=>this.tick(),50);
    }
    if(m.type==="buy"&&this.phase==="buy"){
      const item=m.item;
      if(item==="armor"){
        if(!p.armor&&p.credits>=shop.armor.cost){p.armor=45;p.credits-=shop.armor.cost;}
      }else if(item==="burst"||item==="beam"||item==="pulse"){
        if(p.tool==="pulse"&&p.credits>=shop[item].cost){p.tool=item;p.credits-=shop[item].cost;}
      }
    }
    if(m.type==="input"&&this.phase==="live"){
      const {x,y,ax,ay}=m;
      if(typeof x!=="number"||typeof y!=="number"||typeof ax!=="number"||typeof ay!=="number"||
        ![x,y,ax,ay].every(Number.isFinite))return;
      if(m.fire===true&&!p.input.fire)p.firePressed=true;
      p.input={x:clamp(x),y:clamp(y),ax:clamp(ax),ay:clamp(ay),fire:m.fire===true};
      p.receivedAt=now;
    }
  }

  private prepareRound(){
    this.round++;this.phase="buy";this.deadline=Date.now()+12000;this.result="";
    const seats=[0,0];
    this.waypoint=undefined;this.nextRoute=0;
    for(const p of this.players()){
      p.x=p.team===0?63:width-63;
      p.y=245+seats[p.team]++*50;
      p.hp=100;p.armor=0;p.tool="pulse";p.input=idle();p.lastShot=0;p.receivedAt=0;p.firePressed=false;
    }
    if(this.bot&&this.bot.credits>=shop.burst.cost){
      this.bot.tool="burst";this.bot.credits-=shop.burst.cost;
    }
    this.broadcast();
  }

  private stop(){
    if(this.timer!==undefined)clearInterval(this.timer);
    this.timer=undefined;
  }

  private blocked(x:number,y:number,radius=0){
    return x<radius||x>width-radius||y<radius||y>height-radius||
      maps[this.map].walls.some(([left,top,w,h])=>x>left-radius&&x<left+w+radius&&y>top-radius&&y<top+h+radius);
  }

  private players(){
    return this.bot?[...this.peers.values(),this.bot]:[...this.peers.values()];
  }

  private route(bot:Player,target:Player){
    const step=24,columns=width/step,rows=Math.floor(height/step);
    const point=(cell:number)=>({x:(cell%columns+.5)*step,y:(Math.floor(cell/columns)+.5)*step});
    const index=(x:number,y:number)=>Math.min(columns-1,Math.floor(x/step))+
      Math.min(rows-1,Math.floor(y/step))*columns;
    const start=index(bot.x,bot.y),goal=index(target.x,target.y);
    const queue=[start],previous=new Map<number,number>([[start,start]]);
    let closest=start,best=Infinity;
    for(const current of queue){
      const p=point(current),distance=Math.hypot(p.x-target.x,p.y-target.y);
      if(distance<best){closest=current;best=distance;}
      if(current===goal)break;
      for(const [dx,dy] of [[1,0],[-1,0],[0,1],[0,-1]]){
        const x=current%columns+dx,y=Math.floor(current/columns)+dy,next=y*columns+x;
        if(x<0||x>=columns||y<0||y>=rows||previous.has(next))continue;
        const q=point(next);
        if(this.blocked(q.x,q.y,16))continue;
        previous.set(next,current);queue.push(next);
      }
    }
    while(closest!==start&&previous.get(closest)!==start)closest=previous.get(closest)!;
    return closest===start?undefined:point(closest);
  }

  private think(now:number){
    const bot=this.bot,target=this.peers.values().next().value;
    if(!bot?.hp||!target?.hp)return;
    const dx=target.x-bot.x,dy=target.y-bot.y,distance=Math.hypot(dx,dy);
    let visible=distance<shop[bot.tool].reach-10;
    for(let i=12;visible&&i<distance;i+=12){
      if(this.blocked(bot.x+dx*i/distance,bot.y+dy*i/distance))visible=false;
    }
    if(!visible&&(now>=this.nextRoute||!this.waypoint||Math.hypot(this.waypoint.x-bot.x,this.waypoint.y-bot.y)<6)){
      this.waypoint=this.route(bot,target);this.nextRoute=now+550;
    }
    const walk=visible?target:this.waypoint;
    const mx=walk?walk.x-bot.x:0,my=walk?walk.y-bot.y:0;
    const length=Math.max(8,Math.hypot(mx,my));
    const pace=visible&&distance<210?0:.63;
    const angle=Math.atan2(dy,dx)+Math.sin(now/190)*.10;
    bot.input={x:mx/length*pace,y:my/length*pace,ax:Math.cos(angle),ay:Math.sin(angle),fire:visible};
    bot.receivedAt=now;
  }

  private zap(p:Player,now:number){
    const {ax,ay}=p.input,norm=Math.hypot(ax,ay),item=shop[p.tool];
    if(norm<0.1||now-p.lastShot<item.cooldown)return;
    p.lastShot=now;
    let x=p.x,y=p.y;
    const dx=ax/norm,dy=ay/norm;
    for(let i=6;i<=item.reach;i+=6){
      x=p.x+dx*i;y=p.y+dy*i;
      if(this.blocked(x,y))break;
      const target=this.players().find(other=>other.team!==p.team&&other.hp>0&&Math.hypot(other.x-x,other.y-y)<15);
      if(!target)continue;
      const shield=Math.min(target.armor,Math.ceil(item.damage/2));
      target.armor-=shield;target.hp=Math.max(0,target.hp-item.damage+shield);
      break;
    }
    this.flashes.push({x:p.x,y:p.y,ex:x,ey:y,team:p.team});
  }

  private endRound(winner:Team|null){
    if(winner!==null)this.points[winner]++;
    for(const p of this.players())p.credits=Math.min(3500,p.credits+(winner===p.team?900:650));
    this.result=winner===null?"Ничья":palette[winner]+" выиграли раунд";
    if(winner!==null && this.points[winner]>=4){
      this.result=palette[winner]+" выиграли матч";
      this.phase="over";this.deadline=0;this.stop();this.broadcast();
    }else{this.phase="between";this.deadline=Date.now()+3500;this.broadcast();}
  }

  private tick(){
    const now=Date.now();
    if(this.phase==="buy"&&now>=this.deadline){this.phase="live";this.deadline=now+75000;}
    if(this.phase==="between"&&now>=this.deadline)this.prepareRound();
    if(this.phase==="live"){
      this.think(now);
      for(const p of this.players()){
        if(!p.hp||now-p.receivedAt>300)continue;
        const {x,y,fire}=p.input,speed=9/Math.max(1,Math.hypot(x,y));
        if(!this.blocked(p.x+x*speed,p.y,14))p.x+=x*speed;
        if(!this.blocked(p.x,p.y+y*speed,14))p.y+=y*speed;
        if(fire||p.firePressed)this.zap(p,now);
        p.firePressed=false;
      }
      const living=[0,0];
      for(const p of this.players())if(p.hp)living[p.team]++;
      if(!living[0]||!living[1]||now>=this.deadline){
        this.endRound(living[0]===living[1]?null:living[0]>living[1]?0:1);
      }
    }
    if(++this.frame%2===0)this.broadcast();
  }

  private broadcast(){
    const players=this.players().map(({id,name,team,x,y,hp,armor,credits,tool})=>({id,name,team,x,y,hp,armor,credits,tool}));
    for(const [socket,player] of this.peers){
      if(socket.readyState!==WebSocket.OPEN)continue;
      try{
        socket.send(JSON.stringify({me:player.id,host:this.host,map:this.map,
          phase:this.phase,solo:Boolean(this.bot),deadline:this.deadline,round:this.round,points:this.points,result:this.result,players,flashes:this.flashes}));
      }catch{socket.close();}
    }
    this.flashes=[];
  }
}
