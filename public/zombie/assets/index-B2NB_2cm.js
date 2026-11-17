(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const fo="183",wu=0,jo=1,Ru=2,cs=1,Cu=2,pr=3,Xn=0,Nt=1,Qt=2,wn=0,zi=1,$o=2,Jo=3,Qo=4,Pu=5,ni=100,Du=101,Lu=102,Iu=103,Uu=104,Nu=200,Fu=201,Ou=202,Bu=203,pa=204,ma=205,zu=206,Vu=207,ku=208,Gu=209,Hu=210,Wu=211,Xu=212,qu=213,Yu=214,ga=0,_a=1,xa=2,Gi=3,va=4,Ma=5,Sa=6,Ea=7,po=0,Ku=1,Zu=2,fn=0,mc=1,gc=2,_c=3,xc=4,vc=5,Mc=6,Sc=7,Ec=300,li=301,Hi=302,Ls=303,Is=304,Es=306,ya=1e3,An=1001,Ta=1002,Tt=1003,ju=1004,Dr=1005,Rt=1006,Us=1007,si=1008,kt=1009,yc=1010,Tc=1011,Mr=1012,mo=1013,pn=1014,tn=1015,Dn=1016,go=1017,_o=1018,Sr=1020,bc=35902,Ac=35899,wc=1021,Rc=1022,nn=1023,Ln=1026,ai=1027,xo=1028,vo=1029,Wi=1030,Mo=1031,So=1033,us=33776,hs=33777,fs=33778,ds=33779,ba=35840,Aa=35841,wa=35842,Ra=35843,Ca=36196,Pa=37492,Da=37496,La=37488,Ia=37489,Ua=37490,Na=37491,Fa=37808,Oa=37809,Ba=37810,za=37811,Va=37812,ka=37813,Ga=37814,Ha=37815,Wa=37816,Xa=37817,qa=37818,Ya=37819,Ka=37820,Za=37821,ja=36492,$a=36494,Ja=36495,Qa=36283,eo=36284,to=36285,no=36286,$u=3200,Cc=0,Ju=1,Gn="",Ut="srgb",Xi="srgb-linear",gs="linear",je="srgb",xi=7680,el=519,Qu=512,eh=513,th=514,Eo=515,nh=516,ih=517,yo=518,rh=519,io=35044,tl="300 es",cn=2e3,Er=2001;function sh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function _s(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ah(){const n=_s("canvas");return n.style.display="block",n}const nl={};function xs(...n){const e="THREE."+n.shift();console.log(e,...n)}function Pc(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Re(...n){n=Pc(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Ge(...n){n=Pc(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function vs(...n){const e=n.join(" ");e in nl||(nl[e]=!0,Re(...n))}function oh(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const lh={[ga]:_a,[xa]:Sa,[va]:Ea,[Gi]:Ma,[_a]:ga,[Sa]:xa,[Ea]:va,[Ma]:Gi};class Zi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const At=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let il=1234567;const _r=Math.PI/180,qi=180/Math.PI;function Rn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(At[n&255]+At[n>>8&255]+At[n>>16&255]+At[n>>24&255]+"-"+At[e&255]+At[e>>8&255]+"-"+At[e>>16&15|64]+At[e>>24&255]+"-"+At[t&63|128]+At[t>>8&255]+"-"+At[t>>16&255]+At[t>>24&255]+At[i&255]+At[i>>8&255]+At[i>>16&255]+At[i>>24&255]).toLowerCase()}function ke(n,e,t){return Math.max(e,Math.min(t,n))}function To(n,e){return(n%e+e)%e}function ch(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function uh(n,e,t){return n!==e?(t-n)/(e-n):0}function xr(n,e,t){return(1-t)*n+t*e}function hh(n,e,t,i){return xr(n,e,1-Math.exp(-t*i))}function fh(n,e=1){return e-Math.abs(To(n,e*2)-e)}function dh(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function ph(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function mh(n,e){return n+Math.floor(Math.random()*(e-n+1))}function gh(n,e){return n+Math.random()*(e-n)}function _h(n){return n*(.5-Math.random())}function xh(n){n!==void 0&&(il=n);let e=il+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function vh(n){return n*_r}function Mh(n){return n*qi}function Sh(n){return(n&n-1)===0&&n!==0}function Eh(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function yh(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Th(n,e,t,i,r){const s=Math.cos,a=Math.sin,l=s(t/2),c=a(t/2),o=s((e+i)/2),p=a((e+i)/2),h=s((e-i)/2),u=a((e-i)/2),f=s((i-e)/2),g=a((i-e)/2);switch(r){case"XYX":n.set(l*p,c*h,c*u,l*o);break;case"YZY":n.set(c*u,l*p,c*h,l*o);break;case"ZXZ":n.set(c*h,c*u,l*p,l*o);break;case"XZX":n.set(l*p,c*g,c*f,l*o);break;case"YXY":n.set(c*f,l*p,c*g,l*o);break;case"ZYZ":n.set(c*g,c*f,l*p,l*o);break;default:Re("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function en(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function $e(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const bh={DEG2RAD:_r,RAD2DEG:qi,generateUUID:Rn,clamp:ke,euclideanModulo:To,mapLinear:ch,inverseLerp:uh,lerp:xr,damp:hh,pingpong:fh,smoothstep:dh,smootherstep:ph,randInt:mh,randFloat:gh,randFloatSpread:_h,seededRandom:xh,degToRad:vh,radToDeg:Mh,isPowerOfTwo:Sh,ceilPowerOfTwo:Eh,floorPowerOfTwo:yh,setQuaternionFromProperEuler:Th,normalize:$e,denormalize:en};class Le{constructor(e=0,t=0){Le.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ji{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,l){let c=i[r+0],o=i[r+1],p=i[r+2],h=i[r+3],u=s[a+0],f=s[a+1],g=s[a+2],E=s[a+3];if(h!==E||c!==u||o!==f||p!==g){let m=c*u+o*f+p*g+h*E;m<0&&(u=-u,f=-f,g=-g,E=-E,m=-m);let d=1-l;if(m<.9995){const M=Math.acos(m),A=Math.sin(M);d=Math.sin(d*M)/A,l=Math.sin(l*M)/A,c=c*d+u*l,o=o*d+f*l,p=p*d+g*l,h=h*d+E*l}else{c=c*d+u*l,o=o*d+f*l,p=p*d+g*l,h=h*d+E*l;const M=1/Math.sqrt(c*c+o*o+p*p+h*h);c*=M,o*=M,p*=M,h*=M}}e[t]=c,e[t+1]=o,e[t+2]=p,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,a){const l=i[r],c=i[r+1],o=i[r+2],p=i[r+3],h=s[a],u=s[a+1],f=s[a+2],g=s[a+3];return e[t]=l*g+p*h+c*f-o*u,e[t+1]=c*g+p*u+o*h-l*f,e[t+2]=o*g+p*f+l*u-c*h,e[t+3]=p*g-l*h-c*u-o*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,l=Math.cos,c=Math.sin,o=l(i/2),p=l(r/2),h=l(s/2),u=c(i/2),f=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=u*p*h+o*f*g,this._y=o*f*h-u*p*g,this._z=o*p*g+u*f*h,this._w=o*p*h-u*f*g;break;case"YXZ":this._x=u*p*h+o*f*g,this._y=o*f*h-u*p*g,this._z=o*p*g-u*f*h,this._w=o*p*h+u*f*g;break;case"ZXY":this._x=u*p*h-o*f*g,this._y=o*f*h+u*p*g,this._z=o*p*g+u*f*h,this._w=o*p*h-u*f*g;break;case"ZYX":this._x=u*p*h-o*f*g,this._y=o*f*h+u*p*g,this._z=o*p*g-u*f*h,this._w=o*p*h+u*f*g;break;case"YZX":this._x=u*p*h+o*f*g,this._y=o*f*h+u*p*g,this._z=o*p*g-u*f*h,this._w=o*p*h-u*f*g;break;case"XZY":this._x=u*p*h-o*f*g,this._y=o*f*h-u*p*g,this._z=o*p*g+u*f*h,this._w=o*p*h+u*f*g;break;default:Re("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],l=t[5],c=t[9],o=t[2],p=t[6],h=t[10],u=i+l+h;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(p-c)*f,this._y=(s-o)*f,this._z=(a-r)*f}else if(i>l&&i>h){const f=2*Math.sqrt(1+i-l-h);this._w=(p-c)/f,this._x=.25*f,this._y=(r+a)/f,this._z=(s+o)/f}else if(l>h){const f=2*Math.sqrt(1+l-i-h);this._w=(s-o)/f,this._x=(r+a)/f,this._y=.25*f,this._z=(c+p)/f}else{const f=2*Math.sqrt(1+h-i-l);this._w=(a-r)/f,this._x=(s+o)/f,this._y=(c+p)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ke(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,l=t._x,c=t._y,o=t._z,p=t._w;return this._x=i*p+a*l+r*o-s*c,this._y=r*p+a*c+s*l-i*o,this._z=s*p+a*o+i*c-r*l,this._w=a*p-i*l-r*c-s*o,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,l=this.dot(e);l<0&&(i=-i,r=-r,s=-s,a=-a,l=-l);let c=1-t;if(l<.9995){const o=Math.acos(l),p=Math.sin(o);c=Math.sin(c*o)/p,t=Math.sin(t*o)/p,this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(rl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(rl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,l=e.z,c=e.w,o=2*(a*r-l*i),p=2*(l*t-s*r),h=2*(s*i-a*t);return this.x=t+c*o+a*h-l*p,this.y=i+c*p+l*o-s*h,this.z=r+c*h+s*p-a*o,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,l=t.y,c=t.z;return this.x=r*c-s*l,this.y=s*a-i*c,this.z=i*l-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ns.copy(this).projectOnVector(e),this.sub(Ns)}reflect(e){return this.sub(Ns.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ns=new U,rl=new ji;class Ue{constructor(e,t,i,r,s,a,l,c,o){Ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,l,c,o)}set(e,t,i,r,s,a,l,c,o){const p=this.elements;return p[0]=e,p[1]=r,p[2]=l,p[3]=t,p[4]=s,p[5]=c,p[6]=i,p[7]=a,p[8]=o,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],l=i[3],c=i[6],o=i[1],p=i[4],h=i[7],u=i[2],f=i[5],g=i[8],E=r[0],m=r[3],d=r[6],M=r[1],A=r[4],S=r[7],R=r[2],T=r[5],w=r[8];return s[0]=a*E+l*M+c*R,s[3]=a*m+l*A+c*T,s[6]=a*d+l*S+c*w,s[1]=o*E+p*M+h*R,s[4]=o*m+p*A+h*T,s[7]=o*d+p*S+h*w,s[2]=u*E+f*M+g*R,s[5]=u*m+f*A+g*T,s[8]=u*d+f*S+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],l=e[5],c=e[6],o=e[7],p=e[8];return t*a*p-t*l*o-i*s*p+i*l*c+r*s*o-r*a*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],l=e[5],c=e[6],o=e[7],p=e[8],h=p*a-l*o,u=l*c-p*s,f=o*s-a*c,g=t*h+i*u+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/g;return e[0]=h*E,e[1]=(r*o-p*i)*E,e[2]=(l*i-r*a)*E,e[3]=u*E,e[4]=(p*t-r*c)*E,e[5]=(r*s-l*t)*E,e[6]=f*E,e[7]=(i*c-o*t)*E,e[8]=(a*t-i*s)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,l){const c=Math.cos(s),o=Math.sin(s);return this.set(i*c,i*o,-i*(c*a+o*l)+a+e,-r*o,r*c,-r*(-o*a+c*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(Fs.makeScale(e,t)),this}rotate(e){return this.premultiply(Fs.makeRotation(-e)),this}translate(e,t){return this.premultiply(Fs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Fs=new Ue,sl=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),al=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ah(){const n={enabled:!0,workingColorSpace:Xi,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===je&&(r.r=Cn(r.r),r.g=Cn(r.g),r.b=Cn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===je&&(r.r=Vi(r.r),r.g=Vi(r.g),r.b=Vi(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Gn?gs:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return vs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return vs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Xi]:{primaries:e,whitePoint:i,transfer:gs,toXYZ:sl,fromXYZ:al,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ut},outputColorSpaceConfig:{drawingBufferColorSpace:Ut}},[Ut]:{primaries:e,whitePoint:i,transfer:je,toXYZ:sl,fromXYZ:al,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ut}}}),n}const We=Ah();function Cn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Vi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let vi;class wh{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{vi===void 0&&(vi=_s("canvas")),vi.width=e.width,vi.height=e.height;const r=vi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=vi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=_s("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Cn(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Cn(t[i]/255)*255):t[i]=Cn(t[i]);return{data:t,width:e.width,height:e.height}}else return Re("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Rh=0;class bo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Rh++}),this.uuid=Rn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,l=r.length;a<l;a++)r[a].isDataTexture?s.push(Os(r[a].image)):s.push(Os(r[a]))}else s=Os(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Os(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?wh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Re("Texture: Unable to serialize Texture."),{})}let Ch=0;const Bs=new U;class Ct extends Zi{constructor(e=Ct.DEFAULT_IMAGE,t=Ct.DEFAULT_MAPPING,i=An,r=An,s=Rt,a=si,l=nn,c=kt,o=Ct.DEFAULT_ANISOTROPY,p=Gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ch++}),this.uuid=Rn(),this.name="",this.source=new bo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=o,this.format=l,this.internalFormat=null,this.type=c,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Bs).x}get height(){return this.source.getSize(Bs).y}get depth(){return this.source.getSize(Bs).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Re(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Re(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ec)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ya:e.x=e.x-Math.floor(e.x);break;case An:e.x=e.x<0?0:1;break;case Ta:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ya:e.y=e.y-Math.floor(e.y);break;case An:e.y=e.y<0?0:1;break;case Ta:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ct.DEFAULT_IMAGE=null;Ct.DEFAULT_MAPPING=Ec;Ct.DEFAULT_ANISOTROPY=1;class ct{constructor(e=0,t=0,i=0,r=1){ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,o=c[0],p=c[4],h=c[8],u=c[1],f=c[5],g=c[9],E=c[2],m=c[6],d=c[10];if(Math.abs(p-u)<.01&&Math.abs(h-E)<.01&&Math.abs(g-m)<.01){if(Math.abs(p+u)<.1&&Math.abs(h+E)<.1&&Math.abs(g+m)<.1&&Math.abs(o+f+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(o+1)/2,S=(f+1)/2,R=(d+1)/2,T=(p+u)/4,w=(h+E)/4,x=(g+m)/4;return A>S&&A>R?A<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(A),r=T/i,s=w/i):S>R?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=T/r,s=x/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=w/s,r=x/s),this.set(i,r,s,t),this}let M=Math.sqrt((m-g)*(m-g)+(h-E)*(h-E)+(u-p)*(u-p));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(h-E)/M,this.z=(u-p)/M,this.w=Math.acos((o+f+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this.w=ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this.w=ke(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ph extends Zi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new Ct(r),a=i.count;for(let l=0;l<a;l++)this.textures[l]=s.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Rt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new bo(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class dn extends Ph{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Dc extends Ct{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Dh extends Ct{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class it{constructor(e,t,i,r,s,a,l,c,o,p,h,u,f,g,E,m){it.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,l,c,o,p,h,u,f,g,E,m)}set(e,t,i,r,s,a,l,c,o,p,h,u,f,g,E,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=l,d[13]=c,d[2]=o,d[6]=p,d[10]=h,d[14]=u,d[3]=f,d[7]=g,d[11]=E,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new it().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,r=1/Mi.setFromMatrixColumn(e,0).length(),s=1/Mi.setFromMatrixColumn(e,1).length(),a=1/Mi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),l=Math.sin(i),c=Math.cos(r),o=Math.sin(r),p=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const u=a*p,f=a*h,g=l*p,E=l*h;t[0]=c*p,t[4]=-c*h,t[8]=o,t[1]=f+g*o,t[5]=u-E*o,t[9]=-l*c,t[2]=E-u*o,t[6]=g+f*o,t[10]=a*c}else if(e.order==="YXZ"){const u=c*p,f=c*h,g=o*p,E=o*h;t[0]=u+E*l,t[4]=g*l-f,t[8]=a*o,t[1]=a*h,t[5]=a*p,t[9]=-l,t[2]=f*l-g,t[6]=E+u*l,t[10]=a*c}else if(e.order==="ZXY"){const u=c*p,f=c*h,g=o*p,E=o*h;t[0]=u-E*l,t[4]=-a*h,t[8]=g+f*l,t[1]=f+g*l,t[5]=a*p,t[9]=E-u*l,t[2]=-a*o,t[6]=l,t[10]=a*c}else if(e.order==="ZYX"){const u=a*p,f=a*h,g=l*p,E=l*h;t[0]=c*p,t[4]=g*o-f,t[8]=u*o+E,t[1]=c*h,t[5]=E*o+u,t[9]=f*o-g,t[2]=-o,t[6]=l*c,t[10]=a*c}else if(e.order==="YZX"){const u=a*c,f=a*o,g=l*c,E=l*o;t[0]=c*p,t[4]=E-u*h,t[8]=g*h+f,t[1]=h,t[5]=a*p,t[9]=-l*p,t[2]=-o*p,t[6]=f*h+g,t[10]=u-E*h}else if(e.order==="XZY"){const u=a*c,f=a*o,g=l*c,E=l*o;t[0]=c*p,t[4]=-h,t[8]=o*p,t[1]=u*h+E,t[5]=a*p,t[9]=f*h-g,t[2]=g*h-f,t[6]=l*p,t[10]=E*h+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Lh,e,Ih)}lookAt(e,t,i){const r=this.elements;return Bt.subVectors(e,t),Bt.lengthSq()===0&&(Bt.z=1),Bt.normalize(),Nn.crossVectors(i,Bt),Nn.lengthSq()===0&&(Math.abs(i.z)===1?Bt.x+=1e-4:Bt.z+=1e-4,Bt.normalize(),Nn.crossVectors(i,Bt)),Nn.normalize(),Lr.crossVectors(Bt,Nn),r[0]=Nn.x,r[4]=Lr.x,r[8]=Bt.x,r[1]=Nn.y,r[5]=Lr.y,r[9]=Bt.y,r[2]=Nn.z,r[6]=Lr.z,r[10]=Bt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],l=i[4],c=i[8],o=i[12],p=i[1],h=i[5],u=i[9],f=i[13],g=i[2],E=i[6],m=i[10],d=i[14],M=i[3],A=i[7],S=i[11],R=i[15],T=r[0],w=r[4],x=r[8],y=r[12],H=r[1],C=r[5],N=r[9],B=r[13],W=r[2],z=r[6],k=r[10],F=r[14],Q=r[3],j=r[7],ce=r[11],pe=r[15];return s[0]=a*T+l*H+c*W+o*Q,s[4]=a*w+l*C+c*z+o*j,s[8]=a*x+l*N+c*k+o*ce,s[12]=a*y+l*B+c*F+o*pe,s[1]=p*T+h*H+u*W+f*Q,s[5]=p*w+h*C+u*z+f*j,s[9]=p*x+h*N+u*k+f*ce,s[13]=p*y+h*B+u*F+f*pe,s[2]=g*T+E*H+m*W+d*Q,s[6]=g*w+E*C+m*z+d*j,s[10]=g*x+E*N+m*k+d*ce,s[14]=g*y+E*B+m*F+d*pe,s[3]=M*T+A*H+S*W+R*Q,s[7]=M*w+A*C+S*z+R*j,s[11]=M*x+A*N+S*k+R*ce,s[15]=M*y+A*B+S*F+R*pe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],l=e[5],c=e[9],o=e[13],p=e[2],h=e[6],u=e[10],f=e[14],g=e[3],E=e[7],m=e[11],d=e[15],M=c*f-o*u,A=l*f-o*h,S=l*u-c*h,R=a*f-o*p,T=a*u-c*p,w=a*h-l*p;return t*(E*M-m*A+d*S)-i*(g*M-m*R+d*T)+r*(g*A-E*R+d*w)-s*(g*S-E*T+m*w)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],l=e[5],c=e[6],o=e[7],p=e[8],h=e[9],u=e[10],f=e[11],g=e[12],E=e[13],m=e[14],d=e[15],M=t*l-i*a,A=t*c-r*a,S=t*o-s*a,R=i*c-r*l,T=i*o-s*l,w=r*o-s*c,x=p*E-h*g,y=p*m-u*g,H=p*d-f*g,C=h*m-u*E,N=h*d-f*E,B=u*d-f*m,W=M*B-A*N+S*C+R*H-T*y+w*x;if(W===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/W;return e[0]=(l*B-c*N+o*C)*z,e[1]=(r*N-i*B-s*C)*z,e[2]=(E*w-m*T+d*R)*z,e[3]=(u*T-h*w-f*R)*z,e[4]=(c*H-a*B-o*y)*z,e[5]=(t*B-r*H+s*y)*z,e[6]=(m*S-g*w-d*A)*z,e[7]=(p*w-u*S+f*A)*z,e[8]=(a*N-l*H+o*x)*z,e[9]=(i*H-t*N-s*x)*z,e[10]=(g*T-E*S+d*M)*z,e[11]=(h*S-p*T-f*M)*z,e[12]=(l*y-a*C-c*x)*z,e[13]=(t*C-i*y+r*x)*z,e[14]=(E*A-g*R-m*M)*z,e[15]=(p*R-h*A+u*M)*z,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,l=e.y,c=e.z,o=s*a,p=s*l;return this.set(o*a+i,o*l-r*c,o*c+r*l,0,o*l+r*c,p*l+i,p*c-r*a,0,o*c-r*l,p*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,l=t._z,c=t._w,o=s+s,p=a+a,h=l+l,u=s*o,f=s*p,g=s*h,E=a*p,m=a*h,d=l*h,M=c*o,A=c*p,S=c*h,R=i.x,T=i.y,w=i.z;return r[0]=(1-(E+d))*R,r[1]=(f+S)*R,r[2]=(g-A)*R,r[3]=0,r[4]=(f-S)*T,r[5]=(1-(u+d))*T,r[6]=(m+M)*T,r[7]=0,r[8]=(g+A)*w,r[9]=(m-M)*w,r[10]=(1-(u+E))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),t.identity(),this;let a=Mi.set(r[0],r[1],r[2]).length();const l=Mi.set(r[4],r[5],r[6]).length(),c=Mi.set(r[8],r[9],r[10]).length();s<0&&(a=-a),jt.copy(this);const o=1/a,p=1/l,h=1/c;return jt.elements[0]*=o,jt.elements[1]*=o,jt.elements[2]*=o,jt.elements[4]*=p,jt.elements[5]*=p,jt.elements[6]*=p,jt.elements[8]*=h,jt.elements[9]*=h,jt.elements[10]*=h,t.setFromRotationMatrix(jt),i.x=a,i.y=l,i.z=c,this}makePerspective(e,t,i,r,s,a,l=cn,c=!1){const o=this.elements,p=2*s/(t-e),h=2*s/(i-r),u=(t+e)/(t-e),f=(i+r)/(i-r);let g,E;if(c)g=s/(a-s),E=a*s/(a-s);else if(l===cn)g=-(a+s)/(a-s),E=-2*a*s/(a-s);else if(l===Er)g=-a/(a-s),E=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return o[0]=p,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=h,o[9]=f,o[13]=0,o[2]=0,o[6]=0,o[10]=g,o[14]=E,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,i,r,s,a,l=cn,c=!1){const o=this.elements,p=2/(t-e),h=2/(i-r),u=-(t+e)/(t-e),f=-(i+r)/(i-r);let g,E;if(c)g=1/(a-s),E=a/(a-s);else if(l===cn)g=-2/(a-s),E=-(a+s)/(a-s);else if(l===Er)g=-1/(a-s),E=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return o[0]=p,o[4]=0,o[8]=0,o[12]=u,o[1]=0,o[5]=h,o[9]=0,o[13]=f,o[2]=0,o[6]=0,o[10]=g,o[14]=E,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Mi=new U,jt=new it,Lh=new U(0,0,0),Ih=new U(1,1,1),Nn=new U,Lr=new U,Bt=new U,ol=new it,ll=new ji;class mn{constructor(e=0,t=0,i=0,r=mn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],l=r[8],c=r[1],o=r[5],p=r[9],h=r[2],u=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-p,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,o),this._z=0);break;case"YXZ":this._x=Math.asin(-ke(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(l,f),this._z=Math.atan2(c,o)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,o)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-ke(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,o));break;case"YZX":this._z=Math.asin(ke(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,o),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(l,f));break;case"XZY":this._z=Math.asin(-ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,o),this._y=Math.atan2(l,s)):(this._x=Math.atan2(-p,f),this._y=0);break;default:Re("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ol.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ol,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ll.setFromEuler(this),this.setFromQuaternion(ll,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mn.DEFAULT_ORDER="XYZ";class Ao{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Uh=0;const cl=new U,Si=new ji,Mn=new it,Ir=new U,tr=new U,Nh=new U,Fh=new ji,ul=new U(1,0,0),hl=new U(0,1,0),fl=new U(0,0,1),dl={type:"added"},Oh={type:"removed"},Ei={type:"childadded",child:null},zs={type:"childremoved",child:null};class ft extends Zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Uh++}),this.uuid=Rn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ft.DEFAULT_UP.clone();const e=new U,t=new mn,i=new ji,r=new U(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new it},normalMatrix:{value:new Ue}}),this.matrix=new it,this.matrixWorld=new it,this.matrixAutoUpdate=ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ao,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Si.setFromAxisAngle(e,t),this.quaternion.multiply(Si),this}rotateOnWorldAxis(e,t){return Si.setFromAxisAngle(e,t),this.quaternion.premultiply(Si),this}rotateX(e){return this.rotateOnAxis(ul,e)}rotateY(e){return this.rotateOnAxis(hl,e)}rotateZ(e){return this.rotateOnAxis(fl,e)}translateOnAxis(e,t){return cl.copy(e).applyQuaternion(this.quaternion),this.position.add(cl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ul,e)}translateY(e){return this.translateOnAxis(hl,e)}translateZ(e){return this.translateOnAxis(fl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ir.copy(e):Ir.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),tr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mn.lookAt(tr,Ir,this.up):Mn.lookAt(Ir,tr,this.up),this.quaternion.setFromRotationMatrix(Mn),r&&(Mn.extractRotation(r.matrixWorld),Si.setFromRotationMatrix(Mn),this.quaternion.premultiply(Si.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ge("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(dl),Ei.child=e,this.dispatchEvent(Ei),Ei.child=null):Ge("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Oh),zs.child=e,this.dispatchEvent(zs),zs.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(dl),Ei.child=e,this.dispatchEvent(Ei),Ei.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tr,e,Nh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tr,Fh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(l=>({...l})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const c=l.shapes;if(Array.isArray(c))for(let o=0,p=c.length;o<p;o++){const h=c[o];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let c=0,o=this.material.length;c<o;c++)l.push(s(e.materials,this.material[c]));r.material=l}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){const c=this.animations[l];r.animations.push(s(e.animations,c))}}if(t){const l=a(e.geometries),c=a(e.materials),o=a(e.textures),p=a(e.images),h=a(e.shapes),u=a(e.skeletons),f=a(e.animations),g=a(e.nodes);l.length>0&&(i.geometries=l),c.length>0&&(i.materials=c),o.length>0&&(i.textures=o),p.length>0&&(i.images=p),h.length>0&&(i.shapes=h),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(l){const c=[];for(const o in l){const p=l[o];delete p.metadata,c.push(p)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}ft.DEFAULT_UP=new U(0,1,0);ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class un extends ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Bh={type:"move"};class Vs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new un,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new un,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new un,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const l=this._targetRay,c=this._grip,o=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(o&&e.hand){a=!0;for(const E of e.hand.values()){const m=t.getJointPose(E,i),d=this._getHandJoint(o,E);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const p=o.joints["index-finger-tip"],h=o.joints["thumb-tip"],u=p.position.distanceTo(h.position),f=.02,g=.005;o.inputState.pinching&&u>f+g?(o.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!o.inputState.pinching&&u<=f-g&&(o.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));l!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(Bh)))}return l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),o!==null&&(o.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new un;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Lc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fn={h:0,s:0,l:0},Ur={h:0,s:0,l:0};function ks(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ve{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,We.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=We.workingColorSpace){return this.r=e,this.g=t,this.b=i,We.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=We.workingColorSpace){if(e=To(e,1),t=ke(t,0,1),i=ke(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=ks(a,s,e+1/3),this.g=ks(a,s,e),this.b=ks(a,s,e-1/3)}return We.colorSpaceToWorking(this,r),this}setStyle(e,t=Ut){function i(s){s!==void 0&&parseFloat(s)<1&&Re("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],l=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Re("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Re("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ut){const i=Lc[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Re("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Cn(e.r),this.g=Cn(e.g),this.b=Cn(e.b),this}copyLinearToSRGB(e){return this.r=Vi(e.r),this.g=Vi(e.g),this.b=Vi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ut){return We.workingToColorSpace(wt.copy(this),e),Math.round(ke(wt.r*255,0,255))*65536+Math.round(ke(wt.g*255,0,255))*256+Math.round(ke(wt.b*255,0,255))}getHexString(e=Ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=We.workingColorSpace){We.workingToColorSpace(wt.copy(this),t);const i=wt.r,r=wt.g,s=wt.b,a=Math.max(i,r,s),l=Math.min(i,r,s);let c,o;const p=(l+a)/2;if(l===a)c=0,o=0;else{const h=a-l;switch(o=p<=.5?h/(a+l):h/(2-a-l),a){case i:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-i)/h+2;break;case s:c=(i-r)/h+4;break}c/=6}return e.h=c,e.s=o,e.l=p,e}getRGB(e,t=We.workingColorSpace){return We.workingToColorSpace(wt.copy(this),t),e.r=wt.r,e.g=wt.g,e.b=wt.b,e}getStyle(e=Ut){We.workingToColorSpace(wt.copy(this),e);const t=wt.r,i=wt.g,r=wt.b;return e!==Ut?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Fn),this.setHSL(Fn.h+e,Fn.s+t,Fn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Fn),e.getHSL(Ur);const i=xr(Fn.h,Ur.h,t),r=xr(Fn.s,Ur.s,t),s=xr(Fn.l,Ur.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wt=new Ve;Ve.NAMES=Lc;class wo{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ve(e),this.density=t}clone(){return new wo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class zh extends ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mn,this.environmentIntensity=1,this.environmentRotation=new mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const $t=new U,Sn=new U,Gs=new U,En=new U,yi=new U,Ti=new U,pl=new U,Hs=new U,Ws=new U,Xs=new U,qs=new ct,Ys=new ct,Ks=new ct;class qt{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),$t.subVectors(e,t),r.cross($t);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){$t.subVectors(r,t),Sn.subVectors(i,t),Gs.subVectors(e,t);const a=$t.dot($t),l=$t.dot(Sn),c=$t.dot(Gs),o=Sn.dot(Sn),p=Sn.dot(Gs),h=a*o-l*l;if(h===0)return s.set(0,0,0),null;const u=1/h,f=(o*c-l*p)*u,g=(a*p-l*c)*u;return s.set(1-f-g,g,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,En)===null?!1:En.x>=0&&En.y>=0&&En.x+En.y<=1}static getInterpolation(e,t,i,r,s,a,l,c){return this.getBarycoord(e,t,i,r,En)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,En.x),c.addScaledVector(a,En.y),c.addScaledVector(l,En.z),c)}static getInterpolatedAttribute(e,t,i,r,s,a){return qs.setScalar(0),Ys.setScalar(0),Ks.setScalar(0),qs.fromBufferAttribute(e,t),Ys.fromBufferAttribute(e,i),Ks.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(qs,s.x),a.addScaledVector(Ys,s.y),a.addScaledVector(Ks,s.z),a}static isFrontFacing(e,t,i,r){return $t.subVectors(i,t),Sn.subVectors(e,t),$t.cross(Sn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $t.subVectors(this.c,this.b),Sn.subVectors(this.a,this.b),$t.cross(Sn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return qt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return qt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return qt.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return qt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return qt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,l;yi.subVectors(r,i),Ti.subVectors(s,i),Hs.subVectors(e,i);const c=yi.dot(Hs),o=Ti.dot(Hs);if(c<=0&&o<=0)return t.copy(i);Ws.subVectors(e,r);const p=yi.dot(Ws),h=Ti.dot(Ws);if(p>=0&&h<=p)return t.copy(r);const u=c*h-p*o;if(u<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(i).addScaledVector(yi,a);Xs.subVectors(e,s);const f=yi.dot(Xs),g=Ti.dot(Xs);if(g>=0&&f<=g)return t.copy(s);const E=f*o-c*g;if(E<=0&&o>=0&&g<=0)return l=o/(o-g),t.copy(i).addScaledVector(Ti,l);const m=p*g-f*h;if(m<=0&&h-p>=0&&f-g>=0)return pl.subVectors(s,r),l=(h-p)/(h-p+(f-g)),t.copy(r).addScaledVector(pl,l);const d=1/(m+E+u);return a=E*d,l=u*d,t.copy(i).addScaledVector(yi,a).addScaledVector(Ti,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class fi{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Jt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Jt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Jt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,l=s.count;a<l;a++)e.isMesh===!0?e.getVertexPosition(a,Jt):Jt.fromBufferAttribute(s,a),Jt.applyMatrix4(e.matrixWorld),this.expandByPoint(Jt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Nr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Nr.copy(i.boundingBox)),Nr.applyMatrix4(e.matrixWorld),this.union(Nr)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Jt),Jt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(nr),Fr.subVectors(this.max,nr),bi.subVectors(e.a,nr),Ai.subVectors(e.b,nr),wi.subVectors(e.c,nr),On.subVectors(Ai,bi),Bn.subVectors(wi,Ai),jn.subVectors(bi,wi);let t=[0,-On.z,On.y,0,-Bn.z,Bn.y,0,-jn.z,jn.y,On.z,0,-On.x,Bn.z,0,-Bn.x,jn.z,0,-jn.x,-On.y,On.x,0,-Bn.y,Bn.x,0,-jn.y,jn.x,0];return!Zs(t,bi,Ai,wi,Fr)||(t=[1,0,0,0,1,0,0,0,1],!Zs(t,bi,Ai,wi,Fr))?!1:(Or.crossVectors(On,Bn),t=[Or.x,Or.y,Or.z],Zs(t,bi,Ai,wi,Fr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const yn=[new U,new U,new U,new U,new U,new U,new U,new U],Jt=new U,Nr=new fi,bi=new U,Ai=new U,wi=new U,On=new U,Bn=new U,jn=new U,nr=new U,Fr=new U,Or=new U,$n=new U;function Zs(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){$n.fromArray(n,s);const l=r.x*Math.abs($n.x)+r.y*Math.abs($n.y)+r.z*Math.abs($n.z),c=e.dot($n),o=t.dot($n),p=i.dot($n);if(Math.max(-Math.max(c,o,p),Math.min(c,o,p))>l)return!1}return!0}const pt=new U,Br=new Le;let Vh=0;class Kt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Vh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=io,this.updateRanges=[],this.gpuType=tn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Br.fromBufferAttribute(this,t),Br.applyMatrix3(e),this.setXY(t,Br.x,Br.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix3(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix4(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)pt.fromBufferAttribute(this,t),pt.applyNormalMatrix(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)pt.fromBufferAttribute(this,t),pt.transformDirection(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=en(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=$e(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=en(t,this.array)),t}setX(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=en(t,this.array)),t}setY(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=en(t,this.array)),t}setZ(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=en(t,this.array)),t}setW(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=$e(t,this.array),i=$e(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=$e(t,this.array),i=$e(i,this.array),r=$e(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=$e(t,this.array),i=$e(i,this.array),r=$e(r,this.array),s=$e(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==io&&(e.usage=this.usage),e}}class Ic extends Kt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Uc extends Kt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class gt extends Kt{constructor(e,t,i){super(new Float32Array(e),t,i)}}const kh=new fi,ir=new U,js=new U;class br{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):kh.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ir.subVectors(e,this.center);const t=ir.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ir,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(js.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ir.copy(e.center).add(js)),this.expandByPoint(ir.copy(e.center).sub(js))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Gh=0;const Ht=new it,$s=new ft,Ri=new U,zt=new fi,rr=new fi,Et=new U;class Ft extends Zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gh++}),this.uuid=Rn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sh(e)?Uc:Ic)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ue().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ht.makeRotationFromQuaternion(e),this.applyMatrix4(Ht),this}rotateX(e){return Ht.makeRotationX(e),this.applyMatrix4(Ht),this}rotateY(e){return Ht.makeRotationY(e),this.applyMatrix4(Ht),this}rotateZ(e){return Ht.makeRotationZ(e),this.applyMatrix4(Ht),this}translate(e,t,i){return Ht.makeTranslation(e,t,i),this.applyMatrix4(Ht),this}scale(e,t,i){return Ht.makeScale(e,t,i),this.applyMatrix4(Ht),this}lookAt(e){return $s.lookAt(e),$s.updateMatrix(),this.applyMatrix4($s.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ri).negate(),this.translate(Ri.x,Ri.y,Ri.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new gt(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Re("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];zt.setFromBufferAttribute(s),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,zt.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,zt.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(zt.min),this.boundingBox.expandByPoint(zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ge('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new br);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(zt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const l=t[s];rr.setFromBufferAttribute(l),this.morphTargetsRelative?(Et.addVectors(zt.min,rr.min),zt.expandByPoint(Et),Et.addVectors(zt.max,rr.max),zt.expandByPoint(Et)):(zt.expandByPoint(rr.min),zt.expandByPoint(rr.max))}zt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Et.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Et));if(t)for(let s=0,a=t.length;s<a;s++){const l=t[s],c=this.morphTargetsRelative;for(let o=0,p=l.count;o<p;o++)Et.fromBufferAttribute(l,o),c&&(Ri.fromBufferAttribute(e,o),Et.add(Ri)),r=Math.max(r,i.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ge('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ge("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kt(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),l=[],c=[];for(let x=0;x<i.count;x++)l[x]=new U,c[x]=new U;const o=new U,p=new U,h=new U,u=new Le,f=new Le,g=new Le,E=new U,m=new U;function d(x,y,H){o.fromBufferAttribute(i,x),p.fromBufferAttribute(i,y),h.fromBufferAttribute(i,H),u.fromBufferAttribute(s,x),f.fromBufferAttribute(s,y),g.fromBufferAttribute(s,H),p.sub(o),h.sub(o),f.sub(u),g.sub(u);const C=1/(f.x*g.y-g.x*f.y);isFinite(C)&&(E.copy(p).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(C),m.copy(h).multiplyScalar(f.x).addScaledVector(p,-g.x).multiplyScalar(C),l[x].add(E),l[y].add(E),l[H].add(E),c[x].add(m),c[y].add(m),c[H].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let x=0,y=M.length;x<y;++x){const H=M[x],C=H.start,N=H.count;for(let B=C,W=C+N;B<W;B+=3)d(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const A=new U,S=new U,R=new U,T=new U;function w(x){R.fromBufferAttribute(r,x),T.copy(R);const y=l[x];A.copy(y),A.sub(R.multiplyScalar(R.dot(y))).normalize(),S.crossVectors(T,y);const C=S.dot(c[x])<0?-1:1;a.setXYZW(x,A.x,A.y,A.z,C)}for(let x=0,y=M.length;x<y;++x){const H=M[x],C=H.start,N=H.count;for(let B=C,W=C+N;B<W;B+=3)w(e.getX(B+0)),w(e.getX(B+1)),w(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Kt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);const r=new U,s=new U,a=new U,l=new U,c=new U,o=new U,p=new U,h=new U;if(e)for(let u=0,f=e.count;u<f;u+=3){const g=e.getX(u+0),E=e.getX(u+1),m=e.getX(u+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,E),a.fromBufferAttribute(t,m),p.subVectors(a,s),h.subVectors(r,s),p.cross(h),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,E),o.fromBufferAttribute(i,m),l.add(p),c.add(p),o.add(p),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(E,c.x,c.y,c.z),i.setXYZ(m,o.x,o.y,o.z)}else for(let u=0,f=t.count;u<f;u+=3)r.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),p.subVectors(a,s),h.subVectors(r,s),p.cross(h),i.setXYZ(u+0,p.x,p.y,p.z),i.setXYZ(u+1,p.x,p.y,p.z),i.setXYZ(u+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(l,c){const o=l.array,p=l.itemSize,h=l.normalized,u=new o.constructor(c.length*p);let f=0,g=0;for(let E=0,m=c.length;E<m;E++){l.isInterleavedBufferAttribute?f=c[E]*l.data.stride+l.offset:f=c[E]*p;for(let d=0;d<p;d++)u[g++]=o[f++]}return new Kt(u,p,h)}if(this.index===null)return Re("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ft,i=this.index.array,r=this.attributes;for(const l in r){const c=r[l],o=e(c,i);t.setAttribute(l,o)}const s=this.morphAttributes;for(const l in s){const c=[],o=s[l];for(let p=0,h=o.length;p<h;p++){const u=o[p],f=e(u,i);c.push(f)}t.morphAttributes[l]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let l=0,c=a.length;l<c;l++){const o=a[l];t.addGroup(o.start,o.count,o.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const o in c)c[o]!==void 0&&(e[o]=c[o]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const o=i[c];e.data.attributes[c]=o.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const o=this.morphAttributes[c],p=[];for(let h=0,u=o.length;h<u;h++){const f=o[h];p.push(f.toJSON(e.data))}p.length>0&&(r[c]=p,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const o in r){const p=r[o];this.setAttribute(o,p.clone(t))}const s=e.morphAttributes;for(const o in s){const p=[],h=s[o];for(let u=0,f=h.length;u<f;u++)p.push(h[u].clone(t));this.morphAttributes[o]=p}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let o=0,p=a.length;o<p;o++){const h=a[o];this.addGroup(h.start,h.count,h.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hh{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=io,this.updateRanges=[],this.version=0,this.uuid=Rn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Pt=new U;class Ms{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=en(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=$e(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=$e(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=$e(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=$e(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=$e(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=en(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=en(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=en(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=en(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=$e(t,this.array),i=$e(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=$e(t,this.array),i=$e(i,this.array),r=$e(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=$e(t,this.array),i=$e(i,this.array),r=$e(r,this.array),s=$e(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){xs("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Kt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ms(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){xs("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let Wh=0;class $i extends Zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wh++}),this.uuid=Rn(),this.name="",this.type="Material",this.blending=zi,this.side=Xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pa,this.blendDst=ma,this.blendEquation=ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=Gi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=el,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xi,this.stencilZFail=xi,this.stencilZPass=xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Re(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Re(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==zi&&(i.blending=this.blending),this.side!==Xn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==pa&&(i.blendSrc=this.blendSrc),this.blendDst!==ma&&(i.blendDst=this.blendDst),this.blendEquation!==ni&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Gi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==el&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==xi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==xi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const l in s){const c=s[l];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Nc extends $i{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ci;const sr=new U,Pi=new U,Di=new U,Li=new Le,ar=new Le,Fc=new it,zr=new U,or=new U,Vr=new U,ml=new Le,Js=new Le,gl=new Le;class Oc extends ft{constructor(e=new Nc){if(super(),this.isSprite=!0,this.type="Sprite",Ci===void 0){Ci=new Ft;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Hh(t,5);Ci.setIndex([0,1,2,0,2,3]),Ci.setAttribute("position",new Ms(i,3,0,!1)),Ci.setAttribute("uv",new Ms(i,2,3,!1))}this.geometry=Ci,this.material=e,this.center=new Le(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Ge('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Pi.setFromMatrixScale(this.matrixWorld),Fc.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Di.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Pi.multiplyScalar(-Di.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const a=this.center;kr(zr.set(-.5,-.5,0),Di,a,Pi,r,s),kr(or.set(.5,-.5,0),Di,a,Pi,r,s),kr(Vr.set(.5,.5,0),Di,a,Pi,r,s),ml.set(0,0),Js.set(1,0),gl.set(1,1);let l=e.ray.intersectTriangle(zr,or,Vr,!1,sr);if(l===null&&(kr(or.set(-.5,.5,0),Di,a,Pi,r,s),Js.set(0,1),l=e.ray.intersectTriangle(zr,Vr,or,!1,sr),l===null))return;const c=e.ray.origin.distanceTo(sr);c<e.near||c>e.far||t.push({distance:c,point:sr.clone(),uv:qt.getInterpolation(sr,zr,or,Vr,ml,Js,gl,new Le),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function kr(n,e,t,i,r,s){Li.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(ar.x=s*Li.x-r*Li.y,ar.y=r*Li.x+s*Li.y):ar.copy(Li),n.copy(e),n.x+=ar.x,n.y+=ar.y,n.applyMatrix4(Fc)}const Tn=new U,Qs=new U,Gr=new U,zn=new U,ea=new U,Hr=new U,ta=new U;class Bc{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Tn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Tn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Tn.copy(this.origin).addScaledVector(this.direction,t),Tn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Qs.copy(e).add(t).multiplyScalar(.5),Gr.copy(t).sub(e).normalize(),zn.copy(this.origin).sub(Qs);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Gr),l=zn.dot(this.direction),c=-zn.dot(Gr),o=zn.lengthSq(),p=Math.abs(1-a*a);let h,u,f,g;if(p>0)if(h=a*c-l,u=a*l-c,g=s*p,h>=0)if(u>=-g)if(u<=g){const E=1/p;h*=E,u*=E,f=h*(h+a*u+2*l)+u*(a*h+u+2*c)+o}else u=s,h=Math.max(0,-(a*u+l)),f=-h*h+u*(u+2*c)+o;else u=-s,h=Math.max(0,-(a*u+l)),f=-h*h+u*(u+2*c)+o;else u<=-g?(h=Math.max(0,-(-a*s+l)),u=h>0?-s:Math.min(Math.max(-s,-c),s),f=-h*h+u*(u+2*c)+o):u<=g?(h=0,u=Math.min(Math.max(-s,-c),s),f=u*(u+2*c)+o):(h=Math.max(0,-(a*s+l)),u=h>0?s:Math.min(Math.max(-s,-c),s),f=-h*h+u*(u+2*c)+o);else u=a>0?-s:s,h=Math.max(0,-(a*u+l)),f=-h*h+u*(u+2*c)+o;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Qs).addScaledVector(Gr,u),f}intersectSphere(e,t){Tn.subVectors(e.center,this.origin);const i=Tn.dot(this.direction),r=Tn.dot(Tn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),l=i-a,c=i+a;return c<0?null:l<0?this.at(c,t):this.at(l,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,l,c;const o=1/this.direction.x,p=1/this.direction.y,h=1/this.direction.z,u=this.origin;return o>=0?(i=(e.min.x-u.x)*o,r=(e.max.x-u.x)*o):(i=(e.max.x-u.x)*o,r=(e.min.x-u.x)*o),p>=0?(s=(e.min.y-u.y)*p,a=(e.max.y-u.y)*p):(s=(e.max.y-u.y)*p,a=(e.min.y-u.y)*p),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(l=(e.min.z-u.z)*h,c=(e.max.z-u.z)*h):(l=(e.max.z-u.z)*h,c=(e.min.z-u.z)*h),i>c||l>r)||((l>i||i!==i)&&(i=l),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Tn)!==null}intersectTriangle(e,t,i,r,s){ea.subVectors(t,e),Hr.subVectors(i,e),ta.crossVectors(ea,Hr);let a=this.direction.dot(ta),l;if(a>0){if(r)return null;l=1}else if(a<0)l=-1,a=-a;else return null;zn.subVectors(this.origin,e);const c=l*this.direction.dot(Hr.crossVectors(zn,Hr));if(c<0)return null;const o=l*this.direction.dot(ea.cross(zn));if(o<0||c+o>a)return null;const p=-l*zn.dot(ta);return p<0?null:this.at(p/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ar extends $i{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=po,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _l=new it,Jn=new Bc,Wr=new br,xl=new U,Xr=new U,qr=new U,Yr=new U,na=new U,Kr=new U,vl=new U,Zr=new U;class _t extends ft{constructor(e=new Ft,t=new Ar){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const l=this.morphTargetInfluences;if(s&&l){Kr.set(0,0,0);for(let c=0,o=s.length;c<o;c++){const p=l[c],h=s[c];p!==0&&(na.fromBufferAttribute(h,e),a?Kr.addScaledVector(na,p):Kr.addScaledVector(na.sub(t),p))}t.add(Kr)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Wr.copy(i.boundingSphere),Wr.applyMatrix4(s),Jn.copy(e.ray).recast(e.near),!(Wr.containsPoint(Jn.origin)===!1&&(Jn.intersectSphere(Wr,xl)===null||Jn.origin.distanceToSquared(xl)>(e.far-e.near)**2))&&(_l.copy(s).invert(),Jn.copy(e.ray).applyMatrix4(_l),!(i.boundingBox!==null&&Jn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Jn)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,l=s.index,c=s.attributes.position,o=s.attributes.uv,p=s.attributes.uv1,h=s.attributes.normal,u=s.groups,f=s.drawRange;if(l!==null)if(Array.isArray(a))for(let g=0,E=u.length;g<E;g++){const m=u[g],d=a[m.materialIndex],M=Math.max(m.start,f.start),A=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let S=M,R=A;S<R;S+=3){const T=l.getX(S),w=l.getX(S+1),x=l.getX(S+2);r=jr(this,d,e,i,o,p,h,T,w,x),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),E=Math.min(l.count,f.start+f.count);for(let m=g,d=E;m<d;m+=3){const M=l.getX(m),A=l.getX(m+1),S=l.getX(m+2);r=jr(this,a,e,i,o,p,h,M,A,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,E=u.length;g<E;g++){const m=u[g],d=a[m.materialIndex],M=Math.max(m.start,f.start),A=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let S=M,R=A;S<R;S+=3){const T=S,w=S+1,x=S+2;r=jr(this,d,e,i,o,p,h,T,w,x),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),E=Math.min(c.count,f.start+f.count);for(let m=g,d=E;m<d;m+=3){const M=m,A=m+1,S=m+2;r=jr(this,a,e,i,o,p,h,M,A,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Xh(n,e,t,i,r,s,a,l){let c;if(e.side===Nt?c=i.intersectTriangle(a,s,r,!0,l):c=i.intersectTriangle(r,s,a,e.side===Xn,l),c===null)return null;Zr.copy(l),Zr.applyMatrix4(n.matrixWorld);const o=t.ray.origin.distanceTo(Zr);return o<t.near||o>t.far?null:{distance:o,point:Zr.clone(),object:n}}function jr(n,e,t,i,r,s,a,l,c,o){n.getVertexPosition(l,Xr),n.getVertexPosition(c,qr),n.getVertexPosition(o,Yr);const p=Xh(n,e,t,i,Xr,qr,Yr,vl);if(p){const h=new U;qt.getBarycoord(vl,Xr,qr,Yr,h),r&&(p.uv=qt.getInterpolatedAttribute(r,l,c,o,h,new Le)),s&&(p.uv1=qt.getInterpolatedAttribute(s,l,c,o,h,new Le)),a&&(p.normal=qt.getInterpolatedAttribute(a,l,c,o,h,new U),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const u={a:l,b:c,c:o,normal:new U,materialIndex:0};qt.getNormal(Xr,qr,Yr,u.normal),p.face=u,p.barycoord=h}return p}class zc extends Ct{constructor(e=null,t=1,i=1,r,s,a,l,c,o=Tt,p=Tt,h,u){super(null,a,l,c,o,p,r,s,h,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ml extends Kt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ii=new it,Sl=new it,$r=[],El=new fi,qh=new it,lr=new _t,cr=new br;class Vc extends _t{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ml(new Float32Array(i*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,qh)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new fi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ii),El.copy(e.boundingBox).applyMatrix4(Ii),this.boundingBox.union(El)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new br),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ii),cr.copy(e.boundingSphere).applyMatrix4(Ii),this.boundingSphere.union(cr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,a=e*s+1;for(let l=0;l<i.length;l++)i[l]=r[a+l]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(lr.geometry=this.geometry,lr.material=this.material,lr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),cr.copy(this.boundingSphere),cr.applyMatrix4(i),e.ray.intersectsSphere(cr)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Ii),Sl.multiplyMatrices(i,Ii),lr.matrixWorld=Sl,lr.raycast(e,$r);for(let a=0,l=$r.length;a<l;a++){const c=$r[a];c.instanceId=s,c.object=this,t.push(c)}$r.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ml(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new zc(new Float32Array(r*this.count),r,this.count,xo,tn));const s=this.morphTexture.source.data.data;let a=0;for(let o=0;o<i.length;o++)a+=i[o];const l=this.geometry.morphTargetsRelative?1:1-a,c=r*e;s[c]=l,s.set(i,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ia=new U,Yh=new U,Kh=new Ue;class kn{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=ia.subVectors(i,t).cross(Yh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ia),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Kh.getNormalMatrix(e),r=this.coplanarPoint(ia).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qn=new br,Zh=new Le(.5,.5),Jr=new U;class Ro{constructor(e=new kn,t=new kn,i=new kn,r=new kn,s=new kn,a=new kn){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(i),l[3].copy(r),l[4].copy(s),l[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=cn,i=!1){const r=this.planes,s=e.elements,a=s[0],l=s[1],c=s[2],o=s[3],p=s[4],h=s[5],u=s[6],f=s[7],g=s[8],E=s[9],m=s[10],d=s[11],M=s[12],A=s[13],S=s[14],R=s[15];if(r[0].setComponents(o-a,f-p,d-g,R-M).normalize(),r[1].setComponents(o+a,f+p,d+g,R+M).normalize(),r[2].setComponents(o+l,f+h,d+E,R+A).normalize(),r[3].setComponents(o-l,f-h,d-E,R-A).normalize(),i)r[4].setComponents(c,u,m,S).normalize(),r[5].setComponents(o-c,f-u,d-m,R-S).normalize();else if(r[4].setComponents(o-c,f-u,d-m,R-S).normalize(),t===cn)r[5].setComponents(o+c,f+u,d+m,R+S).normalize();else if(t===Er)r[5].setComponents(c,u,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Qn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qn)}intersectsSprite(e){Qn.center.set(0,0,0);const t=Zh.distanceTo(e.center);return Qn.radius=.7071067811865476+t,Qn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qn)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Jr.x=r.normal.x>0?e.max.x:e.min.x,Jr.y=r.normal.y>0?e.max.y:e.min.y,Jr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Jr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class kc extends Ct{constructor(e=[],t=li,i,r,s,a,l,c,o,p){super(e,t,i,r,s,a,l,c,o,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Gc extends Ct{constructor(e,t,i,r,s,a,l,c,o){super(e,t,i,r,s,a,l,c,o),this.isCanvasTexture=!0,this.needsUpdate=!0}}class yr extends Ct{constructor(e,t,i=pn,r,s,a,l=Tt,c=Tt,o,p=Ln,h=1){if(p!==Ln&&p!==ai)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:h};super(u,r,s,a,l,c,p,i,o),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new bo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class jh extends yr{constructor(e,t=pn,i=li,r,s,a=Tt,l=Tt,c,o=Ln){const p={width:e,height:e,depth:1},h=[p,p,p,p,p,p];super(e,e,t,i,r,s,a,l,c,o),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Hc extends Ct{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ji extends Ft{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const l=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],o=[],p=[],h=[];let u=0,f=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new gt(o,3)),this.setAttribute("normal",new gt(p,3)),this.setAttribute("uv",new gt(h,2));function g(E,m,d,M,A,S,R,T,w,x,y){const H=S/w,C=R/x,N=S/2,B=R/2,W=T/2,z=w+1,k=x+1;let F=0,Q=0;const j=new U;for(let ce=0;ce<k;ce++){const pe=ce*C-B;for(let he=0;he<z;he++){const Ne=he*H-N;j[E]=Ne*M,j[m]=pe*A,j[d]=W,o.push(j.x,j.y,j.z),j[E]=0,j[m]=0,j[d]=T>0?1:-1,p.push(j.x,j.y,j.z),h.push(he/w),h.push(1-ce/x),F+=1}}for(let ce=0;ce<x;ce++)for(let pe=0;pe<w;pe++){const he=u+pe+z*ce,Ne=u+pe+z*(ce+1),ot=u+(pe+1)+z*(ce+1),at=u+(pe+1)+z*ce;c.push(he,Ne,at),c.push(Ne,ot,at),Q+=6}l.addGroup(f,Q,y),f+=Q,u+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ji(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Co extends Ft{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],a=[],l=[],c=[],o=new U,p=new Le;a.push(0,0,0),l.push(0,0,1),c.push(.5,.5);for(let h=0,u=3;h<=t;h++,u+=3){const f=i+h/t*r;o.x=e*Math.cos(f),o.y=e*Math.sin(f),a.push(o.x,o.y,o.z),l.push(0,0,1),p.x=(a[u]/e+1)/2,p.y=(a[u+1]/e+1)/2,c.push(p.x,p.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new gt(a,3)),this.setAttribute("normal",new gt(l,3)),this.setAttribute("uv",new gt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Co(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ys extends Ft{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,l=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:l,thetaLength:c};const o=this;r=Math.floor(r),s=Math.floor(s);const p=[],h=[],u=[],f=[];let g=0;const E=[],m=i/2;let d=0;M(),a===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(p),this.setAttribute("position",new gt(h,3)),this.setAttribute("normal",new gt(u,3)),this.setAttribute("uv",new gt(f,2));function M(){const S=new U,R=new U;let T=0;const w=(t-e)/i;for(let x=0;x<=s;x++){const y=[],H=x/s,C=H*(t-e)+e;for(let N=0;N<=r;N++){const B=N/r,W=B*c+l,z=Math.sin(W),k=Math.cos(W);R.x=C*z,R.y=-H*i+m,R.z=C*k,h.push(R.x,R.y,R.z),S.set(z,w,k).normalize(),u.push(S.x,S.y,S.z),f.push(B,1-H),y.push(g++)}E.push(y)}for(let x=0;x<r;x++)for(let y=0;y<s;y++){const H=E[y][x],C=E[y+1][x],N=E[y+1][x+1],B=E[y][x+1];(e>0||y!==0)&&(p.push(H,C,B),T+=3),(t>0||y!==s-1)&&(p.push(C,N,B),T+=3)}o.addGroup(d,T,0),d+=T}function A(S){const R=g,T=new Le,w=new U;let x=0;const y=S===!0?e:t,H=S===!0?1:-1;for(let N=1;N<=r;N++)h.push(0,m*H,0),u.push(0,H,0),f.push(.5,.5),g++;const C=g;for(let N=0;N<=r;N++){const W=N/r*c+l,z=Math.cos(W),k=Math.sin(W);w.x=y*k,w.y=m*H,w.z=y*z,h.push(w.x,w.y,w.z),u.push(0,H,0),T.x=z*.5+.5,T.y=k*.5*H+.5,f.push(T.x,T.y),g++}for(let N=0;N<r;N++){const B=R+N,W=C+N;S===!0?p.push(W,W+1,B):p.push(W+1,W,B),x+=3}o.addGroup(d,x,S===!0?1:2),d+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ys(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Po extends ys{constructor(e=1,t=1,i=32,r=1,s=!1,a=0,l=Math.PI*2){super(0,e,t,i,r,s,a,l),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:l}}static fromJSON(e){return new Po(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class wr extends Ft{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,l=Math.floor(i),c=Math.floor(r),o=l+1,p=c+1,h=e/l,u=t/c,f=[],g=[],E=[],m=[];for(let d=0;d<p;d++){const M=d*u-a;for(let A=0;A<o;A++){const S=A*h-s;g.push(S,-M,0),E.push(0,0,1),m.push(A/l),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let M=0;M<l;M++){const A=M+o*d,S=M+o*(d+1),R=M+1+o*(d+1),T=M+1+o*d;f.push(A,S,T),f.push(S,R,T)}this.setIndex(f),this.setAttribute("position",new gt(g,3)),this.setAttribute("normal",new gt(E,3)),this.setAttribute("uv",new gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Do extends Ft{constructor(e=.5,t=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);const l=[],c=[],o=[],p=[];let h=e;const u=(t-e)/r,f=new U,g=new Le;for(let E=0;E<=r;E++){for(let m=0;m<=i;m++){const d=s+m/i*a;f.x=h*Math.cos(d),f.y=h*Math.sin(d),c.push(f.x,f.y,f.z),o.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,p.push(g.x,g.y)}h+=u}for(let E=0;E<r;E++){const m=E*(i+1);for(let d=0;d<i;d++){const M=d+m,A=M,S=M+i+1,R=M+i+2,T=M+1;l.push(A,S,T),l.push(S,R,T)}}this.setIndex(l),this.setAttribute("position",new gt(c,3)),this.setAttribute("normal",new gt(o,3)),this.setAttribute("uv",new gt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Do(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}function Yi(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Re("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Dt(n){const e={};for(let t=0;t<n.length;t++){const i=Yi(n[t]);for(const r in i)e[r]=i[r]}return e}function $h(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Wc(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:We.workingColorSpace}const Jh={clone:Yi,merge:Dt};var Qh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ef=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gn extends $i{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qh,this.fragmentShader=ef,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Yi(e.uniforms),this.uniformsGroups=$h(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class tf extends gn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Yn extends $i{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cc,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=po,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class nf extends $i{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$u,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class rf extends $i{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Lo extends ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class sf extends Lo{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ve(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const ra=new it,yl=new U,Tl=new U;class Xc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Le(512,512),this.mapType=kt,this.map=null,this.mapPass=null,this.matrix=new it,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ro,this._frameExtents=new Le(1,1),this._viewportCount=1,this._viewports=[new ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;yl.setFromMatrixPosition(e.matrixWorld),t.position.copy(yl),Tl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Tl),t.updateMatrixWorld(),ra.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ra,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Er||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ra)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Qr=new U,es=new ji,sn=new U;class qc extends ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new it,this.projectionMatrix=new it,this.projectionMatrixInverse=new it,this.coordinateSystem=cn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Qr,es,sn),sn.x===1&&sn.y===1&&sn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qr,es,sn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Qr,es,sn),sn.x===1&&sn.y===1&&sn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qr,es,sn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Vn=new U,bl=new Le,Al=new Le;class Wt extends qc{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=qi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_r*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qi*2*Math.atan(Math.tan(_r*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Vn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Vn.x,Vn.y).multiplyScalar(-e/Vn.z),Vn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Vn.x,Vn.y).multiplyScalar(-e/Vn.z)}getViewSize(e,t){return this.getViewBounds(e,bl,Al),t.subVectors(Al,bl)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(_r*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,o=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*i/o,r*=a.width/c,i*=a.height/o}const l=this.filmOffset;l!==0&&(s+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class af extends Xc{constructor(){super(new Wt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=qi*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class of extends Lo{constructor(e,t,i=0,r=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.distance=i,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new af}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class Ts extends qc{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,l=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const o=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=o*this.view.offsetX,a=s+o*this.view.width,l-=p*this.view.offsetY,c=l-p*this.view.height}this.projectionMatrix.makeOrthographic(s,a,l,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class lf extends Xc{constructor(){super(new Ts(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class cf extends Lo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.shadow=new lf}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const Ui=-90,Ni=1;class uf extends ft{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Wt(Ui,Ni,e,t);r.layers=this.layers,this.add(r);const s=new Wt(Ui,Ni,e,t);s.layers=this.layers,this.add(s);const a=new Wt(Ui,Ni,e,t);a.layers=this.layers,this.add(a);const l=new Wt(Ui,Ni,e,t);l.layers=this.layers,this.add(l);const c=new Wt(Ui,Ni,e,t);c.layers=this.layers,this.add(c);const o=new Wt(Ui,Ni,e,t);o.layers=this.layers,this.add(o)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,l,c]=t;for(const o of t)this.remove(o);if(e===cn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Er)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const o of t)this.add(o),o.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,l,c,o,p]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(h,u,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class hf extends Wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const wl=new it;class ff{constructor(e,t,i=0,r=1/0){this.ray=new Bc(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Ao,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ge("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return wl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(wl),this}intersectObject(e,t=!0,i=[]){return ro(e,this,i,t),i.sort(Rl),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)ro(e[r],this,i,t);return i.sort(Rl),i}}function Rl(n,e){return n.distance-e.distance}function ro(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let a=0,l=s.length;a<l;a++)ro(s[a],e,t,!0)}}function Cl(n,e,t,i){const r=df(i);switch(t){case wc:return n*e;case xo:return n*e/r.components*r.byteLength;case vo:return n*e/r.components*r.byteLength;case Wi:return n*e*2/r.components*r.byteLength;case Mo:return n*e*2/r.components*r.byteLength;case Rc:return n*e*3/r.components*r.byteLength;case nn:return n*e*4/r.components*r.byteLength;case So:return n*e*4/r.components*r.byteLength;case us:case hs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case fs:case ds:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Aa:case Ra:return Math.max(n,16)*Math.max(e,8)/4;case ba:case wa:return Math.max(n,8)*Math.max(e,8)/2;case Ca:case Pa:case La:case Ia:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Da:case Ua:case Na:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Fa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Oa:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ba:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case za:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Va:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ka:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Ga:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ha:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Wa:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Xa:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case qa:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ya:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Ka:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Za:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ja:case $a:case Ja:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Qa:case eo:return Math.ceil(n/4)*Math.ceil(e/4)*8;case to:case no:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function df(n){switch(n){case kt:case yc:return{byteLength:1,components:1};case Mr:case Tc:case Dn:return{byteLength:2,components:1};case go:case _o:return{byteLength:2,components:4};case pn:case mo:case tn:return{byteLength:4,components:1};case bc:case Ac:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fo}}));typeof window<"u"&&(window.__THREE__?Re("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fo);function Yc(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function pf(n){const e=new WeakMap;function t(l,c){const o=l.array,p=l.usage,h=o.byteLength,u=n.createBuffer();n.bindBuffer(c,u),n.bufferData(c,o,p),l.onUploadCallback();let f;if(o instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&o instanceof Float16Array)f=n.HALF_FLOAT;else if(o instanceof Uint16Array)l.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(o instanceof Int16Array)f=n.SHORT;else if(o instanceof Uint32Array)f=n.UNSIGNED_INT;else if(o instanceof Int32Array)f=n.INT;else if(o instanceof Int8Array)f=n.BYTE;else if(o instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(o instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);return{buffer:u,type:f,bytesPerElement:o.BYTES_PER_ELEMENT,version:l.version,size:h}}function i(l,c,o){const p=c.array,h=c.updateRanges;if(n.bindBuffer(o,l),h.length===0)n.bufferSubData(o,0,p);else{h.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<h.length;f++){const g=h[u],E=h[f];E.start<=g.start+g.count+1?g.count=Math.max(g.count,E.start+E.count-g.start):(++u,h[u]=E)}h.length=u+1;for(let f=0,g=h.length;f<g;f++){const E=h[f];n.bufferSubData(o,E.start*p.BYTES_PER_ELEMENT,p,E.start,E.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function s(l){l.isInterleavedBufferAttribute&&(l=l.data);const c=e.get(l);c&&(n.deleteBuffer(c.buffer),e.delete(l))}function a(l,c){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const p=e.get(l);(!p||p.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const o=e.get(l);if(o===void 0)e.set(l,t(l,c));else if(o.version<l.version){if(o.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(o.buffer,l,c),o.version=l.version}}return{get:r,remove:s,update:a}}var mf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gf=`#ifdef USE_ALPHAHASH
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
#endif`,_f=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Mf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sf=`#ifdef USE_AOMAP
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
#endif`,Ef=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yf=`#ifdef USE_BATCHING
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
#endif`,Tf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Af=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Rf=`#ifdef USE_IRIDESCENCE
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
#endif`,Cf=`#ifdef USE_BUMPMAP
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
#endif`,Pf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Df=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,If=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Uf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Nf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ff=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Of=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Bf=`#define PI 3.141592653589793
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
} // validated`,zf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Vf=`vec3 transformedNormal = objectNormal;
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
#endif`,kf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xf="gl_FragColor = linearToOutputTexel( gl_FragColor );",qf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Yf=`#ifdef USE_ENVMAP
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
#endif`,Kf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Zf=`#ifdef USE_ENVMAP
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
#endif`,jf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$f=`#ifdef USE_ENVMAP
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
#endif`,Jf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ed=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,td=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nd=`#ifdef USE_GRADIENTMAP
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
}`,id=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ad=`uniform bool receiveShadow;
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
#endif`,od=`#ifdef USE_ENVMAP
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
#endif`,ld=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ud=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fd=`PhysicalMaterial material;
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
#endif`,dd=`uniform sampler2D dfgLUT;
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
}`,pd=`
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
#endif`,md=`#if defined( RE_IndirectDiffuse )
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
#endif`,gd=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_d=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Md=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Sd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ed=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Td=`#if defined( USE_POINTS_UV )
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
#endif`,bd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ad=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Rd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pd=`#ifdef USE_MORPHTARGETS
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
#endif`,Dd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ld=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Id=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ud=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Od=`#ifdef USE_NORMALMAP
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
#endif`,Bd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Wd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Yd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Kd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$d=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Qd=`float getShadowMask() {
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
}`,ep=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tp=`#ifdef USE_SKINNING
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
#endif`,np=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ip=`#ifdef USE_SKINNING
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
#endif`,rp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ap=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,op=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,lp=`#ifdef USE_TRANSMISSION
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
#endif`,cp=`#ifdef USE_TRANSMISSION
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
#endif`,up=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const pp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mp=`uniform sampler2D t2D;
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
}`,gp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_p=`#ifdef ENVMAP_TYPE_CUBE
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
}`,xp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mp=`#include <common>
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
}`,Sp=`#if DEPTH_PACKING == 3200
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
}`,Ep=`#define DISTANCE
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
}`,yp=`#define DISTANCE
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
}`,Tp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ap=`uniform float scale;
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
}`,wp=`uniform vec3 diffuse;
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
}`,Rp=`#include <common>
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
}`,Cp=`uniform vec3 diffuse;
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
}`,Pp=`#define LAMBERT
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
}`,Dp=`#define LAMBERT
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
}`,Lp=`#define MATCAP
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
}`,Ip=`#define MATCAP
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
}`,Up=`#define NORMAL
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
}`,Np=`#define NORMAL
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
}`,Fp=`#define PHONG
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
}`,Op=`#define PHONG
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
}`,Bp=`#define STANDARD
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
}`,zp=`#define STANDARD
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
}`,Vp=`#define TOON
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
}`,kp=`#define TOON
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
}`,Gp=`uniform float size;
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
}`,Hp=`uniform vec3 diffuse;
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
}`,Wp=`#include <common>
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
}`,Xp=`uniform vec3 color;
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
}`,qp=`uniform float rotation;
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
}`,Yp=`uniform vec3 diffuse;
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
}`,Fe={alphahash_fragment:mf,alphahash_pars_fragment:gf,alphamap_fragment:_f,alphamap_pars_fragment:xf,alphatest_fragment:vf,alphatest_pars_fragment:Mf,aomap_fragment:Sf,aomap_pars_fragment:Ef,batching_pars_vertex:yf,batching_vertex:Tf,begin_vertex:bf,beginnormal_vertex:Af,bsdfs:wf,iridescence_fragment:Rf,bumpmap_pars_fragment:Cf,clipping_planes_fragment:Pf,clipping_planes_pars_fragment:Df,clipping_planes_pars_vertex:Lf,clipping_planes_vertex:If,color_fragment:Uf,color_pars_fragment:Nf,color_pars_vertex:Ff,color_vertex:Of,common:Bf,cube_uv_reflection_fragment:zf,defaultnormal_vertex:Vf,displacementmap_pars_vertex:kf,displacementmap_vertex:Gf,emissivemap_fragment:Hf,emissivemap_pars_fragment:Wf,colorspace_fragment:Xf,colorspace_pars_fragment:qf,envmap_fragment:Yf,envmap_common_pars_fragment:Kf,envmap_pars_fragment:Zf,envmap_pars_vertex:jf,envmap_physical_pars_fragment:od,envmap_vertex:$f,fog_vertex:Jf,fog_pars_vertex:Qf,fog_fragment:ed,fog_pars_fragment:td,gradientmap_pars_fragment:nd,lightmap_pars_fragment:id,lights_lambert_fragment:rd,lights_lambert_pars_fragment:sd,lights_pars_begin:ad,lights_toon_fragment:ld,lights_toon_pars_fragment:cd,lights_phong_fragment:ud,lights_phong_pars_fragment:hd,lights_physical_fragment:fd,lights_physical_pars_fragment:dd,lights_fragment_begin:pd,lights_fragment_maps:md,lights_fragment_end:gd,logdepthbuf_fragment:_d,logdepthbuf_pars_fragment:xd,logdepthbuf_pars_vertex:vd,logdepthbuf_vertex:Md,map_fragment:Sd,map_pars_fragment:Ed,map_particle_fragment:yd,map_particle_pars_fragment:Td,metalnessmap_fragment:bd,metalnessmap_pars_fragment:Ad,morphinstance_vertex:wd,morphcolor_vertex:Rd,morphnormal_vertex:Cd,morphtarget_pars_vertex:Pd,morphtarget_vertex:Dd,normal_fragment_begin:Ld,normal_fragment_maps:Id,normal_pars_fragment:Ud,normal_pars_vertex:Nd,normal_vertex:Fd,normalmap_pars_fragment:Od,clearcoat_normal_fragment_begin:Bd,clearcoat_normal_fragment_maps:zd,clearcoat_pars_fragment:Vd,iridescence_pars_fragment:kd,opaque_fragment:Gd,packing:Hd,premultiplied_alpha_fragment:Wd,project_vertex:Xd,dithering_fragment:qd,dithering_pars_fragment:Yd,roughnessmap_fragment:Kd,roughnessmap_pars_fragment:Zd,shadowmap_pars_fragment:jd,shadowmap_pars_vertex:$d,shadowmap_vertex:Jd,shadowmask_pars_fragment:Qd,skinbase_vertex:ep,skinning_pars_vertex:tp,skinning_vertex:np,skinnormal_vertex:ip,specularmap_fragment:rp,specularmap_pars_fragment:sp,tonemapping_fragment:ap,tonemapping_pars_fragment:op,transmission_fragment:lp,transmission_pars_fragment:cp,uv_pars_fragment:up,uv_pars_vertex:hp,uv_vertex:fp,worldpos_vertex:dp,background_vert:pp,background_frag:mp,backgroundCube_vert:gp,backgroundCube_frag:_p,cube_vert:xp,cube_frag:vp,depth_vert:Mp,depth_frag:Sp,distance_vert:Ep,distance_frag:yp,equirect_vert:Tp,equirect_frag:bp,linedashed_vert:Ap,linedashed_frag:wp,meshbasic_vert:Rp,meshbasic_frag:Cp,meshlambert_vert:Pp,meshlambert_frag:Dp,meshmatcap_vert:Lp,meshmatcap_frag:Ip,meshnormal_vert:Up,meshnormal_frag:Np,meshphong_vert:Fp,meshphong_frag:Op,meshphysical_vert:Bp,meshphysical_frag:zp,meshtoon_vert:Vp,meshtoon_frag:kp,points_vert:Gp,points_frag:Hp,shadow_vert:Wp,shadow_frag:Xp,sprite_vert:qp,sprite_frag:Yp},ae={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},on={basic:{uniforms:Dt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:Dt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ve(0)},envMapIntensity:{value:1}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:Dt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:Dt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:Dt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:Dt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:Dt([ae.points,ae.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:Dt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:Dt([ae.common,ae.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:Dt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:Dt([ae.sprite,ae.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distance:{uniforms:Dt([ae.common,ae.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distance_vert,fragmentShader:Fe.distance_frag},shadow:{uniforms:Dt([ae.lights,ae.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};on.physical={uniforms:Dt([on.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new Le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new Le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const ts={r:0,b:0,g:0},ei=new mn,Kp=new it;function Zp(n,e,t,i,r,s){const a=new Ve(0);let l=r===!0?0:1,c,o,p=null,h=0,u=null;function f(M){let A=M.isScene===!0?M.background:null;if(A&&A.isTexture){const S=M.backgroundBlurriness>0;A=e.get(A,S)}return A}function g(M){let A=!1;const S=f(M);S===null?m(a,l):S&&S.isColor&&(m(S,1),A=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?t.buffers.color.setClear(0,0,0,1,s):R==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function E(M,A){const S=f(A);S&&(S.isCubeTexture||S.mapping===Es)?(o===void 0&&(o=new _t(new Ji(1,1,1),new gn({name:"BackgroundCubeMaterial",uniforms:Yi(on.backgroundCube.uniforms),vertexShader:on.backgroundCube.vertexShader,fragmentShader:on.backgroundCube.fragmentShader,side:Nt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),o.geometry.deleteAttribute("normal"),o.geometry.deleteAttribute("uv"),o.onBeforeRender=function(R,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(o.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(o)),ei.copy(A.backgroundRotation),ei.x*=-1,ei.y*=-1,ei.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ei.y*=-1,ei.z*=-1),o.material.uniforms.envMap.value=S,o.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,o.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,o.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,o.material.uniforms.backgroundRotation.value.setFromMatrix4(Kp.makeRotationFromEuler(ei)),o.material.toneMapped=We.getTransfer(S.colorSpace)!==je,(p!==S||h!==S.version||u!==n.toneMapping)&&(o.material.needsUpdate=!0,p=S,h=S.version,u=n.toneMapping),o.layers.enableAll(),M.unshift(o,o.geometry,o.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new _t(new wr(2,2),new gn({name:"BackgroundMaterial",uniforms:Yi(on.background.uniforms),vertexShader:on.background.vertexShader,fragmentShader:on.background.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=We.getTransfer(S.colorSpace)!==je,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(p!==S||h!==S.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,p=S,h=S.version,u=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,A){M.getRGB(ts,Wc(n)),t.buffers.color.setClear(ts.r,ts.g,ts.b,A,s)}function d(){o!==void 0&&(o.geometry.dispose(),o.material.dispose(),o=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,A=1){a.set(M),l=A,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,m(a,l)},render:g,addToRenderList:E,dispose:d}}function jp(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=u(null);let s=r,a=!1;function l(C,N,B,W,z){let k=!1;const F=h(C,W,B,N);s!==F&&(s=F,o(s.object)),k=f(C,W,B,z),k&&g(C,W,B,z),z!==null&&e.update(z,n.ELEMENT_ARRAY_BUFFER),(k||a)&&(a=!1,S(C,N,B,W),z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function c(){return n.createVertexArray()}function o(C){return n.bindVertexArray(C)}function p(C){return n.deleteVertexArray(C)}function h(C,N,B,W){const z=W.wireframe===!0;let k=i[N.id];k===void 0&&(k={},i[N.id]=k);const F=C.isInstancedMesh===!0?C.id:0;let Q=k[F];Q===void 0&&(Q={},k[F]=Q);let j=Q[B.id];j===void 0&&(j={},Q[B.id]=j);let ce=j[z];return ce===void 0&&(ce=u(c()),j[z]=ce),ce}function u(C){const N=[],B=[],W=[];for(let z=0;z<t;z++)N[z]=0,B[z]=0,W[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:B,attributeDivisors:W,object:C,attributes:{},index:null}}function f(C,N,B,W){const z=s.attributes,k=N.attributes;let F=0;const Q=B.getAttributes();for(const j in Q)if(Q[j].location>=0){const pe=z[j];let he=k[j];if(he===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(he=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(he=C.instanceColor)),pe===void 0||pe.attribute!==he||he&&pe.data!==he.data)return!0;F++}return s.attributesNum!==F||s.index!==W}function g(C,N,B,W){const z={},k=N.attributes;let F=0;const Q=B.getAttributes();for(const j in Q)if(Q[j].location>=0){let pe=k[j];pe===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(pe=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(pe=C.instanceColor));const he={};he.attribute=pe,pe&&pe.data&&(he.data=pe.data),z[j]=he,F++}s.attributes=z,s.attributesNum=F,s.index=W}function E(){const C=s.newAttributes;for(let N=0,B=C.length;N<B;N++)C[N]=0}function m(C){d(C,0)}function d(C,N){const B=s.newAttributes,W=s.enabledAttributes,z=s.attributeDivisors;B[C]=1,W[C]===0&&(n.enableVertexAttribArray(C),W[C]=1),z[C]!==N&&(n.vertexAttribDivisor(C,N),z[C]=N)}function M(){const C=s.newAttributes,N=s.enabledAttributes;for(let B=0,W=N.length;B<W;B++)N[B]!==C[B]&&(n.disableVertexAttribArray(B),N[B]=0)}function A(C,N,B,W,z,k,F){F===!0?n.vertexAttribIPointer(C,N,B,z,k):n.vertexAttribPointer(C,N,B,W,z,k)}function S(C,N,B,W){E();const z=W.attributes,k=B.getAttributes(),F=N.defaultAttributeValues;for(const Q in k){const j=k[Q];if(j.location>=0){let ce=z[Q];if(ce===void 0&&(Q==="instanceMatrix"&&C.instanceMatrix&&(ce=C.instanceMatrix),Q==="instanceColor"&&C.instanceColor&&(ce=C.instanceColor)),ce!==void 0){const pe=ce.normalized,he=ce.itemSize,Ne=e.get(ce);if(Ne===void 0)continue;const ot=Ne.buffer,at=Ne.type,K=Ne.bytesPerElement,ne=at===n.INT||at===n.UNSIGNED_INT||ce.gpuType===mo;if(ce.isInterleavedBufferAttribute){const se=ce.data,Ie=se.stride,be=ce.offset;if(se.isInstancedInterleavedBuffer){for(let we=0;we<j.locationSize;we++)d(j.location+we,se.meshPerAttribute);C.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let we=0;we<j.locationSize;we++)m(j.location+we);n.bindBuffer(n.ARRAY_BUFFER,ot);for(let we=0;we<j.locationSize;we++)A(j.location+we,he/j.locationSize,at,pe,Ie*K,(be+he/j.locationSize*we)*K,ne)}else{if(ce.isInstancedBufferAttribute){for(let se=0;se<j.locationSize;se++)d(j.location+se,ce.meshPerAttribute);C.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let se=0;se<j.locationSize;se++)m(j.location+se);n.bindBuffer(n.ARRAY_BUFFER,ot);for(let se=0;se<j.locationSize;se++)A(j.location+se,he/j.locationSize,at,pe,he*K,he/j.locationSize*se*K,ne)}}else if(F!==void 0){const pe=F[Q];if(pe!==void 0)switch(pe.length){case 2:n.vertexAttrib2fv(j.location,pe);break;case 3:n.vertexAttrib3fv(j.location,pe);break;case 4:n.vertexAttrib4fv(j.location,pe);break;default:n.vertexAttrib1fv(j.location,pe)}}}}M()}function R(){y();for(const C in i){const N=i[C];for(const B in N){const W=N[B];for(const z in W){const k=W[z];for(const F in k)p(k[F].object),delete k[F];delete W[z]}}delete i[C]}}function T(C){if(i[C.id]===void 0)return;const N=i[C.id];for(const B in N){const W=N[B];for(const z in W){const k=W[z];for(const F in k)p(k[F].object),delete k[F];delete W[z]}}delete i[C.id]}function w(C){for(const N in i){const B=i[N];for(const W in B){const z=B[W];if(z[C.id]===void 0)continue;const k=z[C.id];for(const F in k)p(k[F].object),delete k[F];delete z[C.id]}}}function x(C){for(const N in i){const B=i[N],W=C.isInstancedMesh===!0?C.id:0,z=B[W];if(z!==void 0){for(const k in z){const F=z[k];for(const Q in F)p(F[Q].object),delete F[Q];delete z[k]}delete B[W],Object.keys(B).length===0&&delete i[N]}}}function y(){H(),a=!0,s!==r&&(s=r,o(s.object))}function H(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:l,reset:y,resetDefaultState:H,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfObject:x,releaseStatesOfProgram:w,initAttributes:E,enableAttribute:m,disableUnusedAttributes:M}}function $p(n,e,t){let i;function r(o){i=o}function s(o,p){n.drawArrays(i,o,p),t.update(p,i,1)}function a(o,p,h){h!==0&&(n.drawArraysInstanced(i,o,p,h),t.update(p,i,h))}function l(o,p,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,o,0,p,0,h);let f=0;for(let g=0;g<h;g++)f+=p[g];t.update(f,i,1)}function c(o,p,h,u){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<o.length;g++)a(o[g],p[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(i,o,0,p,0,u,0,h);let g=0;for(let E=0;E<h;E++)g+=p[E]*u[E];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=l,this.renderMultiDrawInstances=c}function Jp(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(w){return!(w!==nn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(w){const x=w===Dn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==kt&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==tn&&!x)}function c(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=t.precision!==void 0?t.precision:"highp";const p=c(o);p!==o&&(Re("WebGLRenderer:",o,"not supported, using",p,"instead."),o=p);const h=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:l,precision:o,logarithmicDepthBuffer:h,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:E,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:M,maxVaryings:A,maxFragmentUniforms:S,maxSamples:R,samples:T}}function Qp(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new kn,l=new Ue,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const f=h.length!==0||u||i!==0||r;return r=u,i=h.length,f},this.beginShadows=function(){s=!0,p(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){t=p(h,u,0)},this.setState=function(h,u,f){const g=h.clippingPlanes,E=h.clipIntersection,m=h.clipShadows,d=n.get(h);if(!r||g===null||g.length===0||s&&!m)s?p(null):o();else{const M=s?0:i,A=M*4;let S=d.clippingState||null;c.value=S,S=p(g,u,A,f);for(let R=0;R!==A;++R)S[R]=t[R];d.clippingState=S,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=M}};function o(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(h,u,f,g){const E=h!==null?h.length:0;let m=null;if(E!==0){if(m=c.value,g!==!0||m===null){const d=f+E*4,M=u.matrixWorldInverse;l.getNormalMatrix(M),(m===null||m.length<d)&&(m=new Float32Array(d));for(let A=0,S=f;A!==E;++A,S+=4)a.copy(h[A]).applyMatrix4(M,l),a.normal.toArray(m,S),m[S+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,m}}const Hn=4,Pl=[.125,.215,.35,.446,.526,.582],ii=20,em=256,ur=new Ts,Dl=new Ve;let sa=null,aa=0,oa=0,la=!1;const tm=new U;class Ll{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:l=tm}=s;sa=this._renderer.getRenderTarget(),aa=this._renderer.getActiveCubeFace(),oa=this._renderer.getActiveMipmapLevel(),la=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,l),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ul(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(sa,aa,oa),this._renderer.xr.enabled=la,e.scissorTest=!1,Fi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===li||e.mapping===Hi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sa=this._renderer.getRenderTarget(),aa=this._renderer.getActiveCubeFace(),oa=this._renderer.getActiveMipmapLevel(),la=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Rt,minFilter:Rt,generateMipmaps:!1,type:Dn,format:nn,colorSpace:Xi,depthBuffer:!1},r=Il(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Il(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=nm(s)),this._blurMaterial=rm(s,e,t),this._ggxMaterial=im(s,e,t)}return r}_compileMaterial(e){const t=new _t(new Ft,e);this._renderer.compile(t,ur)}_sceneToCubeUV(e,t,i,r,s){const c=new Wt(90,1,t,i),o=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Dl),h.toneMapping=fn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new _t(new Ji,new Ar({name:"PMREM.Background",side:Nt,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,m=E.material;let d=!1;const M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,d=!0):(m.color.copy(Dl),d=!0);for(let A=0;A<6;A++){const S=A%3;S===0?(c.up.set(0,o[A],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+p[A],s.y,s.z)):S===1?(c.up.set(0,0,o[A]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+p[A],s.z)):(c.up.set(0,o[A],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+p[A]));const R=this._cubeSize;Fi(r,S*R,A>2?R:0,R,R),h.setRenderTarget(r),d&&h.render(E,c),h.render(e,c)}h.toneMapping=f,h.autoClear=u,e.background=M}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===li||e.mapping===Hi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ul());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const l=s.uniforms;l.envMap.value=e;const c=this._cubeSize;Fi(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,ur)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,l=this._lodMeshes[i];l.material=a;const c=a.uniforms,o=i/(this._lodMeshes.length-1),p=t/(this._lodMeshes.length-1),h=Math.sqrt(o*o-p*p),u=0+o*1.25,f=h*u,{_lodMax:g}=this,E=this._sizeLods[i],m=3*E*(i>g-Hn?i-g+Hn:0),d=4*(this._cubeSize-E);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=g-t,Fi(s,m,d,3*E,2*E),r.setRenderTarget(s),r.render(l,ur),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=g-i,Fi(e,m,d,3*E,2*E),r.setRenderTarget(e),r.render(l,ur)}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,l){const c=this._renderer,o=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ge("blur direction must be either latitudinal or longitudinal!");const p=3,h=this._lodMeshes[r];h.material=o;const u=o.uniforms,f=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*ii-1),E=s/g,m=isFinite(s)?1+Math.floor(p*E):ii;m>ii&&Re(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ii}`);const d=[];let M=0;for(let w=0;w<ii;++w){const x=w/E,y=Math.exp(-x*x/2);d.push(y),w===0?M+=y:w<m&&(M+=2*y)}for(let w=0;w<d.length;w++)d[w]=d[w]/M;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=d,u.latitudinal.value=a==="latitudinal",l&&(u.poleAxis.value=l);const{_lodMax:A}=this;u.dTheta.value=g,u.mipInt.value=A-i;const S=this._sizeLods[r],R=3*S*(r>A-Hn?r-A+Hn:0),T=4*(this._cubeSize-S);Fi(t,R,T,3*S,2*S),c.setRenderTarget(t),c.render(h,ur)}}function nm(n){const e=[],t=[],i=[];let r=n;const s=n-Hn+1+Pl.length;for(let a=0;a<s;a++){const l=Math.pow(2,r);e.push(l);let c=1/l;a>n-Hn?c=Pl[a-n+Hn-1]:a===0&&(c=0),t.push(c);const o=1/(l-2),p=-o,h=1+o,u=[p,p,h,p,h,h,p,p,h,h,p,h],f=6,g=6,E=3,m=2,d=1,M=new Float32Array(E*g*f),A=new Float32Array(m*g*f),S=new Float32Array(d*g*f);for(let T=0;T<f;T++){const w=T%3*2/3-1,x=T>2?0:-1,y=[w,x,0,w+2/3,x,0,w+2/3,x+1,0,w,x,0,w+2/3,x+1,0,w,x+1,0];M.set(y,E*g*T),A.set(u,m*g*T);const H=[T,T,T,T,T,T];S.set(H,d*g*T)}const R=new Ft;R.setAttribute("position",new Kt(M,E)),R.setAttribute("uv",new Kt(A,m)),R.setAttribute("faceIndex",new Kt(S,d)),i.push(new _t(R,null)),r>Hn&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Il(n,e,t){const i=new dn(n,e,t);return i.texture.mapping=Es,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Fi(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function im(n,e,t){return new gn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:em,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:bs(),fragmentShader:`

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
		`,blending:wn,depthTest:!1,depthWrite:!1})}function rm(n,e,t){const i=new Float32Array(ii),r=new U(0,1,0);return new gn({name:"SphericalGaussianBlur",defines:{n:ii,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:bs(),fragmentShader:`

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
		`,blending:wn,depthTest:!1,depthWrite:!1})}function Ul(){return new gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bs(),fragmentShader:`

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
		`,blending:wn,depthTest:!1,depthWrite:!1})}function Nl(){return new gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function bs(){return`

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
	`}class Kc extends dn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new kc(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ji(5,5,5),s=new gn({name:"CubemapFromEquirect",uniforms:Yi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Nt,blending:wn});s.uniforms.tEquirect.value=t;const a=new _t(r,s),l=t.minFilter;return t.minFilter===si&&(t.minFilter=Rt),new uf(1,10,this).update(e,a),t.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}function sm(n){let e=new WeakMap,t=new WeakMap,i=null;function r(u,f=!1){return u==null?null:f?a(u):s(u)}function s(u){if(u&&u.isTexture){const f=u.mapping;if(f===Ls||f===Is)if(e.has(u)){const g=e.get(u).texture;return l(g,u.mapping)}else{const g=u.image;if(g&&g.height>0){const E=new Kc(g.height);return E.fromEquirectangularTexture(n,u),e.set(u,E),u.addEventListener("dispose",o),l(E.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const f=u.mapping,g=f===Ls||f===Is,E=f===li||f===Hi;if(g||E){let m=t.get(u);const d=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==d)return i===null&&(i=new Ll(n)),m=g?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{const M=u.image;return g&&M&&M.height>0||E&&M&&c(M)?(i===null&&(i=new Ll(n)),m=g?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",p),m.texture):null}}}return u}function l(u,f){return f===Ls?u.mapping=li:f===Is&&(u.mapping=Hi),u}function c(u){let f=0;const g=6;for(let E=0;E<g;E++)u[E]!==void 0&&f++;return f===g}function o(u){const f=u.target;f.removeEventListener("dispose",o);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function p(u){const f=u.target;f.removeEventListener("dispose",p);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function am(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&vs("WebGLRenderer: "+i+" extension not supported."),r}}}function om(n,e,t,i){const r={},s=new WeakMap;function a(h){const u=h.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete r[u.id];const f=s.get(u);f&&(e.remove(f),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function l(h,u){return r[u.id]===!0||(u.addEventListener("dispose",a),r[u.id]=!0,t.memory.geometries++),u}function c(h){const u=h.attributes;for(const f in u)e.update(u[f],n.ARRAY_BUFFER)}function o(h){const u=[],f=h.index,g=h.attributes.position;let E=0;if(g===void 0)return;if(f!==null){const M=f.array;E=f.version;for(let A=0,S=M.length;A<S;A+=3){const R=M[A+0],T=M[A+1],w=M[A+2];u.push(R,T,T,w,w,R)}}else{const M=g.array;E=g.version;for(let A=0,S=M.length/3-1;A<S;A+=3){const R=A+0,T=A+1,w=A+2;u.push(R,T,T,w,w,R)}}const m=new(g.count>=65535?Uc:Ic)(u,1);m.version=E;const d=s.get(h);d&&e.remove(d),s.set(h,m)}function p(h){const u=s.get(h);if(u){const f=h.index;f!==null&&u.version<f.version&&o(h)}else o(h);return s.get(h)}return{get:l,update:c,getWireframeAttribute:p}}function lm(n,e,t){let i;function r(u){i=u}let s,a;function l(u){s=u.type,a=u.bytesPerElement}function c(u,f){n.drawElements(i,f,s,u*a),t.update(f,i,1)}function o(u,f,g){g!==0&&(n.drawElementsInstanced(i,f,s,u*a,g),t.update(f,i,g))}function p(u,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,u,0,g);let m=0;for(let d=0;d<g;d++)m+=f[d];t.update(m,i,1)}function h(u,f,g,E){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<u.length;d++)o(u[d]/a,f[d],E[d]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,s,u,0,E,0,g);let d=0;for(let M=0;M<g;M++)d+=f[M]*E[M];t.update(d,i,1)}}this.setMode=r,this.setIndex=l,this.render=c,this.renderInstances=o,this.renderMultiDraw=p,this.renderMultiDrawInstances=h}function cm(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,l){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=l*(s/3);break;case n.LINES:t.lines+=l*(s/2);break;case n.LINE_STRIP:t.lines+=l*(s-1);break;case n.LINE_LOOP:t.lines+=l*s;break;case n.POINTS:t.points+=l*s;break;default:Ge("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function um(n,e,t){const i=new WeakMap,r=new ct;function s(a,l,c){const o=a.morphTargetInfluences,p=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,h=p!==void 0?p.length:0;let u=i.get(l);if(u===void 0||u.count!==h){let H=function(){x.dispose(),i.delete(l),l.removeEventListener("dispose",H)};var f=H;u!==void 0&&u.texture.dispose();const g=l.morphAttributes.position!==void 0,E=l.morphAttributes.normal!==void 0,m=l.morphAttributes.color!==void 0,d=l.morphAttributes.position||[],M=l.morphAttributes.normal||[],A=l.morphAttributes.color||[];let S=0;g===!0&&(S=1),E===!0&&(S=2),m===!0&&(S=3);let R=l.attributes.position.count*S,T=1;R>e.maxTextureSize&&(T=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const w=new Float32Array(R*T*4*h),x=new Dc(w,R,T,h);x.type=tn,x.needsUpdate=!0;const y=S*4;for(let C=0;C<h;C++){const N=d[C],B=M[C],W=A[C],z=R*T*4*C;for(let k=0;k<N.count;k++){const F=k*y;g===!0&&(r.fromBufferAttribute(N,k),w[z+F+0]=r.x,w[z+F+1]=r.y,w[z+F+2]=r.z,w[z+F+3]=0),E===!0&&(r.fromBufferAttribute(B,k),w[z+F+4]=r.x,w[z+F+5]=r.y,w[z+F+6]=r.z,w[z+F+7]=0),m===!0&&(r.fromBufferAttribute(W,k),w[z+F+8]=r.x,w[z+F+9]=r.y,w[z+F+10]=r.z,w[z+F+11]=W.itemSize===4?r.w:1)}}u={count:h,texture:x,size:new Le(R,T)},i.set(l,u),l.addEventListener("dispose",H)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<o.length;m++)g+=o[m];const E=l.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",E),c.getUniforms().setValue(n,"morphTargetInfluences",o)}c.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:s}}function hm(n,e,t,i,r){let s=new WeakMap;function a(o){const p=r.render.frame,h=o.geometry,u=e.get(o,h);if(s.get(u)!==p&&(e.update(u),s.set(u,p)),o.isInstancedMesh&&(o.hasEventListener("dispose",c)===!1&&o.addEventListener("dispose",c),s.get(o)!==p&&(t.update(o.instanceMatrix,n.ARRAY_BUFFER),o.instanceColor!==null&&t.update(o.instanceColor,n.ARRAY_BUFFER),s.set(o,p))),o.isSkinnedMesh){const f=o.skeleton;s.get(f)!==p&&(f.update(),s.set(f,p))}return u}function l(){s=new WeakMap}function c(o){const p=o.target;p.removeEventListener("dispose",c),i.releaseStatesOfObject(p),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:a,dispose:l}}const fm={[mc]:"LINEAR_TONE_MAPPING",[gc]:"REINHARD_TONE_MAPPING",[_c]:"CINEON_TONE_MAPPING",[xc]:"ACES_FILMIC_TONE_MAPPING",[Mc]:"AGX_TONE_MAPPING",[Sc]:"NEUTRAL_TONE_MAPPING",[vc]:"CUSTOM_TONE_MAPPING"};function dm(n,e,t,i,r){const s=new dn(e,t,{type:n,depthBuffer:i,stencilBuffer:r}),a=new dn(e,t,{type:Dn,depthBuffer:!1,stencilBuffer:!1}),l=new Ft;l.setAttribute("position",new gt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new gt([0,2,0,0,2,0],2));const c=new tf({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),o=new _t(l,c),p=new Ts(-1,1,1,-1,0,1);let h=null,u=null,f=!1,g,E=null,m=[],d=!1;this.setSize=function(M,A){s.setSize(M,A),a.setSize(M,A);for(let S=0;S<m.length;S++){const R=m[S];R.setSize&&R.setSize(M,A)}},this.setEffects=function(M){m=M,d=m.length>0&&m[0].isRenderPass===!0;const A=s.width,S=s.height;for(let R=0;R<m.length;R++){const T=m[R];T.setSize&&T.setSize(A,S)}},this.begin=function(M,A){if(f||M.toneMapping===fn&&m.length===0)return!1;if(E=A,A!==null){const S=A.width,R=A.height;(s.width!==S||s.height!==R)&&this.setSize(S,R)}return d===!1&&M.setRenderTarget(s),g=M.toneMapping,M.toneMapping=fn,!0},this.hasRenderPass=function(){return d},this.end=function(M,A){M.toneMapping=g,f=!0;let S=s,R=a;for(let T=0;T<m.length;T++){const w=m[T];if(w.enabled!==!1&&(w.render(M,R,S,A),w.needsSwap!==!1)){const x=S;S=R,R=x}}if(h!==M.outputColorSpace||u!==M.toneMapping){h=M.outputColorSpace,u=M.toneMapping,c.defines={},We.getTransfer(h)===je&&(c.defines.SRGB_TRANSFER="");const T=fm[u];T&&(c.defines[T]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=S.texture,M.setRenderTarget(E),M.render(o,p),E=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){s.dispose(),a.dispose(),l.dispose(),c.dispose()}}const Zc=new Ct,so=new yr(1,1),jc=new Dc,$c=new Dh,Jc=new kc,Fl=[],Ol=[],Bl=new Float32Array(16),zl=new Float32Array(9),Vl=new Float32Array(4);function Qi(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Fl[r];if(s===void 0&&(s=new Float32Array(r),Fl[r]=s),e!==0){i.toArray(s,0);for(let a=1,l=0;a!==e;++a)l+=t,n[a].toArray(s,l)}return s}function xt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function vt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function As(n,e){let t=Ol[e];t===void 0&&(t=new Int32Array(e),Ol[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function pm(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function mm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;n.uniform2fv(this.addr,e),vt(t,e)}}function gm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xt(t,e))return;n.uniform3fv(this.addr,e),vt(t,e)}}function _m(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;n.uniform4fv(this.addr,e),vt(t,e)}}function xm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(xt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),vt(t,e)}else{if(xt(t,i))return;Vl.set(i),n.uniformMatrix2fv(this.addr,!1,Vl),vt(t,i)}}function vm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(xt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),vt(t,e)}else{if(xt(t,i))return;zl.set(i),n.uniformMatrix3fv(this.addr,!1,zl),vt(t,i)}}function Mm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(xt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),vt(t,e)}else{if(xt(t,i))return;Bl.set(i),n.uniformMatrix4fv(this.addr,!1,Bl),vt(t,i)}}function Sm(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Em(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;n.uniform2iv(this.addr,e),vt(t,e)}}function ym(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;n.uniform3iv(this.addr,e),vt(t,e)}}function Tm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;n.uniform4iv(this.addr,e),vt(t,e)}}function bm(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Am(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;n.uniform2uiv(this.addr,e),vt(t,e)}}function wm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;n.uniform3uiv(this.addr,e),vt(t,e)}}function Rm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;n.uniform4uiv(this.addr,e),vt(t,e)}}function Cm(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(so.compareFunction=t.isReversedDepthBuffer()?yo:Eo,s=so):s=Zc,t.setTexture2D(e||s,r)}function Pm(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||$c,r)}function Dm(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Jc,r)}function Lm(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||jc,r)}function Im(n){switch(n){case 5126:return pm;case 35664:return mm;case 35665:return gm;case 35666:return _m;case 35674:return xm;case 35675:return vm;case 35676:return Mm;case 5124:case 35670:return Sm;case 35667:case 35671:return Em;case 35668:case 35672:return ym;case 35669:case 35673:return Tm;case 5125:return bm;case 36294:return Am;case 36295:return wm;case 36296:return Rm;case 35678:case 36198:case 36298:case 36306:case 35682:return Cm;case 35679:case 36299:case 36307:return Pm;case 35680:case 36300:case 36308:case 36293:return Dm;case 36289:case 36303:case 36311:case 36292:return Lm}}function Um(n,e){n.uniform1fv(this.addr,e)}function Nm(n,e){const t=Qi(e,this.size,2);n.uniform2fv(this.addr,t)}function Fm(n,e){const t=Qi(e,this.size,3);n.uniform3fv(this.addr,t)}function Om(n,e){const t=Qi(e,this.size,4);n.uniform4fv(this.addr,t)}function Bm(n,e){const t=Qi(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function zm(n,e){const t=Qi(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Vm(n,e){const t=Qi(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function km(n,e){n.uniform1iv(this.addr,e)}function Gm(n,e){n.uniform2iv(this.addr,e)}function Hm(n,e){n.uniform3iv(this.addr,e)}function Wm(n,e){n.uniform4iv(this.addr,e)}function Xm(n,e){n.uniform1uiv(this.addr,e)}function qm(n,e){n.uniform2uiv(this.addr,e)}function Ym(n,e){n.uniform3uiv(this.addr,e)}function Km(n,e){n.uniform4uiv(this.addr,e)}function Zm(n,e,t){const i=this.cache,r=e.length,s=As(t,r);xt(i,s)||(n.uniform1iv(this.addr,s),vt(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=so:a=Zc;for(let l=0;l!==r;++l)t.setTexture2D(e[l]||a,s[l])}function jm(n,e,t){const i=this.cache,r=e.length,s=As(t,r);xt(i,s)||(n.uniform1iv(this.addr,s),vt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||$c,s[a])}function $m(n,e,t){const i=this.cache,r=e.length,s=As(t,r);xt(i,s)||(n.uniform1iv(this.addr,s),vt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Jc,s[a])}function Jm(n,e,t){const i=this.cache,r=e.length,s=As(t,r);xt(i,s)||(n.uniform1iv(this.addr,s),vt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||jc,s[a])}function Qm(n){switch(n){case 5126:return Um;case 35664:return Nm;case 35665:return Fm;case 35666:return Om;case 35674:return Bm;case 35675:return zm;case 35676:return Vm;case 5124:case 35670:return km;case 35667:case 35671:return Gm;case 35668:case 35672:return Hm;case 35669:case 35673:return Wm;case 5125:return Xm;case 36294:return qm;case 36295:return Ym;case 36296:return Km;case 35678:case 36198:case 36298:case 36306:case 35682:return Zm;case 35679:case 36299:case 36307:return jm;case 35680:case 36300:case 36308:case 36293:return $m;case 36289:case 36303:case 36311:case 36292:return Jm}}class e0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Im(t.type)}}class t0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Qm(t.type)}}class n0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const l=r[s];l.setValue(e,t[l.id],i)}}}const ca=/(\w+)(\])?(\[|\.)?/g;function kl(n,e){n.seq.push(e),n.map[e.id]=e}function i0(n,e,t){const i=n.name,r=i.length;for(ca.lastIndex=0;;){const s=ca.exec(i),a=ca.lastIndex;let l=s[1];const c=s[2]==="]",o=s[3];if(c&&(l=l|0),o===void 0||o==="["&&a+2===r){kl(t,o===void 0?new e0(l,n,e):new t0(l,n,e));break}else{let h=t.map[l];h===void 0&&(h=new n0(l),kl(t,h)),t=h}}}class ps{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const l=e.getActiveUniform(t,a),c=e.getUniformLocation(t,l.name);i0(l,c,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const l=t[s],c=i[l.id];c.needsUpdate!==!1&&l.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Gl(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const r0=37297;let s0=0;function a0(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const l=a+1;i.push(`${l===e?">":" "} ${l}: ${t[a]}`)}return i.join(`
`)}const Hl=new Ue;function o0(n){We._getMatrix(Hl,We.workingColorSpace,n);const e=`mat3( ${Hl.elements.map(t=>t.toFixed(4))} )`;switch(We.getTransfer(n)){case gs:return[e,"LinearTransferOETF"];case je:return[e,"sRGBTransferOETF"];default:return Re("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Wl(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const l=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+a0(n.getShaderSource(e),l)}else return s}function l0(n,e){const t=o0(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const c0={[mc]:"Linear",[gc]:"Reinhard",[_c]:"Cineon",[xc]:"ACESFilmic",[Mc]:"AgX",[Sc]:"Neutral",[vc]:"Custom"};function u0(n,e){const t=c0[e];return t===void 0?(Re("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ns=new U;function h0(){We.getLuminanceCoefficients(ns);const n=ns.x.toFixed(4),e=ns.y.toFixed(4),t=ns.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function f0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(mr).join(`
`)}function d0(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function p0(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let l=1;s.type===n.FLOAT_MAT2&&(l=2),s.type===n.FLOAT_MAT3&&(l=3),s.type===n.FLOAT_MAT4&&(l=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:l}}return t}function mr(n){return n!==""}function Xl(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ql(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const m0=/^[ \t]*#include +<([\w\d./]+)>/gm;function ao(n){return n.replace(m0,_0)}const g0=new Map;function _0(n,e){let t=Fe[e];if(t===void 0){const i=g0.get(e);if(i!==void 0)t=Fe[i],Re('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ao(t)}const x0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yl(n){return n.replace(x0,v0)}function v0(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Kl(n){let e=`precision ${n.precision} float;
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
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const M0={[cs]:"SHADOWMAP_TYPE_PCF",[pr]:"SHADOWMAP_TYPE_VSM"};function S0(n){return M0[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const E0={[li]:"ENVMAP_TYPE_CUBE",[Hi]:"ENVMAP_TYPE_CUBE",[Es]:"ENVMAP_TYPE_CUBE_UV"};function y0(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":E0[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const T0={[Hi]:"ENVMAP_MODE_REFRACTION"};function b0(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":T0[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const A0={[po]:"ENVMAP_BLENDING_MULTIPLY",[Ku]:"ENVMAP_BLENDING_MIX",[Zu]:"ENVMAP_BLENDING_ADD"};function w0(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":A0[n.combine]||"ENVMAP_BLENDING_NONE"}function R0(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function C0(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,l=t.fragmentShader;const c=S0(t),o=y0(t),p=b0(t),h=w0(t),u=R0(t),f=f0(t),g=d0(s),E=r.createProgram();let m,d,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(mr).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(mr).join(`
`),d.length>0&&(d+=`
`)):(m=[Kl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mr).join(`
`),d=[Kl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+o:"",t.envMap?"#define "+p:"",t.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==fn?"#define TONE_MAPPING":"",t.toneMapping!==fn?Fe.tonemapping_pars_fragment:"",t.toneMapping!==fn?u0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,l0("linearToOutputTexel",t.outputColorSpace),h0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(mr).join(`
`)),a=ao(a),a=Xl(a,t),a=ql(a,t),l=ao(l),l=Xl(l,t),l=ql(l,t),a=Yl(a),l=Yl(l),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===tl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===tl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const A=M+m+a,S=M+d+l,R=Gl(r,r.VERTEX_SHADER,A),T=Gl(r,r.FRAGMENT_SHADER,S);r.attachShader(E,R),r.attachShader(E,T),t.index0AttributeName!==void 0?r.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E);function w(C){if(n.debug.checkShaderErrors){const N=r.getProgramInfoLog(E)||"",B=r.getShaderInfoLog(R)||"",W=r.getShaderInfoLog(T)||"",z=N.trim(),k=B.trim(),F=W.trim();let Q=!0,j=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if(Q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,E,R,T);else{const ce=Wl(r,R,"vertex"),pe=Wl(r,T,"fragment");Ge("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+z+`
`+ce+`
`+pe)}else z!==""?Re("WebGLProgram: Program Info Log:",z):(k===""||F==="")&&(j=!1);j&&(C.diagnostics={runnable:Q,programLog:z,vertexShader:{log:k,prefix:m},fragmentShader:{log:F,prefix:d}})}r.deleteShader(R),r.deleteShader(T),x=new ps(r,E),y=p0(r,E)}let x;this.getUniforms=function(){return x===void 0&&w(this),x};let y;this.getAttributes=function(){return y===void 0&&w(this),y};let H=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=r.getProgramParameter(E,r0)),H},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=s0++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=R,this.fragmentShader=T,this}let P0=0;class D0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new L0(e),t.set(e,i)),i}}class L0{constructor(e){this.id=P0++,this.code=e,this.usedTimes=0}}function I0(n,e,t,i,r,s){const a=new Ao,l=new D0,c=new Set,o=[],p=new Map,h=i.logarithmicDepthBuffer;let u=i.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return c.add(x),x===0?"uv":`uv${x}`}function E(x,y,H,C,N){const B=C.fog,W=N.geometry,z=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,k=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,F=e.get(x.envMap||z,k),Q=F&&F.mapping===Es?F.image.height:null,j=f[x.type];x.precision!==null&&(u=i.getMaxPrecision(x.precision),u!==x.precision&&Re("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));const ce=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,pe=ce!==void 0?ce.length:0;let he=0;W.morphAttributes.position!==void 0&&(he=1),W.morphAttributes.normal!==void 0&&(he=2),W.morphAttributes.color!==void 0&&(he=3);let Ne,ot,at,K;if(j){const Ze=on[j];Ne=Ze.vertexShader,ot=Ze.fragmentShader}else Ne=x.vertexShader,ot=x.fragmentShader,l.update(x),at=l.getVertexShaderID(x),K=l.getFragmentShaderID(x);const ne=n.getRenderTarget(),se=n.state.buffers.depth.getReversed(),Ie=N.isInstancedMesh===!0,be=N.isBatchedMesh===!0,we=!!x.map,Mt=!!x.matcap,He=!!F,Ke=!!x.aoMap,tt=!!x.lightMap,Oe=!!x.bumpMap,ut=!!x.normalMap,P=!!x.displacementMap,dt=!!x.emissiveMap,qe=!!x.metalnessMap,rt=!!x.roughnessMap,Me=x.anisotropy>0,b=x.clearcoat>0,_=x.dispersion>0,L=x.iridescence>0,Y=x.sheen>0,Z=x.transmission>0,q=Me&&!!x.anisotropyMap,me=b&&!!x.clearcoatMap,ie=b&&!!x.clearcoatNormalMap,Te=b&&!!x.clearcoatRoughnessMap,Ae=L&&!!x.iridescenceMap,$=L&&!!x.iridescenceThicknessMap,ee=Y&&!!x.sheenColorMap,ge=Y&&!!x.sheenRoughnessMap,xe=!!x.specularMap,ue=!!x.specularColorMap,Be=!!x.specularIntensityMap,D=Z&&!!x.transmissionMap,re=Z&&!!x.thicknessMap,te=!!x.gradientMap,de=!!x.alphaMap,J=x.alphaTest>0,X=!!x.alphaHash,_e=!!x.extensions;let Ce=fn;x.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Ce=n.toneMapping);const st={shaderID:j,shaderType:x.type,shaderName:x.name,vertexShader:Ne,fragmentShader:ot,defines:x.defines,customVertexShaderID:at,customFragmentShaderID:K,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:be,batchingColor:be&&N._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&N.instanceColor!==null,instancingMorph:Ie&&N.morphTexture!==null,outputColorSpace:ne===null?n.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Xi,alphaToCoverage:!!x.alphaToCoverage,map:we,matcap:Mt,envMap:He,envMapMode:He&&F.mapping,envMapCubeUVHeight:Q,aoMap:Ke,lightMap:tt,bumpMap:Oe,normalMap:ut,displacementMap:P,emissiveMap:dt,normalMapObjectSpace:ut&&x.normalMapType===Ju,normalMapTangentSpace:ut&&x.normalMapType===Cc,metalnessMap:qe,roughnessMap:rt,anisotropy:Me,anisotropyMap:q,clearcoat:b,clearcoatMap:me,clearcoatNormalMap:ie,clearcoatRoughnessMap:Te,dispersion:_,iridescence:L,iridescenceMap:Ae,iridescenceThicknessMap:$,sheen:Y,sheenColorMap:ee,sheenRoughnessMap:ge,specularMap:xe,specularColorMap:ue,specularIntensityMap:Be,transmission:Z,transmissionMap:D,thicknessMap:re,gradientMap:te,opaque:x.transparent===!1&&x.blending===zi&&x.alphaToCoverage===!1,alphaMap:de,alphaTest:J,alphaHash:X,combine:x.combine,mapUv:we&&g(x.map.channel),aoMapUv:Ke&&g(x.aoMap.channel),lightMapUv:tt&&g(x.lightMap.channel),bumpMapUv:Oe&&g(x.bumpMap.channel),normalMapUv:ut&&g(x.normalMap.channel),displacementMapUv:P&&g(x.displacementMap.channel),emissiveMapUv:dt&&g(x.emissiveMap.channel),metalnessMapUv:qe&&g(x.metalnessMap.channel),roughnessMapUv:rt&&g(x.roughnessMap.channel),anisotropyMapUv:q&&g(x.anisotropyMap.channel),clearcoatMapUv:me&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:ie&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:$&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:ee&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:ge&&g(x.sheenRoughnessMap.channel),specularMapUv:xe&&g(x.specularMap.channel),specularColorMapUv:ue&&g(x.specularColorMap.channel),specularIntensityMapUv:Be&&g(x.specularIntensityMap.channel),transmissionMapUv:D&&g(x.transmissionMap.channel),thicknessMapUv:re&&g(x.thicknessMap.channel),alphaMapUv:de&&g(x.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(ut||Me),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!W.attributes.uv&&(we||de),fog:!!B,useFog:x.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||W.attributes.normal===void 0&&ut===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:se,skinning:N.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:he,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&H.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ce,decodeVideoTexture:we&&x.map.isVideoTexture===!0&&We.getTransfer(x.map.colorSpace)===je,decodeVideoTextureEmissive:dt&&x.emissiveMap.isVideoTexture===!0&&We.getTransfer(x.emissiveMap.colorSpace)===je,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Qt,flipSided:x.side===Nt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:_e&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&x.extensions.multiDraw===!0||be)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return st.vertexUv1s=c.has(1),st.vertexUv2s=c.has(2),st.vertexUv3s=c.has(3),c.clear(),st}function m(x){const y=[];if(x.shaderID?y.push(x.shaderID):(y.push(x.customVertexShaderID),y.push(x.customFragmentShaderID)),x.defines!==void 0)for(const H in x.defines)y.push(H),y.push(x.defines[H]);return x.isRawShaderMaterial===!1&&(d(y,x),M(y,x),y.push(n.outputColorSpace)),y.push(x.customProgramCacheKey),y.join()}function d(x,y){x.push(y.precision),x.push(y.outputColorSpace),x.push(y.envMapMode),x.push(y.envMapCubeUVHeight),x.push(y.mapUv),x.push(y.alphaMapUv),x.push(y.lightMapUv),x.push(y.aoMapUv),x.push(y.bumpMapUv),x.push(y.normalMapUv),x.push(y.displacementMapUv),x.push(y.emissiveMapUv),x.push(y.metalnessMapUv),x.push(y.roughnessMapUv),x.push(y.anisotropyMapUv),x.push(y.clearcoatMapUv),x.push(y.clearcoatNormalMapUv),x.push(y.clearcoatRoughnessMapUv),x.push(y.iridescenceMapUv),x.push(y.iridescenceThicknessMapUv),x.push(y.sheenColorMapUv),x.push(y.sheenRoughnessMapUv),x.push(y.specularMapUv),x.push(y.specularColorMapUv),x.push(y.specularIntensityMapUv),x.push(y.transmissionMapUv),x.push(y.thicknessMapUv),x.push(y.combine),x.push(y.fogExp2),x.push(y.sizeAttenuation),x.push(y.morphTargetsCount),x.push(y.morphAttributeCount),x.push(y.numDirLights),x.push(y.numPointLights),x.push(y.numSpotLights),x.push(y.numSpotLightMaps),x.push(y.numHemiLights),x.push(y.numRectAreaLights),x.push(y.numDirLightShadows),x.push(y.numPointLightShadows),x.push(y.numSpotLightShadows),x.push(y.numSpotLightShadowsWithMaps),x.push(y.numLightProbes),x.push(y.shadowMapType),x.push(y.toneMapping),x.push(y.numClippingPlanes),x.push(y.numClipIntersection),x.push(y.depthPacking)}function M(x,y){a.disableAll(),y.instancing&&a.enable(0),y.instancingColor&&a.enable(1),y.instancingMorph&&a.enable(2),y.matcap&&a.enable(3),y.envMap&&a.enable(4),y.normalMapObjectSpace&&a.enable(5),y.normalMapTangentSpace&&a.enable(6),y.clearcoat&&a.enable(7),y.iridescence&&a.enable(8),y.alphaTest&&a.enable(9),y.vertexColors&&a.enable(10),y.vertexAlphas&&a.enable(11),y.vertexUv1s&&a.enable(12),y.vertexUv2s&&a.enable(13),y.vertexUv3s&&a.enable(14),y.vertexTangents&&a.enable(15),y.anisotropy&&a.enable(16),y.alphaHash&&a.enable(17),y.batching&&a.enable(18),y.dispersion&&a.enable(19),y.batchingColor&&a.enable(20),y.gradientMap&&a.enable(21),x.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),x.push(a.mask)}function A(x){const y=f[x.type];let H;if(y){const C=on[y];H=Jh.clone(C.uniforms)}else H=x.uniforms;return H}function S(x,y){let H=p.get(y);return H!==void 0?++H.usedTimes:(H=new C0(n,y,x,r),o.push(H),p.set(y,H)),H}function R(x){if(--x.usedTimes===0){const y=o.indexOf(x);o[y]=o[o.length-1],o.pop(),p.delete(x.cacheKey),x.destroy()}}function T(x){l.remove(x)}function w(){l.dispose()}return{getParameters:E,getProgramCacheKey:m,getUniforms:A,acquireProgram:S,releaseProgram:R,releaseShaderCache:T,programs:o,dispose:w}}function U0(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let l=n.get(a);return l===void 0&&(l={},n.set(a,l)),l}function i(a){n.delete(a)}function r(a,l,c){n.get(a)[l]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function N0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Zl(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function jl(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function l(u,f,g,E,m,d){let M=n[e];return M===void 0?(M={id:u.id,object:u,geometry:f,material:g,materialVariant:a(u),groupOrder:E,renderOrder:u.renderOrder,z:m,group:d},n[e]=M):(M.id=u.id,M.object=u,M.geometry=f,M.material=g,M.materialVariant=a(u),M.groupOrder=E,M.renderOrder=u.renderOrder,M.z=m,M.group=d),e++,M}function c(u,f,g,E,m,d){const M=l(u,f,g,E,m,d);g.transmission>0?i.push(M):g.transparent===!0?r.push(M):t.push(M)}function o(u,f,g,E,m,d){const M=l(u,f,g,E,m,d);g.transmission>0?i.unshift(M):g.transparent===!0?r.unshift(M):t.unshift(M)}function p(u,f){t.length>1&&t.sort(u||N0),i.length>1&&i.sort(f||Zl),r.length>1&&r.sort(f||Zl)}function h(){for(let u=e,f=n.length;u<f;u++){const g=n[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:c,unshift:o,finish:h,sort:p}}function F0(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new jl,n.set(i,[a])):r>=s.length?(a=new jl,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function O0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Ve};break;case"SpotLight":t={position:new U,direction:new U,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function B0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let z0=0;function V0(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function k0(n){const e=new O0,t=B0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)i.probe.push(new U);const r=new U,s=new it,a=new it;function l(o){let p=0,h=0,u=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let f=0,g=0,E=0,m=0,d=0,M=0,A=0,S=0,R=0,T=0,w=0;o.sort(V0);for(let y=0,H=o.length;y<H;y++){const C=o[y],N=C.color,B=C.intensity,W=C.distance;let z=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Wi?z=C.shadow.map.texture:z=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)p+=N.r*B,h+=N.g*B,u+=N.b*B;else if(C.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(C.sh.coefficients[k],B);w++}else if(C.isDirectionalLight){const k=e.get(C);if(k.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const F=C.shadow,Q=t.get(C);Q.shadowIntensity=F.intensity,Q.shadowBias=F.bias,Q.shadowNormalBias=F.normalBias,Q.shadowRadius=F.radius,Q.shadowMapSize=F.mapSize,i.directionalShadow[f]=Q,i.directionalShadowMap[f]=z,i.directionalShadowMatrix[f]=C.shadow.matrix,M++}i.directional[f]=k,f++}else if(C.isSpotLight){const k=e.get(C);k.position.setFromMatrixPosition(C.matrixWorld),k.color.copy(N).multiplyScalar(B),k.distance=W,k.coneCos=Math.cos(C.angle),k.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),k.decay=C.decay,i.spot[E]=k;const F=C.shadow;if(C.map&&(i.spotLightMap[R]=C.map,R++,F.updateMatrices(C),C.castShadow&&T++),i.spotLightMatrix[E]=F.matrix,C.castShadow){const Q=t.get(C);Q.shadowIntensity=F.intensity,Q.shadowBias=F.bias,Q.shadowNormalBias=F.normalBias,Q.shadowRadius=F.radius,Q.shadowMapSize=F.mapSize,i.spotShadow[E]=Q,i.spotShadowMap[E]=z,S++}E++}else if(C.isRectAreaLight){const k=e.get(C);k.color.copy(N).multiplyScalar(B),k.halfWidth.set(C.width*.5,0,0),k.halfHeight.set(0,C.height*.5,0),i.rectArea[m]=k,m++}else if(C.isPointLight){const k=e.get(C);if(k.color.copy(C.color).multiplyScalar(C.intensity),k.distance=C.distance,k.decay=C.decay,C.castShadow){const F=C.shadow,Q=t.get(C);Q.shadowIntensity=F.intensity,Q.shadowBias=F.bias,Q.shadowNormalBias=F.normalBias,Q.shadowRadius=F.radius,Q.shadowMapSize=F.mapSize,Q.shadowCameraNear=F.camera.near,Q.shadowCameraFar=F.camera.far,i.pointShadow[g]=Q,i.pointShadowMap[g]=z,i.pointShadowMatrix[g]=C.shadow.matrix,A++}i.point[g]=k,g++}else if(C.isHemisphereLight){const k=e.get(C);k.skyColor.copy(C.color).multiplyScalar(B),k.groundColor.copy(C.groundColor).multiplyScalar(B),i.hemi[d]=k,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_FLOAT_1,i.rectAreaLTC2=ae.LTC_FLOAT_2):(i.rectAreaLTC1=ae.LTC_HALF_1,i.rectAreaLTC2=ae.LTC_HALF_2)),i.ambient[0]=p,i.ambient[1]=h,i.ambient[2]=u;const x=i.hash;(x.directionalLength!==f||x.pointLength!==g||x.spotLength!==E||x.rectAreaLength!==m||x.hemiLength!==d||x.numDirectionalShadows!==M||x.numPointShadows!==A||x.numSpotShadows!==S||x.numSpotMaps!==R||x.numLightProbes!==w)&&(i.directional.length=f,i.spot.length=E,i.rectArea.length=m,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=S+R-T,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=w,x.directionalLength=f,x.pointLength=g,x.spotLength=E,x.rectAreaLength=m,x.hemiLength=d,x.numDirectionalShadows=M,x.numPointShadows=A,x.numSpotShadows=S,x.numSpotMaps=R,x.numLightProbes=w,i.version=z0++)}function c(o,p){let h=0,u=0,f=0,g=0,E=0;const m=p.matrixWorldInverse;for(let d=0,M=o.length;d<M;d++){const A=o[d];if(A.isDirectionalLight){const S=i.directional[h];S.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),h++}else if(A.isSpotLight){const S=i.spot[f];S.position.setFromMatrixPosition(A.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),f++}else if(A.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(A.matrixWorld),S.position.applyMatrix4(m),a.identity(),s.copy(A.matrixWorld),s.premultiply(m),a.extractRotation(s),S.halfWidth.set(A.width*.5,0,0),S.halfHeight.set(0,A.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(A.isPointLight){const S=i.point[u];S.position.setFromMatrixPosition(A.matrixWorld),S.position.applyMatrix4(m),u++}else if(A.isHemisphereLight){const S=i.hemi[E];S.direction.setFromMatrixPosition(A.matrixWorld),S.direction.transformDirection(m),E++}}}return{setup:l,setupView:c,state:i}}function $l(n){const e=new k0(n),t=[],i=[];function r(p){o.camera=p,t.length=0,i.length=0}function s(p){t.push(p)}function a(p){i.push(p)}function l(){e.setup(t)}function c(p){e.setupView(t,p)}const o={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:o,setupLights:l,setupLightsView:c,pushLight:s,pushShadow:a}}function G0(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let l;return a===void 0?(l=new $l(n),e.set(r,[l])):s>=a.length?(l=new $l(n),a.push(l)):l=a[s],l}function i(){e=new WeakMap}return{get:t,dispose:i}}const H0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,W0=`uniform sampler2D shadow_pass;
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
}`,X0=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],q0=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],Jl=new it,hr=new U,ua=new U;function Y0(n,e,t){let i=new Ro;const r=new Le,s=new Le,a=new ct,l=new nf,c=new rf,o={},p=t.maxTextureSize,h={[Xn]:Nt,[Nt]:Xn,[Qt]:Qt},u=new gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:H0,fragmentShader:W0}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ft;g.setAttribute("position",new Kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new _t(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cs;let d=this.type;this.render=function(T,w,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===Cu&&(Re("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=cs);const y=n.getRenderTarget(),H=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),N=n.state;N.setBlending(wn),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const B=d!==this.type;B&&w.traverse(function(W){W.material&&(Array.isArray(W.material)?W.material.forEach(z=>z.needsUpdate=!0):W.material.needsUpdate=!0)});for(let W=0,z=T.length;W<z;W++){const k=T[W],F=k.shadow;if(F===void 0){Re("WebGLShadowMap:",k,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const Q=F.getFrameExtents();r.multiply(Q),s.copy(F.mapSize),(r.x>p||r.y>p)&&(r.x>p&&(s.x=Math.floor(p/Q.x),r.x=s.x*Q.x,F.mapSize.x=s.x),r.y>p&&(s.y=Math.floor(p/Q.y),r.y=s.y*Q.y,F.mapSize.y=s.y));const j=n.state.buffers.depth.getReversed();if(F.camera._reversedDepth=j,F.map===null||B===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===pr){if(k.isPointLight){Re("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new dn(r.x,r.y,{format:Wi,type:Dn,minFilter:Rt,magFilter:Rt,generateMipmaps:!1}),F.map.texture.name=k.name+".shadowMap",F.map.depthTexture=new yr(r.x,r.y,tn),F.map.depthTexture.name=k.name+".shadowMapDepth",F.map.depthTexture.format=Ln,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Tt,F.map.depthTexture.magFilter=Tt}else k.isPointLight?(F.map=new Kc(r.x),F.map.depthTexture=new jh(r.x,pn)):(F.map=new dn(r.x,r.y),F.map.depthTexture=new yr(r.x,r.y,pn)),F.map.depthTexture.name=k.name+".shadowMap",F.map.depthTexture.format=Ln,this.type===cs?(F.map.depthTexture.compareFunction=j?yo:Eo,F.map.depthTexture.minFilter=Rt,F.map.depthTexture.magFilter=Rt):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Tt,F.map.depthTexture.magFilter=Tt);F.camera.updateProjectionMatrix()}const ce=F.map.isWebGLCubeRenderTarget?6:1;for(let pe=0;pe<ce;pe++){if(F.map.isWebGLCubeRenderTarget)n.setRenderTarget(F.map,pe),n.clear();else{pe===0&&(n.setRenderTarget(F.map),n.clear());const he=F.getViewport(pe);a.set(s.x*he.x,s.y*he.y,s.x*he.z,s.y*he.w),N.viewport(a)}if(k.isPointLight){const he=F.camera,Ne=F.matrix,ot=k.distance||he.far;ot!==he.far&&(he.far=ot,he.updateProjectionMatrix()),hr.setFromMatrixPosition(k.matrixWorld),he.position.copy(hr),ua.copy(he.position),ua.add(X0[pe]),he.up.copy(q0[pe]),he.lookAt(ua),he.updateMatrixWorld(),Ne.makeTranslation(-hr.x,-hr.y,-hr.z),Jl.multiplyMatrices(he.projectionMatrix,he.matrixWorldInverse),F._frustum.setFromProjectionMatrix(Jl,he.coordinateSystem,he.reversedDepth)}else F.updateMatrices(k);i=F.getFrustum(),S(w,x,F.camera,k,this.type)}F.isPointLightShadow!==!0&&this.type===pr&&M(F,x),F.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(y,H,C)};function M(T,w){const x=e.update(E);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new dn(r.x,r.y,{format:Wi,type:Dn})),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(w,null,x,u,E,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(w,null,x,f,E,null)}function A(T,w,x,y){let H=null;const C=x.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)H=C;else if(H=x.isPointLight===!0?c:l,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const N=H.uuid,B=w.uuid;let W=o[N];W===void 0&&(W={},o[N]=W);let z=W[B];z===void 0&&(z=H.clone(),W[B]=z,w.addEventListener("dispose",R)),H=z}if(H.visible=w.visible,H.wireframe=w.wireframe,y===pr?H.side=w.shadowSide!==null?w.shadowSide:w.side:H.side=w.shadowSide!==null?w.shadowSide:h[w.side],H.alphaMap=w.alphaMap,H.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,H.map=w.map,H.clipShadows=w.clipShadows,H.clippingPlanes=w.clippingPlanes,H.clipIntersection=w.clipIntersection,H.displacementMap=w.displacementMap,H.displacementScale=w.displacementScale,H.displacementBias=w.displacementBias,H.wireframeLinewidth=w.wireframeLinewidth,H.linewidth=w.linewidth,x.isPointLight===!0&&H.isMeshDistanceMaterial===!0){const N=n.properties.get(H);N.light=x}return H}function S(T,w,x,y,H){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&H===pr)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,T.matrixWorld);const B=e.update(T),W=T.material;if(Array.isArray(W)){const z=B.groups;for(let k=0,F=z.length;k<F;k++){const Q=z[k],j=W[Q.materialIndex];if(j&&j.visible){const ce=A(T,j,y,H);T.onBeforeShadow(n,T,w,x,B,ce,Q),n.renderBufferDirect(x,null,B,ce,T,Q),T.onAfterShadow(n,T,w,x,B,ce,Q)}}}else if(W.visible){const z=A(T,W,y,H);T.onBeforeShadow(n,T,w,x,B,z,null),n.renderBufferDirect(x,null,B,z,T,null),T.onAfterShadow(n,T,w,x,B,z,null)}}const N=T.children;for(let B=0,W=N.length;B<W;B++)S(N[B],w,x,y,H)}function R(T){T.target.removeEventListener("dispose",R);for(const x in o){const y=o[x],H=T.target.uuid;H in y&&(y[H].dispose(),delete y[H])}}}function K0(n,e){function t(){let D=!1;const re=new ct;let te=null;const de=new ct(0,0,0,0);return{setMask:function(J){te!==J&&!D&&(n.colorMask(J,J,J,J),te=J)},setLocked:function(J){D=J},setClear:function(J,X,_e,Ce,st){st===!0&&(J*=Ce,X*=Ce,_e*=Ce),re.set(J,X,_e,Ce),de.equals(re)===!1&&(n.clearColor(J,X,_e,Ce),de.copy(re))},reset:function(){D=!1,te=null,de.set(-1,0,0,0)}}}function i(){let D=!1,re=!1,te=null,de=null,J=null;return{setReversed:function(X){if(re!==X){const _e=e.get("EXT_clip_control");X?_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.ZERO_TO_ONE_EXT):_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.NEGATIVE_ONE_TO_ONE_EXT),re=X;const Ce=J;J=null,this.setClear(Ce)}},getReversed:function(){return re},setTest:function(X){X?ne(n.DEPTH_TEST):se(n.DEPTH_TEST)},setMask:function(X){te!==X&&!D&&(n.depthMask(X),te=X)},setFunc:function(X){if(re&&(X=lh[X]),de!==X){switch(X){case ga:n.depthFunc(n.NEVER);break;case _a:n.depthFunc(n.ALWAYS);break;case xa:n.depthFunc(n.LESS);break;case Gi:n.depthFunc(n.LEQUAL);break;case va:n.depthFunc(n.EQUAL);break;case Ma:n.depthFunc(n.GEQUAL);break;case Sa:n.depthFunc(n.GREATER);break;case Ea:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}de=X}},setLocked:function(X){D=X},setClear:function(X){J!==X&&(J=X,re&&(X=1-X),n.clearDepth(X))},reset:function(){D=!1,te=null,de=null,J=null,re=!1}}}function r(){let D=!1,re=null,te=null,de=null,J=null,X=null,_e=null,Ce=null,st=null;return{setTest:function(Ze){D||(Ze?ne(n.STENCIL_TEST):se(n.STENCIL_TEST))},setMask:function(Ze){re!==Ze&&!D&&(n.stencilMask(Ze),re=Ze)},setFunc:function(Ze,xn,vn){(te!==Ze||de!==xn||J!==vn)&&(n.stencilFunc(Ze,xn,vn),te=Ze,de=xn,J=vn)},setOp:function(Ze,xn,vn){(X!==Ze||_e!==xn||Ce!==vn)&&(n.stencilOp(Ze,xn,vn),X=Ze,_e=xn,Ce=vn)},setLocked:function(Ze){D=Ze},setClear:function(Ze){st!==Ze&&(n.clearStencil(Ze),st=Ze)},reset:function(){D=!1,re=null,te=null,de=null,J=null,X=null,_e=null,Ce=null,st=null}}}const s=new t,a=new i,l=new r,c=new WeakMap,o=new WeakMap;let p={},h={},u=new WeakMap,f=[],g=null,E=!1,m=null,d=null,M=null,A=null,S=null,R=null,T=null,w=new Ve(0,0,0),x=0,y=!1,H=null,C=null,N=null,B=null,W=null;const z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,F=0;const Q=n.getParameter(n.VERSION);Q.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(Q)[1]),k=F>=1):Q.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),k=F>=2);let j=null,ce={};const pe=n.getParameter(n.SCISSOR_BOX),he=n.getParameter(n.VIEWPORT),Ne=new ct().fromArray(pe),ot=new ct().fromArray(he);function at(D,re,te,de){const J=new Uint8Array(4),X=n.createTexture();n.bindTexture(D,X),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let _e=0;_e<te;_e++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(re,0,n.RGBA,1,1,de,0,n.RGBA,n.UNSIGNED_BYTE,J):n.texImage2D(re+_e,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,J);return X}const K={};K[n.TEXTURE_2D]=at(n.TEXTURE_2D,n.TEXTURE_2D,1),K[n.TEXTURE_CUBE_MAP]=at(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[n.TEXTURE_2D_ARRAY]=at(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),K[n.TEXTURE_3D]=at(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),l.setClear(0),ne(n.DEPTH_TEST),a.setFunc(Gi),Oe(!1),ut(jo),ne(n.CULL_FACE),Ke(wn);function ne(D){p[D]!==!0&&(n.enable(D),p[D]=!0)}function se(D){p[D]!==!1&&(n.disable(D),p[D]=!1)}function Ie(D,re){return h[D]!==re?(n.bindFramebuffer(D,re),h[D]=re,D===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=re),D===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=re),!0):!1}function be(D,re){let te=f,de=!1;if(D){te=u.get(re),te===void 0&&(te=[],u.set(re,te));const J=D.textures;if(te.length!==J.length||te[0]!==n.COLOR_ATTACHMENT0){for(let X=0,_e=J.length;X<_e;X++)te[X]=n.COLOR_ATTACHMENT0+X;te.length=J.length,de=!0}}else te[0]!==n.BACK&&(te[0]=n.BACK,de=!0);de&&n.drawBuffers(te)}function we(D){return g!==D?(n.useProgram(D),g=D,!0):!1}const Mt={[ni]:n.FUNC_ADD,[Du]:n.FUNC_SUBTRACT,[Lu]:n.FUNC_REVERSE_SUBTRACT};Mt[Iu]=n.MIN,Mt[Uu]=n.MAX;const He={[Nu]:n.ZERO,[Fu]:n.ONE,[Ou]:n.SRC_COLOR,[pa]:n.SRC_ALPHA,[Hu]:n.SRC_ALPHA_SATURATE,[ku]:n.DST_COLOR,[zu]:n.DST_ALPHA,[Bu]:n.ONE_MINUS_SRC_COLOR,[ma]:n.ONE_MINUS_SRC_ALPHA,[Gu]:n.ONE_MINUS_DST_COLOR,[Vu]:n.ONE_MINUS_DST_ALPHA,[Wu]:n.CONSTANT_COLOR,[Xu]:n.ONE_MINUS_CONSTANT_COLOR,[qu]:n.CONSTANT_ALPHA,[Yu]:n.ONE_MINUS_CONSTANT_ALPHA};function Ke(D,re,te,de,J,X,_e,Ce,st,Ze){if(D===wn){E===!0&&(se(n.BLEND),E=!1);return}if(E===!1&&(ne(n.BLEND),E=!0),D!==Pu){if(D!==m||Ze!==y){if((d!==ni||S!==ni)&&(n.blendEquation(n.FUNC_ADD),d=ni,S=ni),Ze)switch(D){case zi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $o:n.blendFunc(n.ONE,n.ONE);break;case Jo:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Qo:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ge("WebGLState: Invalid blending: ",D);break}else switch(D){case zi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $o:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Jo:Ge("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Qo:Ge("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ge("WebGLState: Invalid blending: ",D);break}M=null,A=null,R=null,T=null,w.set(0,0,0),x=0,m=D,y=Ze}return}J=J||re,X=X||te,_e=_e||de,(re!==d||J!==S)&&(n.blendEquationSeparate(Mt[re],Mt[J]),d=re,S=J),(te!==M||de!==A||X!==R||_e!==T)&&(n.blendFuncSeparate(He[te],He[de],He[X],He[_e]),M=te,A=de,R=X,T=_e),(Ce.equals(w)===!1||st!==x)&&(n.blendColor(Ce.r,Ce.g,Ce.b,st),w.copy(Ce),x=st),m=D,y=!1}function tt(D,re){D.side===Qt?se(n.CULL_FACE):ne(n.CULL_FACE);let te=D.side===Nt;re&&(te=!te),Oe(te),D.blending===zi&&D.transparent===!1?Ke(wn):Ke(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),s.setMask(D.colorWrite);const de=D.stencilWrite;l.setTest(de),de&&(l.setMask(D.stencilWriteMask),l.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),l.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),dt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ne(n.SAMPLE_ALPHA_TO_COVERAGE):se(n.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(D){H!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),H=D)}function ut(D){D!==wu?(ne(n.CULL_FACE),D!==C&&(D===jo?n.cullFace(n.BACK):D===Ru?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):se(n.CULL_FACE),C=D}function P(D){D!==N&&(k&&n.lineWidth(D),N=D)}function dt(D,re,te){D?(ne(n.POLYGON_OFFSET_FILL),(B!==re||W!==te)&&(B=re,W=te,a.getReversed()&&(re=-re),n.polygonOffset(re,te))):se(n.POLYGON_OFFSET_FILL)}function qe(D){D?ne(n.SCISSOR_TEST):se(n.SCISSOR_TEST)}function rt(D){D===void 0&&(D=n.TEXTURE0+z-1),j!==D&&(n.activeTexture(D),j=D)}function Me(D,re,te){te===void 0&&(j===null?te=n.TEXTURE0+z-1:te=j);let de=ce[te];de===void 0&&(de={type:void 0,texture:void 0},ce[te]=de),(de.type!==D||de.texture!==re)&&(j!==te&&(n.activeTexture(te),j=te),n.bindTexture(D,re||K[D]),de.type=D,de.texture=re)}function b(){const D=ce[j];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function _(){try{n.compressedTexImage2D(...arguments)}catch(D){Ge("WebGLState:",D)}}function L(){try{n.compressedTexImage3D(...arguments)}catch(D){Ge("WebGLState:",D)}}function Y(){try{n.texSubImage2D(...arguments)}catch(D){Ge("WebGLState:",D)}}function Z(){try{n.texSubImage3D(...arguments)}catch(D){Ge("WebGLState:",D)}}function q(){try{n.compressedTexSubImage2D(...arguments)}catch(D){Ge("WebGLState:",D)}}function me(){try{n.compressedTexSubImage3D(...arguments)}catch(D){Ge("WebGLState:",D)}}function ie(){try{n.texStorage2D(...arguments)}catch(D){Ge("WebGLState:",D)}}function Te(){try{n.texStorage3D(...arguments)}catch(D){Ge("WebGLState:",D)}}function Ae(){try{n.texImage2D(...arguments)}catch(D){Ge("WebGLState:",D)}}function $(){try{n.texImage3D(...arguments)}catch(D){Ge("WebGLState:",D)}}function ee(D){Ne.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),Ne.copy(D))}function ge(D){ot.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),ot.copy(D))}function xe(D,re){let te=o.get(re);te===void 0&&(te=new WeakMap,o.set(re,te));let de=te.get(D);de===void 0&&(de=n.getUniformBlockIndex(re,D.name),te.set(D,de))}function ue(D,re){const de=o.get(re).get(D);c.get(re)!==de&&(n.uniformBlockBinding(re,de,D.__bindingPointIndex),c.set(re,de))}function Be(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),p={},j=null,ce={},h={},u=new WeakMap,f=[],g=null,E=!1,m=null,d=null,M=null,A=null,S=null,R=null,T=null,w=new Ve(0,0,0),x=0,y=!1,H=null,C=null,N=null,B=null,W=null,Ne.set(0,0,n.canvas.width,n.canvas.height),ot.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),l.reset()}return{buffers:{color:s,depth:a,stencil:l},enable:ne,disable:se,bindFramebuffer:Ie,drawBuffers:be,useProgram:we,setBlending:Ke,setMaterial:tt,setFlipSided:Oe,setCullFace:ut,setLineWidth:P,setPolygonOffset:dt,setScissorTest:qe,activeTexture:rt,bindTexture:Me,unbindTexture:b,compressedTexImage2D:_,compressedTexImage3D:L,texImage2D:Ae,texImage3D:$,updateUBOMapping:xe,uniformBlockBinding:ue,texStorage2D:ie,texStorage3D:Te,texSubImage2D:Y,texSubImage3D:Z,compressedTexSubImage2D:q,compressedTexSubImage3D:me,scissor:ee,viewport:ge,reset:Be}}function Z0(n,e,t,i,r,s,a){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),o=new Le,p=new WeakMap;let h;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,_){return f?new OffscreenCanvas(b,_):_s("canvas")}function E(b,_,L){let Y=1;const Z=Me(b);if((Z.width>L||Z.height>L)&&(Y=L/Math.max(Z.width,Z.height)),Y<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const q=Math.floor(Y*Z.width),me=Math.floor(Y*Z.height);h===void 0&&(h=g(q,me));const ie=_?g(q,me):h;return ie.width=q,ie.height=me,ie.getContext("2d").drawImage(b,0,0,q,me),Re("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+q+"x"+me+")."),ie}else return"data"in b&&Re("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),b;return b}function m(b){return b.generateMipmaps}function d(b){n.generateMipmap(b)}function M(b){return b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?n.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function A(b,_,L,Y,Z=!1){if(b!==null){if(n[b]!==void 0)return n[b];Re("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let q=_;if(_===n.RED&&(L===n.FLOAT&&(q=n.R32F),L===n.HALF_FLOAT&&(q=n.R16F),L===n.UNSIGNED_BYTE&&(q=n.R8)),_===n.RED_INTEGER&&(L===n.UNSIGNED_BYTE&&(q=n.R8UI),L===n.UNSIGNED_SHORT&&(q=n.R16UI),L===n.UNSIGNED_INT&&(q=n.R32UI),L===n.BYTE&&(q=n.R8I),L===n.SHORT&&(q=n.R16I),L===n.INT&&(q=n.R32I)),_===n.RG&&(L===n.FLOAT&&(q=n.RG32F),L===n.HALF_FLOAT&&(q=n.RG16F),L===n.UNSIGNED_BYTE&&(q=n.RG8)),_===n.RG_INTEGER&&(L===n.UNSIGNED_BYTE&&(q=n.RG8UI),L===n.UNSIGNED_SHORT&&(q=n.RG16UI),L===n.UNSIGNED_INT&&(q=n.RG32UI),L===n.BYTE&&(q=n.RG8I),L===n.SHORT&&(q=n.RG16I),L===n.INT&&(q=n.RG32I)),_===n.RGB_INTEGER&&(L===n.UNSIGNED_BYTE&&(q=n.RGB8UI),L===n.UNSIGNED_SHORT&&(q=n.RGB16UI),L===n.UNSIGNED_INT&&(q=n.RGB32UI),L===n.BYTE&&(q=n.RGB8I),L===n.SHORT&&(q=n.RGB16I),L===n.INT&&(q=n.RGB32I)),_===n.RGBA_INTEGER&&(L===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),L===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),L===n.UNSIGNED_INT&&(q=n.RGBA32UI),L===n.BYTE&&(q=n.RGBA8I),L===n.SHORT&&(q=n.RGBA16I),L===n.INT&&(q=n.RGBA32I)),_===n.RGB&&(L===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),L===n.UNSIGNED_INT_10F_11F_11F_REV&&(q=n.R11F_G11F_B10F)),_===n.RGBA){const me=Z?gs:We.getTransfer(Y);L===n.FLOAT&&(q=n.RGBA32F),L===n.HALF_FLOAT&&(q=n.RGBA16F),L===n.UNSIGNED_BYTE&&(q=me===je?n.SRGB8_ALPHA8:n.RGBA8),L===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),L===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function S(b,_){let L;return b?_===null||_===pn||_===Sr?L=n.DEPTH24_STENCIL8:_===tn?L=n.DEPTH32F_STENCIL8:_===Mr&&(L=n.DEPTH24_STENCIL8,Re("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===pn||_===Sr?L=n.DEPTH_COMPONENT24:_===tn?L=n.DEPTH_COMPONENT32F:_===Mr&&(L=n.DEPTH_COMPONENT16),L}function R(b,_){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==Tt&&b.minFilter!==Rt?Math.log2(Math.max(_.width,_.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?_.mipmaps.length:1}function T(b){const _=b.target;_.removeEventListener("dispose",T),x(_),_.isVideoTexture&&p.delete(_)}function w(b){const _=b.target;_.removeEventListener("dispose",w),H(_)}function x(b){const _=i.get(b);if(_.__webglInit===void 0)return;const L=b.source,Y=u.get(L);if(Y){const Z=Y[_.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&y(b),Object.keys(Y).length===0&&u.delete(L)}i.remove(b)}function y(b){const _=i.get(b);n.deleteTexture(_.__webglTexture);const L=b.source,Y=u.get(L);delete Y[_.__cacheKey],a.memory.textures--}function H(b){const _=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(_.__webglFramebuffer[Y]))for(let Z=0;Z<_.__webglFramebuffer[Y].length;Z++)n.deleteFramebuffer(_.__webglFramebuffer[Y][Z]);else n.deleteFramebuffer(_.__webglFramebuffer[Y]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[Y])}else{if(Array.isArray(_.__webglFramebuffer))for(let Y=0;Y<_.__webglFramebuffer.length;Y++)n.deleteFramebuffer(_.__webglFramebuffer[Y]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Y=0;Y<_.__webglColorRenderbuffer.length;Y++)_.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[Y]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const L=b.textures;for(let Y=0,Z=L.length;Y<Z;Y++){const q=i.get(L[Y]);q.__webglTexture&&(n.deleteTexture(q.__webglTexture),a.memory.textures--),i.remove(L[Y])}i.remove(b)}let C=0;function N(){C=0}function B(){const b=C;return b>=r.maxTextures&&Re("WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),C+=1,b}function W(b){const _=[];return _.push(b.wrapS),_.push(b.wrapT),_.push(b.wrapR||0),_.push(b.magFilter),_.push(b.minFilter),_.push(b.anisotropy),_.push(b.internalFormat),_.push(b.format),_.push(b.type),_.push(b.generateMipmaps),_.push(b.premultiplyAlpha),_.push(b.flipY),_.push(b.unpackAlignment),_.push(b.colorSpace),_.join()}function z(b,_){const L=i.get(b);if(b.isVideoTexture&&qe(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&L.__version!==b.version){const Y=b.image;if(Y===null)Re("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Re("WebGLRenderer: Texture marked for update but image is incomplete");else{K(L,b,_);return}}else b.isExternalTexture&&(L.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,L.__webglTexture,n.TEXTURE0+_)}function k(b,_){const L=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&L.__version!==b.version){K(L,b,_);return}else b.isExternalTexture&&(L.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,L.__webglTexture,n.TEXTURE0+_)}function F(b,_){const L=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&L.__version!==b.version){K(L,b,_);return}t.bindTexture(n.TEXTURE_3D,L.__webglTexture,n.TEXTURE0+_)}function Q(b,_){const L=i.get(b);if(b.isCubeDepthTexture!==!0&&b.version>0&&L.__version!==b.version){ne(L,b,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+_)}const j={[ya]:n.REPEAT,[An]:n.CLAMP_TO_EDGE,[Ta]:n.MIRRORED_REPEAT},ce={[Tt]:n.NEAREST,[ju]:n.NEAREST_MIPMAP_NEAREST,[Dr]:n.NEAREST_MIPMAP_LINEAR,[Rt]:n.LINEAR,[Us]:n.LINEAR_MIPMAP_NEAREST,[si]:n.LINEAR_MIPMAP_LINEAR},pe={[Qu]:n.NEVER,[rh]:n.ALWAYS,[eh]:n.LESS,[Eo]:n.LEQUAL,[th]:n.EQUAL,[yo]:n.GEQUAL,[nh]:n.GREATER,[ih]:n.NOTEQUAL};function he(b,_){if(_.type===tn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Rt||_.magFilter===Us||_.magFilter===Dr||_.magFilter===si||_.minFilter===Rt||_.minFilter===Us||_.minFilter===Dr||_.minFilter===si)&&Re("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,j[_.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,j[_.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,j[_.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,ce[_.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,ce[_.minFilter]),_.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,pe[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Tt||_.minFilter!==Dr&&_.minFilter!==si||_.type===tn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const L=e.get("EXT_texture_filter_anisotropic");n.texParameterf(b,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Ne(b,_){let L=!1;b.__webglInit===void 0&&(b.__webglInit=!0,_.addEventListener("dispose",T));const Y=_.source;let Z=u.get(Y);Z===void 0&&(Z={},u.set(Y,Z));const q=W(_);if(q!==b.__cacheKey){Z[q]===void 0&&(Z[q]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,L=!0),Z[q].usedTimes++;const me=Z[b.__cacheKey];me!==void 0&&(Z[b.__cacheKey].usedTimes--,me.usedTimes===0&&y(_)),b.__cacheKey=q,b.__webglTexture=Z[q].texture}return L}function ot(b,_,L){return Math.floor(Math.floor(b/L)/_)}function at(b,_,L,Y){const q=b.updateRanges;if(q.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,L,Y,_.data);else{q.sort(($,ee)=>$.start-ee.start);let me=0;for(let $=1;$<q.length;$++){const ee=q[me],ge=q[$],xe=ee.start+ee.count,ue=ot(ge.start,_.width,4),Be=ot(ee.start,_.width,4);ge.start<=xe+1&&ue===Be&&ot(ge.start+ge.count-1,_.width,4)===ue?ee.count=Math.max(ee.count,ge.start+ge.count-ee.start):(++me,q[me]=ge)}q.length=me+1;const ie=n.getParameter(n.UNPACK_ROW_LENGTH),Te=n.getParameter(n.UNPACK_SKIP_PIXELS),Ae=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let $=0,ee=q.length;$<ee;$++){const ge=q[$],xe=Math.floor(ge.start/4),ue=Math.ceil(ge.count/4),Be=xe%_.width,D=Math.floor(xe/_.width),re=ue,te=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Be),n.pixelStorei(n.UNPACK_SKIP_ROWS,D),t.texSubImage2D(n.TEXTURE_2D,0,Be,D,re,te,L,Y,_.data)}b.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ie),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Te),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ae)}}function K(b,_,L){let Y=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Y=n.TEXTURE_3D);const Z=Ne(b,_),q=_.source;t.bindTexture(Y,b.__webglTexture,n.TEXTURE0+L);const me=i.get(q);if(q.version!==me.__version||Z===!0){t.activeTexture(n.TEXTURE0+L);const ie=We.getPrimaries(We.workingColorSpace),Te=_.colorSpace===Gn?null:We.getPrimaries(_.colorSpace),Ae=_.colorSpace===Gn||ie===Te?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let $=E(_.image,!1,r.maxTextureSize);$=rt(_,$);const ee=s.convert(_.format,_.colorSpace),ge=s.convert(_.type);let xe=A(_.internalFormat,ee,ge,_.colorSpace,_.isVideoTexture);he(Y,_);let ue;const Be=_.mipmaps,D=_.isVideoTexture!==!0,re=me.__version===void 0||Z===!0,te=q.dataReady,de=R(_,$);if(_.isDepthTexture)xe=S(_.format===ai,_.type),re&&(D?t.texStorage2D(n.TEXTURE_2D,1,xe,$.width,$.height):t.texImage2D(n.TEXTURE_2D,0,xe,$.width,$.height,0,ee,ge,null));else if(_.isDataTexture)if(Be.length>0){D&&re&&t.texStorage2D(n.TEXTURE_2D,de,xe,Be[0].width,Be[0].height);for(let J=0,X=Be.length;J<X;J++)ue=Be[J],D?te&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,ue.width,ue.height,ee,ge,ue.data):t.texImage2D(n.TEXTURE_2D,J,xe,ue.width,ue.height,0,ee,ge,ue.data);_.generateMipmaps=!1}else D?(re&&t.texStorage2D(n.TEXTURE_2D,de,xe,$.width,$.height),te&&at(_,$,ee,ge)):t.texImage2D(n.TEXTURE_2D,0,xe,$.width,$.height,0,ee,ge,$.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){D&&re&&t.texStorage3D(n.TEXTURE_2D_ARRAY,de,xe,Be[0].width,Be[0].height,$.depth);for(let J=0,X=Be.length;J<X;J++)if(ue=Be[J],_.format!==nn)if(ee!==null)if(D){if(te)if(_.layerUpdates.size>0){const _e=Cl(ue.width,ue.height,_.format,_.type);for(const Ce of _.layerUpdates){const st=ue.data.subarray(Ce*_e/ue.data.BYTES_PER_ELEMENT,(Ce+1)*_e/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,Ce,ue.width,ue.height,1,ee,st)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,ue.width,ue.height,$.depth,ee,ue.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,J,xe,ue.width,ue.height,$.depth,0,ue.data,0,0);else Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?te&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,ue.width,ue.height,$.depth,ee,ge,ue.data):t.texImage3D(n.TEXTURE_2D_ARRAY,J,xe,ue.width,ue.height,$.depth,0,ee,ge,ue.data)}else{D&&re&&t.texStorage2D(n.TEXTURE_2D,de,xe,Be[0].width,Be[0].height);for(let J=0,X=Be.length;J<X;J++)ue=Be[J],_.format!==nn?ee!==null?D?te&&t.compressedTexSubImage2D(n.TEXTURE_2D,J,0,0,ue.width,ue.height,ee,ue.data):t.compressedTexImage2D(n.TEXTURE_2D,J,xe,ue.width,ue.height,0,ue.data):Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?te&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,ue.width,ue.height,ee,ge,ue.data):t.texImage2D(n.TEXTURE_2D,J,xe,ue.width,ue.height,0,ee,ge,ue.data)}else if(_.isDataArrayTexture)if(D){if(re&&t.texStorage3D(n.TEXTURE_2D_ARRAY,de,xe,$.width,$.height,$.depth),te)if(_.layerUpdates.size>0){const J=Cl($.width,$.height,_.format,_.type);for(const X of _.layerUpdates){const _e=$.data.subarray(X*J/$.data.BYTES_PER_ELEMENT,(X+1)*J/$.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,X,$.width,$.height,1,ee,ge,_e)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,ee,ge,$.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,xe,$.width,$.height,$.depth,0,ee,ge,$.data);else if(_.isData3DTexture)D?(re&&t.texStorage3D(n.TEXTURE_3D,de,xe,$.width,$.height,$.depth),te&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,ee,ge,$.data)):t.texImage3D(n.TEXTURE_3D,0,xe,$.width,$.height,$.depth,0,ee,ge,$.data);else if(_.isFramebufferTexture){if(re)if(D)t.texStorage2D(n.TEXTURE_2D,de,xe,$.width,$.height);else{let J=$.width,X=$.height;for(let _e=0;_e<de;_e++)t.texImage2D(n.TEXTURE_2D,_e,xe,J,X,0,ee,ge,null),J>>=1,X>>=1}}else if(Be.length>0){if(D&&re){const J=Me(Be[0]);t.texStorage2D(n.TEXTURE_2D,de,xe,J.width,J.height)}for(let J=0,X=Be.length;J<X;J++)ue=Be[J],D?te&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,ee,ge,ue):t.texImage2D(n.TEXTURE_2D,J,xe,ee,ge,ue);_.generateMipmaps=!1}else if(D){if(re){const J=Me($);t.texStorage2D(n.TEXTURE_2D,de,xe,J.width,J.height)}te&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ee,ge,$)}else t.texImage2D(n.TEXTURE_2D,0,xe,ee,ge,$);m(_)&&d(Y),me.__version=q.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function ne(b,_,L){if(_.image.length!==6)return;const Y=Ne(b,_),Z=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+L);const q=i.get(Z);if(Z.version!==q.__version||Y===!0){t.activeTexture(n.TEXTURE0+L);const me=We.getPrimaries(We.workingColorSpace),ie=_.colorSpace===Gn?null:We.getPrimaries(_.colorSpace),Te=_.colorSpace===Gn||me===ie?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const Ae=_.isCompressedTexture||_.image[0].isCompressedTexture,$=_.image[0]&&_.image[0].isDataTexture,ee=[];for(let X=0;X<6;X++)!Ae&&!$?ee[X]=E(_.image[X],!0,r.maxCubemapSize):ee[X]=$?_.image[X].image:_.image[X],ee[X]=rt(_,ee[X]);const ge=ee[0],xe=s.convert(_.format,_.colorSpace),ue=s.convert(_.type),Be=A(_.internalFormat,xe,ue,_.colorSpace),D=_.isVideoTexture!==!0,re=q.__version===void 0||Y===!0,te=Z.dataReady;let de=R(_,ge);he(n.TEXTURE_CUBE_MAP,_);let J;if(Ae){D&&re&&t.texStorage2D(n.TEXTURE_CUBE_MAP,de,Be,ge.width,ge.height);for(let X=0;X<6;X++){J=ee[X].mipmaps;for(let _e=0;_e<J.length;_e++){const Ce=J[_e];_.format!==nn?xe!==null?D?te&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,_e,0,0,Ce.width,Ce.height,xe,Ce.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,_e,Be,Ce.width,Ce.height,0,Ce.data):Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,_e,0,0,Ce.width,Ce.height,xe,ue,Ce.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,_e,Be,Ce.width,Ce.height,0,xe,ue,Ce.data)}}}else{if(J=_.mipmaps,D&&re){J.length>0&&de++;const X=Me(ee[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,de,Be,X.width,X.height)}for(let X=0;X<6;X++)if($){D?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,ee[X].width,ee[X].height,xe,ue,ee[X].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Be,ee[X].width,ee[X].height,0,xe,ue,ee[X].data);for(let _e=0;_e<J.length;_e++){const st=J[_e].image[X].image;D?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,_e+1,0,0,st.width,st.height,xe,ue,st.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,_e+1,Be,st.width,st.height,0,xe,ue,st.data)}}else{D?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,xe,ue,ee[X]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Be,xe,ue,ee[X]);for(let _e=0;_e<J.length;_e++){const Ce=J[_e];D?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,_e+1,0,0,xe,ue,Ce.image[X]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,_e+1,Be,xe,ue,Ce.image[X])}}}m(_)&&d(n.TEXTURE_CUBE_MAP),q.__version=Z.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function se(b,_,L,Y,Z,q){const me=s.convert(L.format,L.colorSpace),ie=s.convert(L.type),Te=A(L.internalFormat,me,ie,L.colorSpace),Ae=i.get(_),$=i.get(L);if($.__renderTarget=_,!Ae.__hasExternalTextures){const ee=Math.max(1,_.width>>q),ge=Math.max(1,_.height>>q);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?t.texImage3D(Z,q,Te,ee,ge,_.depth,0,me,ie,null):t.texImage2D(Z,q,Te,ee,ge,0,me,ie,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),dt(_)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,Z,$.__webglTexture,0,P(_)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,Z,$.__webglTexture,q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ie(b,_,L){if(n.bindRenderbuffer(n.RENDERBUFFER,b),_.depthBuffer){const Y=_.depthTexture,Z=Y&&Y.isDepthTexture?Y.type:null,q=S(_.stencilBuffer,Z),me=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;dt(_)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,P(_),q,_.width,_.height):L?n.renderbufferStorageMultisample(n.RENDERBUFFER,P(_),q,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,q,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,me,n.RENDERBUFFER,b)}else{const Y=_.textures;for(let Z=0;Z<Y.length;Z++){const q=Y[Z],me=s.convert(q.format,q.colorSpace),ie=s.convert(q.type),Te=A(q.internalFormat,me,ie,q.colorSpace);dt(_)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,P(_),Te,_.width,_.height):L?n.renderbufferStorageMultisample(n.RENDERBUFFER,P(_),Te,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Te,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function be(b,_,L){const Y=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=i.get(_.depthTexture);if(Z.__renderTarget=_,(!Z.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Y){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,_.depthTexture.addEventListener("dispose",T)),Z.__webglTexture===void 0){Z.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),he(n.TEXTURE_CUBE_MAP,_.depthTexture);const Ae=s.convert(_.depthTexture.format),$=s.convert(_.depthTexture.type);let ee;_.depthTexture.format===Ln?ee=n.DEPTH_COMPONENT24:_.depthTexture.format===ai&&(ee=n.DEPTH24_STENCIL8);for(let ge=0;ge<6;ge++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,ee,_.width,_.height,0,Ae,$,null)}}else z(_.depthTexture,0);const q=Z.__webglTexture,me=P(_),ie=Y?n.TEXTURE_CUBE_MAP_POSITIVE_X+L:n.TEXTURE_2D,Te=_.depthTexture.format===ai?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(_.depthTexture.format===Ln)dt(_)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Te,ie,q,0,me):n.framebufferTexture2D(n.FRAMEBUFFER,Te,ie,q,0);else if(_.depthTexture.format===ai)dt(_)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Te,ie,q,0,me):n.framebufferTexture2D(n.FRAMEBUFFER,Te,ie,q,0);else throw new Error("Unknown depthTexture format")}function we(b){const _=i.get(b),L=b.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==b.depthTexture){const Y=b.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Y){const Z=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Y.removeEventListener("dispose",Z)};Y.addEventListener("dispose",Z),_.__depthDisposeCallback=Z}_.__boundDepthTexture=Y}if(b.depthTexture&&!_.__autoAllocateDepthBuffer)if(L)for(let Y=0;Y<6;Y++)be(_.__webglFramebuffer[Y],b,Y);else{const Y=b.texture.mipmaps;Y&&Y.length>0?be(_.__webglFramebuffer[0],b,0):be(_.__webglFramebuffer,b,0)}else if(L){_.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[Y]),_.__webglDepthbuffer[Y]===void 0)_.__webglDepthbuffer[Y]=n.createRenderbuffer(),Ie(_.__webglDepthbuffer[Y],b,!1);else{const Z=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=_.__webglDepthbuffer[Y];n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,q)}}else{const Y=b.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),Ie(_.__webglDepthbuffer,b,!1);else{const Z=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,q)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Mt(b,_,L){const Y=i.get(b);_!==void 0&&se(Y.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),L!==void 0&&we(b)}function He(b){const _=b.texture,L=i.get(b),Y=i.get(_);b.addEventListener("dispose",w);const Z=b.textures,q=b.isWebGLCubeRenderTarget===!0,me=Z.length>1;if(me||(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=_.version,a.memory.textures++),q){L.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(_.mipmaps&&_.mipmaps.length>0){L.__webglFramebuffer[ie]=[];for(let Te=0;Te<_.mipmaps.length;Te++)L.__webglFramebuffer[ie][Te]=n.createFramebuffer()}else L.__webglFramebuffer[ie]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){L.__webglFramebuffer=[];for(let ie=0;ie<_.mipmaps.length;ie++)L.__webglFramebuffer[ie]=n.createFramebuffer()}else L.__webglFramebuffer=n.createFramebuffer();if(me)for(let ie=0,Te=Z.length;ie<Te;ie++){const Ae=i.get(Z[ie]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=n.createTexture(),a.memory.textures++)}if(b.samples>0&&dt(b)===!1){L.__webglMultisampledFramebuffer=n.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let ie=0;ie<Z.length;ie++){const Te=Z[ie];L.__webglColorRenderbuffer[ie]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,L.__webglColorRenderbuffer[ie]);const Ae=s.convert(Te.format,Te.colorSpace),$=s.convert(Te.type),ee=A(Te.internalFormat,Ae,$,Te.colorSpace,b.isXRRenderTarget===!0),ge=P(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,ge,ee,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ie,n.RENDERBUFFER,L.__webglColorRenderbuffer[ie])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(L.__webglDepthRenderbuffer=n.createRenderbuffer(),Ie(L.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(q){t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),he(n.TEXTURE_CUBE_MAP,_);for(let ie=0;ie<6;ie++)if(_.mipmaps&&_.mipmaps.length>0)for(let Te=0;Te<_.mipmaps.length;Te++)se(L.__webglFramebuffer[ie][Te],b,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Te);else se(L.__webglFramebuffer[ie],b,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);m(_)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(me){for(let ie=0,Te=Z.length;ie<Te;ie++){const Ae=Z[ie],$=i.get(Ae);let ee=n.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ee=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ee,$.__webglTexture),he(ee,Ae),se(L.__webglFramebuffer,b,Ae,n.COLOR_ATTACHMENT0+ie,ee,0),m(Ae)&&d(ee)}t.unbindTexture()}else{let ie=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ie=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ie,Y.__webglTexture),he(ie,_),_.mipmaps&&_.mipmaps.length>0)for(let Te=0;Te<_.mipmaps.length;Te++)se(L.__webglFramebuffer[Te],b,_,n.COLOR_ATTACHMENT0,ie,Te);else se(L.__webglFramebuffer,b,_,n.COLOR_ATTACHMENT0,ie,0);m(_)&&d(ie),t.unbindTexture()}b.depthBuffer&&we(b)}function Ke(b){const _=b.textures;for(let L=0,Y=_.length;L<Y;L++){const Z=_[L];if(m(Z)){const q=M(b),me=i.get(Z).__webglTexture;t.bindTexture(q,me),d(q),t.unbindTexture()}}}const tt=[],Oe=[];function ut(b){if(b.samples>0){if(dt(b)===!1){const _=b.textures,L=b.width,Y=b.height;let Z=n.COLOR_BUFFER_BIT;const q=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,me=i.get(b),ie=_.length>1;if(ie)for(let Ae=0;Ae<_.length;Ae++)t.bindFramebuffer(n.FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer);const Te=b.texture.mipmaps;Te&&Te.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let Ae=0;Ae<_.length;Ae++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),ie){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,me.__webglColorRenderbuffer[Ae]);const $=i.get(_[Ae]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,$,0)}n.blitFramebuffer(0,0,L,Y,0,0,L,Y,Z,n.NEAREST),c===!0&&(tt.length=0,Oe.length=0,tt.push(n.COLOR_ATTACHMENT0+Ae),b.depthBuffer&&b.resolveDepthBuffer===!1&&(tt.push(q),Oe.push(q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Oe)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,tt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ie)for(let Ae=0;Ae<_.length;Ae++){t.bindFramebuffer(n.FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,me.__webglColorRenderbuffer[Ae]);const $=i.get(_[Ae]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,$,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){const _=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function P(b){return Math.min(r.maxSamples,b.samples)}function dt(b){const _=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function qe(b){const _=a.render.frame;p.get(b)!==_&&(p.set(b,_),b.update())}function rt(b,_){const L=b.colorSpace,Y=b.format,Z=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||L!==Xi&&L!==Gn&&(We.getTransfer(L)===je?(Y!==nn||Z!==kt)&&Re("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ge("WebGLTextures: Unsupported texture color space:",L)),_}function Me(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(o.width=b.naturalWidth||b.width,o.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(o.width=b.displayWidth,o.height=b.displayHeight):(o.width=b.width,o.height=b.height),o}this.allocateTextureUnit=B,this.resetTextureUnits=N,this.setTexture2D=z,this.setTexture2DArray=k,this.setTexture3D=F,this.setTextureCube=Q,this.rebindTextures=Mt,this.setupRenderTarget=He,this.updateRenderTargetMipmap=Ke,this.updateMultisampleRenderTarget=ut,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=se,this.useMultisampledRTT=dt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function j0(n,e){function t(i,r=Gn){let s;const a=We.getTransfer(r);if(i===kt)return n.UNSIGNED_BYTE;if(i===go)return n.UNSIGNED_SHORT_4_4_4_4;if(i===_o)return n.UNSIGNED_SHORT_5_5_5_1;if(i===bc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Ac)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===yc)return n.BYTE;if(i===Tc)return n.SHORT;if(i===Mr)return n.UNSIGNED_SHORT;if(i===mo)return n.INT;if(i===pn)return n.UNSIGNED_INT;if(i===tn)return n.FLOAT;if(i===Dn)return n.HALF_FLOAT;if(i===wc)return n.ALPHA;if(i===Rc)return n.RGB;if(i===nn)return n.RGBA;if(i===Ln)return n.DEPTH_COMPONENT;if(i===ai)return n.DEPTH_STENCIL;if(i===xo)return n.RED;if(i===vo)return n.RED_INTEGER;if(i===Wi)return n.RG;if(i===Mo)return n.RG_INTEGER;if(i===So)return n.RGBA_INTEGER;if(i===us||i===hs||i===fs||i===ds)if(a===je)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===us)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===hs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===fs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ds)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===us)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===hs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===fs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ds)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ba||i===Aa||i===wa||i===Ra)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ba)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Aa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===wa)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ra)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ca||i===Pa||i===Da||i===La||i===Ia||i===Ua||i===Na)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ca||i===Pa)return a===je?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Da)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===La)return s.COMPRESSED_R11_EAC;if(i===Ia)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Ua)return s.COMPRESSED_RG11_EAC;if(i===Na)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Fa||i===Oa||i===Ba||i===za||i===Va||i===ka||i===Ga||i===Ha||i===Wa||i===Xa||i===qa||i===Ya||i===Ka||i===Za)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Fa)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Oa)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ba)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===za)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Va)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ka)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ga)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ha)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Wa)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Xa)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===qa)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ya)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ka)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Za)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ja||i===$a||i===Ja)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ja)return a===je?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===$a)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ja)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Qa||i===eo||i===to||i===no)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Qa)return s.COMPRESSED_RED_RGTC1_EXT;if(i===eo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===to)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===no)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Sr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const $0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,J0=`
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

}`;class Q0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Hc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new gn({vertexShader:$0,fragmentShader:J0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new _t(new wr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class eg extends Zi{constructor(e,t){super();const i=this;let r=null,s=1,a=null,l="local-floor",c=1,o=null,p=null,h=null,u=null,f=null,g=null;const E=typeof XRWebGLBinding<"u",m=new Q0,d={},M=t.getContextAttributes();let A=null,S=null;const R=[],T=[],w=new Le;let x=null;const y=new Wt;y.viewport=new ct;const H=new Wt;H.viewport=new ct;const C=[y,H],N=new hf;let B=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ne=R[K];return ne===void 0&&(ne=new Vs,R[K]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(K){let ne=R[K];return ne===void 0&&(ne=new Vs,R[K]=ne),ne.getGripSpace()},this.getHand=function(K){let ne=R[K];return ne===void 0&&(ne=new Vs,R[K]=ne),ne.getHandSpace()};function z(K){const ne=T.indexOf(K.inputSource);if(ne===-1)return;const se=R[ne];se!==void 0&&(se.update(K.inputSource,K.frame,o||a),se.dispatchEvent({type:K.type,data:K.inputSource}))}function k(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",F);for(let K=0;K<R.length;K++){const ne=T[K];ne!==null&&(T[K]=null,R[K].disconnect(ne))}B=null,W=null,m.reset();for(const K in d)delete d[K];e.setRenderTarget(A),f=null,u=null,h=null,r=null,S=null,at.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&Re("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){l=K,i.isPresenting===!0&&Re("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o||a},this.setReferenceSpace=function(K){o=K},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return h===null&&E&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(A=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",k),r.addEventListener("inputsourceschange",F),M.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(w),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,Ie=null,be=null;M.depth&&(be=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=M.stencil?ai:Ln,Ie=M.stencil?Sr:pn);const we={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:s};h=this.getBinding(),u=h.createProjectionLayer(we),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),S=new dn(u.textureWidth,u.textureHeight,{format:nn,type:kt,depthTexture:new yr(u.textureWidth,u.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const se={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,se),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new dn(f.framebufferWidth,f.framebufferHeight,{format:nn,type:kt,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),o=null,a=await r.requestReferenceSpace(l),at.setContext(r),at.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function F(K){for(let ne=0;ne<K.removed.length;ne++){const se=K.removed[ne],Ie=T.indexOf(se);Ie>=0&&(T[Ie]=null,R[Ie].disconnect(se))}for(let ne=0;ne<K.added.length;ne++){const se=K.added[ne];let Ie=T.indexOf(se);if(Ie===-1){for(let we=0;we<R.length;we++)if(we>=T.length){T.push(se),Ie=we;break}else if(T[we]===null){T[we]=se,Ie=we;break}if(Ie===-1)break}const be=R[Ie];be&&be.connect(se)}}const Q=new U,j=new U;function ce(K,ne,se){Q.setFromMatrixPosition(ne.matrixWorld),j.setFromMatrixPosition(se.matrixWorld);const Ie=Q.distanceTo(j),be=ne.projectionMatrix.elements,we=se.projectionMatrix.elements,Mt=be[14]/(be[10]-1),He=be[14]/(be[10]+1),Ke=(be[9]+1)/be[5],tt=(be[9]-1)/be[5],Oe=(be[8]-1)/be[0],ut=(we[8]+1)/we[0],P=Mt*Oe,dt=Mt*ut,qe=Ie/(-Oe+ut),rt=qe*-Oe;if(ne.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(rt),K.translateZ(qe),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),be[10]===-1)K.projectionMatrix.copy(ne.projectionMatrix),K.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const Me=Mt+qe,b=He+qe,_=P-rt,L=dt+(Ie-rt),Y=Ke*He/b*Me,Z=tt*He/b*Me;K.projectionMatrix.makePerspective(_,L,Y,Z,Me,b),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function pe(K,ne){ne===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ne.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let ne=K.near,se=K.far;m.texture!==null&&(m.depthNear>0&&(ne=m.depthNear),m.depthFar>0&&(se=m.depthFar)),N.near=H.near=y.near=ne,N.far=H.far=y.far=se,(B!==N.near||W!==N.far)&&(r.updateRenderState({depthNear:N.near,depthFar:N.far}),B=N.near,W=N.far),N.layers.mask=K.layers.mask|6,y.layers.mask=N.layers.mask&-5,H.layers.mask=N.layers.mask&-3;const Ie=K.parent,be=N.cameras;pe(N,Ie);for(let we=0;we<be.length;we++)pe(be[we],Ie);be.length===2?ce(N,y,H):N.projectionMatrix.copy(y.projectionMatrix),he(K,N,Ie)};function he(K,ne,se){se===null?K.matrix.copy(ne.matrixWorld):(K.matrix.copy(se.matrixWorld),K.matrix.invert(),K.matrix.multiply(ne.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ne.projectionMatrix),K.projectionMatrixInverse.copy(ne.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=qi*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(K){c=K,u!==null&&(u.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(K){return d[K]};let Ne=null;function ot(K,ne){if(p=ne.getViewerPose(o||a),g=ne,p!==null){const se=p.views;f!==null&&(e.setRenderTargetFramebuffer(S,f.framebuffer),e.setRenderTarget(S));let Ie=!1;se.length!==N.cameras.length&&(N.cameras.length=0,Ie=!0);for(let He=0;He<se.length;He++){const Ke=se[He];let tt=null;if(f!==null)tt=f.getViewport(Ke);else{const ut=h.getViewSubImage(u,Ke);tt=ut.viewport,He===0&&(e.setRenderTargetTextures(S,ut.colorTexture,ut.depthStencilTexture),e.setRenderTarget(S))}let Oe=C[He];Oe===void 0&&(Oe=new Wt,Oe.layers.enable(He),Oe.viewport=new ct,C[He]=Oe),Oe.matrix.fromArray(Ke.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray(Ke.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set(tt.x,tt.y,tt.width,tt.height),He===0&&(N.matrix.copy(Oe.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Ie===!0&&N.cameras.push(Oe)}const be=r.enabledFeatures;if(be&&be.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&E){h=i.getBinding();const He=h.getDepthInformation(se[0]);He&&He.isValid&&He.texture&&m.init(He,r.renderState)}if(be&&be.includes("camera-access")&&E){e.state.unbindTexture(),h=i.getBinding();for(let He=0;He<se.length;He++){const Ke=se[He].camera;if(Ke){let tt=d[Ke];tt||(tt=new Hc,d[Ke]=tt);const Oe=h.getCameraImage(Ke);tt.sourceTexture=Oe}}}}for(let se=0;se<R.length;se++){const Ie=T[se],be=R[se];Ie!==null&&be!==void 0&&be.update(Ie,ne,o||a)}Ne&&Ne(K,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),g=null}const at=new Yc;at.setAnimationLoop(ot),this.setAnimationLoop=function(K){Ne=K},this.dispose=function(){}}}const ti=new mn,tg=new it;function ng(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Wc(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,M,A,S){d.isMeshBasicMaterial?s(m,d):d.isMeshLambertMaterial?(s(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(s(m,d),h(m,d)):d.isMeshPhongMaterial?(s(m,d),p(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(s(m,d),u(m,d),d.isMeshPhysicalMaterial&&f(m,d,S)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),E(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&l(m,d)):d.isPointsMaterial?c(m,d,M,A):d.isSpriteMaterial?o(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Nt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Nt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const M=e.get(d),A=M.envMap,S=M.envMapRotation;A&&(m.envMap.value=A,ti.copy(S),ti.x*=-1,ti.y*=-1,ti.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(ti.y*=-1,ti.z*=-1),m.envMapRotation.value.setFromMatrix4(tg.makeRotationFromEuler(ti)),m.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function l(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,M,A){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*M,m.scale.value=A*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function p(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function u(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function f(m,d,M){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Nt&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function E(m,d){const M=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function ig(n,e,t,i){let r={},s={},a=[];const l=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,A){const S=A.program;i.uniformBlockBinding(M,S)}function o(M,A){let S=r[M.id];S===void 0&&(g(M),S=p(M),r[M.id]=S,M.addEventListener("dispose",m));const R=A.program;i.updateUBOMapping(M,R);const T=e.render.frame;s[M.id]!==T&&(u(M),s[M.id]=T)}function p(M){const A=h();M.__bindingPointIndex=A;const S=n.createBuffer(),R=M.__size,T=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,R,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,A,S),S}function h(){for(let M=0;M<l;M++)if(a.indexOf(M)===-1)return a.push(M),M;return Ge("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){const A=r[M.id],S=M.uniforms,R=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let T=0,w=S.length;T<w;T++){const x=Array.isArray(S[T])?S[T]:[S[T]];for(let y=0,H=x.length;y<H;y++){const C=x[y];if(f(C,T,y,R)===!0){const N=C.__offset,B=Array.isArray(C.value)?C.value:[C.value];let W=0;for(let z=0;z<B.length;z++){const k=B[z],F=E(k);typeof k=="number"||typeof k=="boolean"?(C.__data[0]=k,n.bufferSubData(n.UNIFORM_BUFFER,N+W,C.__data)):k.isMatrix3?(C.__data[0]=k.elements[0],C.__data[1]=k.elements[1],C.__data[2]=k.elements[2],C.__data[3]=0,C.__data[4]=k.elements[3],C.__data[5]=k.elements[4],C.__data[6]=k.elements[5],C.__data[7]=0,C.__data[8]=k.elements[6],C.__data[9]=k.elements[7],C.__data[10]=k.elements[8],C.__data[11]=0):(k.toArray(C.__data,W),W+=F.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(M,A,S,R){const T=M.value,w=A+"_"+S;if(R[w]===void 0)return typeof T=="number"||typeof T=="boolean"?R[w]=T:R[w]=T.clone(),!0;{const x=R[w];if(typeof T=="number"||typeof T=="boolean"){if(x!==T)return R[w]=T,!0}else if(x.equals(T)===!1)return x.copy(T),!0}return!1}function g(M){const A=M.uniforms;let S=0;const R=16;for(let w=0,x=A.length;w<x;w++){const y=Array.isArray(A[w])?A[w]:[A[w]];for(let H=0,C=y.length;H<C;H++){const N=y[H],B=Array.isArray(N.value)?N.value:[N.value];for(let W=0,z=B.length;W<z;W++){const k=B[W],F=E(k),Q=S%R,j=Q%F.boundary,ce=Q+j;S+=j,ce!==0&&R-ce<F.storage&&(S+=R-ce),N.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=S,S+=F.storage}}}const T=S%R;return T>0&&(S+=R-T),M.__size=S,M.__cache={},this}function E(M){const A={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(A.boundary=4,A.storage=4):M.isVector2?(A.boundary=8,A.storage=8):M.isVector3||M.isColor?(A.boundary=16,A.storage=12):M.isVector4?(A.boundary=16,A.storage=16):M.isMatrix3?(A.boundary=48,A.storage=48):M.isMatrix4?(A.boundary=64,A.storage=64):M.isTexture?Re("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Re("WebGLRenderer: Unsupported uniform value type.",M),A}function m(M){const A=M.target;A.removeEventListener("dispose",m);const S=a.indexOf(A.__bindingPointIndex);a.splice(S,1),n.deleteBuffer(r[A.id]),delete r[A.id],delete s[A.id]}function d(){for(const M in r)n.deleteBuffer(r[M]);a=[],r={},s={}}return{bind:c,update:o,dispose:d}}const rg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let an=null;function sg(){return an===null&&(an=new zc(rg,16,16,Wi,Dn),an.name="DFG_LUT",an.minFilter=Rt,an.magFilter=Rt,an.wrapS=An,an.wrapT=An,an.generateMipmaps=!1,an.needsUpdate=!0),an}class ag{constructor(e={}){const{canvas:t=ah(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:o=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:u=!1,outputBufferType:f=kt}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const E=f,m=new Set([So,Mo,vo]),d=new Set([kt,pn,Mr,Sr,go,_o]),M=new Uint32Array(4),A=new Int32Array(4);let S=null,R=null;const T=[],w=[];let x=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let H=!1;this._outputColorSpace=Ut;let C=0,N=0,B=null,W=-1,z=null;const k=new ct,F=new ct;let Q=null;const j=new Ve(0);let ce=0,pe=t.width,he=t.height,Ne=1,ot=null,at=null;const K=new ct(0,0,pe,he),ne=new ct(0,0,pe,he);let se=!1;const Ie=new Ro;let be=!1,we=!1;const Mt=new it,He=new U,Ke=new ct,tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Oe=!1;function ut(){return B===null?Ne:1}let P=i;function dt(v,I){return t.getContext(v,I)}try{const v={alpha:!0,depth:r,stencil:s,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:o,powerPreference:p,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${fo}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",Ce,!1),t.addEventListener("webglcontextcreationerror",st,!1),P===null){const I="webgl2";if(P=dt(I,v),P===null)throw dt(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw Ge("WebGLRenderer: "+v.message),v}let qe,rt,Me,b,_,L,Y,Z,q,me,ie,Te,Ae,$,ee,ge,xe,ue,Be,D,re,te,de;function J(){qe=new am(P),qe.init(),re=new j0(P,qe),rt=new Jp(P,qe,e,re),Me=new K0(P,qe),rt.reversedDepthBuffer&&u&&Me.buffers.depth.setReversed(!0),b=new cm(P),_=new U0,L=new Z0(P,qe,Me,_,rt,re,b),Y=new sm(y),Z=new pf(P),te=new jp(P,Z),q=new om(P,Z,b,te),me=new hm(P,q,Z,te,b),ue=new um(P,rt,L),ee=new Qp(_),ie=new I0(y,Y,qe,rt,te,ee),Te=new ng(y,_),Ae=new F0,$=new G0(qe),xe=new Zp(y,Y,Me,me,g,c),ge=new Y0(y,me,rt),de=new ig(P,b,rt,Me),Be=new $p(P,qe,b),D=new lm(P,qe,b),b.programs=ie.programs,y.capabilities=rt,y.extensions=qe,y.properties=_,y.renderLists=Ae,y.shadowMap=ge,y.state=Me,y.info=b}J(),E!==kt&&(x=new dm(E,t.width,t.height,r,s));const X=new eg(y,P);this.xr=X,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const v=qe.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=qe.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return Ne},this.setPixelRatio=function(v){v!==void 0&&(Ne=v,this.setSize(pe,he,!1))},this.getSize=function(v){return v.set(pe,he)},this.setSize=function(v,I,G=!0){if(X.isPresenting){Re("WebGLRenderer: Can't change size while VR device is presenting.");return}pe=v,he=I,t.width=Math.floor(v*Ne),t.height=Math.floor(I*Ne),G===!0&&(t.style.width=v+"px",t.style.height=I+"px"),x!==null&&x.setSize(t.width,t.height),this.setViewport(0,0,v,I)},this.getDrawingBufferSize=function(v){return v.set(pe*Ne,he*Ne).floor()},this.setDrawingBufferSize=function(v,I,G){pe=v,he=I,Ne=G,t.width=Math.floor(v*G),t.height=Math.floor(I*G),this.setViewport(0,0,v,I)},this.setEffects=function(v){if(E===kt){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let I=0;I<v.length;I++)if(v[I].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}x.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(k)},this.getViewport=function(v){return v.copy(K)},this.setViewport=function(v,I,G,V){v.isVector4?K.set(v.x,v.y,v.z,v.w):K.set(v,I,G,V),Me.viewport(k.copy(K).multiplyScalar(Ne).round())},this.getScissor=function(v){return v.copy(ne)},this.setScissor=function(v,I,G,V){v.isVector4?ne.set(v.x,v.y,v.z,v.w):ne.set(v,I,G,V),Me.scissor(F.copy(ne).multiplyScalar(Ne).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(v){Me.setScissorTest(se=v)},this.setOpaqueSort=function(v){ot=v},this.setTransparentSort=function(v){at=v},this.getClearColor=function(v){return v.copy(xe.getClearColor())},this.setClearColor=function(){xe.setClearColor(...arguments)},this.getClearAlpha=function(){return xe.getClearAlpha()},this.setClearAlpha=function(){xe.setClearAlpha(...arguments)},this.clear=function(v=!0,I=!0,G=!0){let V=0;if(v){let O=!1;if(B!==null){const oe=B.texture.format;O=m.has(oe)}if(O){const oe=B.texture.type,fe=d.has(oe),le=xe.getClearColor(),ve=xe.getClearAlpha(),Ee=le.r,De=le.g,ze=le.b;fe?(M[0]=Ee,M[1]=De,M[2]=ze,M[3]=ve,P.clearBufferuiv(P.COLOR,0,M)):(A[0]=Ee,A[1]=De,A[2]=ze,A[3]=ve,P.clearBufferiv(P.COLOR,0,A))}else V|=P.COLOR_BUFFER_BIT}I&&(V|=P.DEPTH_BUFFER_BIT),G&&(V|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&P.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",Ce,!1),t.removeEventListener("webglcontextcreationerror",st,!1),xe.dispose(),Ae.dispose(),$.dispose(),_.dispose(),Y.dispose(),me.dispose(),te.dispose(),de.dispose(),ie.dispose(),X.dispose(),X.removeEventListener("sessionstart",Go),X.removeEventListener("sessionend",Ho),Kn.stop()};function _e(v){v.preventDefault(),xs("WebGLRenderer: Context Lost."),H=!0}function Ce(){xs("WebGLRenderer: Context Restored."),H=!1;const v=b.autoReset,I=ge.enabled,G=ge.autoUpdate,V=ge.needsUpdate,O=ge.type;J(),b.autoReset=v,ge.enabled=I,ge.autoUpdate=G,ge.needsUpdate=V,ge.type=O}function st(v){Ge("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Ze(v){const I=v.target;I.removeEventListener("dispose",Ze),xn(I)}function xn(v){vn(v),_.remove(v)}function vn(v){const I=_.get(v).programs;I!==void 0&&(I.forEach(function(G){ie.releaseProgram(G)}),v.isShaderMaterial&&ie.releaseShaderCache(v))}this.renderBufferDirect=function(v,I,G,V,O,oe){I===null&&(I=tt);const fe=O.isMesh&&O.matrixWorld.determinant()<0,le=Su(v,I,G,V,O);Me.setMaterial(V,fe);let ve=G.index,Ee=1;if(V.wireframe===!0){if(ve=q.getWireframeAttribute(G),ve===void 0)return;Ee=2}const De=G.drawRange,ze=G.attributes.position;let ye=De.start*Ee,Je=(De.start+De.count)*Ee;oe!==null&&(ye=Math.max(ye,oe.start*Ee),Je=Math.min(Je,(oe.start+oe.count)*Ee)),ve!==null?(ye=Math.max(ye,0),Je=Math.min(Je,ve.count)):ze!=null&&(ye=Math.max(ye,0),Je=Math.min(Je,ze.count));const ht=Je-ye;if(ht<0||ht===1/0)return;te.setup(O,V,le,G,ve);let lt,Qe=Be;if(ve!==null&&(lt=Z.get(ve),Qe=D,Qe.setIndex(lt)),O.isMesh)V.wireframe===!0?(Me.setLineWidth(V.wireframeLinewidth*ut()),Qe.setMode(P.LINES)):Qe.setMode(P.TRIANGLES);else if(O.isLine){let bt=V.linewidth;bt===void 0&&(bt=1),Me.setLineWidth(bt*ut()),O.isLineSegments?Qe.setMode(P.LINES):O.isLineLoop?Qe.setMode(P.LINE_LOOP):Qe.setMode(P.LINE_STRIP)}else O.isPoints?Qe.setMode(P.POINTS):O.isSprite&&Qe.setMode(P.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)vs("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Qe.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(qe.get("WEBGL_multi_draw"))Qe.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const bt=O._multiDrawStarts,Se=O._multiDrawCounts,Ot=O._multiDrawCount,Xe=ve?Z.get(ve).bytesPerElement:1,Zt=_.get(V).currentProgram.getUniforms();for(let rn=0;rn<Ot;rn++)Zt.setValue(P,"_gl_DrawID",rn),Qe.render(bt[rn]/Xe,Se[rn])}else if(O.isInstancedMesh)Qe.renderInstances(ye,ht,O.count);else if(G.isInstancedBufferGeometry){const bt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Se=Math.min(G.instanceCount,bt);Qe.renderInstances(ye,ht,Se)}else Qe.render(ye,ht)};function ko(v,I,G){v.transparent===!0&&v.side===Qt&&v.forceSinglePass===!1?(v.side=Nt,v.needsUpdate=!0,Pr(v,I,G),v.side=Xn,v.needsUpdate=!0,Pr(v,I,G),v.side=Qt):Pr(v,I,G)}this.compile=function(v,I,G=null){G===null&&(G=v),R=$.get(G),R.init(I),w.push(R),G.traverseVisible(function(O){O.isLight&&O.layers.test(I.layers)&&(R.pushLight(O),O.castShadow&&R.pushShadow(O))}),v!==G&&v.traverseVisible(function(O){O.isLight&&O.layers.test(I.layers)&&(R.pushLight(O),O.castShadow&&R.pushShadow(O))}),R.setupLights();const V=new Set;return v.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const oe=O.material;if(oe)if(Array.isArray(oe))for(let fe=0;fe<oe.length;fe++){const le=oe[fe];ko(le,G,O),V.add(le)}else ko(oe,G,O),V.add(oe)}),R=w.pop(),V},this.compileAsync=function(v,I,G=null){const V=this.compile(v,I,G);return new Promise(O=>{function oe(){if(V.forEach(function(fe){_.get(fe).currentProgram.isReady()&&V.delete(fe)}),V.size===0){O(v);return}setTimeout(oe,10)}qe.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let Ps=null;function Mu(v){Ps&&Ps(v)}function Go(){Kn.stop()}function Ho(){Kn.start()}const Kn=new Yc;Kn.setAnimationLoop(Mu),typeof self<"u"&&Kn.setContext(self),this.setAnimationLoop=function(v){Ps=v,X.setAnimationLoop(v),v===null?Kn.stop():Kn.start()},X.addEventListener("sessionstart",Go),X.addEventListener("sessionend",Ho),this.render=function(v,I){if(I!==void 0&&I.isCamera!==!0){Ge("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;const G=X.enabled===!0&&X.isPresenting===!0,V=x!==null&&(B===null||G)&&x.begin(y,B);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(x===null||x.isCompositing()===!1)&&(X.cameraAutoUpdate===!0&&X.updateCamera(I),I=X.getCamera()),v.isScene===!0&&v.onBeforeRender(y,v,I,B),R=$.get(v,w.length),R.init(I),w.push(R),Mt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Ie.setFromProjectionMatrix(Mt,cn,I.reversedDepth),we=this.localClippingEnabled,be=ee.init(this.clippingPlanes,we),S=Ae.get(v,T.length),S.init(),T.push(S),X.enabled===!0&&X.isPresenting===!0){const fe=y.xr.getDepthSensingMesh();fe!==null&&Ds(fe,I,-1/0,y.sortObjects)}Ds(v,I,0,y.sortObjects),S.finish(),y.sortObjects===!0&&S.sort(ot,at),Oe=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,Oe&&xe.addToRenderList(S,v),this.info.render.frame++,be===!0&&ee.beginShadows();const O=R.state.shadowsArray;if(ge.render(O,v,I),be===!0&&ee.endShadows(),this.info.autoReset===!0&&this.info.reset(),(V&&x.hasRenderPass())===!1){const fe=S.opaque,le=S.transmissive;if(R.setupLights(),I.isArrayCamera){const ve=I.cameras;if(le.length>0)for(let Ee=0,De=ve.length;Ee<De;Ee++){const ze=ve[Ee];Xo(fe,le,v,ze)}Oe&&xe.render(v);for(let Ee=0,De=ve.length;Ee<De;Ee++){const ze=ve[Ee];Wo(S,v,ze,ze.viewport)}}else le.length>0&&Xo(fe,le,v,I),Oe&&xe.render(v),Wo(S,v,I)}B!==null&&N===0&&(L.updateMultisampleRenderTarget(B),L.updateRenderTargetMipmap(B)),V&&x.end(y),v.isScene===!0&&v.onAfterRender(y,v,I),te.resetDefaultState(),W=-1,z=null,w.pop(),w.length>0?(R=w[w.length-1],be===!0&&ee.setGlobalState(y.clippingPlanes,R.state.camera)):R=null,T.pop(),T.length>0?S=T[T.length-1]:S=null};function Ds(v,I,G,V){if(v.visible===!1)return;if(v.layers.test(I.layers)){if(v.isGroup)G=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(I);else if(v.isLight)R.pushLight(v),v.castShadow&&R.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||Ie.intersectsSprite(v)){V&&Ke.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Mt);const fe=me.update(v),le=v.material;le.visible&&S.push(v,fe,le,G,Ke.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||Ie.intersectsObject(v))){const fe=me.update(v),le=v.material;if(V&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Ke.copy(v.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Ke.copy(fe.boundingSphere.center)),Ke.applyMatrix4(v.matrixWorld).applyMatrix4(Mt)),Array.isArray(le)){const ve=fe.groups;for(let Ee=0,De=ve.length;Ee<De;Ee++){const ze=ve[Ee],ye=le[ze.materialIndex];ye&&ye.visible&&S.push(v,fe,ye,G,Ke.z,ze)}}else le.visible&&S.push(v,fe,le,G,Ke.z,null)}}const oe=v.children;for(let fe=0,le=oe.length;fe<le;fe++)Ds(oe[fe],I,G,V)}function Wo(v,I,G,V){const{opaque:O,transmissive:oe,transparent:fe}=v;R.setupLightsView(G),be===!0&&ee.setGlobalState(y.clippingPlanes,G),V&&Me.viewport(k.copy(V)),O.length>0&&Cr(O,I,G),oe.length>0&&Cr(oe,I,G),fe.length>0&&Cr(fe,I,G),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function Xo(v,I,G,V){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[V.id]===void 0){const ye=qe.has("EXT_color_buffer_half_float")||qe.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[V.id]=new dn(1,1,{generateMipmaps:!0,type:ye?Dn:kt,minFilter:si,samples:Math.max(4,rt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:We.workingColorSpace})}const oe=R.state.transmissionRenderTarget[V.id],fe=V.viewport||k;oe.setSize(fe.z*y.transmissionResolutionScale,fe.w*y.transmissionResolutionScale);const le=y.getRenderTarget(),ve=y.getActiveCubeFace(),Ee=y.getActiveMipmapLevel();y.setRenderTarget(oe),y.getClearColor(j),ce=y.getClearAlpha(),ce<1&&y.setClearColor(16777215,.5),y.clear(),Oe&&xe.render(G);const De=y.toneMapping;y.toneMapping=fn;const ze=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),R.setupLightsView(V),be===!0&&ee.setGlobalState(y.clippingPlanes,V),Cr(v,G,V),L.updateMultisampleRenderTarget(oe),L.updateRenderTargetMipmap(oe),qe.has("WEBGL_multisampled_render_to_texture")===!1){let ye=!1;for(let Je=0,ht=I.length;Je<ht;Je++){const lt=I[Je],{object:Qe,geometry:bt,material:Se,group:Ot}=lt;if(Se.side===Qt&&Qe.layers.test(V.layers)){const Xe=Se.side;Se.side=Nt,Se.needsUpdate=!0,qo(Qe,G,V,bt,Se,Ot),Se.side=Xe,Se.needsUpdate=!0,ye=!0}}ye===!0&&(L.updateMultisampleRenderTarget(oe),L.updateRenderTargetMipmap(oe))}y.setRenderTarget(le,ve,Ee),y.setClearColor(j,ce),ze!==void 0&&(V.viewport=ze),y.toneMapping=De}function Cr(v,I,G){const V=I.isScene===!0?I.overrideMaterial:null;for(let O=0,oe=v.length;O<oe;O++){const fe=v[O],{object:le,geometry:ve,group:Ee}=fe;let De=fe.material;De.allowOverride===!0&&V!==null&&(De=V),le.layers.test(G.layers)&&qo(le,I,G,ve,De,Ee)}}function qo(v,I,G,V,O,oe){v.onBeforeRender(y,I,G,V,O,oe),v.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),O.onBeforeRender(y,I,G,V,v,oe),O.transparent===!0&&O.side===Qt&&O.forceSinglePass===!1?(O.side=Nt,O.needsUpdate=!0,y.renderBufferDirect(G,I,V,O,v,oe),O.side=Xn,O.needsUpdate=!0,y.renderBufferDirect(G,I,V,O,v,oe),O.side=Qt):y.renderBufferDirect(G,I,V,O,v,oe),v.onAfterRender(y,I,G,V,O,oe)}function Pr(v,I,G){I.isScene!==!0&&(I=tt);const V=_.get(v),O=R.state.lights,oe=R.state.shadowsArray,fe=O.state.version,le=ie.getParameters(v,O.state,oe,I,G),ve=ie.getProgramCacheKey(le);let Ee=V.programs;V.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?I.environment:null,V.fog=I.fog;const De=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;V.envMap=Y.get(v.envMap||V.environment,De),V.envMapRotation=V.environment!==null&&v.envMap===null?I.environmentRotation:v.envMapRotation,Ee===void 0&&(v.addEventListener("dispose",Ze),Ee=new Map,V.programs=Ee);let ze=Ee.get(ve);if(ze!==void 0){if(V.currentProgram===ze&&V.lightsStateVersion===fe)return Ko(v,le),ze}else le.uniforms=ie.getUniforms(v),v.onBeforeCompile(le,y),ze=ie.acquireProgram(le,ve),Ee.set(ve,ze),V.uniforms=le.uniforms;const ye=V.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(ye.clippingPlanes=ee.uniform),Ko(v,le),V.needsLights=yu(v),V.lightsStateVersion=fe,V.needsLights&&(ye.ambientLightColor.value=O.state.ambient,ye.lightProbe.value=O.state.probe,ye.directionalLights.value=O.state.directional,ye.directionalLightShadows.value=O.state.directionalShadow,ye.spotLights.value=O.state.spot,ye.spotLightShadows.value=O.state.spotShadow,ye.rectAreaLights.value=O.state.rectArea,ye.ltc_1.value=O.state.rectAreaLTC1,ye.ltc_2.value=O.state.rectAreaLTC2,ye.pointLights.value=O.state.point,ye.pointLightShadows.value=O.state.pointShadow,ye.hemisphereLights.value=O.state.hemi,ye.directionalShadowMatrix.value=O.state.directionalShadowMatrix,ye.spotLightMatrix.value=O.state.spotLightMatrix,ye.spotLightMap.value=O.state.spotLightMap,ye.pointShadowMatrix.value=O.state.pointShadowMatrix),V.currentProgram=ze,V.uniformsList=null,ze}function Yo(v){if(v.uniformsList===null){const I=v.currentProgram.getUniforms();v.uniformsList=ps.seqWithValue(I.seq,v.uniforms)}return v.uniformsList}function Ko(v,I){const G=_.get(v);G.outputColorSpace=I.outputColorSpace,G.batching=I.batching,G.batchingColor=I.batchingColor,G.instancing=I.instancing,G.instancingColor=I.instancingColor,G.instancingMorph=I.instancingMorph,G.skinning=I.skinning,G.morphTargets=I.morphTargets,G.morphNormals=I.morphNormals,G.morphColors=I.morphColors,G.morphTargetsCount=I.morphTargetsCount,G.numClippingPlanes=I.numClippingPlanes,G.numIntersection=I.numClipIntersection,G.vertexAlphas=I.vertexAlphas,G.vertexTangents=I.vertexTangents,G.toneMapping=I.toneMapping}function Su(v,I,G,V,O){I.isScene!==!0&&(I=tt),L.resetTextureUnits();const oe=I.fog,fe=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?I.environment:null,le=B===null?y.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Xi,ve=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Ee=Y.get(V.envMap||fe,ve),De=V.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,ze=!!G.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),ye=!!G.morphAttributes.position,Je=!!G.morphAttributes.normal,ht=!!G.morphAttributes.color;let lt=fn;V.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(lt=y.toneMapping);const Qe=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,bt=Qe!==void 0?Qe.length:0,Se=_.get(V),Ot=R.state.lights;if(be===!0&&(we===!0||v!==z)){const St=v===z&&V.id===W;ee.setState(V,v,St)}let Xe=!1;V.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==Ot.state.version||Se.outputColorSpace!==le||O.isBatchedMesh&&Se.batching===!1||!O.isBatchedMesh&&Se.batching===!0||O.isBatchedMesh&&Se.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Se.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Se.instancing===!1||!O.isInstancedMesh&&Se.instancing===!0||O.isSkinnedMesh&&Se.skinning===!1||!O.isSkinnedMesh&&Se.skinning===!0||O.isInstancedMesh&&Se.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Se.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Se.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Se.instancingMorph===!1&&O.morphTexture!==null||Se.envMap!==Ee||V.fog===!0&&Se.fog!==oe||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==ee.numPlanes||Se.numIntersection!==ee.numIntersection)||Se.vertexAlphas!==De||Se.vertexTangents!==ze||Se.morphTargets!==ye||Se.morphNormals!==Je||Se.morphColors!==ht||Se.toneMapping!==lt||Se.morphTargetsCount!==bt)&&(Xe=!0):(Xe=!0,Se.__version=V.version);let Zt=Se.currentProgram;Xe===!0&&(Zt=Pr(V,I,O));let rn=!1,Zn=!1,gi=!1;const nt=Zt.getUniforms(),yt=Se.uniforms;if(Me.useProgram(Zt.program)&&(rn=!0,Zn=!0,gi=!0),V.id!==W&&(W=V.id,Zn=!0),rn||z!==v){Me.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),nt.setValue(P,"projectionMatrix",v.projectionMatrix),nt.setValue(P,"viewMatrix",v.matrixWorldInverse);const Un=nt.map.cameraPosition;Un!==void 0&&Un.setValue(P,He.setFromMatrixPosition(v.matrixWorld)),rt.logarithmicDepthBuffer&&nt.setValue(P,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&nt.setValue(P,"isOrthographic",v.isOrthographicCamera===!0),z!==v&&(z=v,Zn=!0,gi=!0)}if(Se.needsLights&&(Ot.state.directionalShadowMap.length>0&&nt.setValue(P,"directionalShadowMap",Ot.state.directionalShadowMap,L),Ot.state.spotShadowMap.length>0&&nt.setValue(P,"spotShadowMap",Ot.state.spotShadowMap,L),Ot.state.pointShadowMap.length>0&&nt.setValue(P,"pointShadowMap",Ot.state.pointShadowMap,L)),O.isSkinnedMesh){nt.setOptional(P,O,"bindMatrix"),nt.setOptional(P,O,"bindMatrixInverse");const St=O.skeleton;St&&(St.boneTexture===null&&St.computeBoneTexture(),nt.setValue(P,"boneTexture",St.boneTexture,L))}O.isBatchedMesh&&(nt.setOptional(P,O,"batchingTexture"),nt.setValue(P,"batchingTexture",O._matricesTexture,L),nt.setOptional(P,O,"batchingIdTexture"),nt.setValue(P,"batchingIdTexture",O._indirectTexture,L),nt.setOptional(P,O,"batchingColorTexture"),O._colorsTexture!==null&&nt.setValue(P,"batchingColorTexture",O._colorsTexture,L));const In=G.morphAttributes;if((In.position!==void 0||In.normal!==void 0||In.color!==void 0)&&ue.update(O,G,Zt),(Zn||Se.receiveShadow!==O.receiveShadow)&&(Se.receiveShadow=O.receiveShadow,nt.setValue(P,"receiveShadow",O.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&I.environment!==null&&(yt.envMapIntensity.value=I.environmentIntensity),yt.dfgLUT!==void 0&&(yt.dfgLUT.value=sg()),Zn&&(nt.setValue(P,"toneMappingExposure",y.toneMappingExposure),Se.needsLights&&Eu(yt,gi),oe&&V.fog===!0&&Te.refreshFogUniforms(yt,oe),Te.refreshMaterialUniforms(yt,V,Ne,he,R.state.transmissionRenderTarget[v.id]),ps.upload(P,Yo(Se),yt,L)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(ps.upload(P,Yo(Se),yt,L),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&nt.setValue(P,"center",O.center),nt.setValue(P,"modelViewMatrix",O.modelViewMatrix),nt.setValue(P,"normalMatrix",O.normalMatrix),nt.setValue(P,"modelMatrix",O.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const St=V.uniformsGroups;for(let Un=0,_i=St.length;Un<_i;Un++){const Zo=St[Un];de.update(Zo,Zt),de.bind(Zo,Zt)}}return Zt}function Eu(v,I){v.ambientLightColor.needsUpdate=I,v.lightProbe.needsUpdate=I,v.directionalLights.needsUpdate=I,v.directionalLightShadows.needsUpdate=I,v.pointLights.needsUpdate=I,v.pointLightShadows.needsUpdate=I,v.spotLights.needsUpdate=I,v.spotLightShadows.needsUpdate=I,v.rectAreaLights.needsUpdate=I,v.hemisphereLights.needsUpdate=I}function yu(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(v,I,G){const V=_.get(v);V.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),_.get(v.texture).__webglTexture=I,_.get(v.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:G,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,I){const G=_.get(v);G.__webglFramebuffer=I,G.__useDefaultFramebuffer=I===void 0};const Tu=P.createFramebuffer();this.setRenderTarget=function(v,I=0,G=0){B=v,C=I,N=G;let V=null,O=!1,oe=!1;if(v){const le=_.get(v);if(le.__useDefaultFramebuffer!==void 0){Me.bindFramebuffer(P.FRAMEBUFFER,le.__webglFramebuffer),k.copy(v.viewport),F.copy(v.scissor),Q=v.scissorTest,Me.viewport(k),Me.scissor(F),Me.setScissorTest(Q),W=-1;return}else if(le.__webglFramebuffer===void 0)L.setupRenderTarget(v);else if(le.__hasExternalTextures)L.rebindTextures(v,_.get(v.texture).__webglTexture,_.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const De=v.depthTexture;if(le.__boundDepthTexture!==De){if(De!==null&&_.has(De)&&(v.width!==De.image.width||v.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(v)}}const ve=v.texture;(ve.isData3DTexture||ve.isDataArrayTexture||ve.isCompressedArrayTexture)&&(oe=!0);const Ee=_.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Ee[I])?V=Ee[I][G]:V=Ee[I],O=!0):v.samples>0&&L.useMultisampledRTT(v)===!1?V=_.get(v).__webglMultisampledFramebuffer:Array.isArray(Ee)?V=Ee[G]:V=Ee,k.copy(v.viewport),F.copy(v.scissor),Q=v.scissorTest}else k.copy(K).multiplyScalar(Ne).floor(),F.copy(ne).multiplyScalar(Ne).floor(),Q=se;if(G!==0&&(V=Tu),Me.bindFramebuffer(P.FRAMEBUFFER,V)&&Me.drawBuffers(v,V),Me.viewport(k),Me.scissor(F),Me.setScissorTest(Q),O){const le=_.get(v.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+I,le.__webglTexture,G)}else if(oe){const le=I;for(let ve=0;ve<v.textures.length;ve++){const Ee=_.get(v.textures[ve]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+ve,Ee.__webglTexture,G,le)}}else if(v!==null&&G!==0){const le=_.get(v.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,le.__webglTexture,G)}W=-1},this.readRenderTargetPixels=function(v,I,G,V,O,oe,fe,le=0){if(!(v&&v.isWebGLRenderTarget)){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=_.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&fe!==void 0&&(ve=ve[fe]),ve){Me.bindFramebuffer(P.FRAMEBUFFER,ve);try{const Ee=v.textures[le],De=Ee.format,ze=Ee.type;if(v.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+le),!rt.textureFormatReadable(De)){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!rt.textureTypeReadable(ze)){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=v.width-V&&G>=0&&G<=v.height-O&&P.readPixels(I,G,V,O,re.convert(De),re.convert(ze),oe)}finally{const Ee=B!==null?_.get(B).__webglFramebuffer:null;Me.bindFramebuffer(P.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(v,I,G,V,O,oe,fe,le=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=_.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&fe!==void 0&&(ve=ve[fe]),ve)if(I>=0&&I<=v.width-V&&G>=0&&G<=v.height-O){Me.bindFramebuffer(P.FRAMEBUFFER,ve);const Ee=v.textures[le],De=Ee.format,ze=Ee.type;if(v.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+le),!rt.textureFormatReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!rt.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ye=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,ye),P.bufferData(P.PIXEL_PACK_BUFFER,oe.byteLength,P.STREAM_READ),P.readPixels(I,G,V,O,re.convert(De),re.convert(ze),0);const Je=B!==null?_.get(B).__webglFramebuffer:null;Me.bindFramebuffer(P.FRAMEBUFFER,Je);const ht=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await oh(P,ht,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,ye),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,oe),P.deleteBuffer(ye),P.deleteSync(ht),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,I=null,G=0){const V=Math.pow(2,-G),O=Math.floor(v.image.width*V),oe=Math.floor(v.image.height*V),fe=I!==null?I.x:0,le=I!==null?I.y:0;L.setTexture2D(v,0),P.copyTexSubImage2D(P.TEXTURE_2D,G,0,0,fe,le,O,oe),Me.unbindTexture()};const bu=P.createFramebuffer(),Au=P.createFramebuffer();this.copyTextureToTexture=function(v,I,G=null,V=null,O=0,oe=0){let fe,le,ve,Ee,De,ze,ye,Je,ht;const lt=v.isCompressedTexture?v.mipmaps[oe]:v.image;if(G!==null)fe=G.max.x-G.min.x,le=G.max.y-G.min.y,ve=G.isBox3?G.max.z-G.min.z:1,Ee=G.min.x,De=G.min.y,ze=G.isBox3?G.min.z:0;else{const yt=Math.pow(2,-O);fe=Math.floor(lt.width*yt),le=Math.floor(lt.height*yt),v.isDataArrayTexture?ve=lt.depth:v.isData3DTexture?ve=Math.floor(lt.depth*yt):ve=1,Ee=0,De=0,ze=0}V!==null?(ye=V.x,Je=V.y,ht=V.z):(ye=0,Je=0,ht=0);const Qe=re.convert(I.format),bt=re.convert(I.type);let Se;I.isData3DTexture?(L.setTexture3D(I,0),Se=P.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(L.setTexture2DArray(I,0),Se=P.TEXTURE_2D_ARRAY):(L.setTexture2D(I,0),Se=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,I.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,I.unpackAlignment);const Ot=P.getParameter(P.UNPACK_ROW_LENGTH),Xe=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Zt=P.getParameter(P.UNPACK_SKIP_PIXELS),rn=P.getParameter(P.UNPACK_SKIP_ROWS),Zn=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,lt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,lt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ee),P.pixelStorei(P.UNPACK_SKIP_ROWS,De),P.pixelStorei(P.UNPACK_SKIP_IMAGES,ze);const gi=v.isDataArrayTexture||v.isData3DTexture,nt=I.isDataArrayTexture||I.isData3DTexture;if(v.isDepthTexture){const yt=_.get(v),In=_.get(I),St=_.get(yt.__renderTarget),Un=_.get(In.__renderTarget);Me.bindFramebuffer(P.READ_FRAMEBUFFER,St.__webglFramebuffer),Me.bindFramebuffer(P.DRAW_FRAMEBUFFER,Un.__webglFramebuffer);for(let _i=0;_i<ve;_i++)gi&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,_.get(v).__webglTexture,O,ze+_i),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,_.get(I).__webglTexture,oe,ht+_i)),P.blitFramebuffer(Ee,De,fe,le,ye,Je,fe,le,P.DEPTH_BUFFER_BIT,P.NEAREST);Me.bindFramebuffer(P.READ_FRAMEBUFFER,null),Me.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(O!==0||v.isRenderTargetTexture||_.has(v)){const yt=_.get(v),In=_.get(I);Me.bindFramebuffer(P.READ_FRAMEBUFFER,bu),Me.bindFramebuffer(P.DRAW_FRAMEBUFFER,Au);for(let St=0;St<ve;St++)gi?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,yt.__webglTexture,O,ze+St):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,yt.__webglTexture,O),nt?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,In.__webglTexture,oe,ht+St):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,In.__webglTexture,oe),O!==0?P.blitFramebuffer(Ee,De,fe,le,ye,Je,fe,le,P.COLOR_BUFFER_BIT,P.NEAREST):nt?P.copyTexSubImage3D(Se,oe,ye,Je,ht+St,Ee,De,fe,le):P.copyTexSubImage2D(Se,oe,ye,Je,Ee,De,fe,le);Me.bindFramebuffer(P.READ_FRAMEBUFFER,null),Me.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else nt?v.isDataTexture||v.isData3DTexture?P.texSubImage3D(Se,oe,ye,Je,ht,fe,le,ve,Qe,bt,lt.data):I.isCompressedArrayTexture?P.compressedTexSubImage3D(Se,oe,ye,Je,ht,fe,le,ve,Qe,lt.data):P.texSubImage3D(Se,oe,ye,Je,ht,fe,le,ve,Qe,bt,lt):v.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,oe,ye,Je,fe,le,Qe,bt,lt.data):v.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,oe,ye,Je,lt.width,lt.height,Qe,lt.data):P.texSubImage2D(P.TEXTURE_2D,oe,ye,Je,fe,le,Qe,bt,lt);P.pixelStorei(P.UNPACK_ROW_LENGTH,Ot),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Xe),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Zt),P.pixelStorei(P.UNPACK_SKIP_ROWS,rn),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Zn),oe===0&&I.generateMipmaps&&P.generateMipmap(Se),Me.unbindTexture()},this.initRenderTarget=function(v){_.get(v).__webglFramebuffer===void 0&&L.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?L.setTextureCube(v,0):v.isData3DTexture?L.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?L.setTexture2DArray(v,0):L.setTexture2D(v,0),Me.unbindTexture()},this.resetState=function(){C=0,N=0,B=null,Me.reset(),te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=We._getDrawingBufferColorSpace(e),t.unpackColorSpace=We._getUnpackColorSpace()}}const og=[[13,13,8941655,6638138],[14,13,7832953,4738375],[13,14,10191463,7884867],[15,13,8547672,5593168],[13,15,8094066,4475459],[15,14,9862246,6705220],[14,15,9530203,5261385],[15,15,7828330,6575693],[14,14,9273961,5658701],[13,13,8293763,4478034]],ri=og.map(([n,e,t,i],r)=>({w:n,d:e,color:t,roof:i,variant:r,kind:"house",name:""}));ri.push({kind:"hospital",name:"Больница",w:19,d:17,variant:0,color:10788231,roof:5725273},{kind:"police",name:"Полиция",w:18,d:17,variant:0,color:6847620,roof:4279380},{kind:"fire",name:"Пожарная часть",w:19,d:17,variant:0,color:9132364,roof:5591883},{kind:"store",name:"Магазин",w:18,d:16,variant:0,color:8751466,roof:5659716});const is=(n,e,t)=>({name:n,width:e,points:t.map(([i,r])=>({x:i,z:r}))}),Qc=[is("main",6.4,[[-64,9],[-34,9],[-19,6],[-5,3],[14,3],[36,7],[56,13],[65,18]]),is("northLink",4.2,[[-19,6],[-19,-9],[-18,-23],[-20,-44]]),is("north",4.4,[[-57,-22],[-35,-24],[-18,-23],[1,-23],[21,-24],[27,-25]]),is("south",5.2,[[-55,42],[-33,39],[-9,38],[14,40],[34,43],[50,41],[56,32],[56,13]])],Ql=[{x:-19,z:6},{x:-18,z:-23},{x:56,z:13}],Io=Qc.flatMap(n=>n.points.slice(1).map((e,t)=>({name:n.name,width:n.width,from:n.points[t],to:e})));function ws(n,e){let t;for(const{from:i,to:r,width:s,name:a}of Io){if(e&&e!==a)continue;const l=r.x-i.x,c=r.z-i.z,o=Math.max(0,Math.min(1,((n.x-i.x)*l+(n.z-i.z)*c)/(l*l+c*c))),p=i.x+l*o,h=i.z+c*o,u=Math.hypot(n.x-p,n.z-h);(!t||u<t.distance)&&(t={x:p,z:h,distance:u,width:s})}return t}const lg=[[-51,-4,"main"],[-34,-5,"main"],[-51,-35,"north"],[-34,-36,"north"],[-6,-35,"north"],[-47,26,"south"],[-29,24,"south"],[-10,24,"south"],[12,25,"south"],[33,28,"south"]],cg={store:[0,-10,"main"],police:[22,-10,"main"],hospital:[46,-7,"main"],fire:[15,-37,"north"]};let ha=163032293;function oo(){return ha=Math.imul(ha,1664525)+1013904223>>>0,ha/4294967296}for(let n=ri.length-1;n>0;n--){const e=Math.floor(oo()*(n+1));[ri[n],ri[e]]=[ri[e],ri[n]]}const gr=3.42,ug=["gable","hip","shed","gable","flat","hip","gable","shed","hip","gable"],hg=[-43,-16,16,43].flatMap(n=>[-43,-16,16,43].map(e=>({x:e,z:n}))).filter(n=>!(n.x===-43&&n.z===-43)&&!(n.x===43&&n.z===43)),ec=hg.map(({x:n,z:e})=>({x:n+(oo()-.5)*2.4,z:e+(oo()-.5)*2.4})),di=ri.map((n,e)=>{const[t,i,r]=n.kind==="house"?lg[n.variant]:cg[n.kind];return{...n,id:e,x:t,z:i,street:r,roofKind:n.kind==="house"?ug[n.variant]:n.kind==="fire"?"gable":"flat",stories:n.kind==="house"&&[1,3,5,8].includes(n.variant)||n.kind==="hospital"||n.kind==="police"?2:1}});function Uo(n,e,t=0){return Math.abs(e.x-n.x)<n.w/2+t&&Math.abs(e.z-n.z)<n.d/2+t}function eu(n){return{x:n.x,z:n.z+1.65}}function tu({x:n,z:e,w:t,d:i,kind:r,variant:s}){const a=[];function l(p,h,u,f,g=[],E=!1){const m=E?.22:.48,d=E?.83:r==="fire"?1.35:1;let M=h;for(const A of[...g,u+d]){const S=A-d;if(S>M){const R=(M+S)/2,T=S-M;a.push(f?{x:n+p,z:e+R,w:m,d:T,inside:E}:{x:n+R,z:e+p,w:T,d:m,inside:E})}M=A+d}}const c=t/2,o=i/2;if(l(-o,-c,c,!1),l(-c,-o,o,!0),l(c,-o,o,!0),l(o,-c,c,!1,[0]),r==="store"||r==="fire")l(-.9,-c,c,!1,[-c*.56,c*.56],!0),l(0,-o,-.9,!0,[],!0);else{for(const h of[-1.06,1.06])l(h,-o,o,!0,[-o*.48,o*.5],!0);l(0,-c,-1.06,!1,[],!0),l(r==="house"?(s%3-1)*.55:0,1.06,c,!1,[],!0)}return a}const fg=di.flatMap(tu),dg={x:0,z:0,yaw:0,run:!1,sneak:!1},tc=60,nu=Array.from({length:64},(n,e)=>{const t=e*2.39996,i=42+e*13%17;return{x:Math.sin(t)*i,z:Math.cos(t)*i,h:3+e%4}}).filter(n=>{const e=ws(n);return e.distance>e.width/2+2&&di.every(t=>Math.abs(n.x-t.x)>t.w/2+3||Math.abs(n.z-t.z)>t.d/2+4)}),Xt=(n,e)=>Math.hypot(n.x-e.x,n.z-e.z);function Rr(){const n={mapVersion:4,time:0,players:[],walls:[],zombies:[],items:[]};for(const e of di){const t=e.w*.23,i=e.d*.24,r=e.kind==="store"?["food","water","food","water"]:e.kind==="hospital"?["meds","meds","water","meds"]:["wood","meds","food","water"],s=[[-t,i],[t,i],[-t,-i],[t,-i]];for(const[l,[c,o]]of s.entries())n.items.push({id:e.id*4+l,x:e.x+c,z:e.z+o,kind:r[l]});e.stories===2&&(n.items.push({id:100+e.id*2,x:e.x-t,z:e.z-i,kind:e.kind==="hospital"?"meds":"food",floor:1}),n.items.push({id:101+e.id*2,x:e.x+t,z:e.z+i,kind:"water",floor:1}));const a=ws({x:e.x,z:e.z+e.d/2},e.street);Math.hypot(a.x,a.z)>15&&!Pn(n,a.x,a.z)&&n.zombies.push({id:e.id,x:a.x,z:a.z,hp:100,yaw:0})}return n}function pg(n){if(n.mapVersion===4)return n;const e=Rr(),t=n.mapVersion,i=new Set(n.items.map(s=>s.id));function r(s){const a=di.find(l=>Uo({...l,...ec[l.id]},s));if(a){const l=ec[a.id];s.x+=a.x-l.x,s.z+=a.z-l.z}}n.walls.forEach(r),n.mapVersion=e.mapVersion,n.items=e.items.filter(s=>t<2||!t||i.has(s.id)||t===2&&s.floor===1),n.zombies=e.zombies,n.walls=n.walls.filter(s=>!Pn({...n,walls:[]},s.x,s.z,1));for(const s of n.players)r(s),Pn(n,s.x,s.z,.34,s.floor)&&(s.x=0,s.z=2,s.floor=0);return n}function mg(n,e,t){const i={id:e,name:t,x:0,z:2,yaw:0,hp:100,stamina:100,hunger:100,thirst:100,wood:0,meds:0,food:0,water:0,online:!0};return n.players.push(i),i}function Pn(n,e,t,i=.34,r=0){return Math.abs(e)>tc||Math.abs(t)>tc||fg.some(s=>Math.abs(s.x-e)<s.w/2+i&&Math.abs(s.z-t)<s.d/2+i)||(r===1?!di.some(s=>s.stories===2&&Uo(s,{x:e,z:t},-i)):n.walls.some(s=>Math.abs(s.x-e)<1+i&&Math.abs(s.z-t)<.27+i)||nu.some(s=>Math.hypot(s.x-e,s.z-t)<.45+i))}function rs(n,e,t,i,r=0){Pn(n,e.x+t,e.z,.34,r)||(e.x+=t),Pn(n,e.x,e.z+i,.34,r)||(e.z+=i)}function No(n){return di.some(e=>e.stories===2&&Xt(n,eu(e))<1.35)}function iu(n){return{x:Math.round(n.x-Math.sin(n.yaw)*2.3),z:Math.round(n.z-Math.cos(n.yaw)*2.3)}}function gg(n,e,t){if(t==="respawn"&&e.hp===0){Object.assign(e,{x:0,z:2,hp:100,stamina:100,hunger:100,thirst:100,floor:0});return}if(!e.online||e.hp<=0)return;const i=e.floor??0;if(t==="stairs"&&No(e)){e.floor=i===0?1:0;return}if(t==="gather"){const r=n.items.findIndex(s=>(s.floor??0)===i&&Xt(e,s)<2&&!Pn(n,(e.x+s.x)/2,(e.z+s.z)/2,0,i));if(r>=0){const s=n.items[r];e[s.kind]++,n.items.splice(r,1)}}if(t==="heal"&&e.meds>0&&e.hp<100&&(e.meds--,e.hp=Math.min(100,e.hp+40)),t==="eat"&&e.food>0&&e.hunger<100&&(e.food--,e.hunger=Math.min(100,e.hunger+36)),t==="drink"&&e.water>0&&e.thirst<100&&(e.water--,e.thirst=Math.min(100,e.thirst+48)),t==="build"&&i===0&&e.wood>=2&&n.walls.length<160){const r=iu(e);[-.9,0,.9].every(s=>!Pn(n,r.x+s,r.z,.3))&&!n.players.some(s=>s.online&&Xt(s,r)<1.4)&&!n.zombies.some(s=>s.hp>0&&Xt(s,r)<1.4)&&(e.wood-=2,n.walls.push(r))}if(t==="hit"&&i===0){const r={x:-Math.sin(e.yaw),z:-Math.cos(e.yaw)},s=n.zombies.filter(a=>{const l=Xt(e,a);return a.hp>0&&l<2.5&&(l<.45||(a.x-e.x)*r.x+(a.z-e.z)*r.z>l*.68)&&!Pn(n,(e.x+a.x)/2,(e.z+a.z)/2,0)}).sort((a,l)=>Xt(e,a)-Xt(e,l))[0];s&&(s.hp=Math.max(0,s.hp-34))}}function _g(n,e,t){n.time+=t;const i=n.players.filter(r=>r.online&&r.hp>0);for(const r of i){const s=e.get(r.id)??dg,a=Math.max(1,Math.hypot(s.x,s.z)),l=s.run&&!s.sneak&&r.stamina>1&&(s.x!==0||s.z!==0),c=(s.sneak?2:l?7:4.3)*t/a;r.hunger=Math.max(0,r.hunger-(l?.3:.14)*t),r.thirst=Math.max(0,r.thirst-(l?.52:.23)*t),(r.hunger===0||r.thirst===0)&&(r.hp=Math.max(0,r.hp-t*(r.thirst===0?2:1))),r.stamina=Math.max(0,Math.min(100,r.stamina+(l?-24:r.thirst<25?8:19)*t)),r.yaw=s.yaw,rs(n,r,(s.x*Math.cos(r.yaw)-s.z*Math.sin(r.yaw))*c,(-s.x*Math.sin(r.yaw)-s.z*Math.cos(r.yaw))*c,r.floor)}for(const r of n.zombies){if(r.hp<=0)continue;const s=i.reduce((l,c)=>{const o=e.get(c.id),p=o?.sneak?7:o?.run&&Math.hypot(o.x,o.z)>.1?23:15;return c.hp>0&&!c.floor&&Xt(r,c)<p&&(!l||Xt(r,c)<Xt(r,l))?c:l},void 0),a=s?Xt(r,s):1/0;if(s&&a>.1){const l=s.x-r.x,c=s.z-r.z;if(r.yaw=Math.atan2(l,c),a<1.25&&!Pn(n,(s.x+r.x)/2,(s.z+r.z)/2,0))s.hp=Math.max(0,s.hp-18*t);else{const o=r.x,p=r.z;rs(n,r,l/a*1.5*t,c/a*1.5*t),o===r.x&&p===r.z&&rs(n,r,c/a*1.5*t,-l/a*1.5*t)}}else{const l=r.id+n.time/12;r.yaw=l,rs(n,r,Math.sin(l)*.45*t,Math.cos(l)*.45*t)}}}function xg(n,e=0){const t=[],i=[8870715,7035199,10713939,7889745][n.variant%4],r=[8091982,6847609,7950154,8747110,5860696][n.variant%5],s=7897981,a=13947578,l=3159608;function c(f,g,E,m,d,M,A){t.push({x:n.x+f,y:g+.17,z:n.z+E,w:m,h:d,d:M,color:A})}function o(f,g,E,m=!1){const d=(S,R,T,w,x,y,H)=>{m?c(g-T,R,E+S,y,x,w,H):c(g+S,R,E+T,w,x,y,H)},M=(S,R,T,w,x)=>d(0,S,0,R,T,w,x),A=(S,R,T)=>{for(const w of[-S/2,S/2])for(const x of[-R/2,R/2])d(w,T/2,x,.09,T,.09,i)};switch(f){case"bed":case"double":case"stretcher":{const S=f==="double"?1.75:1.05,R=f==="stretcher"?.8:.47;A(S-.17,1.68,R-.08),M(R-.035,S,.16,2,i),M(R+.1,S*.94,.16,1.88,a),d(0,R+.21,.3,S*.91,.08,1.19,f==="stretcher"?7641744:r),d(0,R+.22,-.62,S*.73,.1,.34,a),f!=="stretcher"&&d(0,R+.28,-1,S,.55,.09,i);break}case"chair":A(.43,.43,.43),M(.46,.55,.12,.53,i),d(0,.71,-.24,.55,.48,.09,i);break;case"desk":case"table":{const S=f==="desk"?1.55:1.85;A(S-.2,.65,.75),M(.79,S,.14,.87,i),f==="desk"?d(.5,.55,.02,.42,.37,.72,i):(d(.24,.91,0,.24,.1,.25,a),d(-.3,.9,.09,.28,.05,.26,8084546));break}case"sofa":case"armchair":case"bench":{const S=f==="armchair"?.91:f==="bench"?1.74:2.29;if(A(S-.2,.59,.22),M(.37,S,.32,.87,r),d(0,.68,-.35,S,.52,.17,r),f!=="bench")for(const R of[-1,1])d(R*(S/2-.09),.57,0,.17,.22,.86,r);break}case"tv":M(.27,1.29,.54,.43,i),M(.84,.96,.56,.26,l),d(0,.84,.15,.84,.43,.04,5792350);break;case"fridge":case"wardrobe":case"locker":{const S=f==="wardrobe"?1.36:f==="locker"?1.07:.79;M(.92,S,1.84,.66,f==="wardrobe"?i:f==="locker"?s:a),d(0,1.1,.337,S*.91,.024,.018,l);for(const T of[.82,1.34])d(S*.26,T,.36,.055,.19,.056,l);break}case"stove":case"sink":case"counter":case"vanity":case"washer":{const S=f==="counter"?1.35:.79;if(M(.45,S,.9,.72,f==="counter"?i:a),M(.93,S+.03,.1,.76,f==="counter"?5854794:s),f==="stove")for(const R of[-.19,.19])for(const T of[-.17,.17])d(R,.995,T,.22,.025,.22,l);else f==="sink"||f==="vanity"?(d(0,1,.02,.4,.04,.37,l),d(0,1.07,-.23,.055,.2,.06,a)):f==="washer"&&d(0,.47,.37,.47,.47,.06,l);break}case"tub":M(.23,.84,.46,1.62,a),M(.48,.65,.06,1.39,s),d(0,.58,-.7,.06,.2,.06,a);break;case"toilet":M(.18,.4,.36,.49,a),M(.45,.48,.19,.58,a),d(0,.54,0,.3,.03,.31,s),d(0,.62,-.25,.48,.51,.25,a);break;case"shelf":case"rack":{const S=f==="rack"?1.78:1.23,R=f==="rack"?s:i;for(const T of[-S/2,S/2])for(const w of[-.21,.21])d(T,.82,w,.07,1.64,.07,R);for(let T=0;T<4;T++){const w=.17+T*.38;M(w,S,.07,.53,R);for(let x=0;x<3;x++)(x+T+n.id)%5!==0&&d((x-1)*S*.29,w+.13,.01,.19,.19,.27,[9667923,10577995,7048054,a][(x+T+n.id)%4])}break}case"crate":M(.25,.72,.5,.69,i),M(.51,.76,.05,.73,10189131),d(0,.29,.35,.59,.07,.04,5523512);break;case"monitor":M(.055,.27,.11,.21,l),d(0,.2,0,.48,.31,.12,l),d(0,.21,.067,.4,.23,.025,5732204);break;case"register":M(.48,1.41,.96,.72,i),M(.99,1.5,.1,.82,a),d(.35,1.09,0,.45,.16,.37,l),d(.35,1.24,-.13,.26,.18,.07,s);break;case"truck":M(.66,2.14,.74,4.3,9652290),d(0,1.3,-1.33,2.09,1.12,1.46,10902605),d(0,1.48,-2.08,1.65,.45,.05,7638158),d(0,1.08,.82,2.1,.58,2.17,s),d(0,1.51,.8,.55,.09,2.18,a);for(const S of[-1.01,1.01])for(const R of[-1.25,1.33])d(S,.36,R,.31,.67,.61,l);break;case"plant":M(.16,.36,.32,.35,9001795);for(let S=0;S<4;S++)d((S%2-.5)*.24,.4+S*.08,(S<2?1:-1)*.13,.28,.21,.25,6058826);break;case"lamp":M(.04,.37,.08,.37,l),M(.68,.05,1.3,.05,s),M(1.35,.36,.25,.36,12299641);break;case"dresser":M(.43,1.03,.86,.54,i);for(const S of[.24,.47,.7])d(0,S,.28,.93,.188,.04,10056273),d(0,S,.31,.16,.043,.05,l);break;case"notice":M(2,1.07,.63,.05,i),d(0,2,.033,.93,.49,.025,11510654);for(let S=0;S<3;S++)d((S-1)*.25,2+(S%2?.075:-.05),.051,.135,.22,.012,a);break}}const p=(f,g,E,m,d)=>{c(f,.017,g,E,.021,m,d);for(const M of[-1,1])c(f,.029,g+M*(m/2-.17),E*.9,.018,.09,10189141)},h=n.w*.25+.45,u=n.d*.25;if(e===1){if(n.kind==="house")p(-h,-u,3,2.7,r),o("double",-h,-u),o("dresser",-h-1.55,-u),o("bed",h,-u),o("wardrobe",h+1.4,-u),o("desk",h-1.26,-u+1.6),o("chair",h-1.26,-u+.88),o("sofa",-h,u+1),o("shelf",-h-1.4,u-1.2),o("lamp",-h+1.45,u+1.4),o("tub",h+1.2,u-1.1,!0),o("vanity",h-1.25,u-1.1),o("toilet",h+1.2,u+1.3);else if(n.kind==="hospital"){for(const f of[-1,1])o("stretcher",f*h,-u-1.35,!0),o("stretcher",f*h,-u+1.1,!0),o("monitor",f*h,u-1),o("locker",f*(h+1.55),u+1.35),o("desk",f*h,u+.8);o("notice",-h,-n.d/2+.27)}else n.kind==="police"&&(o("table",-h,-u),o("chair",-h,-u+1),o("chair",-h,-u-1),o("desk",h,-u),o("chair",h,-u+1),o("shelf",h+1.7,-u-1.45),o("rack",-h,u-1.3),o("rack",-h,u+1.3),o("crate",-h-1.4,u),o("desk",h,u-.3),o("chair",h,u+.7),o("locker",h+1.65,u+1.3));return t}if(n.kind==="house"){const f=n.variant%2===0?1:-1,g=f*h,E=-g;p(g,u,3.2,2.8,r),o("sofa",g,u+.98),o("armchair",g+f*1.37,u-.32,!0),o("tv",g,u-1.65),o("lamp",g-f*1.45,u+1.5),o("plant",g+f*1.46,u+1.65),o("fridge",E-f*1.42,u-1.65),o("stove",E+f*1.45,u-1.65),o("sink",E,u-1.65),o("table",E,u+.6),o("chair",E,u+1.31),o("chair",E,u-.08,!0);for(const m of[-.65,.65])c(E+m,1.82,u-1.92,.57,.49,.4,i);p(g,-u,2.6,2.65,7431764),o(n.variant%3?"double":"bed",g,-u),o("wardrobe",g+f*1.48,-u-1.53),n.variant%3===1?(o("desk",g-f*1.25,-u+1.72),o("chair",g-f*1.25,-u+1.06)):(o("dresser",g-f*1.3,-u+1.55),o(n.variant%3===0?"crate":"plant",g+f*1.36,-u+1.47)),o("notice",g,-n.d/2+.27),c(E,.014,-u,3.4,.018,3.5,7832182);for(let m=-2;m<=2;m++)c(E+m*.59,.024,-u,.025,.012,3.5,5528402);return o("tub",E-f*1.24,-u-1.21,!0),o("toilet",E+f*1.2,-u-1.24),o("vanity",E+f*1.12,-u+1.32),o("washer",E-f*1.25,-u+1.31),n.variant%3===0&&o("shelf",0,-n.d/2+.65),t}if(n.kind==="hospital"){for(const f of[-1,1]){const g=h*f;for(const E of[-1.65,1.45])o("stretcher",g-f*1.03,-u+E,!0),o("monitor",g+f*1.22,-u+E),c(g+f*1.22,.42,-u+E,.48,.84,.49,s);o("bench",g,u+1.69),o("plant",g+f*1.5,u+2.1)}o("desk",-h,u-1.4),o("chair",-h,u-2.14),o("rack",h,u-1.6),o("locker",h+2,u-1.6),o("notice",-h,-n.d/2+.27)}if(n.kind==="police"){for(const f of[-1,1]){const g=f*h;o("desk",g,u-.55),o("chair",g,u-1.35),o("shelf",g+f*1.65,u+1.48),o("bench",g,u+1.67),o("locker",g+f*1.9,-u-1.7),o("rack",g+f*1.9,-u+.52,!0)}o("table",-h,-u),o("chair",-h,-u+.66),o("chair",-h,-u-.66),o("crate",h,-u),o("crate",h-.85,-u)}if(n.kind==="fire"){o("truck",-h,u*.79),o("bench",h,u+1.7);for(let f=0;f<3;f++)o("locker",h+2,u-1.5+f*1.24,!0);o("rack",h-1.6,u-1),o("crate",h-1.67,u+.12),o("table",-h,-u),o("chair",-h,-u+.72),o("fridge",-h-1.8,-u-2.1),o("sink",-h,-u-2.1),o("bed",h-.9,-u),o("bed",h+.9,-u),o("wardrobe",h,-u-2.2)}if(n.kind==="store"){for(let f=0;f<3;f++)for(const g of[-1,1])o("rack",g*(h-.8),.45+f*1.42,!0);o("register",-2,n.d/2-1.1),o("register",2,n.d/2-1.1);for(let f=0;f<3;f++)o("fridge",-h-1+f,-u-1.6),o("crate",h-1+f*.85,-u+.46);o("rack",h,-u-1.65),o("desk",h+1.85,-u,!0)}return t}const nc=3.42,ic=13681316,ru=5400685,ss=4344905,vg=new Yn({color:9152940,transparent:!0,opacity:.33,depthWrite:!1});function Mg(n,e,t,i,r){const s=new un;t.add(s);const a=e.d>e.w,l=a?e.d:e.w,c=a?e.z:e.x,o=c-l/2,p=c+l/2,h=n.kind==="store"?3:n.kind==="hospital"?2.35:n.kind==="police"?1.83:1.46,u=n.kind==="store"?.69:1.19,f=n.kind==="store"?1.85:n.kind==="hospital"?1.48:1.22,g=u+f,E=a?n.z:n.x,m=a?n.d:n.w,d=[E-m*.28,E+m*.28].filter(w=>w-h/2>o+.35&&w+h/2<p-.35),M=(w,x,y,H,C,N)=>{const B=(w+x)/2,W=(y+H)/2;return a?i(s,e.x,W,B,C,H-y,x-w,N):i(s,B,W,e.z,x-w,H-y,C,N)},A=a?e.w:e.d;let S=o;const R=n.kind==="house"?10390896:n.kind==="fire"?7367519:11975078;for(const w of d){const x=w-h/2,y=w+h/2;M(S,x,0,3.4,A,r),M(x,y,0,u,A,r),M(x,y,g,3.4,A,r),M(x,y,u-.065,u+.06,A+.18,R),M(x,y,g-.08,g,A+.08,R),M(x,x+.09,u,g,A+.08,R),M(y-.09,y,u,g,A+.08,R),M(w-.035,w+.035,u,g,A+.04,R),n.kind==="house"&&M(x,y,u+f*.56,u+f*.56+.06,A+.04,R);const H=M(x+.07,y-.07,u+.035,g-.045,.045,ru);H.material=vg,S=y}M(S,p,0,3.4,A,r);const T=a?i(t,e.x,.275,c,A,.55,l,r):i(t,c,.275,e.z,l,.55,A,r);return{full:s,cut:T}}function Sg(n,e,t){const i=n.w/2+.42,r=n.d/2+.48,s=n.kind==="fire"?1.75:1.28,a=n.roofKind==="shed"?[0,s,s,0]:[0,0,0,0],l=n.roofKind==="hip"?r*.48:r,c=[-i,a[0],-r,i,a[1],-r,i,a[2],r,-i,a[3],r,0,s,-l,0,s,l,i,0,-r,i,0,r],o=n.roofKind==="shed"?[0,1,2,0,2,3,0,6,1,3,2,7,6,7,2,6,2,1]:[0,4,5,0,5,3,4,1,2,4,2,5,0,1,4,3,5,2,0,3,2,0,2,1],p=new Ft;p.setAttribute("position",new gt(c,3)),p.setIndex(o);const h=new _t(p.toNonIndexed(),new Yn({color:n.roof,flatShading:!0,side:Qt}));h.geometry.computeVertexNormals(),p.dispose(),h.position.set(n.x,t,n.z),e.add(h)}function Eg(n,e,t,i){const r=n.stories*nc;if(n.roofKind==="flat"){i(e,n.x,r+.09,n.z,n.w+.8,.18,n.d+.85,n.roof);for(const c of[-1,1])i(e,n.x+c*(n.w/2+.15),r+.32,n.z,.19,.43,n.d+.7,n.color),i(e,n.x,r+.32,n.z+c*(n.d/2+.17),n.w+.67,.43,.19,n.color);i(e,n.x+n.w*.28,r+.39,n.z-1,2,.5,1.35,ss),i(e,n.x+n.w*.28,r+.68,n.z-1,1.92,.11,1.29,7830130)}else Sg(n,e,r),i(e,n.x,r+.01,n.z,n.w+.91,.17,n.d+1,n.roof),n.kind==="house"&&(i(e,n.x+n.w*.21,r+1,n.z-n.d*.24,.71,1.65,.72,8217425),i(e,n.x+n.w*.21,r+1.84,n.z-n.d*.24,.87,.14,.85,ss));for(const[c,o]of t.entries()){const p=c*nc,h=n.z+n.d/2,u=n.x+n.w/2,g=n.kind==="house"&&n.variant%3!==0?9:n.kind==="fire"||n.variant%3===0?5:3,E=n.kind==="house"?n.variant%2===0?6643023:6712930:n.kind==="fire"?6899261:6318441;for(let m=1;m<=g;m++){const d=p+.15+m*2.9/(g+1),M=c===0?1.15:0,A=n.w/2-M;for(const S of[-1,1])i(o,n.x+S*(M+A/2),d,h+.252,A,.027,.025,E);i(o,u+.252,d,n.z,.025,.027,n.d,E)}i(o,n.x,p+.18,h+.28,n.w+.19,.15,.12,ss)}const s=n.z+n.d/2,a=t[0],l=n.kind==="house"?2.9:4.65;i(a,n.x,2.78,s+.87,l,.22,1.76,n.roof),i(a,n.x,.14,s+.75,l+.21,.26,1.72,8484968);for(const c of[-1,1])i(a,n.x+c*(l/2-.16),1.41,s+1.6,.15,2.55,.19,ic);if(n.kind==="house"&&[1,4,6,8].includes(n.variant)||n.kind==="hospital"||n.kind==="police"||n.kind==="store"){const c=n.kind==="house"?1.28:n.kind==="store"?1.8:2,o=n.x-n.w/2+.55,p=s-.72,h=(u,f,g,E)=>{const m=new _t(new ys(g,g,u,16),new Yn({color:E}));m.position.set(o,f+u/2,p),a.add(m)};h(1.25,0,c,n.color),h(.86,1.25,c*.987,ru),h(.26,2.11,c*1.07,n.roof);for(let u=0;u<7;u++){const f=(u+1)*Math.PI/7;i(a,o-Math.sin(f)*c*.995,1.68,p+Math.cos(f)*c*.995,.08,.86,.08,ic)}}if(n.kind==="fire"){i(a,n.x-n.w*.28,1.47,s+.27,3.6,2.78,.1,7235673);for(let c=1;c<7;c++)i(a,n.x-n.w*.28,.28+c*.35,s+.334,3.4,.055,.05,ss);i(e,n.x+n.w*.32,r+1,n.z-n.d*.31,1.7,2.4,1.5,n.color),i(e,n.x+n.w*.32,r+2.24,n.z-n.d*.31,1.95,.16,1.71,n.roof)}if(n.kind==="store")for(let c=-5;c<=5;c++){const o=i(a,n.x+c*.68,2.69,s+1,.7,.12,1.7,c%2?11116152:7043414);o.rotation.x=-.18}n.kind==="hospital"&&(i(a,n.x-.46,2.88,s+.34,.25,.76,.09,13622221),i(a,n.x-.46,2.88,s+.39,.76,.25,.09,13622221))}function Pe(n){return document.getElementById(n)}const er=Pe("view"),su=Pe("menu"),au=Pe("hud"),pi=Pe("pause"),Wn=Pe("inventory"),Bi=Pe("error"),Ss=Pe("nickname"),ou=Pe("code");let Rs;try{Rs=new ag({canvas:er,antialias:!0})}catch{Bi.textContent="Для запуска нужен браузер с включённым WebGL 2.";for(const n of["solo","create","join"])Pe(n).setAttribute("inert","");throw Error("WebGL 2 unavailable")}Rs.setPixelRatio(Math.min(window.devicePixelRatio,1.25));const Ye=new zh,Vt=new Ts(-16,16,10,-10,.1,130),yg=new U(20,24,20),Oi=new U,lu=new Le,fr=new U,rc=new ff,sc=new kn(new U(0,1,0),0);let lo=1;const Fo=new Ve(9016973),Tg=new Ve(1647664);Ye.background=Fo.clone();Ye.fog=new wo(Fo.clone(),.024);const Oo=new cf(16770992,1.9);Oo.position.set(-20,36,-18);const cu=new sf(14740951,3879982,1.7);Ye.add(Oo,cu);const _n=new of(16773836,50,24,Math.PI/6,.55,1.5);_n.position.set(.15,-.1,0);_n.target.position.set(0,0,-8);_n.visible=!1;Ye.add(_n,_n.target,Vt);const Cs=new Ji(1,1,1),ac=new Map;function et(n,e,t,i,r,s,a,l){let c=ac.get(l);c||(c=new Yn({color:l}),ac.set(l,c));const o=new _t(Cs,c);return o.position.set(e,t,i),o.scale.set(r,s,a),n.add(o),o}et(Ye,0,-.35,0,140,.7,140,4673858);function ci(n,e,t,i,r){const s=e.x-n.x,a=e.z-n.z,l=et(Ye,(n.x+e.x)/2,i,(n.z+e.z)/2,t,.012,Math.hypot(s,a),r);l.rotation.y=Math.atan2(s,a)}const uu=new Co(1,24);uu.rotateX(-Math.PI/2);function oc(n,e,t,i){const r=new _t(uu,new Yn({color:i}));r.position.set(n.x,t,n.z),r.scale.set(e,1,e),Ye.add(r)}for(const n of Io)ci(n.from,n.to,n.width+1.7,.041,7961198),ci(n.from,n.to,n.width,.061,4277826);for(const n of Qc)for(const e of n.points)oc(e,n.width/2+.85,.046,7961198),oc(e,n.width/2,.066,4277826);let fa=37;const dr=()=>(fa=Math.imul(fa,1664525)+1013904223>>>0,fa/4294967296),co=new Vc(Cs,new Yn({color:16777215}),950),ln=new ft;for(let n=0;n<950;n++){const e=(dr()-.5)*126,t=(dr()-.5)*126,i=ws({x:e,z:t}),r=i.distance<i.width/2-.12;ln.position.set(e,r?.071:.002,t),ln.scale.set(.15+dr()*.65,.009,.09+dr()*.36),ln.rotation.y=dr()*Math.PI,ln.updateMatrix(),co.setMatrixAt(n,ln.matrix),co.setColorAt(n,new Ve(r?n%2?5724752:4080192:n%3?5464138:3950395))}Ye.add(co);for(const{name:n,width:e,from:t,to:i}of Io){const r=i.x-t.x,s=i.z-t.z,a=Math.hypot(r,s),l=(c,o=0)=>({x:t.x+r/a*c+s/a*o,z:t.z+s/a*c-r/a*o});if(n==="main")for(let c=2;c<a-2;c+=4.6){const o=l(c);Ql.some(p=>Math.hypot(p.x-o.x,p.z-o.z)<7)||ci(l(c-.7),l(c+.7),.1,.086,10656637)}if(n!=="main"&&a>6){for(const[c,o,p]of[[t,0,1],[i,a,-1]])if(Ql.some(h=>h.x===c.x&&h.z===c.z))for(let h=-2;h<=2;h++){const u=h*e/6;ci(l(o+p*4.2,u),l(o+p*5.5,u),.37,.086,11644312)}}}const lc={x:43,z:-34};et(Ye,lc.x,.013,lc.z,24,.02,24,5661518);ci({x:32,z:-35},{x:49,z:-29},1.2,.022,8418911);ci({x:49,z:-29},{x:53,z:-24},1.2,.022,8418911);for(const n of[39,47]){et(Ye,n,.44,-34,2,.16,.54,8282693),et(Ye,n,.74,-34.26,2,.51,.11,8282693);for(const e of[-.76,.76])et(Ye,n+e,.19,-34,.11,.38,.4,5264464)}const hu=[],bg=new Yn({color:16777215});for(const n of di){const e=n.z+n.d/2,t={x:n.x,z:e},i=ws(t,n.street),r=Math.max(.01,i.distance),s={x:i.x+(t.x-i.x)*(i.width/2)/r,z:i.z+(t.z-i.z)*(i.width/2)/r};ci(t,s,n.kind==="house"?1.58:3.2,.052,8749427),et(Ye,n.x,.08,n.z,n.w,.16,n.d,n.kind==="house"?7628115:8489085);const a=new un;Ye.add(a);const l=Array.from({length:n.stories},(u,f)=>{const g=new un,E=new un,m=new un;Ye.add(g,E,m);const d=f*gr;g.position.y=d,m.position.y=d,f===1&&et(g,n.x,.08,n.z,n.w,.16,n.d,n.kind==="house"?8418401:9081478);const M=tu(n);f===1&&M.push({x:n.x,z:e,w:2.1,d:.48});const A=M.map(T=>{const w=T.x>n.x&&T.d>T.w||T.z>n.z&&T.w>T.d;if(!T.inside&&Math.max(T.w,T.d)>4){const{full:H,cut:C}=Mg(n,T,g,et,n.color);return w?{full:H,cut:C}:(C.visible=!1,{full:H})}const x=T.inside?9076845:n.color;return{full:et(g,T.x,1.7,T.z,T.w,3.4,T.d,x),cut:T.inside||w?et(g,T.x,.275,T.z,T.w,.55,T.d,x):void 0}}),S=xg(n,f),R=new Vc(Cs,bg,S.length);for(const[T,w]of S.entries())ln.position.set(w.x,w.y,w.z),ln.scale.set(w.w,w.h,w.d),ln.rotation.y=0,ln.updateMatrix(),R.setMatrixAt(T,ln.matrix),R.setColorAt(T,new Ve(w.color));m.add(R);for(let T=-n.w/2+.7;T<n.w/2;T+=.68)et(m,n.x+T,.163,n.z,.025,.008,n.d-.42,n.kind==="house"?6247494:6845290);if(n.stories===2){const T=eu(n);for(let w=0;w<10;w++){const x=(w+1)*.295;et(m,T.x,f===0?x/2:.13,T.z+.85-w*.225,1.22,f===0?x:.23,.237,9072727)}for(const w of[-.65,.65]){et(m,T.x+w,.4,T.z+1,.085,.8,.085,10654326);const x=et(m,T.x+w,f===0?1.82:.89,T.z-.12,.075,.075,f===0?3.6:2.23,10654326);f===0&&(x.rotation.x=.91)}et(m,T.x,.177,T.z+1.25,1.37,.024,.18,12626801)}return{shell:g,facade:E,interior:m,walls:A}});if(Eg(n,a,l.map(u=>u.facade),et),et(Ye,n.x-n.w/2+.65,.42,e+1,.65,.84,.59,5202512),et(Ye,n.x-n.w/2+.65,.85,e+1,.77,.12,.68,5794902),hu.push({building:n,roof:a,stories:l}),!n.name)continue;const c=document.createElement("canvas");c.width=256,c.height=64;const o=c.getContext("2d");o.fillStyle="#29372d",o.fillRect(0,0,256,64),o.fillStyle="#e2dfae",o.font="bold 26px sans-serif",o.textAlign="center",o.fillText(n.name.toUpperCase(),128,42,242);const p=new Gc(c);p.colorSpace=Ut;const h=new _t(new wr(3.4,.85),new Ar({map:p}));h.position.set(n.x,2.98,e+.43),l[0].facade.add(h)}const Ag=new Po(1,1,5),wg=new Yn({color:2439728});for(const n of nu){et(Ye,n.x,n.h*.37,n.z,.72,n.h*.74,.72,5326394);const e=new _t(Ag,wg);e.position.set(n.x,n.h*.8,n.z),e.scale.set(1.9,n.h*.85,1.9),Ye.add(e)}const uo=n=>{const e=new un;return et(e,0,1.17,0,.55,.72,.36,n),et(e,0,1.68,0,.4,.38,.39,8885362),et(e,-.17,.46,0,.21,.69,.24,3422516),et(e,.17,.46,0,.21,.69,.24,3422516),et(e,-.41,1.14,.09,.2,.61,.23,n),et(e,.41,1.14,.09,.2,.61,.23,n),Ye.add(e),e},cc=new Map,as=new Map,os=new Map,bn=uo(6847658);bn.visible=!1;const Bo=new _t(new Do(.44,.51,24),new Ar({color:12569737,side:Qt}));Bo.rotation.x=-Math.PI/2;Bo.position.y=.041;bn.add(Bo);function Rg(n){const e=document.createElement("canvas");e.width=384,e.height=64;const t=e.getContext("2d");t.font="bold 28px sans-serif",t.textAlign="center",t.textBaseline="middle";const i=Math.min(380,t.measureText(n).width+24);t.fillStyle="#18231dec",t.fillRect((384-i)/2,8,i,48),t.fillStyle="#e3edb2",t.fillText(n,192,32,356);const r=new Gc(e);r.colorSpace=Ut;const s=new Oc(new Nc({map:r,depthWrite:!1}));return s.position.y=2.12,s.scale.set(2.6,.43,1),s}const ls=[],Tr=new _t(Cs,new Ar({color:15520905,transparent:!0,opacity:.35,depthWrite:!1}));Tr.scale.set(2,1.3,.54);Tr.visible=!1;Ye.add(Tr);const It=new Set,uc=new Map;let mt=Rr(),hn="",Gt="menu",Yt=0,hc=performance.now(),fc=0,dc=0,oi=!1,mi=!1,ms=0,Lt=null,fu=0,ki="",da=0;const du="zombie-solo-isometric-v1";let ho=0;const Cg=new URLSearchParams(location.search);Pe("create").hidden=!0,Pe("join").hidden=!0,Pe("catalog-link").hidden=!1;ou.value=Cg.get("room")?.slice(0,6)??"";Ss.value=localStorage.getItem("zombie-name")??"";const qn=()=>mt.players.find(n=>n.id===hn),pc=n=>"zombie-player:"+n,ui=()=>Gt!=="menu"&&pi.hidden&&Wn.hidden&&(qn()?.hp??0)>0;function Ki(){if(Gt==="solo")try{localStorage.setItem(du,JSON.stringify(mt))}catch{Pe("save-status").textContent="Не удалось сохранить игру в браузере."}}function zo(){try{const n=JSON.parse(localStorage.getItem(du)??"null");return n&&n.players?.[0]?.id==="solo"&&Array.isArray(n.zombies)&&Array.isArray(n.items)&&Array.isArray(n.walls)?n:null}catch{return null}}function pu(){Pe("continue-solo").hidden=!zo()}pu();function mu(n){Gt=n,su.hidden=!0,au.hidden=!1,pi.hidden=!0,Wn.hidden=!0,Pe("copy").hidden=n==="solo",Pe("session").textContent=n==="solo"?"Одиночное выживание":"Комната "+ki}function Vo(n,e,t=!1){const i=new URL("/ws",location.href);i.protocol==="https:"&&(i.protocol="wss:"),i.protocol==="http:"&&(i.protocol="ws:");const r=new WebSocket(i);Lt=r;let s=!1;Bi.textContent=t?"":"Подключение…",r.onopen=()=>r.send(JSON.stringify({type:n?"create":"join",code:e,name:Ss.value,token:localStorage.getItem(pc(e))})),r.onmessage=a=>{if(Lt!==r)return;const l=JSON.parse(a.data);if(l.type==="error"){s=!0,Bi.textContent=l.message;return}l.type==="joined"&&(ki=l.code,hn=l.id,mt=Rr(),localStorage.setItem(pc(ki),hn),localStorage.setItem("zombie-name",Ss.value),da=0,mu("online")),l.type==="state"&&(mt=l.world)},r.onclose=()=>{Lt===r&&(Gt==="online"&&!s?(da||=Date.now(),vr("Связь прервалась. Переподключаемся…"),Date.now()-da<6e4?fu=window.setTimeout(()=>Vo(!1,ki,!0),1500):vr("Не удалось восстановить связь. Вернись в меню и введи прежний код.")):s&&Gt==="online"?vr(Bi.textContent??"Ошибка входа."):s||(Bi.textContent="Сервер комнат недоступен."))}}function vr(n){It.clear(),mi=!1,Wn.hidden=!0,pi.hidden=!1,Pe("pause-message").textContent=n}function gu(n){const e=Lt;Lt=null,e?.close(),mt=n?pg(n):Rr(),hn="solo",n||mg(mt,hn,Ss.value||"Выживший"),Yt=qn()?.yaw??0,ho=performance.now()+5e3,mu("solo"),Ki()}Pe("continue-solo").onclick=()=>gu(zo());Pe("solo").onclick=()=>{zo()&&!window.confirm("Начать новый мир вместо текущего сохранения?")||gu(null)};window.addEventListener("pagehide",Ki);Pe("create").onclick=()=>{Lt?.readyState!==WebSocket.CONNECTING&&Vo(!0,"")};Pe("join").onsubmit=n=>{n.preventDefault(),Lt?.readyState!==WebSocket.CONNECTING&&Vo(!1,ou.value.trim().toUpperCase())};Pe("copy").onclick=async()=>{try{await navigator.clipboard.writeText(ki),Pe("copy").textContent="Код скопирован",window.setTimeout(()=>Pe("copy").textContent="Копировать код",1500)}catch{Pe("copy").textContent=ki}};Pe("full").onclick=()=>{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen().catch(()=>{})};Pe("resume").onclick=()=>{Gt==="online"&&Lt?.readyState!==WebSocket.OPEN||(qn()?.hp===0&&hi("respawn"),pi.hidden=!0)};Pe("leave").onclick=()=>{Ki();const n=Lt;Lt=null,n?.close(),clearTimeout(fu),It.clear(),hn="",Gt="menu",su.hidden=!1,au.hidden=!0,pi.hidden=!0,Wn.hidden=!0,Bi.textContent="",mt=Rr(),oi=!1,mi=!1,_n.visible=!1,pu()};Pe("close-inventory").onclick=()=>{Wn.hidden=!0};Pe("heal").onclick=()=>hi("heal");Pe("eat").onclick=()=>hi("eat");Pe("drink").onclick=()=>hi("drink");window.addEventListener("blur",()=>{It.clear(),mi=!1});er.addEventListener("pointermove",n=>{lu.set(n.clientX/innerWidth*2-1,1-n.clientY/innerHeight*2)});er.addEventListener("wheel",n=>{ui()&&(n.preventDefault(),lo=bh.clamp(lo*Math.exp(-n.deltaY*.001),.65,2.1))},{passive:!1});function hi(n){if(performance.now()-dc<350)return;dc=performance.now();const e=qn();e&&(n==="hit"&&(ms=.14),Gt==="solo"?(e.yaw=Yt,gg(mt,e,n),Ki()):Lt?.readyState===WebSocket.OPEN&&(Lt.send(JSON.stringify({type:"input",..._u()})),Lt.send(JSON.stringify({type:"act",action:n}))))}function _u(){const n=ui()?Number(It.has("KeyD"))-Number(It.has("KeyA")):0,e=ui()?Number(It.has("KeyW"))-Number(It.has("KeyS")):0,t=Math.SQRT1_2/Math.max(1,Math.hypot(n,e)),i=(n-e)*t,r=(-n-e)*t;return{x:i*Math.cos(Yt)-r*Math.sin(Yt),z:-i*Math.sin(Yt)-r*Math.cos(Yt),yaw:Yt,run:It.has("ShiftLeft")||It.has("ShiftRight"),sneak:It.has("ControlLeft")||It.has("ControlRight")}}document.addEventListener("keydown",n=>{if(n.code==="Escape"&&Gt!=="menu"){Wn.hidden?pi.hidden?vr(Gt==="solo"?"Одиночная игра на паузе.":"Мир продолжает работать."):Pe("resume").click():Wn.hidden=!0;return}if(ui()&&(It.add(n.code),["Space","Tab","ControlLeft","ControlRight"].includes(n.code)&&n.preventDefault(),!n.repeat)){if(n.code==="KeyE"){const e=qn();e&&No(e)?(oi=!1,hi("stairs")):hi("gather")}n.code==="KeyF"&&(_n.visible=!_n.visible),n.code==="KeyB"&&!qn()?.floor&&(oi=!oi),(n.code==="KeyI"||n.code==="Tab")&&(Wn.hidden=!1,It.clear(),mi=!1)}});document.addEventListener("keyup",n=>It.delete(n.code));er.addEventListener("contextmenu",n=>n.preventDefault());er.addEventListener("mousedown",n=>{ui()&&(n.button===0&&hi(oi?"build":"hit"),n.button===2&&(mi=!0))});document.addEventListener("mouseup",n=>{n.button===2&&(mi=!1)});function xu(n){const e=Math.min(.05,(n-hc)/1e3);hc=n;const t=qn();t&&ui()&&(sc.constant=-(t.floor??0)*gr,rc.setFromCamera(lu,Vt),rc.ray.intersectPlane(sc,fr)&&Math.hypot(fr.x-t.x,fr.z-t.z)>.1&&(Yt=Math.atan2(t.x-fr.x,t.z-fr.z)));const i=_u();Gt==="solo"&&ui()&&(uc.set(hn,i),_g(mt,uc,e)),Gt==="solo"&&n>=ho&&(ho=n+5e3,Ki()),Gt==="online"&&Lt?.readyState===WebSocket.OPEN&&n-fc>50&&(fc=n,Lt.send(JSON.stringify({type:"input",...i})));const r=qn();if(r){r.hp<=0&&pi.hidden&&(vr("Ты погиб. Можно возродиться у стартовой точки."),Ki());const c=r.floor??0,o=c*gr,p=new U(r.x,o+.1,r.z);Oi.distanceTo(p)>5?Oi.copy(p):Oi.lerp(p,1-Math.exp(-e*12)),bn.position.set(r.x,o,r.z),bn.rotation.y=Yt+Math.PI,bn.visible=r.hp>0,bn.scale.y=i.sneak?.73:1;const h=Math.hypot(i.x,i.z)>.05?Math.sin(n*(i.run?.023:.015))*.49:0;bn.children[2].rotation.x=h,bn.children[3].rotation.x=-h,_n.position.set(r.x,o+1.4,r.z),_n.target.position.set(r.x-Math.sin(Yt)*12,o+.4,r.z-Math.cos(Yt)*12),Pe("health").value=r.hp,Pe("stamina").value=r.stamina,Pe("hunger").value=r.hunger,Pe("thirst").value=r.thirst,Pe("supplies").textContent="Доски "+r.wood+" · Аптечки "+r.meds+(oi?" · ЛКМ: поставить баррикаду (2 доски)":""),Pe("items").textContent="Доски: "+r.wood+" · Аптечки: "+r.meds+" · Еда: "+r.food+" · Вода: "+r.water,Pe("heal").disabled=!r.meds||r.hp>=100,Pe("eat").disabled=!r.food||r.hunger>=100,Pe("drink").disabled=!r.water||r.thirst>=100;const u=mt.items.find(E=>(E.floor??0)===c&&Xt(r,E)<2),f={wood:"доски",meds:"аптечка",food:"еда",water:"вода"};Pe("nearby").textContent=No(r)?c?"E · Спуститься на первый этаж":"E · Подняться на второй этаж":u?"E · Подобрать: "+f[u.kind]:c?"Второй этаж":"",Pe("allies").textContent=mt.players.filter(E=>E.id!==hn).map(E=>E.name+" · "+(E.online?Math.ceil(E.hp)+" HP":"переподключается")).join(`
`),er.style.cursor=ms>0?"cell":"crosshair",ms=Math.max(0,ms-e);const g=iu({...r,yaw:Yt});Tr.position.set(g.x,.65,g.z)}else Oi.set(-5,0,-5),bn.visible=!1;Vt.position.copy(Oi).add(yg),Vt.lookAt(Oi),Tr.visible=!!r&&!r.floor&&oi&&r.hp>0;const s=lo*(mi?1.18:1);Vt.zoom!==s&&(Vt.zoom=s,Vt.updateProjectionMatrix());for(const{building:c,roof:o,stories:p}of hu){const h=!!r&&Uo(c,r,1.4),u=r?.floor??0;o.visible=!h;for(const[f,{shell:g,facade:E,interior:m,walls:d}]of p.entries()){const M=h&&f===u;g.visible=!h||f<=u,E.visible=!h||f<u,m.visible=M;for(const{full:A,cut:S}of d)A.visible=!M||!S,S&&(S.visible=M)}}for(const c of mt.zombies){let o=cc.get(c.id);o||(o=uo(8950878),cc.set(c.id,o)),o.visible=c.hp>0,o.position.set(c.x,0,c.z),o.rotation.y=c.yaw;const p=Math.sin(mt.time*8+c.id)*.27;o.children[2].rotation.x=p,o.children[3].rotation.x=-p}for(const c of mt.players){if(c.id===hn)continue;let o=as.get(c.id);o||(o=uo(5736327),o.add(Rg(c.name)),as.set(c.id,o)),o.visible=c.hp>0&&(c.floor??0)===(r?.floor??0),o.position.set(c.x,(c.floor??0)*gr,c.z),o.rotation.y=c.yaw+Math.PI}for(const[c,o]of as)if(!mt.players.some(p=>p.id===c&&p.id!==hn)){const p=o.children.find(h=>h instanceof Oc);p?.material.map?.dispose(),p?.material.dispose(),Ye.remove(o),as.delete(c)}for(const c of mt.items){let o=os.get(c.id);if(!o){const p={wood:13342302,meds:12705712,food:15382371,water:9226469};o=et(Ye,c.x,.34+(c.floor??0)*gr,c.z,.59,.23,.43,p[c.kind]),os.set(c.id,o)}o.visible=(c.floor??0)===(r?.floor??0),o.rotation.y=n/750}for(const[c,o]of os)mt.items.some(p=>p.id===c)||(Ye.remove(o),os.delete(c));for(;ls.length>mt.walls.length;)Ye.remove(ls.pop());for(const[c,o]of mt.walls.entries())(ls[c]??(ls[c]=et(Ye,o.x,.67,o.z,2,1.34,.54,8674363))).position.set(o.x,.67,o.z);const a=mt.time%1800,l=Math.min(1,Math.max(0,(a-1170)/60),Math.max(0,(1800-a)/55));Ye.background.copy(Fo).lerp(Tg,l),Ye.fog.color.copy(Ye.background),cu.intensity=1.65-l*1.22,Oo.intensity=1.75-l*1.55,Rs.render(Ye,Vt),requestAnimationFrame(xu)}function vu(){Rs.setSize(innerWidth,innerHeight,!1);const n=11*innerWidth/innerHeight;Vt.left=-n,Vt.right=n,Vt.top=11,Vt.bottom=-11,Vt.updateProjectionMatrix()}window.addEventListener("resize",vu);vu();requestAnimationFrame(xu);
