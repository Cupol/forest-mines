import { maps, shop, width, height } from "./maps.js";

const $=id=>document.getElementById(id);
const canvas=$("field"),ctx=canvas.getContext("2d");
const colors=["#72d8cd","#ffc178"];
const keys=new Set();
const cursor={x:width/2,y:height/2};
let socket,state,room="",fire=false,pending=false;
$("name").value=localStorage.getItem("arena-name")||"";
$("code").value=new URLSearchParams(location.search).get("room")||"";
maps.forEach((map,i)=>$("map").add(new Option(map.name,i)));
for(const [id,item] of Object.entries(shop)){
  if(!item.cost)continue;
  const button=document.createElement("button");
  button.dataset.item=id;button.textContent=item.name+" · "+item.cost;
  button.onclick=()=>send({type:"buy",item:id});
  $("shop").append(button);
}
function send(message){if(socket?.readyState===WebSocket.OPEN)socket.send(JSON.stringify(message));}
function connect(code,create){
  if(pending||socket)return;
  const address=new URL(window.MINES_CONFIG?.api||location.origin);
  address.protocol=address.protocol==="https:"?"wss:":"ws:";
  address.pathname="/api/arena/"+code;
  if(create)address.searchParams.set("create","1");
  const peer=new WebSocket(address);socket=peer;pending=true;
  $("status").textContent="Подключаемся…";
  peer.onopen=()=>{
    pending=false;room=code;
    const name=$("name").value.trim();localStorage.setItem("arena-name",name);
    send({type:"name",name});
    $("entry").hidden=true;$("room").hidden=false;$("room-code").textContent=code;$("status").textContent="";
    history.replaceState({}, "", "?room="+code);
  };
  peer.onmessage=event=>{
    if(socket!==peer)return;
    const next=JSON.parse(event.data);
    if(state?.phase!==next.phase){keys.clear();fire=false;}
    state=next;update();
  };
  peer.onclose=()=>{
    if(socket!==peer)return;
    socket=null;state=null;pending=false;fire=false;keys.clear();
    $("entry").hidden=false;$("room").hidden=true;
    $("status").textContent=room?"Соединение закрыто.":"Комната недоступна. Проверь код или создай новую.";
    room="";
  };
}
$("create").onclick=()=>connect(Array.from(crypto.getRandomValues(new Uint8Array(6)),n=>"ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[n%32]).join(""),true);
$("join").onsubmit=event=>{
  event.preventDefault();
  const code=$("code").value.trim().toUpperCase();
  if(!/^[A-Z0-9]{6}$/.test(code)){$("status").textContent="Введи шестизначный код комнаты.";return;}
  connect(code,false);
};
$("copy").onclick=async()=>{
  try{await navigator.clipboard.writeText(location.href);$("status").textContent="Ссылка скопирована";}
  catch{$("status").textContent="Код для друга: "+room;}
};
$("leave").onclick=()=>{room="";socket?.close();history.replaceState({}, "", location.pathname);};
$("map").onchange=()=>send({type:"map",index:Number($("map").value)});
$("start").onclick=$("again").onclick=()=>send({type:"start"});
function update(){
  const {phase,me,host,players,map,points,round,result}=state,own=players.find(p=>p.id===me);
  if(!own)return;
  $("lobby").hidden=phase!=="lobby";$("match").hidden=phase==="lobby";
  $("map").value=map;$("map").disabled=me!==host;
  $("players").textContent="В комнате "+players.length+" / 8 · "+players.map(p=>p.name).join(", ")+(result&&phase==="lobby"?" · "+result:"");
  $("start").disabled=me!==host||players.length<2;
  $("score").textContent=points[0]+" : "+points[1];
  $("round").textContent="Раунд "+round+" · "+maps[map].name;
  $("hp").textContent=own.hp?own.hp+" HP · "+shop[own.tool].name:"Ты выбыл до конца раунда";
  $("buy").hidden=phase!=="buy";
  $("credits").textContent=own.credits+" кредитов";
  for(const button of $("shop").children){
    const item=button.dataset.item;
    button.disabled=own.credits<shop[item].cost||(item==="armor"?own.armor>0:own.tool!=="pulse");
  }
  $("result").hidden=phase!=="between"&&phase!=="over";$("result-text").textContent=result;
  $("again").hidden=phase!=="over"||me!==host;
}
function draw(){
  if(state&&state.phase!=="lobby"){
    const map=maps[state.map];
    ctx.fillStyle="#202d30";ctx.fillRect(0,0,width,height);
    ctx.strokeStyle="#273638";
    for(let x=0;x<width;x+=32){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,height);ctx.stroke();}
    for(let y=0;y<height;y+=32){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(width,y);ctx.stroke();}
    for(const [x,y,w,h] of map.walls){
      ctx.fillStyle="#111b1e";ctx.fillRect(x+5,y+7,w,h);
      ctx.fillStyle=map.color;ctx.fillRect(x,y,w,h);
      ctx.fillStyle="#ffffff26";ctx.fillRect(x,y,w,4);
      ctx.fillStyle="#00000038";ctx.fillRect(x,y+h-5,w,5);
    }
    for(const flash of state.flashes){
      ctx.strokeStyle=colors[flash.team];ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(flash.x,flash.y);ctx.lineTo(flash.ex,flash.ey);ctx.stroke();
    }
    for(const p of state.players){
      if(!p.hp)continue;
      ctx.fillStyle=colors[p.team];ctx.beginPath();ctx.arc(p.x,p.y,14,0,Math.PI*2);ctx.fill();
      if(p.id===state.me){ctx.strokeStyle="#fff";ctx.lineWidth=3;ctx.stroke();}
      ctx.fillStyle="#edf5f4";ctx.font="14px system-ui";ctx.textAlign="center";ctx.fillText(p.name,p.x,p.y-20);
    }
    $("timer").textContent=state.deadline?Math.max(0,Math.ceil((state.deadline-Date.now())/1000))+" с":"";
  }
  requestAnimationFrame(draw);
}
requestAnimationFrame(draw);
const controls=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"]);
window.addEventListener("keydown",e=>{
  if(state?.phase!=="live"||!controls.has(e.code))return;
  e.preventDefault();keys.add(e.code);
});
window.addEventListener("keyup",e=>keys.delete(e.code));
window.addEventListener("blur",()=>{keys.clear();fire=false;});
function point(e){
  const r=canvas.getBoundingClientRect(),scale=Math.min(r.width/width,r.height/height);
  cursor.x=(e.clientX-r.left-(r.width-width*scale)/2)/scale;
  cursor.y=(e.clientY-r.top-(r.height-height*scale)/2)/scale;
}
canvas.addEventListener("pointermove",point);
canvas.addEventListener("pointerdown",e=>{if(e.button===0){point(e);fire=true;}});
window.addEventListener("pointerup",()=>fire=false);
setInterval(()=>{
  if(state?.phase!=="live")return;
  const p=state.players.find(p=>p.id===state.me);
  if(!p?.hp)return;
  const axis=(positive,negative,altPositive,altNegative)=>Number(keys.has(positive)||keys.has(altPositive))-Number(keys.has(negative)||keys.has(altNegative));
  const dx=cursor.x-p.x,dy=cursor.y-p.y,norm=Math.max(1,Math.hypot(dx,dy));
  send({type:"input",x:axis("KeyD","KeyA","ArrowRight","ArrowLeft"),y:axis("KeyS","KeyW","ArrowDown","ArrowUp"),ax:dx/norm,ay:dy/norm,fire});
},50);
