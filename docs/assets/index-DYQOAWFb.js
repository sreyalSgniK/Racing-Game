var yu=Object.defineProperty;var vu=(r,e,t)=>e in r?yu(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var De=(r,e,t)=>(vu(r,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ga="162",ai={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ci={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Mu=0,za=1,Su=2,_h=1,Eu=2,yn=3,Sn=0,Dt=1,rn=2,zn=0,Ni=1,Ba=2,ka=3,Ha=4,Tu=5,Qn=100,bu=101,Au=102,Ga=103,Va=104,wu=200,Ru=201,Cu=202,Lu=203,Qo=204,ea=205,Pu=206,Nu=207,Du=208,Iu=209,Uu=210,Ou=211,Fu=212,zu=213,Bu=214,ku=0,Hu=1,Gu=2,Ar=3,Vu=4,Wu=5,Xu=6,qu=7,xh=0,Yu=1,ju=2,Bn=0,Ku=1,Ju=2,$u=3,Zu=4,Qu=5,ed=6,td=7,Wa="attached",nd="detached",yh=300,Oi=301,Fi=302,ta=303,na=304,Ur=306,zi=1e3,Xt=1001,wr=1002,_t=1003,ia=1004,Ci=1005,wt=1006,vr=1007,vn=1008,kn=1009,id=1010,sd=1011,_a=1012,vh=1013,On=1014,$t=1015,gs=1016,Mh=1017,Sh=1018,ni=1020,rd=1021,qt=1023,od=1024,ad=1025,ii=1026,Bi=1027,Eh=1028,Th=1029,cd=1030,bh=1031,Ah=1033,Yr=33776,jr=33777,Kr=33778,Jr=33779,Xa=35840,qa=35841,Ya=35842,ja=35843,wh=36196,Ka=37492,Ja=37496,$a=37808,Za=37809,Qa=37810,ec=37811,tc=37812,nc=37813,ic=37814,sc=37815,rc=37816,oc=37817,ac=37818,cc=37819,lc=37820,hc=37821,$r=36492,uc=36494,dc=36495,ld=36283,fc=36284,pc=36285,mc=36286,_s=2300,ki=2301,Zr=2302,gc=2400,_c=2401,xc=2402,hd=2500,ud=0,Rh=1,sa=2,dd=3200,fd=3201,Ch=0,pd=1,Un="",Pt="srgb",St="srgb-linear",xa="display-p3",Or="display-p3-linear",Rr="linear",st="srgb",Cr="rec709",Lr="p3",li=7680,yc=519,md=512,gd=513,_d=514,Lh=515,xd=516,yd=517,vd=518,Md=519,ra=35044,vc="300 es",oa=1035,Mn=2e3,Pr=2001;class oi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Mc=1234567;const ds=Math.PI/180,Hi=180/Math.PI;function en(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(bt[r&255]+bt[r>>8&255]+bt[r>>16&255]+bt[r>>24&255]+"-"+bt[e&255]+bt[e>>8&255]+"-"+bt[e>>16&15|64]+bt[e>>24&255]+"-"+bt[t&63|128]+bt[t>>8&255]+"-"+bt[t>>16&255]+bt[t>>24&255]+bt[n&255]+bt[n>>8&255]+bt[n>>16&255]+bt[n>>24&255]).toLowerCase()}function vt(r,e,t){return Math.max(e,Math.min(t,r))}function ya(r,e){return(r%e+e)%e}function Sd(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Ed(r,e,t){return r!==e?(t-r)/(e-r):0}function fs(r,e,t){return(1-t)*r+t*e}function Td(r,e,t,n){return fs(r,e,1-Math.exp(-t*n))}function bd(r,e=1){return e-Math.abs(ya(r,e*2)-e)}function Ad(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function wd(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Rd(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Cd(r,e){return r+Math.random()*(e-r)}function Ld(r){return r*(.5-Math.random())}function Pd(r){r!==void 0&&(Mc=r);let e=Mc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Nd(r){return r*ds}function Dd(r){return r*Hi}function aa(r){return(r&r-1)===0&&r!==0}function Id(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Nr(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Ud(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+n)/2),h=o((e+n)/2),u=s((e-n)/2),d=o((e-n)/2),m=s((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":r.set(a*h,c*u,c*d,a*l);break;case"YZY":r.set(c*d,a*h,c*u,a*l);break;case"ZXZ":r.set(c*u,c*d,a*h,a*l);break;case"XZX":r.set(a*h,c*g,c*m,a*l);break;case"YXY":r.set(c*m,a*h,c*g,a*l);break;case"ZYZ":r.set(c*g,c*m,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Zt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ze(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Ph={DEG2RAD:ds,RAD2DEG:Hi,generateUUID:en,clamp:vt,euclideanModulo:ya,mapLinear:Sd,inverseLerp:Ed,lerp:fs,damp:Td,pingpong:bd,smoothstep:Ad,smootherstep:wd,randInt:Rd,randFloat:Cd,randFloatSpread:Ld,seededRandom:Pd,degToRad:Nd,radToDeg:Dd,isPowerOfTwo:aa,ceilPowerOfTwo:Id,floorPowerOfTwo:Nr,setQuaternionFromProperEuler:Ud,normalize:Ze,denormalize:Zt};class Te{constructor(e=0,t=0){Te.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}let We=class Nh{constructor(e,t,n,i,s,o,a,c,l){Nh.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,c,l)}set(e,t,n,i,s,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],m=n[5],g=n[8],_=i[0],p=i[3],f=i[6],M=i[1],x=i[4],E=i[7],P=i[2],R=i[5],b=i[8];return s[0]=o*_+a*M+c*P,s[3]=o*p+a*x+c*R,s[6]=o*f+a*E+c*b,s[1]=l*_+h*M+u*P,s[4]=l*p+h*x+u*R,s[7]=l*f+h*E+u*b,s[2]=d*_+m*M+g*P,s[5]=d*p+m*x+g*R,s[8]=d*f+m*E+g*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*s*h+n*a*c+i*s*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*s,m=l*s-o*c,g=t*u+n*d+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(i*l-h*n)*_,e[2]=(a*n-i*o)*_,e[3]=d*_,e[4]=(h*t-i*c)*_,e[5]=(i*s-a*t)*_,e[6]=m*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Qr.makeScale(e,t)),this}rotate(e){return this.premultiply(Qr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Qr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};const Qr=new We;function Dh(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function xs(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Od(){const r=xs("canvas");return r.style.display="block",r}const Sc={};function Ih(r){r in Sc||(Sc[r]=!0,console.warn(r))}const Ec=new We().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Tc=new We().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),As={[St]:{transfer:Rr,primaries:Cr,toReference:r=>r,fromReference:r=>r},[Pt]:{transfer:st,primaries:Cr,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Or]:{transfer:Rr,primaries:Lr,toReference:r=>r.applyMatrix3(Tc),fromReference:r=>r.applyMatrix3(Ec)},[xa]:{transfer:st,primaries:Lr,toReference:r=>r.convertSRGBToLinear().applyMatrix3(Tc),fromReference:r=>r.applyMatrix3(Ec).convertLinearToSRGB()}},Fd=new Set([St,Or]),Je={enabled:!0,_workingColorSpace:St,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Fd.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=As[e].toReference,i=As[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return As[r].primaries},getTransfer:function(r){return r===Un?Rr:As[r].transfer}};function Di(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function eo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let hi;class Uh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{hi===void 0&&(hi=xs("canvas")),hi.width=e.width,hi.height=e.height;const n=hi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=hi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=xs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Di(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Di(t[n]/255)*255):t[n]=Di(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let zd=0;class Oh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=en(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(to(i[o].image)):s.push(to(i[o]))}else s=to(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function to(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Uh.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Bd=0;class xt extends oi{constructor(e=xt.DEFAULT_IMAGE,t=xt.DEFAULT_MAPPING,n=Xt,i=Xt,s=wt,o=vn,a=qt,c=kn,l=xt.DEFAULT_ANISOTROPY,h=Un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=en(),this.name="",this.source=new Oh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Te(0,0),this.repeat=new Te(1,1),this.center=new Te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==yh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zi:e.x=e.x-Math.floor(e.x);break;case Xt:e.x=e.x<0?0:1;break;case wr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zi:e.y=e.y-Math.floor(e.y);break;case Xt:e.y=e.y<0?0:1;break;case wr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}xt.DEFAULT_IMAGE=null;xt.DEFAULT_MAPPING=yh;xt.DEFAULT_ANISOTROPY=1;class tt{constructor(e=0,t=0,n=0,i=1){tt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],m=c[5],g=c[9],_=c[2],p=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(l+1)/2,E=(m+1)/2,P=(f+1)/2,R=(h+d)/4,b=(u+_)/4,U=(g+p)/4;return x>E&&x>P?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=R/n,s=b/n):E>P?E<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(E),n=R/i,s=U/i):P<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(P),n=b/s,i=U/s),this.set(n,i,s,t),this}let M=Math.sqrt((p-g)*(p-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(u-_)/M,this.z=(d-h)/M,this.w=Math.acos((l+m+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class kd extends oi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new tt(0,0,e,t),this.scissorTest=!1,this.viewport=new tt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);const s=new xt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Oh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class si extends kd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Fh extends xt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=_t,this.minFilter=_t,this.wrapR=Xt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hd extends xt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=_t,this.minFilter=_t,this.wrapR=Xt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let nn=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const d=s[o+0],m=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(u!==_||c!==d||l!==m||h!==g){let p=1-a;const f=c*d+l*m+h*g+u*_,M=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const P=Math.sqrt(x),R=Math.atan2(P,f*M);p=Math.sin(p*R)/P,a=Math.sin(a*R)/P}const E=a*M;if(c=c*p+d*E,l=l*p+m*E,h=h*p+g*E,u=u*p+_*E,p===1-a){const P=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=P,l*=P,h*=P,u*=P}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=s[o],d=s[o+1],m=s[o+2],g=s[o+3];return e[t]=a*g+h*u+c*m-l*d,e[t+1]=c*g+h*d+l*u-a*m,e[t+2]=l*g+h*m+a*d-c*u,e[t+3]=h*g-a*u-c*d-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(s/2),d=c(n/2),m=c(i/2),g=c(s/2);switch(o){case"XYZ":this._x=d*h*u+l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u-d*m*g;break;case"YXZ":this._x=d*h*u+l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u+d*m*g;break;case"ZXY":this._x=d*h*u-l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u-d*m*g;break;case"ZYX":this._x=d*h*u-l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u+d*m*g;break;case"YZX":this._x=d*h*u+l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u-d*m*g;break;case"XZY":this._x=d*h*u-l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-c)*m,this._y=(s-l)*m,this._z=(o-i)*m}else if(n>a&&n>u){const m=2*Math.sqrt(1+n-a-u);this._w=(h-c)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(s+l)/m}else if(a>u){const m=2*Math.sqrt(1+a-n-u);this._w=(s-l)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+u-n-a);this._w=(o-i)/m,this._x=(s+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+i*l-s*c,this._y=i*h+o*c+s*a-n*l,this._z=s*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class zh{constructor(e=0,t=0,n=0){zh.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(bc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(bc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),h=2*(a*t-s*i),u=2*(s*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-s*u,this.z=i+c*u+s*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-s*a,this.y=s*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return no.copy(this).projectOnVector(e),this.sub(no)}reflect(e){return this.sub(no.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};const no=new L,bc=new nn;class Ut{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(jt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(jt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=jt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,jt):jt.fromBufferAttribute(s,o),jt.applyMatrix4(e.matrixWorld),this.expandByPoint(jt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ws.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ws.copy(n.boundingBox)),ws.applyMatrix4(e.matrixWorld),this.union(ws)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,jt),jt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zi),Rs.subVectors(this.max,Zi),ui.subVectors(e.a,Zi),di.subVectors(e.b,Zi),fi.subVectors(e.c,Zi),Tn.subVectors(di,ui),bn.subVectors(fi,di),Xn.subVectors(ui,fi);let t=[0,-Tn.z,Tn.y,0,-bn.z,bn.y,0,-Xn.z,Xn.y,Tn.z,0,-Tn.x,bn.z,0,-bn.x,Xn.z,0,-Xn.x,-Tn.y,Tn.x,0,-bn.y,bn.x,0,-Xn.y,Xn.x,0];return!io(t,ui,di,fi,Rs)||(t=[1,0,0,0,1,0,0,0,1],!io(t,ui,di,fi,Rs))?!1:(Cs.crossVectors(Tn,bn),t=[Cs.x,Cs.y,Cs.z],io(t,ui,di,fi,Rs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(jt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(dn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const dn=[new L,new L,new L,new L,new L,new L,new L,new L],jt=new L,ws=new Ut,ui=new L,di=new L,fi=new L,Tn=new L,bn=new L,Xn=new L,Zi=new L,Rs=new L,Cs=new L,qn=new L;function io(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){qn.fromArray(r,s);const a=i.x*Math.abs(qn.x)+i.y*Math.abs(qn.y)+i.z*Math.abs(qn.z),c=e.dot(qn),l=t.dot(qn),h=n.dot(qn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Gd=new Ut,Qi=new L,so=new L;class ln{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Gd.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qi.subVectors(e,this.center);const t=Qi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Qi,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(so.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qi.copy(e.center).add(so)),this.expandByPoint(Qi.copy(e.center).sub(so))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const fn=new L,ro=new L,Ls=new L,An=new L,oo=new L,Ps=new L,ao=new L;let Ms=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=fn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fn.copy(this.origin).addScaledVector(this.direction,t),fn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ro.copy(e).add(t).multiplyScalar(.5),Ls.copy(t).sub(e).normalize(),An.copy(this.origin).sub(ro);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ls),a=An.dot(this.direction),c=-An.dot(Ls),l=An.lengthSq(),h=Math.abs(1-o*o);let u,d,m,g;if(h>0)if(u=o*c-a,d=o*a-c,g=s*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,m=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=s,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-c),s),m=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-s,-c),s),m=d*(d+2*c)+l):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-c),s),m=-u*u+d*(d+2*c)+l);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(ro).addScaledVector(Ls,d),m}intersectSphere(e,t){fn.subVectors(e.center,this.origin);const n=fn.dot(this.direction),i=fn.dot(fn)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,fn)!==null}intersectTriangle(e,t,n,i,s){oo.subVectors(t,e),Ps.subVectors(n,e),ao.crossVectors(oo,Ps);let o=this.direction.dot(ao),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;An.subVectors(this.origin,e);const c=a*this.direction.dot(Ps.crossVectors(An,Ps));if(c<0)return null;const l=a*this.direction.dot(oo.cross(An));if(l<0||c+l>o)return null;const h=-a*An.dot(ao);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Xe=class ca{constructor(e,t,n,i,s,o,a,c,l,h,u,d,m,g,_,p){ca.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,c,l,h,u,d,m,g,_,p)}set(e,t,n,i,s,o,a,c,l,h,u,d,m,g,_,p){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=s,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=m,f[7]=g,f[11]=_,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ca().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/pi.setFromMatrixColumn(e,0).length(),s=1/pi.setFromMatrixColumn(e,1).length(),o=1/pi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=o*h,m=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=m+g*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=g+m*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*h,m=c*u,g=l*h,_=l*u;t[0]=d+_*a,t[4]=g*a-m,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=m*a-g,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*h,m=c*u,g=l*h,_=l*u;t[0]=d-_*a,t[4]=-o*u,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*h,m=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=g*l-m,t[8]=d*l+_,t[1]=c*u,t[5]=_*l+d,t[9]=m*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,m=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=_-d*u,t[8]=g*u+m,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=m*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=o*c,m=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+_,t[5]=o*h,t[9]=m*u-g,t[2]=g*u-m,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Vd,e,Wd)}lookAt(e,t,n){const i=this.elements;return zt.subVectors(e,t),zt.lengthSq()===0&&(zt.z=1),zt.normalize(),wn.crossVectors(n,zt),wn.lengthSq()===0&&(Math.abs(n.z)===1?zt.x+=1e-4:zt.z+=1e-4,zt.normalize(),wn.crossVectors(n,zt)),wn.normalize(),Ns.crossVectors(zt,wn),i[0]=wn.x,i[4]=Ns.x,i[8]=zt.x,i[1]=wn.y,i[5]=Ns.y,i[9]=zt.y,i[2]=wn.z,i[6]=Ns.z,i[10]=zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],m=n[13],g=n[2],_=n[6],p=n[10],f=n[14],M=n[3],x=n[7],E=n[11],P=n[15],R=i[0],b=i[4],U=i[8],W=i[12],v=i[1],w=i[5],te=i[9],Z=i[13],N=i[2],X=i[6],H=i[10],J=i[14],V=i[3],Y=i[7],$=i[11],re=i[15];return s[0]=o*R+a*v+c*N+l*V,s[4]=o*b+a*w+c*X+l*Y,s[8]=o*U+a*te+c*H+l*$,s[12]=o*W+a*Z+c*J+l*re,s[1]=h*R+u*v+d*N+m*V,s[5]=h*b+u*w+d*X+m*Y,s[9]=h*U+u*te+d*H+m*$,s[13]=h*W+u*Z+d*J+m*re,s[2]=g*R+_*v+p*N+f*V,s[6]=g*b+_*w+p*X+f*Y,s[10]=g*U+_*te+p*H+f*$,s[14]=g*W+_*Z+p*J+f*re,s[3]=M*R+x*v+E*N+P*V,s[7]=M*b+x*w+E*X+P*Y,s[11]=M*U+x*te+E*H+P*$,s[15]=M*W+x*Z+E*J+P*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],m=e[14],g=e[3],_=e[7],p=e[11],f=e[15];return g*(+s*c*u-i*l*u-s*a*d+n*l*d+i*a*m-n*c*m)+_*(+t*c*m-t*l*d+s*o*d-i*o*m+i*l*h-s*c*h)+p*(+t*l*u-t*a*m-s*o*u+n*o*m+s*a*h-n*l*h)+f*(-i*a*h-t*c*u+t*a*d+i*o*u-n*o*d+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],m=e[11],g=e[12],_=e[13],p=e[14],f=e[15],M=u*p*l-_*d*l+_*c*m-a*p*m-u*c*f+a*d*f,x=g*d*l-h*p*l-g*c*m+o*p*m+h*c*f-o*d*f,E=h*_*l-g*u*l+g*a*m-o*_*m-h*a*f+o*u*f,P=g*u*c-h*_*c-g*a*d+o*_*d+h*a*p-o*u*p,R=t*M+n*x+i*E+s*P;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/R;return e[0]=M*b,e[1]=(_*d*s-u*p*s-_*i*m+n*p*m+u*i*f-n*d*f)*b,e[2]=(a*p*s-_*c*s+_*i*l-n*p*l-a*i*f+n*c*f)*b,e[3]=(u*c*s-a*d*s-u*i*l+n*d*l+a*i*m-n*c*m)*b,e[4]=x*b,e[5]=(h*p*s-g*d*s+g*i*m-t*p*m-h*i*f+t*d*f)*b,e[6]=(g*c*s-o*p*s-g*i*l+t*p*l+o*i*f-t*c*f)*b,e[7]=(o*d*s-h*c*s+h*i*l-t*d*l-o*i*m+t*c*m)*b,e[8]=E*b,e[9]=(g*u*s-h*_*s-g*n*m+t*_*m+h*n*f-t*u*f)*b,e[10]=(o*_*s-g*a*s+g*n*l-t*_*l-o*n*f+t*a*f)*b,e[11]=(h*a*s-o*u*s-h*n*l+t*u*l+o*n*m-t*a*m)*b,e[12]=P*b,e[13]=(h*_*i-g*u*i+g*n*d-t*_*d-h*n*p+t*u*p)*b,e[14]=(g*a*i-o*_*i-g*n*c+t*_*c+o*n*p-t*a*p)*b,e[15]=(o*u*i-h*a*i+h*n*c-t*u*c-o*n*d+t*a*d)*b,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,h=s*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,h=o+o,u=a+a,d=s*l,m=s*h,g=s*u,_=o*h,p=o*u,f=a*u,M=c*l,x=c*h,E=c*u,P=n.x,R=n.y,b=n.z;return i[0]=(1-(_+f))*P,i[1]=(m+E)*P,i[2]=(g-x)*P,i[3]=0,i[4]=(m-E)*R,i[5]=(1-(d+f))*R,i[6]=(p+M)*R,i[7]=0,i[8]=(g+x)*b,i[9]=(p-M)*b,i[10]=(1-(d+_))*b,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=pi.set(i[0],i[1],i[2]).length();const o=pi.set(i[4],i[5],i[6]).length(),a=pi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Kt.copy(this);const l=1/s,h=1/o,u=1/a;return Kt.elements[0]*=l,Kt.elements[1]*=l,Kt.elements[2]*=l,Kt.elements[4]*=h,Kt.elements[5]*=h,Kt.elements[6]*=h,Kt.elements[8]*=u,Kt.elements[9]*=u,Kt.elements[10]*=u,t.setFromRotationMatrix(Kt),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=Mn){const c=this.elements,l=2*s/(t-e),h=2*s/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let m,g;if(a===Mn)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Pr)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=Mn){const c=this.elements,l=1/(t-e),h=1/(n-i),u=1/(o-s),d=(t+e)*l,m=(n+i)*h;let g,_;if(a===Mn)g=(o+s)*u,_=-2*u;else if(a===Pr)g=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};const pi=new L,Kt=new Xe,Vd=new L(0,0,0),Wd=new L(1,1,1),wn=new L,Ns=new L,zt=new L,Ac=new Xe,wc=new nn;class cn{constructor(e=0,t=0,n=0,i=cn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(vt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-vt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(vt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ac.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ac,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wc.setFromEuler(this),this.setFromQuaternion(wc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}cn.DEFAULT_ORDER="XYZ";class Bh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Xd=0;const Rc=new L,mi=new nn,pn=new Xe,Ds=new L,es=new L,qd=new L,Yd=new nn,Cc=new L(1,0,0),Lc=new L(0,1,0),Pc=new L(0,0,1),jd={type:"added"},Kd={type:"removed"},co={type:"childadded",child:null},lo={type:"childremoved",child:null};class at extends oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xd++}),this.uuid=en(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=at.DEFAULT_UP.clone();const e=new L,t=new cn,n=new nn,i=new L(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Xe},normalMatrix:{value:new We}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=at.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=at.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return mi.setFromAxisAngle(e,t),this.quaternion.multiply(mi),this}rotateOnWorldAxis(e,t){return mi.setFromAxisAngle(e,t),this.quaternion.premultiply(mi),this}rotateX(e){return this.rotateOnAxis(Cc,e)}rotateY(e){return this.rotateOnAxis(Lc,e)}rotateZ(e){return this.rotateOnAxis(Pc,e)}translateOnAxis(e,t){return Rc.copy(e).applyQuaternion(this.quaternion),this.position.add(Rc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Cc,e)}translateY(e){return this.translateOnAxis(Lc,e)}translateZ(e){return this.translateOnAxis(Pc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ds.copy(e):Ds.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pn.lookAt(es,Ds,this.up):pn.lookAt(Ds,es,this.up),this.quaternion.setFromRotationMatrix(pn),i&&(pn.extractRotation(i.matrixWorld),mi.setFromRotationMatrix(pn),this.quaternion.premultiply(mi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(jd),co.child=e,this.dispatchEvent(co),co.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Kd),lo.child=e,this.dispatchEvent(lo),lo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(pn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(es,e,qd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(es,Yd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}at.DEFAULT_UP=new L(0,1,0);at.DEFAULT_MATRIX_AUTO_UPDATE=!0;at.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Jt=new L,mn=new L,ho=new L,gn=new L,gi=new L,_i=new L,Nc=new L,uo=new L,fo=new L,po=new L;class Qt{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Jt.subVectors(e,t),i.cross(Jt);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Jt.subVectors(i,t),mn.subVectors(n,t),ho.subVectors(e,t);const o=Jt.dot(Jt),a=Jt.dot(mn),c=Jt.dot(ho),l=mn.dot(mn),h=mn.dot(ho),u=o*l-a*a;if(u===0)return s.set(0,0,0),null;const d=1/u,m=(l*c-a*h)*d,g=(o*h-a*c)*d;return s.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,gn)===null?!1:gn.x>=0&&gn.y>=0&&gn.x+gn.y<=1}static getInterpolation(e,t,n,i,s,o,a,c){return this.getBarycoord(e,t,n,i,gn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,gn.x),c.addScaledVector(o,gn.y),c.addScaledVector(a,gn.z),c)}static isFrontFacing(e,t,n,i){return Jt.subVectors(n,t),mn.subVectors(e,t),Jt.cross(mn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jt.subVectors(this.c,this.b),mn.subVectors(this.a,this.b),Jt.cross(mn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Qt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Qt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Qt.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Qt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Qt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;gi.subVectors(i,n),_i.subVectors(s,n),uo.subVectors(e,n);const c=gi.dot(uo),l=_i.dot(uo);if(c<=0&&l<=0)return t.copy(n);fo.subVectors(e,i);const h=gi.dot(fo),u=_i.dot(fo);if(h>=0&&u<=h)return t.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(gi,o);po.subVectors(e,s);const m=gi.dot(po),g=_i.dot(po);if(g>=0&&m<=g)return t.copy(s);const _=m*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(_i,a);const p=h*g-m*u;if(p<=0&&u-h>=0&&m-g>=0)return Nc.subVectors(s,i),a=(u-h)/(u-h+(m-g)),t.copy(i).addScaledVector(Nc,a);const f=1/(p+_+d);return o=_*f,a=d*f,t.copy(n).addScaledVector(gi,o).addScaledVector(_i,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const kh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rn={h:0,s:0,l:0},Is={h:0,s:0,l:0};function mo(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ce{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Je.workingColorSpace){return this.r=e,this.g=t,this.b=n,Je.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Je.workingColorSpace){if(e=ya(e,1),t=vt(t,0,1),n=vt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=mo(o,s,e+1/3),this.g=mo(o,s,e),this.b=mo(o,s,e-1/3)}return Je.toWorkingColorSpace(this,i),this}setStyle(e,t=Pt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Pt){const n=kh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Di(e.r),this.g=Di(e.g),this.b=Di(e.b),this}copyLinearToSRGB(e){return this.r=eo(e.r),this.g=eo(e.g),this.b=eo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pt){return Je.fromWorkingColorSpace(At.copy(this),e),Math.round(vt(At.r*255,0,255))*65536+Math.round(vt(At.g*255,0,255))*256+Math.round(vt(At.b*255,0,255))}getHexString(e=Pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.fromWorkingColorSpace(At.copy(this),t);const n=At.r,i=At.g,s=At.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-s)/u+(i<s?6:0);break;case i:c=(s-n)/u+2;break;case s:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Je.workingColorSpace){return Je.fromWorkingColorSpace(At.copy(this),t),e.r=At.r,e.g=At.g,e.b=At.b,e}getStyle(e=Pt){Je.fromWorkingColorSpace(At.copy(this),e);const t=At.r,n=At.g,i=At.b;return e!==Pt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Rn),this.setHSL(Rn.h+e,Rn.s+t,Rn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Rn),e.getHSL(Is);const n=fs(Rn.h,Is.h,t),i=fs(Rn.s,Is.s,t),s=fs(Rn.l,Is.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const At=new Ce;Ce.NAMES=kh;let Jd=0;class an extends oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=en(),this.name="",this.type="Material",this.blending=Ni,this.side=Sn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qo,this.blendDst=ea,this.blendEquation=Qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=Ar,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=li,this.stencilZFail=li,this.stencilZPass=li,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ni&&(n.blending=this.blending),this.side!==Sn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Qo&&(n.blendSrc=this.blendSrc),this.blendDst!==ea&&(n.blendDst=this.blendDst),this.blendEquation!==Qn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ar&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==li&&(n.stencilFail=this.stencilFail),this.stencilZFail!==li&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==li&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class on extends an{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=xh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ut=new L,Us=new Te;class Mt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ra,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=$t,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Ih("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Us.fromBufferAttribute(this,t),Us.applyMatrix3(e),this.setXY(t,Us.x,Us.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix3(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix4(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyNormalMatrix(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.transformDirection(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Zt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ze(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Zt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Zt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Zt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Zt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array),i=Ze(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array),i=Ze(i,this.array),s=Ze(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ra&&(e.usage=this.usage),e}}class Hh extends Mt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Gh extends Mt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Yt extends Mt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let $d=0;const Ht=new Xe,go=new at,xi=new L,Bt=new Ut,ts=new Ut,gt=new L;class It extends oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$d++}),this.uuid=en(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Dh(e)?Gh:Hh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new We().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ht.makeRotationFromQuaternion(e),this.applyMatrix4(Ht),this}rotateX(e){return Ht.makeRotationX(e),this.applyMatrix4(Ht),this}rotateY(e){return Ht.makeRotationY(e),this.applyMatrix4(Ht),this}rotateZ(e){return Ht.makeRotationZ(e),this.applyMatrix4(Ht),this}translate(e,t,n){return Ht.makeTranslation(e,t,n),this.applyMatrix4(Ht),this}scale(e,t,n){return Ht.makeScale(e,t,n),this.applyMatrix4(Ht),this}lookAt(e){return go.lookAt(e),go.updateMatrix(),this.applyMatrix4(go.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xi).negate(),this.translate(xi.x,xi.y,xi.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Yt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ut);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Bt.setFromBufferAttribute(s),this.morphTargetsRelative?(gt.addVectors(this.boundingBox.min,Bt.min),this.boundingBox.expandByPoint(gt),gt.addVectors(this.boundingBox.max,Bt.max),this.boundingBox.expandByPoint(gt)):(this.boundingBox.expandByPoint(Bt.min),this.boundingBox.expandByPoint(Bt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ln);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(Bt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];ts.setFromBufferAttribute(a),this.morphTargetsRelative?(gt.addVectors(Bt.min,ts.min),Bt.expandByPoint(gt),gt.addVectors(Bt.max,ts.max),Bt.expandByPoint(gt)):(Bt.expandByPoint(ts.min),Bt.expandByPoint(ts.max))}Bt.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)gt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(gt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)gt.fromBufferAttribute(a,l),c&&(xi.fromBufferAttribute(e,l),gt.add(xi)),i=Math.max(i,n.distanceToSquared(gt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let U=0;U<n.count;U++)a[U]=new L,c[U]=new L;const l=new L,h=new L,u=new L,d=new Te,m=new Te,g=new Te,_=new L,p=new L;function f(U,W,v){l.fromBufferAttribute(n,U),h.fromBufferAttribute(n,W),u.fromBufferAttribute(n,v),d.fromBufferAttribute(s,U),m.fromBufferAttribute(s,W),g.fromBufferAttribute(s,v),h.sub(l),u.sub(l),m.sub(d),g.sub(d);const w=1/(m.x*g.y-g.x*m.y);isFinite(w)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-m.y).multiplyScalar(w),p.copy(u).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(w),a[U].add(_),a[W].add(_),a[v].add(_),c[U].add(p),c[W].add(p),c[v].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let U=0,W=M.length;U<W;++U){const v=M[U],w=v.start,te=v.count;for(let Z=w,N=w+te;Z<N;Z+=3)f(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}const x=new L,E=new L,P=new L,R=new L;function b(U){P.fromBufferAttribute(i,U),R.copy(P);const W=a[U];x.copy(W),x.sub(P.multiplyScalar(P.dot(W))).normalize(),E.crossVectors(R,W);const w=E.dot(c[U])<0?-1:1;o.setXYZW(U,x.x,x.y,x.z,w)}for(let U=0,W=M.length;U<W;++U){const v=M[U],w=v.start,te=v.count;for(let Z=w,N=w+te;Z<N;Z+=3)b(e.getX(Z+0)),b(e.getX(Z+1)),b(e.getX(Z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Mt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const i=new L,s=new L,o=new L,a=new L,c=new L,l=new L,h=new L,u=new L;if(e)for(let d=0,m=e.count;d<m;d+=3){const g=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,m=t.count;d<m;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)gt.fromBufferAttribute(e,t),gt.normalize(),e.setXYZ(t,gt.x,gt.y,gt.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let m=0,g=0;for(let _=0,p=c.length;_<p;_++){a.isInterleavedBufferAttribute?m=c[_]*a.data.stride+a.offset:m=c[_]*h;for(let f=0;f<h;f++)d[g++]=l[m++]}return new Mt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new It,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],m=e(d,n);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const m=l[u];h.push(m.toJSON(e.data))}h.length>0&&(i[c]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const s=e.morphAttributes;for(const l in s){const h=[],u=s[l];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Dc=new Xe,Yn=new Ms,Os=new ln,Ic=new L,yi=new L,vi=new L,Mi=new L,_o=new L,Fs=new L,zs=new Te,Bs=new Te,ks=new Te,Uc=new L,Oc=new L,Fc=new L,Hs=new L,Gs=new L;class Nt extends at{constructor(e=new It,t=new on){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Fs.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=a[c],u=s[c];h!==0&&(_o.fromBufferAttribute(u,e),o?Fs.addScaledVector(_o,h):Fs.addScaledVector(_o.sub(t),h))}t.add(Fs)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Os.copy(n.boundingSphere),Os.applyMatrix4(s),Yn.copy(e.ray).recast(e.near),!(Os.containsPoint(Yn.origin)===!1&&(Yn.intersectSphere(Os,Ic)===null||Yn.origin.distanceToSquared(Ic)>(e.far-e.near)**2))&&(Dc.copy(s).invert(),Yn.copy(e.ray).applyMatrix4(Dc),!(n.boundingBox!==null&&Yn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Yn)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],f=o[p.materialIndex],M=Math.max(p.start,m.start),x=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let E=M,P=x;E<P;E+=3){const R=a.getX(E),b=a.getX(E+1),U=a.getX(E+2);i=Vs(this,f,e,n,l,h,u,R,b,U),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let p=g,f=_;p<f;p+=3){const M=a.getX(p),x=a.getX(p+1),E=a.getX(p+2);i=Vs(this,o,e,n,l,h,u,M,x,E),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],f=o[p.materialIndex],M=Math.max(p.start,m.start),x=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let E=M,P=x;E<P;E+=3){const R=E,b=E+1,U=E+2;i=Vs(this,f,e,n,l,h,u,R,b,U),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(c.count,m.start+m.count);for(let p=g,f=_;p<f;p+=3){const M=p,x=p+1,E=p+2;i=Vs(this,o,e,n,l,h,u,M,x,E),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function Zd(r,e,t,n,i,s,o,a){let c;if(e.side===Dt?c=n.intersectTriangle(o,s,i,!0,a):c=n.intersectTriangle(i,s,o,e.side===Sn,a),c===null)return null;Gs.copy(a),Gs.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(Gs);return l<t.near||l>t.far?null:{distance:l,point:Gs.clone(),object:r}}function Vs(r,e,t,n,i,s,o,a,c,l){r.getVertexPosition(a,yi),r.getVertexPosition(c,vi),r.getVertexPosition(l,Mi);const h=Zd(r,e,t,n,yi,vi,Mi,Hs);if(h){i&&(zs.fromBufferAttribute(i,a),Bs.fromBufferAttribute(i,c),ks.fromBufferAttribute(i,l),h.uv=Qt.getInterpolation(Hs,yi,vi,Mi,zs,Bs,ks,new Te)),s&&(zs.fromBufferAttribute(s,a),Bs.fromBufferAttribute(s,c),ks.fromBufferAttribute(s,l),h.uv1=Qt.getInterpolation(Hs,yi,vi,Mi,zs,Bs,ks,new Te)),o&&(Uc.fromBufferAttribute(o,a),Oc.fromBufferAttribute(o,c),Fc.fromBufferAttribute(o,l),h.normal=Qt.getInterpolation(Hs,yi,vi,Mi,Uc,Oc,Fc,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:c,c:l,normal:new L,materialIndex:0};Qt.getNormal(yi,vi,Mi,u.normal),h.face=u}return h}class qi extends It{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,m=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new Yt(l,3)),this.setAttribute("normal",new Yt(h,3)),this.setAttribute("uv",new Yt(u,2));function g(_,p,f,M,x,E,P,R,b,U,W){const v=E/b,w=P/U,te=E/2,Z=P/2,N=R/2,X=b+1,H=U+1;let J=0,V=0;const Y=new L;for(let $=0;$<H;$++){const re=$*w-Z;for(let fe=0;fe<X;fe++){const Le=fe*v-te;Y[_]=Le*M,Y[p]=re*x,Y[f]=N,l.push(Y.x,Y.y,Y.z),Y[_]=0,Y[p]=0,Y[f]=R>0?1:-1,h.push(Y.x,Y.y,Y.z),u.push(fe/b),u.push(1-$/U),J+=1}}for(let $=0;$<U;$++)for(let re=0;re<b;re++){const fe=d+re+X*$,Le=d+re+X*($+1),k=d+(re+1)+X*($+1),ne=d+(re+1)+X*$;c.push(fe,Le,ne),c.push(Le,k,ne),V+=6}a.addGroup(m,V,W),m+=V,d+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Gi(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Lt(r){const e={};for(let t=0;t<r.length;t++){const n=Gi(r[t]);for(const i in n)e[i]=n[i]}return e}function Qd(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Vh(r){return r.getRenderTarget()===null?r.outputColorSpace:Je.workingColorSpace}const ef={clone:Gi,merge:Lt};var tf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Hn extends an{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tf,this.fragmentShader=nf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gi(e.uniforms),this.uniformsGroups=Qd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Wh extends at{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe,this.coordinateSystem=Mn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Cn=new L,zc=new Te,Bc=new Te;class Rt extends Wh{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Hi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ds*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hi*2*Math.atan(Math.tan(ds*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Cn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Cn.x,Cn.y).multiplyScalar(-e/Cn.z),Cn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Cn.x,Cn.y).multiplyScalar(-e/Cn.z)}getViewSize(e,t){return this.getViewBounds(e,zc,Bc),t.subVectors(Bc,zc)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ds*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Si=-90,Ei=1;class sf extends at{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Rt(Si,Ei,e,t);i.layers=this.layers,this.add(i);const s=new Rt(Si,Ei,e,t);s.layers=this.layers,this.add(s);const o=new Rt(Si,Ei,e,t);o.layers=this.layers,this.add(o);const a=new Rt(Si,Ei,e,t);a.layers=this.layers,this.add(a);const c=new Rt(Si,Ei,e,t);c.layers=this.layers,this.add(c);const l=new Rt(Si,Ei,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===Mn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Pr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Xh extends xt{constructor(e,t,n,i,s,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Oi,super(e,t,n,i,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class rf extends si{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Xh(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:wt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new qi(5,5,5),s=new Hn({name:"CubemapFromEquirect",uniforms:Gi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Dt,blending:zn});s.uniforms.tEquirect.value=t;const o=new Nt(i,s),a=t.minFilter;return t.minFilter===vn&&(t.minFilter=wt),new sf(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const xo=new L,of=new L,af=new We;class Dn{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=xo.subVectors(n,t).cross(of.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(xo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||af.getNormalMatrix(e),i=this.coplanarPoint(xo).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const jn=new ln,Ws=new L;class va{constructor(e=new Dn,t=new Dn,n=new Dn,i=new Dn,s=new Dn,o=new Dn){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Mn){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],m=i[8],g=i[9],_=i[10],p=i[11],f=i[12],M=i[13],x=i[14],E=i[15];if(n[0].setComponents(c-s,d-l,p-m,E-f).normalize(),n[1].setComponents(c+s,d+l,p+m,E+f).normalize(),n[2].setComponents(c+o,d+h,p+g,E+M).normalize(),n[3].setComponents(c-o,d-h,p-g,E-M).normalize(),n[4].setComponents(c-a,d-u,p-_,E-x).normalize(),t===Mn)n[5].setComponents(c+a,d+u,p+_,E+x).normalize();else if(t===Pr)n[5].setComponents(a,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),jn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),jn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(jn)}intersectsSprite(e){return jn.center.set(0,0,0),jn.radius=.7071067811865476,jn.applyMatrix4(e.matrixWorld),this.intersectsSphere(jn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ws.x=i.normal.x>0?e.max.x:e.min.x,Ws.y=i.normal.y>0?e.max.y:e.min.y,Ws.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ws)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function qh(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function cf(r,e){const t=e.isWebGL2,n=new WeakMap;function i(l,h){const u=l.array,d=l.usage,m=u.byteLength,g=r.createBuffer();r.bindBuffer(h,g),r.bufferData(h,u,d),l.onUploadCallback();let _;if(u instanceof Float32Array)_=r.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)_=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=r.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=r.SHORT;else if(u instanceof Uint32Array)_=r.UNSIGNED_INT;else if(u instanceof Int32Array)_=r.INT;else if(u instanceof Int8Array)_=r.BYTE;else if(u instanceof Uint8Array)_=r.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:m}}function s(l,h,u){const d=h.array,m=h._updateRange,g=h.updateRanges;if(r.bindBuffer(u,l),m.count===-1&&g.length===0&&r.bufferSubData(u,0,d),g.length!==0){for(let _=0,p=g.length;_<p;_++){const f=g[_];t?r.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):r.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}m.count!==-1&&(t?r.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):r.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(r.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);if(u===void 0)n.set(l,i(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(u.buffer,l,h),u.version=l.version}}return{get:o,remove:a,update:c}}class Fr extends It{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=e/a,d=t/c,m=[],g=[],_=[],p=[];for(let f=0;f<h;f++){const M=f*d-o;for(let x=0;x<l;x++){const E=x*u-s;g.push(E,-M,0),_.push(0,0,1),p.push(x/a),p.push(1-f/c)}}for(let f=0;f<c;f++)for(let M=0;M<a;M++){const x=M+l*f,E=M+l*(f+1),P=M+1+l*(f+1),R=M+1+l*f;m.push(x,E,R),m.push(E,P,R)}this.setIndex(m),this.setAttribute("position",new Yt(g,3)),this.setAttribute("normal",new Yt(_,3)),this.setAttribute("uv",new Yt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fr(e.width,e.height,e.widthSegments,e.heightSegments)}}var lf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hf=`#ifdef USE_ALPHAHASH
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
#endif`,uf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,df=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ff=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mf=`#ifdef USE_AOMAP
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
#endif`,gf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_f=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,xf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,yf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Sf=`#ifdef USE_IRIDESCENCE
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
#endif`,Ef=`#ifdef USE_BUMPMAP
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
#endif`,Tf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,bf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Af=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Cf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Lf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Pf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Nf=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,Df=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,If=`vec3 transformedNormal = objectNormal;
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
#endif`,Uf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Of=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ff=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bf="gl_FragColor = linearToOutputTexel( gl_FragColor );",kf=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Hf=`#ifdef USE_ENVMAP
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
#endif`,Gf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Vf=`#ifdef USE_ENVMAP
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
#endif`,Wf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xf=`#ifdef USE_ENVMAP
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
#endif`,qf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jf=`#ifdef USE_GRADIENTMAP
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
}`,$f=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Zf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ep=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tp=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,np=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
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
#endif`,ip=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,op=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ap=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,cp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lp=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,hp=`#if defined( RE_IndirectDiffuse )
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
#endif`,up=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,mp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,gp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_p=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,yp=`#if defined( USE_POINTS_UV )
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
#endif`,vp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Sp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ep=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,bp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
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
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Ap=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,wp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Rp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Cp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Np=`#ifdef USE_NORMALMAP
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
#endif`,Dp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ip=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Up=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Op=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,Bp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,qp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Yp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,jp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Kp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jp=`#ifdef USE_SKINNING
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
#endif`,$p=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zp=`#ifdef USE_SKINNING
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
#endif`,Qp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,em=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nm=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,im=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,sm=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,rm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,am=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hm=`uniform sampler2D t2D;
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
}`,um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,fm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mm=`#include <common>
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
}`,gm=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,_m=`#define DISTANCE
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
}`,xm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
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
	gl_FragColor = packDepthToRGBA( dist );
}`,ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mm=`uniform float scale;
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
}`,Sm=`uniform vec3 diffuse;
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
}`,Em=`#include <common>
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
}`,Tm=`uniform vec3 diffuse;
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
}`,bm=`#define LAMBERT
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
}`,Am=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,wm=`#define MATCAP
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
}`,Rm=`#define MATCAP
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
}`,Cm=`#define NORMAL
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
}`,Lm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Pm=`#define PHONG
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
}`,Nm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Dm=`#define STANDARD
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
}`,Im=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,Um=`#define TOON
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
}`,Om=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Fm=`uniform float size;
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
}`,zm=`uniform vec3 diffuse;
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
}`,Bm=`#include <common>
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
}`,km=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Hm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Gm=`uniform vec3 diffuse;
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
}`,ke={alphahash_fragment:lf,alphahash_pars_fragment:hf,alphamap_fragment:uf,alphamap_pars_fragment:df,alphatest_fragment:ff,alphatest_pars_fragment:pf,aomap_fragment:mf,aomap_pars_fragment:gf,batching_pars_vertex:_f,batching_vertex:xf,begin_vertex:yf,beginnormal_vertex:vf,bsdfs:Mf,iridescence_fragment:Sf,bumpmap_pars_fragment:Ef,clipping_planes_fragment:Tf,clipping_planes_pars_fragment:bf,clipping_planes_pars_vertex:Af,clipping_planes_vertex:wf,color_fragment:Rf,color_pars_fragment:Cf,color_pars_vertex:Lf,color_vertex:Pf,common:Nf,cube_uv_reflection_fragment:Df,defaultnormal_vertex:If,displacementmap_pars_vertex:Uf,displacementmap_vertex:Of,emissivemap_fragment:Ff,emissivemap_pars_fragment:zf,colorspace_fragment:Bf,colorspace_pars_fragment:kf,envmap_fragment:Hf,envmap_common_pars_fragment:Gf,envmap_pars_fragment:Vf,envmap_pars_vertex:Wf,envmap_physical_pars_fragment:np,envmap_vertex:Xf,fog_vertex:qf,fog_pars_vertex:Yf,fog_fragment:jf,fog_pars_fragment:Kf,gradientmap_pars_fragment:Jf,lightmap_fragment:$f,lightmap_pars_fragment:Zf,lights_lambert_fragment:Qf,lights_lambert_pars_fragment:ep,lights_pars_begin:tp,lights_toon_fragment:ip,lights_toon_pars_fragment:sp,lights_phong_fragment:rp,lights_phong_pars_fragment:op,lights_physical_fragment:ap,lights_physical_pars_fragment:cp,lights_fragment_begin:lp,lights_fragment_maps:hp,lights_fragment_end:up,logdepthbuf_fragment:dp,logdepthbuf_pars_fragment:fp,logdepthbuf_pars_vertex:pp,logdepthbuf_vertex:mp,map_fragment:gp,map_pars_fragment:_p,map_particle_fragment:xp,map_particle_pars_fragment:yp,metalnessmap_fragment:vp,metalnessmap_pars_fragment:Mp,morphinstance_vertex:Sp,morphcolor_vertex:Ep,morphnormal_vertex:Tp,morphtarget_pars_vertex:bp,morphtarget_vertex:Ap,normal_fragment_begin:wp,normal_fragment_maps:Rp,normal_pars_fragment:Cp,normal_pars_vertex:Lp,normal_vertex:Pp,normalmap_pars_fragment:Np,clearcoat_normal_fragment_begin:Dp,clearcoat_normal_fragment_maps:Ip,clearcoat_pars_fragment:Up,iridescence_pars_fragment:Op,opaque_fragment:Fp,packing:zp,premultiplied_alpha_fragment:Bp,project_vertex:kp,dithering_fragment:Hp,dithering_pars_fragment:Gp,roughnessmap_fragment:Vp,roughnessmap_pars_fragment:Wp,shadowmap_pars_fragment:Xp,shadowmap_pars_vertex:qp,shadowmap_vertex:Yp,shadowmask_pars_fragment:jp,skinbase_vertex:Kp,skinning_pars_vertex:Jp,skinning_vertex:$p,skinnormal_vertex:Zp,specularmap_fragment:Qp,specularmap_pars_fragment:em,tonemapping_fragment:tm,tonemapping_pars_fragment:nm,transmission_fragment:im,transmission_pars_fragment:sm,uv_pars_fragment:rm,uv_pars_vertex:om,uv_vertex:am,worldpos_vertex:cm,background_vert:lm,background_frag:hm,backgroundCube_vert:um,backgroundCube_frag:dm,cube_vert:fm,cube_frag:pm,depth_vert:mm,depth_frag:gm,distanceRGBA_vert:_m,distanceRGBA_frag:xm,equirect_vert:ym,equirect_frag:vm,linedashed_vert:Mm,linedashed_frag:Sm,meshbasic_vert:Em,meshbasic_frag:Tm,meshlambert_vert:bm,meshlambert_frag:Am,meshmatcap_vert:wm,meshmatcap_frag:Rm,meshnormal_vert:Cm,meshnormal_frag:Lm,meshphong_vert:Pm,meshphong_frag:Nm,meshphysical_vert:Dm,meshphysical_frag:Im,meshtoon_vert:Um,meshtoon_frag:Om,points_vert:Fm,points_frag:zm,shadow_vert:Bm,shadow_frag:km,sprite_vert:Hm,sprite_frag:Gm},ce={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new Te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},sn={basic:{uniforms:Lt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Lt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ce(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Lt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Lt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Lt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Ce(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Lt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Lt([ce.points,ce.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Lt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Lt([ce.common,ce.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Lt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Lt([ce.sprite,ce.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:Lt([ce.common,ce.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:Lt([ce.lights,ce.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};sn.physical={uniforms:Lt([sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const Xs={r:0,b:0,g:0},Kn=new cn,Vm=new Xe;function Wm(r,e,t,n,i,s,o){const a=new Ce(0);let c=s===!0?0:1,l,h,u=null,d=0,m=null;function g(p,f){let M=!1,x=f.isScene===!0?f.background:null;x&&x.isTexture&&(x=(f.backgroundBlurriness>0?t:e).get(x)),x===null?_(a,c):x&&x.isColor&&(_(x,1),M=!0);const E=r.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||M)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Ur)?(h===void 0&&(h=new Nt(new qi(1,1,1),new Hn({name:"BackgroundCubeMaterial",uniforms:Gi(sn.backgroundCube.uniforms),vertexShader:sn.backgroundCube.vertexShader,fragmentShader:sn.backgroundCube.fragmentShader,side:Dt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,R,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Kn.copy(f.backgroundRotation),Kn.x*=-1,Kn.y*=-1,Kn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Kn.y*=-1,Kn.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Vm.makeRotationFromEuler(Kn)),h.material.toneMapped=Je.getTransfer(x.colorSpace)!==st,(u!==x||d!==x.version||m!==r.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,m=r.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Nt(new Fr(2,2),new Hn({name:"BackgroundMaterial",uniforms:Gi(sn.background.uniforms),vertexShader:sn.background.vertexShader,fragmentShader:sn.background.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=Je.getTransfer(x.colorSpace)!==st,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||m!==r.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,m=r.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function _(p,f){p.getRGB(Xs,Vh(r)),n.buffers.color.setClear(Xs.r,Xs.g,Xs.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(p,f=1){a.set(p),c=f,_(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,_(a,c)},render:g}}function Xm(r,e,t,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},c=p(null);let l=c,h=!1;function u(N,X,H,J,V){let Y=!1;if(o){const $=_(J,H,X);l!==$&&(l=$,m(l.object)),Y=f(N,J,H,V),Y&&M(N,J,H,V)}else{const $=X.wireframe===!0;(l.geometry!==J.id||l.program!==H.id||l.wireframe!==$)&&(l.geometry=J.id,l.program=H.id,l.wireframe=$,Y=!0)}V!==null&&t.update(V,r.ELEMENT_ARRAY_BUFFER),(Y||h)&&(h=!1,U(N,X,H,J),V!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function d(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function m(N){return n.isWebGL2?r.bindVertexArray(N):s.bindVertexArrayOES(N)}function g(N){return n.isWebGL2?r.deleteVertexArray(N):s.deleteVertexArrayOES(N)}function _(N,X,H){const J=H.wireframe===!0;let V=a[N.id];V===void 0&&(V={},a[N.id]=V);let Y=V[X.id];Y===void 0&&(Y={},V[X.id]=Y);let $=Y[J];return $===void 0&&($=p(d()),Y[J]=$),$}function p(N){const X=[],H=[],J=[];for(let V=0;V<i;V++)X[V]=0,H[V]=0,J[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:H,attributeDivisors:J,object:N,attributes:{},index:null}}function f(N,X,H,J){const V=l.attributes,Y=X.attributes;let $=0;const re=H.getAttributes();for(const fe in re)if(re[fe].location>=0){const k=V[fe];let ne=Y[fe];if(ne===void 0&&(fe==="instanceMatrix"&&N.instanceMatrix&&(ne=N.instanceMatrix),fe==="instanceColor"&&N.instanceColor&&(ne=N.instanceColor)),k===void 0||k.attribute!==ne||ne&&k.data!==ne.data)return!0;$++}return l.attributesNum!==$||l.index!==J}function M(N,X,H,J){const V={},Y=X.attributes;let $=0;const re=H.getAttributes();for(const fe in re)if(re[fe].location>=0){let k=Y[fe];k===void 0&&(fe==="instanceMatrix"&&N.instanceMatrix&&(k=N.instanceMatrix),fe==="instanceColor"&&N.instanceColor&&(k=N.instanceColor));const ne={};ne.attribute=k,k&&k.data&&(ne.data=k.data),V[fe]=ne,$++}l.attributes=V,l.attributesNum=$,l.index=J}function x(){const N=l.newAttributes;for(let X=0,H=N.length;X<H;X++)N[X]=0}function E(N){P(N,0)}function P(N,X){const H=l.newAttributes,J=l.enabledAttributes,V=l.attributeDivisors;H[N]=1,J[N]===0&&(r.enableVertexAttribArray(N),J[N]=1),V[N]!==X&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,X),V[N]=X)}function R(){const N=l.newAttributes,X=l.enabledAttributes;for(let H=0,J=X.length;H<J;H++)X[H]!==N[H]&&(r.disableVertexAttribArray(H),X[H]=0)}function b(N,X,H,J,V,Y,$){$===!0?r.vertexAttribIPointer(N,X,H,V,Y):r.vertexAttribPointer(N,X,H,J,V,Y)}function U(N,X,H,J){if(n.isWebGL2===!1&&(N.isInstancedMesh||J.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const V=J.attributes,Y=H.getAttributes(),$=X.defaultAttributeValues;for(const re in Y){const fe=Y[re];if(fe.location>=0){let Le=V[re];if(Le===void 0&&(re==="instanceMatrix"&&N.instanceMatrix&&(Le=N.instanceMatrix),re==="instanceColor"&&N.instanceColor&&(Le=N.instanceColor)),Le!==void 0){const k=Le.normalized,ne=Le.itemSize,de=t.get(Le);if(de===void 0)continue;const we=de.buffer,ye=de.type,pe=de.bytesPerElement,je=n.isWebGL2===!0&&(ye===r.INT||ye===r.UNSIGNED_INT||Le.gpuType===vh);if(Le.isInterleavedBufferAttribute){const Ae=Le.data,I=Ae.stride,dt=Le.offset;if(Ae.isInstancedInterleavedBuffer){for(let Me=0;Me<fe.locationSize;Me++)P(fe.location+Me,Ae.meshPerAttribute);N.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=Ae.meshPerAttribute*Ae.count)}else for(let Me=0;Me<fe.locationSize;Me++)E(fe.location+Me);r.bindBuffer(r.ARRAY_BUFFER,we);for(let Me=0;Me<fe.locationSize;Me++)b(fe.location+Me,ne/fe.locationSize,ye,k,I*pe,(dt+ne/fe.locationSize*Me)*pe,je)}else{if(Le.isInstancedBufferAttribute){for(let Ae=0;Ae<fe.locationSize;Ae++)P(fe.location+Ae,Le.meshPerAttribute);N.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=Le.meshPerAttribute*Le.count)}else for(let Ae=0;Ae<fe.locationSize;Ae++)E(fe.location+Ae);r.bindBuffer(r.ARRAY_BUFFER,we);for(let Ae=0;Ae<fe.locationSize;Ae++)b(fe.location+Ae,ne/fe.locationSize,ye,k,ne*pe,ne/fe.locationSize*Ae*pe,je)}}else if($!==void 0){const k=$[re];if(k!==void 0)switch(k.length){case 2:r.vertexAttrib2fv(fe.location,k);break;case 3:r.vertexAttrib3fv(fe.location,k);break;case 4:r.vertexAttrib4fv(fe.location,k);break;default:r.vertexAttrib1fv(fe.location,k)}}}}R()}function W(){te();for(const N in a){const X=a[N];for(const H in X){const J=X[H];for(const V in J)g(J[V].object),delete J[V];delete X[H]}delete a[N]}}function v(N){if(a[N.id]===void 0)return;const X=a[N.id];for(const H in X){const J=X[H];for(const V in J)g(J[V].object),delete J[V];delete X[H]}delete a[N.id]}function w(N){for(const X in a){const H=a[X];if(H[N.id]===void 0)continue;const J=H[N.id];for(const V in J)g(J[V].object),delete J[V];delete H[N.id]}}function te(){Z(),h=!0,l!==c&&(l=c,m(l.object))}function Z(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:te,resetDefaultState:Z,dispose:W,releaseStatesOfGeometry:v,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:E,disableUnusedAttributes:R}}function qm(r,e,t,n){const i=n.isWebGL2;let s;function o(h){s=h}function a(h,u){r.drawArrays(s,h,u),t.update(u,s,1)}function c(h,u,d){if(d===0)return;let m,g;if(i)m=r,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](s,h,u,d),t.update(u,s,d)}function l(h,u,d){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{m.multiDrawArraysWEBGL(s,h,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_];t.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function Ym(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(b){if(b==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),p=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),f=r.getParameter(r.MAX_VARYING_VECTORS),M=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,E=o||e.has("OES_texture_float"),P=x&&E,R=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:f,maxFragmentUniforms:M,vertexTextures:x,floatFragmentTextures:E,floatVertexTextures:P,maxSamples:R}}function jm(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Dn,a=new We,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const m=u.length!==0||d||n!==0||i;return i=d,n=u.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,m){const g=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,f=r.get(u);if(!i||g===null||g.length===0||s&&!p)s?h(null):l();else{const M=s?0:n,x=M*4;let E=f.clippingState||null;c.value=E,E=h(g,d,x,m);for(let P=0;P!==x;++P)E[P]=t[P];f.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,m,g){const _=u!==null?u.length:0;let p=null;if(_!==0){if(p=c.value,g!==!0||p===null){const f=m+_*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<f)&&(p=new Float32Array(f));for(let x=0,E=m;x!==_;++x,E+=4)o.copy(u[x]).applyMatrix4(M,a),o.normal.toArray(p,E),p[E+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function Km(r){let e=new WeakMap;function t(o,a){return a===ta?o.mapping=Oi:a===na&&(o.mapping=Fi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ta||a===na)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new rf(c.height);return l.fromEquirectangularTexture(r,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Ma extends Wh{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Li=4,kc=[.125,.215,.35,.446,.526,.582],ei=20,yo=new Ma,Hc=new Ce;let vo=null,Mo=0,So=0;const Zn=(1+Math.sqrt(5))/2,Ti=1/Zn,Gc=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,Zn,Ti),new L(0,Zn,-Ti),new L(Ti,0,Zn),new L(-Ti,0,Zn),new L(Zn,Ti,0),new L(-Zn,Ti,0)];class Vc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){vo=this._renderer.getRenderTarget(),Mo=this._renderer.getActiveCubeFace(),So=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(vo,Mo,So),e.scissorTest=!1,qs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Oi||e.mapping===Fi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vo=this._renderer.getRenderTarget(),Mo=this._renderer.getActiveCubeFace(),So=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:wt,minFilter:wt,generateMipmaps:!1,type:gs,format:qt,colorSpace:St,depthBuffer:!1},i=Wc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wc(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Jm(s)),this._blurMaterial=$m(s,e,t)}return i}_compileMaterial(e){const t=new Nt(this._lodPlanes[0],e);this._renderer.compile(t,yo)}_sceneToCubeUV(e,t,n,i){const a=new Rt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Hc),h.toneMapping=Bn,h.autoClear=!1;const m=new on({name:"PMREM.Background",side:Dt,depthWrite:!1,depthTest:!1}),g=new Nt(new qi,m);let _=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy(Hc),_=!0);for(let f=0;f<6;f++){const M=f%3;M===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):M===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));const x=this._cubeSize;qs(i,M*x,f>2?x:0,x,x),h.setRenderTarget(i),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Oi||e.mapping===Fi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=qc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xc());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Nt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;qs(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,yo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Gc[(i-1)%Gc.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Nt(this._lodPlanes[i],l),d=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*ei-1),_=s/g,p=isFinite(s)?1+Math.floor(h*_):ei;p>ei&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ei}`);const f=[];let M=0;for(let b=0;b<ei;++b){const U=b/_,W=Math.exp(-U*U/2);f.push(W),b===0?M+=W:b<p&&(M+=2*W)}for(let b=0;b<f.length;b++)f[b]=f[b]/M;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;const E=this._sizeLods[i],P=3*E*(i>x-Li?i-x+Li:0),R=4*(this._cubeSize-E);qs(t,P,R,3*E,2*E),c.setRenderTarget(t),c.render(u,yo)}}function Jm(r){const e=[],t=[],n=[];let i=r;const s=r-Li+1+kc.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>r-Li?c=kc[o-r+Li-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,_=3,p=2,f=1,M=new Float32Array(_*g*m),x=new Float32Array(p*g*m),E=new Float32Array(f*g*m);for(let R=0;R<m;R++){const b=R%3*2/3-1,U=R>2?0:-1,W=[b,U,0,b+2/3,U,0,b+2/3,U+1,0,b,U,0,b+2/3,U+1,0,b,U+1,0];M.set(W,_*g*R),x.set(d,p*g*R);const v=[R,R,R,R,R,R];E.set(v,f*g*R)}const P=new It;P.setAttribute("position",new Mt(M,_)),P.setAttribute("uv",new Mt(x,p)),P.setAttribute("faceIndex",new Mt(E,f)),e.push(P),i>Li&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Wc(r,e,t){const n=new si(r,e,t);return n.texture.mapping=Ur,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function qs(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function $m(r,e,t){const n=new Float32Array(ei),i=new L(0,1,0);return new Hn({name:"SphericalGaussianBlur",defines:{n:ei,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Sa(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Xc(){return new Hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sa(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function qc(){return new Hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Sa(){return`

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
	`}function Zm(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===ta||c===na,h=c===Oi||c===Fi;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new Vc(r)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{const u=a.image;if(l&&u&&u.height>0||h&&u&&i(u)){t===null&&(t=new Vc(r));const d=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Qm(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function eg(r,e,t,n){const i={},s=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let p=0,f=_.length;p<f;p++)e.remove(_[p])}d.removeEventListener("dispose",o),delete i[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)e.update(d[g],r.ARRAY_BUFFER);const m=u.morphAttributes;for(const g in m){const _=m[g];for(let p=0,f=_.length;p<f;p++)e.update(_[p],r.ARRAY_BUFFER)}}function l(u){const d=[],m=u.index,g=u.attributes.position;let _=0;if(m!==null){const M=m.array;_=m.version;for(let x=0,E=M.length;x<E;x+=3){const P=M[x+0],R=M[x+1],b=M[x+2];d.push(P,R,R,b,b,P)}}else if(g!==void 0){const M=g.array;_=g.version;for(let x=0,E=M.length/3-1;x<E;x+=3){const P=x+0,R=x+1,b=x+2;d.push(P,R,R,b,b,P)}}else return;const p=new(Dh(d)?Gh:Hh)(d,1);p.version=_;const f=s.get(u);f&&e.remove(f),s.set(u,p)}function h(u){const d=s.get(u);if(d){const m=u.index;m!==null&&d.version<m.version&&l(u)}else l(u);return s.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function tg(r,e,t,n){const i=n.isWebGL2;let s;function o(m){s=m}let a,c;function l(m){a=m.type,c=m.bytesPerElement}function h(m,g){r.drawElements(s,g,a,m*c),t.update(g,s,1)}function u(m,g,_){if(_===0)return;let p,f;if(i)p=r,f="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](s,g,a,m*c,_),t.update(g,s,_)}function d(m,g,_){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<_;f++)this.render(m[f]/c,g[f]);else{p.multiDrawElementsWEBGL(s,g,0,a,m,0,_);let f=0;for(let M=0;M<_;M++)f+=g[M];t.update(f,s,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function ng(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function ig(r,e){return r[0]-e[0]}function sg(r,e){return Math.abs(e[1])-Math.abs(r[1])}function rg(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new tt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,u){const d=l.morphTargetInfluences;if(e.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let p=s.get(h);if(p===void 0||p.count!==_){let Z=function(){w.dispose(),s.delete(h),h.removeEventListener("dispose",Z)};var m=Z;p!==void 0&&p.texture.dispose();const f=h.morphAttributes.position!==void 0,M=h.morphAttributes.normal!==void 0,x=h.morphAttributes.color!==void 0,E=h.morphAttributes.position||[],P=h.morphAttributes.normal||[],R=h.morphAttributes.color||[];let b=0;f===!0&&(b=1),M===!0&&(b=2),x===!0&&(b=3);let U=h.attributes.position.count*b,W=1;U>e.maxTextureSize&&(W=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const v=new Float32Array(U*W*4*_),w=new Fh(v,U,W,_);w.type=$t,w.needsUpdate=!0;const te=b*4;for(let N=0;N<_;N++){const X=E[N],H=P[N],J=R[N],V=U*W*4*N;for(let Y=0;Y<X.count;Y++){const $=Y*te;f===!0&&(o.fromBufferAttribute(X,Y),v[V+$+0]=o.x,v[V+$+1]=o.y,v[V+$+2]=o.z,v[V+$+3]=0),M===!0&&(o.fromBufferAttribute(H,Y),v[V+$+4]=o.x,v[V+$+5]=o.y,v[V+$+6]=o.z,v[V+$+7]=0),x===!0&&(o.fromBufferAttribute(J,Y),v[V+$+8]=o.x,v[V+$+9]=o.y,v[V+$+10]=o.z,v[V+$+11]=J.itemSize===4?o.w:1)}}p={count:_,texture:w,size:new Te(U,W)},s.set(h,p),h.addEventListener("dispose",Z)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)u.getUniforms().setValue(r,"morphTexture",l.morphTexture,t);else{let f=0;for(let x=0;x<d.length;x++)f+=d[x];const M=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(r,"morphTargetBaseInfluence",M),u.getUniforms().setValue(r,"morphTargetInfluences",d)}u.getUniforms().setValue(r,"morphTargetsTexture",p.texture,t),u.getUniforms().setValue(r,"morphTargetsTextureSize",p.size)}else{const g=d===void 0?0:d.length;let _=n[h.id];if(_===void 0||_.length!==g){_=[];for(let E=0;E<g;E++)_[E]=[E,0];n[h.id]=_}for(let E=0;E<g;E++){const P=_[E];P[0]=E,P[1]=d[E]}_.sort(sg);for(let E=0;E<8;E++)E<g&&_[E][1]?(a[E][0]=_[E][0],a[E][1]=_[E][1]):(a[E][0]=Number.MAX_SAFE_INTEGER,a[E][1]=0);a.sort(ig);const p=h.morphAttributes.position,f=h.morphAttributes.normal;let M=0;for(let E=0;E<8;E++){const P=a[E],R=P[0],b=P[1];R!==Number.MAX_SAFE_INTEGER&&b?(p&&h.getAttribute("morphTarget"+E)!==p[R]&&h.setAttribute("morphTarget"+E,p[R]),f&&h.getAttribute("morphNormal"+E)!==f[R]&&h.setAttribute("morphNormal"+E,f[R]),i[E]=b,M+=b):(p&&h.hasAttribute("morphTarget"+E)===!0&&h.deleteAttribute("morphTarget"+E),f&&h.hasAttribute("morphNormal"+E)===!0&&h.deleteAttribute("morphNormal"+E),i[E]=0)}const x=h.morphTargetsRelative?1:1-M;u.getUniforms().setValue(r,"morphTargetBaseInfluence",x),u.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:c}}function og(r,e,t,n){let i=new WeakMap;function s(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}class Yh extends xt{constructor(e,t,n,i,s,o,a,c,l,h){if(h=h!==void 0?h:ii,h!==ii&&h!==Bi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ii&&(n=On),n===void 0&&h===Bi&&(n=ni),super(null,i,s,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:_t,this.minFilter=c!==void 0?c:_t,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const jh=new xt,Kh=new Yh(1,1);Kh.compareFunction=Lh;const Jh=new Fh,$h=new Hd,Zh=new Xh,Yc=[],jc=[],Kc=new Float32Array(16),Jc=new Float32Array(9),$c=new Float32Array(4);function Yi(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Yc[i];if(s===void 0&&(s=new Float32Array(i),Yc[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function ft(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function pt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function zr(r,e){let t=jc[e];t===void 0&&(t=new Int32Array(e),jc[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function ag(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function cg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;r.uniform2fv(this.addr,e),pt(t,e)}}function lg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ft(t,e))return;r.uniform3fv(this.addr,e),pt(t,e)}}function hg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;r.uniform4fv(this.addr,e),pt(t,e)}}function ug(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),pt(t,e)}else{if(ft(t,n))return;$c.set(n),r.uniformMatrix2fv(this.addr,!1,$c),pt(t,n)}}function dg(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),pt(t,e)}else{if(ft(t,n))return;Jc.set(n),r.uniformMatrix3fv(this.addr,!1,Jc),pt(t,n)}}function fg(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),pt(t,e)}else{if(ft(t,n))return;Kc.set(n),r.uniformMatrix4fv(this.addr,!1,Kc),pt(t,n)}}function pg(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function mg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;r.uniform2iv(this.addr,e),pt(t,e)}}function gg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;r.uniform3iv(this.addr,e),pt(t,e)}}function _g(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;r.uniform4iv(this.addr,e),pt(t,e)}}function xg(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function yg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;r.uniform2uiv(this.addr,e),pt(t,e)}}function vg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;r.uniform3uiv(this.addr,e),pt(t,e)}}function Mg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;r.uniform4uiv(this.addr,e),pt(t,e)}}function Sg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?Kh:jh;t.setTexture2D(e||s,i)}function Eg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||$h,i)}function Tg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Zh,i)}function bg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Jh,i)}function Ag(r){switch(r){case 5126:return ag;case 35664:return cg;case 35665:return lg;case 35666:return hg;case 35674:return ug;case 35675:return dg;case 35676:return fg;case 5124:case 35670:return pg;case 35667:case 35671:return mg;case 35668:case 35672:return gg;case 35669:case 35673:return _g;case 5125:return xg;case 36294:return yg;case 36295:return vg;case 36296:return Mg;case 35678:case 36198:case 36298:case 36306:case 35682:return Sg;case 35679:case 36299:case 36307:return Eg;case 35680:case 36300:case 36308:case 36293:return Tg;case 36289:case 36303:case 36311:case 36292:return bg}}function wg(r,e){r.uniform1fv(this.addr,e)}function Rg(r,e){const t=Yi(e,this.size,2);r.uniform2fv(this.addr,t)}function Cg(r,e){const t=Yi(e,this.size,3);r.uniform3fv(this.addr,t)}function Lg(r,e){const t=Yi(e,this.size,4);r.uniform4fv(this.addr,t)}function Pg(r,e){const t=Yi(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Ng(r,e){const t=Yi(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Dg(r,e){const t=Yi(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Ig(r,e){r.uniform1iv(this.addr,e)}function Ug(r,e){r.uniform2iv(this.addr,e)}function Og(r,e){r.uniform3iv(this.addr,e)}function Fg(r,e){r.uniform4iv(this.addr,e)}function zg(r,e){r.uniform1uiv(this.addr,e)}function Bg(r,e){r.uniform2uiv(this.addr,e)}function kg(r,e){r.uniform3uiv(this.addr,e)}function Hg(r,e){r.uniform4uiv(this.addr,e)}function Gg(r,e,t){const n=this.cache,i=e.length,s=zr(t,i);ft(n,s)||(r.uniform1iv(this.addr,s),pt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||jh,s[o])}function Vg(r,e,t){const n=this.cache,i=e.length,s=zr(t,i);ft(n,s)||(r.uniform1iv(this.addr,s),pt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||$h,s[o])}function Wg(r,e,t){const n=this.cache,i=e.length,s=zr(t,i);ft(n,s)||(r.uniform1iv(this.addr,s),pt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Zh,s[o])}function Xg(r,e,t){const n=this.cache,i=e.length,s=zr(t,i);ft(n,s)||(r.uniform1iv(this.addr,s),pt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Jh,s[o])}function qg(r){switch(r){case 5126:return wg;case 35664:return Rg;case 35665:return Cg;case 35666:return Lg;case 35674:return Pg;case 35675:return Ng;case 35676:return Dg;case 5124:case 35670:return Ig;case 35667:case 35671:return Ug;case 35668:case 35672:return Og;case 35669:case 35673:return Fg;case 5125:return zg;case 36294:return Bg;case 36295:return kg;case 36296:return Hg;case 35678:case 36198:case 36298:case 36306:case 35682:return Gg;case 35679:case 36299:case 36307:return Vg;case 35680:case 36300:case 36308:case 36293:return Wg;case 36289:case 36303:case 36311:case 36292:return Xg}}class Yg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ag(t.type)}}class jg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=qg(t.type)}}class Kg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Eo=/(\w+)(\])?(\[|\.)?/g;function Zc(r,e){r.seq.push(e),r.map[e.id]=e}function Jg(r,e,t){const n=r.name,i=n.length;for(Eo.lastIndex=0;;){const s=Eo.exec(n),o=Eo.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Zc(t,l===void 0?new Yg(a,r,e):new jg(a,r,e));break}else{let u=t.map[a];u===void 0&&(u=new Kg(a),Zc(t,u)),t=u}}}class Mr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);Jg(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Qc(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const $g=37297;let Zg=0;function Qg(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function e0(r){const e=Je.getPrimaries(Je.workingColorSpace),t=Je.getPrimaries(r);let n;switch(e===t?n="":e===Lr&&t===Cr?n="LinearDisplayP3ToLinearSRGB":e===Cr&&t===Lr&&(n="LinearSRGBToLinearDisplayP3"),r){case St:case Or:return[n,"LinearTransferOETF"];case Pt:case xa:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function el(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Qg(r.getShaderSource(e),o)}else return i}function t0(r,e){const t=e0(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function n0(r,e){let t;switch(e){case Ku:t="Linear";break;case Ju:t="Reinhard";break;case $u:t="OptimizedCineon";break;case Zu:t="ACESFilmic";break;case ed:t="AgX";break;case td:t="Neutral";break;case Qu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function i0(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.alphaToCoverage||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Pi).join(`
`)}function s0(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Pi).join(`
`)}function r0(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function o0(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Pi(r){return r!==""}function tl(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function nl(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const a0=/^[ \t]*#include +<([\w\d./]+)>/gm;function la(r){return r.replace(a0,l0)}const c0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function l0(r,e){let t=ke[e];if(t===void 0){const n=c0.get(e);if(n!==void 0)t=ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return la(t)}const h0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function il(r){return r.replace(h0,u0)}function u0(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function sl(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	`;return r.isWebGL2&&(e+=`precision ${r.precision} sampler3D;
		precision ${r.precision} sampler2DArray;
		precision ${r.precision} sampler2DShadow;
		precision ${r.precision} samplerCubeShadow;
		precision ${r.precision} sampler2DArrayShadow;
		precision ${r.precision} isampler2D;
		precision ${r.precision} isampler3D;
		precision ${r.precision} isamplerCube;
		precision ${r.precision} isampler2DArray;
		precision ${r.precision} usampler2D;
		precision ${r.precision} usampler3D;
		precision ${r.precision} usamplerCube;
		precision ${r.precision} usampler2DArray;
		`),r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function d0(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===_h?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Eu?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===yn&&(e="SHADOWMAP_TYPE_VSM"),e}function f0(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Oi:case Fi:e="ENVMAP_TYPE_CUBE";break;case Ur:e="ENVMAP_TYPE_CUBE_UV";break}return e}function p0(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Fi:e="ENVMAP_MODE_REFRACTION";break}return e}function m0(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case xh:e="ENVMAP_BLENDING_MULTIPLY";break;case Yu:e="ENVMAP_BLENDING_MIX";break;case ju:e="ENVMAP_BLENDING_ADD";break}return e}function g0(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function _0(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=d0(t),l=f0(t),h=p0(t),u=m0(t),d=g0(t),m=t.isWebGL2?"":i0(t),g=s0(t),_=r0(s),p=i.createProgram();let f,M,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Pi).join(`
`),f.length>0&&(f+=`
`),M=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Pi).join(`
`),M.length>0&&(M+=`
`)):(f=[sl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pi).join(`
`),M=[m,sl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Bn?"#define TONE_MAPPING":"",t.toneMapping!==Bn?ke.tonemapping_pars_fragment:"",t.toneMapping!==Bn?n0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,t0("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Pi).join(`
`)),o=la(o),o=tl(o,t),o=nl(o,t),a=la(a),a=tl(a,t),a=nl(a,t),o=il(o),a=il(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,M=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===vc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const E=x+f+o,P=x+M+a,R=Qc(i,i.VERTEX_SHADER,E),b=Qc(i,i.FRAGMENT_SHADER,P);i.attachShader(p,R),i.attachShader(p,b),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function U(te){if(r.debug.checkShaderErrors){const Z=i.getProgramInfoLog(p).trim(),N=i.getShaderInfoLog(R).trim(),X=i.getShaderInfoLog(b).trim();let H=!0,J=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(H=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,p,R,b);else{const V=el(i,R,"vertex"),Y=el(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Material Name: `+te.name+`
Material Type: `+te.type+`

Program Info Log: `+Z+`
`+V+`
`+Y)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(N===""||X==="")&&(J=!1);J&&(te.diagnostics={runnable:H,programLog:Z,vertexShader:{log:N,prefix:f},fragmentShader:{log:X,prefix:M}})}i.deleteShader(R),i.deleteShader(b),W=new Mr(i,p),v=o0(i,p)}let W;this.getUniforms=function(){return W===void 0&&U(this),W};let v;this.getAttributes=function(){return v===void 0&&U(this),v};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=i.getProgramParameter(p,$g)),w},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Zg++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=R,this.fragmentShader=b,this}let x0=0;class y0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new v0(e),t.set(e,n)),n}}class v0{constructor(e){this.id=x0++,this.code=e,this.usedTimes=0}}function M0(r,e,t,n,i,s,o){const a=new Bh,c=new y0,l=new Set,h=[],u=i.isWebGL2,d=i.logarithmicDepthBuffer,m=i.vertexTextures;let g=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return l.add(v),v===0?"uv":`uv${v}`}function f(v,w,te,Z,N){const X=Z.fog,H=N.geometry,J=v.isMeshStandardMaterial?Z.environment:null,V=(v.isMeshStandardMaterial?t:e).get(v.envMap||J),Y=V&&V.mapping===Ur?V.image.height:null,$=_[v.type];v.precision!==null&&(g=i.getMaxPrecision(v.precision),g!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));const re=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,fe=re!==void 0?re.length:0;let Le=0;H.morphAttributes.position!==void 0&&(Le=1),H.morphAttributes.normal!==void 0&&(Le=2),H.morphAttributes.color!==void 0&&(Le=3);let k,ne,de,we;if($){const $e=sn[$];k=$e.vertexShader,ne=$e.fragmentShader}else k=v.vertexShader,ne=v.fragmentShader,c.update(v),de=c.getVertexShaderID(v),we=c.getFragmentShaderID(v);const ye=r.getRenderTarget(),pe=N.isInstancedMesh===!0,je=N.isBatchedMesh===!0,Ae=!!v.map,I=!!v.matcap,dt=!!V,Me=!!v.aoMap,Ue=!!v.lightMap,Se=!!v.bumpMap,qe=!!v.normalMap,Oe=!!v.displacementMap,ze=!!v.emissiveMap,nt=!!v.metalnessMap,T=!!v.roughnessMap,y=v.anisotropy>0,G=v.clearcoat>0,j=v.iridescence>0,ie=v.sheen>0,Q=v.transmission>0,Pe=y&&!!v.anisotropyMap,Ee=G&&!!v.clearcoatMap,ae=G&&!!v.clearcoatNormalMap,le=G&&!!v.clearcoatRoughnessMap,Ne=j&&!!v.iridescenceMap,oe=j&&!!v.iridescenceThicknessMap,ct=ie&&!!v.sheenColorMap,He=ie&&!!v.sheenRoughnessMap,ve=!!v.specularMap,me=!!v.specularColorMap,_e=!!v.specularIntensityMap,A=Q&&!!v.transmissionMap,K=Q&&!!v.thicknessMap,ge=!!v.gradientMap,C=!!v.alphaMap,se=v.alphaTest>0,O=!!v.alphaHash,ee=!!v.extensions;let he=Bn;v.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(he=r.toneMapping);const Ve={isWebGL2:u,shaderID:$,shaderType:v.type,shaderName:v.name,vertexShader:k,fragmentShader:ne,defines:v.defines,customVertexShaderID:de,customFragmentShaderID:we,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,batching:je,instancing:pe,instancingColor:pe&&N.instanceColor!==null,instancingMorph:pe&&N.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:ye===null?r.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:St,alphaToCoverage:!!v.alphaToCoverage,map:Ae,matcap:I,envMap:dt,envMapMode:dt&&V.mapping,envMapCubeUVHeight:Y,aoMap:Me,lightMap:Ue,bumpMap:Se,normalMap:qe,displacementMap:m&&Oe,emissiveMap:ze,normalMapObjectSpace:qe&&v.normalMapType===pd,normalMapTangentSpace:qe&&v.normalMapType===Ch,metalnessMap:nt,roughnessMap:T,anisotropy:y,anisotropyMap:Pe,clearcoat:G,clearcoatMap:Ee,clearcoatNormalMap:ae,clearcoatRoughnessMap:le,iridescence:j,iridescenceMap:Ne,iridescenceThicknessMap:oe,sheen:ie,sheenColorMap:ct,sheenRoughnessMap:He,specularMap:ve,specularColorMap:me,specularIntensityMap:_e,transmission:Q,transmissionMap:A,thicknessMap:K,gradientMap:ge,opaque:v.transparent===!1&&v.blending===Ni&&v.alphaToCoverage===!1,alphaMap:C,alphaTest:se,alphaHash:O,combine:v.combine,mapUv:Ae&&p(v.map.channel),aoMapUv:Me&&p(v.aoMap.channel),lightMapUv:Ue&&p(v.lightMap.channel),bumpMapUv:Se&&p(v.bumpMap.channel),normalMapUv:qe&&p(v.normalMap.channel),displacementMapUv:Oe&&p(v.displacementMap.channel),emissiveMapUv:ze&&p(v.emissiveMap.channel),metalnessMapUv:nt&&p(v.metalnessMap.channel),roughnessMapUv:T&&p(v.roughnessMap.channel),anisotropyMapUv:Pe&&p(v.anisotropyMap.channel),clearcoatMapUv:Ee&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:ae&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Ne&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:ct&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:He&&p(v.sheenRoughnessMap.channel),specularMapUv:ve&&p(v.specularMap.channel),specularColorMapUv:me&&p(v.specularColorMap.channel),specularIntensityMapUv:_e&&p(v.specularIntensityMap.channel),transmissionMapUv:A&&p(v.transmissionMap.channel),thicknessMapUv:K&&p(v.thicknessMap.channel),alphaMapUv:C&&p(v.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(qe||y),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!H.attributes.uv&&(Ae||C),fog:!!X,useFog:v.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:N.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:Le,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&te.length>0,shadowMapType:r.shadowMap.type,toneMapping:he,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Ae&&v.map.isVideoTexture===!0&&Je.getTransfer(v.map.colorSpace)===st,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===rn,flipSided:v.side===Dt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:ee&&v.extensions.derivatives===!0,extensionFragDepth:ee&&v.extensions.fragDepth===!0,extensionDrawBuffers:ee&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:ee&&v.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ee&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ee&&v.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ve.vertexUv1s=l.has(1),Ve.vertexUv2s=l.has(2),Ve.vertexUv3s=l.has(3),l.clear(),Ve}function M(v){const w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(const te in v.defines)w.push(te),w.push(v.defines[te]);return v.isRawShaderMaterial===!1&&(x(w,v),E(w,v),w.push(r.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function x(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function E(v,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.instancingMorph&&a.enable(4),w.matcap&&a.enable(5),w.envMap&&a.enable(6),w.normalMapObjectSpace&&a.enable(7),w.normalMapTangentSpace&&a.enable(8),w.clearcoat&&a.enable(9),w.iridescence&&a.enable(10),w.alphaTest&&a.enable(11),w.vertexColors&&a.enable(12),w.vertexAlphas&&a.enable(13),w.vertexUv1s&&a.enable(14),w.vertexUv2s&&a.enable(15),w.vertexUv3s&&a.enable(16),w.vertexTangents&&a.enable(17),w.anisotropy&&a.enable(18),w.alphaHash&&a.enable(19),w.batching&&a.enable(20),v.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.alphaToCoverage&&a.enable(20),v.push(a.mask)}function P(v){const w=_[v.type];let te;if(w){const Z=sn[w];te=ef.clone(Z.uniforms)}else te=v.uniforms;return te}function R(v,w){let te;for(let Z=0,N=h.length;Z<N;Z++){const X=h[Z];if(X.cacheKey===w){te=X,++te.usedTimes;break}}return te===void 0&&(te=new _0(r,w,v,s),h.push(te)),te}function b(v){if(--v.usedTimes===0){const w=h.indexOf(v);h[w]=h[h.length-1],h.pop(),v.destroy()}}function U(v){c.remove(v)}function W(){c.dispose()}return{getParameters:f,getProgramCacheKey:M,getUniforms:P,acquireProgram:R,releaseProgram:b,releaseShaderCache:U,programs:h,dispose:W}}function S0(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function E0(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function rl(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function ol(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(u,d,m,g,_,p){let f=r[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:m,groupOrder:g,renderOrder:u.renderOrder,z:_,group:p},r[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=m,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=p),e++,f}function a(u,d,m,g,_,p){const f=o(u,d,m,g,_,p);m.transmission>0?n.push(f):m.transparent===!0?i.push(f):t.push(f)}function c(u,d,m,g,_,p){const f=o(u,d,m,g,_,p);m.transmission>0?n.unshift(f):m.transparent===!0?i.unshift(f):t.unshift(f)}function l(u,d){t.length>1&&t.sort(u||E0),n.length>1&&n.sort(d||rl),i.length>1&&i.sort(d||rl)}function h(){for(let u=e,d=r.length;u<d;u++){const m=r[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:c,finish:h,sort:l}}function T0(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new ol,r.set(n,[o])):i>=s.length?(o=new ol,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function b0(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Ce};break;case"SpotLight":t={position:new L,direction:new L,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":t={color:new Ce,position:new L,halfWidth:new L,halfHeight:new L};break}return r[e.id]=t,t}}}function A0(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let w0=0;function R0(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function C0(r,e){const t=new b0,n=A0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new L);const s=new L,o=new Xe,a=new Xe;function c(h,u){let d=0,m=0,g=0;for(let te=0;te<9;te++)i.probe[te].set(0,0,0);let _=0,p=0,f=0,M=0,x=0,E=0,P=0,R=0,b=0,U=0,W=0;h.sort(R0);const v=u===!0?Math.PI:1;for(let te=0,Z=h.length;te<Z;te++){const N=h[te],X=N.color,H=N.intensity,J=N.distance,V=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)d+=X.r*H*v,m+=X.g*H*v,g+=X.b*H*v;else if(N.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(N.sh.coefficients[Y],H);W++}else if(N.isDirectionalLight){const Y=t.get(N);if(Y.color.copy(N.color).multiplyScalar(N.intensity*v),N.castShadow){const $=N.shadow,re=n.get(N);re.shadowBias=$.bias,re.shadowNormalBias=$.normalBias,re.shadowRadius=$.radius,re.shadowMapSize=$.mapSize,i.directionalShadow[_]=re,i.directionalShadowMap[_]=V,i.directionalShadowMatrix[_]=N.shadow.matrix,E++}i.directional[_]=Y,_++}else if(N.isSpotLight){const Y=t.get(N);Y.position.setFromMatrixPosition(N.matrixWorld),Y.color.copy(X).multiplyScalar(H*v),Y.distance=J,Y.coneCos=Math.cos(N.angle),Y.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),Y.decay=N.decay,i.spot[f]=Y;const $=N.shadow;if(N.map&&(i.spotLightMap[b]=N.map,b++,$.updateMatrices(N),N.castShadow&&U++),i.spotLightMatrix[f]=$.matrix,N.castShadow){const re=n.get(N);re.shadowBias=$.bias,re.shadowNormalBias=$.normalBias,re.shadowRadius=$.radius,re.shadowMapSize=$.mapSize,i.spotShadow[f]=re,i.spotShadowMap[f]=V,R++}f++}else if(N.isRectAreaLight){const Y=t.get(N);Y.color.copy(X).multiplyScalar(H),Y.halfWidth.set(N.width*.5,0,0),Y.halfHeight.set(0,N.height*.5,0),i.rectArea[M]=Y,M++}else if(N.isPointLight){const Y=t.get(N);if(Y.color.copy(N.color).multiplyScalar(N.intensity*v),Y.distance=N.distance,Y.decay=N.decay,N.castShadow){const $=N.shadow,re=n.get(N);re.shadowBias=$.bias,re.shadowNormalBias=$.normalBias,re.shadowRadius=$.radius,re.shadowMapSize=$.mapSize,re.shadowCameraNear=$.camera.near,re.shadowCameraFar=$.camera.far,i.pointShadow[p]=re,i.pointShadowMap[p]=V,i.pointShadowMatrix[p]=N.shadow.matrix,P++}i.point[p]=Y,p++}else if(N.isHemisphereLight){const Y=t.get(N);Y.skyColor.copy(N.color).multiplyScalar(H*v),Y.groundColor.copy(N.groundColor).multiplyScalar(H*v),i.hemi[x]=Y,x++}}M>0&&(e.isWebGL2?r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=m,i.ambient[2]=g;const w=i.hash;(w.directionalLength!==_||w.pointLength!==p||w.spotLength!==f||w.rectAreaLength!==M||w.hemiLength!==x||w.numDirectionalShadows!==E||w.numPointShadows!==P||w.numSpotShadows!==R||w.numSpotMaps!==b||w.numLightProbes!==W)&&(i.directional.length=_,i.spot.length=f,i.rectArea.length=M,i.point.length=p,i.hemi.length=x,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=P,i.pointShadowMap.length=P,i.spotShadow.length=R,i.spotShadowMap.length=R,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=P,i.spotLightMatrix.length=R+b-U,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=U,i.numLightProbes=W,w.directionalLength=_,w.pointLength=p,w.spotLength=f,w.rectAreaLength=M,w.hemiLength=x,w.numDirectionalShadows=E,w.numPointShadows=P,w.numSpotShadows=R,w.numSpotMaps=b,w.numLightProbes=W,i.version=w0++)}function l(h,u){let d=0,m=0,g=0,_=0,p=0;const f=u.matrixWorldInverse;for(let M=0,x=h.length;M<x;M++){const E=h[M];if(E.isDirectionalLight){const P=i.directional[d];P.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(f),d++}else if(E.isSpotLight){const P=i.spot[g];P.position.setFromMatrixPosition(E.matrixWorld),P.position.applyMatrix4(f),P.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(f),g++}else if(E.isRectAreaLight){const P=i.rectArea[_];P.position.setFromMatrixPosition(E.matrixWorld),P.position.applyMatrix4(f),a.identity(),o.copy(E.matrixWorld),o.premultiply(f),a.extractRotation(o),P.halfWidth.set(E.width*.5,0,0),P.halfHeight.set(0,E.height*.5,0),P.halfWidth.applyMatrix4(a),P.halfHeight.applyMatrix4(a),_++}else if(E.isPointLight){const P=i.point[m];P.position.setFromMatrixPosition(E.matrixWorld),P.position.applyMatrix4(f),m++}else if(E.isHemisphereLight){const P=i.hemi[p];P.direction.setFromMatrixPosition(E.matrixWorld),P.direction.transformDirection(f),p++}}}return{setup:c,setupView:l,state:i}}function al(r,e){const t=new C0(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function c(u){t.setup(n,u)}function l(u){t.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function L0(r,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let c;return a===void 0?(c=new al(r,e),t.set(s,[c])):o>=a.length?(c=new al(r,e),a.push(c)):c=a[o],c}function i(){t=new WeakMap}return{get:n,dispose:i}}class P0 extends an{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class N0 extends an{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const D0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,I0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function U0(r,e,t){let n=new va;const i=new Te,s=new Te,o=new tt,a=new P0({depthPacking:fd}),c=new N0,l={},h=t.maxTextureSize,u={[Sn]:Dt,[Dt]:Sn,[rn]:rn},d=new Hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Te},radius:{value:4}},vertexShader:D0,fragmentShader:I0}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new It;g.setAttribute("position",new Mt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Nt(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_h;let f=this.type;this.render=function(R,b,U){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const W=r.getRenderTarget(),v=r.getActiveCubeFace(),w=r.getActiveMipmapLevel(),te=r.state;te.setBlending(zn),te.buffers.color.setClear(1,1,1,1),te.buffers.depth.setTest(!0),te.setScissorTest(!1);const Z=f!==yn&&this.type===yn,N=f===yn&&this.type!==yn;for(let X=0,H=R.length;X<H;X++){const J=R[X],V=J.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const Y=V.getFrameExtents();if(i.multiply(Y),s.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/Y.x),i.x=s.x*Y.x,V.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/Y.y),i.y=s.y*Y.y,V.mapSize.y=s.y)),V.map===null||Z===!0||N===!0){const re=this.type!==yn?{minFilter:_t,magFilter:_t}:{};V.map!==null&&V.map.dispose(),V.map=new si(i.x,i.y,re),V.map.texture.name=J.name+".shadowMap",V.camera.updateProjectionMatrix()}r.setRenderTarget(V.map),r.clear();const $=V.getViewportCount();for(let re=0;re<$;re++){const fe=V.getViewport(re);o.set(s.x*fe.x,s.y*fe.y,s.x*fe.z,s.y*fe.w),te.viewport(o),V.updateMatrices(J,re),n=V.getFrustum(),E(b,U,V.camera,J,this.type)}V.isPointLightShadow!==!0&&this.type===yn&&M(V,U),V.needsUpdate=!1}f=this.type,p.needsUpdate=!1,r.setRenderTarget(W,v,w)};function M(R,b){const U=e.update(_);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new si(i.x,i.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,r.setRenderTarget(R.mapPass),r.clear(),r.renderBufferDirect(b,null,U,d,_,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,r.setRenderTarget(R.map),r.clear(),r.renderBufferDirect(b,null,U,m,_,null)}function x(R,b,U,W){let v=null;const w=U.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(w!==void 0)v=w;else if(v=U.isPointLight===!0?c:a,r.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const te=v.uuid,Z=b.uuid;let N=l[te];N===void 0&&(N={},l[te]=N);let X=N[Z];X===void 0&&(X=v.clone(),N[Z]=X,b.addEventListener("dispose",P)),v=X}if(v.visible=b.visible,v.wireframe=b.wireframe,W===yn?v.side=b.shadowSide!==null?b.shadowSide:b.side:v.side=b.shadowSide!==null?b.shadowSide:u[b.side],v.alphaMap=b.alphaMap,v.alphaTest=b.alphaTest,v.map=b.map,v.clipShadows=b.clipShadows,v.clippingPlanes=b.clippingPlanes,v.clipIntersection=b.clipIntersection,v.displacementMap=b.displacementMap,v.displacementScale=b.displacementScale,v.displacementBias=b.displacementBias,v.wireframeLinewidth=b.wireframeLinewidth,v.linewidth=b.linewidth,U.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const te=r.properties.get(v);te.light=U}return v}function E(R,b,U,W,v){if(R.visible===!1)return;if(R.layers.test(b.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&v===yn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,R.matrixWorld);const Z=e.update(R),N=R.material;if(Array.isArray(N)){const X=Z.groups;for(let H=0,J=X.length;H<J;H++){const V=X[H],Y=N[V.materialIndex];if(Y&&Y.visible){const $=x(R,Y,W,v);R.onBeforeShadow(r,R,b,U,Z,$,V),r.renderBufferDirect(U,null,Z,$,R,V),R.onAfterShadow(r,R,b,U,Z,$,V)}}}else if(N.visible){const X=x(R,N,W,v);R.onBeforeShadow(r,R,b,U,Z,X,null),r.renderBufferDirect(U,null,Z,X,R,null),R.onAfterShadow(r,R,b,U,Z,X,null)}}const te=R.children;for(let Z=0,N=te.length;Z<N;Z++)E(te[Z],b,U,W,v)}function P(R){R.target.removeEventListener("dispose",P);for(const U in l){const W=l[U],v=R.target.uuid;v in W&&(W[v].dispose(),delete W[v])}}}function O0(r,e,t){const n=t.isWebGL2;function i(){let C=!1;const se=new tt;let O=null;const ee=new tt(0,0,0,0);return{setMask:function(he){O!==he&&!C&&(r.colorMask(he,he,he,he),O=he)},setLocked:function(he){C=he},setClear:function(he,Ve,$e,et,lt){lt===!0&&(he*=et,Ve*=et,$e*=et),se.set(he,Ve,$e,et),ee.equals(se)===!1&&(r.clearColor(he,Ve,$e,et),ee.copy(se))},reset:function(){C=!1,O=null,ee.set(-1,0,0,0)}}}function s(){let C=!1,se=null,O=null,ee=null;return{setTest:function(he){he?pe(r.DEPTH_TEST):je(r.DEPTH_TEST)},setMask:function(he){se!==he&&!C&&(r.depthMask(he),se=he)},setFunc:function(he){if(O!==he){switch(he){case ku:r.depthFunc(r.NEVER);break;case Hu:r.depthFunc(r.ALWAYS);break;case Gu:r.depthFunc(r.LESS);break;case Ar:r.depthFunc(r.LEQUAL);break;case Vu:r.depthFunc(r.EQUAL);break;case Wu:r.depthFunc(r.GEQUAL);break;case Xu:r.depthFunc(r.GREATER);break;case qu:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}O=he}},setLocked:function(he){C=he},setClear:function(he){ee!==he&&(r.clearDepth(he),ee=he)},reset:function(){C=!1,se=null,O=null,ee=null}}}function o(){let C=!1,se=null,O=null,ee=null,he=null,Ve=null,$e=null,et=null,lt=null;return{setTest:function(Ke){C||(Ke?pe(r.STENCIL_TEST):je(r.STENCIL_TEST))},setMask:function(Ke){se!==Ke&&!C&&(r.stencilMask(Ke),se=Ke)},setFunc:function(Ke,it,Et){(O!==Ke||ee!==it||he!==Et)&&(r.stencilFunc(Ke,it,Et),O=Ke,ee=it,he=Et)},setOp:function(Ke,it,Et){(Ve!==Ke||$e!==it||et!==Et)&&(r.stencilOp(Ke,it,Et),Ve=Ke,$e=it,et=Et)},setLocked:function(Ke){C=Ke},setClear:function(Ke){lt!==Ke&&(r.clearStencil(Ke),lt=Ke)},reset:function(){C=!1,se=null,O=null,ee=null,he=null,Ve=null,$e=null,et=null,lt=null}}}const a=new i,c=new s,l=new o,h=new WeakMap,u=new WeakMap;let d={},m={},g=new WeakMap,_=[],p=null,f=!1,M=null,x=null,E=null,P=null,R=null,b=null,U=null,W=new Ce(0,0,0),v=0,w=!1,te=null,Z=null,N=null,X=null,H=null;const J=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,Y=0;const $=r.getParameter(r.VERSION);$.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec($)[1]),V=Y>=1):$.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),V=Y>=2);let re=null,fe={};const Le=r.getParameter(r.SCISSOR_BOX),k=r.getParameter(r.VIEWPORT),ne=new tt().fromArray(Le),de=new tt().fromArray(k);function we(C,se,O,ee){const he=new Uint8Array(4),Ve=r.createTexture();r.bindTexture(C,Ve),r.texParameteri(C,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(C,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let $e=0;$e<O;$e++)n&&(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)?r.texImage3D(se,0,r.RGBA,1,1,ee,0,r.RGBA,r.UNSIGNED_BYTE,he):r.texImage2D(se+$e,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,he);return Ve}const ye={};ye[r.TEXTURE_2D]=we(r.TEXTURE_2D,r.TEXTURE_2D,1),ye[r.TEXTURE_CUBE_MAP]=we(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ye[r.TEXTURE_2D_ARRAY]=we(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ye[r.TEXTURE_3D]=we(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),pe(r.DEPTH_TEST),c.setFunc(Ar),Oe(!1),ze(za),pe(r.CULL_FACE),Se(zn);function pe(C){d[C]!==!0&&(r.enable(C),d[C]=!0)}function je(C){d[C]!==!1&&(r.disable(C),d[C]=!1)}function Ae(C,se){return m[C]!==se?(r.bindFramebuffer(C,se),m[C]=se,n&&(C===r.DRAW_FRAMEBUFFER&&(m[r.FRAMEBUFFER]=se),C===r.FRAMEBUFFER&&(m[r.DRAW_FRAMEBUFFER]=se)),!0):!1}function I(C,se){let O=_,ee=!1;if(C){O=g.get(se),O===void 0&&(O=[],g.set(se,O));const he=C.textures;if(O.length!==he.length||O[0]!==r.COLOR_ATTACHMENT0){for(let Ve=0,$e=he.length;Ve<$e;Ve++)O[Ve]=r.COLOR_ATTACHMENT0+Ve;O.length=he.length,ee=!0}}else O[0]!==r.BACK&&(O[0]=r.BACK,ee=!0);if(ee)if(t.isWebGL2)r.drawBuffers(O);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(O);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function dt(C){return p!==C?(r.useProgram(C),p=C,!0):!1}const Me={[Qn]:r.FUNC_ADD,[bu]:r.FUNC_SUBTRACT,[Au]:r.FUNC_REVERSE_SUBTRACT};if(n)Me[Ga]=r.MIN,Me[Va]=r.MAX;else{const C=e.get("EXT_blend_minmax");C!==null&&(Me[Ga]=C.MIN_EXT,Me[Va]=C.MAX_EXT)}const Ue={[wu]:r.ZERO,[Ru]:r.ONE,[Cu]:r.SRC_COLOR,[Qo]:r.SRC_ALPHA,[Uu]:r.SRC_ALPHA_SATURATE,[Du]:r.DST_COLOR,[Pu]:r.DST_ALPHA,[Lu]:r.ONE_MINUS_SRC_COLOR,[ea]:r.ONE_MINUS_SRC_ALPHA,[Iu]:r.ONE_MINUS_DST_COLOR,[Nu]:r.ONE_MINUS_DST_ALPHA,[Ou]:r.CONSTANT_COLOR,[Fu]:r.ONE_MINUS_CONSTANT_COLOR,[zu]:r.CONSTANT_ALPHA,[Bu]:r.ONE_MINUS_CONSTANT_ALPHA};function Se(C,se,O,ee,he,Ve,$e,et,lt,Ke){if(C===zn){f===!0&&(je(r.BLEND),f=!1);return}if(f===!1&&(pe(r.BLEND),f=!0),C!==Tu){if(C!==M||Ke!==w){if((x!==Qn||R!==Qn)&&(r.blendEquation(r.FUNC_ADD),x=Qn,R=Qn),Ke)switch(C){case Ni:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ba:r.blendFunc(r.ONE,r.ONE);break;case ka:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ha:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case Ni:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ba:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case ka:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ha:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}E=null,P=null,b=null,U=null,W.set(0,0,0),v=0,M=C,w=Ke}return}he=he||se,Ve=Ve||O,$e=$e||ee,(se!==x||he!==R)&&(r.blendEquationSeparate(Me[se],Me[he]),x=se,R=he),(O!==E||ee!==P||Ve!==b||$e!==U)&&(r.blendFuncSeparate(Ue[O],Ue[ee],Ue[Ve],Ue[$e]),E=O,P=ee,b=Ve,U=$e),(et.equals(W)===!1||lt!==v)&&(r.blendColor(et.r,et.g,et.b,lt),W.copy(et),v=lt),M=C,w=!1}function qe(C,se){C.side===rn?je(r.CULL_FACE):pe(r.CULL_FACE);let O=C.side===Dt;se&&(O=!O),Oe(O),C.blending===Ni&&C.transparent===!1?Se(zn):Se(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),c.setFunc(C.depthFunc),c.setTest(C.depthTest),c.setMask(C.depthWrite),a.setMask(C.colorWrite);const ee=C.stencilWrite;l.setTest(ee),ee&&(l.setMask(C.stencilWriteMask),l.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),l.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),T(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?pe(r.SAMPLE_ALPHA_TO_COVERAGE):je(r.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(C){te!==C&&(C?r.frontFace(r.CW):r.frontFace(r.CCW),te=C)}function ze(C){C!==Mu?(pe(r.CULL_FACE),C!==Z&&(C===za?r.cullFace(r.BACK):C===Su?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):je(r.CULL_FACE),Z=C}function nt(C){C!==N&&(V&&r.lineWidth(C),N=C)}function T(C,se,O){C?(pe(r.POLYGON_OFFSET_FILL),(X!==se||H!==O)&&(r.polygonOffset(se,O),X=se,H=O)):je(r.POLYGON_OFFSET_FILL)}function y(C){C?pe(r.SCISSOR_TEST):je(r.SCISSOR_TEST)}function G(C){C===void 0&&(C=r.TEXTURE0+J-1),re!==C&&(r.activeTexture(C),re=C)}function j(C,se,O){O===void 0&&(re===null?O=r.TEXTURE0+J-1:O=re);let ee=fe[O];ee===void 0&&(ee={type:void 0,texture:void 0},fe[O]=ee),(ee.type!==C||ee.texture!==se)&&(re!==O&&(r.activeTexture(O),re=O),r.bindTexture(C,se||ye[C]),ee.type=C,ee.texture=se)}function ie(){const C=fe[re];C!==void 0&&C.type!==void 0&&(r.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function Q(){try{r.compressedTexImage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Pe(){try{r.compressedTexImage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ee(){try{r.texSubImage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ae(){try{r.texSubImage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function le(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ne(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function oe(){try{r.texStorage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ct(){try{r.texStorage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function He(){try{r.texImage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ve(){try{r.texImage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function me(C){ne.equals(C)===!1&&(r.scissor(C.x,C.y,C.z,C.w),ne.copy(C))}function _e(C){de.equals(C)===!1&&(r.viewport(C.x,C.y,C.z,C.w),de.copy(C))}function A(C,se){let O=u.get(se);O===void 0&&(O=new WeakMap,u.set(se,O));let ee=O.get(C);ee===void 0&&(ee=r.getUniformBlockIndex(se,C.name),O.set(C,ee))}function K(C,se){const ee=u.get(se).get(C);h.get(se)!==ee&&(r.uniformBlockBinding(se,ee,C.__bindingPointIndex),h.set(se,ee))}function ge(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},re=null,fe={},m={},g=new WeakMap,_=[],p=null,f=!1,M=null,x=null,E=null,P=null,R=null,b=null,U=null,W=new Ce(0,0,0),v=0,w=!1,te=null,Z=null,N=null,X=null,H=null,ne.set(0,0,r.canvas.width,r.canvas.height),de.set(0,0,r.canvas.width,r.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:pe,disable:je,bindFramebuffer:Ae,drawBuffers:I,useProgram:dt,setBlending:Se,setMaterial:qe,setFlipSided:Oe,setCullFace:ze,setLineWidth:nt,setPolygonOffset:T,setScissorTest:y,activeTexture:G,bindTexture:j,unbindTexture:ie,compressedTexImage2D:Q,compressedTexImage3D:Pe,texImage2D:He,texImage3D:ve,updateUBOMapping:A,uniformBlockBinding:K,texStorage2D:oe,texStorage3D:ct,texSubImage2D:Ee,texSubImage3D:ae,compressedTexSubImage2D:le,compressedTexSubImage3D:Ne,scissor:me,viewport:_e,reset:ge}}function F0(r,e,t,n,i,s,o){const a=i.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Te,u=new WeakMap;let d;const m=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,y){return g?new OffscreenCanvas(T,y):xs("canvas")}function p(T,y,G,j){let ie=1;const Q=nt(T);if((Q.width>j||Q.height>j)&&(ie=j/Math.max(Q.width,Q.height)),ie<1||y===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const Pe=y?Nr:Math.floor,Ee=Pe(ie*Q.width),ae=Pe(ie*Q.height);d===void 0&&(d=_(Ee,ae));const le=G?_(Ee,ae):d;return le.width=Ee,le.height=ae,le.getContext("2d").drawImage(T,0,0,Ee,ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+Ee+"x"+ae+")."),le}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),T;return T}function f(T){const y=nt(T);return aa(y.width)&&aa(y.height)}function M(T){return a?!1:T.wrapS!==Xt||T.wrapT!==Xt||T.minFilter!==_t&&T.minFilter!==wt}function x(T,y){return T.generateMipmaps&&y&&T.minFilter!==_t&&T.minFilter!==wt}function E(T){r.generateMipmap(T)}function P(T,y,G,j,ie=!1){if(a===!1)return y;if(T!==null){if(r[T]!==void 0)return r[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Q=y;if(y===r.RED&&(G===r.FLOAT&&(Q=r.R32F),G===r.HALF_FLOAT&&(Q=r.R16F),G===r.UNSIGNED_BYTE&&(Q=r.R8)),y===r.RED_INTEGER&&(G===r.UNSIGNED_BYTE&&(Q=r.R8UI),G===r.UNSIGNED_SHORT&&(Q=r.R16UI),G===r.UNSIGNED_INT&&(Q=r.R32UI),G===r.BYTE&&(Q=r.R8I),G===r.SHORT&&(Q=r.R16I),G===r.INT&&(Q=r.R32I)),y===r.RG&&(G===r.FLOAT&&(Q=r.RG32F),G===r.HALF_FLOAT&&(Q=r.RG16F),G===r.UNSIGNED_BYTE&&(Q=r.RG8)),y===r.RG_INTEGER&&(G===r.UNSIGNED_BYTE&&(Q=r.RG8UI),G===r.UNSIGNED_SHORT&&(Q=r.RG16UI),G===r.UNSIGNED_INT&&(Q=r.RG32UI),G===r.BYTE&&(Q=r.RG8I),G===r.SHORT&&(Q=r.RG16I),G===r.INT&&(Q=r.RG32I)),y===r.RGBA){const Pe=ie?Rr:Je.getTransfer(j);G===r.FLOAT&&(Q=r.RGBA32F),G===r.HALF_FLOAT&&(Q=r.RGBA16F),G===r.UNSIGNED_BYTE&&(Q=Pe===st?r.SRGB8_ALPHA8:r.RGBA8),G===r.UNSIGNED_SHORT_4_4_4_4&&(Q=r.RGBA4),G===r.UNSIGNED_SHORT_5_5_5_1&&(Q=r.RGB5_A1)}return(Q===r.R16F||Q===r.R32F||Q===r.RG16F||Q===r.RG32F||Q===r.RGBA16F||Q===r.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function R(T,y,G){return x(T,G)===!0||T.isFramebufferTexture&&T.minFilter!==_t&&T.minFilter!==wt?Math.log2(Math.max(y.width,y.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?y.mipmaps.length:1}function b(T){return T===_t||T===ia||T===Ci?r.NEAREST:r.LINEAR}function U(T){const y=T.target;y.removeEventListener("dispose",U),v(y),y.isVideoTexture&&u.delete(y)}function W(T){const y=T.target;y.removeEventListener("dispose",W),te(y)}function v(T){const y=n.get(T);if(y.__webglInit===void 0)return;const G=T.source,j=m.get(G);if(j){const ie=j[y.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&w(T),Object.keys(j).length===0&&m.delete(G)}n.remove(T)}function w(T){const y=n.get(T);r.deleteTexture(y.__webglTexture);const G=T.source,j=m.get(G);delete j[y.__cacheKey],o.memory.textures--}function te(T){const y=n.get(T);if(T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(y.__webglFramebuffer[j]))for(let ie=0;ie<y.__webglFramebuffer[j].length;ie++)r.deleteFramebuffer(y.__webglFramebuffer[j][ie]);else r.deleteFramebuffer(y.__webglFramebuffer[j]);y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer[j])}else{if(Array.isArray(y.__webglFramebuffer))for(let j=0;j<y.__webglFramebuffer.length;j++)r.deleteFramebuffer(y.__webglFramebuffer[j]);else r.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&r.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let j=0;j<y.__webglColorRenderbuffer.length;j++)y.__webglColorRenderbuffer[j]&&r.deleteRenderbuffer(y.__webglColorRenderbuffer[j]);y.__webglDepthRenderbuffer&&r.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const G=T.textures;for(let j=0,ie=G.length;j<ie;j++){const Q=n.get(G[j]);Q.__webglTexture&&(r.deleteTexture(Q.__webglTexture),o.memory.textures--),n.remove(G[j])}n.remove(T)}let Z=0;function N(){Z=0}function X(){const T=Z;return T>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),Z+=1,T}function H(T){const y=[];return y.push(T.wrapS),y.push(T.wrapT),y.push(T.wrapR||0),y.push(T.magFilter),y.push(T.minFilter),y.push(T.anisotropy),y.push(T.internalFormat),y.push(T.format),y.push(T.type),y.push(T.generateMipmaps),y.push(T.premultiplyAlpha),y.push(T.flipY),y.push(T.unpackAlignment),y.push(T.colorSpace),y.join()}function J(T,y){const G=n.get(T);if(T.isVideoTexture&&Oe(T),T.isRenderTargetTexture===!1&&T.version>0&&G.__version!==T.version){const j=T.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{de(G,T,y);return}}t.bindTexture(r.TEXTURE_2D,G.__webglTexture,r.TEXTURE0+y)}function V(T,y){const G=n.get(T);if(T.version>0&&G.__version!==T.version){de(G,T,y);return}t.bindTexture(r.TEXTURE_2D_ARRAY,G.__webglTexture,r.TEXTURE0+y)}function Y(T,y){const G=n.get(T);if(T.version>0&&G.__version!==T.version){de(G,T,y);return}t.bindTexture(r.TEXTURE_3D,G.__webglTexture,r.TEXTURE0+y)}function $(T,y){const G=n.get(T);if(T.version>0&&G.__version!==T.version){we(G,T,y);return}t.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture,r.TEXTURE0+y)}const re={[zi]:r.REPEAT,[Xt]:r.CLAMP_TO_EDGE,[wr]:r.MIRRORED_REPEAT},fe={[_t]:r.NEAREST,[ia]:r.NEAREST_MIPMAP_NEAREST,[Ci]:r.NEAREST_MIPMAP_LINEAR,[wt]:r.LINEAR,[vr]:r.LINEAR_MIPMAP_NEAREST,[vn]:r.LINEAR_MIPMAP_LINEAR},Le={[md]:r.NEVER,[Md]:r.ALWAYS,[gd]:r.LESS,[Lh]:r.LEQUAL,[_d]:r.EQUAL,[vd]:r.GEQUAL,[xd]:r.GREATER,[yd]:r.NOTEQUAL};function k(T,y,G){if(y.type===$t&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===wt||y.magFilter===vr||y.magFilter===Ci||y.magFilter===vn||y.minFilter===wt||y.minFilter===vr||y.minFilter===Ci||y.minFilter===vn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),G?(r.texParameteri(T,r.TEXTURE_WRAP_S,re[y.wrapS]),r.texParameteri(T,r.TEXTURE_WRAP_T,re[y.wrapT]),(T===r.TEXTURE_3D||T===r.TEXTURE_2D_ARRAY)&&r.texParameteri(T,r.TEXTURE_WRAP_R,re[y.wrapR]),r.texParameteri(T,r.TEXTURE_MAG_FILTER,fe[y.magFilter]),r.texParameteri(T,r.TEXTURE_MIN_FILTER,fe[y.minFilter])):(r.texParameteri(T,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(T,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(T===r.TEXTURE_3D||T===r.TEXTURE_2D_ARRAY)&&r.texParameteri(T,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(y.wrapS!==Xt||y.wrapT!==Xt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(T,r.TEXTURE_MAG_FILTER,b(y.magFilter)),r.texParameteri(T,r.TEXTURE_MIN_FILTER,b(y.minFilter)),y.minFilter!==_t&&y.minFilter!==wt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(r.texParameteri(T,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(T,r.TEXTURE_COMPARE_FUNC,Le[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===_t||y.minFilter!==Ci&&y.minFilter!==vn||y.type===$t&&e.has("OES_texture_float_linear")===!1||a===!1&&y.type===gs&&e.has("OES_texture_half_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");r.texParameterf(T,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function ne(T,y){let G=!1;T.__webglInit===void 0&&(T.__webglInit=!0,y.addEventListener("dispose",U));const j=y.source;let ie=m.get(j);ie===void 0&&(ie={},m.set(j,ie));const Q=H(y);if(Q!==T.__cacheKey){ie[Q]===void 0&&(ie[Q]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ie[Q].usedTimes++;const Pe=ie[T.__cacheKey];Pe!==void 0&&(ie[T.__cacheKey].usedTimes--,Pe.usedTimes===0&&w(y)),T.__cacheKey=Q,T.__webglTexture=ie[Q].texture}return G}function de(T,y,G){let j=r.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(j=r.TEXTURE_2D_ARRAY),y.isData3DTexture&&(j=r.TEXTURE_3D);const ie=ne(T,y),Q=y.source;t.bindTexture(j,T.__webglTexture,r.TEXTURE0+G);const Pe=n.get(Q);if(Q.version!==Pe.__version||ie===!0){t.activeTexture(r.TEXTURE0+G);const Ee=Je.getPrimaries(Je.workingColorSpace),ae=y.colorSpace===Un?null:Je.getPrimaries(y.colorSpace),le=y.colorSpace===Un||Ee===ae?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);const Ne=M(y)&&f(y.image)===!1;let oe=p(y.image,Ne,!1,i.maxTextureSize);oe=ze(y,oe);const ct=f(oe)||a,He=s.convert(y.format,y.colorSpace);let ve=s.convert(y.type),me=P(y.internalFormat,He,ve,y.colorSpace,y.isVideoTexture);k(j,y,ct);let _e;const A=y.mipmaps,K=a&&y.isVideoTexture!==!0&&me!==wh,ge=Pe.__version===void 0||ie===!0,C=Q.dataReady,se=R(y,oe,ct);if(y.isDepthTexture)me=r.DEPTH_COMPONENT,a?y.type===$t?me=r.DEPTH_COMPONENT32F:y.type===On?me=r.DEPTH_COMPONENT24:y.type===ni?me=r.DEPTH24_STENCIL8:me=r.DEPTH_COMPONENT16:y.type===$t&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===ii&&me===r.DEPTH_COMPONENT&&y.type!==_a&&y.type!==On&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=On,ve=s.convert(y.type)),y.format===Bi&&me===r.DEPTH_COMPONENT&&(me=r.DEPTH_STENCIL,y.type!==ni&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=ni,ve=s.convert(y.type))),ge&&(K?t.texStorage2D(r.TEXTURE_2D,1,me,oe.width,oe.height):t.texImage2D(r.TEXTURE_2D,0,me,oe.width,oe.height,0,He,ve,null));else if(y.isDataTexture)if(A.length>0&&ct){K&&ge&&t.texStorage2D(r.TEXTURE_2D,se,me,A[0].width,A[0].height);for(let O=0,ee=A.length;O<ee;O++)_e=A[O],K?C&&t.texSubImage2D(r.TEXTURE_2D,O,0,0,_e.width,_e.height,He,ve,_e.data):t.texImage2D(r.TEXTURE_2D,O,me,_e.width,_e.height,0,He,ve,_e.data);y.generateMipmaps=!1}else K?(ge&&t.texStorage2D(r.TEXTURE_2D,se,me,oe.width,oe.height),C&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,oe.width,oe.height,He,ve,oe.data)):t.texImage2D(r.TEXTURE_2D,0,me,oe.width,oe.height,0,He,ve,oe.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){K&&ge&&t.texStorage3D(r.TEXTURE_2D_ARRAY,se,me,A[0].width,A[0].height,oe.depth);for(let O=0,ee=A.length;O<ee;O++)_e=A[O],y.format!==qt?He!==null?K?C&&t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,O,0,0,0,_e.width,_e.height,oe.depth,He,_e.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,O,me,_e.width,_e.height,oe.depth,0,_e.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):K?C&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,O,0,0,0,_e.width,_e.height,oe.depth,He,ve,_e.data):t.texImage3D(r.TEXTURE_2D_ARRAY,O,me,_e.width,_e.height,oe.depth,0,He,ve,_e.data)}else{K&&ge&&t.texStorage2D(r.TEXTURE_2D,se,me,A[0].width,A[0].height);for(let O=0,ee=A.length;O<ee;O++)_e=A[O],y.format!==qt?He!==null?K?C&&t.compressedTexSubImage2D(r.TEXTURE_2D,O,0,0,_e.width,_e.height,He,_e.data):t.compressedTexImage2D(r.TEXTURE_2D,O,me,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):K?C&&t.texSubImage2D(r.TEXTURE_2D,O,0,0,_e.width,_e.height,He,ve,_e.data):t.texImage2D(r.TEXTURE_2D,O,me,_e.width,_e.height,0,He,ve,_e.data)}else if(y.isDataArrayTexture)K?(ge&&t.texStorage3D(r.TEXTURE_2D_ARRAY,se,me,oe.width,oe.height,oe.depth),C&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,He,ve,oe.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,me,oe.width,oe.height,oe.depth,0,He,ve,oe.data);else if(y.isData3DTexture)K?(ge&&t.texStorage3D(r.TEXTURE_3D,se,me,oe.width,oe.height,oe.depth),C&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,He,ve,oe.data)):t.texImage3D(r.TEXTURE_3D,0,me,oe.width,oe.height,oe.depth,0,He,ve,oe.data);else if(y.isFramebufferTexture){if(ge)if(K)t.texStorage2D(r.TEXTURE_2D,se,me,oe.width,oe.height);else{let O=oe.width,ee=oe.height;for(let he=0;he<se;he++)t.texImage2D(r.TEXTURE_2D,he,me,O,ee,0,He,ve,null),O>>=1,ee>>=1}}else if(A.length>0&&ct){if(K&&ge){const O=nt(A[0]);t.texStorage2D(r.TEXTURE_2D,se,me,O.width,O.height)}for(let O=0,ee=A.length;O<ee;O++)_e=A[O],K?C&&t.texSubImage2D(r.TEXTURE_2D,O,0,0,He,ve,_e):t.texImage2D(r.TEXTURE_2D,O,me,He,ve,_e);y.generateMipmaps=!1}else if(K){if(ge){const O=nt(oe);t.texStorage2D(r.TEXTURE_2D,se,me,O.width,O.height)}C&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,He,ve,oe)}else t.texImage2D(r.TEXTURE_2D,0,me,He,ve,oe);x(y,ct)&&E(j),Pe.__version=Q.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function we(T,y,G){if(y.image.length!==6)return;const j=ne(T,y),ie=y.source;t.bindTexture(r.TEXTURE_CUBE_MAP,T.__webglTexture,r.TEXTURE0+G);const Q=n.get(ie);if(ie.version!==Q.__version||j===!0){t.activeTexture(r.TEXTURE0+G);const Pe=Je.getPrimaries(Je.workingColorSpace),Ee=y.colorSpace===Un?null:Je.getPrimaries(y.colorSpace),ae=y.colorSpace===Un||Pe===Ee?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);const le=y.isCompressedTexture||y.image[0].isCompressedTexture,Ne=y.image[0]&&y.image[0].isDataTexture,oe=[];for(let O=0;O<6;O++)!le&&!Ne?oe[O]=p(y.image[O],!1,!0,i.maxCubemapSize):oe[O]=Ne?y.image[O].image:y.image[O],oe[O]=ze(y,oe[O]);const ct=oe[0],He=f(ct)||a,ve=s.convert(y.format,y.colorSpace),me=s.convert(y.type),_e=P(y.internalFormat,ve,me,y.colorSpace),A=a&&y.isVideoTexture!==!0,K=Q.__version===void 0||j===!0,ge=ie.dataReady;let C=R(y,ct,He);k(r.TEXTURE_CUBE_MAP,y,He);let se;if(le){A&&K&&t.texStorage2D(r.TEXTURE_CUBE_MAP,C,_e,ct.width,ct.height);for(let O=0;O<6;O++){se=oe[O].mipmaps;for(let ee=0;ee<se.length;ee++){const he=se[ee];y.format!==qt?ve!==null?A?ge&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+O,ee,0,0,he.width,he.height,ve,he.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+O,ee,_e,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):A?ge&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+O,ee,0,0,he.width,he.height,ve,me,he.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+O,ee,_e,he.width,he.height,0,ve,me,he.data)}}}else{if(se=y.mipmaps,A&&K){se.length>0&&C++;const O=nt(oe[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,C,_e,O.width,O.height)}for(let O=0;O<6;O++)if(Ne){A?ge&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,0,0,oe[O].width,oe[O].height,ve,me,oe[O].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,_e,oe[O].width,oe[O].height,0,ve,me,oe[O].data);for(let ee=0;ee<se.length;ee++){const Ve=se[ee].image[O].image;A?ge&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+O,ee+1,0,0,Ve.width,Ve.height,ve,me,Ve.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+O,ee+1,_e,Ve.width,Ve.height,0,ve,me,Ve.data)}}else{A?ge&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,0,0,ve,me,oe[O]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,_e,ve,me,oe[O]);for(let ee=0;ee<se.length;ee++){const he=se[ee];A?ge&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+O,ee+1,0,0,ve,me,he.image[O]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+O,ee+1,_e,ve,me,he.image[O])}}}x(y,He)&&E(r.TEXTURE_CUBE_MAP),Q.__version=ie.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function ye(T,y,G,j,ie,Q){const Pe=s.convert(G.format,G.colorSpace),Ee=s.convert(G.type),ae=P(G.internalFormat,Pe,Ee,G.colorSpace);if(!n.get(y).__hasExternalTextures){const Ne=Math.max(1,y.width>>Q),oe=Math.max(1,y.height>>Q);ie===r.TEXTURE_3D||ie===r.TEXTURE_2D_ARRAY?t.texImage3D(ie,Q,ae,Ne,oe,y.depth,0,Pe,Ee,null):t.texImage2D(ie,Q,ae,Ne,oe,0,Pe,Ee,null)}t.bindFramebuffer(r.FRAMEBUFFER,T),qe(y)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,j,ie,n.get(G).__webglTexture,0,Se(y)):(ie===r.TEXTURE_2D||ie>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,j,ie,n.get(G).__webglTexture,Q),t.bindFramebuffer(r.FRAMEBUFFER,null)}function pe(T,y,G){if(r.bindRenderbuffer(r.RENDERBUFFER,T),y.depthBuffer&&!y.stencilBuffer){let j=a===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(G||qe(y)){const ie=y.depthTexture;ie&&ie.isDepthTexture&&(ie.type===$t?j=r.DEPTH_COMPONENT32F:ie.type===On&&(j=r.DEPTH_COMPONENT24));const Q=Se(y);qe(y)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Q,j,y.width,y.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,Q,j,y.width,y.height)}else r.renderbufferStorage(r.RENDERBUFFER,j,y.width,y.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,T)}else if(y.depthBuffer&&y.stencilBuffer){const j=Se(y);G&&qe(y)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,j,r.DEPTH24_STENCIL8,y.width,y.height):qe(y)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,j,r.DEPTH24_STENCIL8,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,y.width,y.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,T)}else{const j=y.textures;for(let ie=0;ie<j.length;ie++){const Q=j[ie],Pe=s.convert(Q.format,Q.colorSpace),Ee=s.convert(Q.type),ae=P(Q.internalFormat,Pe,Ee,Q.colorSpace),le=Se(y);G&&qe(y)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,le,ae,y.width,y.height):qe(y)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,le,ae,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,ae,y.width,y.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function je(T,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,T),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),J(y.depthTexture,0);const j=n.get(y.depthTexture).__webglTexture,ie=Se(y);if(y.depthTexture.format===ii)qe(y)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,j,0,ie):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,j,0);else if(y.depthTexture.format===Bi)qe(y)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,j,0,ie):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Ae(T){const y=n.get(T),G=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!y.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");je(y.__webglFramebuffer,T)}else if(G){y.__webglDepthbuffer=[];for(let j=0;j<6;j++)t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[j]),y.__webglDepthbuffer[j]=r.createRenderbuffer(),pe(y.__webglDepthbuffer[j],T,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=r.createRenderbuffer(),pe(y.__webglDepthbuffer,T,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function I(T,y,G){const j=n.get(T);y!==void 0&&ye(j.__webglFramebuffer,T,T.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),G!==void 0&&Ae(T)}function dt(T){const y=T.texture,G=n.get(T),j=n.get(y);T.addEventListener("dispose",W);const ie=T.textures,Q=T.isWebGLCubeRenderTarget===!0,Pe=ie.length>1,Ee=f(T)||a;if(Pe||(j.__webglTexture===void 0&&(j.__webglTexture=r.createTexture()),j.__version=y.version,o.memory.textures++),Q){G.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(a&&y.mipmaps&&y.mipmaps.length>0){G.__webglFramebuffer[ae]=[];for(let le=0;le<y.mipmaps.length;le++)G.__webglFramebuffer[ae][le]=r.createFramebuffer()}else G.__webglFramebuffer[ae]=r.createFramebuffer()}else{if(a&&y.mipmaps&&y.mipmaps.length>0){G.__webglFramebuffer=[];for(let ae=0;ae<y.mipmaps.length;ae++)G.__webglFramebuffer[ae]=r.createFramebuffer()}else G.__webglFramebuffer=r.createFramebuffer();if(Pe)if(i.drawBuffers)for(let ae=0,le=ie.length;ae<le;ae++){const Ne=n.get(ie[ae]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=r.createTexture(),o.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&T.samples>0&&qe(T)===!1){G.__webglMultisampledFramebuffer=r.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ae=0;ae<ie.length;ae++){const le=ie[ae];G.__webglColorRenderbuffer[ae]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,G.__webglColorRenderbuffer[ae]);const Ne=s.convert(le.format,le.colorSpace),oe=s.convert(le.type),ct=P(le.internalFormat,Ne,oe,le.colorSpace,T.isXRRenderTarget===!0),He=Se(T);r.renderbufferStorageMultisample(r.RENDERBUFFER,He,ct,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ae,r.RENDERBUFFER,G.__webglColorRenderbuffer[ae])}r.bindRenderbuffer(r.RENDERBUFFER,null),T.depthBuffer&&(G.__webglDepthRenderbuffer=r.createRenderbuffer(),pe(G.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Q){t.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture),k(r.TEXTURE_CUBE_MAP,y,Ee);for(let ae=0;ae<6;ae++)if(a&&y.mipmaps&&y.mipmaps.length>0)for(let le=0;le<y.mipmaps.length;le++)ye(G.__webglFramebuffer[ae][le],T,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,le);else ye(G.__webglFramebuffer[ae],T,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);x(y,Ee)&&E(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let ae=0,le=ie.length;ae<le;ae++){const Ne=ie[ae],oe=n.get(Ne);t.bindTexture(r.TEXTURE_2D,oe.__webglTexture),k(r.TEXTURE_2D,Ne,Ee),ye(G.__webglFramebuffer,T,Ne,r.COLOR_ATTACHMENT0+ae,r.TEXTURE_2D,0),x(Ne,Ee)&&E(r.TEXTURE_2D)}t.unbindTexture()}else{let ae=r.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?ae=T.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ae,j.__webglTexture),k(ae,y,Ee),a&&y.mipmaps&&y.mipmaps.length>0)for(let le=0;le<y.mipmaps.length;le++)ye(G.__webglFramebuffer[le],T,y,r.COLOR_ATTACHMENT0,ae,le);else ye(G.__webglFramebuffer,T,y,r.COLOR_ATTACHMENT0,ae,0);x(y,Ee)&&E(ae),t.unbindTexture()}T.depthBuffer&&Ae(T)}function Me(T){const y=f(T)||a,G=T.textures;for(let j=0,ie=G.length;j<ie;j++){const Q=G[j];if(x(Q,y)){const Pe=T.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,Ee=n.get(Q).__webglTexture;t.bindTexture(Pe,Ee),E(Pe),t.unbindTexture()}}}function Ue(T){if(a&&T.samples>0&&qe(T)===!1){const y=T.textures,G=T.width,j=T.height;let ie=r.COLOR_BUFFER_BIT;const Q=[],Pe=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ee=n.get(T),ae=y.length>1;if(ae)for(let le=0;le<y.length;le++)t.bindFramebuffer(r.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+le,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Ee.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+le,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let le=0;le<y.length;le++){Q.push(r.COLOR_ATTACHMENT0+le),T.depthBuffer&&Q.push(Pe);const Ne=Ee.__ignoreDepthValues!==void 0?Ee.__ignoreDepthValues:!1;if(Ne===!1&&(T.depthBuffer&&(ie|=r.DEPTH_BUFFER_BIT),T.stencilBuffer&&(ie|=r.STENCIL_BUFFER_BIT)),ae&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ee.__webglColorRenderbuffer[le]),Ne===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[Pe]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[Pe])),ae){const oe=n.get(y[le]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,oe,0)}r.blitFramebuffer(0,0,G,j,0,0,G,j,ie,r.NEAREST),l&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Q)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ae)for(let le=0;le<y.length;le++){t.bindFramebuffer(r.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+le,r.RENDERBUFFER,Ee.__webglColorRenderbuffer[le]);const Ne=n.get(y[le]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Ee.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+le,r.TEXTURE_2D,Ne,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}}function Se(T){return Math.min(i.maxSamples,T.samples)}function qe(T){const y=n.get(T);return a&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Oe(T){const y=o.render.frame;u.get(T)!==y&&(u.set(T,y),T.update())}function ze(T,y){const G=T.colorSpace,j=T.format,ie=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===oa||G!==St&&G!==Un&&(Je.getTransfer(G)===st?a===!1?e.has("EXT_sRGB")===!0&&j===qt?(T.format=oa,T.minFilter=wt,T.generateMipmaps=!1):y=Uh.sRGBToLinear(y):(j!==qt||ie!==kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),y}function nt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(h.width=T.naturalWidth||T.width,h.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(h.width=T.displayWidth,h.height=T.displayHeight):(h.width=T.width,h.height=T.height),h}this.allocateTextureUnit=X,this.resetTextureUnits=N,this.setTexture2D=J,this.setTexture2DArray=V,this.setTexture3D=Y,this.setTextureCube=$,this.rebindTextures=I,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=Me,this.updateMultisampleRenderTarget=Ue,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=qe}function z0(r,e,t){const n=t.isWebGL2;function i(s,o=Un){let a;const c=Je.getTransfer(o);if(s===kn)return r.UNSIGNED_BYTE;if(s===Mh)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Sh)return r.UNSIGNED_SHORT_5_5_5_1;if(s===id)return r.BYTE;if(s===sd)return r.SHORT;if(s===_a)return r.UNSIGNED_SHORT;if(s===vh)return r.INT;if(s===On)return r.UNSIGNED_INT;if(s===$t)return r.FLOAT;if(s===gs)return n?r.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===rd)return r.ALPHA;if(s===qt)return r.RGBA;if(s===od)return r.LUMINANCE;if(s===ad)return r.LUMINANCE_ALPHA;if(s===ii)return r.DEPTH_COMPONENT;if(s===Bi)return r.DEPTH_STENCIL;if(s===oa)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Eh)return r.RED;if(s===Th)return r.RED_INTEGER;if(s===cd)return r.RG;if(s===bh)return r.RG_INTEGER;if(s===Ah)return r.RGBA_INTEGER;if(s===Yr||s===jr||s===Kr||s===Jr)if(c===st)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Yr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===jr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Kr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Jr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Yr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===jr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Kr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Jr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Xa||s===qa||s===Ya||s===ja)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Xa)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===qa)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ya)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ja)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===wh)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Ka||s===Ja)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Ka)return c===st?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Ja)return c===st?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===$a||s===Za||s===Qa||s===ec||s===tc||s===nc||s===ic||s===sc||s===rc||s===oc||s===ac||s===cc||s===lc||s===hc)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===$a)return c===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Za)return c===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Qa)return c===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ec)return c===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===tc)return c===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===nc)return c===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ic)return c===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===sc)return c===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===rc)return c===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===oc)return c===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ac)return c===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===cc)return c===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===lc)return c===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===hc)return c===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===$r||s===uc||s===dc)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===$r)return c===st?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===uc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===dc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===ld||s===fc||s===pc||s===mc)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===$r)return a.COMPRESSED_RED_RGTC1_EXT;if(s===fc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===pc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===mc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ni?n?r.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class B0 extends Rt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ti extends at{constructor(){super(),this.isGroup=!0,this.type="Group"}}const k0={type:"move"};class To{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ti,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ti,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ti,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),f=this._getHandJoint(l,_);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,g=.005;l.inputState.pinching&&d>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(k0)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ti;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const H0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,G0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class V0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new xt,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,i=new Hn({extensions:{fragDepth:!0},vertexShader:H0,fragmentShader:G0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Nt(new Fr(20,20),i)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class W0 extends oi{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,m=null,g=null;const _=new V0,p=t.getContextAttributes();let f=null,M=null;const x=[],E=[],P=new Te;let R=null;const b=new Rt;b.layers.enable(1),b.viewport=new tt;const U=new Rt;U.layers.enable(2),U.viewport=new tt;const W=[b,U],v=new B0;v.layers.enable(1),v.layers.enable(2);let w=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let ne=x[k];return ne===void 0&&(ne=new To,x[k]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(k){let ne=x[k];return ne===void 0&&(ne=new To,x[k]=ne),ne.getGripSpace()},this.getHand=function(k){let ne=x[k];return ne===void 0&&(ne=new To,x[k]=ne),ne.getHandSpace()};function Z(k){const ne=E.indexOf(k.inputSource);if(ne===-1)return;const de=x[ne];de!==void 0&&(de.update(k.inputSource,k.frame,l||o),de.dispatchEvent({type:k.type,data:k.inputSource}))}function N(){i.removeEventListener("select",Z),i.removeEventListener("selectstart",Z),i.removeEventListener("selectend",Z),i.removeEventListener("squeeze",Z),i.removeEventListener("squeezestart",Z),i.removeEventListener("squeezeend",Z),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",X);for(let k=0;k<x.length;k++){const ne=E[k];ne!==null&&(E[k]=null,x[k].disconnect(ne))}w=null,te=null,_.reset(),e.setRenderTarget(f),m=null,d=null,u=null,i=null,M=null,Le.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){s=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(k){l=k},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(k){if(i=k,i!==null){if(f=e.getRenderTarget(),i.addEventListener("select",Z),i.addEventListener("selectstart",Z),i.addEventListener("selectend",Z),i.addEventListener("squeeze",Z),i.addEventListener("squeezestart",Z),i.addEventListener("squeezeend",Z),i.addEventListener("end",N),i.addEventListener("inputsourceschange",X),p.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(P),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ne={antialias:i.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(i,t,ne),i.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new si(m.framebufferWidth,m.framebufferHeight,{format:qt,type:kn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let ne=null,de=null,we=null;p.depth&&(we=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=p.stencil?Bi:ii,de=p.stencil?ni:On);const ye={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:s};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(ye),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new si(d.textureWidth,d.textureHeight,{format:qt,type:kn,depthTexture:new Yh(d.textureWidth,d.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const pe=e.properties.get(M);pe.__ignoreDepthValues=d.ignoreDepthValues}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),Le.setContext(i),Le.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function X(k){for(let ne=0;ne<k.removed.length;ne++){const de=k.removed[ne],we=E.indexOf(de);we>=0&&(E[we]=null,x[we].disconnect(de))}for(let ne=0;ne<k.added.length;ne++){const de=k.added[ne];let we=E.indexOf(de);if(we===-1){for(let pe=0;pe<x.length;pe++)if(pe>=E.length){E.push(de),we=pe;break}else if(E[pe]===null){E[pe]=de,we=pe;break}if(we===-1)break}const ye=x[we];ye&&ye.connect(de)}}const H=new L,J=new L;function V(k,ne,de){H.setFromMatrixPosition(ne.matrixWorld),J.setFromMatrixPosition(de.matrixWorld);const we=H.distanceTo(J),ye=ne.projectionMatrix.elements,pe=de.projectionMatrix.elements,je=ye[14]/(ye[10]-1),Ae=ye[14]/(ye[10]+1),I=(ye[9]+1)/ye[5],dt=(ye[9]-1)/ye[5],Me=(ye[8]-1)/ye[0],Ue=(pe[8]+1)/pe[0],Se=je*Me,qe=je*Ue,Oe=we/(-Me+Ue),ze=Oe*-Me;ne.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(ze),k.translateZ(Oe),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const nt=je+Oe,T=Ae+Oe,y=Se-ze,G=qe+(we-ze),j=I*Ae/T*nt,ie=dt*Ae/T*nt;k.projectionMatrix.makePerspective(y,G,j,ie,nt,T),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function Y(k,ne){ne===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(ne.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(i===null)return;_.texture!==null&&(k.near=_.depthNear,k.far=_.depthFar),v.near=U.near=b.near=k.near,v.far=U.far=b.far=k.far,(w!==v.near||te!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),w=v.near,te=v.far,b.near=w,b.far=te,U.near=w,U.far=te,b.updateProjectionMatrix(),U.updateProjectionMatrix(),k.updateProjectionMatrix());const ne=k.parent,de=v.cameras;Y(v,ne);for(let we=0;we<de.length;we++)Y(de[we],ne);de.length===2?V(v,b,U):v.projectionMatrix.copy(b.projectionMatrix),$(k,v,ne)};function $(k,ne,de){de===null?k.matrix.copy(ne.matrixWorld):(k.matrix.copy(de.matrixWorld),k.matrix.invert(),k.matrix.multiply(ne.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(ne.projectionMatrix),k.projectionMatrixInverse.copy(ne.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Hi*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(k){c=k,d!==null&&(d.fixedFoveation=k),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=k)},this.hasDepthSensing=function(){return _.texture!==null};let re=null;function fe(k,ne){if(h=ne.getViewerPose(l||o),g=ne,h!==null){const de=h.views;m!==null&&(e.setRenderTargetFramebuffer(M,m.framebuffer),e.setRenderTarget(M));let we=!1;de.length!==v.cameras.length&&(v.cameras.length=0,we=!0);for(let pe=0;pe<de.length;pe++){const je=de[pe];let Ae=null;if(m!==null)Ae=m.getViewport(je);else{const dt=u.getViewSubImage(d,je);Ae=dt.viewport,pe===0&&(e.setRenderTargetTextures(M,dt.colorTexture,d.ignoreDepthValues?void 0:dt.depthStencilTexture),e.setRenderTarget(M))}let I=W[pe];I===void 0&&(I=new Rt,I.layers.enable(pe),I.viewport=new tt,W[pe]=I),I.matrix.fromArray(je.transform.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale),I.projectionMatrix.fromArray(je.projectionMatrix),I.projectionMatrixInverse.copy(I.projectionMatrix).invert(),I.viewport.set(Ae.x,Ae.y,Ae.width,Ae.height),pe===0&&(v.matrix.copy(I.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),we===!0&&v.cameras.push(I)}const ye=i.enabledFeatures;if(ye&&ye.includes("depth-sensing")){const pe=u.getDepthInformation(de[0]);pe&&pe.isValid&&pe.texture&&_.init(e,pe,i.renderState)}}for(let de=0;de<x.length;de++){const we=E[de],ye=x[de];we!==null&&ye!==void 0&&ye.update(we,ne,l||o)}_.render(e,v),re&&re(k,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),g=null}const Le=new qh;Le.setAnimationLoop(fe),this.setAnimationLoop=function(k){re=k},this.dispose=function(){}}}const Jn=new cn,X0=new Xe;function q0(r,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,Vh(r)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function i(p,f,M,x,E){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(p,f):f.isMeshToonMaterial?(s(p,f),u(p,f)):f.isMeshPhongMaterial?(s(p,f),h(p,f)):f.isMeshStandardMaterial?(s(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,E)):f.isMeshMatcapMaterial?(s(p,f),g(p,f)):f.isMeshDepthMaterial?s(p,f):f.isMeshDistanceMaterial?(s(p,f),_(p,f)):f.isMeshNormalMaterial?s(p,f):f.isLineBasicMaterial?(o(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?c(p,f,M,x):f.isSpriteMaterial?l(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Dt&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Dt&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const M=e.get(f),x=M.envMap,E=M.envMapRotation;if(x&&(p.envMap.value=x,Jn.copy(E),Jn.x*=-1,Jn.y*=-1,Jn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Jn.y*=-1,Jn.z*=-1),p.envMapRotation.value.setFromMatrix4(X0.makeRotationFromEuler(Jn)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const P=r._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*P,t(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function o(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function c(p,f,M,x){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*M,p.scale.value=x*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function l(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,M){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Dt&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function _(p,f){const M=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Y0(r,e,t,n){let i={},s={},o=[];const a=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(M,x){const E=x.program;n.uniformBlockBinding(M,E)}function l(M,x){let E=i[M.id];E===void 0&&(g(M),E=h(M),i[M.id]=E,M.addEventListener("dispose",p));const P=x.program;n.updateUBOMapping(M,P);const R=e.render.frame;s[M.id]!==R&&(d(M),s[M.id]=R)}function h(M){const x=u();M.__bindingPointIndex=x;const E=r.createBuffer(),P=M.__size,R=M.usage;return r.bindBuffer(r.UNIFORM_BUFFER,E),r.bufferData(r.UNIFORM_BUFFER,P,R),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,E),E}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const x=i[M.id],E=M.uniforms,P=M.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let R=0,b=E.length;R<b;R++){const U=Array.isArray(E[R])?E[R]:[E[R]];for(let W=0,v=U.length;W<v;W++){const w=U[W];if(m(w,R,W,P)===!0){const te=w.__offset,Z=Array.isArray(w.value)?w.value:[w.value];let N=0;for(let X=0;X<Z.length;X++){const H=Z[X],J=_(H);typeof H=="number"||typeof H=="boolean"?(w.__data[0]=H,r.bufferSubData(r.UNIFORM_BUFFER,te+N,w.__data)):H.isMatrix3?(w.__data[0]=H.elements[0],w.__data[1]=H.elements[1],w.__data[2]=H.elements[2],w.__data[3]=0,w.__data[4]=H.elements[3],w.__data[5]=H.elements[4],w.__data[6]=H.elements[5],w.__data[7]=0,w.__data[8]=H.elements[6],w.__data[9]=H.elements[7],w.__data[10]=H.elements[8],w.__data[11]=0):(H.toArray(w.__data,N),N+=J.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,te,w.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function m(M,x,E,P){const R=M.value,b=x+"_"+E;if(P[b]===void 0)return typeof R=="number"||typeof R=="boolean"?P[b]=R:P[b]=R.clone(),!0;{const U=P[b];if(typeof R=="number"||typeof R=="boolean"){if(U!==R)return P[b]=R,!0}else if(U.equals(R)===!1)return U.copy(R),!0}return!1}function g(M){const x=M.uniforms;let E=0;const P=16;for(let b=0,U=x.length;b<U;b++){const W=Array.isArray(x[b])?x[b]:[x[b]];for(let v=0,w=W.length;v<w;v++){const te=W[v],Z=Array.isArray(te.value)?te.value:[te.value];for(let N=0,X=Z.length;N<X;N++){const H=Z[N],J=_(H),V=E%P;V!==0&&P-V<J.boundary&&(E+=P-V),te.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),te.__offset=E,E+=J.storage}}}const R=E%P;return R>0&&(E+=P-R),M.__size=E,M.__cache={},this}function _(M){const x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function p(M){const x=M.target;x.removeEventListener("dispose",p);const E=o.indexOf(x.__bindingPointIndex);o.splice(E,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function f(){for(const M in i)r.deleteBuffer(i[M]);o=[],i={},s={}}return{bind:c,update:l,dispose:f}}class ha{constructor(e={}){const{canvas:t=Od(),context:n=null,depth:i=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const f=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Pt,this._useLegacyLights=!1,this.toneMapping=Bn,this.toneMappingExposure=1;const x=this;let E=!1,P=0,R=0,b=null,U=-1,W=null;const v=new tt,w=new tt;let te=null;const Z=new Ce(0);let N=0,X=t.width,H=t.height,J=1,V=null,Y=null;const $=new tt(0,0,X,H),re=new tt(0,0,X,H);let fe=!1;const Le=new va;let k=!1,ne=!1,de=null;const we=new Xe,ye=new Te,pe=new L,je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ae(){return b===null?J:1}let I=n;function dt(S,D){for(let z=0;z<S.length;z++){const B=S[z],F=t.getContext(B,D);if(F!==null)return F}return null}try{const S={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ga}`),t.addEventListener("webglcontextlost",ge,!1),t.addEventListener("webglcontextrestored",C,!1),t.addEventListener("webglcontextcreationerror",se,!1),I===null){const D=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&D.shift(),I=dt(D,S),I===null)throw dt(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&I instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Me,Ue,Se,qe,Oe,ze,nt,T,y,G,j,ie,Q,Pe,Ee,ae,le,Ne,oe,ct,He,ve,me,_e;function A(){Me=new Qm(I),Ue=new Ym(I,Me,e),Me.init(Ue),ve=new z0(I,Me,Ue),Se=new O0(I,Me,Ue),qe=new ng(I),Oe=new S0,ze=new F0(I,Me,Se,Oe,Ue,ve,qe),nt=new Km(x),T=new Zm(x),y=new cf(I,Ue),me=new Xm(I,Me,y,Ue),G=new eg(I,y,qe,me),j=new og(I,G,y,qe),oe=new rg(I,Ue,ze),ae=new jm(Oe),ie=new M0(x,nt,T,Me,Ue,me,ae),Q=new q0(x,Oe),Pe=new T0,Ee=new L0(Me,Ue),Ne=new Wm(x,nt,T,Se,j,d,c),le=new U0(x,j,Ue),_e=new Y0(I,qe,Ue,Se),ct=new qm(I,Me,qe,Ue),He=new tg(I,Me,qe,Ue),qe.programs=ie.programs,x.capabilities=Ue,x.extensions=Me,x.properties=Oe,x.renderLists=Pe,x.shadowMap=le,x.state=Se,x.info=qe}A();const K=new W0(x,I);this.xr=K,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const S=Me.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Me.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(S){S!==void 0&&(J=S,this.setSize(X,H,!1))},this.getSize=function(S){return S.set(X,H)},this.setSize=function(S,D,z=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=S,H=D,t.width=Math.floor(S*J),t.height=Math.floor(D*J),z===!0&&(t.style.width=S+"px",t.style.height=D+"px"),this.setViewport(0,0,S,D)},this.getDrawingBufferSize=function(S){return S.set(X*J,H*J).floor()},this.setDrawingBufferSize=function(S,D,z){X=S,H=D,J=z,t.width=Math.floor(S*z),t.height=Math.floor(D*z),this.setViewport(0,0,S,D)},this.getCurrentViewport=function(S){return S.copy(v)},this.getViewport=function(S){return S.copy($)},this.setViewport=function(S,D,z,B){S.isVector4?$.set(S.x,S.y,S.z,S.w):$.set(S,D,z,B),Se.viewport(v.copy($).multiplyScalar(J).round())},this.getScissor=function(S){return S.copy(re)},this.setScissor=function(S,D,z,B){S.isVector4?re.set(S.x,S.y,S.z,S.w):re.set(S,D,z,B),Se.scissor(w.copy(re).multiplyScalar(J).round())},this.getScissorTest=function(){return fe},this.setScissorTest=function(S){Se.setScissorTest(fe=S)},this.setOpaqueSort=function(S){V=S},this.setTransparentSort=function(S){Y=S},this.getClearColor=function(S){return S.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor.apply(Ne,arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha.apply(Ne,arguments)},this.clear=function(S=!0,D=!0,z=!0){let B=0;if(S){let F=!1;if(b!==null){const ue=b.texture.format;F=ue===Ah||ue===bh||ue===Th}if(F){const ue=b.texture.type,xe=ue===kn||ue===On||ue===_a||ue===ni||ue===Mh||ue===Sh,be=Ne.getClearColor(),Re=Ne.getClearAlpha(),Ge=be.r,Ie=be.g,Fe=be.b;xe?(m[0]=Ge,m[1]=Ie,m[2]=Fe,m[3]=Re,I.clearBufferuiv(I.COLOR,0,m)):(g[0]=Ge,g[1]=Ie,g[2]=Fe,g[3]=Re,I.clearBufferiv(I.COLOR,0,g))}else B|=I.COLOR_BUFFER_BIT}D&&(B|=I.DEPTH_BUFFER_BIT),z&&(B|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ge,!1),t.removeEventListener("webglcontextrestored",C,!1),t.removeEventListener("webglcontextcreationerror",se,!1),Pe.dispose(),Ee.dispose(),Oe.dispose(),nt.dispose(),T.dispose(),j.dispose(),me.dispose(),_e.dispose(),ie.dispose(),K.dispose(),K.removeEventListener("sessionstart",lt),K.removeEventListener("sessionend",Ke),de&&(de.dispose(),de=null),it.stop()};function ge(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function C(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const S=qe.autoReset,D=le.enabled,z=le.autoUpdate,B=le.needsUpdate,F=le.type;A(),qe.autoReset=S,le.enabled=D,le.autoUpdate=z,le.needsUpdate=B,le.type=F}function se(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function O(S){const D=S.target;D.removeEventListener("dispose",O),ee(D)}function ee(S){he(S),Oe.remove(S)}function he(S){const D=Oe.get(S).programs;D!==void 0&&(D.forEach(function(z){ie.releaseProgram(z)}),S.isShaderMaterial&&ie.releaseShaderCache(S))}this.renderBufferDirect=function(S,D,z,B,F,ue){D===null&&(D=je);const xe=F.isMesh&&F.matrixWorld.determinant()<0,be=mu(S,D,z,B,F);Se.setMaterial(B,xe);let Re=z.index,Ge=1;if(B.wireframe===!0){if(Re=G.getWireframeAttribute(z),Re===void 0)return;Ge=2}const Ie=z.drawRange,Fe=z.attributes.position;let ht=Ie.start*Ge,Ft=(Ie.start+Ie.count)*Ge;ue!==null&&(ht=Math.max(ht,ue.start*Ge),Ft=Math.min(Ft,(ue.start+ue.count)*Ge)),Re!==null?(ht=Math.max(ht,0),Ft=Math.min(Ft,Re.count)):Fe!=null&&(ht=Math.max(ht,0),Ft=Math.min(Ft,Fe.count));const mt=Ft-ht;if(mt<0||mt===1/0)return;me.setup(F,B,be,z,Re);let un,ot=ct;if(Re!==null&&(un=y.get(Re),ot=He,ot.setIndex(un)),F.isMesh)B.wireframe===!0?(Se.setLineWidth(B.wireframeLinewidth*Ae()),ot.setMode(I.LINES)):ot.setMode(I.TRIANGLES);else if(F.isLine){let Be=B.linewidth;Be===void 0&&(Be=1),Se.setLineWidth(Be*Ae()),F.isLineSegments?ot.setMode(I.LINES):F.isLineLoop?ot.setMode(I.LINE_LOOP):ot.setMode(I.LINE_STRIP)}else F.isPoints?ot.setMode(I.POINTS):F.isSprite&&ot.setMode(I.TRIANGLES);if(F.isBatchedMesh)ot.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else if(F.isInstancedMesh)ot.renderInstances(ht,mt,F.count);else if(z.isInstancedBufferGeometry){const Be=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Vr=Math.min(z.instanceCount,Be);ot.renderInstances(ht,mt,Vr)}else ot.render(ht,mt)};function Ve(S,D,z){S.transparent===!0&&S.side===rn&&S.forceSinglePass===!1?(S.side=Dt,S.needsUpdate=!0,bs(S,D,z),S.side=Sn,S.needsUpdate=!0,bs(S,D,z),S.side=rn):bs(S,D,z)}this.compile=function(S,D,z=null){z===null&&(z=S),p=Ee.get(z),p.init(),M.push(p),z.traverseVisible(function(F){F.isLight&&F.layers.test(D.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),S!==z&&S.traverseVisible(function(F){F.isLight&&F.layers.test(D.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights(x._useLegacyLights);const B=new Set;return S.traverse(function(F){const ue=F.material;if(ue)if(Array.isArray(ue))for(let xe=0;xe<ue.length;xe++){const be=ue[xe];Ve(be,z,F),B.add(be)}else Ve(ue,z,F),B.add(ue)}),M.pop(),p=null,B},this.compileAsync=function(S,D,z=null){const B=this.compile(S,D,z);return new Promise(F=>{function ue(){if(B.forEach(function(xe){Oe.get(xe).currentProgram.isReady()&&B.delete(xe)}),B.size===0){F(S);return}setTimeout(ue,10)}Me.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let $e=null;function et(S){$e&&$e(S)}function lt(){it.stop()}function Ke(){it.start()}const it=new qh;it.setAnimationLoop(et),typeof self<"u"&&it.setContext(self),this.setAnimationLoop=function(S){$e=S,K.setAnimationLoop(S),S===null?it.stop():it.start()},K.addEventListener("sessionstart",lt),K.addEventListener("sessionend",Ke),this.render=function(S,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(D),D=K.getCamera()),S.isScene===!0&&S.onBeforeRender(x,S,D,b),p=Ee.get(S,M.length),p.init(),M.push(p),we.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Le.setFromProjectionMatrix(we),ne=this.localClippingEnabled,k=ae.init(this.clippingPlanes,ne),_=Pe.get(S,f.length),_.init(),f.push(_),Et(S,D,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(V,Y),this.info.render.frame++,k===!0&&ae.beginShadows();const z=p.state.shadowsArray;if(le.render(z,S,D),k===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset(),(K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1)&&Ne.render(_,S),p.setupLights(x._useLegacyLights),D.isArrayCamera){const B=D.cameras;for(let F=0,ue=B.length;F<ue;F++){const xe=B[F];Gn(_,S,xe,xe.viewport)}}else Gn(_,S,D);b!==null&&(ze.updateMultisampleRenderTarget(b),ze.updateRenderTargetMipmap(b)),S.isScene===!0&&S.onAfterRender(x,S,D),me.resetDefaultState(),U=-1,W=null,M.pop(),M.length>0?p=M[M.length-1]:p=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function Et(S,D,z,B){if(S.visible===!1)return;if(S.layers.test(D.layers)){if(S.isGroup)z=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(D);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Le.intersectsSprite(S)){B&&pe.setFromMatrixPosition(S.matrixWorld).applyMatrix4(we);const xe=j.update(S),be=S.material;be.visible&&_.push(S,xe,be,z,pe.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Le.intersectsObject(S))){const xe=j.update(S),be=S.material;if(B&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),pe.copy(S.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),pe.copy(xe.boundingSphere.center)),pe.applyMatrix4(S.matrixWorld).applyMatrix4(we)),Array.isArray(be)){const Re=xe.groups;for(let Ge=0,Ie=Re.length;Ge<Ie;Ge++){const Fe=Re[Ge],ht=be[Fe.materialIndex];ht&&ht.visible&&_.push(S,xe,ht,z,pe.z,Fe)}}else be.visible&&_.push(S,xe,be,z,pe.z,null)}}const ue=S.children;for(let xe=0,be=ue.length;xe<be;xe++)Et(ue[xe],D,z,B)}function Gn(S,D,z,B){const F=S.opaque,ue=S.transmissive,xe=S.transparent;p.setupLightsView(z),k===!0&&ae.setGlobalState(x.clippingPlanes,z),ue.length>0&&Es(F,ue,D,z),B&&Se.viewport(v.copy(B)),F.length>0&&Ts(F,D,z),ue.length>0&&Ts(ue,D,z),xe.length>0&&Ts(xe,D,z),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function Es(S,D,z,B){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;const ue=Ue.isWebGL2;de===null&&(de=new si(1,1,{generateMipmaps:!0,type:Me.has("EXT_color_buffer_half_float")?gs:kn,minFilter:vn,samples:ue?4:0})),x.getDrawingBufferSize(ye),ue?de.setSize(ye.x,ye.y):de.setSize(Nr(ye.x),Nr(ye.y));const xe=x.getRenderTarget();x.setRenderTarget(de),x.getClearColor(Z),N=x.getClearAlpha(),N<1&&x.setClearColor(16777215,.5),x.clear();const be=x.toneMapping;x.toneMapping=Bn,Ts(S,z,B),ze.updateMultisampleRenderTarget(de),ze.updateRenderTargetMipmap(de);let Re=!1;for(let Ge=0,Ie=D.length;Ge<Ie;Ge++){const Fe=D[Ge],ht=Fe.object,Ft=Fe.geometry,mt=Fe.material,un=Fe.group;if(mt.side===rn&&ht.layers.test(B.layers)){const ot=mt.side;mt.side=Dt,mt.needsUpdate=!0,Da(ht,z,B,Ft,mt,un),mt.side=ot,mt.needsUpdate=!0,Re=!0}}Re===!0&&(ze.updateMultisampleRenderTarget(de),ze.updateRenderTargetMipmap(de)),x.setRenderTarget(xe),x.setClearColor(Z,N),x.toneMapping=be}function Ts(S,D,z){const B=D.isScene===!0?D.overrideMaterial:null;for(let F=0,ue=S.length;F<ue;F++){const xe=S[F],be=xe.object,Re=xe.geometry,Ge=B===null?xe.material:B,Ie=xe.group;be.layers.test(z.layers)&&Da(be,D,z,Re,Ge,Ie)}}function Da(S,D,z,B,F,ue){S.onBeforeRender(x,D,z,B,F,ue),S.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),F.onBeforeRender(x,D,z,B,S,ue),F.transparent===!0&&F.side===rn&&F.forceSinglePass===!1?(F.side=Dt,F.needsUpdate=!0,x.renderBufferDirect(z,D,B,F,S,ue),F.side=Sn,F.needsUpdate=!0,x.renderBufferDirect(z,D,B,F,S,ue),F.side=rn):x.renderBufferDirect(z,D,B,F,S,ue),S.onAfterRender(x,D,z,B,F,ue)}function bs(S,D,z){D.isScene!==!0&&(D=je);const B=Oe.get(S),F=p.state.lights,ue=p.state.shadowsArray,xe=F.state.version,be=ie.getParameters(S,F.state,ue,D,z),Re=ie.getProgramCacheKey(be);let Ge=B.programs;B.environment=S.isMeshStandardMaterial?D.environment:null,B.fog=D.fog,B.envMap=(S.isMeshStandardMaterial?T:nt).get(S.envMap||B.environment),B.envMapRotation=B.environment!==null&&S.envMap===null?D.environmentRotation:S.envMapRotation,Ge===void 0&&(S.addEventListener("dispose",O),Ge=new Map,B.programs=Ge);let Ie=Ge.get(Re);if(Ie!==void 0){if(B.currentProgram===Ie&&B.lightsStateVersion===xe)return Ua(S,be),Ie}else be.uniforms=ie.getUniforms(S),S.onBuild(z,be,x),S.onBeforeCompile(be,x),Ie=ie.acquireProgram(be,Re),Ge.set(Re,Ie),B.uniforms=be.uniforms;const Fe=B.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Fe.clippingPlanes=ae.uniform),Ua(S,be),B.needsLights=_u(S),B.lightsStateVersion=xe,B.needsLights&&(Fe.ambientLightColor.value=F.state.ambient,Fe.lightProbe.value=F.state.probe,Fe.directionalLights.value=F.state.directional,Fe.directionalLightShadows.value=F.state.directionalShadow,Fe.spotLights.value=F.state.spot,Fe.spotLightShadows.value=F.state.spotShadow,Fe.rectAreaLights.value=F.state.rectArea,Fe.ltc_1.value=F.state.rectAreaLTC1,Fe.ltc_2.value=F.state.rectAreaLTC2,Fe.pointLights.value=F.state.point,Fe.pointLightShadows.value=F.state.pointShadow,Fe.hemisphereLights.value=F.state.hemi,Fe.directionalShadowMap.value=F.state.directionalShadowMap,Fe.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Fe.spotShadowMap.value=F.state.spotShadowMap,Fe.spotLightMatrix.value=F.state.spotLightMatrix,Fe.spotLightMap.value=F.state.spotLightMap,Fe.pointShadowMap.value=F.state.pointShadowMap,Fe.pointShadowMatrix.value=F.state.pointShadowMatrix),B.currentProgram=Ie,B.uniformsList=null,Ie}function Ia(S){if(S.uniformsList===null){const D=S.currentProgram.getUniforms();S.uniformsList=Mr.seqWithValue(D.seq,S.uniforms)}return S.uniformsList}function Ua(S,D){const z=Oe.get(S);z.outputColorSpace=D.outputColorSpace,z.batching=D.batching,z.instancing=D.instancing,z.instancingColor=D.instancingColor,z.instancingMorph=D.instancingMorph,z.skinning=D.skinning,z.morphTargets=D.morphTargets,z.morphNormals=D.morphNormals,z.morphColors=D.morphColors,z.morphTargetsCount=D.morphTargetsCount,z.numClippingPlanes=D.numClippingPlanes,z.numIntersection=D.numClipIntersection,z.vertexAlphas=D.vertexAlphas,z.vertexTangents=D.vertexTangents,z.toneMapping=D.toneMapping}function mu(S,D,z,B,F){D.isScene!==!0&&(D=je),ze.resetTextureUnits();const ue=D.fog,xe=B.isMeshStandardMaterial?D.environment:null,be=b===null?x.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:St,Re=(B.isMeshStandardMaterial?T:nt).get(B.envMap||xe),Ge=B.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ie=!!z.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Fe=!!z.morphAttributes.position,ht=!!z.morphAttributes.normal,Ft=!!z.morphAttributes.color;let mt=Bn;B.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(mt=x.toneMapping);const un=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ot=un!==void 0?un.length:0,Be=Oe.get(B),Vr=p.state.lights;if(k===!0&&(ne===!0||S!==W)){const kt=S===W&&B.id===U;ae.setState(B,S,kt)}let rt=!1;B.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==Vr.state.version||Be.outputColorSpace!==be||F.isBatchedMesh&&Be.batching===!1||!F.isBatchedMesh&&Be.batching===!0||F.isInstancedMesh&&Be.instancing===!1||!F.isInstancedMesh&&Be.instancing===!0||F.isSkinnedMesh&&Be.skinning===!1||!F.isSkinnedMesh&&Be.skinning===!0||F.isInstancedMesh&&Be.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Be.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Be.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Be.instancingMorph===!1&&F.morphTexture!==null||Be.envMap!==Re||B.fog===!0&&Be.fog!==ue||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==ae.numPlanes||Be.numIntersection!==ae.numIntersection)||Be.vertexAlphas!==Ge||Be.vertexTangents!==Ie||Be.morphTargets!==Fe||Be.morphNormals!==ht||Be.morphColors!==Ft||Be.toneMapping!==mt||Ue.isWebGL2===!0&&Be.morphTargetsCount!==ot)&&(rt=!0):(rt=!0,Be.__version=B.version);let Vn=Be.currentProgram;rt===!0&&(Vn=bs(B,D,F));let Oa=!1,$i=!1,Wr=!1;const Tt=Vn.getUniforms(),Wn=Be.uniforms;if(Se.useProgram(Vn.program)&&(Oa=!0,$i=!0,Wr=!0),B.id!==U&&(U=B.id,$i=!0),Oa||W!==S){Tt.setValue(I,"projectionMatrix",S.projectionMatrix),Tt.setValue(I,"viewMatrix",S.matrixWorldInverse);const kt=Tt.map.cameraPosition;kt!==void 0&&kt.setValue(I,pe.setFromMatrixPosition(S.matrixWorld)),Ue.logarithmicDepthBuffer&&Tt.setValue(I,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Tt.setValue(I,"isOrthographic",S.isOrthographicCamera===!0),W!==S&&(W=S,$i=!0,Wr=!0)}if(F.isSkinnedMesh){Tt.setOptional(I,F,"bindMatrix"),Tt.setOptional(I,F,"bindMatrixInverse");const kt=F.skeleton;kt&&(Ue.floatVertexTextures?(kt.boneTexture===null&&kt.computeBoneTexture(),Tt.setValue(I,"boneTexture",kt.boneTexture,ze)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}F.isBatchedMesh&&(Tt.setOptional(I,F,"batchingTexture"),Tt.setValue(I,"batchingTexture",F._matricesTexture,ze));const Xr=z.morphAttributes;if((Xr.position!==void 0||Xr.normal!==void 0||Xr.color!==void 0&&Ue.isWebGL2===!0)&&oe.update(F,z,Vn),($i||Be.receiveShadow!==F.receiveShadow)&&(Be.receiveShadow=F.receiveShadow,Tt.setValue(I,"receiveShadow",F.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Wn.envMap.value=Re,Wn.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),$i&&(Tt.setValue(I,"toneMappingExposure",x.toneMappingExposure),Be.needsLights&&gu(Wn,Wr),ue&&B.fog===!0&&Q.refreshFogUniforms(Wn,ue),Q.refreshMaterialUniforms(Wn,B,J,H,de),Mr.upload(I,Ia(Be),Wn,ze)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Mr.upload(I,Ia(Be),Wn,ze),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Tt.setValue(I,"center",F.center),Tt.setValue(I,"modelViewMatrix",F.modelViewMatrix),Tt.setValue(I,"normalMatrix",F.normalMatrix),Tt.setValue(I,"modelMatrix",F.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const kt=B.uniformsGroups;for(let qr=0,xu=kt.length;qr<xu;qr++)if(Ue.isWebGL2){const Fa=kt[qr];_e.update(Fa,Vn),_e.bind(Fa,Vn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Vn}function gu(S,D){S.ambientLightColor.needsUpdate=D,S.lightProbe.needsUpdate=D,S.directionalLights.needsUpdate=D,S.directionalLightShadows.needsUpdate=D,S.pointLights.needsUpdate=D,S.pointLightShadows.needsUpdate=D,S.spotLights.needsUpdate=D,S.spotLightShadows.needsUpdate=D,S.rectAreaLights.needsUpdate=D,S.hemisphereLights.needsUpdate=D}function _u(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(S,D,z){Oe.get(S.texture).__webglTexture=D,Oe.get(S.depthTexture).__webglTexture=z;const B=Oe.get(S);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=z===void 0,B.__autoAllocateDepthBuffer||Me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,D){const z=Oe.get(S);z.__webglFramebuffer=D,z.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(S,D=0,z=0){b=S,P=D,R=z;let B=!0,F=null,ue=!1,xe=!1;if(S){const Re=Oe.get(S);Re.__useDefaultFramebuffer!==void 0?(Se.bindFramebuffer(I.FRAMEBUFFER,null),B=!1):Re.__webglFramebuffer===void 0?ze.setupRenderTarget(S):Re.__hasExternalTextures&&ze.rebindTextures(S,Oe.get(S.texture).__webglTexture,Oe.get(S.depthTexture).__webglTexture);const Ge=S.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(xe=!0);const Ie=Oe.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ie[D])?F=Ie[D][z]:F=Ie[D],ue=!0):Ue.isWebGL2&&S.samples>0&&ze.useMultisampledRTT(S)===!1?F=Oe.get(S).__webglMultisampledFramebuffer:Array.isArray(Ie)?F=Ie[z]:F=Ie,v.copy(S.viewport),w.copy(S.scissor),te=S.scissorTest}else v.copy($).multiplyScalar(J).floor(),w.copy(re).multiplyScalar(J).floor(),te=fe;if(Se.bindFramebuffer(I.FRAMEBUFFER,F)&&Ue.drawBuffers&&B&&Se.drawBuffers(S,F),Se.viewport(v),Se.scissor(w),Se.setScissorTest(te),ue){const Re=Oe.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+D,Re.__webglTexture,z)}else if(xe){const Re=Oe.get(S.texture),Ge=D||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Re.__webglTexture,z||0,Ge)}U=-1},this.readRenderTargetPixels=function(S,D,z,B,F,ue,xe){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=Oe.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&xe!==void 0&&(be=be[xe]),be){Se.bindFramebuffer(I.FRAMEBUFFER,be);try{const Re=S.texture,Ge=Re.format,Ie=Re.type;if(Ge!==qt&&ve.convert(Ge)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Fe=Ie===gs&&(Me.has("EXT_color_buffer_half_float")||Ue.isWebGL2&&Me.has("EXT_color_buffer_float"));if(Ie!==kn&&ve.convert(Ie)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ie===$t&&(Ue.isWebGL2||Me.has("OES_texture_float")||Me.has("WEBGL_color_buffer_float")))&&!Fe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=S.width-B&&z>=0&&z<=S.height-F&&I.readPixels(D,z,B,F,ve.convert(Ge),ve.convert(Ie),ue)}finally{const Re=b!==null?Oe.get(b).__webglFramebuffer:null;Se.bindFramebuffer(I.FRAMEBUFFER,Re)}}},this.copyFramebufferToTexture=function(S,D,z=0){const B=Math.pow(2,-z),F=Math.floor(D.image.width*B),ue=Math.floor(D.image.height*B);ze.setTexture2D(D,0),I.copyTexSubImage2D(I.TEXTURE_2D,z,0,0,S.x,S.y,F,ue),Se.unbindTexture()},this.copyTextureToTexture=function(S,D,z,B=0){const F=D.image.width,ue=D.image.height,xe=ve.convert(z.format),be=ve.convert(z.type);ze.setTexture2D(z,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,z.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,z.unpackAlignment),D.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,B,S.x,S.y,F,ue,xe,be,D.image.data):D.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,B,S.x,S.y,D.mipmaps[0].width,D.mipmaps[0].height,xe,D.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,B,S.x,S.y,xe,be,D.image),B===0&&z.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),Se.unbindTexture()},this.copyTextureToTexture3D=function(S,D,z,B,F=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ue=Math.round(S.max.x-S.min.x),xe=Math.round(S.max.y-S.min.y),be=S.max.z-S.min.z+1,Re=ve.convert(B.format),Ge=ve.convert(B.type);let Ie;if(B.isData3DTexture)ze.setTexture3D(B,0),Ie=I.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)ze.setTexture2DArray(B,0),Ie=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,B.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,B.unpackAlignment);const Fe=I.getParameter(I.UNPACK_ROW_LENGTH),ht=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Ft=I.getParameter(I.UNPACK_SKIP_PIXELS),mt=I.getParameter(I.UNPACK_SKIP_ROWS),un=I.getParameter(I.UNPACK_SKIP_IMAGES),ot=z.isCompressedTexture?z.mipmaps[F]:z.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,ot.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ot.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,S.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,S.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,S.min.z),z.isDataTexture||z.isData3DTexture?I.texSubImage3D(Ie,F,D.x,D.y,D.z,ue,xe,be,Re,Ge,ot.data):B.isCompressedArrayTexture?I.compressedTexSubImage3D(Ie,F,D.x,D.y,D.z,ue,xe,be,Re,ot.data):I.texSubImage3D(Ie,F,D.x,D.y,D.z,ue,xe,be,Re,Ge,ot),I.pixelStorei(I.UNPACK_ROW_LENGTH,Fe),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ht),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ft),I.pixelStorei(I.UNPACK_SKIP_ROWS,mt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,un),F===0&&B.generateMipmaps&&I.generateMipmap(Ie),Se.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?ze.setTextureCube(S,0):S.isData3DTexture?ze.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?ze.setTexture2DArray(S,0):ze.setTexture2D(S,0),Se.unbindTexture()},this.resetState=function(){P=0,R=0,b=null,Se.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===xa?"display-p3":"srgb",t.unpackColorSpace=Je.workingColorSpace===Or?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class j0 extends ha{}j0.prototype.isWebGL1Renderer=!0;class Vi extends at{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cn,this.environmentRotation=new cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class K0{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ra,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=en()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Ih("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=en()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=en()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ct=new L;class Ea{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Zt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ze(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Zt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Zt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Zt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Zt(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array),i=Ze(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array),i=Ze(i,this.array),s=Ze(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Mt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ea(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const cl=new L,ll=new tt,hl=new tt,J0=new L,ul=new Xe,Ys=new L,bo=new ln,dl=new Xe,Ao=new Ms;class $0 extends Nt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Wa,this.bindMatrix=new Xe,this.bindMatrixInverse=new Xe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ut),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ys),this.boundingBox.expandByPoint(Ys)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ln),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ys),this.boundingSphere.expandByPoint(Ys)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),bo.copy(this.boundingSphere),bo.applyMatrix4(i),e.ray.intersectsSphere(bo)!==!1&&(dl.copy(i).invert(),Ao.copy(e.ray).applyMatrix4(dl),!(this.boundingBox!==null&&Ao.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ao)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new tt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Wa?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===nd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;ll.fromBufferAttribute(i.attributes.skinIndex,e),hl.fromBufferAttribute(i.attributes.skinWeight,e),cl.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=hl.getComponent(s);if(o!==0){const a=ll.getComponent(s);ul.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(J0.copy(cl).applyMatrix4(ul),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Qh extends at{constructor(){super(),this.isBone=!0,this.type="Bone"}}class eu extends xt{constructor(e=null,t=1,n=1,i,s,o,a,c,l=_t,h=_t,u,d){super(null,o,a,c,l,h,i,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const fl=new Xe,Z0=new Xe;class Ta{constructor(e=[],t=[]){this.uuid=en(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Xe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Xe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:Z0;fl.multiplyMatrices(a,t[s]),fl.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Ta(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new eu(t,e,e,qt,$t);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Qh),this.bones.push(o),this.boneInverses.push(new Xe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class ua extends Mt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const bi=new Xe,pl=new Xe,js=[],ml=new Ut,Q0=new Xe,ns=new Nt,is=new ln;class e_ extends Nt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ua(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Q0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ut),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,bi),ml.copy(e.boundingBox).applyMatrix4(bi),this.boundingBox.union(ml)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ln),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,bi),is.copy(e.boundingSphere).applyMatrix4(bi),this.boundingSphere.union(is)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(ns.geometry=this.geometry,ns.material=this.material,ns.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),is.copy(this.boundingSphere),is.applyMatrix4(n),e.ray.intersectsSphere(is)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,bi),pl.multiplyMatrices(n,bi),ns.matrixWorld=pl,ns.raycast(e,js);for(let o=0,a=js.length;o<a;o++){const c=js[o];c.instanceId=s,c.object=this,t.push(c)}js.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ua(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new eu(new Float32Array(i*this.count),i,this.count,Eh,$t));const s=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=i*e;s[c]=a,s.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Ii extends an{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const gl=new L,_l=new L,xl=new Xe,wo=new Ms,Ks=new ln;class ba extends at{constructor(e=new It,t=new Ii){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)gl.fromBufferAttribute(t,i-1),_l.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=gl.distanceTo(_l);e.setAttribute("lineDistance",new Yt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ks.copy(n.boundingSphere),Ks.applyMatrix4(i),Ks.radius+=s,e.ray.intersectsSphere(Ks)===!1)return;xl.copy(i).invert(),wo.copy(e.ray).applyMatrix4(xl);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new L,h=new L,u=new L,d=new L,m=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){const f=Math.max(0,o.start),M=Math.min(g.count,o.start+o.count);for(let x=f,E=M-1;x<E;x+=m){const P=g.getX(x),R=g.getX(x+1);if(l.fromBufferAttribute(p,P),h.fromBufferAttribute(p,R),wo.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);const U=e.ray.origin.distanceTo(d);U<e.near||U>e.far||t.push({distance:U,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,o.start),M=Math.min(p.count,o.start+o.count);for(let x=f,E=M-1;x<E;x+=m){if(l.fromBufferAttribute(p,x),h.fromBufferAttribute(p,x+1),wo.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(d);R<e.near||R>e.far||t.push({distance:R,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const yl=new L,vl=new L;class ps extends ba{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)yl.fromBufferAttribute(t,i),vl.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+yl.distanceTo(vl);e.setAttribute("lineDistance",new Yt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class t_ extends ba{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class tu extends an{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ml=new Xe,da=new Ms,Js=new ln,$s=new L;class n_ extends at{constructor(e=new It,t=new tu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Js.copy(n.boundingSphere),Js.applyMatrix4(i),Js.radius+=s,e.ray.intersectsSphere(Js)===!1)return;Ml.copy(i).invert(),da.copy(e.ray).applyMatrix4(Ml);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),m=Math.min(l.count,o.start+o.count);for(let g=d,_=m;g<_;g++){const p=l.getX(g);$s.fromBufferAttribute(u,p),Sl($s,p,c,i,e,t,this)}}else{const d=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let g=d,_=m;g<_;g++)$s.fromBufferAttribute(u,g),Sl($s,g,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Sl(r,e,t,n,i,s,o){const a=da.distanceSqToPoint(r);if(a<t){const c=new L;da.closestPointToPoint(r,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}class Aa extends an{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ch,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class En extends Aa{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Te(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return vt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ce(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ce(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ce(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Zs(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function i_(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function s_(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function El(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let c=0;c!==e;++c)i[o++]=r[a+c]}return i}function nu(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class Ss{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class r_ extends Ss{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:gc,endingEnd:gc}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case _c:s=e,a=2*t-n;break;case xc:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case _c:o=e,c=2*n-t;break;case xc:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,m=this._weightNext,g=(n-t)/(i-t),_=g*g,p=_*g,f=-d*p+2*d*_-d*g,M=(1+d)*p+(-1.5-2*d)*_+(-.5+d)*g+1,x=(-1-m)*p+(1.5+m)*_+.5*g,E=m*p-m*_;for(let P=0;P!==a;++P)s[P]=f*o[h+P]+M*o[l+P]+x*o[c+P]+E*o[u+P];return s}}class o_ extends Ss{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)s[d]=o[l+d]*u+o[c+d]*h;return s}}class a_ extends Ss{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class hn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Zs(t,this.TimeBufferType),this.values=Zs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Zs(e.times,Array),values:Zs(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new a_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new o_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new r_(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case _s:t=this.InterpolantFactoryMethodDiscrete;break;case ki:t=this.InterpolantFactoryMethodLinear;break;case Zr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return _s;case this.InterpolantFactoryMethodLinear:return ki;case this.InterpolantFactoryMethodSmooth:return Zr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&i_(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Zr,s=e.length-1;let o=1;for(let a=1;a<s;++a){let c=!1;const l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(i)c=!0;else{const u=a*n,d=u-n,m=u+n;for(let g=0;g!==n;++g){const _=t[u+g];if(_!==t[d+g]||_!==t[m+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const u=a*n,d=o*n;for(let m=0;m!==n;++m)t[d+m]=t[u+m]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}hn.prototype.TimeBufferType=Float32Array;hn.prototype.ValueBufferType=Float32Array;hn.prototype.DefaultInterpolation=ki;class ji extends hn{}ji.prototype.ValueTypeName="bool";ji.prototype.ValueBufferType=Array;ji.prototype.DefaultInterpolation=_s;ji.prototype.InterpolantFactoryMethodLinear=void 0;ji.prototype.InterpolantFactoryMethodSmooth=void 0;class iu extends hn{}iu.prototype.ValueTypeName="color";class Wi extends hn{}Wi.prototype.ValueTypeName="number";class c_ extends Ss{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t);let l=e*a;for(let h=l+a;l!==h;l+=4)nn.slerpFlat(s,0,o,l-a,o,l,c);return s}}class ri extends hn{InterpolantFactoryMethodLinear(e){return new c_(this.times,this.values,this.getValueSize(),e)}}ri.prototype.ValueTypeName="quaternion";ri.prototype.DefaultInterpolation=ki;ri.prototype.InterpolantFactoryMethodSmooth=void 0;class Ki extends hn{}Ki.prototype.ValueTypeName="string";Ki.prototype.ValueBufferType=Array;Ki.prototype.DefaultInterpolation=_s;Ki.prototype.InterpolantFactoryMethodLinear=void 0;Ki.prototype.InterpolantFactoryMethodSmooth=void 0;class Xi extends hn{}Xi.prototype.ValueTypeName="vector";class l_{constructor(e,t=-1,n,i=hd){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=en(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(u_(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(hn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let c=[],l=[];c.push((a+s-1)%s,a,(a+1)%s),l.push(0,1,0);const h=s_(c);c=El(c,1,h),l=El(l,1,h),!i&&c[0]===0&&(c.push(s),l.push(l[0])),o.push(new Wi(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],h=l.name.match(s);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,m,g,_){if(m.length!==0){const p=[],f=[];nu(m,p,f,g),p.length!==0&&_.push(new u(d,p,f))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const m={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)m[d[g].morphTargets[_]]=-1;for(const _ in m){const p=[],f=[];for(let M=0;M!==d[g].morphTargets.length;++M){const x=d[g];p.push(x.time),f.push(x.morphTarget===_?1:0)}i.push(new Wi(".morphTargetInfluence["+_+"]",p,f))}c=m.length*o}else{const m=".bones["+t[u].name+"]";n(Xi,m+".position",d,"pos",i),n(ri,m+".quaternion",d,"rot",i),n(Xi,m+".scale",d,"scl",i)}}return i.length===0?null:new this(s,c,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function h_(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Wi;case"vector":case"vector2":case"vector3":case"vector4":return Xi;case"color":return iu;case"quaternion":return ri;case"bool":case"boolean":return ji;case"string":return Ki}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function u_(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=h_(r.type);if(r.times===void 0){const t=[],n=[];nu(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Fn={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class d_{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const m=l[u],g=l[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}}const f_=new d_;class Ji{constructor(e){this.manager=e!==void 0?e:f_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ji.DEFAULT_MATERIAL_NAME="__DEFAULT";const _n={};class p_ extends Error{constructor(e,t){super(e),this.response=t}}class su extends Ji{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Fn.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(_n[e]!==void 0){_n[e].push({onLoad:t,onProgress:n,onError:i});return}_n[e]=[],_n[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=_n[e],u=l.body.getReader(),d=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),m=d?parseInt(d):0,g=m!==0;let _=0;const p=new ReadableStream({start(f){M();function M(){u.read().then(({done:x,value:E})=>{if(x)f.close();else{_+=E.byteLength;const P=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:m});for(let R=0,b=h.length;R<b;R++){const U=h[R];U.onProgress&&U.onProgress(P)}f.enqueue(E),M()}})}}});return new Response(p)}else throw new p_(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,m=new TextDecoder(d);return l.arrayBuffer().then(g=>m.decode(g))}}}).then(l=>{Fn.add(e,l);const h=_n[e];delete _n[e];for(let u=0,d=h.length;u<d;u++){const m=h[u];m.onLoad&&m.onLoad(l)}}).catch(l=>{const h=_n[e];if(h===void 0)throw this.manager.itemError(e),l;delete _n[e];for(let u=0,d=h.length;u<d;u++){const m=h[u];m.onError&&m.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class m_ extends Ji{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Fn.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=xs("img");function c(){h(),Fn.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(u){h(),i&&i(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class g_ extends Ji{constructor(e){super(e)}load(e,t,n,i){const s=new xt,o=new m_(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Br extends at{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Ro=new Xe,Tl=new L,bl=new L;class wa{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Te(512,512),this.map=null,this.mapPass=null,this.matrix=new Xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new va,this._frameExtents=new Te(1,1),this._viewportCount=1,this._viewports=[new tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Tl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Tl),bl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(bl),t.updateMatrixWorld(),Ro.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ro),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ro)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class __ extends wa{constructor(){super(new Rt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Hi*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class x_ extends Br{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(at.DEFAULT_UP),this.updateMatrix(),this.target=new at,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new __}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Al=new Xe,ss=new L,Co=new L;class y_ extends wa{constructor(){super(new Rt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Te(4,2),this._viewportCount=6,this._viewports=[new tt(2,1,1,1),new tt(0,1,1,1),new tt(3,1,1,1),new tt(1,1,1,1),new tt(3,0,1,1),new tt(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ss.setFromMatrixPosition(e.matrixWorld),n.position.copy(ss),Co.copy(n.position),Co.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Co),n.updateMatrixWorld(),i.makeTranslation(-ss.x,-ss.y,-ss.z),Al.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Al)}}class v_ extends Br{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new y_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class M_ extends wa{constructor(){super(new Ma(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class S_ extends Br{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(at.DEFAULT_UP),this.updateMatrix(),this.target=new at,this.shadow=new M_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class E_ extends Br{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ms{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class T_ extends Ji{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Fn.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),s.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){return Fn.add(e,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){i&&i(l),Fn.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});Fn.add(e,c),s.manager.itemStart(e)}}const Ra="\\[\\]\\.:\\/",b_=new RegExp("["+Ra+"]","g"),Ca="[^"+Ra+"]",A_="[^"+Ra.replace("\\.","")+"]",w_=/((?:WC+[\/:])*)/.source.replace("WC",Ca),R_=/(WCOD+)?/.source.replace("WCOD",A_),C_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ca),L_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ca),P_=new RegExp("^"+w_+R_+C_+L_+"$"),N_=["material","materials","bones","map"];class D_{constructor(e,t,n){const i=n||Qe.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Qe{constructor(e,t,n){this.path=t,this.parsedPath=n||Qe.parseTrackName(t),this.node=Qe.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Qe.Composite(e,t,n):new Qe(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(b_,"")}static parseTrackName(e){const t=P_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);N_.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Qe.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[i];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Qe.Composite=D_;Qe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Qe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Qe.prototype.GetterByBindingType=[Qe.prototype._getValue_direct,Qe.prototype._getValue_array,Qe.prototype._getValue_arrayElement,Qe.prototype._getValue_toArray];Qe.prototype.SetterByBindingTypeAndVersioning=[[Qe.prototype._setValue_direct,Qe.prototype._setValue_direct_setNeedsUpdate,Qe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_array,Qe.prototype._setValue_array_setNeedsUpdate,Qe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_arrayElement,Qe.prototype._setValue_arrayElement_setNeedsUpdate,Qe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_fromArray,Qe.prototype._setValue_fromArray_setNeedsUpdate,Qe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class wl{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(vt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Qs=new Ut;class I_ extends ps{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(8*3),s=new It;s.setIndex(new Mt(n,1)),s.setAttribute("position",new Mt(i,3)),super(s,new Ii({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&Qs.setFromObject(this.object),Qs.isEmpty())return;const t=Qs.min,n=Qs.max,i=this.geometry.attributes.position,s=i.array;s[0]=n.x,s[1]=n.y,s[2]=n.z,s[3]=t.x,s[4]=n.y,s[5]=n.z,s[6]=t.x,s[7]=t.y,s[8]=n.z,s[9]=n.x,s[10]=t.y,s[11]=n.z,s[12]=n.x,s[13]=n.y,s[14]=t.z,s[15]=t.x,s[16]=n.y,s[17]=t.z,s[18]=t.x,s[19]=t.y,s[20]=t.z,s[21]=n.x,s[22]=t.y,s[23]=t.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ga}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ga);const Rl={type:"change"},Lo={type:"start"},Cl={type:"end"},er=new Ms,Ll=new Dn,U_=Math.cos(70*Ph.DEG2RAD);class Pl extends oi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ai.ROTATE,MIDDLE:ai.DOLLY,RIGHT:ai.PAN},this.touches={ONE:ci.ROTATE,TWO:ci.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(A){A.addEventListener("keydown",Ee),this._domElementKeyEvents=A},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ee),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Rl),n.update(),s=i.NONE},this.update=function(){const A=new L,K=new nn().setFromUnitVectors(e.up,new L(0,1,0)),ge=K.clone().invert(),C=new L,se=new nn,O=new L,ee=2*Math.PI;return function(Ve=null){const $e=n.object.position;A.copy($e).sub(n.target),A.applyQuaternion(K),a.setFromVector3(A),n.autoRotate&&s===i.NONE&&te(v(Ve)),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let et=n.minAzimuthAngle,lt=n.maxAzimuthAngle;isFinite(et)&&isFinite(lt)&&(et<-Math.PI?et+=ee:et>Math.PI&&(et-=ee),lt<-Math.PI?lt+=ee:lt>Math.PI&&(lt-=ee),et<=lt?a.theta=Math.max(et,Math.min(lt,a.theta)):a.theta=a.theta>(et+lt)/2?Math.max(et,a.theta):Math.min(lt,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let Ke=!1;if(n.zoomToCursor&&R||n.object.isOrthographicCamera)a.radius=$(a.radius);else{const it=a.radius;a.radius=$(a.radius*l),Ke=it!=a.radius}if(A.setFromSpherical(a),A.applyQuaternion(ge),$e.copy(n.target).add(A),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),h.set(0,0,0)),n.zoomToCursor&&R){let it=null;if(n.object.isPerspectiveCamera){const Et=A.length();it=$(Et*l);const Gn=Et-it;n.object.position.addScaledVector(E,Gn),n.object.updateMatrixWorld(),Ke=!!Gn}else if(n.object.isOrthographicCamera){const Et=new L(P.x,P.y,0);Et.unproject(n.object);const Gn=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),Ke=Gn!==n.object.zoom;const Es=new L(P.x,P.y,0);Es.unproject(n.object),n.object.position.sub(Es).add(Et),n.object.updateMatrixWorld(),it=A.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;it!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(it).add(n.object.position):(er.origin.copy(n.object.position),er.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(er.direction))<U_?e.lookAt(n.target):(Ll.setFromNormalAndCoplanarPoint(n.object.up,n.target),er.intersectPlane(Ll,n.target))))}else if(n.object.isOrthographicCamera){const it=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),it!==n.object.zoom&&(n.object.updateProjectionMatrix(),Ke=!0)}return l=1,R=!1,Ke||C.distanceToSquared(n.object.position)>o||8*(1-se.dot(n.object.quaternion))>o||O.distanceToSquared(n.target)>o?(n.dispatchEvent(Rl),C.copy(n.object.position),se.copy(n.object.quaternion),O.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Ne),n.domElement.removeEventListener("pointerdown",ze),n.domElement.removeEventListener("pointercancel",T),n.domElement.removeEventListener("wheel",j),n.domElement.removeEventListener("pointermove",nt),n.domElement.removeEventListener("pointerup",T),n.domElement.getRootNode().removeEventListener("keydown",Q,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Ee),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const o=1e-6,a=new wl,c=new wl;let l=1;const h=new L,u=new Te,d=new Te,m=new Te,g=new Te,_=new Te,p=new Te,f=new Te,M=new Te,x=new Te,E=new L,P=new Te;let R=!1;const b=[],U={};let W=!1;function v(A){return A!==null?2*Math.PI/60*n.autoRotateSpeed*A:2*Math.PI/60/60*n.autoRotateSpeed}function w(A){const K=Math.abs(A*.01);return Math.pow(.95,n.zoomSpeed*K)}function te(A){c.theta-=A}function Z(A){c.phi-=A}const N=function(){const A=new L;return function(ge,C){A.setFromMatrixColumn(C,0),A.multiplyScalar(-ge),h.add(A)}}(),X=function(){const A=new L;return function(ge,C){n.screenSpacePanning===!0?A.setFromMatrixColumn(C,1):(A.setFromMatrixColumn(C,0),A.crossVectors(n.object.up,A)),A.multiplyScalar(ge),h.add(A)}}(),H=function(){const A=new L;return function(ge,C){const se=n.domElement;if(n.object.isPerspectiveCamera){const O=n.object.position;A.copy(O).sub(n.target);let ee=A.length();ee*=Math.tan(n.object.fov/2*Math.PI/180),N(2*ge*ee/se.clientHeight,n.object.matrix),X(2*C*ee/se.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(N(ge*(n.object.right-n.object.left)/n.object.zoom/se.clientWidth,n.object.matrix),X(C*(n.object.top-n.object.bottom)/n.object.zoom/se.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function J(A){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=A:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function V(A){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=A:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Y(A,K){if(!n.zoomToCursor)return;R=!0;const ge=n.domElement.getBoundingClientRect(),C=A-ge.left,se=K-ge.top,O=ge.width,ee=ge.height;P.x=C/O*2-1,P.y=-(se/ee)*2+1,E.set(P.x,P.y,1).unproject(n.object).sub(n.object.position).normalize()}function $(A){return Math.max(n.minDistance,Math.min(n.maxDistance,A))}function re(A){u.set(A.clientX,A.clientY)}function fe(A){Y(A.clientX,A.clientX),f.set(A.clientX,A.clientY)}function Le(A){g.set(A.clientX,A.clientY)}function k(A){d.set(A.clientX,A.clientY),m.subVectors(d,u).multiplyScalar(n.rotateSpeed);const K=n.domElement;te(2*Math.PI*m.x/K.clientHeight),Z(2*Math.PI*m.y/K.clientHeight),u.copy(d),n.update()}function ne(A){M.set(A.clientX,A.clientY),x.subVectors(M,f),x.y>0?J(w(x.y)):x.y<0&&V(w(x.y)),f.copy(M),n.update()}function de(A){_.set(A.clientX,A.clientY),p.subVectors(_,g).multiplyScalar(n.panSpeed),H(p.x,p.y),g.copy(_),n.update()}function we(A){Y(A.clientX,A.clientY),A.deltaY<0?V(w(A.deltaY)):A.deltaY>0&&J(w(A.deltaY)),n.update()}function ye(A){let K=!1;switch(A.code){case n.keys.UP:A.ctrlKey||A.metaKey||A.shiftKey?Z(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(0,n.keyPanSpeed),K=!0;break;case n.keys.BOTTOM:A.ctrlKey||A.metaKey||A.shiftKey?Z(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(0,-n.keyPanSpeed),K=!0;break;case n.keys.LEFT:A.ctrlKey||A.metaKey||A.shiftKey?te(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(n.keyPanSpeed,0),K=!0;break;case n.keys.RIGHT:A.ctrlKey||A.metaKey||A.shiftKey?te(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(-n.keyPanSpeed,0),K=!0;break}K&&(A.preventDefault(),n.update())}function pe(A){if(b.length===1)u.set(A.pageX,A.pageY);else{const K=me(A),ge=.5*(A.pageX+K.x),C=.5*(A.pageY+K.y);u.set(ge,C)}}function je(A){if(b.length===1)g.set(A.pageX,A.pageY);else{const K=me(A),ge=.5*(A.pageX+K.x),C=.5*(A.pageY+K.y);g.set(ge,C)}}function Ae(A){const K=me(A),ge=A.pageX-K.x,C=A.pageY-K.y,se=Math.sqrt(ge*ge+C*C);f.set(0,se)}function I(A){n.enableZoom&&Ae(A),n.enablePan&&je(A)}function dt(A){n.enableZoom&&Ae(A),n.enableRotate&&pe(A)}function Me(A){if(b.length==1)d.set(A.pageX,A.pageY);else{const ge=me(A),C=.5*(A.pageX+ge.x),se=.5*(A.pageY+ge.y);d.set(C,se)}m.subVectors(d,u).multiplyScalar(n.rotateSpeed);const K=n.domElement;te(2*Math.PI*m.x/K.clientHeight),Z(2*Math.PI*m.y/K.clientHeight),u.copy(d)}function Ue(A){if(b.length===1)_.set(A.pageX,A.pageY);else{const K=me(A),ge=.5*(A.pageX+K.x),C=.5*(A.pageY+K.y);_.set(ge,C)}p.subVectors(_,g).multiplyScalar(n.panSpeed),H(p.x,p.y),g.copy(_)}function Se(A){const K=me(A),ge=A.pageX-K.x,C=A.pageY-K.y,se=Math.sqrt(ge*ge+C*C);M.set(0,se),x.set(0,Math.pow(M.y/f.y,n.zoomSpeed)),J(x.y),f.copy(M);const O=(A.pageX+K.x)*.5,ee=(A.pageY+K.y)*.5;Y(O,ee)}function qe(A){n.enableZoom&&Se(A),n.enablePan&&Ue(A)}function Oe(A){n.enableZoom&&Se(A),n.enableRotate&&Me(A)}function ze(A){n.enabled!==!1&&(b.length===0&&(n.domElement.setPointerCapture(A.pointerId),n.domElement.addEventListener("pointermove",nt),n.domElement.addEventListener("pointerup",T)),!He(A)&&(oe(A),A.pointerType==="touch"?ae(A):y(A)))}function nt(A){n.enabled!==!1&&(A.pointerType==="touch"?le(A):G(A))}function T(A){switch(ct(A),b.length){case 0:n.domElement.releasePointerCapture(A.pointerId),n.domElement.removeEventListener("pointermove",nt),n.domElement.removeEventListener("pointerup",T),n.dispatchEvent(Cl),s=i.NONE;break;case 1:const K=b[0],ge=U[K];ae({pointerId:K,pageX:ge.x,pageY:ge.y});break}}function y(A){let K;switch(A.button){case 0:K=n.mouseButtons.LEFT;break;case 1:K=n.mouseButtons.MIDDLE;break;case 2:K=n.mouseButtons.RIGHT;break;default:K=-1}switch(K){case ai.DOLLY:if(n.enableZoom===!1)return;fe(A),s=i.DOLLY;break;case ai.ROTATE:if(A.ctrlKey||A.metaKey||A.shiftKey){if(n.enablePan===!1)return;Le(A),s=i.PAN}else{if(n.enableRotate===!1)return;re(A),s=i.ROTATE}break;case ai.PAN:if(A.ctrlKey||A.metaKey||A.shiftKey){if(n.enableRotate===!1)return;re(A),s=i.ROTATE}else{if(n.enablePan===!1)return;Le(A),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Lo)}function G(A){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;k(A);break;case i.DOLLY:if(n.enableZoom===!1)return;ne(A);break;case i.PAN:if(n.enablePan===!1)return;de(A);break}}function j(A){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(A.preventDefault(),n.dispatchEvent(Lo),we(ie(A)),n.dispatchEvent(Cl))}function ie(A){const K=A.deltaMode,ge={clientX:A.clientX,clientY:A.clientY,deltaY:A.deltaY};switch(K){case 1:ge.deltaY*=16;break;case 2:ge.deltaY*=100;break}return A.ctrlKey&&!W&&(ge.deltaY*=10),ge}function Q(A){A.key==="Control"&&(W=!0,n.domElement.getRootNode().addEventListener("keyup",Pe,{passive:!0,capture:!0}))}function Pe(A){A.key==="Control"&&(W=!1,n.domElement.getRootNode().removeEventListener("keyup",Pe,{passive:!0,capture:!0}))}function Ee(A){n.enabled===!1||n.enablePan===!1||ye(A)}function ae(A){switch(ve(A),b.length){case 1:switch(n.touches.ONE){case ci.ROTATE:if(n.enableRotate===!1)return;pe(A),s=i.TOUCH_ROTATE;break;case ci.PAN:if(n.enablePan===!1)return;je(A),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case ci.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;I(A),s=i.TOUCH_DOLLY_PAN;break;case ci.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;dt(A),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Lo)}function le(A){switch(ve(A),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Me(A),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;Ue(A),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;qe(A),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Oe(A),n.update();break;default:s=i.NONE}}function Ne(A){n.enabled!==!1&&A.preventDefault()}function oe(A){b.push(A.pointerId)}function ct(A){delete U[A.pointerId];for(let K=0;K<b.length;K++)if(b[K]==A.pointerId){b.splice(K,1);return}}function He(A){for(let K=0;K<b.length;K++)if(b[K]==A.pointerId)return!0;return!1}function ve(A){let K=U[A.pointerId];K===void 0&&(K=new Te,U[A.pointerId]=K),K.set(A.pageX,A.pageY)}function me(A){const K=A.pointerId===b[0]?b[1]:b[0];return U[K]}n.domElement.addEventListener("contextmenu",Ne),n.domElement.addEventListener("pointerdown",ze),n.domElement.addEventListener("pointercancel",T),n.domElement.addEventListener("wheel",j,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",Q,{passive:!0,capture:!0}),this.update()}}function Nl(r,e){if(e===ud)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===sa||e===Rh){let t=r.getIndex();if(t===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===sa)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class ru extends Ji{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new k_(t)}),this.register(function(t){return new K_(t)}),this.register(function(t){return new J_(t)}),this.register(function(t){return new $_(t)}),this.register(function(t){return new G_(t)}),this.register(function(t){return new V_(t)}),this.register(function(t){return new W_(t)}),this.register(function(t){return new X_(t)}),this.register(function(t){return new B_(t)}),this.register(function(t){return new q_(t)}),this.register(function(t){return new H_(t)}),this.register(function(t){return new j_(t)}),this.register(function(t){return new Y_(t)}),this.register(function(t){return new F_(t)}),this.register(function(t){return new Z_(t)}),this.register(function(t){return new Q_(t)})}load(e,t,n,i){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=ms.extractUrlBase(e);o=ms.resolveURL(l,this.path)}else o=ms.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){i?i(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new su(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,o,function(h){t(h),s.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},a={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===ou){try{o[Ye.KHR_BINARY_GLTF]=new ex(e)}catch(u){i&&i(u);return}s=JSON.parse(o[Ye.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new fx(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case Ye.KHR_MATERIALS_UNLIT:o[u]=new z_;break;case Ye.KHR_DRACO_MESH_COMPRESSION:o[u]=new tx(s,this.dracoLoader);break;case Ye.KHR_TEXTURE_TRANSFORM:o[u]=new nx;break;case Ye.KHR_MESH_QUANTIZATION:o[u]=new ix;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function O_(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const Ye={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class F_{constructor(e){this.parser=e,this.name=Ye.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let l;const h=new Ce(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],St);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new S_(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new v_(h),l.distance=u;break;case"spot":l=new x_(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,In(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class z_{constructor(){this.name=Ye.KHR_MATERIALS_UNLIT}getMaterialType(){return on}extendParams(e,t,n){const i=[];e.color=new Ce(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],St),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Pt))}return Promise.all(i)}}class B_{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class k_{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Te(a,a)}return Promise.all(s)}}class H_{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class G_{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Ce(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],St)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Pt)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class V_{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class W_{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ce().setRGB(a[0],a[1],a[2],St),Promise.all(s)}}class X_{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class q_{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ce().setRGB(a[0],a[1],a[2],St),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Pt)),Promise.all(s)}}class Y_{constructor(e){this.parser=e,this.name=Ye.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class j_{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class K_{constructor(e){this.parser=e,this.name=Ye.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class J_{constructor(e){this.parser=e,this.name=Ye.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class $_{constructor(e){this.parser=e,this.name=Ye.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Z_{constructor(e){this.name=Ye.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(m){return m.buffer}):o.ready.then(function(){const m=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(m),h,u,d,i.mode,i.filter),m})})}else return null}}class Q_{constructor(e){this.name=Ye.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==Wt.TRIANGLES&&l.mode!==Wt.TRIANGLE_STRIP&&l.mode!==Wt.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,m=[];for(const g of u){const _=new Xe,p=new L,f=new nn,M=new L(1,1,1),x=new e_(g.geometry,g.material,d);for(let E=0;E<d;E++)c.TRANSLATION&&p.fromBufferAttribute(c.TRANSLATION,E),c.ROTATION&&f.fromBufferAttribute(c.ROTATION,E),c.SCALE&&M.fromBufferAttribute(c.SCALE,E),x.setMatrixAt(E,_.compose(p,f,M));for(const E in c)if(E==="_COLOR_0"){const P=c[E];x.instanceColor=new ua(P.array,P.itemSize,P.normalized)}else E!=="TRANSLATION"&&E!=="ROTATION"&&E!=="SCALE"&&g.geometry.setAttribute(E,c[E]);at.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),m.push(x)}return h.isGroup?(h.clear(),h.add(...m),h):m[0]}))}}const ou="glTF",rs=12,Dl={JSON:1313821514,BIN:5130562};class ex{constructor(e){this.name=Ye.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,rs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==ou)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-rs,s=new DataView(e,rs);let o=0;for(;o<i;){const a=s.getUint32(o,!0);o+=4;const c=s.getUint32(o,!0);if(o+=4,c===Dl.JSON){const l=new Uint8Array(e,rs+o,a);this.content=n.decode(l)}else if(c===Dl.BIN){const l=rs+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class tx{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ye.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const h in o){const u=fa[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=fa[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[e.attributes[h]],m=Ui[d.componentType];l[u]=m.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(m){for(const g in m.attributes){const _=m.attributes[g],p=c[g];p!==void 0&&(_.normalized=p)}u(m)},a,l,St,d)})})}}class nx{constructor(){this.name=Ye.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class ix{constructor(){this.name=Ye.KHR_MESH_QUANTIZATION}}class au extends Ss{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=i-t,u=(n-t)/h,d=u*u,m=d*u,g=e*l,_=g-l,p=-2*m+3*d,f=m-d,M=1-p,x=f-d+u;for(let E=0;E!==a;E++){const P=o[_+E+a],R=o[_+E+c]*h,b=o[g+E+a],U=o[g+E]*h;s[E]=M*P+x*R+p*b+f*U}return s}}const sx=new nn;class rx extends au{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return sx.fromArray(s).normalize().toArray(s),s}}const Wt={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ui={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Il={9728:_t,9729:wt,9984:ia,9985:vr,9986:Ci,9987:vn},Ul={33071:Xt,33648:wr,10497:zi},Po={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},fa={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ln={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},ox={CUBICSPLINE:void 0,LINEAR:ki,STEP:_s},No={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function ax(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Aa({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Sn})),r.DefaultMaterial}function $n(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function In(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function cx(r,e,t){let n=!1,i=!1,s=!1;for(let l=0,h=e.length;l<h;l++){const u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){const u=e[l];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):r.attributes.position;o.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):r.attributes.normal;a.push(d)}if(s){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):r.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],d=l[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function lx(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function hx(r){let e;const t=r.extensions&&r.extensions[Ye.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Do(t.attributes):e=r.indices+":"+Do(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+Do(r.targets[n]);return e}function Do(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function pa(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function ux(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const dx=new Xe;class fx{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new O_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&s<98?this.textureLoader=new g_(this.options.manager):this.textureLoader=new T_(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new su(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return $n(s,a,i),In(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,h]of o.children.entries())s(h,a.children[l])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ye.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(ms.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Po[i.type],a=Ui[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new Mt(l,o,c))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],c=Po[i.type],l=Ui[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=i.byteOffset||0,m=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,p;if(m&&m!==u){const f=Math.floor(d/m),M="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+f+":"+i.count;let x=t.cache.get(M);x||(_=new l(a,f*m,i.count*m/h),x=new K0(_,m/h),t.cache.add(M,x)),p=new Ea(x,c,d%m/h,g)}else a===null?_=new l(i.count*c):_=new l(a,d,i.count*c),p=new Mt(_,c,g);if(i.sparse!==void 0){const f=Po.SCALAR,M=Ui[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,E=i.sparse.values.byteOffset||0,P=new M(o[1],x,i.sparse.count*f),R=new l(o[2],E,i.sparse.count*c);a!==null&&(p=new Mt(p.array.slice(),p.itemSize,p.normalized));for(let b=0,U=P.length;b<U;b++){const W=P[b];if(p.setX(W,R[b*c]),c>=2&&p.setY(W,R[b*c+1]),c>=3&&p.setZ(W,R[b*c+2]),c>=4&&p.setW(W,R[b*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,o=s.textures[e],a=s.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(s.samplers||{})[o.sampler]||{};return h.magFilter=Il[d.magFilter]||wt,h.minFilter=Il[d.minFilter]||vn,h.wrapS=Ul[d.wrapS]||zi,h.wrapT=Ul[d.wrapT]||zi,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=i.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;const d=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(d,m){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const p=new xt(_);p.needsUpdate=!0,d(p)}),t.load(ms.resolveURL(u,s.path),g,void 0,m)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),u.userData.mimeType=o.mimeType||ux(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[Ye.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Ye.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=s.associations.get(o);o=s.extensions[Ye.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new tu,an.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Ii,an.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),s&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Aa}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const a={},c=s.extensions||{},l=[];if(c[Ye.KHR_MATERIALS_UNLIT]){const u=i[Ye.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,s,t))}else{const u=s.pbrMetallicRoughness||{};if(a.color=new Ce(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],St),a.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,Pt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=rn);const h=s.alphaMode||No.OPAQUE;if(h===No.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===No.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==on&&(l.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Te(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;a.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&o!==on&&(l.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==on){const u=s.emissiveFactor;a.emissive=new Ce().setRGB(u[0],u[1],u[2],St)}return s.emissiveTexture!==void 0&&o!==on&&l.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Pt)),Promise.all(l).then(function(){const u=new o(a);return s.name&&(u.name=s.name),In(u,s),t.associations.set(u,{materials:e}),s.extensions&&$n(i,u,s),u})}createUniqueName(e){const t=Qe.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[Ye.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Ol(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],h=hx(l),u=i[h];if(u)o.push(u.promise);else{let d;l.extensions&&l.extensions[Ye.KHR_DRACO_MESH_COMPRESSION]?d=s(l):d=Ol(new It,l,t),i[h]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const h=o[c].material===void 0?ax(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let m=0,g=h.length;m<g;m++){const _=h[m],p=o[m];let f;const M=l[m];if(p.mode===Wt.TRIANGLES||p.mode===Wt.TRIANGLE_STRIP||p.mode===Wt.TRIANGLE_FAN||p.mode===void 0)f=s.isSkinnedMesh===!0?new $0(_,M):new Nt(_,M),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),p.mode===Wt.TRIANGLE_STRIP?f.geometry=Nl(f.geometry,Rh):p.mode===Wt.TRIANGLE_FAN&&(f.geometry=Nl(f.geometry,sa));else if(p.mode===Wt.LINES)f=new ps(_,M);else if(p.mode===Wt.LINE_STRIP)f=new ba(_,M);else if(p.mode===Wt.LINE_LOOP)f=new t_(_,M);else if(p.mode===Wt.POINTS)f=new n_(_,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(f.geometry.morphAttributes).length>0&&lx(f,s),f.name=t.createUniqueName(s.name||"mesh_"+e),In(f,s),p.extensions&&$n(i,f,p),t.assignFinalMaterial(f),u.push(f)}for(let m=0,g=u.length;m<g;m++)t.associations.set(u[m],{meshes:e,primitives:m});if(u.length===1)return s.extensions&&$n(i,u[0],s),u[0];const d=new ti;s.extensions&&$n(i,d,s),t.associations.set(d,{meshes:e});for(let m=0,g=u.length;m<g;m++)d.add(u[m]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Rt(Ph.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Ma(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),In(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],c=[];for(let l=0,h=o.length;l<h;l++){const u=o[l];if(u){a.push(u);const d=new Xe;s!==null&&d.fromArray(s.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Ta(a,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const m=i.channels[u],g=i.samplers[m.sampler],_=m.target,p=_.node,f=i.parameters!==void 0?i.parameters[g.input]:g.input,M=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",f)),c.push(this.getDependency("accessor",M)),l.push(g),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const d=u[0],m=u[1],g=u[2],_=u[3],p=u[4],f=[];for(let M=0,x=d.length;M<x;M++){const E=d[M],P=m[M],R=g[M],b=_[M],U=p[M];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();const W=n._createAnimationTracks(E,P,R,b,U);if(W)for(let v=0;v<W.length;v++)f.push(W[v])}return new l_(s,void 0,f)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),c]).then(function(l){const h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(m){m.isSkinnedMesh&&m.bind(d,dx)});for(let m=0,g=u.length;m<g;m++)h.add(u[m]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(l){return i._getNodeRef(i.cameraCache,s.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(s.isBone===!0?h=new Qh:l.length>1?h=new ti:l.length===1?h=l[0]:h=new at,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(s.name&&(h.userData.name=s.name,h.name=o),In(h,s),s.extensions&&$n(n,h,s),s.matrix!==void 0){const u=new Xe;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new ti;n.name&&(s.name=i.createUniqueName(n.name)),In(s,n),n.extensions&&$n(t,s,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)s.add(c[h]);const l=h=>{const u=new Map;for(const[d,m]of i.associations)(d instanceof an||d instanceof xt)&&u.set(d,m);return h.traverse(d=>{const m=i.associations.get(d);m!=null&&u.set(d,m)}),u};return i.associations=l(s),s})}_createAnimationTracks(e,t,n,i,s){const o=[],a=e.name?e.name:e.uuid,c=[];Ln[s.path]===Ln.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(Ln[s.path]){case Ln.weights:l=Wi;break;case Ln.rotation:l=ri;break;case Ln.position:case Ln.scale:l=Xi;break;default:switch(n.itemSize){case 1:l=Wi;break;case 2:case 3:default:l=Xi;break}break}const h=i.interpolation!==void 0?ox[i.interpolation]:ki,u=this._getArrayFromAccessor(n);for(let d=0,m=c.length;d<m;d++){const g=new l(c[d]+"."+Ln[s.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=pa(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof ri?rx:au;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function px(r,e,t){const n=e.attributes,i=new Ut;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new L(c[0],c[1],c[2]),new L(l[0],l[1],l[2])),a.normalized){const h=pa(Ui[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new L,c=new L;for(let l=0,h=s.length;l<h;l++){const u=s[l];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],m=d.min,g=d.max;if(m!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(m[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(m[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(m[2]),Math.abs(g[2]))),d.normalized){const _=pa(Ui[d.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new ln;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function Ol(r,e,t){const n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(c){r.setAttribute(a,c)})}for(const o in n){const a=fa[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return Je.workingColorSpace!==St&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Je.workingColorSpace}" not supported.`),In(r,e),px(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?cx(r,e.targets,t):r})}class cu{constructor(e=Vi,t=String){De(this,"scene",Vi);De(this,"modelURL","");De(this,"carScene",null);De(this,"scale",.03);De(this,"rotationAngle",.9*Math.PI);De(this,"movementSpeed",0);De(this,"rotationSpeed",.8);De(this,"acceleration",10);De(this,"maxForwardSpeed",75);De(this,"maxBackwardSpeed",-30);De(this,"deceleration",3);De(this,"turnDeceleration",8);De(this,"loading",!0);this.scene=e,this.modelURL=t}setupHitbox(){if(!this.carScene)return;this.boundingBox=new Ut().setFromObject(this.carScene);const e=this.boundingBox.getSize(new L),t=this.boundingBox.getCenter(new L),n=new qi(e.x,e.y,e.z),i=new on({color:16777215,visible:this.scene.debugMode,wireframe:!0});this.hitbox=new Nt(n,i),this.hitbox.position.copy(t),this.scene.add(this.hitbox)}scaleGLTF(e,t){e.scale.set(t,t,t)}rotateGLTFonYAxis(e,t){e.rotateOnAxis(new L(0,1,0),t)}loadGLTF(e,t,n,i){return new Promise((s,o)=>{if(!this.modelURL){o(new Error("Model URL is not provided."));return}new ru().load(e,c=>{this.carScene=c.scene,this.scaleGLTF(this.carScene,n),t.add(this.carScene),this.loading=!1,s()},c=>{},c=>{console.log("An error happened",c)})})}}var os=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},lu={exports:{}};(function(r,e){(function(t,n){n()})(os,function(){function t(l,h){return typeof h>"u"?h={autoBom:!1}:typeof h!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),h={autoBom:!h}),h.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(l.type)?new Blob(["\uFEFF",l],{type:l.type}):l}function n(l,h,u){var d=new XMLHttpRequest;d.open("GET",l),d.responseType="blob",d.onload=function(){c(d.response,h,u)},d.onerror=function(){console.error("could not download file")},d.send()}function i(l){var h=new XMLHttpRequest;h.open("HEAD",l,!1);try{h.send()}catch{}return 200<=h.status&&299>=h.status}function s(l){try{l.dispatchEvent(new MouseEvent("click"))}catch{var h=document.createEvent("MouseEvents");h.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),l.dispatchEvent(h)}}var o=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof os=="object"&&os.global===os?os:void 0,a=o.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=o.saveAs||(typeof window!="object"||window!==o?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(l,h,u){var d=o.URL||o.webkitURL,m=document.createElement("a");h=h||l.name||"download",m.download=h,m.rel="noopener",typeof l=="string"?(m.href=l,m.origin===location.origin?s(m):i(m.href)?n(l,h,u):s(m,m.target="_blank")):(m.href=d.createObjectURL(l),setTimeout(function(){d.revokeObjectURL(m.href)},4e4),setTimeout(function(){s(m)},0))}:"msSaveOrOpenBlob"in navigator?function(l,h,u){if(h=h||l.name||"download",typeof l!="string")navigator.msSaveOrOpenBlob(t(l,u),h);else if(i(l))n(l,h,u);else{var d=document.createElement("a");d.href=l,d.target="_blank",setTimeout(function(){s(d)})}}:function(l,h,u,d){if(d=d||open("","_blank"),d&&(d.document.title=d.document.body.innerText="downloading..."),typeof l=="string")return n(l,h,u);var m=l.type==="application/octet-stream",g=/constructor/i.test(o.HTMLElement)||o.safari,_=/CriOS\/[\d]+/.test(navigator.userAgent);if((_||m&&g||a)&&typeof FileReader<"u"){var p=new FileReader;p.onloadend=function(){var x=p.result;x=_?x:x.replace(/^data:[^;]*;/,"data:attachment/file;"),d?d.location.href=x:location=x,d=null},p.readAsDataURL(l)}else{var f=o.URL||o.webkitURL,M=f.createObjectURL(l);d?d.location=M:location.href=M,d=null,setTimeout(function(){f.revokeObjectURL(M)},4e4)}});o.saveAs=c.saveAs=c,r.exports=c})})(lu);var mx=lu.exports;function tr(r,e){for(let t=0;t<e.length-1;t++){const n=e[t],i=e[t+1],s=new L((n.x+i.x)/2,1,(n.z+i.z)/2);if(r.intersectsTriangle(new Qt(n,i,s)))return!0}return!1}class Fl extends cu{constructor(t=Vi,n=String){super(t,n);De(this,"boxHelper",I_);De(this,"hitbox",Nt);De(this,"velocity",L);this.velocity=new L(0,0,0),super.loadGLTF(this.modelURL,this.scene,this.scale,this.rotationAngle).then(()=>{super.setupHitbox()}).catch(o=>{console.error("Error loading model:",o)}),this.isLogging=!1,this.positions=[],this.keyStates={};const i=o=>{this.keyStates[o.code]=!0},s=o=>{this.keyStates[o.code]=!1};window.addEventListener("keydown",i),window.addEventListener("keyup",s),this.speedBarElement=document.getElementById("speedBar")}handleInput(t){!this.keyStates.KeyW&&!this.keyStates.KeyS&&(this.movementSpeed>0?this.movementSpeed-=this.deceleration*t:this.movementSpeed<0&&(this.movementSpeed+=this.deceleration*t),Math.abs(this.movementSpeed)<this.deceleration&&(this.movementSpeed=0)),this.keyStates.KeyP&&(this.keyStates.KeyP=!1,this.logPosition()),this.keyStates.KeyK&&(this.keyStates.KeyK=!1,this.exportPositionsToFile()),this.keyStates.KeyW&&this.movementSpeed<this.maxForwardSpeed&&(this.movementSpeed+=this.acceleration*t),this.keyStates.KeyS&&this.movementSpeed>this.maxBackwardSpeed&&(this.movementSpeed-=this.acceleration*2*t),this.keyStates.KeyA&&(this.carScene.rotation.y+=this.rotationSpeed*t,this.movementSpeed>0?this.movementSpeed-=this.turnDeceleration*t:this.movementSpeed+=this.turnDeceleration*t),this.keyStates.KeyD&&(this.carScene.rotation.y-=this.rotationSpeed*t,this.movementSpeed>0?this.movementSpeed-=this.turnDeceleration*t:this.movementSpeed+=this.turnDeceleration*t),this.carScene.position.x+=this.movementSpeed*Math.sin(this.carScene.rotation.y)*t,this.carScene.position.z+=this.movementSpeed*Math.cos(this.carScene.rotation.y)*t}getSweptAABB(t,n){const i=t.min.clone(),s=t.max.clone();return n.x<0?i.x+=n.x:s.x+=n.x,n.y<0?i.y+=n.y:s.y+=n.y,n.z<0?i.z+=n.z:s.z+=n.z,new Ut(i,s)}handleCollisions(t,n,i,s,o){t.intersectsBox(n)&&(this.resolveCollision(this.carScene,this.scene.bot.carScene),this.movementSpeed-=this.acceleration*2*o),tr(t,i)&&(this.movementSpeed-=this.acceleration*2*o),tr(t,s)&&(this.movementSpeed-=this.acceleration*2*o)}resolveCollision(t,n){const i=t.position.clone().sub(n.position).normalize();t.position.add(i.clone().multiplyScalar(.2)),n.position.sub(i.clone().multiplyScalar(.2))}update(t){if(!this.loading){this.handleInput(t);const i=(this.movementSpeed>0?Math.min(Math.max(this.movementSpeed,0),this.maxForwardSpeed):Math.min(Math.max(Math.abs(this.movementSpeed),0),this.maxForwardSpeed))/this.maxForwardSpeed*200;this.speedBarElement.style.height=`${i}px`,this.hitbox&&this.carScene&&(this.boundingBox=new Ut().setFromObject(this.carScene),this.hitbox.position.copy(this.boundingBox.getCenter(new L)),this.hitbox.rotation.copy(this.carScene.rotation)),this.previousPosition=this.carScene.position.clone(),this.carScene.position.add(this.velocity.clone().multiplyScalar(t));const s=this.carScene.position.clone().sub(this.previousPosition);this.velocity=s.divideScalar(t);const o=this.getSweptAABB(this.boundingBox,this.velocity);this.handleCollisions(o,this.scene.bot.boundingBox,this.scene.track.leftBoundary,this.scene.track.rightBoundary,t);const a=new on({color:16711680,visible:this.scene.debugMode,wireframe:!0}),c=new on({color:16777215,visible:this.scene.debugMode,wireframe:!0});this.hitbox.material=this.boundingBox.intersectsBox(this.scene.bot.boundingBox)||tr(this.boundingBox,this.scene.track.leftBoundary)||tr(this.boundingBox,this.scene.track.rightBoundary)?a:c}}logPosition(){const t=this.carScene.position.clone();this.positions.push(t),console.log("Position logged:",t)}exportPositionsToFile(){if(this.positions.length===0){console.log("No positions logged.");return}const n=this.positions.map(s=>{const o=s.x.toFixed(2),a=s.y.toFixed(2),c=s.z.toFixed(2);return`{ x: ${o}, y: ${a}, z: ${c}},`}).join(`
`),i=new Blob([n],{type:"text/plain;charset=utf-8"});mx.saveAs(i,"positions.txt"),console.log("Exported positions")}}class zl{constructor(e,t,n,i,s){this.sender=e,this.receiver=t,this.message=n,this.delay=i,this.data=s}toJSON(){return{type:this.constructor.name,sender:this.sender.uuid,receiver:this.receiver.uuid,message:this.message,delay:this.delay,data:this.data}}fromJSON(e){return this.sender=e.sender,this.receiver=e.receiver,this.message=e.message,this.delay=e.delay,this.data=e.data,this}resolveReferences(e){return this.sender=e.get(this.sender),this.receiver=e.get(this.receiver),this}}class tn{static setLevel(e){nr=e}static log(...e){nr<=tn.LEVEL.LOG&&console.log(...e)}static warn(...e){nr<=tn.LEVEL.WARN&&console.warn(...e)}static error(...e){nr<=tn.LEVEL.ERROR&&console.error(...e)}}tn.LEVEL=Object.freeze({LOG:0,WARN:1,ERROR:2,SILENT:3});let nr=tn.LEVEL.WARN;class gx{constructor(){this.delayedTelegrams=new Array}deliver(e){const t=e.receiver;return t.handleMessage(e)===!1&&tn.warn("YUKA.MessageDispatcher: Message not handled by receiver: %o",t),this}dispatch(e,t,n,i,s){const o=new zl(e,t,n,i,s);return i<=0?this.deliver(o):this.delayedTelegrams.push(o),this}dispatchDelayedMessages(e){let t=this.delayedTelegrams.length;for(;t--;){const n=this.delayedTelegrams[t];n.delay-=e,n.delay<=0&&(this.deliver(n),this.delayedTelegrams.pop())}return this}clear(){return this.delayedTelegrams.length=0,this}toJSON(){const e={type:this.constructor.name,delayedTelegrams:new Array};for(let t=0,n=this.delayedTelegrams.length;t<n;t++){const i=this.delayedTelegrams[t];e.delayedTelegrams.push(i.toJSON())}return e}fromJSON(e){this.clear();const t=e.delayedTelegrams;for(let n=0,i=t.length;n<i;n++){const s=t[n],o=new zl().fromJSON(s);this.delayedTelegrams.push(o)}return this}resolveReferences(e){const t=this.delayedTelegrams;for(let n=0,i=t.length;n<i;n++)t[n].resolveReferences(e);return this}}const yt=new Array;for(let r=0;r<256;r++)yt[r]=(r<16?"0":"")+r.toString(16);class ys{static area(e,t,n){return(n.x-e.x)*(t.z-e.z)-(t.x-e.x)*(n.z-e.z)}static argmax(e){const t=Math.max(...e),n=[];for(let i=0,s=e.length;i<s;i++)e[i]===t&&n.push(i);return n}static choice(e,t=null){const n=Math.random();if(t===null)return e[Math.floor(Math.random()*e.length)];{let i=0;const s=e.map((o,a)=>(i+=t[a],i)).findIndex(o=>o>=n);return e[s]}}static clamp(e,t,n){return Math.max(t,Math.min(n,e))}static generateUUID(){const e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(yt[e&255]+yt[e>>8&255]+yt[e>>16&255]+yt[e>>24&255]+"-"+yt[t&255]+yt[t>>8&255]+"-"+yt[t>>16&15|64]+yt[t>>24&255]+"-"+yt[n&63|128]+yt[n>>8&255]+"-"+yt[n>>16&255]+yt[n>>24&255]+yt[i&255]+yt[i>>8&255]+yt[i>>16&255]+yt[i>>24&255]).toUpperCase()}static randFloat(e,t){return e+Math.random()*(t-e)}static randInt(e,t){return e+Math.floor(Math.random()*(t-e+1))}}class q{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return this.x=e,this.y=t,this.z=n,this}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}clone(){return new this.constructor().copy(this)}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.x/=e,this.y/=e,this.z/=e,this}divideVectors(e,t){return this.x=e.x/t.x,this.y=e.y/t.y,this.z=e.z/t.z,this}reflect(e){return this.sub(_x.copy(e).multiplyScalar(2*this.dot(e)))}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}cross(e){const t=this.x,n=this.y,i=this.z;return this.x=n*e.z-i*e.y,this.y=i*e.x-t*e.z,this.z=t*e.y-n*e.x,this}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-s*a,this.y=s*o-n*c,this.z=n*a-i*o,this}angleTo(e){const t=Math.sqrt(this.squaredLength()*e.squaredLength());if(t===0)return 0;const n=this.dot(e)/t;return Math.acos(ys.clamp(n,-1,1))}length(){return Math.sqrt(this.squaredLength())}squaredLength(){return this.dot(this)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}distanceTo(e){return Math.sqrt(this.squaredDistanceTo(e))}squaredDistanceTo(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return Math.abs(t)+Math.abs(n)+Math.abs(i)}normalize(){return this.divideScalar(this.length()||1)}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyRotation(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=c*t+o*i-a*n,h=c*n+a*t-s*i,u=c*i+s*n-o*t,d=-s*t-o*n-a*i;return this.x=l*c+d*-s+h*-a-u*-o,this.y=h*c+d*-o+u*-s-l*-a,this.z=u*c+d*-a+l*-o-h*-s,this}extractPositionFromMatrix(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}fromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}fromMatrix4Column(e,t){return this.fromArray(e.elements,t*4)}fromSpherical(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}fromArray(e,t=0){return this.x=e[t+0],this.y=e[t+1],this.z=e[t+2],this}toArray(e,t=0){return e[t+0]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}}const _x=new q,Bl=new q(0,1,0),kl=new q,as=new q,Hl=new q,Gl=new q,Io=[2,2,1],Uo=[1,0,0];class La{constructor(){this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,o,a,c,l){const h=this.elements;return h[0]=e,h[3]=t,h[6]=n,h[1]=i,h[4]=s,h[7]=o,h[2]=a,h[5]=c,h[8]=l,this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}clone(){return new this.constructor().copy(this)}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],m=n[5],g=n[8],_=i[0],p=i[3],f=i[6],M=i[1],x=i[4],E=i[7],P=i[2],R=i[5],b=i[8];return s[0]=o*_+a*M+c*P,s[3]=o*p+a*x+c*R,s[6]=o*f+a*E+c*b,s[1]=l*_+h*M+u*P,s[4]=l*p+h*x+u*R,s[7]=l*f+h*E+u*b,s[2]=d*_+m*M+g*P,s[5]=d*p+m*x+g*R,s[8]=d*f+m*E+g*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}extractBasis(e,t,n){return e.fromMatrix3Column(this,0),t.fromMatrix3Column(this,1),n.fromMatrix3Column(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,e.y,t.y,n.y,e.z,t.z,n.z),this}lookAt(e,t,n){return kl.crossVectors(n,e).normalize(),as.crossVectors(Bl,t).normalize(),as.squaredLength()===0&&(Gl.copy(t).addScalar(Number.EPSILON),as.crossVectors(Bl,Gl).normalize()),Hl.crossVectors(t,as).normalize(),Ai.makeBasis(as,Hl,t),ir.makeBasis(kl,n,e),this.multiplyMatrices(Ai,ir.transpose()),this}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getElementIndex(e,t){return e*3+t}frobeniusNorm(){const e=this.elements;let t=0;for(let n=0;n<9;n++)t+=e[n]*e[n];return Math.sqrt(t)}offDiagonalFrobeniusNorm(){const e=this.elements;let t=0;for(let n=0;n<3;n++){const i=e[this.getElementIndex(Io[n],Uo[n])];t+=2*i*i}return Math.sqrt(t)}eigenDecomposition(e){let t=0,n=0;const i=10;e.unitary.identity(),e.diagonal.copy(this);const s=e.unitary,o=e.diagonal,a=Number.EPSILON*o.frobeniusNorm();for(;n<i&&o.offDiagonalFrobeniusNorm()>a;)o.shurDecomposition(Ai),ir.copy(Ai).transpose(),o.multiply(Ai),o.premultiply(ir),s.multiply(Ai),++t>2&&(n++,t=0);return e}shurDecomposition(e){let t=0,n=1;const i=this.elements;for(let l=0;l<3;l++){const h=Math.abs(i[this.getElementIndex(Io[l],Uo[l])]);h>t&&(t=h,n=l)}let s=1,o=0;const a=Uo[n],c=Io[n];if(Math.abs(i[this.getElementIndex(c,a)])>Number.EPSILON){const l=i[this.getElementIndex(c,c)],h=i[this.getElementIndex(a,a)],u=i[this.getElementIndex(c,a)],d=(l-h)/2/u;let m;d<0?m=-1/(-d+Math.sqrt(1+d*d)):m=1/(d+Math.sqrt(1+d*d)),s=1/Math.sqrt(1+m*m),o=m*s}return e.identity(),e.elements[this.getElementIndex(a,a)]=s,e.elements[this.getElementIndex(c,c)]=s,e.elements[this.getElementIndex(c,a)]=o,e.elements[this.getElementIndex(a,c)]=-o,e}fromQuaternion(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=e.w,a=n+n,c=i+i,l=s+s,h=n*a,u=n*c,d=n*l,m=i*c,g=i*l,_=s*l,p=o*a,f=o*c,M=o*l;return t[0]=1-(m+_),t[3]=u-M,t[6]=d+f,t[1]=u+M,t[4]=1-(h+_),t[7]=g-p,t[2]=d-f,t[5]=g+p,t[8]=1-(h+m),this}fromMatrix4(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[4],t[4]=n[5],t[5]=n[6],t[6]=n[8],t[7]=n[9],t[8]=n[10],this}fromArray(e,t=0){const n=this.elements;for(let i=0;i<9;i++)n[i]=e[i+t];return this}toArray(e,t=0){const n=this.elements;return e[t+0]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}}const Ai=new La,ir=new La,sr=new La,Oo=new q;class Dr{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this}clone(){return new this.constructor().copy(this)}inverse(){return this.conjugate().normalize()}conjugate(){return this.x*=-1,this.y*=-1,this.z*=-1,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}length(){return Math.sqrt(this.squaredLength())}squaredLength(){return this.dot(this)}normalize(){let e=this.length();return e===0?(this.x=0,this.y=0,this.z=0,this.w=1):(e=1/e,this.x=this.x*e,this.y=this.y*e,this.z=this.z*e,this.w=this.w*e),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e.x,i=e.y,s=e.z,o=e.w,a=t.x,c=t.y,l=t.z,h=t.w;return this.x=n*h+o*a+i*l-s*c,this.y=i*h+o*c+s*a-n*l,this.z=s*h+o*l+n*c-i*a,this.w=o*h-n*a-i*c-s*l,this}angleTo(e){return 2*Math.acos(Math.abs(ys.clamp(this.dot(e),-1,1)))}rotateTo(e,t,n=1e-4){const i=this.angleTo(e);if(i<n)return!0;const s=Math.min(1,t/i);return this.slerp(e,s),!1}lookAt(e,t,n){sr.lookAt(e,t,n),this.fromMatrix3(sr)}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this.x,i=this.y,s=this.z,o=this.w;let a=o*e.w+n*e.x+i*e.y+s*e.z;if(a<0?(this.w=-e.w,this.x=-e.x,this.y=-e.y,this.z=-e.z,a=-a):this.copy(e),a>=1)return this.w=o,this.x=n,this.y=i,this.z=s,this;const c=Math.sqrt(1-a*a);if(Math.abs(c)<.001)return this.w=.5*(o+this.w),this.x=.5*(n+this.x),this.y=.5*(i+this.y),this.z=.5*(s+this.z),this;const l=Math.atan2(c,a),h=Math.sin((1-t)*l)/c,u=Math.sin(t*l)/c;return this.w=o*h+this.w*u,this.x=n*h+this.x*u,this.y=i*h+this.y*u,this.z=s*h+this.z*u,this}extractRotationFromMatrix(e){const t=sr.elements,n=e.elements,i=1/Oo.fromMatrix4Column(e,0).length(),s=1/Oo.fromMatrix4Column(e,1).length(),o=1/Oo.fromMatrix4Column(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=n[4]*s,t[4]=n[5]*s,t[5]=n[6]*s,t[6]=n[8]*o,t[7]=n[9]*o,t[8]=n[10]*o,this.fromMatrix3(sr),this}fromEuler(e,t,n){const i=Math.cos(t/2),s=Math.cos(e/2),o=Math.cos(n/2),a=Math.sin(t/2),c=Math.sin(e/2),l=Math.sin(n/2);return this.w=i*s*o+a*c*l,this.x=i*c*o+a*s*l,this.y=a*s*o-i*c*l,this.z=i*s*l-a*c*o,this}toEuler(e){const t=-2*(this.y*this.z-this.x*this.w);return Math.abs(t)>.9999?(e.x=Math.PI*.5*t,e.y=Math.atan2(this.x*this.z+this.w*this.y,.5-this.x*this.x-this.y*this.y),e.z=0):(e.x=Math.asin(t),e.y=Math.atan2(this.x*this.z+this.w*this.y,.5-this.x*this.x-this.y*this.y),e.z=Math.atan2(this.x*this.y+this.w*this.z,.5-this.x*this.x-this.z*this.z)),e}fromMatrix3(e){const t=e.elements,n=t[0],i=t[3],s=t[6],o=t[1],a=t[4],c=t[7],l=t[2],h=t[5],u=t[8],d=n+a+u;if(d>0){let m=.5/Math.sqrt(d+1);this.w=.25/m,this.x=(h-c)*m,this.y=(s-l)*m,this.z=(o-i)*m}else if(n>a&&n>u){let m=2*Math.sqrt(1+n-a-u);this.w=(h-c)/m,this.x=.25*m,this.y=(i+o)/m,this.z=(s+l)/m}else if(a>u){let m=2*Math.sqrt(1+a-n-u);this.w=(s-l)/m,this.x=(i+o)/m,this.y=.25*m,this.z=(c+h)/m}else{let m=2*Math.sqrt(1+u-n-a);this.w=(o-i)/m,this.x=(s+l)/m,this.y=(c+h)/m,this.z=.25*m}return this}fromArray(e,t=0){return this.x=e[t+0],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e,t=0){return e[t+0]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}}class vs{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,o,a,c,l,h,u,d,m,g,_,p){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=s,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=m,f[7]=g,f[11]=_,f[15]=p,this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}clone(){return new this.constructor().copy(this)}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],m=n[13],g=n[2],_=n[6],p=n[10],f=n[14],M=n[3],x=n[7],E=n[11],P=n[15],R=i[0],b=i[4],U=i[8],W=i[12],v=i[1],w=i[5],te=i[9],Z=i[13],N=i[2],X=i[6],H=i[10],J=i[14],V=i[3],Y=i[7],$=i[11],re=i[15];return s[0]=o*R+a*v+c*N+l*V,s[4]=o*b+a*w+c*X+l*Y,s[8]=o*U+a*te+c*H+l*$,s[12]=o*W+a*Z+c*J+l*re,s[1]=h*R+u*v+d*N+m*V,s[5]=h*b+u*w+d*X+m*Y,s[9]=h*U+u*te+d*H+m*$,s[13]=h*W+u*Z+d*J+m*re,s[2]=g*R+_*v+p*N+f*V,s[6]=g*b+_*w+p*X+f*Y,s[10]=g*U+_*te+p*H+f*$,s[14]=g*W+_*Z+p*J+f*re,s[3]=M*R+x*v+E*N+P*V,s[7]=M*b+x*w+E*X+P*Y,s[11]=M*U+x*te+E*H+P*$,s[15]=M*W+x*Z+E*J+P*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}extractBasis(e,t,n){return e.fromMatrix4Column(this,0),t.fromMatrix4Column(this,1),n.fromMatrix4Column(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}compose(e,t,n){return this.fromQuaternion(t),this.scale(n),this.setPosition(e),this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}setPosition(e){const t=this.elements;return t[12]=e.x,t[13]=e.y,t[14]=e.z,this}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}getInverse(e){const t=this.elements,n=e.elements,i=t[0],s=t[1],o=t[2],a=t[3],c=t[4],l=t[5],h=t[6],u=t[7],d=t[8],m=t[9],g=t[10],_=t[11],p=t[12],f=t[13],M=t[14],x=t[15],E=m*M*u-f*g*u+f*h*_-l*M*_-m*h*x+l*g*x,P=p*g*u-d*M*u-p*h*_+c*M*_+d*h*x-c*g*x,R=d*f*u-p*m*u+p*l*_-c*f*_-d*l*x+c*m*x,b=p*m*h-d*f*h-p*l*g+c*f*g+d*l*M-c*m*M,U=i*E+s*P+o*R+a*b;if(U===0)return e.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const W=1/U;return n[0]=E*W,n[1]=(f*g*a-m*M*a-f*o*_+s*M*_+m*o*x-s*g*x)*W,n[2]=(l*M*a-f*h*a+f*o*u-s*M*u-l*o*x+s*h*x)*W,n[3]=(m*h*a-l*g*a-m*o*u+s*g*u+l*o*_-s*h*_)*W,n[4]=P*W,n[5]=(d*M*a-p*g*a+p*o*_-i*M*_-d*o*x+i*g*x)*W,n[6]=(p*h*a-c*M*a-p*o*u+i*M*u+c*o*x-i*h*x)*W,n[7]=(c*g*a-d*h*a+d*o*u-i*g*u-c*o*_+i*h*_)*W,n[8]=R*W,n[9]=(p*m*a-d*f*a-p*s*_+i*f*_+d*s*x-i*m*x)*W,n[10]=(c*f*a-p*l*a+p*s*u-i*f*u-c*s*x+i*l*x)*W,n[11]=(d*l*a-c*m*a-d*s*u+i*m*u+c*s*_-i*l*_)*W,n[12]=b*W,n[13]=(d*f*o-p*m*o+p*s*g-i*f*g-d*s*M+i*m*M)*W,n[14]=(p*l*o-c*f*o-p*s*h+i*f*h+c*s*M-i*l*M)*W,n[15]=(c*m*o-d*l*o+d*s*h-i*m*h-c*s*g+i*l*g)*W,e}getMaxScale(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}fromQuaternion(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=e.w,a=n+n,c=i+i,l=s+s,h=n*a,u=n*c,d=n*l,m=i*c,g=i*l,_=s*l,p=o*a,f=o*c,M=o*l;return t[0]=1-(m+_),t[4]=u-M,t[8]=d+f,t[1]=u+M,t[5]=1-(h+_),t[9]=g-p,t[2]=d-f,t[6]=g+p,t[10]=1-(h+m),t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}fromMatrix3(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=0,t[4]=n[3],t[5]=n[4],t[6]=n[5],t[7]=0,t[8]=n[6],t[9]=n[7],t[10]=n[8],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}fromArray(e,t=0){const n=this.elements;for(let i=0;i<16;i++)n[i]=e[i+t];return this}toArray(e,t=0){const n=this.elements;return e[t+0]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}}const rr=new Dr,Pn=new q,or=new q,wi=new Dr;class Pa{constructor(){this.name="",this.active=!0,this.children=new Array,this.parent=null,this.neighbors=new Array,this.neighborhoodRadius=1,this.updateNeighborhood=!1,this.position=new q,this.rotation=new Dr,this.scale=new q(1,1,1),this.forward=new q(0,0,1),this.up=new q(0,1,0),this.boundingRadius=0,this.maxTurnRate=Math.PI,this.canActivateTrigger=!0,this.manager=null,this._localMatrix=new vs,this._worldMatrix=new vs,this._cache={position:new q,rotation:new Dr,scale:new q(1,1,1)},this._renderComponent=null,this._renderComponentCallback=null,this._started=!1,this._uuid=null,this._worldMatrixDirty=!1}get worldMatrix(){return this._updateWorldMatrix(),this._worldMatrix}get uuid(){return this._uuid===null&&(this._uuid=ys.generateUUID()),this._uuid}start(){return this}update(){return this}add(e){return e.parent!==null&&e.parent.remove(e),this.children.push(e),e.parent=this,this}remove(e){const t=this.children.indexOf(e);return this.children.splice(t,1),e.parent=null,this}getDirection(e){return e.copy(this.forward).applyRotation(this.rotation).normalize()}lookAt(e){const t=this.parent;return t!==null?(this.getWorldPosition(or),Pn.subVectors(e,or).normalize(),this.rotation.lookAt(this.forward,Pn,this.up),wi.extractRotationFromMatrix(t.worldMatrix).inverse(),this.rotation.premultiply(wi)):(Pn.subVectors(e,this.position).normalize(),this.rotation.lookAt(this.forward,Pn,this.up)),this}rotateTo(e,t,n=1e-4){const i=this.parent;return i!==null?(this.getWorldPosition(or),Pn.subVectors(e,or).normalize(),rr.lookAt(this.forward,Pn,this.up),wi.extractRotationFromMatrix(i.worldMatrix).inverse(),rr.premultiply(wi)):(Pn.subVectors(e,this.position).normalize(),rr.lookAt(this.forward,Pn,this.up)),this.rotation.rotateTo(rr,this.maxTurnRate*t,n)}getWorldDirection(e){return wi.extractRotationFromMatrix(this.worldMatrix),e.copy(this.forward).applyRotation(wi).normalize()}getWorldPosition(e){return e.extractPositionFromMatrix(this.worldMatrix)}setRenderComponent(e,t){return this._renderComponent=e,this._renderComponentCallback=t,this}handleMessage(){return!1}lineOfSightTest(){return null}sendMessage(e,t,n=0,i=null){return this.manager!==null?this.manager.sendMessage(this,e,t,n,i):tn.error("YUKA.GameEntity: The game entity must be added to a manager in order to send a message."),this}toJSON(){return{type:this.constructor.name,uuid:this.uuid,name:this.name,active:this.active,children:Vl(this.children),parent:this.parent!==null?this.parent.uuid:null,neighbors:Vl(this.neighbors),neighborhoodRadius:this.neighborhoodRadius,updateNeighborhood:this.updateNeighborhood,position:this.position.toArray(new Array),rotation:this.rotation.toArray(new Array),scale:this.scale.toArray(new Array),forward:this.forward.toArray(new Array),up:this.up.toArray(new Array),boundingRadius:this.boundingRadius,maxTurnRate:this.maxTurnRate,canActivateTrigger:this.canActivateTrigger,worldMatrix:this.worldMatrix.toArray(new Array),_localMatrix:this._localMatrix.toArray(new Array),_cache:{position:this._cache.position.toArray(new Array),rotation:this._cache.rotation.toArray(new Array),scale:this._cache.scale.toArray(new Array)},_started:this._started}}fromJSON(e){return this.name=e.name,this.active=e.active,this.neighborhoodRadius=e.neighborhoodRadius,this.updateNeighborhood=e.updateNeighborhood,this.position.fromArray(e.position),this.rotation.fromArray(e.rotation),this.scale.fromArray(e.scale),this.forward.fromArray(e.forward),this.up.fromArray(e.up),this.boundingRadius=e.boundingRadius,this.maxTurnRate=e.maxTurnRate,this.canActivateTrigger=e.canActivateTrigger,this.children=e.children.slice(),this.neighbors=e.neighbors.slice(),this.parent=e.parent,this._localMatrix.fromArray(e._localMatrix),this._worldMatrix.fromArray(e.worldMatrix),this._cache.position.fromArray(e._cache.position),this._cache.rotation.fromArray(e._cache.rotation),this._cache.scale.fromArray(e._cache.scale),this._started=e._started,this._uuid=e.uuid,this}resolveReferences(e){const t=this.neighbors;for(let i=0,s=t.length;i<s;i++)t[i]=e.get(t[i]);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i]=e.get(n[i]);return this.parent=e.get(this.parent)||null,this}_updateMatrix(){const e=this._cache;e.position.equals(this.position)&&e.rotation.equals(this.rotation)&&e.scale.equals(this.scale)||(this._localMatrix.compose(this.position,this.rotation,this.scale),e.position.copy(this.position),e.rotation.copy(this.rotation),e.scale.copy(this.scale),this._worldMatrixDirty=!0)}_updateWorldMatrix(){const e=this.parent;if(e!==null&&e._updateWorldMatrix(),this._updateMatrix(),this._worldMatrixDirty===!0){e===null?this._worldMatrix.copy(this._localMatrix):this._worldMatrix.multiplyMatrices(this.parent._worldMatrix,this._localMatrix),this._worldMatrixDirty=!1;const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];s._worldMatrixDirty=!0}}}updateWorldMatrix(){return console.warn("GameEntity: .updateWorldMatrix() has been removed. World matrices are automatically updated on access."),this}}function Vl(r){const e=new Array;for(let t=0,n=r.length;t<n;t++)e.push(r[t].uuid);return e}const Wl=new q,Fo=new q;class hu extends Pa{constructor(){super(),this.velocity=new q,this.maxSpeed=1,this.updateOrientation=!0}update(e){return this.getSpeedSquared()>this.maxSpeed*this.maxSpeed&&(this.velocity.normalize(),this.velocity.multiplyScalar(this.maxSpeed)),Wl.copy(this.velocity).multiplyScalar(e),Fo.copy(this.position).add(Wl),this.updateOrientation&&this.getSpeedSquared()>1e-8&&this.lookAt(Fo),this.position.copy(Fo),this}getSpeed(){return this.velocity.length()}getSpeedSquared(){return this.velocity.squaredLength()}toJSON(){const e=super.toJSON();return e.velocity=this.velocity.toArray(new Array),e.maxSpeed=this.maxSpeed,e.updateOrientation=this.updateOrientation,e}fromJSON(e){return super.fromJSON(e),this.velocity.fromArray(e.velocity),this.maxSpeed=e.maxSpeed,this.updateOrientation=e.updateOrientation,this}}class Ot{constructor(){this.active=!0,this.weight=1}calculate(){}toJSON(){return{type:this.constructor.name,active:this.active,weight:this.weight}}fromJSON(e){return this.active=e.active,this.weight=e.weight,this}resolveReferences(){}}const ar=new q,cr=new q;class xx extends Ot{constructor(){super()}calculate(e,t){ar.set(0,0,0);const n=e.neighbors;for(let i=0,s=n.length;i<s;i++)n[i].getDirection(cr),ar.add(cr);return n.length>0&&(ar.divideScalar(n.length),e.getDirection(cr),t.subVectors(ar,cr)),t}}const zo=new q,Bo=new q;class kr extends Ot{constructor(e=new q,t=3,n=0){super(),this.target=e,this.deceleration=t,this.tolerance=n}calculate(e,t){const n=this.target,i=this.deceleration;Bo.subVectors(n,e.position);const s=Bo.length();if(s>this.tolerance){let o=s/i;o=Math.min(o,e.maxSpeed),zo.copy(Bo).multiplyScalar(o/s)}else zo.set(0,0,0);return t.subVectors(zo,e.velocity)}toJSON(){const e=super.toJSON();return e.target=this.target.toArray(new Array),e.deceleration=this.deceleration,e}fromJSON(e){return super.fromJSON(e),this.target.fromArray(e.target),this.deceleration=e.deceleration,this}}const ko=new q;class Hr extends Ot{constructor(e=new q){super(),this.target=e}calculate(e,t){const n=this.target;return ko.subVectors(n,e.position).normalize(),ko.multiplyScalar(e.maxSpeed),t.subVectors(ko,e.velocity)}toJSON(){const e=super.toJSON();return e.target=this.target.toArray(new Array),e}fromJSON(e){return super.fromJSON(e),this.target.fromArray(e.target),this}}const lr=new q;class yx extends Ot{constructor(){super(),this._seek=new Hr}calculate(e,t){lr.set(0,0,0);const n=e.neighbors;for(let i=0,s=n.length;i<s;i++){const o=n[i];lr.add(o.position)}return n.length>0&&(lr.divideScalar(n.length),this._seek.target=lr,this._seek.calculate(e,t),t.normalize()),t}}const cs=new q;class uu extends Ot{constructor(e=new q,t=10){super(),this.target=e,this.panicDistance=t}calculate(e,t){const n=this.target;return e.position.squaredDistanceTo(n)<=this.panicDistance*this.panicDistance&&(cs.subVectors(e.position,n).normalize(),cs.squaredLength()===0&&cs.set(0,0,1),cs.multiplyScalar(e.maxSpeed),t.subVectors(cs,e.velocity)),t}toJSON(){const e=super.toJSON();return e.target=this.target.toArray(new Array),e.panicDistance=this.panicDistance,e}fromJSON(e){return super.fromJSON(e),this.target.fromArray(e.target),this.panicDistance=e.panicDistance,this}}const Xl=new q,ql=new q,Yl=new q;class vx extends Ot{constructor(e=null,t=10,n=1){super(),this.pursuer=e,this.panicDistance=t,this.predictionFactor=n,this._flee=new uu}calculate(e,t){const n=this.pursuer;Xl.subVectors(n.position,e.position);let i=Xl.length()/(e.maxSpeed+n.getSpeed());return i*=this.predictionFactor,ql.copy(n.velocity).multiplyScalar(i),Yl.addVectors(n.position,ql),this._flee.target=Yl,this._flee.panicDistance=this.panicDistance,this._flee.calculate(e,t),t}toJSON(){const e=super.toJSON();return e.pursuer=this.pursuer?this.pursuer.uuid:null,e.panicDistance=this.panicDistance,e.predictionFactor=this.predictionFactor,e}fromJSON(e){return super.fromJSON(e),this.pursuer=e.pursuer,this.panicDistance=e.panicDistance,this.predictionFactor=e.predictionFactor,this}resolveReferences(e){this.pursuer=e.get(this.pursuer)||null}}class ma{constructor(){this.loop=!1,this._waypoints=new Array,this._index=0}add(e){return this._waypoints.push(e),this}clear(){return this._waypoints.length=0,this._index=0,this}current(){return this._waypoints[this._index]}finished(){const e=this._waypoints.length-1;return this.loop===!0?!1:this._index===e}advance(){return this._index++,this._index===this._waypoints.length&&(this.loop===!0?this._index=0:this._index--),this}toJSON(){const e={type:this.constructor.name,loop:this.loop,_waypoints:new Array,_index:this._index},t=this._waypoints;for(let n=0,i=t.length;n<i;n++){const s=t[n];e._waypoints.push(s.toArray(new Array))}return e}fromJSON(e){this.loop=e.loop,this._index=e._index;const t=e._waypoints;for(let n=0,i=t.length;n<i;n++){const s=t[n];this._waypoints.push(new q().fromArray(s))}return this}}class du extends Ot{constructor(e=new ma,t=1){super(),this.path=e,this.nextWaypointDistance=t,this._arrive=new kr,this._seek=new Hr}calculate(e,t){const n=this.path;n.current().squaredDistanceTo(e.position)<this.nextWaypointDistance*this.nextWaypointDistance&&n.advance();const s=n.current();return n.finished()===!0?(this._arrive.target=s,this._arrive.calculate(e,t)):(this._seek.target=s,this._seek.calculate(e,t)),t}toJSON(){const e=super.toJSON();return e.path=this.path.toJSON(),e.nextWaypointDistance=this.nextWaypointDistance,e}fromJSON(e){return super.fromJSON(e),this.path.fromJSON(e.path),this.nextWaypointDistance=e.nextWaypointDistance,this}}const hr=new q,ur=new q,jl=new q,Kl=new q;class Mx extends Ot{constructor(e=null,t=null,n=3){super(),this.entity1=e,this.entity2=t,this.deceleration=n,this._arrive=new kr}calculate(e,t){const n=this.entity1,i=this.entity2;hr.addVectors(n.position,i.position).multiplyScalar(.5);const s=e.position.distanceTo(hr)/e.maxSpeed;return ur.copy(n.velocity).multiplyScalar(s),jl.addVectors(n.position,ur),ur.copy(i.velocity).multiplyScalar(s),Kl.addVectors(i.position,ur),hr.addVectors(jl,Kl).multiplyScalar(.5),this._arrive.deceleration=this.deceleration,this._arrive.target=hr,this._arrive.calculate(e,t),t}toJSON(){const e=super.toJSON();return e.entity1=this.entity1?this.entity1.uuid:null,e.entity2=this.entity2?this.entity2.uuid:null,e.deceleration=this.deceleration,e}fromJSON(e){return super.fromJSON(e),this.entity1=e.entity1,this.entity2=e.entity2,this.deceleration=e.deceleration,this}resolveReferences(e){this.entity1=e.get(this.entity1)||null,this.entity2=e.get(this.entity2)||null}}const Gt=new q,ls=new q,Nn=new q,xn=[new q,new q,new q,new q,new q,new q,new q,new q];class Na{constructor(e=new q,t=new q){this.min=e,this.max=t}set(e,t){return this.min=e,this.max=t,this}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}clone(){return new this.constructor().copy(this)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max),t}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}expand(e){return this.min.min(e),this.max.max(e),this}getCenter(e){return e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return e.subVectors(this.max,this.min)}intersectsAABB(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsBoundingSphere(e){return this.clampPoint(e.center,Gt),Gt.squaredDistanceTo(e.center)<=e.radius*e.radius}intersectsPlane(e){const t=e.normal;this.getCenter(ls),Nn.subVectors(this.max,ls);const n=Nn.x*Math.abs(t.x)+Nn.y*Math.abs(t.y)+Nn.z*Math.abs(t.z),i=e.distanceToPoint(ls);return Math.abs(i)<=n}getNormalFromSurfacePoint(e,t){t.set(0,0,0);let n,i=1/0;return this.getCenter(ls),this.getSize(Nn),Gt.copy(e).sub(ls),n=Math.abs(Nn.x-Math.abs(Gt.x)),n<i&&(i=n,t.set(1*Math.sign(Gt.x),0,0)),n=Math.abs(Nn.y-Math.abs(Gt.y)),n<i&&(i=n,t.set(0,1*Math.sign(Gt.y),0)),n=Math.abs(Nn.z-Math.abs(Gt.z)),n<i&&t.set(0,0,1*Math.sign(Gt.z)),t}fromCenterAndSize(e,t){return Gt.copy(t).multiplyScalar(.5),this.min.copy(e).sub(Gt),this.max.copy(e).add(Gt),this}fromPoints(e){this.min.set(1/0,1/0,1/0),this.max.set(-1/0,-1/0,-1/0);for(let t=0,n=e.length;t<n;t++)this.expand(e[t]);return this}applyMatrix4(e){const t=this.min,n=this.max;return xn[0].set(t.x,t.y,t.z).applyMatrix4(e),xn[1].set(t.x,t.y,n.z).applyMatrix4(e),xn[2].set(t.x,n.y,t.z).applyMatrix4(e),xn[3].set(t.x,n.y,n.z).applyMatrix4(e),xn[4].set(n.x,t.y,t.z).applyMatrix4(e),xn[5].set(n.x,t.y,n.z).applyMatrix4(e),xn[6].set(n.x,n.y,t.z).applyMatrix4(e),xn[7].set(n.x,n.y,n.z).applyMatrix4(e),this.fromPoints(xn)}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{type:this.constructor.name,min:this.min.toArray(new Array),max:this.max.toArray(new Array)}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ho=new Na;class Gr{constructor(e=new q,t=0){this.center=e,this.radius=t}set(e,t){return this.center=e,this.radius=t,this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}clone(){return new this.constructor().copy(this)}clampPoint(e,t){return t.copy(e),this.center.squaredDistanceTo(e)>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}containsPoint(e){return e.squaredDistanceTo(this.center)<=this.radius*this.radius}intersectsBoundingSphere(e){const t=this.radius+e.radius;return e.center.squaredDistanceTo(this.center)<=t*t}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}getNormalFromSurfacePoint(e,t){return t.subVectors(e,this.center).normalize()}fromPoints(e){return Ho.fromPoints(e),Ho.getCenter(this.center),this.radius=this.center.distanceTo(Ho.max),this}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScale(),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}toJSON(){return{type:this.constructor.name,center:this.center.toArray(new Array),radius:this.radius}}fromJSON(e){return this.center.fromArray(e.center),this.radius=e.radius,this}}const Vt=new q,Go=new q,dr=new q,Vo=new q,Jl=new q,fr=new vs,Sx=new vs,$l=new Na;class fu{constructor(e=new q,t=new q){this.origin=e,this.direction=t}set(e,t){return this.origin=e,this.direction=t,this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}clone(){return new this.constructor().copy(this)}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}intersectBoundingSphere(e,t){Vt.subVectors(e.center,this.origin);const n=Vt.dot(this.direction),i=Vt.dot(Vt)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,c=n+o;return a<0&&c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsBoundingSphere(e){const t=new q;let n;const i=t.subVectors(e.center,this.origin).dot(this.direction);return i<0?n=this.origin.squaredDistanceTo(e.center):(t.copy(this.direction).multiplyScalar(i).add(this.origin),n=t.squaredDistanceTo(e.center)),n<=e.radius*e.radius}intersectAABB(e,t){let n,i,s,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||s>i||((s>n||n!==n)&&(n=s),(o<i||i!==i)&&(i=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsAABB(e){return this.intersectAABB(e,Vt)!==null}intersectPlane(e,t){let n;const i=e.normal.dot(this.direction);if(i===0)if(e.distanceToPoint(this.origin)===0)n=0;else return null;else n=-(this.origin.dot(e.normal)+e.constant)/i;return n>=0?this.at(n,t):null}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectOBB(e,t){return e.getSize(Jl),$l.fromCenterAndSize(Vt.set(0,0,0),Jl),fr.fromMatrix3(e.rotation),fr.setPosition(e.center),Zl.copy(this).applyMatrix4(fr.getInverse(Sx)),Zl.intersectAABB($l,t)?t.applyMatrix4(fr):null}intersectsOBB(e){return this.intersectOBB(e,Vt)!==null}intersectConvexHull(e,t){const n=e.faces;let i=-1/0,s=1/0;for(let o=0,a=n.length;o<a;o++){const l=n[o].plane,h=l.distanceToPoint(this.origin),u=l.normal.dot(this.direction);if(h>0&&u>=0)return null;const d=u!==0?-h/u:0;if(!(d<=0)&&(u>0?s=Math.min(d,s):i=Math.max(d,i),i>s))return null}return i!==-1/0?this.at(i,t):this.at(s,t),t}intersectsConvexHull(e){return this.intersectConvexHull(e,Vt)!==null}intersectTriangle(e,t,n){const i=e.a,s=e.b,o=e.c;Go.subVectors(s,i),dr.subVectors(o,i),Vo.crossVectors(Go,dr);let a=this.direction.dot(Vo),c;if(a>0){if(t)return null;c=1}else if(a<0)c=-1,a=-a;else return null;Vt.subVectors(this.origin,i);const l=c*this.direction.dot(dr.crossVectors(Vt,dr));if(l<0)return null;const h=c*this.direction.dot(Go.cross(Vt));if(h<0||l+h>a)return null;const u=-c*Vt.dot(Vo);return u<0?null:this.at(u/a,n)}intersectBVH(e,t){return e.root.intersectRay(this,t)}intersectsBVH(e){return e.root.intersectsRay(this)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}}const Zl=new fu,Ql=new vs,Ri=new q,pr=new q,Wo=new q,Xo=new Gr,Ex=new fu(new q(0,0,0),new q(0,0,1));class Tx extends Ot{constructor(e=new Array){super(),this.obstacles=e,this.brakingWeight=.2,this.dBoxMinLength=4}calculate(e,t){const n=this.obstacles;let i=null,s=1/0;const o=this.dBoxMinLength+e.getSpeed()/e.maxSpeed*this.dBoxMinLength;e.worldMatrix.getInverse(Ql);for(let a=0,c=n.length;a<c;a++){const l=n[a];if(l!==e&&(Ri.copy(l.position).applyMatrix4(Ql),Ri.z>0&&Math.abs(Ri.z)<o)){const h=l.boundingRadius+e.boundingRadius;Math.abs(Ri.x)<h&&(Xo.center.copy(Ri),Xo.radius=h,Ex.intersectBoundingSphere(Xo,Wo),Wo.z<s&&(s=Wo.z,i=l,pr.copy(Ri)))}}if(i!==null){const a=1+(o-pr.z)/o;t.x=(i.boundingRadius-pr.x)*a,t.z=(i.boundingRadius-pr.z)*this.brakingWeight,t.applyRotation(e.rotation)}return t}toJSON(){const e=super.toJSON();e.obstacles=new Array,e.brakingWeight=this.brakingWeight,e.dBoxMinLength=this.dBoxMinLength;for(let t=0,n=this.obstacles.length;t<n;t++)e.obstacles.push(this.obstacles[t].uuid);return e}fromJSON(e){return super.fromJSON(e),this.obstacles=e.obstacles,this.brakingWeight=e.brakingWeight,this.dBoxMinLength=e.dBoxMinLength,this}resolveReferences(e){const t=this.obstacles;for(let n=0,i=t.length;n<i;n++)t[n]=e.get(t[n])}}const qo=new q,eh=new q,th=new q,nh=new q;class bx extends Ot{constructor(e=null,t=new q){super(),this.leader=e,this.offset=t,this._arrive=new kr,this._arrive.deceleration=1.5}calculate(e,t){const n=this.leader,i=this.offset;qo.copy(i).applyMatrix4(n.worldMatrix),eh.subVectors(qo,e.position);const s=eh.length()/(e.maxSpeed+n.getSpeed());return th.copy(n.velocity).multiplyScalar(s),nh.addVectors(qo,th),this._arrive.target=nh,this._arrive.calculate(e,t),t}toJSON(){const e=super.toJSON();return e.leader=this.leader?this.leader.uuid:null,e.offset=this.offset,e}fromJSON(e){return super.fromJSON(e),this.leader=e.leader,this.offset=e.offset,this}resolveReferences(e){this.leader=e.get(this.leader)||null}}const Yo=new q,jo=new q,ih=new q,sh=new q,rh=new q;class Ax extends Ot{constructor(e=null,t=1){super(),this.evader=e,this.predictionFactor=t,this._seek=new Hr}calculate(e,t){const n=this.evader;Yo.subVectors(n.position,e.position),e.getDirection(jo),n.getDirection(ih);const i=Yo.dot(jo)>0,s=jo.dot(ih)<-.95;if(i===!0&&s===!0)return this._seek.target=n.position,this._seek.calculate(e,t),t;let o=Yo.length()/(e.maxSpeed+n.getSpeed());return o*=this.predictionFactor,sh.copy(n.velocity).multiplyScalar(o),rh.addVectors(n.position,sh),this._seek.target=rh,this._seek.calculate(e,t),t}toJSON(){const e=super.toJSON();return e.evader=this.evader?this.evader.uuid:null,e.predictionFactor=this.predictionFactor,e}fromJSON(e){return super.fromJSON(e),this.evader=e.evader,this.predictionFactor=e.predictionFactor,this}resolveReferences(e){this.evader=e.get(this.evader)||null}}const mr=new q;class wx extends Ot{constructor(){super()}calculate(e,t){const n=e.neighbors;for(let i=0,s=n.length;i<s;i++){const o=n[i];mr.subVectors(e.position,o.position);let a=mr.length();a===0&&(a=1e-4),mr.normalize().divideScalar(a),t.add(mr)}return t}}const gr=new q,Ko=new q;class Rx extends Ot{constructor(e=1,t=5,n=5){super(),this.radius=e,this.distance=t,this.jitter=n,this._targetLocal=new q,Cx(this.radius,this._targetLocal)}calculate(e,t,n){const i=this.jitter*n;return Ko.x=ys.randFloat(-1,1)*i,Ko.z=ys.randFloat(-1,1)*i,this._targetLocal.add(Ko),this._targetLocal.normalize(),this._targetLocal.multiplyScalar(this.radius),gr.copy(this._targetLocal),gr.z+=this.distance,gr.applyMatrix4(e.worldMatrix),t.subVectors(gr,e.position),t}toJSON(){const e=super.toJSON();return e.radius=this.radius,e.distance=this.distance,e.jitter=this.jitter,e._targetLocal=this._targetLocal.toArray(new Array),e}fromJSON(e){return super.fromJSON(e),this.radius=e.radius,this.distance=e.distance,this.jitter=e.jitter,this._targetLocal.fromArray(e._targetLocal),this}}function Cx(r,e){const t=Math.random()*Math.PI*2;e.x=r*Math.cos(t),e.z=r*Math.sin(t)}const _r=new q;class oh{constructor(e){this.vehicle=e,this.behaviors=new Array,this._steeringForce=new q,this._typesMap=new Map}add(e){return this.behaviors.push(e),this}remove(e){const t=this.behaviors.indexOf(e);return this.behaviors.splice(t,1),this}clear(){return this.behaviors.length=0,this}calculate(e,t){return this._calculateByOrder(e),t.copy(this._steeringForce)}_accumulate(e){const t=this._steeringForce.length(),n=this.vehicle.maxForce-t;return n<=0?!1:(e.length()>n&&e.normalize().multiplyScalar(n),this._steeringForce.add(e),!0)}_calculateByOrder(e){const t=this.behaviors;this._steeringForce.set(0,0,0);for(let n=0,i=t.length;n<i;n++){const s=t[n];if(s.active===!0&&(_r.set(0,0,0),s.calculate(this.vehicle,_r,e),_r.multiplyScalar(s.weight),this._accumulate(_r)===!1))return}}toJSON(){const e={type:"SteeringManager",behaviors:new Array},t=this.behaviors;for(let n=0,i=t.length;n<i;n++){const s=t[n];e.behaviors.push(s.toJSON())}return e}fromJSON(e){this.clear();const t=e.behaviors;for(let n=0,i=t.length;n<i;n++){const s=t[n],o=s.type;let a;switch(o){case"SteeringBehavior":a=new Ot().fromJSON(s);break;case"AlignmentBehavior":a=new xx().fromJSON(s);break;case"ArriveBehavior":a=new kr().fromJSON(s);break;case"CohesionBehavior":a=new yx().fromJSON(s);break;case"EvadeBehavior":a=new vx().fromJSON(s);break;case"FleeBehavior":a=new uu().fromJSON(s);break;case"FollowPathBehavior":a=new du().fromJSON(s);break;case"InterposeBehavior":a=new Mx().fromJSON(s);break;case"ObstacleAvoidanceBehavior":a=new Tx().fromJSON(s);break;case"OffsetPursuitBehavior":a=new bx().fromJSON(s);break;case"PursuitBehavior":a=new Ax().fromJSON(s);break;case"SeekBehavior":a=new Hr().fromJSON(s);break;case"SeparationBehavior":a=new wx().fromJSON(s);break;case"WanderBehavior":a=new Rx().fromJSON(s);break;default:const c=this._typesMap.get(o);if(c!==void 0)a=new c().fromJSON(s);else{tn.warn("YUKA.SteeringManager: Unsupported steering behavior type:",o);continue}}this.add(a)}return this}registerType(e,t){return this._typesMap.set(e,t),this}resolveReferences(e){const t=this.behaviors;for(let n=0,i=t.length;n<i;n++)t[n].resolveReferences(e);return this}}class Lx{constructor(e=10){this.count=e,this._history=new Array,this._slot=0;for(let t=0;t<this.count;t++)this._history[t]=new q}calculate(e,t){t.set(0,0,0),this._slot===this.count&&(this._slot=0),this._history[this._slot].copy(e),this._slot++;for(let n=0;n<this.count;n++)t.add(this._history[n]);return t.divideScalar(this.count),t}toJSON(){const e={type:this.constructor.name,count:this.count,_history:new Array,_slot:this._slot},t=this._history;for(let n=0,i=t.length;n<i;n++){const s=t[n];e._history.push(s.toArray(new Array))}return e}fromJSON(e){this.count=e.count,this._slot=e._slot;const t=e._history;this._history.length=0;for(let n=0,i=t.length;n<i;n++){const s=t[n];this._history.push(new q().fromArray(s))}return this}}const ah=new q,xr=new q,ch=new q,hs=new q,lh=new q;class pu extends hu{constructor(){super(),this.mass=1,this.maxForce=100,this.steering=new oh(this),this.smoother=null}update(e){return this.steering.calculate(e,ah),ch.copy(ah).divideScalar(this.mass),this.velocity.add(ch.multiplyScalar(e)),this.getSpeedSquared()>this.maxSpeed*this.maxSpeed&&(this.velocity.normalize(),this.velocity.multiplyScalar(this.maxSpeed)),xr.copy(this.velocity).multiplyScalar(e),hs.copy(this.position).add(xr),this.updateOrientation===!0&&this.smoother===null&&this.getSpeedSquared()>1e-8&&this.lookAt(hs),this.position.copy(hs),this.updateOrientation===!0&&this.smoother!==null&&(this.smoother.calculate(this.velocity,lh),xr.copy(lh).multiplyScalar(e),hs.copy(this.position).add(xr),this.lookAt(hs)),this}toJSON(){const e=super.toJSON();return e.mass=this.mass,e.maxForce=this.maxForce,e.steering=this.steering.toJSON(),e.smoother=this.smoother?this.smoother.toJSON():null,e}fromJSON(e){return super.fromJSON(e),this.mass=e.mass,this.maxForce=e.maxForce,this.steering=new oh(this).fromJSON(e.steering),this.smoother=e.smoother?new Lx().fromJSON(e.smoother):null,this}resolveReferences(e){super.resolveReferences(e),this.steering.resolveReferences(e)}}class Ir{touching(){return!1}update(){return this}toJSON(){return{type:this.constructor.name}}fromJSON(){return this}}const hh=new Gr,uh=new q;class Px extends Ir{constructor(e=new q){super(),this.size=e,this._aabb=new Na}touching(e){return hh.set(e.position,e.boundingRadius),this._aabb.intersectsBoundingSphere(hh)}update(e){return e.getWorldPosition(uh),this._aabb.fromCenterAndSize(uh,this.size),this}toJSON(){const e=super.toJSON();return e.size=this.size.toArray(new Array),e}fromJSON(e){return super.fromJSON(e),this.size.fromArray(e.size),this}}const Jo=new Gr;class Nx extends Ir{constructor(e=0){super(),this.radius=e,this._boundingSphere=new Gr}touching(e){return e.getWorldPosition(Jo.center),Jo.radius=e.boundingRadius,this._boundingSphere.intersectsBoundingSphere(Jo)}update(e){return e.getWorldPosition(this._boundingSphere.center),this._boundingSphere.radius=this.radius,this}toJSON(){const e=super.toJSON();return e.radius=this.radius,e}fromJSON(e){return super.fromJSON(e),this.radius=e.radius,this}}class dh extends Pa{constructor(e=new Ir){super(),this.region=e,this.canActivateTrigger=!1,this._typesMap=new Map}check(e){return this.region.touching(e)===!0&&this.execute(e),this}execute(){}updateRegion(){return this.region.update(this),this}toJSON(){const e=super.toJSON();return e.region=this.region.toJSON(),e}fromJSON(e){super.fromJSON(e);const t=e.region;let n=t.type;switch(n){case"TriggerRegion":this.region=new Ir().fromJSON(t);break;case"RectangularTriggerRegion":this.region=new Px().fromJSON(t);break;case"SphericalTriggerRegion":this.region=new Nx().fromJSON(t);break;default:const i=this._typesMap.get(n);i!==void 0?this.region=new i().fromJSON(t):tn.warn("YUKA.Trigger: Unsupported trigger region type:",t.type)}return this}registerType(e,t){return this._typesMap.set(e,t),this}}const us=new Array;class Dx{constructor(){this.entities=new Array,this.spatialIndex=null,this._triggers=new Array,this._indexMap=new Map,this._typesMap=new Map,this._messageDispatcher=new gx}add(e){return this.entities.push(e),e.manager=this,this}remove(e){const t=this.entities.indexOf(e);return this.entities.splice(t,1),e.manager=null,this}clear(){return this.entities.length=0,this._messageDispatcher.clear(),this}getEntityByName(e){const t=this.entities;for(let n=0,i=t.length;n<i;n++){const s=t[n];if(s.name===e)return s}return null}update(e){const t=this.entities,n=this._triggers;for(let i=t.length-1;i>=0;i--){const s=t[i];this.updateEntity(s,e)}for(let i=n.length-1;i>=0;i--){const s=n[i];this.processTrigger(s)}return this._triggers.length=0,this._messageDispatcher.dispatchDelayedMessages(e),this}updateEntity(e,t){if(e.active===!0){this.updateNeighborhood(e),e._started===!1&&(e.start(),e._started=!0),e.update(t);const n=e.children;for(let o=n.length-1;o>=0;o--){const a=n[o];this.updateEntity(a,t)}if(e instanceof dh&&this._triggers.push(e),this.spatialIndex!==null){let o=this._indexMap.get(e)||-1;o=this.spatialIndex.updateEntity(e,o),this._indexMap.set(e,o)}const i=e._renderComponent,s=e._renderComponentCallback;i!==null&&s!==null&&s(e,i)}return this}updateNeighborhood(e){if(e.updateNeighborhood===!0){e.neighbors.length=0,this.spatialIndex!==null?this.spatialIndex.query(e.position,e.neighborhoodRadius,us):(us.length=0,us.push(...this.entities));const t=e.neighborhoodRadius*e.neighborhoodRadius;for(let n=0,i=us.length;n<i;n++){const s=us[n];e!==s&&s.active===!0&&e.position.squaredDistanceTo(s.position)<=t&&e.neighbors.push(s)}}return this}processTrigger(e){e.updateRegion();const t=this.entities;for(let n=t.length-1;n>=0;n--){const i=t[n];e!==i&&i.active===!0&&i.canActivateTrigger===!0&&e.check(i)}return this}sendMessage(e,t,n,i,s){return this._messageDispatcher.dispatch(e,t,n,i,s),this}toJSON(){const e={type:this.constructor.name,entities:new Array,_messageDispatcher:this._messageDispatcher.toJSON()};function t(n){e.entities.push(n.toJSON());for(let i=0,s=n.children.length;i<s;i++)t(n.children[i])}for(let n=0,i=this.entities.length;n<i;n++)t(this.entities[n]);return e}fromJSON(e){this.clear();const t=e.entities,n=e._messageDispatcher,i=new Map;for(let s=0,o=t.length;s<o;s++){const a=t[s],c=a.type;let l;switch(c){case"GameEntity":l=new Pa().fromJSON(a);break;case"MovingEntity":l=new hu().fromJSON(a);break;case"Vehicle":l=new pu().fromJSON(a);break;case"Trigger":l=new dh().fromJSON(a);break;default:const h=this._typesMap.get(c);if(h!==void 0)l=new h().fromJSON(a);else{tn.warn("YUKA.EntityManager: Unsupported entity type:",c);continue}}i.set(l.uuid,l),l.parent===null&&this.add(l)}for(let s of i.values())s.resolveReferences(i);return this._messageDispatcher.fromJSON(n),this}registerType(e,t){return this._typesMap.set(e,t),this}}new Array;new Array;new Array;class fh{constructor(e=Vi,t=String){De(this,"scene",Vi);De(this,"trackURL","");De(this,"scale",.1);De(this,"rotationAngle",Math.PI*5/6+Math.PI/2);De(this,"trackScene",null);De(this,"path",ma);De(this,"x",-1260);De(this,"y",-.2);De(this,"z",-940);this.scene=e,this.trackURL=t,this.loadGLTF(e,t),this.drawBotPath(),this.drawRightSideBoundary(),this.drawLeftSideBoundary()}drawLeftSideBoundary(){const e=[{x:90.36,y:0,z:-369.63},{x:80.82,y:0,z:-321.84},{x:68.51,y:0,z:-239.37},{x:52.69,y:0,z:-127.8},{x:43.15,y:0,z:-36.97},{x:37.39,y:0,z:37.85},{x:33.49,y:0,z:170.84},{x:30.11,y:0,z:280.55},{x:25.64,y:0,z:351.22},{x:19.66,y:0,z:445.28},{x:15.01,y:0,z:511.12},{x:6.43,y:0,z:588.38},{x:.86,y:0,z:630.29},{x:-.4,y:0,z:657.7},{x:2.12,y:0,z:671.07},{x:15.31,y:0,z:691.97},{x:25.67,y:0,z:701.33},{x:52.49,y:0,z:716.72},{x:67.09,y:0,z:715.94},{x:90.72,y:0,z:705.91},{x:134.95,y:0,z:683.18},{x:159.85,y:0,z:675.03},{x:192.16,y:0,z:676.71},{x:221.74,y:0,z:686.99},{x:250.9,y:0,z:707.76},{x:271.51,y:0,z:733.12},{x:281.45,y:0,z:751.47},{x:301.02,y:0,z:788.01},{x:311.28,y:0,z:804.21},{x:325,y:0,z:816.83},{x:339.81,y:0,z:823.17},{x:352.1,y:0,z:824.64},{x:365.02,y:0,z:823.83},{x:383.01,y:0,z:818.76},{x:398.9,y:0,z:809.38},{x:411.23,y:0,z:796.11},{x:467.64,y:0,z:692.08},{x:478.47,y:0,z:668.56},{x:484.91,y:0,z:647.39},{x:487.89,y:0,z:632.54},{x:488.55,y:0,z:617.09},{x:483.99,y:0,z:596.16},{x:474.62,y:0,z:579.7},{x:437.5,y:0,z:528.91},{x:414.52,y:0,z:491.92},{x:390.47,y:0,z:449.41},{x:381.1,y:0,z:419.16},{x:379.52,y:0,z:390.9},{x:383.35,y:0,z:360.73},{x:390.04,y:0,z:336.13},{x:405.41,y:0,z:303.13},{x:432.49,y:0,z:253.31},{x:529.64,y:0,z:78.25},{x:543.09,y:0,z:58.6},{x:566.46,y:0,z:33.37},{x:595.57,y:0,z:14.37},{x:622.82,y:0,z:6.9},{x:661.05,y:0,z:8.28},{x:686.98,y:0,z:12.53},{x:713.88,y:0,z:23.42},{x:737.07,y:0,z:41.96},{x:759.83,y:0,z:63.82},{x:778.61,y:0,z:90.51},{x:787.74,y:0,z:118.41},{x:793.06,y:0,z:149.66},{x:791.47,y:0,z:181.97},{x:781.82,y:0,z:211.18},{x:765.18,y:0,z:238.86},{x:748.42,y:0,z:259.86},{x:728.53,y:0,z:279.58},{x:706.07,y:0,z:297.85},{x:646.32,y:0,z:351.76},{x:628.42,y:0,z:372.23},{x:619.19,y:0,z:395.49},{x:618.9,y:0,z:413.79},{x:620.14,y:0,z:428.42},{x:627.14,y:0,z:442.57},{x:636.13,y:0,z:452.17},{x:643.96,y:0,z:458.87},{x:666.74,y:0,z:474.87},{x:692.56,y:0,z:495.85},{x:707.49,y:0,z:517.68},{x:720.32,y:0,z:548.24},{x:725.85,y:0,z:574.61},{x:725.88,y:0,z:603.74},{x:722.04,y:0,z:642.35},{x:715.57,y:0,z:698.04},{x:708.94,y:0,z:760.43},{x:702.59,y:0,z:830.88},{x:698.15,y:0,z:911.74},{x:696.71,y:0,z:933.58},{x:702.18,y:0,z:987.07},{x:707.01,y:0,z:1004.19},{x:719.58,y:0,z:1028.02},{x:734.18,y:0,z:1045.36},{x:750.67,y:0,z:1058.07},{x:764.75,y:0,z:1064.36},{x:780.27,y:0,z:1067.98},{x:792.92,y:0,z:1068.16},{x:809.07,y:0,z:1065.23},{x:839.81,y:0,z:1050.54},{x:862.52,y:0,z:1024.69},{x:913.7,y:0,z:932.9},{x:1038.59,y:0,z:707.68},{x:1101.3,y:0,z:598.19},{x:1118.24,y:0,z:572.85},{x:1153.23,y:0,z:531.95},{x:1192.35,y:0,z:493.7},{x:1230.1,y:0,z:467.03},{x:1270.48,y:0,z:445.54},{x:1313.08,y:0,z:432.29},{x:1343.98,y:0,z:427.21},{x:1376.17,y:0,z:426.89},{x:1404.68,y:0,z:429.98},{x:1425.07,y:0,z:433.69},{x:1457.17,y:0,z:432.13},{x:1484.68,y:0,z:426.87},{x:1508.33,y:0,z:416.73}];if(this.leftBoundary=[],e.forEach(t=>{const n=new L(t.x,t.y,t.z);this.leftBoundary.push(n)}),this.scene.debugMode){const t=[];for(let o=0;o<this.leftBoundary.length-1;o++){const a=this.leftBoundary[o],c=this.leftBoundary[o+1];t.push(a.x,a.y,a.z),t.push(c.x,c.y,c.z)}const n=new Ii({color:16711680}),i=new It;i.setAttribute("position",new Yt(t,3));const s=new ps(i,n);this.scene.add(s)}}drawRightSideBoundary(){const e=[{x:25.17,y:0,z:-383.79},{x:22.26,y:0,z:-366.27},{x:15.56,y:0,z:-328.95},{x:8.34,y:0,z:-288.4},{x:3.58,y:0,z:-257.31},{x:-.69,y:0,z:-228},{x:-5.91,y:0,z:-192.13},{x:-15.88,y:0,z:-115.74},{x:-24.08,y:0,z:-37.88},{x:-28.22,y:0,z:9.13},{x:-31.46,y:0,z:88.3},{x:-33.22,y:0,z:160.24},{x:-34.58,y:0,z:247.36},{x:-41.49,y:0,z:372.36},{x:-46.48,y:0,z:464.37},{x:-50.58,y:0,z:507.17},{x:-57.92,y:0,z:571.28},{x:-61.91,y:0,z:611.18},{x:-64.74,y:0,z:655.02},{x:-65.36,y:0,z:681.47},{x:-56.4,y:0,z:705.52},{x:-36.72,y:0,z:732.83},{x:-14.65,y:0,z:753.96},{x:14.11,y:0,z:771.59},{x:49.01,y:0,z:781.08},{x:81.04,y:0,z:779.47},{x:105.25,y:0,z:771.82},{x:130.09,y:0,z:758.43},{x:142.98,y:0,z:751.21},{x:155.47,y:0,z:745.56},{x:173.32,y:0,z:740.99},{x:184.67,y:0,z:742.84},{x:199.7,y:0,z:750.92},{x:218.85,y:0,z:772.08},{x:250.96,y:0,z:830.42},{x:269.5,y:0,z:856.65},{x:297.08,y:0,z:876.66},{x:326.39,y:0,z:886.65},{x:361.05,y:0,z:890.46},{x:385.96,y:0,z:886.64},{x:422.91,y:0,z:872.66},{x:447.36,y:0,z:853.44},{x:464.37,y:0,z:832.64},{x:483.65,y:0,z:801.41},{x:530.83,y:0,z:712.86},{x:541.22,y:0,z:691.28},{x:547.78,y:0,z:669.03},{x:554.31,y:0,z:628.41},{x:555.13,y:0,z:605.13},{x:547.67,y:0,z:572.75},{x:534.34,y:0,z:549.71},{x:516.06,y:0,z:524.41},{x:495.64,y:0,z:494.14},{x:460.58,y:0,z:440.76},{x:448.8,y:0,z:412.52},{x:445.77,y:0,z:394.14},{x:449.16,y:0,z:368.36},{x:461.06,y:0,z:338.86},{x:511.3,y:0,z:249},{x:577.8,y:0,z:124.52},{x:604.21,y:0,z:90.85},{x:614.24,y:0,z:80.55},{x:629.55,y:0,z:73.34},{x:644.52,y:0,z:72.16},{x:668.82,y:0,z:76.76},{x:703.92,y:0,z:102.8},{x:712.12,y:0,z:112.23},{x:722.45,y:0,z:132.02},{x:725.33,y:0,z:145.49},{x:725.95,y:0,z:159.83},{x:719.8,y:0,z:186.19},{x:704.18,y:0,z:208.48},{x:683.82,y:0,z:228.13},{x:641.47,y:0,z:264.37},{x:613.88,y:0,z:291.71},{x:587.08,y:0,z:318.69},{x:569.79,y:0,z:343.42},{x:558.1,y:0,z:368.52},{x:551.41,y:0,z:400.37},{x:554.1,y:0,z:437.57},{x:562.96,y:0,z:465.26},{x:581.26,y:0,z:491.2},{x:602.24,y:0,z:509.23},{x:611.05,y:0,z:515.08},{x:632.84,y:0,z:530.27},{x:646.8,y:0,z:546.57},{x:655.54,y:0,z:564.09},{x:658.71,y:0,z:580.98},{x:658.42,y:0,z:600.68},{x:651.73,y:0,z:657.54},{x:639.33,y:0,z:777.67},{x:630.37,y:0,z:905.02},{x:630.1,y:0,z:953.47},{x:634.89,y:0,z:990.83},{x:640.83,y:0,z:1014.82},{x:649.83,y:0,z:1039.97},{x:666.32,y:0,z:1068.85},{x:686.79,y:0,z:1091.96},{x:711.47,y:0,z:1111.26},{x:739.27,y:0,z:1126.18},{x:767.07,y:0,z:1133.24},{x:798.56,y:0,z:1134.91},{x:835.14,y:0,z:1126.47},{x:858.34,y:0,z:1116.65},{x:884.55,y:0,z:1099.83},{x:904.75,y:0,z:1079.61},{x:919.2,y:0,z:1061.09},{x:934.65,y:0,z:1035.54},{x:992.01,y:0,z:933.36},{x:1038.91,y:0,z:848.79},{x:1141.26,y:0,z:659.6},{x:1193.95,y:0,z:586.7},{x:1241.89,y:0,z:542.12},{x:1275.83,y:0,z:516.93},{x:1311.83,y:0,z:501.51},{x:1342.07,y:0,z:494.35},{x:1367.94,y:0,z:493.38},{x:1396.68,y:0,z:498.06},{x:1427.68,y:0,z:501.21},{x:1454.28,y:0,z:501.17},{x:1473.8,y:0,z:499.32},{x:1500.01,y:0,z:493.5},{x:1523.37,y:0,z:484.7},{x:1540.13,y:0,z:475.57}];if(this.rightBoundary=[],e.forEach(t=>{const n=new L(t.x,t.y,t.z);this.rightBoundary.push(n)}),this.scene.debugMode){const t=[];for(let o=0;o<this.rightBoundary.length-1;o++){const a=this.rightBoundary[o],c=this.rightBoundary[o+1];t.push(a.x,a.y,a.z),t.push(c.x,c.y,c.z)}const n=new Ii({color:16711680}),i=new It;i.setAttribute("position",new Yt(t,3));const s=new ps(i,n);this.scene.add(s)}}drawBotPath(){if(this.path=new ma,this.path.add(new q(2.77,0,75.66)),this.path.add(new q(-6.04,0,322.62)),this.path.add(new q(-30.82,0,616.35)),this.path.add(new q(27.75,0,737.82)),this.path.add(new q(179.42,0,713.71)),this.path.add(new q(265.42,0,778.47)),this.path.add(new q(353.6,0,857.22)),this.path.add(new q(449.6,0,794.27)),this.path.add(new q(503.21,0,688.85)),this.path.add(new q(499.22,0,563.23)),this.path.add(new q(426.72,0,439.82)),this.path.add(new q(439.74,0,308.9)),this.path.add(new q(499.69,0,196.97)),this.path.add(new q(570.16,0,83.15)),this.path.add(new q(688.55,0,52.71)),this.path.add(new q(757.79,0,153.99)),this.path.add(new q(703.82,0,259.03)),this.path.add(new q(598.96,0,364.93)),this.path.add(new q(627.57,0,493.33)),this.path.add(new q(690.33,0,603.98)),this.path.add(new q(663.54,0,916.86)),this.path.add(new q(697.28,0,1054.03)),this.path.add(new q(761.97,0,1094.38)),this.path.add(new q(909.76,0,1014.44)),this.path.add(new q(1127.03,0,622.34)),this.path.add(new q(1236.38,0,498.92)),this.path.add(new q(1500.58,0,451.51)),this.scene.debugMode){const e=[];for(let s=0;s<this.path._waypoints.length-1;s++){const o=this.path._waypoints[s],a=this.path._waypoints[s+1];e.push(o.x,o.y,o.z),e.push(a.x,a.y,a.z)}const t=new Ii({color:255}),n=new It;n.setAttribute("position",new Yt(e,3));const i=new ps(n,t);this.scene.add(i)}}setGLTFPosition(e,t,n,i){e.position.set(t,n,i)}scaleGLTF(e,t){e.scale.set(t,t,t)}rotateGLTFonYAxis(e,t){e.rotateOnAxis(new L(0,1,0),t)}loadGLTF(e,t){this.loading=!0,new ru().load(t,i=>{this.trackScene=i.scene,this.setGLTFPosition(this.trackScene,this.x,this.y,this.z),this.scaleGLTF(this.trackScene,this.scale),this.rotateGLTFonYAxis(this.trackScene,this.rotationAngle),e.add(i.scene),this.loading=!1},i=>{},i=>{console.log("An error happened",i)})}}class ph{constructor(e,t){this.scene=e,this.player=t,this.camera=new Rt(75,window.innerWidth/window.innerHeight,.1,1e3),this.offsetForward=new L(0,5,-10),this.offsetBackward=new L(0,5,10),this.smoothFactor=5,this.update(),this.targetPosition=new L,this.cameraPosition=new L,this.scene.add(this.camera)}update(e){if(!this.player.loading){const t=this.player.carScene.position.clone(),n=this.player.carScene.rotation.clone(),s=(this.player.movementSpeed<0?this.offsetBackward:this.offsetForward).clone().applyEuler(n);this.targetPosition.copy(t).add(s);const o=Math.min(1,this.smoothFactor*e);this.cameraPosition.lerp(this.targetPosition,o),this.camera.position.copy(this.cameraPosition),this.camera.lookAt(t)}}}class mh extends cu{constructor(t,n,i,s,o){super(t,n);De(this,"initialPosition",L);De(this,"initialRotation",nn);De(this,"acceleration",3);De(this,"maxSpeed",80);De(this,"deceleration",2);De(this,"velocity",0);De(this,"difficulty","normal");this.initialPosition=i,this.track=s,this.difficulty=o,this.velocity=new L(0,0,0),super.loadGLTF(this.modelURL,this.scene,this.scale,this.rotationAngle).then(()=>{super.setupHitbox()}).catch(a=>{console.error("Error loading model:",a)}),this.setDifficulty(this.difficulty),this.initializeAI()}initializeAI(){this.entityManager=new Dx,this.vehicle=new pu,this.entityManager.add(this.vehicle),this.followPathBehavior=new du(this.track.path,15),this.vehicle.steering.add(this.followPathBehavior),this.vehicle.position.copy(this.initialPosition),this.vehicle.maxSpeed=this.maxSpeed,this.vehicle.acceleration=this.acceleration,this.vehicle.deceleration=this.deceleration}update(t){if(!this.loading){this.entityManager.update(t),this.updateCarScene(),this.hitbox&&this.carScene&&(this.boundingBox=new Ut().setFromObject(this.carScene),this.hitbox.position.copy(this.boundingBox.getCenter(new L)),this.hitbox.rotation.copy(this.carScene.rotation)),this.previousPosition=this.carScene.position.clone(),this.carScene.position.add(this.velocity.clone().multiplyScalar(t));const n=this.carScene.position.clone().sub(this.previousPosition);this.velocity=n.divideScalar(t),console.log(this.maxSpeed)}}updateCarScene(){this.carScene.position.copy(this.vehicle.position);const t=this.vehicle.velocity.clone().normalize(),n=Math.atan2(t.x,t.z);this.carScene.rotation.y=n}loadGLTF(t,n,i,s,o){super.loadGLTF(t,n,i,s,a=>{this.carScene=a.scene,this.scaleGLTF(this.carScene,i),o&&this.vehicle.position.copy(o),n.add(this.carScene),this.loading=!1},a=>{},a=>{console.log("An error happened",a)})}setDifficulty(t){t=="hard"?(this.acceleration=3,this.maxSpeed=80,this.deceleration=2):t=="normal"?(this.acceleration=2.5,this.maxSpeed=70,this.deceleration=1.5):(this.acceleration=2,this.maxSpeed=60,this.deceleration=1)}destroy(){this.entityManager.clear(),this.entityManager=null,this.vehicle=null,this.steering=null}}class Sr extends Vi{constructor(t){super();De(this,"width",0);De(this,"height",0);De(this,"TPSCamera",ph);De(this,"renderer",ha);De(this,"orbitals",Pl);De(this,"track",fh);De(this,"player",Fl);De(this,"bot",mh);De(this,"difficulty","normal");De(this,"debugMode",!0);this.difficulty=t,this.debugMode=!0,console.log(this.difficulty),this.background=new Ce(8421504),this.width=window.innerWidth,this.height=window.innerHeight,this.renderer=new ha,this.renderer.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(this.renderer.domElement),this.camera=new Rt(75,window.innerWidth/window.innerHeight,.1,1e5),this.camera.position.set(50,100,50),this.orbitals=new Pl(this.camera,this.renderer.domElement),this.orbitals.update(),this.track=new fh(this,"models/desert_map2.glb"),this.player=new Fl(this,"models/car2.glb"),this.bot=new mh(this,"models/car_blue.glb",new L(12,0,0),this.track,this.difficulty),this.TPSCamera=new ph(this,this.player);const n=new E_(16777215,2);this.add(n)}update(t){this.player.update(t),this.bot.update(t),this.TPSCamera.update(t),this.renderer.render(this,this.TPSCamera.camera)}}let Er="easy",Tr=Sr,gh=performance.now(),$o=0,yr=0;document.addEventListener("DOMContentLoaded",function(){const r=document.getElementById("easyMode"),e=document.getElementById("mediumMode"),t=document.getElementById("hardMode"),n=document.getElementById("options"),i=document.getElementById("car");r.addEventListener("click",function(){console.log("easy"),n.style.display="none",i.style.display="none",Zo("easy"),Tr=new Sr(Er),br()}),e.addEventListener("click",function(){console.log("normal"),n.style.display="none",i.style.display="none",Zo("normal"),Tr=new Sr(Er),br()}),t.addEventListener("click",function(){console.log("hard"),n.style.display="none",i.style.display="none",Zo("hard"),Tr=new Sr(Er),br()})});function Zo(r){Er=r}function br(){requestAnimationFrame(br);const r=performance.now(),e=(r-gh)/1e3;if(gh=r,Tr.update(e),$o++,yr+=e,yr>=1){const s=$o/yr;console.log(`FPS: ${s.toFixed(2)}`),$o=0,yr=0}const t=1e3/60,n=performance.now()-r,i=Math.max(t-n,0);setTimeout(()=>{},i)}
