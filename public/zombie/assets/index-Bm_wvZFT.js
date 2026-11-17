(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();const Eo="183",$u=0,hc=1,Ju=2,_s=1,Qu=2,vr=3,jn=0,Oe=1,en=2,Pn=0,Gi=1,fc=2,dc=3,pc=4,th=5,oi=100,eh=101,nh=102,ih=103,rh=104,sh=200,ah=201,oh=202,ch=203,Ta=204,ba=205,lh=206,uh=207,hh=208,fh=209,dh=210,ph=211,mh=212,gh=213,_h=214,Aa=0,wa=1,Ra=2,Xi=3,Ca=4,Pa=5,Da=6,La=7,To=0,xh=1,vh=2,pn=0,Il=1,Ul=2,Nl=3,Fl=4,Ol=5,Bl=6,zl=7,kl=300,fi=301,qi=302,Vs=303,Gs=304,Is=306,Ia=1e3,Cn=1001,Ua=1002,Te=1003,Mh=1004,Or=1005,Re=1006,Hs=1007,li=1008,Ge=1009,Vl=1010,Gl=1011,br=1012,bo=1013,gn=1014,rn=1015,Un=1016,Ao=1017,wo=1018,Ar=1020,Hl=35902,Wl=35899,Xl=1021,ql=1022,sn=1023,Nn=1026,ui=1027,Ro=1028,Co=1029,Yi=1030,Po=1031,Do=1033,xs=33776,vs=33777,Ms=33778,Ss=33779,Na=35840,Fa=35841,Oa=35842,Ba=35843,za=36196,ka=37492,Va=37496,Ga=37488,Ha=37489,Wa=37490,Xa=37491,qa=37808,Ya=37809,Za=37810,Ka=37811,ja=37812,$a=37813,Ja=37814,Qa=37815,to=37816,eo=37817,no=37818,io=37819,ro=37820,so=37821,ao=36492,oo=36494,co=36495,lo=36283,uo=36284,ho=36285,fo=36286,Sh=3200,Yl=0,yh=1,qn="",Fe="srgb",Zi="srgb-linear",bs="linear",$t="srgb",Si=7680,mc=519,Eh=512,Th=513,bh=514,Lo=515,Ah=516,wh=517,Io=518,Rh=519,po=35044,gc="300 es",fn=2e3,wr=2001;function Ch(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function As(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ph(){const n=As("canvas");return n.style.display="block",n}const _c={};function ws(...n){const t="THREE."+n.shift();console.log(t,...n)}function Zl(n){const t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function wt(...n){n=Zl(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function Wt(...n){n=Zl(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Rs(...n){const t=n.join(" ");t in _c||(_c[t]=!0,wt(...n))}function Dh(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}const Lh={[Aa]:wa,[Ra]:Da,[Ca]:La,[Xi]:Pa,[wa]:Aa,[Da]:Ra,[La]:Ca,[Pa]:Xi};class Ji{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const r=i[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const Ae=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let xc=1234567;const yr=Math.PI/180,Ki=180/Math.PI;function Dn(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ae[n&255]+Ae[n>>8&255]+Ae[n>>16&255]+Ae[n>>24&255]+"-"+Ae[t&255]+Ae[t>>8&255]+"-"+Ae[t>>16&15|64]+Ae[t>>24&255]+"-"+Ae[e&63|128]+Ae[e>>8&255]+"-"+Ae[e>>16&255]+Ae[e>>24&255]+Ae[i&255]+Ae[i>>8&255]+Ae[i>>16&255]+Ae[i>>24&255]).toLowerCase()}function Ht(n,t,e){return Math.max(t,Math.min(e,n))}function Uo(n,t){return(n%t+t)%t}function Ih(n,t,e,i,r){return i+(n-t)*(r-i)/(e-t)}function Uh(n,t,e){return n!==t?(e-n)/(t-n):0}function Er(n,t,e){return(1-e)*n+e*t}function Nh(n,t,e,i){return Er(n,t,1-Math.exp(-e*i))}function Fh(n,t=1){return t-Math.abs(Uo(n,t*2)-t)}function Oh(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Bh(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function zh(n,t){return n+Math.floor(Math.random()*(t-n+1))}function kh(n,t){return n+Math.random()*(t-n)}function Vh(n){return n*(.5-Math.random())}function Gh(n){n!==void 0&&(xc=n);let t=xc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Hh(n){return n*yr}function Wh(n){return n*Ki}function Xh(n){return(n&n-1)===0&&n!==0}function qh(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Yh(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Zh(n,t,e,i,r){const s=Math.cos,a=Math.sin,c=s(e/2),l=a(e/2),o=s((t+i)/2),d=a((t+i)/2),h=s((t-i)/2),u=a((t-i)/2),m=s((i-t)/2),_=a((i-t)/2);switch(r){case"XYX":n.set(c*d,l*h,l*u,c*o);break;case"YZY":n.set(l*u,c*d,l*h,c*o);break;case"ZXZ":n.set(l*h,l*u,c*d,c*o);break;case"XZX":n.set(c*d,l*_,l*m,c*o);break;case"YXY":n.set(l*m,c*d,l*_,c*o);break;case"ZYZ":n.set(l*_,l*m,c*d,c*o);break;default:wt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function nn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Jt(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Kh={DEG2RAD:yr,RAD2DEG:Ki,generateUUID:Dn,clamp:Ht,euclideanModulo:Uo,mapLinear:Ih,inverseLerp:Uh,lerp:Er,damp:Nh,pingpong:Fh,smoothstep:Oh,smootherstep:Bh,randInt:zh,randFloat:kh,randFloatSpread:Vh,seededRandom:Gh,degToRad:Hh,radToDeg:Wh,isPowerOfTwo:Xh,ceilPowerOfTwo:qh,floorPowerOfTwo:Yh,setQuaternionFromProperEuler:Zh,normalize:Jt,denormalize:nn};class Lt{constructor(t=0,e=0){Lt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ht(this.x,t.x,e.x),this.y=Ht(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ht(this.x,t,e),this.y=Ht(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ht(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ht(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*r+t.x,this.y=s*r+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qi{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,a,c){let l=i[r+0],o=i[r+1],d=i[r+2],h=i[r+3],u=s[a+0],m=s[a+1],_=s[a+2],S=s[a+3];if(h!==S||l!==u||o!==m||d!==_){let f=l*u+o*m+d*_+h*S;f<0&&(u=-u,m=-m,_=-_,S=-S,f=-f);let p=1-c;if(f<.9995){const M=Math.acos(f),T=Math.sin(M);p=Math.sin(p*M)/T,c=Math.sin(c*M)/T,l=l*p+u*c,o=o*p+m*c,d=d*p+_*c,h=h*p+S*c}else{l=l*p+u*c,o=o*p+m*c,d=d*p+_*c,h=h*p+S*c;const M=1/Math.sqrt(l*l+o*o+d*d+h*h);l*=M,o*=M,d*=M,h*=M}}t[e]=l,t[e+1]=o,t[e+2]=d,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,r,s,a){const c=i[r],l=i[r+1],o=i[r+2],d=i[r+3],h=s[a],u=s[a+1],m=s[a+2],_=s[a+3];return t[e]=c*_+d*h+l*m-o*u,t[e+1]=l*_+d*u+o*h-c*m,t[e+2]=o*_+d*m+c*u-l*h,t[e+3]=d*_-c*h-l*u-o*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,a=t._order,c=Math.cos,l=Math.sin,o=c(i/2),d=c(r/2),h=c(s/2),u=l(i/2),m=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=u*d*h+o*m*_,this._y=o*m*h-u*d*_,this._z=o*d*_+u*m*h,this._w=o*d*h-u*m*_;break;case"YXZ":this._x=u*d*h+o*m*_,this._y=o*m*h-u*d*_,this._z=o*d*_-u*m*h,this._w=o*d*h+u*m*_;break;case"ZXY":this._x=u*d*h-o*m*_,this._y=o*m*h+u*d*_,this._z=o*d*_+u*m*h,this._w=o*d*h-u*m*_;break;case"ZYX":this._x=u*d*h-o*m*_,this._y=o*m*h+u*d*_,this._z=o*d*_-u*m*h,this._w=o*d*h+u*m*_;break;case"YZX":this._x=u*d*h+o*m*_,this._y=o*m*h+u*d*_,this._z=o*d*_-u*m*h,this._w=o*d*h-u*m*_;break;case"XZY":this._x=u*d*h-o*m*_,this._y=o*m*h-u*d*_,this._z=o*d*_+u*m*h,this._w=o*d*h+u*m*_;break;default:wt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],a=e[1],c=e[5],l=e[9],o=e[2],d=e[6],h=e[10],u=i+c+h;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(d-l)*m,this._y=(s-o)*m,this._z=(a-r)*m}else if(i>c&&i>h){const m=2*Math.sqrt(1+i-c-h);this._w=(d-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+o)/m}else if(c>h){const m=2*Math.sqrt(1+c-i-h);this._w=(s-o)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+h-i-c);this._w=(a-r)/m,this._x=(s+o)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ht(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,a=t._w,c=e._x,l=e._y,o=e._z,d=e._w;return this._x=i*d+a*c+r*o-s*l,this._y=r*d+a*l+s*c-i*o,this._z=s*d+a*o+i*l-r*c,this._w=a*d-i*c-r*l-s*o,this._onChangeCallback(),this}slerp(t,e){let i=t._x,r=t._y,s=t._z,a=t._w,c=this.dot(t);c<0&&(i=-i,r=-r,s=-s,a=-a,c=-c);let l=1-e;if(c<.9995){const o=Math.acos(c),d=Math.sin(o);l=Math.sin(l*o)/d,e=Math.sin(e*o)/d,this._x=this._x*l+i*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(t=0,e=0,i=0){F.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(vc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(vc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,a=t.y,c=t.z,l=t.w,o=2*(a*r-c*i),d=2*(c*e-s*r),h=2*(s*i-a*e);return this.x=e+l*o+a*h-c*d,this.y=i+l*d+c*o-s*h,this.z=r+l*h+s*d-a*o,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ht(this.x,t.x,e.x),this.y=Ht(this.y,t.y,e.y),this.z=Ht(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ht(this.x,t,e),this.y=Ht(this.y,t,e),this.z=Ht(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ht(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,a=e.x,c=e.y,l=e.z;return this.x=r*l-s*c,this.y=s*a-i*l,this.z=i*c-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ws.copy(this).projectOnVector(t),this.sub(Ws)}reflect(t){return this.sub(Ws.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ht(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ws=new F,vc=new Qi;class Ut{constructor(t,e,i,r,s,a,c,l,o){Ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,c,l,o)}set(t,e,i,r,s,a,c,l,o){const d=this.elements;return d[0]=t,d[1]=r,d[2]=c,d[3]=e,d[4]=s,d[5]=l,d[6]=i,d[7]=a,d[8]=o,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],c=i[3],l=i[6],o=i[1],d=i[4],h=i[7],u=i[2],m=i[5],_=i[8],S=r[0],f=r[3],p=r[6],M=r[1],T=r[4],v=r[7],b=r[2],R=r[5],A=r[8];return s[0]=a*S+c*M+l*b,s[3]=a*f+c*T+l*R,s[6]=a*p+c*v+l*A,s[1]=o*S+d*M+h*b,s[4]=o*f+d*T+h*R,s[7]=o*p+d*v+h*A,s[2]=u*S+m*M+_*b,s[5]=u*f+m*T+_*R,s[8]=u*p+m*v+_*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],c=t[5],l=t[6],o=t[7],d=t[8];return e*a*d-e*c*o-i*s*d+i*c*l+r*s*o-r*a*l}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],c=t[5],l=t[6],o=t[7],d=t[8],h=d*a-c*o,u=c*l-d*s,m=o*s-a*l,_=e*h+i*u+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/_;return t[0]=h*S,t[1]=(r*o-d*i)*S,t[2]=(c*i-r*a)*S,t[3]=u*S,t[4]=(d*e-r*l)*S,t[5]=(r*s-c*e)*S,t[6]=m*S,t[7]=(i*l-o*e)*S,t[8]=(a*e-i*s)*S,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,a,c){const l=Math.cos(s),o=Math.sin(s);return this.set(i*l,i*o,-i*(l*a+o*c)+a+t,-r*o,r*l,-r*(-o*a+l*c)+c+e,0,0,1),this}scale(t,e){return this.premultiply(Xs.makeScale(t,e)),this}rotate(t){return this.premultiply(Xs.makeRotation(-t)),this}translate(t,e){return this.premultiply(Xs.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Xs=new Ut,Mc=new Ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sc=new Ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function jh(){const n={enabled:!0,workingColorSpace:Zi,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===$t&&(r.r=Ln(r.r),r.g=Ln(r.g),r.b=Ln(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===$t&&(r.r=Hi(r.r),r.g=Hi(r.g),r.b=Hi(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===qn?bs:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Rs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Rs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Zi]:{primaries:t,whitePoint:i,transfer:bs,toXYZ:Mc,fromXYZ:Sc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Fe},outputColorSpaceConfig:{drawingBufferColorSpace:Fe}},[Fe]:{primaries:t,whitePoint:i,transfer:$t,toXYZ:Mc,fromXYZ:Sc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Fe}}}),n}const qt=jh();function Ln(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Hi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let yi;class $h{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{yi===void 0&&(yi=As("canvas")),yi.width=t.width,yi.height=t.height;const r=yi.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=yi}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=As("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ln(s[a]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ln(e[i]/255)*255):e[i]=Ln(e[i]);return{data:e,width:t.width,height:t.height}}else return wt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Jh=0;class No{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jh++}),this.uuid=Dn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,c=r.length;a<c;a++)r[a].isDataTexture?s.push(qs(r[a].image)):s.push(qs(r[a]))}else s=qs(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function qs(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?$h.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(wt("Texture: Unable to serialize Texture."),{})}let Qh=0;const Ys=new F;class Ce extends Ji{constructor(t=Ce.DEFAULT_IMAGE,e=Ce.DEFAULT_MAPPING,i=Cn,r=Cn,s=Re,a=li,c=sn,l=Ge,o=Ce.DEFAULT_ANISOTROPY,d=qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qh++}),this.uuid=Dn(),this.name="",this.source=new No(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=o,this.format=c,this.internalFormat=null,this.type=l,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ys).x}get height(){return this.source.getSize(Ys).y}get depth(){return this.source.getSize(Ys).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){wt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){wt(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==kl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ia:t.x=t.x-Math.floor(t.x);break;case Cn:t.x=t.x<0?0:1;break;case Ua:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ia:t.y=t.y-Math.floor(t.y);break;case Cn:t.y=t.y<0?0:1;break;case Ua:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ce.DEFAULT_IMAGE=null;Ce.DEFAULT_MAPPING=kl;Ce.DEFAULT_ANISOTROPY=1;class le{constructor(t=0,e=0,i=0,r=1){le.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const l=t.elements,o=l[0],d=l[4],h=l[8],u=l[1],m=l[5],_=l[9],S=l[2],f=l[6],p=l[10];if(Math.abs(d-u)<.01&&Math.abs(h-S)<.01&&Math.abs(_-f)<.01){if(Math.abs(d+u)<.1&&Math.abs(h+S)<.1&&Math.abs(_+f)<.1&&Math.abs(o+m+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const T=(o+1)/2,v=(m+1)/2,b=(p+1)/2,R=(d+u)/4,A=(h+S)/4,g=(_+f)/4;return T>v&&T>b?T<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(T),r=R/i,s=A/i):v>b?v<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),i=R/r,s=g/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=A/s,r=g/s),this.set(i,r,s,e),this}let M=Math.sqrt((f-_)*(f-_)+(h-S)*(h-S)+(u-d)*(u-d));return Math.abs(M)<.001&&(M=1),this.x=(f-_)/M,this.y=(h-S)/M,this.z=(u-d)/M,this.w=Math.acos((o+m+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ht(this.x,t.x,e.x),this.y=Ht(this.y,t.y,e.y),this.z=Ht(this.z,t.z,e.z),this.w=Ht(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ht(this.x,t,e),this.y=Ht(this.y,t,e),this.z=Ht(this.z,t,e),this.w=Ht(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ht(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class tf extends Ji{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Re,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new le(0,0,t,e),this.scissorTest=!1,this.viewport=new le(0,0,t,e),this.textures=[];const r={width:t,height:e,depth:i.depth},s=new Ce(r),a=i.count;for(let c=0;c<a;c++)this.textures[c]=s.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:Re,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new No(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mn extends tf{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Kl extends Ce{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Te,this.minFilter=Te,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ef extends Ce{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Te,this.minFilter=Te,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ee{constructor(t,e,i,r,s,a,c,l,o,d,h,u,m,_,S,f){ee.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,c,l,o,d,h,u,m,_,S,f)}set(t,e,i,r,s,a,c,l,o,d,h,u,m,_,S,f){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=c,p[13]=l,p[2]=o,p[6]=d,p[10]=h,p[14]=u,p[3]=m,p[7]=_,p[11]=S,p[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ee().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,i=t.elements,r=1/Ei.setFromMatrixColumn(t,0).length(),s=1/Ei.setFromMatrixColumn(t,1).length(),a=1/Ei.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,a=Math.cos(i),c=Math.sin(i),l=Math.cos(r),o=Math.sin(r),d=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const u=a*d,m=a*h,_=c*d,S=c*h;e[0]=l*d,e[4]=-l*h,e[8]=o,e[1]=m+_*o,e[5]=u-S*o,e[9]=-c*l,e[2]=S-u*o,e[6]=_+m*o,e[10]=a*l}else if(t.order==="YXZ"){const u=l*d,m=l*h,_=o*d,S=o*h;e[0]=u+S*c,e[4]=_*c-m,e[8]=a*o,e[1]=a*h,e[5]=a*d,e[9]=-c,e[2]=m*c-_,e[6]=S+u*c,e[10]=a*l}else if(t.order==="ZXY"){const u=l*d,m=l*h,_=o*d,S=o*h;e[0]=u-S*c,e[4]=-a*h,e[8]=_+m*c,e[1]=m+_*c,e[5]=a*d,e[9]=S-u*c,e[2]=-a*o,e[6]=c,e[10]=a*l}else if(t.order==="ZYX"){const u=a*d,m=a*h,_=c*d,S=c*h;e[0]=l*d,e[4]=_*o-m,e[8]=u*o+S,e[1]=l*h,e[5]=S*o+u,e[9]=m*o-_,e[2]=-o,e[6]=c*l,e[10]=a*l}else if(t.order==="YZX"){const u=a*l,m=a*o,_=c*l,S=c*o;e[0]=l*d,e[4]=S-u*h,e[8]=_*h+m,e[1]=h,e[5]=a*d,e[9]=-c*d,e[2]=-o*d,e[6]=m*h+_,e[10]=u-S*h}else if(t.order==="XZY"){const u=a*l,m=a*o,_=c*l,S=c*o;e[0]=l*d,e[4]=-h,e[8]=o*d,e[1]=u*h+S,e[5]=a*d,e[9]=m*h-_,e[2]=_*h-m,e[6]=c*d,e[10]=S*h+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(nf,t,rf)}lookAt(t,e,i){const r=this.elements;return ze.subVectors(t,e),ze.lengthSq()===0&&(ze.z=1),ze.normalize(),zn.crossVectors(i,ze),zn.lengthSq()===0&&(Math.abs(i.z)===1?ze.x+=1e-4:ze.z+=1e-4,ze.normalize(),zn.crossVectors(i,ze)),zn.normalize(),Br.crossVectors(ze,zn),r[0]=zn.x,r[4]=Br.x,r[8]=ze.x,r[1]=zn.y,r[5]=Br.y,r[9]=ze.y,r[2]=zn.z,r[6]=Br.z,r[10]=ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],c=i[4],l=i[8],o=i[12],d=i[1],h=i[5],u=i[9],m=i[13],_=i[2],S=i[6],f=i[10],p=i[14],M=i[3],T=i[7],v=i[11],b=i[15],R=r[0],A=r[4],g=r[8],E=r[12],z=r[1],C=r[5],I=r[9],B=r[13],N=r[2],k=r[6],H=r[10],O=r[14],Q=r[3],j=r[7],lt=r[11],pt=r[15];return s[0]=a*R+c*z+l*N+o*Q,s[4]=a*A+c*C+l*k+o*j,s[8]=a*g+c*I+l*H+o*lt,s[12]=a*E+c*B+l*O+o*pt,s[1]=d*R+h*z+u*N+m*Q,s[5]=d*A+h*C+u*k+m*j,s[9]=d*g+h*I+u*H+m*lt,s[13]=d*E+h*B+u*O+m*pt,s[2]=_*R+S*z+f*N+p*Q,s[6]=_*A+S*C+f*k+p*j,s[10]=_*g+S*I+f*H+p*lt,s[14]=_*E+S*B+f*O+p*pt,s[3]=M*R+T*z+v*N+b*Q,s[7]=M*A+T*C+v*k+b*j,s[11]=M*g+T*I+v*H+b*lt,s[15]=M*E+T*B+v*O+b*pt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],a=t[1],c=t[5],l=t[9],o=t[13],d=t[2],h=t[6],u=t[10],m=t[14],_=t[3],S=t[7],f=t[11],p=t[15],M=l*m-o*u,T=c*m-o*h,v=c*u-l*h,b=a*m-o*d,R=a*u-l*d,A=a*h-c*d;return e*(S*M-f*T+p*v)-i*(_*M-f*b+p*R)+r*(_*T-S*b+p*A)-s*(_*v-S*R+f*A)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],c=t[5],l=t[6],o=t[7],d=t[8],h=t[9],u=t[10],m=t[11],_=t[12],S=t[13],f=t[14],p=t[15],M=e*c-i*a,T=e*l-r*a,v=e*o-s*a,b=i*l-r*c,R=i*o-s*c,A=r*o-s*l,g=d*S-h*_,E=d*f-u*_,z=d*p-m*_,C=h*f-u*S,I=h*p-m*S,B=u*p-m*f,N=M*B-T*I+v*C+b*z-R*E+A*g;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/N;return t[0]=(c*B-l*I+o*C)*k,t[1]=(r*I-i*B-s*C)*k,t[2]=(S*A-f*R+p*b)*k,t[3]=(u*R-h*A-m*b)*k,t[4]=(l*z-a*B-o*E)*k,t[5]=(e*B-r*z+s*E)*k,t[6]=(f*v-_*A-p*T)*k,t[7]=(d*A-u*v+m*T)*k,t[8]=(a*I-c*z+o*g)*k,t[9]=(i*z-e*I-s*g)*k,t[10]=(_*R-S*v+p*M)*k,t[11]=(h*v-d*R-m*M)*k,t[12]=(c*E-a*C-l*g)*k,t[13]=(e*C-i*E+r*g)*k,t[14]=(S*T-_*b-f*M)*k,t[15]=(d*b-h*T+u*M)*k,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,a=t.x,c=t.y,l=t.z,o=s*a,d=s*c;return this.set(o*a+i,o*c-r*l,o*l+r*c,0,o*c+r*l,d*c+i,d*l-r*a,0,o*l-r*c,d*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,a){return this.set(1,i,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,a=e._y,c=e._z,l=e._w,o=s+s,d=a+a,h=c+c,u=s*o,m=s*d,_=s*h,S=a*d,f=a*h,p=c*h,M=l*o,T=l*d,v=l*h,b=i.x,R=i.y,A=i.z;return r[0]=(1-(S+p))*b,r[1]=(m+v)*b,r[2]=(_-T)*b,r[3]=0,r[4]=(m-v)*R,r[5]=(1-(u+p))*R,r[6]=(f+M)*R,r[7]=0,r[8]=(_+T)*A,r[9]=(f-M)*A,r[10]=(1-(u+S))*A,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),e.identity(),this;let a=Ei.set(r[0],r[1],r[2]).length();const c=Ei.set(r[4],r[5],r[6]).length(),l=Ei.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Je.copy(this);const o=1/a,d=1/c,h=1/l;return Je.elements[0]*=o,Je.elements[1]*=o,Je.elements[2]*=o,Je.elements[4]*=d,Je.elements[5]*=d,Je.elements[6]*=d,Je.elements[8]*=h,Je.elements[9]*=h,Je.elements[10]*=h,e.setFromRotationMatrix(Je),i.x=a,i.y=c,i.z=l,this}makePerspective(t,e,i,r,s,a,c=fn,l=!1){const o=this.elements,d=2*s/(e-t),h=2*s/(i-r),u=(e+t)/(e-t),m=(i+r)/(i-r);let _,S;if(l)_=s/(a-s),S=a*s/(a-s);else if(c===fn)_=-(a+s)/(a-s),S=-2*a*s/(a-s);else if(c===wr)_=-a/(a-s),S=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return o[0]=d,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=h,o[9]=m,o[13]=0,o[2]=0,o[6]=0,o[10]=_,o[14]=S,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(t,e,i,r,s,a,c=fn,l=!1){const o=this.elements,d=2/(e-t),h=2/(i-r),u=-(e+t)/(e-t),m=-(i+r)/(i-r);let _,S;if(l)_=1/(a-s),S=a/(a-s);else if(c===fn)_=-2/(a-s),S=-(a+s)/(a-s);else if(c===wr)_=-1/(a-s),S=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return o[0]=d,o[4]=0,o[8]=0,o[12]=u,o[1]=0,o[5]=h,o[9]=0,o[13]=m,o[2]=0,o[6]=0,o[10]=_,o[14]=S,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Ei=new F,Je=new ee,nf=new F(0,0,0),rf=new F(1,1,1),zn=new F,Br=new F,ze=new F,yc=new ee,Ec=new Qi;class _n{constructor(t=0,e=0,i=0,r=_n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],a=r[4],c=r[8],l=r[1],o=r[5],d=r[9],h=r[2],u=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin(Ht(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,o),this._z=0);break;case"YXZ":this._x=Math.asin(-Ht(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(c,m),this._z=Math.atan2(l,o)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ht(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,o)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ht(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,o));break;case"YZX":this._z=Math.asin(Ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,o),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(c,m));break;case"XZY":this._z=Math.asin(-Ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,o),this._y=Math.atan2(c,s)):(this._x=Math.atan2(-d,m),this._y=0);break;default:wt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return yc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(yc,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ec.setFromEuler(this),this.setFromQuaternion(Ec,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_n.DEFAULT_ORDER="XYZ";class Fo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let sf=0;const Tc=new F,Ti=new Qi,En=new ee,zr=new F,sr=new F,af=new F,of=new Qi,bc=new F(1,0,0),Ac=new F(0,1,0),wc=new F(0,0,1),Rc={type:"added"},cf={type:"removed"},bi={type:"childadded",child:null},Zs={type:"childremoved",child:null};class ue extends Ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sf++}),this.uuid=Dn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ue.DEFAULT_UP.clone();const t=new F,e=new _n,i=new Qi,r=new F(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ee},normalMatrix:{value:new Ut}}),this.matrix=new ee,this.matrixWorld=new ee,this.matrixAutoUpdate=ue.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ti.setFromAxisAngle(t,e),this.quaternion.multiply(Ti),this}rotateOnWorldAxis(t,e){return Ti.setFromAxisAngle(t,e),this.quaternion.premultiply(Ti),this}rotateX(t){return this.rotateOnAxis(bc,t)}rotateY(t){return this.rotateOnAxis(Ac,t)}rotateZ(t){return this.rotateOnAxis(wc,t)}translateOnAxis(t,e){return Tc.copy(t).applyQuaternion(this.quaternion),this.position.add(Tc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(bc,t)}translateY(t){return this.translateOnAxis(Ac,t)}translateZ(t){return this.translateOnAxis(wc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(En.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?zr.copy(t):zr.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),sr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?En.lookAt(sr,zr,this.up):En.lookAt(zr,sr,this.up),this.quaternion.setFromRotationMatrix(En),r&&(En.extractRotation(r.matrixWorld),Ti.setFromRotationMatrix(En),this.quaternion.premultiply(Ti.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Wt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Rc),bi.child=t,this.dispatchEvent(bi),bi.child=null):Wt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(cf),Zs.child=t,this.dispatchEvent(Zs),Zs.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),En.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),En.multiply(t.parent.matrixWorld)),t.applyMatrix4(En),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Rc),bi.child=t,this.dispatchEvent(bi),bi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sr,t,af),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sr,of,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,r=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*i-s[8]*r,s[13]+=i-s[1]*e-s[5]*i-s[9]*r,s[14]+=r-s[2]*e-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(c=>({...c,boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(c=>({...c})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(c,l){return c[l.uuid]===void 0&&(c[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const l=c.shapes;if(Array.isArray(l))for(let o=0,d=l.length;o<d;o++){const h=l[o];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let l=0,o=this.material.length;l<o;l++)c.push(s(t.materials,this.material[l]));r.material=c}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let c=0;c<this.children.length;c++)r.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let c=0;c<this.animations.length;c++){const l=this.animations[c];r.animations.push(s(t.animations,l))}}if(e){const c=a(t.geometries),l=a(t.materials),o=a(t.textures),d=a(t.images),h=a(t.shapes),u=a(t.skeletons),m=a(t.animations),_=a(t.nodes);c.length>0&&(i.geometries=c),l.length>0&&(i.materials=l),o.length>0&&(i.textures=o),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),u.length>0&&(i.skeletons=u),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(c){const l=[];for(const o in c){const d=c[o];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}ue.DEFAULT_UP=new F(0,1,0);ue.DEFAULT_MATRIX_AUTO_UPDATE=!0;ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class an extends ue{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lf={type:"move"};class Ks{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new an,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new an,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new an,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,a=null;const c=this._targetRay,l=this._grip,o=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(o&&t.hand){a=!0;for(const S of t.hand.values()){const f=e.getJointPose(S,i),p=this._getHandJoint(o,S);f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=f.radius),p.visible=f!==null}const d=o.joints["index-finger-tip"],h=o.joints["thumb-tip"],u=d.position.distanceTo(h.position),m=.02,_=.005;o.inputState.pinching&&u>m+_?(o.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!o.inputState.pinching&&u<=m-_&&(o.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));c!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(lf)))}return c!==null&&(c.visible=r!==null),l!==null&&(l.visible=s!==null),o!==null&&(o.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new an;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const jl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kn={h:0,s:0,l:0},kr={h:0,s:0,l:0};function js(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Bt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Fe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,r=qt.workingColorSpace){return this.r=t,this.g=e,this.b=i,qt.colorSpaceToWorking(this,r),this}setHSL(t,e,i,r=qt.workingColorSpace){if(t=Uo(t,1),e=Ht(e,0,1),i=Ht(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=js(a,s,t+1/3),this.g=js(a,s,t),this.b=js(a,s,t-1/3)}return qt.colorSpaceToWorking(this,r),this}setStyle(t,e=Fe){function i(s){s!==void 0&&parseFloat(s)<1&&wt("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],c=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:wt("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);wt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Fe){const i=jl[t.toLowerCase()];return i!==void 0?this.setHex(i,e):wt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ln(t.r),this.g=Ln(t.g),this.b=Ln(t.b),this}copyLinearToSRGB(t){return this.r=Hi(t.r),this.g=Hi(t.g),this.b=Hi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Fe){return qt.workingToColorSpace(we.copy(this),t),Math.round(Ht(we.r*255,0,255))*65536+Math.round(Ht(we.g*255,0,255))*256+Math.round(Ht(we.b*255,0,255))}getHexString(t=Fe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.workingToColorSpace(we.copy(this),e);const i=we.r,r=we.g,s=we.b,a=Math.max(i,r,s),c=Math.min(i,r,s);let l,o;const d=(c+a)/2;if(c===a)l=0,o=0;else{const h=a-c;switch(o=d<=.5?h/(a+c):h/(2-a-c),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return t.h=l,t.s=o,t.l=d,t}getRGB(t,e=qt.workingColorSpace){return qt.workingToColorSpace(we.copy(this),e),t.r=we.r,t.g=we.g,t.b=we.b,t}getStyle(t=Fe){qt.workingToColorSpace(we.copy(this),t);const e=we.r,i=we.g,r=we.b;return t!==Fe?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(kn),this.setHSL(kn.h+t,kn.s+e,kn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(kn),t.getHSL(kr);const i=Er(kn.h,kr.h,e),r=Er(kn.s,kr.s,e),s=Er(kn.l,kr.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const we=new Bt;Bt.NAMES=jl;class Oo{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Bt(t),this.density=e}clone(){return new Oo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class uf extends ue{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _n,this.environmentIntensity=1,this.environmentRotation=new _n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Qe=new F,Tn=new F,$s=new F,bn=new F,Ai=new F,wi=new F,Cc=new F,Js=new F,Qs=new F,ta=new F,ea=new le,na=new le,ia=new le;class Ye{constructor(t=new F,e=new F,i=new F){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),Qe.subVectors(t,e),r.cross(Qe);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){Qe.subVectors(r,e),Tn.subVectors(i,e),$s.subVectors(t,e);const a=Qe.dot(Qe),c=Qe.dot(Tn),l=Qe.dot($s),o=Tn.dot(Tn),d=Tn.dot($s),h=a*o-c*c;if(h===0)return s.set(0,0,0),null;const u=1/h,m=(o*l-c*d)*u,_=(a*d-c*l)*u;return s.set(1-m-_,_,m)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,bn)===null?!1:bn.x>=0&&bn.y>=0&&bn.x+bn.y<=1}static getInterpolation(t,e,i,r,s,a,c,l){return this.getBarycoord(t,e,i,r,bn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,bn.x),l.addScaledVector(a,bn.y),l.addScaledVector(c,bn.z),l)}static getInterpolatedAttribute(t,e,i,r,s,a){return ea.setScalar(0),na.setScalar(0),ia.setScalar(0),ea.fromBufferAttribute(t,e),na.fromBufferAttribute(t,i),ia.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(ea,s.x),a.addScaledVector(na,s.y),a.addScaledVector(ia,s.z),a}static isFrontFacing(t,e,i,r){return Qe.subVectors(i,e),Tn.subVectors(t,e),Qe.cross(Tn).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Qe.subVectors(this.c,this.b),Tn.subVectors(this.a,this.b),Qe.cross(Tn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ye.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ye.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return Ye.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return Ye.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ye.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let a,c;Ai.subVectors(r,i),wi.subVectors(s,i),Js.subVectors(t,i);const l=Ai.dot(Js),o=wi.dot(Js);if(l<=0&&o<=0)return e.copy(i);Qs.subVectors(t,r);const d=Ai.dot(Qs),h=wi.dot(Qs);if(d>=0&&h<=d)return e.copy(r);const u=l*h-d*o;if(u<=0&&l>=0&&d<=0)return a=l/(l-d),e.copy(i).addScaledVector(Ai,a);ta.subVectors(t,s);const m=Ai.dot(ta),_=wi.dot(ta);if(_>=0&&m<=_)return e.copy(s);const S=m*o-l*_;if(S<=0&&o>=0&&_<=0)return c=o/(o-_),e.copy(i).addScaledVector(wi,c);const f=d*_-m*h;if(f<=0&&h-d>=0&&m-_>=0)return Cc.subVectors(s,r),c=(h-d)/(h-d+(m-_)),e.copy(r).addScaledVector(Cc,c);const p=1/(f+S+u);return a=S*p,c=u*p,e.copy(i).addScaledVector(Ai,a).addScaledVector(wi,c)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class mi{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(tn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(tn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=tn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,c=s.count;a<c;a++)t.isMesh===!0?t.getVertexPosition(a,tn):tn.fromBufferAttribute(s,a),tn.applyMatrix4(t.matrixWorld),this.expandByPoint(tn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Vr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Vr.copy(i.boundingBox)),Vr.applyMatrix4(t.matrixWorld),this.union(Vr)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,tn),tn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ar),Gr.subVectors(this.max,ar),Ri.subVectors(t.a,ar),Ci.subVectors(t.b,ar),Pi.subVectors(t.c,ar),Vn.subVectors(Ci,Ri),Gn.subVectors(Pi,Ci),ei.subVectors(Ri,Pi);let e=[0,-Vn.z,Vn.y,0,-Gn.z,Gn.y,0,-ei.z,ei.y,Vn.z,0,-Vn.x,Gn.z,0,-Gn.x,ei.z,0,-ei.x,-Vn.y,Vn.x,0,-Gn.y,Gn.x,0,-ei.y,ei.x,0];return!ra(e,Ri,Ci,Pi,Gr)||(e=[1,0,0,0,1,0,0,0,1],!ra(e,Ri,Ci,Pi,Gr))?!1:(Hr.crossVectors(Vn,Gn),e=[Hr.x,Hr.y,Hr.z],ra(e,Ri,Ci,Pi,Gr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,tn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(tn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(An[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),An[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),An[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),An[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),An[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),An[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),An[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),An[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(An),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const An=[new F,new F,new F,new F,new F,new F,new F,new F],tn=new F,Vr=new mi,Ri=new F,Ci=new F,Pi=new F,Vn=new F,Gn=new F,ei=new F,ar=new F,Gr=new F,Hr=new F,ni=new F;function ra(n,t,e,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){ni.fromArray(n,s);const c=r.x*Math.abs(ni.x)+r.y*Math.abs(ni.y)+r.z*Math.abs(ni.z),l=t.dot(ni),o=e.dot(ni),d=i.dot(ni);if(Math.max(-Math.max(l,o,d),Math.min(l,o,d))>c)return!1}return!0}const me=new F,Wr=new Lt;let hf=0;class Ke{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=po,this.updateRanges=[],this.gpuType=rn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Wr.fromBufferAttribute(this,e),Wr.applyMatrix3(t),this.setXY(e,Wr.x,Wr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)me.fromBufferAttribute(this,e),me.applyMatrix3(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)me.fromBufferAttribute(this,e),me.applyMatrix4(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)me.fromBufferAttribute(this,e),me.applyNormalMatrix(t),this.setXYZ(e,me.x,me.y,me.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)me.fromBufferAttribute(this,e),me.transformDirection(t),this.setXYZ(e,me.x,me.y,me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=nn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Jt(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=nn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=nn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=nn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=nn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),i=Jt(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),i=Jt(i,this.array),r=Jt(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),i=Jt(i,this.array),r=Jt(r,this.array),s=Jt(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==po&&(t.usage=this.usage),t}}class $l extends Ke{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Jl extends Ke{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class he extends Ke{constructor(t,e,i){super(new Float32Array(t),e,i)}}const ff=new mi,or=new F,sa=new F;class tr{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):ff.setFromPoints(t).getCenter(i);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;or.subVectors(t,this.center);const e=or.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(or,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(sa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(or.copy(t.center).add(sa)),this.expandByPoint(or.copy(t.center).sub(sa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let df=0;const We=new ee,aa=new ue,Di=new F,ke=new mi,cr=new mi,ye=new F;class Pe extends Ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:df++}),this.uuid=Dn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ch(t)?Jl:$l)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ut().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return We.makeRotationFromQuaternion(t),this.applyMatrix4(We),this}rotateX(t){return We.makeRotationX(t),this.applyMatrix4(We),this}rotateY(t){return We.makeRotationY(t),this.applyMatrix4(We),this}rotateZ(t){return We.makeRotationZ(t),this.applyMatrix4(We),this}translate(t,e,i){return We.makeTranslation(t,e,i),this.applyMatrix4(We),this}scale(t,e,i){return We.makeScale(t,e,i),this.applyMatrix4(We),this}lookAt(t){return aa.lookAt(t),aa.updateMatrix(),this.applyMatrix4(aa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Di).negate(),this.translate(Di.x,Di.y,Di.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new he(i,3))}else{const i=Math.min(t.length,e.count);for(let r=0;r<i;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&wt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Wt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];ke.setFromBufferAttribute(s),this.morphTargetsRelative?(ye.addVectors(this.boundingBox.min,ke.min),this.boundingBox.expandByPoint(ye),ye.addVectors(this.boundingBox.max,ke.max),this.boundingBox.expandByPoint(ye)):(this.boundingBox.expandByPoint(ke.min),this.boundingBox.expandByPoint(ke.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Wt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Wt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){const i=this.boundingSphere.center;if(ke.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const c=e[s];cr.setFromBufferAttribute(c),this.morphTargetsRelative?(ye.addVectors(ke.min,cr.min),ke.expandByPoint(ye),ye.addVectors(ke.max,cr.max),ke.expandByPoint(ye)):(ke.expandByPoint(cr.min),ke.expandByPoint(cr.max))}ke.getCenter(i);let r=0;for(let s=0,a=t.count;s<a;s++)ye.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(ye));if(e)for(let s=0,a=e.length;s<a;s++){const c=e[s],l=this.morphTargetsRelative;for(let o=0,d=c.count;o<d;o++)ye.fromBufferAttribute(c,o),l&&(Di.fromBufferAttribute(t,o),ye.add(Di)),r=Math.max(r,i.distanceToSquared(ye))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Wt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Wt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ke(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),c=[],l=[];for(let g=0;g<i.count;g++)c[g]=new F,l[g]=new F;const o=new F,d=new F,h=new F,u=new Lt,m=new Lt,_=new Lt,S=new F,f=new F;function p(g,E,z){o.fromBufferAttribute(i,g),d.fromBufferAttribute(i,E),h.fromBufferAttribute(i,z),u.fromBufferAttribute(s,g),m.fromBufferAttribute(s,E),_.fromBufferAttribute(s,z),d.sub(o),h.sub(o),m.sub(u),_.sub(u);const C=1/(m.x*_.y-_.x*m.y);isFinite(C)&&(S.copy(d).multiplyScalar(_.y).addScaledVector(h,-m.y).multiplyScalar(C),f.copy(h).multiplyScalar(m.x).addScaledVector(d,-_.x).multiplyScalar(C),c[g].add(S),c[E].add(S),c[z].add(S),l[g].add(f),l[E].add(f),l[z].add(f))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let g=0,E=M.length;g<E;++g){const z=M[g],C=z.start,I=z.count;for(let B=C,N=C+I;B<N;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const T=new F,v=new F,b=new F,R=new F;function A(g){b.fromBufferAttribute(r,g),R.copy(b);const E=c[g];T.copy(E),T.sub(b.multiplyScalar(b.dot(E))).normalize(),v.crossVectors(R,E);const C=v.dot(l[g])<0?-1:1;a.setXYZW(g,T.x,T.y,T.z,C)}for(let g=0,E=M.length;g<E;++g){const z=M[g],C=z.start,I=z.count;for(let B=C,N=C+I;B<N;B+=3)A(t.getX(B+0)),A(t.getX(B+1)),A(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ke(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,m=i.count;u<m;u++)i.setXYZ(u,0,0,0);const r=new F,s=new F,a=new F,c=new F,l=new F,o=new F,d=new F,h=new F;if(t)for(let u=0,m=t.count;u<m;u+=3){const _=t.getX(u+0),S=t.getX(u+1),f=t.getX(u+2);r.fromBufferAttribute(e,_),s.fromBufferAttribute(e,S),a.fromBufferAttribute(e,f),d.subVectors(a,s),h.subVectors(r,s),d.cross(h),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,S),o.fromBufferAttribute(i,f),c.add(d),l.add(d),o.add(d),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(f,o.x,o.y,o.z)}else for(let u=0,m=e.count;u<m;u+=3)r.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),d.subVectors(a,s),h.subVectors(r,s),d.cross(h),i.setXYZ(u+0,d.x,d.y,d.z),i.setXYZ(u+1,d.x,d.y,d.z),i.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ye.fromBufferAttribute(t,e),ye.normalize(),t.setXYZ(e,ye.x,ye.y,ye.z)}toNonIndexed(){function t(c,l){const o=c.array,d=c.itemSize,h=c.normalized,u=new o.constructor(l.length*d);let m=0,_=0;for(let S=0,f=l.length;S<f;S++){c.isInterleavedBufferAttribute?m=l[S]*c.data.stride+c.offset:m=l[S]*d;for(let p=0;p<d;p++)u[_++]=o[m++]}return new Ke(u,d,h)}if(this.index===null)return wt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Pe,i=this.index.array,r=this.attributes;for(const c in r){const l=r[c],o=t(l,i);e.setAttribute(c,o)}const s=this.morphAttributes;for(const c in s){const l=[],o=s[c];for(let d=0,h=o.length;d<h;d++){const u=o[d],m=t(u,i);l.push(m)}e.morphAttributes[c]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let c=0,l=a.length;c<l;c++){const o=a[c];e.addGroup(o.start,o.count,o.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const o in l)l[o]!==void 0&&(t[o]=l[o]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const o=i[l];t.data.attributes[l]=o.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const o=this.morphAttributes[l],d=[];for(let h=0,u=o.length;h<u;h++){const m=o[h];d.push(m.toJSON(t.data))}d.length>0&&(r[l]=d,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const c=this.boundingSphere;return c!==null&&(t.data.boundingSphere=c.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const r=t.attributes;for(const o in r){const d=r[o];this.setAttribute(o,d.clone(e))}const s=t.morphAttributes;for(const o in s){const d=[],h=s[o];for(let u=0,m=h.length;u<m;u++)d.push(h[u].clone(e));this.morphAttributes[o]=d}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let o=0,d=a.length;o<d;o++){const h=a[o];this.addGroup(h.start,h.count,h.materialIndex)}const c=t.boundingBox;c!==null&&(this.boundingBox=c.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pf{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=po,this.updateRanges=[],this.version=0,this.uuid=Dn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[i+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Dn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Dn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const De=new F;class Cs{constructor(t,e,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)De.fromBufferAttribute(this,e),De.applyMatrix4(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)De.fromBufferAttribute(this,e),De.applyNormalMatrix(t),this.setXYZ(e,De.x,De.y,De.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)De.fromBufferAttribute(this,e),De.transformDirection(t),this.setXYZ(e,De.x,De.y,De.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=nn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Jt(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=nn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=nn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=nn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=nn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jt(e,this.array),i=Jt(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jt(e,this.array),i=Jt(i,this.array),r=Jt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jt(e,this.array),i=Jt(i,this.array),r=Jt(r,this.array),s=Jt(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){ws("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new Ke(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Cs(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){ws("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let mf=0;class gi extends Ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mf++}),this.uuid=Dn(),this.name="",this.type="Material",this.blending=Gi,this.side=jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ta,this.blendDst=ba,this.blendEquation=oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=Xi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Si,this.stencilZFail=Si,this.stencilZPass=Si,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){wt(`Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){wt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Gi&&(i.blending=this.blending),this.side!==jn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ta&&(i.blendSrc=this.blendSrc),this.blendDst!==ba&&(i.blendDst=this.blendDst),this.blendEquation!==oi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Xi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Si&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Si&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Si&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const c in s){const l=s[c];delete l.metadata,a.push(l)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ql extends gi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Bt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Li;const lr=new F,Ii=new F,Ui=new F,Ni=new Lt,ur=new Lt,tu=new ee,Xr=new F,hr=new F,qr=new F,Pc=new Lt,oa=new Lt,Dc=new Lt;class eu extends ue{constructor(t=new Ql){if(super(),this.isSprite=!0,this.type="Sprite",Li===void 0){Li=new Pe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new pf(e,5);Li.setIndex([0,1,2,0,2,3]),Li.setAttribute("position",new Cs(i,3,0,!1)),Li.setAttribute("uv",new Cs(i,2,3,!1))}this.geometry=Li,this.material=t,this.center=new Lt(.5,.5),this.count=1}raycast(t,e){t.camera===null&&Wt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ii.setFromMatrixScale(this.matrixWorld),tu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ui.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ii.multiplyScalar(-Ui.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const a=this.center;Yr(Xr.set(-.5,-.5,0),Ui,a,Ii,r,s),Yr(hr.set(.5,-.5,0),Ui,a,Ii,r,s),Yr(qr.set(.5,.5,0),Ui,a,Ii,r,s),Pc.set(0,0),oa.set(1,0),Dc.set(1,1);let c=t.ray.intersectTriangle(Xr,hr,qr,!1,lr);if(c===null&&(Yr(hr.set(-.5,.5,0),Ui,a,Ii,r,s),oa.set(0,1),c=t.ray.intersectTriangle(Xr,qr,hr,!1,lr),c===null))return;const l=t.ray.origin.distanceTo(lr);l<t.near||l>t.far||e.push({distance:l,point:lr.clone(),uv:Ye.getInterpolation(lr,Xr,hr,qr,Pc,oa,Dc,new Lt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Yr(n,t,e,i,r,s){Ni.subVectors(n,e).addScalar(.5).multiply(i),r!==void 0?(ur.x=s*Ni.x-r*Ni.y,ur.y=r*Ni.x+s*Ni.y):ur.copy(Ni),n.copy(t),n.x+=ur.x,n.y+=ur.y,n.applyMatrix4(tu)}const wn=new F,ca=new F,Zr=new F,Hn=new F,la=new F,Kr=new F,ua=new F;class Bo{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,wn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=wn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(wn.copy(this.origin).addScaledVector(this.direction,e),wn.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){ca.copy(t).add(e).multiplyScalar(.5),Zr.copy(e).sub(t).normalize(),Hn.copy(this.origin).sub(ca);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Zr),c=Hn.dot(this.direction),l=-Hn.dot(Zr),o=Hn.lengthSq(),d=Math.abs(1-a*a);let h,u,m,_;if(d>0)if(h=a*l-c,u=a*c-l,_=s*d,h>=0)if(u>=-_)if(u<=_){const S=1/d;h*=S,u*=S,m=h*(h+a*u+2*c)+u*(a*h+u+2*l)+o}else u=s,h=Math.max(0,-(a*u+c)),m=-h*h+u*(u+2*l)+o;else u=-s,h=Math.max(0,-(a*u+c)),m=-h*h+u*(u+2*l)+o;else u<=-_?(h=Math.max(0,-(-a*s+c)),u=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+u*(u+2*l)+o):u<=_?(h=0,u=Math.min(Math.max(-s,-l),s),m=u*(u+2*l)+o):(h=Math.max(0,-(a*s+c)),u=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+u*(u+2*l)+o);else u=a>0?-s:s,h=Math.max(0,-(a*u+c)),m=-h*h+u*(u+2*l)+o;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(ca).addScaledVector(Zr,u),m}intersectSphere(t,e){wn.subVectors(t.center,this.origin);const i=wn.dot(this.direction),r=wn.dot(wn)-i*i,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),c=i-a,l=i+a;return l<0?null:c<0?this.at(l,e):this.at(c,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,a,c,l;const o=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,u=this.origin;return o>=0?(i=(t.min.x-u.x)*o,r=(t.max.x-u.x)*o):(i=(t.max.x-u.x)*o,r=(t.min.x-u.x)*o),d>=0?(s=(t.min.y-u.y)*d,a=(t.max.y-u.y)*d):(s=(t.max.y-u.y)*d,a=(t.min.y-u.y)*d),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(c=(t.min.z-u.z)*h,l=(t.max.z-u.z)*h):(c=(t.max.z-u.z)*h,l=(t.min.z-u.z)*h),i>l||c>r)||((c>i||i!==i)&&(i=c),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,wn)!==null}intersectTriangle(t,e,i,r,s){la.subVectors(e,t),Kr.subVectors(i,t),ua.crossVectors(la,Kr);let a=this.direction.dot(ua),c;if(a>0){if(r)return null;c=1}else if(a<0)c=-1,a=-a;else return null;Hn.subVectors(this.origin,t);const l=c*this.direction.dot(Kr.crossVectors(Hn,Kr));if(l<0)return null;const o=c*this.direction.dot(la.cross(Hn));if(o<0||l+o>a)return null;const d=-c*Hn.dot(ua);return d<0?null:this.at(d/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Pr extends gi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.combine=To,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Lc=new ee,ii=new Bo,jr=new tr,Ic=new F,$r=new F,Jr=new F,Qr=new F,ha=new F,ts=new F,Uc=new F,es=new F;class _e extends ue{constructor(t=new Pe,e=new Pr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const c=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const c=this.morphTargetInfluences;if(s&&c){ts.set(0,0,0);for(let l=0,o=s.length;l<o;l++){const d=c[l],h=s[l];d!==0&&(ha.fromBufferAttribute(h,t),a?ts.addScaledVector(ha,d):ts.addScaledVector(ha.sub(e),d))}e.add(ts)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),jr.copy(i.boundingSphere),jr.applyMatrix4(s),ii.copy(t.ray).recast(t.near),!(jr.containsPoint(ii.origin)===!1&&(ii.intersectSphere(jr,Ic)===null||ii.origin.distanceToSquared(Ic)>(t.far-t.near)**2))&&(Lc.copy(s).invert(),ii.copy(t.ray).applyMatrix4(Lc),!(i.boundingBox!==null&&ii.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ii)))}_computeIntersections(t,e,i){let r;const s=this.geometry,a=this.material,c=s.index,l=s.attributes.position,o=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,u=s.groups,m=s.drawRange;if(c!==null)if(Array.isArray(a))for(let _=0,S=u.length;_<S;_++){const f=u[_],p=a[f.materialIndex],M=Math.max(f.start,m.start),T=Math.min(c.count,Math.min(f.start+f.count,m.start+m.count));for(let v=M,b=T;v<b;v+=3){const R=c.getX(v),A=c.getX(v+1),g=c.getX(v+2);r=ns(this,p,t,i,o,d,h,R,A,g),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=f.materialIndex,e.push(r))}}else{const _=Math.max(0,m.start),S=Math.min(c.count,m.start+m.count);for(let f=_,p=S;f<p;f+=3){const M=c.getX(f),T=c.getX(f+1),v=c.getX(f+2);r=ns(this,a,t,i,o,d,h,M,T,v),r&&(r.faceIndex=Math.floor(f/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,S=u.length;_<S;_++){const f=u[_],p=a[f.materialIndex],M=Math.max(f.start,m.start),T=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let v=M,b=T;v<b;v+=3){const R=v,A=v+1,g=v+2;r=ns(this,p,t,i,o,d,h,R,A,g),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=f.materialIndex,e.push(r))}}else{const _=Math.max(0,m.start),S=Math.min(l.count,m.start+m.count);for(let f=_,p=S;f<p;f+=3){const M=f,T=f+1,v=f+2;r=ns(this,a,t,i,o,d,h,M,T,v),r&&(r.faceIndex=Math.floor(f/3),e.push(r))}}}}function gf(n,t,e,i,r,s,a,c){let l;if(t.side===Oe?l=i.intersectTriangle(a,s,r,!0,c):l=i.intersectTriangle(r,s,a,t.side===jn,c),l===null)return null;es.copy(c),es.applyMatrix4(n.matrixWorld);const o=e.ray.origin.distanceTo(es);return o<e.near||o>e.far?null:{distance:o,point:es.clone(),object:n}}function ns(n,t,e,i,r,s,a,c,l,o){n.getVertexPosition(c,$r),n.getVertexPosition(l,Jr),n.getVertexPosition(o,Qr);const d=gf(n,t,e,i,$r,Jr,Qr,Uc);if(d){const h=new F;Ye.getBarycoord(Uc,$r,Jr,Qr,h),r&&(d.uv=Ye.getInterpolatedAttribute(r,c,l,o,h,new Lt)),s&&(d.uv1=Ye.getInterpolatedAttribute(s,c,l,o,h,new Lt)),a&&(d.normal=Ye.getInterpolatedAttribute(a,c,l,o,h,new F),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const u={a:c,b:l,c:o,normal:new F,materialIndex:0};Ye.getNormal($r,Jr,Qr,u.normal),d.face=u,d.barycoord=h}return d}class nu extends Ce{constructor(t=null,e=1,i=1,r,s,a,c,l,o=Te,d=Te,h,u){super(null,a,c,l,o,d,r,s,h,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nc extends Ke{constructor(t,e,i,r=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Fi=new ee,Fc=new ee,is=[],Oc=new mi,_f=new ee,fr=new _e,dr=new tr;class zo extends _e{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Nc(new Float32Array(i*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,_f)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new mi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Fi),Oc.copy(t.boundingBox).applyMatrix4(Fi),this.boundingBox.union(Oc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new tr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Fi),dr.copy(t.boundingSphere).applyMatrix4(Fi),this.boundingSphere.union(dr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=t.previousInstanceMatrix.clone()),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,a=t*s+1;for(let c=0;c<i.length;c++)i[c]=r[a+c]}raycast(t,e){const i=this.matrixWorld,r=this.count;if(fr.geometry=this.geometry,fr.material=this.material,fr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),dr.copy(this.boundingSphere),dr.applyMatrix4(i),t.ray.intersectsSphere(dr)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Fi),Fc.multiplyMatrices(i,Fi),fr.matrixWorld=Fc,fr.raycast(t,is);for(let a=0,c=is.length;a<c;a++){const l=is[a];l.instanceId=s,l.object=this,e.push(l)}is.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Nc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new nu(new Float32Array(r*this.count),r,this.count,Ro,rn));const s=this.morphTexture.source.data.data;let a=0;for(let o=0;o<i.length;o++)a+=i[o];const c=this.geometry.morphTargetsRelative?1:1-a,l=r*t;s[l]=c,s.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const fa=new F,xf=new F,vf=new Ut;class Xn{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=fa.subVectors(i,e).cross(xf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(fa),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||vf.getNormalMatrix(t),r=this.coplanarPoint(fa).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ri=new tr,Mf=new Lt(.5,.5),rs=new F;class ko{constructor(t=new Xn,e=new Xn,i=new Xn,r=new Xn,s=new Xn,a=new Xn){this.planes=[t,e,i,r,s,a]}set(t,e,i,r,s,a){const c=this.planes;return c[0].copy(t),c[1].copy(e),c[2].copy(i),c[3].copy(r),c[4].copy(s),c[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=fn,i=!1){const r=this.planes,s=t.elements,a=s[0],c=s[1],l=s[2],o=s[3],d=s[4],h=s[5],u=s[6],m=s[7],_=s[8],S=s[9],f=s[10],p=s[11],M=s[12],T=s[13],v=s[14],b=s[15];if(r[0].setComponents(o-a,m-d,p-_,b-M).normalize(),r[1].setComponents(o+a,m+d,p+_,b+M).normalize(),r[2].setComponents(o+c,m+h,p+S,b+T).normalize(),r[3].setComponents(o-c,m-h,p-S,b-T).normalize(),i)r[4].setComponents(l,u,f,v).normalize(),r[5].setComponents(o-l,m-u,p-f,b-v).normalize();else if(r[4].setComponents(o-l,m-u,p-f,b-v).normalize(),e===fn)r[5].setComponents(o+l,m+u,p+f,b+v).normalize();else if(e===wr)r[5].setComponents(l,u,f,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ri.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ri.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ri)}intersectsSprite(t){ri.center.set(0,0,0);const e=Mf.distanceTo(t.center);return ri.radius=.7071067811865476+e,ri.applyMatrix4(t.matrixWorld),this.intersectsSphere(ri)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(rs.x=r.normal.x>0?t.max.x:t.min.x,rs.y=r.normal.y>0?t.max.y:t.min.y,rs.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(rs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class iu extends gi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Bt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ps=new F,Ds=new F,Bc=new ee,pr=new Bo,ss=new tr,da=new F,zc=new F;class Sf extends ue{constructor(t=new Pe,e=new iu){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let r=1,s=e.count;r<s;r++)Ps.fromBufferAttribute(e,r-1),Ds.fromBufferAttribute(e,r),i[r]=i[r-1],i[r]+=Ps.distanceTo(Ds);t.setAttribute("lineDistance",new he(i,1))}else wt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ss.copy(i.boundingSphere),ss.applyMatrix4(r),ss.radius+=s,t.ray.intersectsSphere(ss)===!1)return;Bc.copy(r).invert(),pr.copy(t.ray).applyMatrix4(Bc);const c=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=c*c,o=this.isLineSegments?2:1,d=i.index,u=i.attributes.position;if(d!==null){const m=Math.max(0,a.start),_=Math.min(d.count,a.start+a.count);for(let S=m,f=_-1;S<f;S+=o){const p=d.getX(S),M=d.getX(S+1),T=as(this,t,pr,l,p,M,S);T&&e.push(T)}if(this.isLineLoop){const S=d.getX(_-1),f=d.getX(m),p=as(this,t,pr,l,S,f,_-1);p&&e.push(p)}}else{const m=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let S=m,f=_-1;S<f;S+=o){const p=as(this,t,pr,l,S,S+1,S);p&&e.push(p)}if(this.isLineLoop){const S=as(this,t,pr,l,_-1,m,_-1);S&&e.push(S)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const c=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}}function as(n,t,e,i,r,s,a){const c=n.geometry.attributes.position;if(Ps.fromBufferAttribute(c,r),Ds.fromBufferAttribute(c,s),e.distanceSqToSegment(Ps,Ds,da,zc)>i)return;da.applyMatrix4(n.matrixWorld);const o=t.ray.origin.distanceTo(da);if(!(o<t.near||o>t.far))return{distance:o,point:zc.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const kc=new F,Vc=new F;class yf extends Sf{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let r=0,s=e.count;r<s;r+=2)kc.fromBufferAttribute(e,r),Vc.fromBufferAttribute(e,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+kc.distanceTo(Vc);t.setAttribute("lineDistance",new he(i,1))}else wt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ru extends Ce{constructor(t=[],e=fi,i,r,s,a,c,l,o,d){super(t,e,i,r,s,a,c,l,o,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class su extends Ce{constructor(t,e,i,r,s,a,c,l,o){super(t,e,i,r,s,a,c,l,o),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Rr extends Ce{constructor(t,e,i=gn,r,s,a,c=Te,l=Te,o,d=Nn,h=1){if(d!==Nn&&d!==ui)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:h};super(u,r,s,a,c,l,d,i,o),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new No(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Ef extends Rr{constructor(t,e=gn,i=fi,r,s,a=Te,c=Te,l,o=Nn){const d={width:t,height:t,depth:1},h=[d,d,d,d,d,d];super(t,t,e,i,r,s,a,c,l,o),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class au extends Ce{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class er extends Pe{constructor(t=1,e=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const c=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],o=[],d=[],h=[];let u=0,m=0;_("z","y","x",-1,-1,i,e,t,a,s,0),_("z","y","x",1,-1,i,e,-t,a,s,1),_("x","z","y",1,1,t,i,e,r,a,2),_("x","z","y",1,-1,t,i,-e,r,a,3),_("x","y","z",1,-1,t,e,i,r,s,4),_("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new he(o,3)),this.setAttribute("normal",new he(d,3)),this.setAttribute("uv",new he(h,2));function _(S,f,p,M,T,v,b,R,A,g,E){const z=v/A,C=b/g,I=v/2,B=b/2,N=R/2,k=A+1,H=g+1;let O=0,Q=0;const j=new F;for(let lt=0;lt<H;lt++){const pt=lt*C-B;for(let ht=0;ht<k;ht++){const Nt=ht*z-I;j[S]=Nt*M,j[f]=pt*T,j[p]=N,o.push(j.x,j.y,j.z),j[S]=0,j[f]=0,j[p]=R>0?1:-1,d.push(j.x,j.y,j.z),h.push(ht/A),h.push(1-lt/g),O+=1}}for(let lt=0;lt<g;lt++)for(let pt=0;pt<A;pt++){const ht=u+pt+k*lt,Nt=u+pt+k*(lt+1),oe=u+(pt+1)+k*(lt+1),ae=u+(pt+1)+k*lt;l.push(ht,Nt,ae),l.push(Nt,oe,ae),Q+=6}c.addGroup(m,Q,E),m+=Q,u+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new er(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Vo extends Pe{constructor(t=1,e=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:r},e=Math.max(3,e);const s=[],a=[],c=[],l=[],o=new F,d=new Lt;a.push(0,0,0),c.push(0,0,1),l.push(.5,.5);for(let h=0,u=3;h<=e;h++,u+=3){const m=i+h/e*r;o.x=t*Math.cos(m),o.y=t*Math.sin(m),a.push(o.x,o.y,o.z),c.push(0,0,1),d.x=(a[u]/t+1)/2,d.y=(a[u+1]/t+1)/2,l.push(d.x,d.y)}for(let h=1;h<=e;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new he(a,3)),this.setAttribute("normal",new he(c,3)),this.setAttribute("uv",new he(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vo(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Us extends Pe{constructor(t=1,e=1,i=1,r=32,s=1,a=!1,c=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:c,thetaLength:l};const o=this;r=Math.floor(r),s=Math.floor(s);const d=[],h=[],u=[],m=[];let _=0;const S=[],f=i/2;let p=0;M(),a===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(d),this.setAttribute("position",new he(h,3)),this.setAttribute("normal",new he(u,3)),this.setAttribute("uv",new he(m,2));function M(){const v=new F,b=new F;let R=0;const A=(e-t)/i;for(let g=0;g<=s;g++){const E=[],z=g/s,C=z*(e-t)+t;for(let I=0;I<=r;I++){const B=I/r,N=B*l+c,k=Math.sin(N),H=Math.cos(N);b.x=C*k,b.y=-z*i+f,b.z=C*H,h.push(b.x,b.y,b.z),v.set(k,A,H).normalize(),u.push(v.x,v.y,v.z),m.push(B,1-z),E.push(_++)}S.push(E)}for(let g=0;g<r;g++)for(let E=0;E<s;E++){const z=S[E][g],C=S[E+1][g],I=S[E+1][g+1],B=S[E][g+1];(t>0||E!==0)&&(d.push(z,C,B),R+=3),(e>0||E!==s-1)&&(d.push(C,I,B),R+=3)}o.addGroup(p,R,0),p+=R}function T(v){const b=_,R=new Lt,A=new F;let g=0;const E=v===!0?t:e,z=v===!0?1:-1;for(let I=1;I<=r;I++)h.push(0,f*z,0),u.push(0,z,0),m.push(.5,.5),_++;const C=_;for(let I=0;I<=r;I++){const N=I/r*l+c,k=Math.cos(N),H=Math.sin(N);A.x=E*H,A.y=f*z,A.z=E*k,h.push(A.x,A.y,A.z),u.push(0,z,0),R.x=k*.5+.5,R.y=H*.5*z+.5,m.push(R.x,R.y),_++}for(let I=0;I<r;I++){const B=b+I,N=C+I;v===!0?d.push(N,N+1,B):d.push(N+1,N,B),g+=3}o.addGroup(p,g,v===!0?1:2),p+=g}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Us(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Go extends Us{constructor(t=1,e=1,i=32,r=1,s=!1,a=0,c=Math.PI*2){super(0,t,e,i,r,s,a,c),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:c}}static fromJSON(t){return new Go(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Dr extends Pe{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,a=e/2,c=Math.floor(i),l=Math.floor(r),o=c+1,d=l+1,h=t/c,u=e/l,m=[],_=[],S=[],f=[];for(let p=0;p<d;p++){const M=p*u-a;for(let T=0;T<o;T++){const v=T*h-s;_.push(v,-M,0),S.push(0,0,1),f.push(T/c),f.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<c;M++){const T=M+o*p,v=M+o*(p+1),b=M+1+o*(p+1),R=M+1+o*p;m.push(T,v,R),m.push(v,b,R)}this.setIndex(m),this.setAttribute("position",new he(_,3)),this.setAttribute("normal",new he(S,3)),this.setAttribute("uv",new he(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dr(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ho extends Pe{constructor(t=.5,e=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);const c=[],l=[],o=[],d=[];let h=t;const u=(e-t)/r,m=new F,_=new Lt;for(let S=0;S<=r;S++){for(let f=0;f<=i;f++){const p=s+f/i*a;m.x=h*Math.cos(p),m.y=h*Math.sin(p),l.push(m.x,m.y,m.z),o.push(0,0,1),_.x=(m.x/e+1)/2,_.y=(m.y/e+1)/2,d.push(_.x,_.y)}h+=u}for(let S=0;S<r;S++){const f=S*(i+1);for(let p=0;p<i;p++){const M=p+f,T=M,v=M+i+1,b=M+i+2,R=M+1;c.push(T,v,R),c.push(v,b,R)}}this.setIndex(c),this.setAttribute("position",new he(l,3)),this.setAttribute("normal",new he(o,3)),this.setAttribute("uv",new he(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ho(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}function ji(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(wt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function Le(n){const t={};for(let e=0;e<n.length;e++){const i=ji(n[e]);for(const r in i)t[r]=i[r]}return t}function Tf(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function ou(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qt.workingColorSpace}const bf={clone:ji,merge:Le};var Af=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xn extends gi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Af,this.fragmentShader=wf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ji(t.uniforms),this.uniformsGroups=Tf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Rf extends xn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Jn extends gi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yl,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.combine=To,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Cf extends gi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Pf extends gi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Wo extends ue{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Bt(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Df extends Wo{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ue.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Bt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const pa=new ee,Gc=new F,Hc=new F;class cu{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Lt(512,512),this.mapType=Ge,this.map=null,this.mapPass=null,this.matrix=new ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ko,this._frameExtents=new Lt(1,1),this._viewportCount=1,this._viewports=[new le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Gc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Gc),Hc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Hc),e.updateMatrixWorld(),pa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pa,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===wr||e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(pa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const os=new F,cs=new Qi,ln=new F;class lu extends ue{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ee,this.projectionMatrix=new ee,this.projectionMatrixInverse=new ee,this.coordinateSystem=fn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(os,cs,ln),ln.x===1&&ln.y===1&&ln.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(os,cs,ln.set(1,1,1)).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorld.decompose(os,cs,ln),ln.x===1&&ln.y===1&&ln.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(os,cs,ln.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Wn=new F,Wc=new Lt,Xc=new Lt;class Xe extends lu{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ki*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(yr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ki*2*Math.atan(Math.tan(yr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Wn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Wn.x,Wn.y).multiplyScalar(-t/Wn.z),Wn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Wn.x,Wn.y).multiplyScalar(-t/Wn.z)}getViewSize(t,e){return this.getViewBounds(t,Wc,Xc),e.subVectors(Xc,Wc)}setViewOffset(t,e,i,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(yr*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,o=a.fullHeight;s+=a.offsetX*r/l,e-=a.offsetY*i/o,r*=a.width/l,i*=a.height/o}const c=this.filmOffset;c!==0&&(s+=t*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Lf extends cu{constructor(){super(new Xe(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,i=Ki*2*t.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=t.distance||e.far;(i!==e.fov||r!==e.aspect||s!==e.far)&&(e.fov=i,e.aspect=r,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class If extends Wo{constructor(t,e,i=0,r=Math.PI/3,s=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ue.DEFAULT_UP),this.updateMatrix(),this.target=new ue,this.distance=i,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Lf}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}}class Ns extends lu{constructor(t=-1,e=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,a=i+t,c=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const o=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=o*this.view.offsetX,a=s+o*this.view.width,c-=d*this.view.offsetY,l=c-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,c,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Uf extends cu{constructor(){super(new Ns(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Nf extends Wo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ue.DEFAULT_UP),this.updateMatrix(),this.target=new ue,this.shadow=new Uf}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const Oi=-90,Bi=1;class Ff extends ue{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Xe(Oi,Bi,t,e);r.layers=this.layers,this.add(r);const s=new Xe(Oi,Bi,t,e);s.layers=this.layers,this.add(s);const a=new Xe(Oi,Bi,t,e);a.layers=this.layers,this.add(a);const c=new Xe(Oi,Bi,t,e);c.layers=this.layers,this.add(c);const l=new Xe(Oi,Bi,t,e);l.layers=this.layers,this.add(l);const o=new Xe(Oi,Bi,t,e);o.layers=this.layers,this.add(o)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,a,c,l]=e;for(const o of e)this.remove(o);if(t===fn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===wr)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const o of e)this.add(o),o.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,c,l,o,d]=this.children,h=t.getRenderTarget(),u=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let f=!1;t.isWebGLRenderer===!0?f=t.state.buffers.depth.getReversed():f=t.reversedDepthBuffer,t.setRenderTarget(i,0,r),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(i,1,r),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,r),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(i,3,r),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,r),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),i.texture.generateMipmaps=S,t.setRenderTarget(i,5,r),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,d),t.setRenderTarget(h,u,m),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Of extends Xe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const qc=new ee;class Bf{constructor(t,e,i=0,r=1/0){this.ray=new Bo(t,e),this.near=i,this.far=r,this.camera=null,this.layers=new Fo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Wt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return qc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(qc),this}intersectObject(t,e=!0,i=[]){return mo(t,this,i,e),i.sort(Yc),i}intersectObjects(t,e=!0,i=[]){for(let r=0,s=t.length;r<s;r++)mo(t[r],this,i,e);return i.sort(Yc),i}}function Yc(n,t){return n.distance-t.distance}function mo(n,t,e,i){let r=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let a=0,c=s.length;a<c;a++)mo(s[a],t,e,!0)}}function Zc(n,t,e,i){const r=zf(i);switch(e){case Xl:return n*t;case Ro:return n*t/r.components*r.byteLength;case Co:return n*t/r.components*r.byteLength;case Yi:return n*t*2/r.components*r.byteLength;case Po:return n*t*2/r.components*r.byteLength;case ql:return n*t*3/r.components*r.byteLength;case sn:return n*t*4/r.components*r.byteLength;case Do:return n*t*4/r.components*r.byteLength;case xs:case vs:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ms:case Ss:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Fa:case Ba:return Math.max(n,16)*Math.max(t,8)/4;case Na:case Oa:return Math.max(n,8)*Math.max(t,8)/2;case za:case ka:case Ga:case Ha:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Va:case Wa:case Xa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case qa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ya:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Za:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Ka:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case ja:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case $a:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Ja:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Qa:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case to:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case eo:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case no:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case io:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case ro:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case so:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case ao:case oo:case co:return Math.ceil(n/4)*Math.ceil(t/4)*16;case lo:case uo:return Math.ceil(n/4)*Math.ceil(t/4)*8;case ho:case fo:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function zf(n){switch(n){case Ge:case Vl:return{byteLength:1,components:1};case br:case Gl:case Un:return{byteLength:2,components:1};case Ao:case wo:return{byteLength:2,components:4};case gn:case bo:case rn:return{byteLength:4,components:1};case Hl:case Wl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Eo}}));typeof window<"u"&&(window.__THREE__?wt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Eo);function uu(){let n=null,t=!1,e=null,i=null;function r(s,a){e(s,a),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function kf(n){const t=new WeakMap;function e(c,l){const o=c.array,d=c.usage,h=o.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,o,d),c.onUploadCallback();let m;if(o instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&o instanceof Float16Array)m=n.HALF_FLOAT;else if(o instanceof Uint16Array)c.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(o instanceof Int16Array)m=n.SHORT;else if(o instanceof Uint32Array)m=n.UNSIGNED_INT;else if(o instanceof Int32Array)m=n.INT;else if(o instanceof Int8Array)m=n.BYTE;else if(o instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(o instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);return{buffer:u,type:m,bytesPerElement:o.BYTES_PER_ELEMENT,version:c.version,size:h}}function i(c,l,o){const d=l.array,h=l.updateRanges;if(n.bindBuffer(o,c),h.length===0)n.bufferSubData(o,0,d);else{h.sort((m,_)=>m.start-_.start);let u=0;for(let m=1;m<h.length;m++){const _=h[u],S=h[m];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++u,h[u]=S)}h.length=u+1;for(let m=0,_=h.length;m<_;m++){const S=h[m];n.bufferSubData(o,S.start*d.BYTES_PER_ELEMENT,d,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),t.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const l=t.get(c);l&&(n.deleteBuffer(l.buffer),t.delete(c))}function a(c,l){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const d=t.get(c);(!d||d.version<c.version)&&t.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const o=t.get(c);if(o===void 0)t.set(c,e(c,l));else if(o.version<c.version){if(o.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(o.buffer,c,l),o.version=c.version}}return{get:r,remove:s,update:a}}var Vf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Hf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Zf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,jf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$f=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,td=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ed=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,nd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,id=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ad=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,od=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,cd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ld=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,ud=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,hd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,fd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,dd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,md=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_d="gl_FragColor = linearToOutputTexel( gl_FragColor );",xd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Md=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Sd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,yd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ed=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Td=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ad=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Cd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ld=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Id=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ud=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Nd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Fd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Od=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,zd=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,kd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Vd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Gd=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Yd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Kd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,jd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$d=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ep=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,np=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ip=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,sp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ap=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,op=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,up=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,gp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_p=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Ep=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Tp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,bp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ap=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Rp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Pp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ip=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Up=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Np=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Fp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Op=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Bp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,zp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Yp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Zp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Kp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,jp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$p=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Qp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,em=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,im=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,sm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,am=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,om=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,cm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,um=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,hm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,mm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_m=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ft={alphahash_fragment:Vf,alphahash_pars_fragment:Gf,alphamap_fragment:Hf,alphamap_pars_fragment:Wf,alphatest_fragment:Xf,alphatest_pars_fragment:qf,aomap_fragment:Yf,aomap_pars_fragment:Zf,batching_pars_vertex:Kf,batching_vertex:jf,begin_vertex:$f,beginnormal_vertex:Jf,bsdfs:Qf,iridescence_fragment:td,bumpmap_pars_fragment:ed,clipping_planes_fragment:nd,clipping_planes_pars_fragment:id,clipping_planes_pars_vertex:rd,clipping_planes_vertex:sd,color_fragment:ad,color_pars_fragment:od,color_pars_vertex:cd,color_vertex:ld,common:ud,cube_uv_reflection_fragment:hd,defaultnormal_vertex:fd,displacementmap_pars_vertex:dd,displacementmap_vertex:pd,emissivemap_fragment:md,emissivemap_pars_fragment:gd,colorspace_fragment:_d,colorspace_pars_fragment:xd,envmap_fragment:vd,envmap_common_pars_fragment:Md,envmap_pars_fragment:Sd,envmap_pars_vertex:yd,envmap_physical_pars_fragment:Id,envmap_vertex:Ed,fog_vertex:Td,fog_pars_vertex:bd,fog_fragment:Ad,fog_pars_fragment:wd,gradientmap_pars_fragment:Rd,lightmap_pars_fragment:Cd,lights_lambert_fragment:Pd,lights_lambert_pars_fragment:Dd,lights_pars_begin:Ld,lights_toon_fragment:Ud,lights_toon_pars_fragment:Nd,lights_phong_fragment:Fd,lights_phong_pars_fragment:Od,lights_physical_fragment:Bd,lights_physical_pars_fragment:zd,lights_fragment_begin:kd,lights_fragment_maps:Vd,lights_fragment_end:Gd,logdepthbuf_fragment:Hd,logdepthbuf_pars_fragment:Wd,logdepthbuf_pars_vertex:Xd,logdepthbuf_vertex:qd,map_fragment:Yd,map_pars_fragment:Zd,map_particle_fragment:Kd,map_particle_pars_fragment:jd,metalnessmap_fragment:$d,metalnessmap_pars_fragment:Jd,morphinstance_vertex:Qd,morphcolor_vertex:tp,morphnormal_vertex:ep,morphtarget_pars_vertex:np,morphtarget_vertex:ip,normal_fragment_begin:rp,normal_fragment_maps:sp,normal_pars_fragment:ap,normal_pars_vertex:op,normal_vertex:cp,normalmap_pars_fragment:lp,clearcoat_normal_fragment_begin:up,clearcoat_normal_fragment_maps:hp,clearcoat_pars_fragment:fp,iridescence_pars_fragment:dp,opaque_fragment:pp,packing:mp,premultiplied_alpha_fragment:gp,project_vertex:_p,dithering_fragment:xp,dithering_pars_fragment:vp,roughnessmap_fragment:Mp,roughnessmap_pars_fragment:Sp,shadowmap_pars_fragment:yp,shadowmap_pars_vertex:Ep,shadowmap_vertex:Tp,shadowmask_pars_fragment:bp,skinbase_vertex:Ap,skinning_pars_vertex:wp,skinning_vertex:Rp,skinnormal_vertex:Cp,specularmap_fragment:Pp,specularmap_pars_fragment:Dp,tonemapping_fragment:Lp,tonemapping_pars_fragment:Ip,transmission_fragment:Up,transmission_pars_fragment:Np,uv_pars_fragment:Fp,uv_pars_vertex:Op,uv_vertex:Bp,worldpos_vertex:zp,background_vert:kp,background_frag:Vp,backgroundCube_vert:Gp,backgroundCube_frag:Hp,cube_vert:Wp,cube_frag:Xp,depth_vert:qp,depth_frag:Yp,distance_vert:Zp,distance_frag:Kp,equirect_vert:jp,equirect_frag:$p,linedashed_vert:Jp,linedashed_frag:Qp,meshbasic_vert:tm,meshbasic_frag:em,meshlambert_vert:nm,meshlambert_frag:im,meshmatcap_vert:rm,meshmatcap_frag:sm,meshnormal_vert:am,meshnormal_frag:om,meshphong_vert:cm,meshphong_frag:lm,meshphysical_vert:um,meshphysical_frag:hm,meshtoon_vert:fm,meshtoon_frag:dm,points_vert:pm,points_frag:mm,shadow_vert:gm,shadow_frag:_m,sprite_vert:xm,sprite_frag:vm},at={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ut}},envmap:{envMap:{value:null},envMapRotation:{value:new Ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ut},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0},uvTransform:{value:new Ut}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}}},hn={basic:{uniforms:Le([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:Ft.meshbasic_vert,fragmentShader:Ft.meshbasic_frag},lambert:{uniforms:Le([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Bt(0)},envMapIntensity:{value:1}}]),vertexShader:Ft.meshlambert_vert,fragmentShader:Ft.meshlambert_frag},phong:{uniforms:Le([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ft.meshphong_vert,fragmentShader:Ft.meshphong_frag},standard:{uniforms:Le([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag},toon:{uniforms:Le([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new Bt(0)}}]),vertexShader:Ft.meshtoon_vert,fragmentShader:Ft.meshtoon_frag},matcap:{uniforms:Le([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:Ft.meshmatcap_vert,fragmentShader:Ft.meshmatcap_frag},points:{uniforms:Le([at.points,at.fog]),vertexShader:Ft.points_vert,fragmentShader:Ft.points_frag},dashed:{uniforms:Le([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ft.linedashed_vert,fragmentShader:Ft.linedashed_frag},depth:{uniforms:Le([at.common,at.displacementmap]),vertexShader:Ft.depth_vert,fragmentShader:Ft.depth_frag},normal:{uniforms:Le([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:Ft.meshnormal_vert,fragmentShader:Ft.meshnormal_frag},sprite:{uniforms:Le([at.sprite,at.fog]),vertexShader:Ft.sprite_vert,fragmentShader:Ft.sprite_frag},background:{uniforms:{uvTransform:{value:new Ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ft.background_vert,fragmentShader:Ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ut}},vertexShader:Ft.backgroundCube_vert,fragmentShader:Ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ft.cube_vert,fragmentShader:Ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ft.equirect_vert,fragmentShader:Ft.equirect_frag},distance:{uniforms:Le([at.common,at.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ft.distance_vert,fragmentShader:Ft.distance_frag},shadow:{uniforms:Le([at.lights,at.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:Ft.shadow_vert,fragmentShader:Ft.shadow_frag}};hn.physical={uniforms:Le([hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ut},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ut},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ut},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ut},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ut},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ut}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag};const ls={r:0,b:0,g:0},si=new _n,Mm=new ee;function Sm(n,t,e,i,r,s){const a=new Bt(0);let c=r===!0?0:1,l,o,d=null,h=0,u=null;function m(M){let T=M.isScene===!0?M.background:null;if(T&&T.isTexture){const v=M.backgroundBlurriness>0;T=t.get(T,v)}return T}function _(M){let T=!1;const v=m(M);v===null?f(a,c):v&&v.isColor&&(f(v,1),T=!0);const b=n.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(n.autoClear||T)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function S(M,T){const v=m(T);v&&(v.isCubeTexture||v.mapping===Is)?(o===void 0&&(o=new _e(new er(1,1,1),new xn({name:"BackgroundCubeMaterial",uniforms:ji(hn.backgroundCube.uniforms),vertexShader:hn.backgroundCube.vertexShader,fragmentShader:hn.backgroundCube.fragmentShader,side:Oe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),o.geometry.deleteAttribute("normal"),o.geometry.deleteAttribute("uv"),o.onBeforeRender=function(b,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(o.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(o)),si.copy(T.backgroundRotation),si.x*=-1,si.y*=-1,si.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(si.y*=-1,si.z*=-1),o.material.uniforms.envMap.value=v,o.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,o.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,o.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,o.material.uniforms.backgroundRotation.value.setFromMatrix4(Mm.makeRotationFromEuler(si)),o.material.toneMapped=qt.getTransfer(v.colorSpace)!==$t,(d!==v||h!==v.version||u!==n.toneMapping)&&(o.material.needsUpdate=!0,d=v,h=v.version,u=n.toneMapping),o.layers.enableAll(),M.unshift(o,o.geometry,o.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new _e(new Dr(2,2),new xn({name:"BackgroundMaterial",uniforms:ji(hn.background.uniforms),vertexShader:hn.background.vertexShader,fragmentShader:hn.background.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=qt.getTransfer(v.colorSpace)!==$t,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||h!==v.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,d=v,h=v.version,u=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function f(M,T){M.getRGB(ls,ou(n)),e.buffers.color.setClear(ls.r,ls.g,ls.b,T,s)}function p(){o!==void 0&&(o.geometry.dispose(),o.material.dispose(),o=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,T=1){a.set(M),c=T,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,f(a,c)},render:_,addToRenderList:S,dispose:p}}function ym(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=u(null);let s=r,a=!1;function c(C,I,B,N,k){let H=!1;const O=h(C,N,B,I);s!==O&&(s=O,o(s.object)),H=m(C,N,B,k),H&&_(C,N,B,k),k!==null&&t.update(k,n.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,v(C,I,B,N),k!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return n.createVertexArray()}function o(C){return n.bindVertexArray(C)}function d(C){return n.deleteVertexArray(C)}function h(C,I,B,N){const k=N.wireframe===!0;let H=i[I.id];H===void 0&&(H={},i[I.id]=H);const O=C.isInstancedMesh===!0?C.id:0;let Q=H[O];Q===void 0&&(Q={},H[O]=Q);let j=Q[B.id];j===void 0&&(j={},Q[B.id]=j);let lt=j[k];return lt===void 0&&(lt=u(l()),j[k]=lt),lt}function u(C){const I=[],B=[],N=[];for(let k=0;k<e;k++)I[k]=0,B[k]=0,N[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:B,attributeDivisors:N,object:C,attributes:{},index:null}}function m(C,I,B,N){const k=s.attributes,H=I.attributes;let O=0;const Q=B.getAttributes();for(const j in Q)if(Q[j].location>=0){const pt=k[j];let ht=H[j];if(ht===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(ht=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(ht=C.instanceColor)),pt===void 0||pt.attribute!==ht||ht&&pt.data!==ht.data)return!0;O++}return s.attributesNum!==O||s.index!==N}function _(C,I,B,N){const k={},H=I.attributes;let O=0;const Q=B.getAttributes();for(const j in Q)if(Q[j].location>=0){let pt=H[j];pt===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(pt=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(pt=C.instanceColor));const ht={};ht.attribute=pt,pt&&pt.data&&(ht.data=pt.data),k[j]=ht,O++}s.attributes=k,s.attributesNum=O,s.index=N}function S(){const C=s.newAttributes;for(let I=0,B=C.length;I<B;I++)C[I]=0}function f(C){p(C,0)}function p(C,I){const B=s.newAttributes,N=s.enabledAttributes,k=s.attributeDivisors;B[C]=1,N[C]===0&&(n.enableVertexAttribArray(C),N[C]=1),k[C]!==I&&(n.vertexAttribDivisor(C,I),k[C]=I)}function M(){const C=s.newAttributes,I=s.enabledAttributes;for(let B=0,N=I.length;B<N;B++)I[B]!==C[B]&&(n.disableVertexAttribArray(B),I[B]=0)}function T(C,I,B,N,k,H,O){O===!0?n.vertexAttribIPointer(C,I,B,k,H):n.vertexAttribPointer(C,I,B,N,k,H)}function v(C,I,B,N){S();const k=N.attributes,H=B.getAttributes(),O=I.defaultAttributeValues;for(const Q in H){const j=H[Q];if(j.location>=0){let lt=k[Q];if(lt===void 0&&(Q==="instanceMatrix"&&C.instanceMatrix&&(lt=C.instanceMatrix),Q==="instanceColor"&&C.instanceColor&&(lt=C.instanceColor)),lt!==void 0){const pt=lt.normalized,ht=lt.itemSize,Nt=t.get(lt);if(Nt===void 0)continue;const oe=Nt.buffer,ae=Nt.type,Z=Nt.bytesPerElement,nt=ae===n.INT||ae===n.UNSIGNED_INT||lt.gpuType===bo;if(lt.isInterleavedBufferAttribute){const st=lt.data,It=st.stride,bt=lt.offset;if(st.isInstancedInterleavedBuffer){for(let Rt=0;Rt<j.locationSize;Rt++)p(j.location+Rt,st.meshPerAttribute);C.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Rt=0;Rt<j.locationSize;Rt++)f(j.location+Rt);n.bindBuffer(n.ARRAY_BUFFER,oe);for(let Rt=0;Rt<j.locationSize;Rt++)T(j.location+Rt,ht/j.locationSize,ae,pt,It*Z,(bt+ht/j.locationSize*Rt)*Z,nt)}else{if(lt.isInstancedBufferAttribute){for(let st=0;st<j.locationSize;st++)p(j.location+st,lt.meshPerAttribute);C.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let st=0;st<j.locationSize;st++)f(j.location+st);n.bindBuffer(n.ARRAY_BUFFER,oe);for(let st=0;st<j.locationSize;st++)T(j.location+st,ht/j.locationSize,ae,pt,ht*Z,ht/j.locationSize*st*Z,nt)}}else if(O!==void 0){const pt=O[Q];if(pt!==void 0)switch(pt.length){case 2:n.vertexAttrib2fv(j.location,pt);break;case 3:n.vertexAttrib3fv(j.location,pt);break;case 4:n.vertexAttrib4fv(j.location,pt);break;default:n.vertexAttrib1fv(j.location,pt)}}}}M()}function b(){E();for(const C in i){const I=i[C];for(const B in I){const N=I[B];for(const k in N){const H=N[k];for(const O in H)d(H[O].object),delete H[O];delete N[k]}}delete i[C]}}function R(C){if(i[C.id]===void 0)return;const I=i[C.id];for(const B in I){const N=I[B];for(const k in N){const H=N[k];for(const O in H)d(H[O].object),delete H[O];delete N[k]}}delete i[C.id]}function A(C){for(const I in i){const B=i[I];for(const N in B){const k=B[N];if(k[C.id]===void 0)continue;const H=k[C.id];for(const O in H)d(H[O].object),delete H[O];delete k[C.id]}}}function g(C){for(const I in i){const B=i[I],N=C.isInstancedMesh===!0?C.id:0,k=B[N];if(k!==void 0){for(const H in k){const O=k[H];for(const Q in O)d(O[Q].object),delete O[Q];delete k[H]}delete B[N],Object.keys(B).length===0&&delete i[I]}}}function E(){z(),a=!0,s!==r&&(s=r,o(s.object))}function z(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:c,reset:E,resetDefaultState:z,dispose:b,releaseStatesOfGeometry:R,releaseStatesOfObject:g,releaseStatesOfProgram:A,initAttributes:S,enableAttribute:f,disableUnusedAttributes:M}}function Em(n,t,e){let i;function r(o){i=o}function s(o,d){n.drawArrays(i,o,d),e.update(d,i,1)}function a(o,d,h){h!==0&&(n.drawArraysInstanced(i,o,d,h),e.update(d,i,h))}function c(o,d,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,o,0,d,0,h);let m=0;for(let _=0;_<h;_++)m+=d[_];e.update(m,i,1)}function l(o,d,h,u){if(h===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<o.length;_++)a(o[_],d[_],u[_]);else{m.multiDrawArraysInstancedWEBGL(i,o,0,d,0,u,0,h);let _=0;for(let S=0;S<h;S++)_+=d[S]*u[S];e.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=c,this.renderMultiDrawInstances=l}function Tm(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){return!(A!==sn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(A){const g=A===Un&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Ge&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==rn&&!g)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=e.precision!==void 0?e.precision:"highp";const d=l(o);d!==o&&(wt("WebGLRenderer:",o,"not supported, using",d,"instead."),o=d);const h=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_TEXTURE_SIZE),f=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=n.getParameter(n.MAX_SAMPLES),R=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:c,precision:o,logarithmicDepthBuffer:h,reversedDepthBuffer:u,maxTextures:m,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:f,maxAttributes:p,maxVertexUniforms:M,maxVaryings:T,maxFragmentUniforms:v,maxSamples:b,samples:R}}function bm(n){const t=this;let e=null,i=0,r=!1,s=!1;const a=new Xn,c=new Ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const m=h.length!==0||u||i!==0||r;return r=u,i=h.length,m},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){e=d(h,u,0)},this.setState=function(h,u,m){const _=h.clippingPlanes,S=h.clipIntersection,f=h.clipShadows,p=n.get(h);if(!r||_===null||_.length===0||s&&!f)s?d(null):o();else{const M=s?0:i,T=M*4;let v=p.clippingState||null;l.value=v,v=d(_,u,T,m);for(let b=0;b!==T;++b)v[b]=e[b];p.clippingState=v,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=M}};function o(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function d(h,u,m,_){const S=h!==null?h.length:0;let f=null;if(S!==0){if(f=l.value,_!==!0||f===null){const p=m+S*4,M=u.matrixWorldInverse;c.getNormalMatrix(M),(f===null||f.length<p)&&(f=new Float32Array(p));for(let T=0,v=m;T!==S;++T,v+=4)a.copy(h[T]).applyMatrix4(M,c),a.normal.toArray(f,v),f[v+3]=a.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,f}}const Zn=4,Kc=[.125,.215,.35,.446,.526,.582],ci=20,Am=256,mr=new Ns,jc=new Bt;let ma=null,ga=0,_a=0,xa=!1;const wm=new F;class $c{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,r=100,s={}){const{size:a=256,position:c=wm}=s;ma=this._renderer.getRenderTarget(),ga=this._renderer.getActiveCubeFace(),_a=this._renderer.getActiveMipmapLevel(),xa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,r,l,c),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(ma,ga,_a),this._renderer.xr.enabled=xa,t.scissorTest=!1,zi(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===fi||t.mapping===qi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ma=this._renderer.getRenderTarget(),ga=this._renderer.getActiveCubeFace(),_a=this._renderer.getActiveMipmapLevel(),xa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Re,minFilter:Re,generateMipmaps:!1,type:Un,format:sn,colorSpace:Zi,depthBuffer:!1},r=Jc(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jc(t,e,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Rm(s)),this._blurMaterial=Pm(s,t,e),this._ggxMaterial=Cm(s,t,e)}return r}_compileMaterial(t){const e=new _e(new Pe,t);this._renderer.compile(e,mr)}_sceneToCubeUV(t,e,i,r,s){const l=new Xe(90,1,e,i),o=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,m=h.toneMapping;h.getClearColor(jc),h.toneMapping=pn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new _e(new er,new Pr({name:"PMREM.Background",side:Oe,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,f=S.material;let p=!1;const M=t.background;M?M.isColor&&(f.color.copy(M),t.background=null,p=!0):(f.color.copy(jc),p=!0);for(let T=0;T<6;T++){const v=T%3;v===0?(l.up.set(0,o[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+d[T],s.y,s.z)):v===1?(l.up.set(0,0,o[T]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+d[T],s.z)):(l.up.set(0,o[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+d[T]));const b=this._cubeSize;zi(r,v*b,T>2?b:0,b,b),h.setRenderTarget(r),p&&h.render(S,l),h.render(t,l)}h.toneMapping=m,h.autoClear=u,t.background=M}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===fi||t.mapping===qi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=tl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const c=s.uniforms;c.envMap.value=t;const l=this._cubeSize;zi(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,mr)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=i}_applyGGXFilter(t,e,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,c=this._lodMeshes[i];c.material=a;const l=a.uniforms,o=i/(this._lodMeshes.length-1),d=e/(this._lodMeshes.length-1),h=Math.sqrt(o*o-d*d),u=0+o*1.25,m=h*u,{_lodMax:_}=this,S=this._sizeLods[i],f=3*S*(i>_-Zn?i-_+Zn:0),p=4*(this._cubeSize-S);l.envMap.value=t.texture,l.roughness.value=m,l.mipInt.value=_-e,zi(s,f,p,3*S,2*S),r.setRenderTarget(s),r.render(c,mr),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-i,zi(t,f,p,3*S,2*S),r.setRenderTarget(t),r.render(c,mr)}_blur(t,e,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,r,"latitudinal",s),this._halfBlur(a,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,a,c){const l=this._renderer,o=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Wt("blur direction must be either latitudinal or longitudinal!");const d=3,h=this._lodMeshes[r];h.material=o;const u=o.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*ci-1),S=s/_,f=isFinite(s)?1+Math.floor(d*S):ci;f>ci&&wt(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${ci}`);const p=[];let M=0;for(let A=0;A<ci;++A){const g=A/S,E=Math.exp(-g*g/2);p.push(E),A===0?M+=E:A<f&&(M+=2*E)}for(let A=0;A<p.length;A++)p[A]=p[A]/M;u.envMap.value=t.texture,u.samples.value=f,u.weights.value=p,u.latitudinal.value=a==="latitudinal",c&&(u.poleAxis.value=c);const{_lodMax:T}=this;u.dTheta.value=_,u.mipInt.value=T-i;const v=this._sizeLods[r],b=3*v*(r>T-Zn?r-T+Zn:0),R=4*(this._cubeSize-v);zi(e,b,R,3*v,2*v),l.setRenderTarget(e),l.render(h,mr)}}function Rm(n){const t=[],e=[],i=[];let r=n;const s=n-Zn+1+Kc.length;for(let a=0;a<s;a++){const c=Math.pow(2,r);t.push(c);let l=1/c;a>n-Zn?l=Kc[a-n+Zn-1]:a===0&&(l=0),e.push(l);const o=1/(c-2),d=-o,h=1+o,u=[d,d,h,d,h,h,d,d,h,h,d,h],m=6,_=6,S=3,f=2,p=1,M=new Float32Array(S*_*m),T=new Float32Array(f*_*m),v=new Float32Array(p*_*m);for(let R=0;R<m;R++){const A=R%3*2/3-1,g=R>2?0:-1,E=[A,g,0,A+2/3,g,0,A+2/3,g+1,0,A,g,0,A+2/3,g+1,0,A,g+1,0];M.set(E,S*_*R),T.set(u,f*_*R);const z=[R,R,R,R,R,R];v.set(z,p*_*R)}const b=new Pe;b.setAttribute("position",new Ke(M,S)),b.setAttribute("uv",new Ke(T,f)),b.setAttribute("faceIndex",new Ke(v,p)),i.push(new _e(b,null)),r>Zn&&r--}return{lodMeshes:i,sizeLods:t,sigmas:e}}function Jc(n,t,e){const i=new mn(n,t,e);return i.texture.mapping=Is,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function zi(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function Cm(n,t,e){return new xn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Am,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Fs(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Pm(n,t,e){const i=new Float32Array(ci),r=new F(0,1,0);return new xn({name:"SphericalGaussianBlur",defines:{n:ci,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Fs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Qc(){return new xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function tl(){return new xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Fs(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class hu extends mn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new ru(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new er(5,5,5),s=new xn({name:"CubemapFromEquirect",uniforms:ji(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Oe,blending:Pn});s.uniforms.tEquirect.value=e;const a=new _e(r,s),c=e.minFilter;return e.minFilter===li&&(e.minFilter=Re),new Ff(1,10,this).update(t,a),e.minFilter=c,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,r=!0){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,r);t.setRenderTarget(s)}}function Dm(n){let t=new WeakMap,e=new WeakMap,i=null;function r(u,m=!1){return u==null?null:m?a(u):s(u)}function s(u){if(u&&u.isTexture){const m=u.mapping;if(m===Vs||m===Gs)if(t.has(u)){const _=t.get(u).texture;return c(_,u.mapping)}else{const _=u.image;if(_&&_.height>0){const S=new hu(_.height);return S.fromEquirectangularTexture(n,u),t.set(u,S),u.addEventListener("dispose",o),c(S.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const m=u.mapping,_=m===Vs||m===Gs,S=m===fi||m===qi;if(_||S){let f=e.get(u);const p=f!==void 0?f.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return i===null&&(i=new $c(n)),f=_?i.fromEquirectangular(u,f):i.fromCubemap(u,f),f.texture.pmremVersion=u.pmremVersion,e.set(u,f),f.texture;if(f!==void 0)return f.texture;{const M=u.image;return _&&M&&M.height>0||S&&M&&l(M)?(i===null&&(i=new $c(n)),f=_?i.fromEquirectangular(u):i.fromCubemap(u),f.texture.pmremVersion=u.pmremVersion,e.set(u,f),u.addEventListener("dispose",d),f.texture):null}}}return u}function c(u,m){return m===Vs?u.mapping=fi:m===Gs&&(u.mapping=qi),u}function l(u){let m=0;const _=6;for(let S=0;S<_;S++)u[S]!==void 0&&m++;return m===_}function o(u){const m=u.target;m.removeEventListener("dispose",o);const _=t.get(m);_!==void 0&&(t.delete(m),_.dispose())}function d(u){const m=u.target;m.removeEventListener("dispose",d);const _=e.get(m);_!==void 0&&(e.delete(m),_.dispose())}function h(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function Lm(n){const t={};function e(i){if(t[i]!==void 0)return t[i];const r=n.getExtension(i);return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&Rs("WebGLRenderer: "+i+" extension not supported."),r}}}function Im(n,t,e,i){const r={},s=new WeakMap;function a(h){const u=h.target;u.index!==null&&t.remove(u.index);for(const _ in u.attributes)t.remove(u.attributes[_]);u.removeEventListener("dispose",a),delete r[u.id];const m=s.get(u);m&&(t.remove(m),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function c(h,u){return r[u.id]===!0||(u.addEventListener("dispose",a),r[u.id]=!0,e.memory.geometries++),u}function l(h){const u=h.attributes;for(const m in u)t.update(u[m],n.ARRAY_BUFFER)}function o(h){const u=[],m=h.index,_=h.attributes.position;let S=0;if(_===void 0)return;if(m!==null){const M=m.array;S=m.version;for(let T=0,v=M.length;T<v;T+=3){const b=M[T+0],R=M[T+1],A=M[T+2];u.push(b,R,R,A,A,b)}}else{const M=_.array;S=_.version;for(let T=0,v=M.length/3-1;T<v;T+=3){const b=T+0,R=T+1,A=T+2;u.push(b,R,R,A,A,b)}}const f=new(_.count>=65535?Jl:$l)(u,1);f.version=S;const p=s.get(h);p&&t.remove(p),s.set(h,f)}function d(h){const u=s.get(h);if(u){const m=h.index;m!==null&&u.version<m.version&&o(h)}else o(h);return s.get(h)}return{get:c,update:l,getWireframeAttribute:d}}function Um(n,t,e){let i;function r(u){i=u}let s,a;function c(u){s=u.type,a=u.bytesPerElement}function l(u,m){n.drawElements(i,m,s,u*a),e.update(m,i,1)}function o(u,m,_){_!==0&&(n.drawElementsInstanced(i,m,s,u*a,_),e.update(m,i,_))}function d(u,m,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,u,0,_);let f=0;for(let p=0;p<_;p++)f+=m[p];e.update(f,i,1)}function h(u,m,_,S){if(_===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<u.length;p++)o(u[p]/a,m[p],S[p]);else{f.multiDrawElementsInstancedWEBGL(i,m,0,s,u,0,S,0,_);let p=0;for(let M=0;M<_;M++)p+=m[M]*S[M];e.update(p,i,1)}}this.setMode=r,this.setIndex=c,this.render=l,this.renderInstances=o,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function Nm(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,c){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=c*(s/3);break;case n.LINES:e.lines+=c*(s/2);break;case n.LINE_STRIP:e.lines+=c*(s-1);break;case n.LINE_LOOP:e.lines+=c*s;break;case n.POINTS:e.points+=c*s;break;default:Wt("WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function Fm(n,t,e){const i=new WeakMap,r=new le;function s(a,c,l){const o=a.morphTargetInfluences,d=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,h=d!==void 0?d.length:0;let u=i.get(c);if(u===void 0||u.count!==h){let z=function(){g.dispose(),i.delete(c),c.removeEventListener("dispose",z)};var m=z;u!==void 0&&u.texture.dispose();const _=c.morphAttributes.position!==void 0,S=c.morphAttributes.normal!==void 0,f=c.morphAttributes.color!==void 0,p=c.morphAttributes.position||[],M=c.morphAttributes.normal||[],T=c.morphAttributes.color||[];let v=0;_===!0&&(v=1),S===!0&&(v=2),f===!0&&(v=3);let b=c.attributes.position.count*v,R=1;b>t.maxTextureSize&&(R=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const A=new Float32Array(b*R*4*h),g=new Kl(A,b,R,h);g.type=rn,g.needsUpdate=!0;const E=v*4;for(let C=0;C<h;C++){const I=p[C],B=M[C],N=T[C],k=b*R*4*C;for(let H=0;H<I.count;H++){const O=H*E;_===!0&&(r.fromBufferAttribute(I,H),A[k+O+0]=r.x,A[k+O+1]=r.y,A[k+O+2]=r.z,A[k+O+3]=0),S===!0&&(r.fromBufferAttribute(B,H),A[k+O+4]=r.x,A[k+O+5]=r.y,A[k+O+6]=r.z,A[k+O+7]=0),f===!0&&(r.fromBufferAttribute(N,H),A[k+O+8]=r.x,A[k+O+9]=r.y,A[k+O+10]=r.z,A[k+O+11]=N.itemSize===4?r.w:1)}}u={count:h,texture:g,size:new Lt(b,R)},i.set(c,u),c.addEventListener("dispose",z)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let _=0;for(let f=0;f<o.length;f++)_+=o[f];const S=c.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",S),l.getUniforms().setValue(n,"morphTargetInfluences",o)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:s}}function Om(n,t,e,i,r){let s=new WeakMap;function a(o){const d=r.render.frame,h=o.geometry,u=t.get(o,h);if(s.get(u)!==d&&(t.update(u),s.set(u,d)),o.isInstancedMesh&&(o.hasEventListener("dispose",l)===!1&&o.addEventListener("dispose",l),s.get(o)!==d&&(e.update(o.instanceMatrix,n.ARRAY_BUFFER),o.instanceColor!==null&&e.update(o.instanceColor,n.ARRAY_BUFFER),s.set(o,d))),o.isSkinnedMesh){const m=o.skeleton;s.get(m)!==d&&(m.update(),s.set(m,d))}return u}function c(){s=new WeakMap}function l(o){const d=o.target;d.removeEventListener("dispose",l),i.releaseStatesOfObject(d),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:a,dispose:c}}const Bm={[Il]:"LINEAR_TONE_MAPPING",[Ul]:"REINHARD_TONE_MAPPING",[Nl]:"CINEON_TONE_MAPPING",[Fl]:"ACES_FILMIC_TONE_MAPPING",[Bl]:"AGX_TONE_MAPPING",[zl]:"NEUTRAL_TONE_MAPPING",[Ol]:"CUSTOM_TONE_MAPPING"};function zm(n,t,e,i,r){const s=new mn(t,e,{type:n,depthBuffer:i,stencilBuffer:r}),a=new mn(t,e,{type:Un,depthBuffer:!1,stencilBuffer:!1}),c=new Pe;c.setAttribute("position",new he([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new he([0,2,0,0,2,0],2));const l=new Rf({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),o=new _e(c,l),d=new Ns(-1,1,1,-1,0,1);let h=null,u=null,m=!1,_,S=null,f=[],p=!1;this.setSize=function(M,T){s.setSize(M,T),a.setSize(M,T);for(let v=0;v<f.length;v++){const b=f[v];b.setSize&&b.setSize(M,T)}},this.setEffects=function(M){f=M,p=f.length>0&&f[0].isRenderPass===!0;const T=s.width,v=s.height;for(let b=0;b<f.length;b++){const R=f[b];R.setSize&&R.setSize(T,v)}},this.begin=function(M,T){if(m||M.toneMapping===pn&&f.length===0)return!1;if(S=T,T!==null){const v=T.width,b=T.height;(s.width!==v||s.height!==b)&&this.setSize(v,b)}return p===!1&&M.setRenderTarget(s),_=M.toneMapping,M.toneMapping=pn,!0},this.hasRenderPass=function(){return p},this.end=function(M,T){M.toneMapping=_,m=!0;let v=s,b=a;for(let R=0;R<f.length;R++){const A=f[R];if(A.enabled!==!1&&(A.render(M,b,v,T),A.needsSwap!==!1)){const g=v;v=b,b=g}}if(h!==M.outputColorSpace||u!==M.toneMapping){h=M.outputColorSpace,u=M.toneMapping,l.defines={},qt.getTransfer(h)===$t&&(l.defines.SRGB_TRANSFER="");const R=Bm[u];R&&(l.defines[R]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=v.texture,M.setRenderTarget(S),M.render(o,d),S=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){s.dispose(),a.dispose(),c.dispose(),l.dispose()}}const fu=new Ce,go=new Rr(1,1),du=new Kl,pu=new ef,mu=new ru,el=[],nl=[],il=new Float32Array(16),rl=new Float32Array(9),sl=new Float32Array(4);function nr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=el[r];if(s===void 0&&(s=new Float32Array(r),el[r]=s),t!==0){i.toArray(s,0);for(let a=1,c=0;a!==t;++a)c+=e,n[a].toArray(s,c)}return s}function xe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function ve(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Os(n,t){let e=nl[t];e===void 0&&(e=new Int32Array(t),nl[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function km(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Vm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;n.uniform2fv(this.addr,t),ve(e,t)}}function Gm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(xe(e,t))return;n.uniform3fv(this.addr,t),ve(e,t)}}function Hm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;n.uniform4fv(this.addr,t),ve(e,t)}}function Wm(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(xe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),ve(e,t)}else{if(xe(e,i))return;sl.set(i),n.uniformMatrix2fv(this.addr,!1,sl),ve(e,i)}}function Xm(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(xe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),ve(e,t)}else{if(xe(e,i))return;rl.set(i),n.uniformMatrix3fv(this.addr,!1,rl),ve(e,i)}}function qm(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(xe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),ve(e,t)}else{if(xe(e,i))return;il.set(i),n.uniformMatrix4fv(this.addr,!1,il),ve(e,i)}}function Ym(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Zm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;n.uniform2iv(this.addr,t),ve(e,t)}}function Km(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;n.uniform3iv(this.addr,t),ve(e,t)}}function jm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;n.uniform4iv(this.addr,t),ve(e,t)}}function $m(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Jm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;n.uniform2uiv(this.addr,t),ve(e,t)}}function Qm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;n.uniform3uiv(this.addr,t),ve(e,t)}}function t0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;n.uniform4uiv(this.addr,t),ve(e,t)}}function e0(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(go.compareFunction=e.isReversedDepthBuffer()?Io:Lo,s=go):s=fu,e.setTexture2D(t||s,r)}function n0(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||pu,r)}function i0(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||mu,r)}function r0(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||du,r)}function s0(n){switch(n){case 5126:return km;case 35664:return Vm;case 35665:return Gm;case 35666:return Hm;case 35674:return Wm;case 35675:return Xm;case 35676:return qm;case 5124:case 35670:return Ym;case 35667:case 35671:return Zm;case 35668:case 35672:return Km;case 35669:case 35673:return jm;case 5125:return $m;case 36294:return Jm;case 36295:return Qm;case 36296:return t0;case 35678:case 36198:case 36298:case 36306:case 35682:return e0;case 35679:case 36299:case 36307:return n0;case 35680:case 36300:case 36308:case 36293:return i0;case 36289:case 36303:case 36311:case 36292:return r0}}function a0(n,t){n.uniform1fv(this.addr,t)}function o0(n,t){const e=nr(t,this.size,2);n.uniform2fv(this.addr,e)}function c0(n,t){const e=nr(t,this.size,3);n.uniform3fv(this.addr,e)}function l0(n,t){const e=nr(t,this.size,4);n.uniform4fv(this.addr,e)}function u0(n,t){const e=nr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function h0(n,t){const e=nr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function f0(n,t){const e=nr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function d0(n,t){n.uniform1iv(this.addr,t)}function p0(n,t){n.uniform2iv(this.addr,t)}function m0(n,t){n.uniform3iv(this.addr,t)}function g0(n,t){n.uniform4iv(this.addr,t)}function _0(n,t){n.uniform1uiv(this.addr,t)}function x0(n,t){n.uniform2uiv(this.addr,t)}function v0(n,t){n.uniform3uiv(this.addr,t)}function M0(n,t){n.uniform4uiv(this.addr,t)}function S0(n,t,e){const i=this.cache,r=t.length,s=Os(e,r);xe(i,s)||(n.uniform1iv(this.addr,s),ve(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=go:a=fu;for(let c=0;c!==r;++c)e.setTexture2D(t[c]||a,s[c])}function y0(n,t,e){const i=this.cache,r=t.length,s=Os(e,r);xe(i,s)||(n.uniform1iv(this.addr,s),ve(i,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||pu,s[a])}function E0(n,t,e){const i=this.cache,r=t.length,s=Os(e,r);xe(i,s)||(n.uniform1iv(this.addr,s),ve(i,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||mu,s[a])}function T0(n,t,e){const i=this.cache,r=t.length,s=Os(e,r);xe(i,s)||(n.uniform1iv(this.addr,s),ve(i,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||du,s[a])}function b0(n){switch(n){case 5126:return a0;case 35664:return o0;case 35665:return c0;case 35666:return l0;case 35674:return u0;case 35675:return h0;case 35676:return f0;case 5124:case 35670:return d0;case 35667:case 35671:return p0;case 35668:case 35672:return m0;case 35669:case 35673:return g0;case 5125:return _0;case 36294:return x0;case 36295:return v0;case 36296:return M0;case 35678:case 36198:case 36298:case 36306:case 35682:return S0;case 35679:case 36299:case 36307:return y0;case 35680:case 36300:case 36308:case 36293:return E0;case 36289:case 36303:case 36311:case 36292:return T0}}class A0{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=s0(e.type)}}class w0{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=b0(e.type)}}class R0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const c=r[s];c.setValue(t,e[c.id],i)}}}const va=/(\w+)(\])?(\[|\.)?/g;function al(n,t){n.seq.push(t),n.map[t.id]=t}function C0(n,t,e){const i=n.name,r=i.length;for(va.lastIndex=0;;){const s=va.exec(i),a=va.lastIndex;let c=s[1];const l=s[2]==="]",o=s[3];if(l&&(c=c|0),o===void 0||o==="["&&a+2===r){al(e,o===void 0?new A0(c,n,t):new w0(c,n,t));break}else{let h=e.map[c];h===void 0&&(h=new R0(c),al(e,h)),e=h}}}class ys{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const c=t.getActiveUniform(e,a),l=t.getUniformLocation(e,c.name);C0(c,l,this)}const r=[],s=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,a=e.length;s!==a;++s){const c=e[s],l=i[c.id];l.needsUpdate!==!1&&c.setValue(t,l.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&i.push(a)}return i}}function ol(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const P0=37297;let D0=0;function L0(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const c=a+1;i.push(`${c===t?">":" "} ${c}: ${e[a]}`)}return i.join(`
`)}const cl=new Ut;function I0(n){qt._getMatrix(cl,qt.workingColorSpace,n);const t=`mat3( ${cl.elements.map(e=>e.toFixed(4))} )`;switch(qt.getTransfer(n)){case bs:return[t,"LinearTransferOETF"];case $t:return[t,"sRGBTransferOETF"];default:return wt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function ll(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=(n.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const c=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+L0(n.getShaderSource(t),c)}else return s}function U0(n,t){const e=I0(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const N0={[Il]:"Linear",[Ul]:"Reinhard",[Nl]:"Cineon",[Fl]:"ACESFilmic",[Bl]:"AgX",[zl]:"Neutral",[Ol]:"Custom"};function F0(n,t){const e=N0[t];return e===void 0?(wt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const us=new F;function O0(){qt.getLuminanceCoefficients(us);const n=us.x.toFixed(4),t=us.y.toFixed(4),e=us.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function B0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Mr).join(`
`)}function z0(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function k0(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),a=s.name;let c=1;s.type===n.FLOAT_MAT2&&(c=2),s.type===n.FLOAT_MAT3&&(c=3),s.type===n.FLOAT_MAT4&&(c=4),e[a]={type:s.type,location:n.getAttribLocation(t,a),locationSize:c}}return e}function Mr(n){return n!==""}function ul(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function hl(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const V0=/^[ \t]*#include +<([\w\d./]+)>/gm;function _o(n){return n.replace(V0,H0)}const G0=new Map;function H0(n,t){let e=Ft[t];if(e===void 0){const i=G0.get(t);if(i!==void 0)e=Ft[i],wt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return _o(e)}const W0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fl(n){return n.replace(W0,X0)}function X0(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function dl(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const q0={[_s]:"SHADOWMAP_TYPE_PCF",[vr]:"SHADOWMAP_TYPE_VSM"};function Y0(n){return q0[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Z0={[fi]:"ENVMAP_TYPE_CUBE",[qi]:"ENVMAP_TYPE_CUBE",[Is]:"ENVMAP_TYPE_CUBE_UV"};function K0(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Z0[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const j0={[qi]:"ENVMAP_MODE_REFRACTION"};function $0(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":j0[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const J0={[To]:"ENVMAP_BLENDING_MULTIPLY",[xh]:"ENVMAP_BLENDING_MIX",[vh]:"ENVMAP_BLENDING_ADD"};function Q0(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":J0[n.combine]||"ENVMAP_BLENDING_NONE"}function tg(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function eg(n,t,e,i){const r=n.getContext(),s=e.defines;let a=e.vertexShader,c=e.fragmentShader;const l=Y0(e),o=K0(e),d=$0(e),h=Q0(e),u=tg(e),m=B0(e),_=z0(s),S=r.createProgram();let f,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Mr).join(`
`),f.length>0&&(f+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Mr).join(`
`),p.length>0&&(p+=`
`)):(f=[dl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mr).join(`
`),p=[dl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+o:"",e.envMap?"#define "+d:"",e.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==pn?"#define TONE_MAPPING":"",e.toneMapping!==pn?Ft.tonemapping_pars_fragment:"",e.toneMapping!==pn?F0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ft.colorspace_pars_fragment,U0("linearToOutputTexel",e.outputColorSpace),O0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Mr).join(`
`)),a=_o(a),a=ul(a,e),a=hl(a,e),c=_o(c),c=ul(c,e),c=hl(c,e),a=fl(a),c=fl(c),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,f=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,p=["#define varying in",e.glslVersion===gc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===gc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const T=M+f+a,v=M+p+c,b=ol(r,r.VERTEX_SHADER,T),R=ol(r,r.FRAGMENT_SHADER,v);r.attachShader(S,b),r.attachShader(S,R),e.index0AttributeName!==void 0?r.bindAttribLocation(S,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function A(C){if(n.debug.checkShaderErrors){const I=r.getProgramInfoLog(S)||"",B=r.getShaderInfoLog(b)||"",N=r.getShaderInfoLog(R)||"",k=I.trim(),H=B.trim(),O=N.trim();let Q=!0,j=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(Q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,S,b,R);else{const lt=ll(r,b,"vertex"),pt=ll(r,R,"fragment");Wt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+k+`
`+lt+`
`+pt)}else k!==""?wt("WebGLProgram: Program Info Log:",k):(H===""||O==="")&&(j=!1);j&&(C.diagnostics={runnable:Q,programLog:k,vertexShader:{log:H,prefix:f},fragmentShader:{log:O,prefix:p}})}r.deleteShader(b),r.deleteShader(R),g=new ys(r,S),E=k0(r,S)}let g;this.getUniforms=function(){return g===void 0&&A(this),g};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let z=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=r.getProgramParameter(S,P0)),z},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=D0++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=b,this.fragmentShader=R,this}let ng=0;class ig{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new rg(t),e.set(t,i)),i}}class rg{constructor(t){this.id=ng++,this.code=t,this.usedTimes=0}}function sg(n,t,e,i,r,s){const a=new Fo,c=new ig,l=new Set,o=[],d=new Map,h=i.logarithmicDepthBuffer;let u=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(g){return l.add(g),g===0?"uv":`uv${g}`}function S(g,E,z,C,I){const B=C.fog,N=I.geometry,k=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?C.environment:null,H=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,O=t.get(g.envMap||k,H),Q=O&&O.mapping===Is?O.image.height:null,j=m[g.type];g.precision!==null&&(u=i.getMaxPrecision(g.precision),u!==g.precision&&wt("WebGLProgram.getParameters:",g.precision,"not supported, using",u,"instead."));const lt=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,pt=lt!==void 0?lt.length:0;let ht=0;N.morphAttributes.position!==void 0&&(ht=1),N.morphAttributes.normal!==void 0&&(ht=2),N.morphAttributes.color!==void 0&&(ht=3);let Nt,oe,ae,Z;if(j){const jt=hn[j];Nt=jt.vertexShader,oe=jt.fragmentShader}else Nt=g.vertexShader,oe=g.fragmentShader,c.update(g),ae=c.getVertexShaderID(g),Z=c.getFragmentShaderID(g);const nt=n.getRenderTarget(),st=n.state.buffers.depth.getReversed(),It=I.isInstancedMesh===!0,bt=I.isBatchedMesh===!0,Rt=!!g.map,Me=!!g.matcap,Xt=!!O,Kt=!!g.aoMap,ne=!!g.lightMap,zt=!!g.bumpMap,fe=!!g.normalMap,P=!!g.displacementMap,pe=!!g.emissiveMap,Zt=!!g.metalnessMap,re=!!g.roughnessMap,Mt=g.anisotropy>0,w=g.clearcoat>0,x=g.dispersion>0,L=g.iridescence>0,Y=g.sheen>0,K=g.transmission>0,q=Mt&&!!g.anisotropyMap,mt=w&&!!g.clearcoatMap,it=w&&!!g.clearcoatNormalMap,Tt=w&&!!g.clearcoatRoughnessMap,At=L&&!!g.iridescenceMap,$=L&&!!g.iridescenceThicknessMap,tt=Y&&!!g.sheenColorMap,gt=Y&&!!g.sheenRoughnessMap,xt=!!g.specularMap,ut=!!g.specularColorMap,kt=!!g.specularIntensityMap,D=K&&!!g.transmissionMap,rt=K&&!!g.thicknessMap,et=!!g.gradientMap,dt=!!g.alphaMap,J=g.alphaTest>0,X=!!g.alphaHash,_t=!!g.extensions;let Ct=pn;g.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(Ct=n.toneMapping);const se={shaderID:j,shaderType:g.type,shaderName:g.name,vertexShader:Nt,fragmentShader:oe,defines:g.defines,customVertexShaderID:ae,customFragmentShaderID:Z,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:u,batching:bt,batchingColor:bt&&I._colorsTexture!==null,instancing:It,instancingColor:It&&I.instanceColor!==null,instancingMorph:It&&I.morphTexture!==null,outputColorSpace:nt===null?n.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:Zi,alphaToCoverage:!!g.alphaToCoverage,map:Rt,matcap:Me,envMap:Xt,envMapMode:Xt&&O.mapping,envMapCubeUVHeight:Q,aoMap:Kt,lightMap:ne,bumpMap:zt,normalMap:fe,displacementMap:P,emissiveMap:pe,normalMapObjectSpace:fe&&g.normalMapType===yh,normalMapTangentSpace:fe&&g.normalMapType===Yl,metalnessMap:Zt,roughnessMap:re,anisotropy:Mt,anisotropyMap:q,clearcoat:w,clearcoatMap:mt,clearcoatNormalMap:it,clearcoatRoughnessMap:Tt,dispersion:x,iridescence:L,iridescenceMap:At,iridescenceThicknessMap:$,sheen:Y,sheenColorMap:tt,sheenRoughnessMap:gt,specularMap:xt,specularColorMap:ut,specularIntensityMap:kt,transmission:K,transmissionMap:D,thicknessMap:rt,gradientMap:et,opaque:g.transparent===!1&&g.blending===Gi&&g.alphaToCoverage===!1,alphaMap:dt,alphaTest:J,alphaHash:X,combine:g.combine,mapUv:Rt&&_(g.map.channel),aoMapUv:Kt&&_(g.aoMap.channel),lightMapUv:ne&&_(g.lightMap.channel),bumpMapUv:zt&&_(g.bumpMap.channel),normalMapUv:fe&&_(g.normalMap.channel),displacementMapUv:P&&_(g.displacementMap.channel),emissiveMapUv:pe&&_(g.emissiveMap.channel),metalnessMapUv:Zt&&_(g.metalnessMap.channel),roughnessMapUv:re&&_(g.roughnessMap.channel),anisotropyMapUv:q&&_(g.anisotropyMap.channel),clearcoatMapUv:mt&&_(g.clearcoatMap.channel),clearcoatNormalMapUv:it&&_(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Tt&&_(g.clearcoatRoughnessMap.channel),iridescenceMapUv:At&&_(g.iridescenceMap.channel),iridescenceThicknessMapUv:$&&_(g.iridescenceThicknessMap.channel),sheenColorMapUv:tt&&_(g.sheenColorMap.channel),sheenRoughnessMapUv:gt&&_(g.sheenRoughnessMap.channel),specularMapUv:xt&&_(g.specularMap.channel),specularColorMapUv:ut&&_(g.specularColorMap.channel),specularIntensityMapUv:kt&&_(g.specularIntensityMap.channel),transmissionMapUv:D&&_(g.transmissionMap.channel),thicknessMapUv:rt&&_(g.thicknessMap.channel),alphaMapUv:dt&&_(g.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(fe||Mt),vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!N.attributes.uv&&(Rt||dt),fog:!!B,useFog:g.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||N.attributes.normal===void 0&&fe===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:st,skinning:I.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:pt,morphTextureStride:ht,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:g.dithering,shadowMapEnabled:n.shadowMap.enabled&&z.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ct,decodeVideoTexture:Rt&&g.map.isVideoTexture===!0&&qt.getTransfer(g.map.colorSpace)===$t,decodeVideoTextureEmissive:pe&&g.emissiveMap.isVideoTexture===!0&&qt.getTransfer(g.emissiveMap.colorSpace)===$t,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===en,flipSided:g.side===Oe,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:_t&&g.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_t&&g.extensions.multiDraw===!0||bt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return se.vertexUv1s=l.has(1),se.vertexUv2s=l.has(2),se.vertexUv3s=l.has(3),l.clear(),se}function f(g){const E=[];if(g.shaderID?E.push(g.shaderID):(E.push(g.customVertexShaderID),E.push(g.customFragmentShaderID)),g.defines!==void 0)for(const z in g.defines)E.push(z),E.push(g.defines[z]);return g.isRawShaderMaterial===!1&&(p(E,g),M(E,g),E.push(n.outputColorSpace)),E.push(g.customProgramCacheKey),E.join()}function p(g,E){g.push(E.precision),g.push(E.outputColorSpace),g.push(E.envMapMode),g.push(E.envMapCubeUVHeight),g.push(E.mapUv),g.push(E.alphaMapUv),g.push(E.lightMapUv),g.push(E.aoMapUv),g.push(E.bumpMapUv),g.push(E.normalMapUv),g.push(E.displacementMapUv),g.push(E.emissiveMapUv),g.push(E.metalnessMapUv),g.push(E.roughnessMapUv),g.push(E.anisotropyMapUv),g.push(E.clearcoatMapUv),g.push(E.clearcoatNormalMapUv),g.push(E.clearcoatRoughnessMapUv),g.push(E.iridescenceMapUv),g.push(E.iridescenceThicknessMapUv),g.push(E.sheenColorMapUv),g.push(E.sheenRoughnessMapUv),g.push(E.specularMapUv),g.push(E.specularColorMapUv),g.push(E.specularIntensityMapUv),g.push(E.transmissionMapUv),g.push(E.thicknessMapUv),g.push(E.combine),g.push(E.fogExp2),g.push(E.sizeAttenuation),g.push(E.morphTargetsCount),g.push(E.morphAttributeCount),g.push(E.numDirLights),g.push(E.numPointLights),g.push(E.numSpotLights),g.push(E.numSpotLightMaps),g.push(E.numHemiLights),g.push(E.numRectAreaLights),g.push(E.numDirLightShadows),g.push(E.numPointLightShadows),g.push(E.numSpotLightShadows),g.push(E.numSpotLightShadowsWithMaps),g.push(E.numLightProbes),g.push(E.shadowMapType),g.push(E.toneMapping),g.push(E.numClippingPlanes),g.push(E.numClipIntersection),g.push(E.depthPacking)}function M(g,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),g.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),g.push(a.mask)}function T(g){const E=m[g.type];let z;if(E){const C=hn[E];z=bf.clone(C.uniforms)}else z=g.uniforms;return z}function v(g,E){let z=d.get(E);return z!==void 0?++z.usedTimes:(z=new eg(n,E,g,r),o.push(z),d.set(E,z)),z}function b(g){if(--g.usedTimes===0){const E=o.indexOf(g);o[E]=o[o.length-1],o.pop(),d.delete(g.cacheKey),g.destroy()}}function R(g){c.remove(g)}function A(){c.dispose()}return{getParameters:S,getProgramCacheKey:f,getUniforms:T,acquireProgram:v,releaseProgram:b,releaseShaderCache:R,programs:o,dispose:A}}function ag(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let c=n.get(a);return c===void 0&&(c={},n.set(a,c)),c}function i(a){n.delete(a)}function r(a,c,l){n.get(a)[c]=l}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function og(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function pl(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function ml(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function a(u){let m=0;return u.isInstancedMesh&&(m+=2),u.isSkinnedMesh&&(m+=1),m}function c(u,m,_,S,f,p){let M=n[t];return M===void 0?(M={id:u.id,object:u,geometry:m,material:_,materialVariant:a(u),groupOrder:S,renderOrder:u.renderOrder,z:f,group:p},n[t]=M):(M.id=u.id,M.object=u,M.geometry=m,M.material=_,M.materialVariant=a(u),M.groupOrder=S,M.renderOrder=u.renderOrder,M.z=f,M.group=p),t++,M}function l(u,m,_,S,f,p){const M=c(u,m,_,S,f,p);_.transmission>0?i.push(M):_.transparent===!0?r.push(M):e.push(M)}function o(u,m,_,S,f,p){const M=c(u,m,_,S,f,p);_.transmission>0?i.unshift(M):_.transparent===!0?r.unshift(M):e.unshift(M)}function d(u,m){e.length>1&&e.sort(u||og),i.length>1&&i.sort(m||pl),r.length>1&&r.sort(m||pl)}function h(){for(let u=t,m=n.length;u<m;u++){const _=n[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:l,unshift:o,finish:h,sort:d}}function cg(){let n=new WeakMap;function t(i,r){const s=n.get(i);let a;return s===void 0?(a=new ml,n.set(i,[a])):r>=s.length?(a=new ml,s.push(a)):a=s[r],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function lg(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new Bt};break;case"SpotLight":e={position:new F,direction:new F,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":e={color:new Bt,position:new F,halfWidth:new F,halfHeight:new F};break}return n[t.id]=e,e}}}function ug(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let hg=0;function fg(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function dg(n){const t=new lg,e=ug(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)i.probe.push(new F);const r=new F,s=new ee,a=new ee;function c(o){let d=0,h=0,u=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let m=0,_=0,S=0,f=0,p=0,M=0,T=0,v=0,b=0,R=0,A=0;o.sort(fg);for(let E=0,z=o.length;E<z;E++){const C=o[E],I=C.color,B=C.intensity,N=C.distance;let k=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Yi?k=C.shadow.map.texture:k=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)d+=I.r*B,h+=I.g*B,u+=I.b*B;else if(C.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(C.sh.coefficients[H],B);A++}else if(C.isDirectionalLight){const H=t.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const O=C.shadow,Q=e.get(C);Q.shadowIntensity=O.intensity,Q.shadowBias=O.bias,Q.shadowNormalBias=O.normalBias,Q.shadowRadius=O.radius,Q.shadowMapSize=O.mapSize,i.directionalShadow[m]=Q,i.directionalShadowMap[m]=k,i.directionalShadowMatrix[m]=C.shadow.matrix,M++}i.directional[m]=H,m++}else if(C.isSpotLight){const H=t.get(C);H.position.setFromMatrixPosition(C.matrixWorld),H.color.copy(I).multiplyScalar(B),H.distance=N,H.coneCos=Math.cos(C.angle),H.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),H.decay=C.decay,i.spot[S]=H;const O=C.shadow;if(C.map&&(i.spotLightMap[b]=C.map,b++,O.updateMatrices(C),C.castShadow&&R++),i.spotLightMatrix[S]=O.matrix,C.castShadow){const Q=e.get(C);Q.shadowIntensity=O.intensity,Q.shadowBias=O.bias,Q.shadowNormalBias=O.normalBias,Q.shadowRadius=O.radius,Q.shadowMapSize=O.mapSize,i.spotShadow[S]=Q,i.spotShadowMap[S]=k,v++}S++}else if(C.isRectAreaLight){const H=t.get(C);H.color.copy(I).multiplyScalar(B),H.halfWidth.set(C.width*.5,0,0),H.halfHeight.set(0,C.height*.5,0),i.rectArea[f]=H,f++}else if(C.isPointLight){const H=t.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),H.distance=C.distance,H.decay=C.decay,C.castShadow){const O=C.shadow,Q=e.get(C);Q.shadowIntensity=O.intensity,Q.shadowBias=O.bias,Q.shadowNormalBias=O.normalBias,Q.shadowRadius=O.radius,Q.shadowMapSize=O.mapSize,Q.shadowCameraNear=O.camera.near,Q.shadowCameraFar=O.camera.far,i.pointShadow[_]=Q,i.pointShadowMap[_]=k,i.pointShadowMatrix[_]=C.shadow.matrix,T++}i.point[_]=H,_++}else if(C.isHemisphereLight){const H=t.get(C);H.skyColor.copy(C.color).multiplyScalar(B),H.groundColor.copy(C.groundColor).multiplyScalar(B),i.hemi[p]=H,p++}}f>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=at.LTC_FLOAT_1,i.rectAreaLTC2=at.LTC_FLOAT_2):(i.rectAreaLTC1=at.LTC_HALF_1,i.rectAreaLTC2=at.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=u;const g=i.hash;(g.directionalLength!==m||g.pointLength!==_||g.spotLength!==S||g.rectAreaLength!==f||g.hemiLength!==p||g.numDirectionalShadows!==M||g.numPointShadows!==T||g.numSpotShadows!==v||g.numSpotMaps!==b||g.numLightProbes!==A)&&(i.directional.length=m,i.spot.length=S,i.rectArea.length=f,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=v+b-R,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=A,g.directionalLength=m,g.pointLength=_,g.spotLength=S,g.rectAreaLength=f,g.hemiLength=p,g.numDirectionalShadows=M,g.numPointShadows=T,g.numSpotShadows=v,g.numSpotMaps=b,g.numLightProbes=A,i.version=hg++)}function l(o,d){let h=0,u=0,m=0,_=0,S=0;const f=d.matrixWorldInverse;for(let p=0,M=o.length;p<M;p++){const T=o[p];if(T.isDirectionalLight){const v=i.directional[h];v.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(f),h++}else if(T.isSpotLight){const v=i.spot[m];v.position.setFromMatrixPosition(T.matrixWorld),v.position.applyMatrix4(f),v.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(f),m++}else if(T.isRectAreaLight){const v=i.rectArea[_];v.position.setFromMatrixPosition(T.matrixWorld),v.position.applyMatrix4(f),a.identity(),s.copy(T.matrixWorld),s.premultiply(f),a.extractRotation(s),v.halfWidth.set(T.width*.5,0,0),v.halfHeight.set(0,T.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),_++}else if(T.isPointLight){const v=i.point[u];v.position.setFromMatrixPosition(T.matrixWorld),v.position.applyMatrix4(f),u++}else if(T.isHemisphereLight){const v=i.hemi[S];v.direction.setFromMatrixPosition(T.matrixWorld),v.direction.transformDirection(f),S++}}}return{setup:c,setupView:l,state:i}}function gl(n){const t=new dg(n),e=[],i=[];function r(d){o.camera=d,e.length=0,i.length=0}function s(d){e.push(d)}function a(d){i.push(d)}function c(){t.setup(e)}function l(d){t.setupView(e,d)}const o={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:o,setupLights:c,setupLightsView:l,pushLight:s,pushShadow:a}}function pg(n){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let c;return a===void 0?(c=new gl(n),t.set(r,[c])):s>=a.length?(c=new gl(n),a.push(c)):c=a[s],c}function i(){t=new WeakMap}return{get:e,dispose:i}}const mg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,_g=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],xg=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],_l=new ee,gr=new F,Ma=new F;function vg(n,t,e){let i=new ko;const r=new Lt,s=new Lt,a=new le,c=new Cf,l=new Pf,o={},d=e.maxTextureSize,h={[jn]:Oe,[Oe]:jn,[en]:en},u=new xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:mg,fragmentShader:gg}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const _=new Pe;_.setAttribute("position",new Ke(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new _e(_,u),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_s;let p=this.type;this.render=function(R,A,g){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||R.length===0)return;this.type===Qu&&(wt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=_s);const E=n.getRenderTarget(),z=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),I=n.state;I.setBlending(Pn),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const B=p!==this.type;B&&A.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(k=>k.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,k=R.length;N<k;N++){const H=R[N],O=H.shadow;if(O===void 0){wt("WebGLShadowMap:",H,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);const Q=O.getFrameExtents();r.multiply(Q),s.copy(O.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/Q.x),r.x=s.x*Q.x,O.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/Q.y),r.y=s.y*Q.y,O.mapSize.y=s.y));const j=n.state.buffers.depth.getReversed();if(O.camera._reversedDepth=j,O.map===null||B===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===vr){if(H.isPointLight){wt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new mn(r.x,r.y,{format:Yi,type:Un,minFilter:Re,magFilter:Re,generateMipmaps:!1}),O.map.texture.name=H.name+".shadowMap",O.map.depthTexture=new Rr(r.x,r.y,rn),O.map.depthTexture.name=H.name+".shadowMapDepth",O.map.depthTexture.format=Nn,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Te,O.map.depthTexture.magFilter=Te}else H.isPointLight?(O.map=new hu(r.x),O.map.depthTexture=new Ef(r.x,gn)):(O.map=new mn(r.x,r.y),O.map.depthTexture=new Rr(r.x,r.y,gn)),O.map.depthTexture.name=H.name+".shadowMap",O.map.depthTexture.format=Nn,this.type===_s?(O.map.depthTexture.compareFunction=j?Io:Lo,O.map.depthTexture.minFilter=Re,O.map.depthTexture.magFilter=Re):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Te,O.map.depthTexture.magFilter=Te);O.camera.updateProjectionMatrix()}const lt=O.map.isWebGLCubeRenderTarget?6:1;for(let pt=0;pt<lt;pt++){if(O.map.isWebGLCubeRenderTarget)n.setRenderTarget(O.map,pt),n.clear();else{pt===0&&(n.setRenderTarget(O.map),n.clear());const ht=O.getViewport(pt);a.set(s.x*ht.x,s.y*ht.y,s.x*ht.z,s.y*ht.w),I.viewport(a)}if(H.isPointLight){const ht=O.camera,Nt=O.matrix,oe=H.distance||ht.far;oe!==ht.far&&(ht.far=oe,ht.updateProjectionMatrix()),gr.setFromMatrixPosition(H.matrixWorld),ht.position.copy(gr),Ma.copy(ht.position),Ma.add(_g[pt]),ht.up.copy(xg[pt]),ht.lookAt(Ma),ht.updateMatrixWorld(),Nt.makeTranslation(-gr.x,-gr.y,-gr.z),_l.multiplyMatrices(ht.projectionMatrix,ht.matrixWorldInverse),O._frustum.setFromProjectionMatrix(_l,ht.coordinateSystem,ht.reversedDepth)}else O.updateMatrices(H);i=O.getFrustum(),v(A,g,O.camera,H,this.type)}O.isPointLightShadow!==!0&&this.type===vr&&M(O,g),O.needsUpdate=!1}p=this.type,f.needsUpdate=!1,n.setRenderTarget(E,z,C)};function M(R,A){const g=t.update(S);u.defines.VSM_SAMPLES!==R.blurSamples&&(u.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new mn(r.x,r.y,{format:Yi,type:Un})),u.uniforms.shadow_pass.value=R.map.depthTexture,u.uniforms.resolution.value=R.mapSize,u.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(A,null,g,u,S,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(A,null,g,m,S,null)}function T(R,A,g,E){let z=null;const C=g.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(C!==void 0)z=C;else if(z=g.isPointLight===!0?l:c,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const I=z.uuid,B=A.uuid;let N=o[I];N===void 0&&(N={},o[I]=N);let k=N[B];k===void 0&&(k=z.clone(),N[B]=k,A.addEventListener("dispose",b)),z=k}if(z.visible=A.visible,z.wireframe=A.wireframe,E===vr?z.side=A.shadowSide!==null?A.shadowSide:A.side:z.side=A.shadowSide!==null?A.shadowSide:h[A.side],z.alphaMap=A.alphaMap,z.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,z.map=A.map,z.clipShadows=A.clipShadows,z.clippingPlanes=A.clippingPlanes,z.clipIntersection=A.clipIntersection,z.displacementMap=A.displacementMap,z.displacementScale=A.displacementScale,z.displacementBias=A.displacementBias,z.wireframeLinewidth=A.wireframeLinewidth,z.linewidth=A.linewidth,g.isPointLight===!0&&z.isMeshDistanceMaterial===!0){const I=n.properties.get(z);I.light=g}return z}function v(R,A,g,E,z){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&z===vr)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,R.matrixWorld);const B=t.update(R),N=R.material;if(Array.isArray(N)){const k=B.groups;for(let H=0,O=k.length;H<O;H++){const Q=k[H],j=N[Q.materialIndex];if(j&&j.visible){const lt=T(R,j,E,z);R.onBeforeShadow(n,R,A,g,B,lt,Q),n.renderBufferDirect(g,null,B,lt,R,Q),R.onAfterShadow(n,R,A,g,B,lt,Q)}}}else if(N.visible){const k=T(R,N,E,z);R.onBeforeShadow(n,R,A,g,B,k,null),n.renderBufferDirect(g,null,B,k,R,null),R.onAfterShadow(n,R,A,g,B,k,null)}}const I=R.children;for(let B=0,N=I.length;B<N;B++)v(I[B],A,g,E,z)}function b(R){R.target.removeEventListener("dispose",b);for(const g in o){const E=o[g],z=R.target.uuid;z in E&&(E[z].dispose(),delete E[z])}}}function Mg(n,t){function e(){let D=!1;const rt=new le;let et=null;const dt=new le(0,0,0,0);return{setMask:function(J){et!==J&&!D&&(n.colorMask(J,J,J,J),et=J)},setLocked:function(J){D=J},setClear:function(J,X,_t,Ct,se){se===!0&&(J*=Ct,X*=Ct,_t*=Ct),rt.set(J,X,_t,Ct),dt.equals(rt)===!1&&(n.clearColor(J,X,_t,Ct),dt.copy(rt))},reset:function(){D=!1,et=null,dt.set(-1,0,0,0)}}}function i(){let D=!1,rt=!1,et=null,dt=null,J=null;return{setReversed:function(X){if(rt!==X){const _t=t.get("EXT_clip_control");X?_t.clipControlEXT(_t.LOWER_LEFT_EXT,_t.ZERO_TO_ONE_EXT):_t.clipControlEXT(_t.LOWER_LEFT_EXT,_t.NEGATIVE_ONE_TO_ONE_EXT),rt=X;const Ct=J;J=null,this.setClear(Ct)}},getReversed:function(){return rt},setTest:function(X){X?nt(n.DEPTH_TEST):st(n.DEPTH_TEST)},setMask:function(X){et!==X&&!D&&(n.depthMask(X),et=X)},setFunc:function(X){if(rt&&(X=Lh[X]),dt!==X){switch(X){case Aa:n.depthFunc(n.NEVER);break;case wa:n.depthFunc(n.ALWAYS);break;case Ra:n.depthFunc(n.LESS);break;case Xi:n.depthFunc(n.LEQUAL);break;case Ca:n.depthFunc(n.EQUAL);break;case Pa:n.depthFunc(n.GEQUAL);break;case Da:n.depthFunc(n.GREATER);break;case La:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}dt=X}},setLocked:function(X){D=X},setClear:function(X){J!==X&&(J=X,rt&&(X=1-X),n.clearDepth(X))},reset:function(){D=!1,et=null,dt=null,J=null,rt=!1}}}function r(){let D=!1,rt=null,et=null,dt=null,J=null,X=null,_t=null,Ct=null,se=null;return{setTest:function(jt){D||(jt?nt(n.STENCIL_TEST):st(n.STENCIL_TEST))},setMask:function(jt){rt!==jt&&!D&&(n.stencilMask(jt),rt=jt)},setFunc:function(jt,Sn,yn){(et!==jt||dt!==Sn||J!==yn)&&(n.stencilFunc(jt,Sn,yn),et=jt,dt=Sn,J=yn)},setOp:function(jt,Sn,yn){(X!==jt||_t!==Sn||Ct!==yn)&&(n.stencilOp(jt,Sn,yn),X=jt,_t=Sn,Ct=yn)},setLocked:function(jt){D=jt},setClear:function(jt){se!==jt&&(n.clearStencil(jt),se=jt)},reset:function(){D=!1,rt=null,et=null,dt=null,J=null,X=null,_t=null,Ct=null,se=null}}}const s=new e,a=new i,c=new r,l=new WeakMap,o=new WeakMap;let d={},h={},u=new WeakMap,m=[],_=null,S=!1,f=null,p=null,M=null,T=null,v=null,b=null,R=null,A=new Bt(0,0,0),g=0,E=!1,z=null,C=null,I=null,B=null,N=null;const k=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,O=0;const Q=n.getParameter(n.VERSION);Q.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(Q)[1]),H=O>=1):Q.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),H=O>=2);let j=null,lt={};const pt=n.getParameter(n.SCISSOR_BOX),ht=n.getParameter(n.VIEWPORT),Nt=new le().fromArray(pt),oe=new le().fromArray(ht);function ae(D,rt,et,dt){const J=new Uint8Array(4),X=n.createTexture();n.bindTexture(D,X),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let _t=0;_t<et;_t++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(rt,0,n.RGBA,1,1,dt,0,n.RGBA,n.UNSIGNED_BYTE,J):n.texImage2D(rt+_t,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,J);return X}const Z={};Z[n.TEXTURE_2D]=ae(n.TEXTURE_2D,n.TEXTURE_2D,1),Z[n.TEXTURE_CUBE_MAP]=ae(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[n.TEXTURE_2D_ARRAY]=ae(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Z[n.TEXTURE_3D]=ae(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),c.setClear(0),nt(n.DEPTH_TEST),a.setFunc(Xi),zt(!1),fe(hc),nt(n.CULL_FACE),Kt(Pn);function nt(D){d[D]!==!0&&(n.enable(D),d[D]=!0)}function st(D){d[D]!==!1&&(n.disable(D),d[D]=!1)}function It(D,rt){return h[D]!==rt?(n.bindFramebuffer(D,rt),h[D]=rt,D===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=rt),D===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=rt),!0):!1}function bt(D,rt){let et=m,dt=!1;if(D){et=u.get(rt),et===void 0&&(et=[],u.set(rt,et));const J=D.textures;if(et.length!==J.length||et[0]!==n.COLOR_ATTACHMENT0){for(let X=0,_t=J.length;X<_t;X++)et[X]=n.COLOR_ATTACHMENT0+X;et.length=J.length,dt=!0}}else et[0]!==n.BACK&&(et[0]=n.BACK,dt=!0);dt&&n.drawBuffers(et)}function Rt(D){return _!==D?(n.useProgram(D),_=D,!0):!1}const Me={[oi]:n.FUNC_ADD,[eh]:n.FUNC_SUBTRACT,[nh]:n.FUNC_REVERSE_SUBTRACT};Me[ih]=n.MIN,Me[rh]=n.MAX;const Xt={[sh]:n.ZERO,[ah]:n.ONE,[oh]:n.SRC_COLOR,[Ta]:n.SRC_ALPHA,[dh]:n.SRC_ALPHA_SATURATE,[hh]:n.DST_COLOR,[lh]:n.DST_ALPHA,[ch]:n.ONE_MINUS_SRC_COLOR,[ba]:n.ONE_MINUS_SRC_ALPHA,[fh]:n.ONE_MINUS_DST_COLOR,[uh]:n.ONE_MINUS_DST_ALPHA,[ph]:n.CONSTANT_COLOR,[mh]:n.ONE_MINUS_CONSTANT_COLOR,[gh]:n.CONSTANT_ALPHA,[_h]:n.ONE_MINUS_CONSTANT_ALPHA};function Kt(D,rt,et,dt,J,X,_t,Ct,se,jt){if(D===Pn){S===!0&&(st(n.BLEND),S=!1);return}if(S===!1&&(nt(n.BLEND),S=!0),D!==th){if(D!==f||jt!==E){if((p!==oi||v!==oi)&&(n.blendEquation(n.FUNC_ADD),p=oi,v=oi),jt)switch(D){case Gi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case fc:n.blendFunc(n.ONE,n.ONE);break;case dc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case pc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Wt("WebGLState: Invalid blending: ",D);break}else switch(D){case Gi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case fc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case dc:Wt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case pc:Wt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Wt("WebGLState: Invalid blending: ",D);break}M=null,T=null,b=null,R=null,A.set(0,0,0),g=0,f=D,E=jt}return}J=J||rt,X=X||et,_t=_t||dt,(rt!==p||J!==v)&&(n.blendEquationSeparate(Me[rt],Me[J]),p=rt,v=J),(et!==M||dt!==T||X!==b||_t!==R)&&(n.blendFuncSeparate(Xt[et],Xt[dt],Xt[X],Xt[_t]),M=et,T=dt,b=X,R=_t),(Ct.equals(A)===!1||se!==g)&&(n.blendColor(Ct.r,Ct.g,Ct.b,se),A.copy(Ct),g=se),f=D,E=!1}function ne(D,rt){D.side===en?st(n.CULL_FACE):nt(n.CULL_FACE);let et=D.side===Oe;rt&&(et=!et),zt(et),D.blending===Gi&&D.transparent===!1?Kt(Pn):Kt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),s.setMask(D.colorWrite);const dt=D.stencilWrite;c.setTest(dt),dt&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),pe(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?nt(n.SAMPLE_ALPHA_TO_COVERAGE):st(n.SAMPLE_ALPHA_TO_COVERAGE)}function zt(D){z!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),z=D)}function fe(D){D!==$u?(nt(n.CULL_FACE),D!==C&&(D===hc?n.cullFace(n.BACK):D===Ju?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):st(n.CULL_FACE),C=D}function P(D){D!==I&&(H&&n.lineWidth(D),I=D)}function pe(D,rt,et){D?(nt(n.POLYGON_OFFSET_FILL),(B!==rt||N!==et)&&(B=rt,N=et,a.getReversed()&&(rt=-rt),n.polygonOffset(rt,et))):st(n.POLYGON_OFFSET_FILL)}function Zt(D){D?nt(n.SCISSOR_TEST):st(n.SCISSOR_TEST)}function re(D){D===void 0&&(D=n.TEXTURE0+k-1),j!==D&&(n.activeTexture(D),j=D)}function Mt(D,rt,et){et===void 0&&(j===null?et=n.TEXTURE0+k-1:et=j);let dt=lt[et];dt===void 0&&(dt={type:void 0,texture:void 0},lt[et]=dt),(dt.type!==D||dt.texture!==rt)&&(j!==et&&(n.activeTexture(et),j=et),n.bindTexture(D,rt||Z[D]),dt.type=D,dt.texture=rt)}function w(){const D=lt[j];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function x(){try{n.compressedTexImage2D(...arguments)}catch(D){Wt("WebGLState:",D)}}function L(){try{n.compressedTexImage3D(...arguments)}catch(D){Wt("WebGLState:",D)}}function Y(){try{n.texSubImage2D(...arguments)}catch(D){Wt("WebGLState:",D)}}function K(){try{n.texSubImage3D(...arguments)}catch(D){Wt("WebGLState:",D)}}function q(){try{n.compressedTexSubImage2D(...arguments)}catch(D){Wt("WebGLState:",D)}}function mt(){try{n.compressedTexSubImage3D(...arguments)}catch(D){Wt("WebGLState:",D)}}function it(){try{n.texStorage2D(...arguments)}catch(D){Wt("WebGLState:",D)}}function Tt(){try{n.texStorage3D(...arguments)}catch(D){Wt("WebGLState:",D)}}function At(){try{n.texImage2D(...arguments)}catch(D){Wt("WebGLState:",D)}}function $(){try{n.texImage3D(...arguments)}catch(D){Wt("WebGLState:",D)}}function tt(D){Nt.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),Nt.copy(D))}function gt(D){oe.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),oe.copy(D))}function xt(D,rt){let et=o.get(rt);et===void 0&&(et=new WeakMap,o.set(rt,et));let dt=et.get(D);dt===void 0&&(dt=n.getUniformBlockIndex(rt,D.name),et.set(D,dt))}function ut(D,rt){const dt=o.get(rt).get(D);l.get(rt)!==dt&&(n.uniformBlockBinding(rt,dt,D.__bindingPointIndex),l.set(rt,dt))}function kt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},j=null,lt={},h={},u=new WeakMap,m=[],_=null,S=!1,f=null,p=null,M=null,T=null,v=null,b=null,R=null,A=new Bt(0,0,0),g=0,E=!1,z=null,C=null,I=null,B=null,N=null,Nt.set(0,0,n.canvas.width,n.canvas.height),oe.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),c.reset()}return{buffers:{color:s,depth:a,stencil:c},enable:nt,disable:st,bindFramebuffer:It,drawBuffers:bt,useProgram:Rt,setBlending:Kt,setMaterial:ne,setFlipSided:zt,setCullFace:fe,setLineWidth:P,setPolygonOffset:pe,setScissorTest:Zt,activeTexture:re,bindTexture:Mt,unbindTexture:w,compressedTexImage2D:x,compressedTexImage3D:L,texImage2D:At,texImage3D:$,updateUBOMapping:xt,uniformBlockBinding:ut,texStorage2D:it,texStorage3D:Tt,texSubImage2D:Y,texSubImage3D:K,compressedTexSubImage2D:q,compressedTexSubImage3D:mt,scissor:tt,viewport:gt,reset:kt}}function Sg(n,t,e,i,r,s,a){const c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),o=new Lt,d=new WeakMap;let h;const u=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(w,x){return m?new OffscreenCanvas(w,x):As("canvas")}function S(w,x,L){let Y=1;const K=Mt(w);if((K.width>L||K.height>L)&&(Y=L/Math.max(K.width,K.height)),Y<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const q=Math.floor(Y*K.width),mt=Math.floor(Y*K.height);h===void 0&&(h=_(q,mt));const it=x?_(q,mt):h;return it.width=q,it.height=mt,it.getContext("2d").drawImage(w,0,0,q,mt),wt("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+q+"x"+mt+")."),it}else return"data"in w&&wt("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),w;return w}function f(w){return w.generateMipmaps}function p(w){n.generateMipmap(w)}function M(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(w,x,L,Y,K=!1){if(w!==null){if(n[w]!==void 0)return n[w];wt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let q=x;if(x===n.RED&&(L===n.FLOAT&&(q=n.R32F),L===n.HALF_FLOAT&&(q=n.R16F),L===n.UNSIGNED_BYTE&&(q=n.R8)),x===n.RED_INTEGER&&(L===n.UNSIGNED_BYTE&&(q=n.R8UI),L===n.UNSIGNED_SHORT&&(q=n.R16UI),L===n.UNSIGNED_INT&&(q=n.R32UI),L===n.BYTE&&(q=n.R8I),L===n.SHORT&&(q=n.R16I),L===n.INT&&(q=n.R32I)),x===n.RG&&(L===n.FLOAT&&(q=n.RG32F),L===n.HALF_FLOAT&&(q=n.RG16F),L===n.UNSIGNED_BYTE&&(q=n.RG8)),x===n.RG_INTEGER&&(L===n.UNSIGNED_BYTE&&(q=n.RG8UI),L===n.UNSIGNED_SHORT&&(q=n.RG16UI),L===n.UNSIGNED_INT&&(q=n.RG32UI),L===n.BYTE&&(q=n.RG8I),L===n.SHORT&&(q=n.RG16I),L===n.INT&&(q=n.RG32I)),x===n.RGB_INTEGER&&(L===n.UNSIGNED_BYTE&&(q=n.RGB8UI),L===n.UNSIGNED_SHORT&&(q=n.RGB16UI),L===n.UNSIGNED_INT&&(q=n.RGB32UI),L===n.BYTE&&(q=n.RGB8I),L===n.SHORT&&(q=n.RGB16I),L===n.INT&&(q=n.RGB32I)),x===n.RGBA_INTEGER&&(L===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),L===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),L===n.UNSIGNED_INT&&(q=n.RGBA32UI),L===n.BYTE&&(q=n.RGBA8I),L===n.SHORT&&(q=n.RGBA16I),L===n.INT&&(q=n.RGBA32I)),x===n.RGB&&(L===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),L===n.UNSIGNED_INT_10F_11F_11F_REV&&(q=n.R11F_G11F_B10F)),x===n.RGBA){const mt=K?bs:qt.getTransfer(Y);L===n.FLOAT&&(q=n.RGBA32F),L===n.HALF_FLOAT&&(q=n.RGBA16F),L===n.UNSIGNED_BYTE&&(q=mt===$t?n.SRGB8_ALPHA8:n.RGBA8),L===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),L===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function v(w,x){let L;return w?x===null||x===gn||x===Ar?L=n.DEPTH24_STENCIL8:x===rn?L=n.DEPTH32F_STENCIL8:x===br&&(L=n.DEPTH24_STENCIL8,wt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===gn||x===Ar?L=n.DEPTH_COMPONENT24:x===rn?L=n.DEPTH_COMPONENT32F:x===br&&(L=n.DEPTH_COMPONENT16),L}function b(w,x){return f(w)===!0||w.isFramebufferTexture&&w.minFilter!==Te&&w.minFilter!==Re?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function R(w){const x=w.target;x.removeEventListener("dispose",R),g(x),x.isVideoTexture&&d.delete(x)}function A(w){const x=w.target;x.removeEventListener("dispose",A),z(x)}function g(w){const x=i.get(w);if(x.__webglInit===void 0)return;const L=w.source,Y=u.get(L);if(Y){const K=Y[x.__cacheKey];K.usedTimes--,K.usedTimes===0&&E(w),Object.keys(Y).length===0&&u.delete(L)}i.remove(w)}function E(w){const x=i.get(w);n.deleteTexture(x.__webglTexture);const L=w.source,Y=u.get(L);delete Y[x.__cacheKey],a.memory.textures--}function z(w){const x=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(x.__webglFramebuffer[Y]))for(let K=0;K<x.__webglFramebuffer[Y].length;K++)n.deleteFramebuffer(x.__webglFramebuffer[Y][K]);else n.deleteFramebuffer(x.__webglFramebuffer[Y]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[Y])}else{if(Array.isArray(x.__webglFramebuffer))for(let Y=0;Y<x.__webglFramebuffer.length;Y++)n.deleteFramebuffer(x.__webglFramebuffer[Y]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Y=0;Y<x.__webglColorRenderbuffer.length;Y++)x.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[Y]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const L=w.textures;for(let Y=0,K=L.length;Y<K;Y++){const q=i.get(L[Y]);q.__webglTexture&&(n.deleteTexture(q.__webglTexture),a.memory.textures--),i.remove(L[Y])}i.remove(w)}let C=0;function I(){C=0}function B(){const w=C;return w>=r.maxTextures&&wt("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),C+=1,w}function N(w){const x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function k(w,x){const L=i.get(w);if(w.isVideoTexture&&Zt(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&L.__version!==w.version){const Y=w.image;if(Y===null)wt("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)wt("WebGLRenderer: Texture marked for update but image is incomplete");else{Z(L,w,x);return}}else w.isExternalTexture&&(L.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,L.__webglTexture,n.TEXTURE0+x)}function H(w,x){const L=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&L.__version!==w.version){Z(L,w,x);return}else w.isExternalTexture&&(L.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,L.__webglTexture,n.TEXTURE0+x)}function O(w,x){const L=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&L.__version!==w.version){Z(L,w,x);return}e.bindTexture(n.TEXTURE_3D,L.__webglTexture,n.TEXTURE0+x)}function Q(w,x){const L=i.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&L.__version!==w.version){nt(L,w,x);return}e.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+x)}const j={[Ia]:n.REPEAT,[Cn]:n.CLAMP_TO_EDGE,[Ua]:n.MIRRORED_REPEAT},lt={[Te]:n.NEAREST,[Mh]:n.NEAREST_MIPMAP_NEAREST,[Or]:n.NEAREST_MIPMAP_LINEAR,[Re]:n.LINEAR,[Hs]:n.LINEAR_MIPMAP_NEAREST,[li]:n.LINEAR_MIPMAP_LINEAR},pt={[Eh]:n.NEVER,[Rh]:n.ALWAYS,[Th]:n.LESS,[Lo]:n.LEQUAL,[bh]:n.EQUAL,[Io]:n.GEQUAL,[Ah]:n.GREATER,[wh]:n.NOTEQUAL};function ht(w,x){if(x.type===rn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Re||x.magFilter===Hs||x.magFilter===Or||x.magFilter===li||x.minFilter===Re||x.minFilter===Hs||x.minFilter===Or||x.minFilter===li)&&wt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,j[x.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,j[x.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,j[x.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,lt[x.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,lt[x.minFilter]),x.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,pt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Te||x.minFilter!==Or&&x.minFilter!==li||x.type===rn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const L=t.get("EXT_texture_filter_anisotropic");n.texParameterf(w,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Nt(w,x){let L=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",R));const Y=x.source;let K=u.get(Y);K===void 0&&(K={},u.set(Y,K));const q=N(x);if(q!==w.__cacheKey){K[q]===void 0&&(K[q]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,L=!0),K[q].usedTimes++;const mt=K[w.__cacheKey];mt!==void 0&&(K[w.__cacheKey].usedTimes--,mt.usedTimes===0&&E(x)),w.__cacheKey=q,w.__webglTexture=K[q].texture}return L}function oe(w,x,L){return Math.floor(Math.floor(w/L)/x)}function ae(w,x,L,Y){const q=w.updateRanges;if(q.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,L,Y,x.data);else{q.sort(($,tt)=>$.start-tt.start);let mt=0;for(let $=1;$<q.length;$++){const tt=q[mt],gt=q[$],xt=tt.start+tt.count,ut=oe(gt.start,x.width,4),kt=oe(tt.start,x.width,4);gt.start<=xt+1&&ut===kt&&oe(gt.start+gt.count-1,x.width,4)===ut?tt.count=Math.max(tt.count,gt.start+gt.count-tt.start):(++mt,q[mt]=gt)}q.length=mt+1;const it=n.getParameter(n.UNPACK_ROW_LENGTH),Tt=n.getParameter(n.UNPACK_SKIP_PIXELS),At=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let $=0,tt=q.length;$<tt;$++){const gt=q[$],xt=Math.floor(gt.start/4),ut=Math.ceil(gt.count/4),kt=xt%x.width,D=Math.floor(xt/x.width),rt=ut,et=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,kt),n.pixelStorei(n.UNPACK_SKIP_ROWS,D),e.texSubImage2D(n.TEXTURE_2D,0,kt,D,rt,et,L,Y,x.data)}w.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,it),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Tt),n.pixelStorei(n.UNPACK_SKIP_ROWS,At)}}function Z(w,x,L){let Y=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Y=n.TEXTURE_3D);const K=Nt(w,x),q=x.source;e.bindTexture(Y,w.__webglTexture,n.TEXTURE0+L);const mt=i.get(q);if(q.version!==mt.__version||K===!0){e.activeTexture(n.TEXTURE0+L);const it=qt.getPrimaries(qt.workingColorSpace),Tt=x.colorSpace===qn?null:qt.getPrimaries(x.colorSpace),At=x.colorSpace===qn||it===Tt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);let $=S(x.image,!1,r.maxTextureSize);$=re(x,$);const tt=s.convert(x.format,x.colorSpace),gt=s.convert(x.type);let xt=T(x.internalFormat,tt,gt,x.colorSpace,x.isVideoTexture);ht(Y,x);let ut;const kt=x.mipmaps,D=x.isVideoTexture!==!0,rt=mt.__version===void 0||K===!0,et=q.dataReady,dt=b(x,$);if(x.isDepthTexture)xt=v(x.format===ui,x.type),rt&&(D?e.texStorage2D(n.TEXTURE_2D,1,xt,$.width,$.height):e.texImage2D(n.TEXTURE_2D,0,xt,$.width,$.height,0,tt,gt,null));else if(x.isDataTexture)if(kt.length>0){D&&rt&&e.texStorage2D(n.TEXTURE_2D,dt,xt,kt[0].width,kt[0].height);for(let J=0,X=kt.length;J<X;J++)ut=kt[J],D?et&&e.texSubImage2D(n.TEXTURE_2D,J,0,0,ut.width,ut.height,tt,gt,ut.data):e.texImage2D(n.TEXTURE_2D,J,xt,ut.width,ut.height,0,tt,gt,ut.data);x.generateMipmaps=!1}else D?(rt&&e.texStorage2D(n.TEXTURE_2D,dt,xt,$.width,$.height),et&&ae(x,$,tt,gt)):e.texImage2D(n.TEXTURE_2D,0,xt,$.width,$.height,0,tt,gt,$.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){D&&rt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,dt,xt,kt[0].width,kt[0].height,$.depth);for(let J=0,X=kt.length;J<X;J++)if(ut=kt[J],x.format!==sn)if(tt!==null)if(D){if(et)if(x.layerUpdates.size>0){const _t=Zc(ut.width,ut.height,x.format,x.type);for(const Ct of x.layerUpdates){const se=ut.data.subarray(Ct*_t/ut.data.BYTES_PER_ELEMENT,(Ct+1)*_t/ut.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,Ct,ut.width,ut.height,1,tt,se)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,ut.width,ut.height,$.depth,tt,ut.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,J,xt,ut.width,ut.height,$.depth,0,ut.data,0,0);else wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?et&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,ut.width,ut.height,$.depth,tt,gt,ut.data):e.texImage3D(n.TEXTURE_2D_ARRAY,J,xt,ut.width,ut.height,$.depth,0,tt,gt,ut.data)}else{D&&rt&&e.texStorage2D(n.TEXTURE_2D,dt,xt,kt[0].width,kt[0].height);for(let J=0,X=kt.length;J<X;J++)ut=kt[J],x.format!==sn?tt!==null?D?et&&e.compressedTexSubImage2D(n.TEXTURE_2D,J,0,0,ut.width,ut.height,tt,ut.data):e.compressedTexImage2D(n.TEXTURE_2D,J,xt,ut.width,ut.height,0,ut.data):wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?et&&e.texSubImage2D(n.TEXTURE_2D,J,0,0,ut.width,ut.height,tt,gt,ut.data):e.texImage2D(n.TEXTURE_2D,J,xt,ut.width,ut.height,0,tt,gt,ut.data)}else if(x.isDataArrayTexture)if(D){if(rt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,dt,xt,$.width,$.height,$.depth),et)if(x.layerUpdates.size>0){const J=Zc($.width,$.height,x.format,x.type);for(const X of x.layerUpdates){const _t=$.data.subarray(X*J/$.data.BYTES_PER_ELEMENT,(X+1)*J/$.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,X,$.width,$.height,1,tt,gt,_t)}x.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,tt,gt,$.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,xt,$.width,$.height,$.depth,0,tt,gt,$.data);else if(x.isData3DTexture)D?(rt&&e.texStorage3D(n.TEXTURE_3D,dt,xt,$.width,$.height,$.depth),et&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,tt,gt,$.data)):e.texImage3D(n.TEXTURE_3D,0,xt,$.width,$.height,$.depth,0,tt,gt,$.data);else if(x.isFramebufferTexture){if(rt)if(D)e.texStorage2D(n.TEXTURE_2D,dt,xt,$.width,$.height);else{let J=$.width,X=$.height;for(let _t=0;_t<dt;_t++)e.texImage2D(n.TEXTURE_2D,_t,xt,J,X,0,tt,gt,null),J>>=1,X>>=1}}else if(kt.length>0){if(D&&rt){const J=Mt(kt[0]);e.texStorage2D(n.TEXTURE_2D,dt,xt,J.width,J.height)}for(let J=0,X=kt.length;J<X;J++)ut=kt[J],D?et&&e.texSubImage2D(n.TEXTURE_2D,J,0,0,tt,gt,ut):e.texImage2D(n.TEXTURE_2D,J,xt,tt,gt,ut);x.generateMipmaps=!1}else if(D){if(rt){const J=Mt($);e.texStorage2D(n.TEXTURE_2D,dt,xt,J.width,J.height)}et&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,tt,gt,$)}else e.texImage2D(n.TEXTURE_2D,0,xt,tt,gt,$);f(x)&&p(Y),mt.__version=q.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function nt(w,x,L){if(x.image.length!==6)return;const Y=Nt(w,x),K=x.source;e.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+L);const q=i.get(K);if(K.version!==q.__version||Y===!0){e.activeTexture(n.TEXTURE0+L);const mt=qt.getPrimaries(qt.workingColorSpace),it=x.colorSpace===qn?null:qt.getPrimaries(x.colorSpace),Tt=x.colorSpace===qn||mt===it?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);const At=x.isCompressedTexture||x.image[0].isCompressedTexture,$=x.image[0]&&x.image[0].isDataTexture,tt=[];for(let X=0;X<6;X++)!At&&!$?tt[X]=S(x.image[X],!0,r.maxCubemapSize):tt[X]=$?x.image[X].image:x.image[X],tt[X]=re(x,tt[X]);const gt=tt[0],xt=s.convert(x.format,x.colorSpace),ut=s.convert(x.type),kt=T(x.internalFormat,xt,ut,x.colorSpace),D=x.isVideoTexture!==!0,rt=q.__version===void 0||Y===!0,et=K.dataReady;let dt=b(x,gt);ht(n.TEXTURE_CUBE_MAP,x);let J;if(At){D&&rt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,dt,kt,gt.width,gt.height);for(let X=0;X<6;X++){J=tt[X].mipmaps;for(let _t=0;_t<J.length;_t++){const Ct=J[_t];x.format!==sn?xt!==null?D?et&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,_t,0,0,Ct.width,Ct.height,xt,Ct.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,_t,kt,Ct.width,Ct.height,0,Ct.data):wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?et&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,_t,0,0,Ct.width,Ct.height,xt,ut,Ct.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,_t,kt,Ct.width,Ct.height,0,xt,ut,Ct.data)}}}else{if(J=x.mipmaps,D&&rt){J.length>0&&dt++;const X=Mt(tt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,dt,kt,X.width,X.height)}for(let X=0;X<6;X++)if($){D?et&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,tt[X].width,tt[X].height,xt,ut,tt[X].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,kt,tt[X].width,tt[X].height,0,xt,ut,tt[X].data);for(let _t=0;_t<J.length;_t++){const se=J[_t].image[X].image;D?et&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,_t+1,0,0,se.width,se.height,xt,ut,se.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,_t+1,kt,se.width,se.height,0,xt,ut,se.data)}}else{D?et&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,xt,ut,tt[X]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,kt,xt,ut,tt[X]);for(let _t=0;_t<J.length;_t++){const Ct=J[_t];D?et&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,_t+1,0,0,xt,ut,Ct.image[X]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,_t+1,kt,xt,ut,Ct.image[X])}}}f(x)&&p(n.TEXTURE_CUBE_MAP),q.__version=K.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function st(w,x,L,Y,K,q){const mt=s.convert(L.format,L.colorSpace),it=s.convert(L.type),Tt=T(L.internalFormat,mt,it,L.colorSpace),At=i.get(x),$=i.get(L);if($.__renderTarget=x,!At.__hasExternalTextures){const tt=Math.max(1,x.width>>q),gt=Math.max(1,x.height>>q);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?e.texImage3D(K,q,Tt,tt,gt,x.depth,0,mt,it,null):e.texImage2D(K,q,Tt,tt,gt,0,mt,it,null)}e.bindFramebuffer(n.FRAMEBUFFER,w),pe(x)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,K,$.__webglTexture,0,P(x)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,K,$.__webglTexture,q),e.bindFramebuffer(n.FRAMEBUFFER,null)}function It(w,x,L){if(n.bindRenderbuffer(n.RENDERBUFFER,w),x.depthBuffer){const Y=x.depthTexture,K=Y&&Y.isDepthTexture?Y.type:null,q=v(x.stencilBuffer,K),mt=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;pe(x)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,P(x),q,x.width,x.height):L?n.renderbufferStorageMultisample(n.RENDERBUFFER,P(x),q,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,q,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,mt,n.RENDERBUFFER,w)}else{const Y=x.textures;for(let K=0;K<Y.length;K++){const q=Y[K],mt=s.convert(q.format,q.colorSpace),it=s.convert(q.type),Tt=T(q.internalFormat,mt,it,q.colorSpace);pe(x)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,P(x),Tt,x.width,x.height):L?n.renderbufferStorageMultisample(n.RENDERBUFFER,P(x),Tt,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Tt,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function bt(w,x,L){const Y=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=i.get(x.depthTexture);if(K.__renderTarget=x,(!K.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Y){if(K.__webglInit===void 0&&(K.__webglInit=!0,x.depthTexture.addEventListener("dispose",R)),K.__webglTexture===void 0){K.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),ht(n.TEXTURE_CUBE_MAP,x.depthTexture);const At=s.convert(x.depthTexture.format),$=s.convert(x.depthTexture.type);let tt;x.depthTexture.format===Nn?tt=n.DEPTH_COMPONENT24:x.depthTexture.format===ui&&(tt=n.DEPTH24_STENCIL8);for(let gt=0;gt<6;gt++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,tt,x.width,x.height,0,At,$,null)}}else k(x.depthTexture,0);const q=K.__webglTexture,mt=P(x),it=Y?n.TEXTURE_CUBE_MAP_POSITIVE_X+L:n.TEXTURE_2D,Tt=x.depthTexture.format===ui?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(x.depthTexture.format===Nn)pe(x)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Tt,it,q,0,mt):n.framebufferTexture2D(n.FRAMEBUFFER,Tt,it,q,0);else if(x.depthTexture.format===ui)pe(x)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Tt,it,q,0,mt):n.framebufferTexture2D(n.FRAMEBUFFER,Tt,it,q,0);else throw new Error("Unknown depthTexture format")}function Rt(w){const x=i.get(w),L=w.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==w.depthTexture){const Y=w.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Y){const K=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Y.removeEventListener("dispose",K)};Y.addEventListener("dispose",K),x.__depthDisposeCallback=K}x.__boundDepthTexture=Y}if(w.depthTexture&&!x.__autoAllocateDepthBuffer)if(L)for(let Y=0;Y<6;Y++)bt(x.__webglFramebuffer[Y],w,Y);else{const Y=w.texture.mipmaps;Y&&Y.length>0?bt(x.__webglFramebuffer[0],w,0):bt(x.__webglFramebuffer,w,0)}else if(L){x.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[Y]),x.__webglDepthbuffer[Y]===void 0)x.__webglDepthbuffer[Y]=n.createRenderbuffer(),It(x.__webglDepthbuffer[Y],w,!1);else{const K=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=x.__webglDepthbuffer[Y];n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,q)}}else{const Y=w.texture.mipmaps;if(Y&&Y.length>0?e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),It(x.__webglDepthbuffer,w,!1);else{const K=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,q)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Me(w,x,L){const Y=i.get(w);x!==void 0&&st(Y.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),L!==void 0&&Rt(w)}function Xt(w){const x=w.texture,L=i.get(w),Y=i.get(x);w.addEventListener("dispose",A);const K=w.textures,q=w.isWebGLCubeRenderTarget===!0,mt=K.length>1;if(mt||(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=x.version,a.memory.textures++),q){L.__webglFramebuffer=[];for(let it=0;it<6;it++)if(x.mipmaps&&x.mipmaps.length>0){L.__webglFramebuffer[it]=[];for(let Tt=0;Tt<x.mipmaps.length;Tt++)L.__webglFramebuffer[it][Tt]=n.createFramebuffer()}else L.__webglFramebuffer[it]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){L.__webglFramebuffer=[];for(let it=0;it<x.mipmaps.length;it++)L.__webglFramebuffer[it]=n.createFramebuffer()}else L.__webglFramebuffer=n.createFramebuffer();if(mt)for(let it=0,Tt=K.length;it<Tt;it++){const At=i.get(K[it]);At.__webglTexture===void 0&&(At.__webglTexture=n.createTexture(),a.memory.textures++)}if(w.samples>0&&pe(w)===!1){L.__webglMultisampledFramebuffer=n.createFramebuffer(),L.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let it=0;it<K.length;it++){const Tt=K[it];L.__webglColorRenderbuffer[it]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,L.__webglColorRenderbuffer[it]);const At=s.convert(Tt.format,Tt.colorSpace),$=s.convert(Tt.type),tt=T(Tt.internalFormat,At,$,Tt.colorSpace,w.isXRRenderTarget===!0),gt=P(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,gt,tt,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+it,n.RENDERBUFFER,L.__webglColorRenderbuffer[it])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(L.__webglDepthRenderbuffer=n.createRenderbuffer(),It(L.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(q){e.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),ht(n.TEXTURE_CUBE_MAP,x);for(let it=0;it<6;it++)if(x.mipmaps&&x.mipmaps.length>0)for(let Tt=0;Tt<x.mipmaps.length;Tt++)st(L.__webglFramebuffer[it][Tt],w,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+it,Tt);else st(L.__webglFramebuffer[it],w,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);f(x)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(mt){for(let it=0,Tt=K.length;it<Tt;it++){const At=K[it],$=i.get(At);let tt=n.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(tt=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(tt,$.__webglTexture),ht(tt,At),st(L.__webglFramebuffer,w,At,n.COLOR_ATTACHMENT0+it,tt,0),f(At)&&p(tt)}e.unbindTexture()}else{let it=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(it=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(it,Y.__webglTexture),ht(it,x),x.mipmaps&&x.mipmaps.length>0)for(let Tt=0;Tt<x.mipmaps.length;Tt++)st(L.__webglFramebuffer[Tt],w,x,n.COLOR_ATTACHMENT0,it,Tt);else st(L.__webglFramebuffer,w,x,n.COLOR_ATTACHMENT0,it,0);f(x)&&p(it),e.unbindTexture()}w.depthBuffer&&Rt(w)}function Kt(w){const x=w.textures;for(let L=0,Y=x.length;L<Y;L++){const K=x[L];if(f(K)){const q=M(w),mt=i.get(K).__webglTexture;e.bindTexture(q,mt),p(q),e.unbindTexture()}}}const ne=[],zt=[];function fe(w){if(w.samples>0){if(pe(w)===!1){const x=w.textures,L=w.width,Y=w.height;let K=n.COLOR_BUFFER_BIT;const q=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,mt=i.get(w),it=x.length>1;if(it)for(let At=0;At<x.length;At++)e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+At,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+At,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer);const Tt=w.texture.mipmaps;Tt&&Tt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,mt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let At=0;At<x.length;At++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),it){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,mt.__webglColorRenderbuffer[At]);const $=i.get(x[At]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,$,0)}n.blitFramebuffer(0,0,L,Y,0,0,L,Y,K,n.NEAREST),l===!0&&(ne.length=0,zt.length=0,ne.push(n.COLOR_ATTACHMENT0+At),w.depthBuffer&&w.resolveDepthBuffer===!1&&(ne.push(q),zt.push(q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,zt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ne))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),it)for(let At=0;At<x.length;At++){e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+At,n.RENDERBUFFER,mt.__webglColorRenderbuffer[At]);const $=i.get(x[At]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+At,n.TEXTURE_2D,$,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const x=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function P(w){return Math.min(r.maxSamples,w.samples)}function pe(w){const x=i.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Zt(w){const x=a.render.frame;d.get(w)!==x&&(d.set(w,x),w.update())}function re(w,x){const L=w.colorSpace,Y=w.format,K=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||L!==Zi&&L!==qn&&(qt.getTransfer(L)===$t?(Y!==sn||K!==Ge)&&wt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Wt("WebGLTextures: Unsupported texture color space:",L)),x}function Mt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(o.width=w.naturalWidth||w.width,o.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(o.width=w.displayWidth,o.height=w.displayHeight):(o.width=w.width,o.height=w.height),o}this.allocateTextureUnit=B,this.resetTextureUnits=I,this.setTexture2D=k,this.setTexture2DArray=H,this.setTexture3D=O,this.setTextureCube=Q,this.rebindTextures=Me,this.setupRenderTarget=Xt,this.updateRenderTargetMipmap=Kt,this.updateMultisampleRenderTarget=fe,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=st,this.useMultisampledRTT=pe,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function yg(n,t){function e(i,r=qn){let s;const a=qt.getTransfer(r);if(i===Ge)return n.UNSIGNED_BYTE;if(i===Ao)return n.UNSIGNED_SHORT_4_4_4_4;if(i===wo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Hl)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Wl)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Vl)return n.BYTE;if(i===Gl)return n.SHORT;if(i===br)return n.UNSIGNED_SHORT;if(i===bo)return n.INT;if(i===gn)return n.UNSIGNED_INT;if(i===rn)return n.FLOAT;if(i===Un)return n.HALF_FLOAT;if(i===Xl)return n.ALPHA;if(i===ql)return n.RGB;if(i===sn)return n.RGBA;if(i===Nn)return n.DEPTH_COMPONENT;if(i===ui)return n.DEPTH_STENCIL;if(i===Ro)return n.RED;if(i===Co)return n.RED_INTEGER;if(i===Yi)return n.RG;if(i===Po)return n.RG_INTEGER;if(i===Do)return n.RGBA_INTEGER;if(i===xs||i===vs||i===Ms||i===Ss)if(a===$t)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===xs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===vs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ms)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ss)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===xs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===vs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ms)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ss)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Na||i===Fa||i===Oa||i===Ba)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Na)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Fa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Oa)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ba)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===za||i===ka||i===Va||i===Ga||i===Ha||i===Wa||i===Xa)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===za||i===ka)return a===$t?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Va)return a===$t?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ga)return s.COMPRESSED_R11_EAC;if(i===Ha)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Wa)return s.COMPRESSED_RG11_EAC;if(i===Xa)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===qa||i===Ya||i===Za||i===Ka||i===ja||i===$a||i===Ja||i===Qa||i===to||i===eo||i===no||i===io||i===ro||i===so)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===qa)return a===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ya)return a===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Za)return a===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ka)return a===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ja)return a===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===$a)return a===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ja)return a===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Qa)return a===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===to)return a===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===eo)return a===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===no)return a===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===io)return a===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ro)return a===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===so)return a===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ao||i===oo||i===co)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===ao)return a===$t?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===oo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===co)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===lo||i===uo||i===ho||i===fo)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===lo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===uo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ho)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===fo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ar?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const Eg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Tg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class bg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new au(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new xn({vertexShader:Eg,fragmentShader:Tg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new _e(new Dr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ag extends Ji{constructor(t,e){super();const i=this;let r=null,s=1,a=null,c="local-floor",l=1,o=null,d=null,h=null,u=null,m=null,_=null;const S=typeof XRWebGLBinding<"u",f=new bg,p={},M=e.getContextAttributes();let T=null,v=null;const b=[],R=[],A=new Lt;let g=null;const E=new Xe;E.viewport=new le;const z=new Xe;z.viewport=new le;const C=[E,z],I=new Of;let B=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let nt=b[Z];return nt===void 0&&(nt=new Ks,b[Z]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(Z){let nt=b[Z];return nt===void 0&&(nt=new Ks,b[Z]=nt),nt.getGripSpace()},this.getHand=function(Z){let nt=b[Z];return nt===void 0&&(nt=new Ks,b[Z]=nt),nt.getHandSpace()};function k(Z){const nt=R.indexOf(Z.inputSource);if(nt===-1)return;const st=b[nt];st!==void 0&&(st.update(Z.inputSource,Z.frame,o||a),st.dispatchEvent({type:Z.type,data:Z.inputSource}))}function H(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",O);for(let Z=0;Z<b.length;Z++){const nt=R[Z];nt!==null&&(R[Z]=null,b[Z].disconnect(nt))}B=null,N=null,f.reset();for(const Z in p)delete p[Z];t.setRenderTarget(T),m=null,u=null,h=null,r=null,v=null,ae.stop(),i.isPresenting=!1,t.setPixelRatio(g),t.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&wt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){c=Z,i.isPresenting===!0&&wt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o||a},this.setReferenceSpace=function(Z){o=Z},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return h===null&&S&&(h=new XRWebGLBinding(r,e)),h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(T=t.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",H),r.addEventListener("inputsourceschange",O),M.xrCompatible!==!0&&await e.makeXRCompatible(),g=t.getPixelRatio(),t.getSize(A),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let st=null,It=null,bt=null;M.depth&&(bt=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=M.stencil?ui:Nn,It=M.stencil?Ar:gn);const Rt={colorFormat:e.RGBA8,depthFormat:bt,scaleFactor:s};h=this.getBinding(),u=h.createProjectionLayer(Rt),r.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new mn(u.textureWidth,u.textureHeight,{format:sn,type:Ge,depthTexture:new Rr(u.textureWidth,u.textureHeight,It,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const st={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,e,st),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),v=new mn(m.framebufferWidth,m.framebufferHeight,{format:sn,type:Ge,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),o=null,a=await r.requestReferenceSpace(c),ae.setContext(r),ae.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function O(Z){for(let nt=0;nt<Z.removed.length;nt++){const st=Z.removed[nt],It=R.indexOf(st);It>=0&&(R[It]=null,b[It].disconnect(st))}for(let nt=0;nt<Z.added.length;nt++){const st=Z.added[nt];let It=R.indexOf(st);if(It===-1){for(let Rt=0;Rt<b.length;Rt++)if(Rt>=R.length){R.push(st),It=Rt;break}else if(R[Rt]===null){R[Rt]=st,It=Rt;break}if(It===-1)break}const bt=b[It];bt&&bt.connect(st)}}const Q=new F,j=new F;function lt(Z,nt,st){Q.setFromMatrixPosition(nt.matrixWorld),j.setFromMatrixPosition(st.matrixWorld);const It=Q.distanceTo(j),bt=nt.projectionMatrix.elements,Rt=st.projectionMatrix.elements,Me=bt[14]/(bt[10]-1),Xt=bt[14]/(bt[10]+1),Kt=(bt[9]+1)/bt[5],ne=(bt[9]-1)/bt[5],zt=(bt[8]-1)/bt[0],fe=(Rt[8]+1)/Rt[0],P=Me*zt,pe=Me*fe,Zt=It/(-zt+fe),re=Zt*-zt;if(nt.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(re),Z.translateZ(Zt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),bt[10]===-1)Z.projectionMatrix.copy(nt.projectionMatrix),Z.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{const Mt=Me+Zt,w=Xt+Zt,x=P-re,L=pe+(It-re),Y=Kt*Xt/w*Mt,K=ne*Xt/w*Mt;Z.projectionMatrix.makePerspective(x,L,Y,K,Mt,w),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function pt(Z,nt){nt===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(nt.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let nt=Z.near,st=Z.far;f.texture!==null&&(f.depthNear>0&&(nt=f.depthNear),f.depthFar>0&&(st=f.depthFar)),I.near=z.near=E.near=nt,I.far=z.far=E.far=st,(B!==I.near||N!==I.far)&&(r.updateRenderState({depthNear:I.near,depthFar:I.far}),B=I.near,N=I.far),I.layers.mask=Z.layers.mask|6,E.layers.mask=I.layers.mask&-5,z.layers.mask=I.layers.mask&-3;const It=Z.parent,bt=I.cameras;pt(I,It);for(let Rt=0;Rt<bt.length;Rt++)pt(bt[Rt],It);bt.length===2?lt(I,E,z):I.projectionMatrix.copy(E.projectionMatrix),ht(Z,I,It)};function ht(Z,nt,st){st===null?Z.matrix.copy(nt.matrixWorld):(Z.matrix.copy(st.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(nt.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(nt.projectionMatrix),Z.projectionMatrixInverse.copy(nt.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Ki*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(Z){l=Z,u!==null&&(u.fixedFoveation=Z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Z)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(I)},this.getCameraTexture=function(Z){return p[Z]};let Nt=null;function oe(Z,nt){if(d=nt.getViewerPose(o||a),_=nt,d!==null){const st=d.views;m!==null&&(t.setRenderTargetFramebuffer(v,m.framebuffer),t.setRenderTarget(v));let It=!1;st.length!==I.cameras.length&&(I.cameras.length=0,It=!0);for(let Xt=0;Xt<st.length;Xt++){const Kt=st[Xt];let ne=null;if(m!==null)ne=m.getViewport(Kt);else{const fe=h.getViewSubImage(u,Kt);ne=fe.viewport,Xt===0&&(t.setRenderTargetTextures(v,fe.colorTexture,fe.depthStencilTexture),t.setRenderTarget(v))}let zt=C[Xt];zt===void 0&&(zt=new Xe,zt.layers.enable(Xt),zt.viewport=new le,C[Xt]=zt),zt.matrix.fromArray(Kt.transform.matrix),zt.matrix.decompose(zt.position,zt.quaternion,zt.scale),zt.projectionMatrix.fromArray(Kt.projectionMatrix),zt.projectionMatrixInverse.copy(zt.projectionMatrix).invert(),zt.viewport.set(ne.x,ne.y,ne.width,ne.height),Xt===0&&(I.matrix.copy(zt.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),It===!0&&I.cameras.push(zt)}const bt=r.enabledFeatures;if(bt&&bt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&S){h=i.getBinding();const Xt=h.getDepthInformation(st[0]);Xt&&Xt.isValid&&Xt.texture&&f.init(Xt,r.renderState)}if(bt&&bt.includes("camera-access")&&S){t.state.unbindTexture(),h=i.getBinding();for(let Xt=0;Xt<st.length;Xt++){const Kt=st[Xt].camera;if(Kt){let ne=p[Kt];ne||(ne=new au,p[Kt]=ne);const zt=h.getCameraImage(Kt);ne.sourceTexture=zt}}}}for(let st=0;st<b.length;st++){const It=R[st],bt=b[st];It!==null&&bt!==void 0&&bt.update(It,nt,o||a)}Nt&&Nt(Z,nt),nt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:nt}),_=null}const ae=new uu;ae.setAnimationLoop(oe),this.setAnimationLoop=function(Z){Nt=Z},this.dispose=function(){}}}const ai=new _n,wg=new ee;function Rg(n,t){function e(f,p){f.matrixAutoUpdate===!0&&f.updateMatrix(),p.value.copy(f.matrix)}function i(f,p){p.color.getRGB(f.fogColor.value,ou(n)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function r(f,p,M,T,v){p.isMeshBasicMaterial?s(f,p):p.isMeshLambertMaterial?(s(f,p),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(f,p),h(f,p)):p.isMeshPhongMaterial?(s(f,p),d(f,p),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(f,p),u(f,p),p.isMeshPhysicalMaterial&&m(f,p,v)):p.isMeshMatcapMaterial?(s(f,p),_(f,p)):p.isMeshDepthMaterial?s(f,p):p.isMeshDistanceMaterial?(s(f,p),S(f,p)):p.isMeshNormalMaterial?s(f,p):p.isLineBasicMaterial?(a(f,p),p.isLineDashedMaterial&&c(f,p)):p.isPointsMaterial?l(f,p,M,T):p.isSpriteMaterial?o(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map,e(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.bumpMap&&(f.bumpMap.value=p.bumpMap,e(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===Oe&&(f.bumpScale.value*=-1)),p.normalMap&&(f.normalMap.value=p.normalMap,e(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===Oe&&f.normalScale.value.negate()),p.displacementMap&&(f.displacementMap.value=p.displacementMap,e(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,f.emissiveMapTransform)),p.specularMap&&(f.specularMap.value=p.specularMap,e(p.specularMap,f.specularMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);const M=t.get(p),T=M.envMap,v=M.envMapRotation;T&&(f.envMap.value=T,ai.copy(v),ai.x*=-1,ai.y*=-1,ai.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(ai.y*=-1,ai.z*=-1),f.envMapRotation.value.setFromMatrix4(wg.makeRotationFromEuler(ai)),f.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap&&(f.lightMap.value=p.lightMap,f.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,f.lightMapTransform)),p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,f.aoMapTransform))}function a(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map&&(f.map.value=p.map,e(p.map,f.mapTransform))}function c(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function l(f,p,M,T){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*M,f.scale.value=T*.5,p.map&&(f.map.value=p.map,e(p.map,f.uvTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function o(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map,e(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function d(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function h(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function u(f,p){f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,f.roughnessMapTransform)),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function m(f,p,M){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,f.sheenColorMapTransform)),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,f.sheenRoughnessMapTransform))),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,f.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(f.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Oe&&f.clearcoatNormalScale.value.negate())),p.dispersion>0&&(f.dispersion.value=p.dispersion),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,f.iridescenceMapTransform)),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=M.texture,f.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,f.transmissionMapTransform)),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(f.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(f.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,f.specularColorMapTransform)),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,f.specularIntensityMapTransform))}function _(f,p){p.matcap&&(f.matcap.value=p.matcap)}function S(f,p){const M=t.get(p).light;f.referencePosition.value.setFromMatrixPosition(M.matrixWorld),f.nearDistance.value=M.shadow.camera.near,f.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Cg(n,t,e,i){let r={},s={},a=[];const c=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,T){const v=T.program;i.uniformBlockBinding(M,v)}function o(M,T){let v=r[M.id];v===void 0&&(_(M),v=d(M),r[M.id]=v,M.addEventListener("dispose",f));const b=T.program;i.updateUBOMapping(M,b);const R=t.render.frame;s[M.id]!==R&&(u(M),s[M.id]=R)}function d(M){const T=h();M.__bindingPointIndex=T;const v=n.createBuffer(),b=M.__size,R=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,b,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,v),v}function h(){for(let M=0;M<c;M++)if(a.indexOf(M)===-1)return a.push(M),M;return Wt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){const T=r[M.id],v=M.uniforms,b=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let R=0,A=v.length;R<A;R++){const g=Array.isArray(v[R])?v[R]:[v[R]];for(let E=0,z=g.length;E<z;E++){const C=g[E];if(m(C,R,E,b)===!0){const I=C.__offset,B=Array.isArray(C.value)?C.value:[C.value];let N=0;for(let k=0;k<B.length;k++){const H=B[k],O=S(H);typeof H=="number"||typeof H=="boolean"?(C.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,I+N,C.__data)):H.isMatrix3?(C.__data[0]=H.elements[0],C.__data[1]=H.elements[1],C.__data[2]=H.elements[2],C.__data[3]=0,C.__data[4]=H.elements[3],C.__data[5]=H.elements[4],C.__data[6]=H.elements[5],C.__data[7]=0,C.__data[8]=H.elements[6],C.__data[9]=H.elements[7],C.__data[10]=H.elements[8],C.__data[11]=0):(H.toArray(C.__data,N),N+=O.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,I,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(M,T,v,b){const R=M.value,A=T+"_"+v;if(b[A]===void 0)return typeof R=="number"||typeof R=="boolean"?b[A]=R:b[A]=R.clone(),!0;{const g=b[A];if(typeof R=="number"||typeof R=="boolean"){if(g!==R)return b[A]=R,!0}else if(g.equals(R)===!1)return g.copy(R),!0}return!1}function _(M){const T=M.uniforms;let v=0;const b=16;for(let A=0,g=T.length;A<g;A++){const E=Array.isArray(T[A])?T[A]:[T[A]];for(let z=0,C=E.length;z<C;z++){const I=E[z],B=Array.isArray(I.value)?I.value:[I.value];for(let N=0,k=B.length;N<k;N++){const H=B[N],O=S(H),Q=v%b,j=Q%O.boundary,lt=Q+j;v+=j,lt!==0&&b-lt<O.storage&&(v+=b-lt),I.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=v,v+=O.storage}}}const R=v%b;return R>0&&(v+=b-R),M.__size=v,M.__cache={},this}function S(M){const T={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(T.boundary=4,T.storage=4):M.isVector2?(T.boundary=8,T.storage=8):M.isVector3||M.isColor?(T.boundary=16,T.storage=12):M.isVector4?(T.boundary=16,T.storage=16):M.isMatrix3?(T.boundary=48,T.storage=48):M.isMatrix4?(T.boundary=64,T.storage=64):M.isTexture?wt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):wt("WebGLRenderer: Unsupported uniform value type.",M),T}function f(M){const T=M.target;T.removeEventListener("dispose",f);const v=a.indexOf(T.__bindingPointIndex);a.splice(v,1),n.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function p(){for(const M in r)n.deleteBuffer(r[M]);a=[],r={},s={}}return{bind:l,update:o,dispose:p}}const Pg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let un=null;function Dg(){return un===null&&(un=new nu(Pg,16,16,Yi,Un),un.name="DFG_LUT",un.minFilter=Re,un.magFilter=Re,un.wrapS=Cn,un.wrapT=Cn,un.generateMipmaps=!1,un.needsUpdate=!0),un}class Lg{constructor(t={}){const{canvas:e=Ph(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:c=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:o=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:u=!1,outputBufferType:m=Ge}=t;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;const S=m,f=new Set([Do,Po,Co]),p=new Set([Ge,gn,br,Ar,Ao,wo]),M=new Uint32Array(4),T=new Int32Array(4);let v=null,b=null;const R=[],A=[];let g=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=pn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let z=!1;this._outputColorSpace=Fe;let C=0,I=0,B=null,N=-1,k=null;const H=new le,O=new le;let Q=null;const j=new Bt(0);let lt=0,pt=e.width,ht=e.height,Nt=1,oe=null,ae=null;const Z=new le(0,0,pt,ht),nt=new le(0,0,pt,ht);let st=!1;const It=new ko;let bt=!1,Rt=!1;const Me=new ee,Xt=new F,Kt=new le,ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let zt=!1;function fe(){return B===null?Nt:1}let P=i;function pe(y,U){return e.getContext(y,U)}try{const y={alpha:!0,depth:r,stencil:s,antialias:c,premultipliedAlpha:l,preserveDrawingBuffer:o,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Eo}`),e.addEventListener("webglcontextlost",_t,!1),e.addEventListener("webglcontextrestored",Ct,!1),e.addEventListener("webglcontextcreationerror",se,!1),P===null){const U="webgl2";if(P=pe(U,y),P===null)throw pe(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw Wt("WebGLRenderer: "+y.message),y}let Zt,re,Mt,w,x,L,Y,K,q,mt,it,Tt,At,$,tt,gt,xt,ut,kt,D,rt,et,dt;function J(){Zt=new Lm(P),Zt.init(),rt=new yg(P,Zt),re=new Tm(P,Zt,t,rt),Mt=new Mg(P,Zt),re.reversedDepthBuffer&&u&&Mt.buffers.depth.setReversed(!0),w=new Nm(P),x=new ag,L=new Sg(P,Zt,Mt,x,re,rt,w),Y=new Dm(E),K=new kf(P),et=new ym(P,K),q=new Im(P,K,w,et),mt=new Om(P,q,K,et,w),ut=new Fm(P,re,L),tt=new bm(x),it=new sg(E,Y,Zt,re,et,tt),Tt=new Rg(E,x),At=new cg,$=new pg(Zt),xt=new Sm(E,Y,Mt,mt,_,l),gt=new vg(E,mt,re),dt=new Cg(P,w,re,Mt),kt=new Em(P,Zt,w),D=new Um(P,Zt,w),w.programs=it.programs,E.capabilities=re,E.extensions=Zt,E.properties=x,E.renderLists=At,E.shadowMap=gt,E.state=Mt,E.info=w}J(),S!==Ge&&(g=new zm(S,e.width,e.height,r,s));const X=new Ag(E,P);this.xr=X,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const y=Zt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Zt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return Nt},this.setPixelRatio=function(y){y!==void 0&&(Nt=y,this.setSize(pt,ht,!1))},this.getSize=function(y){return y.set(pt,ht)},this.setSize=function(y,U,W=!0){if(X.isPresenting){wt("WebGLRenderer: Can't change size while VR device is presenting.");return}pt=y,ht=U,e.width=Math.floor(y*Nt),e.height=Math.floor(U*Nt),W===!0&&(e.style.width=y+"px",e.style.height=U+"px"),g!==null&&g.setSize(e.width,e.height),this.setViewport(0,0,y,U)},this.getDrawingBufferSize=function(y){return y.set(pt*Nt,ht*Nt).floor()},this.setDrawingBufferSize=function(y,U,W){pt=y,ht=U,Nt=W,e.width=Math.floor(y*W),e.height=Math.floor(U*W),this.setViewport(0,0,y,U)},this.setEffects=function(y){if(S===Ge){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let U=0;U<y.length;U++)if(y[U].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}g.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(H)},this.getViewport=function(y){return y.copy(Z)},this.setViewport=function(y,U,W,G){y.isVector4?Z.set(y.x,y.y,y.z,y.w):Z.set(y,U,W,G),Mt.viewport(H.copy(Z).multiplyScalar(Nt).round())},this.getScissor=function(y){return y.copy(nt)},this.setScissor=function(y,U,W,G){y.isVector4?nt.set(y.x,y.y,y.z,y.w):nt.set(y,U,W,G),Mt.scissor(O.copy(nt).multiplyScalar(Nt).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(y){Mt.setScissorTest(st=y)},this.setOpaqueSort=function(y){oe=y},this.setTransparentSort=function(y){ae=y},this.getClearColor=function(y){return y.copy(xt.getClearColor())},this.setClearColor=function(){xt.setClearColor(...arguments)},this.getClearAlpha=function(){return xt.getClearAlpha()},this.setClearAlpha=function(){xt.setClearAlpha(...arguments)},this.clear=function(y=!0,U=!0,W=!0){let G=0;if(y){let V=!1;if(B!==null){const ot=B.texture.format;V=f.has(ot)}if(V){const ot=B.texture.type,ft=p.has(ot),ct=xt.getClearColor(),vt=xt.getClearAlpha(),yt=ct.r,Dt=ct.g,Vt=ct.b;ft?(M[0]=yt,M[1]=Dt,M[2]=Vt,M[3]=vt,P.clearBufferuiv(P.COLOR,0,M)):(T[0]=yt,T[1]=Dt,T[2]=Vt,T[3]=vt,P.clearBufferiv(P.COLOR,0,T))}else G|=P.COLOR_BUFFER_BIT}U&&(G|=P.DEPTH_BUFFER_BIT),W&&(G|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&P.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",_t,!1),e.removeEventListener("webglcontextrestored",Ct,!1),e.removeEventListener("webglcontextcreationerror",se,!1),xt.dispose(),At.dispose(),$.dispose(),x.dispose(),Y.dispose(),mt.dispose(),et.dispose(),dt.dispose(),it.dispose(),X.dispose(),X.removeEventListener("sessionstart",ic),X.removeEventListener("sessionend",rc),Qn.stop()};function _t(y){y.preventDefault(),ws("WebGLRenderer: Context Lost."),z=!0}function Ct(){ws("WebGLRenderer: Context Restored."),z=!1;const y=w.autoReset,U=gt.enabled,W=gt.autoUpdate,G=gt.needsUpdate,V=gt.type;J(),w.autoReset=y,gt.enabled=U,gt.autoUpdate=W,gt.needsUpdate=G,gt.type=V}function se(y){Wt("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function jt(y){const U=y.target;U.removeEventListener("dispose",jt),Sn(U)}function Sn(y){yn(y),x.remove(y)}function yn(y){const U=x.get(y).programs;U!==void 0&&(U.forEach(function(W){it.releaseProgram(W)}),y.isShaderMaterial&&it.releaseShaderCache(y))}this.renderBufferDirect=function(y,U,W,G,V,ot){U===null&&(U=ne);const ft=V.isMesh&&V.matrixWorld.determinant()<0,ct=Xu(y,U,W,G,V);Mt.setMaterial(G,ft);let vt=W.index,yt=1;if(G.wireframe===!0){if(vt=q.getWireframeAttribute(W),vt===void 0)return;yt=2}const Dt=W.drawRange,Vt=W.attributes.position;let Et=Dt.start*yt,Qt=(Dt.start+Dt.count)*yt;ot!==null&&(Et=Math.max(Et,ot.start*yt),Qt=Math.min(Qt,(ot.start+ot.count)*yt)),vt!==null?(Et=Math.max(Et,0),Qt=Math.min(Qt,vt.count)):Vt!=null&&(Et=Math.max(Et,0),Qt=Math.min(Qt,Vt.count));const de=Qt-Et;if(de<0||de===1/0)return;et.setup(V,G,ct,W,vt);let ce,te=kt;if(vt!==null&&(ce=K.get(vt),te=D,te.setIndex(ce)),V.isMesh)G.wireframe===!0?(Mt.setLineWidth(G.wireframeLinewidth*fe()),te.setMode(P.LINES)):te.setMode(P.TRIANGLES);else if(V.isLine){let be=G.linewidth;be===void 0&&(be=1),Mt.setLineWidth(be*fe()),V.isLineSegments?te.setMode(P.LINES):V.isLineLoop?te.setMode(P.LINE_LOOP):te.setMode(P.LINE_STRIP)}else V.isPoints?te.setMode(P.POINTS):V.isSprite&&te.setMode(P.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)Rs("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),te.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(Zt.get("WEBGL_multi_draw"))te.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const be=V._multiDrawStarts,St=V._multiDrawCounts,Be=V._multiDrawCount,Yt=vt?K.get(vt).bytesPerElement:1,$e=x.get(G).currentProgram.getUniforms();for(let cn=0;cn<Be;cn++)$e.setValue(P,"_gl_DrawID",cn),te.render(be[cn]/Yt,St[cn])}else if(V.isInstancedMesh)te.renderInstances(Et,de,V.count);else if(W.isInstancedBufferGeometry){const be=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,St=Math.min(W.instanceCount,be);te.renderInstances(Et,de,St)}else te.render(Et,de)};function nc(y,U,W){y.transparent===!0&&y.side===en&&y.forceSinglePass===!1?(y.side=Oe,y.needsUpdate=!0,Fr(y,U,W),y.side=jn,y.needsUpdate=!0,Fr(y,U,W),y.side=en):Fr(y,U,W)}this.compile=function(y,U,W=null){W===null&&(W=y),b=$.get(W),b.init(U),A.push(b),W.traverseVisible(function(V){V.isLight&&V.layers.test(U.layers)&&(b.pushLight(V),V.castShadow&&b.pushShadow(V))}),y!==W&&y.traverseVisible(function(V){V.isLight&&V.layers.test(U.layers)&&(b.pushLight(V),V.castShadow&&b.pushShadow(V))}),b.setupLights();const G=new Set;return y.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const ot=V.material;if(ot)if(Array.isArray(ot))for(let ft=0;ft<ot.length;ft++){const ct=ot[ft];nc(ct,W,V),G.add(ct)}else nc(ot,W,V),G.add(ot)}),b=A.pop(),G},this.compileAsync=function(y,U,W=null){const G=this.compile(y,U,W);return new Promise(V=>{function ot(){if(G.forEach(function(ft){x.get(ft).currentProgram.isReady()&&G.delete(ft)}),G.size===0){V(y);return}setTimeout(ot,10)}Zt.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let zs=null;function Wu(y){zs&&zs(y)}function ic(){Qn.stop()}function rc(){Qn.start()}const Qn=new uu;Qn.setAnimationLoop(Wu),typeof self<"u"&&Qn.setContext(self),this.setAnimationLoop=function(y){zs=y,X.setAnimationLoop(y),y===null?Qn.stop():Qn.start()},X.addEventListener("sessionstart",ic),X.addEventListener("sessionend",rc),this.render=function(y,U){if(U!==void 0&&U.isCamera!==!0){Wt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;const W=X.enabled===!0&&X.isPresenting===!0,G=g!==null&&(B===null||W)&&g.begin(E,B);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(g===null||g.isCompositing()===!1)&&(X.cameraAutoUpdate===!0&&X.updateCamera(U),U=X.getCamera()),y.isScene===!0&&y.onBeforeRender(E,y,U,B),b=$.get(y,A.length),b.init(U),A.push(b),Me.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),It.setFromProjectionMatrix(Me,fn,U.reversedDepth),Rt=this.localClippingEnabled,bt=tt.init(this.clippingPlanes,Rt),v=At.get(y,R.length),v.init(),R.push(v),X.enabled===!0&&X.isPresenting===!0){const ft=E.xr.getDepthSensingMesh();ft!==null&&ks(ft,U,-1/0,E.sortObjects)}ks(y,U,0,E.sortObjects),v.finish(),E.sortObjects===!0&&v.sort(oe,ae),zt=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,zt&&xt.addToRenderList(v,y),this.info.render.frame++,bt===!0&&tt.beginShadows();const V=b.state.shadowsArray;if(gt.render(V,y,U),bt===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(G&&g.hasRenderPass())===!1){const ft=v.opaque,ct=v.transmissive;if(b.setupLights(),U.isArrayCamera){const vt=U.cameras;if(ct.length>0)for(let yt=0,Dt=vt.length;yt<Dt;yt++){const Vt=vt[yt];ac(ft,ct,y,Vt)}zt&&xt.render(y);for(let yt=0,Dt=vt.length;yt<Dt;yt++){const Vt=vt[yt];sc(v,y,Vt,Vt.viewport)}}else ct.length>0&&ac(ft,ct,y,U),zt&&xt.render(y),sc(v,y,U)}B!==null&&I===0&&(L.updateMultisampleRenderTarget(B),L.updateRenderTargetMipmap(B)),G&&g.end(E),y.isScene===!0&&y.onAfterRender(E,y,U),et.resetDefaultState(),N=-1,k=null,A.pop(),A.length>0?(b=A[A.length-1],bt===!0&&tt.setGlobalState(E.clippingPlanes,b.state.camera)):b=null,R.pop(),R.length>0?v=R[R.length-1]:v=null};function ks(y,U,W,G){if(y.visible===!1)return;if(y.layers.test(U.layers)){if(y.isGroup)W=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(U);else if(y.isLight)b.pushLight(y),y.castShadow&&b.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||It.intersectsSprite(y)){G&&Kt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Me);const ft=mt.update(y),ct=y.material;ct.visible&&v.push(y,ft,ct,W,Kt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||It.intersectsObject(y))){const ft=mt.update(y),ct=y.material;if(G&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Kt.copy(y.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),Kt.copy(ft.boundingSphere.center)),Kt.applyMatrix4(y.matrixWorld).applyMatrix4(Me)),Array.isArray(ct)){const vt=ft.groups;for(let yt=0,Dt=vt.length;yt<Dt;yt++){const Vt=vt[yt],Et=ct[Vt.materialIndex];Et&&Et.visible&&v.push(y,ft,Et,W,Kt.z,Vt)}}else ct.visible&&v.push(y,ft,ct,W,Kt.z,null)}}const ot=y.children;for(let ft=0,ct=ot.length;ft<ct;ft++)ks(ot[ft],U,W,G)}function sc(y,U,W,G){const{opaque:V,transmissive:ot,transparent:ft}=y;b.setupLightsView(W),bt===!0&&tt.setGlobalState(E.clippingPlanes,W),G&&Mt.viewport(H.copy(G)),V.length>0&&Nr(V,U,W),ot.length>0&&Nr(ot,U,W),ft.length>0&&Nr(ft,U,W),Mt.buffers.depth.setTest(!0),Mt.buffers.depth.setMask(!0),Mt.buffers.color.setMask(!0),Mt.setPolygonOffset(!1)}function ac(y,U,W,G){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[G.id]===void 0){const Et=Zt.has("EXT_color_buffer_half_float")||Zt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[G.id]=new mn(1,1,{generateMipmaps:!0,type:Et?Un:Ge,minFilter:li,samples:Math.max(4,re.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qt.workingColorSpace})}const ot=b.state.transmissionRenderTarget[G.id],ft=G.viewport||H;ot.setSize(ft.z*E.transmissionResolutionScale,ft.w*E.transmissionResolutionScale);const ct=E.getRenderTarget(),vt=E.getActiveCubeFace(),yt=E.getActiveMipmapLevel();E.setRenderTarget(ot),E.getClearColor(j),lt=E.getClearAlpha(),lt<1&&E.setClearColor(16777215,.5),E.clear(),zt&&xt.render(W);const Dt=E.toneMapping;E.toneMapping=pn;const Vt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),b.setupLightsView(G),bt===!0&&tt.setGlobalState(E.clippingPlanes,G),Nr(y,W,G),L.updateMultisampleRenderTarget(ot),L.updateRenderTargetMipmap(ot),Zt.has("WEBGL_multisampled_render_to_texture")===!1){let Et=!1;for(let Qt=0,de=U.length;Qt<de;Qt++){const ce=U[Qt],{object:te,geometry:be,material:St,group:Be}=ce;if(St.side===en&&te.layers.test(G.layers)){const Yt=St.side;St.side=Oe,St.needsUpdate=!0,oc(te,W,G,be,St,Be),St.side=Yt,St.needsUpdate=!0,Et=!0}}Et===!0&&(L.updateMultisampleRenderTarget(ot),L.updateRenderTargetMipmap(ot))}E.setRenderTarget(ct,vt,yt),E.setClearColor(j,lt),Vt!==void 0&&(G.viewport=Vt),E.toneMapping=Dt}function Nr(y,U,W){const G=U.isScene===!0?U.overrideMaterial:null;for(let V=0,ot=y.length;V<ot;V++){const ft=y[V],{object:ct,geometry:vt,group:yt}=ft;let Dt=ft.material;Dt.allowOverride===!0&&G!==null&&(Dt=G),ct.layers.test(W.layers)&&oc(ct,U,W,vt,Dt,yt)}}function oc(y,U,W,G,V,ot){y.onBeforeRender(E,U,W,G,V,ot),y.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),V.onBeforeRender(E,U,W,G,y,ot),V.transparent===!0&&V.side===en&&V.forceSinglePass===!1?(V.side=Oe,V.needsUpdate=!0,E.renderBufferDirect(W,U,G,V,y,ot),V.side=jn,V.needsUpdate=!0,E.renderBufferDirect(W,U,G,V,y,ot),V.side=en):E.renderBufferDirect(W,U,G,V,y,ot),y.onAfterRender(E,U,W,G,V,ot)}function Fr(y,U,W){U.isScene!==!0&&(U=ne);const G=x.get(y),V=b.state.lights,ot=b.state.shadowsArray,ft=V.state.version,ct=it.getParameters(y,V.state,ot,U,W),vt=it.getProgramCacheKey(ct);let yt=G.programs;G.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?U.environment:null,G.fog=U.fog;const Dt=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;G.envMap=Y.get(y.envMap||G.environment,Dt),G.envMapRotation=G.environment!==null&&y.envMap===null?U.environmentRotation:y.envMapRotation,yt===void 0&&(y.addEventListener("dispose",jt),yt=new Map,G.programs=yt);let Vt=yt.get(vt);if(Vt!==void 0){if(G.currentProgram===Vt&&G.lightsStateVersion===ft)return lc(y,ct),Vt}else ct.uniforms=it.getUniforms(y),y.onBeforeCompile(ct,E),Vt=it.acquireProgram(ct,vt),yt.set(vt,Vt),G.uniforms=ct.uniforms;const Et=G.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Et.clippingPlanes=tt.uniform),lc(y,ct),G.needsLights=Yu(y),G.lightsStateVersion=ft,G.needsLights&&(Et.ambientLightColor.value=V.state.ambient,Et.lightProbe.value=V.state.probe,Et.directionalLights.value=V.state.directional,Et.directionalLightShadows.value=V.state.directionalShadow,Et.spotLights.value=V.state.spot,Et.spotLightShadows.value=V.state.spotShadow,Et.rectAreaLights.value=V.state.rectArea,Et.ltc_1.value=V.state.rectAreaLTC1,Et.ltc_2.value=V.state.rectAreaLTC2,Et.pointLights.value=V.state.point,Et.pointLightShadows.value=V.state.pointShadow,Et.hemisphereLights.value=V.state.hemi,Et.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Et.spotLightMatrix.value=V.state.spotLightMatrix,Et.spotLightMap.value=V.state.spotLightMap,Et.pointShadowMatrix.value=V.state.pointShadowMatrix),G.currentProgram=Vt,G.uniformsList=null,Vt}function cc(y){if(y.uniformsList===null){const U=y.currentProgram.getUniforms();y.uniformsList=ys.seqWithValue(U.seq,y.uniforms)}return y.uniformsList}function lc(y,U){const W=x.get(y);W.outputColorSpace=U.outputColorSpace,W.batching=U.batching,W.batchingColor=U.batchingColor,W.instancing=U.instancing,W.instancingColor=U.instancingColor,W.instancingMorph=U.instancingMorph,W.skinning=U.skinning,W.morphTargets=U.morphTargets,W.morphNormals=U.morphNormals,W.morphColors=U.morphColors,W.morphTargetsCount=U.morphTargetsCount,W.numClippingPlanes=U.numClippingPlanes,W.numIntersection=U.numClipIntersection,W.vertexAlphas=U.vertexAlphas,W.vertexTangents=U.vertexTangents,W.toneMapping=U.toneMapping}function Xu(y,U,W,G,V){U.isScene!==!0&&(U=ne),L.resetTextureUnits();const ot=U.fog,ft=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?U.environment:null,ct=B===null?E.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Zi,vt=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,yt=Y.get(G.envMap||ft,vt),Dt=G.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Vt=!!W.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Et=!!W.morphAttributes.position,Qt=!!W.morphAttributes.normal,de=!!W.morphAttributes.color;let ce=pn;G.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(ce=E.toneMapping);const te=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,be=te!==void 0?te.length:0,St=x.get(G),Be=b.state.lights;if(bt===!0&&(Rt===!0||y!==k)){const Se=y===k&&G.id===N;tt.setState(G,y,Se)}let Yt=!1;G.version===St.__version?(St.needsLights&&St.lightsStateVersion!==Be.state.version||St.outputColorSpace!==ct||V.isBatchedMesh&&St.batching===!1||!V.isBatchedMesh&&St.batching===!0||V.isBatchedMesh&&St.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&St.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&St.instancing===!1||!V.isInstancedMesh&&St.instancing===!0||V.isSkinnedMesh&&St.skinning===!1||!V.isSkinnedMesh&&St.skinning===!0||V.isInstancedMesh&&St.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&St.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&St.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&St.instancingMorph===!1&&V.morphTexture!==null||St.envMap!==yt||G.fog===!0&&St.fog!==ot||St.numClippingPlanes!==void 0&&(St.numClippingPlanes!==tt.numPlanes||St.numIntersection!==tt.numIntersection)||St.vertexAlphas!==Dt||St.vertexTangents!==Vt||St.morphTargets!==Et||St.morphNormals!==Qt||St.morphColors!==de||St.toneMapping!==ce||St.morphTargetsCount!==be)&&(Yt=!0):(Yt=!0,St.__version=G.version);let $e=St.currentProgram;Yt===!0&&($e=Fr(G,U,V));let cn=!1,ti=!1,vi=!1;const ie=$e.getUniforms(),Ee=St.uniforms;if(Mt.useProgram($e.program)&&(cn=!0,ti=!0,vi=!0),G.id!==N&&(N=G.id,ti=!0),cn||k!==y){Mt.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),ie.setValue(P,"projectionMatrix",y.projectionMatrix),ie.setValue(P,"viewMatrix",y.matrixWorldInverse);const Bn=ie.map.cameraPosition;Bn!==void 0&&Bn.setValue(P,Xt.setFromMatrixPosition(y.matrixWorld)),re.logarithmicDepthBuffer&&ie.setValue(P,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ie.setValue(P,"isOrthographic",y.isOrthographicCamera===!0),k!==y&&(k=y,ti=!0,vi=!0)}if(St.needsLights&&(Be.state.directionalShadowMap.length>0&&ie.setValue(P,"directionalShadowMap",Be.state.directionalShadowMap,L),Be.state.spotShadowMap.length>0&&ie.setValue(P,"spotShadowMap",Be.state.spotShadowMap,L),Be.state.pointShadowMap.length>0&&ie.setValue(P,"pointShadowMap",Be.state.pointShadowMap,L)),V.isSkinnedMesh){ie.setOptional(P,V,"bindMatrix"),ie.setOptional(P,V,"bindMatrixInverse");const Se=V.skeleton;Se&&(Se.boneTexture===null&&Se.computeBoneTexture(),ie.setValue(P,"boneTexture",Se.boneTexture,L))}V.isBatchedMesh&&(ie.setOptional(P,V,"batchingTexture"),ie.setValue(P,"batchingTexture",V._matricesTexture,L),ie.setOptional(P,V,"batchingIdTexture"),ie.setValue(P,"batchingIdTexture",V._indirectTexture,L),ie.setOptional(P,V,"batchingColorTexture"),V._colorsTexture!==null&&ie.setValue(P,"batchingColorTexture",V._colorsTexture,L));const On=W.morphAttributes;if((On.position!==void 0||On.normal!==void 0||On.color!==void 0)&&ut.update(V,W,$e),(ti||St.receiveShadow!==V.receiveShadow)&&(St.receiveShadow=V.receiveShadow,ie.setValue(P,"receiveShadow",V.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&U.environment!==null&&(Ee.envMapIntensity.value=U.environmentIntensity),Ee.dfgLUT!==void 0&&(Ee.dfgLUT.value=Dg()),ti&&(ie.setValue(P,"toneMappingExposure",E.toneMappingExposure),St.needsLights&&qu(Ee,vi),ot&&G.fog===!0&&Tt.refreshFogUniforms(Ee,ot),Tt.refreshMaterialUniforms(Ee,G,Nt,ht,b.state.transmissionRenderTarget[y.id]),ys.upload(P,cc(St),Ee,L)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(ys.upload(P,cc(St),Ee,L),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ie.setValue(P,"center",V.center),ie.setValue(P,"modelViewMatrix",V.modelViewMatrix),ie.setValue(P,"normalMatrix",V.normalMatrix),ie.setValue(P,"modelMatrix",V.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Se=G.uniformsGroups;for(let Bn=0,Mi=Se.length;Bn<Mi;Bn++){const uc=Se[Bn];dt.update(uc,$e),dt.bind(uc,$e)}}return $e}function qu(y,U){y.ambientLightColor.needsUpdate=U,y.lightProbe.needsUpdate=U,y.directionalLights.needsUpdate=U,y.directionalLightShadows.needsUpdate=U,y.pointLights.needsUpdate=U,y.pointLightShadows.needsUpdate=U,y.spotLights.needsUpdate=U,y.spotLightShadows.needsUpdate=U,y.rectAreaLights.needsUpdate=U,y.hemisphereLights.needsUpdate=U}function Yu(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(y,U,W){const G=x.get(y);G.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),x.get(y.texture).__webglTexture=U,x.get(y.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:W,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,U){const W=x.get(y);W.__webglFramebuffer=U,W.__useDefaultFramebuffer=U===void 0};const Zu=P.createFramebuffer();this.setRenderTarget=function(y,U=0,W=0){B=y,C=U,I=W;let G=null,V=!1,ot=!1;if(y){const ct=x.get(y);if(ct.__useDefaultFramebuffer!==void 0){Mt.bindFramebuffer(P.FRAMEBUFFER,ct.__webglFramebuffer),H.copy(y.viewport),O.copy(y.scissor),Q=y.scissorTest,Mt.viewport(H),Mt.scissor(O),Mt.setScissorTest(Q),N=-1;return}else if(ct.__webglFramebuffer===void 0)L.setupRenderTarget(y);else if(ct.__hasExternalTextures)L.rebindTextures(y,x.get(y.texture).__webglTexture,x.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Dt=y.depthTexture;if(ct.__boundDepthTexture!==Dt){if(Dt!==null&&x.has(Dt)&&(y.width!==Dt.image.width||y.height!==Dt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(y)}}const vt=y.texture;(vt.isData3DTexture||vt.isDataArrayTexture||vt.isCompressedArrayTexture)&&(ot=!0);const yt=x.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(yt[U])?G=yt[U][W]:G=yt[U],V=!0):y.samples>0&&L.useMultisampledRTT(y)===!1?G=x.get(y).__webglMultisampledFramebuffer:Array.isArray(yt)?G=yt[W]:G=yt,H.copy(y.viewport),O.copy(y.scissor),Q=y.scissorTest}else H.copy(Z).multiplyScalar(Nt).floor(),O.copy(nt).multiplyScalar(Nt).floor(),Q=st;if(W!==0&&(G=Zu),Mt.bindFramebuffer(P.FRAMEBUFFER,G)&&Mt.drawBuffers(y,G),Mt.viewport(H),Mt.scissor(O),Mt.setScissorTest(Q),V){const ct=x.get(y.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+U,ct.__webglTexture,W)}else if(ot){const ct=U;for(let vt=0;vt<y.textures.length;vt++){const yt=x.get(y.textures[vt]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+vt,yt.__webglTexture,W,ct)}}else if(y!==null&&W!==0){const ct=x.get(y.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,ct.__webglTexture,W)}N=-1},this.readRenderTargetPixels=function(y,U,W,G,V,ot,ft,ct=0){if(!(y&&y.isWebGLRenderTarget)){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let vt=x.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ft!==void 0&&(vt=vt[ft]),vt){Mt.bindFramebuffer(P.FRAMEBUFFER,vt);try{const yt=y.textures[ct],Dt=yt.format,Vt=yt.type;if(y.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+ct),!re.textureFormatReadable(Dt)){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!re.textureTypeReadable(Vt)){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=y.width-G&&W>=0&&W<=y.height-V&&P.readPixels(U,W,G,V,rt.convert(Dt),rt.convert(Vt),ot)}finally{const yt=B!==null?x.get(B).__webglFramebuffer:null;Mt.bindFramebuffer(P.FRAMEBUFFER,yt)}}},this.readRenderTargetPixelsAsync=async function(y,U,W,G,V,ot,ft,ct=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let vt=x.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ft!==void 0&&(vt=vt[ft]),vt)if(U>=0&&U<=y.width-G&&W>=0&&W<=y.height-V){Mt.bindFramebuffer(P.FRAMEBUFFER,vt);const yt=y.textures[ct],Dt=yt.format,Vt=yt.type;if(y.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+ct),!re.textureFormatReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!re.textureTypeReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Et=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Et),P.bufferData(P.PIXEL_PACK_BUFFER,ot.byteLength,P.STREAM_READ),P.readPixels(U,W,G,V,rt.convert(Dt),rt.convert(Vt),0);const Qt=B!==null?x.get(B).__webglFramebuffer:null;Mt.bindFramebuffer(P.FRAMEBUFFER,Qt);const de=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Dh(P,de,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Et),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ot),P.deleteBuffer(Et),P.deleteSync(de),ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,U=null,W=0){const G=Math.pow(2,-W),V=Math.floor(y.image.width*G),ot=Math.floor(y.image.height*G),ft=U!==null?U.x:0,ct=U!==null?U.y:0;L.setTexture2D(y,0),P.copyTexSubImage2D(P.TEXTURE_2D,W,0,0,ft,ct,V,ot),Mt.unbindTexture()};const Ku=P.createFramebuffer(),ju=P.createFramebuffer();this.copyTextureToTexture=function(y,U,W=null,G=null,V=0,ot=0){let ft,ct,vt,yt,Dt,Vt,Et,Qt,de;const ce=y.isCompressedTexture?y.mipmaps[ot]:y.image;if(W!==null)ft=W.max.x-W.min.x,ct=W.max.y-W.min.y,vt=W.isBox3?W.max.z-W.min.z:1,yt=W.min.x,Dt=W.min.y,Vt=W.isBox3?W.min.z:0;else{const Ee=Math.pow(2,-V);ft=Math.floor(ce.width*Ee),ct=Math.floor(ce.height*Ee),y.isDataArrayTexture?vt=ce.depth:y.isData3DTexture?vt=Math.floor(ce.depth*Ee):vt=1,yt=0,Dt=0,Vt=0}G!==null?(Et=G.x,Qt=G.y,de=G.z):(Et=0,Qt=0,de=0);const te=rt.convert(U.format),be=rt.convert(U.type);let St;U.isData3DTexture?(L.setTexture3D(U,0),St=P.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(L.setTexture2DArray(U,0),St=P.TEXTURE_2D_ARRAY):(L.setTexture2D(U,0),St=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);const Be=P.getParameter(P.UNPACK_ROW_LENGTH),Yt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),$e=P.getParameter(P.UNPACK_SKIP_PIXELS),cn=P.getParameter(P.UNPACK_SKIP_ROWS),ti=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,ce.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ce.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,yt),P.pixelStorei(P.UNPACK_SKIP_ROWS,Dt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Vt);const vi=y.isDataArrayTexture||y.isData3DTexture,ie=U.isDataArrayTexture||U.isData3DTexture;if(y.isDepthTexture){const Ee=x.get(y),On=x.get(U),Se=x.get(Ee.__renderTarget),Bn=x.get(On.__renderTarget);Mt.bindFramebuffer(P.READ_FRAMEBUFFER,Se.__webglFramebuffer),Mt.bindFramebuffer(P.DRAW_FRAMEBUFFER,Bn.__webglFramebuffer);for(let Mi=0;Mi<vt;Mi++)vi&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,x.get(y).__webglTexture,V,Vt+Mi),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,x.get(U).__webglTexture,ot,de+Mi)),P.blitFramebuffer(yt,Dt,ft,ct,Et,Qt,ft,ct,P.DEPTH_BUFFER_BIT,P.NEAREST);Mt.bindFramebuffer(P.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(V!==0||y.isRenderTargetTexture||x.has(y)){const Ee=x.get(y),On=x.get(U);Mt.bindFramebuffer(P.READ_FRAMEBUFFER,Ku),Mt.bindFramebuffer(P.DRAW_FRAMEBUFFER,ju);for(let Se=0;Se<vt;Se++)vi?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ee.__webglTexture,V,Vt+Se):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ee.__webglTexture,V),ie?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,On.__webglTexture,ot,de+Se):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,On.__webglTexture,ot),V!==0?P.blitFramebuffer(yt,Dt,ft,ct,Et,Qt,ft,ct,P.COLOR_BUFFER_BIT,P.NEAREST):ie?P.copyTexSubImage3D(St,ot,Et,Qt,de+Se,yt,Dt,ft,ct):P.copyTexSubImage2D(St,ot,Et,Qt,yt,Dt,ft,ct);Mt.bindFramebuffer(P.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else ie?y.isDataTexture||y.isData3DTexture?P.texSubImage3D(St,ot,Et,Qt,de,ft,ct,vt,te,be,ce.data):U.isCompressedArrayTexture?P.compressedTexSubImage3D(St,ot,Et,Qt,de,ft,ct,vt,te,ce.data):P.texSubImage3D(St,ot,Et,Qt,de,ft,ct,vt,te,be,ce):y.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,ot,Et,Qt,ft,ct,te,be,ce.data):y.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,ot,Et,Qt,ce.width,ce.height,te,ce.data):P.texSubImage2D(P.TEXTURE_2D,ot,Et,Qt,ft,ct,te,be,ce);P.pixelStorei(P.UNPACK_ROW_LENGTH,Be),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Yt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,$e),P.pixelStorei(P.UNPACK_SKIP_ROWS,cn),P.pixelStorei(P.UNPACK_SKIP_IMAGES,ti),ot===0&&U.generateMipmaps&&P.generateMipmap(St),Mt.unbindTexture()},this.initRenderTarget=function(y){x.get(y).__webglFramebuffer===void 0&&L.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?L.setTextureCube(y,0):y.isData3DTexture?L.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?L.setTexture2DArray(y,0):L.setTexture2D(y,0),Mt.unbindTexture()},this.resetState=function(){C=0,I=0,B=null,Mt.reset(),et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=qt._getUnpackColorSpace()}}const Ig=[[13,13,8941655,6638138],[14,13,7832953,4738375],[13,14,10191463,7884867],[15,13,8547672,5593168],[13,15,8094066,4475459],[15,14,9862246,6705220],[14,15,9530203,5261385],[15,15,7828330,6575693],[14,14,9273961,5658701],[13,13,8293763,4478034]],Yn=Ig.map(([n,t,e,i],r)=>({w:n,d:t,color:e,roof:i,variant:r,kind:"house",name:""}));Yn.push({kind:"hospital",name:"Больница",w:19,d:17,variant:0,color:10788231,roof:5725273},{kind:"police",name:"Полиция",w:18,d:17,variant:0,color:6847620,roof:4279380},{kind:"fire",name:"Пожарная часть",w:19,d:17,variant:0,color:9132364,roof:5591883},{kind:"store",name:"Магазин",w:18,d:16,variant:0,color:8751466,roof:5659716});const vn=1.36,je=(n,t)=>({x:n*vn,z:t*vn}),hs=(n,t,e)=>({name:n,width:t,points:e.map(([i,r])=>je(i,r))}),gu=[hs("main",6.4,[[-64,9],[-34,9],[-19,6],[-5,3],[14,3],[36,7],[56,13],[65,18]]),hs("northLink",4.2,[[-19,6],[-19,-9],[-18,-23],[-20,-44]]),hs("north",4.4,[[-57,-22],[-35,-24],[-18,-23],[1,-23],[21,-24],[27,-25]]),hs("south",5.2,[[-55,42],[-33,39],[-9,38],[14,40],[34,43],[50,41],[56,32],[56,13]])],xl=[je(-19,6),je(-18,-23),je(56,13)],Xo=gu.flatMap(n=>n.points.slice(1).map((t,e)=>({name:n.name,width:n.width,from:n.points[e],to:t})));function Lr(n,t){let e;for(const{from:i,to:r,width:s,name:a}of Xo){if(t&&t!==a)continue;const c=r.x-i.x,l=r.z-i.z,o=Math.max(0,Math.min(1,((n.x-i.x)*c+(n.z-i.z)*l)/(c*c+l*l))),d=i.x+c*o,h=i.z+l*o,u=Math.hypot(n.x-d,n.z-h);(!e||u<e.distance)&&(e={x:d,z:h,distance:u,width:s})}return e}const _u=[[-51,-4,"main"],[-34,-5,"main"],[-51,-35,"north"],[-34,-36,"north"],[-6,-35,"north"],[-47,26,"south"],[-29,24,"south"],[-10,24,"south"],[12,25,"south"],[33,28,"south"]],xu={store:[0,-10,"main"],police:[22,-10,"main"],hospital:[46,-7,"main"],fire:[15,-37,"north"]};let Sa=163032293;function xo(){return Sa=Math.imul(Sa,1664525)+1013904223>>>0,Sa/4294967296}for(let n=Yn.length-1;n>0;n--){const t=Math.floor(xo()*(n+1));[Yn[n],Yn[t]]=[Yn[t],Yn[n]]}const Sr=3.42,Ug=["gable","hip","shed","gable","flat","hip","gable","shed","hip","gable"],Ng=[-43,-16,16,43].flatMap(n=>[-43,-16,16,43].map(t=>({x:t,z:n}))).filter(n=>!(n.x===-43&&n.z===-43)&&!(n.x===43&&n.z===43)),Fg=Ng.map(({x:n,z:t})=>({x:n+(xo()-.5)*2.4,z:t+(xo()-.5)*2.4})),Og=Yn.map(n=>{const[t,e]=n.kind==="house"?_u[n.variant]:xu[n.kind];return{x:t,z:e}}),Fn=Yn.map((n,t)=>{const[e,i,r]=n.kind==="house"?_u[n.variant]:xu[n.kind];return{...n,id:t,...je(e,i),street:r,roofKind:n.kind==="house"?Ug[n.variant]:n.kind==="fire"?"gable":"flat",stories:n.kind==="house"&&[1,3,5,8].includes(n.variant)||n.kind==="hospital"||n.kind==="police"?2:1}});function qo(n,t,e=0){return Math.abs(t.x-n.x)<n.w/2+e&&Math.abs(t.z-n.z)<n.d/2+e}function vo(n){const t=Yo(n);return t?{x:t.x-t.side*.87,z:t.z+1}:{x:n.x,z:n.z+1.65}}function Yo(n){if(n.kind!=="house"||n.stories!==2)return null;const t=n.variant%2===0?1:-1,e=t===1?(n.variant%3-1)*.55:0;return{x:n.x+t*(n.w/4+.55),z:n.z+e+.72,side:t,w:2.74,d:1.15}}function Zo(n,t){const e=Lr(n,t),i=e.width/2/Math.max(.01,e.distance);return{x:e.x+(n.x-e.x)*i,z:e.z+(n.z-e.z)*i}}function ir(n){if(n.kind!=="house"||![0,3,6,8].includes(n.variant))return null;const t=n.variant%2===0?1:-1,e=3.75,i=5.75;return{x:n.x+t*(n.w+e)/2,z:n.z+n.d/2-i/2-.16,w:e,d:i,side:t}}function vu(n){const t=ir(n);return t?[{x:t.x+t.side*t.w/2,z:t.z,w:.24,d:t.d},{x:t.x,z:t.z-t.d/2,w:t.w,d:.24},...[-1,1].map(i=>({x:t.x+i*(t.w/2-.17),z:t.z+t.d/2,w:.34,d:.24}))]:[]}function Mu(n){const t=n.variant%2===0?1:-1,e=ir(n),i=e?{x:e.x,z:e.z+e.d/2+.15}:{x:n.x+t*n.w*.32,z:n.z+n.d/2+1.45};return{parking:i,curb:Zo(i,n.street)}}function Su(n){const t=ir(n),e=n.x-n.w/2-(t?.side===-1?5.2:2.4),i=n.x+n.w/2+(t?.side===1?5.2:2.4),r=n.z-n.d/2-5.6,s=n.z+n.d/2;let a=s+5.4;for(;a>s+1.12&&!Array.from({length:25},(T,v)=>Lr({x:e+(i-e)*v/24,z:a})).every(T=>T.distance>=T.width/2+.96);)a-=.15;const c={x:n.x,z:s},l=Zo(c,n.street),{parking:o,curb:d}=Mu(n),h=(M,T)=>{const v=(a-M.z)/Math.max(.01,T.z-M.z);return M.x+(T.x-M.x)*Math.max(0,Math.min(1,v))},u=h(c,l),m=h(o,d),_=[{x:u,width:1.95},{x:m,width:3.14}].sort((M,T)=>M.x-T.x),S=[{x:(e+i)/2,z:r,w:i-e,d:.11},{x:e,z:(r+a)/2,w:.11,d:a-r},{x:i,z:(r+a)/2,w:.11,d:a-r}];let f=e;for(const{x:M,width:T}of[..._,{x:i,width:0}]){const v=M-T/2;v>f+.05&&S.push({x:(f+v)/2,z:a,w:v-f,d:.11}),f=M+T/2}const p=["wood","mesh","stone"][n.variant%3];return{west:e,east:i,back:r,front:a,style:p,fences:S,gaps:_}}function yu(n){const{kind:t,w:e,d:i,variant:r}=n,s=t==="house"?r%2===0?-1:1:t==="police"?-1:1,a=t==="store"||t==="fire"?-1:1,c=s*e/2,l=c-s*2.65,o=a*i/2,d=o-a*2.55;return{outside:c,inside:l,edge:o,cross:d,x:(c+l)/2,z:(o+d)/2}}function Eu(n){const{w:t,d:e,variant:i}=n,r=i%2===0?-1:1,s=-e/2,a=s+Math.min(2.85,e*.2),c=r<0?0:(i%3-1)*.55,l=r*(t/2+1.06)/2;return{side:r,back:s,divider:a,front:c,x:l,bathZ:(s+a)/2,officeZ:(a+c)/2}}function Ko(n,t=0){const{x:e,z:i,w:r,d:s,kind:a,variant:c}=n,l=[];function o(_,S,f,p,M=[],T=!1){const v=T?.22:.48,b=T?.83:a==="fire"?1.35:1;let R=S;for(const A of[...M,f+b]){const g=A-b;if(g>R){const E=(R+g)/2,z=g-R;l.push(p?{x:e+_,z:i+E,w:v,d:z,inside:T}:{x:e+E,z:i+_,w:z,d:v,inside:T})}R=A+b}}const d=r/2,h=s/2,u=t===0?ir(n):null,m=u?[u.z-i+.8]:[];if(o(-h,-d,d,!1),o(-d,-h,h,!0,u?.side===-1?m:[]),o(d,-h,h,!0,u?.side===1?m:[]),o(h,-d,d,!1,[0]),a==="store"||a==="fire")o(-.9,-d,d,!1,[-d*.56,d*.56],!0),o(0,-h,-.9,!0,[],!0);else{const S=a==="house"&&t===0?Eu(n):null;for(const f of[-1.06,1.06]){const p=S&&Math.sign(f)===S.side?[S.bathZ,S.officeZ,h*.5]:[-h*.48,h*.5];o(f,-h,h,!0,p,!0)}o(0,-d,-1.06,!1,[],!0),o(a==="house"?(c%3-1)*.55:0,1.06,d,!1,[],!0),S&&o(S.divider,Math.min(S.side*d,S.side*1.06),Math.max(S.side*d,S.side*1.06),!1,[],!0)}if(t===0){const{outside:_,inside:S,edge:f,cross:p,z:M}=yu(n);o(p,Math.min(_,S),Math.max(_,S),!1,[],!0),o(S,Math.min(f,p),Math.max(f,p),!0,[M],!0),a==="police"&&(o(-h+3.4,d-3.5,d,!1,[d-1.65],!0),o(d-3.5,-h,-h+3.4,!0,[],!0))}return l}const Bg=Fn.flatMap(n=>{const t=Yo(n);return[...Ko(n),...vu(n),...t?[t]:[]]}),zg=Fn.filter(n=>n.stories===2).flatMap(n=>Ko(n,1)),kg=Fn.filter(n=>n.kind==="house").flatMap(n=>Su(n).fences),Vg={x:0,z:0,yaw:0,run:!1,sneak:!1},vl=60*vn,Tu=Array.from({length:90},(n,t)=>{const e=t*2.39996,i=(42+t*13%17)*vn;return{x:Math.sin(e)*i,z:Math.cos(e)*i,h:3+t%4}}).filter(n=>{const t=Lr(n);return t.distance>t.width/2+2&&Fn.every(e=>Math.abs(n.x-e.x)>e.w/2+5.5||Math.abs(n.z-e.z)>e.d/2+6)}),qe=(n,t)=>Math.hypot(n.x-t.x,n.z-t.z);function Ir(){const n={mapVersion:10,time:0,players:[],walls:[],zombies:[],items:[]};for(const t of Fn){const e=Lr({x:t.x,z:t.z+t.d/2},t.street);Math.hypot(e.x,e.z)>15&&!on(n,e.x,e.z)&&n.zombies.push({id:t.id,x:e.x,z:e.z,hp:100,yaw:0})}return n}function Gg(n){if(n.mapVersion===10)return n;if(n.mapVersion===9)return n.mapVersion=10,n.items=[],n;const t=Ir(),e=n.mapVersion,i=e>=4?Og:Fg;function r(s){if(e>=7)return;const a=Fn.find(c=>qo({...c,...i[c.id]},s));if(a){const c=i[a.id];s.x+=a.x-c.x,s.z+=a.z-c.z}else s.x*=vn,s.z*=vn}if(n.walls.forEach(r),n.mapVersion=t.mapVersion,n.items=[],e<4||!e)n.zombies=t.zombies;else for(const s of n.zombies)if(r(s),on(n,s.x,s.z)){const a=t.zombies.find(c=>c.id===s.id);a?(s.x=a.x,s.z=a.z):s.hp=0}n.walls=n.walls.filter(s=>!on({...n,walls:[]},s.x,s.z,1));for(const s of n.players)if(r(s),on(n,s.x,s.z,.34,s.floor)){const c=[.55,1.1,1.65].flatMap(l=>[[l,0],[-l,0],[0,l],[0,-l]]).map(([l,o])=>({x:s.x+l,z:s.z+o})).find(l=>!on(n,l.x,l.z,.34,s.floor));c?Object.assign(s,c):Object.assign(s,{x:0,z:2,floor:0})}return n}function Hg(n,t,e){const i={id:t,name:e,x:0,z:2,yaw:0,hp:100,stamina:100,hunger:100,thirst:100,wood:0,meds:0,food:0,water:0,online:!0};return n.players.push(i),i}function on(n,t,e,i=.34,r=0){return Math.abs(t)>vl||Math.abs(e)>vl||(r===1?zg:Bg).some(s=>Math.abs(s.x-t)<s.w/2+i&&Math.abs(s.z-e)<s.d/2+i)||(r===1?!Fn.some(s=>s.stories===2&&qo(s,{x:t,z:e},-i)):kg.some(s=>Math.abs(s.x-t)<s.w/2+i&&Math.abs(s.z-e)<s.d/2+i)||n.walls.some(s=>Math.abs(s.x-t)<1+i&&Math.abs(s.z-e)<.27+i)||Tu.some(s=>Math.hypot(s.x-t,s.z-e)<.45+i))}function fs(n,t,e,i,r=0){on(n,t.x+e,t.z,.34,r)||(t.x+=e),on(n,t.x,t.z+i,.34,r)||(t.z+=i)}function jo(n){return Fn.some(t=>t.stories===2&&qe(n,vo(t))<1.35)}function bu(n){return{x:Math.round(n.x-Math.sin(n.yaw)*2.3),z:Math.round(n.z-Math.cos(n.yaw)*2.3)}}function Wg(n,t,e){if(e==="respawn"&&t.hp===0){Object.assign(t,{x:0,z:2,hp:100,stamina:100,hunger:100,thirst:100,floor:0});return}if(!t.online||t.hp<=0)return;const i=t.floor??0;if(e==="stairs"&&jo(t)){t.floor=i===0?1:0;return}if(e==="gather"){const r=n.items.findIndex(s=>(s.floor??0)===i&&qe(t,s)<2&&!on(n,(t.x+s.x)/2,(t.z+s.z)/2,0,i));if(r>=0){const s=n.items[r];t[s.kind]++,n.items.splice(r,1)}}if(e==="heal"&&t.meds>0&&t.hp<100&&(t.meds--,t.hp=Math.min(100,t.hp+40)),e==="eat"&&t.food>0&&t.hunger<100&&(t.food--,t.hunger=Math.min(100,t.hunger+36)),e==="drink"&&t.water>0&&t.thirst<100&&(t.water--,t.thirst=Math.min(100,t.thirst+48)),e==="build"&&i===0&&t.wood>=2&&n.walls.length<160){const r=bu(t);[-.9,0,.9].every(s=>!on(n,r.x+s,r.z,.3))&&!n.players.some(s=>s.online&&qe(s,r)<1.4)&&!n.zombies.some(s=>s.hp>0&&qe(s,r)<1.4)&&(t.wood-=2,n.walls.push(r))}if(e==="hit"&&i===0){const r={x:-Math.sin(t.yaw),z:-Math.cos(t.yaw)},s=n.zombies.filter(a=>{const c=qe(t,a);return a.hp>0&&c<2.5&&(c<.45||(a.x-t.x)*r.x+(a.z-t.z)*r.z>c*.68)&&!on(n,(t.x+a.x)/2,(t.z+a.z)/2,0)}).sort((a,c)=>qe(t,a)-qe(t,c))[0];s&&(s.hp=Math.max(0,s.hp-34))}}function Xg(n,t,e){n.time+=e;const i=n.players.filter(r=>r.online&&r.hp>0);for(const r of i){const s=t.get(r.id)??Vg,a=Math.max(1,Math.hypot(s.x,s.z)),c=s.run&&!s.sneak&&r.stamina>1&&(s.x!==0||s.z!==0),l=(s.sneak?2:c?7:4.3)*e/a;r.hunger=Math.max(0,r.hunger-(c?.3:.14)*e),r.thirst=Math.max(0,r.thirst-(c?.52:.23)*e),(r.hunger===0||r.thirst===0)&&(r.hp=Math.max(0,r.hp-e*(r.thirst===0?2:1))),r.stamina=Math.max(0,Math.min(100,r.stamina+(c?-24:r.thirst<25?8:19)*e)),r.yaw=s.yaw,fs(n,r,(s.x*Math.cos(r.yaw)-s.z*Math.sin(r.yaw))*l,(-s.x*Math.sin(r.yaw)-s.z*Math.cos(r.yaw))*l,r.floor)}for(const r of n.zombies){if(r.hp<=0)continue;const s=i.reduce((c,l)=>{const o=t.get(l.id),d=o?.sneak?7:o?.run&&Math.hypot(o.x,o.z)>.1?23:15;return l.hp>0&&!l.floor&&qe(r,l)<d&&(!c||qe(r,l)<qe(r,c))?l:c},void 0),a=s?qe(r,s):1/0;if(s&&a>.1){const c=s.x-r.x,l=s.z-r.z;if(r.yaw=Math.atan2(c,l),a<1.25&&!on(n,(s.x+r.x)/2,(s.z+r.z)/2,0))s.hp=Math.max(0,s.hp-18*e);else{const o=r.x,d=r.z;fs(n,r,c/a*1.5*e,l/a*1.5*e),o===r.x&&d===r.z&&fs(n,r,l/a*1.5*e,-c/a*1.5*e)}}else{const c=r.id+n.time/12;r.yaw=c,fs(n,r,Math.sin(c)*.45*e,Math.cos(c)*.45*e)}}}function qg(n,t=0){const e=[],i=[8870715,7035199,10713939,7889745][n.variant%4],r=[8091982,6847609,7950154,8747110,5860696][n.variant%5],s=7897981,a=13947578,c=3159608;function l(f,p,M,T,v,b,R){e.push({x:n.x+f,y:p+.17,z:n.z+M,w:T,h:v,d:b,color:R})}function o(f,p,M,T=!1){const v=(A,g,E,z,C,I,B)=>{T===2?l(p-A,g,M-E,z,C,I,B):T===3?l(p+E,g,M-A,I,C,z,B):T?l(p-E,g,M+A,I,C,z,B):l(p+A,g,M+E,z,C,I,B)},b=(A,g,E,z,C)=>v(0,A,0,g,E,z,C),R=(A,g,E)=>{for(const z of[-A/2,A/2])for(const C of[-g/2,g/2])v(z,E/2,C,.09,E,.09,i)};switch(f){case"bed":case"double":case"stretcher":{const A=f==="double"?1.75:1.05,g=f==="stretcher"?.8:.47;if(R(A-.17,1.68,g-.08),b(g-.035,A,.16,2,i),b(g+.1,A*.94,.16,1.88,a),v(0,g+.21,.3,A*.91,.08,1.19,f==="stretcher"?7641744:r),f==="double")for(const E of[-1,1])v(E*A*.23,g+.22,-.62,A*.38,.1,.34,a);else v(0,g+.22,-.62,A*.73,.1,.34,a);f!=="stretcher"&&v(.04,g+.245,.56,A*.82,.035,.16,10390896),f!=="stretcher"&&v(0,g+.28,-1,A,.55,.09,i);break}case"chair":R(.43,.43,.43),b(.46,.55,.12,.53,i),v(0,.71,-.24,.55,.48,.09,i);break;case"desk":case"table":{const A=f==="desk"?1.55:1.85;if(R(A-.2,.65,.75),b(.79,A,.14,.87,i),f==="desk")v(.5,.55,.02,.42,.37,.72,i);else{for(const g of[-1,1])v(g*.4,.88,.08,.25,.034,.22,a),v(g*.47,.945,-.17,.083,.125,.083,g===1?10841941:7900276);v(.03,.91,-.14,.26,.08,.2,10122835)}break}case"sofa":case"armchair":case"bench":{const A=f==="armchair"?.91:f==="bench"?1.74:2.29;if(R(A-.2,.59,.22),b(.37,A,.32,.87,r),v(0,.68,-.35,A,.52,.17,r),f!=="bench")for(const g of[-1,1])v(g*(A/2-.09),.57,0,.17,.22,.86,r);if(f==="sofa")for(const g of[-1,1])v(g*.49,.54,.16,.89,.12,.65,r),v(g*.71,.71,-.2,.33,.34,.21,g===1?12229495:10125929);break}case"tv":{const A=n.kind==="house"&&n.variant%2===0?1.38:1.08;b(.28,1.58,.56,.47,i),v(0,.32,.24,1.44,.29,.048,5523257);for(const g of[-1,1])v(g*.56,.34,.27,.22,.21,.047,i);b(.59,.57,.06,.25,c),b(.94,A,.64,.22,c),v(0,.94,.13,A-.12,.52,.039,5401448),v(A*.36,.67,.15,.032,.023,.014,11574129);break}case"fridge":case"wardrobe":case"locker":{const A=f==="wardrobe"?1.36:f==="locker"?1.07:.79;b(.92,A,1.84,.66,f==="wardrobe"?i:f==="locker"?s:a),v(0,1.1,.337,A*.91,.024,.018,c);for(const E of[.82,1.34])v(A*.26,E,.36,.055,.19,.056,c);break}case"stove":case"sink":case"counter":case"vanity":case"washer":{const A=f==="counter"?1.35:.79;if(b(.45,A,.9,.72,f==="counter"?i:a),b(.93,A+.03,.1,.76,f==="counter"?5854794:s),f==="stove")for(const g of[-.19,.19])for(const E of[-.17,.17])v(g,.995,E,.22,.025,.22,c);else f==="sink"||f==="vanity"?(v(0,1,.02,.4,.04,.37,c),v(0,1.07,-.23,.055,.2,.06,a)):f==="washer"&&v(0,.47,.37,.47,.47,.06,c);break}case"tub":b(.23,.84,.46,1.62,a),b(.48,.65,.06,1.39,s),v(0,.58,-.7,.06,.2,.06,a);break;case"shower":b(.1,1.02,.2,1.02,a),b(.21,.83,.04,.83,s),v(0,1.08,-.47,1.01,1.91,.06,8427923),v(-.46,1.07,0,.06,1.84,1,8559509),v(.31,1.49,-.39,.075,.55,.075,a),v(.31,1.79,-.28,.13,.06,.26,a);break;case"toilet":b(.18,.4,.36,.49,a),b(.45,.48,.19,.58,a),v(0,.54,0,.3,.03,.31,s),v(0,.62,-.25,.48,.51,.25,a);break;case"shelf":case"rack":{const A=f==="rack"?1.78:1.23,g=f==="rack"?s:i;for(const E of[-A/2,A/2])for(const z of[-.21,.21])v(E,.82,z,.07,1.64,.07,g);for(let E=0;E<4;E++){const z=.17+E*.38;b(z,A,.07,.53,g);for(let C=0;C<3;C++)(C+E+n.id)%5!==0&&v((C-1)*A*.29,z+.13,.01,.19,.19,.27,[9667923,10577995,7048054,a][(C+E+n.id)%4])}break}case"crate":b(.25,.72,.5,.69,i),b(.51,.76,.05,.73,10189131),v(0,.29,.35,.59,.07,.04,5523512);break;case"monitor":b(.055,.27,.11,.21,c),v(0,.2,0,.48,.31,.12,c),v(0,.21,.067,.4,.23,.025,5732204);break;case"register":b(.48,1.41,.96,.72,i),b(.99,1.5,.1,.82,a),v(.35,1.09,0,.45,.16,.37,c),v(.35,1.24,-.13,.26,.18,.07,s);break;case"truck":b(.66,2.14,.74,4.3,9652290),v(0,1.3,-1.33,2.09,1.12,1.46,10902605),v(0,1.48,-2.08,1.65,.45,.05,7638158),v(0,1.08,.82,2.1,.58,2.17,s),v(0,1.51,.8,.55,.09,2.18,a);for(const A of[-1.01,1.01])for(const g of[-1.25,1.33])v(A,.36,g,.31,.67,.61,c);break;case"plant":b(.16,.36,.32,.35,9001795);for(let A=0;A<4;A++)v((A%2-.5)*.24,.4+A*.08,(A<2?1:-1)*.13,.28,.21,.25,6058826);break;case"lamp":b(.04,.37,.08,.37,c),b(.68,.05,1.3,.05,s),b(1.35,.36,.25,.36,12299641);break;case"dresser":b(.43,1.03,.86,.54,i);for(const A of[.24,.47,.7])v(0,A,.28,.93,.188,.04,10056273),v(0,A,.31,.16,.043,.05,c);break;case"notice":b(2,1.07,.63,.05,i),v(0,2,.033,.93,.49,.025,11510654);for(let A=0;A<3;A++)v((A-1)*.25,2+(A%2?.075:-.05),.051,.135,.22,.012,a);break;case"nightstand":b(.28,.49,.56,.43,i),b(.56,.55,.06,.49,10715740);for(const A of[.22,.42])v(0,A,.23,.43,.16,.025,10190682),v(0,A,.25,.1,.028,.031,c);v(.15,.73,-.11,.045,.27,.045,s),v(.15,.87,-.11,.22,.18,.22,13744273),v(-.12,.607,.1,.14,.042,.17,7635569);break;case"coffee":R(.95,.43,.38),b(.405,1.11,.074,.55,i),v(-.22,.462,.09,.29,.038,.21,9667425),v(-.15,.486,.11,.26,.026,.17,6651250),v(.29,.47,-.11,.09,.041,.16,c);break;case"sideboard":b(.36,1.34,.72,.42,i),b(.735,1.41,.07,.49,9597776);for(const A of[-1,1])v(A*.31,.39,.226,.59,.51,.035,10190941),v(A*.1,.43,.254,.045,.104,.033,c);v(-.44,.89,-.06,.23,.24,.067,8676168),v(-.44,.89,-.019,.17,.17,.016,12692358),v(.43,.86,.01,.23,.17,.19,8162172);break;case"microwave":b(.18,.52,.36,.35,a),v(-.06,.19,.181,.29,.23,.031,c),v(.17,.17,.187,.057,.12,.025,s);break;case"laundry":b(.24,.46,.48,.46,11112804);for(let A=.16;A<.46;A+=.11)v(0,A,.23,.44,.034,.035,7693902);v(.065,.49,0,.36,.065,.31,11186337);break;case"mirror":b(1.42,.68,.83,.085,i),v(0,1.42,.055,.55,.69,.03,9610656);break;case"coatRack":b(.046,.43,.09,.4,c),b(.85,.065,1.7,.065,i),b(1.5,.44,.058,.059,i),v(-.14,1.19,.025,.16,.58,.12,r);break}}const d=(f,p,M,T,v)=>{l(f,.017,p,M,.021,T,v);for(const b of[-1,1])l(f,.029,p+b*(T/2-.17),M*.9,.018,.09,10189141)},h=n.w*.25+.45,u=n.d*.25;if(t===1){if(n.kind==="house"){const f=-n.d/2,p=n.d/2,M=n.w/2;d(-h,f+3.25,2.6,1.65,r),o("double",-h,f+1.21),o("dresser",-M+.41,-u+.48,!0),o("nightstand",-h+1.29,f+.66),o("bed",h,f+1.23),o("wardrobe",M-.47,-u,!0),o("nightstand",h-1,f+.66),o("sofa",-h,p-.66,2),o("shelf",-M+.4,u-1.2,!0),o("lamp",-h+1.45,p-.6),d(-h,u,3.1,2.6,r),o("coffee",-h,u+.25),o("tv",-M+.43,u+.4,3),o("desk",M-.55,u-.45,!0),o("chair",M-1.37,u-.45,!0),o("shelf",h+.48,p-.48)}else if(n.kind==="hospital"){for(const f of[-1,1])o("stretcher",f*h,-u-1.35,!0),o("stretcher",f*h,-u+1.1,!0),o("monitor",f*h,u-1),o("locker",f*(h+1.55),u+1.35),o("desk",f*h,u+.8);o("notice",-h,-n.d/2+.27)}else n.kind==="police"&&(o("table",-h,-u),o("chair",-h,-u+1),o("chair",-h,-u-1),o("desk",h,-u),o("chair",h,-u+1),o("shelf",h+1.7,-u-1.45),o("rack",-h,u-1.3),o("rack",-h,u+1.3),o("crate",-h-1.4,u),o("desk",h,u-.3),o("chair",h,u+.7),o("locker",h+1.65,u+1.3));return e}const m=yu(n);if(l(m.x,.022,m.z,2.43,.025,2.31,n.kind==="house"?7298376:8556682),n.kind==="house"){const f=n.variant%2===0?1:-1,p=f*h,M=-p,T=n.w/2,v=n.d/2,b=-v,R=f===1?(n.variant%3-1)*.55:0,A=f===-1?(n.variant%3-1)*.55:0;d(p,u+.25,Math.min(3.7,n.w*.27),Math.min(3.8,n.d*.27),r),o("sofa",p,v-.67,2),o("armchair",f*(T-.68),u+.7,!0),n.stories===2?o("tv",f*(T-.43),R+2,f===1?!0:3):o("tv",p,R+.64),o("coffee",p-f*.21,u+.51),o("lamp",p-f*1.46,v-.64),o("plant",p+f*1.51,v-.43),n.stories===2?o("sideboard",f*2.18,v-1.39,!0):o("sideboard",f*(T-.42),R+1.6,!0),o("coatRack",f*.56,n.d/2-.57);const g=A+.54;o("fridge",M-f*1.62,g),o("stove",M+f*1.49,g),o("sink",M,g),o("table",M,u+.6),o("chair",M,u+1.31),o("chair",M,u-.08,!0);for(const O of[-1,1])o("chair",M+O*1.2,u+.61,!0);for(const O of[-.65,.65])l(M+O,1.82,g-.23,.57,.49,.4,i);l(M+f*.78,1.01,g,.49,.06,.58,5854794),l(M+f*.78,.49,g,.45,.97,.52,i);const E=e.length;o("microwave",M+f*.78,g);for(const O of e.slice(E))O.y+=.89;const z=-f,C=z*(T-.46),I=A+1.87;o("counter",C,I,z===1?!0:3),d(M,A+1.79,1.92,.94,7831402),l(C,1.01,I-.29,.26,.046,.37,11637610),l(C,1.05,I-.31,.13,.055,.14,10853220),l(C,1.08,I+.36,.14,.21,.18,7896688),l(C,1.19,I+.36,.1,.034,.09,5201238),d(p,b+3.9,2.62,1.91,7431764),o(n.variant%3?"double":"bed",p,b+1.23),o("nightstand",p-f*1.25,b+.62),n.variant%3!==0&&o("nightstand",p+f*1.23,b+.66),o("wardrobe",f*(T-.49),-u+.31,!0),o("dresser",f*(T-.42),R-1.18,!0),n.variant%3!==1&&o(n.variant%3===0?"crate":"plant",p-f*1.44,R-.78),o("notice",p,-n.d/2+.27);const N=Eu(n),k=N.divider-N.back;l(N.x,.014,N.bathZ,T-1.27,.018,k-.23,7832182);for(let O=-1.65;O<=1.65;O+=.55)l(N.x+O,.024,N.bathZ,.018,.012,k-.23,6253668);o(n.variant%3===0?"shower":"tub",N.side*(T-1.02),b+.66,!0),o("toilet",N.side*1.79,b+.54),o("vanity",N.side*(T-.52),N.divider-.48,!0),o("mirror",N.side*(T-.22),N.divider-.48,!0),o("washer",N.side*1.67,N.divider-.58),o("laundry",N.side*(T-.55),N.bathZ+.1),d(N.x,N.bathZ,.87,.9,9148814),d(N.x,N.officeZ,2.55,Math.min(1.9,N.front-N.divider-.65),8416343),o("desk",N.x,N.divider+.56),o("chair",N.x,N.divider+1.3,2),o("shelf",N.side*(T-.46),N.front-.85,!0),l(N.x-.26,1.08,N.divider+.41,.47,.29,.16,4343623),l(N.x-.26,1.084,N.divider+.5,.39,.21,.03,6455674),o("plant",N.side*(T-.42),N.divider+.54);const H=Math.sign(m.outside);return o("shelf",m.x+H*.76,m.z,!0),o("crate",m.x+H*.15,m.z+.78),n.variant%3===0&&o("shelf",0,-n.d/2+.65),e}const _=Math.sign(m.outside),S=Math.sign(m.edge);if(o("toilet",m.x+_*.63,m.z+S*.61,S===1),o("vanity",m.x+_*.69,m.z-S*.63,!0),n.kind==="hospital"){for(const f of[-1,1]){const p=h*f;for(const M of[-1.65,1.45])o("stretcher",p-f*1.03,-u+M,!0),o("monitor",p+f*1.22,-u+M),l(p+f*1.22,.42,-u+M,.48,.84,.49,s);o("bench",p,u+1.69),o("plant",p+f*1.5,u+2.1)}o("desk",-h,u-1.4),o("chair",-h,u-2.14),o("rack",h,u-1.6),o("locker",h+2,u-1.6),o("stretcher",h,u+.1,!0),o("sink",h+1.75,u+.1),o("notice",-h,-n.d/2+.27)}if(n.kind==="police"){for(const f of[-1,1]){const p=f*h;o("desk",p,u-.55),o("chair",p,u-1.35),o("shelf",p+f*1.65,u+1.48),o("bench",p,u+1.67),o("locker",f===1?p-.9:p-1.9,-u-1.7),o("rack",p+f*1.65,-u+.52,!0)}o("table",-h,-u),o("chair",-h,-u+.66),o("chair",-h,-u-.66),o("crate",h,-u),o("crate",h-.85,-u),o("monitor",-h,u+.18),l(-h,.51,u+.18,.57,1.02,.46,s),o("bench",n.w/2-1.68,-n.d/2+.66);for(const f of[-2,-1,1,2])l(n.w/2-1.65+f*.36,1.1,-n.d/2+3.38,.055,2.15,.055,c)}if(n.kind==="fire"){o("truck",-h,u*.79),o("bench",h,u+1.7);for(let f=0;f<3;f++)o("locker",h+2,u-1.5+f*1.24,!0);o("rack",h-1.6,u-1),o("crate",h-1.67,u+.12),o("desk",h,u-.47),o("chair",h,u-.99),o("table",-h,-u),o("chair",-h,-u+.72),o("fridge",-h-1.8,-u-2.1),o("sink",-h,-u-2.1),o("bed",h-.9,-u),o("bed",h+.9,-u),o("wardrobe",h,-u-2.2)}if(n.kind==="store"){for(let f=0;f<3;f++)for(const p of[-1,1])o("rack",p*(h-.8),.45+f*1.42,!0);o("register",-2,n.d/2-1.1),o("register",2,n.d/2-1.1);for(let f=0;f<3;f++)o("fridge",-h-1+f,-u-1.6),o("crate",h-1+f*.85,-u+.46);o("rack",h,-u-1.65),o("desk",h+1.85,-u,!0)}return e}const Ml=3.42,Sl=13681316,Au=5400685,ds=4344905,Yg=new Jn({color:9152940,transparent:!0,opacity:.33,depthWrite:!1});function Zg(n,t,e,i,r){const s=new an;e.add(s);const a=t.d>t.w,c=a?t.d:t.w,l=a?t.z:t.x,o=l-c/2,d=l+c/2,h=n.kind==="store"?3:n.kind==="hospital"?2.35:n.kind==="police"?1.83:1.46,u=n.kind==="store"?.69:1.19,m=n.kind==="store"?1.85:n.kind==="hospital"?1.48:1.22,_=u+m,S=a?n.z:n.x,f=a?n.d:n.w,p=[S-f*.28,S+f*.28].filter(A=>A-h/2>o+.35&&A+h/2<d-.35),M=(A,g,E,z,C,I)=>{const B=(A+g)/2,N=(E+z)/2;return a?i(s,t.x,N,B,C,z-E,g-A,I):i(s,B,N,t.z,g-A,z-E,C,I)},T=a?t.w:t.d;let v=o;const b=n.kind==="house"?10390896:n.kind==="fire"?7367519:11975078;for(const A of p){const g=A-h/2,E=A+h/2;M(v,g,0,3.4,T,r),M(g,E,0,u,T,r),M(g,E,_,3.4,T,r),M(g,E,u-.065,u+.06,T+.18,b),M(g,E,_-.08,_,T+.08,b),M(g,g+.09,u,_,T+.08,b),M(E-.09,E,u,_,T+.08,b),M(A-.035,A+.035,u,_,T+.04,b),n.kind==="house"&&M(g,E,u+m*.56,u+m*.56+.06,T+.04,b);const z=M(g+.07,E-.07,u+.035,_-.045,.045,Au);z.material=Yg,v=E}M(v,d,0,3.4,T,r);const R=a?i(e,t.x,.275,l,T,.55,c,r):i(e,l,.275,t.z,c,.55,T,r);return{full:s,cut:R}}function Kg(n,t,e){const i=n.w/2+.42,r=n.d/2+.48,s=n.kind==="fire"?1.75:1.28,a=n.roofKind==="shed"?[0,s,s,0]:[0,0,0,0],c=n.roofKind==="hip"?r*.48:r,l=[-i,a[0],-r,i,a[1],-r,i,a[2],r,-i,a[3],r,0,s,-c,0,s,c,i,0,-r,i,0,r],o=n.roofKind==="shed"?[0,1,2,0,2,3,0,6,1,3,2,7,6,7,2,6,2,1]:[0,4,5,0,5,3,4,1,2,4,2,5,0,1,4,3,5,2,0,3,2,0,2,1],d=new Pe;d.setAttribute("position",new he(l,3)),d.setIndex(o);const h=new _e(d.toNonIndexed(),new Jn({color:n.roof,flatShading:!0,side:en}));h.geometry.computeVertexNormals(),d.dispose(),h.position.set(n.x,e,n.z),t.add(h)}function jg(n,t,e,i){const r=n.stories*Ml;if(n.roofKind==="flat"){i(t,n.x,r+.09,n.z,n.w+.8,.18,n.d+.85,n.roof);for(const l of[-1,1])i(t,n.x+l*(n.w/2+.15),r+.32,n.z,.19,.43,n.d+.7,n.color),i(t,n.x,r+.32,n.z+l*(n.d/2+.17),n.w+.67,.43,.19,n.color);i(t,n.x+n.w*.28,r+.39,n.z-1,2,.5,1.35,ds),i(t,n.x+n.w*.28,r+.68,n.z-1,1.92,.11,1.29,7830130)}else Kg(n,t,r),i(t,n.x,r+.01,n.z,n.w+.91,.17,n.d+1,n.roof),n.kind==="house"&&(i(t,n.x+n.w*.21,r+1,n.z-n.d*.24,.71,1.65,.72,8217425),i(t,n.x+n.w*.21,r+1.84,n.z-n.d*.24,.87,.14,.85,ds));for(const[l,o]of e.entries()){const d=l*Ml,h=n.z+n.d/2,u=n.x+n.w/2,_=n.kind==="house"&&n.variant%3!==0?9:n.kind==="fire"||n.variant%3===0?5:3,S=n.kind==="house"?n.variant%2===0?6643023:6712930:n.kind==="fire"?6899261:6318441;for(let f=1;f<=_;f++){const p=d+.15+f*2.9/(_+1),M=l===0?1.15:0,T=n.w/2-M;for(const v of[-1,1])i(o,n.x+v*(M+T/2),p,h+.252,T,.027,.025,S);i(o,u+.252,p,n.z,.025,.027,n.d,S)}i(o,n.x,d+.18,h+.28,n.w+.19,.15,.12,ds)}const s=n.z+n.d/2,a=e[0],c=n.kind==="house"?2.9:4.65;i(a,n.x,2.78,s+.87,c,.22,1.76,n.roof),i(a,n.x,.14,s+.75,c+.21,.26,1.72,8484968);for(const l of[-1,1])i(a,n.x+l*(c/2-.16),1.41,s+1.6,.15,2.55,.19,Sl);if(n.kind==="house"&&[1,4,6,8].includes(n.variant)||n.kind==="hospital"||n.kind==="police"||n.kind==="store"){const l=n.kind==="house"?1.28:n.kind==="store"?1.8:2,o=n.x-n.w/2+.55,d=s-.72,h=(u,m,_,S)=>{const f=new _e(new Us(_,_,u,16),new Jn({color:S}));f.position.set(o,m+u/2,d),a.add(f)};h(1.25,0,l,n.color),h(.86,1.25,l*.987,Au),h(.26,2.11,l*1.07,n.roof);for(let u=0;u<7;u++){const m=(u+1)*Math.PI/7;i(a,o-Math.sin(m)*l*.995,1.68,d+Math.cos(m)*l*.995,.08,.86,.08,Sl)}}if(n.kind==="fire"){i(a,n.x-n.w*.28,1.47,s+.27,3.6,2.78,.1,7235673);for(let l=1;l<7;l++)i(a,n.x-n.w*.28,.28+l*.35,s+.334,3.4,.055,.05,ds);i(t,n.x+n.w*.32,r+1,n.z-n.d*.31,1.7,2.4,1.5,n.color),i(t,n.x+n.w*.32,r+2.24,n.z-n.d*.31,1.95,.16,1.71,n.roof)}if(n.kind==="store")for(let l=-5;l<=5;l++){const o=i(a,n.x+l*.68,2.69,s+1,.7,.12,1.7,l%2?11116152:7043414);o.rotation.x=-.18}n.kind==="hospital"&&(i(a,n.x-.46,2.88,s+.34,.25,.76,.09,13622221),i(a,n.x-.46,2.88,s+.39,.76,.25,.09,13622221))}function Pt(n){return document.getElementById(n)}const rr=Pt("view"),wu=Pt("menu"),Ru=Pt("hud"),_i=Pt("pause"),Kn=Pt("inventory"),Vi=Pt("error"),Ls=Pt("nickname"),Cu=Pt("code");let Bs;try{Bs=new Lg({canvas:rr,antialias:!0})}catch{Vi.textContent="Для запуска нужен браузер с включённым WebGL 2.";for(const n of["solo","create","join"])Pt(n).setAttribute("inert","");throw Error("WebGL 2 unavailable")}Bs.setPixelRatio(Math.min(window.devicePixelRatio,1.25));const Gt=new uf,Ve=new Ns(-16,16,10,-10,.1,130),$g=new F(20,24,20),ki=new F,Pu=new Lt,_r=new F,yl=new Bf,El=new Xn(new F(0,1,0),0);let Mo=1;const $o=new Bt(9016973),Jg=new Bt(1647664);Gt.background=$o.clone();Gt.fog=new Oo($o.clone(),.024);const Jo=new Nf(16770992,1.9);Jo.position.set(-20,36,-18);const Du=new Df(14740951,3879982,1.7);Gt.add(Jo,Du);const Mn=new If(16773836,50,24,Math.PI/6,.55,1.5);Mn.position.set(.15,-.1,0);Mn.target.position.set(0,0,-8);Mn.visible=!1;Gt.add(Mn,Mn.target,Ve);const Ur=new er(1,1,1),Tl=new Map;function Ot(n,t,e,i,r,s,a,c){let l=Tl.get(c);l||(l=new Jn({color:c}),Tl.set(c,l));const o=new _e(Ur,l);return o.position.set(t,e,i),o.scale.set(r,s,a),n.add(o),o}Ot(Gt,0,-.35,0,140*vn,.7,140*vn,4673858);function In(n,t,e,i,r){const s=t.x-n.x,a=t.z-n.z,c=Ot(Gt,(n.x+t.x)/2,i,(n.z+t.z)/2,e,.012,Math.hypot(s,a),r);c.rotation.y=Math.atan2(s,a)}const Lu=new Vo(1,24);Lu.rotateX(-Math.PI/2);function bl(n,t,e,i){const r=new _e(Lu,new Jn({color:i}));r.position.set(n.x,e,n.z),r.scale.set(t,1,t),Gt.add(r)}for(const n of Xo)In(n.from,n.to,n.width+1.7,.041,7961198),In(n.from,n.to,n.width,.061,4277826);for(const n of gu)for(const t of n.points)bl(t,n.width/2+.85,.046,7961198),bl(t,n.width/2,.066,4277826);let ya=37;const xr=()=>(ya=Math.imul(ya,1664525)+1013904223>>>0,ya/4294967296),Es=new zo(Ur,new Jn({color:16777215}),1450),Ie=new ue;for(let n=0;n<Es.count;n++){const t=(xr()-.5)*126*vn,e=(xr()-.5)*126*vn,i=Lr({x:t,z:e}),r=i.distance<i.width/2-.12;Ie.position.set(t,r?.071:.002,e),Ie.scale.set(.15+xr()*.65,.009,.09+xr()*.36),Ie.rotation.y=xr()*Math.PI,Ie.updateMatrix(),Es.setMatrixAt(n,Ie.matrix),Es.setColorAt(n,new Bt(r?n%2?5724752:4080192:n%3?5464138:3950395))}Gt.add(Es);for(const{name:n,width:t,from:e,to:i}of Xo){const r=i.x-e.x,s=i.z-e.z,a=Math.hypot(r,s),c=(l,o=0)=>({x:e.x+r/a*l+s/a*o,z:e.z+s/a*l-r/a*o});if(n==="main")for(let l=2;l<a-2;l+=4.6){const o=c(l);xl.some(d=>Math.hypot(d.x-o.x,d.z-o.z)<7)||In(c(l-.7),c(l+.7),.1,.086,10656637)}if(n!=="main"&&a>6){for(const[l,o,d]of[[e,0,1],[i,a,-1]])if(xl.some(h=>h.x===l.x&&h.z===l.z))for(let h=-2;h<=2;h++){const u=h*t/6;In(c(o+d*4.2,u),c(o+d*5.5,u),.37,.086,11644312)}}}const Al=je(43,-34);Ot(Gt,Al.x,.013,Al.z,24,.02,24,5661518);In(je(36,-35),je(48,-30),1.2,.022,8418911);In(je(48,-30),je(50,-26),1.2,.022,8418911);for(const n of[je(39,-34),je(47,-34)]){Ot(Gt,n.x,.44,n.z,2,.16,.54,8282693),Ot(Gt,n.x,.74,n.z-.26,2,.51,.11,8282693);for(const t of[-.76,.76])Ot(Gt,n.x+t,.19,n.z,.11,.38,.4,5264464)}const Iu=[],Uu=[],Nu=new Jn({color:16777215});function Qg(n){const t=ir(n);if(!t)return;const{x:e,z:i,w:r,d:s,side:a}=t,c=i+s/2;Ot(Gt,e,.057,i,r,.1,s,7171428);const l=vu(n).map(h=>Ot(Gt,h.x,1.2,h.z,h.w,2.4,h.d,n.color)),o=new an;Gt.add(o);const d=Ot(o,e,2.56,i,r+.42,.19,s+.53,n.roof);d.rotation.z=-a*.095,Ot(o,e,2.19,c+.035,r,.44,.29,5524285);for(const h of[-1,1])Ot(o,e+h*(r/2-.24),1.28,c+.17,.08,2.06,.059,9274481);for(let h=0;h<5;h++)Ot(o,e,2.03,c-.16-h*.2,r-.68,.077,.21,11381146);Ot(Gt,e+a*(r/2-.46),.48,i-s/2+.59,.57,.96,.78,7830382),Ot(Gt,e+a*(r/2-.46),1,i-s/2+.59,.62,.09,.83,9271648),Uu.push({layout:t,roof:o,walls:l})}function t_(n){const{west:t,east:e,back:i,front:r,style:s,fences:a}=Su(n);Ot(Gt,(t+e)/2,.009,(i+r)/2,e-t,.015,r-i,5595979+n.variant%3*131585);const c=[],l=[];for(const d of a){const h=d.w>d.d,u=h?d.w:d.d,m=(p,M)=>[d.x+(h?p:0),M,d.z+(h?0:p)],_=(p,M,T,v,b,R)=>{const[A,,g]=m(p,M);c.push({x:A,y:M,z:g,w:h?T:b,h:v,d:h?b:T,color:R})},S=Math.max(1,Math.ceil(u/2)),f=u/S;for(let p=0;p<=S;p++){const M=-u/2+p*f;s==="stone"?(_(M,.43,.24,.86,.26,7828582),_(M,.86,.3,.095,.31,9537913)):_(M,.51,.115,1.02,.115,s==="wood"?7888963:8161668)}if(s==="wood"){for(const M of[.29,.68])_(0,M,u,.062,.055,6507574);const p=Math.max(1,Math.ceil(u/.19));for(let M=0;M<p;M++){const T=-u/2+(M+.5)*u/p,v=.81+M%3*.027;_(T,.07+v/2,.135,v,.063,M%3===0?10519132:9006157)}}else if(s==="stone"){for(let p=0;p<4;p++){const M=u/Math.max(1,Math.ceil(u/.39));let T=-u/2;for(;T<u/2-.03;){const v=Math.min(u/2-T,T===-u/2&&p%2?M/2:M);v>.018&&_(T+v/2,.11+p*.163,v-.014,.153,.19,(Math.round(T*11)+p)%2===0?8485740:7499619),T+=v}}_(0,.735,u,.093,.24,9471861)}else{for(const T of[.16,.89])_(0,T,u,.041,.042,7569788);const p=Math.max(1,Math.ceil(u/.155)),M=u/p;for(let T=0;T<p;T++)for(let v=0;v<5;v++){const b=-u/2+T*M,R=.17+v*.14;l.push(...m(b,R),...m(b+M,R+.14),...m(b+M,R),...m(b,R+.14))}}}const o=new zo(Ur,Nu,c.length);for(const[d,h]of c.entries())Ie.position.set(h.x,h.y,h.z),Ie.rotation.y=0,Ie.scale.set(h.w,h.h,h.d),Ie.updateMatrix(),o.setMatrixAt(d,Ie.matrix),o.setColorAt(d,new Bt(h.color));if(Gt.add(o),l.length){const d=new Pe;d.setAttribute("position",new he(l,3)),Gt.add(new yf(d,new iu({color:9477516,transparent:!0,opacity:.73})))}}for(const n of Fn){const t=n.z+n.d/2,e={x:n.x,z:t},i=Zo(e,n.street);if(In(e,i,n.kind==="house"?1.58:3.2,.052,8749427),n.kind==="house"){t_(n),Qg(n);const{curb:d,parking:h}=Mu(n);In(d,h,2.72,.075,n.variant%3===0?9011565:6842723),ir(n)||In(h,{x:h.x,z:h.z+.92},2.82,.076,8157291)}Ot(Gt,n.x,.08,n.z,n.w,.16,n.d,n.kind==="house"?7628115:8489085);const r=new an;Gt.add(r);const s=Array.from({length:n.stories},(d,h)=>{const u=new an,m=new an,_=new an;Gt.add(u,m,_);const S=h*Sr;u.position.y=S,_.position.y=S,h===1&&Ot(u,n.x,.08,n.z,n.w,.16,n.d,n.kind==="house"?8418401:9081478);const f=Ko(n,h);h===1&&f.push({x:n.x,z:t,w:2.1,d:.48});const p=f.map(b=>{const R=b.x>n.x&&b.d>b.w||b.z>n.z&&b.w>b.d;if(!b.inside&&Math.max(b.w,b.d)>4){const{full:E,cut:z}=Zg(n,b,u,Ot,n.color);return R?{full:E,cut:z}:(z.visible=!1,{full:E})}const A=b.inside?9076845:n.color;return{full:Ot(u,b.x,1.7,b.z,b.w,3.4,b.d,A),cut:b.inside||R?Ot(u,b.x,.275,b.z,b.w,.55,b.d,A):void 0}}),M=qg(n,h),T=new zo(Ur,Nu,M.length);for(const[b,R]of M.entries())Ie.position.set(R.x,R.y,R.z),Ie.scale.set(R.w,R.h,R.d),Ie.rotation.y=0,Ie.updateMatrix(),T.setMatrixAt(b,Ie.matrix),T.setColorAt(b,new Bt(R.color));_.add(T);for(let b=-n.w/2+.7;b<n.w/2;b+=.68)Ot(_,n.x+b,.163,n.z,.025,.008,n.d-.42,n.kind==="house"?6247494:6845290);const v=Yo(n);if(v){const{x:b,z:R,side:A,w:g,d:E}=v;for(let I=0;I<10;I++){const B=(I+1)*.3,N=b+A*(-g/2+(I+.5)*g/10);Ot(_,N,h===0?B/2:.14,R,g/10+.013,h===0?B:.24,E,9072727)}const z=Ot(_,b,h===0?1.89:.91,R+E/2+.02,h===0?3.88:g,.073,.072,10654326);h===0&&(z.rotation.z=A*.81);const C=vo(n);Ot(_,C.x,.178,C.z,1.45,.019,.23,12890488)}else if(n.stories===2){const b=vo(n);for(let R=0;R<10;R++){const A=(R+1)*.295;Ot(_,b.x,h===0?A/2:.13,b.z+.85-R*.225,1.22,h===0?A:.23,.237,9072727)}for(const R of[-.65,.65]){Ot(_,b.x+R,.4,b.z+1,.085,.8,.085,10654326);const A=Ot(_,b.x+R,h===0?1.82:.89,b.z-.12,.075,.075,h===0?3.6:2.23,10654326);h===0&&(A.rotation.x=.91)}Ot(_,b.x,.177,b.z+1.25,1.37,.024,.18,12626801)}return{shell:u,facade:m,interior:_,walls:p}});if(jg(n,r,s.map(d=>d.facade),Ot),Ot(Gt,n.x-n.w/2+.65,.42,t+1,.65,.84,.59,5202512),Ot(Gt,n.x-n.w/2+.65,.85,t+1,.77,.12,.68,5794902),Iu.push({building:n,roof:r,stories:s}),!n.name)continue;const a=document.createElement("canvas");a.width=256,a.height=64;const c=a.getContext("2d");c.fillStyle="#29372d",c.fillRect(0,0,256,64),c.fillStyle="#e2dfae",c.font="bold 26px sans-serif",c.textAlign="center",c.fillText(n.name.toUpperCase(),128,42,242);const l=new su(a);l.colorSpace=Fe;const o=new _e(new Dr(3.4,.85),new Pr({map:l}));o.position.set(n.x,2.98,t+.43),s[0].facade.add(o)}const e_=new Go(1,1,5),n_=new Jn({color:2439728});for(const n of Tu){Ot(Gt,n.x,n.h*.37,n.z,.72,n.h*.74,.72,5326394);const t=new _e(e_,n_);t.position.set(n.x,n.h*.8,n.z),t.scale.set(1.9,n.h*.85,1.9),Gt.add(t)}const So=n=>{const t=new an;return Ot(t,0,1.17,0,.55,.72,.36,n),Ot(t,0,1.68,0,.4,.38,.39,8885362),Ot(t,-.17,.46,0,.21,.69,.24,3422516),Ot(t,.17,.46,0,.21,.69,.24,3422516),Ot(t,-.41,1.14,.09,.2,.61,.23,n),Ot(t,.41,1.14,.09,.2,.61,.23,n),Gt.add(t),t},wl=new Map,ps=new Map,ms=new Map,Rn=So(6847658);Rn.visible=!1;const Qo=new _e(new Ho(.44,.51,24),new Pr({color:12569737,side:en}));Qo.rotation.x=-Math.PI/2;Qo.position.y=.041;Rn.add(Qo);function i_(n){const t=document.createElement("canvas");t.width=384,t.height=64;const e=t.getContext("2d");e.font="bold 28px sans-serif",e.textAlign="center",e.textBaseline="middle";const i=Math.min(380,e.measureText(n).width+24);e.fillStyle="#18231dec",e.fillRect((384-i)/2,8,i,48),e.fillStyle="#e3edb2",e.fillText(n,192,32,356);const r=new su(t);r.colorSpace=Fe;const s=new eu(new Ql({map:r,depthWrite:!1}));return s.position.y=2.12,s.scale.set(2.6,.43,1),s}const gs=[],Cr=new _e(Ur,new Pr({color:15520905,transparent:!0,opacity:.35,depthWrite:!1}));Cr.scale.set(2,1.3,.54);Cr.visible=!1;Gt.add(Cr);const Ne=new Set,Rl=new Map;let ge=Ir(),dn="",He="menu",Ze=0,Cl=performance.now(),Pl=0,Dl=0,hi=!1,xi=!1,Ts=0,Ue=null,Fu=0,Wi="",Ea=0;const Ou="zombie-solo-isometric-v1";let yo=0;const r_=new URLSearchParams(location.search);Pt("create").hidden=!0,Pt("join").hidden=!0,Pt("catalog-link").hidden=!1;Cu.value=r_.get("room")?.slice(0,6)??"";Ls.value=localStorage.getItem("zombie-name")??"";const $n=()=>ge.players.find(n=>n.id===dn),Ll=n=>"zombie-player:"+n,di=()=>He!=="menu"&&_i.hidden&&Kn.hidden&&($n()?.hp??0)>0;function $i(){if(He==="solo")try{localStorage.setItem(Ou,JSON.stringify(ge))}catch{Pt("save-status").textContent="Не удалось сохранить игру в браузере."}}function tc(){try{const n=JSON.parse(localStorage.getItem(Ou)??"null");return n&&n.players?.[0]?.id==="solo"&&Array.isArray(n.zombies)&&Array.isArray(n.items)&&Array.isArray(n.walls)?n:null}catch{return null}}function Bu(){Pt("continue-solo").hidden=!tc()}Bu();function zu(n){He=n,wu.hidden=!0,Ru.hidden=!1,_i.hidden=!0,Kn.hidden=!0,Pt("copy").hidden=n==="solo",Pt("session").textContent=n==="solo"?"Одиночное выживание":"Комната "+Wi}function ec(n,t,e=!1){const i=new URL("/ws",location.href);i.protocol==="https:"&&(i.protocol="wss:"),i.protocol==="http:"&&(i.protocol="ws:");const r=new WebSocket(i);Ue=r;let s=!1;Vi.textContent=e?"":"Подключение…",r.onopen=()=>r.send(JSON.stringify({type:n?"create":"join",code:t,name:Ls.value,token:localStorage.getItem(Ll(t))})),r.onmessage=a=>{if(Ue!==r)return;const c=JSON.parse(a.data);if(c.type==="error"){s=!0,Vi.textContent=c.message;return}c.type==="joined"&&(Wi=c.code,dn=c.id,ge=Ir(),localStorage.setItem(Ll(Wi),dn),localStorage.setItem("zombie-name",Ls.value),Ea=0,zu("online")),c.type==="state"&&(ge=c.world)},r.onclose=()=>{Ue===r&&(He==="online"&&!s?(Ea||=Date.now(),Tr("Связь прервалась. Переподключаемся…"),Date.now()-Ea<6e4?Fu=window.setTimeout(()=>ec(!1,Wi,!0),1500):Tr("Не удалось восстановить связь. Вернись в меню и введи прежний код.")):s&&He==="online"?Tr(Vi.textContent??"Ошибка входа."):s||(Vi.textContent="Сервер комнат недоступен."))}}function Tr(n){Ne.clear(),xi=!1,Kn.hidden=!0,_i.hidden=!1,Pt("pause-message").textContent=n}function ku(n){const t=Ue;Ue=null,t?.close(),ge=n?Gg(n):Ir(),dn="solo",n||Hg(ge,dn,Ls.value||"Выживший"),Ze=$n()?.yaw??0,yo=performance.now()+5e3,zu("solo"),$i()}Pt("continue-solo").onclick=()=>ku(tc());Pt("solo").onclick=()=>{tc()&&!window.confirm("Начать новый мир вместо текущего сохранения?")||ku(null)};window.addEventListener("pagehide",$i);Pt("create").onclick=()=>{Ue?.readyState!==WebSocket.CONNECTING&&ec(!0,"")};Pt("join").onsubmit=n=>{n.preventDefault(),Ue?.readyState!==WebSocket.CONNECTING&&ec(!1,Cu.value.trim().toUpperCase())};Pt("copy").onclick=async()=>{try{await navigator.clipboard.writeText(Wi),Pt("copy").textContent="Код скопирован",window.setTimeout(()=>Pt("copy").textContent="Копировать код",1500)}catch{Pt("copy").textContent=Wi}};Pt("full").onclick=()=>{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen().catch(()=>{})};Pt("resume").onclick=()=>{He==="online"&&Ue?.readyState!==WebSocket.OPEN||($n()?.hp===0&&pi("respawn"),_i.hidden=!0)};Pt("leave").onclick=()=>{$i();const n=Ue;Ue=null,n?.close(),clearTimeout(Fu),Ne.clear(),dn="",He="menu",wu.hidden=!1,Ru.hidden=!0,_i.hidden=!0,Kn.hidden=!0,Vi.textContent="",ge=Ir(),hi=!1,xi=!1,Mn.visible=!1,Bu()};Pt("close-inventory").onclick=()=>{Kn.hidden=!0};Pt("heal").onclick=()=>pi("heal");Pt("eat").onclick=()=>pi("eat");Pt("drink").onclick=()=>pi("drink");window.addEventListener("blur",()=>{Ne.clear(),xi=!1});rr.addEventListener("pointermove",n=>{Pu.set(n.clientX/innerWidth*2-1,1-n.clientY/innerHeight*2)});rr.addEventListener("wheel",n=>{di()&&(n.preventDefault(),Mo=Kh.clamp(Mo*Math.exp(-n.deltaY*.001),.65,2.1))},{passive:!1});function pi(n){if(performance.now()-Dl<350)return;Dl=performance.now();const t=$n();t&&(n==="hit"&&(Ts=.14),He==="solo"?(t.yaw=Ze,Wg(ge,t,n),$i()):Ue?.readyState===WebSocket.OPEN&&(Ue.send(JSON.stringify({type:"input",...Vu()})),Ue.send(JSON.stringify({type:"act",action:n}))))}function Vu(){const n=di()?Number(Ne.has("KeyD"))-Number(Ne.has("KeyA")):0,t=di()?Number(Ne.has("KeyW"))-Number(Ne.has("KeyS")):0,e=Math.SQRT1_2/Math.max(1,Math.hypot(n,t)),i=(n-t)*e,r=(-n-t)*e;return{x:i*Math.cos(Ze)-r*Math.sin(Ze),z:-i*Math.sin(Ze)-r*Math.cos(Ze),yaw:Ze,run:Ne.has("ShiftLeft")||Ne.has("ShiftRight"),sneak:Ne.has("ControlLeft")||Ne.has("ControlRight")}}document.addEventListener("keydown",n=>{if(n.code==="Escape"&&He!=="menu"){Kn.hidden?_i.hidden?Tr(He==="solo"?"Одиночная игра на паузе.":"Мир продолжает работать."):Pt("resume").click():Kn.hidden=!0;return}if(di()&&(Ne.add(n.code),["Space","Tab","ControlLeft","ControlRight"].includes(n.code)&&n.preventDefault(),!n.repeat)){if(n.code==="KeyE"){const t=$n();t&&jo(t)?(hi=!1,pi("stairs")):pi("gather")}n.code==="KeyF"&&(Mn.visible=!Mn.visible),n.code==="KeyB"&&!$n()?.floor&&(hi=!hi),(n.code==="KeyI"||n.code==="Tab")&&(Kn.hidden=!1,Ne.clear(),xi=!1)}});document.addEventListener("keyup",n=>Ne.delete(n.code));rr.addEventListener("contextmenu",n=>n.preventDefault());rr.addEventListener("mousedown",n=>{di()&&(n.button===0&&pi(hi?"build":"hit"),n.button===2&&(xi=!0))});document.addEventListener("mouseup",n=>{n.button===2&&(xi=!1)});function Gu(n){const t=Math.min(.05,(n-Cl)/1e3);Cl=n;const e=$n();e&&di()&&(El.constant=-(e.floor??0)*Sr,yl.setFromCamera(Pu,Ve),yl.ray.intersectPlane(El,_r)&&Math.hypot(_r.x-e.x,_r.z-e.z)>.1&&(Ze=Math.atan2(e.x-_r.x,e.z-_r.z)));const i=Vu();He==="solo"&&di()&&(Rl.set(dn,i),Xg(ge,Rl,t)),He==="solo"&&n>=yo&&(yo=n+5e3,$i()),He==="online"&&Ue?.readyState===WebSocket.OPEN&&n-Pl>50&&(Pl=n,Ue.send(JSON.stringify({type:"input",...i})));const r=$n();if(r){r.hp<=0&&_i.hidden&&(Tr("Ты погиб. Можно возродиться у стартовой точки."),$i());const l=r.floor??0,o=l*Sr,d=new F(r.x,o+.1,r.z);ki.distanceTo(d)>5?ki.copy(d):ki.lerp(d,1-Math.exp(-t*12)),Rn.position.set(r.x,o,r.z),Rn.rotation.y=Ze+Math.PI,Rn.visible=r.hp>0,Rn.scale.y=i.sneak?.73:1;const h=Math.hypot(i.x,i.z)>.05?Math.sin(n*(i.run?.023:.015))*.49:0;Rn.children[2].rotation.x=h,Rn.children[3].rotation.x=-h,Mn.position.set(r.x,o+1.4,r.z),Mn.target.position.set(r.x-Math.sin(Ze)*12,o+.4,r.z-Math.cos(Ze)*12),Pt("health").value=r.hp,Pt("stamina").value=r.stamina,Pt("hunger").value=r.hunger,Pt("thirst").value=r.thirst,Pt("supplies").textContent="Доски "+r.wood+" · Аптечки "+r.meds+(hi?" · ЛКМ: поставить баррикаду (2 доски)":""),Pt("items").textContent="Доски: "+r.wood+" · Аптечки: "+r.meds+" · Еда: "+r.food+" · Вода: "+r.water,Pt("heal").disabled=!r.meds||r.hp>=100,Pt("eat").disabled=!r.food||r.hunger>=100,Pt("drink").disabled=!r.water||r.thirst>=100;const u=ge.items.find(S=>(S.floor??0)===l&&qe(r,S)<2),m={wood:"доски",meds:"аптечка",food:"еда",water:"вода"};Pt("nearby").textContent=jo(r)?l?"E · Спуститься на первый этаж":"E · Подняться на второй этаж":u?"E · Подобрать: "+m[u.kind]:l?"Второй этаж":"",Pt("allies").textContent=ge.players.filter(S=>S.id!==dn).map(S=>S.name+" · "+(S.online?Math.ceil(S.hp)+" HP":"переподключается")).join(`
`),rr.style.cursor=Ts>0?"cell":"crosshair",Ts=Math.max(0,Ts-t);const _=bu({...r,yaw:Ze});Cr.position.set(_.x,.65,_.z)}else ki.set(-5,0,-5),Rn.visible=!1;Ve.position.copy(ki).add($g),Ve.lookAt(ki),Cr.visible=!!r&&!r.floor&&hi&&r.hp>0;const s=Mo*(xi?1.18:1);Ve.zoom!==s&&(Ve.zoom=s,Ve.updateProjectionMatrix());for(const{building:l,roof:o,stories:d}of Iu){const h=!!r&&qo(l,r,1.4),u=r?.floor??0;o.visible=!h;for(const[m,{shell:_,facade:S,interior:f,walls:p}]of d.entries()){const M=h&&m===u;_.visible=!h||m<=u,S.visible=!h||m<u,f.visible=M;for(const{full:T,cut:v}of p)T.visible=!M||!v,v&&(v.visible=M)}}for(const{layout:l,roof:o,walls:d}of Uu){const h=!!r&&!r.floor&&Math.abs(r.x-l.x)<l.w/2+.21&&Math.abs(r.z-l.z)<l.d/2+.21;o.visible=!h;for(const u of d)u.scale.y=h?.57:2.4,u.position.y=u.scale.y/2}for(const l of ge.zombies){let o=wl.get(l.id);o||(o=So(8950878),wl.set(l.id,o)),o.visible=l.hp>0,o.position.set(l.x,0,l.z),o.rotation.y=l.yaw;const d=Math.sin(ge.time*8+l.id)*.27;o.children[2].rotation.x=d,o.children[3].rotation.x=-d}for(const l of ge.players){if(l.id===dn)continue;let o=ps.get(l.id);o||(o=So(5736327),o.add(i_(l.name)),ps.set(l.id,o)),o.visible=l.hp>0&&(l.floor??0)===(r?.floor??0),o.position.set(l.x,(l.floor??0)*Sr,l.z),o.rotation.y=l.yaw+Math.PI}for(const[l,o]of ps)if(!ge.players.some(d=>d.id===l&&d.id!==dn)){const d=o.children.find(h=>h instanceof eu);d?.material.map?.dispose(),d?.material.dispose(),Gt.remove(o),ps.delete(l)}for(const l of ge.items){let o=ms.get(l.id);if(!o){const d={wood:13342302,meds:12705712,food:15382371,water:9226469};o=Ot(Gt,l.x,.34+(l.floor??0)*Sr,l.z,.59,.23,.43,d[l.kind]),ms.set(l.id,o)}o.visible=(l.floor??0)===(r?.floor??0),o.rotation.y=n/750}for(const[l,o]of ms)ge.items.some(d=>d.id===l)||(Gt.remove(o),ms.delete(l));for(;gs.length>ge.walls.length;)Gt.remove(gs.pop());for(const[l,o]of ge.walls.entries())(gs[l]??(gs[l]=Ot(Gt,o.x,.67,o.z,2,1.34,.54,8674363))).position.set(o.x,.67,o.z);const a=ge.time%1800,c=Math.min(1,Math.max(0,(a-1170)/60),Math.max(0,(1800-a)/55));Gt.background.copy($o).lerp(Jg,c),Gt.fog.color.copy(Gt.background),Du.intensity=1.65-c*1.22,Jo.intensity=1.75-c*1.55,Bs.render(Gt,Ve),requestAnimationFrame(Gu)}function Hu(){Bs.setSize(innerWidth,innerHeight,!1);const n=11*innerWidth/innerHeight;Ve.left=-n,Ve.right=n,Ve.top=11,Ve.bottom=-11,Ve.updateProjectionMatrix()}window.addEventListener("resize",Hu);Hu();requestAnimationFrame(Gu);
