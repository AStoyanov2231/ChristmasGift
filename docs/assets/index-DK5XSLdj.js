(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const Xh="182",aa={ROTATE:0,DOLLY:1,PAN:2},ta={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},mg=0,qf=1,_g=2,Ll=1,gg=2,Ja=3,Mr=0,Yn=1,Hi=2,xr=0,oa=1,jf=2,Kf=3,$f=4,xg=5,hs=100,vg=101,yg=102,Mg=103,Sg=104,Tg=200,bg=201,Eg=202,Ag=203,Tu=204,bu=205,wg=206,Rg=207,Cg=208,Pg=209,Dg=210,Lg=211,Ig=212,Ng=213,Ug=214,Eu=0,Au=1,wu=2,ga=3,Ru=4,Cu=5,Pu=6,Du=7,tm=0,Og=1,Fg=2,Ki=0,nm=1,im=2,rm=3,sm=4,am=5,om=6,lm=7,Zf="attached",Bg="detached",cm=300,Es=301,xa=302,Lu=303,Iu=304,dc=306,va=1e3,Xi=1001,Kl=1002,rn=1003,um=1004,Qa=1005,sn=1006,Il=1007,mr=1008,oi=1009,hm=1010,fm=1011,Eo=1012,Yh=1013,Qi=1014,Ti=1015,Sr=1016,qh=1017,jh=1018,Ao=1020,dm=35902,pm=35899,mm=1021,_m=1022,bi=1023,Tr=1026,ds=1027,Kh=1028,$h=1029,ya=1030,Zh=1031,Jh=1033,Nl=33776,Ul=33777,Ol=33778,Fl=33779,Nu=35840,Uu=35841,Ou=35842,Fu=35843,Bu=36196,ku=37492,zu=37496,Vu=37488,Gu=37489,Hu=37490,Wu=37491,Xu=37808,Yu=37809,qu=37810,ju=37811,Ku=37812,$u=37813,Zu=37814,Ju=37815,Qu=37816,eh=37817,th=37818,nh=37819,ih=37820,rh=37821,sh=36492,ah=36494,oh=36495,lh=36283,ch=36284,uh=36285,hh=36286,wo=2300,Ro=2301,Tc=2302,Jf=2400,Qf=2401,ed=2402,kg=2500,zg=0,gm=1,fh=2,Vg=3200,xm=0,Gg=1,Fr="",mn="srgb",kn="srgb-linear",$l="linear",Mt="srgb",Ns=7680,td=519,Hg=512,Wg=513,Xg=514,Qh=515,Yg=516,qg=517,ef=518,jg=519,dh=35044,nd="300 es",Yi=2e3,Zl=2001;function vm(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Kg(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Co(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function $g(){const s=Co("canvas");return s.style.display="block",s}const id={};function Jl(...s){const e="THREE."+s.shift();console.log(e,...s)}function De(...s){const e="THREE."+s.shift();console.warn(e,...s)}function Ve(...s){const e="THREE."+s.shift();console.error(e,...s)}function Po(...s){const e=s.join(" ");e in id||(id[e]=!0,De(...s))}function Zg(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}class Cs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let rd=1234567;const lo=Math.PI/180,Ma=180/Math.PI;function Ui(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(vn[s&255]+vn[s>>8&255]+vn[s>>16&255]+vn[s>>24&255]+"-"+vn[e&255]+vn[e>>8&255]+"-"+vn[e>>16&15|64]+vn[e>>24&255]+"-"+vn[t&63|128]+vn[t>>8&255]+"-"+vn[t>>16&255]+vn[t>>24&255]+vn[n&255]+vn[n>>8&255]+vn[n>>16&255]+vn[n>>24&255]).toLowerCase()}function rt(s,e,t){return Math.max(e,Math.min(t,s))}function tf(s,e){return(s%e+e)%e}function Jg(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Qg(s,e,t){return s!==e?(t-s)/(e-s):0}function co(s,e,t){return(1-t)*s+t*e}function e0(s,e,t,n){return co(s,e,1-Math.exp(-t*n))}function t0(s,e=1){return e-Math.abs(tf(s,e*2)-e)}function n0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function i0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function r0(s,e){return s+Math.floor(Math.random()*(e-s+1))}function s0(s,e){return s+Math.random()*(e-s)}function a0(s){return s*(.5-Math.random())}function o0(s){s!==void 0&&(rd=s);let e=rd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function l0(s){return s*lo}function c0(s){return s*Ma}function u0(s){return(s&s-1)===0&&s!==0}function h0(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function f0(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function d0(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),h=r((e-n)/2),f=a((e-n)/2),d=r((n-e)/2),_=a((n-e)/2);switch(i){case"XYX":s.set(o*u,l*h,l*f,o*c);break;case"YZY":s.set(l*f,o*u,l*h,o*c);break;case"ZXZ":s.set(l*h,l*f,o*u,o*c);break;case"XZX":s.set(o*u,l*_,l*d,o*c);break;case"YXY":s.set(l*d,o*u,l*_,o*c);break;case"ZYZ":s.set(l*_,l*d,o*u,o*c);break;default:De("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ii(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function St(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const nf={DEG2RAD:lo,RAD2DEG:Ma,generateUUID:Ui,clamp:rt,euclideanModulo:tf,mapLinear:Jg,inverseLerp:Qg,lerp:co,damp:e0,pingpong:t0,smoothstep:n0,smootherstep:i0,randInt:r0,randFloat:s0,randFloatSpread:a0,seededRandom:o0,degToRad:l0,radToDeg:c0,isPowerOfTwo:u0,ceilPowerOfTwo:h0,floorPowerOfTwo:f0,setQuaternionFromProperEuler:d0,normalize:St,denormalize:Ii};class qe{constructor(e=0,t=0){qe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Bn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3],f=r[a+0],d=r[a+1],_=r[a+2],g=r[a+3];if(o<=0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o>=1){e[t+0]=f,e[t+1]=d,e[t+2]=_,e[t+3]=g;return}if(h!==g||l!==f||c!==d||u!==_){let m=l*f+c*d+u*_+h*g;m<0&&(f=-f,d=-d,_=-_,g=-g,m=-m);let p=1-o;if(m<.9995){const M=Math.acos(m),T=Math.sin(M);p=Math.sin(p*M)/T,o=Math.sin(o*M)/T,l=l*p+f*o,c=c*p+d*o,u=u*p+_*o,h=h*p+g*o}else{l=l*p+f*o,c=c*p+d*o,u=u*p+_*o,h=h*p+g*o;const M=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=M,c*=M,u*=M,h*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[a],f=r[a+1],d=r[a+2],_=r[a+3];return e[t]=o*_+u*h+l*d-c*f,e[t+1]=l*_+u*f+c*h-o*d,e[t+2]=c*_+u*d+o*f-l*h,e[t+3]=u*_-o*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(r/2),f=l(n/2),d=l(i/2),_=l(r/2);switch(a){case"XYZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"YXZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"ZXY":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"ZYX":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"YZX":this._x=f*u*h+c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h-f*d*_;break;case"XZY":this._x=f*u*h-c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h+f*d*_;break;default:De("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(a-i)*d}else if(n>o&&n>h){const d=2*Math.sqrt(1+n-o-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(r+c)/d}else if(o>h){const d=2*Math.sqrt(1+o-n-h);this._w=(r-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-o);this._w=(a-i)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-r*l,this._y=i*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,i=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,t=0,n=0){k.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(sd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(sd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-r*i),h=2*(r*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-r*h,this.z=i+l*h+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return bc.copy(this).projectOnVector(e),this.sub(bc)}reflect(e){return this.sub(bc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const bc=new k,sd=new Bn;class Qe{constructor(e,t,n,i,r,a,o,l,c){Qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],_=n[8],g=i[0],m=i[3],p=i[6],M=i[1],T=i[4],y=i[7],b=i[2],w=i[5],A=i[8];return r[0]=a*g+o*M+l*b,r[3]=a*m+o*T+l*w,r[6]=a*p+o*y+l*A,r[1]=c*g+u*M+h*b,r[4]=c*m+u*T+h*w,r[7]=c*p+u*y+h*A,r[2]=f*g+d*M+_*b,r[5]=f*m+d*T+_*w,r[8]=f*p+d*y+_*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,f=o*l-u*r,d=c*r-a*l,_=t*h+n*f+i*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=h*g,e[1]=(i*c-u*n)*g,e[2]=(o*n-i*a)*g,e[3]=f*g,e[4]=(u*t-i*l)*g,e[5]=(i*r-o*t)*g,e[6]=d*g,e[7]=(n*l-c*t)*g,e[8]=(a*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ec.makeScale(e,t)),this}rotate(e){return this.premultiply(Ec.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ec.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ec=new Qe,ad=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),od=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function p0(){const s={enabled:!0,workingColorSpace:kn,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Mt&&(i.r=vr(i.r),i.g=vr(i.g),i.b=vr(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Mt&&(i.r=la(i.r),i.g=la(i.g),i.b=la(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Fr?$l:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Po("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Po("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[kn]:{primaries:e,whitePoint:n,transfer:$l,toXYZ:ad,fromXYZ:od,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:mn},outputColorSpaceConfig:{drawingBufferColorSpace:mn}},[mn]:{primaries:e,whitePoint:n,transfer:Mt,toXYZ:ad,fromXYZ:od,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:mn}}}),s}const ht=p0();function vr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function la(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Us;class m0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Us===void 0&&(Us=Co("canvas")),Us.width=e.width,Us.height=e.height;const i=Us.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Us}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Co("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=vr(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(vr(t[n]/255)*255):t[n]=vr(t[n]);return{data:t,width:e.width,height:e.height}}else return De("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _0=0;class rf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_0++}),this.uuid=Ui(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Ac(i[a].image)):r.push(Ac(i[a]))}else r=Ac(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ac(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?m0.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(De("Texture: Unable to serialize Texture."),{})}let g0=0;const wc=new k;class dn extends Cs{constructor(e=dn.DEFAULT_IMAGE,t=dn.DEFAULT_MAPPING,n=Xi,i=Xi,r=sn,a=mr,o=bi,l=oi,c=dn.DEFAULT_ANISOTROPY,u=Fr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:g0++}),this.uuid=Ui(),this.name="",this.source=new rf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(wc).x}get height(){return this.source.getSize(wc).y}get depth(){return this.source.getSize(wc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){De(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){De(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==cm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case va:e.x=e.x-Math.floor(e.x);break;case Xi:e.x=e.x<0?0:1;break;case Kl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case va:e.y=e.y-Math.floor(e.y);break;case Xi:e.y=e.y<0?0:1;break;case Kl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=cm;dn.DEFAULT_ANISOTROPY=1;class Ut{constructor(e=0,t=0,n=0,i=1){Ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,y=(d+1)/2,b=(p+1)/2,w=(u+f)/4,A=(h+g)/4,C=(_+m)/4;return T>y&&T>b?T<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(T),i=w/n,r=A/n):y>b?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=w/i,r=C/i):b<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(b),n=A/r,i=C/r),this.set(n,i,r,t),this}let M=Math.sqrt((m-_)*(m-_)+(h-g)*(h-g)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(m-_)/M,this.y=(h-g)/M,this.z=(f-u)/M,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this.w=rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this.w=rt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class x0 extends Cs{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ut(0,0,e,t),this.scissorTest=!1,this.viewport=new Ut(0,0,e,t);const i={width:e,height:t,depth:n.depth},r=new dn(i);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:sn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new rf(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $i extends x0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ym extends dn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=rn,this.minFilter=rn,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class v0 extends dn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=rn,this.minFilter=rn,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wr{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ci.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ci.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ci.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Ci):Ci.fromBufferAttribute(r,a),Ci.applyMatrix4(e.matrixWorld),this.expandByPoint(Ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Yo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Yo.copy(n.boundingBox)),Yo.applyMatrix4(e.matrixWorld),this.union(Yo)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ci),Ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ka),qo.subVectors(this.max,ka),Os.subVectors(e.a,ka),Fs.subVectors(e.b,ka),Bs.subVectors(e.c,ka),Rr.subVectors(Fs,Os),Cr.subVectors(Bs,Fs),Qr.subVectors(Os,Bs);let t=[0,-Rr.z,Rr.y,0,-Cr.z,Cr.y,0,-Qr.z,Qr.y,Rr.z,0,-Rr.x,Cr.z,0,-Cr.x,Qr.z,0,-Qr.x,-Rr.y,Rr.x,0,-Cr.y,Cr.x,0,-Qr.y,Qr.x,0];return!Rc(t,Os,Fs,Bs,qo)||(t=[1,0,0,0,1,0,0,0,1],!Rc(t,Os,Fs,Bs,qo))?!1:(jo.crossVectors(Rr,Cr),t=[jo.x,jo.y,jo.z],Rc(t,Os,Fs,Bs,qo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ar[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ar[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ar[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ar[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ar[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ar[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ar[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ar[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ar),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ar=[new k,new k,new k,new k,new k,new k,new k,new k],Ci=new k,Yo=new wr,Os=new k,Fs=new k,Bs=new k,Rr=new k,Cr=new k,Qr=new k,ka=new k,qo=new k,jo=new k,es=new k;function Rc(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){es.fromArray(s,r);const o=i.x*Math.abs(es.x)+i.y*Math.abs(es.y)+i.z*Math.abs(es.z),l=e.dot(es),c=t.dot(es),u=n.dot(es);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const y0=new wr,za=new k,Cc=new k;class ir{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):y0.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;za.subVectors(e,this.center);const t=za.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(za,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Cc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(za.copy(e.center).add(Cc)),this.expandByPoint(za.copy(e.center).sub(Cc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const or=new k,Pc=new k,Ko=new k,Pr=new k,Dc=new k,$o=new k,Lc=new k;class Ia{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,or)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=or.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(or.copy(this.origin).addScaledVector(this.direction,t),or.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Pc.copy(e).add(t).multiplyScalar(.5),Ko.copy(t).sub(e).normalize(),Pr.copy(this.origin).sub(Pc);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Ko),o=Pr.dot(this.direction),l=-Pr.dot(Ko),c=Pr.lengthSq(),u=Math.abs(1-a*a);let h,f,d,_;if(u>0)if(h=a*l-o,f=a*o-l,_=r*u,h>=0)if(f>=-_)if(f<=_){const g=1/u;h*=g,f*=g,d=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Pc).addScaledVector(Ko,f),d}intersectSphere(e,t){or.subVectors(e.center,this.origin);const n=or.dot(this.direction),i=or.dot(or)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,or)!==null}intersectTriangle(e,t,n,i,r){Dc.subVectors(t,e),$o.subVectors(n,e),Lc.crossVectors(Dc,$o);let a=this.direction.dot(Lc),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Pr.subVectors(this.origin,e);const l=o*this.direction.dot($o.crossVectors(Pr,$o));if(l<0)return null;const c=o*this.direction.dot(Dc.cross(Pr));if(c<0||l+c>a)return null;const u=-o*Pr.dot(Lc);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class et{constructor(e,t,n,i,r,a,o,l,c,u,h,f,d,_,g,m){et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,u,h,f,d,_,g,m)}set(e,t,n,i,r,a,o,l,c,u,h,f,d,_,g,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new et().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,i=1/ks.setFromMatrixColumn(e,0).length(),r=1/ks.setFromMatrixColumn(e,1).length(),a=1/ks.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=a*u,d=a*h,_=o*u,g=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+_*c,t[5]=f-g*c,t[9]=-o*l,t[2]=g-f*c,t[6]=_+d*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,_=c*u,g=c*h;t[0]=f+g*o,t[4]=_*o-d,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=d*o-_,t[6]=g+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,_=c*u,g=c*h;t[0]=f-g*o,t[4]=-a*h,t[8]=_+d*o,t[1]=d+_*o,t[5]=a*u,t[9]=g-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,d=a*h,_=o*u,g=o*h;t[0]=l*u,t[4]=_*c-d,t[8]=f*c+g,t[1]=l*h,t[5]=g*c+f,t[9]=d*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,d=a*c,_=o*l,g=o*c;t[0]=l*u,t[4]=g-f*h,t[8]=_*h+d,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*h+_,t[10]=f-g*h}else if(e.order==="XZY"){const f=a*l,d=a*c,_=o*l,g=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+g,t[5]=a*u,t[9]=d*h-_,t[2]=_*h-d,t[6]=o*u,t[10]=g*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(M0,e,S0)}lookAt(e,t,n){const i=this.elements;return ti.subVectors(e,t),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),Dr.crossVectors(n,ti),Dr.lengthSq()===0&&(Math.abs(n.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),Dr.crossVectors(n,ti)),Dr.normalize(),Zo.crossVectors(ti,Dr),i[0]=Dr.x,i[4]=Zo.x,i[8]=ti.x,i[1]=Dr.y,i[5]=Zo.y,i[9]=ti.y,i[2]=Dr.z,i[6]=Zo.z,i[10]=ti.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],_=n[2],g=n[6],m=n[10],p=n[14],M=n[3],T=n[7],y=n[11],b=n[15],w=i[0],A=i[4],C=i[8],x=i[12],S=i[1],P=i[5],I=i[9],B=i[13],H=i[2],G=i[6],V=i[10],O=i[14],j=i[3],ie=i[7],D=i[11],re=i[15];return r[0]=a*w+o*S+l*H+c*j,r[4]=a*A+o*P+l*G+c*ie,r[8]=a*C+o*I+l*V+c*D,r[12]=a*x+o*B+l*O+c*re,r[1]=u*w+h*S+f*H+d*j,r[5]=u*A+h*P+f*G+d*ie,r[9]=u*C+h*I+f*V+d*D,r[13]=u*x+h*B+f*O+d*re,r[2]=_*w+g*S+m*H+p*j,r[6]=_*A+g*P+m*G+p*ie,r[10]=_*C+g*I+m*V+p*D,r[14]=_*x+g*B+m*O+p*re,r[3]=M*w+T*S+y*H+b*j,r[7]=M*A+T*P+y*G+b*ie,r[11]=M*C+T*I+y*V+b*D,r[15]=M*x+T*B+y*O+b*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],_=e[3],g=e[7],m=e[11],p=e[15],M=l*d-c*f,T=o*d-c*h,y=o*f-l*h,b=a*d-c*u,w=a*f-l*u,A=a*h-o*u;return t*(g*M-m*T+p*y)-n*(_*M-m*b+p*w)+i*(_*T-g*b+p*A)-r*(_*y-g*w+m*A)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],_=e[12],g=e[13],m=e[14],p=e[15],M=h*m*c-g*f*c+g*l*d-o*m*d-h*l*p+o*f*p,T=_*f*c-u*m*c-_*l*d+a*m*d+u*l*p-a*f*p,y=u*g*c-_*h*c+_*o*d-a*g*d-u*o*p+a*h*p,b=_*h*l-u*g*l-_*o*f+a*g*f+u*o*m-a*h*m,w=t*M+n*T+i*y+r*b;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return e[0]=M*A,e[1]=(g*f*r-h*m*r-g*i*d+n*m*d+h*i*p-n*f*p)*A,e[2]=(o*m*r-g*l*r+g*i*c-n*m*c-o*i*p+n*l*p)*A,e[3]=(h*l*r-o*f*r-h*i*c+n*f*c+o*i*d-n*l*d)*A,e[4]=T*A,e[5]=(u*m*r-_*f*r+_*i*d-t*m*d-u*i*p+t*f*p)*A,e[6]=(_*l*r-a*m*r-_*i*c+t*m*c+a*i*p-t*l*p)*A,e[7]=(a*f*r-u*l*r+u*i*c-t*f*c-a*i*d+t*l*d)*A,e[8]=y*A,e[9]=(_*h*r-u*g*r-_*n*d+t*g*d+u*n*p-t*h*p)*A,e[10]=(a*g*r-_*o*r+_*n*c-t*g*c-a*n*p+t*o*p)*A,e[11]=(u*o*r-a*h*r-u*n*c+t*h*c+a*n*d-t*o*d)*A,e[12]=b*A,e[13]=(u*g*i-_*h*i+_*n*f-t*g*f-u*n*m+t*h*m)*A,e[14]=(_*o*i-a*g*i-_*n*l+t*g*l+a*n*m-t*o*m)*A,e[15]=(a*h*i-u*o*i+u*n*l-t*h*l-a*n*f+t*o*f)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,f=r*c,d=r*u,_=r*h,g=a*u,m=a*h,p=o*h,M=l*c,T=l*u,y=l*h,b=n.x,w=n.y,A=n.z;return i[0]=(1-(g+p))*b,i[1]=(d+y)*b,i[2]=(_-T)*b,i[3]=0,i[4]=(d-y)*w,i[5]=(1-(f+p))*w,i[6]=(m+M)*w,i[7]=0,i[8]=(_+T)*A,i[9]=(m-M)*A,i[10]=(1-(f+g))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;if(e.x=i[12],e.y=i[13],e.z=i[14],this.determinant()===0)return n.set(1,1,1),t.identity(),this;let r=ks.set(i[0],i[1],i[2]).length();const a=ks.set(i[4],i[5],i[6]).length(),o=ks.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),Pi.copy(this);const c=1/r,u=1/a,h=1/o;return Pi.elements[0]*=c,Pi.elements[1]*=c,Pi.elements[2]*=c,Pi.elements[4]*=u,Pi.elements[5]*=u,Pi.elements[6]*=u,Pi.elements[8]*=h,Pi.elements[9]*=h,Pi.elements[10]*=h,t.setFromRotationMatrix(Pi),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=Yi,l=!1){const c=this.elements,u=2*r/(t-e),h=2*r/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i);let _,g;if(l)_=r/(a-r),g=a*r/(a-r);else if(o===Yi)_=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Zl)_=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=Yi,l=!1){const c=this.elements,u=2/(t-e),h=2/(n-i),f=-(t+e)/(t-e),d=-(n+i)/(n-i);let _,g;if(l)_=1/(a-r),g=a/(a-r);else if(o===Yi)_=-2/(a-r),g=-(a+r)/(a-r);else if(o===Zl)_=-1/(a-r),g=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ks=new k,Pi=new et,M0=new k(0,0,0),S0=new k(1,1,1),Dr=new k,Zo=new k,ti=new k,ld=new et,cd=new Bn;class er{constructor(e=0,t=0,n=0,i=er.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(rt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-rt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:De("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ld.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ld,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return cd.setFromEuler(this),this.setFromQuaternion(cd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}er.DEFAULT_ORDER="XYZ";class sf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let T0=0;const ud=new k,zs=new Bn,lr=new et,Jo=new k,Va=new k,b0=new k,E0=new Bn,hd=new k(1,0,0),fd=new k(0,1,0),dd=new k(0,0,1),pd={type:"added"},A0={type:"removed"},Vs={type:"childadded",child:null},Ic={type:"childremoved",child:null};class zt extends Cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:T0++}),this.uuid=Ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zt.DEFAULT_UP.clone();const e=new k,t=new er,n=new Bn,i=new k(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new et},normalMatrix:{value:new Qe}}),this.matrix=new et,this.matrixWorld=new et,this.matrixAutoUpdate=zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zs.setFromAxisAngle(e,t),this.quaternion.multiply(zs),this}rotateOnWorldAxis(e,t){return zs.setFromAxisAngle(e,t),this.quaternion.premultiply(zs),this}rotateX(e){return this.rotateOnAxis(hd,e)}rotateY(e){return this.rotateOnAxis(fd,e)}rotateZ(e){return this.rotateOnAxis(dd,e)}translateOnAxis(e,t){return ud.copy(e).applyQuaternion(this.quaternion),this.position.add(ud.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(hd,e)}translateY(e){return this.translateOnAxis(fd,e)}translateZ(e){return this.translateOnAxis(dd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(lr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Jo.copy(e):Jo.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Va.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?lr.lookAt(Va,Jo,this.up):lr.lookAt(Jo,Va,this.up),this.quaternion.setFromRotationMatrix(lr),i&&(lr.extractRotation(i.matrixWorld),zs.setFromRotationMatrix(lr),this.quaternion.premultiply(zs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ve("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(pd),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null):Ve("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(A0),Ic.child=e,this.dispatchEvent(Ic),Ic.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),lr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),lr.multiply(e.parent.matrixWorld)),e.applyMatrix4(lr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(pd),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Va,e,b0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Va,E0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),d=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}zt.DEFAULT_UP=new k(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Di=new k,cr=new k,Nc=new k,ur=new k,Gs=new k,Hs=new k,md=new k,Uc=new k,Oc=new k,Fc=new k,Bc=new Ut,kc=new Ut,zc=new Ut;class Ni{constructor(e=new k,t=new k,n=new k){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Di.subVectors(e,t),i.cross(Di);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Di.subVectors(i,t),cr.subVectors(n,t),Nc.subVectors(e,t);const a=Di.dot(Di),o=Di.dot(cr),l=Di.dot(Nc),c=cr.dot(cr),u=cr.dot(Nc),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(c*l-o*u)*f,_=(a*u-o*l)*f;return r.set(1-d-_,_,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ur)===null?!1:ur.x>=0&&ur.y>=0&&ur.x+ur.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,ur)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ur.x),l.addScaledVector(a,ur.y),l.addScaledVector(o,ur.z),l)}static getInterpolatedAttribute(e,t,n,i,r,a){return Bc.setScalar(0),kc.setScalar(0),zc.setScalar(0),Bc.fromBufferAttribute(e,t),kc.fromBufferAttribute(e,n),zc.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Bc,r.x),a.addScaledVector(kc,r.y),a.addScaledVector(zc,r.z),a}static isFrontFacing(e,t,n,i){return Di.subVectors(n,t),cr.subVectors(e,t),Di.cross(cr).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Di.subVectors(this.c,this.b),cr.subVectors(this.a,this.b),Di.cross(cr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ni.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ni.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return Ni.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Ni.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ni.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;Gs.subVectors(i,n),Hs.subVectors(r,n),Uc.subVectors(e,n);const l=Gs.dot(Uc),c=Hs.dot(Uc);if(l<=0&&c<=0)return t.copy(n);Oc.subVectors(e,i);const u=Gs.dot(Oc),h=Hs.dot(Oc);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Gs,a);Fc.subVectors(e,r);const d=Gs.dot(Fc),_=Hs.dot(Fc);if(_>=0&&d<=_)return t.copy(r);const g=d*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(Hs,o);const m=u*_-d*h;if(m<=0&&h-u>=0&&d-_>=0)return md.subVectors(r,i),o=(h-u)/(h-u+(d-_)),t.copy(i).addScaledVector(md,o);const p=1/(m+g+f);return a=g*p,o=f*p,t.copy(n).addScaledVector(Gs,a).addScaledVector(Hs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Mm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Lr={h:0,s:0,l:0},Qo={h:0,s:0,l:0};function Vc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ke{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,ht.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=ht.workingColorSpace){if(e=tf(e,1),t=rt(t,0,1),n=rt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Vc(a,r,e+1/3),this.g=Vc(a,r,e),this.b=Vc(a,r,e-1/3)}return ht.colorSpaceToWorking(this,i),this}setStyle(e,t=mn){function n(r){r!==void 0&&parseFloat(r)<1&&De("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:De("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);De("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mn){const n=Mm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):De("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vr(e.r),this.g=vr(e.g),this.b=vr(e.b),this}copyLinearToSRGB(e){return this.r=la(e.r),this.g=la(e.g),this.b=la(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mn){return ht.workingToColorSpace(yn.copy(this),e),Math.round(rt(yn.r*255,0,255))*65536+Math.round(rt(yn.g*255,0,255))*256+Math.round(rt(yn.b*255,0,255))}getHexString(e=mn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.workingToColorSpace(yn.copy(this),t);const n=yn.r,i=yn.g,r=yn.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ht.workingColorSpace){return ht.workingToColorSpace(yn.copy(this),t),e.r=yn.r,e.g=yn.g,e.b=yn.b,e}getStyle(e=mn){ht.workingToColorSpace(yn.copy(this),e);const t=yn.r,n=yn.g,i=yn.b;return e!==mn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Lr),this.setHSL(Lr.h+e,Lr.s+t,Lr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Lr),e.getHSL(Qo);const n=co(Lr.h,Qo.h,t),i=co(Lr.s,Qo.s,t),r=co(Lr.l,Qo.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yn=new Ke;Ke.NAMES=Mm;let w0=0;class Zi extends Cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:w0++}),this.uuid=Ui(),this.name="",this.type="Material",this.blending=oa,this.side=Mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Tu,this.blendDst=bu,this.blendEquation=hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=ga,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=td,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ns,this.stencilZFail=Ns,this.stencilZPass=Ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){De(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){De(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==oa&&(n.blending=this.blending),this.side!==Mr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Tu&&(n.blendSrc=this.blendSrc),this.blendDst!==bu&&(n.blendDst=this.blendDst),this.blendEquation!==hs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ga&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==td&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ns&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ns&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ns&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ps extends Zi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new er,this.combine=tm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const jt=new k,el=new qe;let R0=0;class En{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:R0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=dh,this.updateRanges=[],this.gpuType=Ti,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)el.fromBufferAttribute(this,t),el.applyMatrix3(e),this.setXY(t,el.x,el.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix3(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ii(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=St(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ii(t,this.array)),t}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ii(t,this.array)),t}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ii(t,this.array)),t}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ii(t,this.array)),t}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array),i=St(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array),i=St(i,this.array),r=St(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==dh&&(e.usage=this.usage),e}}class Sm extends En{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Tm extends En{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Oi extends En{constructor(e,t,n){super(new Float32Array(e),t,n)}}let C0=0;const xi=new et,Gc=new zt,Ws=new k,ni=new wr,Ga=new wr,un=new k;class _i extends Cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:C0++}),this.uuid=Ui(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vm(e)?Tm:Sm)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xi.makeRotationFromQuaternion(e),this.applyMatrix4(xi),this}rotateX(e){return xi.makeRotationX(e),this.applyMatrix4(xi),this}rotateY(e){return xi.makeRotationY(e),this.applyMatrix4(xi),this}rotateZ(e){return xi.makeRotationZ(e),this.applyMatrix4(xi),this}translate(e,t,n){return xi.makeTranslation(e,t,n),this.applyMatrix4(xi),this}scale(e,t,n){return xi.makeScale(e,t,n),this.applyMatrix4(xi),this}lookAt(e){return Gc.lookAt(e),Gc.updateMatrix(),this.applyMatrix4(Gc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ws).negate(),this.translate(Ws.x,Ws.y,Ws.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Oi(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&De("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];ni.setFromBufferAttribute(r),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ve('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ir);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const n=this.boundingSphere.center;if(ni.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Ga.setFromBufferAttribute(o),this.morphTargetsRelative?(un.addVectors(ni.min,Ga.min),ni.expandByPoint(un),un.addVectors(ni.max,Ga.max),ni.expandByPoint(un)):(ni.expandByPoint(Ga.min),ni.expandByPoint(Ga.max))}ni.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)un.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(un));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)un.fromBufferAttribute(o,c),l&&(Ws.fromBufferAttribute(e,c),un.add(Ws)),i=Math.max(i,n.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Ve('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ve("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new En(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<n.count;C++)o[C]=new k,l[C]=new k;const c=new k,u=new k,h=new k,f=new qe,d=new qe,_=new qe,g=new k,m=new k;function p(C,x,S){c.fromBufferAttribute(n,C),u.fromBufferAttribute(n,x),h.fromBufferAttribute(n,S),f.fromBufferAttribute(r,C),d.fromBufferAttribute(r,x),_.fromBufferAttribute(r,S),u.sub(c),h.sub(c),d.sub(f),_.sub(f);const P=1/(d.x*_.y-_.x*d.y);isFinite(P)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(h,-d.y).multiplyScalar(P),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(P),o[C].add(g),o[x].add(g),o[S].add(g),l[C].add(m),l[x].add(m),l[S].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let C=0,x=M.length;C<x;++C){const S=M[C],P=S.start,I=S.count;for(let B=P,H=P+I;B<H;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const T=new k,y=new k,b=new k,w=new k;function A(C){b.fromBufferAttribute(i,C),w.copy(b);const x=o[C];T.copy(x),T.sub(b.multiplyScalar(b.dot(x))).normalize(),y.crossVectors(w,x);const P=y.dot(l[C])<0?-1:1;a.setXYZW(C,T.x,T.y,T.z,P)}for(let C=0,x=M.length;C<x;++C){const S=M[C],P=S.start,I=S.count;for(let B=P,H=P+I;B<H;B+=3)A(e.getX(B+0)),A(e.getX(B+1)),A(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new En(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new k,r=new k,a=new k,o=new k,l=new k,c=new k,u=new k,h=new k;if(e)for(let f=0,d=e.count;f<d;f+=3){const _=e.getX(f+0),g=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,_),r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)un.fromBufferAttribute(e,t),un.normalize(),e.setXYZ(t,un.x,un.y,un.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let d=0,_=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?d=l[g]*o.data.stride+o.offset:d=l[g]*u;for(let p=0;p<u;p++)f[_++]=c[d++]}return new En(f,u,h)}if(this.index===null)return De("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new _i,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _d=new et,ts=new Ia,tl=new ir,gd=new k,nl=new k,il=new k,rl=new k,Hc=new k,sl=new k,xd=new k,al=new k;class di extends zt{constructor(e=new _i,t=new ps){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){sl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(Hc.fromBufferAttribute(h,e),a?sl.addScaledVector(Hc,u):sl.addScaledVector(Hc.sub(t),u))}t.add(sl)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),tl.copy(n.boundingSphere),tl.applyMatrix4(r),ts.copy(e.ray).recast(e.near),!(tl.containsPoint(ts.origin)===!1&&(ts.intersectSphere(tl,gd)===null||ts.origin.distanceToSquared(gd)>(e.far-e.near)**2))&&(_d.copy(r).invert(),ts.copy(e.ray).applyMatrix4(_d),!(n.boundingBox!==null&&ts.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ts)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=f.length;_<g;_++){const m=f[_],p=a[m.materialIndex],M=Math.max(m.start,d.start),T=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let y=M,b=T;y<b;y+=3){const w=o.getX(y),A=o.getX(y+1),C=o.getX(y+2);i=ol(this,p,e,n,c,u,h,w,A,C),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(o.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const M=o.getX(m),T=o.getX(m+1),y=o.getX(m+2);i=ol(this,a,e,n,c,u,h,M,T,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=f.length;_<g;_++){const m=f[_],p=a[m.materialIndex],M=Math.max(m.start,d.start),T=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let y=M,b=T;y<b;y+=3){const w=y,A=y+1,C=y+2;i=ol(this,p,e,n,c,u,h,w,A,C),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const M=m,T=m+1,y=m+2;i=ol(this,a,e,n,c,u,h,M,T,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function P0(s,e,t,n,i,r,a,o){let l;if(e.side===Yn?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===Mr,o),l===null)return null;al.copy(o),al.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(al);return c<t.near||c>t.far?null:{distance:c,point:al.clone(),object:s}}function ol(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,nl),s.getVertexPosition(l,il),s.getVertexPosition(c,rl);const u=P0(s,e,t,n,nl,il,rl,xd);if(u){const h=new k;Ni.getBarycoord(xd,nl,il,rl,h),i&&(u.uv=Ni.getInterpolatedAttribute(i,o,l,c,h,new qe)),r&&(u.uv1=Ni.getInterpolatedAttribute(r,o,l,c,h,new qe)),a&&(u.normal=Ni.getInterpolatedAttribute(a,o,l,c,h,new k),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new k,materialIndex:0};Ni.getNormal(nl,il,rl,f.normal),u.face=f,u.barycoord=h}return u}class Ho extends _i{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,d=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,i,a,2),_("x","z","y",1,-1,e,n,-t,i,a,3),_("x","y","z",1,-1,e,t,n,i,r,4),_("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Oi(c,3)),this.setAttribute("normal",new Oi(u,3)),this.setAttribute("uv",new Oi(h,2));function _(g,m,p,M,T,y,b,w,A,C,x){const S=y/A,P=b/C,I=y/2,B=b/2,H=w/2,G=A+1,V=C+1;let O=0,j=0;const ie=new k;for(let D=0;D<V;D++){const re=D*P-B;for(let Ie=0;Ie<G;Ie++){const Be=Ie*S-I;ie[g]=Be*M,ie[m]=re*T,ie[p]=H,c.push(ie.x,ie.y,ie.z),ie[g]=0,ie[m]=0,ie[p]=w>0?1:-1,u.push(ie.x,ie.y,ie.z),h.push(Ie/A),h.push(1-D/C),O+=1}}for(let D=0;D<C;D++)for(let re=0;re<A;re++){const Ie=f+re+G*D,Be=f+re+G*(D+1),Xe=f+(re+1)+G*(D+1),$e=f+(re+1)+G*D;l.push(Ie,Be,$e),l.push(Be,Xe,$e),j+=6}o.addGroup(d,j,x),d+=j,f+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ho(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Sa(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(De("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Dn(s){const e={};for(let t=0;t<s.length;t++){const n=Sa(s[t]);for(const i in n)e[i]=n[i]}return e}function D0(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function bm(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}const L0={clone:Sa,merge:Dn};var I0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,N0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class tr extends Zi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=I0,this.fragmentShader=N0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Sa(e.uniforms),this.uniformsGroups=D0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Em extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new et,this.projectionMatrix=new et,this.projectionMatrixInverse=new et,this.coordinateSystem=Yi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ir=new k,vd=new qe,yd=new qe;class Un extends Em{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ma*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(lo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ma*2*Math.atan(Math.tan(lo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ir.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ir.x,Ir.y).multiplyScalar(-e/Ir.z),Ir.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ir.x,Ir.y).multiplyScalar(-e/Ir.z)}getViewSize(e,t){return this.getViewBounds(e,vd,yd),t.subVectors(yd,vd)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(lo*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Xs=-90,Ys=1;class U0 extends zt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Un(Xs,Ys,e,t);i.layers=this.layers,this.add(i);const r=new Un(Xs,Ys,e,t);r.layers=this.layers,this.add(r);const a=new Un(Xs,Ys,e,t);a.layers=this.layers,this.add(a);const o=new Un(Xs,Ys,e,t);o.layers=this.layers,this.add(o);const l=new Un(Xs,Ys,e,t);l.layers=this.layers,this.add(l);const c=new Un(Xs,Ys,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Yi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Zl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Am extends dn{constructor(e=[],t=Es,n,i,r,a,o,l,c,u){super(e,t,n,i,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class wm extends $i{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Am(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ho(5,5,5),r=new tr({name:"CubemapFromEquirect",uniforms:Sa(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Yn,blending:xr});r.uniforms.tEquirect.value=t;const a=new di(i,r),o=t.minFilter;return t.minFilter===mr&&(t.minFilter=sn),new U0(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}class ms extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const O0={type:"move"};class Wc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ms,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ms,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ms,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,_=.005;c.inputState.pinching&&f>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(O0)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ms;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class af{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ke(e),this.density=t}clone(){return new af(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class F0 extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new er,this.environmentIntensity=1,this.environmentRotation=new er,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class B0{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=dh,this.updateRanges=[],this.version=0,this.uuid=Ui()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ui()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ui()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Rn=new k;class of{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Rn.fromBufferAttribute(this,t),Rn.applyMatrix4(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Rn.fromBufferAttribute(this,t),Rn.applyNormalMatrix(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Rn.fromBufferAttribute(this,t),Rn.transformDirection(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Ii(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=St(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ii(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ii(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ii(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ii(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),n=St(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),n=St(n,this.array),i=St(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),n=St(n,this.array),i=St(i,this.array),r=St(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Jl("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new En(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new of(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Jl("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Md=new k,Sd=new Ut,Td=new Ut,k0=new k,bd=new et,ll=new k,Xc=new ir,Ed=new et,Yc=new Ia;class z0 extends di{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Zf,this.bindMatrix=new et,this.bindMatrixInverse=new et,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new wr),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ll),this.boundingBox.expandByPoint(ll)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ir),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ll),this.boundingSphere.expandByPoint(ll)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xc.copy(this.boundingSphere),Xc.applyMatrix4(i),e.ray.intersectsSphere(Xc)!==!1&&(Ed.copy(i).invert(),Yc.copy(e.ray).applyMatrix4(Ed),!(this.boundingBox!==null&&Yc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Yc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ut,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Zf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Bg?this.bindMatrixInverse.copy(this.bindMatrix).invert():De("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Sd.fromBufferAttribute(i.attributes.skinIndex,e),Td.fromBufferAttribute(i.attributes.skinWeight,e),Md.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=Td.getComponent(r);if(a!==0){const o=Sd.getComponent(r);bd.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(k0.copy(Md).applyMatrix4(bd),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Rm extends zt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class lf extends dn{constructor(e=null,t=1,n=1,i,r,a,o,l,c=rn,u=rn,h,f){super(null,a,o,l,c,u,i,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ad=new et,V0=new et;class cf{constructor(e=[],t=[]){this.uuid=Ui(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){De("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new et)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new et;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:V0;Ad.multiplyMatrices(o,t[r]),Ad.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new cf(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new lf(t,e,e,bi,Ti);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(De("Skeleton: No bone found with UUID:",r),a=new Rm),this.bones.push(a),this.boneInverses.push(new et().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class ph extends En{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const qs=new et,wd=new et,cl=[],Rd=new wr,G0=new et,Ha=new di,Wa=new ir;class H0 extends di{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ph(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,G0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new wr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,qs),Rd.copy(e.boundingBox).applyMatrix4(qs),this.boundingBox.union(Rd)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ir),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,qs),Wa.copy(e.boundingSphere).applyMatrix4(qs),this.boundingSphere.union(Wa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Ha.geometry=this.geometry,Ha.material=this.material,Ha.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Wa.copy(this.boundingSphere),Wa.applyMatrix4(n),e.ray.intersectsSphere(Wa)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,qs),wd.multiplyMatrices(n,qs),Ha.matrixWorld=wd,Ha.raycast(e,cl);for(let a=0,o=cl.length;a<o;a++){const l=cl[a];l.instanceId=r,l.object=this,t.push(l)}cl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ph(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new lf(new Float32Array(i*this.count),i,this.count,Kh,Ti));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const qc=new k,W0=new k,X0=new Qe;class Or{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=qc.subVectors(n,t).cross(W0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(qc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||X0.getNormalMatrix(e),i=this.coplanarPoint(qc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ns=new ir,Y0=new qe(.5,.5),ul=new k;class uf{constructor(e=new Or,t=new Or,n=new Or,i=new Or,r=new Or,a=new Or){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Yi,n=!1){const i=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],h=r[5],f=r[6],d=r[7],_=r[8],g=r[9],m=r[10],p=r[11],M=r[12],T=r[13],y=r[14],b=r[15];if(i[0].setComponents(c-a,d-u,p-_,b-M).normalize(),i[1].setComponents(c+a,d+u,p+_,b+M).normalize(),i[2].setComponents(c+o,d+h,p+g,b+T).normalize(),i[3].setComponents(c-o,d-h,p-g,b-T).normalize(),n)i[4].setComponents(l,f,m,y).normalize(),i[5].setComponents(c-l,d-f,p-m,b-y).normalize();else if(i[4].setComponents(c-l,d-f,p-m,b-y).normalize(),t===Yi)i[5].setComponents(c+l,d+f,p+m,b+y).normalize();else if(t===Zl)i[5].setComponents(l,f,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ns.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ns.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ns)}intersectsSprite(e){ns.center.set(0,0,0);const t=Y0.distanceTo(e.center);return ns.radius=.7071067811865476+t,ns.applyMatrix4(e.matrixWorld),this.intersectsSphere(ns)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ul.x=i.normal.x>0?e.max.x:e.min.x,ul.y=i.normal.y>0?e.max.y:e.min.y,ul.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ul)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Cm extends Zi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ql=new k,ec=new k,Cd=new et,Xa=new Ia,hl=new ir,jc=new k,Pd=new k;class hf extends zt{constructor(e=new _i,t=new Cm){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Ql.fromBufferAttribute(t,i-1),ec.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Ql.distanceTo(ec);e.setAttribute("lineDistance",new Oi(n,1))}else De("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),hl.copy(n.boundingSphere),hl.applyMatrix4(i),hl.radius+=r,e.ray.intersectsSphere(hl)===!1)return;Cd.copy(i).invert(),Xa.copy(e.ray).applyMatrix4(Cd);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const d=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let g=d,m=_-1;g<m;g+=c){const p=u.getX(g),M=u.getX(g+1),T=fl(this,e,Xa,l,p,M,g);T&&t.push(T)}if(this.isLineLoop){const g=u.getX(_-1),m=u.getX(d),p=fl(this,e,Xa,l,g,m,_-1);p&&t.push(p)}}else{const d=Math.max(0,a.start),_=Math.min(f.count,a.start+a.count);for(let g=d,m=_-1;g<m;g+=c){const p=fl(this,e,Xa,l,g,g+1,g);p&&t.push(p)}if(this.isLineLoop){const g=fl(this,e,Xa,l,_-1,d,_-1);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function fl(s,e,t,n,i,r,a){const o=s.geometry.attributes.position;if(Ql.fromBufferAttribute(o,i),ec.fromBufferAttribute(o,r),t.distanceSqToSegment(Ql,ec,jc,Pd)>n)return;jc.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(jc);if(!(c<e.near||c>e.far))return{distance:c,point:Pd.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const Dd=new k,Ld=new k;class q0 extends hf{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Dd.fromBufferAttribute(t,i),Ld.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Dd.distanceTo(Ld);e.setAttribute("lineDistance",new Oi(n,1))}else De("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class j0 extends hf{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class ff extends Zi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Id=new et,mh=new Ia,dl=new ir,pl=new k;class Pm extends zt{constructor(e=new _i,t=new ff){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),dl.copy(n.boundingSphere),dl.applyMatrix4(i),dl.radius+=r,e.ray.intersectsSphere(dl)===!1)return;Id.copy(i).invert(),mh.copy(e.ray).applyMatrix4(Id);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let _=f,g=d;_<g;_++){const m=c.getX(_);pl.fromBufferAttribute(h,m),Nd(pl,m,l,i,e,t,this)}}else{const f=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let _=f,g=d;_<g;_++)pl.fromBufferAttribute(h,_),Nd(pl,_,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Nd(s,e,t,n,i,r,a){const o=mh.distanceSqToPoint(s);if(o<t){const l=new k;mh.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Do extends dn{constructor(e,t,n=Qi,i,r,a,o=rn,l=rn,c,u=Tr,h=1){if(u!==Tr&&u!==ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,i,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new rf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class K0 extends Do{constructor(e,t=Qi,n=Es,i,r,a=rn,o=rn,l,c=Tr){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,i,r,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Dm extends dn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class pc extends _i{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=e/o,f=t/l,d=[],_=[],g=[],m=[];for(let p=0;p<u;p++){const M=p*f-a;for(let T=0;T<c;T++){const y=T*h-r;_.push(y,-M,0),g.push(0,0,1),m.push(T/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){const T=M+c*p,y=M+c*(p+1),b=M+1+c*(p+1),w=M+1+c*p;d.push(T,y,w),d.push(y,b,w)}this.setIndex(d),this.setAttribute("position",new Oi(_,3)),this.setAttribute("normal",new Oi(g,3)),this.setAttribute("uv",new Oi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pc(e.width,e.height,e.widthSegments,e.heightSegments)}}class $0 extends tr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class df extends Zi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xm,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new er,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class rr extends df{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new qe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return rt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ke(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ke(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ke(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Z0 extends Zi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class J0 extends Zi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function ml(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Q0(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Ud(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function Lm(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}class Wo{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class ex extends Wo{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Jf,endingEnd:Jf}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Qf:r=e,o=2*t-n;break;case ed:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Qf:a=e,l=2*n-t;break;case ed:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,_=(n-t)/(i-t),g=_*_,m=g*_,p=-f*m+2*f*g-f*_,M=(1+f)*m+(-1.5-2*f)*g+(-.5+f)*_+1,T=(-1-d)*m+(1.5+d)*g+.5*_,y=d*m-d*g;for(let b=0;b!==o;++b)r[b]=p*a[u+b]+M*a[c+b]+T*a[l+b]+y*a[h+b];return r}}class tx extends Wo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==o;++f)r[f]=a[c+f]*h+a[l+f]*u;return r}}class nx extends Wo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Fi{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ml(t,this.TimeBufferType),this.values=ml(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ml(e.times,Array),values:ml(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new nx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new tx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ex(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case wo:t=this.InterpolantFactoryMethodDiscrete;break;case Ro:t=this.InterpolantFactoryMethodLinear;break;case Tc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return De("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return wo;case this.InterpolantFactoryMethodLinear:return Ro;case this.InterpolantFactoryMethodSmooth:return Tc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Ve("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(Ve("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){Ve("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ve("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&Kg(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){Ve("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Tc,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(i)l=!0;else{const h=o*n,f=h-n,d=h+n;for(let _=0;_!==n;++_){const g=t[h+_];if(g!==t[f+_]||g!==t[d+_]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const h=o*n,f=a*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Fi.prototype.ValueTypeName="";Fi.prototype.TimeBufferType=Float32Array;Fi.prototype.ValueBufferType=Float32Array;Fi.prototype.DefaultInterpolation=Ro;class Na extends Fi{constructor(e,t,n){super(e,t,n)}}Na.prototype.ValueTypeName="bool";Na.prototype.ValueBufferType=Array;Na.prototype.DefaultInterpolation=wo;Na.prototype.InterpolantFactoryMethodLinear=void 0;Na.prototype.InterpolantFactoryMethodSmooth=void 0;class Im extends Fi{constructor(e,t,n,i){super(e,t,n,i)}}Im.prototype.ValueTypeName="color";class Ta extends Fi{constructor(e,t,n,i){super(e,t,n,i)}}Ta.prototype.ValueTypeName="number";class ix extends Wo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let u=c+o;c!==u;c+=4)Bn.slerpFlat(r,0,a,c-o,a,c,l);return r}}class ba extends Fi{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new ix(this.times,this.values,this.getValueSize(),e)}}ba.prototype.ValueTypeName="quaternion";ba.prototype.InterpolantFactoryMethodSmooth=void 0;class Ua extends Fi{constructor(e,t,n){super(e,t,n)}}Ua.prototype.ValueTypeName="string";Ua.prototype.ValueBufferType=Array;Ua.prototype.DefaultInterpolation=wo;Ua.prototype.InterpolantFactoryMethodLinear=void 0;Ua.prototype.InterpolantFactoryMethodSmooth=void 0;class Ea extends Fi{constructor(e,t,n,i){super(e,t,n,i)}}Ea.prototype.ValueTypeName="vector";class rx{constructor(e="",t=-1,n=[],i=kg){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Ui(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(ax(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(Fi.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const u=Q0(l);l=Ud(l,1,u),c=Ud(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Ta(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let f=i[h];f||(i[h]=f=[]),f.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(De("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return Ve("AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,_,g){if(d.length!==0){const m=[],p=[];Lm(d,m,p,_),m.length!==0&&g.push(new h(f,m,p))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let _;for(_=0;_<f.length;_++)if(f[_].morphTargets)for(let g=0;g<f[_].morphTargets.length;g++)d[f[_].morphTargets[g]]=-1;for(const g in d){const m=[],p=[];for(let M=0;M!==f[_].morphTargets.length;++M){const T=f[_];m.push(T.time),p.push(T.morphTarget===g?1:0)}i.push(new Ta(".morphTargetInfluence["+g+"]",m,p))}l=d.length*a}else{const d=".bones["+t[h].name+"]";n(Ea,d+".position",f,"pos",i),n(ba,d+".quaternion",f,"rot",i),n(Ea,d+".scale",f,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function sx(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ta;case"vector":case"vector2":case"vector3":case"vector4":return Ea;case"color":return Im;case"quaternion":return ba;case"bool":case"boolean":return Na;case"string":return Ua}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function ax(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=sx(s.type);if(s.times===void 0){const t=[],n=[];Lm(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const _r={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class ox{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&i.onStart!==void 0&&i.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],_=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const lx=new ox;class Oa{constructor(e){this.manager=e!==void 0?e:lx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Oa.DEFAULT_MATERIAL_NAME="__DEFAULT";const hr={};class cx extends Error{constructor(e,t){super(e),this.response=t}}class Nm extends Oa{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=_r.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(hr[e]!==void 0){hr[e].push({onLoad:t,onProgress:n,onError:i});return}hr[e]=[],hr[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&De("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=hr[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,_=d!==0;let g=0;const m=new ReadableStream({start(p){M();function M(){h.read().then(({done:T,value:y})=>{if(T)p.close();else{g+=y.byteLength;const b=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:d});for(let w=0,A=u.length;w<A;w++){const C=u[w];C.onProgress&&C.onProgress(b)}p.enqueue(y),M()}},T=>{p.error(T)})}}});return new Response(m)}else throw new cx(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o==="")return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(_=>d.decode(_))}}}).then(c=>{_r.add(`file:${e}`,c);const u=hr[e];delete hr[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=hr[e];if(u===void 0)throw this.manager.itemError(e),c;delete hr[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const js=new WeakMap;class ux extends Oa{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=_r.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let h=js.get(a);h===void 0&&(h=[],js.set(a,h)),h.push({onLoad:t,onError:i})}return a}const o=Co("img");function l(){u(),t&&t(this);const h=js.get(this)||[];for(let f=0;f<h.length;f++){const d=h[f];d.onLoad&&d.onLoad(this)}js.delete(this),r.manager.itemEnd(e)}function c(h){u(),i&&i(h),_r.remove(`image:${e}`);const f=js.get(this)||[];for(let d=0;d<f.length;d++){const _=f[d];_.onError&&_.onError(h)}js.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),_r.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class hx extends Oa{constructor(e){super(e)}load(e,t,n,i){const r=new dn,a=new ux(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class pf extends zt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Kc=new et,Od=new k,Fd=new k;class mf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qe(512,512),this.mapType=oi,this.map=null,this.mapPass=null,this.matrix=new et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new uf,this._frameExtents=new qe(1,1),this._viewportCount=1,this._viewports=[new Ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Od.setFromMatrixPosition(e.matrixWorld),t.position.copy(Od),Fd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Fd),t.updateMatrixWorld(),Kc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kc,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Kc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class fx extends mf{constructor(){super(new Un(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Ma*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class dx extends pf{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new fx}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class px extends mf{constructor(){super(new Un(90,1,.5,500)),this.isPointLightShadow=!0}}class mx extends pf{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new px}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class mc extends Em{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class _x extends mf{constructor(){super(new mc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class gx extends pf{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.shadow=new _x}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class uo{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const $c=new WeakMap;class xx extends Oa{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&De("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&De("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=_r.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{if($c.has(a)===!0)i&&i($c.get(a)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(c),r.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return _r.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),$c.set(l,c),_r.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});_r.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class vx extends Un{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const _f="\\[\\]\\.:\\/",yx=new RegExp("["+_f+"]","g"),gf="[^"+_f+"]",Mx="[^"+_f.replace("\\.","")+"]",Sx=/((?:WC+[\/:])*)/.source.replace("WC",gf),Tx=/(WCOD+)?/.source.replace("WCOD",Mx),bx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",gf),Ex=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",gf),Ax=new RegExp("^"+Sx+Tx+bx+Ex+"$"),wx=["material","materials","bones","map"];class Rx{constructor(e,t,n){const i=n||Tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Tt{constructor(e,t,n){this.path=t,this.parsedPath=n||Tt.parseTrackName(t),this.node=Tt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Tt.Composite(e,t,n):new Tt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(yx,"")}static parseTrackName(e){const t=Ax.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);wx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=Tt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){De("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ve("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ve("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ve("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ve("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ve("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;Ve("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Tt.Composite=Rx;Tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Tt.prototype.GetterByBindingType=[Tt.prototype._getValue_direct,Tt.prototype._getValue_array,Tt.prototype._getValue_arrayElement,Tt.prototype._getValue_toArray];Tt.prototype.SetterByBindingTypeAndVersioning=[[Tt.prototype._setValue_direct,Tt.prototype._setValue_direct_setNeedsUpdate,Tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_array,Tt.prototype._setValue_array_setNeedsUpdate,Tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_arrayElement,Tt.prototype._setValue_arrayElement_setNeedsUpdate,Tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_fromArray,Tt.prototype._setValue_fromArray_setNeedsUpdate,Tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Bd=new et;class Cx{constructor(e,t,n=0,i=1/0){this.ray=new Ia(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new sf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ve("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Bd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Bd),this}intersectObject(e,t=!0,n=[]){return _h(e,this,n,t),n.sort(kd),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)_h(e[i],this,n,t);return n.sort(kd),n}}function kd(s,e){return s.distance-e.distance}function _h(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)_h(r[a],e,t,!0)}}class zd{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=rt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(rt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Px extends Cs{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){De("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Vd(s,e,t,n){const i=Dx(n);switch(t){case mm:return s*e;case Kh:return s*e/i.components*i.byteLength;case $h:return s*e/i.components*i.byteLength;case ya:return s*e*2/i.components*i.byteLength;case Zh:return s*e*2/i.components*i.byteLength;case _m:return s*e*3/i.components*i.byteLength;case bi:return s*e*4/i.components*i.byteLength;case Jh:return s*e*4/i.components*i.byteLength;case Nl:case Ul:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ol:case Fl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Uu:case Fu:return Math.max(s,16)*Math.max(e,8)/4;case Nu:case Ou:return Math.max(s,8)*Math.max(e,8)/2;case Bu:case ku:case Vu:case Gu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case zu:case Hu:case Wu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Xu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Yu:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case qu:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case ju:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Ku:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case $u:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Zu:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Ju:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Qu:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case eh:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case th:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case nh:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case ih:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case rh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case sh:case ah:case oh:return Math.ceil(s/4)*Math.ceil(e/4)*16;case lh:case ch:return Math.ceil(s/4)*Math.ceil(e/4)*8;case uh:case hh:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Dx(s){switch(s){case oi:case hm:return{byteLength:1,components:1};case Eo:case fm:case Sr:return{byteLength:2,components:1};case qh:case jh:return{byteLength:2,components:4};case Qi:case Yh:case Ti:return{byteLength:4,components:1};case dm:case pm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xh}}));typeof window<"u"&&(window.__THREE__?De("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xh);function Um(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Lx(s){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l.updateRanges;if(s.bindBuffer(c,o),h.length===0)s.bufferSubData(c,0,u);else{h.sort((d,_)=>d.start-_.start);let f=0;for(let d=1;d<h.length;d++){const _=h[f],g=h[d];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++f,h[f]=g)}h.length=f+1;for(let d=0,_=h.length;d<_;d++){const g=h[d];s.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var Ix=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Nx=`#ifdef USE_ALPHAHASH
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
#endif`,Ux=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ox=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Bx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kx=`#ifdef USE_AOMAP
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
#endif`,zx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vx=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Gx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Yx=`#ifdef USE_IRIDESCENCE
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
#endif`,qx=`#ifdef USE_BUMPMAP
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
#endif`,jx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Kx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$x=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ev=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,tv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,nv=`#define PI 3.141592653589793
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
} // validated`,iv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,rv=`vec3 transformedNormal = objectNormal;
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
#endif`,sv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,av=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ov=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cv="gl_FragColor = linearToOutputTexel( gl_FragColor );",uv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hv=`#ifdef USE_ENVMAP
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
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,fv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,dv=`#ifdef USE_ENVMAP
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
#endif`,pv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mv=`#ifdef USE_ENVMAP
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
#endif`,_v=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yv=`#ifdef USE_GRADIENTMAP
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
}`,Mv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Tv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bv=`uniform bool receiveShadow;
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
#endif`,Ev=`#ifdef USE_ENVMAP
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
#endif`,Av=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pv=`PhysicalMaterial material;
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
#endif`,Dv=`uniform sampler2D dfgLUT;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
}`,Lv=`
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
#endif`,Iv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,Nv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Uv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ov=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Gv=`#if defined( USE_POINTS_UV )
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
#endif`,Hv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Yv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jv=`#ifdef USE_MORPHTARGETS
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
#endif`,Kv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$v=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Zv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Jv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ey=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ty=`#ifdef USE_NORMALMAP
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
#endif`,ny=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,iy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ry=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ay=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,oy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ly=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,uy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,py=`#if NUM_SPOT_LIGHT_COORDS > 0
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
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
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
			shadowCoord.z += shadowBias;
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
			shadowCoord.z += shadowBias;
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
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,my=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_y=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,gy=`float getShadowMask() {
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
}`,xy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vy=`#ifdef USE_SKINNING
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
#endif`,yy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,My=`#ifdef USE_SKINNING
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
#endif`,Sy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ty=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,by=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ey=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ay=`#ifdef USE_TRANSMISSION
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
#endif`,wy=`#ifdef USE_TRANSMISSION
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
#endif`,Ry=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Py=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ly=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Iy=`uniform sampler2D t2D;
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
}`,Ny=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Uy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Oy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,By=`#include <common>
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
}`,ky=`#if DEPTH_PACKING == 3200
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
}`,zy=`#define DISTANCE
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
}`,Vy=`#define DISTANCE
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
}`,Gy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wy=`uniform float scale;
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
}`,Xy=`uniform vec3 diffuse;
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
}`,Yy=`#include <common>
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
}`,qy=`uniform vec3 diffuse;
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
}`,jy=`#define LAMBERT
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
}`,Ky=`#define LAMBERT
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,$y=`#define MATCAP
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
}`,Zy=`#define MATCAP
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
}`,Jy=`#define NORMAL
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
}`,Qy=`#define NORMAL
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
}`,eM=`#define PHONG
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
}`,tM=`#define PHONG
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,nM=`#define STANDARD
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
}`,iM=`#define STANDARD
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
}`,rM=`#define TOON
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
}`,sM=`#define TOON
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
}`,aM=`uniform float size;
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
}`,oM=`uniform vec3 diffuse;
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
}`,lM=`#include <common>
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
}`,cM=`uniform vec3 color;
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
}`,uM=`uniform float rotation;
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
}`,hM=`uniform vec3 diffuse;
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
}`,tt={alphahash_fragment:Ix,alphahash_pars_fragment:Nx,alphamap_fragment:Ux,alphamap_pars_fragment:Ox,alphatest_fragment:Fx,alphatest_pars_fragment:Bx,aomap_fragment:kx,aomap_pars_fragment:zx,batching_pars_vertex:Vx,batching_vertex:Gx,begin_vertex:Hx,beginnormal_vertex:Wx,bsdfs:Xx,iridescence_fragment:Yx,bumpmap_pars_fragment:qx,clipping_planes_fragment:jx,clipping_planes_pars_fragment:Kx,clipping_planes_pars_vertex:$x,clipping_planes_vertex:Zx,color_fragment:Jx,color_pars_fragment:Qx,color_pars_vertex:ev,color_vertex:tv,common:nv,cube_uv_reflection_fragment:iv,defaultnormal_vertex:rv,displacementmap_pars_vertex:sv,displacementmap_vertex:av,emissivemap_fragment:ov,emissivemap_pars_fragment:lv,colorspace_fragment:cv,colorspace_pars_fragment:uv,envmap_fragment:hv,envmap_common_pars_fragment:fv,envmap_pars_fragment:dv,envmap_pars_vertex:pv,envmap_physical_pars_fragment:Ev,envmap_vertex:mv,fog_vertex:_v,fog_pars_vertex:gv,fog_fragment:xv,fog_pars_fragment:vv,gradientmap_pars_fragment:yv,lightmap_pars_fragment:Mv,lights_lambert_fragment:Sv,lights_lambert_pars_fragment:Tv,lights_pars_begin:bv,lights_toon_fragment:Av,lights_toon_pars_fragment:wv,lights_phong_fragment:Rv,lights_phong_pars_fragment:Cv,lights_physical_fragment:Pv,lights_physical_pars_fragment:Dv,lights_fragment_begin:Lv,lights_fragment_maps:Iv,lights_fragment_end:Nv,logdepthbuf_fragment:Uv,logdepthbuf_pars_fragment:Ov,logdepthbuf_pars_vertex:Fv,logdepthbuf_vertex:Bv,map_fragment:kv,map_pars_fragment:zv,map_particle_fragment:Vv,map_particle_pars_fragment:Gv,metalnessmap_fragment:Hv,metalnessmap_pars_fragment:Wv,morphinstance_vertex:Xv,morphcolor_vertex:Yv,morphnormal_vertex:qv,morphtarget_pars_vertex:jv,morphtarget_vertex:Kv,normal_fragment_begin:$v,normal_fragment_maps:Zv,normal_pars_fragment:Jv,normal_pars_vertex:Qv,normal_vertex:ey,normalmap_pars_fragment:ty,clearcoat_normal_fragment_begin:ny,clearcoat_normal_fragment_maps:iy,clearcoat_pars_fragment:ry,iridescence_pars_fragment:sy,opaque_fragment:ay,packing:oy,premultiplied_alpha_fragment:ly,project_vertex:cy,dithering_fragment:uy,dithering_pars_fragment:hy,roughnessmap_fragment:fy,roughnessmap_pars_fragment:dy,shadowmap_pars_fragment:py,shadowmap_pars_vertex:my,shadowmap_vertex:_y,shadowmask_pars_fragment:gy,skinbase_vertex:xy,skinning_pars_vertex:vy,skinning_vertex:yy,skinnormal_vertex:My,specularmap_fragment:Sy,specularmap_pars_fragment:Ty,tonemapping_fragment:by,tonemapping_pars_fragment:Ey,transmission_fragment:Ay,transmission_pars_fragment:wy,uv_pars_fragment:Ry,uv_pars_vertex:Cy,uv_vertex:Py,worldpos_vertex:Dy,background_vert:Ly,background_frag:Iy,backgroundCube_vert:Ny,backgroundCube_frag:Uy,cube_vert:Oy,cube_frag:Fy,depth_vert:By,depth_frag:ky,distance_vert:zy,distance_frag:Vy,equirect_vert:Gy,equirect_frag:Hy,linedashed_vert:Wy,linedashed_frag:Xy,meshbasic_vert:Yy,meshbasic_frag:qy,meshlambert_vert:jy,meshlambert_frag:Ky,meshmatcap_vert:$y,meshmatcap_frag:Zy,meshnormal_vert:Jy,meshnormal_frag:Qy,meshphong_vert:eM,meshphong_frag:tM,meshphysical_vert:nM,meshphysical_frag:iM,meshtoon_vert:rM,meshtoon_frag:sM,points_vert:aM,points_frag:oM,shadow_vert:lM,shadow_frag:cM,sprite_vert:uM,sprite_frag:hM},me={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},Gi={basic:{uniforms:Dn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:Dn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ke(0)}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:Dn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:Dn([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:Dn([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Ke(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:Dn([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:Dn([me.points,me.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:Dn([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:Dn([me.common,me.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:Dn([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:Dn([me.sprite,me.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distance:{uniforms:Dn([me.common,me.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distance_vert,fragmentShader:tt.distance_frag},shadow:{uniforms:Dn([me.lights,me.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};Gi.physical={uniforms:Dn([Gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};const _l={r:0,b:0,g:0},is=new er,fM=new et;function dM(s,e,t,n,i,r,a){const o=new Ke(0);let l=r===!0?0:1,c,u,h=null,f=0,d=null;function _(T){let y=T.isScene===!0?T.background:null;return y&&y.isTexture&&(y=(T.backgroundBlurriness>0?t:e).get(y)),y}function g(T){let y=!1;const b=_(T);b===null?p(o,l):b&&b.isColor&&(p(b,1),y=!0);const w=s.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(T,y){const b=_(y);b&&(b.isCubeTexture||b.mapping===dc)?(u===void 0&&(u=new di(new Ho(1,1,1),new tr({name:"BackgroundCubeMaterial",uniforms:Sa(Gi.backgroundCube.uniforms),vertexShader:Gi.backgroundCube.vertexShader,fragmentShader:Gi.backgroundCube.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),is.copy(y.backgroundRotation),is.x*=-1,is.y*=-1,is.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(fM.makeRotationFromEuler(is)),u.material.toneMapped=ht.getTransfer(b.colorSpace)!==Mt,(h!==b||f!==b.version||d!==s.toneMapping)&&(u.material.needsUpdate=!0,h=b,f=b.version,d=s.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new di(new pc(2,2),new tr({name:"BackgroundMaterial",uniforms:Sa(Gi.background.uniforms),vertexShader:Gi.background.vertexShader,fragmentShader:Gi.background.fragmentShader,side:Mr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=ht.getTransfer(b.colorSpace)!==Mt,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||f!==b.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=b,f=b.version,d=s.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function p(T,y){T.getRGB(_l,bm(s)),n.buffers.color.setClear(_l.r,_l.g,_l.b,y,a)}function M(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(T,y=1){o.set(T),l=y,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,p(o,l)},render:g,addToRenderList:m,dispose:M}}function pM(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,a=!1;function o(S,P,I,B,H){let G=!1;const V=h(B,I,P);r!==V&&(r=V,c(r.object)),G=d(S,B,I,H),G&&_(S,B,I,H),H!==null&&e.update(H,s.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,y(S,P,I,B),H!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return s.createVertexArray()}function c(S){return s.bindVertexArray(S)}function u(S){return s.deleteVertexArray(S)}function h(S,P,I){const B=I.wireframe===!0;let H=n[S.id];H===void 0&&(H={},n[S.id]=H);let G=H[P.id];G===void 0&&(G={},H[P.id]=G);let V=G[B];return V===void 0&&(V=f(l()),G[B]=V),V}function f(S){const P=[],I=[],B=[];for(let H=0;H<t;H++)P[H]=0,I[H]=0,B[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:I,attributeDivisors:B,object:S,attributes:{},index:null}}function d(S,P,I,B){const H=r.attributes,G=P.attributes;let V=0;const O=I.getAttributes();for(const j in O)if(O[j].location>=0){const D=H[j];let re=G[j];if(re===void 0&&(j==="instanceMatrix"&&S.instanceMatrix&&(re=S.instanceMatrix),j==="instanceColor"&&S.instanceColor&&(re=S.instanceColor)),D===void 0||D.attribute!==re||re&&D.data!==re.data)return!0;V++}return r.attributesNum!==V||r.index!==B}function _(S,P,I,B){const H={},G=P.attributes;let V=0;const O=I.getAttributes();for(const j in O)if(O[j].location>=0){let D=G[j];D===void 0&&(j==="instanceMatrix"&&S.instanceMatrix&&(D=S.instanceMatrix),j==="instanceColor"&&S.instanceColor&&(D=S.instanceColor));const re={};re.attribute=D,D&&D.data&&(re.data=D.data),H[j]=re,V++}r.attributes=H,r.attributesNum=V,r.index=B}function g(){const S=r.newAttributes;for(let P=0,I=S.length;P<I;P++)S[P]=0}function m(S){p(S,0)}function p(S,P){const I=r.newAttributes,B=r.enabledAttributes,H=r.attributeDivisors;I[S]=1,B[S]===0&&(s.enableVertexAttribArray(S),B[S]=1),H[S]!==P&&(s.vertexAttribDivisor(S,P),H[S]=P)}function M(){const S=r.newAttributes,P=r.enabledAttributes;for(let I=0,B=P.length;I<B;I++)P[I]!==S[I]&&(s.disableVertexAttribArray(I),P[I]=0)}function T(S,P,I,B,H,G,V){V===!0?s.vertexAttribIPointer(S,P,I,H,G):s.vertexAttribPointer(S,P,I,B,H,G)}function y(S,P,I,B){g();const H=B.attributes,G=I.getAttributes(),V=P.defaultAttributeValues;for(const O in G){const j=G[O];if(j.location>=0){let ie=H[O];if(ie===void 0&&(O==="instanceMatrix"&&S.instanceMatrix&&(ie=S.instanceMatrix),O==="instanceColor"&&S.instanceColor&&(ie=S.instanceColor)),ie!==void 0){const D=ie.normalized,re=ie.itemSize,Ie=e.get(ie);if(Ie===void 0)continue;const Be=Ie.buffer,Xe=Ie.type,$e=Ie.bytesPerElement,K=Xe===s.INT||Xe===s.UNSIGNED_INT||ie.gpuType===Yh;if(ie.isInterleavedBufferAttribute){const J=ie.data,fe=J.stride,Ce=ie.offset;if(J.isInstancedInterleavedBuffer){for(let ye=0;ye<j.locationSize;ye++)p(j.location+ye,J.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ye=0;ye<j.locationSize;ye++)m(j.location+ye);s.bindBuffer(s.ARRAY_BUFFER,Be);for(let ye=0;ye<j.locationSize;ye++)T(j.location+ye,re/j.locationSize,Xe,D,fe*$e,(Ce+re/j.locationSize*ye)*$e,K)}else{if(ie.isInstancedBufferAttribute){for(let J=0;J<j.locationSize;J++)p(j.location+J,ie.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let J=0;J<j.locationSize;J++)m(j.location+J);s.bindBuffer(s.ARRAY_BUFFER,Be);for(let J=0;J<j.locationSize;J++)T(j.location+J,re/j.locationSize,Xe,D,re*$e,re/j.locationSize*J*$e,K)}}else if(V!==void 0){const D=V[O];if(D!==void 0)switch(D.length){case 2:s.vertexAttrib2fv(j.location,D);break;case 3:s.vertexAttrib3fv(j.location,D);break;case 4:s.vertexAttrib4fv(j.location,D);break;default:s.vertexAttrib1fv(j.location,D)}}}}M()}function b(){C();for(const S in n){const P=n[S];for(const I in P){const B=P[I];for(const H in B)u(B[H].object),delete B[H];delete P[I]}delete n[S]}}function w(S){if(n[S.id]===void 0)return;const P=n[S.id];for(const I in P){const B=P[I];for(const H in B)u(B[H].object),delete B[H];delete P[I]}delete n[S.id]}function A(S){for(const P in n){const I=n[P];if(I[S.id]===void 0)continue;const B=I[S.id];for(const H in B)u(B[H].object),delete B[H];delete I[S.id]}}function C(){x(),a=!0,r!==i&&(r=i,c(r.object))}function x(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:C,resetDefaultState:x,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:g,enableAttribute:m,disableUnusedAttributes:M}}function mM(s,e,t){let n;function i(c){n=c}function r(c,u){s.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,h){h!==0&&(s.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let _=0;_<h;_++)d+=u[_];t.update(d,n,1)}function l(c,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<c.length;_++)a(c[_],u[_],f[_]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let _=0;for(let g=0;g<h;g++)_+=u[g]*f[g];t.update(_,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function _M(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(A){return!(A!==bi&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const C=A===Sr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==oi&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Ti&&!C)}function l(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(De("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),T=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),b=s.getParameter(s.MAX_SAMPLES),w=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:T,maxFragmentUniforms:y,maxSamples:b,samples:w}}function gM(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new Or,o=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const _=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,p=s.get(h);if(!i||_===null||_.length===0||r&&!m)r?u(null):c();else{const M=r?0:n,T=M*4;let y=p.clippingState||null;l.value=y,y=u(_,f,T,d);for(let b=0;b!==T;++b)y[b]=t[b];p.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,_){const g=h!==null?h.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const p=d+g*4,M=f.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,y=d;T!==g;++T,y+=4)a.copy(h[T]).applyMatrix4(M,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function xM(s){let e=new WeakMap;function t(a,o){return o===Lu?a.mapping=Es:o===Iu&&(a.mapping=xa),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Lu||o===Iu)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new wm(l.height);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Br=4,Gd=[.125,.215,.35,.446,.526,.582],fs=20,vM=256,Ya=new mc,Hd=new Ke;let Zc=null,Jc=0,Qc=0,eu=!1;const yM=new k;class Wd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){const{size:a=256,position:o=yM}=r;Zc=this._renderer.getRenderTarget(),Jc=this._renderer.getActiveCubeFace(),Qc=this._renderer.getActiveMipmapLevel(),eu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Zc,Jc,Qc),this._renderer.xr.enabled=eu,e.scissorTest=!1,Ks(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Es||e.mapping===xa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zc=this._renderer.getRenderTarget(),Jc=this._renderer.getActiveCubeFace(),Qc=this._renderer.getActiveMipmapLevel(),eu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:Sr,format:bi,colorSpace:kn,depthBuffer:!1},i=Xd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xd(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=MM(r)),this._blurMaterial=TM(r,e,t),this._ggxMaterial=SM(r,e,t)}return i}_compileMaterial(e){const t=new di(new _i,e);this._renderer.compile(t,Ya)}_sceneToCubeUV(e,t,n,i,r){const l=new Un(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Hd),h.toneMapping=Ki,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(i),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new di(new Ho,new ps({name:"PMREM.Background",side:Yn,depthWrite:!1,depthTest:!1})));const g=this._backgroundBox,m=g.material;let p=!1;const M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,p=!0):(m.color.copy(Hd),p=!0);for(let T=0;T<6;T++){const y=T%3;y===0?(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[T],r.y,r.z)):y===1?(l.up.set(0,0,c[T]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[T],r.z)):(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[T]));const b=this._cubeSize;Ks(i,y*b,T>2?b:0,b,b),h.setRenderTarget(i),p&&h.render(g,l),h.render(e,l)}h.toneMapping=d,h.autoClear=f,e.background=M}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Es||e.mapping===xa;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=qd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yd());const r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Ks(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Ya)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),f=0+c*1.25,d=h*f,{_lodMax:_}=this,g=this._sizeLods[n],m=3*g*(n>_-Br?n-_+Br:0),p=4*(this._cubeSize-g);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=_-t,Ks(r,m,p,3*g,2*g),i.setRenderTarget(r),i.render(o,Ya),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-n,Ks(e,m,p,3*g,2*g),i.setRenderTarget(e),i.render(o,Ya)}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ve("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[i];h.material=c;const f=c.uniforms,d=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*fs-1),g=r/_,m=isFinite(r)?1+Math.floor(u*g):fs;m>fs&&De(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${fs}`);const p=[];let M=0;for(let A=0;A<fs;++A){const C=A/g,x=Math.exp(-C*C/2);p.push(x),A===0?M+=x:A<m&&(M+=2*x)}for(let A=0;A<p.length;A++)p[A]=p[A]/M;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:T}=this;f.dTheta.value=_,f.mipInt.value=T-n;const y=this._sizeLods[i],b=3*y*(i>T-Br?i-T+Br:0),w=4*(this._cubeSize-y);Ks(t,b,w,3*y,2*y),l.setRenderTarget(t),l.render(h,Ya)}}function MM(s){const e=[],t=[],n=[];let i=s;const r=s-Br+1+Gd.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>s-Br?l=Gd[a-s+Br-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,_=6,g=3,m=2,p=1,M=new Float32Array(g*_*d),T=new Float32Array(m*_*d),y=new Float32Array(p*_*d);for(let w=0;w<d;w++){const A=w%3*2/3-1,C=w>2?0:-1,x=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];M.set(x,g*_*w),T.set(f,m*_*w);const S=[w,w,w,w,w,w];y.set(S,p*_*w)}const b=new _i;b.setAttribute("position",new En(M,g)),b.setAttribute("uv",new En(T,m)),b.setAttribute("faceIndex",new En(y,p)),n.push(new di(b,null)),i>Br&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Xd(s,e,t){const n=new $i(s,e,t);return n.texture.mapping=dc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ks(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function SM(s,e,t){return new tr({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:vM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:_c(),fragmentShader:`

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

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

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
		`,blending:xr,depthTest:!1,depthWrite:!1})}function TM(s,e,t){const n=new Float32Array(fs),i=new k(0,1,0);return new tr({name:"SphericalGaussianBlur",defines:{n:fs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:_c(),fragmentShader:`

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
		`,blending:xr,depthTest:!1,depthWrite:!1})}function Yd(){return new tr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_c(),fragmentShader:`

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
		`,blending:xr,depthTest:!1,depthWrite:!1})}function qd(){return new tr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xr,depthTest:!1,depthWrite:!1})}function _c(){return`

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
	`}function bM(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Lu||l===Iu,u=l===Es||l===xa;if(c||u){let h=e.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Wd(s)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const d=o.image;return c&&d&&d.height>0||u&&d&&i(d)?(t===null&&(t=new Wd(s)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function EM(s){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Po("WebGLRenderer: "+n+" extension not supported."),i}}}function AM(s,e,t,n){const i={},r=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",a),delete i[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const d in f)e.update(f[d],s.ARRAY_BUFFER)}function c(h){const f=[],d=h.index,_=h.attributes.position;let g=0;if(d!==null){const M=d.array;g=d.version;for(let T=0,y=M.length;T<y;T+=3){const b=M[T+0],w=M[T+1],A=M[T+2];f.push(b,w,w,A,A,b)}}else if(_!==void 0){const M=_.array;g=_.version;for(let T=0,y=M.length/3-1;T<y;T+=3){const b=T+0,w=T+1,A=T+2;f.push(b,w,w,A,A,b)}}else return;const m=new(vm(f)?Tm:Sm)(f,1);m.version=g;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function wM(s,e,t){let n;function i(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,d){s.drawElements(n,d,r,f*a),t.update(d,n,1)}function c(f,d,_){_!==0&&(s.drawElementsInstanced(n,d,r,f*a,_),t.update(d,n,_))}function u(f,d,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,_);let m=0;for(let p=0;p<_;p++)m+=d[p];t.update(m,n,1)}function h(f,d,_,g){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/a,d[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,g,0,_);let p=0;for(let M=0;M<_;M++)p+=d[M]*g[M];t.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function RM(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:Ve("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function CM(s,e,t){const n=new WeakMap,i=new Ut;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==h){let S=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",S)};var d=S;f!==void 0&&f.texture.dispose();const _=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let y=0;_===!0&&(y=1),g===!0&&(y=2),m===!0&&(y=3);let b=o.attributes.position.count*y,w=1;b>e.maxTextureSize&&(w=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const A=new Float32Array(b*w*4*h),C=new ym(A,b,w,h);C.type=Ti,C.needsUpdate=!0;const x=y*4;for(let P=0;P<h;P++){const I=p[P],B=M[P],H=T[P],G=b*w*4*P;for(let V=0;V<I.count;V++){const O=V*x;_===!0&&(i.fromBufferAttribute(I,V),A[G+O+0]=i.x,A[G+O+1]=i.y,A[G+O+2]=i.z,A[G+O+3]=0),g===!0&&(i.fromBufferAttribute(B,V),A[G+O+4]=i.x,A[G+O+5]=i.y,A[G+O+6]=i.z,A[G+O+7]=0),m===!0&&(i.fromBufferAttribute(H,V),A[G+O+8]=i.x,A[G+O+9]=i.y,A[G+O+10]=i.z,A[G+O+11]=H.itemSize===4?i.w:1)}}f={count:h,texture:C,size:new qe(b,w)},n.set(o,f),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const g=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function PM(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const DM={[nm]:"LINEAR_TONE_MAPPING",[im]:"REINHARD_TONE_MAPPING",[rm]:"CINEON_TONE_MAPPING",[sm]:"ACES_FILMIC_TONE_MAPPING",[om]:"AGX_TONE_MAPPING",[lm]:"NEUTRAL_TONE_MAPPING",[am]:"CUSTOM_TONE_MAPPING"};function LM(s,e,t,n,i){const r=new $i(e,t,{type:s,depthBuffer:n,stencilBuffer:i}),a=new $i(e,t,{type:Sr,depthBuffer:!1,stencilBuffer:!1}),o=new _i;o.setAttribute("position",new Oi([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Oi([0,2,0,0,2,0],2));const l=new $0({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new di(o,l),u=new mc(-1,1,1,-1,0,1);let h=null,f=null,d=!1,_,g=null,m=[],p=!1;this.setSize=function(M,T){r.setSize(M,T),a.setSize(M,T);for(let y=0;y<m.length;y++){const b=m[y];b.setSize&&b.setSize(M,T)}},this.setEffects=function(M){m=M,p=m.length>0&&m[0].isRenderPass===!0;const T=r.width,y=r.height;for(let b=0;b<m.length;b++){const w=m[b];w.setSize&&w.setSize(T,y)}},this.begin=function(M,T){if(d||M.toneMapping===Ki&&m.length===0)return!1;if(g=T,T!==null){const y=T.width,b=T.height;(r.width!==y||r.height!==b)&&this.setSize(y,b)}return p===!1&&M.setRenderTarget(r),_=M.toneMapping,M.toneMapping=Ki,!0},this.hasRenderPass=function(){return p},this.end=function(M,T){M.toneMapping=_,d=!0;let y=r,b=a;for(let w=0;w<m.length;w++){const A=m[w];if(A.enabled!==!1&&(A.render(M,b,y,T),A.needsSwap!==!1)){const C=y;y=b,b=C}}if(h!==M.outputColorSpace||f!==M.toneMapping){h=M.outputColorSpace,f=M.toneMapping,l.defines={},ht.getTransfer(h)===Mt&&(l.defines.SRGB_TRANSFER="");const w=DM[f];w&&(l.defines[w]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=y.texture,M.setRenderTarget(g),M.render(c,u),g=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){r.dispose(),a.dispose(),o.dispose(),l.dispose()}}const Om=new dn,gh=new Do(1,1),Fm=new ym,Bm=new v0,km=new Am,jd=[],Kd=[],$d=new Float32Array(16),Zd=new Float32Array(9),Jd=new Float32Array(4);function Fa(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=jd[i];if(r===void 0&&(r=new Float32Array(i),jd[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function an(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function on(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function gc(s,e){let t=Kd[e];t===void 0&&(t=new Int32Array(e),Kd[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function IM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function NM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;s.uniform2fv(this.addr,e),on(t,e)}}function UM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(an(t,e))return;s.uniform3fv(this.addr,e),on(t,e)}}function OM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;s.uniform4fv(this.addr,e),on(t,e)}}function FM(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),on(t,e)}else{if(an(t,n))return;Jd.set(n),s.uniformMatrix2fv(this.addr,!1,Jd),on(t,n)}}function BM(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),on(t,e)}else{if(an(t,n))return;Zd.set(n),s.uniformMatrix3fv(this.addr,!1,Zd),on(t,n)}}function kM(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),on(t,e)}else{if(an(t,n))return;$d.set(n),s.uniformMatrix4fv(this.addr,!1,$d),on(t,n)}}function zM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function VM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;s.uniform2iv(this.addr,e),on(t,e)}}function GM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;s.uniform3iv(this.addr,e),on(t,e)}}function HM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;s.uniform4iv(this.addr,e),on(t,e)}}function WM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function XM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;s.uniform2uiv(this.addr,e),on(t,e)}}function YM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;s.uniform3uiv(this.addr,e),on(t,e)}}function qM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;s.uniform4uiv(this.addr,e),on(t,e)}}function jM(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(gh.compareFunction=t.isReversedDepthBuffer()?ef:Qh,r=gh):r=Om,t.setTexture2D(e||r,i)}function KM(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Bm,i)}function $M(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||km,i)}function ZM(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Fm,i)}function JM(s){switch(s){case 5126:return IM;case 35664:return NM;case 35665:return UM;case 35666:return OM;case 35674:return FM;case 35675:return BM;case 35676:return kM;case 5124:case 35670:return zM;case 35667:case 35671:return VM;case 35668:case 35672:return GM;case 35669:case 35673:return HM;case 5125:return WM;case 36294:return XM;case 36295:return YM;case 36296:return qM;case 35678:case 36198:case 36298:case 36306:case 35682:return jM;case 35679:case 36299:case 36307:return KM;case 35680:case 36300:case 36308:case 36293:return $M;case 36289:case 36303:case 36311:case 36292:return ZM}}function QM(s,e){s.uniform1fv(this.addr,e)}function eS(s,e){const t=Fa(e,this.size,2);s.uniform2fv(this.addr,t)}function tS(s,e){const t=Fa(e,this.size,3);s.uniform3fv(this.addr,t)}function nS(s,e){const t=Fa(e,this.size,4);s.uniform4fv(this.addr,t)}function iS(s,e){const t=Fa(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function rS(s,e){const t=Fa(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function sS(s,e){const t=Fa(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function aS(s,e){s.uniform1iv(this.addr,e)}function oS(s,e){s.uniform2iv(this.addr,e)}function lS(s,e){s.uniform3iv(this.addr,e)}function cS(s,e){s.uniform4iv(this.addr,e)}function uS(s,e){s.uniform1uiv(this.addr,e)}function hS(s,e){s.uniform2uiv(this.addr,e)}function fS(s,e){s.uniform3uiv(this.addr,e)}function dS(s,e){s.uniform4uiv(this.addr,e)}function pS(s,e,t){const n=this.cache,i=e.length,r=gc(t,i);an(n,r)||(s.uniform1iv(this.addr,r),on(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=gh:a=Om;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,r[o])}function mS(s,e,t){const n=this.cache,i=e.length,r=gc(t,i);an(n,r)||(s.uniform1iv(this.addr,r),on(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Bm,r[a])}function _S(s,e,t){const n=this.cache,i=e.length,r=gc(t,i);an(n,r)||(s.uniform1iv(this.addr,r),on(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||km,r[a])}function gS(s,e,t){const n=this.cache,i=e.length,r=gc(t,i);an(n,r)||(s.uniform1iv(this.addr,r),on(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Fm,r[a])}function xS(s){switch(s){case 5126:return QM;case 35664:return eS;case 35665:return tS;case 35666:return nS;case 35674:return iS;case 35675:return rS;case 35676:return sS;case 5124:case 35670:return aS;case 35667:case 35671:return oS;case 35668:case 35672:return lS;case 35669:case 35673:return cS;case 5125:return uS;case 36294:return hS;case 36295:return fS;case 36296:return dS;case 35678:case 36198:case 36298:case 36306:case 35682:return pS;case 35679:case 36299:case 36307:return mS;case 35680:case 36300:case 36308:case 36293:return _S;case 36289:case 36303:case 36311:case 36292:return gS}}class vS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=JM(t.type)}}class yS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=xS(t.type)}}class MS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const tu=/(\w+)(\])?(\[|\.)?/g;function Qd(s,e){s.seq.push(e),s.map[e.id]=e}function SS(s,e,t){const n=s.name,i=n.length;for(tu.lastIndex=0;;){const r=tu.exec(n),a=tu.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Qd(t,c===void 0?new vS(o,s,e):new yS(o,s,e));break}else{let h=t.map[o];h===void 0&&(h=new MS(o),Qd(t,h)),t=h}}}class Bl{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);SS(o,l,this)}const i=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function ep(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const TS=37297;let bS=0;function ES(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const tp=new Qe;function AS(s){ht._getMatrix(tp,ht.workingColorSpace,s);const e=`mat3( ${tp.elements.map(t=>t.toFixed(4))} )`;switch(ht.getTransfer(s)){case $l:return[e,"LinearTransferOETF"];case Mt:return[e,"sRGBTransferOETF"];default:return De("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function np(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+ES(s.getShaderSource(e),o)}else return r}function wS(s,e){const t=AS(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const RS={[nm]:"Linear",[im]:"Reinhard",[rm]:"Cineon",[sm]:"ACESFilmic",[om]:"AgX",[lm]:"Neutral",[am]:"Custom"};function CS(s,e){const t=RS[e];return t===void 0?(De("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const gl=new k;function PS(){ht.getLuminanceCoefficients(gl);const s=gl.x.toFixed(4),e=gl.y.toFixed(4),t=gl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function DS(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(eo).join(`
`)}function LS(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function IS(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function eo(s){return s!==""}function ip(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function rp(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const NS=/^[ \t]*#include +<([\w\d./]+)>/gm;function xh(s){return s.replace(NS,OS)}const US=new Map;function OS(s,e){let t=tt[e];if(t===void 0){const n=US.get(e);if(n!==void 0)t=tt[n],De('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return xh(t)}const FS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sp(s){return s.replace(FS,BS)}function BS(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function ap(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const kS={[Ll]:"SHADOWMAP_TYPE_PCF",[Ja]:"SHADOWMAP_TYPE_VSM"};function zS(s){return kS[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const VS={[Es]:"ENVMAP_TYPE_CUBE",[xa]:"ENVMAP_TYPE_CUBE",[dc]:"ENVMAP_TYPE_CUBE_UV"};function GS(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":VS[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const HS={[xa]:"ENVMAP_MODE_REFRACTION"};function WS(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":HS[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const XS={[tm]:"ENVMAP_BLENDING_MULTIPLY",[Og]:"ENVMAP_BLENDING_MIX",[Fg]:"ENVMAP_BLENDING_ADD"};function YS(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":XS[s.combine]||"ENVMAP_BLENDING_NONE"}function qS(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function jS(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=zS(t),c=GS(t),u=WS(t),h=YS(t),f=qS(t),d=DS(t),_=LS(r),g=i.createProgram();let m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(eo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(eo).join(`
`),p.length>0&&(p+=`
`)):(m=[ap(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(eo).join(`
`),p=[ap(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ki?"#define TONE_MAPPING":"",t.toneMapping!==Ki?tt.tonemapping_pars_fragment:"",t.toneMapping!==Ki?CS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,wS("linearToOutputTexel",t.outputColorSpace),PS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(eo).join(`
`)),a=xh(a),a=ip(a,t),a=rp(a,t),o=xh(o),o=ip(o,t),o=rp(o,t),a=sp(a),o=sp(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===nd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===nd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const T=M+m+a,y=M+p+o,b=ep(i,i.VERTEX_SHADER,T),w=ep(i,i.FRAGMENT_SHADER,y);i.attachShader(g,b),i.attachShader(g,w),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function A(P){if(s.debug.checkShaderErrors){const I=i.getProgramInfoLog(g)||"",B=i.getShaderInfoLog(b)||"",H=i.getShaderInfoLog(w)||"",G=I.trim(),V=B.trim(),O=H.trim();let j=!0,ie=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(j=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,b,w);else{const D=np(i,b,"vertex"),re=np(i,w,"fragment");Ve("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+G+`
`+D+`
`+re)}else G!==""?De("WebGLProgram: Program Info Log:",G):(V===""||O==="")&&(ie=!1);ie&&(P.diagnostics={runnable:j,programLog:G,vertexShader:{log:V,prefix:m},fragmentShader:{log:O,prefix:p}})}i.deleteShader(b),i.deleteShader(w),C=new Bl(i,g),x=IS(i,g)}let C;this.getUniforms=function(){return C===void 0&&A(this),C};let x;this.getAttributes=function(){return x===void 0&&A(this),x};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(g,TS)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=bS++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=b,this.fragmentShader=w,this}let KS=0;class $S{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new ZS(e),t.set(e,n)),n}}class ZS{constructor(e){this.id=KS++,this.code=e,this.usedTimes=0}}function JS(s,e,t,n,i,r,a){const o=new sf,l=new $S,c=new Set,u=[],h=new Map,f=i.logarithmicDepthBuffer;let d=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,S,P,I,B){const H=I.fog,G=B.geometry,V=x.isMeshStandardMaterial?I.environment:null,O=(x.isMeshStandardMaterial?t:e).get(x.envMap||V),j=O&&O.mapping===dc?O.image.height:null,ie=_[x.type];x.precision!==null&&(d=i.getMaxPrecision(x.precision),d!==x.precision&&De("WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const D=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,re=D!==void 0?D.length:0;let Ie=0;G.morphAttributes.position!==void 0&&(Ie=1),G.morphAttributes.normal!==void 0&&(Ie=2),G.morphAttributes.color!==void 0&&(Ie=3);let Be,Xe,$e,K;if(ie){const _e=Gi[ie];Be=_e.vertexShader,Xe=_e.fragmentShader}else Be=x.vertexShader,Xe=x.fragmentShader,l.update(x),$e=l.getVertexShaderID(x),K=l.getFragmentShaderID(x);const J=s.getRenderTarget(),fe=s.state.buffers.depth.getReversed(),Ce=B.isInstancedMesh===!0,ye=B.isBatchedMesh===!0,Ge=!!x.map,dt=!!x.matcap,be=!!O,ke=!!x.aoMap,Ze=!!x.lightMap,Ue=!!x.bumpMap,W=!!x.normalMap,N=!!x.displacementMap,gt=!!x.emissiveMap,nt=!!x.metalnessMap,ze=!!x.roughnessMap,Me=x.anisotropy>0,R=x.clearcoat>0,v=x.dispersion>0,U=x.iridescence>0,$=x.sheen>0,Z=x.transmission>0,q=Me&&!!x.anisotropyMap,ve=R&&!!x.clearcoatMap,se=R&&!!x.clearcoatNormalMap,Ee=R&&!!x.clearcoatRoughnessMap,Te=U&&!!x.iridescenceMap,ne=U&&!!x.iridescenceThicknessMap,ae=$&&!!x.sheenColorMap,Se=$&&!!x.sheenRoughnessMap,Ae=!!x.specularMap,oe=!!x.specularColorMap,We=!!x.specularIntensityMap,L=Z&&!!x.transmissionMap,ue=Z&&!!x.thicknessMap,te=!!x.gradientMap,he=!!x.alphaMap,ee=x.alphaTest>0,Q=!!x.alphaHash,ce=!!x.extensions;let Ne=Ki;x.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Ne=s.toneMapping);const pt={shaderID:ie,shaderType:x.type,shaderName:x.name,vertexShader:Be,fragmentShader:Xe,defines:x.defines,customVertexShaderID:$e,customFragmentShaderID:K,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:ye,batchingColor:ye&&B._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&B.instanceColor!==null,instancingMorph:Ce&&B.morphTexture!==null,outputColorSpace:J===null?s.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:kn,alphaToCoverage:!!x.alphaToCoverage,map:Ge,matcap:dt,envMap:be,envMapMode:be&&O.mapping,envMapCubeUVHeight:j,aoMap:ke,lightMap:Ze,bumpMap:Ue,normalMap:W,displacementMap:N,emissiveMap:gt,normalMapObjectSpace:W&&x.normalMapType===Gg,normalMapTangentSpace:W&&x.normalMapType===xm,metalnessMap:nt,roughnessMap:ze,anisotropy:Me,anisotropyMap:q,clearcoat:R,clearcoatMap:ve,clearcoatNormalMap:se,clearcoatRoughnessMap:Ee,dispersion:v,iridescence:U,iridescenceMap:Te,iridescenceThicknessMap:ne,sheen:$,sheenColorMap:ae,sheenRoughnessMap:Se,specularMap:Ae,specularColorMap:oe,specularIntensityMap:We,transmission:Z,transmissionMap:L,thicknessMap:ue,gradientMap:te,opaque:x.transparent===!1&&x.blending===oa&&x.alphaToCoverage===!1,alphaMap:he,alphaTest:ee,alphaHash:Q,combine:x.combine,mapUv:Ge&&g(x.map.channel),aoMapUv:ke&&g(x.aoMap.channel),lightMapUv:Ze&&g(x.lightMap.channel),bumpMapUv:Ue&&g(x.bumpMap.channel),normalMapUv:W&&g(x.normalMap.channel),displacementMapUv:N&&g(x.displacementMap.channel),emissiveMapUv:gt&&g(x.emissiveMap.channel),metalnessMapUv:nt&&g(x.metalnessMap.channel),roughnessMapUv:ze&&g(x.roughnessMap.channel),anisotropyMapUv:q&&g(x.anisotropyMap.channel),clearcoatMapUv:ve&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:se&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:ae&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:Se&&g(x.sheenRoughnessMap.channel),specularMapUv:Ae&&g(x.specularMap.channel),specularColorMapUv:oe&&g(x.specularColorMap.channel),specularIntensityMapUv:We&&g(x.specularIntensityMap.channel),transmissionMapUv:L&&g(x.transmissionMap.channel),thicknessMapUv:ue&&g(x.thicknessMap.channel),alphaMapUv:he&&g(x.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(W||Me),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!G.attributes.uv&&(Ge||he),fog:!!H,useFog:x.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:x.flatShading===!0&&x.wireframe===!1,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:fe,skinning:B.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:Ie,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ne,decodeVideoTexture:Ge&&x.map.isVideoTexture===!0&&ht.getTransfer(x.map.colorSpace)===Mt,decodeVideoTextureEmissive:gt&&x.emissiveMap.isVideoTexture===!0&&ht.getTransfer(x.emissiveMap.colorSpace)===Mt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Hi,flipSided:x.side===Yn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ce&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ce&&x.extensions.multiDraw===!0||ye)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return pt.vertexUv1s=c.has(1),pt.vertexUv2s=c.has(2),pt.vertexUv3s=c.has(3),c.clear(),pt}function p(x){const S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(const P in x.defines)S.push(P),S.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(M(S,x),T(S,x),S.push(s.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function M(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapCubeUVHeight),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.morphAttributeCount),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function T(x,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),x.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),x.push(o.mask)}function y(x){const S=_[x.type];let P;if(S){const I=Gi[S];P=L0.clone(I.uniforms)}else P=x.uniforms;return P}function b(x,S){let P=h.get(S);return P!==void 0?++P.usedTimes:(P=new jS(s,S,x,r),u.push(P),h.set(S,P)),P}function w(x){if(--x.usedTimes===0){const S=u.indexOf(x);u[S]=u[u.length-1],u.pop(),h.delete(x.cacheKey),x.destroy()}}function A(x){l.remove(x)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:b,releaseProgram:w,releaseShaderCache:A,programs:u,dispose:C}}function QS(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function eT(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function op(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function lp(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(h,f,d,_,g,m){let p=s[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:_,renderOrder:h.renderOrder,z:g,group:m},s[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=_,p.renderOrder=h.renderOrder,p.z=g,p.group=m),e++,p}function o(h,f,d,_,g,m){const p=a(h,f,d,_,g,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function l(h,f,d,_,g,m){const p=a(h,f,d,_,g,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||eT),n.length>1&&n.sort(f||op),i.length>1&&i.sort(f||op)}function u(){for(let h=e,f=s.length;h<f;h++){const d=s[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:u,sort:c}}function tT(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new lp,s.set(n,[a])):i>=r.length?(a=new lp,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function nT(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new Ke};break;case"SpotLight":t={position:new k,direction:new k,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new k,halfWidth:new k,halfHeight:new k};break}return s[e.id]=t,t}}}function iT(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let rT=0;function sT(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function aT(s){const e=new nT,t=iT(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new k);const i=new k,r=new et,a=new et;function o(c){let u=0,h=0,f=0;for(let x=0;x<9;x++)n.probe[x].set(0,0,0);let d=0,_=0,g=0,m=0,p=0,M=0,T=0,y=0,b=0,w=0,A=0;c.sort(sT);for(let x=0,S=c.length;x<S;x++){const P=c[x],I=P.color,B=P.intensity,H=P.distance;let G=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===ya?G=P.shadow.map.texture:G=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=I.r*B,h+=I.g*B,f+=I.b*B;else if(P.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(P.sh.coefficients[V],B);A++}else if(P.isDirectionalLight){const V=e.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const O=P.shadow,j=t.get(P);j.shadowIntensity=O.intensity,j.shadowBias=O.bias,j.shadowNormalBias=O.normalBias,j.shadowRadius=O.radius,j.shadowMapSize=O.mapSize,n.directionalShadow[d]=j,n.directionalShadowMap[d]=G,n.directionalShadowMatrix[d]=P.shadow.matrix,M++}n.directional[d]=V,d++}else if(P.isSpotLight){const V=e.get(P);V.position.setFromMatrixPosition(P.matrixWorld),V.color.copy(I).multiplyScalar(B),V.distance=H,V.coneCos=Math.cos(P.angle),V.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),V.decay=P.decay,n.spot[g]=V;const O=P.shadow;if(P.map&&(n.spotLightMap[b]=P.map,b++,O.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[g]=O.matrix,P.castShadow){const j=t.get(P);j.shadowIntensity=O.intensity,j.shadowBias=O.bias,j.shadowNormalBias=O.normalBias,j.shadowRadius=O.radius,j.shadowMapSize=O.mapSize,n.spotShadow[g]=j,n.spotShadowMap[g]=G,y++}g++}else if(P.isRectAreaLight){const V=e.get(P);V.color.copy(I).multiplyScalar(B),V.halfWidth.set(P.width*.5,0,0),V.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=V,m++}else if(P.isPointLight){const V=e.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),V.distance=P.distance,V.decay=P.decay,P.castShadow){const O=P.shadow,j=t.get(P);j.shadowIntensity=O.intensity,j.shadowBias=O.bias,j.shadowNormalBias=O.normalBias,j.shadowRadius=O.radius,j.shadowMapSize=O.mapSize,j.shadowCameraNear=O.camera.near,j.shadowCameraFar=O.camera.far,n.pointShadow[_]=j,n.pointShadowMap[_]=G,n.pointShadowMatrix[_]=P.shadow.matrix,T++}n.point[_]=V,_++}else if(P.isHemisphereLight){const V=e.get(P);V.skyColor.copy(P.color).multiplyScalar(B),V.groundColor.copy(P.groundColor).multiplyScalar(B),n.hemi[p]=V,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=me.LTC_FLOAT_1,n.rectAreaLTC2=me.LTC_FLOAT_2):(n.rectAreaLTC1=me.LTC_HALF_1,n.rectAreaLTC2=me.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const C=n.hash;(C.directionalLength!==d||C.pointLength!==_||C.spotLength!==g||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==M||C.numPointShadows!==T||C.numSpotShadows!==y||C.numSpotMaps!==b||C.numLightProbes!==A)&&(n.directional.length=d,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=y+b-w,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=A,C.directionalLength=d,C.pointLength=_,C.spotLength=g,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=M,C.numPointShadows=T,C.numSpotShadows=y,C.numSpotMaps=b,C.numLightProbes=A,n.version=rT++)}function l(c,u){let h=0,f=0,d=0,_=0,g=0;const m=u.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const T=c[p];if(T.isDirectionalLight){const y=n.directional[h];y.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),h++}else if(T.isSpotLight){const y=n.spot[d];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),d++}else if(T.isRectAreaLight){const y=n.rectArea[_];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(m),a.identity(),r.copy(T.matrixWorld),r.premultiply(m),a.extractRotation(r),y.halfWidth.set(T.width*.5,0,0),y.halfHeight.set(0,T.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),_++}else if(T.isPointLight){const y=n.point[f];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(m),f++}else if(T.isHemisphereLight){const y=n.hemi[g];y.direction.setFromMatrixPosition(T.matrixWorld),y.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:n}}function cp(s){const e=new aT(s),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function oT(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new cp(s),e.set(i,[o])):r>=a.length?(o=new cp(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const lT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cT=`uniform sampler2D shadow_pass;
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
}`,uT=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],hT=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],up=new et,qa=new k,nu=new k;function fT(s,e,t){let n=new uf;const i=new qe,r=new qe,a=new Ut,o=new Z0,l=new J0,c={},u=t.maxTextureSize,h={[Mr]:Yn,[Yn]:Mr,[Hi]:Hi},f=new tr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:lT,fragmentShader:cT}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const _=new _i;_.setAttribute("position",new En(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new di(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ll;let p=this.type;this.render=function(w,A,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;w.type===gg&&(De("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),w.type=Ll);const x=s.getRenderTarget(),S=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),I=s.state;I.setBlending(xr),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const B=p!==this.type;B&&A.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(G=>G.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,G=w.length;H<G;H++){const V=w[H],O=V.shadow;if(O===void 0){De("WebGLShadowMap:",V,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);const j=O.getFrameExtents();if(i.multiply(j),r.copy(O.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/j.x),i.x=r.x*j.x,O.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/j.y),i.y=r.y*j.y,O.mapSize.y=r.y)),O.map===null||B===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Ja){if(V.isPointLight){De("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new $i(i.x,i.y,{format:ya,type:Sr,minFilter:sn,magFilter:sn,generateMipmaps:!1}),O.map.texture.name=V.name+".shadowMap",O.map.depthTexture=new Do(i.x,i.y,Ti),O.map.depthTexture.name=V.name+".shadowMapDepth",O.map.depthTexture.format=Tr,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=rn,O.map.depthTexture.magFilter=rn}else{V.isPointLight?(O.map=new wm(i.x),O.map.depthTexture=new K0(i.x,Qi)):(O.map=new $i(i.x,i.y),O.map.depthTexture=new Do(i.x,i.y,Qi)),O.map.depthTexture.name=V.name+".shadowMap",O.map.depthTexture.format=Tr;const D=s.state.buffers.depth.getReversed();this.type===Ll?(O.map.depthTexture.compareFunction=D?ef:Qh,O.map.depthTexture.minFilter=sn,O.map.depthTexture.magFilter=sn):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=rn,O.map.depthTexture.magFilter=rn)}O.camera.updateProjectionMatrix()}const ie=O.map.isWebGLCubeRenderTarget?6:1;for(let D=0;D<ie;D++){if(O.map.isWebGLCubeRenderTarget)s.setRenderTarget(O.map,D),s.clear();else{D===0&&(s.setRenderTarget(O.map),s.clear());const re=O.getViewport(D);a.set(r.x*re.x,r.y*re.y,r.x*re.z,r.y*re.w),I.viewport(a)}if(V.isPointLight){const re=O.camera,Ie=O.matrix,Be=V.distance||re.far;Be!==re.far&&(re.far=Be,re.updateProjectionMatrix()),qa.setFromMatrixPosition(V.matrixWorld),re.position.copy(qa),nu.copy(re.position),nu.add(uT[D]),re.up.copy(hT[D]),re.lookAt(nu),re.updateMatrixWorld(),Ie.makeTranslation(-qa.x,-qa.y,-qa.z),up.multiplyMatrices(re.projectionMatrix,re.matrixWorldInverse),O._frustum.setFromProjectionMatrix(up,re.coordinateSystem,re.reversedDepth)}else O.updateMatrices(V);n=O.getFrustum(),y(A,C,O.camera,V,this.type)}O.isPointLightShadow!==!0&&this.type===Ja&&M(O,C),O.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(x,S,P)};function M(w,A){const C=e.update(g);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new $i(i.x,i.y,{format:ya,type:Sr})),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(A,null,C,f,g,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(A,null,C,d,g,null)}function T(w,A,C,x){let S=null;const P=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)S=P;else if(S=C.isPointLight===!0?l:o,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const I=S.uuid,B=A.uuid;let H=c[I];H===void 0&&(H={},c[I]=H);let G=H[B];G===void 0&&(G=S.clone(),H[B]=G,A.addEventListener("dispose",b)),S=G}if(S.visible=A.visible,S.wireframe=A.wireframe,x===Ja?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:h[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,C.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const I=s.properties.get(S);I.light=C}return S}function y(w,A,C,x,S){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===Ja)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);const B=e.update(w),H=w.material;if(Array.isArray(H)){const G=B.groups;for(let V=0,O=G.length;V<O;V++){const j=G[V],ie=H[j.materialIndex];if(ie&&ie.visible){const D=T(w,ie,x,S);w.onBeforeShadow(s,w,A,C,B,D,j),s.renderBufferDirect(C,null,B,D,w,j),w.onAfterShadow(s,w,A,C,B,D,j)}}}else if(H.visible){const G=T(w,H,x,S);w.onBeforeShadow(s,w,A,C,B,G,null),s.renderBufferDirect(C,null,B,G,w,null),w.onAfterShadow(s,w,A,C,B,G,null)}}const I=w.children;for(let B=0,H=I.length;B<H;B++)y(I[B],A,C,x,S)}function b(w){w.target.removeEventListener("dispose",b);for(const C in c){const x=c[C],S=w.target.uuid;S in x&&(x[S].dispose(),delete x[S])}}}const dT={[Eu]:Au,[wu]:Pu,[Ru]:Du,[ga]:Cu,[Au]:Eu,[Pu]:wu,[Du]:Ru,[Cu]:ga};function pT(s,e){function t(){let L=!1;const ue=new Ut;let te=null;const he=new Ut(0,0,0,0);return{setMask:function(ee){te!==ee&&!L&&(s.colorMask(ee,ee,ee,ee),te=ee)},setLocked:function(ee){L=ee},setClear:function(ee,Q,ce,Ne,pt){pt===!0&&(ee*=Ne,Q*=Ne,ce*=Ne),ue.set(ee,Q,ce,Ne),he.equals(ue)===!1&&(s.clearColor(ee,Q,ce,Ne),he.copy(ue))},reset:function(){L=!1,te=null,he.set(-1,0,0,0)}}}function n(){let L=!1,ue=!1,te=null,he=null,ee=null;return{setReversed:function(Q){if(ue!==Q){const ce=e.get("EXT_clip_control");Q?ce.clipControlEXT(ce.LOWER_LEFT_EXT,ce.ZERO_TO_ONE_EXT):ce.clipControlEXT(ce.LOWER_LEFT_EXT,ce.NEGATIVE_ONE_TO_ONE_EXT),ue=Q;const Ne=ee;ee=null,this.setClear(Ne)}},getReversed:function(){return ue},setTest:function(Q){Q?J(s.DEPTH_TEST):fe(s.DEPTH_TEST)},setMask:function(Q){te!==Q&&!L&&(s.depthMask(Q),te=Q)},setFunc:function(Q){if(ue&&(Q=dT[Q]),he!==Q){switch(Q){case Eu:s.depthFunc(s.NEVER);break;case Au:s.depthFunc(s.ALWAYS);break;case wu:s.depthFunc(s.LESS);break;case ga:s.depthFunc(s.LEQUAL);break;case Ru:s.depthFunc(s.EQUAL);break;case Cu:s.depthFunc(s.GEQUAL);break;case Pu:s.depthFunc(s.GREATER);break;case Du:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}he=Q}},setLocked:function(Q){L=Q},setClear:function(Q){ee!==Q&&(ue&&(Q=1-Q),s.clearDepth(Q),ee=Q)},reset:function(){L=!1,te=null,he=null,ee=null,ue=!1}}}function i(){let L=!1,ue=null,te=null,he=null,ee=null,Q=null,ce=null,Ne=null,pt=null;return{setTest:function(_e){L||(_e?J(s.STENCIL_TEST):fe(s.STENCIL_TEST))},setMask:function(_e){ue!==_e&&!L&&(s.stencilMask(_e),ue=_e)},setFunc:function(_e,Re,Je){(te!==_e||he!==Re||ee!==Je)&&(s.stencilFunc(_e,Re,Je),te=_e,he=Re,ee=Je)},setOp:function(_e,Re,Je){(Q!==_e||ce!==Re||Ne!==Je)&&(s.stencilOp(_e,Re,Je),Q=_e,ce=Re,Ne=Je)},setLocked:function(_e){L=_e},setClear:function(_e){pt!==_e&&(s.clearStencil(_e),pt=_e)},reset:function(){L=!1,ue=null,te=null,he=null,ee=null,Q=null,ce=null,Ne=null,pt=null}}}const r=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],_=null,g=!1,m=null,p=null,M=null,T=null,y=null,b=null,w=null,A=new Ke(0,0,0),C=0,x=!1,S=null,P=null,I=null,B=null,H=null;const G=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,O=0;const j=s.getParameter(s.VERSION);j.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(j)[1]),V=O>=1):j.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),V=O>=2);let ie=null,D={};const re=s.getParameter(s.SCISSOR_BOX),Ie=s.getParameter(s.VIEWPORT),Be=new Ut().fromArray(re),Xe=new Ut().fromArray(Ie);function $e(L,ue,te,he){const ee=new Uint8Array(4),Q=s.createTexture();s.bindTexture(L,Q),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ce=0;ce<te;ce++)L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY?s.texImage3D(ue,0,s.RGBA,1,1,he,0,s.RGBA,s.UNSIGNED_BYTE,ee):s.texImage2D(ue+ce,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ee);return Q}const K={};K[s.TEXTURE_2D]=$e(s.TEXTURE_2D,s.TEXTURE_2D,1),K[s.TEXTURE_CUBE_MAP]=$e(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[s.TEXTURE_2D_ARRAY]=$e(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),K[s.TEXTURE_3D]=$e(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),J(s.DEPTH_TEST),a.setFunc(ga),Ue(!1),W(qf),J(s.CULL_FACE),ke(xr);function J(L){u[L]!==!0&&(s.enable(L),u[L]=!0)}function fe(L){u[L]!==!1&&(s.disable(L),u[L]=!1)}function Ce(L,ue){return h[L]!==ue?(s.bindFramebuffer(L,ue),h[L]=ue,L===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=ue),L===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=ue),!0):!1}function ye(L,ue){let te=d,he=!1;if(L){te=f.get(ue),te===void 0&&(te=[],f.set(ue,te));const ee=L.textures;if(te.length!==ee.length||te[0]!==s.COLOR_ATTACHMENT0){for(let Q=0,ce=ee.length;Q<ce;Q++)te[Q]=s.COLOR_ATTACHMENT0+Q;te.length=ee.length,he=!0}}else te[0]!==s.BACK&&(te[0]=s.BACK,he=!0);he&&s.drawBuffers(te)}function Ge(L){return _!==L?(s.useProgram(L),_=L,!0):!1}const dt={[hs]:s.FUNC_ADD,[vg]:s.FUNC_SUBTRACT,[yg]:s.FUNC_REVERSE_SUBTRACT};dt[Mg]=s.MIN,dt[Sg]=s.MAX;const be={[Tg]:s.ZERO,[bg]:s.ONE,[Eg]:s.SRC_COLOR,[Tu]:s.SRC_ALPHA,[Dg]:s.SRC_ALPHA_SATURATE,[Cg]:s.DST_COLOR,[wg]:s.DST_ALPHA,[Ag]:s.ONE_MINUS_SRC_COLOR,[bu]:s.ONE_MINUS_SRC_ALPHA,[Pg]:s.ONE_MINUS_DST_COLOR,[Rg]:s.ONE_MINUS_DST_ALPHA,[Lg]:s.CONSTANT_COLOR,[Ig]:s.ONE_MINUS_CONSTANT_COLOR,[Ng]:s.CONSTANT_ALPHA,[Ug]:s.ONE_MINUS_CONSTANT_ALPHA};function ke(L,ue,te,he,ee,Q,ce,Ne,pt,_e){if(L===xr){g===!0&&(fe(s.BLEND),g=!1);return}if(g===!1&&(J(s.BLEND),g=!0),L!==xg){if(L!==m||_e!==x){if((p!==hs||y!==hs)&&(s.blendEquation(s.FUNC_ADD),p=hs,y=hs),_e)switch(L){case oa:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case jf:s.blendFunc(s.ONE,s.ONE);break;case Kf:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case $f:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ve("WebGLState: Invalid blending: ",L);break}else switch(L){case oa:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case jf:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Kf:Ve("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $f:Ve("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ve("WebGLState: Invalid blending: ",L);break}M=null,T=null,b=null,w=null,A.set(0,0,0),C=0,m=L,x=_e}return}ee=ee||ue,Q=Q||te,ce=ce||he,(ue!==p||ee!==y)&&(s.blendEquationSeparate(dt[ue],dt[ee]),p=ue,y=ee),(te!==M||he!==T||Q!==b||ce!==w)&&(s.blendFuncSeparate(be[te],be[he],be[Q],be[ce]),M=te,T=he,b=Q,w=ce),(Ne.equals(A)===!1||pt!==C)&&(s.blendColor(Ne.r,Ne.g,Ne.b,pt),A.copy(Ne),C=pt),m=L,x=!1}function Ze(L,ue){L.side===Hi?fe(s.CULL_FACE):J(s.CULL_FACE);let te=L.side===Yn;ue&&(te=!te),Ue(te),L.blending===oa&&L.transparent===!1?ke(xr):ke(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);const he=L.stencilWrite;o.setTest(he),he&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),gt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?J(s.SAMPLE_ALPHA_TO_COVERAGE):fe(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(L){S!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),S=L)}function W(L){L!==mg?(J(s.CULL_FACE),L!==P&&(L===qf?s.cullFace(s.BACK):L===_g?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):fe(s.CULL_FACE),P=L}function N(L){L!==I&&(V&&s.lineWidth(L),I=L)}function gt(L,ue,te){L?(J(s.POLYGON_OFFSET_FILL),(B!==ue||H!==te)&&(s.polygonOffset(ue,te),B=ue,H=te)):fe(s.POLYGON_OFFSET_FILL)}function nt(L){L?J(s.SCISSOR_TEST):fe(s.SCISSOR_TEST)}function ze(L){L===void 0&&(L=s.TEXTURE0+G-1),ie!==L&&(s.activeTexture(L),ie=L)}function Me(L,ue,te){te===void 0&&(ie===null?te=s.TEXTURE0+G-1:te=ie);let he=D[te];he===void 0&&(he={type:void 0,texture:void 0},D[te]=he),(he.type!==L||he.texture!==ue)&&(ie!==te&&(s.activeTexture(te),ie=te),s.bindTexture(L,ue||K[L]),he.type=L,he.texture=ue)}function R(){const L=D[ie];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function v(){try{s.compressedTexImage2D(...arguments)}catch(L){Ve("WebGLState:",L)}}function U(){try{s.compressedTexImage3D(...arguments)}catch(L){Ve("WebGLState:",L)}}function $(){try{s.texSubImage2D(...arguments)}catch(L){Ve("WebGLState:",L)}}function Z(){try{s.texSubImage3D(...arguments)}catch(L){Ve("WebGLState:",L)}}function q(){try{s.compressedTexSubImage2D(...arguments)}catch(L){Ve("WebGLState:",L)}}function ve(){try{s.compressedTexSubImage3D(...arguments)}catch(L){Ve("WebGLState:",L)}}function se(){try{s.texStorage2D(...arguments)}catch(L){Ve("WebGLState:",L)}}function Ee(){try{s.texStorage3D(...arguments)}catch(L){Ve("WebGLState:",L)}}function Te(){try{s.texImage2D(...arguments)}catch(L){Ve("WebGLState:",L)}}function ne(){try{s.texImage3D(...arguments)}catch(L){Ve("WebGLState:",L)}}function ae(L){Be.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),Be.copy(L))}function Se(L){Xe.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),Xe.copy(L))}function Ae(L,ue){let te=c.get(ue);te===void 0&&(te=new WeakMap,c.set(ue,te));let he=te.get(L);he===void 0&&(he=s.getUniformBlockIndex(ue,L.name),te.set(L,he))}function oe(L,ue){const he=c.get(ue).get(L);l.get(ue)!==he&&(s.uniformBlockBinding(ue,he,L.__bindingPointIndex),l.set(ue,he))}function We(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},ie=null,D={},h={},f=new WeakMap,d=[],_=null,g=!1,m=null,p=null,M=null,T=null,y=null,b=null,w=null,A=new Ke(0,0,0),C=0,x=!1,S=null,P=null,I=null,B=null,H=null,Be.set(0,0,s.canvas.width,s.canvas.height),Xe.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:J,disable:fe,bindFramebuffer:Ce,drawBuffers:ye,useProgram:Ge,setBlending:ke,setMaterial:Ze,setFlipSided:Ue,setCullFace:W,setLineWidth:N,setPolygonOffset:gt,setScissorTest:nt,activeTexture:ze,bindTexture:Me,unbindTexture:R,compressedTexImage2D:v,compressedTexImage3D:U,texImage2D:Te,texImage3D:ne,updateUBOMapping:Ae,uniformBlockBinding:oe,texStorage2D:se,texStorage3D:Ee,texSubImage2D:$,texSubImage3D:Z,compressedTexSubImage2D:q,compressedTexSubImage3D:ve,scissor:ae,viewport:Se,reset:We}}function mT(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new qe,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,v){return d?new OffscreenCanvas(R,v):Co("canvas")}function g(R,v,U){let $=1;const Z=Me(R);if((Z.width>U||Z.height>U)&&($=U/Math.max(Z.width,Z.height)),$<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const q=Math.floor($*Z.width),ve=Math.floor($*Z.height);h===void 0&&(h=_(q,ve));const se=v?_(q,ve):h;return se.width=q,se.height=ve,se.getContext("2d").drawImage(R,0,0,q,ve),De("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+q+"x"+ve+")."),se}else return"data"in R&&De("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){s.generateMipmap(R)}function M(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function T(R,v,U,$,Z=!1){if(R!==null){if(s[R]!==void 0)return s[R];De("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let q=v;if(v===s.RED&&(U===s.FLOAT&&(q=s.R32F),U===s.HALF_FLOAT&&(q=s.R16F),U===s.UNSIGNED_BYTE&&(q=s.R8)),v===s.RED_INTEGER&&(U===s.UNSIGNED_BYTE&&(q=s.R8UI),U===s.UNSIGNED_SHORT&&(q=s.R16UI),U===s.UNSIGNED_INT&&(q=s.R32UI),U===s.BYTE&&(q=s.R8I),U===s.SHORT&&(q=s.R16I),U===s.INT&&(q=s.R32I)),v===s.RG&&(U===s.FLOAT&&(q=s.RG32F),U===s.HALF_FLOAT&&(q=s.RG16F),U===s.UNSIGNED_BYTE&&(q=s.RG8)),v===s.RG_INTEGER&&(U===s.UNSIGNED_BYTE&&(q=s.RG8UI),U===s.UNSIGNED_SHORT&&(q=s.RG16UI),U===s.UNSIGNED_INT&&(q=s.RG32UI),U===s.BYTE&&(q=s.RG8I),U===s.SHORT&&(q=s.RG16I),U===s.INT&&(q=s.RG32I)),v===s.RGB_INTEGER&&(U===s.UNSIGNED_BYTE&&(q=s.RGB8UI),U===s.UNSIGNED_SHORT&&(q=s.RGB16UI),U===s.UNSIGNED_INT&&(q=s.RGB32UI),U===s.BYTE&&(q=s.RGB8I),U===s.SHORT&&(q=s.RGB16I),U===s.INT&&(q=s.RGB32I)),v===s.RGBA_INTEGER&&(U===s.UNSIGNED_BYTE&&(q=s.RGBA8UI),U===s.UNSIGNED_SHORT&&(q=s.RGBA16UI),U===s.UNSIGNED_INT&&(q=s.RGBA32UI),U===s.BYTE&&(q=s.RGBA8I),U===s.SHORT&&(q=s.RGBA16I),U===s.INT&&(q=s.RGBA32I)),v===s.RGB&&(U===s.UNSIGNED_INT_5_9_9_9_REV&&(q=s.RGB9_E5),U===s.UNSIGNED_INT_10F_11F_11F_REV&&(q=s.R11F_G11F_B10F)),v===s.RGBA){const ve=Z?$l:ht.getTransfer($);U===s.FLOAT&&(q=s.RGBA32F),U===s.HALF_FLOAT&&(q=s.RGBA16F),U===s.UNSIGNED_BYTE&&(q=ve===Mt?s.SRGB8_ALPHA8:s.RGBA8),U===s.UNSIGNED_SHORT_4_4_4_4&&(q=s.RGBA4),U===s.UNSIGNED_SHORT_5_5_5_1&&(q=s.RGB5_A1)}return(q===s.R16F||q===s.R32F||q===s.RG16F||q===s.RG32F||q===s.RGBA16F||q===s.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function y(R,v){let U;return R?v===null||v===Qi||v===Ao?U=s.DEPTH24_STENCIL8:v===Ti?U=s.DEPTH32F_STENCIL8:v===Eo&&(U=s.DEPTH24_STENCIL8,De("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Qi||v===Ao?U=s.DEPTH_COMPONENT24:v===Ti?U=s.DEPTH_COMPONENT32F:v===Eo&&(U=s.DEPTH_COMPONENT16),U}function b(R,v){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==rn&&R.minFilter!==sn?Math.log2(Math.max(v.width,v.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?v.mipmaps.length:1}function w(R){const v=R.target;v.removeEventListener("dispose",w),C(v),v.isVideoTexture&&u.delete(v)}function A(R){const v=R.target;v.removeEventListener("dispose",A),S(v)}function C(R){const v=n.get(R);if(v.__webglInit===void 0)return;const U=R.source,$=f.get(U);if($){const Z=$[v.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&x(R),Object.keys($).length===0&&f.delete(U)}n.remove(R)}function x(R){const v=n.get(R);s.deleteTexture(v.__webglTexture);const U=R.source,$=f.get(U);delete $[v.__cacheKey],a.memory.textures--}function S(R){const v=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(v.__webglFramebuffer[$]))for(let Z=0;Z<v.__webglFramebuffer[$].length;Z++)s.deleteFramebuffer(v.__webglFramebuffer[$][Z]);else s.deleteFramebuffer(v.__webglFramebuffer[$]);v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer[$])}else{if(Array.isArray(v.__webglFramebuffer))for(let $=0;$<v.__webglFramebuffer.length;$++)s.deleteFramebuffer(v.__webglFramebuffer[$]);else s.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&s.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let $=0;$<v.__webglColorRenderbuffer.length;$++)v.__webglColorRenderbuffer[$]&&s.deleteRenderbuffer(v.__webglColorRenderbuffer[$]);v.__webglDepthRenderbuffer&&s.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const U=R.textures;for(let $=0,Z=U.length;$<Z;$++){const q=n.get(U[$]);q.__webglTexture&&(s.deleteTexture(q.__webglTexture),a.memory.textures--),n.remove(U[$])}n.remove(R)}let P=0;function I(){P=0}function B(){const R=P;return R>=i.maxTextures&&De("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),P+=1,R}function H(R){const v=[];return v.push(R.wrapS),v.push(R.wrapT),v.push(R.wrapR||0),v.push(R.magFilter),v.push(R.minFilter),v.push(R.anisotropy),v.push(R.internalFormat),v.push(R.format),v.push(R.type),v.push(R.generateMipmaps),v.push(R.premultiplyAlpha),v.push(R.flipY),v.push(R.unpackAlignment),v.push(R.colorSpace),v.join()}function G(R,v){const U=n.get(R);if(R.isVideoTexture&&nt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&U.__version!==R.version){const $=R.image;if($===null)De("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)De("WebGLRenderer: Texture marked for update but image is incomplete");else{K(U,R,v);return}}else R.isExternalTexture&&(U.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,U.__webglTexture,s.TEXTURE0+v)}function V(R,v){const U=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&U.__version!==R.version){K(U,R,v);return}else R.isExternalTexture&&(U.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,U.__webglTexture,s.TEXTURE0+v)}function O(R,v){const U=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&U.__version!==R.version){K(U,R,v);return}t.bindTexture(s.TEXTURE_3D,U.__webglTexture,s.TEXTURE0+v)}function j(R,v){const U=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&U.__version!==R.version){J(U,R,v);return}t.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+v)}const ie={[va]:s.REPEAT,[Xi]:s.CLAMP_TO_EDGE,[Kl]:s.MIRRORED_REPEAT},D={[rn]:s.NEAREST,[um]:s.NEAREST_MIPMAP_NEAREST,[Qa]:s.NEAREST_MIPMAP_LINEAR,[sn]:s.LINEAR,[Il]:s.LINEAR_MIPMAP_NEAREST,[mr]:s.LINEAR_MIPMAP_LINEAR},re={[Hg]:s.NEVER,[jg]:s.ALWAYS,[Wg]:s.LESS,[Qh]:s.LEQUAL,[Xg]:s.EQUAL,[ef]:s.GEQUAL,[Yg]:s.GREATER,[qg]:s.NOTEQUAL};function Ie(R,v){if(v.type===Ti&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===sn||v.magFilter===Il||v.magFilter===Qa||v.magFilter===mr||v.minFilter===sn||v.minFilter===Il||v.minFilter===Qa||v.minFilter===mr)&&De("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,ie[v.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,ie[v.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,ie[v.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,D[v.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,D[v.minFilter]),v.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,re[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===rn||v.minFilter!==Qa&&v.minFilter!==mr||v.type===Ti&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");s.texParameterf(R,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Be(R,v){let U=!1;R.__webglInit===void 0&&(R.__webglInit=!0,v.addEventListener("dispose",w));const $=v.source;let Z=f.get($);Z===void 0&&(Z={},f.set($,Z));const q=H(v);if(q!==R.__cacheKey){Z[q]===void 0&&(Z[q]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,U=!0),Z[q].usedTimes++;const ve=Z[R.__cacheKey];ve!==void 0&&(Z[R.__cacheKey].usedTimes--,ve.usedTimes===0&&x(v)),R.__cacheKey=q,R.__webglTexture=Z[q].texture}return U}function Xe(R,v,U){return Math.floor(Math.floor(R/U)/v)}function $e(R,v,U,$){const q=R.updateRanges;if(q.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,v.width,v.height,U,$,v.data);else{q.sort((ne,ae)=>ne.start-ae.start);let ve=0;for(let ne=1;ne<q.length;ne++){const ae=q[ve],Se=q[ne],Ae=ae.start+ae.count,oe=Xe(Se.start,v.width,4),We=Xe(ae.start,v.width,4);Se.start<=Ae+1&&oe===We&&Xe(Se.start+Se.count-1,v.width,4)===oe?ae.count=Math.max(ae.count,Se.start+Se.count-ae.start):(++ve,q[ve]=Se)}q.length=ve+1;const se=s.getParameter(s.UNPACK_ROW_LENGTH),Ee=s.getParameter(s.UNPACK_SKIP_PIXELS),Te=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,v.width);for(let ne=0,ae=q.length;ne<ae;ne++){const Se=q[ne],Ae=Math.floor(Se.start/4),oe=Math.ceil(Se.count/4),We=Ae%v.width,L=Math.floor(Ae/v.width),ue=oe,te=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,We),s.pixelStorei(s.UNPACK_SKIP_ROWS,L),t.texSubImage2D(s.TEXTURE_2D,0,We,L,ue,te,U,$,v.data)}R.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,se),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ee),s.pixelStorei(s.UNPACK_SKIP_ROWS,Te)}}function K(R,v,U){let $=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&($=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&($=s.TEXTURE_3D);const Z=Be(R,v),q=v.source;t.bindTexture($,R.__webglTexture,s.TEXTURE0+U);const ve=n.get(q);if(q.version!==ve.__version||Z===!0){t.activeTexture(s.TEXTURE0+U);const se=ht.getPrimaries(ht.workingColorSpace),Ee=v.colorSpace===Fr?null:ht.getPrimaries(v.colorSpace),Te=v.colorSpace===Fr||se===Ee?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let ne=g(v.image,!1,i.maxTextureSize);ne=ze(v,ne);const ae=r.convert(v.format,v.colorSpace),Se=r.convert(v.type);let Ae=T(v.internalFormat,ae,Se,v.colorSpace,v.isVideoTexture);Ie($,v);let oe;const We=v.mipmaps,L=v.isVideoTexture!==!0,ue=ve.__version===void 0||Z===!0,te=q.dataReady,he=b(v,ne);if(v.isDepthTexture)Ae=y(v.format===ds,v.type),ue&&(L?t.texStorage2D(s.TEXTURE_2D,1,Ae,ne.width,ne.height):t.texImage2D(s.TEXTURE_2D,0,Ae,ne.width,ne.height,0,ae,Se,null));else if(v.isDataTexture)if(We.length>0){L&&ue&&t.texStorage2D(s.TEXTURE_2D,he,Ae,We[0].width,We[0].height);for(let ee=0,Q=We.length;ee<Q;ee++)oe=We[ee],L?te&&t.texSubImage2D(s.TEXTURE_2D,ee,0,0,oe.width,oe.height,ae,Se,oe.data):t.texImage2D(s.TEXTURE_2D,ee,Ae,oe.width,oe.height,0,ae,Se,oe.data);v.generateMipmaps=!1}else L?(ue&&t.texStorage2D(s.TEXTURE_2D,he,Ae,ne.width,ne.height),te&&$e(v,ne,ae,Se)):t.texImage2D(s.TEXTURE_2D,0,Ae,ne.width,ne.height,0,ae,Se,ne.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){L&&ue&&t.texStorage3D(s.TEXTURE_2D_ARRAY,he,Ae,We[0].width,We[0].height,ne.depth);for(let ee=0,Q=We.length;ee<Q;ee++)if(oe=We[ee],v.format!==bi)if(ae!==null)if(L){if(te)if(v.layerUpdates.size>0){const ce=Vd(oe.width,oe.height,v.format,v.type);for(const Ne of v.layerUpdates){const pt=oe.data.subarray(Ne*ce/oe.data.BYTES_PER_ELEMENT,(Ne+1)*ce/oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,Ne,oe.width,oe.height,1,ae,pt)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,0,oe.width,oe.height,ne.depth,ae,oe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ee,Ae,oe.width,oe.height,ne.depth,0,oe.data,0,0);else De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?te&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,0,oe.width,oe.height,ne.depth,ae,Se,oe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ee,Ae,oe.width,oe.height,ne.depth,0,ae,Se,oe.data)}else{L&&ue&&t.texStorage2D(s.TEXTURE_2D,he,Ae,We[0].width,We[0].height);for(let ee=0,Q=We.length;ee<Q;ee++)oe=We[ee],v.format!==bi?ae!==null?L?te&&t.compressedTexSubImage2D(s.TEXTURE_2D,ee,0,0,oe.width,oe.height,ae,oe.data):t.compressedTexImage2D(s.TEXTURE_2D,ee,Ae,oe.width,oe.height,0,oe.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?te&&t.texSubImage2D(s.TEXTURE_2D,ee,0,0,oe.width,oe.height,ae,Se,oe.data):t.texImage2D(s.TEXTURE_2D,ee,Ae,oe.width,oe.height,0,ae,Se,oe.data)}else if(v.isDataArrayTexture)if(L){if(ue&&t.texStorage3D(s.TEXTURE_2D_ARRAY,he,Ae,ne.width,ne.height,ne.depth),te)if(v.layerUpdates.size>0){const ee=Vd(ne.width,ne.height,v.format,v.type);for(const Q of v.layerUpdates){const ce=ne.data.subarray(Q*ee/ne.data.BYTES_PER_ELEMENT,(Q+1)*ee/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Q,ne.width,ne.height,1,ae,Se,ce)}v.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,ae,Se,ne.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ae,ne.width,ne.height,ne.depth,0,ae,Se,ne.data);else if(v.isData3DTexture)L?(ue&&t.texStorage3D(s.TEXTURE_3D,he,Ae,ne.width,ne.height,ne.depth),te&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,ae,Se,ne.data)):t.texImage3D(s.TEXTURE_3D,0,Ae,ne.width,ne.height,ne.depth,0,ae,Se,ne.data);else if(v.isFramebufferTexture){if(ue)if(L)t.texStorage2D(s.TEXTURE_2D,he,Ae,ne.width,ne.height);else{let ee=ne.width,Q=ne.height;for(let ce=0;ce<he;ce++)t.texImage2D(s.TEXTURE_2D,ce,Ae,ee,Q,0,ae,Se,null),ee>>=1,Q>>=1}}else if(We.length>0){if(L&&ue){const ee=Me(We[0]);t.texStorage2D(s.TEXTURE_2D,he,Ae,ee.width,ee.height)}for(let ee=0,Q=We.length;ee<Q;ee++)oe=We[ee],L?te&&t.texSubImage2D(s.TEXTURE_2D,ee,0,0,ae,Se,oe):t.texImage2D(s.TEXTURE_2D,ee,Ae,ae,Se,oe);v.generateMipmaps=!1}else if(L){if(ue){const ee=Me(ne);t.texStorage2D(s.TEXTURE_2D,he,Ae,ee.width,ee.height)}te&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ae,Se,ne)}else t.texImage2D(s.TEXTURE_2D,0,Ae,ae,Se,ne);m(v)&&p($),ve.__version=q.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function J(R,v,U){if(v.image.length!==6)return;const $=Be(R,v),Z=v.source;t.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+U);const q=n.get(Z);if(Z.version!==q.__version||$===!0){t.activeTexture(s.TEXTURE0+U);const ve=ht.getPrimaries(ht.workingColorSpace),se=v.colorSpace===Fr?null:ht.getPrimaries(v.colorSpace),Ee=v.colorSpace===Fr||ve===se?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Te=v.isCompressedTexture||v.image[0].isCompressedTexture,ne=v.image[0]&&v.image[0].isDataTexture,ae=[];for(let Q=0;Q<6;Q++)!Te&&!ne?ae[Q]=g(v.image[Q],!0,i.maxCubemapSize):ae[Q]=ne?v.image[Q].image:v.image[Q],ae[Q]=ze(v,ae[Q]);const Se=ae[0],Ae=r.convert(v.format,v.colorSpace),oe=r.convert(v.type),We=T(v.internalFormat,Ae,oe,v.colorSpace),L=v.isVideoTexture!==!0,ue=q.__version===void 0||$===!0,te=Z.dataReady;let he=b(v,Se);Ie(s.TEXTURE_CUBE_MAP,v);let ee;if(Te){L&&ue&&t.texStorage2D(s.TEXTURE_CUBE_MAP,he,We,Se.width,Se.height);for(let Q=0;Q<6;Q++){ee=ae[Q].mipmaps;for(let ce=0;ce<ee.length;ce++){const Ne=ee[ce];v.format!==bi?Ae!==null?L?te&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce,0,0,Ne.width,Ne.height,Ae,Ne.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce,We,Ne.width,Ne.height,0,Ne.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?te&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce,0,0,Ne.width,Ne.height,Ae,oe,Ne.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce,We,Ne.width,Ne.height,0,Ae,oe,Ne.data)}}}else{if(ee=v.mipmaps,L&&ue){ee.length>0&&he++;const Q=Me(ae[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,he,We,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(ne){L?te&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ae[Q].width,ae[Q].height,Ae,oe,ae[Q].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,We,ae[Q].width,ae[Q].height,0,Ae,oe,ae[Q].data);for(let ce=0;ce<ee.length;ce++){const pt=ee[ce].image[Q].image;L?te&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce+1,0,0,pt.width,pt.height,Ae,oe,pt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce+1,We,pt.width,pt.height,0,Ae,oe,pt.data)}}else{L?te&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ae,oe,ae[Q]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,We,Ae,oe,ae[Q]);for(let ce=0;ce<ee.length;ce++){const Ne=ee[ce];L?te&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce+1,0,0,Ae,oe,Ne.image[Q]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce+1,We,Ae,oe,Ne.image[Q])}}}m(v)&&p(s.TEXTURE_CUBE_MAP),q.__version=Z.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function fe(R,v,U,$,Z,q){const ve=r.convert(U.format,U.colorSpace),se=r.convert(U.type),Ee=T(U.internalFormat,ve,se,U.colorSpace),Te=n.get(v),ne=n.get(U);if(ne.__renderTarget=v,!Te.__hasExternalTextures){const ae=Math.max(1,v.width>>q),Se=Math.max(1,v.height>>q);Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?t.texImage3D(Z,q,Ee,ae,Se,v.depth,0,ve,se,null):t.texImage2D(Z,q,Ee,ae,Se,0,ve,se,null)}t.bindFramebuffer(s.FRAMEBUFFER,R),gt(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,Z,ne.__webglTexture,0,N(v)):(Z===s.TEXTURE_2D||Z>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,$,Z,ne.__webglTexture,q),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ce(R,v,U){if(s.bindRenderbuffer(s.RENDERBUFFER,R),v.depthBuffer){const $=v.depthTexture,Z=$&&$.isDepthTexture?$.type:null,q=y(v.stencilBuffer,Z),ve=v.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;gt(v)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,N(v),q,v.width,v.height):U?s.renderbufferStorageMultisample(s.RENDERBUFFER,N(v),q,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,q,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ve,s.RENDERBUFFER,R)}else{const $=v.textures;for(let Z=0;Z<$.length;Z++){const q=$[Z],ve=r.convert(q.format,q.colorSpace),se=r.convert(q.type),Ee=T(q.internalFormat,ve,se,q.colorSpace);gt(v)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,N(v),Ee,v.width,v.height):U?s.renderbufferStorageMultisample(s.RENDERBUFFER,N(v),Ee,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,Ee,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ye(R,v,U){const $=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,R),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(v.depthTexture);if(Z.__renderTarget=v,(!Z.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),$){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,v.depthTexture.addEventListener("dispose",w)),Z.__webglTexture===void 0){Z.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),Ie(s.TEXTURE_CUBE_MAP,v.depthTexture);const Te=r.convert(v.depthTexture.format),ne=r.convert(v.depthTexture.type);let ae;v.depthTexture.format===Tr?ae=s.DEPTH_COMPONENT24:v.depthTexture.format===ds&&(ae=s.DEPTH24_STENCIL8);for(let Se=0;Se<6;Se++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,ae,v.width,v.height,0,Te,ne,null)}}else G(v.depthTexture,0);const q=Z.__webglTexture,ve=N(v),se=$?s.TEXTURE_CUBE_MAP_POSITIVE_X+U:s.TEXTURE_2D,Ee=v.depthTexture.format===ds?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(v.depthTexture.format===Tr)gt(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ee,se,q,0,ve):s.framebufferTexture2D(s.FRAMEBUFFER,Ee,se,q,0);else if(v.depthTexture.format===ds)gt(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ee,se,q,0,ve):s.framebufferTexture2D(s.FRAMEBUFFER,Ee,se,q,0);else throw new Error("Unknown depthTexture format")}function Ge(R){const v=n.get(R),U=R.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==R.depthTexture){const $=R.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),$){const Z=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,$.removeEventListener("dispose",Z)};$.addEventListener("dispose",Z),v.__depthDisposeCallback=Z}v.__boundDepthTexture=$}if(R.depthTexture&&!v.__autoAllocateDepthBuffer)if(U)for(let $=0;$<6;$++)ye(v.__webglFramebuffer[$],R,$);else{const $=R.texture.mipmaps;$&&$.length>0?ye(v.__webglFramebuffer[0],R,0):ye(v.__webglFramebuffer,R,0)}else if(U){v.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[$]),v.__webglDepthbuffer[$]===void 0)v.__webglDepthbuffer[$]=s.createRenderbuffer(),Ce(v.__webglDepthbuffer[$],R,!1);else{const Z=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,q=v.__webglDepthbuffer[$];s.bindRenderbuffer(s.RENDERBUFFER,q),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,q)}}else{const $=R.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=s.createRenderbuffer(),Ce(v.__webglDepthbuffer,R,!1);else{const Z=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,q=v.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,q),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,q)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function dt(R,v,U){const $=n.get(R);v!==void 0&&fe($.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),U!==void 0&&Ge(R)}function be(R){const v=R.texture,U=n.get(R),$=n.get(v);R.addEventListener("dispose",A);const Z=R.textures,q=R.isWebGLCubeRenderTarget===!0,ve=Z.length>1;if(ve||($.__webglTexture===void 0&&($.__webglTexture=s.createTexture()),$.__version=v.version,a.memory.textures++),q){U.__webglFramebuffer=[];for(let se=0;se<6;se++)if(v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer[se]=[];for(let Ee=0;Ee<v.mipmaps.length;Ee++)U.__webglFramebuffer[se][Ee]=s.createFramebuffer()}else U.__webglFramebuffer[se]=s.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer=[];for(let se=0;se<v.mipmaps.length;se++)U.__webglFramebuffer[se]=s.createFramebuffer()}else U.__webglFramebuffer=s.createFramebuffer();if(ve)for(let se=0,Ee=Z.length;se<Ee;se++){const Te=n.get(Z[se]);Te.__webglTexture===void 0&&(Te.__webglTexture=s.createTexture(),a.memory.textures++)}if(R.samples>0&&gt(R)===!1){U.__webglMultisampledFramebuffer=s.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let se=0;se<Z.length;se++){const Ee=Z[se];U.__webglColorRenderbuffer[se]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,U.__webglColorRenderbuffer[se]);const Te=r.convert(Ee.format,Ee.colorSpace),ne=r.convert(Ee.type),ae=T(Ee.internalFormat,Te,ne,Ee.colorSpace,R.isXRRenderTarget===!0),Se=N(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,Se,ae,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+se,s.RENDERBUFFER,U.__webglColorRenderbuffer[se])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(U.__webglDepthRenderbuffer=s.createRenderbuffer(),Ce(U.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(q){t.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),Ie(s.TEXTURE_CUBE_MAP,v);for(let se=0;se<6;se++)if(v.mipmaps&&v.mipmaps.length>0)for(let Ee=0;Ee<v.mipmaps.length;Ee++)fe(U.__webglFramebuffer[se][Ee],R,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ee);else fe(U.__webglFramebuffer[se],R,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);m(v)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let se=0,Ee=Z.length;se<Ee;se++){const Te=Z[se],ne=n.get(Te);let ae=s.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ae=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ae,ne.__webglTexture),Ie(ae,Te),fe(U.__webglFramebuffer,R,Te,s.COLOR_ATTACHMENT0+se,ae,0),m(Te)&&p(ae)}t.unbindTexture()}else{let se=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(se=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(se,$.__webglTexture),Ie(se,v),v.mipmaps&&v.mipmaps.length>0)for(let Ee=0;Ee<v.mipmaps.length;Ee++)fe(U.__webglFramebuffer[Ee],R,v,s.COLOR_ATTACHMENT0,se,Ee);else fe(U.__webglFramebuffer,R,v,s.COLOR_ATTACHMENT0,se,0);m(v)&&p(se),t.unbindTexture()}R.depthBuffer&&Ge(R)}function ke(R){const v=R.textures;for(let U=0,$=v.length;U<$;U++){const Z=v[U];if(m(Z)){const q=M(R),ve=n.get(Z).__webglTexture;t.bindTexture(q,ve),p(q),t.unbindTexture()}}}const Ze=[],Ue=[];function W(R){if(R.samples>0){if(gt(R)===!1){const v=R.textures,U=R.width,$=R.height;let Z=s.COLOR_BUFFER_BIT;const q=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ve=n.get(R),se=v.length>1;if(se)for(let Te=0;Te<v.length;Te++)t.bindFramebuffer(s.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer);const Ee=R.texture.mipmaps;Ee&&Ee.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let Te=0;Te<v.length;Te++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Z|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Z|=s.STENCIL_BUFFER_BIT)),se){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ve.__webglColorRenderbuffer[Te]);const ne=n.get(v[Te]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ne,0)}s.blitFramebuffer(0,0,U,$,0,0,U,$,Z,s.NEAREST),l===!0&&(Ze.length=0,Ue.length=0,Ze.push(s.COLOR_ATTACHMENT0+Te),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Ze.push(q),Ue.push(q),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ue)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ze))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),se)for(let Te=0;Te<v.length;Te++){t.bindFramebuffer(s.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.RENDERBUFFER,ve.__webglColorRenderbuffer[Te]);const ne=n.get(v[Te]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.TEXTURE_2D,ne,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const v=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[v])}}}function N(R){return Math.min(i.maxSamples,R.samples)}function gt(R){const v=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function nt(R){const v=a.render.frame;u.get(R)!==v&&(u.set(R,v),R.update())}function ze(R,v){const U=R.colorSpace,$=R.format,Z=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||U!==kn&&U!==Fr&&(ht.getTransfer(U)===Mt?($!==bi||Z!==oi)&&De("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ve("WebGLTextures: Unsupported texture color space:",U)),v}function Me(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=I,this.setTexture2D=G,this.setTexture2DArray=V,this.setTexture3D=O,this.setTextureCube=j,this.rebindTextures=dt,this.setupRenderTarget=be,this.updateRenderTargetMipmap=ke,this.updateMultisampleRenderTarget=W,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=gt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function _T(s,e){function t(n,i=Fr){let r;const a=ht.getTransfer(i);if(n===oi)return s.UNSIGNED_BYTE;if(n===qh)return s.UNSIGNED_SHORT_4_4_4_4;if(n===jh)return s.UNSIGNED_SHORT_5_5_5_1;if(n===dm)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===pm)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===hm)return s.BYTE;if(n===fm)return s.SHORT;if(n===Eo)return s.UNSIGNED_SHORT;if(n===Yh)return s.INT;if(n===Qi)return s.UNSIGNED_INT;if(n===Ti)return s.FLOAT;if(n===Sr)return s.HALF_FLOAT;if(n===mm)return s.ALPHA;if(n===_m)return s.RGB;if(n===bi)return s.RGBA;if(n===Tr)return s.DEPTH_COMPONENT;if(n===ds)return s.DEPTH_STENCIL;if(n===Kh)return s.RED;if(n===$h)return s.RED_INTEGER;if(n===ya)return s.RG;if(n===Zh)return s.RG_INTEGER;if(n===Jh)return s.RGBA_INTEGER;if(n===Nl||n===Ul||n===Ol||n===Fl)if(a===Mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Nl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ul)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ol)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Fl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Nl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ul)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ol)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Fl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Nu||n===Uu||n===Ou||n===Fu)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Nu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Uu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ou)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Fu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Bu||n===ku||n===zu||n===Vu||n===Gu||n===Hu||n===Wu)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Bu||n===ku)return a===Mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===zu)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Vu)return r.COMPRESSED_R11_EAC;if(n===Gu)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Hu)return r.COMPRESSED_RG11_EAC;if(n===Wu)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Xu||n===Yu||n===qu||n===ju||n===Ku||n===$u||n===Zu||n===Ju||n===Qu||n===eh||n===th||n===nh||n===ih||n===rh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Xu)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Yu)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===qu)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ju)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ku)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===$u)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Zu)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ju)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Qu)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===eh)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===th)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===nh)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ih)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===rh)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===sh||n===ah||n===oh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===sh)return a===Mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ah)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===oh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===lh||n===ch||n===uh||n===hh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===lh)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ch)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===uh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===hh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ao?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const gT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xT=`
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

}`;class vT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Dm(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new tr({vertexShader:gT,fragmentShader:xT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new di(new pc(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class yT extends Cs{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,_=null;const g=typeof XRWebGLBinding<"u",m=new vT,p={},M=t.getContextAttributes();let T=null,y=null;const b=[],w=[],A=new qe;let C=null;const x=new Un;x.viewport=new Ut;const S=new Un;S.viewport=new Ut;const P=[x,S],I=new vx;let B=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let J=b[K];return J===void 0&&(J=new Wc,b[K]=J),J.getTargetRaySpace()},this.getControllerGrip=function(K){let J=b[K];return J===void 0&&(J=new Wc,b[K]=J),J.getGripSpace()},this.getHand=function(K){let J=b[K];return J===void 0&&(J=new Wc,b[K]=J),J.getHandSpace()};function G(K){const J=w.indexOf(K.inputSource);if(J===-1)return;const fe=b[J];fe!==void 0&&(fe.update(K.inputSource,K.frame,c||a),fe.dispatchEvent({type:K.type,data:K.inputSource}))}function V(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",O);for(let K=0;K<b.length;K++){const J=w[K];J!==null&&(w[K]=null,b[K].disconnect(J))}B=null,H=null,m.reset();for(const K in p)delete p[K];e.setRenderTarget(T),d=null,f=null,h=null,i=null,y=null,$e.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&De("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&De("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&g&&(h=new XRWebGLBinding(i,t)),h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(T=e.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",V),i.addEventListener("inputsourceschange",O),M.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(A),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,Ce=null,ye=null;M.depth&&(ye=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=M.stencil?ds:Tr,Ce=M.stencil?Ao:Qi);const Ge={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(Ge),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new $i(f.textureWidth,f.textureHeight,{format:bi,type:oi,depthTexture:new Do(f.textureWidth,f.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const fe={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,fe),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new $i(d.framebufferWidth,d.framebufferHeight,{format:bi,type:oi,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),$e.setContext(i),$e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function O(K){for(let J=0;J<K.removed.length;J++){const fe=K.removed[J],Ce=w.indexOf(fe);Ce>=0&&(w[Ce]=null,b[Ce].disconnect(fe))}for(let J=0;J<K.added.length;J++){const fe=K.added[J];let Ce=w.indexOf(fe);if(Ce===-1){for(let Ge=0;Ge<b.length;Ge++)if(Ge>=w.length){w.push(fe),Ce=Ge;break}else if(w[Ge]===null){w[Ge]=fe,Ce=Ge;break}if(Ce===-1)break}const ye=b[Ce];ye&&ye.connect(fe)}}const j=new k,ie=new k;function D(K,J,fe){j.setFromMatrixPosition(J.matrixWorld),ie.setFromMatrixPosition(fe.matrixWorld);const Ce=j.distanceTo(ie),ye=J.projectionMatrix.elements,Ge=fe.projectionMatrix.elements,dt=ye[14]/(ye[10]-1),be=ye[14]/(ye[10]+1),ke=(ye[9]+1)/ye[5],Ze=(ye[9]-1)/ye[5],Ue=(ye[8]-1)/ye[0],W=(Ge[8]+1)/Ge[0],N=dt*Ue,gt=dt*W,nt=Ce/(-Ue+W),ze=nt*-Ue;if(J.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(ze),K.translateZ(nt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),ye[10]===-1)K.projectionMatrix.copy(J.projectionMatrix),K.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const Me=dt+nt,R=be+nt,v=N-ze,U=gt+(Ce-ze),$=ke*be/R*Me,Z=Ze*be/R*Me;K.projectionMatrix.makePerspective(v,U,$,Z,Me,R),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function re(K,J){J===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(J.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let J=K.near,fe=K.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(fe=m.depthFar)),I.near=S.near=x.near=J,I.far=S.far=x.far=fe,(B!==I.near||H!==I.far)&&(i.updateRenderState({depthNear:I.near,depthFar:I.far}),B=I.near,H=I.far),I.layers.mask=K.layers.mask|6,x.layers.mask=I.layers.mask&3,S.layers.mask=I.layers.mask&5;const Ce=K.parent,ye=I.cameras;re(I,Ce);for(let Ge=0;Ge<ye.length;Ge++)re(ye[Ge],Ce);ye.length===2?D(I,x,S):I.projectionMatrix.copy(x.projectionMatrix),Ie(K,I,Ce)};function Ie(K,J,fe){fe===null?K.matrix.copy(J.matrixWorld):(K.matrix.copy(fe.matrixWorld),K.matrix.invert(),K.matrix.multiply(J.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(J.projectionMatrix),K.projectionMatrixInverse.copy(J.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Ma*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(I)},this.getCameraTexture=function(K){return p[K]};let Be=null;function Xe(K,J){if(u=J.getViewerPose(c||a),_=J,u!==null){const fe=u.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let Ce=!1;fe.length!==I.cameras.length&&(I.cameras.length=0,Ce=!0);for(let be=0;be<fe.length;be++){const ke=fe[be];let Ze=null;if(d!==null)Ze=d.getViewport(ke);else{const W=h.getViewSubImage(f,ke);Ze=W.viewport,be===0&&(e.setRenderTargetTextures(y,W.colorTexture,W.depthStencilTexture),e.setRenderTarget(y))}let Ue=P[be];Ue===void 0&&(Ue=new Un,Ue.layers.enable(be),Ue.viewport=new Ut,P[be]=Ue),Ue.matrix.fromArray(ke.transform.matrix),Ue.matrix.decompose(Ue.position,Ue.quaternion,Ue.scale),Ue.projectionMatrix.fromArray(ke.projectionMatrix),Ue.projectionMatrixInverse.copy(Ue.projectionMatrix).invert(),Ue.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),be===0&&(I.matrix.copy(Ue.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Ce===!0&&I.cameras.push(Ue)}const ye=i.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&g){h=n.getBinding();const be=h.getDepthInformation(fe[0]);be&&be.isValid&&be.texture&&m.init(be,i.renderState)}if(ye&&ye.includes("camera-access")&&g){e.state.unbindTexture(),h=n.getBinding();for(let be=0;be<fe.length;be++){const ke=fe[be].camera;if(ke){let Ze=p[ke];Ze||(Ze=new Dm,p[ke]=Ze);const Ue=h.getCameraImage(ke);Ze.sourceTexture=Ue}}}}for(let fe=0;fe<b.length;fe++){const Ce=w[fe],ye=b[fe];Ce!==null&&ye!==void 0&&ye.update(Ce,J,c||a)}Be&&Be(K,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),_=null}const $e=new Um;$e.setAnimationLoop(Xe),this.setAnimationLoop=function(K){Be=K},this.dispose=function(){}}}const rs=new er,MT=new et;function ST(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,bm(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,M,T,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,M,T):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Yn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Yn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p),T=M.envMap,y=M.envMapRotation;T&&(m.envMap.value=T,rs.copy(y),rs.x*=-1,rs.y*=-1,rs.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(rs.y*=-1,rs.z*=-1),m.envMapRotation.value.setFromMatrix4(MT.makeRotationFromEuler(rs)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=T*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Yn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function TT(s,e,t,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,T){const y=T.program;n.uniformBlockBinding(M,y)}function c(M,T){let y=i[M.id];y===void 0&&(_(M),y=u(M),i[M.id]=y,M.addEventListener("dispose",m));const b=T.program;n.updateUBOMapping(M,b);const w=e.render.frame;r[M.id]!==w&&(f(M),r[M.id]=w)}function u(M){const T=h();M.__bindingPointIndex=T;const y=s.createBuffer(),b=M.__size,w=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,b,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,T,y),y}function h(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return Ve("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const T=i[M.id],y=M.uniforms,b=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,T);for(let w=0,A=y.length;w<A;w++){const C=Array.isArray(y[w])?y[w]:[y[w]];for(let x=0,S=C.length;x<S;x++){const P=C[x];if(d(P,w,x,b)===!0){const I=P.__offset,B=Array.isArray(P.value)?P.value:[P.value];let H=0;for(let G=0;G<B.length;G++){const V=B[G],O=g(V);typeof V=="number"||typeof V=="boolean"?(P.__data[0]=V,s.bufferSubData(s.UNIFORM_BUFFER,I+H,P.__data)):V.isMatrix3?(P.__data[0]=V.elements[0],P.__data[1]=V.elements[1],P.__data[2]=V.elements[2],P.__data[3]=0,P.__data[4]=V.elements[3],P.__data[5]=V.elements[4],P.__data[6]=V.elements[5],P.__data[7]=0,P.__data[8]=V.elements[6],P.__data[9]=V.elements[7],P.__data[10]=V.elements[8],P.__data[11]=0):(V.toArray(P.__data,H),H+=O.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,I,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(M,T,y,b){const w=M.value,A=T+"_"+y;if(b[A]===void 0)return typeof w=="number"||typeof w=="boolean"?b[A]=w:b[A]=w.clone(),!0;{const C=b[A];if(typeof w=="number"||typeof w=="boolean"){if(C!==w)return b[A]=w,!0}else if(C.equals(w)===!1)return C.copy(w),!0}return!1}function _(M){const T=M.uniforms;let y=0;const b=16;for(let A=0,C=T.length;A<C;A++){const x=Array.isArray(T[A])?T[A]:[T[A]];for(let S=0,P=x.length;S<P;S++){const I=x[S],B=Array.isArray(I.value)?I.value:[I.value];for(let H=0,G=B.length;H<G;H++){const V=B[H],O=g(V),j=y%b,ie=j%O.boundary,D=j+ie;y+=ie,D!==0&&b-D<O.storage&&(y+=b-D),I.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=y,y+=O.storage}}}const w=y%b;return w>0&&(y+=b-w),M.__size=y,M.__cache={},this}function g(M){const T={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(T.boundary=4,T.storage=4):M.isVector2?(T.boundary=8,T.storage=8):M.isVector3||M.isColor?(T.boundary=16,T.storage=12):M.isVector4?(T.boundary=16,T.storage=16):M.isMatrix3?(T.boundary=48,T.storage=48):M.isMatrix4?(T.boundary=64,T.storage=64):M.isTexture?De("WebGLRenderer: Texture samplers can not be part of an uniforms group."):De("WebGLRenderer: Unsupported uniform value type.",M),T}function m(M){const T=M.target;T.removeEventListener("dispose",m);const y=a.indexOf(T.__bindingPointIndex);a.splice(y,1),s.deleteBuffer(i[T.id]),delete i[T.id],delete r[T.id]}function p(){for(const M in i)s.deleteBuffer(i[M]);a=[],i={},r={}}return{bind:l,update:c,dispose:p}}const bT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Bi=null;function ET(){return Bi===null&&(Bi=new lf(bT,16,16,ya,Sr),Bi.name="DFG_LUT",Bi.minFilter=sn,Bi.magFilter=sn,Bi.wrapS=Xi,Bi.wrapT=Xi,Bi.generateMipmaps=!1,Bi.needsUpdate=!0),Bi}class AT{constructor(e={}){const{canvas:t=$g(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:d=oi}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;const g=d,m=new Set([Jh,Zh,$h]),p=new Set([oi,Qi,Eo,Ao,qh,jh]),M=new Uint32Array(4),T=new Int32Array(4);let y=null,b=null;const w=[],A=[];let C=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let S=!1;this._outputColorSpace=mn;let P=0,I=0,B=null,H=-1,G=null;const V=new Ut,O=new Ut;let j=null;const ie=new Ke(0);let D=0,re=t.width,Ie=t.height,Be=1,Xe=null,$e=null;const K=new Ut(0,0,re,Ie),J=new Ut(0,0,re,Ie);let fe=!1;const Ce=new uf;let ye=!1,Ge=!1;const dt=new et,be=new k,ke=new Ut,Ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ue=!1;function W(){return B===null?Be:1}let N=n;function gt(E,F){return t.getContext(E,F)}try{const E={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Xh}`),t.addEventListener("webglcontextlost",Ne,!1),t.addEventListener("webglcontextrestored",pt,!1),t.addEventListener("webglcontextcreationerror",_e,!1),N===null){const F="webgl2";if(N=gt(F,E),N===null)throw gt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw Ve("WebGLRenderer: "+E.message),E}let nt,ze,Me,R,v,U,$,Z,q,ve,se,Ee,Te,ne,ae,Se,Ae,oe,We,L,ue,te,he,ee;function Q(){nt=new EM(N),nt.init(),te=new _T(N,nt),ze=new _M(N,nt,e,te),Me=new pT(N,nt),ze.reversedDepthBuffer&&f&&Me.buffers.depth.setReversed(!0),R=new RM(N),v=new QS,U=new mT(N,nt,Me,v,ze,te,R),$=new xM(x),Z=new bM(x),q=new Lx(N),he=new pM(N,q),ve=new AM(N,q,R,he),se=new PM(N,ve,q,R),We=new CM(N,ze,U),Se=new gM(v),Ee=new JS(x,$,Z,nt,ze,he,Se),Te=new ST(x,v),ne=new tT,ae=new oT(nt),oe=new dM(x,$,Z,Me,se,_,l),Ae=new fT(x,se,ze),ee=new TT(N,R,ze,Me),L=new mM(N,nt,R),ue=new wM(N,nt,R),R.programs=Ee.programs,x.capabilities=ze,x.extensions=nt,x.properties=v,x.renderLists=ne,x.shadowMap=Ae,x.state=Me,x.info=R}Q(),g!==oi&&(C=new LM(g,t.width,t.height,i,r));const ce=new yT(x,N);this.xr=ce,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const E=nt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=nt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Be},this.setPixelRatio=function(E){E!==void 0&&(Be=E,this.setSize(re,Ie,!1))},this.getSize=function(E){return E.set(re,Ie)},this.setSize=function(E,F,Y=!0){if(ce.isPresenting){De("WebGLRenderer: Can't change size while VR device is presenting.");return}re=E,Ie=F,t.width=Math.floor(E*Be),t.height=Math.floor(F*Be),Y===!0&&(t.style.width=E+"px",t.style.height=F+"px"),C!==null&&C.setSize(t.width,t.height),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(re*Be,Ie*Be).floor()},this.setDrawingBufferSize=function(E,F,Y){re=E,Ie=F,Be=Y,t.width=Math.floor(E*Y),t.height=Math.floor(F*Y),this.setViewport(0,0,E,F)},this.setEffects=function(E){if(g===oi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let F=0;F<E.length;F++)if(E[F].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(V)},this.getViewport=function(E){return E.copy(K)},this.setViewport=function(E,F,Y,X){E.isVector4?K.set(E.x,E.y,E.z,E.w):K.set(E,F,Y,X),Me.viewport(V.copy(K).multiplyScalar(Be).round())},this.getScissor=function(E){return E.copy(J)},this.setScissor=function(E,F,Y,X){E.isVector4?J.set(E.x,E.y,E.z,E.w):J.set(E,F,Y,X),Me.scissor(O.copy(J).multiplyScalar(Be).round())},this.getScissorTest=function(){return fe},this.setScissorTest=function(E){Me.setScissorTest(fe=E)},this.setOpaqueSort=function(E){Xe=E},this.setTransparentSort=function(E){$e=E},this.getClearColor=function(E){return E.copy(oe.getClearColor())},this.setClearColor=function(){oe.setClearColor(...arguments)},this.getClearAlpha=function(){return oe.getClearAlpha()},this.setClearAlpha=function(){oe.setClearAlpha(...arguments)},this.clear=function(E=!0,F=!0,Y=!0){let X=0;if(E){let z=!1;if(B!==null){const le=B.texture.format;z=m.has(le)}if(z){const le=B.texture.type,ge=p.has(le),de=oe.getClearColor(),xe=oe.getClearAlpha(),Pe=de.r,He=de.g,Oe=de.b;ge?(M[0]=Pe,M[1]=He,M[2]=Oe,M[3]=xe,N.clearBufferuiv(N.COLOR,0,M)):(T[0]=Pe,T[1]=He,T[2]=Oe,T[3]=xe,N.clearBufferiv(N.COLOR,0,T))}else X|=N.COLOR_BUFFER_BIT}F&&(X|=N.DEPTH_BUFFER_BIT),Y&&(X|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ne,!1),t.removeEventListener("webglcontextrestored",pt,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),oe.dispose(),ne.dispose(),ae.dispose(),v.dispose(),$.dispose(),Z.dispose(),se.dispose(),he.dispose(),ee.dispose(),Ee.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",Wt),ce.removeEventListener("sessionend",st),vt.stop()};function Ne(E){E.preventDefault(),Jl("WebGLRenderer: Context Lost."),S=!0}function pt(){Jl("WebGLRenderer: Context Restored."),S=!1;const E=R.autoReset,F=Ae.enabled,Y=Ae.autoUpdate,X=Ae.needsUpdate,z=Ae.type;Q(),R.autoReset=E,Ae.enabled=F,Ae.autoUpdate=Y,Ae.needsUpdate=X,Ae.type=z}function _e(E){Ve("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Re(E){const F=E.target;F.removeEventListener("dispose",Re),Je(F)}function Je(E){pe(E),v.remove(E)}function pe(E){const F=v.get(E).programs;F!==void 0&&(F.forEach(function(Y){Ee.releaseProgram(Y)}),E.isShaderMaterial&&Ee.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,Y,X,z,le){F===null&&(F=Ze);const ge=z.isMesh&&z.matrixWorld.determinant()<0,de=Zt(E,F,Y,X,z);Me.setMaterial(X,ge);let xe=Y.index,Pe=1;if(X.wireframe===!0){if(xe=ve.getWireframeAttribute(Y),xe===void 0)return;Pe=2}const He=Y.drawRange,Oe=Y.attributes.position;let at=He.start*Pe,Et=(He.start+He.count)*Pe;le!==null&&(at=Math.max(at,le.start*Pe),Et=Math.min(Et,(le.start+le.count)*Pe)),xe!==null?(at=Math.max(at,0),Et=Math.min(Et,xe.count)):Oe!=null&&(at=Math.max(at,0),Et=Math.min(Et,Oe.count));const Vt=Et-at;if(Vt<0||Vt===1/0)return;he.setup(z,X,de,Y,xe);let Gt,Rt=L;if(xe!==null&&(Gt=q.get(xe),Rt=ue,Rt.setIndex(Gt)),z.isMesh)X.wireframe===!0?(Me.setLineWidth(X.wireframeLinewidth*W()),Rt.setMode(N.LINES)):Rt.setMode(N.TRIANGLES);else if(z.isLine){let Fe=X.linewidth;Fe===void 0&&(Fe=1),Me.setLineWidth(Fe*W()),z.isLineSegments?Rt.setMode(N.LINES):z.isLineLoop?Rt.setMode(N.LINE_LOOP):Rt.setMode(N.LINE_STRIP)}else z.isPoints?Rt.setMode(N.POINTS):z.isSprite&&Rt.setMode(N.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)Po("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Rt.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(nt.get("WEBGL_multi_draw"))Rt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Fe=z._multiDrawStarts,yt=z._multiDrawCounts,_t=z._multiDrawCount,Qn=xe?q.get(xe).bytesPerElement:1,Is=v.get(X).currentProgram.getUniforms();for(let ei=0;ei<_t;ei++)Is.setValue(N,"_gl_DrawID",ei),Rt.render(Fe[ei]/Qn,yt[ei])}else if(z.isInstancedMesh)Rt.renderInstances(at,Vt,z.count);else if(Y.isInstancedBufferGeometry){const Fe=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,yt=Math.min(Y.instanceCount,Fe);Rt.renderInstances(at,Vt,yt)}else Rt.render(at,Vt)};function Ye(E,F,Y){E.transparent===!0&&E.side===Hi&&E.forceSinglePass===!1?(E.side=Yn,E.needsUpdate=!0,bt(E,F,Y),E.side=Mr,E.needsUpdate=!0,bt(E,F,Y),E.side=Hi):bt(E,F,Y)}this.compile=function(E,F,Y=null){Y===null&&(Y=E),b=ae.get(Y),b.init(F),A.push(b),Y.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(b.pushLight(z),z.castShadow&&b.pushShadow(z))}),E!==Y&&E.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(b.pushLight(z),z.castShadow&&b.pushShadow(z))}),b.setupLights();const X=new Set;return E.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const le=z.material;if(le)if(Array.isArray(le))for(let ge=0;ge<le.length;ge++){const de=le[ge];Ye(de,Y,z),X.add(de)}else Ye(le,Y,z),X.add(le)}),b=A.pop(),X},this.compileAsync=function(E,F,Y=null){const X=this.compile(E,F,Y);return new Promise(z=>{function le(){if(X.forEach(function(ge){v.get(ge).currentProgram.isReady()&&X.delete(ge)}),X.size===0){z(E);return}setTimeout(le,10)}nt.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let Le=null;function je(E){Le&&Le(E)}function Wt(){vt.stop()}function st(){vt.start()}const vt=new Um;vt.setAnimationLoop(je),typeof self<"u"&&vt.setContext(self),this.setAnimationLoop=function(E){Le=E,ce.setAnimationLoop(E),E===null?vt.stop():vt.start()},ce.addEventListener("sessionstart",Wt),ce.addEventListener("sessionend",st),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){Ve("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;const Y=ce.enabled===!0&&ce.isPresenting===!0,X=C!==null&&(B===null||Y)&&C.begin(x,B);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(F),F=ce.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,F,B),b=ae.get(E,A.length),b.init(F),A.push(b),dt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Ce.setFromProjectionMatrix(dt,Yi,F.reversedDepth),Ge=this.localClippingEnabled,ye=Se.init(this.clippingPlanes,Ge),y=ne.get(E,w.length),y.init(),w.push(y),ce.enabled===!0&&ce.isPresenting===!0){const ge=x.xr.getDepthSensingMesh();ge!==null&&qt(ge,F,-1/0,x.sortObjects)}qt(E,F,0,x.sortObjects),y.finish(),x.sortObjects===!0&&y.sort(Xe,$e),Ue=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,Ue&&oe.addToRenderList(y,E),this.info.render.frame++,ye===!0&&Se.beginShadows();const z=b.state.shadowsArray;if(Ae.render(z,E,F),ye===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset(),(X&&C.hasRenderPass())===!1){const ge=y.opaque,de=y.transmissive;if(b.setupLights(),F.isArrayCamera){const xe=F.cameras;if(de.length>0)for(let Pe=0,He=xe.length;Pe<He;Pe++){const Oe=xe[Pe];wt(ge,de,E,Oe)}Ue&&oe.render(E);for(let Pe=0,He=xe.length;Pe<He;Pe++){const Oe=xe[Pe];It(y,E,Oe,Oe.viewport)}}else de.length>0&&wt(ge,de,E,F),Ue&&oe.render(E),It(y,E,F)}B!==null&&I===0&&(U.updateMultisampleRenderTarget(B),U.updateRenderTargetMipmap(B)),X&&C.end(x),E.isScene===!0&&E.onAfterRender(x,E,F),he.resetDefaultState(),H=-1,G=null,A.pop(),A.length>0?(b=A[A.length-1],ye===!0&&Se.setGlobalState(x.clippingPlanes,b.state.camera)):b=null,w.pop(),w.length>0?y=w[w.length-1]:y=null};function qt(E,F,Y,X){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)Y=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLight)b.pushLight(E),E.castShadow&&b.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Ce.intersectsSprite(E)){X&&ke.setFromMatrixPosition(E.matrixWorld).applyMatrix4(dt);const ge=se.update(E),de=E.material;de.visible&&y.push(E,ge,de,Y,ke.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Ce.intersectsObject(E))){const ge=se.update(E),de=E.material;if(X&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ke.copy(E.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),ke.copy(ge.boundingSphere.center)),ke.applyMatrix4(E.matrixWorld).applyMatrix4(dt)),Array.isArray(de)){const xe=ge.groups;for(let Pe=0,He=xe.length;Pe<He;Pe++){const Oe=xe[Pe],at=de[Oe.materialIndex];at&&at.visible&&y.push(E,ge,at,Y,ke.z,Oe)}}else de.visible&&y.push(E,ge,de,Y,ke.z,null)}}const le=E.children;for(let ge=0,de=le.length;ge<de;ge++)qt(le[ge],F,Y,X)}function It(E,F,Y,X){const{opaque:z,transmissive:le,transparent:ge}=E;b.setupLightsView(Y),ye===!0&&Se.setGlobalState(x.clippingPlanes,Y),X&&Me.viewport(V.copy(X)),z.length>0&&mt(z,F,Y),le.length>0&&mt(le,F,Y),ge.length>0&&mt(ge,F,Y),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function wt(E,F,Y,X){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[X.id]===void 0){const at=nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[X.id]=new $i(1,1,{generateMipmaps:!0,type:at?Sr:oi,minFilter:mr,samples:ze.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ht.workingColorSpace})}const le=b.state.transmissionRenderTarget[X.id],ge=X.viewport||V;le.setSize(ge.z*x.transmissionResolutionScale,ge.w*x.transmissionResolutionScale);const de=x.getRenderTarget(),xe=x.getActiveCubeFace(),Pe=x.getActiveMipmapLevel();x.setRenderTarget(le),x.getClearColor(ie),D=x.getClearAlpha(),D<1&&x.setClearColor(16777215,.5),x.clear(),Ue&&oe.render(Y);const He=x.toneMapping;x.toneMapping=Ki;const Oe=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),b.setupLightsView(X),ye===!0&&Se.setGlobalState(x.clippingPlanes,X),mt(E,Y,X),U.updateMultisampleRenderTarget(le),U.updateRenderTargetMipmap(le),nt.has("WEBGL_multisampled_render_to_texture")===!1){let at=!1;for(let Et=0,Vt=F.length;Et<Vt;Et++){const Gt=F[Et],{object:Rt,geometry:Fe,material:yt,group:_t}=Gt;if(yt.side===Hi&&Rt.layers.test(X.layers)){const Qn=yt.side;yt.side=Yn,yt.needsUpdate=!0,zn(Rt,Y,X,Fe,yt,_t),yt.side=Qn,yt.needsUpdate=!0,at=!0}}at===!0&&(U.updateMultisampleRenderTarget(le),U.updateRenderTargetMipmap(le))}x.setRenderTarget(de,xe,Pe),x.setClearColor(ie,D),Oe!==void 0&&(X.viewport=Oe),x.toneMapping=He}function mt(E,F,Y){const X=F.isScene===!0?F.overrideMaterial:null;for(let z=0,le=E.length;z<le;z++){const ge=E[z],{object:de,geometry:xe,group:Pe}=ge;let He=ge.material;He.allowOverride===!0&&X!==null&&(He=X),de.layers.test(Y.layers)&&zn(de,F,Y,xe,He,Pe)}}function zn(E,F,Y,X,z,le){E.onBeforeRender(x,F,Y,X,z,le),E.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),z.onBeforeRender(x,F,Y,X,E,le),z.transparent===!0&&z.side===Hi&&z.forceSinglePass===!1?(z.side=Yn,z.needsUpdate=!0,x.renderBufferDirect(Y,F,X,z,E,le),z.side=Mr,z.needsUpdate=!0,x.renderBufferDirect(Y,F,X,z,E,le),z.side=Hi):x.renderBufferDirect(Y,F,X,z,E,le),E.onAfterRender(x,F,Y,X,z,le)}function bt(E,F,Y){F.isScene!==!0&&(F=Ze);const X=v.get(E),z=b.state.lights,le=b.state.shadowsArray,ge=z.state.version,de=Ee.getParameters(E,z.state,le,F,Y),xe=Ee.getProgramCacheKey(de);let Pe=X.programs;X.environment=E.isMeshStandardMaterial?F.environment:null,X.fog=F.fog,X.envMap=(E.isMeshStandardMaterial?Z:$).get(E.envMap||X.environment),X.envMapRotation=X.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,Pe===void 0&&(E.addEventListener("dispose",Re),Pe=new Map,X.programs=Pe);let He=Pe.get(xe);if(He!==void 0){if(X.currentProgram===He&&X.lightsStateVersion===ge)return Jn(E,de),He}else de.uniforms=Ee.getUniforms(E),E.onBeforeCompile(de,x),He=Ee.acquireProgram(de,xe),Pe.set(xe,He),X.uniforms=de.uniforms;const Oe=X.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Oe.clippingPlanes=Se.uniform),Jn(E,de),X.needsLights=ln(E),X.lightsStateVersion=ge,X.needsLights&&(Oe.ambientLightColor.value=z.state.ambient,Oe.lightProbe.value=z.state.probe,Oe.directionalLights.value=z.state.directional,Oe.directionalLightShadows.value=z.state.directionalShadow,Oe.spotLights.value=z.state.spot,Oe.spotLightShadows.value=z.state.spotShadow,Oe.rectAreaLights.value=z.state.rectArea,Oe.ltc_1.value=z.state.rectAreaLTC1,Oe.ltc_2.value=z.state.rectAreaLTC2,Oe.pointLights.value=z.state.point,Oe.pointLightShadows.value=z.state.pointShadow,Oe.hemisphereLights.value=z.state.hemi,Oe.directionalShadowMap.value=z.state.directionalShadowMap,Oe.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Oe.spotShadowMap.value=z.state.spotShadowMap,Oe.spotLightMatrix.value=z.state.spotLightMatrix,Oe.spotLightMap.value=z.state.spotLightMap,Oe.pointShadowMap.value=z.state.pointShadowMap,Oe.pointShadowMatrix.value=z.state.pointShadowMatrix),X.currentProgram=He,X.uniformsList=null,He}function xn(E){if(E.uniformsList===null){const F=E.currentProgram.getUniforms();E.uniformsList=Bl.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function Jn(E,F){const Y=v.get(E);Y.outputColorSpace=F.outputColorSpace,Y.batching=F.batching,Y.batchingColor=F.batchingColor,Y.instancing=F.instancing,Y.instancingColor=F.instancingColor,Y.instancingMorph=F.instancingMorph,Y.skinning=F.skinning,Y.morphTargets=F.morphTargets,Y.morphNormals=F.morphNormals,Y.morphColors=F.morphColors,Y.morphTargetsCount=F.morphTargetsCount,Y.numClippingPlanes=F.numClippingPlanes,Y.numIntersection=F.numClipIntersection,Y.vertexAlphas=F.vertexAlphas,Y.vertexTangents=F.vertexTangents,Y.toneMapping=F.toneMapping}function Zt(E,F,Y,X,z){F.isScene!==!0&&(F=Ze),U.resetTextureUnits();const le=F.fog,ge=X.isMeshStandardMaterial?F.environment:null,de=B===null?x.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:kn,xe=(X.isMeshStandardMaterial?Z:$).get(X.envMap||ge),Pe=X.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,He=!!Y.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Oe=!!Y.morphAttributes.position,at=!!Y.morphAttributes.normal,Et=!!Y.morphAttributes.color;let Vt=Ki;X.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Vt=x.toneMapping);const Gt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Rt=Gt!==void 0?Gt.length:0,Fe=v.get(X),yt=b.state.lights;if(ye===!0&&(Ge===!0||E!==G)){const wn=E===G&&X.id===H;Se.setState(X,E,wn)}let _t=!1;X.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==yt.state.version||Fe.outputColorSpace!==de||z.isBatchedMesh&&Fe.batching===!1||!z.isBatchedMesh&&Fe.batching===!0||z.isBatchedMesh&&Fe.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Fe.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Fe.instancing===!1||!z.isInstancedMesh&&Fe.instancing===!0||z.isSkinnedMesh&&Fe.skinning===!1||!z.isSkinnedMesh&&Fe.skinning===!0||z.isInstancedMesh&&Fe.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Fe.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Fe.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Fe.instancingMorph===!1&&z.morphTexture!==null||Fe.envMap!==xe||X.fog===!0&&Fe.fog!==le||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==Se.numPlanes||Fe.numIntersection!==Se.numIntersection)||Fe.vertexAlphas!==Pe||Fe.vertexTangents!==He||Fe.morphTargets!==Oe||Fe.morphNormals!==at||Fe.morphColors!==Et||Fe.toneMapping!==Vt||Fe.morphTargetsCount!==Rt)&&(_t=!0):(_t=!0,Fe.__version=X.version);let Qn=Fe.currentProgram;_t===!0&&(Qn=bt(X,F,z));let Is=!1,ei=!1,Ba=!1;const Dt=Qn.getUniforms(),Vn=Fe.uniforms;if(Me.useProgram(Qn.program)&&(Is=!0,ei=!0,Ba=!0),X.id!==H&&(H=X.id,ei=!0),Is||G!==E){Me.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Dt.setValue(N,"projectionMatrix",E.projectionMatrix),Dt.setValue(N,"viewMatrix",E.matrixWorldInverse);const Gn=Dt.map.cameraPosition;Gn!==void 0&&Gn.setValue(N,be.setFromMatrixPosition(E.matrixWorld)),ze.logarithmicDepthBuffer&&Dt.setValue(N,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Dt.setValue(N,"isOrthographic",E.isOrthographicCamera===!0),G!==E&&(G=E,ei=!0,Ba=!0)}if(Fe.needsLights&&(yt.state.directionalShadowMap.length>0&&Dt.setValue(N,"directionalShadowMap",yt.state.directionalShadowMap,U),yt.state.spotShadowMap.length>0&&Dt.setValue(N,"spotShadowMap",yt.state.spotShadowMap,U),yt.state.pointShadowMap.length>0&&Dt.setValue(N,"pointShadowMap",yt.state.pointShadowMap,U)),z.isSkinnedMesh){Dt.setOptional(N,z,"bindMatrix"),Dt.setOptional(N,z,"bindMatrixInverse");const wn=z.skeleton;wn&&(wn.boneTexture===null&&wn.computeBoneTexture(),Dt.setValue(N,"boneTexture",wn.boneTexture,U))}z.isBatchedMesh&&(Dt.setOptional(N,z,"batchingTexture"),Dt.setValue(N,"batchingTexture",z._matricesTexture,U),Dt.setOptional(N,z,"batchingIdTexture"),Dt.setValue(N,"batchingIdTexture",z._indirectTexture,U),Dt.setOptional(N,z,"batchingColorTexture"),z._colorsTexture!==null&&Dt.setValue(N,"batchingColorTexture",z._colorsTexture,U));const gi=Y.morphAttributes;if((gi.position!==void 0||gi.normal!==void 0||gi.color!==void 0)&&We.update(z,Y,Qn),(ei||Fe.receiveShadow!==z.receiveShadow)&&(Fe.receiveShadow=z.receiveShadow,Dt.setValue(N,"receiveShadow",z.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Vn.envMap.value=xe,Vn.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&F.environment!==null&&(Vn.envMapIntensity.value=F.environmentIntensity),Vn.dfgLUT!==void 0&&(Vn.dfgLUT.value=ET()),ei&&(Dt.setValue(N,"toneMappingExposure",x.toneMappingExposure),Fe.needsLights&&Jt(Vn,Ba),le&&X.fog===!0&&Te.refreshFogUniforms(Vn,le),Te.refreshMaterialUniforms(Vn,X,Be,Ie,b.state.transmissionRenderTarget[E.id]),Bl.upload(N,xn(Fe),Vn,U)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Bl.upload(N,xn(Fe),Vn,U),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Dt.setValue(N,"center",z.center),Dt.setValue(N,"modelViewMatrix",z.modelViewMatrix),Dt.setValue(N,"normalMatrix",z.normalMatrix),Dt.setValue(N,"modelMatrix",z.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const wn=X.uniformsGroups;for(let Gn=0,Sc=wn.length;Gn<Sc;Gn++){const Jr=wn[Gn];ee.update(Jr,Qn),ee.bind(Jr,Qn)}}return Qn}function Jt(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function ln(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(E,F,Y){const X=v.get(E);X.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),v.get(E.texture).__webglTexture=F,v.get(E.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:Y,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,F){const Y=v.get(E);Y.__webglFramebuffer=F,Y.__useDefaultFramebuffer=F===void 0};const sr=N.createFramebuffer();this.setRenderTarget=function(E,F=0,Y=0){B=E,P=F,I=Y;let X=null,z=!1,le=!1;if(E){const de=v.get(E);if(de.__useDefaultFramebuffer!==void 0){Me.bindFramebuffer(N.FRAMEBUFFER,de.__webglFramebuffer),V.copy(E.viewport),O.copy(E.scissor),j=E.scissorTest,Me.viewport(V),Me.scissor(O),Me.setScissorTest(j),H=-1;return}else if(de.__webglFramebuffer===void 0)U.setupRenderTarget(E);else if(de.__hasExternalTextures)U.rebindTextures(E,v.get(E.texture).__webglTexture,v.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const He=E.depthTexture;if(de.__boundDepthTexture!==He){if(He!==null&&v.has(He)&&(E.width!==He.image.width||E.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(E)}}const xe=E.texture;(xe.isData3DTexture||xe.isDataArrayTexture||xe.isCompressedArrayTexture)&&(le=!0);const Pe=v.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Pe[F])?X=Pe[F][Y]:X=Pe[F],z=!0):E.samples>0&&U.useMultisampledRTT(E)===!1?X=v.get(E).__webglMultisampledFramebuffer:Array.isArray(Pe)?X=Pe[Y]:X=Pe,V.copy(E.viewport),O.copy(E.scissor),j=E.scissorTest}else V.copy(K).multiplyScalar(Be).floor(),O.copy(J).multiplyScalar(Be).floor(),j=fe;if(Y!==0&&(X=sr),Me.bindFramebuffer(N.FRAMEBUFFER,X)&&Me.drawBuffers(E,X),Me.viewport(V),Me.scissor(O),Me.setScissorTest(j),z){const de=v.get(E.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+F,de.__webglTexture,Y)}else if(le){const de=F;for(let xe=0;xe<E.textures.length;xe++){const Pe=v.get(E.textures[xe]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+xe,Pe.__webglTexture,Y,de)}}else if(E!==null&&Y!==0){const de=v.get(E.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,de.__webglTexture,Y)}H=-1},this.readRenderTargetPixels=function(E,F,Y,X,z,le,ge,de=0){if(!(E&&E.isWebGLRenderTarget)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=v.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ge!==void 0&&(xe=xe[ge]),xe){Me.bindFramebuffer(N.FRAMEBUFFER,xe);try{const Pe=E.textures[de],He=Pe.format,Oe=Pe.type;if(!ze.textureFormatReadable(He)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ze.textureTypeReadable(Oe)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-X&&Y>=0&&Y<=E.height-z&&(E.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+de),N.readPixels(F,Y,X,z,te.convert(He),te.convert(Oe),le))}finally{const Pe=B!==null?v.get(B).__webglFramebuffer:null;Me.bindFramebuffer(N.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(E,F,Y,X,z,le,ge,de=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=v.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ge!==void 0&&(xe=xe[ge]),xe)if(F>=0&&F<=E.width-X&&Y>=0&&Y<=E.height-z){Me.bindFramebuffer(N.FRAMEBUFFER,xe);const Pe=E.textures[de],He=Pe.format,Oe=Pe.type;if(!ze.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ze.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const at=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,at),N.bufferData(N.PIXEL_PACK_BUFFER,le.byteLength,N.STREAM_READ),E.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+de),N.readPixels(F,Y,X,z,te.convert(He),te.convert(Oe),0);const Et=B!==null?v.get(B).__webglFramebuffer:null;Me.bindFramebuffer(N.FRAMEBUFFER,Et);const Vt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Zg(N,Vt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,at),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,le),N.deleteBuffer(at),N.deleteSync(Vt),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,F=null,Y=0){const X=Math.pow(2,-Y),z=Math.floor(E.image.width*X),le=Math.floor(E.image.height*X),ge=F!==null?F.x:0,de=F!==null?F.y:0;U.setTexture2D(E,0),N.copyTexSubImage2D(N.TEXTURE_2D,Y,0,0,ge,de,z,le),Me.unbindTexture()};const Ls=N.createFramebuffer(),cn=N.createFramebuffer();this.copyTextureToTexture=function(E,F,Y=null,X=null,z=0,le=null){le===null&&(z!==0?(Po("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),le=z,z=0):le=0);let ge,de,xe,Pe,He,Oe,at,Et,Vt;const Gt=E.isCompressedTexture?E.mipmaps[le]:E.image;if(Y!==null)ge=Y.max.x-Y.min.x,de=Y.max.y-Y.min.y,xe=Y.isBox3?Y.max.z-Y.min.z:1,Pe=Y.min.x,He=Y.min.y,Oe=Y.isBox3?Y.min.z:0;else{const gi=Math.pow(2,-z);ge=Math.floor(Gt.width*gi),de=Math.floor(Gt.height*gi),E.isDataArrayTexture?xe=Gt.depth:E.isData3DTexture?xe=Math.floor(Gt.depth*gi):xe=1,Pe=0,He=0,Oe=0}X!==null?(at=X.x,Et=X.y,Vt=X.z):(at=0,Et=0,Vt=0);const Rt=te.convert(F.format),Fe=te.convert(F.type);let yt;F.isData3DTexture?(U.setTexture3D(F,0),yt=N.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(U.setTexture2DArray(F,0),yt=N.TEXTURE_2D_ARRAY):(U.setTexture2D(F,0),yt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,F.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,F.unpackAlignment);const _t=N.getParameter(N.UNPACK_ROW_LENGTH),Qn=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Is=N.getParameter(N.UNPACK_SKIP_PIXELS),ei=N.getParameter(N.UNPACK_SKIP_ROWS),Ba=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,Gt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Gt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Pe),N.pixelStorei(N.UNPACK_SKIP_ROWS,He),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Oe);const Dt=E.isDataArrayTexture||E.isData3DTexture,Vn=F.isDataArrayTexture||F.isData3DTexture;if(E.isDepthTexture){const gi=v.get(E),wn=v.get(F),Gn=v.get(gi.__renderTarget),Sc=v.get(wn.__renderTarget);Me.bindFramebuffer(N.READ_FRAMEBUFFER,Gn.__webglFramebuffer),Me.bindFramebuffer(N.DRAW_FRAMEBUFFER,Sc.__webglFramebuffer);for(let Jr=0;Jr<xe;Jr++)Dt&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,v.get(E).__webglTexture,z,Oe+Jr),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,v.get(F).__webglTexture,le,Vt+Jr)),N.blitFramebuffer(Pe,He,ge,de,at,Et,ge,de,N.DEPTH_BUFFER_BIT,N.NEAREST);Me.bindFramebuffer(N.READ_FRAMEBUFFER,null),Me.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(z!==0||E.isRenderTargetTexture||v.has(E)){const gi=v.get(E),wn=v.get(F);Me.bindFramebuffer(N.READ_FRAMEBUFFER,Ls),Me.bindFramebuffer(N.DRAW_FRAMEBUFFER,cn);for(let Gn=0;Gn<xe;Gn++)Dt?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,gi.__webglTexture,z,Oe+Gn):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,gi.__webglTexture,z),Vn?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,wn.__webglTexture,le,Vt+Gn):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,wn.__webglTexture,le),z!==0?N.blitFramebuffer(Pe,He,ge,de,at,Et,ge,de,N.COLOR_BUFFER_BIT,N.NEAREST):Vn?N.copyTexSubImage3D(yt,le,at,Et,Vt+Gn,Pe,He,ge,de):N.copyTexSubImage2D(yt,le,at,Et,Pe,He,ge,de);Me.bindFramebuffer(N.READ_FRAMEBUFFER,null),Me.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Vn?E.isDataTexture||E.isData3DTexture?N.texSubImage3D(yt,le,at,Et,Vt,ge,de,xe,Rt,Fe,Gt.data):F.isCompressedArrayTexture?N.compressedTexSubImage3D(yt,le,at,Et,Vt,ge,de,xe,Rt,Gt.data):N.texSubImage3D(yt,le,at,Et,Vt,ge,de,xe,Rt,Fe,Gt):E.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,le,at,Et,ge,de,Rt,Fe,Gt.data):E.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,le,at,Et,Gt.width,Gt.height,Rt,Gt.data):N.texSubImage2D(N.TEXTURE_2D,le,at,Et,ge,de,Rt,Fe,Gt);N.pixelStorei(N.UNPACK_ROW_LENGTH,_t),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Qn),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Is),N.pixelStorei(N.UNPACK_SKIP_ROWS,ei),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ba),le===0&&F.generateMipmaps&&N.generateMipmap(yt),Me.unbindTexture()},this.initRenderTarget=function(E){v.get(E).__webglFramebuffer===void 0&&U.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?U.setTextureCube(E,0):E.isData3DTexture?U.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?U.setTexture2DArray(E,0):U.setTexture2D(E,0),Me.unbindTexture()},this.resetState=function(){P=0,I=0,B=null,Me.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=ht._getUnpackColorSpace()}}function hp(s,e){if(e===zg)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===fh||e===gm){let t=s.getIndex();if(t===null){const a=[],o=s.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===fh)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class wT extends Oa{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new LT(t)}),this.register(function(t){return new IT(t)}),this.register(function(t){return new GT(t)}),this.register(function(t){return new HT(t)}),this.register(function(t){return new WT(t)}),this.register(function(t){return new UT(t)}),this.register(function(t){return new OT(t)}),this.register(function(t){return new FT(t)}),this.register(function(t){return new BT(t)}),this.register(function(t){return new DT(t)}),this.register(function(t){return new kT(t)}),this.register(function(t){return new NT(t)}),this.register(function(t){return new VT(t)}),this.register(function(t){return new zT(t)}),this.register(function(t){return new CT(t)}),this.register(function(t){return new XT(t)}),this.register(function(t){return new YT(t)})}load(e,t,n,i){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=uo.extractUrlBase(e);a=uo.resolveURL(c,this.path)}else a=uo.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Nm(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===zm){try{a[ct.KHR_BINARY_GLTF]=new qT(e)}catch(h){i&&i(h);return}r=JSON.parse(a[ct.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new ab(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case ct.KHR_MATERIALS_UNLIT:a[h]=new PT;break;case ct.KHR_DRACO_MESH_COMPRESSION:a[h]=new jT(r,this.dracoLoader);break;case ct.KHR_TEXTURE_TRANSFORM:a[h]=new KT;break;case ct.KHR_MESH_QUANTIZATION:a[h]=new $T;break;default:f.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function RT(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const ct={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class CT{constructor(e){this.parser=e,this.name=ct.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new Ke(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],kn);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new gx(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new mx(u),c.distance=h;break;case"spot":c=new dx(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),ki(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class PT{constructor(){this.name=ct.KHR_MATERIALS_UNLIT}getMaterialType(){return ps}extendParams(e,t,n){const i=[];e.color=new Ke(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],kn),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,mn))}return Promise.all(i)}}class DT{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class LT{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:rr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new qe(o,o)}return Promise.all(r)}}class IT{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:rr}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class NT{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:rr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class UT{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:rr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Ke(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],kn)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,mn)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class OT{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:rr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class FT{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:rr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Ke().setRGB(o[0],o[1],o[2],kn),Promise.all(r)}}class BT{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:rr}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class kT{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:rr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Ke().setRGB(o[0],o[1],o[2],kn),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,mn)),Promise.all(r)}}class zT{constructor(e){this.parser=e,this.name=ct.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:rr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}}class VT{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:rr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class GT{constructor(e){this.parser=e,this.name=ct.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class HT{constructor(e){this.parser=e,this.name=ct.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}}class WT{constructor(e){this.parser=e,this.name=ct.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}}class XT{constructor(e){this.name=ct.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,f=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,f,i.mode,i.filter).then(function(d){return d.buffer}):a.ready.then(function(){const d=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(d),u,h,f,i.mode,i.filter),d})})}else return null}}class YT{constructor(e){this.name=ct.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==yi.TRIANGLES&&c.mode!==yi.TRIANGLE_STRIP&&c.mode!==yi.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(const _ of h){const g=new et,m=new k,p=new Bn,M=new k(1,1,1),T=new H0(_.geometry,_.material,f);for(let y=0;y<f;y++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,y),l.SCALE&&M.fromBufferAttribute(l.SCALE,y),T.setMatrixAt(y,g.compose(m,p,M));for(const y in l)if(y==="_COLOR_0"){const b=l[y];T.instanceColor=new ph(b.array,b.itemSize,b.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&_.geometry.setAttribute(y,l[y]);zt.prototype.copy.call(T,_),this.parser.assignFinalMaterial(T),d.push(T)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const zm="glTF",ja=12,fp={JSON:1313821514,BIN:5130562};class qT{constructor(e){this.name=ct.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ja),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==zm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-ja,r=new DataView(e,ja);let a=0;for(;a<i;){const o=r.getUint32(a,!0);a+=4;const l=r.getUint32(a,!0);if(a+=4,l===fp.JSON){const c=new Uint8Array(e,ja+a,o);this.content=n.decode(c)}else if(l===fp.BIN){const c=ja+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class jT{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ct.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const u in a){const h=vh[u]||u.toLowerCase();o[h]=a[u]}for(const u in e.attributes){const h=vh[u]||u.toLowerCase();if(a[u]!==void 0){const f=n.accessors[e.attributes[u]],d=ca[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){i.decodeDracoFile(u,function(d){for(const _ in d.attributes){const g=d.attributes[_],m=l[_];m!==void 0&&(g.normalized=m)}h(d)},o,c,kn,f)})})}}class KT{constructor(){this.name=ct.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class $T{constructor(){this.name=ct.KHR_MESH_QUANTIZATION}}class Vm extends Wo{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=i-t,h=(n-t)/u,f=h*h,d=f*h,_=e*c,g=_-c,m=-2*d+3*f,p=d-f,M=1-m,T=p-f+h;for(let y=0;y!==o;y++){const b=a[g+y+o],w=a[g+y+l]*u,A=a[_+y+o],C=a[_+y]*u;r[y]=M*b+T*w+m*A+p*C}return r}}const ZT=new Bn;class JT extends Vm{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return ZT.fromArray(r).normalize().toArray(r),r}}const yi={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ca={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},dp={9728:rn,9729:sn,9984:um,9985:Il,9986:Qa,9987:mr},pp={33071:Xi,33648:Kl,10497:va},iu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},vh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Nr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},QT={CUBICSPLINE:void 0,LINEAR:Ro,STEP:wo},ru={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function eb(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new df({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Mr})),s.DefaultMaterial}function ss(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ki(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function tb(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;a.push(f)}if(i){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;o.push(f)}if(r){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;l.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function nb(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function ib(s){let e;const t=s.extensions&&s.extensions[ct.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+su(t.attributes):e=s.indices+":"+su(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+su(s.targets[n]);return e}function su(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function yh(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function rb(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const sb=new et;class ab{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new RT,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?this.textureLoader=new hx(this.options.manager):this.textureLoader=new xx(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Nm(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return ss(r,o,i),ki(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,u]of a.children.entries())r(u,o.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ct.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,a){n.load(uo.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=iu[i.type],o=ca[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new En(c,a,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],l=iu[i.type],c=ca[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,_=i.normalized===!0;let g,m;if(d&&d!==h){const p=Math.floor(f/d),M="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let T=t.cache.get(M);T||(g=new c(o,p*d,i.count*d/u),T=new B0(g,d/u),t.cache.add(M,T)),m=new of(T,l,f%d/u,_)}else o===null?g=new c(i.count*l):g=new c(o,f,i.count*l),m=new En(g,l,_);if(i.sparse!==void 0){const p=iu.SCALAR,M=ca[i.sparse.indices.componentType],T=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,b=new M(a[1],T,i.sparse.count*p),w=new c(a[2],y,i.sparse.count*l);o!==null&&(m=new En(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,C=b.length;A<C;A++){const x=b[A];if(m.setX(x,w[A*l]),l>=2&&m.setY(x,w[A*l+1]),l>=3&&m.setZ(x,w[A*l+2]),l>=4&&m.setW(x,w[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=_}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const i=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const f=(r.samplers||{})[a.sampler]||{};return u.magFilter=dp[f.magFilter]||sn,u.minFilter=dp[f.minFilter]||mr,u.wrapS=pp[f.wrapS]||va,u.wrapT=pp[f.wrapT]||va,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==rn&&u.minFilter!==sn,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const a=i.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:a.mimeType});return l=o.createObjectURL(f),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let _=f;t.isImageBitmapLoader===!0&&(_=function(g){const m=new dn(g);m.needsUpdate=!0,f(m)}),t.load(uo.resolveURL(h,r.path),_,void 0,d)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),ki(h,a),h.userData.mimeType=a.mimeType||rb(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[ct.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[ct.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(a);a=r.extensions[ct.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new ff,Zi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Cm,Zi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return df}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let a;const o={},l=r.extensions||{},c=[];if(l[ct.KHR_MATERIALS_UNLIT]){const h=i[ct.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),c.push(h.extendParams(o,r,t))}else{const h=r.pbrMetallicRoughness||{};if(o.color=new Ke(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],kn),o.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,mn)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Hi);const u=r.alphaMode||ru.OPAQUE;if(u===ru.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===ru.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==ps&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new qe(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;o.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&a!==ps&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==ps){const h=r.emissiveFactor;o.emissive=new Ke().setRGB(h[0],h[1],h[2],kn)}return r.emissiveTexture!==void 0&&a!==ps&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,mn)),Promise.all(c).then(function(){const h=new a(o);return r.name&&(h.name=r.name),ki(h,r),t.associations.set(h,{materials:e}),r.extensions&&ss(i,h,r),h})}createUniqueName(e){const t=Tt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[ct.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return mp(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],u=ib(c),h=i[u];if(h)a.push(h.promise);else{let f;c.extensions&&c.extensions[ct.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=mp(new _i,c,t),i[u]={primitive:c,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const u=a[l].material===void 0?eb(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,_=u.length;d<_;d++){const g=u[d],m=a[d];let p;const M=c[d];if(m.mode===yi.TRIANGLES||m.mode===yi.TRIANGLE_STRIP||m.mode===yi.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new z0(g,M):new di(g,M),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===yi.TRIANGLE_STRIP?p.geometry=hp(p.geometry,gm):m.mode===yi.TRIANGLE_FAN&&(p.geometry=hp(p.geometry,fh));else if(m.mode===yi.LINES)p=new q0(g,M);else if(m.mode===yi.LINE_STRIP)p=new hf(g,M);else if(m.mode===yi.LINE_LOOP)p=new j0(g,M);else if(m.mode===yi.POINTS)p=new Pm(g,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&nb(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),ki(p,r),m.extensions&&ss(i,p,m),t.assignFinalMaterial(p),h.push(p)}for(let d=0,_=h.length;d<_;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return r.extensions&&ss(i,h[0],r),h[0];const f=new ms;r.extensions&&ss(i,f,r),t.associations.set(f,{meshes:e});for(let d=0,_=h.length;d<_;d++)f.add(h[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Un(nf.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new mc(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ki(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),a=i,o=[],l=[];for(let c=0,u=a.length;c<u;c++){const h=a[c];if(h){o.push(h);const f=new et;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new cf(o,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],u=[];for(let h=0,f=i.channels.length;h<f;h++){const d=i.channels[h],_=i.samplers[d.sampler],g=d.target,m=g.node,p=i.parameters!==void 0?i.parameters[_.input]:_.input,M=i.parameters!==void 0?i.parameters[_.output]:_.output;g.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",M)),c.push(_),u.push(g))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const f=h[0],d=h[1],_=h[2],g=h[3],m=h[4],p=[];for(let T=0,y=f.length;T<y;T++){const b=f[T],w=d[T],A=_[T],C=g[T],x=m[T];if(b===void 0)continue;b.updateMatrix&&b.updateMatrix();const S=n._createAnimationTracks(b,w,A,C,x);if(S)for(let P=0;P<S.length;P++)p.push(S[P])}const M=new rx(r,void 0,p);return ki(M,i),M})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,u=o.length;c<u;c++)a.push(n.getDependency("node",o[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){const u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,sb)});for(let d=0,_=h.length;d<_;d++)u.add(h[d]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(r.isBone===!0?u=new Rm:c.length>1?u=new ms:c.length===1?u=c[0]:u=new zt,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=a),ki(u,r),r.extensions&&ss(n,u,r),r.matrix!==void 0){const h=new et;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!i.associations.has(u))i.associations.set(u,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){const h=i.associations.get(u);i.associations.set(u,{...h})}return i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new ms;n.name&&(r.name=i.createUniqueName(n.name)),ki(r,n),n.extensions&&ss(t,r,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);const c=u=>{const h=new Map;for(const[f,d]of i.associations)(f instanceof Zi||f instanceof dn)&&h.set(f,d);return u.traverse(f=>{const d=i.associations.get(f);d!=null&&h.set(f,d)}),h};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const a=[],o=e.name?e.name:e.uuid,l=[];Nr[r.path]===Nr.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(o);let c;switch(Nr[r.path]){case Nr.weights:c=Ta;break;case Nr.rotation:c=ba;break;case Nr.translation:case Nr.scale:c=Ea;break;default:n.itemSize===1?c=Ta:c=Ea;break}const u=i.interpolation!==void 0?QT[i.interpolation]:Ro,h=this._getArrayFromAccessor(n);for(let f=0,d=l.length;f<d;f++){const _=new c(l[f]+"."+Nr[r.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),a.push(_)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=yh(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof ba?JT:Vm;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function ob(s,e,t){const n=e.attributes,i=new wr;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new k(l[0],l[1],l[2]),new k(c[0],c[1],c[2])),o.normalized){const u=yh(ca[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new k,l=new k;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,_=f.max;if(d!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(_[2]))),f.normalized){const g=yh(ca[f.componentType]);l.multiplyScalar(g)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;const a=new ir;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function mp(s,e,t){const n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(const a in n){const o=vh[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){const a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return ht.workingColorSpace!==kn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ht.workingColorSpace}" not supported.`),ki(s,e),ob(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?tb(s,e.targets,t):s})}const _p={type:"change"},xf={type:"start"},Gm={type:"end"},xl=new Ia,gp=new Or,lb=Math.cos(70*nf.DEG2RAD),Qt=new k,Hn=2*Math.PI,At={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},au=1e-6;class cb extends Px{constructor(e,t=null){super(e,t),this.state=At.NONE,this.target=new k,this.cursor=new k,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:aa.ROTATE,MIDDLE:aa.DOLLY,RIGHT:aa.PAN},this.touches={ONE:ta.ROTATE,TWO:ta.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new k,this._lastQuaternion=new Bn,this._lastTargetPosition=new k,this._quat=new Bn().setFromUnitVectors(e.up,new k(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new zd,this._sphericalDelta=new zd,this._scale=1,this._panOffset=new k,this._rotateStart=new qe,this._rotateEnd=new qe,this._rotateDelta=new qe,this._panStart=new qe,this._panEnd=new qe,this._panDelta=new qe,this._dollyStart=new qe,this._dollyEnd=new qe,this._dollyDelta=new qe,this._dollyDirection=new k,this._mouse=new qe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=hb.bind(this),this._onPointerDown=ub.bind(this),this._onPointerUp=fb.bind(this),this._onContextMenu=vb.bind(this),this._onMouseWheel=mb.bind(this),this._onKeyDown=_b.bind(this),this._onTouchStart=gb.bind(this),this._onTouchMove=xb.bind(this),this._onMouseDown=db.bind(this),this._onMouseMove=pb.bind(this),this._interceptControlDown=yb.bind(this),this._interceptControlUp=Mb.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(_p),this.update(),this.state=At.NONE}update(e=null){const t=this.object.position;Qt.copy(t).sub(this.target),Qt.applyQuaternion(this._quat),this._spherical.setFromVector3(Qt),this.autoRotate&&this.state===At.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=Hn:n>Math.PI&&(n-=Hn),i<-Math.PI?i+=Hn:i>Math.PI&&(i-=Hn),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Qt.setFromSpherical(this._spherical),Qt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Qt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Qt.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new k(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new k(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Qt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(xl.origin.copy(this.object.position),xl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(xl.direction))<lb?this.object.lookAt(this.target):(gp.setFromNormalAndCoplanarPoint(this.object.up,this.target),xl.intersectPlane(gp,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>au||8*(1-this._lastQuaternion.dot(this.object.quaternion))>au||this._lastTargetPosition.distanceToSquared(this.target)>au?(this.dispatchEvent(_p),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Hn/60*this.autoRotateSpeed*e:Hn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Qt.setFromMatrixColumn(t,0),Qt.multiplyScalar(-e),this._panOffset.add(Qt)}_panUp(e,t){this.screenSpacePanning===!0?Qt.setFromMatrixColumn(t,1):(Qt.setFromMatrixColumn(t,0),Qt.crossVectors(this.object.up,Qt)),Qt.multiplyScalar(e),this._panOffset.add(Qt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;Qt.copy(i).sub(this.target);let r=Qt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=i/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Hn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Hn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Hn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Hn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new qe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function ub(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function hb(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function fb(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Gm),this.state=At.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function db(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case aa.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=At.DOLLY;break;case aa.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=At.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=At.ROTATE}break;case aa.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=At.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=At.PAN}break;default:this.state=At.NONE}this.state!==At.NONE&&this.dispatchEvent(xf)}function pb(s){switch(this.state){case At.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case At.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case At.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function mb(s){this.enabled===!1||this.enableZoom===!1||this.state!==At.NONE||(s.preventDefault(),this.dispatchEvent(xf),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Gm))}function _b(s){this.enabled!==!1&&this._handleKeyDown(s)}function gb(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case ta.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=At.TOUCH_ROTATE;break;case ta.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=At.TOUCH_PAN;break;default:this.state=At.NONE}break;case 2:switch(this.touches.TWO){case ta.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=At.TOUCH_DOLLY_PAN;break;case ta.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=At.TOUCH_DOLLY_ROTATE;break;default:this.state=At.NONE}break;default:this.state=At.NONE}this.state!==At.NONE&&this.dispatchEvent(xf)}function xb(s){switch(this._trackPointer(s),this.state){case At.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case At.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case At.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case At.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=At.NONE}}function vb(s){this.enabled!==!1&&s.preventDefault()}function yb(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Mb(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function fr(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Hm(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}var fi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Aa={duration:.5,overwrite:!1,delay:0},vf,gn,Ot,Ei=1e8,Pt=1/Ei,Mh=Math.PI*2,Sb=Mh/4,Tb=0,Wm=Math.sqrt,bb=Math.cos,Eb=Math.sin,pn=function(e){return typeof e=="string"},Ht=function(e){return typeof e=="function"},br=function(e){return typeof e=="number"},yf=function(e){return typeof e>"u"},nr=function(e){return typeof e=="object"},qn=function(e){return e!==!1},Mf=function(){return typeof window<"u"},vl=function(e){return Ht(e)||pn(e)},Xm=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},An=Array.isArray,Ab=/random\([^)]+\)/g,wb=/,\s*/g,xp=/(?:-?\.?\d|\.)+/gi,Ym=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,na=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ou=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,qm=/[+-]=-?[.\d]+/,Rb=/[^,'"\[\]\s]+/gi,Cb=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Bt,zi,Sh,Sf,pi={},tc={},jm,Km=function(e){return(tc=wa(e,pi))&&Zn},Tf=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Lo=function(e,t){return!t&&console.warn(e)},$m=function(e,t){return e&&(pi[e]=t)&&tc&&(tc[e]=t)||pi},Io=function(){return 0},Pb={suppressEvents:!0,isStart:!0,kill:!1},kl={suppressEvents:!0,kill:!1},Db={suppressEvents:!0},bf={},Wr=[],Th={},Zm,si={},lu={},vp=30,zl=[],Ef="",Af=function(e){var t=e[0],n,i;if(nr(t)||Ht(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=zl.length;i--&&!zl[i].targetTest(t););n=zl[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new M_(e[i],n)))||e.splice(i,1);return e},xs=function(e){return e._gsap||Af(Ai(e))[0]._gsap},Jm=function(e,t,n){return(n=e[t])&&Ht(n)?e[t]():yf(n)&&e.getAttribute&&e.getAttribute(t)||n},jn=function(e,t){return(e=e.split(",")).forEach(t)||e},Xt=function(e){return Math.round(e*1e5)/1e5||0},Ft=function(e){return Math.round(e*1e7)/1e7||0},ua=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Lb=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},nc=function(){var e=Wr.length,t=Wr.slice(0),n,i;for(Th={},Wr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},wf=function(e){return!!(e._initted||e._startAt||e.add)},Qm=function(e,t,n,i){Wr.length&&!gn&&nc(),e.render(t,n,!!(gn&&t<0&&wf(e))),Wr.length&&!gn&&nc()},e_=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Rb).length<2?t:pn(e)?e.trim():e},t_=function(e){return e},mi=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Ib=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},wa=function(e,t){for(var n in t)e[n]=t[n];return e},yp=function s(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=nr(t[n])?s(e[n]||(e[n]={}),t[n]):t[n]);return e},ic=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},ho=function(e){var t=e.parent||Bt,n=e.keyframes?Ib(An(e.keyframes)):mi;if(qn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Nb=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},n_=function(e,t,n,i,r){var a=e[i],o;if(r)for(o=t[r];a&&a[r]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},xc=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,a=t._next;r?r._next=a:e[n]===t&&(e[n]=a),a?a._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},qr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},vs=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Ub=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},bh=function(e,t,n,i){return e._startAt&&(gn?e._startAt.revert(kl):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Ob=function s(e){return!e||e._ts&&s(e.parent)},Mp=function(e){return e._repeat?Ra(e._tTime,e=e.duration()+e._rDelay)*e:0},Ra=function(e,t){var n=Math.floor(e=Ft(e/t));return e&&n===e?n-1:n},rc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},vc=function(e){return e._end=Ft(e._start+(e._tDur/Math.abs(e._ts||e._rts||Pt)||0))},yc=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Ft(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),vc(e),n._dirty||vs(n,e)),e},i_=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=rc(e.rawTime(),t),(!t._dur||Xo(0,t.totalDuration(),n)-t._tTime>Pt)&&t.render(n,!0)),vs(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Pt}},Wi=function(e,t,n,i){return t.parent&&qr(t),t._start=Ft((br(n)?n:n||e!==Bt?vi(e,n,t):e._time)+t._delay),t._end=Ft(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),n_(e,t,"_first","_last",e._sort?"_start":0),Eh(t)||(e._recent=t),i||i_(e,t),e._ts<0&&yc(e,e._tTime),e},r_=function(e,t){return(pi.ScrollTrigger||Tf("scrollTrigger",t))&&pi.ScrollTrigger.create(t,e)},s_=function(e,t,n,i,r){if(Cf(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!gn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Zm!==li.frame)return Wr.push(e),e._lazy=[r,i],1},Fb=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},Eh=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Bb=function(e,t,n,i){var r=e.ratio,a=t<0||!t&&(!e._start&&Fb(e)&&!(!e._initted&&Eh(e))||(e._ts<0||e._dp._ts<0)&&!Eh(e))?0:1,o=e._rDelay,l=0,c,u,h;if(o&&e._repeat&&(l=Xo(0,e._tDur,t),u=Ra(l,o),e._yoyo&&u&1&&(a=1-a),u!==Ra(e._tTime,o)&&(r=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==r||gn||i||e._zTime===Pt||!t&&e._zTime){if(!e._initted&&s_(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?Pt:0),n||(n=t&&!h),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&bh(e,t,n,!0),e._onUpdate&&!n&&ui(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&ui(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&qr(e,1),!n&&!gn&&(ui(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},kb=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Ca=function(e,t,n,i){var r=e._repeat,a=Ft(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=r?r<0?1e10:Ft(a*(r+1)+e._rDelay*r):a,o>0&&!i&&yc(e,e._tTime=e._tDur*o),e.parent&&vc(e),n||vs(e.parent,e),e},Sp=function(e){return e instanceof On?vs(e):Ca(e,e._dur)},zb={_start:0,endTime:Io,totalDuration:Io},vi=function s(e,t,n){var i=e.labels,r=e._recent||zb,a=e.duration()>=Ei?r.endTime(!1):e._dur,o,l,c;return pn(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?r:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(An(n)?n[0]:n).totalDuration()),o>1?s(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},fo=function(e,t,n){var i=br(t[1]),r=(i?2:1)+(e<2?0:1),a=t[r],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=qn(l.vars.inherit)&&l.parent;a.immediateRender=qn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[r-1]}return new $t(t[0],a,t[r+1])},Zr=function(e,t){return e||e===0?t(e):t},Xo=function(e,t,n){return n<e?e:n>t?t:n},Tn=function(e,t){return!pn(e)||!(t=Cb.exec(e))?"":t[1]},Vb=function(e,t,n){return Zr(n,function(i){return Xo(e,t,i)})},Ah=[].slice,a_=function(e,t){return e&&nr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&nr(e[0]))&&!e.nodeType&&e!==zi},Gb=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return pn(i)&&!t||a_(i,1)?(r=n).push.apply(r,Ai(i)):n.push(i)})||n},Ai=function(e,t,n){return Ot&&!t&&Ot.selector?Ot.selector(e):pn(e)&&!n&&(Sh||!Pa())?Ah.call((t||Sf).querySelectorAll(e),0):An(e)?Gb(e,n):a_(e)?Ah.call(e,0):e?[e]:[]},wh=function(e){return e=Ai(e)[0]||Lo("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Ai(t,n.querySelectorAll?n:n===e?Lo("Invalid scope")||Sf.createElement("div"):e)}},o_=function(e){return e.sort(function(){return .5-Math.random()})},l_=function(e){if(Ht(e))return e;var t=nr(e)?e:{each:e},n=ys(t.ease),i=t.from||0,r=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,h=i;return pn(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],h=i[1]),function(f,d,_){var g=(_||t).length,m=a[g],p,M,T,y,b,w,A,C,x;if(!m){if(x=t.grid==="auto"?0:(t.grid||[1,Ei])[1],!x){for(A=-Ei;A<(A=_[x++].getBoundingClientRect().left)&&x<g;);x<g&&x--}for(m=a[g]=[],p=l?Math.min(x,g)*u-.5:i%x,M=x===Ei?0:l?g*h/x-.5:i/x|0,A=0,C=Ei,w=0;w<g;w++)T=w%x-p,y=M-(w/x|0),m[w]=b=c?Math.abs(c==="y"?y:T):Wm(T*T+y*y),b>A&&(A=b),b<C&&(C=b);i==="random"&&o_(m),m.max=A-C,m.min=C,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(x>g?g-1:c?c==="y"?g/x:x:Math.max(x,g/x))||0)*(i==="edges"?-1:1),m.b=g<0?r-g:r,m.u=Tn(t.amount||t.each)||0,n=n&&g<0?x_(n):n}return g=(m[f]-m.min)/m.max||0,Ft(m.b+(n?n(g):g)*m.v)+m.u}},Rh=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Ft(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(br(n)?0:Tn(n))}},c_=function(e,t){var n=An(e),i,r;return!n&&nr(e)&&(i=n=e.radius||Ei,e.values?(e=Ai(e.values),(r=!br(e[0]))&&(i*=i)):e=Rh(e.increment)),Zr(t,n?Ht(e)?function(a){return r=e(a),Math.abs(r-a)<=i?r:a}:function(a){for(var o=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),c=Ei,u=0,h=e.length,f,d;h--;)r?(f=e[h].x-o,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-o),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:a,r||u===a||br(a)?u:u+Tn(a)}:Rh(e))},u_=function(e,t,n,i){return Zr(An(e)?!t:n===!0?!!(n=0):!i,function(){return An(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},Hb=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,a){return a(r)},i)}},Wb=function(e,t){return function(n){return e(parseFloat(n))+(t||Tn(n))}},Xb=function(e,t,n){return f_(e,t,0,1,n)},h_=function(e,t,n){return Zr(n,function(i){return e[~~t(i)]})},Yb=function s(e,t,n){var i=t-e;return An(e)?h_(e,s(0,e.length),t):Zr(n,function(r){return(i+(r-e)%i)%i+e})},qb=function s(e,t,n){var i=t-e,r=i*2;return An(e)?h_(e,s(0,e.length-1),t):Zr(n,function(a){return a=(r+(a-e)%r)%r||0,e+(a>i?r-a:a)})},No=function(e){return e.replace(Ab,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(wb);return u_(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},f_=function(e,t,n,i,r){var a=t-e,o=i-n;return Zr(r,function(l){return n+((l-e)/a*o||0)})},jb=function s(e,t,n,i){var r=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!r){var a=pn(e),o={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(An(e)&&!An(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(s(e[c-1],e[c]));h--,r=function(_){_*=h;var g=Math.min(f,~~_);return u[g](_-g)},n=t}else i||(e=wa(An(e)?[]:{},e));if(!u){for(l in t)Rf.call(o,e,l,"get",t[l]);r=function(_){return Lf(_,o)||(a?e.p:e)}}}return Zr(n,r)},Tp=function(e,t,n){var i=e.labels,r=Ei,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&r>(o=Math.abs(o))&&(l=a,r=o);return l},ui=function(e,t,n){var i=e.vars,r=i[t],a=Ot,o=e._ctx,l,c,u;if(r)return l=i[t+"Params"],c=i.callbackScope||e,n&&Wr.length&&nc(),o&&(Ot=o),u=l?r.apply(c,l):r.call(c),Ot=a,u},to=function(e){return qr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!gn),e.progress()<1&&ui(e,"onInterrupt"),e},ia,d_=[],p_=function(e){if(e)if(e=!e.name&&e.default||e,Mf()||e.headless){var t=e.name,n=Ht(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:Io,render:Lf,add:Rf,kill:uE,modifier:cE,rawVars:0},a={targetTest:0,get:0,getSetter:Df,aliases:{},register:0};if(Pa(),e!==i){if(si[t])return;mi(i,mi(ic(e,r),a)),wa(i.prototype,wa(r,ic(e,a))),si[i.prop=t]=i,e.targetTest&&(zl.push(i),bf[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}$m(t,i),e.register&&e.register(Zn,i,Kn)}else d_.push(e)},Ct=255,no={aqua:[0,Ct,Ct],lime:[0,Ct,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ct],navy:[0,0,128],white:[Ct,Ct,Ct],olive:[128,128,0],yellow:[Ct,Ct,0],orange:[Ct,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ct,0,0],pink:[Ct,192,203],cyan:[0,Ct,Ct],transparent:[Ct,Ct,Ct,0]},cu=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Ct+.5|0},m_=function(e,t,n){var i=e?br(e)?[e>>16,e>>8&Ct,e&Ct]:0:no.black,r,a,o,l,c,u,h,f,d,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),no[e])i=no[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+r+r+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Ct,i&Ct,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Ct,e&Ct]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(xp),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,r=u*2-a,i.length>3&&(i[3]*=1),i[0]=cu(l+1/3,r,a),i[1]=cu(l,r,a),i[2]=cu(l-1/3,r,a);else if(~e.indexOf("="))return i=e.match(Ym),n&&i.length<4&&(i[3]=1),i}else i=e.match(xp)||no.transparent;i=i.map(Number)}return t&&!_&&(r=i[0]/Ct,a=i[1]/Ct,o=i[2]/Ct,h=Math.max(r,a,o),f=Math.min(r,a,o),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===r?(a-o)/d+(a<o?6:0):h===a?(o-r)/d+2:(r-a)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},__=function(e){var t=[],n=[],i=-1;return e.split(Xr).forEach(function(r){var a=r.match(na)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},bp=function(e,t,n){var i="",r=(e+i).match(Xr),a=t?"hsla(":"rgba(",o=0,l,c,u,h;if(!r)return e;if(r=r.map(function(f){return(f=m_(f,t,1))&&a+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=__(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Xr,"1").split(na),h=c.length-1;o<h;o++)i+=c[o]+(~l.indexOf(o)?r.shift()||a+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=e.split(Xr),h=c.length-1;o<h;o++)i+=c[o]+r[o];return i+c[h]},Xr=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in no)s+="|"+e+"\\b";return new RegExp(s+")","gi")})(),Kb=/hsl[a]?\(/,g_=function(e){var t=e.join(" "),n;if(Xr.lastIndex=0,Xr.test(t))return n=Kb.test(t),e[1]=bp(e[1],n),e[0]=bp(e[0],n,__(e[1])),!0},Uo,li=(function(){var s=Date.now,e=500,t=33,n=s(),i=n,r=1e3/240,a=r,o=[],l,c,u,h,f,d,_=function g(m){var p=s()-i,M=m===!0,T,y,b,w;if((p>e||p<0)&&(n+=p-t),i+=p,b=i-n,T=b-a,(T>0||M)&&(w=++h.frame,f=b-h.time*1e3,h.time=b=b/1e3,a+=T+(T>=r?4:r-T),y=1),M||(l=c(g)),y)for(d=0;d<o.length;d++)o[d](b,f,w,m)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){jm&&(!Sh&&Mf()&&(zi=Sh=window,Sf=zi.document||{},pi.gsap=Zn,(zi.gsapVersions||(zi.gsapVersions=[])).push(Zn.version),Km(tc||zi.GreenSockGlobals||!zi.gsap&&zi||{}),d_.forEach(p_)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(m){return setTimeout(m,a-h.time*1e3+1|0)},Uo=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Uo=0,c=Io},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){r=1e3/(m||240),a=h.time*1e3+r},add:function(m,p,M){var T=p?function(y,b,w,A){m(y,b,w,A),h.remove(T)}:m;return h.remove(m),o[M?"unshift":"push"](T),Pa(),T},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&d>=p&&d--},_listeners:o},h})(),Pa=function(){return!Uo&&li.wake()},ft={},$b=/^[\d.\-M][\d.\-,\s]/,Zb=/["']/g,Jb=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,a=n.length,o,l,c;r<a;r++)l=n[r],o=r!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(Zb,"").trim():+c,i=l.substr(o+1).trim();return t},Qb=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},eE=function(e){var t=(e+"").split("("),n=ft[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Jb(t[1])]:Qb(e).split(",").map(e_)):ft._CE&&$b.test(e)?ft._CE("",e):n},x_=function(e){return function(t){return 1-e(1-t)}},v_=function s(e,t){for(var n=e._first,i;n;)n instanceof On?s(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?s(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},ys=function(e,t){return e&&(Ht(e)?e:ft[e]||eE(e))||t},Ps=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},a;return jn(e,function(o){ft[o]=pi[o]=r,ft[a=o.toLowerCase()]=n;for(var l in r)ft[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ft[o+"."+l]=r[l]}),r},y_=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},uu=function s(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),a=r/Mh*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*Eb((u-a)*r)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:y_(o);return r=Mh/r,l.config=function(c,u){return s(e,c,u)},l},hu=function s(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:y_(n);return i.config=function(r){return s(e,r)},i};jn("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;Ps(s+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ft.Linear.easeNone=ft.none=ft.Linear.easeIn;Ps("Elastic",uu("in"),uu("out"),uu());(function(s,e){var t=1/e,n=2*t,i=2.5*t,r=function(o){return o<t?s*o*o:o<n?s*Math.pow(o-1.5/e,2)+.75:o<i?s*(o-=2.25/e)*o+.9375:s*Math.pow(o-2.625/e,2)+.984375};Ps("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);Ps("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});Ps("Circ",function(s){return-(Wm(1-s*s)-1)});Ps("Sine",function(s){return s===1?1:-bb(s*Sb)+1});Ps("Back",hu("in"),hu("out"),hu());ft.SteppedEase=ft.steps=pi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,a=1-Pt;return function(o){return((i*Xo(0,a,o)|0)+r)*n}}};Aa.ease=ft["quad.out"];jn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Ef+=s+","+s+"Params,"});var M_=function(e,t){this.id=Tb++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Jm,this.set=t?t.getSetter:Df},Oo=(function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ca(this,+t.duration,1,1),this.data=t.data,Ot&&(this._ctx=Ot,Ot.data.push(this)),Uo||li.wake()}var e=s.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Ca(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Pa(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(yc(this,n),!r._dp||r.parent||i_(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Wi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Pt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Qm(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Mp(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Mp(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Ra(this._tTime,r)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Pt?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?rc(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Pt?0:this._rts,this.totalTime(Xo(-Math.abs(this._delay),this.totalDuration(),r),i!==!1),vc(this),Ub(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Pa(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Pt&&(this._tTime-=Pt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Ft(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Wi(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(qn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?rc(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Db);var i=gn;return gn=n,wf(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),gn=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Sp(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Sp(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(vi(this,n),qn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,qn(i)),this._dur||(this._zTime=-Pt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Pt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Pt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-Pt)},e.eventCallback=function(n,i,r){var a=this.vars;return arguments.length>1?(i?(a[n]=i,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this,r=i._prom;return new Promise(function(a){var o=Ht(n)?n:t_,l=function(){var u=i.then;i.then=null,r&&r(),Ht(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=u),a(o),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){to(this)},s})();mi(Oo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Pt,_prom:0,_ps:!1,_rts:1});var On=(function(s){Hm(e,s);function e(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=qn(n.sortChildren),Bt&&Wi(n.parent||Bt,fr(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&r_(fr(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,a){return fo(0,arguments,this),this},t.from=function(i,r,a){return fo(1,arguments,this),this},t.fromTo=function(i,r,a,o){return fo(2,arguments,this),this},t.set=function(i,r,a){return r.duration=0,r.parent=this,ho(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new $t(i,r,vi(this,a),1),this},t.call=function(i,r,a){return Wi(this,$t.delayedCall(0,i,r),a)},t.staggerTo=function(i,r,a,o,l,c,u){return a.duration=r,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new $t(i,a,vi(this,l)),this},t.staggerFrom=function(i,r,a,o,l,c,u){return a.runBackwards=1,ho(a).immediateRender=qn(a.immediateRender),this.staggerTo(i,r,a,o,l,c,u)},t.staggerFromTo=function(i,r,a,o,l,c,u,h){return o.startAt=a,ho(o).immediateRender=qn(o.immediateRender),this.staggerTo(i,r,o,l,c,u,h)},t.render=function(i,r,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Ft(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,d,_,g,m,p,M,T,y,b,w,A;if(this!==Bt&&u>l&&i>=0&&(u=l),u!==this._tTime||a||h){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),f=u,y=this._start,T=this._ts,p=!T,h&&(c||(o=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,a);if(f=Ft(u%m),u===l?(g=this._repeat,f=c):(b=Ft(u/m),g=~~b,g&&g===b&&(f=c,g--),f>c&&(f=c)),b=Ra(this._tTime,m),!o&&this._tTime&&b!==g&&this._tTime-b*m-this._dur<=0&&(b=g),w&&g&1&&(f=c-f,A=1),g!==b&&!this._lock){var C=w&&b&1,x=C===(w&&g&1);if(g<b&&(C=!C),o=C?0:u%c?c:u,this._lock=1,this.render(o||(A?0:Ft(g*m)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&ui(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,b=g),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,x&&(this._lock=2,o=C?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;v_(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=kb(this,Ft(o),Ft(f)),M&&(u-=f-(f=M._start))),this._tTime=u,this._time=f,this._act=!T,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&c&&!r&&!b&&(ui(this,"onStart"),this._tTime!==u))return this;if(f>=o&&i>=0)for(d=this._first;d;){if(_=d._next,(d._act||f>=d._start)&&d._ts&&M!==d){if(d.parent!==this)return this.render(i,r,a);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,r,a),f!==this._time||!this._ts&&!p){M=0,_&&(u+=this._zTime=-Pt);break}}d=_}else{d=this._last;for(var S=i<0?i:f;d;){if(_=d._prev,(d._act||S<=d._end)&&d._ts&&M!==d){if(d.parent!==this)return this.render(i,r,a);if(d.render(d._ts>0?(S-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(S-d._start)*d._ts,r,a||gn&&wf(d)),f!==this._time||!this._ts&&!p){M=0,_&&(u+=this._zTime=S?-Pt:Pt);break}}d=_}}if(M&&!r&&(this.pause(),M.render(f>=o?0:-Pt)._zTime=f>=o?1:-1,this._ts))return this._start=y,vc(this),this.render(i,r,a);this._onUpdate&&!r&&ui(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(y===this._start||Math.abs(T)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&qr(this,1),!r&&!(i<0&&!o)&&(u||o||!l)&&(ui(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var a=this;if(br(r)||(r=vi(this,r,i)),!(i instanceof Oo)){if(An(i))return i.forEach(function(o){return a.add(o,r)}),this;if(pn(i))return this.addLabel(i,r);if(Ht(i))i=$t.delayedCall(0,i);else return this}return this!==i?Wi(this,i,r):this},t.getChildren=function(i,r,a,o){i===void 0&&(i=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),o===void 0&&(o=-Ei);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof $t?r&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,a)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===i)return r[a]},t.remove=function(i){return pn(i)?this.removeLabel(i):Ht(i)?this.killTweensOf(i):(i.parent===this&&xc(this,i),i===this._recent&&(this._recent=this._last),vs(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ft(li.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=vi(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,a){var o=$t.delayedCall(0,r||Io,a);return o.data="isPause",this._hasPause=1,Wi(this,o,vi(this,i))},t.removePause=function(i){var r=this._first;for(i=vi(this,i);r;)r._start===i&&r.data==="isPause"&&qr(r),r=r._next},t.killTweensOf=function(i,r,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)kr!==o[l]&&o[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var a=[],o=Ai(i),l=this._first,c=br(r),u;l;)l instanceof $t?Lb(l._targets,o)&&(c?(!kr||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(u=l.getTweensOf(o,r)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,r){r=r||{};var a=this,o=vi(a,i),l=r,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,_=$t.to(a,mi({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||Pt,onStart:function(){if(a.pause(),!d){var m=r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==m&&Ca(_,m,0,1).render(_._time,!0,!0),d=1}u&&u.apply(_,h||[])}},r));return f?_.render(0):_},t.tweenFromTo=function(i,r,a){return this.tweenTo(r,mi({startAt:{time:vi(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Tp(this,vi(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Tp(this,vi(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Pt)},t.shiftChildren=function(i,r,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=Ft(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(r)for(c in l)l[c]>=a&&(l[c]+=i);return vs(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),vs(this)},t.totalDuration=function(i){var r=0,a=this,o=a._last,l=Ei,c,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(h=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Wi(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(r-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=Ft(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>r&&o._ts&&(r=o._end),o=c;Ca(a,a===Bt&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(Bt._ts&&(Qm(Bt,rc(i,Bt)),Zm=li.frame),li.frame>=vp){vp+=fi.autoSleep||120;var r=Bt._first;if((!r||!r._ts)&&fi.autoSleep&&li._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||li.sleep()}}},e})(Oo);mi(On.prototype,{_lock:0,_hasPause:0,_forcing:0});var tE=function(e,t,n,i,r,a,o){var l=new Kn(this._pt,e,t,0,1,w_,null,r),c=0,u=0,h,f,d,_,g,m,p,M;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=No(i)),a&&(M=[n,i],a(M,e,t),n=M[0],i=M[1]),f=n.match(ou)||[];h=ou.exec(i);)_=h[0],g=i.substring(c,h.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),_!==f[u++]&&(m=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:m,c:_.charAt(1)==="="?ua(m,_)-m:parseFloat(_)-m,m:d&&d<4?Math.round:0},c=ou.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(qm.test(i)||p)&&(l.e=0),this._pt=l,l},Rf=function(e,t,n,i,r,a,o,l,c,u){Ht(i)&&(i=i(r||0,e,a));var h=e[t],f=n!=="get"?n:Ht(h)?c?e[t.indexOf("set")||!Ht(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,d=Ht(h)?c?aE:E_:Pf,_;if(pn(i)&&(~i.indexOf("random(")&&(i=No(i)),i.charAt(1)==="="&&(_=ua(f,i)+(Tn(f)||0),(_||_===0)&&(i=_))),!u||f!==i||Ch)return!isNaN(f*i)&&i!==""?(_=new Kn(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?lE:A_,0,d),c&&(_.fp=c),o&&_.modifier(o,this,e),this._pt=_):(!h&&!(t in e)&&Tf(t,i),tE.call(this,e,t,f,i,d,l||fi.stringFilter,c))},nE=function(e,t,n,i,r){if(Ht(e)&&(e=po(e,r,t,n,i)),!nr(e)||e.style&&e.nodeType||An(e)||Xm(e))return pn(e)?po(e,r,t,n,i):e;var a={},o;for(o in e)a[o]=po(e[o],r,t,n,i);return a},S_=function(e,t,n,i,r,a){var o,l,c,u;if(si[e]&&(o=new si[e]).init(r,o.rawVars?t[e]:nE(t[e],i,r,a,n),n,i,a)!==!1&&(n._pt=l=new Kn(n._pt,r,e,0,1,o.render,o,0,o.priority),n!==ia))for(c=n._ptLookup[n._targets.indexOf(r)],u=o._props.length;u--;)c[o._props[u]]=l;return o},kr,Ch,Cf=function s(e,t,n){var i=e.vars,r=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,f=i.keyframes,d=i.autoRevert,_=e._dur,g=e._startAt,m=e._targets,p=e.parent,M=p&&p.data==="nested"?p.vars.targets:m,T=e._overwrite==="auto"&&!vf,y=e.timeline,b,w,A,C,x,S,P,I,B,H,G,V,O;if(y&&(!f||!r)&&(r="none"),e._ease=ys(r,Aa.ease),e._yEase=h?x_(ys(h===!0?r:h,Aa.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!y&&!!i.runBackwards,!y||f&&!i.stagger){if(I=m[0]?xs(m[0]).harness:0,V=I&&i[I.prop],b=ic(i,bf),g&&(g._zTime<0&&g.progress(1),t<0&&u&&o&&!d?g.render(-1,!0):g.revert(u&&_?kl:Pb),g._lazy=0),a){if(qr(e._startAt=$t.set(m,mi({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&qn(l),startAt:null,delay:0,onUpdate:c&&function(){return ui(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(gn||!o&&!d)&&e._startAt.revert(kl),o&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&_&&!g){if(t&&(o=!1),A=mi({overwrite:!1,data:"isFromStart",lazy:o&&!g&&qn(l),immediateRender:o,stagger:0,parent:p},b),V&&(A[I.prop]=V),qr(e._startAt=$t.set(m,A)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(gn?e._startAt.revert(kl):e._startAt.render(-1,!0)),e._zTime=t,!o)s(e._startAt,Pt,Pt);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&qn(l)||l&&!_,w=0;w<m.length;w++){if(x=m[w],P=x._gsap||Af(m)[w]._gsap,e._ptLookup[w]=H={},Th[P.id]&&Wr.length&&nc(),G=M===m?w:M.indexOf(x),I&&(B=new I).init(x,V||b,e,G,M)!==!1&&(e._pt=C=new Kn(e._pt,x,B.name,0,1,B.render,B,0,B.priority),B._props.forEach(function(j){H[j]=C}),B.priority&&(S=1)),!I||V)for(A in b)si[A]&&(B=S_(A,b,e,G,x,M))?B.priority&&(S=1):H[A]=C=Rf.call(e,x,A,"get",b[A],G,M,0,i.stringFilter);e._op&&e._op[w]&&e.kill(x,e._op[w]),T&&e._pt&&(kr=e,Bt.killTweensOf(x,H,e.globalTime(t)),O=!e.parent,kr=0),e._pt&&l&&(Th[P.id]=1)}S&&R_(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!O,f&&t<=0&&y.render(Ei,!0,!0)},iE=function(e,t,n,i,r,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,f,d;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(u=f[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Ch=1,e.vars[t]="+=0",Cf(e,o),Ch=0,l?Lo(t+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(i||i===0)&&!r?i:u.s+(i||0)+a*u.c,u.c=n-u.s,h.e&&(h.e=Xt(n)+Tn(h.e)),h.b&&(h.b=u.s+Tn(h.b))},rE=function(e,t){var n=e[0]?xs(e[0]).harness:0,i=n&&n.aliases,r,a,o,l;if(!i)return t;r=wa({},t);for(a in i)if(a in r)for(l=i[a].split(","),o=l.length;o--;)r[l[o]]=r[a];return r},sE=function(e,t,n,i){var r=t.ease||i||"power1.inOut",a,o;if(An(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:r})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:r})},po=function(e,t,n,i,r){return Ht(e)?e.call(t,n,i,r):pn(e)&&~e.indexOf("random(")?No(e):e},T_=Ef+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",b_={};jn(T_+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return b_[s]=1});var $t=(function(s){Hm(e,s);function e(n,i,r,a){var o;typeof i=="number"&&(r.duration=i,i=r,r=null),o=s.call(this,a?i:ho(i))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,M=i.parent||Bt,T=(An(n)||Xm(n)?br(n[0]):"length"in i)?[n]:Ai(n),y,b,w,A,C,x,S,P;if(o._targets=T.length?Af(T):Lo("GSAP target "+n+" not found. https://gsap.com",!fi.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,_||f||vl(c)||vl(u)){if(i=o.vars,y=o.timeline=new On({data:"nested",defaults:g||{},targets:M&&M.data==="nested"?M.vars.targets:T}),y.kill(),y.parent=y._dp=fr(o),y._start=0,f||vl(c)||vl(u)){if(A=T.length,S=f&&l_(f),nr(f))for(C in f)~T_.indexOf(C)&&(P||(P={}),P[C]=f[C]);for(b=0;b<A;b++)w=ic(i,b_),w.stagger=0,p&&(w.yoyoEase=p),P&&wa(w,P),x=T[b],w.duration=+po(c,fr(o),b,x,T),w.delay=(+po(u,fr(o),b,x,T)||0)-o._delay,!f&&A===1&&w.delay&&(o._delay=u=w.delay,o._start+=u,w.delay=0),y.to(x,w,S?S(b,x,T):0),y._ease=ft.none;y.duration()?c=u=0:o.timeline=0}else if(_){ho(mi(y.vars.defaults,{ease:"none"})),y._ease=ys(_.ease||i.ease||"none");var I=0,B,H,G;if(An(_))_.forEach(function(V){return y.to(T,V,">")}),y.duration();else{w={};for(C in _)C==="ease"||C==="easeEach"||sE(C,_[C],w,_.easeEach);for(C in w)for(B=w[C].sort(function(V,O){return V.t-O.t}),I=0,b=0;b<B.length;b++)H=B[b],G={ease:H.e,duration:(H.t-(b?B[b-1].t:0))/100*c},G[C]=H.v,y.to(T,G,I),I+=G.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||o.duration(c=y.duration())}else o.timeline=0;return d===!0&&!vf&&(kr=fr(o),Bt.killTweensOf(T),kr=0),Wi(M,fr(o),r),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(h||!c&&!_&&o._start===Ft(M._time)&&qn(h)&&Ob(fr(o))&&M.data!=="nested")&&(o._tTime=-Pt,o.render(Math.max(0,-u)||0)),m&&r_(fr(o),m),o}var t=e.prototype;return t.render=function(i,r,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-Pt&&!u?l:i<Pt?0:i,f,d,_,g,m,p,M,T,y;if(!c)Bb(this,i,r,a);else if(h!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,T=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,r,a);if(f=Ft(h%g),h===l?(_=this._repeat,f=c):(m=Ft(h/g),_=~~m,_&&_===m?(f=c,_--):f>c&&(f=c)),p=this._yoyo&&_&1,p&&(y=this._yEase,f=c-f),m=Ra(this._tTime,g),f===o&&!a&&this._initted&&_===m)return this._tTime=h,this;_!==m&&(T&&this._yEase&&v_(T,p),this.vars.repeatRefresh&&!p&&!this._lock&&f!==g&&this._initted&&(this._lock=a=1,this.render(Ft(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(s_(this,u?i:f,a,r,h))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(i,r,a)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(y||this._ease)(f/c),this._from&&(this.ratio=M=1-M),!o&&h&&!r&&!m&&(ui(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(M,d.d),d=d._next;T&&T.render(i<0?i:T._dur*T._ease(f/this._dur),r,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&bh(this,i,r,a),ui(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!r&&this.parent&&ui(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&bh(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&qr(this,1),!r&&!(u&&!o)&&(h||o||p)&&(ui(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,a,o,l){Uo||li.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Cf(this,c),u=this._ease(c/this._dur),iE(this,i,r,a,o,u,c,l)?this.resetTo(i,r,a,o,1):(yc(this,0),this.parent||n_(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?to(this):this.scrollTrigger&&this.scrollTrigger.kill(!!gn),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,kr&&kr.vars.overwrite!==!0)._first||to(this),this.parent&&a!==this.timeline.totalDuration()&&Ca(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?Ai(i):o,c=this._ptLookup,u=this._pt,h,f,d,_,g,m,p;if((!r||r==="all")&&Nb(o,l))return r==="all"&&(this._pt=0),to(this);for(h=this._op=this._op||[],r!=="all"&&(pn(r)&&(g={},jn(r,function(M){return g[M]=1}),r=g),r=rE(o,r)),p=o.length;p--;)if(~l.indexOf(o[p])){f=c[p],r==="all"?(h[p]=r,_=f,d={}):(d=h[p]=h[p]||{},_=r);for(g in _)m=f&&f[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&xc(this,m,"_pt"),delete f[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&u&&to(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return fo(1,arguments)},e.delayedCall=function(i,r,a,o){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,r,a){return fo(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,a){return Bt.killTweensOf(i,r,a)},e})(Oo);mi($t.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});jn("staggerTo,staggerFrom,staggerFromTo",function(s){$t[s]=function(){var e=new On,t=Ah.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var Pf=function(e,t,n){return e[t]=n},E_=function(e,t,n){return e[t](n)},aE=function(e,t,n,i){return e[t](i.fp,n)},oE=function(e,t,n){return e.setAttribute(t,n)},Df=function(e,t){return Ht(e[t])?E_:yf(e[t])&&e.setAttribute?oE:Pf},A_=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},lE=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},w_=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Lf=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},cE=function(e,t,n,i){for(var r=this._pt,a;r;)a=r._next,r.p===i&&r.modifier(e,t,n),r=a},uE=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?xc(this,t,"_pt"):t.dep||(n=1),t=i;return!n},hE=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},R_=function(e){for(var t=e._pt,n,i,r,a;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=r},Kn=(function(){function s(t,n,i,r,a,o,l,c,u){this.t=n,this.s=r,this.c=a,this.p=i,this.r=o||A_,this.d=l||this,this.set=c||Pf,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=hE,this.m=n,this.mt=r,this.tween=i},s})();jn(Ef+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return bf[s]=1});pi.TweenMax=pi.TweenLite=$t;pi.TimelineLite=pi.TimelineMax=On;Bt=new On({sortChildren:!1,defaults:Aa,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});fi.stringFilter=g_;var Ms=[],Vl={},fE=[],Ep=0,dE=0,fu=function(e){return(Vl[e]||fE).map(function(t){return t()})},Ph=function(){var e=Date.now(),t=[];e-Ep>2&&(fu("matchMediaInit"),Ms.forEach(function(n){var i=n.queries,r=n.conditions,a,o,l,c;for(o in i)a=zi.matchMedia(i[o]).matches,a&&(l=1),a!==r[o]&&(r[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),fu("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Ep=e,fu("matchMedia"))},C_=(function(){function s(t,n){this.selector=n&&wh(n),this.data=[],this._r=[],this.isReverted=!1,this.id=dE++,t&&this.add(t)}var e=s.prototype;return e.add=function(n,i,r){Ht(n)&&(r=i,i=n,n=Ht);var a=this,o=function(){var c=Ot,u=a.selector,h;return c&&c!==a&&c.data.push(a),r&&(a.selector=wh(r)),Ot=a,h=i.apply(a,arguments),Ht(h)&&a._r.push(h),Ot=c,a.selector=u,a.isReverted=!1,h};return a.last=o,n===Ht?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=Ot;Ot=null,n(this),Ot=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof $t&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n?(function(){for(var o=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof On?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof $t)&&c.revert&&c.revert(n);r._r.forEach(function(u){return u(n,r)}),r.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=Ms.length;a--;)Ms[a].id===this.id&&Ms.splice(a,1)},e.revert=function(n){this.kill(n||{})},s})(),pE=(function(){function s(t){this.contexts=[],this.scope=t,Ot&&Ot.data.push(this)}var e=s.prototype;return e.add=function(n,i,r){nr(n)||(n={matches:n});var a=new C_(0,r||this.scope),o=a.conditions={},l,c,u;Ot&&!a.selector&&(a.selector=Ot.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=zi.matchMedia(n[c]),l&&(Ms.indexOf(a)<0&&Ms.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(Ph):l.addEventListener("change",Ph)));return u&&i(a,function(h){return a.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s})(),sc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return p_(i)})},timeline:function(e){return new On(e)},getTweensOf:function(e,t){return Bt.getTweensOf(e,t)},getProperty:function(e,t,n,i){pn(e)&&(e=Ai(e)[0]);var r=xs(e||{}).get,a=n?t_:e_;return n==="native"&&(n=""),e&&(t?a((si[t]&&si[t].get||r)(e,t,n,i)):function(o,l,c){return a((si[o]&&si[o].get||r)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=Ai(e),e.length>1){var i=e.map(function(u){return Zn.quickSetter(u,t,n)}),r=i.length;return function(u){for(var h=r;h--;)i[h](u)}}e=e[0]||{};var a=si[t],o=xs(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var h=new a;ia._pt=0,h.init(e,n?u+n:u,ia,0,[e]),h.render(1,h),ia._pt&&Lf(1,ia)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,r=Zn.to(e,mi((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,u){return r.resetTo(t,l,c,u)};return a.tween=r,a},isTweening:function(e){return Bt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ys(e.ease,Aa.ease)),yp(Aa,e||{})},config:function(e){return yp(fi,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!si[o]&&!pi[o]&&Lo(t+" effect requires "+o+" plugin.")}),lu[t]=function(o,l,c){return n(Ai(o),mi(l||{},r),c)},a&&(On.prototype[t]=function(o,l,c){return this.add(lu[t](o,nr(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ft[e]=ys(t)},parseEase:function(e,t){return arguments.length?ys(e,t):ft},getById:function(e){return Bt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new On(e),i,r;for(n.smoothChildTiming=qn(e.smoothChildTiming),Bt.remove(n),n._dp=0,n._time=n._tTime=Bt._time,i=Bt._first;i;)r=i._next,(t||!(!i._dur&&i instanceof $t&&i.vars.onComplete===i._targets[0]))&&Wi(n,i,i._start-i._delay),i=r;return Wi(Bt,n,0),n},context:function(e,t){return e?new C_(e,t):Ot},matchMedia:function(e){return new pE(e)},matchMediaRefresh:function(){return Ms.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Ph()},addEventListener:function(e,t){var n=Vl[e]||(Vl[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Vl[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Yb,wrapYoyo:qb,distribute:l_,random:u_,snap:c_,normalize:Xb,getUnit:Tn,clamp:Vb,splitColor:m_,toArray:Ai,selector:wh,mapRange:f_,pipe:Hb,unitize:Wb,interpolate:jb,shuffle:o_},install:Km,effects:lu,ticker:li,updateRoot:On.updateRoot,plugins:si,globalTimeline:Bt,core:{PropTween:Kn,globals:$m,Tween:$t,Timeline:On,Animation:Oo,getCache:xs,_removeLinkedListItem:xc,reverting:function(){return gn},context:function(e){return e&&Ot&&(Ot.data.push(e),e._ctx=Ot),Ot},suppressOverwrites:function(e){return vf=e}}};jn("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return sc[s]=$t[s]});li.add(On.updateRoot);ia=sc.to({},{duration:0});var mE=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},_E=function(e,t){var n=e._targets,i,r,a;for(i in t)for(r=n.length;r--;)a=e._ptLookup[r][i],a&&(a=a.d)&&(a._pt&&(a=mE(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[r],i))},du=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,r,a){a._onInit=function(o){var l,c;if(pn(r)&&(l={},jn(r,function(u){return l[u]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}_E(o,r)}}}},Zn=sc.registerPlugin({name:"attr",init:function(e,t,n,i,r){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,r,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)gn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},du("roundProps",Rh),du("modifiers"),du("snap",c_))||sc;$t.version=On.version=Zn.version="3.14.2";jm=1;Mf()&&Pa();ft.Power0;ft.Power1;ft.Power2;ft.Power3;ft.Power4;ft.Linear;ft.Quad;ft.Cubic;ft.Quart;ft.Quint;ft.Strong;ft.Elastic;ft.Back;ft.SteppedEase;ft.Bounce;ft.Sine;ft.Expo;ft.Circ;var Ap,zr,ha,If,_s,wp,Nf,gE=function(){return typeof window<"u"},Er={},ls=180/Math.PI,fa=Math.PI/180,$s=Math.atan2,Rp=1e8,Uf=/([A-Z])/g,xE=/(left|right|width|margin|padding|x)/i,vE=/[\s,\(]\S/,qi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Dh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},yE=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},ME=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},SE=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},TE=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},P_=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},D_=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},bE=function(e,t,n){return e.style[t]=n},EE=function(e,t,n){return e.style.setProperty(t,n)},AE=function(e,t,n){return e._gsap[t]=n},wE=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},RE=function(e,t,n,i,r){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},CE=function(e,t,n,i,r){var a=e._gsap;a[t]=n,a.renderTransform(r,a)},kt="transform",$n=kt+"Origin",PE=function s(e,t){var n=this,i=this.target,r=i.style,a=i._gsap;if(e in Er&&r){if(this.tfm=this.tfm||{},e!=="transform")e=qi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=dr(i,o)}):this.tfm[e]=a.x?a[e]:dr(i,e),e===$n&&(this.tfm.zOrigin=a.zOrigin);else return qi.transform.split(",").forEach(function(o){return s.call(n,o,t)});if(this.props.indexOf(kt)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push($n,t,"")),e=kt}(r||t)&&this.props.push(e,t,r[e])},L_=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},DE=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,a;for(r=0;r<e.length;r+=3)e[r+1]?e[r+1]===2?t[e[r]](e[r+2]):t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(Uf,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=Nf(),(!r||!r.isStart)&&!n[kt]&&(L_(n),i.zOrigin&&n[$n]&&(n[$n]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},I_=function(e,t){var n={target:e,props:[],revert:DE,save:PE};return e._gsap||Zn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},N_,Lh=function(e,t){var n=zr.createElementNS?zr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):zr.createElement(e);return n&&n.style?n:zr.createElement(e)},hi=function s(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Uf,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&s(e,Da(t)||t,1)||""},Cp="O,Moz,ms,Ms,Webkit".split(","),Da=function(e,t,n){var i=t||_s,r=i.style,a=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Cp[a]+e in r););return a<0?null:(a===3?"ms":a>=0?Cp[a]:"")+e},Ih=function(){gE()&&window.document&&(Ap=window,zr=Ap.document,ha=zr.documentElement,_s=Lh("div")||{style:{}},Lh("div"),kt=Da(kt),$n=kt+"Origin",_s.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",N_=!!Da("perspective"),Nf=Zn.core.reverting,If=1)},Pp=function(e){var t=e.ownerSVGElement,n=Lh("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),r;i.style.display="block",n.appendChild(i),ha.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),ha.removeChild(n),r},Dp=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},U_=function(e){var t,n;try{t=e.getBBox()}catch{t=Pp(e),n=1}return t&&(t.width||t.height)||n||(t=Pp(e)),t&&!t.width&&!t.x&&!t.y?{x:+Dp(e,["x","cx","x1"])||0,y:+Dp(e,["y","cy","y1"])||0,width:0,height:0}:t},O_=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&U_(e))},jr=function(e,t){if(t){var n=e.style,i;t in Er&&t!==$n&&(t=kt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Uf,"-$1").toLowerCase())):n.removeAttribute(t)}},Vr=function(e,t,n,i,r,a){var o=new Kn(e._pt,t,n,0,1,a?D_:P_);return e._pt=o,o.b=i,o.e=r,e._props.push(n),o},Lp={deg:1,rad:1,turn:1},LE={grid:1,flex:1},Kr=function s(e,t,n,i){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",o=_s.style,l=xE.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",d=i==="%",_,g,m,p;if(i===a||!r||Lp[i]||Lp[a])return r;if(a!=="px"&&!f&&(r=s(e,t,n,"px")),p=e.getCTM&&O_(e),(d||a==="%")&&(Er[t]||~t.indexOf("adius")))return _=p?e.getBBox()[l?"width":"height"]:e[u],Xt(d?r/_*h:r/100*_);if(o[l?"width":"height"]=h+(f?a:i),g=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===zr||!g.appendChild)&&(g=zr.body),m=g._gsap,m&&d&&m.width&&l&&m.time===li.time&&!m.uncache)return Xt(r/m.width*h);if(d&&(t==="height"||t==="width")){var M=e.style[t];e.style[t]=h+i,_=e[u],M?e.style[t]=M:jr(e,t)}else(d||a==="%")&&!LE[hi(g,"display")]&&(o.position=hi(e,"position")),g===e&&(o.position="static"),g.appendChild(_s),_=_s[u],g.removeChild(_s),o.position="absolute";return l&&d&&(m=xs(g),m.time=li.time,m.width=g[u]),Xt(f?_*r/h:_&&r?h/_*r:0)},dr=function(e,t,n,i){var r;return If||Ih(),t in qi&&t!=="transform"&&(t=qi[t],~t.indexOf(",")&&(t=t.split(",")[0])),Er[t]&&t!=="transform"?(r=Bo(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:oc(hi(e,$n))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=ac[t]&&ac[t](e,t,n)||hi(e,t)||Jm(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Kr(e,t,r,n)+n:r},IE=function(e,t,n,i){if(!n||n==="none"){var r=Da(t,e,1),a=r&&hi(e,r,1);a&&a!==n?(t=r,n=a):t==="borderColor"&&(n=hi(e,"borderTopColor"))}var o=new Kn(this._pt,e.style,t,0,1,w_),l=0,c=0,u,h,f,d,_,g,m,p,M,T,y,b;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=hi(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=e.style[t],e.style[t]=i,i=hi(e,t)||i,g?e.style[t]=g:jr(e,t)),u=[n,i],g_(u),n=u[0],i=u[1],f=n.match(na)||[],b=i.match(na)||[],b.length){for(;h=na.exec(i);)m=h[0],M=i.substring(l,h.index),_?_=(_+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(_=1),m!==(g=f[c++]||"")&&(d=parseFloat(g)||0,y=g.substr((d+"").length),m.charAt(1)==="="&&(m=ua(d,m)+y),p=parseFloat(m),T=m.substr((p+"").length),l=na.lastIndex-T.length,T||(T=T||fi.units[t]||y,l===i.length&&(i+=T,o.e+=T)),y!==T&&(d=Kr(e,t,g,T)||0),o._pt={_next:o._pt,p:M||c===1?M:",",s:d,c:p-d,m:_&&_<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?D_:P_;return qm.test(i)&&(o.e=0),this._pt=o,o},Ip={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},NE=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Ip[n]||n,t[1]=Ip[i]||i,t.join(" ")},UE=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,a=n._gsap,o,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)o=r[c],Er[o]&&(l=1,o=o==="transformOrigin"?$n:kt),jr(n,o);l&&(jr(n,kt),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Bo(n,1),a.uncache=1,L_(i)))}},ac={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var a=e._pt=new Kn(e._pt,t,n,0,0,UE);return a.u=i,a.pr=-10,a.tween=r,e._props.push(n),1}}},Fo=[1,0,0,1,0,0],F_={},B_=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Np=function(e){var t=hi(e,kt);return B_(t)?Fo:t.substr(7).match(Ym).map(Xt)},Of=function(e,t){var n=e._gsap||xs(e),i=e.style,r=Np(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Fo:r):(r===Fo&&!e.offsetParent&&e!==ha&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,ha.appendChild(e)),r=Np(e),l?i.display=l:jr(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):ha.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Nh=function(e,t,n,i,r,a){var o=e._gsap,l=r||Of(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,f=o.yOffset||0,d=l[0],_=l[1],g=l[2],m=l[3],p=l[4],M=l[5],T=t.split(" "),y=parseFloat(T[0])||0,b=parseFloat(T[1])||0,w,A,C,x;n?l!==Fo&&(A=d*m-_*g)&&(C=y*(m/A)+b*(-g/A)+(g*M-m*p)/A,x=y*(-_/A)+b*(d/A)-(d*M-_*p)/A,y=C,b=x):(w=U_(e),y=w.x+(~T[0].indexOf("%")?y/100*w.width:y),b=w.y+(~(T[1]||T[0]).indexOf("%")?b/100*w.height:b)),i||i!==!1&&o.smooth?(p=y-c,M=b-u,o.xOffset=h+(p*d+M*g)-p,o.yOffset=f+(p*_+M*m)-M):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=b,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[$n]="0px 0px",a&&(Vr(a,o,"xOrigin",c,y),Vr(a,o,"yOrigin",u,b),Vr(a,o,"xOffset",h,o.xOffset),Vr(a,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",y+" "+b)},Bo=function(e,t){var n=e._gsap||new M_(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=hi(e,$n)||"0",u,h,f,d,_,g,m,p,M,T,y,b,w,A,C,x,S,P,I,B,H,G,V,O,j,ie,D,re,Ie,Be,Xe,$e;return u=h=f=g=m=p=M=T=y=0,d=_=1,n.svg=!!(e.getCTM&&O_(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[kt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[kt]!=="none"?l[kt]:"")),i.scale=i.rotate=i.translate="none"),A=Of(e,n.svg),n.svg&&(n.uncache?(j=e.getBBox(),c=n.xOrigin-j.x+"px "+(n.yOrigin-j.y)+"px",O=""):O=!t&&e.getAttribute("data-svg-origin"),Nh(e,O||c,!!O||n.originIsAbsolute,n.smooth!==!1,A)),b=n.xOrigin||0,w=n.yOrigin||0,A!==Fo&&(P=A[0],I=A[1],B=A[2],H=A[3],u=G=A[4],h=V=A[5],A.length===6?(d=Math.sqrt(P*P+I*I),_=Math.sqrt(H*H+B*B),g=P||I?$s(I,P)*ls:0,M=B||H?$s(B,H)*ls+g:0,M&&(_*=Math.abs(Math.cos(M*fa))),n.svg&&(u-=b-(b*P+w*B),h-=w-(b*I+w*H))):($e=A[6],Be=A[7],D=A[8],re=A[9],Ie=A[10],Xe=A[11],u=A[12],h=A[13],f=A[14],C=$s($e,Ie),m=C*ls,C&&(x=Math.cos(-C),S=Math.sin(-C),O=G*x+D*S,j=V*x+re*S,ie=$e*x+Ie*S,D=G*-S+D*x,re=V*-S+re*x,Ie=$e*-S+Ie*x,Xe=Be*-S+Xe*x,G=O,V=j,$e=ie),C=$s(-B,Ie),p=C*ls,C&&(x=Math.cos(-C),S=Math.sin(-C),O=P*x-D*S,j=I*x-re*S,ie=B*x-Ie*S,Xe=H*S+Xe*x,P=O,I=j,B=ie),C=$s(I,P),g=C*ls,C&&(x=Math.cos(C),S=Math.sin(C),O=P*x+I*S,j=G*x+V*S,I=I*x-P*S,V=V*x-G*S,P=O,G=j),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),d=Xt(Math.sqrt(P*P+I*I+B*B)),_=Xt(Math.sqrt(V*V+$e*$e)),C=$s(G,V),M=Math.abs(C)>2e-4?C*ls:0,y=Xe?1/(Xe<0?-Xe:Xe):0),n.svg&&(O=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!B_(hi(e,kt)),O&&e.setAttribute("transform",O))),Math.abs(M)>90&&Math.abs(M)<270&&(r?(d*=-1,M+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,M+=M<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=Xt(d),n.scaleY=Xt(_),n.rotation=Xt(g)+o,n.rotationX=Xt(m)+o,n.rotationY=Xt(p)+o,n.skewX=M+o,n.skewY=T+o,n.transformPerspective=y+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[$n]=oc(c)),n.xOffset=n.yOffset=0,n.force3D=fi.force3D,n.renderTransform=n.svg?FE:N_?k_:OE,n.uncache=0,n},oc=function(e){return(e=e.split(" "))[0]+" "+e[1]},pu=function(e,t,n){var i=Tn(t);return Xt(parseFloat(t)+parseFloat(Kr(e,"x",n+"px",i)))+i},OE=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,k_(e,t)},as="0deg",Ka="0px",os=") ",k_=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,p=n.force3D,M=n.target,T=n.zOrigin,y="",b=p==="auto"&&e&&e!==1||p===!0;if(T&&(h!==as||u!==as)){var w=parseFloat(u)*fa,A=Math.sin(w),C=Math.cos(w),x;w=parseFloat(h)*fa,x=Math.cos(w),a=pu(M,a,A*x*-T),o=pu(M,o,-Math.sin(w)*-T),l=pu(M,l,C*x*-T+T)}m!==Ka&&(y+="perspective("+m+os),(i||r)&&(y+="translate("+i+"%, "+r+"%) "),(b||a!==Ka||o!==Ka||l!==Ka)&&(y+=l!==Ka||b?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+os),c!==as&&(y+="rotate("+c+os),u!==as&&(y+="rotateY("+u+os),h!==as&&(y+="rotateX("+h+os),(f!==as||d!==as)&&(y+="skew("+f+", "+d+os),(_!==1||g!==1)&&(y+="scale("+_+", "+g+os),M.style[kt]=y||"translate(0, 0)"},FE=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,p=n.yOffset,M=n.forceCSS,T=parseFloat(a),y=parseFloat(o),b,w,A,C,x;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=fa,c*=fa,b=Math.cos(l)*h,w=Math.sin(l)*h,A=Math.sin(l-c)*-f,C=Math.cos(l-c)*f,c&&(u*=fa,x=Math.tan(c-u),x=Math.sqrt(1+x*x),A*=x,C*=x,u&&(x=Math.tan(u),x=Math.sqrt(1+x*x),b*=x,w*=x)),b=Xt(b),w=Xt(w),A=Xt(A),C=Xt(C)):(b=h,C=f,w=A=0),(T&&!~(a+"").indexOf("px")||y&&!~(o+"").indexOf("px"))&&(T=Kr(d,"x",a,"px"),y=Kr(d,"y",o,"px")),(_||g||m||p)&&(T=Xt(T+_-(_*b+g*A)+m),y=Xt(y+g-(_*w+g*C)+p)),(i||r)&&(x=d.getBBox(),T=Xt(T+i/100*x.width),y=Xt(y+r/100*x.height)),x="matrix("+b+","+w+","+A+","+C+","+T+","+y+")",d.setAttribute("transform",x),M&&(d.style[kt]=x)},BE=function(e,t,n,i,r){var a=360,o=pn(r),l=parseFloat(r)*(o&&~r.indexOf("rad")?ls:1),c=l-i,u=i+c+"deg",h,f;return o&&(h=r.split("_")[1],h==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),h==="cw"&&c<0?c=(c+a*Rp)%a-~~(c/a)*a:h==="ccw"&&c>0&&(c=(c-a*Rp)%a-~~(c/a)*a)),e._pt=f=new Kn(e._pt,t,n,i,c,yE),f.e=u,f.u="deg",e._props.push(n),f},Up=function(e,t){for(var n in t)e[n]=t[n];return e},kE=function(e,t,n){var i=Up({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,h,f,d,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[kt]=t,o=Bo(n,1),jr(n,kt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[kt],a[kt]=t,o=Bo(n,1),a[kt]=c);for(l in Er)c=i[l],u=o[l],c!==u&&r.indexOf(l)<0&&(d=Tn(c),_=Tn(u),h=d!==_?Kr(n,l,c,_):parseFloat(c),f=parseFloat(u),e._pt=new Kn(e._pt,o,l,h,f-h,Dh),e._pt.u=_||0,e._props.push(l));Up(o,i)};jn("padding,margin,Width,Radius",function(s,e){var t="Top",n="Right",i="Bottom",r="Left",a=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(o){return e<2?s+o:"border"+o+s});ac[e>1?"border"+s:s]=function(o,l,c,u,h){var f,d;if(arguments.length<4)return f=a.map(function(_){return dr(o,_,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},a.forEach(function(_,g){return d[_]=f[g]=f[g]||f[(g-1)/2|0]}),o.init(l,d,h)}});var z_={name:"css",register:Ih,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var a=this._props,o=e.style,l=n.vars.startAt,c,u,h,f,d,_,g,m,p,M,T,y,b,w,A,C,x;If||Ih(),this.styles=this.styles||I_(e),C=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(si[g]&&S_(g,t,n,i,e,r)))){if(d=typeof u,_=ac[g],d==="function"&&(u=u.call(n,i,e,r),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=No(u)),_)_(this,e,g,u,n)&&(A=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",Xr.lastIndex=0,Xr.test(c)||(m=Tn(c),p=Tn(u),p?m!==p&&(c=Kr(e,g,c,p)+p):m&&(u+=m)),this.add(o,"setProperty",c,u,i,r,0,0,g),a.push(g),C.push(g,0,o[g]);else if(d!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,e,r):l[g],pn(c)&&~c.indexOf("random(")&&(c=No(c)),Tn(c+"")||c==="auto"||(c+=fi.units[g]||Tn(dr(e,g))||""),(c+"").charAt(1)==="="&&(c=dr(e,g))):c=dr(e,g),f=parseFloat(c),M=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),M&&(u=u.substr(2)),h=parseFloat(u),g in qi&&(g==="autoAlpha"&&(f===1&&dr(e,"visibility")==="hidden"&&h&&(f=0),C.push("visibility",0,o.visibility),Vr(this,o,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),g!=="scale"&&g!=="transform"&&(g=qi[g],~g.indexOf(",")&&(g=g.split(",")[0]))),T=g in Er,T){if(this.styles.save(g),x=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=hi(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var S=e.style.perspective;e.style.perspective=u,u=hi(e,"perspective"),S?e.style.perspective=S:jr(e,"perspective")}h=parseFloat(u)}if(y||(b=e._gsap,b.renderTransform&&!t.parseTransform||Bo(e,t.parseTransform),w=t.smoothOrigin!==!1&&b.smooth,y=this._pt=new Kn(this._pt,o,kt,0,1,b.renderTransform,b,0,-1),y.dep=1),g==="scale")this._pt=new Kn(this._pt,b,"scaleY",b.scaleY,(M?ua(b.scaleY,M+h):h)-b.scaleY||0,Dh),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){C.push($n,0,o[$n]),u=NE(u),b.svg?Nh(e,u,0,w,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==b.zOrigin&&Vr(this,b,"zOrigin",b.zOrigin,p),Vr(this,o,g,oc(c),oc(u)));continue}else if(g==="svgOrigin"){Nh(e,u,1,w,0,this);continue}else if(g in F_){BE(this,b,g,f,M?ua(f,M+u):u);continue}else if(g==="smoothOrigin"){Vr(this,b,"smooth",b.smooth,u);continue}else if(g==="force3D"){b[g]=u;continue}else if(g==="transform"){kE(this,u,e);continue}}else g in o||(g=Da(g)||g);if(T||(h||h===0)&&(f||f===0)&&!vE.test(u)&&g in o)m=(c+"").substr((f+"").length),h||(h=0),p=Tn(u)||(g in fi.units?fi.units[g]:m),m!==p&&(f=Kr(e,g,c,p)),this._pt=new Kn(this._pt,T?b:o,g,f,(M?ua(f,M+h):h)-f,!T&&(p==="px"||g==="zIndex")&&t.autoRound!==!1?TE:Dh),this._pt.u=p||0,T&&x!==u?(this._pt.b=c,this._pt.e=x,this._pt.r=SE):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=ME);else if(g in o)IE.call(this,e,g,c,M?M+u:u);else if(g in e)this.add(e,g,c||e[g],M?M+u:u,i,r);else if(g!=="parseTransform"){Tf(g,u);continue}T||(g in o?C.push(g,0,o[g]):typeof e[g]=="function"?C.push(g,2,e[g]()):C.push(g,1,c||e[g])),a.push(g)}}A&&R_(this)},render:function(e,t){if(t.tween._time||!Nf())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:dr,aliases:qi,getSetter:function(e,t,n){var i=qi[t];return i&&i.indexOf(",")<0&&(t=i),t in Er&&t!==$n&&(e._gsap.x||dr(e,"x"))?n&&wp===n?t==="scale"?wE:AE:(wp=n||{})&&(t==="scale"?RE:CE):e.style&&!yf(e.style[t])?bE:~t.indexOf("-")?EE:Df(e,t)},core:{_removeProperty:jr,_getMatrix:Of}};Zn.utils.checkPrefix=Da;Zn.core.getStyleSaver=I_;(function(s,e,t,n){var i=jn(s+","+e+","+t,function(r){Er[r]=1});jn(e,function(r){fi.units[r]="deg",F_[r]=1}),qi[i[13]]=s+","+e,jn(n,function(r){var a=r.split(":");qi[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");jn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){fi.units[s]="px"});Zn.registerPlugin(z_);var Nt=Zn.registerPlugin(z_)||Zn;Nt.core.Tween;function zE(s,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,n.key,n)}}function VE(s,e,t){return e&&zE(s.prototype,e),s}var _n,Gl,ci,Gr,Hr,da,V_,cs,mo,G_,gr,Li,H_,W_=function(){return _n||typeof window<"u"&&(_n=window.gsap)&&_n.registerPlugin&&_n},X_=1,ra=[],lt=[],Ji=[],_o=Date.now,Uh=function(e,t){return t},GE=function(){var e=mo.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,lt),i.push.apply(i,Ji),lt=n,Ji=i,Uh=function(a,o){return t[a](o)}},Yr=function(e,t){return~Ji.indexOf(e)&&Ji[Ji.indexOf(e)+1][t]},go=function(e){return!!~G_.indexOf(e)},Pn=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:i!==!1,capture:!!r})},Cn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},yl="scrollLeft",Ml="scrollTop",Oh=function(){return gr&&gr.isPressed||lt.cache++},lc=function(e,t){var n=function i(r){if(r||r===0){X_&&(ci.history.scrollRestoration="manual");var a=gr&&gr.isPressed;r=i.v=Math.round(r)||(gr&&gr.iOS?1:0),e(r),i.cacheID=lt.cache,a&&Uh("ss",r)}else(t||lt.cache!==i.cacheID||Uh("ref"))&&(i.cacheID=lt.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Fn={s:yl,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:lc(function(s){return arguments.length?ci.scrollTo(s,nn.sc()):ci.pageXOffset||Gr[yl]||Hr[yl]||da[yl]||0})},nn={s:Ml,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Fn,sc:lc(function(s){return arguments.length?ci.scrollTo(Fn.sc(),s):ci.pageYOffset||Gr[Ml]||Hr[Ml]||da[Ml]||0})},Wn=function(e,t){return(t&&t._ctx&&t._ctx.selector||_n.utils.toArray)(e)[0]||(typeof e=="string"&&_n.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},HE=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},$r=function(e,t){var n=t.s,i=t.sc;go(e)&&(e=Gr.scrollingElement||Hr);var r=lt.indexOf(e),a=i===nn.sc?1:2;!~r&&(r=lt.push(e)-1),lt[r+a]||Pn(e,"scroll",Oh);var o=lt[r+a],l=o||(lt[r+a]=lc(Yr(e,n),!0)||(go(e)?i:lc(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,o||(l.smooth=_n.getProperty(e,"scrollBehavior")==="smooth"),l},Fh=function(e,t,n){var i=e,r=e,a=_o(),o=a,l=t||50,c=Math.max(500,l*3),u=function(_,g){var m=_o();g||m-a>l?(r=i,i=_,o=a,a=m):n?i+=_:i=r+(_-r)/(m-o)*(a-o)},h=function(){r=i=n?0:i,o=a=0},f=function(_){var g=o,m=r,p=_o();return(_||_===0)&&_!==i&&u(_),a===o||p-o>c?0:(i+(n?m:-m))/((n?p:a)-g)*1e3};return{update:u,reset:h,getVelocity:f}},$a=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Op=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Y_=function(){mo=_n.core.globals().ScrollTrigger,mo&&mo.core&&GE()},q_=function(e){return _n=e||W_(),!Gl&&_n&&typeof document<"u"&&document.body&&(ci=window,Gr=document,Hr=Gr.documentElement,da=Gr.body,G_=[ci,Gr,Hr,da],_n.utils.clamp,H_=_n.core.context||function(){},cs="onpointerenter"in da?"pointer":"mouse",V_=Yt.isTouch=ci.matchMedia&&ci.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in ci||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Li=Yt.eventTypes=("ontouchstart"in Hr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Hr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return X_=0},500),Y_(),Gl=1),Gl};Fn.op=nn;lt.cache=0;var Yt=(function(){function s(t){this.init(t)}var e=s.prototype;return e.init=function(n){Gl||q_(_n)||console.warn("Please gsap.registerPlugin(Observer)"),mo||Y_();var i=n.tolerance,r=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,d=n.ignore,_=n.wheelSpeed,g=n.event,m=n.onDragStart,p=n.onDragEnd,M=n.onDrag,T=n.onPress,y=n.onRelease,b=n.onRight,w=n.onLeft,A=n.onUp,C=n.onDown,x=n.onChangeX,S=n.onChangeY,P=n.onChange,I=n.onToggleX,B=n.onToggleY,H=n.onHover,G=n.onHoverEnd,V=n.onMove,O=n.ignoreCheck,j=n.isNormalizer,ie=n.onGestureStart,D=n.onGestureEnd,re=n.onWheel,Ie=n.onEnable,Be=n.onDisable,Xe=n.onClick,$e=n.scrollSpeed,K=n.capture,J=n.allowClicks,fe=n.lockAxis,Ce=n.onLockAxis;this.target=o=Wn(o)||Hr,this.vars=n,d&&(d=_n.utils.toArray(d)),i=i||1e-9,r=r||0,_=_||1,$e=$e||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(ci.getComputedStyle(da).lineHeight)||22);var ye,Ge,dt,be,ke,Ze,Ue,W=this,N=0,gt=0,nt=n.passive||!u&&n.passive!==!1,ze=$r(o,Fn),Me=$r(o,nn),R=ze(),v=Me(),U=~a.indexOf("touch")&&!~a.indexOf("pointer")&&Li[0]==="pointerdown",$=go(o),Z=o.ownerDocument||Gr,q=[0,0,0],ve=[0,0,0],se=0,Ee=function(){return se=_o()},Te=function(Re,Je){return(W.event=Re)&&d&&HE(Re.target,d)||Je&&U&&Re.pointerType!=="touch"||O&&O(Re,Je)},ne=function(){W._vx.reset(),W._vy.reset(),Ge.pause(),h&&h(W)},ae=function(){var Re=W.deltaX=Op(q),Je=W.deltaY=Op(ve),pe=Math.abs(Re)>=i,Ye=Math.abs(Je)>=i;P&&(pe||Ye)&&P(W,Re,Je,q,ve),pe&&(b&&W.deltaX>0&&b(W),w&&W.deltaX<0&&w(W),x&&x(W),I&&W.deltaX<0!=N<0&&I(W),N=W.deltaX,q[0]=q[1]=q[2]=0),Ye&&(C&&W.deltaY>0&&C(W),A&&W.deltaY<0&&A(W),S&&S(W),B&&W.deltaY<0!=gt<0&&B(W),gt=W.deltaY,ve[0]=ve[1]=ve[2]=0),(be||dt)&&(V&&V(W),dt&&(m&&dt===1&&m(W),M&&M(W),dt=0),be=!1),Ze&&!(Ze=!1)&&Ce&&Ce(W),ke&&(re(W),ke=!1),ye=0},Se=function(Re,Je,pe){q[pe]+=Re,ve[pe]+=Je,W._vx.update(Re),W._vy.update(Je),c?ye||(ye=requestAnimationFrame(ae)):ae()},Ae=function(Re,Je){fe&&!Ue&&(W.axis=Ue=Math.abs(Re)>Math.abs(Je)?"x":"y",Ze=!0),Ue!=="y"&&(q[2]+=Re,W._vx.update(Re,!0)),Ue!=="x"&&(ve[2]+=Je,W._vy.update(Je,!0)),c?ye||(ye=requestAnimationFrame(ae)):ae()},oe=function(Re){if(!Te(Re,1)){Re=$a(Re,u);var Je=Re.clientX,pe=Re.clientY,Ye=Je-W.x,Le=pe-W.y,je=W.isDragging;W.x=Je,W.y=pe,(je||(Ye||Le)&&(Math.abs(W.startX-Je)>=r||Math.abs(W.startY-pe)>=r))&&(dt||(dt=je?2:1),je||(W.isDragging=!0),Ae(Ye,Le))}},We=W.onPress=function(_e){Te(_e,1)||_e&&_e.button||(W.axis=Ue=null,Ge.pause(),W.isPressed=!0,_e=$a(_e),N=gt=0,W.startX=W.x=_e.clientX,W.startY=W.y=_e.clientY,W._vx.reset(),W._vy.reset(),Pn(j?o:Z,Li[1],oe,nt,!0),W.deltaX=W.deltaY=0,T&&T(W))},L=W.onRelease=function(_e){if(!Te(_e,1)){Cn(j?o:Z,Li[1],oe,!0);var Re=!isNaN(W.y-W.startY),Je=W.isDragging,pe=Je&&(Math.abs(W.x-W.startX)>3||Math.abs(W.y-W.startY)>3),Ye=$a(_e);!pe&&Re&&(W._vx.reset(),W._vy.reset(),u&&J&&_n.delayedCall(.08,function(){if(_o()-se>300&&!_e.defaultPrevented){if(_e.target.click)_e.target.click();else if(Z.createEvent){var Le=Z.createEvent("MouseEvents");Le.initMouseEvent("click",!0,!0,ci,1,Ye.screenX,Ye.screenY,Ye.clientX,Ye.clientY,!1,!1,!1,!1,0,null),_e.target.dispatchEvent(Le)}}})),W.isDragging=W.isGesturing=W.isPressed=!1,h&&Je&&!j&&Ge.restart(!0),dt&&ae(),p&&Je&&p(W),y&&y(W,pe)}},ue=function(Re){return Re.touches&&Re.touches.length>1&&(W.isGesturing=!0)&&ie(Re,W.isDragging)},te=function(){return(W.isGesturing=!1)||D(W)},he=function(Re){if(!Te(Re)){var Je=ze(),pe=Me();Se((Je-R)*$e,(pe-v)*$e,1),R=Je,v=pe,h&&Ge.restart(!0)}},ee=function(Re){if(!Te(Re)){Re=$a(Re,u),re&&(ke=!0);var Je=(Re.deltaMode===1?l:Re.deltaMode===2?ci.innerHeight:1)*_;Se(Re.deltaX*Je,Re.deltaY*Je,0),h&&!j&&Ge.restart(!0)}},Q=function(Re){if(!Te(Re)){var Je=Re.clientX,pe=Re.clientY,Ye=Je-W.x,Le=pe-W.y;W.x=Je,W.y=pe,be=!0,h&&Ge.restart(!0),(Ye||Le)&&Ae(Ye,Le)}},ce=function(Re){W.event=Re,H(W)},Ne=function(Re){W.event=Re,G(W)},pt=function(Re){return Te(Re)||$a(Re,u)&&Xe(W)};Ge=W._dc=_n.delayedCall(f||.25,ne).pause(),W.deltaX=W.deltaY=0,W._vx=Fh(0,50,!0),W._vy=Fh(0,50,!0),W.scrollX=ze,W.scrollY=Me,W.isDragging=W.isGesturing=W.isPressed=!1,H_(this),W.enable=function(_e){return W.isEnabled||(Pn($?Z:o,"scroll",Oh),a.indexOf("scroll")>=0&&Pn($?Z:o,"scroll",he,nt,K),a.indexOf("wheel")>=0&&Pn(o,"wheel",ee,nt,K),(a.indexOf("touch")>=0&&V_||a.indexOf("pointer")>=0)&&(Pn(o,Li[0],We,nt,K),Pn(Z,Li[2],L),Pn(Z,Li[3],L),J&&Pn(o,"click",Ee,!0,!0),Xe&&Pn(o,"click",pt),ie&&Pn(Z,"gesturestart",ue),D&&Pn(Z,"gestureend",te),H&&Pn(o,cs+"enter",ce),G&&Pn(o,cs+"leave",Ne),V&&Pn(o,cs+"move",Q)),W.isEnabled=!0,W.isDragging=W.isGesturing=W.isPressed=be=dt=!1,W._vx.reset(),W._vy.reset(),R=ze(),v=Me(),_e&&_e.type&&We(_e),Ie&&Ie(W)),W},W.disable=function(){W.isEnabled&&(ra.filter(function(_e){return _e!==W&&go(_e.target)}).length||Cn($?Z:o,"scroll",Oh),W.isPressed&&(W._vx.reset(),W._vy.reset(),Cn(j?o:Z,Li[1],oe,!0)),Cn($?Z:o,"scroll",he,K),Cn(o,"wheel",ee,K),Cn(o,Li[0],We,K),Cn(Z,Li[2],L),Cn(Z,Li[3],L),Cn(o,"click",Ee,!0),Cn(o,"click",pt),Cn(Z,"gesturestart",ue),Cn(Z,"gestureend",te),Cn(o,cs+"enter",ce),Cn(o,cs+"leave",Ne),Cn(o,cs+"move",Q),W.isEnabled=W.isPressed=W.isDragging=!1,Be&&Be(W))},W.kill=W.revert=function(){W.disable();var _e=ra.indexOf(W);_e>=0&&ra.splice(_e,1),gr===W&&(gr=0)},ra.push(W),j&&go(o)&&(gr=W),W.enable(g)},VE(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s})();Yt.version="3.14.2";Yt.create=function(s){return new Yt(s)};Yt.register=q_;Yt.getAll=function(){return ra.slice()};Yt.getById=function(s){return ra.filter(function(e){return e.vars.id===s})[0]};W_()&&_n.registerPlugin(Yt);var we,Qs,ot,Lt,ai,xt,Ff,cc,ko,xo,io,Sl,Mn,Mc,Bh,In,Fp,Bp,ea,j_,mu,K_,Ln,kh,$_,Z_,Ur,zh,Bf,pa,kf,vo,Vh,_u,Tl=1,Sn=Date.now,gu=Sn(),Ri=0,ro=0,kp=function(e,t,n){var i=ri(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},zp=function(e,t){return t&&(!ri(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},WE=function s(){return ro&&requestAnimationFrame(s)},Vp=function(){return Mc=1},Gp=function(){return Mc=0},Vi=function(e){return e},so=function(e){return Math.round(e*1e5)/1e5||0},J_=function(){return typeof window<"u"},Q_=function(){return we||J_()&&(we=window.gsap)&&we.registerPlugin&&we},As=function(e){return!!~Ff.indexOf(e)},eg=function(e){return(e==="Height"?kf:ot["inner"+e])||ai["client"+e]||xt["client"+e]},tg=function(e){return Yr(e,"getBoundingClientRect")||(As(e)?function(){return ql.width=ot.innerWidth,ql.height=kf,ql}:function(){return pr(e)})},XE=function(e,t,n){var i=n.d,r=n.d2,a=n.a;return(a=Yr(e,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(t?eg(r):e["client"+r])||0}},YE=function(e,t){return!t||~Ji.indexOf(e)?tg(e):function(){return ql}},ji=function(e,t){var n=t.s,i=t.d2,r=t.d,a=t.a;return Math.max(0,(n="scroll"+i)&&(a=Yr(e,n))?a()-tg(e)()[r]:As(e)?(ai[n]||xt[n])-eg(i):e[n]-e["offset"+i])},bl=function(e,t){for(var n=0;n<ea.length;n+=3)(!t||~t.indexOf(ea[n+1]))&&e(ea[n],ea[n+1],ea[n+2])},ri=function(e){return typeof e=="string"},bn=function(e){return typeof e=="function"},ao=function(e){return typeof e=="number"},us=function(e){return typeof e=="object"},Za=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},xu=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},Zs=Math.abs,ng="left",ig="top",zf="right",Vf="bottom",Ss="width",Ts="height",yo="Right",Mo="Left",So="Top",To="Bottom",Kt="padding",Mi="margin",La="Width",Gf="Height",en="px",Si=function(e){return ot.getComputedStyle(e)},qE=function(e){var t=Si(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Hp=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},pr=function(e,t){var n=t&&Si(e)[Bh]!=="matrix(1, 0, 0, 1, 0, 0)"&&we.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},uc=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},rg=function(e){var t=[],n=e.labels,i=e.duration(),r;for(r in n)t.push(n[r]/i);return t},jE=function(e){return function(t){return we.utils.snap(rg(e),t)}},Hf=function(e){var t=we.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,r){return i-r});return n?function(i,r,a){a===void 0&&(a=.001);var o;if(!r)return t(i);if(r>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,r,a){a===void 0&&(a=.001);var o=t(i);return!r||Math.abs(o-i)<a||o-i<0==r<0?o:t(r<0?i-e:i+e)}},KE=function(e){return function(t,n){return Hf(rg(e))(t,n.direction)}},El=function(e,t,n,i){return n.split(",").forEach(function(r){return e(t,r,i)})},fn=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:!i,capture:!!r})},hn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Al=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Wp={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},wl={toggleActions:"play",anticipatePin:0},hc={top:0,left:0,center:.5,bottom:1,right:1},Hl=function(e,t){if(ri(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in hc?hc[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Rl=function(e,t,n,i,r,a,o,l){var c=r.startColor,u=r.endColor,h=r.fontSize,f=r.indent,d=r.fontWeight,_=Lt.createElement("div"),g=As(n)||Yr(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=g?xt:n,M=e.indexOf("start")!==-1,T=M?c:u,y="border-color:"+T+";font-size:"+h+";color:"+T+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((m||l)&&g?"fixed;":"absolute;"),(m||l||!g)&&(y+=(i===nn?zf:Vf)+":"+(a+parseFloat(f))+"px;"),o&&(y+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),_._isStart=M,_.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),_.style.cssText=y,_.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(_,p.children[0]):p.appendChild(_),_._offset=_["offset"+i.op.d2],Wl(_,0,i,M),_},Wl=function(e,t,n,i){var r={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];e._isFlipped=i,r[n.a+"Percent"]=i?-100:0,r[n.a]=i?"1px":0,r["border"+a+La]=1,r["border"+o+La]=0,r[n.p]=t+"px",we.set(e,r)},it=[],Gh={},zo,Xp=function(){return Sn()-Ri>34&&(zo||(zo=requestAnimationFrame(yr)))},Js=function(){(!Ln||!Ln.isPressed||Ln.startX>xt.clientWidth)&&(lt.cache++,Ln?zo||(zo=requestAnimationFrame(yr)):yr(),Ri||Rs("scrollStart"),Ri=Sn())},vu=function(){Z_=ot.innerWidth,$_=ot.innerHeight},oo=function(e){lt.cache++,(e===!0||!Mn&&!K_&&!Lt.fullscreenElement&&!Lt.webkitFullscreenElement&&(!kh||Z_!==ot.innerWidth||Math.abs(ot.innerHeight-$_)>ot.innerHeight*.25))&&cc.restart(!0)},ws={},$E=[],sg=function s(){return hn(ut,"scrollEnd",s)||gs(!0)},Rs=function(e){return ws[e]&&ws[e].map(function(t){return t()})||$E},ii=[],ag=function(e){for(var t=0;t<ii.length;t+=5)(!e||ii[t+4]&&ii[t+4].query===e)&&(ii[t].style.cssText=ii[t+1],ii[t].getBBox&&ii[t].setAttribute("transform",ii[t+2]||""),ii[t+3].uncache=1)},og=function(){return lt.forEach(function(e){return bn(e)&&++e.cacheID&&(e.rec=e())})},Wf=function(e,t){var n;for(In=0;In<it.length;In++)n=it[In],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));vo=!0,t&&ag(t),t||Rs("revert")},lg=function(e,t){lt.cache++,(t||!Nn)&&lt.forEach(function(n){return bn(n)&&n.cacheID++&&(n.rec=0)}),ri(e)&&(ot.history.scrollRestoration=Bf=e)},Nn,bs=0,Yp,ZE=function(){if(Yp!==bs){var e=Yp=bs;requestAnimationFrame(function(){return e===bs&&gs(!0)})}},cg=function(){xt.appendChild(pa),kf=!Ln&&pa.offsetHeight||ot.innerHeight,xt.removeChild(pa)},qp=function(e){return ko(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},gs=function(e,t){if(ai=Lt.documentElement,xt=Lt.body,Ff=[ot,Lt,ai,xt],Ri&&!e&&!vo){fn(ut,"scrollEnd",sg);return}cg(),Nn=ut.isRefreshing=!0,vo||og();var n=Rs("refreshInit");j_&&ut.sort(),t||Wf(),lt.forEach(function(i){bn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),it.slice(0).forEach(function(i){return i.refresh()}),vo=!1,it.forEach(function(i){if(i._subPinOffset&&i.pin){var r=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[r];i.revert(!0,1),i.adjustPinSpacing(i.pin[r]-a),i.refresh()}}),Vh=1,qp(!0),it.forEach(function(i){var r=ji(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>r,o=i._startClamp&&i.start>=r;(a||o)&&i.setPositions(o?r-1:i.start,a?Math.max(o?r:i.start+1,r):i.end,!0)}),qp(!1),Vh=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),lt.forEach(function(i){bn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),lg(Bf,1),cc.pause(),bs++,Nn=2,yr(2),it.forEach(function(i){return bn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Nn=ut.isRefreshing=!1,Rs("refresh")},Hh=0,Xl=1,bo,yr=function(e){if(e===2||!Nn&&!vo){ut.isUpdating=!0,bo&&bo.update(0);var t=it.length,n=Sn(),i=n-gu>=50,r=t&&it[0].scroll();if(Xl=Hh>r?-1:1,Nn||(Hh=r),i&&(Ri&&!Mc&&n-Ri>200&&(Ri=0,Rs("scrollEnd")),io=gu,gu=n),Xl<0){for(In=t;In-- >0;)it[In]&&it[In].update(0,i);Xl=1}else for(In=0;In<t;In++)it[In]&&it[In].update(0,i);ut.isUpdating=!1}zo=0},Wh=[ng,ig,Vf,zf,Mi+To,Mi+yo,Mi+So,Mi+Mo,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Yl=Wh.concat([Ss,Ts,"boxSizing","max"+La,"max"+Gf,"position",Mi,Kt,Kt+So,Kt+yo,Kt+To,Kt+Mo]),JE=function(e,t,n){ma(n);var i=e._gsap;if(i.spacerIsNative)ma(i.spacerState);else if(e._gsap.swappedIn){var r=t.parentNode;r&&(r.insertBefore(e,t),r.removeChild(t))}e._gsap.swappedIn=!1},yu=function(e,t,n,i){if(!e._gsap.swappedIn){for(var r=Wh.length,a=t.style,o=e.style,l;r--;)l=Wh[r],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[Vf]=o[zf]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[Ss]=uc(e,Fn)+en,a[Ts]=uc(e,nn)+en,a[Kt]=o[Mi]=o[ig]=o[ng]="0",ma(i),o[Ss]=o["max"+La]=n[Ss],o[Ts]=o["max"+Gf]=n[Ts],o[Kt]=n[Kt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},QE=/([A-Z])/g,ma=function(e){if(e){var t=e.t.style,n=e.length,i=0,r,a;for((e.t._gsap||we.core.getCache(e.t)).uncache=1;i<n;i+=2)a=e[i+1],r=e[i],a?t[r]=a:t[r]&&t.removeProperty(r.replace(QE,"-$1").toLowerCase())}},Cl=function(e){for(var t=Yl.length,n=e.style,i=[],r=0;r<t;r++)i.push(Yl[r],n[Yl[r]]);return i.t=e,i},eA=function(e,t,n){for(var i=[],r=e.length,a=n?8:0,o;a<r;a+=2)o=e[a],i.push(o,o in t?t[o]:e[a+1]);return i.t=e.t,i},ql={left:0,top:0},jp=function(e,t,n,i,r,a,o,l,c,u,h,f,d,_){bn(e)&&(e=e(l)),ri(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?Hl("0"+e.substr(3),n):0));var g=d?d.time():0,m,p,M;if(d&&d.seek(0),isNaN(e)||(e=+e),ao(e))d&&(e=we.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,e)),o&&Wl(o,n,i,!0);else{bn(t)&&(t=t(l));var T=(e||"0").split(" "),y,b,w,A;M=Wn(t,l)||xt,y=pr(M)||{},(!y||!y.left&&!y.top)&&Si(M).display==="none"&&(A=M.style.display,M.style.display="block",y=pr(M),A?M.style.display=A:M.style.removeProperty("display")),b=Hl(T[0],y[i.d]),w=Hl(T[1]||"0",n),e=y[i.p]-c[i.p]-u+b+r-w,o&&Wl(o,w,i,n-w<20||o._isStart&&w>20),n-=n-w}if(_&&(l[_]=e||-.001,e<0&&(e=0)),a){var C=e+n,x=a._isStart;m="scroll"+i.d2,Wl(a,C,i,x&&C>20||!x&&(h?Math.max(xt[m],ai[m]):a.parentNode[m])<=C+1),h&&(c=pr(o),h&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+en))}return d&&M&&(m=pr(M),d.seek(f),p=pr(M),d._caScrollDist=m[i.p]-p[i.p],e=e/d._caScrollDist*f),d&&d.seek(g),d?e:Math.round(e)},tA=/(webkit|moz|length|cssText|inset)/i,Kp=function(e,t,n,i){if(e.parentNode!==t){var r=e.style,a,o;if(t===xt){e._stOrig=r.cssText,o=Si(e);for(a in o)!+a&&!tA.test(a)&&o[a]&&typeof r[a]=="string"&&a!=="0"&&(r[a]=o[a]);r.top=n,r.left=i}else r.cssText=e._stOrig;we.core.getCache(e).uncache=1,t.appendChild(e)}},ug=function(e,t,n){var i=t,r=i;return function(a){var o=Math.round(e());return o!==i&&o!==r&&Math.abs(o-i)>3&&Math.abs(o-r)>3&&(a=o,n&&n()),r=i,i=Math.round(a),i}},Pl=function(e,t,n){var i={};i[t.p]="+="+n,we.set(e,i)},$p=function(e,t){var n=$r(e,t),i="_scroll"+t.p2,r=function a(o,l,c,u,h){var f=a.tween,d=l.onComplete,_={};c=c||n();var g=ug(n,c,function(){f.kill(),a.tween=0});return h=u&&h||0,u=u||o-c,f&&f.kill(),l[i]=o,l.inherit=!1,l.modifiers=_,_[i]=function(){return g(c+u*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){lt.cache++,a.tween&&yr()},l.onComplete=function(){a.tween=0,d&&d.call(f)},f=a.tween=we.to(e,l),f};return e[i]=n,n.wheelHandler=function(){return r.tween&&r.tween.kill()&&(r.tween=0)},fn(e,"wheel",n.wheelHandler),ut.isTouch&&fn(e,"touchmove",n.wheelHandler),r},ut=(function(){function s(t,n){Qs||s.register(we)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),zh(this),this.init(t,n)}var e=s.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!ro){this.update=this.refresh=this.kill=Vi;return}n=Hp(ri(n)||ao(n)||n.nodeType?{trigger:n}:n,wl);var r=n,a=r.onUpdate,o=r.toggleClass,l=r.id,c=r.onToggle,u=r.onRefresh,h=r.scrub,f=r.trigger,d=r.pin,_=r.pinSpacing,g=r.invalidateOnRefresh,m=r.anticipatePin,p=r.onScrubComplete,M=r.onSnapComplete,T=r.once,y=r.snap,b=r.pinReparent,w=r.pinSpacer,A=r.containerAnimation,C=r.fastScrollEnd,x=r.preventOverlaps,S=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Fn:nn,P=!h&&h!==0,I=Wn(n.scroller||ot),B=we.core.getCache(I),H=As(I),G=("pinType"in n?n.pinType:Yr(I,"pinType")||H&&"fixed")==="fixed",V=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],O=P&&n.toggleActions.split(" "),j="markers"in n?n.markers:wl.markers,ie=H?0:parseFloat(Si(I)["border"+S.p2+La])||0,D=this,re=n.onRefreshInit&&function(){return n.onRefreshInit(D)},Ie=XE(I,H,S),Be=YE(I,H),Xe=0,$e=0,K=0,J=$r(I,S),fe,Ce,ye,Ge,dt,be,ke,Ze,Ue,W,N,gt,nt,ze,Me,R,v,U,$,Z,q,ve,se,Ee,Te,ne,ae,Se,Ae,oe,We,L,ue,te,he,ee,Q,ce,Ne;if(D._startClamp=D._endClamp=!1,D._dir=S,m*=45,D.scroller=I,D.scroll=A?A.time.bind(A):J,Ge=J(),D.vars=n,i=i||n.animation,"refreshPriority"in n&&(j_=1,n.refreshPriority===-9999&&(bo=D)),B.tweenScroll=B.tweenScroll||{top:$p(I,nn),left:$p(I,Fn)},D.tweenTo=fe=B.tweenScroll[S.p],D.scrubDuration=function(pe){ue=ao(pe)&&pe,ue?L?L.duration(pe):L=we.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ue,paused:!0,onComplete:function(){return p&&p(D)}}):(L&&L.progress(1).kill(),L=0)},i&&(i.vars.lazy=!1,i._initted&&!D.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),D.animation=i.pause(),i.scrollTrigger=D,D.scrubDuration(h),oe=0,l||(l=i.vars.id)),y&&((!us(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in xt.style&&we.set(H?[xt,ai]:I,{scrollBehavior:"auto"}),lt.forEach(function(pe){return bn(pe)&&pe.target===(H?Lt.scrollingElement||ai:I)&&(pe.smooth=!1)}),ye=bn(y.snapTo)?y.snapTo:y.snapTo==="labels"?jE(i):y.snapTo==="labelsDirectional"?KE(i):y.directional!==!1?function(pe,Ye){return Hf(y.snapTo)(pe,Sn()-$e<500?0:Ye.direction)}:we.utils.snap(y.snapTo),te=y.duration||{min:.1,max:2},te=us(te)?xo(te.min,te.max):xo(te,te),he=we.delayedCall(y.delay||ue/2||.1,function(){var pe=J(),Ye=Sn()-$e<500,Le=fe.tween;if((Ye||Math.abs(D.getVelocity())<10)&&!Le&&!Mc&&Xe!==pe){var je=(pe-be)/ze,Wt=i&&!P?i.totalProgress():je,st=Ye?0:(Wt-We)/(Sn()-io)*1e3||0,vt=we.utils.clamp(-je,1-je,Zs(st/2)*st/.185),qt=je+(y.inertia===!1?0:vt),It,wt,mt=y,zn=mt.onStart,bt=mt.onInterrupt,xn=mt.onComplete;if(It=ye(qt,D),ao(It)||(It=qt),wt=Math.max(0,Math.round(be+It*ze)),pe<=ke&&pe>=be&&wt!==pe){if(Le&&!Le._initted&&Le.data<=Zs(wt-pe))return;y.inertia===!1&&(vt=It-je),fe(wt,{duration:te(Zs(Math.max(Zs(qt-Wt),Zs(It-Wt))*.185/st/.05||0)),ease:y.ease||"power3",data:Zs(wt-pe),onInterrupt:function(){return he.restart(!0)&&bt&&bt(D)},onComplete:function(){D.update(),Xe=J(),i&&!P&&(L?L.resetTo("totalProgress",It,i._tTime/i._tDur):i.progress(It)),oe=We=i&&!P?i.totalProgress():D.progress,M&&M(D),xn&&xn(D)}},pe,vt*ze,wt-pe-vt*ze),zn&&zn(D,fe.tween)}}else D.isActive&&Xe!==pe&&he.restart(!0)}).pause()),l&&(Gh[l]=D),f=D.trigger=Wn(f||d!==!0&&d),Ne=f&&f._gsap&&f._gsap.stRevert,Ne&&(Ne=Ne(D)),d=d===!0?f:Wn(d),ri(o)&&(o={targets:f,className:o}),d&&(_===!1||_===Mi||(_=!_&&d.parentNode&&d.parentNode.style&&Si(d.parentNode).display==="flex"?!1:Kt),D.pin=d,Ce=we.core.getCache(d),Ce.spacer?Me=Ce.pinState:(w&&(w=Wn(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),Ce.spacerIsNative=!!w,w&&(Ce.spacerState=Cl(w))),Ce.spacer=U=w||Lt.createElement("div"),U.classList.add("pin-spacer"),l&&U.classList.add("pin-spacer-"+l),Ce.pinState=Me=Cl(d)),n.force3D!==!1&&we.set(d,{force3D:!0}),D.spacer=U=Ce.spacer,Ae=Si(d),Ee=Ae[_+S.os2],Z=we.getProperty(d),q=we.quickSetter(d,S.a,en),yu(d,U,Ae),v=Cl(d)),j){gt=us(j)?Hp(j,Wp):Wp,W=Rl("scroller-start",l,I,S,gt,0),N=Rl("scroller-end",l,I,S,gt,0,W),$=W["offset"+S.op.d2];var pt=Wn(Yr(I,"content")||I);Ze=this.markerStart=Rl("start",l,pt,S,gt,$,0,A),Ue=this.markerEnd=Rl("end",l,pt,S,gt,$,0,A),A&&(ce=we.quickSetter([Ze,Ue],S.a,en)),!G&&!(Ji.length&&Yr(I,"fixedMarkers")===!0)&&(qE(H?xt:I),we.set([W,N],{force3D:!0}),ne=we.quickSetter(W,S.a,en),Se=we.quickSetter(N,S.a,en))}if(A){var _e=A.vars.onUpdate,Re=A.vars.onUpdateParams;A.eventCallback("onUpdate",function(){D.update(0,0,1),_e&&_e.apply(A,Re||[])})}if(D.previous=function(){return it[it.indexOf(D)-1]},D.next=function(){return it[it.indexOf(D)+1]},D.revert=function(pe,Ye){if(!Ye)return D.kill(!0);var Le=pe!==!1||!D.enabled,je=Mn;Le!==D.isReverted&&(Le&&(ee=Math.max(J(),D.scroll.rec||0),K=D.progress,Q=i&&i.progress()),Ze&&[Ze,Ue,W,N].forEach(function(Wt){return Wt.style.display=Le?"none":"block"}),Le&&(Mn=D,D.update(Le)),d&&(!b||!D.isActive)&&(Le?JE(d,U,Me):yu(d,U,Si(d),Te)),Le||D.update(Le),Mn=je,D.isReverted=Le)},D.refresh=function(pe,Ye,Le,je){if(!((Mn||!D.enabled)&&!Ye)){if(d&&pe&&Ri){fn(s,"scrollEnd",sg);return}!Nn&&re&&re(D),Mn=D,fe.tween&&!Le&&(fe.tween.kill(),fe.tween=0),L&&L.pause(),g&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(xe){return xe.vars.immediateRender&&xe.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),D.isReverted||D.revert(!0,!0),D._subPinOffset=!1;var Wt=Ie(),st=Be(),vt=A?A.duration():ji(I,S),qt=ze<=.01||!ze,It=0,wt=je||0,mt=us(Le)?Le.end:n.end,zn=n.endTrigger||f,bt=us(Le)?Le.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),xn=D.pinnedContainer=n.pinnedContainer&&Wn(n.pinnedContainer,D),Jn=f&&Math.max(0,it.indexOf(D))||0,Zt=Jn,Jt,ln,sr,Ls,cn,E,F,Y,X,z,le,ge,de;for(j&&us(Le)&&(ge=we.getProperty(W,S.p),de=we.getProperty(N,S.p));Zt-- >0;)E=it[Zt],E.end||E.refresh(0,1)||(Mn=D),F=E.pin,F&&(F===f||F===d||F===xn)&&!E.isReverted&&(z||(z=[]),z.unshift(E),E.revert(!0,!0)),E!==it[Zt]&&(Jn--,Zt--);for(bn(bt)&&(bt=bt(D)),bt=kp(bt,"start",D),be=jp(bt,f,Wt,S,J(),Ze,W,D,st,ie,G,vt,A,D._startClamp&&"_startClamp")||(d?-.001:0),bn(mt)&&(mt=mt(D)),ri(mt)&&!mt.indexOf("+=")&&(~mt.indexOf(" ")?mt=(ri(bt)?bt.split(" ")[0]:"")+mt:(It=Hl(mt.substr(2),Wt),mt=ri(bt)?bt:(A?we.utils.mapRange(0,A.duration(),A.scrollTrigger.start,A.scrollTrigger.end,be):be)+It,zn=f)),mt=kp(mt,"end",D),ke=Math.max(be,jp(mt||(zn?"100% 0":vt),zn,Wt,S,J()+It,Ue,N,D,st,ie,G,vt,A,D._endClamp&&"_endClamp"))||-.001,It=0,Zt=Jn;Zt--;)E=it[Zt]||{},F=E.pin,F&&E.start-E._pinPush<=be&&!A&&E.end>0&&(Jt=E.end-(D._startClamp?Math.max(0,E.start):E.start),(F===f&&E.start-E._pinPush<be||F===xn)&&isNaN(bt)&&(It+=Jt*(1-E.progress)),F===d&&(wt+=Jt));if(be+=It,ke+=It,D._startClamp&&(D._startClamp+=It),D._endClamp&&!Nn&&(D._endClamp=ke||-.001,ke=Math.min(ke,ji(I,S))),ze=ke-be||(be-=.01)&&.001,qt&&(K=we.utils.clamp(0,1,we.utils.normalize(be,ke,ee))),D._pinPush=wt,Ze&&It&&(Jt={},Jt[S.a]="+="+It,xn&&(Jt[S.p]="-="+J()),we.set([Ze,Ue],Jt)),d&&!(Vh&&D.end>=ji(I,S)))Jt=Si(d),Ls=S===nn,sr=J(),ve=parseFloat(Z(S.a))+wt,!vt&&ke>1&&(le=(H?Lt.scrollingElement||ai:I).style,le={style:le,value:le["overflow"+S.a.toUpperCase()]},H&&Si(xt)["overflow"+S.a.toUpperCase()]!=="scroll"&&(le.style["overflow"+S.a.toUpperCase()]="scroll")),yu(d,U,Jt),v=Cl(d),ln=pr(d,!0),Y=G&&$r(I,Ls?Fn:nn)(),_?(Te=[_+S.os2,ze+wt+en],Te.t=U,Zt=_===Kt?uc(d,S)+ze+wt:0,Zt&&(Te.push(S.d,Zt+en),U.style.flexBasis!=="auto"&&(U.style.flexBasis=Zt+en)),ma(Te),xn&&it.forEach(function(xe){xe.pin===xn&&xe.vars.pinSpacing!==!1&&(xe._subPinOffset=!0)}),G&&J(ee)):(Zt=uc(d,S),Zt&&U.style.flexBasis!=="auto"&&(U.style.flexBasis=Zt+en)),G&&(cn={top:ln.top+(Ls?sr-be:Y)+en,left:ln.left+(Ls?Y:sr-be)+en,boxSizing:"border-box",position:"fixed"},cn[Ss]=cn["max"+La]=Math.ceil(ln.width)+en,cn[Ts]=cn["max"+Gf]=Math.ceil(ln.height)+en,cn[Mi]=cn[Mi+So]=cn[Mi+yo]=cn[Mi+To]=cn[Mi+Mo]="0",cn[Kt]=Jt[Kt],cn[Kt+So]=Jt[Kt+So],cn[Kt+yo]=Jt[Kt+yo],cn[Kt+To]=Jt[Kt+To],cn[Kt+Mo]=Jt[Kt+Mo],R=eA(Me,cn,b),Nn&&J(0)),i?(X=i._initted,mu(1),i.render(i.duration(),!0,!0),se=Z(S.a)-ve+ze+wt,ae=Math.abs(ze-se)>1,G&&ae&&R.splice(R.length-2,2),i.render(0,!0,!0),X||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),mu(0)):se=ze,le&&(le.value?le.style["overflow"+S.a.toUpperCase()]=le.value:le.style.removeProperty("overflow-"+S.a));else if(f&&J()&&!A)for(ln=f.parentNode;ln&&ln!==xt;)ln._pinOffset&&(be-=ln._pinOffset,ke-=ln._pinOffset),ln=ln.parentNode;z&&z.forEach(function(xe){return xe.revert(!1,!0)}),D.start=be,D.end=ke,Ge=dt=Nn?ee:J(),!A&&!Nn&&(Ge<ee&&J(ee),D.scroll.rec=0),D.revert(!1,!0),$e=Sn(),he&&(Xe=-1,he.restart(!0)),Mn=0,i&&P&&(i._initted||Q)&&i.progress()!==Q&&i.progress(Q||0,!0).render(i.time(),!0,!0),(qt||K!==D.progress||A||g||i&&!i._initted)&&(i&&!P&&(i._initted||K||i.vars.immediateRender!==!1)&&i.totalProgress(A&&be<-.001&&!K?we.utils.normalize(be,ke,0):K,!0),D.progress=qt||(Ge-be)/ze===K?0:K),d&&_&&(U._pinOffset=Math.round(D.progress*se)),L&&L.invalidate(),isNaN(ge)||(ge-=we.getProperty(W,S.p),de-=we.getProperty(N,S.p),Pl(W,S,ge),Pl(Ze,S,ge-(je||0)),Pl(N,S,de),Pl(Ue,S,de-(je||0))),qt&&!Nn&&D.update(),u&&!Nn&&!nt&&(nt=!0,u(D),nt=!1)}},D.getVelocity=function(){return(J()-dt)/(Sn()-io)*1e3||0},D.endAnimation=function(){Za(D.callbackAnimation),i&&(L?L.progress(1):i.paused()?P||Za(i,D.direction<0,1):Za(i,i.reversed()))},D.labelToScroll=function(pe){return i&&i.labels&&(be||D.refresh()||be)+i.labels[pe]/i.duration()*ze||0},D.getTrailing=function(pe){var Ye=it.indexOf(D),Le=D.direction>0?it.slice(0,Ye).reverse():it.slice(Ye+1);return(ri(pe)?Le.filter(function(je){return je.vars.preventOverlaps===pe}):Le).filter(function(je){return D.direction>0?je.end<=be:je.start>=ke})},D.update=function(pe,Ye,Le){if(!(A&&!Le&&!pe)){var je=Nn===!0?ee:D.scroll(),Wt=pe?0:(je-be)/ze,st=Wt<0?0:Wt>1?1:Wt||0,vt=D.progress,qt,It,wt,mt,zn,bt,xn,Jn;if(Ye&&(dt=Ge,Ge=A?J():je,y&&(We=oe,oe=i&&!P?i.totalProgress():st)),m&&d&&!Mn&&!Tl&&Ri&&(!st&&be<je+(je-dt)/(Sn()-io)*m?st=1e-4:st===1&&ke>je+(je-dt)/(Sn()-io)*m&&(st=.9999)),st!==vt&&D.enabled){if(qt=D.isActive=!!st&&st<1,It=!!vt&&vt<1,bt=qt!==It,zn=bt||!!st!=!!vt,D.direction=st>vt?1:-1,D.progress=st,zn&&!Mn&&(wt=st&&!vt?0:st===1?1:vt===1?2:3,P&&(mt=!bt&&O[wt+1]!=="none"&&O[wt+1]||O[wt],Jn=i&&(mt==="complete"||mt==="reset"||mt in i))),x&&(bt||Jn)&&(Jn||h||!i)&&(bn(x)?x(D):D.getTrailing(x).forEach(function(sr){return sr.endAnimation()})),P||(L&&!Mn&&!Tl?(L._dp._time-L._start!==L._time&&L.render(L._dp._time-L._start),L.resetTo?L.resetTo("totalProgress",st,i._tTime/i._tDur):(L.vars.totalProgress=st,L.invalidate().restart())):i&&i.totalProgress(st,!!(Mn&&($e||pe)))),d){if(pe&&_&&(U.style[_+S.os2]=Ee),!G)q(so(ve+se*st));else if(zn){if(xn=!pe&&st>vt&&ke+1>je&&je+1>=ji(I,S),b)if(!pe&&(qt||xn)){var Zt=pr(d,!0),Jt=je-be;Kp(d,xt,Zt.top+(S===nn?Jt:0)+en,Zt.left+(S===nn?0:Jt)+en)}else Kp(d,U);ma(qt||xn?R:v),ae&&st<1&&qt||q(ve+(st===1&&!xn?se:0))}}y&&!fe.tween&&!Mn&&!Tl&&he.restart(!0),o&&(bt||T&&st&&(st<1||!_u))&&ko(o.targets).forEach(function(sr){return sr.classList[qt||T?"add":"remove"](o.className)}),a&&!P&&!pe&&a(D),zn&&!Mn?(P&&(Jn&&(mt==="complete"?i.pause().totalProgress(1):mt==="reset"?i.restart(!0).pause():mt==="restart"?i.restart(!0):i[mt]()),a&&a(D)),(bt||!_u)&&(c&&bt&&xu(D,c),V[wt]&&xu(D,V[wt]),T&&(st===1?D.kill(!1,1):V[wt]=0),bt||(wt=st===1?1:3,V[wt]&&xu(D,V[wt]))),C&&!qt&&Math.abs(D.getVelocity())>(ao(C)?C:2500)&&(Za(D.callbackAnimation),L?L.progress(1):Za(i,mt==="reverse"?1:!st,1))):P&&a&&!Mn&&a(D)}if(Se){var ln=A?je/A.duration()*(A._caScrollDist||0):je;ne(ln+(W._isFlipped?1:0)),Se(ln)}ce&&ce(-je/A.duration()*(A._caScrollDist||0))}},D.enable=function(pe,Ye){D.enabled||(D.enabled=!0,fn(I,"resize",oo),H||fn(I,"scroll",Js),re&&fn(s,"refreshInit",re),pe!==!1&&(D.progress=K=0,Ge=dt=Xe=J()),Ye!==!1&&D.refresh())},D.getTween=function(pe){return pe&&fe?fe.tween:L},D.setPositions=function(pe,Ye,Le,je){if(A){var Wt=A.scrollTrigger,st=A.duration(),vt=Wt.end-Wt.start;pe=Wt.start+vt*pe/st,Ye=Wt.start+vt*Ye/st}D.refresh(!1,!1,{start:zp(pe,Le&&!!D._startClamp),end:zp(Ye,Le&&!!D._endClamp)},je),D.update()},D.adjustPinSpacing=function(pe){if(Te&&pe){var Ye=Te.indexOf(S.d)+1;Te[Ye]=parseFloat(Te[Ye])+pe+en,Te[1]=parseFloat(Te[1])+pe+en,ma(Te)}},D.disable=function(pe,Ye){if(pe!==!1&&D.revert(!0,!0),D.enabled&&(D.enabled=D.isActive=!1,Ye||L&&L.pause(),ee=0,Ce&&(Ce.uncache=1),re&&hn(s,"refreshInit",re),he&&(he.pause(),fe.tween&&fe.tween.kill()&&(fe.tween=0)),!H)){for(var Le=it.length;Le--;)if(it[Le].scroller===I&&it[Le]!==D)return;hn(I,"resize",oo),H||hn(I,"scroll",Js)}},D.kill=function(pe,Ye){D.disable(pe,Ye),L&&!Ye&&L.kill(),l&&delete Gh[l];var Le=it.indexOf(D);Le>=0&&it.splice(Le,1),Le===In&&Xl>0&&In--,Le=0,it.forEach(function(je){return je.scroller===D.scroller&&(Le=1)}),Le||Nn||(D.scroll.rec=0),i&&(i.scrollTrigger=null,pe&&i.revert({kill:!1}),Ye||i.kill()),Ze&&[Ze,Ue,W,N].forEach(function(je){return je.parentNode&&je.parentNode.removeChild(je)}),bo===D&&(bo=0),d&&(Ce&&(Ce.uncache=1),Le=0,it.forEach(function(je){return je.pin===d&&Le++}),Le||(Ce.spacer=0)),n.onKill&&n.onKill(D)},it.push(D),D.enable(!1,!1),Ne&&Ne(D),i&&i.add&&!ze){var Je=D.update;D.update=function(){D.update=Je,lt.cache++,be||ke||D.refresh()},we.delayedCall(.01,D.update),ze=.01,be=ke=0}else D.refresh();d&&ZE()},s.register=function(n){return Qs||(we=n||Q_(),J_()&&window.document&&s.enable(),Qs=ro),Qs},s.defaults=function(n){if(n)for(var i in n)wl[i]=n[i];return wl},s.disable=function(n,i){ro=0,it.forEach(function(a){return a[i?"kill":"disable"](n)}),hn(ot,"wheel",Js),hn(Lt,"scroll",Js),clearInterval(Sl),hn(Lt,"touchcancel",Vi),hn(xt,"touchstart",Vi),El(hn,Lt,"pointerdown,touchstart,mousedown",Vp),El(hn,Lt,"pointerup,touchend,mouseup",Gp),cc.kill(),bl(hn);for(var r=0;r<lt.length;r+=3)Al(hn,lt[r],lt[r+1]),Al(hn,lt[r],lt[r+2])},s.enable=function(){if(ot=window,Lt=document,ai=Lt.documentElement,xt=Lt.body,we&&(ko=we.utils.toArray,xo=we.utils.clamp,zh=we.core.context||Vi,mu=we.core.suppressOverwrites||Vi,Bf=ot.history.scrollRestoration||"auto",Hh=ot.pageYOffset||0,we.core.globals("ScrollTrigger",s),xt)){ro=1,pa=document.createElement("div"),pa.style.height="100vh",pa.style.position="absolute",cg(),WE(),Yt.register(we),s.isTouch=Yt.isTouch,Ur=Yt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),kh=Yt.isTouch===1,fn(ot,"wheel",Js),Ff=[ot,Lt,ai,xt],we.matchMedia?(s.matchMedia=function(c){var u=we.matchMedia(),h;for(h in c)u.add(h,c[h]);return u},we.addEventListener("matchMediaInit",function(){og(),Wf()}),we.addEventListener("matchMediaRevert",function(){return ag()}),we.addEventListener("matchMedia",function(){gs(0,1),Rs("matchMedia")}),we.matchMedia().add("(orientation: portrait)",function(){return vu(),vu})):console.warn("Requires GSAP 3.11.0 or later"),vu(),fn(Lt,"scroll",Js);var n=xt.hasAttribute("style"),i=xt.style,r=i.borderTopStyle,a=we.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=pr(xt),nn.m=Math.round(o.top+nn.sc())||0,Fn.m=Math.round(o.left+Fn.sc())||0,r?i.borderTopStyle=r:i.removeProperty("border-top-style"),n||(xt.setAttribute("style",""),xt.removeAttribute("style")),Sl=setInterval(Xp,250),we.delayedCall(.5,function(){return Tl=0}),fn(Lt,"touchcancel",Vi),fn(xt,"touchstart",Vi),El(fn,Lt,"pointerdown,touchstart,mousedown",Vp),El(fn,Lt,"pointerup,touchend,mouseup",Gp),Bh=we.utils.checkPrefix("transform"),Yl.push(Bh),Qs=Sn(),cc=we.delayedCall(.2,gs).pause(),ea=[Lt,"visibilitychange",function(){var c=ot.innerWidth,u=ot.innerHeight;Lt.hidden?(Fp=c,Bp=u):(Fp!==c||Bp!==u)&&oo()},Lt,"DOMContentLoaded",gs,ot,"load",gs,ot,"resize",oo],bl(fn),it.forEach(function(c){return c.enable(0,1)}),l=0;l<lt.length;l+=3)Al(hn,lt[l],lt[l+1]),Al(hn,lt[l],lt[l+2])}},s.config=function(n){"limitCallbacks"in n&&(_u=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Sl)||(Sl=i)&&setInterval(Xp,i),"ignoreMobileResize"in n&&(kh=s.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(bl(hn)||bl(fn,n.autoRefreshEvents||"none"),K_=(n.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(n,i){var r=Wn(n),a=lt.indexOf(r),o=As(r);~a&&lt.splice(a,o?6:2),i&&(o?Ji.unshift(ot,i,xt,i,ai,i):Ji.unshift(r,i))},s.clearMatchMedia=function(n){it.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},s.isInViewport=function(n,i,r){var a=(ri(n)?Wn(n):n).getBoundingClientRect(),o=a[r?Ss:Ts]*i||0;return r?a.right-o>0&&a.left+o<ot.innerWidth:a.bottom-o>0&&a.top+o<ot.innerHeight},s.positionInViewport=function(n,i,r){ri(n)&&(n=Wn(n));var a=n.getBoundingClientRect(),o=a[r?Ss:Ts],l=i==null?o/2:i in hc?hc[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return r?(a.left+l)/ot.innerWidth:(a.top+l)/ot.innerHeight},s.killAll=function(n){if(it.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),n!==!0){var i=ws.killAll||[];ws={},i.forEach(function(r){return r()})}},s})();ut.version="3.14.2";ut.saveStyles=function(s){return s?ko(s).forEach(function(e){if(e&&e.style){var t=ii.indexOf(e);t>=0&&ii.splice(t,5),ii.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),we.core.getCache(e),zh())}}):ii};ut.revert=function(s,e){return Wf(!s,e)};ut.create=function(s,e){return new ut(s,e)};ut.refresh=function(s){return s?oo(!0):(Qs||ut.register())&&gs(!0)};ut.update=function(s){return++lt.cache&&yr(s===!0?2:0)};ut.clearScrollMemory=lg;ut.maxScroll=function(s,e){return ji(s,e?Fn:nn)};ut.getScrollFunc=function(s,e){return $r(Wn(s),e?Fn:nn)};ut.getById=function(s){return Gh[s]};ut.getAll=function(){return it.filter(function(s){return s.vars.id!=="ScrollSmoother"})};ut.isScrolling=function(){return!!Ri};ut.snapDirectional=Hf;ut.addEventListener=function(s,e){var t=ws[s]||(ws[s]=[]);~t.indexOf(e)||t.push(e)};ut.removeEventListener=function(s,e){var t=ws[s],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};ut.batch=function(s,e){var t=[],n={},i=e.interval||.016,r=e.batchMax||1e9,a=function(c,u){var h=[],f=[],d=we.delayedCall(i,function(){u(h,f),h=[],f=[]}).pause();return function(_){h.length||d.restart(!0),h.push(_.trigger),f.push(_),r<=h.length&&d.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&bn(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return bn(r)&&(r=r(),fn(ut,"refresh",function(){return r=e.batchMax()})),ko(s).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,t.push(ut.create(c))}),t};var Zp=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Mu=function s(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Yt.isTouch?" pinch-zoom":""):"none",e===ai&&s(xt,t)},Dl={auto:1,scroll:1},nA=function(e){var t=e.event,n=e.target,i=e.axis,r=(t.changedTouches?t.changedTouches[0]:t).target,a=r._gsap||we.core.getCache(r),o=Sn(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;r&&r!==xt&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(Dl[(l=Si(r)).overflowY]||Dl[l.overflowX]));)r=r.parentNode;a._isScroll=r&&r!==n&&!As(r)&&(Dl[(l=Si(r)).overflowY]||Dl[l.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},hg=function(e,t,n,i){return Yt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&nA,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&fn(Lt,Yt.eventTypes[0],Qp,!1,!0)},onDisable:function(){return hn(Lt,Yt.eventTypes[0],Qp,!0)}})},iA=/(input|label|select|textarea)/i,Jp,Qp=function(e){var t=iA.test(e.target.tagName);(t||Jp)&&(e._gsapAllow=!0,Jp=t)},rA=function(e){us(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,r=t.allowNestedScroll,a=t.onRelease,o,l,c=Wn(e.target)||ai,u=we.core.globals().ScrollSmoother,h=u&&u.get(),f=Ur&&(e.content&&Wn(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),d=$r(c,nn),_=$r(c,Fn),g=1,m=(Yt.isTouch&&ot.visualViewport?ot.visualViewport.scale*ot.visualViewport.width:ot.outerWidth)/ot.innerWidth,p=0,M=bn(i)?function(){return i(o)}:function(){return i||2.8},T,y,b=hg(c,e.type,!0,r),w=function(){return y=!1},A=Vi,C=Vi,x=function(){l=ji(c,nn),C=xo(Ur?1:0,l),n&&(A=xo(0,ji(c,Fn))),T=bs},S=function(){f._gsap.y=so(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},P=function(){if(y){requestAnimationFrame(w);var j=so(o.deltaY/2),ie=C(d.v-j);if(f&&ie!==d.v+d.offset){d.offset=ie-d.v;var D=so((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+D+", 0, 1)",f._gsap.y=D+"px",d.cacheID=lt.cache,yr()}return!0}d.offset&&S(),y=!0},I,B,H,G,V=function(){x(),I.isActive()&&I.vars.scrollY>l&&(d()>l?I.progress(1)&&d(l):I.resetTo("scrollY",l))};return f&&we.set(f,{y:"+=0"}),e.ignoreCheck=function(O){return Ur&&O.type==="touchmove"&&P()||g>1.05&&O.type!=="touchstart"||o.isGesturing||O.touches&&O.touches.length>1},e.onPress=function(){y=!1;var O=g;g=so((ot.visualViewport&&ot.visualViewport.scale||1)/m),I.pause(),O!==g&&Mu(c,g>1.01?!0:n?!1:"x"),B=_(),H=d(),x(),T=bs},e.onRelease=e.onGestureStart=function(O,j){if(d.offset&&S(),!j)G.restart(!0);else{lt.cache++;var ie=M(),D,re;n&&(D=_(),re=D+ie*.05*-O.velocityX/.227,ie*=Zp(_,D,re,ji(c,Fn)),I.vars.scrollX=A(re)),D=d(),re=D+ie*.05*-O.velocityY/.227,ie*=Zp(d,D,re,ji(c,nn)),I.vars.scrollY=C(re),I.invalidate().duration(ie).play(.01),(Ur&&I.vars.scrollY>=l||D>=l-1)&&we.to({},{onUpdate:V,duration:ie})}a&&a(O)},e.onWheel=function(){I._ts&&I.pause(),Sn()-p>1e3&&(T=0,p=Sn())},e.onChange=function(O,j,ie,D,re){if(bs!==T&&x(),j&&n&&_(A(D[2]===j?B+(O.startX-O.x):_()+j-D[1])),ie){d.offset&&S();var Ie=re[2]===ie,Be=Ie?H+O.startY-O.y:d()+ie-re[1],Xe=C(Be);Ie&&Be!==Xe&&(H+=Xe-Be),d(Xe)}(ie||j)&&yr()},e.onEnable=function(){Mu(c,n?!1:"x"),ut.addEventListener("refresh",V),fn(ot,"resize",V),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=_.smooth=!1),b.enable()},e.onDisable=function(){Mu(c,!0),hn(ot,"resize",V),ut.removeEventListener("refresh",V),b.kill()},e.lockAxis=e.lockAxis!==!1,o=new Yt(e),o.iOS=Ur,Ur&&!d()&&d(1),Ur&&we.ticker.add(Vi),G=o._dc,I=we.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:ug(d,d(),function(){return I.pause()})},onUpdate:yr,onComplete:G.vars.onComplete}),o};ut.sort=function(s){if(bn(s))return it.sort(s);var e=ot.pageYOffset||0;return ut.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+ot.innerHeight}),it.sort(s||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};ut.observe=function(s){return new Yt(s)};ut.normalizeScroll=function(s){if(typeof s>"u")return Ln;if(s===!0&&Ln)return Ln.enable();if(s===!1){Ln&&Ln.kill(),Ln=s;return}var e=s instanceof Yt?s:rA(s);return Ln&&Ln.target===e.target&&Ln.kill(),As(e.target)&&(Ln=e),e};ut.core={_getVelocityProp:Fh,_inputObserver:hg,_scrollers:lt,_proxies:Ji,bridge:{ss:function(){Ri||Rs("scrollStart"),Ri=Sn()},ref:function(){return Mn}}};Q_()&&we.registerPlugin(ut);Nt.registerPlugin(ut);const tn=new F0;tn.background=new Ke(328976);tn.fog=new af(328976,.02);const Xn=new Un(70,window.innerWidth/window.innerHeight,.1,1e3),Ds=new AT({antialias:!0});Ds.setSize(window.innerWidth,window.innerHeight);Ds.setPixelRatio(window.devicePixelRatio);document.getElementById("container").appendChild(Ds.domElement);const fc=new Cx,_a=new qe,sa=["Door_001","Present_001"];let Vo=!1;window.hasReadLetter=!1;function Su(s=!0){if(Vo)return;Vo=!0,document.body.style.overflow="hidden",s&&document.getElementById("house-prompt").classList.add("visible");const e=tn.getObjectByName("Door_001");e&&Nt.to(e.scale,{x:1.1,y:1.1,z:1.1,duration:.5,yoyo:!0,repeat:-1})}function Xf(){Vo=!1,document.body.style.overflow="auto",document.getElementById("house-prompt").classList.remove("visible");const s=tn.getObjectByName("Door_001");s&&(Nt.killTweensOf(s.scale),Nt.to(s.scale,{x:1,y:1,z:1,duration:.5}))}const Ar=new cb(Xn,Ds.domElement);Ar.enableDamping=!0;Ar.dampingFactor=.05;Ar.enableRotate=!1;Ar.enablePan=!1;Ar.enableZoom=!1;const sA=[{name:"camAngle_1",title:"Welcome",description:"Initial starting point of the scene."},{name:"camAngle_2",title:"The View",description:"A beautiful perspective of the environment."},{name:"camAngle_3",title:"Closer Look",description:"Checking out the details of the model."},{name:"camAngle_4",title:"New Perspective",description:"Exploring another part of the scene."},{name:"camAngle_5",title:"The Workshop",description:"Getting closer to the action."},{name:"camAngle_6",title:"The Chimney",description:"A top-down look at the house."},{name:"camAngle_7",title:"The Garden",description:"Finishing the tour in the yard."},{name:"camAngle_8",title:"Side View",description:"Viewing the house from the side."},{name:"camAngle_9",title:"Back View",description:"Checking out the back of the house."},{name:"camAngle_10",title:"Roof Detail",description:"A closer look at the roofing."},{name:"camAngle_11",title:"Window Peep",description:"Peeking through the window."},{name:"camAngle_12",title:"Doorway",description:"Standing at the entrance."},{name:"camAngle_13",title:"Pathway",description:"Walking down the path."},{name:"camAngle_14",title:"Tree View",description:"Looking at the large tree."},{name:"camAngle_15",title:"Fence",description:"Near the perimeter fence."},{name:"camAngle_16",title:"Street View",description:"View from the street."},{name:"camAngle_17",title:"Farewell",description:"Saying goodbye to the scene."},{name:"camAngle_18",title:"The End",description:"See you next year!"}];let wi=[];const aA=new wT;aA.load("Demonstration.glb",s=>{if(tn.add(s.scene),tn.updateMatrixWorld(!0),wi=sA.map(e=>{const t=s.scene.getObjectByName(e.name);if(t){const n=new k,i=new Bn;return t.getWorldPosition(n),t.getWorldQuaternion(i),i.multiply(new Bn().setFromAxisAngle(new k(0,1,0),Math.PI)),{position:n,rotation:i,title:e.title,description:e.description}}else return console.warn(`Waypoint object '${e.name}' not found in GLB.`),null}).filter(e=>e!==null),wi.length>0){Xn.position.copy(wi[0].position),Xn.quaternion.copy(wi[0].rotation);const e=new k(0,0,-1).applyQuaternion(Xn.quaternion);Ar.target.copy(Xn.position).add(e.multiplyScalar(.1)),Ar.update(),oA(),lA();const t=document.getElementById("loading-screen");t&&t.classList.add("fade-out")}else console.error("No valid waypoints found. Please check 'WAYPOINT_CONFIG' names.")});function oA(){for(let s=1;s<wi.length;s++){const e=wi[s-1].rotation,t=wi[s].rotation;e.dot(t)<0&&(t.x=-t.x,t.y=-t.y,t.z=-t.z,t.w=-t.w)}}window.addEventListener("mousemove",s=>{_a.x=s.clientX/window.innerWidth*2-1,_a.y=-(s.clientY/window.innerHeight)*2+1,fc.setFromCamera(_a,Xn);const e=fc.intersectObjects(tn.children,!0);let t=!1;if(e.length>0){let n=e[0].object;for(;n;){if(sa.includes(n.name)){t=!0;break}n=n.parent}}t?document.body.classList.add("cursor-pointer"):document.body.classList.remove("cursor-pointer")});Ds.domElement.addEventListener("click",s=>{_a.x=s.clientX/window.innerWidth*2-1,_a.y=-(s.clientY/window.innerHeight)*2+1,fc.setFromCamera(_a,Xn);const e=fc.intersectObjects(tn.children,!0);if(e.length>0){let t=e[0].object;for(;t;){if(sa.includes(t.name)){if(t.name==="Door_001"){const n=t.userData.isOpen||!1,i=n?0:nf.degToRad(-95);Nt.to(t.rotation,{y:i,duration:1.5,ease:"power2.inOut",onComplete:()=>{Vo&&Xf()}}),t.userData.isOpen=!n}else t.name.startsWith("Present")?window.onPresentOpened&&window.onPresentOpened(t.name):t.name==="Paper_001"&&(Nt.killTweensOf(t.scale),Nt.to(t.scale,{x:1,y:1,z:1,duration:.5}),document.getElementById("letter-modal").classList.add("active"));return}t=t.parent}}else console.log("Clicked on empty space")});function lA(){const t=wi.length,n=4/t,i=5/t,r=tn.getObjectByName("Snowman_002"),a=tn.getObjectByName("snowMan_pos1"),o=tn.getObjectByName("snowMan_pos2"),l=tn.getObjectByName("snowMan_pos3"),c=new k,u=new k,h=new k,f=new Bn,d=new Bn,_=new Bn;r&&a&&o&&l&&(a.getWorldPosition(c),o.getWorldPosition(u),l.getWorldPosition(h),a.getWorldQuaternion(f),o.getWorldQuaternion(d),l.getWorldQuaternion(_),r.position.copy(c),r.quaternion.copy(f),r.scale.set(0,0,0),r.visible=!1,a.visible=!1,o.visible=!1,l.visible=!1);const g=Nt.timeline({scrollTrigger:{trigger:"#scroll-height",start:"top top",end:"bottom bottom",scrub:1,onUpdate:p=>{const M=p.progress,T=Math.round(M*(t-1));if(cA(T),M>.005){const C=document.getElementById("start-text");C&&C.classList.contains("active")&&C.classList.remove("active")}if(!Vo&&M>=n&&M<n+.02){const C=tn.getObjectByName("Door_001");C&&!C.userData.isOpen&&(p.scroll(p.start+(p.end-p.start)*n),Su())}Go&&(Go.visible=M<i);const b=11/(t-1);if(!window.hasReadLetter&&M>=b-.005&&M<b+.02){Math.abs(M-b)>.001&&p.scroll(p.start+(p.end-p.start)*b),Su(!1);const C=tn.getObjectByName("Paper_001");C&&(Nt.to(C.scale,{x:1.2,y:1.2,z:1.2,duration:.5,yoyo:!0,repeat:-1}),sa.includes("Paper_001")||sa.push("Paper_001"))}const A=13/(t-1);if(!window.hasSlept&&M>=A){window.hasSlept=!0,Su(!1);const C=tn.getObjectByName("Door_001");C&&(Nt.to(C.rotation,{y:0,duration:1}),C.userData.isOpen=!1);const x=document.getElementById("sleep-overlay");x.classList.add("active"),setTimeout(()=>{const P=14/(t-1);p.scroll(p.start+(p.end-p.start)*P),setTimeout(()=>{x.classList.remove("active"),Xf()},3e3)},3e3)}M>.99&&!window.endGameTriggered&&(window.endGameTriggered=!0,m())}}});function m(){r&&l&&(r.visible=!0,r.position.copy(h),r.quaternion.copy(_),Nt.to(r.scale,{x:.5,y:.5,z:.5,duration:1,ease:"back.out"}));const p=["Present_006","Present_004"],M={Present_006:"assets/ElenImage.jpg",Present_004:"assets/CapybaraCostume.png"};let T=0;function y(x){const S=tn.getObjectByName(x);if(!S){b();return}Nt.to(S.scale,{x:S.scale.x*1.2,y:S.scale.y*1.2,z:S.scale.z*1.2,duration:.5,yoyo:!0,repeat:-1}),sa.includes(x)||sa.push(x)}function b(){T++,T<p.length&&y(p[T])}y(p[0]),window.onPresentOpened=x=>{const S=tn.getObjectByName(x);S&&(Nt.killTweensOf(S.scale),Nt.to(S.scale,{x:0,y:0,z:0,duration:.5})),r&&(Nt.to(r.position,{y:r.position.y+1.5,duration:.4,yoyo:!0,repeat:1,ease:"power2.out"}),Nt.fromTo(r.rotation,{z:-.2},{z:.2,duration:.1,repeat:5,yoyo:!0,ease:"linear"}),Nt.to(r.rotation,{y:r.rotation.y+Math.PI*2,duration:1,ease:"back.out"}));const P=document.getElementById("card-reveal-overlay"),I=document.querySelector(".card-wrapper"),B=document.getElementById("card-image"),H=document.getElementById("collect-btn");B&&M[x]&&(B.src=M[x]),I.classList.remove("flipped"),I.classList.remove("spinning"),H.classList.remove("visible"),P.classList.add("active"),Nt.set(I,{rotationY:0,scale:1});const G=I.querySelector(".card-inner"),V=()=>{I.classList.contains("flipped")||I.classList.contains("spinning")||(x==="Present_004"?(I.classList.add("spinning"),Nt.to(G,{rotationY:1260,duration:3,ease:"power2.inOut"}),Nt.to(I,{scale:1.15,duration:3,ease:"power2.inOut",onComplete:()=>{Nt.to(I,{scale:1,duration:.5,ease:"back.out"}),I.classList.add("flipped"),A(),setTimeout(()=>{H.classList.remove("hidden"),H.classList.add("visible")},500)}})):(I.classList.add("flipped"),setTimeout(()=>{H.classList.remove("hidden"),H.classList.add("visible")},600)))},O=j=>{j.stopPropagation(),P.classList.remove("active"),I.removeEventListener("click",V),H.removeEventListener("click",O),T<p.length-1?b():w()};I.addEventListener("click",V),H.addEventListener("click",O)};function w(){document.getElementById("grand-finale").classList.add("active"),Nt.to(".final-title",{opacity:1,y:0,duration:1.5,ease:"back.out(1.7)",delay:.5});const S=document.querySelectorAll(".final-card-wrapper");Nt.to(S,{opacity:1,y:0,scale:1,duration:.8,stagger:.4,ease:"back.out(1.2)",delay:1})}function A(){const x=["#ff0000","#00ff00","#ffff00","#00ffff","#ff00ff"],S=document.getElementById("card-reveal-overlay"),P=document.querySelector(".card-wrapper").getBoundingClientRect();C(P.left,P.top+P.height/2,S,x,-1),C(P.right,P.top+P.height/2,S,x,1)}function C(x,S,P,I,B){for(let H=0;H<30;H++){const G=document.createElement("div");G.classList.add("firework-particle"),G.style.backgroundColor=I[Math.floor(Math.random()*I.length)],G.style.left=x+"px",G.style.top=S+"px",P.appendChild(G);const V=(Math.random()-.5)*Math.PI,O=100+Math.random()*100;Nt.to(G,{x:Math.cos(V)*O*B+Math.random()*50*B,y:Math.sin(V)*O+(Math.random()-.5)*50,opacity:0,scale:0,duration:1+Math.random(),ease:"power2.out",onComplete:()=>G.remove()})}}}wi.forEach((p,M)=>{if(M===0)return;const y=[4,6,7,9,10,11,12,13,15,16,17].includes(M)?"none":"power2.inOut";g.to(Xn.position,{x:p.position.x,y:p.position.y,z:p.position.z,ease:y,duration:1},M).to(Xn.quaternion,{x:p.rotation.x,y:p.rotation.y,z:p.rotation.z,w:p.rotation.w,ease:y,duration:1},M)})}function cA(s){const e=document.getElementById("ui-title"),t=document.getElementById("ui-description");e&&wi[s]&&(e.innerText=wi[s].title,t.innerText=wi[s].description)}const fg=new _i,Yf=1500,jl=new Float32Array(Yf*3),dg=[];for(let s=0;s<Yf*3;s+=3)jl[s]=(Math.random()-.5)*50,jl[s+1]=(Math.random()-.5)*40+10,jl[s+2]=(Math.random()-.5)*50,dg.push(Math.random()*.05+.02);fg.setAttribute("position",new En(jl,3));const uA=new ff({size:.15,color:16777215,transparent:!0,opacity:.8}),Go=new Pm(fg,uA);tn.add(Go);function pg(){requestAnimationFrame(pg);const s=Go.geometry.attributes.position.array;for(let t=0;t<Yf;t++)s[t*3+1]-=dg[t],s[t*3+1]<-5&&(s[t*3+1]=20);Go.geometry.attributes.position.needsUpdate=!0;const e=new k(0,0,-1).applyQuaternion(Xn.quaternion);Ar.target.copy(Xn.position).add(e.multiplyScalar(.1)),Ar.update(),Ds.render(tn,Xn)}pg();window.addEventListener("resize",()=>{Xn.aspect=window.innerWidth/window.innerHeight,Xn.updateProjectionMatrix(),Ds.setSize(window.innerWidth,window.innerHeight)});const em=document.getElementById("close-letter-btn");em&&em.addEventListener("click",()=>{document.getElementById("letter-modal").classList.remove("active"),window.hasReadLetter=!0,Xf()});
