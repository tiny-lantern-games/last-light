var mf=2;var fu=0,Wm=1,Fi=2,gf=0;var Bi=2;var lr=100,jm=101,Xm=102;var qm=200,Ym=201,Km=202,Jm=203,zc=204,Hc=205,Zm=206,$m=207,Qm=208,eg=209,tg=210,ng=211,ig=212,rg=213,sg=214,ag=0,og=1,lg=2,cg=3,hg=4,ug=5,dg=6,pg=7;var bf=1,vf=2,_f=3,xf=4;var yf=6,Mf=7,Xd="attached",fg="detached",Sf=300,as=301,os=302,Gc=303,Vc=304,hl=306,ri=1e3,cr=1001,oa=1002,Gt=1003,mu=1004;var Qr=1005;var tn=1006,na=1007;var ni=1008;var Li=1009,wf=1010,Tf=1011,la=1012,gu=1013,hr=1014,An=1015,Pn=1016,bu=1017,vu=1018,ls=1020,Ef=35902,Af=1021,Rf=1022,Rn=1023,Cf=1024,Pf=1025,ca=1026,cs=1027,_u=1028,xu=1029,Lf=1030,yu=1031;var Mu=1033,Mo=33776,So=33777,wo=33778,To=33779,Wc=35840,jc=35841,Xc=35842,qc=35843,Yc=36196,Kc=37492,Jc=37496,Zc=37808,$c=37809,Qc=37810,eh=37811,th=37812,nh=37813,ih=37814,rh=37815,sh=37816,ah=37817,oh=37818,lh=37819,ch=37820,hh=37821,Eo=36492,uh=36494,dh=36495,If=36283,ph=36284,fh=36285,mh=36286,Sa=2200;var hs=2300,us=2301,nc=2302,es=2400,ts=2401,Ao=2402,mg=2500,gg=2501,Df=0,ul=1,wa=2;var $r="",_t="srgb",Vt="srgb-linear",dl="linear",Ze="srgb";var Ur=7680;var bg=512,vg=513,_g=514,xg=515,yg=516,Mg=517,Sg=518,wg=519,gh=35044;var qd="300 es",ds=2e3,Ro=2001,si=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let n=this._listeners[e];if(n!==void 0){let i=n.indexOf(t);i!==-1&&n.splice(i,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let n=t.slice(0);for(let i=0,s=n.length;i<s;i++)n[i].call(this,e);e.target=null}}},zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yd=1234567,is=Math.PI/180,ps=180/Math.PI;function dn(){let r=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,n=4294967295*Math.random()|0;return(zt[255&r]+zt[r>>8&255]+zt[r>>16&255]+zt[r>>24&255]+"-"+zt[255&e]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[63&t|128]+zt[t>>8&255]+"-"+zt[t>>16&255]+zt[t>>24&255]+zt[255&n]+zt[n>>8&255]+zt[n>>16&255]+zt[n>>24&255]).toLowerCase()}function Tt(r,e,t){return Math.max(e,Math.min(t,r))}function bh(r,e){return(r%e+e)%e}function ia(r,e,t){return(1-t)*r+t*e}function En(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function $e(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(4294967295*r);case Uint16Array:return Math.round(65535*r);case Uint8Array:return Math.round(255*r);case Int32Array:return Math.round(2147483647*r);case Int16Array:return Math.round(32767*r);case Int8Array:return Math.round(127*r);default:throw new Error("Invalid component type.")}}var Uf={DEG2RAD:is,RAD2DEG:ps,generateUUID:dn,clamp:Tt,euclideanModulo:bh,mapLinear:function(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)},inverseLerp:function(r,e,t){return r!==e?(t-r)/(e-r):0},lerp:ia,damp:function(r,e,t,n){return ia(r,e,1-Math.exp(-t*n))},pingpong:function(r,e=1){return e-Math.abs(bh(r,2*e)-e)},smoothstep:function(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e))*r*(3-2*r)},smootherstep:function(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e))*r*r*(r*(6*r-15)+10)},randInt:function(r,e){return r+Math.floor(Math.random()*(e-r+1))},randFloat:function(r,e){return r+Math.random()*(e-r)},randFloatSpread:function(r){return r*(.5-Math.random())},seededRandom:function(r){r!==void 0&&(Yd=r);let e=Yd+=1831565813;return e=Math.imul(e^e>>>15,1|e),e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296},degToRad:function(r){return r*is},radToDeg:function(r){return r*ps},isPowerOfTwo:function(r){return!(r&r-1)&&r!==0},ceilPowerOfTwo:function(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))},floorPowerOfTwo:function(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))},setQuaternionFromProperEuler:function(r,e,t,n,i){let s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),h=a((e+n)/2),u=s((e-n)/2),d=a((e-n)/2),p=s((n-e)/2),f=a((n-e)/2);switch(i){case"XYX":r.set(o*h,l*u,l*d,o*c);break;case"YZY":r.set(l*d,o*h,l*u,o*c);break;case"ZXZ":r.set(l*u,l*d,o*h,o*c);break;case"XZX":r.set(o*h,l*f,l*p,o*c);break;case"YXY":r.set(l*p,o*h,l*f,o*c);break;case"ZYZ":r.set(l*f,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}},normalize:$e,denormalize:En},Y=class r{constructor(e=0,t=0){r.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ie=class r{constructor(e,t,n,i,s,a,o,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],f=n[8],_=i[0],m=i[3],g=i[6],b=i[1],v=i[4],x=i[7],R=i[2],T=i[5],P=i[8];return s[0]=a*_+o*b+l*R,s[3]=a*m+o*v+l*T,s[6]=a*g+o*x+l*P,s[1]=c*_+h*b+u*R,s[4]=c*m+h*v+u*T,s[7]=c*g+h*x+u*P,s[2]=d*_+p*b+f*R,s[5]=d*m+p*v+f*T,s[8]=d*g+p*x+f*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*s,p=c*s-a*l,f=t*u+n*d+i*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/f;return e[0]=u*_,e[1]=(i*c-h*n)*_,e[2]=(o*n-i*a)*_,e[3]=d*_,e[4]=(h*t-i*l)*_,e[5]=(i*s-o*t)*_,e[6]=p*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ic.makeScale(e,t)),this}rotate(e){return this.premultiply(ic.makeRotation(-e)),this}translate(e,t){return this.premultiply(ic.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ic=new Ie;function Nf(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function ha(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Tg(){let r=ha("canvas");return r.style.display="block",r}var Kd={};function ta(r){r in Kd||(Kd[r]=!0,console.warn(r))}var ke={enabled:!0,workingColorSpace:Vt,spaces:{},convert:function(r,e,t){return this.enabled!==!1&&e!==t&&e&&t&&(this.spaces[e].transfer===Ze&&(r.r=ii(r.r),r.g=ii(r.g),r.b=ii(r.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(r.applyMatrix3(this.spaces[e].toXYZ),r.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Ze&&(r.r=rs(r.r),r.g=rs(r.g),r.b=rs(r.b))),r},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===$r?dl:this.spaces[r].transfer},getLuminanceCoefficients:function(r,e=this.workingColorSpace){return r.fromArray(this.spaces[e].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,e,t){return r.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function ii(r){return r<.04045?.0773993808*r:Math.pow(.9478672986*r+.0521327014,2.4)}function rs(r){return r<.0031308?12.92*r:1.055*Math.pow(r,.41666)-.055}var Jd=[.64,.33,.3,.6,.15,.06],Zd=[.2126,.7152,.0722],$d=[.3127,.329],Qd=new Ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ep=new Ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715),Nr;ke.define({[Vt]:{primaries:Jd,whitePoint:$d,transfer:dl,toXYZ:Qd,fromXYZ:ep,luminanceCoefficients:Zd,workingColorSpaceConfig:{unpackColorSpace:_t},outputColorSpaceConfig:{drawingBufferColorSpace:_t}},[_t]:{primaries:Jd,whitePoint:$d,transfer:Ze,toXYZ:Qd,fromXYZ:ep,luminanceCoefficients:Zd,outputColorSpaceConfig:{drawingBufferColorSpace:_t}}});var vh=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Nr===void 0&&(Nr=ha("canvas")),Nr.width=e.width,Nr.height=e.height;let n=Nr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Nr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ha("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=255*ii(s[a]/255);return n.putImageData(i,0,0),t}if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(255*ii(t[n]/255)):t[n]=ii(t[n]);return{data:t,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Eg=0,Co=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Eg++}),this.uuid=dn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(rc(i[a].image)):s.push(rc(i[a]))}else s=rc(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function rc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?vh.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Ag=0,Ut=class r extends si{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,n=1001,i=1001,s=1006,a=1008,o=1023,l=1009,c=r.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ag++}),this.uuid=dn(),this.name="",this.source=new Co(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Y(0,0),this.repeat=new Y(1,1),this.center=new Y(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Sf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ri:e.x=e.x-Math.floor(e.x);break;case cr:e.x=e.x<0?0:1;break;case oa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case ri:e.y=e.y-Math.floor(e.y);break;case cr:e.y=e.y<0?0:1;break;case oa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ut.DEFAULT_IMAGE=null,Ut.DEFAULT_MAPPING=Sf,Ut.DEFAULT_ANISOTROPY=1;var Je=class r{constructor(e=0,t=0,n=0,i=1){r.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],f=l[9],_=l[2],m=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(f-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(f+m)<.1&&Math.abs(c+p+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,x=(p+1)/2,R=(g+1)/2,T=(h+d)/4,P=(u+_)/4,D=(f+m)/4;return v>x&&v>R?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=T/n,s=P/n):x>R?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=T/i,s=D/i):R<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(R),n=P/s,i=D/s),this.set(n,i,s,t),this}let b=Math.sqrt((m-f)*(m-f)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(m-f)/b,this.y=(u-_)/b,this.z=(d-h)/b,this.w=Math.acos((c+p+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},_h=class extends si{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Je(0,0,e,t),this.scissorTest=!1,this.viewport=new Je(0,0,e,t);let i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let s=new Ut(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Co(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Yt=class extends _h{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Po=class extends Ut{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var xh=class extends Ut{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ft=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=s[a+0],p=s[a+1],f=s[a+2],_=s[a+3];if(o===0)return e[t+0]=l,e[t+1]=c,e[t+2]=h,void(e[t+3]=u);if(o===1)return e[t+0]=d,e[t+1]=p,e[t+2]=f,void(e[t+3]=_);if(u!==_||l!==d||c!==p||h!==f){let m=1-o,g=l*d+c*p+h*f+u*_,b=g>=0?1:-1,v=1-g*g;if(v>Number.EPSILON){let R=Math.sqrt(v),T=Math.atan2(R,g*b);m=Math.sin(m*T)/R,o=Math.sin(o*T)/R}let x=o*b;if(l=l*m+d*x,c=c*m+p*x,h=h*m+f*x,u=u*m+_*x,m===1-o){let R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[a],d=s[a+1],p=s[a+2],f=s[a+3];return e[t]=o*f+h*u+l*p-c*d,e[t+1]=l*f+h*d+c*u-o*p,e[t+2]=c*f+h*p+o*d-l*u,e[t+3]=h*f-o*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(s/2),d=l(n/2),p=l(i/2),f=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u-d*p*f;break;case"YXZ":this._x=d*h*u+c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u+d*p*f;break;case"ZXY":this._x=d*h*u-c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u-d*p*f;break;case"ZYX":this._x=d*h*u-c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u+d*p*f;break;case"YZX":this._x=d*h*u+c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u-d*p*f;break;case"XZY":this._x=d*h*u-c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u+d*p*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(a-i)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(s+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(s-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-i)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,s=this._z,a=this._w,o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},M=class r{constructor(e=0,t=0,n=0){r.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(tp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(tp.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-s*i),u=2*(s*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-s*u,this.z=i+l*u+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return sc.copy(this).projectOnVector(e),this.sub(sc)}reflect(e){return this.sub(sc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=2*Math.random()-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},sc=new M,tp=new Ft,Zt=class{constructor(e=new M(1/0,1/0,1/0),t=new M(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Mn):Mn.fromBufferAttribute(s,a),Mn.applyMatrix4(e.matrixWorld),this.expandByPoint(Mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ba.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ba.copy(n.boundingBox)),Ba.applyMatrix4(e.matrixWorld),this.union(Ba)}let i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mn),Mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gs),za.subVectors(this.max,Gs),Or.subVectors(e.a,Gs),kr.subVectors(e.b,Gs),Fr.subVectors(e.c,Gs),yi.subVectors(kr,Or),Mi.subVectors(Fr,kr),tr.subVectors(Or,Fr);let t=[0,-yi.z,yi.y,0,-Mi.z,Mi.y,0,-tr.z,tr.y,yi.z,0,-yi.x,Mi.z,0,-Mi.x,tr.z,0,-tr.x,-yi.y,yi.x,0,-Mi.y,Mi.x,0,-tr.y,tr.x,0];return!!ac(t,Or,kr,Fr,za)&&(t=[1,0,0,0,1,0,0,0,1],!!ac(t,Or,kr,Fr,za)&&(Ha.crossVectors(yi,Mi),t=[Ha.x,Ha.y,Ha.z],ac(t,Or,kr,Fr,za)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(Mn).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Kn)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Kn=[new M,new M,new M,new M,new M,new M,new M,new M],Mn=new M,Ba=new Zt,Or=new M,kr=new M,Fr=new M,yi=new M,Mi=new M,tr=new M,Gs=new M,za=new M,Ha=new M,nr=new M;function ac(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){nr.fromArray(r,s);let o=i.x*Math.abs(nr.x)+i.y*Math.abs(nr.y)+i.z*Math.abs(nr.z),l=e.dot(nr),c=t.dot(nr),h=n.dot(nr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Rg=new Zt,Vs=new M,oc=new M,$t=class{constructor(e=new M,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Rg.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vs.subVectors(e,this.center);let t=Vs.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=.5*(n-this.radius);this.center.addScaledVector(Vs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(oc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vs.copy(e.center).add(oc)),this.expandByPoint(Vs.copy(e.center).sub(oc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Jn=new M,lc=new M,Ga=new M,Si=new M,cc=new M,Va=new M,hc=new M,ur=class{constructor(e=new M,t=new M(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Jn.copy(this.origin).addScaledVector(this.direction,t),Jn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){lc.copy(e).add(t).multiplyScalar(.5),Ga.copy(t).sub(e).normalize(),Si.copy(this.origin).sub(lc);let s=.5*e.distanceTo(t),a=-this.direction.dot(Ga),o=Si.dot(this.direction),l=-Si.dot(Ga),c=Si.lengthSq(),h=Math.abs(1-a*a),u,d,p,f;if(h>0)if(u=a*l-o,d=a*o-l,f=s*h,u>=0)if(d>=-f)if(d<=f){let _=1/h;u*=_,d*=_,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-f?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c):d<=f?(u=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(lc).addScaledVector(Ga,d),p}intersectSphere(e,t){Jn.subVectors(e.center,this.origin);let n=Jn.dot(this.direction),i=Jn.dot(Jn)-n*n,s=e.radius*e.radius;if(i>s)return null;let a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||s>i?null:((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>i?null:((o>n||n!=n)&&(n=o),(l<i||i!=i)&&(i=l),i<0?null:this.at(n>=0?n:i,t)))}intersectsBox(e){return this.intersectBox(e,Jn)!==null}intersectTriangle(e,t,n,i,s){cc.subVectors(t,e),Va.subVectors(n,e),hc.crossVectors(cc,Va);let a,o=this.direction.dot(hc);if(o>0){if(i)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}Si.subVectors(this.origin,e);let l=a*this.direction.dot(Va.crossVectors(Si,Va));if(l<0)return null;let c=a*this.direction.dot(cc.cross(Si));if(c<0||l+c>o)return null;let h=-a*Si.dot(hc);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Te=class r{constructor(e,t,n,i,s,a,o,l,c,h,u,d,p,f,_,m){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,h,u,d,p,f,_,m)}set(e,t,n,i,s,a,o,l,c,h,u,d,p,f,_,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=s,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=p,g[7]=f,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/Br.setFromMatrixColumn(e,0).length(),s=1/Br.setFromMatrixColumn(e,1).length(),a=1/Br.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=a*h,p=a*u,f=o*h,_=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+f*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=f+p*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,p=l*u,f=c*h,_=c*u;t[0]=d+_*o,t[4]=f*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-f,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,p=l*u,f=c*h,_=c*u;t[0]=d-_*o,t[4]=-a*u,t[8]=f+p*o,t[1]=p+f*o,t[5]=a*h,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,p=a*u,f=o*h,_=o*u;t[0]=l*h,t[4]=f*c-p,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=p*c-f,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,p=a*c,f=o*l,_=o*c;t[0]=l*h,t[4]=_-d*u,t[8]=f*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+f,t[10]=d-_*u}else if(e.order==="XZY"){let d=a*l,p=a*c,f=o*l,_=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=a*h,t[9]=p*u-f,t[2]=f*u-p,t[6]=o*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Cg,e,Pg)}lookAt(e,t,n){let i=this.elements;return Qt.subVectors(e,t),Qt.lengthSq()===0&&(Qt.z=1),Qt.normalize(),wi.crossVectors(n,Qt),wi.lengthSq()===0&&(Math.abs(n.z)===1?Qt.x+=1e-4:Qt.z+=1e-4,Qt.normalize(),wi.crossVectors(n,Qt)),wi.normalize(),Wa.crossVectors(Qt,wi),i[0]=wi.x,i[4]=Wa.x,i[8]=Qt.x,i[1]=wi.y,i[5]=Wa.y,i[9]=Qt.y,i[2]=wi.z,i[6]=Wa.z,i[10]=Qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],f=n[2],_=n[6],m=n[10],g=n[14],b=n[3],v=n[7],x=n[11],R=n[15],T=i[0],P=i[4],D=i[8],N=i[12],z=i[1],V=i[5],H=i[9],q=i[13],W=i[2],J=i[6],$=i[10],ae=i[14],re=i[3],_e=i[7],we=i[11],ie=i[15];return s[0]=a*T+o*z+l*W+c*re,s[4]=a*P+o*V+l*J+c*_e,s[8]=a*D+o*H+l*$+c*we,s[12]=a*N+o*q+l*ae+c*ie,s[1]=h*T+u*z+d*W+p*re,s[5]=h*P+u*V+d*J+p*_e,s[9]=h*D+u*H+d*$+p*we,s[13]=h*N+u*q+d*ae+p*ie,s[2]=f*T+_*z+m*W+g*re,s[6]=f*P+_*V+m*J+g*_e,s[10]=f*D+_*H+m*$+g*we,s[14]=f*N+_*q+m*ae+g*ie,s[3]=b*T+v*z+x*W+R*re,s[7]=b*P+v*V+x*J+R*_e,s[11]=b*D+v*H+x*$+R*we,s[15]=b*N+v*q+x*ae+R*ie,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14];return e[3]*(+s*l*u-i*c*u-s*o*d+n*c*d+i*o*p-n*l*p)+e[7]*(+t*l*p-t*c*d+s*a*d-i*a*p+i*c*h-s*l*h)+e[11]*(+t*c*u-t*o*p-s*a*u+n*a*p+s*o*h-n*c*h)+e[15]*(-i*o*h-t*l*u+t*o*d+i*a*u-n*a*d+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],f=e[12],_=e[13],m=e[14],g=e[15],b=u*m*c-_*d*c+_*l*p-o*m*p-u*l*g+o*d*g,v=f*d*c-h*m*c-f*l*p+a*m*p+h*l*g-a*d*g,x=h*_*c-f*u*c+f*o*p-a*_*p-h*o*g+a*u*g,R=f*u*l-h*_*l-f*o*d+a*_*d+h*o*m-a*u*m,T=t*b+n*v+i*x+s*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/T;return e[0]=b*P,e[1]=(_*d*s-u*m*s-_*i*p+n*m*p+u*i*g-n*d*g)*P,e[2]=(o*m*s-_*l*s+_*i*c-n*m*c-o*i*g+n*l*g)*P,e[3]=(u*l*s-o*d*s-u*i*c+n*d*c+o*i*p-n*l*p)*P,e[4]=v*P,e[5]=(h*m*s-f*d*s+f*i*p-t*m*p-h*i*g+t*d*g)*P,e[6]=(f*l*s-a*m*s-f*i*c+t*m*c+a*i*g-t*l*g)*P,e[7]=(a*d*s-h*l*s+h*i*c-t*d*c-a*i*p+t*l*p)*P,e[8]=x*P,e[9]=(f*u*s-h*_*s-f*n*p+t*_*p+h*n*g-t*u*g)*P,e[10]=(a*_*s-f*o*s+f*n*c-t*_*c-a*n*g+t*o*g)*P,e[11]=(h*o*s-a*u*s-h*n*c+t*u*c+a*n*p-t*o*p)*P,e[12]=R*P,e[13]=(h*_*i-f*u*i+f*n*d-t*_*d-h*n*m+t*u*m)*P,e[14]=(f*o*i-a*_*i-f*n*l+t*_*l+a*n*m-t*o*m)*P,e[15]=(a*u*i-h*o*i+h*n*l-t*u*l-a*n*d+t*o*d)*P,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,d=s*c,p=s*h,f=s*u,_=a*h,m=a*u,g=o*u,b=l*c,v=l*h,x=l*u,R=n.x,T=n.y,P=n.z;return i[0]=(1-(_+g))*R,i[1]=(p+x)*R,i[2]=(f-v)*R,i[3]=0,i[4]=(p-x)*T,i[5]=(1-(d+g))*T,i[6]=(m+b)*T,i[7]=0,i[8]=(f+v)*P,i[9]=(m-b)*P,i[10]=(1-(d+_))*P,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,s=Br.set(i[0],i[1],i[2]).length(),a=Br.set(i[4],i[5],i[6]).length(),o=Br.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Sn.copy(this);let l=1/s,c=1/a,h=1/o;return Sn.elements[0]*=l,Sn.elements[1]*=l,Sn.elements[2]*=l,Sn.elements[4]*=c,Sn.elements[5]*=c,Sn.elements[6]*=c,Sn.elements[8]*=h,Sn.elements[9]*=h,Sn.elements[10]*=h,t.setFromRotationMatrix(Sn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=2e3){let l=this.elements,c=2*s/(t-e),h=2*s/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i),p,f;if(o===ds)p=-(a+s)/(a-s),f=-2*a*s/(a-s);else{if(o!==Ro)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);p=-a/(a-s),f=-a*s/(a-s)}return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=f,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=2e3){let l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(a-s),d=(t+e)*c,p=(n+i)*h,f,_;if(o===ds)f=(a+s)*u,_=-2*u;else{if(o!==Ro)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);f=s*u,_=-1*u}return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-f,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Br=new M,Sn=new Te,Cg=new M(0,0,0),Pg=new M(1,1,1),wi=new M,Wa=new M,Qt=new M,np=new Te,ip=new Ft,Cn=class r{constructor(e=0,t=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Tt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Tt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return np.makeRotationFromQuaternion(e),this.setFromRotationMatrix(np,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ip.setFromEuler(this),this.setFromQuaternion(ip,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Cn.DEFAULT_ORDER="XYZ";var ua=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return!!(this.mask&e.mask)}isEnabled(e){return!!(this.mask&1<<e)}},Lg=0,rp=new M,zr=new Ft,Zn=new Te,ja=new M,Ws=new M,Ig=new M,Dg=new Ft,sp=new M(1,0,0),ap=new M(0,1,0),op=new M(0,0,1),lp={type:"added"},Ug={type:"removed"},Hr={type:"childadded",child:null},uc={type:"childremoved",child:null},ct=class r extends si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lg++}),this.uuid=dn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new M,t=new Cn,n=new Ft,i=new M(1,1,1);t._onChange((function(){n.setFromEuler(t,!1)})),n._onChange((function(){t.setFromQuaternion(n,void 0,!1)})),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Te},normalMatrix:{value:new Ie}}),this.matrix=new Te,this.matrixWorld=new Te,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ua,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zr.setFromAxisAngle(e,t),this.quaternion.multiply(zr),this}rotateOnWorldAxis(e,t){return zr.setFromAxisAngle(e,t),this.quaternion.premultiply(zr),this}rotateX(e){return this.rotateOnAxis(sp,e)}rotateY(e){return this.rotateOnAxis(ap,e)}rotateZ(e){return this.rotateOnAxis(op,e)}translateOnAxis(e,t){return rp.copy(e).applyQuaternion(this.quaternion),this.position.add(rp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(sp,e)}translateY(e){return this.translateOnAxis(ap,e)}translateZ(e){return this.translateOnAxis(op,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ja.copy(e):ja.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt(Ws,ja,this.up):Zn.lookAt(ja,Ws,this.up),this.quaternion.setFromRotationMatrix(Zn),i&&(Zn.extractRotation(i.matrixWorld),zr.setFromRotationMatrix(Zn),this.quaternion.premultiply(zr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(lp),Hr.child=e,this.dispatchEvent(Hr),Hr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ug),uc.child=e,this.dispatchEvent(uc),uc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(lp),Hr.child=e,this.dispatchEvent(Hr),Hr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,e,Ig),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,Dg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map((o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()}))),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()})),this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),f=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),f.length>0&&(n.nodes=f)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};ct.DEFAULT_UP=new M(0,1,0),ct.DEFAULT_MATRIX_AUTO_UPDATE=!0,ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var wn=new M,$n=new M,dc=new M,Qn=new M,Gr=new M,Vr=new M,cp=new M,pc=new M,fc=new M,mc=new M,gc=new Je,bc=new Je,vc=new Je,ti=class r{constructor(e=new M,t=new M,n=new M){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),wn.subVectors(e,t),i.cross(wn);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){wn.subVectors(i,t),$n.subVectors(n,t),dc.subVectors(e,t);let a=wn.dot(wn),o=wn.dot($n),l=wn.dot(dc),c=$n.dot($n),h=$n.dot(dc),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,p=(c*l-o*h)*d,f=(a*h-o*l)*d;return s.set(1-p-f,f,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Qn)!==null&&Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Qn.x),l.addScaledVector(a,Qn.y),l.addScaledVector(o,Qn.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return gc.setScalar(0),bc.setScalar(0),vc.setScalar(0),gc.fromBufferAttribute(e,t),bc.fromBufferAttribute(e,n),vc.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(gc,s.x),a.addScaledVector(bc,s.y),a.addScaledVector(vc,s.z),a}static isFrontFacing(e,t,n,i){return wn.subVectors(n,t),$n.subVectors(e,t),wn.cross($n).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wn.subVectors(this.c,this.b),$n.subVectors(this.a,this.b),.5*wn.cross($n).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,a,o;Gr.subVectors(i,n),Vr.subVectors(s,n),pc.subVectors(e,n);let l=Gr.dot(pc),c=Vr.dot(pc);if(l<=0&&c<=0)return t.copy(n);fc.subVectors(e,i);let h=Gr.dot(fc),u=Vr.dot(fc);if(h>=0&&u<=h)return t.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Gr,a);mc.subVectors(e,s);let p=Gr.dot(mc),f=Vr.dot(mc);if(f>=0&&p<=f)return t.copy(s);let _=p*c-l*f;if(_<=0&&c>=0&&f<=0)return o=c/(c-f),t.copy(n).addScaledVector(Vr,o);let m=h*f-p*u;if(m<=0&&u-h>=0&&p-f>=0)return cp.subVectors(s,i),o=(u-h)/(u-h+(p-f)),t.copy(i).addScaledVector(cp,o);let g=1/(m+_+d);return a=_*g,o=d*g,t.copy(n).addScaledVector(Gr,a).addScaledVector(Vr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Of={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ti={h:0,s:0,l:0},Xa={h:0,s:0,l:0};function _c(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+6*(e-r)*t:t<.5?e:t<2/3?r+6*(e-r)*(2/3-t):r}var he=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,ke.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,ke.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=ke.workingColorSpace){if(e=bh(e,1),t=Tt(t,0,1),n=Tt(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=_c(a,s,e+1/3),this.g=_c(a,s,e),this.b=_c(a,s,e-1/3)}return ke.toWorkingColorSpace(this,i),this}setStyle(e,t=_t){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_t){let n=Of[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ii(e.r),this.g=ii(e.g),this.b=ii(e.b),this}copyLinearToSRGB(e){return this.r=rs(e.r),this.g=rs(e.g),this.b=rs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_t){return ke.fromWorkingColorSpace(Ht.copy(this),e),65536*Math.round(Tt(255*Ht.r,0,255))+256*Math.round(Tt(255*Ht.g,0,255))+Math.round(Tt(255*Ht.b,0,255))}getHexString(e=_t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ke.workingColorSpace){ke.fromWorkingColorSpace(Ht.copy(this),t);let n=Ht.r,i=Ht.g,s=Ht.b,a=Math.max(n,i,s),o=Math.min(n,i,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ke.workingColorSpace){return ke.fromWorkingColorSpace(Ht.copy(this),t),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=_t){ke.fromWorkingColorSpace(Ht.copy(this),e);let t=Ht.r,n=Ht.g,i=Ht.b;return e!==_t?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*n)},${Math.round(255*i)})`}offsetHSL(e,t,n){return this.getHSL(Ti),this.setHSL(Ti.h+e,Ti.s+t,Ti.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ti),e.getHSL(Xa);let n=ia(Ti.h,Xa.h,t),i=ia(Ti.s,Xa.s,t),s=ia(Ti.l,Xa.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ht=new he;he.NAMES=Of;var Ng=0,Kt=class extends si{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ng++}),this.uuid=dn(),this.name="",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zc,this.blendDst=Hc,this.blendEquation=lr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new he(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ur,this.stencilZFail=Ur,this.stencilZPass=Ur,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];i!==void 0?i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n:console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};function i(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==zc&&(n.blendSrc=this.blendSrc),this.blendDst!==Hc&&(n.blendDst=this.blendDst),this.blendEquation!==lr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ur&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ur&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ur&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData),t){let s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},ht=class extends Kt{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new he(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Lv=Og();function Og(){let r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[256|l]=32768,i[l]=24,i[256|l]=24):c<-14?(n[l]=1024>>-c-14,n[256|l]=1024>>-c-14|32768,i[l]=-c-1,i[256|l]=-c-1):c<=15?(n[l]=c+15<<10,n[256|l]=c+15<<10|32768,i[l]=13,i[256|l]=13):c<128?(n[l]=31744,n[256|l]=64512,i[l]=24,i[256|l]=24):(n[l]=31744,n[256|l]=64512,i[l]=13,i[256|l]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(8388608&c);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:a,offsetTable:o}}var yt=new M,qa=new Y,At=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=gh,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)qa.fromBufferAttribute(this,t),qa.applyMatrix3(e),this.setXY(t,qa.x,qa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix3(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=En(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=$e(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=En(t,this.array)),t}setX(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=En(t,this.array)),t}setY(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=En(t,this.array)),t}setZ(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=En(t,this.array)),t}setW(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=$e(t,this.array),n=$e(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=$e(t,this.array),n=$e(n,this.array),i=$e(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=$e(t,this.array),n=$e(n,this.array),i=$e(i,this.array),s=$e(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gh&&(e.usage=this.usage),e}};var Lo=class extends At{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Io=class extends At{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ae=class extends At{constructor(e,t,n){super(new Float32Array(e),t,n)}},kg=0,un=new Te,xc=new ct,Wr=new M,en=new Zt,js=new Zt,Dt=new M,Qe=class r extends si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kg++}),this.uuid=dn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Nf(e)?Io:Lo)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Ie().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return un.makeRotationFromQuaternion(e),this.applyMatrix4(un),this}rotateX(e){return un.makeRotationX(e),this.applyMatrix4(un),this}rotateY(e){return un.makeRotationY(e),this.applyMatrix4(un),this}rotateZ(e){return un.makeRotationZ(e),this.applyMatrix4(un),this}translate(e,t,n){return un.makeTranslation(e,t,n),this.applyMatrix4(un),this}scale(e,t,n){return un.makeScale(e,t,n),this.applyMatrix4(un),this}lookAt(e){return xc.lookAt(e),xc.updateMatrix(),this.applyMatrix4(xc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wr).negate(),this.translate(Wr.x,Wr.y,Wr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,s=e.length;i<s;i++){let a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ae(n,3))}else{for(let n=0,i=t.count;n<i;n++){let s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),void this.boundingBox.set(new M(-1/0,-1/0,-1/0),new M(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];en.setFromBufferAttribute(s),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $t);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),void this.boundingSphere.set(new M,1/0);if(e){let n=this.boundingSphere.center;if(en.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];js.setFromBufferAttribute(o),this.morphTargetsRelative?(Dt.addVectors(en.min,js.min),en.expandByPoint(Dt),Dt.addVectors(en.max,js.max),en.expandByPoint(Dt)):(en.expandByPoint(js.min),en.expandByPoint(js.max))}en.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Dt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Dt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Dt.fromBufferAttribute(o,c),l&&(Wr.fromBufferAttribute(e,c),Dt.add(Wr)),i=Math.max(i,n.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new At(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<n.count;D++)o[D]=new M,l[D]=new M;let c=new M,h=new M,u=new M,d=new Y,p=new Y,f=new Y,_=new M,m=new M;function g(D,N,z){c.fromBufferAttribute(n,D),h.fromBufferAttribute(n,N),u.fromBufferAttribute(n,z),d.fromBufferAttribute(s,D),p.fromBufferAttribute(s,N),f.fromBufferAttribute(s,z),h.sub(c),u.sub(c),p.sub(d),f.sub(d);let V=1/(p.x*f.y-f.x*p.y);isFinite(V)&&(_.copy(h).multiplyScalar(f.y).addScaledVector(u,-p.y).multiplyScalar(V),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-f.x).multiplyScalar(V),o[D].add(_),o[N].add(_),o[z].add(_),l[D].add(m),l[N].add(m),l[z].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let D=0,N=b.length;D<N;++D){let z=b[D],V=z.start;for(let H=V,q=V+z.count;H<q;H+=3)g(e.getX(H+0),e.getX(H+1),e.getX(H+2))}let v=new M,x=new M,R=new M,T=new M;function P(D){R.fromBufferAttribute(i,D),T.copy(R);let N=o[D];v.copy(N),v.sub(R.multiplyScalar(R.dot(N))).normalize(),x.crossVectors(T,N);let z=x.dot(l[D])<0?-1:1;a.setXYZW(D,v.x,v.y,v.z,z)}for(let D=0,N=b.length;D<N;++D){let z=b[D],V=z.start;for(let H=V,q=V+z.count;H<q;H+=3)P(e.getX(H+0)),P(e.getX(H+1)),P(e.getX(H+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new At(new Float32Array(3*t.count),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let i=new M,s=new M,a=new M,o=new M,l=new M,c=new M,h=new M,u=new M;if(e)for(let d=0,p=e.count;d<p;d+=3){let f=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,f),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,f),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),p=0,f=0;for(let _=0,m=l.length;_<m;_++){p=o.isInterleavedBufferAttribute?l[_]*o.data.stride+o.offset:l[_]*h;for(let g=0;g<h;g++)d[f++]=c[p++]}return new At(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,n=this.index.array,i=this.attributes;for(let o in i){let l=e(i[o],n);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){let d=e(c[h],n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],u=s[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},hp=new Te,ir=new ur,Ya=new $t,up=new M,Ka=new M,Ja=new M,Za=new M,yc=new M,$a=new M,dp=new M,Qa=new M,qe=class extends ct{constructor(e=new Qe,t=new ht){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=n.length;i<s;i++){let a=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=i}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(s&&o){$a.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],u=s[l];h!==0&&(yc.fromBufferAttribute(u,e),a?$a.addScaledVector(yc,h):$a.addScaledVector(yc.sub(t),h))}t.add($a)}return t}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;if(i!==void 0){if(n.boundingSphere===null&&n.computeBoundingSphere(),Ya.copy(n.boundingSphere),Ya.applyMatrix4(s),ir.copy(e.ray).recast(e.near),Ya.containsPoint(ir.origin)===!1&&(ir.intersectSphere(Ya,up)===null||ir.origin.distanceToSquared(up)>(e.far-e.near)**2))return;hp.copy(s).invert(),ir.copy(e.ray).applyMatrix4(hp),n.boundingBox!==null&&ir.intersectsBox(n.boundingBox)===!1||this._computeIntersections(e,t,ir)}}_computeIntersections(e,t,n){let i,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let f=0,_=d.length;f<_;f++){let m=d[f],g=a[m.materialIndex];for(let b=Math.max(m.start,p.start),v=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));b<v;b+=3)i=eo(this,g,e,n,c,h,u,o.getX(b),o.getX(b+1),o.getX(b+2)),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=m.materialIndex,t.push(i))}else for(let f=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);f<_;f+=3)i=eo(this,a,e,n,c,h,u,o.getX(f),o.getX(f+1),o.getX(f+2)),i&&(i.faceIndex=Math.floor(f/3),t.push(i));else if(l!==void 0)if(Array.isArray(a))for(let f=0,_=d.length;f<_;f++){let m=d[f],g=a[m.materialIndex];for(let b=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));b<v;b+=3)i=eo(this,g,e,n,c,h,u,b,b+1,b+2),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=m.materialIndex,t.push(i))}else for(let f=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);f<_;f+=3)i=eo(this,a,e,n,c,h,u,f,f+1,f+2),i&&(i.faceIndex=Math.floor(f/3),t.push(i))}};function eo(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,Ka),r.getVertexPosition(l,Ja),r.getVertexPosition(c,Za);let h=(function(u,d,p,f,_,m,g,b){let v;if(v=d.side===1?f.intersectTriangle(g,m,_,!0,b):f.intersectTriangle(_,m,g,d.side===0,b),v===null)return null;Qa.copy(b),Qa.applyMatrix4(u.matrixWorld);let x=p.ray.origin.distanceTo(Qa);return x<p.near||x>p.far?null:{distance:x,point:Qa.clone(),object:u}})(r,e,t,n,Ka,Ja,Za,dp);if(h){let u=new M;ti.getBarycoord(dp,Ka,Ja,Za,u),i&&(h.uv=ti.getInterpolatedAttribute(i,o,l,c,u,new Y)),s&&(h.uv1=ti.getInterpolatedAttribute(s,o,l,c,u,new Y)),a&&(h.normal=ti.getInterpolatedAttribute(a,o,l,c,u,new M),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new M,materialIndex:0};ti.getNormal(Ka,Ja,Za,d.normal),h.face=d,h.barycoord=u}return h}var Ii=class r extends Qe{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};let o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,p=0;function f(_,m,g,b,v,x,R,T,P,D,N){let z=x/P,V=R/D,H=x/2,q=R/2,W=T/2,J=P+1,$=D+1,ae=0,re=0,_e=new M;for(let we=0;we<$;we++){let ie=we*V-q;for(let ce=0;ce<J;ce++){let ge=ce*z-H;_e[_]=ge*b,_e[m]=ie*v,_e[g]=W,c.push(_e.x,_e.y,_e.z),_e[_]=0,_e[m]=0,_e[g]=T>0?1:-1,h.push(_e.x,_e.y,_e.z),u.push(ce/P),u.push(1-we/D),ae+=1}}for(let we=0;we<D;we++)for(let ie=0;ie<P;ie++){let ce=d+ie+J*we,ge=d+ie+J*(we+1),be=d+(ie+1)+J*(we+1),de=d+(ie+1)+J*we;l.push(ce,ge,de),l.push(ge,be,de),re+=6}o.addGroup(p,re,N),p+=re,d+=ae}f("z","y","x",-1,-1,n,t,e,a,s,0),f("z","y","x",1,-1,n,t,-e,a,s,1),f("x","z","y",1,1,e,n,t,i,a,2),f("x","z","y",1,-1,e,n,-t,i,a,3),f("x","y","z",1,-1,e,t,n,i,s,4),f("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Ae(c,3)),this.setAttribute("normal",new Ae(h,3)),this.setAttribute("uv",new Ae(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function fs(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function qt(r){let e={};for(let t=0;t<r.length;t++){let n=fs(r[t]);for(let i in n)e[i]=n[i]}return e}function kf(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ke.workingColorSpace}var zi={clone:fs,merge:qt},Rt=class extends Kt{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fs(e.uniforms),this.uniformsGroups=(function(t){let n=[];for(let i=0;i<t.length;i++)n.push(t[i].clone());return n})(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},da=class extends ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Te,this.projectionMatrix=new Te,this.projectionMatrixInverse=new Te,this.coordinateSystem=ds}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ei=new M,pp=new Y,fp=new Y,Et=class extends da{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*ps*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*is*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*ps*Math.atan(Math.tan(.5*is*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ei.x,Ei.y).multiplyScalar(-e/Ei.z),Ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ei.x,Ei.y).multiplyScalar(-e/Ei.z)}getViewSize(e,t){return this.getViewBounds(e,pp,fp),t.subVectors(fp,pp)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*is*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},jr=-90,yh=class extends ct{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Et(jr,1,e,t);i.layers=this.layers,this.add(i);let s=new Et(jr,1,e,t);s.layers=this.layers,this.add(s);let a=new Et(jr,1,e,t);a.layers=this.layers,this.add(a);let o=new Et(jr,1,e,t);o.layers=this.layers,this.add(o);let l=new Et(jr,1,e,t);l.layers=this.layers,this.add(l);let c=new Et(jr,1,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===ds)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else{if(e!==Ro)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1)}for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}},Do=class extends Ut{constructor(e,t,n,i,s,a,o,l,c,h){super(e=e!==void 0?e:[],t=t!==void 0?t:as,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Mh=class extends Yt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Do(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:tn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ii(5,5,5),s=new Rt({name:"CubemapFromEquirect",uniforms:fs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});s.uniforms.tEquirect.value=t;let a=new qe(i,s),o=t.minFilter;return t.minFilter===ni&&(t.minFilter=tn),new yh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}},Mc=new M,Fg=new M,Bg=new Ie,Tn=class{constructor(e=new M(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Mc.subVectors(n,t).cross(Fg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Mc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Bg.getNormalMatrix(e),i=this.coplanarPoint(Mc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},rr=new $t,to=new M,ms=class{constructor(e=new Tn,t=new Tn,n=new Tn,i=new Tn,s=new Tn,a=new Tn){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3){let n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],p=i[8],f=i[9],_=i[10],m=i[11],g=i[12],b=i[13],v=i[14],x=i[15];if(n[0].setComponents(l-s,d-c,m-p,x-g).normalize(),n[1].setComponents(l+s,d+c,m+p,x+g).normalize(),n[2].setComponents(l+a,d+h,m+f,x+b).normalize(),n[3].setComponents(l-a,d-h,m-f,x-b).normalize(),n[4].setComponents(l-o,d-u,m-_,x-v).normalize(),t===ds)n[5].setComponents(l+o,d+u,m+_,x+v).normalize();else{if(t!==Ro)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);n[5].setComponents(o,u,_,v).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),rr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rr)}intersectsSprite(e){return rr.center.set(0,0,0),rr.radius=.7071067811865476,rr.applyMatrix4(e.matrixWorld),this.intersectsSphere(rr)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(to.x=i.normal.x>0?e.max.x:e.min.x,to.y=i.normal.y>0?e.max.y:e.min.y,to.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(to)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Ff(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function zg(r){let e=new WeakMap;return{get:function(t){return t.isInterleavedBufferAttribute&&(t=t.data),e.get(t)},remove:function(t){t.isInterleavedBufferAttribute&&(t=t.data);let n=e.get(t);n&&(r.deleteBuffer(n.buffer),e.delete(t))},update:function(t,n){if(t.isInterleavedBufferAttribute&&(t=t.data),t.isGLBufferAttribute){let s=e.get(t);return void((!s||s.version<t.version)&&e.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version}))}let i=e.get(t);if(i===void 0)e.set(t,(function(s,a){let o=s.array,l=s.usage,c=o.byteLength,h=r.createBuffer(),u;if(r.bindBuffer(a,h),r.bufferData(a,o,l),s.onUploadCallback(),o instanceof Float32Array)u=r.FLOAT;else if(o instanceof Uint16Array)u=s.isFloat16BufferAttribute?r.HALF_FLOAT:r.UNSIGNED_SHORT;else if(o instanceof Int16Array)u=r.SHORT;else if(o instanceof Uint32Array)u=r.UNSIGNED_INT;else if(o instanceof Int32Array)u=r.INT;else if(o instanceof Int8Array)u=r.BYTE;else if(o instanceof Uint8Array)u=r.UNSIGNED_BYTE;else{if(!(o instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);u=r.UNSIGNED_BYTE}return{buffer:h,type:u,bytesPerElement:o.BYTES_PER_ELEMENT,version:s.version,size:c}})(t,n));else if(i.version<t.version){if(i.size!==t.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(s,a,o){let l=a.array,c=a.updateRanges;if(r.bindBuffer(o,s),c.length===0)r.bufferSubData(o,0,l);else{c.sort(((u,d)=>u.start-d.start));let h=0;for(let u=1;u<c.length;u++){let d=c[h],p=c[u];p.start<=d.start+d.count+1?d.count=Math.max(d.count,p.start+p.count-d.start):(++h,c[h]=p)}c.length=h+1;for(let u=0,d=c.length;u<d;u++){let p=c[u];r.bufferSubData(o,p.start*l.BYTES_PER_ELEMENT,l,p.start,p.count)}a.clearUpdateRanges()}a.onUploadCallback()})(i.buffer,t,n),i.version=t.version}}}}var dr=class r extends Qe{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,d=t/l,p=[],f=[],_=[],m=[];for(let g=0;g<h;g++){let b=g*d-a;for(let v=0;v<c;v++){let x=v*u-s;f.push(x,-b,0),_.push(0,0,1),m.push(v/o),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let b=0;b<o;b++){let v=b+c*g,x=b+c*(g+1),R=b+1+c*(g+1),T=b+1+c*g;p.push(v,x,T),p.push(x,R,T)}this.setIndex(p),this.setAttribute("position",new Ae(f,3)),this.setAttribute("normal",new Ae(_,3)),this.setAttribute("uv",new Ae(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}},Ue={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
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
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
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
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
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
#endif`,common:`#define PI 3.141592653589793
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
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
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
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
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
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
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
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
}`,lights_fragment_begin:`
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
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
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
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
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
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
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
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
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
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
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
}`,distanceRGBA_frag:`#define DISTANCE
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
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
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
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
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
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},ue={common:{diffuse:{value:new he(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},envMapRotation:{value:new Ie},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new Y(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new he(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new he(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new he(16777215)},opacity:{value:1},center:{value:new Y(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}}},zn={basic:{uniforms:qt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:qt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new he(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:qt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new he(0)},specular:{value:new he(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:qt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new he(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:qt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new he(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:qt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:qt([ue.points,ue.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:qt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:qt([ue.common,ue.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:qt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:qt([ue.sprite,ue.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ie}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:qt([ue.common,ue.displacementmap,{referencePosition:{value:new M},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:qt([ue.lights,ue.fog,{color:{value:new he(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};zn.physical={uniforms:qt([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new Y(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new he(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new Y},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new he(0)},specularColor:{value:new he(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie},anisotropyVector:{value:new Y},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ie}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};var no={r:0,b:0,g:0},sr=new Cn,Hg=new Te;function Gg(r,e,t,n,i,s,a){let o=new he(0),l,c,h=s===!0?0:1,u=null,d=0,p=null;function f(m){let g=m.isScene===!0?m.background:null;return g&&g.isTexture&&(g=(m.backgroundBlurriness>0?t:e).get(g)),g}function _(m,g){m.getRGB(no,kf(r)),n.buffers.color.setClear(no.r,no.g,no.b,g,a)}return{getClearColor:function(){return o},setClearColor:function(m,g=1){o.set(m),h=g,_(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(m){h=m,_(o,h)},render:function(m){let g=!1,b=f(m);b===null?_(o,h):b&&b.isColor&&(_(b,1),g=!0);let v=r.xr.getEnvironmentBlendMode();v==="additive"?n.buffers.color.setClear(0,0,0,1,a):v==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||g)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))},addToRenderList:function(m,g){let b=f(g);b&&(b.isCubeTexture||b.mapping===hl)?(c===void 0&&(c=new qe(new Ii(1,1,1),new Rt({name:"BackgroundCubeMaterial",uniforms:fs(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(v,x,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),sr.copy(g.backgroundRotation),sr.x*=-1,sr.y*=-1,sr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(sr.y*=-1,sr.z*=-1),c.material.uniforms.envMap.value=b,c.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Hg.makeRotationFromEuler(sr)),c.material.toneMapped=ke.getTransfer(b.colorSpace)!==Ze,u===b&&d===b.version&&p===r.toneMapping||(c.material.needsUpdate=!0,u=b,d=b.version,p=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new qe(new dr(2,2),new Rt({name:"BackgroundMaterial",uniforms:fs(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,l.material.toneMapped=ke.getTransfer(b.colorSpace)!==Ze,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),u===b&&d===b.version&&p===r.toneMapping||(l.material.needsUpdate=!0,u=b,d=b.version,p=r.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}}}function Vg(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=c(null),s=i,a=!1;function o(g){return r.bindVertexArray(g)}function l(g){return r.deleteVertexArray(g)}function c(g){let b=[],v=[],x=[];for(let R=0;R<t;R++)b[R]=0,v[R]=0,x[R]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:v,attributeDivisors:x,object:g,attributes:{},index:null}}function h(){let g=s.newAttributes;for(let b=0,v=g.length;b<v;b++)g[b]=0}function u(g){d(g,0)}function d(g,b){let v=s.newAttributes,x=s.enabledAttributes,R=s.attributeDivisors;v[g]=1,x[g]===0&&(r.enableVertexAttribArray(g),x[g]=1),R[g]!==b&&(r.vertexAttribDivisor(g,b),R[g]=b)}function p(){let g=s.newAttributes,b=s.enabledAttributes;for(let v=0,x=b.length;v<x;v++)b[v]!==g[v]&&(r.disableVertexAttribArray(v),b[v]=0)}function f(g,b,v,x,R,T,P){P===!0?r.vertexAttribIPointer(g,b,v,R,T):r.vertexAttribPointer(g,b,v,x,R,T)}function _(){m(),a=!0,s!==i&&(s=i,o(s.object))}function m(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:function(g,b,v,x,R){let T=!1,P=(function(D,N,z){let V=z.wireframe===!0,H=n[D.id];H===void 0&&(H={},n[D.id]=H);let q=H[N.id];q===void 0&&(q={},H[N.id]=q);let W=q[V];return W===void 0&&(W=c(r.createVertexArray()),q[V]=W),W})(x,v,b);s!==P&&(s=P,o(s.object)),T=(function(D,N,z,V){let H=s.attributes,q=N.attributes,W=0,J=z.getAttributes();for(let $ in J)if(J[$].location>=0){let ae=H[$],re=q[$];if(re===void 0&&($==="instanceMatrix"&&D.instanceMatrix&&(re=D.instanceMatrix),$==="instanceColor"&&D.instanceColor&&(re=D.instanceColor)),ae===void 0||ae.attribute!==re||re&&ae.data!==re.data)return!0;W++}return s.attributesNum!==W||s.index!==V})(g,x,v,R),T&&(function(D,N,z,V){let H={},q=N.attributes,W=0,J=z.getAttributes();for(let $ in J)if(J[$].location>=0){let ae=q[$];ae===void 0&&($==="instanceMatrix"&&D.instanceMatrix&&(ae=D.instanceMatrix),$==="instanceColor"&&D.instanceColor&&(ae=D.instanceColor));let re={};re.attribute=ae,ae&&ae.data&&(re.data=ae.data),H[$]=re,W++}s.attributes=H,s.attributesNum=W,s.index=V})(g,x,v,R),R!==null&&e.update(R,r.ELEMENT_ARRAY_BUFFER),(T||a)&&(a=!1,(function(D,N,z,V){h();let H=V.attributes,q=z.getAttributes(),W=N.defaultAttributeValues;for(let J in q){let $=q[J];if($.location>=0){let ae=H[J];if(ae===void 0&&(J==="instanceMatrix"&&D.instanceMatrix&&(ae=D.instanceMatrix),J==="instanceColor"&&D.instanceColor&&(ae=D.instanceColor)),ae!==void 0){let re=ae.normalized,_e=ae.itemSize,we=e.get(ae);if(we===void 0)continue;let ie=we.buffer,ce=we.type,ge=we.bytesPerElement,be=ce===r.INT||ce===r.UNSIGNED_INT||ae.gpuType===gu;if(ae.isInterleavedBufferAttribute){let de=ae.data,A=de.stride,E=ae.offset;if(de.isInstancedInterleavedBuffer){for(let O=0;O<$.locationSize;O++)d($.location+O,de.meshPerAttribute);D.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let O=0;O<$.locationSize;O++)u($.location+O);r.bindBuffer(r.ARRAY_BUFFER,ie);for(let O=0;O<$.locationSize;O++)f($.location+O,_e/$.locationSize,ce,re,A*ge,(E+_e/$.locationSize*O)*ge,be)}else{if(ae.isInstancedBufferAttribute){for(let de=0;de<$.locationSize;de++)d($.location+de,ae.meshPerAttribute);D.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let de=0;de<$.locationSize;de++)u($.location+de);r.bindBuffer(r.ARRAY_BUFFER,ie);for(let de=0;de<$.locationSize;de++)f($.location+de,_e/$.locationSize,ce,re,_e*ge,_e/$.locationSize*de*ge,be)}}else if(W!==void 0){let re=W[J];if(re!==void 0)switch(re.length){case 2:r.vertexAttrib2fv($.location,re);break;case 3:r.vertexAttrib3fv($.location,re);break;case 4:r.vertexAttrib4fv($.location,re);break;default:r.vertexAttrib1fv($.location,re)}}}}p()})(g,b,v,x),R!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(R).buffer))},reset:_,resetDefaultState:m,dispose:function(){_();for(let g in n){let b=n[g];for(let v in b){let x=b[v];for(let R in x)l(x[R].object),delete x[R];delete b[v]}delete n[g]}},releaseStatesOfGeometry:function(g){if(n[g.id]===void 0)return;let b=n[g.id];for(let v in b){let x=b[v];for(let R in x)l(x[R].object),delete x[R];delete b[v]}delete n[g.id]},releaseStatesOfProgram:function(g){for(let b in n){let v=n[b];if(v[g.id]===void 0)continue;let x=v[g.id];for(let R in x)l(x[R].object),delete x[R];delete v[g.id]}},initAttributes:h,enableAttribute:u,disableUnusedAttributes:p}}function Wg(r,e,t){let n;function i(s,a,o){o!==0&&(r.drawArraysInstanced(n,s,a,o),t.update(a,n,o))}this.setMode=function(s){n=s},this.render=function(s,a){r.drawArrays(n,s,a),t.update(a,n,1)},this.renderInstances=i,this.renderMultiDraw=function(s,a,o){if(o===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,s,0,a,0,o);let l=0;for(let c=0;c<o;c++)l+=a[c];t.update(l,n,1)},this.renderMultiDrawInstances=function(s,a,o,l){if(o===0)return;let c=e.get("WEBGL_multi_draw");if(c===null)for(let h=0;h<s.length;h++)i(s[h],a[h],l[h]);else{c.multiDrawArraysInstancedWEBGL(n,s,0,a,0,l,0,o);let h=0;for(let u=0;u<o;u++)h+=a[u]*l[u];t.update(h,n,1)}}}function jg(r,e,t,n){let i;function s(d){if(d==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";d="mediump"}return d==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp",o=s(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let l=t.logarithmicDepthBuffer===!0,c=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),u=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS);return{isWebGL2:!0,getMaxAnisotropy:function(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let d=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(d.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i},getMaxPrecision:s,textureFormatReadable:function(d){return d===Rn||n.convert(d)===r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT)},textureTypeReadable:function(d){let p=d===Pn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(d!==Li&&n.convert(d)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&d!==An&&!p)},precision:a,logarithmicDepthBuffer:l,reverseDepthBuffer:c,maxTextures:h,maxVertexTextures:u,maxTextureSize:r.getParameter(r.MAX_TEXTURE_SIZE),maxCubemapSize:r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes:r.getParameter(r.MAX_VERTEX_ATTRIBS),maxVertexUniforms:r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings:r.getParameter(r.MAX_VARYING_VECTORS),maxFragmentUniforms:r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),vertexTextures:u>0,maxSamples:r.getParameter(r.MAX_SAMPLES)}}function Xg(r){let e=this,t=null,n=0,i=!1,s=!1,a=new Tn,o=new Ie,l={value:null,needsUpdate:!1};function c(h,u,d,p){let f=h!==null?h.length:0,_=null;if(f!==0){if(_=l.value,p!==!0||_===null){let m=d+4*f,g=u.matrixWorldInverse;o.getNormalMatrix(g),(_===null||_.length<m)&&(_=new Float32Array(m));for(let b=0,v=d;b!==f;++b,v+=4)a.copy(h[b]).applyMatrix4(g,o),a.normal.toArray(_,v),_[v+3]=a.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,_}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let d=h.length!==0||u||n!==0||i;return i=u,n=h.length,d},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){t=c(h,u,0)},this.setState=function(h,u,d){let p=h.clippingPlanes,f=h.clipIntersection,_=h.clipShadows,m=r.get(h);if(!i||p===null||p.length===0||s&&!_)s?c(null):(function(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0})();else{let g=s?0:n,b=4*g,v=m.clippingState||null;l.value=v,v=c(p,u,b,d);for(let x=0;x!==b;++x)v[x]=t[x];m.clippingState=v,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=g}}}function qg(r){let e=new WeakMap;function t(i,s){return s===Gc?i.mapping=as:s===Vc&&(i.mapping=os),i}function n(i){let s=i.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(i){if(i&&i.isTexture){let s=i.mapping;if(s===Gc||s===Vc){if(e.has(i))return t(e.get(i).texture,i.mapping);{let a=i.image;if(a&&a.height>0){let o=new Mh(a.height);return o.fromEquirectangularTexture(r,i),e.set(i,o),i.addEventListener("dispose",n),t(o.texture,i.mapping)}return null}}}return i},dispose:function(){e=new WeakMap}}}var Di=class extends da{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},mp=[.125,.215,.35,.446,.526,.582],Xs=20,Sc=new Di,gp=new he,wc=null,Tc=0,Ec=0,Ac=!1,or=(1+Math.sqrt(5))/2,Xr=1/or,bp=[new M(-or,Xr,0),new M(or,Xr,0),new M(-Xr,0,or),new M(Xr,0,or),new M(0,or,-Xr),new M(0,or,Xr),new M(-1,1,-1),new M(1,1,-1),new M(-1,1,1),new M(1,1,1)],Uo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){wc=this._renderer.getRenderTarget(),Tc=this._renderer.getActiveCubeFace(),Ec=this._renderer.getActiveMipmapLevel(),Ac=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_p(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(wc,Tc,Ec),this._renderer.xr.enabled=Ac,e.scissorTest=!1,io(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===as||e.mapping===os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wc=this._renderer.getRenderTarget(),Tc=this._renderer.getActiveCubeFace(),Ec=this._renderer.getActiveMipmapLevel(),Ac=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:Pn,format:Rn,colorSpace:Vt,depthBuffer:!1},i=vp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vp(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=(function(a){let o=[],l=[],c=[],h=a,u=a-4+1+mp.length;for(let d=0;d<u;d++){let p=Math.pow(2,h);l.push(p);let f=1/p;d>a-4?f=mp[d-a+4-1]:d===0&&(f=0),c.push(f);let _=1/(p-2),m=-_,g=1+_,b=[m,m,g,m,g,g,m,m,g,g,m,g],v=6,x=6,R=3,T=2,P=1,D=new Float32Array(R*x*v),N=new Float32Array(T*x*v),z=new Float32Array(P*x*v);for(let H=0;H<v;H++){let q=H%3*2/3-1,W=H>2?0:-1,J=[q,W,0,q+2/3,W,0,q+2/3,W+1,0,q,W,0,q+2/3,W+1,0,q,W+1,0];D.set(J,R*x*H),N.set(b,T*x*H);let $=[H,H,H,H,H,H];z.set($,P*x*H)}let V=new Qe;V.setAttribute("position",new At(D,R)),V.setAttribute("uv",new At(N,T)),V.setAttribute("faceIndex",new At(z,P)),o.push(V),h>4&&h--}return{lodPlanes:o,sizeLods:l,sigmas:c}})(s)),this._blurMaterial=(function(a,o,l){let c=new Float32Array(Xs),h=new M(0,1,0);return new Rt({name:"SphericalGaussianBlur",defines:{n:Xs,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/l,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:c},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:Su(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})})(s,e,t)}return i}_compileMaterial(e){let t=new qe(this._lodPlanes[0],e);this._renderer.compile(t,Sc)}_sceneToCubeUV(e,t,n,i){let s=new Et(90,1,t,n),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(gp),l.toneMapping=0,l.autoClear=!1;let u=new ht({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),d=new qe(new Ii,u),p=!1,f=e.background;f?f.isColor&&(u.color.copy(f),e.background=null,p=!0):(u.color.copy(gp),p=!0);for(let _=0;_<6;_++){let m=_%3;m===0?(s.up.set(0,a[_],0),s.lookAt(o[_],0,0)):m===1?(s.up.set(0,0,a[_]),s.lookAt(0,o[_],0)):(s.up.set(0,a[_],0),s.lookAt(0,0,o[_]));let g=this._cubeSize;io(i,m*g,_>2?g:0,g,g),l.setRenderTarget(i),p&&l.render(d,s),l.render(e,s)}d.geometry.dispose(),d.material.dispose(),l.toneMapping=h,l.autoClear=c,e.background=f}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===as||e.mapping===os;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=xp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_p());let s=i?this._cubemapMaterial:this._equirectMaterial,a=new qe(this._lodPlanes[0],s);s.uniforms.envMap.value=e;let o=this._cubeSize;io(t,0,0,3*o,2*o),n.setRenderTarget(t),n.render(a,Sc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let s=1;s<i;s++){let a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=bp[(i-s-1)%bp.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,i,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=new qe(this._lodPlanes[i],c),u=c.uniforms,d=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*d):2*Math.PI/39,f=s/p,_=isFinite(s)?1+Math.floor(3*f):Xs;_>Xs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to 20`);let m=[],g=0;for(let x=0;x<Xs;++x){let R=x/f,T=Math.exp(-R*R/2);m.push(T),x===0?g+=T:x<_&&(g+=2*T)}for(let x=0;x<m.length;x++)m[x]=m[x]/g;u.envMap.value=e.texture,u.samples.value=_,u.weights.value=m,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:b}=this;u.dTheta.value=p,u.mipInt.value=b-n;let v=this._sizeLods[i];io(t,3*v*(i>b-4?i-b+4:0),4*(this._cubeSize-v),3*v,2*v),l.setRenderTarget(t),l.render(h,Sc)}};function vp(r,e,t){let n=new Yt(r,e,t);return n.texture.mapping=hl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function io(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function _p(){return new Rt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Su(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function xp(){return new Rt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Su(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Su(){return`

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
	`}function Yg(r){let e=new WeakMap,t=null;function n(i){let s=i.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(i){if(i&&i.isTexture){let s=i.mapping,a=s===Gc||s===Vc,o=s===as||s===os;if(a||o){let l=e.get(i),c=l!==void 0?l.texture.pmremVersion:0;if(i.isRenderTargetTexture&&i.pmremVersion!==c)return t===null&&(t=new Uo(r)),l=a?t.fromEquirectangular(i,l):t.fromCubemap(i,l),l.texture.pmremVersion=i.pmremVersion,e.set(i,l),l.texture;if(l!==void 0)return l.texture;{let h=i.image;return a&&h&&h.height>0||o&&h&&(function(u){let d=0,p=6;for(let f=0;f<p;f++)u[f]!==void 0&&d++;return d===p})(h)?(t===null&&(t=new Uo(r)),l=a?t.fromEquirectangular(i):t.fromCubemap(i),l.texture.pmremVersion=i.pmremVersion,e.set(i,l),i.addEventListener("dispose",n),l.texture):null}}}return i},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function Kg(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&ta("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Jg(r,e,t,n){let i={},s=new WeakMap;function a(l){let c=l.target;c.index!==null&&e.remove(c.index);for(let u in c.attributes)e.remove(c.attributes[u]);for(let u in c.morphAttributes){let d=c.morphAttributes[u];for(let p=0,f=d.length;p<f;p++)e.remove(d[p])}c.removeEventListener("dispose",a),delete i[c.id];let h=s.get(c);h&&(e.remove(h),s.delete(c)),n.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function o(l){let c=[],h=l.index,u=l.attributes.position,d=0;if(h!==null){let _=h.array;d=h.version;for(let m=0,g=_.length;m<g;m+=3){let b=_[m+0],v=_[m+1],x=_[m+2];c.push(b,v,v,x,x,b)}}else{if(u===void 0)return;{let _=u.array;d=u.version;for(let m=0,g=_.length/3-1;m<g;m+=3){let b=m+0,v=m+1,x=m+2;c.push(b,v,v,x,x,b)}}}let p=new(Nf(c)?Io:Lo)(c,1);p.version=d;let f=s.get(l);f&&e.remove(f),s.set(l,p)}return{get:function(l,c){return i[c.id]===!0||(c.addEventListener("dispose",a),i[c.id]=!0,t.memory.geometries++),c},update:function(l){let c=l.attributes;for(let u in c)e.update(c[u],r.ARRAY_BUFFER);let h=l.morphAttributes;for(let u in h){let d=h[u];for(let p=0,f=d.length;p<f;p++)e.update(d[p],r.ARRAY_BUFFER)}},getWireframeAttribute:function(l){let c=s.get(l);if(c){let h=l.index;h!==null&&c.version<h.version&&o(l)}else o(l);return s.get(l)}}}function Zg(r,e,t){let n,i,s;function a(o,l,c){c!==0&&(r.drawElementsInstanced(n,l,i,o*s,c),t.update(l,n,c))}this.setMode=function(o){n=o},this.setIndex=function(o){i=o.type,s=o.bytesPerElement},this.render=function(o,l){r.drawElements(n,l,i,o*s),t.update(l,n,1)},this.renderInstances=a,this.renderMultiDraw=function(o,l,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,l,0,i,o,0,c);let h=0;for(let u=0;u<c;u++)h+=l[u];t.update(h,n,1)},this.renderMultiDrawInstances=function(o,l,c,h){if(c===0)return;let u=e.get("WEBGL_multi_draw");if(u===null)for(let d=0;d<o.length;d++)a(o[d]/s,l[d],h[d]);else{u.multiDrawElementsInstancedWEBGL(n,l,0,i,o,0,h,0,c);let d=0;for(let p=0;p<c;p++)d+=l[p]*h[p];t.update(d,n,1)}}}function $g(r){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,n,i){switch(e.calls++,n){case r.TRIANGLES:e.triangles+=i*(t/3);break;case r.LINES:e.lines+=i*(t/2);break;case r.LINE_STRIP:e.lines+=i*(t-1);break;case r.LINE_LOOP:e.lines+=i*t;break;case r.POINTS:e.points+=i*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",n)}}}}function Qg(r,e,t){let n=new WeakMap,i=new Je;return{update:function(s,a,o){let l=s.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=c!==void 0?c.length:0,u=n.get(a);if(u===void 0||u.count!==h){let D=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",D)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,f=a.morphAttributes.color!==void 0,_=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],g=a.morphAttributes.color||[],b=0;d===!0&&(b=1),p===!0&&(b=2),f===!0&&(b=3);let v=a.attributes.position.count*b,x=1;v>e.maxTextureSize&&(x=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let R=new Float32Array(v*x*4*h),T=new Po(R,v,x,h);T.type=An,T.needsUpdate=!0;let P=4*b;for(let N=0;N<h;N++){let z=_[N],V=m[N],H=g[N],q=v*x*4*N;for(let W=0;W<z.count;W++){let J=W*P;d===!0&&(i.fromBufferAttribute(z,W),R[q+J+0]=i.x,R[q+J+1]=i.y,R[q+J+2]=i.z,R[q+J+3]=0),p===!0&&(i.fromBufferAttribute(V,W),R[q+J+4]=i.x,R[q+J+5]=i.y,R[q+J+6]=i.z,R[q+J+7]=0),f===!0&&(i.fromBufferAttribute(H,W),R[q+J+8]=i.x,R[q+J+9]=i.y,R[q+J+10]=i.z,R[q+J+11]=H.itemSize===4?i.w:1)}}u={count:h,texture:T,size:new Y(v,x)},n.set(a,u),a.addEventListener("dispose",D)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)o.getUniforms().setValue(r,"morphTexture",s.morphTexture,t);else{let d=0;for(let f=0;f<l.length;f++)d+=l[f];let p=a.morphTargetsRelative?1:1-d;o.getUniforms().setValue(r,"morphTargetBaseInfluence",p),o.getUniforms().setValue(r,"morphTargetInfluences",l)}o.getUniforms().setValue(r,"morphTargetsTexture",u.texture,t),o.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}}}function e0(r,e,t,n){let i=new WeakMap;function s(a){let o=a.target;o.removeEventListener("dispose",s),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(a){let o=n.render.frame,l=a.geometry,c=e.get(a,l);if(i.get(c)!==o&&(e.update(c),i.set(c,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",s)===!1&&a.addEventListener("dispose",s),i.get(a)!==o&&(t.update(a.instanceMatrix,r.ARRAY_BUFFER),a.instanceColor!==null&&t.update(a.instanceColor,r.ARRAY_BUFFER),i.set(a,o))),a.isSkinnedMesh){let h=a.skeleton;i.get(h)!==o&&(h.update(),i.set(h,o))}return c},dispose:function(){i=new WeakMap}}}var No=class extends Ut{constructor(e,t,n,i,s,a,o,l,c,h=1026){if(h!==ca&&h!==cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ca&&(n=hr),n===void 0&&h===cs&&(n=ls),super(null,i,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Gt,this.minFilter=l!==void 0?l:Gt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Bf=new Ut,yp=new No(1,1),zf=new Po,Hf=new xh,Gf=new Do,Mp=[],Sp=[],wp=new Float32Array(16),Tp=new Float32Array(9),Ep=new Float32Array(4);function As(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=Mp[i];if(s===void 0&&(s=new Float32Array(i),Mp[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Ct(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Pt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function pl(r,e){let t=Sp[e];t===void 0&&(t=new Int32Array(e),Sp[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function t0(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function n0(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;r.uniform2fv(this.addr,e),Pt(t,e)}}function i0(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;r.uniform3fv(this.addr,e),Pt(t,e)}}function r0(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;r.uniform4fv(this.addr,e),Pt(t,e)}}function s0(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,n))return;Ep.set(n),r.uniformMatrix2fv(this.addr,!1,Ep),Pt(t,n)}}function a0(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,n))return;Tp.set(n),r.uniformMatrix3fv(this.addr,!1,Tp),Pt(t,n)}}function o0(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,n))return;wp.set(n),r.uniformMatrix4fv(this.addr,!1,wp),Pt(t,n)}}function l0(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function c0(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;r.uniform2iv(this.addr,e),Pt(t,e)}}function h0(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;r.uniform3iv(this.addr,e),Pt(t,e)}}function u0(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;r.uniform4iv(this.addr,e),Pt(t,e)}}function d0(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function p0(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;r.uniform2uiv(this.addr,e),Pt(t,e)}}function f0(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;r.uniform3uiv(this.addr,e),Pt(t,e)}}function m0(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;r.uniform4uiv(this.addr,e),Pt(t,e)}}function g0(r,e,t){let n=this.cache,i=t.allocateTextureUnit(),s;n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),this.type===r.SAMPLER_2D_SHADOW?(yp.compareFunction=515,s=yp):s=Bf,t.setTexture2D(e||s,i)}function b0(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Hf,i)}function v0(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Gf,i)}function _0(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||zf,i)}function x0(r,e){r.uniform1fv(this.addr,e)}function y0(r,e){let t=As(e,this.size,2);r.uniform2fv(this.addr,t)}function M0(r,e){let t=As(e,this.size,3);r.uniform3fv(this.addr,t)}function S0(r,e){let t=As(e,this.size,4);r.uniform4fv(this.addr,t)}function w0(r,e){let t=As(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function T0(r,e){let t=As(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function E0(r,e){let t=As(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function A0(r,e){r.uniform1iv(this.addr,e)}function R0(r,e){r.uniform2iv(this.addr,e)}function C0(r,e){r.uniform3iv(this.addr,e)}function P0(r,e){r.uniform4iv(this.addr,e)}function L0(r,e){r.uniform1uiv(this.addr,e)}function I0(r,e){r.uniform2uiv(this.addr,e)}function D0(r,e){r.uniform3uiv(this.addr,e)}function U0(r,e){r.uniform4uiv(this.addr,e)}function N0(r,e,t){let n=this.cache,i=e.length,s=pl(t,i);Ct(n,s)||(r.uniform1iv(this.addr,s),Pt(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Bf,s[a])}function O0(r,e,t){let n=this.cache,i=e.length,s=pl(t,i);Ct(n,s)||(r.uniform1iv(this.addr,s),Pt(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Hf,s[a])}function k0(r,e,t){let n=this.cache,i=e.length,s=pl(t,i);Ct(n,s)||(r.uniform1iv(this.addr,s),Pt(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Gf,s[a])}function F0(r,e,t){let n=this.cache,i=e.length,s=pl(t,i);Ct(n,s)||(r.uniform1iv(this.addr,s),Pt(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||zf,s[a])}var Sh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=(function(i){switch(i){case 5126:return t0;case 35664:return n0;case 35665:return i0;case 35666:return r0;case 35674:return s0;case 35675:return a0;case 35676:return o0;case 5124:case 35670:return l0;case 35667:case 35671:return c0;case 35668:case 35672:return h0;case 35669:case 35673:return u0;case 5125:return d0;case 36294:return p0;case 36295:return f0;case 36296:return m0;case 35678:case 36198:case 36298:case 36306:case 35682:return g0;case 35679:case 36299:case 36307:return b0;case 35680:case 36300:case 36308:case 36293:return v0;case 36289:case 36303:case 36311:case 36292:return _0}})(t.type)}},wh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=(function(i){switch(i){case 5126:return x0;case 35664:return y0;case 35665:return M0;case 35666:return S0;case 35674:return w0;case 35675:return T0;case 35676:return E0;case 5124:case 35670:return A0;case 35667:case 35671:return R0;case 35668:case 35672:return C0;case 35669:case 35673:return P0;case 5125:return L0;case 36294:return I0;case 36295:return D0;case 36296:return U0;case 35678:case 36198:case 36298:case 36306:case 35682:return N0;case 35679:case 36299:case 36307:return O0;case 35680:case 36300:case 36308:case 36293:return k0;case 36289:case 36303:case 36311:case 36292:return F0}})(t.type)}},Th=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,a=i.length;s!==a;++s){let o=i[s];o.setValue(e,t[o.id],n)}}},Rc=/(\w+)(\])?(\[|\.)?/g;function Ap(r,e){r.seq.push(e),r.map[e.id]=e}function B0(r,e,t){let n=r.name,i=n.length;for(Rc.lastIndex=0;;){let s=Rc.exec(n),a=Rc.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o|=0),c===void 0||c==="["&&a+2===i){Ap(t,c===void 0?new Sh(o,r,e):new wh(o,r,e));break}{let h=t.map[o];h===void 0&&(h=new Th(o),Ap(t,h)),t=h}}}var ss=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=e.getActiveUniform(t,i);B0(s,e.getUniformLocation(t,s.name),this)}}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function Rp(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}var z0=0,Cp=new Ie;function Pp(r,e,t){let n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+(function(o,l){let c=o.split(`
`),h=[],u=Math.max(l-6,0),d=Math.min(l+6,c.length);for(let p=u;p<d;p++){let f=p+1;h.push(`${f===l?">":" "} ${f}: ${c[p]}`)}return h.join(`
`)})(r.getShaderSource(e),a)}return i}function H0(r,e){let t=(function(n){ke._getMatrix(Cp,ke.workingColorSpace,n);let i=`mat3( ${Cp.elements.map((s=>s.toFixed(4)))} )`;switch(ke.getTransfer(n)){case dl:return[i,"LinearTransferOETF"];case Ze:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[i,"LinearTransferOETF"]}})(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function G0(r,e){let t;switch(e){case 1:t="Linear";break;case 2:t="Reinhard";break;case 3:t="Cineon";break;case 4:t="ACESFilmic";break;case 6:t="AgX";break;case 7:t="Neutral";break;case 5:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ro=new M;function V0(){return ke.getLuminanceCoefficients(ro),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${ro.x.toFixed(4)}, ${ro.y.toFixed(4)}, ${ro.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qs(r){return r!==""}function Lp(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ip(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var W0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Eh(r){return r.replace(W0,X0)}var j0=new Map;function X0(r,e){let t=Ue[e];if(t===void 0){let n=j0.get(e);if(n===void 0)throw new Error("Can not resolve #include <"+e+">");t=Ue[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n)}return Eh(t)}var q0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dp(r){return r.replace(q0,Y0)}function Y0(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Up(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
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
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function K0(r,e,t,n){let i=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=(function(V){let H="SHADOWMAP_TYPE_BASIC";return V.shadowMapType===1?H="SHADOWMAP_TYPE_PCF":V.shadowMapType===2?H="SHADOWMAP_TYPE_PCF_SOFT":V.shadowMapType===3&&(H="SHADOWMAP_TYPE_VSM"),H})(t),c=(function(V){let H="ENVMAP_TYPE_CUBE";if(V.envMap)switch(V.envMapMode){case as:case os:H="ENVMAP_TYPE_CUBE";break;case hl:H="ENVMAP_TYPE_CUBE_UV"}return H})(t),h=(function(V){let H="ENVMAP_MODE_REFLECTION";return V.envMap&&V.envMapMode===os&&(H="ENVMAP_MODE_REFRACTION"),H})(t),u=(function(V){let H="ENVMAP_BLENDING_NONE";if(V.envMap)switch(V.combine){case 0:H="ENVMAP_BLENDING_MULTIPLY";break;case 1:H="ENVMAP_BLENDING_MIX";break;case 2:H="ENVMAP_BLENDING_ADD"}return H})(t),d=(function(V){let H=V.envMapCubeUVHeight;if(H===null)return null;let q=Math.log2(H)-2,W=1/H;return{texelWidth:1/(3*Math.max(Math.pow(2,q),112)),texelHeight:W,maxMip:q}})(t),p=(function(V){return[V.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",V.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qs).join(`
`)})(t),f=(function(V){let H=[];for(let q in V){let W=V[q];W!==!1&&H.push("#define "+q+" "+W)}return H.join(`
`)})(s),_=i.createProgram(),m,g,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(qs).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(qs).join(`
`),g.length>0&&(g+=`
`)):(m=[Up(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qs).join(`
`),g=[Up(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==0?"#define TONE_MAPPING":"",t.toneMapping!==0?Ue.tonemapping_pars_fragment:"",t.toneMapping!==0?G0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,H0("linearToOutputTexel",t.outputColorSpace),V0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qs).join(`
`)),a=Eh(a),a=Lp(a,t),a=Ip(a,t),o=Eh(o),o=Lp(o,t),o=Ip(o,t),a=Dp(a),o=Dp(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===qd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===qd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let v=b+m+a,x=b+g+o,R=Rp(i,i.VERTEX_SHADER,v),T=Rp(i,i.FRAGMENT_SHADER,x);function P(V){if(r.debug.checkShaderErrors){let H=i.getProgramInfoLog(_).trim(),q=i.getShaderInfoLog(R).trim(),W=i.getShaderInfoLog(T).trim(),J=!0,$=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(J=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,R,T);else{let ae=Pp(i,R,"vertex"),re=Pp(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+H+`
`+ae+`
`+re)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):q!==""&&W!==""||($=!1);$&&(V.diagnostics={runnable:J,programLog:H,vertexShader:{log:q,prefix:m},fragmentShader:{log:W,prefix:g}})}i.deleteShader(R),i.deleteShader(T),D=new ss(i,_),N=(function(H,q){let W={},J=H.getProgramParameter(q,H.ACTIVE_ATTRIBUTES);for(let $=0;$<J;$++){let ae=H.getActiveAttrib(q,$),re=ae.name,_e=1;ae.type===H.FLOAT_MAT2&&(_e=2),ae.type===H.FLOAT_MAT3&&(_e=3),ae.type===H.FLOAT_MAT4&&(_e=4),W[re]={type:ae.type,location:H.getAttribLocation(q,re),locationSize:_e}}return W})(i,_)}let D,N;i.attachShader(_,R),i.attachShader(_,T),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_),this.getUniforms=function(){return D===void 0&&P(this),D},this.getAttributes=function(){return N===void 0&&P(this),N};let z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=i.getProgramParameter(_,37297)),z},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=z0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=T,this}var J0=0,Ah=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Rh(e),t.set(e,n)),n}},Rh=class{constructor(e){this.id=J0++,this.code=e,this.usedTimes=0}};function Z0(r,e,t,n,i,s,a){let o=new ua,l=new Ah,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures,p=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(m){return c.add(m),m===0?"uv":`uv${m}`}return{getParameters:function(m,g,b,v,x){let R=v.fog,T=x.geometry,P=m.isMeshStandardMaterial?v.environment:null,D=(m.isMeshStandardMaterial?t:e).get(m.envMap||P),N=D&&D.mapping===hl?D.image.height:null,z=f[m.type];m.precision!==null&&(p=i.getMaxPrecision(m.precision),p!==m.precision&&console.warn("THREE.WebGLProgram.getParameters:",m.precision,"not supported, using",p,"instead."));let V=T.morphAttributes.position||T.morphAttributes.normal||T.morphAttributes.color,H=V!==void 0?V.length:0,q,W,J,$,ae=0;if(T.morphAttributes.position!==void 0&&(ae=1),T.morphAttributes.normal!==void 0&&(ae=2),T.morphAttributes.color!==void 0&&(ae=3),z){let Bs=zn[z];q=Bs.vertexShader,W=Bs.fragmentShader}else q=m.vertexShader,W=m.fragmentShader,l.update(m),J=l.getVertexShaderID(m),$=l.getFragmentShaderID(m);let re=r.getRenderTarget(),_e=r.state.buffers.depth.getReversed(),we=x.isInstancedMesh===!0,ie=x.isBatchedMesh===!0,ce=!!m.map,ge=!!m.matcap,be=!!D,de=!!m.aoMap,A=!!m.lightMap,E=!!m.bumpMap,O=!!m.normalMap,U=!!m.displacementMap,C=!!m.emissiveMap,I=!!m.metalnessMap,S=!!m.roughnessMap,L=m.anisotropy>0,F=m.clearcoat>0,ee=m.dispersion>0,k=m.iridescence>0,Z=m.sheen>0,K=m.transmission>0,ne=L&&!!m.anisotropyMap,fe=F&&!!m.clearcoatMap,pe=F&&!!m.clearcoatNormalMap,Me=F&&!!m.clearcoatRoughnessMap,Ce=k&&!!m.iridescenceMap,je=k&&!!m.iridescenceThicknessMap,Fe=Z&&!!m.sheenColorMap,Se=Z&&!!m.sheenRoughnessMap,Ke=!!m.specularMap,it=!!m.specularColorMap,pt=!!m.specularIntensityMap,ve=K&&!!m.transmissionMap,He=K&&!!m.thicknessMap,et=!!m.gradientMap,Ir=!!m.alphaMap,Oa=m.alphaTest>0,vn=!!m.alphaHash,Fn=!!m.extensions,Zi=0;m.toneMapped&&(re!==null&&re.isXRRenderTarget!==!0||(Zi=r.toneMapping));let B={shaderID:z,shaderType:m.type,shaderName:m.name,vertexShader:q,fragmentShader:W,defines:m.defines,customVertexShaderID:J,customFragmentShaderID:$,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:p,batching:ie,batchingColor:ie&&x._colorsTexture!==null,instancing:we,instancingColor:we&&x.instanceColor!==null,instancingMorph:we&&x.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:re===null?r.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Vt,alphaToCoverage:!!m.alphaToCoverage,map:ce,matcap:ge,envMap:be,envMapMode:be&&D.mapping,envMapCubeUVHeight:N,aoMap:de,lightMap:A,bumpMap:E,normalMap:O,displacementMap:d&&U,emissiveMap:C,normalMapObjectSpace:O&&m.normalMapType===1,normalMapTangentSpace:O&&m.normalMapType===0,metalnessMap:I,roughnessMap:S,anisotropy:L,anisotropyMap:ne,clearcoat:F,clearcoatMap:fe,clearcoatNormalMap:pe,clearcoatRoughnessMap:Me,dispersion:ee,iridescence:k,iridescenceMap:Ce,iridescenceThicknessMap:je,sheen:Z,sheenColorMap:Fe,sheenRoughnessMap:Se,specularMap:Ke,specularColorMap:it,specularIntensityMap:pt,transmission:K,transmissionMap:ve,thicknessMap:He,gradientMap:et,opaque:m.transparent===!1&&m.blending===1&&m.alphaToCoverage===!1,alphaMap:Ir,alphaTest:Oa,alphaHash:vn,combine:m.combine,mapUv:ce&&_(m.map.channel),aoMapUv:de&&_(m.aoMap.channel),lightMapUv:A&&_(m.lightMap.channel),bumpMapUv:E&&_(m.bumpMap.channel),normalMapUv:O&&_(m.normalMap.channel),displacementMapUv:U&&_(m.displacementMap.channel),emissiveMapUv:C&&_(m.emissiveMap.channel),metalnessMapUv:I&&_(m.metalnessMap.channel),roughnessMapUv:S&&_(m.roughnessMap.channel),anisotropyMapUv:ne&&_(m.anisotropyMap.channel),clearcoatMapUv:fe&&_(m.clearcoatMap.channel),clearcoatNormalMapUv:pe&&_(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&_(m.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&_(m.iridescenceMap.channel),iridescenceThicknessMapUv:je&&_(m.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&_(m.sheenColorMap.channel),sheenRoughnessMapUv:Se&&_(m.sheenRoughnessMap.channel),specularMapUv:Ke&&_(m.specularMap.channel),specularColorMapUv:it&&_(m.specularColorMap.channel),specularIntensityMapUv:pt&&_(m.specularIntensityMap.channel),transmissionMapUv:ve&&_(m.transmissionMap.channel),thicknessMapUv:He&&_(m.thicknessMap.channel),alphaMapUv:Ir&&_(m.alphaMap.channel),vertexTangents:!!T.attributes.tangent&&(O||L),vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!T.attributes.color&&T.attributes.color.itemSize===4,pointsUvs:x.isPoints===!0&&!!T.attributes.uv&&(ce||Ir),fog:!!R,useFog:m.fog===!0,fogExp2:!!R&&R.isFogExp2,flatShading:m.flatShading===!0,sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:_e,skinning:x.isSkinnedMesh===!0,morphTargets:T.morphAttributes.position!==void 0,morphNormals:T.morphAttributes.normal!==void 0,morphColors:T.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:ae,numDirLights:g.directional.length,numPointLights:g.point.length,numSpotLights:g.spot.length,numSpotLightMaps:g.spotLightMap.length,numRectAreaLights:g.rectArea.length,numHemiLights:g.hemi.length,numDirLightShadows:g.directionalShadowMap.length,numPointLightShadows:g.pointShadowMap.length,numSpotLightShadows:g.spotShadowMap.length,numSpotLightShadowsWithMaps:g.numSpotLightShadowsWithMaps,numLightProbes:g.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:m.dithering,shadowMapEnabled:r.shadowMap.enabled&&b.length>0,shadowMapType:r.shadowMap.type,toneMapping:Zi,decodeVideoTexture:ce&&m.map.isVideoTexture===!0&&ke.getTransfer(m.map.colorSpace)===Ze,decodeVideoTextureEmissive:C&&m.emissiveMap.isVideoTexture===!0&&ke.getTransfer(m.emissiveMap.colorSpace)===Ze,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===2,flipSided:m.side===1,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:Fn&&m.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fn&&m.extensions.multiDraw===!0||ie)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return B.vertexUv1s=c.has(1),B.vertexUv2s=c.has(2),B.vertexUv3s=c.has(3),c.clear(),B},getProgramCacheKey:function(m){let g=[];if(m.shaderID?g.push(m.shaderID):(g.push(m.customVertexShaderID),g.push(m.customFragmentShaderID)),m.defines!==void 0)for(let b in m.defines)g.push(b),g.push(m.defines[b]);return m.isRawShaderMaterial===!1&&((function(b,v){b.push(v.precision),b.push(v.outputColorSpace),b.push(v.envMapMode),b.push(v.envMapCubeUVHeight),b.push(v.mapUv),b.push(v.alphaMapUv),b.push(v.lightMapUv),b.push(v.aoMapUv),b.push(v.bumpMapUv),b.push(v.normalMapUv),b.push(v.displacementMapUv),b.push(v.emissiveMapUv),b.push(v.metalnessMapUv),b.push(v.roughnessMapUv),b.push(v.anisotropyMapUv),b.push(v.clearcoatMapUv),b.push(v.clearcoatNormalMapUv),b.push(v.clearcoatRoughnessMapUv),b.push(v.iridescenceMapUv),b.push(v.iridescenceThicknessMapUv),b.push(v.sheenColorMapUv),b.push(v.sheenRoughnessMapUv),b.push(v.specularMapUv),b.push(v.specularColorMapUv),b.push(v.specularIntensityMapUv),b.push(v.transmissionMapUv),b.push(v.thicknessMapUv),b.push(v.combine),b.push(v.fogExp2),b.push(v.sizeAttenuation),b.push(v.morphTargetsCount),b.push(v.morphAttributeCount),b.push(v.numDirLights),b.push(v.numPointLights),b.push(v.numSpotLights),b.push(v.numSpotLightMaps),b.push(v.numHemiLights),b.push(v.numRectAreaLights),b.push(v.numDirLightShadows),b.push(v.numPointLightShadows),b.push(v.numSpotLightShadows),b.push(v.numSpotLightShadowsWithMaps),b.push(v.numLightProbes),b.push(v.shadowMapType),b.push(v.toneMapping),b.push(v.numClippingPlanes),b.push(v.numClipIntersection),b.push(v.depthPacking)})(g,m),(function(b,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reverseDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),b.push(o.mask)})(g,m),g.push(r.outputColorSpace)),g.push(m.customProgramCacheKey),g.join()},getUniforms:function(m){let g=f[m.type],b;if(g){let v=zn[g];b=zi.clone(v.uniforms)}else b=m.uniforms;return b},acquireProgram:function(m,g){let b;for(let v=0,x=h.length;v<x;v++){let R=h[v];if(R.cacheKey===g){b=R,++b.usedTimes;break}}return b===void 0&&(b=new K0(r,g,m,s),h.push(b)),b},releaseProgram:function(m){if(--m.usedTimes==0){let g=h.indexOf(m);h[g]=h[h.length-1],h.pop(),m.destroy()}},releaseShaderCache:function(m){l.remove(m)},programs:h,dispose:function(){l.dispose()}}}function $0(){let r=new WeakMap;return{has:function(e){return r.has(e)},get:function(e){let t=r.get(e);return t===void 0&&(t={},r.set(e,t)),t},remove:function(e){r.delete(e)},update:function(e,t,n){r.get(e)[t]=n},dispose:function(){r=new WeakMap}}}function Q0(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Np(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Op(){let r=[],e=0,t=[],n=[],i=[];function s(a,o,l,c,h,u){let d=r[e];return d===void 0?(d={id:a.id,object:a,geometry:o,material:l,groupOrder:c,renderOrder:a.renderOrder,z:h,group:u},r[e]=d):(d.id=a.id,d.object=a,d.geometry=o,d.material=l,d.groupOrder=c,d.renderOrder=a.renderOrder,d.z=h,d.group=u),e++,d}return{opaque:t,transmissive:n,transparent:i,init:function(){e=0,t.length=0,n.length=0,i.length=0},push:function(a,o,l,c,h,u){let d=s(a,o,l,c,h,u);l.transmission>0?n.push(d):l.transparent===!0?i.push(d):t.push(d)},unshift:function(a,o,l,c,h,u){let d=s(a,o,l,c,h,u);l.transmission>0?n.unshift(d):l.transparent===!0?i.unshift(d):t.unshift(d)},finish:function(){for(let a=e,o=r.length;a<o;a++){let l=r[a];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}},sort:function(a,o){t.length>1&&t.sort(a||Q0),n.length>1&&n.sort(o||Np),i.length>1&&i.sort(o||Np)}}}function eb(){let r=new WeakMap;return{get:function(e,t){let n=r.get(e),i;return n===void 0?(i=new Op,r.set(e,[i])):t>=n.length?(i=new Op,n.push(i)):i=n[t],i},dispose:function(){r=new WeakMap}}}function tb(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new M,color:new he};break;case"SpotLight":t={position:new M,direction:new M,color:new he,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new M,color:new he,distance:0,decay:0};break;case"HemisphereLight":t={direction:new M,skyColor:new he,groundColor:new he};break;case"RectAreaLight":t={color:new he,position:new M,halfWidth:new M,halfHeight:new M}}return r[e.id]=t,t}}}var nb=0;function ib(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function rb(r){let e=new tb,t=(function(){let o={};return{get:function(l){if(o[l.id]!==void 0)return o[l.id];let c;switch(l.type){case"DirectionalLight":case"SpotLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Y};break;case"PointLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Y,shadowCameraNear:1,shadowCameraFar:1e3}}return o[l.id]=c,c}}})(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)n.probe.push(new M);let i=new M,s=new Te,a=new Te;return{setup:function(o){let l=0,c=0,h=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let u=0,d=0,p=0,f=0,_=0,m=0,g=0,b=0,v=0,x=0,R=0;o.sort(ib);for(let P=0,D=o.length;P<D;P++){let N=o[P],z=N.color,V=N.intensity,H=N.distance,q=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)l+=z.r*V,c+=z.g*V,h+=z.b*V;else if(N.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(N.sh.coefficients[W],V);R++}else if(N.isDirectionalLight){let W=e.get(N);if(W.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let J=N.shadow,$=t.get(N);$.shadowIntensity=J.intensity,$.shadowBias=J.bias,$.shadowNormalBias=J.normalBias,$.shadowRadius=J.radius,$.shadowMapSize=J.mapSize,n.directionalShadow[u]=$,n.directionalShadowMap[u]=q,n.directionalShadowMatrix[u]=N.shadow.matrix,m++}n.directional[u]=W,u++}else if(N.isSpotLight){let W=e.get(N);W.position.setFromMatrixPosition(N.matrixWorld),W.color.copy(z).multiplyScalar(V),W.distance=H,W.coneCos=Math.cos(N.angle),W.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),W.decay=N.decay,n.spot[p]=W;let J=N.shadow;if(N.map&&(n.spotLightMap[v]=N.map,v++,J.updateMatrices(N),N.castShadow&&x++),n.spotLightMatrix[p]=J.matrix,N.castShadow){let $=t.get(N);$.shadowIntensity=J.intensity,$.shadowBias=J.bias,$.shadowNormalBias=J.normalBias,$.shadowRadius=J.radius,$.shadowMapSize=J.mapSize,n.spotShadow[p]=$,n.spotShadowMap[p]=q,b++}p++}else if(N.isRectAreaLight){let W=e.get(N);W.color.copy(z).multiplyScalar(V),W.halfWidth.set(.5*N.width,0,0),W.halfHeight.set(0,.5*N.height,0),n.rectArea[f]=W,f++}else if(N.isPointLight){let W=e.get(N);if(W.color.copy(N.color).multiplyScalar(N.intensity),W.distance=N.distance,W.decay=N.decay,N.castShadow){let J=N.shadow,$=t.get(N);$.shadowIntensity=J.intensity,$.shadowBias=J.bias,$.shadowNormalBias=J.normalBias,$.shadowRadius=J.radius,$.shadowMapSize=J.mapSize,$.shadowCameraNear=J.camera.near,$.shadowCameraFar=J.camera.far,n.pointShadow[d]=$,n.pointShadowMap[d]=q,n.pointShadowMatrix[d]=N.shadow.matrix,g++}n.point[d]=W,d++}else if(N.isHemisphereLight){let W=e.get(N);W.skyColor.copy(N.color).multiplyScalar(V),W.groundColor.copy(N.groundColor).multiplyScalar(V),n.hemi[_]=W,_++}}f>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ue.LTC_FLOAT_1,n.rectAreaLTC2=ue.LTC_FLOAT_2):(n.rectAreaLTC1=ue.LTC_HALF_1,n.rectAreaLTC2=ue.LTC_HALF_2)),n.ambient[0]=l,n.ambient[1]=c,n.ambient[2]=h;let T=n.hash;T.directionalLength===u&&T.pointLength===d&&T.spotLength===p&&T.rectAreaLength===f&&T.hemiLength===_&&T.numDirectionalShadows===m&&T.numPointShadows===g&&T.numSpotShadows===b&&T.numSpotMaps===v&&T.numLightProbes===R||(n.directional.length=u,n.spot.length=p,n.rectArea.length=f,n.point.length=d,n.hemi.length=_,n.directionalShadow.length=m,n.directionalShadowMap.length=m,n.pointShadow.length=g,n.pointShadowMap.length=g,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=m,n.pointShadowMatrix.length=g,n.spotLightMatrix.length=b+v-x,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=x,n.numLightProbes=R,T.directionalLength=u,T.pointLength=d,T.spotLength=p,T.rectAreaLength=f,T.hemiLength=_,T.numDirectionalShadows=m,T.numPointShadows=g,T.numSpotShadows=b,T.numSpotMaps=v,T.numLightProbes=R,n.version=nb++)},setupView:function(o,l){let c=0,h=0,u=0,d=0,p=0,f=l.matrixWorldInverse;for(let _=0,m=o.length;_<m;_++){let g=o[_];if(g.isDirectionalLight){let b=n.directional[c];b.direction.setFromMatrixPosition(g.matrixWorld),i.setFromMatrixPosition(g.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(f),c++}else if(g.isSpotLight){let b=n.spot[u];b.position.setFromMatrixPosition(g.matrixWorld),b.position.applyMatrix4(f),b.direction.setFromMatrixPosition(g.matrixWorld),i.setFromMatrixPosition(g.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(f),u++}else if(g.isRectAreaLight){let b=n.rectArea[d];b.position.setFromMatrixPosition(g.matrixWorld),b.position.applyMatrix4(f),a.identity(),s.copy(g.matrixWorld),s.premultiply(f),a.extractRotation(s),b.halfWidth.set(.5*g.width,0,0),b.halfHeight.set(0,.5*g.height,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),d++}else if(g.isPointLight){let b=n.point[h];b.position.setFromMatrixPosition(g.matrixWorld),b.position.applyMatrix4(f),h++}else if(g.isHemisphereLight){let b=n.hemi[p];b.direction.setFromMatrixPosition(g.matrixWorld),b.direction.transformDirection(f),p++}}},state:n}}function kp(r){let e=new rb(r),t=[],n=[],i={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:function(s){i.camera=s,t.length=0,n.length=0},state:i,setupLights:function(){e.setup(t)},setupLightsView:function(s){e.setupView(t,s)},pushLight:function(s){t.push(s)},pushShadow:function(s){n.push(s)}}}function sb(r){let e=new WeakMap;return{get:function(t,n=0){let i=e.get(t),s;return i===void 0?(s=new kp(r),e.set(t,[s])):n>=i.length?(s=new kp(r),i.push(s)):s=i[n],s},dispose:function(){e=new WeakMap}}}var Ch=class extends Kt{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ph=class extends Kt{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ab(r,e,t){let n=new ms,i=new Y,s=new Y,a=new Je,o=new Ch({depthPacking:3201}),l=new Ph,c={},h=t.maxTextureSize,u={[fu]:1,[Wm]:0,[Fi]:2},d=new Rt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Y},radius:{value:4}},vertexShader:`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragmentShader:`uniform sampler2D shadow_pass;
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
}`}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let f=new Qe;f.setAttribute("position",new At(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new qe(f,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let g=this.type;function b(T,P){let D=e.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Yt(i.x,i.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,r.setRenderTarget(T.mapPass),r.clear(),r.renderBufferDirect(P,null,D,d,_,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,r.setRenderTarget(T.map),r.clear(),r.renderBufferDirect(P,null,D,p,_,null)}function v(T,P,D,N){let z=null,V=D.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(V!==void 0)z=V;else if(z=D.isPointLight===!0?l:o,r.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){let H=z.uuid,q=P.uuid,W=c[H];W===void 0&&(W={},c[H]=W);let J=W[q];J===void 0&&(J=z.clone(),W[q]=J,P.addEventListener("dispose",R)),z=J}return z.visible=P.visible,z.wireframe=P.wireframe,z.side=N===3?P.shadowSide!==null?P.shadowSide:P.side:P.shadowSide!==null?P.shadowSide:u[P.side],z.alphaMap=P.alphaMap,z.alphaTest=P.alphaTest,z.map=P.map,z.clipShadows=P.clipShadows,z.clippingPlanes=P.clippingPlanes,z.clipIntersection=P.clipIntersection,z.displacementMap=P.displacementMap,z.displacementScale=P.displacementScale,z.displacementBias=P.displacementBias,z.wireframeLinewidth=P.wireframeLinewidth,z.linewidth=P.linewidth,D.isPointLight===!0&&z.isMeshDistanceMaterial===!0&&(r.properties.get(z).light=D),z}function x(T,P,D,N,z){if(T.visible===!1)return;if(T.layers.test(P.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&z===3)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,T.matrixWorld);let H=e.update(T),q=T.material;if(Array.isArray(q)){let W=H.groups;for(let J=0,$=W.length;J<$;J++){let ae=W[J],re=q[ae.materialIndex];if(re&&re.visible){let _e=v(T,re,N,z);T.onBeforeShadow(r,T,P,D,H,_e,ae),r.renderBufferDirect(D,null,H,_e,T,ae),T.onAfterShadow(r,T,P,D,H,_e,ae)}}}else if(q.visible){let W=v(T,q,N,z);T.onBeforeShadow(r,T,P,D,H,W,null),r.renderBufferDirect(D,null,H,W,T,null),T.onAfterShadow(r,T,P,D,H,W,null)}}let V=T.children;for(let H=0,q=V.length;H<q;H++)x(V[H],P,D,N,z)}function R(T){T.target.removeEventListener("dispose",R);for(let P in c){let D=c[P],N=T.target.uuid;N in D&&(D[N].dispose(),delete D[N])}}this.render=function(T,P,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let N=r.getRenderTarget(),z=r.getActiveCubeFace(),V=r.getActiveMipmapLevel(),H=r.state;H.setBlending(0),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let q=g!==3&&this.type===3,W=g===3&&this.type!==3;for(let J=0,$=T.length;J<$;J++){let ae=T[J],re=ae.shadow;if(re===void 0){console.warn("THREE.WebGLShadowMap:",ae,"has no shadow.");continue}if(re.autoUpdate===!1&&re.needsUpdate===!1)continue;i.copy(re.mapSize);let _e=re.getFrameExtents();if(i.multiply(_e),s.copy(re.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/_e.x),i.x=s.x*_e.x,re.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/_e.y),i.y=s.y*_e.y,re.mapSize.y=s.y)),re.map===null||q===!0||W===!0){let ie=this.type!==3?{minFilter:Gt,magFilter:Gt}:{};re.map!==null&&re.map.dispose(),re.map=new Yt(i.x,i.y,ie),re.map.texture.name=ae.name+".shadowMap",re.camera.updateProjectionMatrix()}r.setRenderTarget(re.map),r.clear();let we=re.getViewportCount();for(let ie=0;ie<we;ie++){let ce=re.getViewport(ie);a.set(s.x*ce.x,s.y*ce.y,s.x*ce.z,s.y*ce.w),H.viewport(a),re.updateMatrices(ae,ie),n=re.getFrustum(),x(P,D,re.camera,ae,this.type)}re.isPointLightShadow!==!0&&this.type===3&&b(re,D),re.needsUpdate=!1}g=this.type,m.needsUpdate=!1,r.setRenderTarget(N,z,V)}}var ob={[ag]:1,[lg]:6,[hg]:7,[cg]:5,[og]:0,[dg]:2,[pg]:4,[ug]:3};function lb(r,e){let t=new function(){let S=!1,L=new Je,F=null,ee=new Je(0,0,0,0);return{setMask:function(k){F===k||S||(r.colorMask(k,k,k,k),F=k)},setLocked:function(k){S=k},setClear:function(k,Z,K,ne,fe){fe===!0&&(k*=ne,Z*=ne,K*=ne),L.set(k,Z,K,ne),ee.equals(L)===!1&&(r.clearColor(k,Z,K,ne),ee.copy(L))},reset:function(){S=!1,F=null,ee.set(-1,0,0,0)}}},n=new function(){let S=!1,L=!1,F=null,ee=null,k=null;return{setReversed:function(Z){if(L!==Z){let K=e.get("EXT_clip_control");L?K.clipControlEXT(K.LOWER_LEFT_EXT,K.ZERO_TO_ONE_EXT):K.clipControlEXT(K.LOWER_LEFT_EXT,K.NEGATIVE_ONE_TO_ONE_EXT);let ne=k;k=null,this.setClear(ne)}L=Z},getReversed:function(){return L},setTest:function(Z){Z?be(r.DEPTH_TEST):de(r.DEPTH_TEST)},setMask:function(Z){F===Z||S||(r.depthMask(Z),F=Z)},setFunc:function(Z){if(L&&(Z=ob[Z]),ee!==Z){switch(Z){case 0:r.depthFunc(r.NEVER);break;case 1:r.depthFunc(r.ALWAYS);break;case 2:r.depthFunc(r.LESS);break;case 3:default:r.depthFunc(r.LEQUAL);break;case 4:r.depthFunc(r.EQUAL);break;case 5:r.depthFunc(r.GEQUAL);break;case 6:r.depthFunc(r.GREATER);break;case 7:r.depthFunc(r.NOTEQUAL)}ee=Z}},setLocked:function(Z){S=Z},setClear:function(Z){k!==Z&&(L&&(Z=1-Z),r.clearDepth(Z),k=Z)},reset:function(){S=!1,F=null,ee=null,k=null,L=!1}}},i=new function(){let S=!1,L=null,F=null,ee=null,k=null,Z=null,K=null,ne=null,fe=null;return{setTest:function(pe){S||(pe?be(r.STENCIL_TEST):de(r.STENCIL_TEST))},setMask:function(pe){L===pe||S||(r.stencilMask(pe),L=pe)},setFunc:function(pe,Me,Ce){F===pe&&ee===Me&&k===Ce||(r.stencilFunc(pe,Me,Ce),F=pe,ee=Me,k=Ce)},setOp:function(pe,Me,Ce){Z===pe&&K===Me&&ne===Ce||(r.stencilOp(pe,Me,Ce),Z=pe,K=Me,ne=Ce)},setLocked:function(pe){S=pe},setClear:function(pe){fe!==pe&&(r.clearStencil(pe),fe=pe)},reset:function(){S=!1,L=null,F=null,ee=null,k=null,Z=null,K=null,ne=null,fe=null}}},s=new WeakMap,a=new WeakMap,o={},l={},c=new WeakMap,h=[],u=null,d=!1,p=null,f=null,_=null,m=null,g=null,b=null,v=null,x=new he(0,0,0),R=0,T=!1,P=null,D=null,N=null,z=null,V=null,H=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,W=0,J=r.getParameter(r.VERSION);J.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(J)[1]),q=W>=1):J.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),q=W>=2);let $=null,ae={},re=r.getParameter(r.SCISSOR_BOX),_e=r.getParameter(r.VIEWPORT),we=new Je().fromArray(re),ie=new Je().fromArray(_e);function ce(S,L,F,ee){let k=new Uint8Array(4),Z=r.createTexture();r.bindTexture(S,Z),r.texParameteri(S,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(S,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let K=0;K<F;K++)S===r.TEXTURE_3D||S===r.TEXTURE_2D_ARRAY?r.texImage3D(L,0,r.RGBA,1,1,ee,0,r.RGBA,r.UNSIGNED_BYTE,k):r.texImage2D(L+K,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,k);return Z}let ge={};function be(S){o[S]!==!0&&(r.enable(S),o[S]=!0)}function de(S){o[S]!==!1&&(r.disable(S),o[S]=!1)}ge[r.TEXTURE_2D]=ce(r.TEXTURE_2D,r.TEXTURE_2D,1),ge[r.TEXTURE_CUBE_MAP]=ce(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[r.TEXTURE_2D_ARRAY]=ce(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ge[r.TEXTURE_3D]=ce(r.TEXTURE_3D,r.TEXTURE_3D,1,1),t.setClear(0,0,0,1),n.setClear(1),i.setClear(0),be(r.DEPTH_TEST),n.setFunc(3),U(!1),C(1),be(r.CULL_FACE),O(0);let A={[lr]:r.FUNC_ADD,[jm]:r.FUNC_SUBTRACT,[Xm]:r.FUNC_REVERSE_SUBTRACT};A[103]=r.MIN,A[104]=r.MAX;let E={[qm]:r.ZERO,[Ym]:r.ONE,[Km]:r.SRC_COLOR,[zc]:r.SRC_ALPHA,[tg]:r.SRC_ALPHA_SATURATE,[Qm]:r.DST_COLOR,[Zm]:r.DST_ALPHA,[Jm]:r.ONE_MINUS_SRC_COLOR,[Hc]:r.ONE_MINUS_SRC_ALPHA,[eg]:r.ONE_MINUS_DST_COLOR,[$m]:r.ONE_MINUS_DST_ALPHA,[ng]:r.CONSTANT_COLOR,[ig]:r.ONE_MINUS_CONSTANT_COLOR,[rg]:r.CONSTANT_ALPHA,[sg]:r.ONE_MINUS_CONSTANT_ALPHA};function O(S,L,F,ee,k,Z,K,ne,fe,pe){if(S!==0){if(d===!1&&(be(r.BLEND),d=!0),S===5)k=k||L,Z=Z||F,K=K||ee,L===f&&k===g||(r.blendEquationSeparate(A[L],A[k]),f=L,g=k),F===_&&ee===m&&Z===b&&K===v||(r.blendFuncSeparate(E[F],E[ee],E[Z],E[K]),_=F,m=ee,b=Z,v=K),ne.equals(x)!==!1&&fe===R||(r.blendColor(ne.r,ne.g,ne.b,fe),x.copy(ne),R=fe),p=S,T=!1;else if(S!==p||pe!==T){if(f===lr&&g===lr||(r.blendEquation(r.FUNC_ADD),f=lr,g=lr),pe)switch(S){case 1:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.ONE,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",S)}else switch(S){case 1:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",S)}_=null,m=null,b=null,v=null,x.set(0,0,0),R=0,p=S,T=pe}}else d===!0&&(de(r.BLEND),d=!1)}function U(S){P!==S&&(S?r.frontFace(r.CW):r.frontFace(r.CCW),P=S)}function C(S){S!==0?(be(r.CULL_FACE),S!==D&&(S===1?r.cullFace(r.BACK):S===2?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):de(r.CULL_FACE),D=S}function I(S,L,F){S?(be(r.POLYGON_OFFSET_FILL),z===L&&V===F||(r.polygonOffset(L,F),z=L,V=F)):de(r.POLYGON_OFFSET_FILL)}return{buffers:{color:t,depth:n,stencil:i},enable:be,disable:de,bindFramebuffer:function(S,L){return l[S]!==L&&(r.bindFramebuffer(S,L),l[S]=L,S===r.DRAW_FRAMEBUFFER&&(l[r.FRAMEBUFFER]=L),S===r.FRAMEBUFFER&&(l[r.DRAW_FRAMEBUFFER]=L),!0)},drawBuffers:function(S,L){let F=h,ee=!1;if(S){F=c.get(L),F===void 0&&(F=[],c.set(L,F));let k=S.textures;if(F.length!==k.length||F[0]!==r.COLOR_ATTACHMENT0){for(let Z=0,K=k.length;Z<K;Z++)F[Z]=r.COLOR_ATTACHMENT0+Z;F.length=k.length,ee=!0}}else F[0]!==r.BACK&&(F[0]=r.BACK,ee=!0);ee&&r.drawBuffers(F)},useProgram:function(S){return u!==S&&(r.useProgram(S),u=S,!0)},setBlending:O,setMaterial:function(S,L){S.side===2?de(r.CULL_FACE):be(r.CULL_FACE);let F=S.side===1;L&&(F=!F),U(F),S.blending===1&&S.transparent===!1?O(0):O(S.blending,S.blendEquation,S.blendSrc,S.blendDst,S.blendEquationAlpha,S.blendSrcAlpha,S.blendDstAlpha,S.blendColor,S.blendAlpha,S.premultipliedAlpha),n.setFunc(S.depthFunc),n.setTest(S.depthTest),n.setMask(S.depthWrite),t.setMask(S.colorWrite);let ee=S.stencilWrite;i.setTest(ee),ee&&(i.setMask(S.stencilWriteMask),i.setFunc(S.stencilFunc,S.stencilRef,S.stencilFuncMask),i.setOp(S.stencilFail,S.stencilZFail,S.stencilZPass)),I(S.polygonOffset,S.polygonOffsetFactor,S.polygonOffsetUnits),S.alphaToCoverage===!0?be(r.SAMPLE_ALPHA_TO_COVERAGE):de(r.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:U,setCullFace:C,setLineWidth:function(S){S!==N&&(q&&r.lineWidth(S),N=S)},setPolygonOffset:I,setScissorTest:function(S){S?be(r.SCISSOR_TEST):de(r.SCISSOR_TEST)},activeTexture:function(S){S===void 0&&(S=r.TEXTURE0+H-1),$!==S&&(r.activeTexture(S),$=S)},bindTexture:function(S,L,F){F===void 0&&(F=$===null?r.TEXTURE0+H-1:$);let ee=ae[F];ee===void 0&&(ee={type:void 0,texture:void 0},ae[F]=ee),ee.type===S&&ee.texture===L||($!==F&&(r.activeTexture(F),$=F),r.bindTexture(S,L||ge[S]),ee.type=S,ee.texture=L)},unbindTexture:function(){let S=ae[$];S!==void 0&&S.type!==void 0&&(r.bindTexture(S.type,null),S.type=void 0,S.texture=void 0)},compressedTexImage2D:function(){try{r.compressedTexImage2D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},compressedTexImage3D:function(){try{r.compressedTexImage3D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},texImage2D:function(){try{r.texImage2D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},texImage3D:function(){try{r.texImage3D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},updateUBOMapping:function(S,L){let F=a.get(L);F===void 0&&(F=new WeakMap,a.set(L,F));let ee=F.get(S);ee===void 0&&(ee=r.getUniformBlockIndex(L,S.name),F.set(S,ee))},uniformBlockBinding:function(S,L){let F=a.get(L).get(S);s.get(L)!==F&&(r.uniformBlockBinding(L,F,S.__bindingPointIndex),s.set(L,F))},texStorage2D:function(){try{r.texStorage2D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},texStorage3D:function(){try{r.texStorage3D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},texSubImage2D:function(){try{r.texSubImage2D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},texSubImage3D:function(){try{r.texSubImage3D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},compressedTexSubImage2D:function(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},compressedTexSubImage3D:function(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},scissor:function(S){we.equals(S)===!1&&(r.scissor(S.x,S.y,S.z,S.w),we.copy(S))},viewport:function(S){ie.equals(S)===!1&&(r.viewport(S.x,S.y,S.z,S.w),ie.copy(S))},reset:function(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),n.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),o={},$=null,ae={},l={},c=new WeakMap,h=[],u=null,d=!1,p=null,f=null,_=null,m=null,g=null,b=null,v=null,x=new he(0,0,0),R=0,T=!1,P=null,D=null,N=null,z=null,V=null,we.set(0,0,r.canvas.width,r.canvas.height),ie.set(0,0,r.canvas.width,r.canvas.height),t.reset(),n.reset(),i.reset()}}}function Fp(r,e,t,n){let i=(function(s){switch(s){case Li:case wf:return{byteLength:1,components:1};case la:case Tf:case Pn:return{byteLength:2,components:1};case bu:case vu:return{byteLength:2,components:4};case hr:case gu:case An:return{byteLength:4,components:1};case Ef:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)})(n);switch(t){case Af:case Cf:return r*e;case Pf:return r*e*2;case _u:case xu:return r*e/i.components*i.byteLength;case Lf:case yu:return r*e*2/i.components*i.byteLength;case Rf:return r*e*3/i.components*i.byteLength;case Rn:case Mu:return r*e*4/i.components*i.byteLength;case Mo:case So:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case wo:case To:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case jc:case qc:return Math.max(r,16)*Math.max(e,8)/4;case Wc:case Xc:return Math.max(r,8)*Math.max(e,8)/2;case Yc:case Kc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Jc:case Zc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case $c:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Qc:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case eh:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case th:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case nh:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case ih:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case rh:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case sh:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case ah:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case oh:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case lh:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case ch:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case hh:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Eo:case uh:case dh:return Math.ceil(r/4)*Math.ceil(e/4)*16;case If:case ph:return Math.ceil(r/4)*Math.ceil(e/4)*8;case fh:case mh:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function cb(r,e,t,n,i,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),c=new Y,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(A,E){return p?new OffscreenCanvas(A,E):ha("canvas")}function _(A,E,O){let U=1,C=de(A);if((C.width>O||C.height>O)&&(U=O/Math.max(C.width,C.height)),U<1){if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let I=Math.floor(U*C.width),S=Math.floor(U*C.height);u===void 0&&(u=f(I,S));let L=E?f(I,S):u;return L.width=I,L.height=S,L.getContext("2d").drawImage(A,0,0,I,S),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+I+"x"+S+")."),L}return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),A}return A}function m(A){return A.generateMipmaps}function g(A){r.generateMipmap(A)}function b(A){return A.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?r.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function v(A,E,O,U,C=!1){if(A!==null){if(r[A]!==void 0)return r[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let I=E;if(E===r.RED&&(O===r.FLOAT&&(I=r.R32F),O===r.HALF_FLOAT&&(I=r.R16F),O===r.UNSIGNED_BYTE&&(I=r.R8)),E===r.RED_INTEGER&&(O===r.UNSIGNED_BYTE&&(I=r.R8UI),O===r.UNSIGNED_SHORT&&(I=r.R16UI),O===r.UNSIGNED_INT&&(I=r.R32UI),O===r.BYTE&&(I=r.R8I),O===r.SHORT&&(I=r.R16I),O===r.INT&&(I=r.R32I)),E===r.RG&&(O===r.FLOAT&&(I=r.RG32F),O===r.HALF_FLOAT&&(I=r.RG16F),O===r.UNSIGNED_BYTE&&(I=r.RG8)),E===r.RG_INTEGER&&(O===r.UNSIGNED_BYTE&&(I=r.RG8UI),O===r.UNSIGNED_SHORT&&(I=r.RG16UI),O===r.UNSIGNED_INT&&(I=r.RG32UI),O===r.BYTE&&(I=r.RG8I),O===r.SHORT&&(I=r.RG16I),O===r.INT&&(I=r.RG32I)),E===r.RGB_INTEGER&&(O===r.UNSIGNED_BYTE&&(I=r.RGB8UI),O===r.UNSIGNED_SHORT&&(I=r.RGB16UI),O===r.UNSIGNED_INT&&(I=r.RGB32UI),O===r.BYTE&&(I=r.RGB8I),O===r.SHORT&&(I=r.RGB16I),O===r.INT&&(I=r.RGB32I)),E===r.RGBA_INTEGER&&(O===r.UNSIGNED_BYTE&&(I=r.RGBA8UI),O===r.UNSIGNED_SHORT&&(I=r.RGBA16UI),O===r.UNSIGNED_INT&&(I=r.RGBA32UI),O===r.BYTE&&(I=r.RGBA8I),O===r.SHORT&&(I=r.RGBA16I),O===r.INT&&(I=r.RGBA32I)),E===r.RGB&&O===r.UNSIGNED_INT_5_9_9_9_REV&&(I=r.RGB9_E5),E===r.RGBA){let S=C?dl:ke.getTransfer(U);O===r.FLOAT&&(I=r.RGBA32F),O===r.HALF_FLOAT&&(I=r.RGBA16F),O===r.UNSIGNED_BYTE&&(I=S===Ze?r.SRGB8_ALPHA8:r.RGBA8),O===r.UNSIGNED_SHORT_4_4_4_4&&(I=r.RGBA4),O===r.UNSIGNED_SHORT_5_5_5_1&&(I=r.RGB5_A1)}return I!==r.R16F&&I!==r.R32F&&I!==r.RG16F&&I!==r.RG32F&&I!==r.RGBA16F&&I!==r.RGBA32F||e.get("EXT_color_buffer_float"),I}function x(A,E){let O;return A?E===null||E===hr||E===ls?O=r.DEPTH24_STENCIL8:E===An?O=r.DEPTH32F_STENCIL8:E===la&&(O=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===hr||E===ls?O=r.DEPTH_COMPONENT24:E===An?O=r.DEPTH_COMPONENT32F:E===la&&(O=r.DEPTH_COMPONENT16),O}function R(A,E){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Gt&&A.minFilter!==tn?Math.log2(Math.max(E.width,E.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?E.mipmaps.length:1}function T(A){let E=A.target;E.removeEventListener("dispose",T),(function(O){let U=n.get(O);if(U.__webglInit===void 0)return;let C=O.source,I=d.get(C);if(I){let S=I[U.__cacheKey];S.usedTimes--,S.usedTimes===0&&D(O),Object.keys(I).length===0&&d.delete(C)}n.remove(O)})(E),E.isVideoTexture&&h.delete(E)}function P(A){let E=A.target;E.removeEventListener("dispose",P),(function(O){let U=n.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),n.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let I=0;I<6;I++){if(Array.isArray(U.__webglFramebuffer[I]))for(let S=0;S<U.__webglFramebuffer[I].length;S++)r.deleteFramebuffer(U.__webglFramebuffer[I][S]);else r.deleteFramebuffer(U.__webglFramebuffer[I]);U.__webglDepthbuffer&&r.deleteRenderbuffer(U.__webglDepthbuffer[I])}else{if(Array.isArray(U.__webglFramebuffer))for(let I=0;I<U.__webglFramebuffer.length;I++)r.deleteFramebuffer(U.__webglFramebuffer[I]);else r.deleteFramebuffer(U.__webglFramebuffer);if(U.__webglDepthbuffer&&r.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&r.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let I=0;I<U.__webglColorRenderbuffer.length;I++)U.__webglColorRenderbuffer[I]&&r.deleteRenderbuffer(U.__webglColorRenderbuffer[I]);U.__webglDepthRenderbuffer&&r.deleteRenderbuffer(U.__webglDepthRenderbuffer)}let C=O.textures;for(let I=0,S=C.length;I<S;I++){let L=n.get(C[I]);L.__webglTexture&&(r.deleteTexture(L.__webglTexture),a.memory.textures--),n.remove(C[I])}n.remove(O)})(E)}function D(A){let E=n.get(A);r.deleteTexture(E.__webglTexture);let O=A.source;delete d.get(O)[E.__cacheKey],a.memory.textures--}let N=0;function z(A,E){let O=n.get(A);if(A.isVideoTexture&&(function(U){let C=a.render.frame;h.get(U)!==C&&(h.set(U,C),U.update())})(A),A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){let U=A.image;if(U===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(U.complete!==!1)return void $(O,A,E);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}t.bindTexture(r.TEXTURE_2D,O.__webglTexture,r.TEXTURE0+E)}let V={[ri]:r.REPEAT,[cr]:r.CLAMP_TO_EDGE,[oa]:r.MIRRORED_REPEAT},H={[Gt]:r.NEAREST,[mu]:r.NEAREST_MIPMAP_NEAREST,[Qr]:r.NEAREST_MIPMAP_LINEAR,[tn]:r.LINEAR,[na]:r.LINEAR_MIPMAP_NEAREST,[ni]:r.LINEAR_MIPMAP_LINEAR},q={[bg]:r.NEVER,[wg]:r.ALWAYS,[vg]:r.LESS,[xg]:r.LEQUAL,[_g]:r.EQUAL,[Sg]:r.GEQUAL,[yg]:r.GREATER,[Mg]:r.NOTEQUAL};function W(A,E){if(E.type!==An||e.has("OES_texture_float_linear")!==!1||E.magFilter!==tn&&E.magFilter!==na&&E.magFilter!==Qr&&E.magFilter!==ni&&E.minFilter!==tn&&E.minFilter!==na&&E.minFilter!==Qr&&E.minFilter!==ni||console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(A,r.TEXTURE_WRAP_S,V[E.wrapS]),r.texParameteri(A,r.TEXTURE_WRAP_T,V[E.wrapT]),A!==r.TEXTURE_3D&&A!==r.TEXTURE_2D_ARRAY||r.texParameteri(A,r.TEXTURE_WRAP_R,V[E.wrapR]),r.texParameteri(A,r.TEXTURE_MAG_FILTER,H[E.magFilter]),r.texParameteri(A,r.TEXTURE_MIN_FILTER,H[E.minFilter]),E.compareFunction&&(r.texParameteri(A,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(A,r.TEXTURE_COMPARE_FUNC,q[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Gt||E.minFilter!==Qr&&E.minFilter!==ni||E.type===An&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let O=e.get("EXT_texture_filter_anisotropic");r.texParameterf(A,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function J(A,E){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,E.addEventListener("dispose",T));let U=E.source,C=d.get(U);C===void 0&&(C={},d.set(U,C));let I=(function(S){let L=[];return L.push(S.wrapS),L.push(S.wrapT),L.push(S.wrapR||0),L.push(S.magFilter),L.push(S.minFilter),L.push(S.anisotropy),L.push(S.internalFormat),L.push(S.format),L.push(S.type),L.push(S.generateMipmaps),L.push(S.premultiplyAlpha),L.push(S.flipY),L.push(S.unpackAlignment),L.push(S.colorSpace),L.join()})(E);if(I!==A.__cacheKey){C[I]===void 0&&(C[I]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,O=!0),C[I].usedTimes++;let S=C[A.__cacheKey];S!==void 0&&(C[A.__cacheKey].usedTimes--,S.usedTimes===0&&D(E)),A.__cacheKey=I,A.__webglTexture=C[I].texture}return O}function $(A,E,O){let U=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(U=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(U=r.TEXTURE_3D);let C=J(A,E),I=E.source;t.bindTexture(U,A.__webglTexture,r.TEXTURE0+O);let S=n.get(I);if(I.version!==S.__version||C===!0){t.activeTexture(r.TEXTURE0+O);let L=ke.getPrimaries(ke.workingColorSpace),F=E.colorSpace===$r?null:ke.getPrimaries(E.colorSpace),ee=E.colorSpace===$r||L===F?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let k=_(E.image,!1,i.maxTextureSize);k=be(E,k);let Z=s.convert(E.format,E.colorSpace),K=s.convert(E.type),ne,fe=v(E.internalFormat,Z,K,E.colorSpace,E.isVideoTexture);W(U,E);let pe=E.mipmaps,Me=E.isVideoTexture!==!0,Ce=S.__version===void 0||C===!0,je=I.dataReady,Fe=R(E,k);if(E.isDepthTexture)fe=x(E.format===cs,E.type),Ce&&(Me?t.texStorage2D(r.TEXTURE_2D,1,fe,k.width,k.height):t.texImage2D(r.TEXTURE_2D,0,fe,k.width,k.height,0,Z,K,null));else if(E.isDataTexture)if(pe.length>0){Me&&Ce&&t.texStorage2D(r.TEXTURE_2D,Fe,fe,pe[0].width,pe[0].height);for(let Se=0,Ke=pe.length;Se<Ke;Se++)ne=pe[Se],Me?je&&t.texSubImage2D(r.TEXTURE_2D,Se,0,0,ne.width,ne.height,Z,K,ne.data):t.texImage2D(r.TEXTURE_2D,Se,fe,ne.width,ne.height,0,Z,K,ne.data);E.generateMipmaps=!1}else Me?(Ce&&t.texStorage2D(r.TEXTURE_2D,Fe,fe,k.width,k.height),je&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,k.width,k.height,Z,K,k.data)):t.texImage2D(r.TEXTURE_2D,0,fe,k.width,k.height,0,Z,K,k.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Me&&Ce&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Fe,fe,pe[0].width,pe[0].height,k.depth);for(let Se=0,Ke=pe.length;Se<Ke;Se++)if(ne=pe[Se],E.format!==Rn)if(Z!==null)if(Me){if(je)if(E.layerUpdates.size>0){let it=Fp(ne.width,ne.height,E.format,E.type);for(let pt of E.layerUpdates){let ve=ne.data.subarray(pt*it/ne.data.BYTES_PER_ELEMENT,(pt+1)*it/ne.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Se,0,0,pt,ne.width,ne.height,1,Z,ve)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Se,0,0,0,ne.width,ne.height,k.depth,Z,ne.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Se,fe,ne.width,ne.height,k.depth,0,ne.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Me?je&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,Se,0,0,0,ne.width,ne.height,k.depth,Z,K,ne.data):t.texImage3D(r.TEXTURE_2D_ARRAY,Se,fe,ne.width,ne.height,k.depth,0,Z,K,ne.data)}else{Me&&Ce&&t.texStorage2D(r.TEXTURE_2D,Fe,fe,pe[0].width,pe[0].height);for(let Se=0,Ke=pe.length;Se<Ke;Se++)ne=pe[Se],E.format!==Rn?Z!==null?Me?je&&t.compressedTexSubImage2D(r.TEXTURE_2D,Se,0,0,ne.width,ne.height,Z,ne.data):t.compressedTexImage2D(r.TEXTURE_2D,Se,fe,ne.width,ne.height,0,ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Me?je&&t.texSubImage2D(r.TEXTURE_2D,Se,0,0,ne.width,ne.height,Z,K,ne.data):t.texImage2D(r.TEXTURE_2D,Se,fe,ne.width,ne.height,0,Z,K,ne.data)}else if(E.isDataArrayTexture)if(Me){if(Ce&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Fe,fe,k.width,k.height,k.depth),je)if(E.layerUpdates.size>0){let Se=Fp(k.width,k.height,E.format,E.type);for(let Ke of E.layerUpdates){let it=k.data.subarray(Ke*Se/k.data.BYTES_PER_ELEMENT,(Ke+1)*Se/k.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Ke,k.width,k.height,1,Z,K,it)}E.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,k.width,k.height,k.depth,Z,K,k.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,fe,k.width,k.height,k.depth,0,Z,K,k.data);else if(E.isData3DTexture)Me?(Ce&&t.texStorage3D(r.TEXTURE_3D,Fe,fe,k.width,k.height,k.depth),je&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,k.width,k.height,k.depth,Z,K,k.data)):t.texImage3D(r.TEXTURE_3D,0,fe,k.width,k.height,k.depth,0,Z,K,k.data);else if(E.isFramebufferTexture){if(Ce)if(Me)t.texStorage2D(r.TEXTURE_2D,Fe,fe,k.width,k.height);else{let Se=k.width,Ke=k.height;for(let it=0;it<Fe;it++)t.texImage2D(r.TEXTURE_2D,it,fe,Se,Ke,0,Z,K,null),Se>>=1,Ke>>=1}}else if(pe.length>0){if(Me&&Ce){let Se=de(pe[0]);t.texStorage2D(r.TEXTURE_2D,Fe,fe,Se.width,Se.height)}for(let Se=0,Ke=pe.length;Se<Ke;Se++)ne=pe[Se],Me?je&&t.texSubImage2D(r.TEXTURE_2D,Se,0,0,Z,K,ne):t.texImage2D(r.TEXTURE_2D,Se,fe,Z,K,ne);E.generateMipmaps=!1}else if(Me){if(Ce){let Se=de(k);t.texStorage2D(r.TEXTURE_2D,Fe,fe,Se.width,Se.height)}je&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Z,K,k)}else t.texImage2D(r.TEXTURE_2D,0,fe,Z,K,k);m(E)&&g(U),S.__version=I.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function ae(A,E,O,U,C,I){let S=s.convert(O.format,O.colorSpace),L=s.convert(O.type),F=v(O.internalFormat,S,L,O.colorSpace),ee=n.get(E),k=n.get(O);if(k.__renderTarget=E,!ee.__hasExternalTextures){let Z=Math.max(1,E.width>>I),K=Math.max(1,E.height>>I);C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY?t.texImage3D(C,I,F,Z,K,E.depth,0,S,L,null):t.texImage2D(C,I,F,Z,K,0,S,L,null)}t.bindFramebuffer(r.FRAMEBUFFER,A),ge(E)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,U,C,k.__webglTexture,0,ce(E)):(C===r.TEXTURE_2D||C>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&C<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,U,C,k.__webglTexture,I),t.bindFramebuffer(r.FRAMEBUFFER,null)}function re(A,E,O){if(r.bindRenderbuffer(r.RENDERBUFFER,A),E.depthBuffer){let U=E.depthTexture,C=U&&U.isDepthTexture?U.type:null,I=x(E.stencilBuffer,C),S=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,L=ce(E);ge(E)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,L,I,E.width,E.height):O?r.renderbufferStorageMultisample(r.RENDERBUFFER,L,I,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,I,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,S,r.RENDERBUFFER,A)}else{let U=E.textures;for(let C=0;C<U.length;C++){let I=U[C],S=s.convert(I.format,I.colorSpace),L=s.convert(I.type),F=v(I.internalFormat,S,L,I.colorSpace),ee=ce(E);O&&ge(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ee,F,E.width,E.height):ge(E)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ee,F,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,F,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function _e(A){let E=n.get(A),O=A.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==A.depthTexture){let U=A.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),U){let C=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,U.removeEventListener("dispose",C)};U.addEventListener("dispose",C),E.__depthDisposeCallback=C}E.__boundDepthTexture=U}if(A.depthTexture&&!E.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");(function(U,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,U),!C.depthTexture||!C.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let I=n.get(C.depthTexture);I.__renderTarget=C,I.__webglTexture&&C.depthTexture.image.width===C.width&&C.depthTexture.image.height===C.height||(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),z(C.depthTexture,0);let S=I.__webglTexture,L=ce(C);if(C.depthTexture.format===ca)ge(C)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,S,0,L):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,S,0);else{if(C.depthTexture.format!==cs)throw new Error("Unknown depthTexture format");ge(C)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,S,0,L):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,S,0)}})(E.__webglFramebuffer,A)}else if(O){E.__webglDepthbuffer=[];for(let U=0;U<6;U++)if(t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[U]),E.__webglDepthbuffer[U]===void 0)E.__webglDepthbuffer[U]=r.createRenderbuffer(),re(E.__webglDepthbuffer[U],A,!1);else{let C=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,I=E.__webglDepthbuffer[U];r.bindRenderbuffer(r.RENDERBUFFER,I),r.framebufferRenderbuffer(r.FRAMEBUFFER,C,r.RENDERBUFFER,I)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),re(E.__webglDepthbuffer,A,!1);else{let U=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,C=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,C),r.framebufferRenderbuffer(r.FRAMEBUFFER,U,r.RENDERBUFFER,C)}t.bindFramebuffer(r.FRAMEBUFFER,null)}let we=[],ie=[];function ce(A){return Math.min(i.maxSamples,A.samples)}function ge(A){let E=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function be(A,E){let O=A.colorSpace,U=A.format,C=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||O!==Vt&&O!==$r&&(ke.getTransfer(O)===Ze?U===Rn&&C===Li||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),E}function de(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=function(){let A=N;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),N+=1,A},this.resetTextureUnits=function(){N=0},this.setTexture2D=z,this.setTexture2DArray=function(A,E){let O=n.get(A);A.version>0&&O.__version!==A.version?$(O,A,E):t.bindTexture(r.TEXTURE_2D_ARRAY,O.__webglTexture,r.TEXTURE0+E)},this.setTexture3D=function(A,E){let O=n.get(A);A.version>0&&O.__version!==A.version?$(O,A,E):t.bindTexture(r.TEXTURE_3D,O.__webglTexture,r.TEXTURE0+E)},this.setTextureCube=function(A,E){let O=n.get(A);A.version>0&&O.__version!==A.version?(function(U,C,I){if(C.image.length!==6)return;let S=J(U,C),L=C.source;t.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture,r.TEXTURE0+I);let F=n.get(L);if(L.version!==F.__version||S===!0){t.activeTexture(r.TEXTURE0+I);let ee=ke.getPrimaries(ke.workingColorSpace),k=C.colorSpace===$r?null:ke.getPrimaries(C.colorSpace),Z=C.colorSpace===$r||ee===k?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,C.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,C.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);let K=C.isCompressedTexture||C.image[0].isCompressedTexture,ne=C.image[0]&&C.image[0].isDataTexture,fe=[];for(let ve=0;ve<6;ve++)fe[ve]=K||ne?ne?C.image[ve].image:C.image[ve]:_(C.image[ve],!0,i.maxCubemapSize),fe[ve]=be(C,fe[ve]);let pe=fe[0],Me=s.convert(C.format,C.colorSpace),Ce=s.convert(C.type),je=v(C.internalFormat,Me,Ce,C.colorSpace),Fe=C.isVideoTexture!==!0,Se=F.__version===void 0||S===!0,Ke=L.dataReady,it,pt=R(C,pe);if(W(r.TEXTURE_CUBE_MAP,C),K){Fe&&Se&&t.texStorage2D(r.TEXTURE_CUBE_MAP,pt,je,pe.width,pe.height);for(let ve=0;ve<6;ve++){it=fe[ve].mipmaps;for(let He=0;He<it.length;He++){let et=it[He];C.format!==Rn?Me!==null?Fe?Ke&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,He,0,0,et.width,et.height,Me,et.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,He,je,et.width,et.height,0,et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?Ke&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,He,0,0,et.width,et.height,Me,Ce,et.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,He,je,et.width,et.height,0,Me,Ce,et.data)}}}else{if(it=C.mipmaps,Fe&&Se){it.length>0&&pt++;let ve=de(fe[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,pt,je,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(ne){Fe?Ke&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,fe[ve].width,fe[ve].height,Me,Ce,fe[ve].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,je,fe[ve].width,fe[ve].height,0,Me,Ce,fe[ve].data);for(let He=0;He<it.length;He++){let et=it[He].image[ve].image;Fe?Ke&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,He+1,0,0,et.width,et.height,Me,Ce,et.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,He+1,je,et.width,et.height,0,Me,Ce,et.data)}}else{Fe?Ke&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Me,Ce,fe[ve]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,je,Me,Ce,fe[ve]);for(let He=0;He<it.length;He++){let et=it[He];Fe?Ke&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,He+1,0,0,Me,Ce,et.image[ve]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,He+1,je,Me,Ce,et.image[ve])}}}m(C)&&g(r.TEXTURE_CUBE_MAP),F.__version=L.version,C.onUpdate&&C.onUpdate(C)}U.__version=C.version})(O,A,E):t.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+E)},this.rebindTextures=function(A,E,O){let U=n.get(A);E!==void 0&&ae(U.__webglFramebuffer,A,A.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),O!==void 0&&_e(A)},this.setupRenderTarget=function(A){let E=A.texture,O=n.get(A),U=n.get(E);A.addEventListener("dispose",P);let C=A.textures,I=A.isWebGLCubeRenderTarget===!0,S=C.length>1;if(S||(U.__webglTexture===void 0&&(U.__webglTexture=r.createTexture()),U.__version=E.version,a.memory.textures++),I){O.__webglFramebuffer=[];for(let L=0;L<6;L++)if(E.mipmaps&&E.mipmaps.length>0){O.__webglFramebuffer[L]=[];for(let F=0;F<E.mipmaps.length;F++)O.__webglFramebuffer[L][F]=r.createFramebuffer()}else O.__webglFramebuffer[L]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){O.__webglFramebuffer=[];for(let L=0;L<E.mipmaps.length;L++)O.__webglFramebuffer[L]=r.createFramebuffer()}else O.__webglFramebuffer=r.createFramebuffer();if(S)for(let L=0,F=C.length;L<F;L++){let ee=n.get(C[L]);ee.__webglTexture===void 0&&(ee.__webglTexture=r.createTexture(),a.memory.textures++)}if(A.samples>0&&ge(A)===!1){O.__webglMultisampledFramebuffer=r.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let L=0;L<C.length;L++){let F=C[L];O.__webglColorRenderbuffer[L]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,O.__webglColorRenderbuffer[L]);let ee=s.convert(F.format,F.colorSpace),k=s.convert(F.type),Z=v(F.internalFormat,ee,k,F.colorSpace,A.isXRRenderTarget===!0),K=ce(A);r.renderbufferStorageMultisample(r.RENDERBUFFER,K,Z,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+L,r.RENDERBUFFER,O.__webglColorRenderbuffer[L])}r.bindRenderbuffer(r.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=r.createRenderbuffer(),re(O.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(I){t.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture),W(r.TEXTURE_CUBE_MAP,E);for(let L=0;L<6;L++)if(E.mipmaps&&E.mipmaps.length>0)for(let F=0;F<E.mipmaps.length;F++)ae(O.__webglFramebuffer[L][F],A,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+L,F);else ae(O.__webglFramebuffer[L],A,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+L,0);m(E)&&g(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(S){for(let L=0,F=C.length;L<F;L++){let ee=C[L],k=n.get(ee);t.bindTexture(r.TEXTURE_2D,k.__webglTexture),W(r.TEXTURE_2D,ee),ae(O.__webglFramebuffer,A,ee,r.COLOR_ATTACHMENT0+L,r.TEXTURE_2D,0),m(ee)&&g(r.TEXTURE_2D)}t.unbindTexture()}else{let L=r.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(L=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(L,U.__webglTexture),W(L,E),E.mipmaps&&E.mipmaps.length>0)for(let F=0;F<E.mipmaps.length;F++)ae(O.__webglFramebuffer[F],A,E,r.COLOR_ATTACHMENT0,L,F);else ae(O.__webglFramebuffer,A,E,r.COLOR_ATTACHMENT0,L,0);m(E)&&g(L),t.unbindTexture()}A.depthBuffer&&_e(A)},this.updateRenderTargetMipmap=function(A){let E=A.textures;for(let O=0,U=E.length;O<U;O++){let C=E[O];if(m(C)){let I=b(A),S=n.get(C).__webglTexture;t.bindTexture(I,S),g(I),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(A){if(A.samples>0){if(ge(A)===!1){let E=A.textures,O=A.width,U=A.height,C=r.COLOR_BUFFER_BIT,I=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,S=n.get(A),L=E.length>1;if(L)for(let F=0;F<E.length;F++)t.bindFramebuffer(r.FRAMEBUFFER,S.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+F,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+F,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,S.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,S.__webglFramebuffer);for(let F=0;F<E.length;F++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(C|=r.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(C|=r.STENCIL_BUFFER_BIT)),L){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,S.__webglColorRenderbuffer[F]);let ee=n.get(E[F]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ee,0)}r.blitFramebuffer(0,0,O,U,0,0,O,U,C,r.NEAREST),l===!0&&(we.length=0,ie.length=0,we.push(r.COLOR_ATTACHMENT0+F),A.depthBuffer&&A.resolveDepthBuffer===!1&&(we.push(I),ie.push(I),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ie)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,we))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),L)for(let F=0;F<E.length;F++){t.bindFramebuffer(r.FRAMEBUFFER,S.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+F,r.RENDERBUFFER,S.__webglColorRenderbuffer[F]);let ee=n.get(E[F]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+F,r.TEXTURE_2D,ee,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,S.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let E=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}},this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=ge}function hb(r,e){return{convert:function(t,n=""){let i,s=ke.getTransfer(n);if(t===Li)return r.UNSIGNED_BYTE;if(t===bu)return r.UNSIGNED_SHORT_4_4_4_4;if(t===vu)return r.UNSIGNED_SHORT_5_5_5_1;if(t===Ef)return r.UNSIGNED_INT_5_9_9_9_REV;if(t===wf)return r.BYTE;if(t===Tf)return r.SHORT;if(t===la)return r.UNSIGNED_SHORT;if(t===gu)return r.INT;if(t===hr)return r.UNSIGNED_INT;if(t===An)return r.FLOAT;if(t===Pn)return r.HALF_FLOAT;if(t===Af)return r.ALPHA;if(t===Rf)return r.RGB;if(t===Rn)return r.RGBA;if(t===Cf)return r.LUMINANCE;if(t===Pf)return r.LUMINANCE_ALPHA;if(t===ca)return r.DEPTH_COMPONENT;if(t===cs)return r.DEPTH_STENCIL;if(t===_u)return r.RED;if(t===xu)return r.RED_INTEGER;if(t===Lf)return r.RG;if(t===yu)return r.RG_INTEGER;if(t===Mu)return r.RGBA_INTEGER;if(t===Mo||t===So||t===wo||t===To)if(s===Ze){if(i=e.get("WEBGL_compressed_texture_s3tc_srgb"),i===null)return null;if(t===Mo)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(t===So)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(t===wo)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(t===To)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(i=e.get("WEBGL_compressed_texture_s3tc"),i===null)return null;if(t===Mo)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(t===So)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(t===wo)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(t===To)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(t===Wc||t===jc||t===Xc||t===qc){if(i=e.get("WEBGL_compressed_texture_pvrtc"),i===null)return null;if(t===Wc)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(t===jc)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(t===Xc)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(t===qc)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(t===Yc||t===Kc||t===Jc){if(i=e.get("WEBGL_compressed_texture_etc"),i===null)return null;if(t===Yc||t===Kc)return s===Ze?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(t===Jc)return s===Ze?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}if(t===Zc||t===$c||t===Qc||t===eh||t===th||t===nh||t===ih||t===rh||t===sh||t===ah||t===oh||t===lh||t===ch||t===hh){if(i=e.get("WEBGL_compressed_texture_astc"),i===null)return null;if(t===Zc)return s===Ze?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(t===$c)return s===Ze?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(t===Qc)return s===Ze?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(t===eh)return s===Ze?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(t===th)return s===Ze?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(t===nh)return s===Ze?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(t===ih)return s===Ze?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(t===rh)return s===Ze?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(t===sh)return s===Ze?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(t===ah)return s===Ze?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(t===oh)return s===Ze?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(t===lh)return s===Ze?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(t===ch)return s===Ze?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(t===hh)return s===Ze?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}if(t===Eo||t===uh||t===dh){if(i=e.get("EXT_texture_compression_bptc"),i===null)return null;if(t===Eo)return s===Ze?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(t===uh)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(t===dh)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(t===If||t===ph||t===fh||t===mh){if(i=e.get("EXT_texture_compression_rgtc"),i===null)return null;if(t===Eo)return i.COMPRESSED_RED_RGTC1_EXT;if(t===ph)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(t===fh)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(t===mh)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return t===ls?r.UNSIGNED_INT_24_8:r[t]!==void 0?r[t]:null}}}var Lh=class extends Et{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},nn=class extends ct{constructor(){super(),this.isGroup=!0,this.type="Group"}},ub={type:"move"},ra=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new M,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new M),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new M,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new M),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),g=this._getHandJoint(c,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,f=.005;c.inputState.pinching&&d>p+f?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-f&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ub)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new nn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Ih=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let i=new Ut;e.properties.get(i).__webglTexture=t.texture,t.depthNear==n.depthNear&&t.depthFar==n.depthFar||(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Rt({vertexShader:`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fragmentShader:`
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

}`,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new qe(new dr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Dh=class extends si{constructor(e,t){super();let n=this,i=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,f=null,_=new Ih,m=t.getContextAttributes(),g=null,b=null,v=[],x=[],R=new Y,T=null,P=new Et;P.viewport=new Je;let D=new Et;D.viewport=new Je;let N=[P,D],z=new Lh,V=null,H=null;function q(ie){let ce=x.indexOf(ie.inputSource);if(ce===-1)return;let ge=v[ce];ge!==void 0&&(ge.update(ie.inputSource,ie.frame,c||a),ge.dispatchEvent({type:ie.type,data:ie.inputSource}))}function W(){i.removeEventListener("select",q),i.removeEventListener("selectstart",q),i.removeEventListener("selectend",q),i.removeEventListener("squeeze",q),i.removeEventListener("squeezestart",q),i.removeEventListener("squeezeend",q),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",J);for(let ie=0;ie<v.length;ie++){let ce=x[ie];ce!==null&&(x[ie]=null,v[ie].disconnect(ce))}V=null,H=null,_.reset(),e.setRenderTarget(g),p=null,d=null,u=null,i=null,b=null,we.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}function J(ie){for(let ce=0;ce<ie.removed.length;ce++){let ge=ie.removed[ce],be=x.indexOf(ge);be>=0&&(x[be]=null,v[be].disconnect(ge))}for(let ce=0;ce<ie.added.length;ce++){let ge=ie.added[ce],be=x.indexOf(ge);if(be===-1){for(let A=0;A<v.length;A++){if(A>=x.length){x.push(ge),be=A;break}if(x[A]===null){x[A]=ge,be=A;break}}if(be===-1)break}let de=v[be];de&&de.connect(ge)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let ce=v[ie];return ce===void 0&&(ce=new ra,v[ie]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(ie){let ce=v[ie];return ce===void 0&&(ce=new ra,v[ie]=ce),ce.getGripSpace()},this.getHand=function(ie){let ce=v[ie];return ce===void 0&&(ce=new ra,v[ie]=ce),ce.getHandSpace()},this.setFramebufferScaleFactor=function(ie){s=ie,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){o=ie,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ie){c=ie},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return f},this.getSession=function(){return i},this.setSession=async function(ie){if(i=ie,i!==null){if(g=e.getRenderTarget(),i.addEventListener("select",q),i.addEventListener("selectstart",q),i.addEventListener("selectend",q),i.addEventListener("squeeze",q),i.addEventListener("squeezestart",q),i.addEventListener("squeezeend",q),i.addEventListener("end",W),i.addEventListener("inputsourceschange",J),m.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(R),i.renderState.layers===void 0){let ce={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,t,ce),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new Yt(p.framebufferWidth,p.framebufferHeight,{format:Rn,type:Li,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ce=null,ge=null,be=null;m.depth&&(be=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=m.stencil?cs:ca,ge=m.stencil?ls:hr);let de={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:s};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(de),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new Yt(d.textureWidth,d.textureHeight,{format:Rn,type:Li,depthTexture:new No(d.textureWidth,d.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),we.setContext(i),we.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};let $=new M,ae=new M;function re(ie,ce){ce===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(ce.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(i===null)return;let ce=ie.near,ge=ie.far;_.texture!==null&&(_.depthNear>0&&(ce=_.depthNear),_.depthFar>0&&(ge=_.depthFar)),z.near=D.near=P.near=ce,z.far=D.far=P.far=ge,V===z.near&&H===z.far||(i.updateRenderState({depthNear:z.near,depthFar:z.far}),V=z.near,H=z.far),P.layers.mask=2|ie.layers.mask,D.layers.mask=4|ie.layers.mask,z.layers.mask=P.layers.mask|D.layers.mask;let be=ie.parent,de=z.cameras;re(z,be);for(let A=0;A<de.length;A++)re(de[A],be);de.length===2?(function(A,E,O){$.setFromMatrixPosition(E.matrixWorld),ae.setFromMatrixPosition(O.matrixWorld);let U=$.distanceTo(ae),C=E.projectionMatrix.elements,I=O.projectionMatrix.elements,S=C[14]/(C[10]-1),L=C[14]/(C[10]+1),F=(C[9]+1)/C[5],ee=(C[9]-1)/C[5],k=(C[8]-1)/C[0],Z=(I[8]+1)/I[0],K=S*k,ne=S*Z,fe=U/(-k+Z),pe=fe*-k;if(E.matrixWorld.decompose(A.position,A.quaternion,A.scale),A.translateX(pe),A.translateZ(fe),A.matrixWorld.compose(A.position,A.quaternion,A.scale),A.matrixWorldInverse.copy(A.matrixWorld).invert(),C[10]===-1)A.projectionMatrix.copy(E.projectionMatrix),A.projectionMatrixInverse.copy(E.projectionMatrixInverse);else{let Me=S+fe,Ce=L+fe,je=K-pe,Fe=ne+(U-pe),Se=F*L/Ce*Me,Ke=ee*L/Ce*Me;A.projectionMatrix.makePerspective(je,Fe,Se,Ke,Me,Ce),A.projectionMatrixInverse.copy(A.projectionMatrix).invert()}})(z,P,D):z.projectionMatrix.copy(P.projectionMatrix),(function(A,E,O){O===null?A.matrix.copy(E.matrixWorld):(A.matrix.copy(O.matrixWorld),A.matrix.invert(),A.matrix.multiply(E.matrixWorld)),A.matrix.decompose(A.position,A.quaternion,A.scale),A.updateMatrixWorld(!0),A.projectionMatrix.copy(E.projectionMatrix),A.projectionMatrixInverse.copy(E.projectionMatrixInverse),A.isPerspectiveCamera&&(A.fov=2*ps*Math.atan(1/A.projectionMatrix.elements[5]),A.zoom=1)})(ie,z,be)},this.getCamera=function(){return z},this.getFoveation=function(){if(d!==null||p!==null)return l},this.setFoveation=function(ie){l=ie,d!==null&&(d.fixedFoveation=ie),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ie)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(z)};let _e=null,we=new Ff;we.setAnimationLoop((function(ie,ce){if(h=ce.getViewerPose(c||a),f=ce,h!==null){let ge=h.views;p!==null&&(e.setRenderTargetFramebuffer(b,p.framebuffer),e.setRenderTarget(b));let be=!1;ge.length!==z.cameras.length&&(z.cameras.length=0,be=!0);for(let A=0;A<ge.length;A++){let E=ge[A],O=null;if(p!==null)O=p.getViewport(E);else{let C=u.getViewSubImage(d,E);O=C.viewport,A===0&&(e.setRenderTargetTextures(b,C.colorTexture,d.ignoreDepthValues?void 0:C.depthStencilTexture),e.setRenderTarget(b))}let U=N[A];U===void 0&&(U=new Et,U.layers.enable(A),U.viewport=new Je,N[A]=U),U.matrix.fromArray(E.transform.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale),U.projectionMatrix.fromArray(E.projectionMatrix),U.projectionMatrixInverse.copy(U.projectionMatrix).invert(),U.viewport.set(O.x,O.y,O.width,O.height),A===0&&(z.matrix.copy(U.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),be===!0&&z.cameras.push(U)}let de=i.enabledFeatures;if(de&&de.includes("depth-sensing")){let A=u.getDepthInformation(ge[0]);A&&A.isValid&&A.texture&&_.init(e,A,i.renderState)}}for(let ge=0;ge<v.length;ge++){let be=x[ge],de=v[ge];be!==null&&de!==void 0&&de.update(be,ce,c||a)}_e&&_e(ie,ce),ce.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ce}),f=null})),this.setAnimationLoop=function(ie){_e=ie},this.dispose=function(){}}},ar=new Cn,db=new Te;function pb(r,e){function t(i,s){i.matrixAutoUpdate===!0&&i.updateMatrix(),s.value.copy(i.matrix)}function n(i,s){i.opacity.value=s.opacity,s.color&&i.diffuse.value.copy(s.color),s.emissive&&i.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(i.map.value=s.map,t(s.map,i.mapTransform)),s.alphaMap&&(i.alphaMap.value=s.alphaMap,t(s.alphaMap,i.alphaMapTransform)),s.bumpMap&&(i.bumpMap.value=s.bumpMap,t(s.bumpMap,i.bumpMapTransform),i.bumpScale.value=s.bumpScale,s.side===1&&(i.bumpScale.value*=-1)),s.normalMap&&(i.normalMap.value=s.normalMap,t(s.normalMap,i.normalMapTransform),i.normalScale.value.copy(s.normalScale),s.side===1&&i.normalScale.value.negate()),s.displacementMap&&(i.displacementMap.value=s.displacementMap,t(s.displacementMap,i.displacementMapTransform),i.displacementScale.value=s.displacementScale,i.displacementBias.value=s.displacementBias),s.emissiveMap&&(i.emissiveMap.value=s.emissiveMap,t(s.emissiveMap,i.emissiveMapTransform)),s.specularMap&&(i.specularMap.value=s.specularMap,t(s.specularMap,i.specularMapTransform)),s.alphaTest>0&&(i.alphaTest.value=s.alphaTest);let a=e.get(s),o=a.envMap,l=a.envMapRotation;o&&(i.envMap.value=o,ar.copy(l),ar.x*=-1,ar.y*=-1,ar.z*=-1,o.isCubeTexture&&o.isRenderTargetTexture===!1&&(ar.y*=-1,ar.z*=-1),i.envMapRotation.value.setFromMatrix4(db.makeRotationFromEuler(ar)),i.flipEnvMap.value=o.isCubeTexture&&o.isRenderTargetTexture===!1?-1:1,i.reflectivity.value=s.reflectivity,i.ior.value=s.ior,i.refractionRatio.value=s.refractionRatio),s.lightMap&&(i.lightMap.value=s.lightMap,i.lightMapIntensity.value=s.lightMapIntensity,t(s.lightMap,i.lightMapTransform)),s.aoMap&&(i.aoMap.value=s.aoMap,i.aoMapIntensity.value=s.aoMapIntensity,t(s.aoMap,i.aoMapTransform))}return{refreshFogUniforms:function(i,s){s.color.getRGB(i.fogColor.value,kf(r)),s.isFog?(i.fogNear.value=s.near,i.fogFar.value=s.far):s.isFogExp2&&(i.fogDensity.value=s.density)},refreshMaterialUniforms:function(i,s,a,o,l){s.isMeshBasicMaterial||s.isMeshLambertMaterial?n(i,s):s.isMeshToonMaterial?(n(i,s),(function(c,h){h.gradientMap&&(c.gradientMap.value=h.gradientMap)})(i,s)):s.isMeshPhongMaterial?(n(i,s),(function(c,h){c.specular.value.copy(h.specular),c.shininess.value=Math.max(h.shininess,1e-4)})(i,s)):s.isMeshStandardMaterial?(n(i,s),(function(c,h){c.metalness.value=h.metalness,h.metalnessMap&&(c.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,c.metalnessMapTransform)),c.roughness.value=h.roughness,h.roughnessMap&&(c.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,c.roughnessMapTransform)),h.envMap&&(c.envMapIntensity.value=h.envMapIntensity)})(i,s),s.isMeshPhysicalMaterial&&(function(c,h,u){c.ior.value=h.ior,h.sheen>0&&(c.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),c.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(c.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,c.sheenColorMapTransform)),h.sheenRoughnessMap&&(c.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,c.sheenRoughnessMapTransform))),h.clearcoat>0&&(c.clearcoat.value=h.clearcoat,c.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(c.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,c.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(c.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===1&&c.clearcoatNormalScale.value.negate())),h.dispersion>0&&(c.dispersion.value=h.dispersion),h.iridescence>0&&(c.iridescence.value=h.iridescence,c.iridescenceIOR.value=h.iridescenceIOR,c.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(c.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,c.iridescenceMapTransform)),h.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),h.transmission>0&&(c.transmission.value=h.transmission,c.transmissionSamplerMap.value=u.texture,c.transmissionSamplerSize.value.set(u.width,u.height),h.transmissionMap&&(c.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,c.transmissionMapTransform)),c.thickness.value=h.thickness,h.thicknessMap&&(c.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=h.attenuationDistance,c.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(c.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(c.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=h.specularIntensity,c.specularColor.value.copy(h.specularColor),h.specularColorMap&&(c.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,c.specularColorMapTransform)),h.specularIntensityMap&&(c.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,c.specularIntensityMapTransform))})(i,s,l)):s.isMeshMatcapMaterial?(n(i,s),(function(c,h){h.matcap&&(c.matcap.value=h.matcap)})(i,s)):s.isMeshDepthMaterial?n(i,s):s.isMeshDistanceMaterial?(n(i,s),(function(c,h){let u=e.get(h).light;c.referencePosition.value.setFromMatrixPosition(u.matrixWorld),c.nearDistance.value=u.shadow.camera.near,c.farDistance.value=u.shadow.camera.far})(i,s)):s.isMeshNormalMaterial?n(i,s):s.isLineBasicMaterial?((function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform))})(i,s),s.isLineDashedMaterial&&(function(c,h){c.dashSize.value=h.dashSize,c.totalSize.value=h.dashSize+h.gapSize,c.scale.value=h.scale})(i,s)):s.isPointsMaterial?(function(c,h,u,d){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.size.value=h.size*u,c.scale.value=.5*d,h.map&&(c.map.value=h.map,t(h.map,c.uvTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(i,s,a,o):s.isSpriteMaterial?(function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.rotation.value=h.rotation,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(i,s):s.isShadowMaterial?(i.color.value.copy(s.color),i.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function fb(r,e,t,n){let i={},s={},a=[],o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(u,d,p,f){let _=u.value,m=d+"_"+p;if(f[m]===void 0)return f[m]=typeof _=="number"||typeof _=="boolean"?_:_.clone(),!0;{let g=f[m];if(typeof _=="number"||typeof _=="boolean"){if(g!==_)return f[m]=_,!0}else if(g.equals(_)===!1)return g.copy(_),!0}return!1}function c(u){let d={boundary:0,storage:0};return typeof u=="number"||typeof u=="boolean"?(d.boundary=4,d.storage=4):u.isVector2?(d.boundary=8,d.storage=8):u.isVector3||u.isColor?(d.boundary=16,d.storage=12):u.isVector4?(d.boundary=16,d.storage=16):u.isMatrix3?(d.boundary=48,d.storage=48):u.isMatrix4?(d.boundary=64,d.storage=64):u.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",u),d}function h(u){let d=u.target;d.removeEventListener("dispose",h);let p=a.indexOf(d.__bindingPointIndex);a.splice(p,1),r.deleteBuffer(i[d.id]),delete i[d.id],delete s[d.id]}return{bind:function(u,d){let p=d.program;n.uniformBlockBinding(u,p)},update:function(u,d){let p=i[u.id];p===void 0&&((function(m){let g=m.uniforms,b=0,v=16;for(let R=0,T=g.length;R<T;R++){let P=Array.isArray(g[R])?g[R]:[g[R]];for(let D=0,N=P.length;D<N;D++){let z=P[D],V=Array.isArray(z.value)?z.value:[z.value];for(let H=0,q=V.length;H<q;H++){let W=c(V[H]),J=b%v,$=J%W.boundary,ae=J+$;b+=$,ae!==0&&v-ae<W.storage&&(b+=v-ae),z.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=b,b+=W.storage}}}let x=b%v;x>0&&(b+=v-x),m.__size=b,m.__cache={}})(u),p=(function(m){let g=(function(){for(let R=0;R<o;R++)if(a.indexOf(R)===-1)return a.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0})();m.__bindingPointIndex=g;let b=r.createBuffer(),v=m.__size,x=m.usage;return r.bindBuffer(r.UNIFORM_BUFFER,b),r.bufferData(r.UNIFORM_BUFFER,v,x),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,g,b),b})(u),i[u.id]=p,u.addEventListener("dispose",h));let f=d.program;n.updateUBOMapping(u,f);let _=e.render.frame;s[u.id]!==_&&((function(m){let g=i[m.id],b=m.uniforms,v=m.__cache;r.bindBuffer(r.UNIFORM_BUFFER,g);for(let x=0,R=b.length;x<R;x++){let T=Array.isArray(b[x])?b[x]:[b[x]];for(let P=0,D=T.length;P<D;P++){let N=T[P];if(l(N,x,P,v)===!0){let z=N.__offset,V=Array.isArray(N.value)?N.value:[N.value],H=0;for(let q=0;q<V.length;q++){let W=V[q],J=c(W);typeof W=="number"||typeof W=="boolean"?(N.__data[0]=W,r.bufferSubData(r.UNIFORM_BUFFER,z+H,N.__data)):W.isMatrix3?(N.__data[0]=W.elements[0],N.__data[1]=W.elements[1],N.__data[2]=W.elements[2],N.__data[3]=0,N.__data[4]=W.elements[3],N.__data[5]=W.elements[4],N.__data[6]=W.elements[5],N.__data[7]=0,N.__data[8]=W.elements[6],N.__data[9]=W.elements[7],N.__data[10]=W.elements[8],N.__data[11]=0):(W.toArray(N.__data,H),H+=J.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,z,N.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)})(u),s[u.id]=_)},dispose:function(){for(let u in i)r.deleteBuffer(i[u]);a=[],i={},s={}}}}var Oo=class{constructor(e={}){let{canvas:t=Tg(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e,p;if(this.isWebGLRenderer=!0,n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let f=new Uint32Array(4),_=new Int32Array(4),m=null,g=null,b=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=_t,this.toneMapping=0,this.toneMappingExposure=1;let x=this,R=!1,T=0,P=0,D=null,N=-1,z=null,V=new Je,H=new Je,q=null,W=new he(0),J=0,$=t.width,ae=t.height,re=1,_e=null,we=null,ie=new Je(0,0,$,ae),ce=new Je(0,0,$,ae),ge=!1,be=new ms,de=!1,A=!1,E=new Te,O=new Te,U=new M,C=new Je,I={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},S=!1;function L(){return D===null?re:1}let F,ee,k,Z,K,ne,fe,pe,Me,Ce,je,Fe,Se,Ke,it,pt,ve,He,et,Ir,Oa,vn,Fn,Zi,B=n;function Bs(w,G){return t.getContext(w,G)}try{let w={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",Pd,!1),t.addEventListener("webglcontextrestored",Ld,!1),t.addEventListener("webglcontextcreationerror",Id,!1),B===null){let G="webgl2";if(B=Bs(G,w),B===null)throw Bs(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}function Cd(){F=new Kg(B),F.init(),vn=new hb(B,F),ee=new jg(B,F,e,vn),k=new lb(B,F),ee.reverseDepthBuffer&&d&&k.buffers.depth.setReversed(!0),Z=new $g(B),K=new $0,ne=new cb(B,F,k,K,ee,vn,Z),fe=new qg(x),pe=new Yg(x),Me=new zg(B),Fn=new Vg(B,Me),Ce=new Jg(B,Me,Z,Fn),je=new e0(B,Ce,Me,Z),et=new Qg(B,ee,ne),pt=new Xg(K),Fe=new Z0(x,fe,pe,F,ee,Fn,pt),Se=new pb(x,K),Ke=new eb,it=new sb(F),He=new Gg(x,fe,pe,k,je,p,l),ve=new ab(x,je,ee),Zi=new fb(B,Z,ee,k),Ir=new Wg(B,F,Z),Oa=new Zg(B,F,Z),Z.programs=Fe.programs,x.capabilities=ee,x.extensions=F,x.properties=K,x.renderLists=Ke,x.shadowMap=ve,x.state=k,x.info=Z}Cd();let It=new Dh(x,B);function Pd(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function Ld(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let w=Z.autoReset,G=ve.enabled,X=ve.autoUpdate,Q=ve.needsUpdate,j=ve.type;Cd(),Z.autoReset=w,ve.enabled=G,ve.autoUpdate=X,ve.needsUpdate=Q,ve.type=j}function Id(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Dd(w){let G=w.target;G.removeEventListener("dispose",Dd),(function(X){(function(Q){let j=K.get(Q).programs;j!==void 0&&(j.forEach((function(oe){Fe.releaseProgram(oe)})),Q.isShaderMaterial&&Fe.releaseShaderCache(Q))})(X),K.remove(X)})(G)}function Ud(w,G,X){w.transparent===!0&&w.side===2&&w.forceSinglePass===!1?(w.side=1,w.needsUpdate=!0,Fa(w,G,X),w.side=0,w.needsUpdate=!0,Fa(w,G,X),w.side=2):Fa(w,G,X)}this.xr=It,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let w=F.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=F.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(w){w!==void 0&&(re=w,this.setSize($,ae,!1))},this.getSize=function(w){return w.set($,ae)},this.setSize=function(w,G,X=!0){It.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):($=w,ae=G,t.width=Math.floor(w*re),t.height=Math.floor(G*re),X===!0&&(t.style.width=w+"px",t.style.height=G+"px"),this.setViewport(0,0,w,G))},this.getDrawingBufferSize=function(w){return w.set($*re,ae*re).floor()},this.setDrawingBufferSize=function(w,G,X){$=w,ae=G,re=X,t.width=Math.floor(w*X),t.height=Math.floor(G*X),this.setViewport(0,0,w,G)},this.getCurrentViewport=function(w){return w.copy(V)},this.getViewport=function(w){return w.copy(ie)},this.setViewport=function(w,G,X,Q){w.isVector4?ie.set(w.x,w.y,w.z,w.w):ie.set(w,G,X,Q),k.viewport(V.copy(ie).multiplyScalar(re).round())},this.getScissor=function(w){return w.copy(ce)},this.setScissor=function(w,G,X,Q){w.isVector4?ce.set(w.x,w.y,w.z,w.w):ce.set(w,G,X,Q),k.scissor(H.copy(ce).multiplyScalar(re).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(w){k.setScissorTest(ge=w)},this.setOpaqueSort=function(w){_e=w},this.setTransparentSort=function(w){we=w},this.getClearColor=function(w){return w.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor.apply(He,arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha.apply(He,arguments)},this.clear=function(w=!0,G=!0,X=!0){let Q=0;if(w){let j=!1;if(D!==null){let oe=D.texture.format;j=oe===Mu||oe===yu||oe===xu}if(j){let oe=D.texture.type,me=oe===Li||oe===hr||oe===la||oe===ls||oe===bu||oe===vu,ye=He.getClearColor(),Ee=He.getClearAlpha(),Le=ye.r,De=ye.g,Re=ye.b;me?(f[0]=Le,f[1]=De,f[2]=Re,f[3]=Ee,B.clearBufferuiv(B.COLOR,0,f)):(_[0]=Le,_[1]=De,_[2]=Re,_[3]=Ee,B.clearBufferiv(B.COLOR,0,_))}else Q|=B.COLOR_BUFFER_BIT}G&&(Q|=B.DEPTH_BUFFER_BIT),X&&(Q|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Pd,!1),t.removeEventListener("webglcontextrestored",Ld,!1),t.removeEventListener("webglcontextcreationerror",Id,!1),Ke.dispose(),it.dispose(),K.dispose(),fe.dispose(),pe.dispose(),je.dispose(),Fn.dispose(),Zi.dispose(),Fe.dispose(),It.dispose(),It.removeEventListener("sessionstart",Nd),It.removeEventListener("sessionend",Od),$i.stop()},this.renderBufferDirect=function(w,G,X,Q,j,oe){G===null&&(G=I);let me=j.isMesh&&j.matrixWorld.determinant()<0,ye=(function(Ve,jt,kt,Oe,Pe){jt.isScene!==!0&&(jt=I),ne.resetTextureUnits();let _n=jt.fog,Jl=Oe.isMeshStandardMaterial?jt.environment:null,zs=D===null?x.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Vt,Dr=(Oe.isMeshStandardMaterial?pe:fe).get(Oe.envMap||Jl),Zl=Oe.vertexColors===!0&&!!kt.attributes.color&&kt.attributes.color.itemSize===4,$l=!!kt.attributes.tangent&&(!!Oe.normalMap||Oe.anisotropy>0),Ql=!!kt.morphAttributes.position,_i=!!kt.morphAttributes.normal,Hm=!!kt.morphAttributes.color,Gd=0;Oe.toneMapped&&(D!==null&&D.isXRRenderTarget!==!0||(Gd=x.toneMapping));let Vd=kt.morphAttributes.position||kt.morphAttributes.normal||kt.morphAttributes.color,Gm=Vd!==void 0?Vd.length:0,Ge=K.get(Oe),Vm=g.state.lights;if(de===!0&&(A===!0||Ve!==z)){let hn=Ve===z&&Oe.id===N;pt.setState(Oe,Ve,hn)}let xn=!1;Oe.version===Ge.__version?Ge.needsLights&&Ge.lightsStateVersion!==Vm.state.version||Ge.outputColorSpace!==zs||Pe.isBatchedMesh&&Ge.batching===!1?xn=!0:Pe.isBatchedMesh||Ge.batching!==!0?Pe.isBatchedMesh&&Ge.batchingColor===!0&&Pe.colorTexture===null||Pe.isBatchedMesh&&Ge.batchingColor===!1&&Pe.colorTexture!==null||Pe.isInstancedMesh&&Ge.instancing===!1?xn=!0:Pe.isInstancedMesh||Ge.instancing!==!0?Pe.isSkinnedMesh&&Ge.skinning===!1?xn=!0:Pe.isSkinnedMesh||Ge.skinning!==!0?Pe.isInstancedMesh&&Ge.instancingColor===!0&&Pe.instanceColor===null||Pe.isInstancedMesh&&Ge.instancingColor===!1&&Pe.instanceColor!==null||Pe.isInstancedMesh&&Ge.instancingMorph===!0&&Pe.morphTexture===null||Pe.isInstancedMesh&&Ge.instancingMorph===!1&&Pe.morphTexture!==null||Ge.envMap!==Dr||Oe.fog===!0&&Ge.fog!==_n?xn=!0:Ge.numClippingPlanes===void 0||Ge.numClippingPlanes===pt.numPlanes&&Ge.numIntersection===pt.numIntersection?(Ge.vertexAlphas!==Zl||Ge.vertexTangents!==$l||Ge.morphTargets!==Ql||Ge.morphNormals!==_i||Ge.morphColors!==Hm||Ge.toneMapping!==Gd||Ge.morphTargetsCount!==Gm)&&(xn=!0):xn=!0:xn=!0:xn=!0:xn=!0:(xn=!0,Ge.__version=Oe.version);let Qi=Ge.currentProgram;xn===!0&&(Qi=Fa(Oe,jt,Pe));let Wd=!1,Hs=!1,ec=!1,vt=Qi.getUniforms(),xi=Ge.uniforms;if(k.useProgram(Qi.program)&&(Wd=!0,Hs=!0,ec=!0),Oe.id!==N&&(N=Oe.id,Hs=!0),Wd||z!==Ve){k.buffers.depth.getReversed()?(E.copy(Ve.projectionMatrix),(function(er){let lt=er.elements;lt[2]=.5*lt[2]+.5*lt[3],lt[6]=.5*lt[6]+.5*lt[7],lt[10]=.5*lt[10]+.5*lt[11],lt[14]=.5*lt[14]+.5*lt[15]})(E),(function(er){let lt=er.elements;lt[11]===-1?(lt[10]=-lt[10]-1,lt[14]=-lt[14]):(lt[10]=-lt[10],lt[14]=1-lt[14])})(E),vt.setValue(B,"projectionMatrix",E)):vt.setValue(B,"projectionMatrix",Ve.projectionMatrix),vt.setValue(B,"viewMatrix",Ve.matrixWorldInverse);let hn=vt.map.cameraPosition;hn!==void 0&&hn.setValue(B,U.setFromMatrixPosition(Ve.matrixWorld)),ee.logarithmicDepthBuffer&&vt.setValue(B,"logDepthBufFC",2/(Math.log(Ve.far+1)/Math.LN2)),(Oe.isMeshPhongMaterial||Oe.isMeshToonMaterial||Oe.isMeshLambertMaterial||Oe.isMeshBasicMaterial||Oe.isMeshStandardMaterial||Oe.isShaderMaterial)&&vt.setValue(B,"isOrthographic",Ve.isOrthographicCamera===!0),z!==Ve&&(z=Ve,Hs=!0,ec=!0)}if(Pe.isSkinnedMesh){vt.setOptional(B,Pe,"bindMatrix"),vt.setOptional(B,Pe,"bindMatrixInverse");let hn=Pe.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),vt.setValue(B,"boneTexture",hn.boneTexture,ne))}Pe.isBatchedMesh&&(vt.setOptional(B,Pe,"batchingTexture"),vt.setValue(B,"batchingTexture",Pe._matricesTexture,ne),vt.setOptional(B,Pe,"batchingIdTexture"),vt.setValue(B,"batchingIdTexture",Pe._indirectTexture,ne),vt.setOptional(B,Pe,"batchingColorTexture"),Pe._colorsTexture!==null&&vt.setValue(B,"batchingColorTexture",Pe._colorsTexture,ne));let tc=kt.morphAttributes;tc.position===void 0&&tc.normal===void 0&&tc.color===void 0||et.update(Pe,kt,Qi),(Hs||Ge.receiveShadow!==Pe.receiveShadow)&&(Ge.receiveShadow=Pe.receiveShadow,vt.setValue(B,"receiveShadow",Pe.receiveShadow)),Oe.isMeshGouraudMaterial&&Oe.envMap!==null&&(xi.envMap.value=Dr,xi.flipEnvMap.value=Dr.isCubeTexture&&Dr.isRenderTargetTexture===!1?-1:1),Oe.isMeshStandardMaterial&&Oe.envMap===null&&jt.environment!==null&&(xi.envMapIntensity.value=jt.environmentIntensity),Hs&&(vt.setValue(B,"toneMappingExposure",x.toneMappingExposure),Ge.needsLights&&(yn=ec,(Bn=xi).ambientLightColor.needsUpdate=yn,Bn.lightProbe.needsUpdate=yn,Bn.directionalLights.needsUpdate=yn,Bn.directionalLightShadows.needsUpdate=yn,Bn.pointLights.needsUpdate=yn,Bn.pointLightShadows.needsUpdate=yn,Bn.spotLights.needsUpdate=yn,Bn.spotLightShadows.needsUpdate=yn,Bn.rectAreaLights.needsUpdate=yn,Bn.hemisphereLights.needsUpdate=yn),_n&&Oe.fog===!0&&Se.refreshFogUniforms(xi,_n),Se.refreshMaterialUniforms(xi,Oe,re,ae,g.state.transmissionRenderTarget[Ve.id]),ss.upload(B,zd(Ge),xi,ne));var Bn,yn;if(Oe.isShaderMaterial&&Oe.uniformsNeedUpdate===!0&&(ss.upload(B,zd(Ge),xi,ne),Oe.uniformsNeedUpdate=!1),Oe.isSpriteMaterial&&vt.setValue(B,"center",Pe.center),vt.setValue(B,"modelViewMatrix",Pe.modelViewMatrix),vt.setValue(B,"normalMatrix",Pe.normalMatrix),vt.setValue(B,"modelMatrix",Pe.matrixWorld),Oe.isShaderMaterial||Oe.isRawShaderMaterial){let hn=Oe.uniformsGroups;for(let er=0,lt=hn.length;er<lt;er++){let jd=hn[er];Zi.update(jd,Qi),Zi.bind(jd,Qi)}}return Qi})(w,G,X,Q,j);k.setMaterial(Q,me);let Ee=X.index,Le=1;if(Q.wireframe===!0){if(Ee=Ce.getWireframeAttribute(X),Ee===void 0)return;Le=2}let De=X.drawRange,Re=X.attributes.position,Be=De.start*Le,gt=(De.start+De.count)*Le;oe!==null&&(Be=Math.max(Be,oe.start*Le),gt=Math.min(gt,(oe.start+oe.count)*Le)),Ee!==null?(Be=Math.max(Be,0),gt=Math.min(gt,Ee.count)):Re!=null&&(Be=Math.max(Be,0),gt=Math.min(gt,Re.count));let rt=gt-Be;if(rt<0||rt===1/0)return;let wt;Fn.setup(j,Q,ye,X,Ee);let at=Ir;if(Ee!==null&&(wt=Me.get(Ee),at=Oa,at.setIndex(wt)),j.isMesh)Q.wireframe===!0?(k.setLineWidth(Q.wireframeLinewidth*L()),at.setMode(B.LINES)):at.setMode(B.TRIANGLES);else if(j.isLine){let Ve=Q.linewidth;Ve===void 0&&(Ve=1),k.setLineWidth(Ve*L()),j.isLineSegments?at.setMode(B.LINES):j.isLineLoop?at.setMode(B.LINE_LOOP):at.setMode(B.LINE_STRIP)}else j.isPoints?at.setMode(B.POINTS):j.isSprite&&at.setMode(B.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)at.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(F.get("WEBGL_multi_draw"))at.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{let Ve=j._multiDrawStarts,jt=j._multiDrawCounts,kt=j._multiDrawCount,Oe=Ee?Me.get(Ee).bytesPerElement:1,Pe=K.get(Q).currentProgram.getUniforms();for(let _n=0;_n<kt;_n++)Pe.setValue(B,"_gl_DrawID",_n),at.render(Ve[_n]/Oe,jt[_n])}else if(j.isInstancedMesh)at.renderInstances(Be,rt,j.count);else if(X.isInstancedBufferGeometry){let Ve=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,jt=Math.min(X.instanceCount,Ve);at.renderInstances(Be,rt,jt)}else at.render(Be,rt)},this.compile=function(w,G,X=null){X===null&&(X=w),g=it.get(X),g.init(G),v.push(g),X.traverseVisible((function(j){j.isLight&&j.layers.test(G.layers)&&(g.pushLight(j),j.castShadow&&g.pushShadow(j))})),w!==X&&w.traverseVisible((function(j){j.isLight&&j.layers.test(G.layers)&&(g.pushLight(j),j.castShadow&&g.pushShadow(j))})),g.setupLights();let Q=new Set;return w.traverse((function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;let oe=j.material;if(oe)if(Array.isArray(oe))for(let me=0;me<oe.length;me++){let ye=oe[me];Ud(ye,X,j),Q.add(ye)}else Ud(oe,X,j),Q.add(oe)})),v.pop(),g=null,Q},this.compileAsync=function(w,G,X=null){let Q=this.compile(w,G,X);return new Promise((j=>{function oe(){Q.forEach((function(me){K.get(me).currentProgram.isReady()&&Q.delete(me)})),Q.size!==0?setTimeout(oe,10):j(w)}F.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)}))};let Yl=null;function Nd(){$i.stop()}function Od(){$i.start()}let $i=new Ff;function Kl(w,G,X,Q){if(w.visible===!1)return;if(w.layers.test(G.layers)){if(w.isGroup)X=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(G);else if(w.isLight)g.pushLight(w),w.castShadow&&g.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||be.intersectsSprite(w)){Q&&C.setFromMatrixPosition(w.matrixWorld).applyMatrix4(O);let oe=je.update(w),me=w.material;me.visible&&m.push(w,oe,me,X,C.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||be.intersectsObject(w))){let oe=je.update(w),me=w.material;if(Q&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),C.copy(w.boundingSphere.center)):(oe.boundingSphere===null&&oe.computeBoundingSphere(),C.copy(oe.boundingSphere.center)),C.applyMatrix4(w.matrixWorld).applyMatrix4(O)),Array.isArray(me)){let ye=oe.groups;for(let Ee=0,Le=ye.length;Ee<Le;Ee++){let De=ye[Ee],Re=me[De.materialIndex];Re&&Re.visible&&m.push(w,oe,Re,X,C.z,De)}}else me.visible&&m.push(w,oe,me,X,C.z,null)}}let j=w.children;for(let oe=0,me=j.length;oe<me;oe++)Kl(j[oe],G,X,Q)}function kd(w,G,X,Q){let j=w.opaque,oe=w.transmissive,me=w.transparent;g.setupLightsView(X),de===!0&&pt.setGlobalState(x.clippingPlanes,X),Q&&k.viewport(V.copy(Q)),j.length>0&&ka(j,G,X),oe.length>0&&ka(oe,G,X),me.length>0&&ka(me,G,X),k.buffers.depth.setTest(!0),k.buffers.depth.setMask(!0),k.buffers.color.setMask(!0),k.setPolygonOffset(!1)}function Fd(w,G,X,Q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[Q.id]===void 0&&(g.state.transmissionRenderTarget[Q.id]=new Yt(1,1,{generateMipmaps:!0,type:F.has("EXT_color_buffer_half_float")||F.has("EXT_color_buffer_float")?Pn:Li,minFilter:ni,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ke.workingColorSpace}));let j=g.state.transmissionRenderTarget[Q.id],oe=Q.viewport||V;j.setSize(oe.z,oe.w);let me=x.getRenderTarget();x.setRenderTarget(j),x.getClearColor(W),J=x.getClearAlpha(),J<1&&x.setClearColor(16777215,.5),x.clear(),S&&He.render(X);let ye=x.toneMapping;x.toneMapping=0;let Ee=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),g.setupLightsView(Q),de===!0&&pt.setGlobalState(x.clippingPlanes,Q),ka(w,X,Q),ne.updateMultisampleRenderTarget(j),ne.updateRenderTargetMipmap(j),F.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let De=0,Re=G.length;De<Re;De++){let Be=G[De],gt=Be.object,rt=Be.geometry,wt=Be.material,at=Be.group;if(wt.side===2&&gt.layers.test(Q.layers)){let Ve=wt.side;wt.side=1,wt.needsUpdate=!0,Bd(gt,X,Q,rt,wt,at),wt.side=Ve,wt.needsUpdate=!0,Le=!0}}Le===!0&&(ne.updateMultisampleRenderTarget(j),ne.updateRenderTargetMipmap(j))}x.setRenderTarget(me),x.setClearColor(W,J),Ee!==void 0&&(Q.viewport=Ee),x.toneMapping=ye}function ka(w,G,X){let Q=G.isScene===!0?G.overrideMaterial:null;for(let j=0,oe=w.length;j<oe;j++){let me=w[j],ye=me.object,Ee=me.geometry,Le=Q===null?me.material:Q,De=me.group;ye.layers.test(X.layers)&&Bd(ye,G,X,Ee,Le,De)}}function Bd(w,G,X,Q,j,oe){w.onBeforeRender(x,G,X,Q,j,oe),w.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),j.onBeforeRender(x,G,X,Q,w,oe),j.transparent===!0&&j.side===2&&j.forceSinglePass===!1?(j.side=1,j.needsUpdate=!0,x.renderBufferDirect(X,G,Q,j,w,oe),j.side=0,j.needsUpdate=!0,x.renderBufferDirect(X,G,Q,j,w,oe),j.side=2):x.renderBufferDirect(X,G,Q,j,w,oe),w.onAfterRender(x,G,X,Q,j,oe)}function Fa(w,G,X){G.isScene!==!0&&(G=I);let Q=K.get(w),j=g.state.lights,oe=g.state.shadowsArray,me=j.state.version,ye=Fe.getParameters(w,j.state,oe,G,X),Ee=Fe.getProgramCacheKey(ye),Le=Q.programs;Q.environment=w.isMeshStandardMaterial?G.environment:null,Q.fog=G.fog,Q.envMap=(w.isMeshStandardMaterial?pe:fe).get(w.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&w.envMap===null?G.environmentRotation:w.envMapRotation,Le===void 0&&(w.addEventListener("dispose",Dd),Le=new Map,Q.programs=Le);let De=Le.get(Ee);if(De!==void 0){if(Q.currentProgram===De&&Q.lightsStateVersion===me)return Hd(w,ye),De}else ye.uniforms=Fe.getUniforms(w),w.onBeforeCompile(ye,x),De=Fe.acquireProgram(ye,Ee),Le.set(Ee,De),Q.uniforms=ye.uniforms;let Re=Q.uniforms;return(w.isShaderMaterial||w.isRawShaderMaterial)&&w.clipping!==!0||(Re.clippingPlanes=pt.uniform),Hd(w,ye),Q.needsLights=(function(Be){return Be.isMeshLambertMaterial||Be.isMeshToonMaterial||Be.isMeshPhongMaterial||Be.isMeshStandardMaterial||Be.isShadowMaterial||Be.isShaderMaterial&&Be.lights===!0})(w),Q.lightsStateVersion=me,Q.needsLights&&(Re.ambientLightColor.value=j.state.ambient,Re.lightProbe.value=j.state.probe,Re.directionalLights.value=j.state.directional,Re.directionalLightShadows.value=j.state.directionalShadow,Re.spotLights.value=j.state.spot,Re.spotLightShadows.value=j.state.spotShadow,Re.rectAreaLights.value=j.state.rectArea,Re.ltc_1.value=j.state.rectAreaLTC1,Re.ltc_2.value=j.state.rectAreaLTC2,Re.pointLights.value=j.state.point,Re.pointLightShadows.value=j.state.pointShadow,Re.hemisphereLights.value=j.state.hemi,Re.directionalShadowMap.value=j.state.directionalShadowMap,Re.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Re.spotShadowMap.value=j.state.spotShadowMap,Re.spotLightMatrix.value=j.state.spotLightMatrix,Re.spotLightMap.value=j.state.spotLightMap,Re.pointShadowMap.value=j.state.pointShadowMap,Re.pointShadowMatrix.value=j.state.pointShadowMatrix),Q.currentProgram=De,Q.uniformsList=null,De}function zd(w){if(w.uniformsList===null){let G=w.currentProgram.getUniforms();w.uniformsList=ss.seqWithValue(G.seq,w.uniforms)}return w.uniformsList}function Hd(w,G){let X=K.get(w);X.outputColorSpace=G.outputColorSpace,X.batching=G.batching,X.batchingColor=G.batchingColor,X.instancing=G.instancing,X.instancingColor=G.instancingColor,X.instancingMorph=G.instancingMorph,X.skinning=G.skinning,X.morphTargets=G.morphTargets,X.morphNormals=G.morphNormals,X.morphColors=G.morphColors,X.morphTargetsCount=G.morphTargetsCount,X.numClippingPlanes=G.numClippingPlanes,X.numIntersection=G.numClipIntersection,X.vertexAlphas=G.vertexAlphas,X.vertexTangents=G.vertexTangents,X.toneMapping=G.toneMapping}$i.setAnimationLoop((function(w){Yl&&Yl(w)})),typeof self<"u"&&$i.setContext(self),this.setAnimationLoop=function(w){Yl=w,It.setAnimationLoop(w),w===null?$i.stop():$i.start()},It.addEventListener("sessionstart",Nd),It.addEventListener("sessionend",Od),this.render=function(w,G){if(G!==void 0&&G.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(R===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),It.enabled===!0&&It.isPresenting===!0&&(It.cameraAutoUpdate===!0&&It.updateCamera(G),G=It.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,G,D),g=it.get(w,v.length),g.init(G),v.push(g),O.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),be.setFromProjectionMatrix(O),A=this.localClippingEnabled,de=pt.init(this.clippingPlanes,A),m=Ke.get(w,b.length),m.init(),b.push(m),It.enabled===!0&&It.isPresenting===!0){let oe=x.xr.getDepthSensingMesh();oe!==null&&Kl(oe,G,-1/0,x.sortObjects)}Kl(w,G,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(_e,we),S=It.enabled===!1||It.isPresenting===!1||It.hasDepthSensing()===!1,S&&He.addToRenderList(m,w),this.info.render.frame++,de===!0&&pt.beginShadows();let X=g.state.shadowsArray;ve.render(X,w,G),de===!0&&pt.endShadows(),this.info.autoReset===!0&&this.info.reset();let Q=m.opaque,j=m.transmissive;if(g.setupLights(),G.isArrayCamera){let oe=G.cameras;if(j.length>0)for(let me=0,ye=oe.length;me<ye;me++)Fd(Q,j,w,oe[me]);S&&He.render(w);for(let me=0,ye=oe.length;me<ye;me++){let Ee=oe[me];kd(m,w,Ee,Ee.viewport)}}else j.length>0&&Fd(Q,j,w,G),S&&He.render(w),kd(m,w,G);D!==null&&(ne.updateMultisampleRenderTarget(D),ne.updateRenderTargetMipmap(D)),w.isScene===!0&&w.onAfterRender(x,w,G),Fn.resetDefaultState(),N=-1,z=null,v.pop(),v.length>0?(g=v[v.length-1],de===!0&&pt.setGlobalState(x.clippingPlanes,g.state.camera)):g=null,b.pop(),m=b.length>0?b[b.length-1]:null},this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(w,G,X){K.get(w.texture).__webglTexture=G,K.get(w.depthTexture).__webglTexture=X;let Q=K.get(w);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=X===void 0,Q.__autoAllocateDepthBuffer||F.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,G){let X=K.get(w);X.__webglFramebuffer=G,X.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(w,G=0,X=0){D=w,T=G,P=X;let Q=!0,j=null,oe=!1,me=!1;if(w){let ye=K.get(w);if(ye.__useDefaultFramebuffer!==void 0)k.bindFramebuffer(B.FRAMEBUFFER,null),Q=!1;else if(ye.__webglFramebuffer===void 0)ne.setupRenderTarget(w);else if(ye.__hasExternalTextures)ne.rebindTextures(w,K.get(w.texture).__webglTexture,K.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let De=w.depthTexture;if(ye.__boundDepthTexture!==De){if(De!==null&&K.has(De)&&(w.width!==De.image.width||w.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ne.setupDepthRenderbuffer(w)}}let Ee=w.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(me=!0);let Le=K.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(j=Array.isArray(Le[G])?Le[G][X]:Le[G],oe=!0):j=w.samples>0&&ne.useMultisampledRTT(w)===!1?K.get(w).__webglMultisampledFramebuffer:Array.isArray(Le)?Le[X]:Le,V.copy(w.viewport),H.copy(w.scissor),q=w.scissorTest}else V.copy(ie).multiplyScalar(re).floor(),H.copy(ce).multiplyScalar(re).floor(),q=ge;if(k.bindFramebuffer(B.FRAMEBUFFER,j)&&Q&&k.drawBuffers(w,j),k.viewport(V),k.scissor(H),k.setScissorTest(q),oe){let ye=K.get(w.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+G,ye.__webglTexture,X)}else if(me){let ye=K.get(w.texture),Ee=G||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,ye.__webglTexture,X||0,Ee)}N=-1},this.readRenderTargetPixels=function(w,G,X,Q,j,oe,me){if(!w||!w.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=K.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&me!==void 0&&(ye=ye[me]),ye){k.bindFramebuffer(B.FRAMEBUFFER,ye);try{let Ee=w.texture,Le=Ee.format,De=Ee.type;if(!ee.textureFormatReadable(Le))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(De))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");G>=0&&G<=w.width-Q&&X>=0&&X<=w.height-j&&B.readPixels(G,X,Q,j,vn.convert(Le),vn.convert(De),oe)}finally{let Ee=D!==null?K.get(D).__webglFramebuffer:null;k.bindFramebuffer(B.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(w,G,X,Q,j,oe,me){if(!w||!w.isWebGLRenderTarget)throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=K.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&me!==void 0&&(ye=ye[me]),ye){let Ee=w.texture,Le=Ee.format,De=Ee.type;if(!ee.textureFormatReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=w.width-Q&&X>=0&&X<=w.height-j){k.bindFramebuffer(B.FRAMEBUFFER,ye);let Re=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Re),B.bufferData(B.PIXEL_PACK_BUFFER,oe.byteLength,B.STREAM_READ),B.readPixels(G,X,Q,j,vn.convert(Le),vn.convert(De),0);let Be=D!==null?K.get(D).__webglFramebuffer:null;k.bindFramebuffer(B.FRAMEBUFFER,Be);let gt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await(function(rt,wt,at){return new Promise((function(Ve,jt){setTimeout((function kt(){switch(rt.clientWaitSync(wt,rt.SYNC_FLUSH_COMMANDS_BIT,0)){case rt.WAIT_FAILED:jt();break;case rt.TIMEOUT_EXPIRED:setTimeout(kt,at);break;default:Ve()}}),at)}))})(B,gt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Re),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,oe),B.deleteBuffer(Re),B.deleteSync(gt),oe}throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,G=null,X=0){w.isTexture!==!0&&(ta("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,w=arguments[1]);let Q=Math.pow(2,-X),j=Math.floor(w.image.width*Q),oe=Math.floor(w.image.height*Q),me=G!==null?G.x:0,ye=G!==null?G.y:0;ne.setTexture2D(w,0),B.copyTexSubImage2D(B.TEXTURE_2D,X,0,0,me,ye,j,oe),k.unbindTexture()},this.copyTextureToTexture=function(w,G,X=null,Q=null,j=0){let oe,me,ye,Ee,Le,De,Re,Be,gt;w.isTexture!==!0&&(ta("WebGLRenderer: copyTextureToTexture function signature has changed."),Q=arguments[0]||null,w=arguments[1],G=arguments[2],j=arguments[3]||0,X=null);let rt=w.isCompressedTexture?w.mipmaps[j]:w.image;X!==null?(oe=X.max.x-X.min.x,me=X.max.y-X.min.y,ye=X.isBox3?X.max.z-X.min.z:1,Ee=X.min.x,Le=X.min.y,De=X.isBox3?X.min.z:0):(oe=rt.width,me=rt.height,ye=rt.depth||1,Ee=0,Le=0,De=0),Q!==null?(Re=Q.x,Be=Q.y,gt=Q.z):(Re=0,Be=0,gt=0);let wt=vn.convert(G.format),at=vn.convert(G.type),Ve;G.isData3DTexture?(ne.setTexture3D(G,0),Ve=B.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(ne.setTexture2DArray(G,0),Ve=B.TEXTURE_2D_ARRAY):(ne.setTexture2D(G,0),Ve=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,G.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,G.unpackAlignment);let jt=B.getParameter(B.UNPACK_ROW_LENGTH),kt=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Oe=B.getParameter(B.UNPACK_SKIP_PIXELS),Pe=B.getParameter(B.UNPACK_SKIP_ROWS),_n=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,rt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,rt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Ee),B.pixelStorei(B.UNPACK_SKIP_ROWS,Le),B.pixelStorei(B.UNPACK_SKIP_IMAGES,De);let Jl=w.isDataArrayTexture||w.isData3DTexture,zs=G.isDataArrayTexture||G.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){let Dr=K.get(w),Zl=K.get(G),$l=K.get(Dr.__renderTarget),Ql=K.get(Zl.__renderTarget);k.bindFramebuffer(B.READ_FRAMEBUFFER,$l.__webglFramebuffer),k.bindFramebuffer(B.DRAW_FRAMEBUFFER,Ql.__webglFramebuffer);for(let _i=0;_i<ye;_i++)Jl&&B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,K.get(w).__webglTexture,j,De+_i),w.isDepthTexture?(zs&&B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,K.get(G).__webglTexture,j,gt+_i),B.blitFramebuffer(Ee,Le,oe,me,Re,Be,oe,me,B.DEPTH_BUFFER_BIT,B.NEAREST)):zs?B.copyTexSubImage3D(Ve,j,Re,Be,gt+_i,Ee,Le,oe,me):B.copyTexSubImage2D(Ve,j,Re,Be,gt+_i,Ee,Le,oe,me);k.bindFramebuffer(B.READ_FRAMEBUFFER,null),k.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else zs?w.isDataTexture||w.isData3DTexture?B.texSubImage3D(Ve,j,Re,Be,gt,oe,me,ye,wt,at,rt.data):G.isCompressedArrayTexture?B.compressedTexSubImage3D(Ve,j,Re,Be,gt,oe,me,ye,wt,rt.data):B.texSubImage3D(Ve,j,Re,Be,gt,oe,me,ye,wt,at,rt):w.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,j,Re,Be,oe,me,wt,at,rt.data):w.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,j,Re,Be,rt.width,rt.height,wt,rt.data):B.texSubImage2D(B.TEXTURE_2D,j,Re,Be,oe,me,wt,at,rt);B.pixelStorei(B.UNPACK_ROW_LENGTH,jt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,kt),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Oe),B.pixelStorei(B.UNPACK_SKIP_ROWS,Pe),B.pixelStorei(B.UNPACK_SKIP_IMAGES,_n),j===0&&G.generateMipmaps&&B.generateMipmap(Ve),k.unbindTexture()},this.copyTextureToTexture3D=function(w,G,X=null,Q=null,j=0){return w.isTexture!==!0&&(ta("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,Q=arguments[1]||null,w=arguments[2],G=arguments[3],j=arguments[4]||0),ta('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,G,X,Q,j)},this.initRenderTarget=function(w){K.get(w).__webglFramebuffer===void 0&&ne.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?ne.setTextureCube(w,0):w.isData3DTexture?ne.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?ne.setTexture2DArray(w,0):ne.setTexture2D(w,0),k.unbindTexture()},this.resetState=function(){T=0,P=0,D=null,k.reset(),Fn.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ds}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=ke._getUnpackColorSpace()}};var ko=class r{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new he(e),this.near=t,this.far=n}clone(){return new r(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Fo=class extends ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Cn,this.environmentIntensity=1,this.environmentRotation=new Cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},gs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=gh,this.updateRanges=[],this.version=0,this.uuid=dn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=dn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=dn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Xt=new M,pr=class r{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=En(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=$e(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=$e(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=$e(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=$e(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=$e(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=En(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=En(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=En(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=En(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=$e(t,this.array),n=$e(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=$e(t,this.array),n=$e(n,this.array),i=$e(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=$e(t,this.array),n=$e(n,this.array),i=$e(i,this.array),s=$e(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new At(new this.array.constructor(t),this.itemSize,this.normalized)}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new r(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ai=class extends Kt{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new he(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},qr,Ys=new M,Yr=new M,Kr=new M,Jr=new Y,Ks=new Y,Vf=new Te,so=new M,Js=new M,ao=new M,Bp=new Y,Cc=new Y,zp=new Y,Ui=class extends ct{constructor(e=new ai){if(super(),this.isSprite=!0,this.type="Sprite",qr===void 0){qr=new Qe;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new gs(t,5);qr.setIndex([0,1,2,0,2,3]),qr.setAttribute("position",new pr(n,3,0,!1)),qr.setAttribute("uv",new pr(n,2,3,!1))}this.geometry=qr,this.material=e,this.center=new Y(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Yr.setFromMatrixScale(this.matrixWorld),Vf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Kr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Yr.multiplyScalar(-Kr.z);let n=this.material.rotation,i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));let a=this.center;oo(so.set(-.5,-.5,0),Kr,a,Yr,i,s),oo(Js.set(.5,-.5,0),Kr,a,Yr,i,s),oo(ao.set(.5,.5,0),Kr,a,Yr,i,s),Bp.set(0,0),Cc.set(1,0),zp.set(1,1);let o=e.ray.intersectTriangle(so,Js,ao,!1,Ys);if(o===null&&(oo(Js.set(-.5,.5,0),Kr,a,Yr,i,s),Cc.set(0,1),o=e.ray.intersectTriangle(so,ao,Js,!1,Ys),o===null))return;let l=e.ray.origin.distanceTo(Ys);l<e.near||l>e.far||t.push({distance:l,point:Ys.clone(),uv:ti.getInterpolation(Ys,so,Js,ao,Bp,Cc,zp,new Y),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function oo(r,e,t,n,i,s){Jr.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(Ks.x=s*Jr.x-i*Jr.y,Ks.y=i*Jr.x+s*Jr.y):Ks.copy(Jr),r.copy(e),r.x+=Ks.x,r.y+=Ks.y,r.applyMatrix4(Vf)}var Iv=new M,Dv=new M;var Hp=new M,Gp=new Je,Vp=new Je,mb=new M,Wp=new Te,lo=new M,Pc=new $t,jp=new Te,Lc=new ur,Bo=class extends qe{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Xd,this.bindMatrix=new Te,this.bindMatrixInverse=new Te,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Zt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,lo),this.boundingBox.expandByPoint(lo)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new $t),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,lo),this.boundingSphere.expandByPoint(lo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Pc.copy(this.boundingSphere),Pc.applyMatrix4(i),e.ray.intersectsSphere(Pc)!==!1&&(jp.copy(i).invert(),Lc.copy(e.ray).applyMatrix4(jp),this.boundingBox!==null&&Lc.intersectsBox(this.boundingBox)===!1||this._computeIntersections(e,t,Lc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Je,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Xd?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===fg?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;Gp.fromBufferAttribute(i.attributes.skinIndex,e),Vp.fromBufferAttribute(i.attributes.skinWeight,e),Hp.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){let a=Vp.getComponent(s);if(a!==0){let o=Gp.getComponent(s);Wp.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(mb.copy(Hp).applyMatrix4(Wp),a)}}return t.applyMatrix4(this.bindMatrixInverse)}},pa=class extends ct{constructor(){super(),this.isBone=!0,this.type="Bone"}},zo=class extends Ut{constructor(e=null,t=1,n=1,i,s,a,o,l,c=1003,h=1003,u,d){super(null,a,o,l,c,h,i,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Xp=new Te,gb=new Te,Ho=class r{constructor(e=[],t=[]){this.uuid=dn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(16*e.length),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Te)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Te;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){let o=e[s]?e[s].matrixWorld:gb;Xp.multiplyMatrices(o,t[s]),Xp.toArray(n,16*s)}i!==null&&(i.needsUpdate=!0)}clone(){return new r(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(4*this.bones.length);e=4*Math.ceil(e/4),e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new zo(t,e,e,Rn,An);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let s=e.bones[n],a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new pa),this.bones.push(a),this.boneInverses.push(new Te().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){let a=t[i];e.bones.push(a.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},fr=class extends At{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Zr=new Te,qp=new Te,co=[],Yp=new Zt,bb=new Te,Zs=new qe,$s=new $t,Go=class extends qe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new fr(new Float32Array(16*n),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,bb)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Zt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Zr),Yp.copy(e.boundingBox).applyMatrix4(Zr),this.boundingBox.union(Yp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new $t),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Zr),$s.copy(e.boundingSphere).applyMatrix4(Zr),this.boundingSphere.union($s)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,3*e)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,16*e)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=e*(n.length+1)+1;for(let a=0;a<n.length;a++)n[a]=i[s+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Zs.geometry=this.geometry,Zs.material=this.material,Zs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$s.copy(this.boundingSphere),$s.applyMatrix4(n),e.ray.intersectsSphere($s)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Zr),qp.multiplyMatrices(n,Zr),Zs.matrixWorld=qp,Zs.raycast(e,co);for(let a=0,o=co.length;a<o;a++){let l=co[a];l.instanceId=s,l.object=this,t.push(l)}co.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new fr(new Float32Array(3*this.instanceMatrix.count).fill(1),3)),t.toArray(this.instanceColor.array,3*e)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,16*e)}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new zo(new Float32Array(i*this.count),i,this.count,_u,An));let s=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;s[l]=o,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Uh=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,i){let s=this.pool,a=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});let o=s[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=n,o.index=i}reset(){this.list.length=0,this.index=0}},Uv=new Te,Nv=new he(1,1,1),Ov=new ms,kv=new Zt,Fv=new $t,Bv=new M,zv=new M,Hv=new M,Gv=new Uh,Vv=new qe;var fa=class extends Kt{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new he(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Vo=new M,Wo=new M,Kp=new Te,Qs=new ur,ho=new $t,Ic=new M,Jp=new M,bs=class extends ct{constructor(e=new Qe,t=new fa){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Vo.fromBufferAttribute(t,i-1),Wo.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Vo.distanceTo(Wo);e.setAttribute("lineDistance",new Ae(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ho.copy(n.boundingSphere),ho.applyMatrix4(i),ho.radius+=s,e.ray.intersectsSphere(ho)===!1)return;Kp.copy(i).invert(),Qs.copy(e.ray).applyMatrix4(Kp);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let f=d,_=p-1;f<_;f+=c){let m=h.getX(f),g=h.getX(f+1),b=uo(this,e,Qs,l,m,g);b&&t.push(b)}if(this.isLineLoop){let f=h.getX(p-1),_=h.getX(d),m=uo(this,e,Qs,l,f,_);m&&t.push(m)}}else{let d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let f=d,_=p-1;f<_;f+=c){let m=uo(this,e,Qs,l,f,f+1);m&&t.push(m)}if(this.isLineLoop){let f=uo(this,e,Qs,l,p-1,d);f&&t.push(f)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=n.length;i<s;i++){let a=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=i}}}}};function uo(r,e,t,n,i,s){let a=r.geometry.attributes.position;if(Vo.fromBufferAttribute(a,i),Wo.fromBufferAttribute(a,s),t.distanceSqToSegment(Vo,Wo,Ic,Jp)>n)return;Ic.applyMatrix4(r.matrixWorld);let o=e.ray.origin.distanceTo(Ic);return o<e.near||o>e.far?void 0:{distance:o,point:Jp.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}var Zp=new M,$p=new M,jo=class extends bs{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Zp.fromBufferAttribute(t,i),$p.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Zp.distanceTo($p);e.setAttribute("lineDistance",new Ae(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Xo=class extends bs{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},ma=class extends Kt{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new he(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Qp=new Te,Nh=new ur,po=new $t,fo=new M,qo=class extends ct{constructor(e=new Qe,t=new ma){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),po.copy(n.boundingSphere),po.applyMatrix4(i),po.radius+=s,e.ray.intersectsSphere(po)===!1)return;Qp.copy(i).invert(),Nh.copy(e.ray).applyMatrix4(Qp);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null)for(let u=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);u<d;u++){let p=c.getX(u);fo.fromBufferAttribute(h,p),ef(fo,p,l,i,e,t,this)}else for(let u=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);u<d;u++)fo.fromBufferAttribute(h,u),ef(fo,u,l,i,e,t,this)}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=n.length;i<s;i++){let a=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=i}}}}};function ef(r,e,t,n,i,s,a){let o=Nh.distanceSqToPoint(r);if(o<t){let l=new M;Nh.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var vs=class extends Ut{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},fn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,s=n.length,a;a=t||e*n[s-1];let o,l=0,c=s-1;for(;l<=c;)if(i=Math.floor(l+(c-l)/2),o=n[i]-a,o<0)l=i+1;else{if(!(o>0)){c=i;break}c=i-1}if(i=c,n[i]===a)return i/(s-1);let h=n[i];return(i+(a-h)/(n[i+1]-h))/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);let a=this.getPoint(i),o=this.getPoint(s),l=t||(a.isVector2?new Y:new M);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new M,i=[],s=[],a=[],o=new M,l=new Te;for(let p=0;p<=e;p++){let f=p/e;i[p]=this.getTangentAt(f,new M)}s[0]=new M,a[0]=new M;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(i[p-1],i[p]),o.length()>Number.EPSILON){o.normalize();let f=Math.acos(Tt(i[p-1].dot(i[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,f))}a[p].crossVectors(i[p],s[p])}if(t===!0){let p=Math.acos(Tt(s[0].dot(s[e]),-1,1));p/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let f=1;f<=e;f++)s[f].applyMatrix4(l.makeRotationAxis(i[f],p*f)),a[f].crossVectors(i[f],s[f])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ga=class extends fn{constructor(e=0,t=0,n=1,i=1,s=0,a=2*Math.PI,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new Y){let n=t,i=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(s=a?0:i),this.aClockwise!==!0||a||(s===i?s=-i:s-=i);let o=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Oh=class extends ga{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function wu(){let r=0,e=0,t=0,n=0;function i(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let d=(a-s)/c-(o-s)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,p*=h,i(a,o,d,p)},calc:function(s){let a=s*s;return r+e*s+t*a+n*(a*s)}}}var mo=new M,Dc=new wu,Uc=new wu,Nc=new wu,kh=class extends fn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new M){let n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e,o,l,c=Math.floor(a),h=a-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/s)+1)*s:h===0&&c===s-1&&(c=s-2,h=1),this.closed||c>0?o=i[(c-1)%s]:(mo.subVectors(i[0],i[1]).add(i[0]),o=mo);let u=i[c%s],d=i[(c+1)%s];if(this.closed||c+2<s?l=i[(c+2)%s]:(mo.subVectors(i[s-1],i[s-2]).add(i[s-1]),l=mo),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,f=Math.pow(o.distanceToSquared(u),p),_=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(l),p);_<1e-4&&(_=1),f<1e-4&&(f=_),m<1e-4&&(m=_),Dc.initNonuniformCatmullRom(o.x,u.x,d.x,l.x,f,_,m),Uc.initNonuniformCatmullRom(o.y,u.y,d.y,l.y,f,_,m),Nc.initNonuniformCatmullRom(o.z,u.z,d.z,l.z,f,_,m)}else this.curveType==="catmullrom"&&(Dc.initCatmullRom(o.x,u.x,d.x,l.x,this.tension),Uc.initCatmullRom(o.y,u.y,d.y,l.y,this.tension),Nc.initCatmullRom(o.z,u.z,d.z,l.z,this.tension));return n.set(Dc.calc(h),Uc.calc(h),Nc.calc(h)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new M().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function tf(r,e,t,n,i){let s=.5*(n-e),a=.5*(i-t),o=r*r;return(2*t-2*n+s+a)*(r*o)+(-3*t+3*n-2*s-a)*o+s*r+t}function sa(r,e,t,n){return(function(i,s){let a=1-i;return a*a*s})(r,e)+(function(i,s){return 2*(1-i)*i*s})(r,t)+(function(i,s){return i*i*s})(r,n)}function aa(r,e,t,n,i){return(function(s,a){let o=1-s;return o*o*o*a})(r,e)+(function(s,a){let o=1-s;return 3*o*o*s*a})(r,t)+(function(s,a){return 3*(1-s)*s*s*a})(r,n)+(function(s,a){return s*s*s*a})(r,i)}var Yo=class extends fn{constructor(e=new Y,t=new Y,n=new Y,i=new Y){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Y){let n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(aa(e,i.x,s.x,a.x,o.x),aa(e,i.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Fh=class extends fn{constructor(e=new M,t=new M,n=new M,i=new M){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new M){let n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(aa(e,i.x,s.x,a.x,o.x),aa(e,i.y,s.y,a.y,o.y),aa(e,i.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ko=class extends fn{constructor(e=new Y,t=new Y){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Y){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Y){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Bh=class extends fn{constructor(e=new M,t=new M){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new M){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new M){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Jo=class extends fn{constructor(e=new Y,t=new Y,n=new Y){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Y){let n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(sa(e,i.x,s.x,a.x),sa(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Zo=class extends fn{constructor(e=new M,t=new M,n=new M){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new M){let n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(sa(e,i.x,s.x,a.x),sa(e,i.y,s.y,a.y),sa(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},$o=class extends fn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Y){let n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),o=s-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(tf(o,l.x,c.x,h.x,u.x),tf(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new Y().fromArray(i))}return this}},Qo=Object.freeze({__proto__:null,ArcCurve:Oh,CatmullRomCurve3:kh,CubicBezierCurve:Yo,CubicBezierCurve3:Fh,EllipseCurve:ga,LineCurve:Ko,LineCurve3:Bh,QuadraticBezierCurve:Jo,QuadraticBezierCurve3:Zo,SplineCurve:$o}),zh=class extends fn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Qo[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),s=0;for(;s<i.length;){if(i[s]>=n){let a=i[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,s=this.curves;i<s.length;i++){let a=s[i],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new Qo[i.type]().fromJSON(i))}return this}},ba=class extends zh{constructor(e){super(),this.type="Path",this.currentPoint=new Y,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ko(this.currentPoint.clone(),new Y(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let s=new Jo(this.currentPoint.clone(),new Y(e,t),new Y(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,a){let o=new Yo(this.currentPoint.clone(),new Y(e,t),new Y(n,i),new Y(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new $o(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,s,a),this}absarc(e,t,n,i,s,a){return this.absellipse(e,t,n,n,i,s,a),this}ellipse(e,t,n,i,s,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,s,a,o,l),this}absellipse(e,t,n,i,s,a,o,l){let c=new ga(e,t,n,i,s,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},el=class r extends Qe{constructor(e=[new Y(0,-.5),new Y(.5,0),new Y(0,.5)],t=12,n=0,i=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Tt(i,0,2*Math.PI);let s=[],a=[],o=[],l=[],c=[],h=1/t,u=new M,d=new Y,p=new M,f=new M,_=new M,m=0,g=0;for(let b=0;b<=e.length-1;b++)switch(b){case 0:m=e[b+1].x-e[b].x,g=e[b+1].y-e[b].y,p.x=1*g,p.y=-m,p.z=0*g,_.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:m=e[b+1].x-e[b].x,g=e[b+1].y-e[b].y,p.x=1*g,p.y=-m,p.z=0*g,f.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),l.push(p.x,p.y,p.z),_.copy(f)}for(let b=0;b<=t;b++){let v=n+b*h*i,x=Math.sin(v),R=Math.cos(v);for(let T=0;T<=e.length-1;T++){u.x=e[T].x*x,u.y=e[T].y,u.z=e[T].x*R,a.push(u.x,u.y,u.z),d.x=b/t,d.y=T/(e.length-1),o.push(d.x,d.y);let P=l[3*T+0]*x,D=l[3*T+1],N=l[3*T+0]*R;c.push(P,D,N)}}for(let b=0;b<t;b++)for(let v=0;v<e.length-1;v++){let x=v+b*e.length,R=x,T=x+e.length,P=x+e.length+1,D=x+1;s.push(R,T,D),s.push(P,D,T)}this.setIndex(s),this.setAttribute("position",new Ae(a,3)),this.setAttribute("uv",new Ae(o,2)),this.setAttribute("normal",new Ae(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.points,e.segments,e.phiStart,e.phiLength)}},Hh=class r extends el{constructor(e=1,t=1,n=4,i=8){let s=new ba;s.absarc(0,-t/2,e,1.5*Math.PI,0),s.absarc(0,t/2,e,0,.5*Math.PI),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new r(e.radius,e.length,e.capSegments,e.radialSegments)}},_s=class r extends Qe{constructor(e=1,t=32,n=0,i=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let s=[],a=[],o=[],l=[],c=new M,h=new Y;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let p=n+u/t*i;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Ae(a,3)),this.setAttribute("normal",new Ae(o,3)),this.setAttribute("uv",new Ae(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.segments,e.thetaStart,e.thetaLength)}},xs=class r extends Qe{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,l=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),s=Math.floor(s);let h=[],u=[],d=[],p=[],f=0,_=[],m=n/2,g=0;function b(v){let x=f,R=new Y,T=new M,P=0,D=v===!0?e:t,N=v===!0?1:-1;for(let V=1;V<=i;V++)u.push(0,m*N,0),d.push(0,N,0),p.push(.5,.5),f++;let z=f;for(let V=0;V<=i;V++){let H=V/i*l+o,q=Math.cos(H),W=Math.sin(H);T.x=D*W,T.y=m*N,T.z=D*q,u.push(T.x,T.y,T.z),d.push(0,N,0),R.x=.5*q+.5,R.y=.5*W*N+.5,p.push(R.x,R.y),f++}for(let V=0;V<i;V++){let H=x+V,q=z+V;v===!0?h.push(q,q+1,H):h.push(q+1,q,H),P+=3}c.addGroup(g,P,v===!0?1:2),g+=P}(function(){let v=new M,x=new M,R=0,T=(t-e)/n;for(let P=0;P<=s;P++){let D=[],N=P/s,z=N*(t-e)+e;for(let V=0;V<=i;V++){let H=V/i,q=H*l+o,W=Math.sin(q),J=Math.cos(q);x.x=z*W,x.y=-N*n+m,x.z=z*J,u.push(x.x,x.y,x.z),v.set(W,T,J).normalize(),d.push(v.x,v.y,v.z),p.push(H,1-N),D.push(f++)}_.push(D)}for(let P=0;P<i;P++)for(let D=0;D<s;D++){let N=_[D][P],z=_[D+1][P],V=_[D+1][P+1],H=_[D][P+1];(e>0||D!==0)&&(h.push(N,z,H),R+=3),(t>0||D!==s-1)&&(h.push(z,V,H),R+=3)}c.addGroup(g,R,0),g+=R})(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new Ae(u,3)),this.setAttribute("normal",new Ae(d,3)),this.setAttribute("uv",new Ae(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Gh=class r extends xs{constructor(e=1,t=1,n=32,i=1,s=!1,a=0,o=2*Math.PI){super(0,e,t,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new r(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},mr=class r extends Qe{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let s=[],a=[];function o(d,p,f,_){let m=_+1,g=[];for(let b=0;b<=m;b++){g[b]=[];let v=d.clone().lerp(f,b/m),x=p.clone().lerp(f,b/m),R=m-b;for(let T=0;T<=R;T++)g[b][T]=T===0&&b===m?v:v.clone().lerp(x,T/R)}for(let b=0;b<m;b++)for(let v=0;v<2*(m-b)-1;v++){let x=Math.floor(v/2);v%2==0?(l(g[b][x+1]),l(g[b+1][x]),l(g[b][x])):(l(g[b][x+1]),l(g[b+1][x+1]),l(g[b+1][x]))}}function l(d){s.push(d.x,d.y,d.z)}function c(d,p){let f=3*d;p.x=e[f+0],p.y=e[f+1],p.z=e[f+2]}function h(d,p,f,_){_<0&&d.x===1&&(a[p]=d.x-1),f.x===0&&f.z===0&&(a[p]=_/2/Math.PI+.5)}function u(d){return Math.atan2(d.z,-d.x)}(function(d){let p=new M,f=new M,_=new M;for(let m=0;m<t.length;m+=3)c(t[m+0],p),c(t[m+1],f),c(t[m+2],_),o(p,f,_,d)})(i),(function(d){let p=new M;for(let f=0;f<s.length;f+=3)p.x=s[f+0],p.y=s[f+1],p.z=s[f+2],p.normalize().multiplyScalar(d),s[f+0]=p.x,s[f+1]=p.y,s[f+2]=p.z})(n),(function(){let d=new M;for(let f=0;f<s.length;f+=3){d.x=s[f+0],d.y=s[f+1],d.z=s[f+2];let _=u(d)/2/Math.PI+.5,m=(p=d,Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))/Math.PI+.5);a.push(_,1-m)}var p;(function(){let f=new M,_=new M,m=new M,g=new M,b=new Y,v=new Y,x=new Y;for(let R=0,T=0;R<s.length;R+=9,T+=6){f.set(s[R+0],s[R+1],s[R+2]),_.set(s[R+3],s[R+4],s[R+5]),m.set(s[R+6],s[R+7],s[R+8]),b.set(a[T+0],a[T+1]),v.set(a[T+2],a[T+3]),x.set(a[T+4],a[T+5]),g.copy(f).add(_).add(m).divideScalar(3);let P=u(g);h(b,T+0,f,P),h(v,T+2,_,P),h(x,T+4,m,P)}})(),(function(){for(let f=0;f<a.length;f+=6){let _=a[f+0],m=a[f+2],g=a[f+4],b=Math.max(_,m,g),v=Math.min(_,m,g);b>.9&&v<.1&&(_<.2&&(a[f+0]+=1),m<.2&&(a[f+2]+=1),g<.2&&(a[f+4]+=1))}})()})(),this.setAttribute("position",new Ae(s,3)),this.setAttribute("normal",new Ae(s.slice(),3)),this.setAttribute("uv",new Ae(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.vertices,e.indices,e.radius,e.details)}},ys=class r extends mr{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=1/n;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},go=new M,bo=new M,Oc=new M,vo=new ti,Vh=class extends Qe{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let i=Math.pow(10,4),s=Math.cos(is*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let f=0;f<l;f+=3){a?(c[0]=a.getX(f),c[1]=a.getX(f+1),c[2]=a.getX(f+2)):(c[0]=f,c[1]=f+1,c[2]=f+2);let{a:_,b:m,c:g}=vo;if(_.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),g.fromBufferAttribute(o,c[2]),vo.getNormal(Oc),u[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,u[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,u[2]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,u[0]!==u[1]&&u[1]!==u[2]&&u[2]!==u[0])for(let b=0;b<3;b++){let v=(b+1)%3,x=u[b],R=u[v],T=vo[h[b]],P=vo[h[v]],D=`${x}_${R}`,N=`${R}_${x}`;N in d&&d[N]?(Oc.dot(d[N].normal)<=s&&(p.push(T.x,T.y,T.z),p.push(P.x,P.y,P.z)),d[N]=null):D in d||(d[D]={index0:c[b],index1:c[v],normal:Oc.clone()})}}for(let f in d)if(d[f]){let{index0:_,index1:m}=d[f];go.fromBufferAttribute(o,_),bo.fromBufferAttribute(o,m),p.push(go.x,go.y,go.z),p.push(bo.x,bo.y,bo.z)}this.setAttribute("position",new Ae(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},tl=class extends ba{constructor(e){super(e),this.uuid=dn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new ba().fromJSON(i))}return this}},vb=function(r,e,t=2){let n=e&&e.length,i=n?e[0]*t:r.length,s=nf(r,0,i,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,l,c,h,u,d,p;if(n&&(s=(function(f,_,m,g){let b=[],v,x,R,T,P;for(v=0,x=_.length;v<x;v++)R=_[v]*g,T=v<x-1?_[v+1]*g:f.length,P=nf(f,R,T,g,!1),P===P.next&&(P.steiner=!0),b.push(Eb(P));for(b.sort(Sb),v=0;v<b.length;v++)m=wb(b[v],m);return m})(r,e,s,t)),r.length>80*t){o=c=r[0],l=h=r[1];for(let f=t;f<i;f+=t)u=r[f],d=r[f+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);p=Math.max(c-o,h-l),p=p!==0?32767/p:0}return va(s,a,t,o,l,p,0),a};function nf(r,e,t,n,i){let s,a;if(i===(function(o,l,c,h){let u=0;for(let d=l,p=c-h;d<c;d+=h)u+=(o[p]-o[d])*(o[d+1]+o[p+1]),p=d;return u})(r,e,t,n)>0)for(s=e;s<t;s+=n)a=rf(s,r[s],r[s+1],a);else for(s=t-n;s>=e;s-=n)a=rf(s,r[s],r[s+1],a);return a&&fl(a,a.next)&&(xa(a),a=a.next),a}function gr(r,e){if(!r)return r;e||(e=r);let t,n=r;do if(t=!1,n.steiner||!fl(n,n.next)&&ft(n.prev,n,n.next)!==0)n=n.next;else{if(xa(n),n=e=n.prev,n===n.next)break;t=!0}while(t||n!==e);return e}function va(r,e,t,n,i,s,a){if(!r)return;!a&&s&&(function(h,u,d,p){let f=h;do f.z===0&&(f.z=Wh(f.x,f.y,u,d,p)),f.prevZ=f.prev,f.nextZ=f.next,f=f.next;while(f!==h);f.prevZ.nextZ=null,f.prevZ=null,(function(_){let m,g,b,v,x,R,T,P,D=1;do{for(g=_,_=null,x=null,R=0;g;){for(R++,b=g,T=0,m=0;m<D&&(T++,b=b.nextZ,b);m++);for(P=D;T>0||P>0&&b;)T!==0&&(P===0||!b||g.z<=b.z)?(v=g,g=g.nextZ,T--):(v=b,b=b.nextZ,P--),x?x.nextZ=v:_=v,v.prevZ=x,x=v;g=b}x.nextZ=null,D*=2}while(R>1)})(f)})(r,n,i,s);let o,l,c=r;for(;r.prev!==r.next;)if(o=r.prev,l=r.next,s?xb(r,n,i,s):_b(r))e.push(o.i/t|0),e.push(r.i/t|0),e.push(l.i/t|0),xa(r),r=l.next,c=l.next;else if((r=l)===c){a?a===1?va(r=yb(gr(r),e,t),e,t,n,i,s,2):a===2&&Mb(r,e,t,n,i,s):va(gr(r),e,t,n,i,s,1);break}}function _b(r){let e=r.prev,t=r,n=r.next;if(ft(e,t,n)>=0)return!1;let i=e.x,s=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=i<s?i<a?i:a:s<a?s:a,u=o<l?o<c?o:c:l<c?l:c,d=i>s?i>a?i:a:s>a?s:a,p=o>l?o>c?o:c:l>c?l:c,f=n.next;for(;f!==e;){if(f.x>=h&&f.x<=d&&f.y>=u&&f.y<=p&&ns(i,o,s,l,a,c,f.x,f.y)&&ft(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function xb(r,e,t,n){let i=r.prev,s=r,a=r.next;if(ft(i,s,a)>=0)return!1;let o=i.x,l=s.x,c=a.x,h=i.y,u=s.y,d=a.y,p=o<l?o<c?o:c:l<c?l:c,f=h<u?h<d?h:d:u<d?u:d,_=o>l?o>c?o:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,g=Wh(p,f,e,t,n),b=Wh(_,m,e,t,n),v=r.prevZ,x=r.nextZ;for(;v&&v.z>=g&&x&&x.z<=b;){if(v.x>=p&&v.x<=_&&v.y>=f&&v.y<=m&&v!==i&&v!==a&&ns(o,h,l,u,c,d,v.x,v.y)&&ft(v.prev,v,v.next)>=0||(v=v.prevZ,x.x>=p&&x.x<=_&&x.y>=f&&x.y<=m&&x!==i&&x!==a&&ns(o,h,l,u,c,d,x.x,x.y)&&ft(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;v&&v.z>=g;){if(v.x>=p&&v.x<=_&&v.y>=f&&v.y<=m&&v!==i&&v!==a&&ns(o,h,l,u,c,d,v.x,v.y)&&ft(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;x&&x.z<=b;){if(x.x>=p&&x.x<=_&&x.y>=f&&x.y<=m&&x!==i&&x!==a&&ns(o,h,l,u,c,d,x.x,x.y)&&ft(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function yb(r,e,t){let n=r;do{let i=n.prev,s=n.next.next;!fl(i,s)&&Wf(i,n,n.next,s)&&_a(i,s)&&_a(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),xa(n),xa(n.next),n=r=s),n=n.next}while(n!==r);return gr(n)}function Mb(r,e,t,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Ab(a,o)){let l=jf(a,o);return a=gr(a,a.next),l=gr(l,l.next),va(a,e,t,n,i,s,0),void va(l,e,t,n,i,s,0)}o=o.next}a=a.next}while(a!==r)}function Sb(r,e){return r.x-e.x}function wb(r,e){let t=(function(i,s){let a,o=s,l=-1/0,c=i.x,h=i.y;do{if(h<=o.y&&h>=o.next.y&&o.next.y!==o.y){let m=o.x+(h-o.y)*(o.next.x-o.x)/(o.next.y-o.y);if(m<=c&&m>l&&(l=m,a=o.x<o.next.x?o:o.next,m===c))return a}o=o.next}while(o!==s);if(!a)return null;let u=a,d=a.x,p=a.y,f,_=1/0;o=a;do c>=o.x&&o.x>=d&&c!==o.x&&ns(h<p?c:l,h,d,p,h<p?l:c,h,o.x,o.y)&&(f=Math.abs(h-o.y)/(c-o.x),_a(o,i)&&(f<_||f===_&&(o.x>a.x||o.x===a.x&&Tb(a,o)))&&(a=o,_=f)),o=o.next;while(o!==u);return a})(r,e);if(!t)return e;let n=jf(t,r);return gr(n,n.next),gr(t,t.next)}function Tb(r,e){return ft(r.prev,r,e.prev)<0&&ft(e.next,r,r.next)<0}function Wh(r,e,t,n,i){return(r=1431655765&((r=858993459&((r=252645135&((r=16711935&((r=(r-t)*i|0)|r<<8))|r<<4))|r<<2))|r<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-n)*i|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function Eb(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function ns(r,e,t,n,i,s,a,o){return(i-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(i-a)*(n-o)}function Ab(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!(function(t,n){let i=t;do{if(i.i!==t.i&&i.next.i!==t.i&&i.i!==n.i&&i.next.i!==n.i&&Wf(i,i.next,t,n))return!0;i=i.next}while(i!==t);return!1})(r,e)&&(_a(r,e)&&_a(e,r)&&(function(t,n){let i=t,s=!1,a=(t.x+n.x)/2,o=(t.y+n.y)/2;do i.y>o!=i.next.y>o&&i.next.y!==i.y&&a<(i.next.x-i.x)*(o-i.y)/(i.next.y-i.y)+i.x&&(s=!s),i=i.next;while(i!==t);return s})(r,e)&&(ft(r.prev,r,e.prev)||ft(r,e.prev,e))||fl(r,e)&&ft(r.prev,r,r.next)>0&&ft(e.prev,e,e.next)>0)}function ft(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function fl(r,e){return r.x===e.x&&r.y===e.y}function Wf(r,e,t,n){let i=xo(ft(r,e,t)),s=xo(ft(r,e,n)),a=xo(ft(t,n,r)),o=xo(ft(t,n,e));return i!==s&&a!==o||!(i!==0||!_o(r,t,e))||!(s!==0||!_o(r,n,e))||!(a!==0||!_o(t,r,n))||!(o!==0||!_o(t,e,n))}function _o(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function xo(r){return r>0?1:r<0?-1:0}function _a(r,e){return ft(r.prev,r,r.next)<0?ft(r,e,r.next)>=0&&ft(r,r.prev,e)>=0:ft(r,e,r.prev)<0||ft(r,r.next,e)<0}function jf(r,e){let t=new jh(r.i,r.x,r.y),n=new jh(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function rf(r,e,t,n){let i=new jh(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function xa(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function jh(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}var Pi=class r{static area(e){let t=e.length,n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return .5*n}static isClockWise(e){return r.area(e)<0}static triangulateShape(e,t){let n=[],i=[],s=[];sf(e),af(n,e);let a=e.length;t.forEach(sf);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,af(n,t[l]);let o=vb(n,i);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function sf(r){let e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function af(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}var Xh=class r extends Qe{constructor(e=new tl([new Y(.5,.5),new Y(-.5,.5),new Y(-.5,-.5),new Y(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],s=[];for(let o=0,l=e.length;o<l;o++)a(e[o]);function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,f=t.bevelSize!==void 0?t.bevelSize:p-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:Rb,v,x,R,T,P,D=!1;g&&(v=g.getSpacedPoints(h),D=!0,d=!1,x=g.computeFrenetFrames(h,!1),R=new M,T=new M,P=new M),d||(m=0,p=0,f=0,_=0);let N=o.extractPoints(c),z=N.shape,V=N.holes;if(!Pi.isClockWise(z)){z=z.reverse();for(let U=0,C=V.length;U<C;U++){let I=V[U];Pi.isClockWise(I)&&(V[U]=I.reverse())}}let H=Pi.triangulateShape(z,V),q=z;for(let U=0,C=V.length;U<C;U++){let I=V[U];z=z.concat(I)}function W(U,C,I){return C||console.error("THREE.ExtrudeGeometry: vec does not exist"),U.clone().addScaledVector(C,I)}let J=z.length,$=H.length;function ae(U,C,I){let S,L,F,ee=U.x-C.x,k=U.y-C.y,Z=I.x-U.x,K=I.y-U.y,ne=ee*ee+k*k,fe=ee*K-k*Z;if(Math.abs(fe)>Number.EPSILON){let pe=Math.sqrt(ne),Me=Math.sqrt(Z*Z+K*K),Ce=C.x-k/pe,je=C.y+ee/pe,Fe=((I.x-K/Me-Ce)*K-(I.y+Z/Me-je)*Z)/(ee*K-k*Z);S=Ce+ee*Fe-U.x,L=je+k*Fe-U.y;let Se=S*S+L*L;if(Se<=2)return new Y(S,L);F=Math.sqrt(Se/2)}else{let pe=!1;ee>Number.EPSILON?Z>Number.EPSILON&&(pe=!0):ee<-Number.EPSILON?Z<-Number.EPSILON&&(pe=!0):Math.sign(k)===Math.sign(K)&&(pe=!0),pe?(S=-k,L=ee,F=Math.sqrt(ne)):(S=ee,L=k,F=Math.sqrt(ne/2))}return new Y(S/F,L/F)}let re=[];for(let U=0,C=q.length,I=C-1,S=U+1;U<C;U++,I++,S++)I===C&&(I=0),S===C&&(S=0),re[U]=ae(q[U],q[I],q[S]);let _e=[],we,ie=re.concat();for(let U=0,C=V.length;U<C;U++){let I=V[U];we=[];for(let S=0,L=I.length,F=L-1,ee=S+1;S<L;S++,F++,ee++)F===L&&(F=0),ee===L&&(ee=0),we[S]=ae(I[S],I[F],I[ee]);_e.push(we),ie=ie.concat(we)}for(let U=0;U<m;U++){let C=U/m,I=p*Math.cos(C*Math.PI/2),S=f*Math.sin(C*Math.PI/2)+_;for(let L=0,F=q.length;L<F;L++){let ee=W(q[L],re[L],S);be(ee.x,ee.y,-I)}for(let L=0,F=V.length;L<F;L++){let ee=V[L];we=_e[L];for(let k=0,Z=ee.length;k<Z;k++){let K=W(ee[k],we[k],S);be(K.x,K.y,-I)}}}let ce=f+_;for(let U=0;U<J;U++){let C=d?W(z[U],ie[U],ce):z[U];D?(T.copy(x.normals[0]).multiplyScalar(C.x),R.copy(x.binormals[0]).multiplyScalar(C.y),P.copy(v[0]).add(T).add(R),be(P.x,P.y,P.z)):be(C.x,C.y,0)}for(let U=1;U<=h;U++)for(let C=0;C<J;C++){let I=d?W(z[C],ie[C],ce):z[C];D?(T.copy(x.normals[U]).multiplyScalar(I.x),R.copy(x.binormals[U]).multiplyScalar(I.y),P.copy(v[U]).add(T).add(R),be(P.x,P.y,P.z)):be(I.x,I.y,u/h*U)}for(let U=m-1;U>=0;U--){let C=U/m,I=p*Math.cos(C*Math.PI/2),S=f*Math.sin(C*Math.PI/2)+_;for(let L=0,F=q.length;L<F;L++){let ee=W(q[L],re[L],S);be(ee.x,ee.y,u+I)}for(let L=0,F=V.length;L<F;L++){let ee=V[L];we=_e[L];for(let k=0,Z=ee.length;k<Z;k++){let K=W(ee[k],we[k],S);D?be(K.x,K.y+v[h-1].y,v[h-1].x+I):be(K.x,K.y,u+I)}}}function ge(U,C){let I=U.length;for(;--I>=0;){let S=I,L=I-1;L<0&&(L=U.length-1);for(let F=0,ee=h+2*m;F<ee;F++){let k=J*F,Z=J*(F+1);A(C+S+k,C+L+k,C+L+Z,C+S+Z)}}}function be(U,C,I){l.push(U),l.push(C),l.push(I)}function de(U,C,I){E(U),E(C),E(I);let S=i.length/3,L=b.generateTopUV(n,i,S-3,S-2,S-1);O(L[0]),O(L[1]),O(L[2])}function A(U,C,I,S){E(U),E(C),E(S),E(C),E(I),E(S);let L=i.length/3,F=b.generateSideWallUV(n,i,L-6,L-3,L-2,L-1);O(F[0]),O(F[1]),O(F[3]),O(F[1]),O(F[2]),O(F[3])}function E(U){i.push(l[3*U+0]),i.push(l[3*U+1]),i.push(l[3*U+2])}function O(U){s.push(U.x),s.push(U.y)}(function(){let U=i.length/3;if(d){let C=0,I=J*C;for(let S=0;S<$;S++){let L=H[S];de(L[2]+I,L[1]+I,L[0]+I)}C=h+2*m,I=J*C;for(let S=0;S<$;S++){let L=H[S];de(L[0]+I,L[1]+I,L[2]+I)}}else{for(let C=0;C<$;C++){let I=H[C];de(I[2],I[1],I[0])}for(let C=0;C<$;C++){let I=H[C];de(I[0]+J*h,I[1]+J*h,I[2]+J*h)}}n.addGroup(U,i.length/3-U,0)})(),(function(){let U=i.length/3,C=0;ge(q,C),C+=q.length;for(let I=0,S=V.length;I<S;I++){let L=V[I];ge(L,C),C+=L.length}n.addGroup(U,i.length/3-U,1)})()}this.setAttribute("position",new Ae(i,3)),this.setAttribute("uv",new Ae(s,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n,i){if(i.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){let o=t[s];i.shapes.push(o.uuid)}else i.shapes.push(t.uuid);return i.options=Object.assign({},n),n.extrudePath!==void 0&&(i.options.extrudePath=n.extrudePath.toJSON()),i})(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let n=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];n.push(o)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Qo[i.type]().fromJSON(i)),new r(n,e.options)}},Rb={generateTopUV:function(r,e,t,n,i){let s=e[3*t],a=e[3*t+1],o=e[3*n],l=e[3*n+1],c=e[3*i],h=e[3*i+1];return[new Y(s,a),new Y(o,l),new Y(c,h)]},generateSideWallUV:function(r,e,t,n,i,s){let a=e[3*t],o=e[3*t+1],l=e[3*t+2],c=e[3*n],h=e[3*n+1],u=e[3*n+2],d=e[3*i],p=e[3*i+1],f=e[3*i+2],_=e[3*s],m=e[3*s+1],g=e[3*s+2];return Math.abs(o-h)<Math.abs(a-c)?[new Y(a,1-l),new Y(c,1-u),new Y(d,1-f),new Y(_,1-g)]:[new Y(o,1-l),new Y(h,1-u),new Y(p,1-f),new Y(m,1-g)]}},qh=class r extends mr{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2;super([-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Yh=class r extends mr{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Hn=class r extends Qe{constructor(e=.5,t=1,n=32,i=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n);let o=[],l=[],c=[],h=[],u=e,d=(t-e)/(i=Math.max(1,i)),p=new M,f=new Y;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){let g=s+m/n*a;p.x=u*Math.cos(g),p.y=u*Math.sin(g),l.push(p.x,p.y,p.z),c.push(0,0,1),f.x=(p.x/t+1)/2,f.y=(p.y/t+1)/2,h.push(f.x,f.y)}u+=d}for(let _=0;_<i;_++){let m=_*(n+1);for(let g=0;g<n;g++){let b=g+m,v=b,x=b+n+1,R=b+n+2,T=b+1;o.push(v,x,T),o.push(x,R,T)}}this.setIndex(o),this.setAttribute("position",new Ae(l,3)),this.setAttribute("normal",new Ae(c,3)),this.setAttribute("uv",new Ae(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Kh=class r extends Qe{constructor(e=new tl([new Y(0,.5),new Y(-.5,-.5),new Y(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],s=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;function c(h){let u=i.length/3,d=h.extractPoints(t),p=d.shape,f=d.holes;Pi.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,g=f.length;m<g;m++){let b=f[m];Pi.isClockWise(b)===!0&&(f[m]=b.reverse())}let _=Pi.triangulateShape(p,f);for(let m=0,g=f.length;m<g;m++){let b=f[m];p=p.concat(b)}for(let m=0,g=p.length;m<g;m++){let b=p[m];i.push(b.x,b.y,0),s.push(0,0,1),a.push(b.x,b.y)}for(let m=0,g=_.length;m<g;m++){let b=_[m],v=b[0]+u,x=b[1]+u,R=b[2]+u;n.push(v,x,R),l+=3}}this.setIndex(n),this.setAttribute("position",new Ae(i,3)),this.setAttribute("normal",new Ae(s,3)),this.setAttribute("uv",new Ae(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n){if(n.shapes=[],Array.isArray(t))for(let i=0,s=t.length;i<s;i++){let a=t[i];n.shapes.push(a.uuid)}else n.shapes.push(t.uuid);return n})(this.parameters.shapes,e)}static fromJSON(e,t){let n=[];for(let i=0,s=e.shapes.length;i<s;i++){let a=t[e.shapes[i]];n.push(a)}return new r(n,e.curveSegments)}},Jh=class r extends Qe{constructor(e=1,t=32,n=16,i=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new M,d=new M,p=[],f=[],_=[],m=[];for(let g=0;g<=n;g++){let b=[],v=g/n,x=0;g===0&&a===0?x=.5/t:g===n&&l===Math.PI&&(x=-.5/t);for(let R=0;R<=t;R++){let T=R/t;u.x=-e*Math.cos(i+T*s)*Math.sin(a+v*o),u.y=e*Math.cos(a+v*o),u.z=e*Math.sin(i+T*s)*Math.sin(a+v*o),f.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(T+x,1-v),b.push(c++)}h.push(b)}for(let g=0;g<n;g++)for(let b=0;b<t;b++){let v=h[g][b+1],x=h[g][b],R=h[g+1][b],T=h[g+1][b+1];(g!==0||a>0)&&p.push(v,x,T),(g!==n-1||l<Math.PI)&&p.push(x,R,T)}this.setIndex(p),this.setAttribute("position",new Ae(f,3)),this.setAttribute("normal",new Ae(_,3)),this.setAttribute("uv",new Ae(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Zh=class r extends mr{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},$h=class r extends Qe{constructor(e=1,t=.4,n=12,i=48,s=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],l=[],c=[],h=new M,u=new M,d=new M;for(let p=0;p<=n;p++)for(let f=0;f<=i;f++){let _=f/i*s,m=p/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(_),u.y=(e+t*Math.cos(m))*Math.sin(_),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(f/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let f=1;f<=i;f++){let _=(i+1)*p+f-1,m=(i+1)*(p-1)+f-1,g=(i+1)*(p-1)+f,b=(i+1)*p+f;a.push(_,m,b),a.push(m,g,b)}this.setIndex(a),this.setAttribute("position",new Ae(o,3)),this.setAttribute("normal",new Ae(l,3)),this.setAttribute("uv",new Ae(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},Qh=class r extends Qe{constructor(e=1,t=.4,n=64,i=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:s,q:a},n=Math.floor(n),i=Math.floor(i);let o=[],l=[],c=[],h=[],u=new M,d=new M,p=new M,f=new M,_=new M,m=new M,g=new M;for(let v=0;v<=n;++v){let x=v/n*s*Math.PI*2;b(x,s,a,e,p),b(x+.01,s,a,e,f),m.subVectors(f,p),g.addVectors(f,p),_.crossVectors(m,g),g.crossVectors(_,m),_.normalize(),g.normalize();for(let R=0;R<=i;++R){let T=R/i*Math.PI*2,P=-t*Math.cos(T),D=t*Math.sin(T);u.x=p.x+(P*g.x+D*_.x),u.y=p.y+(P*g.y+D*_.y),u.z=p.z+(P*g.z+D*_.z),l.push(u.x,u.y,u.z),d.subVectors(u,p).normalize(),c.push(d.x,d.y,d.z),h.push(v/n),h.push(R/i)}}for(let v=1;v<=n;v++)for(let x=1;x<=i;x++){let R=(i+1)*(v-1)+(x-1),T=(i+1)*v+(x-1),P=(i+1)*v+x,D=(i+1)*(v-1)+x;o.push(R,T,D),o.push(T,P,D)}function b(v,x,R,T,P){let D=Math.cos(v),N=Math.sin(v),z=R/x*v,V=Math.cos(z);P.x=T*(2+V)*.5*D,P.y=T*(2+V)*N*.5,P.z=T*Math.sin(z)*.5}this.setIndex(o),this.setAttribute("position",new Ae(l,3)),this.setAttribute("normal",new Ae(c,3)),this.setAttribute("uv",new Ae(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},eu=class r extends Qe{constructor(e=new Zo(new M(-1,-1,0),new M(-1,1,0),new M(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new M,l=new M,c=new Y,h=new M,u=[],d=[],p=[],f=[];function _(m){h=e.getPointAt(m/t,h);let g=a.normals[m],b=a.binormals[m];for(let v=0;v<=i;v++){let x=v/i*Math.PI*2,R=Math.sin(x),T=-Math.cos(x);l.x=T*g.x+R*b.x,l.y=T*g.y+R*b.y,l.z=T*g.z+R*b.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}(function(){for(let m=0;m<t;m++)_(m);_(s===!1?t:0),(function(){for(let m=0;m<=t;m++)for(let g=0;g<=i;g++)c.x=m/t,c.y=g/i,p.push(c.x,c.y)})(),(function(){for(let m=1;m<=t;m++)for(let g=1;g<=i;g++){let b=(i+1)*(m-1)+(g-1),v=(i+1)*m+(g-1),x=(i+1)*m+g,R=(i+1)*(m-1)+g;f.push(b,v,R),f.push(v,x,R)}})()})(),this.setIndex(f),this.setAttribute("position",new Ae(u,3)),this.setAttribute("normal",new Ae(d,3)),this.setAttribute("uv",new Ae(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new r(new Qo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},tu=class extends Qe{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,i=new M,s=new M;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],d=u.start;for(let p=d,f=d+u.count;p<f;p+=3)for(let _=0;_<3;_++){let m=o.getX(p+_),g=o.getX(p+(_+1)%3);i.fromBufferAttribute(a,m),s.fromBufferAttribute(a,g),of(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,u=3*o+(c+1)%3;i.fromBufferAttribute(a,h),s.fromBufferAttribute(a,u),of(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Ae(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function of(r,e,t){let n=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(n)!==!0&&t.has(i)!==!0&&(t.add(n),t.add(i),!0)}var Wv=Object.freeze({__proto__:null,BoxGeometry:Ii,CapsuleGeometry:Hh,CircleGeometry:_s,ConeGeometry:Gh,CylinderGeometry:xs,DodecahedronGeometry:ys,EdgesGeometry:Vh,ExtrudeGeometry:Xh,IcosahedronGeometry:qh,LatheGeometry:el,OctahedronGeometry:Yh,PlaneGeometry:dr,PolyhedronGeometry:mr,RingGeometry:Hn,ShapeGeometry:Kh,SphereGeometry:Jh,TetrahedronGeometry:Zh,TorusGeometry:$h,TorusKnotGeometry:Qh,TubeGeometry:eu,WireframeGeometry:tu});var nl=class extends Rt{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}},Ms=class extends Kt{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new he(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new he(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Y(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},rn=class extends Ms{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Y(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Tt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new he(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new he(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new he(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var br=class extends Kt{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new he(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new he(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Y(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function yo(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Cb(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Pb(r){let e=r.length,t=new Array(e);for(let n=0;n!==e;++n)t[n]=n;return t.sort((function(n,i){return r[n]-r[i]})),t}function lf(r,e,t){let n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){let o=t[s]*e;for(let l=0;l!==e;++l)i[a++]=r[o+l]}return i}function Xf(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}var Ni=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break t}a=t.length;break n}if(e>=s)break e;{let o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break t}a=n,n=0}}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},nu=class extends Ni{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:es,endingEnd:es}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,a=e+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case ts:s=e,o=2*t-n;break;case Ao:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ts:a=e,l=2*n-t;break;case Ao:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}let c=.5*(n-t),h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,f=(n-t)/(i-t),_=f*f,m=_*f,g=-d*m+2*d*_-d*f,b=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*f+1,v=(-1-p)*m+(1.5+p)*_+.5*f,x=p*m-p*_;for(let R=0;R!==o;++R)s[R]=g*a[h+R]+b*a[c+R]+v*a[l+R]+x*a[u+R];return s}},il=class extends Ni{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}},iu=class extends Ni{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},pn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=yo(t,this.TimeBufferType),this.values=yo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:yo(e.times,Array),values:yo(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new iu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new il(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new nu(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case hs:t=this.InterpolantFactoryMethodDiscrete;break;case us:t=this.InterpolantFactoryMethodLinear;break;case nc:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(n);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return hs;case this.InterpolantFactoryMethodLinear:return us;case this.InterpolantFactoryMethodSmooth:return nc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&Cb(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===nc,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o];if(c!==e[o+1]&&(o!==1||c!==e[0]))if(i)l=!0;else{let h=o*n,u=h-n,d=h+n;for(let p=0;p!==n;++p){let f=t[h+p];if(f!==t[u+p]||f!==t[d+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*n,u=a*n;for(let d=0;d!==n;++d)t[u+d]=t[h+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=new this.constructor(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}};pn.prototype.TimeBufferType=Float32Array,pn.prototype.ValueBufferType=Float32Array,pn.prototype.DefaultInterpolation=us;var Ai=class extends pn{constructor(e,t,n){super(e,t,n)}};Ai.prototype.ValueTypeName="bool",Ai.prototype.ValueBufferType=Array,Ai.prototype.DefaultInterpolation=hs,Ai.prototype.InterpolantFactoryMethodLinear=void 0,Ai.prototype.InterpolantFactoryMethodSmooth=void 0;var rl=class extends pn{};rl.prototype.ValueTypeName="color";var oi=class extends pn{};oi.prototype.ValueTypeName="number";var ru=class extends Ni{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t),c=e*o;for(let h=c+o;c!==h;c+=4)Ft.slerpFlat(s,0,a,c-o,a,c,l);return s}},Gn=class extends pn{InterpolantFactoryMethodLinear(e){return new ru(this.times,this.values,this.getValueSize(),e)}};Gn.prototype.ValueTypeName="quaternion",Gn.prototype.InterpolantFactoryMethodSmooth=void 0;var Ri=class extends pn{constructor(e,t,n){super(e,t,n)}};Ri.prototype.ValueTypeName="string",Ri.prototype.ValueBufferType=Array,Ri.prototype.DefaultInterpolation=hs,Ri.prototype.InterpolantFactoryMethodLinear=void 0,Ri.prototype.InterpolantFactoryMethodSmooth=void 0;var Vn=class extends pn{};Vn.prototype.ValueTypeName="vector";var vr=class{constructor(e="",t=-1,n=[],i=2500){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=dn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Lb(n[a]).scale(i));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(pn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);let h=Pb(l);l=lf(l,1,h),c=lf(c,1,h),i||l[0]!==0||(l.push(s),c.push(c[0])),a.push(new oi(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(s);if(h&&h.length>1){let u=h[1],d=i[u];d||(i[u]=d=[]),d.push(c)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,u,d,p,f){if(d.length!==0){let _=[],m=[];Xf(d,_,m,p),_.length!==0&&f.push(new h(u,_,m))}},i=[],s=e.name||"default",a=e.fps||30,o=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let h=0;h<c.length;h++){let u=c[h].keys;if(u&&u.length!==0)if(u[0].morphTargets){let d={},p;for(p=0;p<u.length;p++)if(u[p].morphTargets)for(let f=0;f<u[p].morphTargets.length;f++)d[u[p].morphTargets[f]]=-1;for(let f in d){let _=[],m=[];for(let g=0;g!==u[p].morphTargets.length;++g){let b=u[p];_.push(b.time),m.push(b.morphTarget===f?1:0)}i.push(new oi(".morphTargetInfluence["+f+"]",_,m))}l=d.length*a}else{let d=".bones["+t[h].name+"]";n(Vn,d+".position",u,"pos",i),n(Gn,d+".quaternion",u,"rot",i),n(Vn,d+".scale",u,"scl",i)}}return i.length===0?null:new this(s,l,i,o)}resetDuration(){let e=0;for(let t=0,n=this.tracks.length;t!==n;++t){let i=this.tracks[t];e=Math.max(e,i.times[i.times.length-1])}return this.duration=e,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function Lb(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=(function(t){switch(t.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return oi;case"vector":case"vector2":case"vector3":case"vector4":return Vn;case"color":return rl;case"quaternion":return Gn;case"bool":case"boolean":return Ai;case"string":return Ri}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+t)})(r.type);if(r.times===void 0){let t=[],n=[];Xf(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}var Ci={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}},su=class{constructor(e,t,n){let i=this,s,a=!1,o=0,l=0,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){l++,a===!1&&i.onStart!==void 0&&i.onStart(h,o,l),a=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,l),o===l&&(a=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return s?s(h):h},this.setURLModifier=function(h){return s=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],f=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return f}return null}}},Tu=new su,li=class{constructor(e){this.manager=e!==void 0?e:Tu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise((function(i,s){n.load(e,i,t,s)}))}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};li.DEFAULT_MATERIAL_NAME="__DEFAULT";var ei={},au=class extends Error{constructor(e,t){super(e),this.response=t}},ya=class extends li{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=Ci.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout((()=>{t&&t(s),this.manager.itemEnd(e)}),0),s;if(ei[e]!==void 0)return void ei[e].push({onLoad:t,onProgress:n,onError:i});ei[e]=[],ei[e].push({onLoad:t,onProgress:n,onError:i});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then((c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=ei[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=d?parseInt(d):0,f=p!==0,_=0,m=new ReadableStream({start(g){(function b(){u.read().then((({done:v,value:x})=>{if(v)g.close();else{_+=x.byteLength;let R=new ProgressEvent("progress",{lengthComputable:f,loaded:_,total:p});for(let T=0,P=h.length;T<P;T++){let D=h[T];D.onProgress&&D.onProgress(R)}g.enqueue(x),b()}}),(v=>{g.error(v)}))})()}});return new Response(m)}throw new au(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)})).then((c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then((h=>new DOMParser().parseFromString(h,o)));case"json":return c.json();default:if(o===void 0)return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(o),u=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(u);return c.arrayBuffer().then((p=>d.decode(p)))}}})).then((c=>{Ci.add(e,c);let h=ei[e];delete ei[e];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onLoad&&p.onLoad(c)}})).catch((c=>{let h=ei[e];if(h===void 0)throw this.manager.itemError(e),c;delete ei[e];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onError&&p.onError(c)}this.manager.itemError(e)})).finally((()=>{this.manager.itemEnd(e)})),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var ou=class extends li{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=Ci.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout((function(){t&&t(a),s.manager.itemEnd(e)}),0),a;let o=ha("img");function l(){h(),Ci.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(u){h(),i&&i(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}};var sl=class extends li{constructor(e){super(e)}load(e,t,n,i){let s=new Ut,a=new ou(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,(function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)}),n,i),s}},Ss=class extends ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new he(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},al=class extends Ss{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.groundColor=new he(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},kc=new Te,cf=new M,hf=new M,Ma=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Y(512,512),this.map=null,this.mapPass=null,this.matrix=new Te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ms,this._frameExtents=new Y(1,1),this._viewportCount=1,this._viewports=[new Je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;cf.setFromMatrixPosition(e.matrixWorld),t.position.copy(cf),hf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(hf),t.updateMatrixWorld(),kc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(kc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},lu=class extends Ma{constructor(){super(new Et(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=2*ps*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;n===t.fov&&i===t.aspect&&s===t.far||(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},ol=class extends Ss{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.target=new ct,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new lu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},uf=new Te,ea=new M,Fc=new M,cu=class extends Ma{constructor(){super(new Et(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Y(4,2),this._viewportCount=6,this._viewports=[new Je(2,1,1,1),new Je(0,1,1,1),new Je(3,1,1,1),new Je(1,1,1,1),new Je(3,0,1,1),new Je(1,0,1,1)],this._cubeDirections=[new M(1,0,0),new M(-1,0,0),new M(0,0,1),new M(0,0,-1),new M(0,1,0),new M(0,-1,0)],this._cubeUps=[new M(0,1,0),new M(0,1,0),new M(0,1,0),new M(0,1,0),new M(0,0,1),new M(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ea.setFromMatrixPosition(e.matrixWorld),n.position.copy(ea),Fc.copy(n.position),Fc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Fc),n.updateMatrixWorld(),i.makeTranslation(-ea.x,-ea.y,-ea.z),uf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uf)}},Oi=class extends Ss{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new cu}get power(){return 4*this.intensity*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},hu=class extends Ma{constructor(){super(new Di(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ws=class extends Ss{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.target=new ct,this.shadow=new hu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var ki=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var ll=class extends li{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=Ci.get(e);if(a!==void 0)return s.manager.itemStart(e),a.then?void a.then((c=>{t&&t(c),s.manager.itemEnd(e)})).catch((c=>{i&&i(c)})):(setTimeout((function(){t&&t(a),s.manager.itemEnd(e)}),0),a);let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let l=fetch(e,o).then((function(c){return c.blob()})).then((function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))})).then((function(c){return Ci.add(e,c),t&&t(c),s.manager.itemEnd(e),c})).catch((function(c){i&&i(c),Ci.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)}));Ci.add(e,l),s.manager.itemStart(e)}};var jv=new Te,Xv=new Te,qv=new Te;var Ts=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=df(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=df();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function df(){return performance.now()}var Yv=new M,Kv=new Ft,Jv=new M,Zv=new M;var $v=new M,Qv=new Ft,e_=new M,t_=new M;var uu=class{constructor(e,t,n){let i,s,a;switch(this.binding=e,this.valueSize=n,t){case"quaternion":i=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(6*n),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(5*n);break;default:i=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(5*n)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,s=e*i+i,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[s+o]=n[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(n,s,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){let l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-s,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,a=i;s!==a;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=3*this.valueSize;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let a=0;a!==s;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){Ft.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){let a=this._workIndex*s;Ft.multiplyQuaternionsFlat(e,a,e,t,e,n),Ft.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,s){let a=1-i;for(let o=0;o!==s;++o){let l=t+o;e[l]=e[l]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,s){for(let a=0;a!==s;++a){let o=t+a;e[o]=e[o]+e[n+a]*i}}},Eu="\\[\\]\\.:\\/",Ib=new RegExp("["+Eu+"]","g"),Bc="[^"+Eu+"]",Db="[^"+Eu.replace("\\.","")+"]",Ub=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",Bc)+/(WCOD+)?/.source.replace("WCOD",Db)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Bc)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Bc)+"$"),Nb=["material","materials","bones","map"],tt=class r{constructor(e,t,n){this.path=t,this.parsedPath=n||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,n):new r(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ib,"")}static parseTrackName(e){let t=Ub.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);Nb.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[n]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[n]}if(c!==void 0){if(e[c]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[c]}}let a=e[i];if(a===void 0){let c=t.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e)}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};tt.Composite=class{constructor(r,e,t){let n=t||tt.parseTrackName(e);this._targetGroup=r,this._bindings=r.subscribe_(e,n)}getValue(r,e){this.bind();let t=this._targetGroup.nCachedObjects_,n=this._bindings[t];n!==void 0&&n.getValue(r,e)}setValue(r,e){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].setValue(r,e)}bind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].bind()}unbind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].unbind()}},tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},tt.prototype.GetterByBindingType=[tt.prototype._getValue_direct,tt.prototype._getValue_array,tt.prototype._getValue_arrayElement,tt.prototype._getValue_toArray],tt.prototype.SetterByBindingTypeAndVersioning=[[tt.prototype._setValue_direct,tt.prototype._setValue_direct_setNeedsUpdate,tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_array,tt.prototype._setValue_array_setNeedsUpdate,tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_arrayElement,tt.prototype._setValue_arrayElement_setNeedsUpdate,tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_fromArray,tt.prototype._setValue_fromArray_setNeedsUpdate,tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var du=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let s=t.tracks,a=s.length,o=new Array(a),l={endingStart:es,endingEnd:es};for(let c=0;c!==a;++c){let h=s[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=2201,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){let i=this._clip.duration,s=e._clip.duration,a=s/i,o=i/s;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,s=i.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);let l=o.parameterPositions,c=o.sampleValues;return l[0]=s,l[1]=s+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled)return void this._updateWeight(e);let s=this._startTime;if(s!==null){let l=(e-s)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let l=this._interpolants,c=this._propertyBindings;if(this.blendMode===gg)for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);else for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulate(i,o)}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;n!==null&&(t*=n.evaluate(e)[0],e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t))}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,s=this._loopCount,a=n===2202;if(e===0)return s===-1||!a||1&~s?i:t-i;if(n===2200){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else{if(!(i<0)){this.time=i;break e}i=0}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){let o=Math.floor(i/t);i-=t*o,s+=Math.abs(o);let l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&!(1&~s))return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=ts,i.endingEnd=ts):(i.endingStart=e?this.zeroSlopeAtStart?ts:es:Ao,i.endingEnd=t?this.zeroSlopeAtEnd?ts:es:Ao)}_scheduleFading(e,t,n){let i=this._mixer,s=i.time,a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,l=a.sampleValues;return o[0]=s,l[0]=t,o[1]=s+e,l[1]=n,this}},Ob=new Float32Array(1),Es=class extends si{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==s;++u){let d=i[u],p=d.name,f=h[p];if(f!==void 0)++f.referenceCount,a[u]=f;else{if(f=a[u],f!==void 0){f._cacheIndex===null&&(++f.referenceCount,this._addInactiveBinding(f,l,p));continue}let _=t&&t._propertyBindings[u].binding.parsedPath;f=new uu(tt.create(n,p,_),d.ValueTypeName,d.getValueSize()),++f.referenceCount,this._addInactiveBinding(f,l,p),a[u]=f}o[u].resultBuffer=f.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let s=t[n];s.useCount++==0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let s=t[n];--s.useCount==0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,s=this._actionsByClip,a=s[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=a;else{let o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let s=e._clip.uuid,a=this._actionsByClip,o=a[s],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null,delete o.actionByRoot[(e._localRoot||this._root).uuid],l.length===0&&delete a[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let s=t[n];--s.referenceCount==0&&this._removeInactiveBinding(s)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,s=this._bindings,a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,a=this._bindingsByRootAndName,o=a[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[s],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new il(new Float32Array(2),new Float32Array(2),1,Ob),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){let i=t||this._root,s=i.uuid,a=typeof e=="string"?vr.findByName(i,e):e,o=a!==null?a.uuid:e,l=this._actionsByClip[o],c=null;if(n===void 0&&(n=a!==null?a.blendMode:mg),l!==void 0){let u=l.actionByRoot[s];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;let h=new du(this,a,t,n);return this._bindAction(h,c),this._addInactiveAction(h,o,s),h}existingAction(e,t){let n=t||this._root,i=n.uuid,s=typeof e=="string"?vr.findByName(n,e):e,a=s?s.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){let e=this._actions;for(let t=this._nActiveActions-1;t>=0;--t)e[t].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,s,a);let o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){let a=s.knownActions;for(let o=0,l=a.length;o!==l;++o){let c=a[o];this._deactivateAction(c);let h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let s in n){let a=n[s].actionByRoot[t];a!==void 0&&(this._deactivateAction(a),this._removeInactiveAction(a))}let i=this._bindingsByRootAndName[t];if(i!==void 0)for(let s in i){let a=i[s];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var pf=new Te,cl=class{constructor(e,t,n=0,i=1/0){this.ray=new ur(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new ua,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return pf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(pf),this}intersectObject(e,t=!0,n=[]){return pu(e,this,n,t),n.sort(ff),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)pu(e[i],this,n,t);return n.sort(ff),n}};function ff(r,e){return r.distance-e.distance}function pu(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let s=r.children;for(let a=0,o=s.length;a<o;a++)pu(s[a],e,t,!0)}}var n_=new Y;var i_=new M,r_=new M;var s_=new M;var a_=new M,o_=new Te,l_=new Te;var c_=new M,h_=new he,u_=new he;var d_=new M,p_=new M,f_=new M;var m_=new M,g_=new da;var b_=new Zt;var v_=new M;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");function Au(r,e){if(e===Df)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===wa||e===ul){let t=r.getIndex();if(t===null){let a=[],o=r.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);r.setIndex(a),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}let n=t.count-2,i=[];if(e===wa)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}var ml=class extends li{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Uu(t)}),this.register(function(t){return new Nu(t)}),this.register(function(t){return new Wu(t)}),this.register(function(t){return new ju(t)}),this.register(function(t){return new Xu(t)}),this.register(function(t){return new ku(t)}),this.register(function(t){return new Fu(t)}),this.register(function(t){return new Bu(t)}),this.register(function(t){return new zu(t)}),this.register(function(t){return new Du(t)}),this.register(function(t){return new Hu(t)}),this.register(function(t){return new Ou(t)}),this.register(function(t){return new Vu(t)}),this.register(function(t){return new Gu(t)}),this.register(function(t){return new Lu(t)}),this.register(function(t){return new qu(t)}),this.register(function(t){return new Yu(t)})}load(e,t,n,i){let s=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=ki.extractUrlBase(e);a=ki.resolveURL(c,this.path)}else a=ki.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new ya(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,a,function(h){t(h),s.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s,a={},o={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Zf){try{a[ze.KHR_BINARY_GLTF]=new Ku(e)}catch(u){i&&i(u);return}s=JSON.parse(a[ze.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new nd(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){let u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case ze.KHR_MATERIALS_UNLIT:a[u]=new Iu;break;case ze.KHR_DRACO_MESH_COMPRESSION:a[u]=new Ju(s,this.dracoLoader);break;case ze.KHR_TEXTURE_TRANSFORM:a[u]=new Zu;break;case ze.KHR_MESH_QUANTIZATION:a[u]=new $u;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}};function Fb(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}var ze={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Lu=class{constructor(e){this.parser=e,this.name=ze.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],c,h=new he(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Vt);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new ws(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Oi(h),c.distance=u;break;case"spot":c=new ol(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,ci(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},Iu=class{constructor(){this.name=ze.KHR_MATERIALS_UNLIT}getMaterialType(){return ht}extendParams(e,t,n){let i=[];e.color=new he(1,1,1),e.opacity=1;let s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Vt),e.opacity=a[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,_t))}return Promise.all(i)}},Du=class{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}},Uu=class{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:rn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Y(o,o)}return Promise.all(s)}},Nu=class{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:rn}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}},Ou=class{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:rn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}},ku=class{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:rn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[];t.sheenColor=new he(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Vt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,_t)),a.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}},Fu=class{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:rn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}},Bu=class{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:rn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new he().setRGB(o[0],o[1],o[2],Vt),Promise.all(s)}},zu=class{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:rn}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}},Hu=class{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:rn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new he().setRGB(o[0],o[1],o[2],Vt),a.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,_t)),Promise.all(s)}},Gu=class{constructor(e){this.parser=e,this.name=ze.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:rn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(s)}},Vu=class{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:rn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}},Wu=class{constructor(e){this.parser=e,this.name=ze.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let s=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}},ju=class{constructor(e){this.parser=e,this.name=ze.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;let a=s.extensions[t],o=i.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Xu=class{constructor(e){this.parser=e,this.name=ze.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;let a=s.extensions[t],o=i.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},qu=class{constructor(e){this.name=ze.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){let l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(p){return p.buffer}):a.ready.then(function(){let p=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(p),h,u,d,i.mode,i.filter),p})})}else return null}},Yu=class{constructor(e){this.name=ze.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==mn.TRIANGLES&&c.mode!==mn.TRIANGLE_STRIP&&c.mode!==mn.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,p=[];for(let f of u){let _=new Te,m=new M,g=new Ft,b=new M(1,1,1),v=new Go(f.geometry,f.material,d);for(let x=0;x<d;x++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,x),l.SCALE&&b.fromBufferAttribute(l.SCALE,x),v.setMatrixAt(x,_.compose(m,g,b));for(let x in l)if(x==="_COLOR_0"){let R=l[x];v.instanceColor=new fr(R.array,R.itemSize,R.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&f.geometry.setAttribute(x,l[x]);ct.prototype.copy.call(v,f),this.parser.assignFinalMaterial(v),p.push(v)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}},Zf="glTF",Ta=12,qf={JSON:1313821514,BIN:5130562},Ku=class{constructor(e){this.name=ze.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Ta),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Zf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Ta,s=new DataView(e,Ta),a=0;for(;a<i;){let o=s.getUint32(a,!0);a+=4;let l=s.getUint32(a,!0);if(a+=4,l===qf.JSON){let c=new Uint8Array(e,Ta+a,o);this.content=n.decode(c)}else if(l===qf.BIN){let c=Ta+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Ju=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ze.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let h in a){let u=ed[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=ed[h]||h.toLowerCase();if(a[h]!==void 0){let d=n.accessors[e.attributes[h]],p=Rs[d.componentType];c[u]=p.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(p){for(let f in p.attributes){let _=p.attributes[f],m=l[f];m!==void 0&&(_.normalized=m)}u(p)},o,c,Vt,d)})})}},Zu=class{constructor(){this.name=ze.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},$u=class{constructor(){this.name=ze.KHR_MESH_QUANTIZATION}},gl=class extends Ni{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=i-t,u=(n-t)/h,d=u*u,p=d*u,f=e*c,_=f-c,m=-2*p+3*d,g=p-d,b=1-m,v=g-d+u;for(let x=0;x!==o;x++){let R=a[_+x+o],T=a[_+x+l]*h,P=a[f+x+o],D=a[f+x]*h;s[x]=b*R+v*T+m*P+g*D}return s}},Bb=new Ft,Qu=class extends gl{interpolate_(e,t,n,i){let s=super.interpolate_(e,t,n,i);return Bb.fromArray(s).normalize().toArray(s),s}},mn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Rs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Yf={9728:Gt,9729:tn,9984:mu,9985:na,9986:Qr,9987:ni},Kf={33071:cr,33648:oa,10497:ri},Ru={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ed={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Hi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},zb={CUBICSPLINE:void 0,LINEAR:us,STEP:hs},Cu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Hb(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Ms({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:fu})),r.DefaultMaterial}function _r(r,e,t){for(let n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ci(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Gb(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);let a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):r.attributes.position;a.push(d)}if(i){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):r.attributes.normal;o.push(d)}if(s){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):r.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],d=c[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function Vb(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Wb(r){let e,t=r.extensions&&r.extensions[ze.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Pu(t.attributes):e=r.indices+":"+Pu(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+Pu(r.targets[n]);return e}function Pu(r){let e="",t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function td(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function jb(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var Xb=new Te,nd=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Fb,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,a=-1;if(typeof navigator<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&a<98?this.textureLoader=new sl(this.options.manager):this.textureLoader=new ll(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ya(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return _r(s,o,i),ci(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){let a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){let a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),s=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,h]of a.children.entries())s(h,o.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ze.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(s,a){n.load(ki.resolveURL(t.uri,i.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let a=Ru[i.type],o=Rs[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new At(c,a,l))}let s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(a){let o=a[0],l=Ru[i.type],c=Rs[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,f=i.normalized===!0,_,m;if(p&&p!==u){let g=Math.floor(d/p),b="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+g+":"+i.count,v=t.cache.get(b);v||(_=new c(o,g*p,i.count*p/h),v=new gs(_,p/h),t.cache.add(b,v)),m=new pr(v,l,d%p/h,f)}else o===null?_=new c(i.count*l):_=new c(o,d,i.count*l),m=new At(_,l,f);if(i.sparse!==void 0){let g=Ru.SCALAR,b=Rs[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,R=new b(a[1],v,i.sparse.count*g),T=new c(a[2],x,i.sparse.count*l);o!==null&&(m=new At(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let P=0,D=R.length;P<D;P++){let N=R[P];if(m.setX(N,T[P*l]),l>=2&&m.setY(N,T[P*l+1]),l>=3&&m.setZ(N,T[P*l+2]),l>=4&&m.setW(N,T[P*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=f}return m})}loadTexture(e){let t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){let i=this,s=this.json,a=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(s.samplers||{})[a.sampler]||{};return h.magFilter=Yf[d.magFilter]||tn,h.minFilter=Yf[d.minFilter]||ni,h.wrapS=Kf[d.wrapS]||ri,h.wrapT=Kf[d.wrapT]||ri,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Gt&&h.minFilter!==tn,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=i.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;let d=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(d,p){let f=d;t.isImageBitmapLoader===!0&&(f=function(_){let m=new Ut(_);m.needsUpdate=!0,d(m)}),t.load(ki.resolveURL(u,s.path),f,void 0,p)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),ci(u,a),u.userData.mimeType=a.mimeType||jb(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[ze.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[ze.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=s.associations.get(a);a=s.extensions[ze.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new ma,Kt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new fa,Kt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||s||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),s&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Ms}loadMaterial(e){let t=this,n=this.json,i=this.extensions,s=n.materials[e],a,o={},l=s.extensions||{},c=[];if(l[ze.KHR_MATERIALS_UNLIT]){let u=i[ze.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,s,t))}else{let u=s.pbrMetallicRoughness||{};if(o.color=new he(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Vt),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,_t)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=Fi);let h=s.alphaMode||Cu.OPAQUE;if(h===Cu.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Cu.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==ht&&(c.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new Y(1,1),s.normalTexture.scale!==void 0)){let u=s.normalTexture.scale;o.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&a!==ht&&(c.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==ht){let u=s.emissiveFactor;o.emissive=new he().setRGB(u[0],u[1],u[2],Vt)}return s.emissiveTexture!==void 0&&a!==ht&&c.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,_t)),Promise.all(c).then(function(){let u=new a(o);return s.name&&(u.name=s.name),ci(u,s),t.associations.set(u,{materials:e}),s.extensions&&_r(i,u,s),u})}createUniqueName(e){let t=tt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[ze.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Jf(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],h=Wb(c),u=i[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[ze.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=Jf(new Qe,c,t),i[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,i=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let h=a[l].material===void 0?Hb(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let p=0,f=h.length;p<f;p++){let _=h[p],m=a[p],g,b=c[p];if(m.mode===mn.TRIANGLES||m.mode===mn.TRIANGLE_STRIP||m.mode===mn.TRIANGLE_FAN||m.mode===void 0)g=s.isSkinnedMesh===!0?new Bo(_,b):new qe(_,b),g.isSkinnedMesh===!0&&g.normalizeSkinWeights(),m.mode===mn.TRIANGLE_STRIP?g.geometry=Au(g.geometry,ul):m.mode===mn.TRIANGLE_FAN&&(g.geometry=Au(g.geometry,wa));else if(m.mode===mn.LINES)g=new jo(_,b);else if(m.mode===mn.LINE_STRIP)g=new bs(_,b);else if(m.mode===mn.LINE_LOOP)g=new Xo(_,b);else if(m.mode===mn.POINTS)g=new qo(_,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&Vb(g,s),g.name=t.createUniqueName(s.name||"mesh_"+e),ci(g,s),m.extensions&&_r(i,g,m),t.assignFinalMaterial(g),u.push(g)}for(let p=0,f=u.length;p<f;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return s.extensions&&_r(i,u[0],s),u[0];let d=new nn;s.extensions&&_r(i,d,s),t.associations.set(d,{meshes:e});for(let p=0,f=u.length;p<f;p++)d.add(u[p]);return d})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Et(Uf.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Di(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ci(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let s=i.pop(),a=i,o=[],l=[];for(let c=0,h=a.length;c<h;c++){let u=a[c];if(u){o.push(u);let d=new Te;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ho(o,l)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){let p=i.channels[u],f=i.samplers[p.sampler],_=p.target,m=_.node,g=i.parameters!==void 0?i.parameters[f.input]:f.input,b=i.parameters!==void 0?i.parameters[f.output]:f.output;_.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",b)),c.push(f),h.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let d=u[0],p=u[1],f=u[2],_=u[3],m=u[4],g=[];for(let b=0,v=d.length;b<v;b++){let x=d[b],R=p[b],T=f[b],P=_[b],D=m[b];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();let N=n._createAnimationTracks(x,R,T,P,D);if(N)for(let z=0;z<N.length;z++)g.push(N[z])}return new vr(s,void 0,g)})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){let a=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(a),l]).then(function(c){let h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(d,Xb)});for(let p=0,f=u.length;p<f;p++)h.add(u[p]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let s=t.nodes[e],a=s.name?i.createUniqueName(s.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(s.isBone===!0?h=new pa:c.length>1?h=new nn:c.length===1?h=c[0]:h=new ct,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(s.name&&(h.userData.name=s.name,h.name=a),ci(h,s),s.extensions&&_r(n,h,s),s.matrix!==void 0){let u=new Te;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,s=new nn;n.name&&(s.name=i.createUniqueName(n.name)),ci(s,n),n.extensions&&_r(t,s,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++)s.add(l[h]);let c=h=>{let u=new Map;for(let[d,p]of i.associations)(d instanceof Kt||d instanceof Ut)&&u.set(d,p);return h.traverse(d=>{let p=i.associations.get(d);p!=null&&u.set(d,p)}),u};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){let a=[],o=e.name?e.name:e.uuid,l=[];Hi[s.path]===Hi.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let c;switch(Hi[s.path]){case Hi.weights:c=oi;break;case Hi.rotation:c=Gn;break;case Hi.position:case Hi.scale:c=Vn;break;default:n.itemSize===1?c=oi:c=Vn;break}let h=i.interpolation!==void 0?zb[i.interpolation]:us,u=this._getArrayFromAccessor(n);for(let d=0,p=l.length;d<p;d++){let f=new c(l[d]+"."+Hi[s.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(f),a.push(f)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=td(t.constructor),i=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof Gn?Qu:gl;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function qb(r,e,t){let n=e.attributes,i=new Zt;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new M(l[0],l[1],l[2]),new M(c[0],c[1],c[2])),o.normalized){let h=td(Rs[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let o=new M,l=new M;for(let c=0,h=s.length;c<h;c++){let u=s[c];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],p=d.min,f=d.max;if(p!==void 0&&f!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(f[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(f[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(f[2]))),d.normalized){let _=td(Rs[d.componentType]);l.multiplyScalar(_)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}r.boundingBox=i;let a=new $t;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=a}function Jf(r,e,t){let n=e.attributes,i=[];function s(a,o){return t.getDependency("accessor",a).then(function(l){r.setAttribute(o,l)})}for(let a in n){let o=ed[a]||a.toLowerCase();o in r.attributes||i.push(s(n[a],o))}if(e.indices!==void 0&&!r.index){let a=t.getDependency("accessor",e.indices).then(function(o){r.setIndex(o)});i.push(a)}return ke.workingColorSpace!==Vt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ke.workingColorSpace}" not supported.`),ci(r,e),qb(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Gb(r,e.targets,t):r})}var $f=(function(){"use strict";var r="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?e:r,s,a=WebAssembly.instantiate(o(i),{}).then(function(g){s=g.instance,s.exports.__wasm_call_ctors()});function o(g){for(var b=new Uint8Array(g.length),v=0;v<g.length;++v){var x=g.charCodeAt(v);b[v]=x>96?x-97:x>64?x-39:x+4}for(var R=0,v=0;v<g.length;++v)b[R++]=b[v]<60?n[b[v]]:(b[v]-60)*64+b[++v];return b.buffer.slice(0,R)}function l(g,b,v,x,R,T){var P=s.exports.sbrk,D=v+3&-4,N=P(D*x),z=P(R.length),V=new Uint8Array(s.exports.memory.buffer);V.set(R,z);var H=g(N,v,x,z,R.length);if(H==0&&T&&T(N,D,x),b.set(V.subarray(N,N+v*x)),P(N-P(0)),H!=0)throw new Error("Malformed buffer data: "+H)}var c={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],d=0;function p(g){var b={object:new Worker(g),pending:0,requests:{}};return b.object.onmessage=function(v){var x=v.data;b.pending-=x.count,b.requests[x.id][x.action](x.value),delete b.requests[x.id]},b}function f(g){for(var b="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(o(i))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+l.toString()+m.toString(),v=new Blob([b],{type:"text/javascript"}),x=URL.createObjectURL(v),R=0;R<g;++R)u[R]=p(x);URL.revokeObjectURL(x)}function _(g,b,v,x,R){for(var T=u[0],P=1;P<u.length;++P)u[P].pending<T.pending&&(T=u[P]);return new Promise(function(D,N){var z=new Uint8Array(v),V=d++;T.pending+=g,T.requests[V]={resolve:D,reject:N},T.object.postMessage({id:V,count:g,size:b,source:z,mode:x,filter:R},[z.buffer])})}function m(g){a.then(function(){var b=g.data;try{var v=new Uint8Array(b.count*b.size);l(s.exports[b.mode],v,b.count,b.size,b.source,s.exports[b.filter]),self.postMessage({id:b.id,count:b.count,action:"resolve",value:v},[v.buffer])}catch(x){self.postMessage({id:b.id,count:b.count,action:"reject",value:x})}})}return{ready:a,supported:!0,useWorkers:function(g){f(g)},decodeVertexBuffer:function(g,b,v,x,R){l(s.exports.meshopt_decodeVertexBuffer,g,b,v,x,s.exports[c[R]])},decodeIndexBuffer:function(g,b,v,x){l(s.exports.meshopt_decodeIndexBuffer,g,b,v,x)},decodeIndexSequence:function(g,b,v,x){l(s.exports.meshopt_decodeIndexSequence,g,b,v,x)},decodeGltfBuffer:function(g,b,v,x,R,T){l(s.exports[h[R]],g,b,v,x,s.exports[c[T]])},decodeGltfBufferAsync:function(g,b,v,x,R){return u.length>0?_(g,b,v,h[x],c[R]):a.then(function(){var T=new Uint8Array(g*b);return l(s.exports[h[x]],T,g,b,v,s.exports[c[R]]),T})}}})();function Qf(r){let e=new Map,t=new Map,n=r.clone();return em(r,n,function(i,s){e.set(s,i),t.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let s=i,a=e.get(i),o=a.skeleton.bones;s.skeleton=a.skeleton.clone(),s.bindMatrix.copy(a.bindMatrix),s.skeleton.bones=o.map(function(l){return t.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),n}function em(r,e,t){t(r,e);for(let n=0;n<r.children.length;n++)em(r.children[n],e.children[n],t)}var bl={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var sn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Kb=new Di(-1,1,1,-1,0,1),id=class extends Qe{constructor(){super(),this.setAttribute("position",new Ae([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ae([0,2,0,0,2,0],2))}},Jb=new id,Gi=class{constructor(e){this._mesh=new qe(Jb,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Kb)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var vl=class extends sn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Rt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=zi.clone(e.uniforms),this.material=new Rt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Gi(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Ea=class extends sn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}},_l=class extends sn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var xl=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Y);this._width=n.width,this._height=n.height,t=new Yt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Pn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new vl(bl),this.copyPass.material.blending=gf,this.clock=new Ts}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let i=0,s=this.passes.length;i<s;i++){let a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Ea!==void 0&&(a instanceof Ea?n=!0:a instanceof _l&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Y);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var yl=class extends sn{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new he}render(e,t,n){let i=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}};var tm={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new he(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Cs=class r extends sn{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new Y(e.x,e.y):new Y(256,256),this.clearColor=new he(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Yt(s,a,{type:Pn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new Yt(s,a,{type:Pn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let p=new Yt(s,a,{type:Pn});p.texture.name="UnrealBloomPass.v"+u,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),s=Math.round(s/2),a=Math.round(a/2)}let o=tm;this.highPassUniforms=zi.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Rt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Y(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new M(1,1,1),new M(1,1,1),new M(1,1,1),new M(1,1,1),new M(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=bl;this.copyUniforms=zi.clone(h.uniforms),this.blendMaterial=new Rt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Bi,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new he,this.oldClearAlpha=1,this.basic=new ht,this.fsQuad=new Gi(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new Y(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Rt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Y(.5,.5)},direction:{value:new Y(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new Rt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};Cs.BlurDirectionX=new Y(1,0);Cs.BlurDirectionY=new Y(0,1);var nm={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

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

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Ml=class extends sn{constructor(){super();let e=nm;this.uniforms=zi.clone(e.uniforms),this.material=new nl({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Gi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ke.getTransfer(this._outputColorSpace)===Ze&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===bf?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===vf?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===_f?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===xf?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===yf?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Mf&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var le=r=>document.getElementById(r),qn=matchMedia("(pointer:coarse)").matches||("ontouchstart"in window||navigator.maxTouchPoints>0)&&Math.min(innerWidth,innerHeight)<820;document.documentElement.classList.toggle("touch",qn);var dt=r=>r<1e3?Math.floor(r)+"":r<1e6?(r/1e3).toFixed(r<1e4?1:0)+"K":(r/1e6).toFixed(1)+"M",ad=7,Mt=()=>(ad=ad*16807%2147483647)/2147483647,Ne={coin:(r=18)=>`<svg width="${r}" height="${r}" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="#f6c453" stroke="#8a5a10" stroke-width="2"/><circle cx="12" cy="12" r="5" fill="none" stroke="#8a5a10" stroke-width="1.5"/></svg>`,ember:(r=18)=>`<svg width="${r}" height="${r}" viewBox="0 0 24 24"><path d="M12 2c1 4 6 6 6 12a6 6 0 0 1-12 0c0-3 2-5 3-6 0 2 1 3 2 3 0-3-1-6 1-9z" fill="#ff8a3c" stroke="#7a2a10" stroke-width="1.8" stroke-linejoin="round"/><path d="M12 13c1 1 3 2 3 4a3 3 0 0 1-6 0c0-1 1-2 1-3 1 1 2 1 2-1z" fill="#ffd56b"/></svg>`,sword:'<svg width="22" height="22" viewBox="0 0 24 24"><path d="M14 3h7v7L10 21l-3-3z" fill="#d9e1f2" stroke="#1b1f2e" stroke-width="1.6" stroke-linejoin="round"/><path d="M5 13l6 6M3 21l3-3" stroke="#c8902a" stroke-width="2.4" stroke-linecap="round"/></svg>',speed:'<svg width="22" height="22" viewBox="0 0 24 24"><path d="M13 2L4 14h7l-1 8 9-12h-7z" fill="#f6c453" stroke="#1b1f2e" stroke-width="1.6" stroke-linejoin="round"/></svg>',range:'<svg width="22" height="22" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none" stroke="#8fd3ff" stroke-width="2" stroke-dasharray="3 2"/><circle cx="12" cy="12" r="3" fill="#8fd3ff"/></svg>',crit:'<svg width="22" height="22" viewBox="0 0 24 24"><path d="M12 2l2.5 6.5L21 9l-5 4.5L17.5 21 12 17l-5.5 4L8 13.5 3 9l6.5-.5z" fill="#ff7a59" stroke="#1b1f2e" stroke-width="1.6" stroke-linejoin="round"/></svg>',heart:'<svg width="22" height="22" viewBox="0 0 24 24"><path d="M12 21s-8-5-9.6-9.6C1 7.6 3.6 4.5 7 4.5c2 0 3.5 1.2 5 3 1.5-1.8 3-3 5-3 3.4 0 6 3.1 4.6 6.9C20 16 12 21 12 21z" fill="#e2574c" stroke="#1b1f2e" stroke-width="1.6"/></svg>',regen:'<svg width="22" height="22" viewBox="0 0 24 24"><path d="M10 3h4v7h7v4h-7v7h-4v-7H3v-4h7z" fill="#4cd17a" stroke="#1b1f2e" stroke-width="1.6" stroke-linejoin="round"/></svg>',shield:'<svg width="22" height="22" viewBox="0 0 24 24"><path d="M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5z" fill="#8fa6d9" stroke="#1b1f2e" stroke-width="1.6" stroke-linejoin="round"/><path d="M12 6v12" stroke="#1b1f2e" stroke-width="1.4"/></svg>',spin:'<svg width="34" height="34" viewBox="0 0 32 32"><path d="M16 5a11 11 0 1 1-10 6" fill="none" stroke="#fff4dc" stroke-width="3" stroke-linecap="round"/><path d="M3 7l3 5 5-3" fill="none" stroke="#fff4dc" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 10h6v3l-6 9-2-2z" fill="#d9e1f2"/></svg>',fire:'<svg width="34" height="34" viewBox="0 0 32 32"><path d="M16 3c2 6 9 8 9 17a9 9 0 0 1-18 0c0-5 3-7 4-9 0 3 2 5 3 5 0-5-1-9 2-13z" fill="#ff8a3c" stroke="#fff4dc" stroke-width="2" stroke-linejoin="round"/><path d="M16 17c2 2 4 3 4 6a4 4 0 0 1-8 0c0-2 1-3 2-4 0 1 1 2 2 2 0-2-1-3 0-4z" fill="#ffd56b"/></svg>',heal:'<svg width="34" height="34" viewBox="0 0 32 32"><path d="M16 28s-11-7-13-13C1.6 10 5 6 9.5 6 12 6 14 7.6 16 10c2-2.4 4-4 6.5-4C27 6 30.4 10 29 15c-2 6-13 13-13 13z" fill="#4cd17a" stroke="#fff4dc" stroke-width="2"/><path d="M16 12v9M11.5 16.5h9" stroke="#fff4dc" stroke-width="2.6" stroke-linecap="round"/></svg>',volley:'<svg width="34" height="34" viewBox="0 0 32 32"><g stroke="#fff4dc" stroke-width="2.4" stroke-linecap="round"><path d="M6 26L24 8M10 28L28 10M4 22L20 6"/></g><g fill="#f6c453"><path d="M24 8l-5 1 4 4zM28 10l-5 1 4 4zM20 6l-5 1 4 4z"/></g></svg>',dash:'<svg width="34" height="34" viewBox="0 0 32 32"><path d="M4 10h12M2 16h14M4 22h12" stroke="#8fd3ff" stroke-width="2.6" stroke-linecap="round"/><path d="M18 8l10 8-10 8z" fill="#fff4dc" stroke="#1b1f2e" stroke-width="1.6" stroke-linejoin="round"/></svg>',meteor:'<svg width="34" height="34" viewBox="0 0 32 32"><path d="M4 4l12 12M8 2l10 10M2 9l10 10" stroke="#ff8a3c" stroke-width="2.6" stroke-linecap="round"/><circle cx="21" cy="21" r="8" fill="#8a5a3c" stroke="#fff4dc" stroke-width="2"/><circle cx="18" cy="19" r="2" fill="#5a3a24"/><circle cx="24" cy="24" r="1.6" fill="#5a3a24"/></svg>',nova:'<svg width="34" height="34" viewBox="0 0 32 32"><g stroke="#bfe8ff" stroke-width="2.6" stroke-linecap="round"><path d="M16 3v26M4.7 9.5l22.6 13M4.7 22.5l22.6-13"/><path d="M12 5l4 3 4-3M12 27l4-3 4 3"/></g></svg>',bow:'<svg width="22" height="22" viewBox="0 0 24 24"><path d="M5 3c10 2 14 8 16 18" fill="none" stroke="#c8902a" stroke-width="2.4" stroke-linecap="round"/><path d="M5 3l16 18" stroke="#fff4dc" stroke-width="1.2"/><path d="M3 13l10-2" stroke="#d9e1f2" stroke-width="2" stroke-linecap="round"/></svg>',staff:'<svg width="22" height="22" viewBox="0 0 24 24"><path d="M6 22L16 8" stroke="#8a5a3c" stroke-width="2.6" stroke-linecap="round"/><circle cx="17.5" cy="6" r="4" fill="#9b8ad6" stroke="#1b1f2e" stroke-width="1.6"/><circle cx="17.5" cy="6" r="1.6" fill="#fff"/></svg>',pause:'<svg width="18" height="18" viewBox="0 0 24 24"><rect x="6" y="5" width="4" height="14" rx="1.5" fill="#fff4dc"/><rect x="14" y="5" width="4" height="14" rx="1.5" fill="#fff4dc"/></svg>',skull:(r=18)=>`<svg width="${r}" height="${r}" viewBox="0 0 24 24"><path d="M12 3c5 0 8 3 8 7 0 3-2 4-2 6v3H6v-3c0-2-2-3-2-6 0-4 3-7 8-7z" fill="#e8e3d6" stroke="#1b1f2e" stroke-width="1.6"/><circle cx="9" cy="11" r="2" fill="#1b1f2e"/><circle cx="15" cy="11" r="2" fill="#1b1f2e"/></svg>`},Rl="lastlight1",te={dailyDone:"",dailyStreak:0,embers:0,best:0,runs:0,hero:"knight",heroes:{knight:!0},map:"graveyard",bestBy:{},lv:[],endless:!1,meta:{blade:0,armor:0,greed:0,focus:0,start:0,wind:0},tut:0},Zb=!1,bm=()=>{try{return window.CG&&bt.sdk&&bt.sdk.data}catch{return null}};function bn(){if(Zb)return;let r=JSON.stringify(te);try{localStorage.setItem(Rl,r)}catch{}try{let e=bm();e&&e.setItem(Rl,r)}catch{}}function vm(r){try{let e=JSON.parse(r||"null");e&&(Object.assign(te,e),te.heroes=Object.assign({knight:!0},e.heroes),te.bestBy=Object.assign({},e.bestBy),te.lv=e.lv||[],!te.bestBy.graveyard&&te.best&&(te.bestBy.graveyard=te.best),te.meta=Object.assign({blade:0,armor:0,greed:0,focus:0,start:0,wind:0},e.meta))}catch{}}vm(localStorage.getItem(Rl));var Sr={blade:{ic:Ne.sword,n:"Sharper Blade",d:"+20% base damage",max:20,cost:r=>Math.round(12*Math.pow(1.45,r))},armor:{ic:Ne.shield,n:"Forged Armor",d:"+20% base health",max:20,cost:r=>Math.round(12*Math.pow(1.45,r))},greed:{ic:Ne.coin(22),n:"Gold Seeker",d:"+15% gold from kills",max:15,cost:r=>Math.round(18*Math.pow(1.5,r))},focus:{ic:Ne.speed,n:"Quick Hands",d:"\u22128% skill cooldowns",max:6,cost:r=>Math.round(30*Math.pow(1.7,r))},start:{ic:Ne.ember(22),n:"War Chest",d:"Start each night with +60 gold",max:10,cost:r=>Math.round(25*Math.pow(1.6,r))},wind:{ic:Ne.heal.replace(/34/g,"22"),n:"Second Wind",d:"Unlocks a healing skill",max:1,cost:()=>80}},Yn=new Oo({antialias:!0}),Cl=qn;Yn.setPixelRatio(Math.min(Cl?1.5:2,devicePixelRatio));Yn.setSize(innerWidth,innerHeight);Yn.shadowMap.enabled=!0;Yn.shadowMap.type=mf;Yn.outputColorSpace=_t;document.body.prepend(Yn.domElement);var We=new Fo,md=new he(1055280);We.background=md;We.fog=new ko(md,24,52);var Wn=new Et(34,innerWidth/innerHeight,.5,200),Ua=new xl(Yn);Ua.addPass(new yl(We,Wn));var $b=new Cs(new Y(innerWidth,innerHeight),.32,.5,.92);Cl||Ua.addPass($b);Ua.addPass(new Ml);var wl=new al(10467568,2765904,1.5);We.add(wl);var gi=new ws(11847935,1.7);gi.position.set(12,26,-8);gi.castShadow=!0;gi.shadow.mapSize.set(Cl?1024:2048,Cl?1024:2048);Object.assign(gi.shadow.camera,{left:-26,right:26,top:26,bottom:-26,near:2,far:80});gi.shadow.bias=-4e-4;gi.shadow.radius=3;We.add(gi);var Ca=new M(0,0,-1.9),Ns=new Oi(16742954,0,16,1.6);We.add(Ns);var Pl=new Oi(16747068,45,22,1.5);Pl.position.set(0,1.8,-1.9);We.add(Pl);var Ll=document.createElement("canvas");Ll.width=Ll.height=512;function _m(r,e){let t=Ll.getContext("2d");for(let i=0;i<8;i++)for(let s=0;s<8;s++)t.fillStyle=(s+i)%2?r:e,t.fillRect(s*64,i*64,64,64);let n=t.getImageData(0,0,512,512);for(let i=0;i<n.data.length;i+=4){let s=(Math.random()-.5)*10;n.data[i]+=s,n.data[i+1]+=s,n.data[i+2]+=s*.5}t.putImageData(n,0,0),window.groundTex&&(groundTex.needsUpdate=!0)}_m("#4f7a3c","#477236");{let r=new vs(Ll);window.groundTex=r,r.wrapS=r.wrapT=ri,r.repeat.set(16,16),r.colorSpace=_t,r.magFilter=Gt;let e=new qe(new dr(140,140),new br({map:r}));e.rotation.x=-Math.PI/2,e.receiveShadow=!0,We.add(e);let t=document.createElement("canvas");t.width=t.height=256;let n=t.getContext("2d"),i=n.createRadialGradient(128,128,0,128,128,128);i.addColorStop(0,"rgba(92,70,48,1)"),i.addColorStop(.55,"rgba(84,66,46,.85)"),i.addColorStop(1,"rgba(84,66,46,0)"),n.fillStyle=i,n.fillRect(0,0,256,256);let s=new qe(new _s(4.2,48),new br({map:new vs(t),transparent:!0,depthWrite:!1}));s.rotation.x=-Math.PI/2,s.position.set(0,.01,-.6),s.receiveShadow=!0,We.add(s)}var Ds=new qe(new Hn(.97,1,96),new ht({color:16774364,transparent:!0,opacity:.35,depthWrite:!1}));Ds.rotation.x=-Math.PI/2;Ds.position.y=.03;We.add(Ds);function Qb(){let r=document.createElement("canvas");r.width=r.height=64;let e=r.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.3,"rgba(255,255,255,.8)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),new vs(r)}var Na=Qb(),Pa=new nn;Pa.position.copy(Ca);We.add(Pa);{let r=new br({color:7171962}),e=new br({color:7029798});for(let t=0;t<10;t++){let n=t/10*Math.PI*2,i=new qe(new ys(.28,0),r);i.position.set(Math.cos(n)*.9,.15,Math.sin(n)*.9),i.rotation.set(Mt()*3,Mt()*3,0),i.castShadow=!0,Pa.add(i)}for(let t=0;t<5;t++){let n=new qe(new xs(.11,.13,1.4,7),e);n.position.y=.35,n.rotation.set(1.1,t/5*Math.PI*2,0),n.castShadow=!0,Pa.add(n)}}var ev=46,xm=[];for(let r=0;r<ev;r++){let e=new Ui(new ai({map:Na,color:new he().setHSL(.06+Mt()*.05,1,.55),transparent:!0,depthWrite:!1,blending:Bi}));e.userData={o:Mt(),s:.5+Mt()*.7,x:(Mt()-.5)*.6,z:(Mt()-.5)*.6},Pa.add(e),xm.push(e)}var ym="",tv="",nv="",iv="";Tu.onProgress=(r,e,t)=>{let n=le("loading");n.style.display!=="none"&&(n.innerHTML=`<div style='text-align:center'>LOADING ${Math.round(e/t*100)}%<div style='width:220px;height:8px;background:#1b2135;border-radius:5px;margin-top:10px;overflow:hidden'><i style='display:block;height:100%;width:${e/t*100}%;background:linear-gradient(90deg,#e2574c,#f6c453)'></i></div><small style='opacity:.6;letter-spacing:0;font-weight:700'>first visit downloads about 20 MB</small></div>`)};var Mm=new ml;Mm.setMeshoptDecoder($f);var Il=r=>new Promise((e,t)=>Mm.load(r,e,void 0,t)),gd=r=>r.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),im=null,Sm={},se=null,an=null,xe={},Pr={knight:{n:"Knight",role:"Sword \xB7 close range",ic:Ne.sword,file:"Knight.glb",hide:/Shield|Offhand|^1H_Sword$/,idle:"2H_Melee_Idle",atk:["2H_Melee_Attack_Slice","2H_Melee_Attack_Chop","2H_Melee_Attack_Stab","2H_Melee_Attack_Spinning"],spinA:"2H_Melee_Attack_Spinning",type:"melee",dmg:1,spd:1,reach:2.5,hp:1,speed:4.6,skills:["blast","spin","heal"],unlock:0,bars:[4,1,5,3],tag:"Tough and simple. Spin through the crowd."},ranger:{n:"Ranger",role:"Crossbow \xB7 long range",ic:Ne.bow,file:"Rogue_Hooded.glb",hide:/Knife|Throwable|^1H_Crossbow$/,idle:"2H_Ranged_Aiming",atk:["2H_Ranged_Shoot","2H_Ranged_Shooting","2H_Ranged_Shoot","Throw"],spinA:"Dodge_Forward",type:"arrow",dmg:.72,spd:1.45,reach:7.2,hp:.75,speed:5.3,skills:["volley","dash","heal"],unlock:0,afterLevel:2,bars:[3,5,2,5],tag:"Fast and fragile. Keep your distance, dash out of trouble."},mage:{n:"Mage",role:"Fire staff \xB7 area damage",ic:Ne.staff,file:"Mage.glb",hide:/Spellbook|1H_Wand/,idle:"Idle",atk:["Spellcast_Shoot","Spellcast_Shoot","Spellcast_Shoot","Spellcast_Raise"],spinA:"Spellcast_Raise",type:"fireball",dmg:1.05,spd:.8,reach:6.2,hp:.72,speed:4.3,skills:["meteor","nova","heal"],unlock:0,afterLevel:5,bars:[5,4,2,2],tag:qn?"Slow but explosive. Fireballs splash whole groups.":"Hold left click to throw fireballs at your cursor. They splash whole groups."}},Tl={},St=()=>Pr[te.hero||"knight"],La={graveyard:{n:"Moonlit Graveyard",sub:"Where it all begins",sky:1055280,hemi:[10467568,2765904,1.5],moon:[11847935,1.7],ground:["#4f7a3c","#477236"],hp:1,em:1,mix:{rogue:0,warrior:0,mage:0},unlock:null,swatch:"linear-gradient(135deg,#1b2a4a,#3a5a3a)"},pumpkin:{n:"Pumpkin Hollow",sub:"Fast rogues \xB7 \xD71.35 embers",sky:2824750,hemi:[16760714,3809844,1.35],moon:[16754792,1.55],ground:["#6f7a34","#66702f"],hp:1.18,em:1.35,mix:{rogue:.22,warrior:0,mage:0},unlock:{map:"graveyard",wave:8},swatch:"linear-gradient(135deg,#4a2236,#c8702a)"},bloodmoon:{n:"Blood Moon",sub:"The graveyard, but worse",sky:2755602,hemi:[16747146,3805720,1.3],moon:[16738906,1.6],ground:["#4a5a34","#43532f"],hp:1,em:1,mix:{rogue:.1,warrior:.15,mage:.12},unlock:null,swatch:""},village:{n:"Fallen Village",sub:"Armored dead \xB7 \xD71.8 embers",sky:1446448,hemi:[11574527,2366524,1.35],moon:[13350655,1.65],ground:["#4c5c3c","#45553a"],hp:1.4,em:1.8,mix:{rogue:0,warrior:.18,mage:.1},unlock:{map:"pumpkin",wave:8},swatch:"linear-gradient(135deg,#251c48,#7a3a3a)"}},Xn=["graveyard","pumpkin","village","bloodmoon"],rv=r=>Math.floor(Math.max(0,r-1)/5),rm=[{n:"Rogue Rush",d:"Every skeleton is a fast rogue.",force:"rogue"},{n:"Giant Night",d:"Bigger, tougher skeletons that drop double gold.",hpMul:1.6,goldMul:2,scale:1.3},{n:"Glass Cannon",d:"You deal double damage but have half health.",dmgMul:2,heroHp:.5},{n:"Bone Storm",d:"Every wave is 60% bigger.",sizeMul:1.6},{n:"Mage Circle",d:"Skeleton mages everywhere.",force:"mage",forceP:.5},{n:"Boss Rush",d:"A bone giant joins every wave.",bossEvery:!0},{n:"Cold Fire",d:"The fire will not heal you tonight.",noFireHeal:!0}],od=()=>{let r=new Date;return r.getFullYear()+"-"+(r.getMonth()+1)+"-"+r.getDate()},sm=()=>Math.floor((Date.now()-new Date().getTimezoneOffset()*6e4)/864e5),bd=()=>({mod:rm[sm()%rm.length],area:["graveyard","pumpkin","village","bloodmoon"][sm()%4],lvl:Math.min(9,Math.max(0,te.lv.filter(Boolean).length-2))}),wm=()=>60+10*Math.min(6,te.dailyStreak||0),Vl=12,Lr=5,vd=r=>Xn[Math.floor(r/3)%Xn.length],_d=()=>La[y?y.dailyArea||(y.lvl!=null?vd(y.lvl):Xn[y.stage%Xn.length]):"graveyard"],Ia=()=>y.wave+(y.lvl!=null?y.lvl*1.5+Math.max(0,y.lvl-3)*.6:0),am="",Is={},Ps=new nn;We.add(Ps);async function Sl(r,e){if(Is[r]===void 0)try{Is[r]=(await Il(e)).scene}catch{Is[r]=null}return Is[r]}var Tm=null;async function Dl(r="graveyard",e=!1){let t=La[r];e||(Tm=r),ad=r==="graveyard"?7:r==="pumpkin"?21:33;let n=["grave_A","grave_B","gravestone","gravemarker_A","tree_dead_large","tree_dead_medium","tree_pine_orange_large","tree_pine_orange_medium","tree_pine_yellow_large","tree_pine_yellow_medium","fence","fence_broken","post_lantern","pumpkin_orange","pumpkin_orange_jackolantern","pumpkin_yellow","pumpkin_yellow_jackolantern","pumpkin_yellow_small","pumpkin_orange_small","skull","bone_A","ribcage","lantern_standing","crypt","shrine_candles","post_skull"];if(await Promise.all(n.map(o=>Sl(o,nv+o+".gltf"))),await Promise.all(["trees_A_large","trees_B_large","trees_A_medium","rock_single_A","rock_single_C"].map(o=>Sl(o,iv+o+".gltf"))),r==="village"&&await Promise.all(["building_home_A_red","building_home_B_red","building_tavern_red","building_tower_A_red","building_windmill_red","building_church_red","building_well_red"].map(o=>Sl(o,am+o+".gltf")).concat(["building_destroyed","building_scaffolding","fence_stone_straight","fence_wood_straight"].map(o=>Sl(o,am+o+".gltf")))),e)return;for(md.setHex(t.sky),We.fog.color.setHex(t.sky),wl.color.setHex(t.hemi[0]),wl.groundColor.setHex(t.hemi[1]),wl.intensity=t.hemi[2],gi.color.setHex(t.moon[0]),gi.intensity=t.moon[1],_m(t.ground[0],t.ground[1]);Ps.children.length;)Ps.remove(Ps.children[0]);let i=(o,l,c,h=1,u=Mt()*6.28)=>{if(!Is[o])return null;let d=Is[o].clone();return d.position.set(l,0,c),d.rotation.y=u,d.scale.setScalar(h),gd(d),Ps.add(d),d},s=(o,l,c,h=16752704,u=10)=>{let d=new Oi(h,u,7,1.8);d.position.set(o,l,c),Ps.add(d)},a=(o,l,c,h,u,d)=>{for(let p=0;p<o;p++){let f=Mt()*6.28,_=c+Mt()*(h-c);c>=16&&Math.sin(f)>.45&&(f=-f);let m=l[Math.floor(Mt()*l.length)];i(m,Math.cos(f)*_,Math.sin(f)*_*.88,typeof u=="function"?u(m):u,d?-f+Math.PI/2+(Mt()-.5)*.4:void 0)}};if(r==="graveyard"||r==="bloodmoon"){a(90,["tree_pine_orange_large","tree_pine_yellow_large","tree_pine_orange_medium","trees_A_large","trees_B_large","tree_dead_large"],17,31,o=>o.startsWith("trees")?2.6:1.6+Mt()*.6),a(26,["grave_A","grave_B","gravestone","gravemarker_A","tree_dead_medium","grave_A","ribcage","bone_A","pumpkin_yellow_small"],9,15,1.4,!0);for(let o=0;o<6;o++){let l=o/6*6.28+.3,c=13;i(o%2?"post_lantern":"pumpkin_orange_jackolantern",Math.cos(l)*c,Math.sin(l)*c*.85,1.5),s(Math.cos(l)*c,o%2?2.4:.7,Math.sin(l)*c*.85,r==="bloodmoon"?16726570:16752704)}i("crypt",-15,-11,1.8,.6),i("shrine_candles",13,-12,1.6,-.5),a(8,["bone_A","pumpkin_yellow_small","bone_A","ribcage"],4,8,.9)}else if(r==="pumpkin"){a(80,["tree_pine_orange_large","tree_pine_yellow_large","tree_pine_orange_medium","tree_pine_yellow_medium","tree_dead_large"],17,31,()=>1.7+Mt()*.6);for(let o=0;o<5;o++)for(let l=0;l<9;l++){let c=l/9*6.28+o*.3,h=9.5+o*1.2;Mt()<.75&&i(["pumpkin_orange","pumpkin_yellow","pumpkin_orange_small","pumpkin_yellow_small"][Math.floor(Mt()*4)],Math.cos(c)*h,Math.sin(c)*h*.88,1.3+Mt()*.5)}for(let o=0;o<18;o++){let l=o/18*6.28,c=15.5;i(o%5===0?"fence_broken":"fence",Math.cos(l)*c,Math.sin(l)*c*.88,1.5,-l)}for(let o=0;o<8;o++){let l=o/8*6.28+.2,c=12;i(o%2?"pumpkin_yellow_jackolantern":"pumpkin_orange_jackolantern",Math.cos(l)*c,Math.sin(l)*c*.85,1.8),s(Math.cos(l)*c,.8,Math.sin(l)*c*.85,16747050,12)}i("post_skull",-6,-9,1.6),i("lantern_standing",7,-9,1.6),s(7,1.8,-9)}else{a(70,["trees_A_large","trees_B_large","tree_dead_large","tree_pine_yellow_large"],19,32,l=>l.startsWith("trees")?2.8:1.7);let o=["building_home_A_red","building_home_B_red","building_tavern_red","building_destroyed","building_home_A_red","building_scaffolding","building_church_red","building_windmill_red","building_destroyed","building_tower_A_red","building_home_B_red","building_destroyed"];o.forEach((l,c)=>{let h=Math.PI+(c/(o.length-1)-.5)*4.4,u=14+Mt()*2.5;i(l,Math.cos(h)*u,Math.sin(h)*u*.88,2.4,-h+Math.PI/2),/destroyed|scaffold/.test(l)||s(Math.cos(h)*(u-1.6),1.2,Math.sin(h)*(u-1.6)*.88,16756816,9)}),i("building_well_red",5.5,-7,2),a(10,["rock_single_A","rock_single_C","bone_A","ribcage"],4,9,1.1)}}async function sv(){im=await Il(ym+"Knight.glb"),Tl.knight=im;let r=["Skeleton_Minion","Skeleton_Rogue","Skeleton_Warrior","Skeleton_Mage"],e=await Promise.all(r.map(t=>Il(tv+t+".glb")));r.forEach((t,n)=>{Sm[t]=e[n],e[n].scene.traverse(i=>{i.isMesh&&i.material&&/glow/i.test(i.material.name)&&(i.material=new ht({color:new he(.5,2.4,2.2)}))})})}async function xd(r=te.hero||"knight"){let e=Pr[r];Tl[r]||(Tl[r]=await Il(ym+e.file));let t=Tl[r];se&&se!==t.scene&&We.remove(se),se=t.scene,se.traverse(o=>{o.isMesh&&(o.visible=!e.hide.test(o.name))}),gd(se),se.scale.setScalar(1.3),se.position.set(0,0,.4),We.add(se),an=new Es(se);let n=o=>t.animations.find(l=>l.name===o)||t.animations.find(l=>l.name==="Idle");xe={idle:an.clipAction(n(e.idle)),atk:e.atk.map(o=>an.clipAction(n(o))),spin:an.clipAction(n(e.spinA)),hit:an.clipAction(n("Hit_A")),death:an.clipAction(n("Death_A")),cheer:an.clipAction(n("Cheer")),run:an.clipAction(n("Running_A"))};let i=/Chest|Torso|Abdomen|Neck|Head|Shoulder|Arm|Wrist|Hand|Thumb|Index|Middle|Ring|Pinky|Spine|handslot/i,s=(o,l)=>{let c=o.clone();return c.tracks=c.tracks.filter(h=>i.test(h.name.split(".")[0])===l),c.name=o.name+(l?"_up":"_lo"),c},a=n("Running_A");xe.run=an.clipAction(s(a,!1)),xe.runUp=an.clipAction(s(a,!0)),xe.runUp.play(),xe.runUp.setEffectiveWeight(0),xe.atkUp=e.atk.map(o=>{let l=an.clipAction(s(n(o),!0));return l.setLoop(Sa,1),l}),Bt.act=null,Bt.w=0,xe.idle.play(),Nt=xe.idle}var Bt={act:null,w:0};function rd(r,e){Bt.act&&Bt.act!==r&&Bt.act.stop(),r.reset(),r.timeScale=e,r.setEffectiveWeight(1),r.play(),Bt.act=r}function av(r){if(!xe.runUp)return;let e=Bt.act&&Bt.act.isRunning();Bt.w+=((e?1:0)-Bt.w)*Math.min(1,r*(e?18:8)),Bt.act&&(Bt.act.setEffectiveWeight(Bt.w),!e&&Bt.w<.02&&(Bt.act.stop(),Bt.act=null));let t=Nt===xe.run?xe.run.getEffectiveWeight():0;xe.runUp.time=xe.run.time,xe.runUp.timeScale=xe.run.timeScale,xe.runUp.setEffectiveWeight(t*(1-Bt.w))}var sd=()=>Gl().lengthSq()>.01,Nt=null;function Lt(r,e=!0,t=1,n=.15){r&&(e&&(r.reset(),r.setLoop(Sa,1),r.clampWhenFinished=r===xe.death),r.timeScale=t,r.enabled=!0,r.setEffectiveWeight(1),Nt&&Nt!==r&&r.crossFadeFrom(Nt,n,!0),r.play(),Nt=r)}var hi=r=>Math.min(3,Math.max(.9,r.getClip().duration/(Tr()*.92))),om={atk:[{k:"dmg",ic:Ne.sword,n:"Damage",v:()=>dt(xt()),base:8,g:1.32},{k:"spd",ic:Ne.speed,n:"Attack Speed",v:()=>(1/Tr()).toFixed(2)+"/s",base:10,g:1.35,max:25},{k:"range",ic:Ne.range,n:"Reach",v:()=>Ot().toFixed(1)+"m",base:16,g:1.45,max:12},{k:"crit",ic:Ne.crit,n:"Critical Hit",v:()=>Math.round(qi()*100)+"%",base:14,g:1.4,max:15}],def:[{k:"hp",ic:Ne.heart,n:"Health",v:()=>dt(mt()),base:8,g:1.3},{k:"regen",ic:Ne.regen,n:"Regeneration",v:()=>Ul().toFixed(1)+"/s",base:12,g:1.38},{k:"armor",ic:Ne.shield,n:"Armor",v:()=>Math.round(Nl()*100)+"%",base:15,g:1.42,max:15},{k:"gold",ic:Ne.coin(22),n:"Gold per Kill",v:()=>"\xD7"+Ol().toFixed(2),base:20,g:1.5,max:12}]},bi=[...om.atk,...om.def],y=null,st="title",Jt=!1;var ot=r=>y&&y.up[r]||0,xt=()=>(y&&y.dailyMod&&y.dailyMod.dmgMul||1)*8*St().dmg*(1+.2*te.meta.blade)*(1+.32*ot("dmg")+.012*ot("dmg")**2),Tr=()=>.95/St().spd/(1+.1*ot("spd")),Ot=()=>St().reach+(St().type==="melee"?.22:.35)*ot("range"),qi=()=>.04*ot("crit"),mt=()=>(y&&y.dailyMod&&y.dailyMod.heroHp||1)*100*St().hp*(1+.2*te.meta.armor)*(1+.28*ot("hp")),Ul=()=>.8*ot("regen")*(1+.08*ot("regen")),Nl=()=>Math.min(.6,.04*ot("armor")),Ol=()=>(1+.15*te.meta.greed)*(1+.12*ot("gold")),Er=r=>Math.round(r.base*Math.pow(r.g,ot(r.k))),Fs=[{k:"spin",ic:Ne.spin,n:"Whirlwind",cd:11},{k:"blast",ic:Ne.fire,n:"Fire Burst",cd:18},{k:"heal",ic:Ne.heal,n:"Second Wind",cd:28,need:()=>te.meta.wind>0},{k:"volley",ic:Ne.volley,n:"Arrow Rain",cd:13},{k:"dash",ic:Ne.dash,n:"Dash",cd:5},{k:"meteor",ic:Ne.meteor,n:"Meteor",cd:15},{k:"nova",ic:Ne.nova,n:"Frost Nova",cd:11}],yd=r=>r.cd*Math.pow(.92,te.meta.focus),lm={minion:{src:"Skeleton_Minion",hp:18,spd:2,dmg:5,gold:2,scale:1},rogue:{src:"Skeleton_Rogue",hp:13,spd:3.1,dmg:4,gold:3,scale:.95},warrior:{src:"Skeleton_Warrior",hp:46,spd:1.5,dmg:11,gold:5,scale:1.12},mage:{src:"Skeleton_Mage",hp:16,spd:1.8,dmg:7,gold:4,scale:1,ranged:6.5},boss:{src:"Skeleton_Warrior",hp:420,spd:.95,dmg:26,gold:60,scale:2.3}},Xe=[],Xi=[],Em={graveyard:{src:"Skeleton_Warrior",n:"BONE GIANT",sub:"it slams the ground \u2014 step out of the red ring",scale:2.3,spd:1.5,slam:!0},pumpkin:{src:"Skeleton_Rogue",n:"PUMPKIN REAPER",sub:"it charges \u2014 dodge the red mark",scale:2,spd:2.3,dash:!0,tint:[1.25,.6,.25]},village:{src:"Skeleton_Mage",n:"THE LICH",sub:"it summons the dead and hurls triple bolts",scale:2.1,spd:1.3,ranged:7,triple:!0,summon:!0,tint:[.8,.7,1.35]},bloodmoon:{src:"Skeleton_Warrior",n:"BLOOD KNIGHT",sub:"slams and charges \u2014 never stand still",scale:2.5,spd:1.7,slam:!0,dash:!0,tint:[1.4,.45,.45]}},Am=()=>y.dailyArea||(y.lvl!=null?vd(y.lvl):Xn[y.stage%Xn.length]),Dn=new qe(new Hn(.88,1,48),new ht({color:new he(2.2,.25,.15),transparent:!0,opacity:.8,side:Fi,depthWrite:!1}));Dn.rotation.x=-Math.PI/2;Dn.position.y=.05;Dn.visible=!1;We.add(Dn);var Un=new qe(new _s(1,48),new ht({color:new he(1.4,.15,.1),transparent:!0,opacity:.25,depthWrite:!1}));Un.rotation.x=-Math.PI/2;Un.position.y=.04;Un.visible=!1;We.add(Un);function ov(r,e,t,n){let i=r.def;r.spT=(r.spT??3.5)-e,r.sumT=(r.sumT??5)-e;let s=(l,c,h)=>{Dn.visible=Un.visible=!0,Dn.position.set(l.x,.05,l.z),Un.position.set(l.x,.04,l.z),Dn.scale.setScalar(c),Un.scale.setScalar(c*h)};if(r.sp){let l=r.sp;if(l.t+=e,l.kind==="slam"){if(s(r.m.position,3.4,Math.min(1,l.t/.85)),l.t>=.85){se.position.distanceTo(r.m.position)<3.4&&Ra(r.dmg*1.5);for(let c=0;c<24;c++)ln(r.m.position.clone().setY(.4),16738890,7);Ki(.45),Ye.blast(),Dn.visible=Un.visible=!1,r.sp=null}return!0}if(l.kind==="dash"){if(l.t<.65)return s(l.to,1.6,Math.min(1,l.t/.65)),r.m.rotation.y=Math.atan2(l.to.x-r.m.position.x,l.to.z-r.m.position.z),!0;let c=l.to.clone().sub(r.m.position).setY(0),h=c.length();return h>.3&&l.t<1.4?(r.cur!==r.A.run&&In(r,r.A.run,!1,1.6),r.m.position.addScaledVector(c.normalize(),Math.min(h,11*e)),!l.hit&&r.m.position.distanceTo(se.position)<1.6&&(l.hit=!0,Ra(r.dmg*1.2),Ki(.3)),ln(r.m.position.clone().setY(.6),16751194,2),!0):(Dn.visible=Un.visible=!1,r.sp=null,!0)}}if(i.summon&&r.sumT<=0){r.sumT=8,In(r,r.A.cast,!0,1.5);for(let l=0;l<3;l++)Da("minion").m.position.copy(r.m.position).add(new M(Math.cos(l*2.1)*2,0,Math.sin(l*2.1)*2));kn("THE DEAD RISE","")}if(r.spT<=0){r.spT=5.5;let l=[];if(i.slam&&t<6&&l.push("slam"),i.dash&&t>2.5&&l.push("dash"),l.length){let c=l[Math.floor(Math.random()*l.length)];return r.sp={kind:c,t:0,to:se.position.clone()},c==="slam"?In(r,r.A.slam,!0,1.33*.58/.85):In(r,r.A.taunt,!0,1.4),!0}}let a=i.ranged||2.6,o=t>6&&!i.ranged?1.8:1;if(t>a)Rm(r)||(r.m.position.addScaledVector(n,r.T.spd*o*(r.slow>0?.5:1)*e),r.m.rotation.y=Math.atan2(n.x,n.z),r.cur!==r.A.walk&&In(r,o>1?r.A.run:r.A.walk));else if(r.m.rotation.y=Math.atan2(n.x,n.z),r.atkT-=e,r.atkT<=0)if(r.atkT=i.ranged?2.2:1.7,r.swing=!r.swing,In(r,r.swing?r.A.atk:r.A.atk2,!0,1.1),i.ranged)for(let l of i.triple?[-.35,0,.35]:[0]){let c=new Ui(new ai({map:Na,color:new he(1.2,.6,2.4),transparent:!0,depthWrite:!1,blending:Bi}));c.scale.setScalar(.9),c.position.copy(r.m.position).setY(1.8),We.add(c),Xi.push({s:c,dmg:r.dmg*.6,t:0,off:l})}else{let l=r;ui(Aa(r.cur,1.1),()=>{l.alive&&y&&!y.over&&l.m.position.distanceTo(se.position)<3&&Ra(l.dmg)})}return!0}function Da(r){let e=r==="boss"?Em[Am()]:null,t=e?Object.assign({},lm.boss,{src:e.src,scale:e.scale,spd:e.spd}):lm[r],n=Sm[t.src],i=Qf(n.scene);gd(i);let s=Mt()*Math.PI*2,a=r==="boss"?11:8+Mt()*3.5;i.position.set(Math.cos(s)*a*1.15,0,Math.sin(s)*a*.8+.6),i.scale.setScalar(t.scale*(y.dailyMod&&y.dailyMod.scale||1)),i.lookAt(se.position.x,0,se.position.z),We.add(i);let o=new Es(i),l=f=>n.animations.find(_=>_.name===f),c={rise:o.clipAction(l("Spawn_Ground_Skeletons")),walk:o.clipAction(l(r==="rogue"?"Running_A":"Walking_D_Skeletons")),atk:o.clipAction(l(r==="mage"?"Spellcast_Shoot":"1H_Melee_Attack_Chop")),hit:o.clipAction(l("Hit_A")),die:o.clipAction(l("Death_A"))};c.rise.setLoop(Sa,1),c.rise.clampWhenFinished=!0,c.rise.timeScale=3,c.rise.play(),e&&(c.atk2=o.clipAction(l("1H_Melee_Attack_Slice_Horizontal")),c.slam=o.clipAction(l("1H_Melee_Attack_Jump_Chop")),c.taunt=o.clipAction(l("Taunt")),c.run=o.clipAction(l("Running_A")),c.cast=o.clipAction(l("Spellcast_Raise")),e.ranged&&(c.atk=c.atk2=o.clipAction(l("Spellcast_Shoot"))));let h=[];i.traverse(f=>{f.isMesh&&f.material&&!(f.material instanceof ht)&&(f.material=f.material.clone(),e&&e.tint&&f.material.color.multiply(new he(...e.tint)),h.push(f.material))});let u=Ia(),d=Math.pow(1.19,u-1)*(1+.04*u)*(r==="boss"&&y.lvl===Vl-1?1.6:r==="boss"&&y.lvl!=null&&y.lvl%3===2&&y.lvl>2?1.3:1)*(y.dailyMod&&y.dailyMod.hpMul||1),p={def:e,type:r,T:t,m:i,mix:o,A:c,mats:h,hp:t.hp*d,maxHp:t.hp*d,dmg:t.dmg*Math.pow(y.lvl!=null?1.085:1.11,Ia()-1),state:"rise",t:0,atkT:0,flash:0,alive:!0,knock:new M};return Xe.push(p),p}function In(r,e,t,n=1){if(!e)return;let i=r.cur;i===e&&!t||(t&&(e.reset(),e.setLoop(Sa,1),e.clampWhenFinished=e===r.A.die),e.timeScale=n,e.enabled=!0,e.setEffectiveWeight(1),i&&i!==e&&e.crossFadeFrom(i,.15,!0),e.play(),r.cur=e)}var Rm=r=>r.cur&&r.cur!==r.A.walk&&r.cur!==r.A.run&&r.cur.isRunning(),lv={"2H_Melee_Attack_Slice":.36,"2H_Melee_Attack_Chop":.45,"2H_Melee_Attack_Stab":.42,"2H_Melee_Attack_Spinning":.5,"2H_Ranged_Shoot":.3,"2H_Ranged_Shooting":.3,Throw:.5,Spellcast_Shoot:.35,Spellcast_Raise:.45,"1H_Melee_Attack_Chop":.55,"1H_Melee_Attack_Slice_Horizontal":.42,"1H_Melee_Attack_Jump_Chop":.58},Aa=(r,e)=>(lv[r.getClip().name.replace(/_up$/,"")]??.4)*r.getClip().duration/Math.max(.1,e),yr=[];function ui(r,e){yr.push({t:r,fn:e})}function cv(r){for(let e=yr.length-1;e>=0;e--)if(yr[e].t-=r,yr[e].t<=0){let t=yr[e].fn;yr.splice(e,1),t()}}var El=0,kl=0;function hv(r){kl>0||(El=r,kl=.18)}function Ln(r,e,t,n=.25){if((t||e>=xt()*1.35)&&hv(t?.06:.045),!r.alive)return;r.hp-=e,r.flash=.12;let i=ks(r.m.position.clone().add(new M(0,1.6*r.T.scale,0)));Md(dt(e)+(t?"!":""),i,t?"#ffcf4a":"#fff4dc",t?26:18);let s=r.m.position.clone().sub(se.position).setY(0).normalize();r.knock.addScaledVector(s,n*(r.type==="boss"?.2:1)),r.hp<=0?uv(r):r.type!=="boss"&&Math.random()<.5&&In(r,r.A.hit,!0)}function uv(r){r.alive=!1,r.state="dead",r.t=0,In(r,r.A.die,!0),y.kills++;let e=Math.max(1,Math.round(r.T.gold*Ol()*(1+.1*y.wave)*(y.dailyMod&&y.dailyMod.goldMul||1)));y.gold+=e,y.earned+=e,Sd(r.m.position,Math.min(6,1+Math.floor(e/3))),Ye.kill();for(let t=0;t<10;t++)ln(r.m.position.clone().add(new M(0,.8,0)),14214911);r.type==="boss"&&(Dn.visible=Un.visible=!1,y.bossKills++,kn("BOSS SLAIN","+"+e+" gold"),Ye.boss(),Ki(.5))}var Al=[];function ln(r,e,t=4){let n=new Ui(new ai({map:Na,color:e,transparent:!0,depthWrite:!1,blending:Bi}));n.position.copy(r),n.scale.setScalar(.35),n.userData={v:new M((Math.random()-.5)*t,Math.random()*t,(Math.random()-.5)*t),l:.6},We.add(n),Al.push(n)}var On=new qe(new Hn(.8,1,64),new ht({color:new he(2.5,1,.3),transparent:!0,side:Fi,depthWrite:!1}));On.rotation.x=-Math.PI/2;On.position.y=.2;On.visible=!1;We.add(On);var Ji=new qe(new Hn(2.6,3,48),new ht({color:new he(2,.6,.2),transparent:!0,opacity:.8,depthWrite:!1}));Ji.rotation.x=-Math.PI/2;Ji.visible=!1;We.add(Ji);var wr=new qe(new ys(.9,0),new ht({color:new he(2.2,.8,.25)}));wr.visible=!1;We.add(wr);var pi=new qe(new Hn(.85,1,64),new ht({color:new he(.7,1.4,2.2),transparent:!0,side:Fi,depthWrite:!1}));pi.rotation.x=-Math.PI/2;pi.visible=!1;We.add(pi);var Nn=[];function ld(r,e,t,n,i,s){let a;r==="arrow"?a=new qe(new Ii(.06,.06,.8),new ht({color:new he(1.6,1.5,1.2)})):(a=new Ui(new ai({map:Na,color:new he(2.4,.9,.25),transparent:!0,depthWrite:!1,blending:Bi})),a.scale.setScalar(.9)),a.position.copy(e),We.add(a),Nn.push({kind:r,mesh:a,dir:t.clone().normalize(),dmg:n,life:i,target:s,spd:r==="arrow"?24:13})}var cn={down:!1,ndc:new Y,bot:null},cm=new cl,dv=new Tn(new M(0,1,0),0),Ar=()=>!qn&&St().type==="fireball";function cd(){if(cn.bot)return cn.bot.clone().setY(0);cm.setFromCamera(cn.ndc,Wn);let r=new M;return cm.ray.intersectPlane(dv,r)?r:null}var Cm=r=>cn.ndc.set(r.clientX/innerWidth*2-1,-(r.clientY/innerHeight)*2+1);Yn.domElement.addEventListener("pointerdown",r=>{r.pointerType!=="mouse"||r.button!==0||(Cm(r),cn.down=!0)});addEventListener("pointerup",r=>{r.pointerType==="mouse"&&r.button===0&&(cn.down=!1)});addEventListener("pointermove",r=>{r.pointerType==="mouse"&&Cm(r)});addEventListener("blur",()=>{cn.down=!1});function pv(r){let e=r.mesh.position.clone().setY(0);for(let t of Xe)if(t.alive&&t.state!=="rise"&&t.m.position.distanceTo(e)<(r.power?2.8:1.7)){let n=Math.random()<qi();Ln(t,r.dmg*.8*(n?2.2:1),n,.35)}for(let t=0;t<10;t++)ln(e.clone().setY(.6),16751164,4);Ye.hit()}function fv(r){for(let e=Nn.length-1;e>=0;e--){let t=Nn[e];t.life-=r,t.target&&t.target.alive&&t.dir.copy(t.target.m.position.clone().setY(1.1).sub(t.mesh.position).normalize()),t.mesh.position.addScaledVector(t.dir,t.spd*r),t.kind==="arrow"?t.mesh.lookAt(t.mesh.position.clone().add(t.dir)):Math.random()<.5&&ln(t.mesh.position.clone(),16747068,1.2);let n=null;for(let i of Xe)if(i.alive&&i.state!=="rise"&&i.m.position.clone().setY(1.1).distanceTo(t.mesh.position)<.55+.25*i.T.scale){n=i;break}if(n&&t.hitSet&&t.hitSet.has(n)&&(n=null),n){let i=Math.random()<qi();if(t.kind==="fireball"){let s=t.mesh.position.clone();for(let a of Xe)a.alive&&a.state!=="rise"&&a.m.position.distanceTo(s.clone().setY(0))<(t.power?2.8:1.7)&&Ln(a,t.dmg*(a===n?1:.6)*(i?2.2:1),i,.35);for(let a=0;a<10;a++)ln(s,16751164,4);Ye.hit()}else Ln(n,t.dmg*(i?2.2:1),i,.15),Ye.hit();t.pierce>0?(t.pierce--,(t.hitSet=t.hitSet||new Set).add(n),t.target=null):t.life=0}t.life<=0&&(t.aimed&&Nn[e]===t&&pv(t),We.remove(t.mesh),Nn.splice(e,1))}}var Wt=new qe(new Hn(.85,1,64),new ht({color:new he(.75,.85,1.05),transparent:!0,side:Fi,depthWrite:!1}));Wt.rotation.x=-Math.PI/2;Wt.position.y=.8;Wt.visible=!1;We.add(Wt);var bt={sdk:null,playing:!1,lastMid:performance.now()},Pm=window.PORTAL||(/crazygames/.test(location.hostname)||/crazygames/.test(document.referrer)?"crazygames":"none"),Lm=/adpreview/.test(location.search)||/127\.0\.0\.1|localhost|trycloudflare/.test(location.hostname),hd=()=>{},mv=new Promise(r=>{hd=r,setTimeout(r,Pm==="crazygames"?6e3:0)});window.CG=bt;if(Pm==="crazygames"){let r=document.createElement("script");r.src="https://sdk.crazygames.com/crazygames-sdk-v3.js",r.onerror=()=>hd(),r.onload=async()=>{try{await window.CrazyGames.SDK.init(),window.CrazyGames.SDK.environment!=="disabled"&&(bt.sdk=window.CrazyGames.SDK);let e=window.CrazyGames.SDK.game.settings;e&&(bt.forceMute=!!e.muteAudio,Os(!1)),window.CrazyGames.SDK.game.addSettingsChangeListener&&window.CrazyGames.SDK.game.addSettingsChangeListener(t=>{bt.forceMute=!!t.muteAudio,Os(!1)})}catch{}hd()},document.head.appendChild(r)}function vi(r){if(!(!bt.sdk||bt.playing===r)){bt.playing=r;try{r?bt.sdk.game.gameplayStart():bt.sdk.game.gameplayStop()}catch{}}}function hm(){try{bt.sdk&&bt.sdk.game.happytime()}catch{}}function Os(r){Yi&&(Yi.gain.value=r||di.mute||bt.forceMute?0:.8)}var gv=window.ADS_LIVE??!1,Fl=()=>!!bt.sdk&&gv||Lm;function Bl(r,e){vi(!1);let t=i=>{Os(!1),bt.lastMid=performance.now(),e&&e(i)};if(bt.sdk){try{bt.sdk.ad.requestAd(r,{adStarted:()=>Os(!0),adFinished:()=>t(!0),adError:()=>t(r!=="rewarded")})}catch{t(r!=="rewarded")}return}if(!Lm){t(r!=="rewarded");return}let n=document.createElement("div");n.style.cssText="position:fixed;inset:0;z-index:60;background:#05070f;display:flex;align-items:center;justify-content:center;flex-direction:column;color:#fff4dc;font-weight:900;letter-spacing:.2em",n.innerHTML='AD BREAK<small style="letter-spacing:0;opacity:.6;font-weight:700;margin-top:8px">(preview \u2014 a real ad plays here on CrazyGames)</small>',document.body.appendChild(n),setTimeout(()=>{n.remove(),t(!0)},1400)}var Im=()=>Fl()&&performance.now()-bt.lastMid>18e4,Vi=null,Yi=null;function Wl(){if(!Vi)try{Vi=new(window.AudioContext||window.webkitAudioContext),Yi=Vi.createGain(),Yi.gain.value=.8,Yi.connect(Vi.destination)}catch{}return Vi&&Vi.state==="suspended"&&Vi.resume(),Vi}function on(r,e,t,n,i,s=0){let a=Wl();if(!a||di.mute)return;let o=a.currentTime+s,l=a.createOscillator(),c=a.createGain();l.type=r,l.frequency.setValueAtTime(e,o),l.frequency.exponentialRampToValueAtTime(Math.max(20,t),o+n),c.gain.setValueAtTime(i,o),c.gain.exponentialRampToValueAtTime(1e-4,o+n),l.connect(c).connect(Yi),l.start(o),l.stop(o+n+.03)}function ji(r,e,t,n,i=0){let s=Wl();if(!s||di.mute)return;let a=s.currentTime+i,o=Math.floor(s.sampleRate*r),l=s.createBuffer(1,o,s.sampleRate),c=l.getChannelData(0);for(let p=0;p<o;p++)c[p]=Math.random()*2-1;let h=s.createBufferSource();h.buffer=l;let u=s.createBiquadFilter();u.type="bandpass",u.frequency.setValueAtTime(e,a),u.frequency.exponentialRampToValueAtTime(t,a+r);let d=s.createGain();d.gain.setValueAtTime(n,a),d.gain.exponentialRampToValueAtTime(1e-4,a+r),h.connect(u).connect(d).connect(Yi),h.start(a)}var di={mute:localStorage.getItem("lastlight_mute")==="1"},Ye={swing:()=>ji(.15,2600,800,.18),hit:()=>{on("square",180,90,.08,.06),ji(.06,1500,600,.14)},kill:()=>{on("triangle",520,260,.12,.05),ji(.12,900,300,.1)},coin:()=>on("square",1500,1500,.05,.025),buy:()=>[660,990].forEach((r,e)=>on("triangle",r,r,.1,.06,e*.06)),no:()=>on("sawtooth",180,140,.12,.04),hurt:()=>{on("sawtooth",220,90,.2,.08),ji(.15,700,200,.12)},wave:()=>{on("sine",98,60,.6,.35),on("triangle",392,392,.4,.05,.1)},boss:()=>{on("sawtooth",90,45,1.2,.18),ji(.9,500,120,.2)},skill:()=>{ji(.4,3e3,400,.25),on("sine",220,660,.3,.08)},blast:()=>{ji(.7,900,100,.35),on("sine",80,40,.7,.4)}},um=!1;function bv(){let r=Wl();if(!r||um)return;um=!0;let e=r.createGain();e.gain.value=.11,e.connect(Yi),ud=e;let t=()=>{di.mute||ji(.03,3e3+Math.random()*2e3,2e3,.04+Math.random()*.04)};setInterval(()=>{Math.random()<.5&&t()},120);let n=[196,233.1,261.6,293.7,349.2,392],i=[98,87.3,77.8,87.3],s=r.currentTime+.3,a=0;setInterval(()=>{for(;s<r.currentTime+.4;){if(a%4===0){let l=r.createOscillator(),c=r.createGain();l.type="sine",l.frequency.value=i[(a/8|0)%4],c.gain.setValueAtTime(1e-4,s),c.gain.exponentialRampToValueAtTime(.5,s+.02),c.gain.exponentialRampToValueAtTime(1e-4,s+.42*3.6),l.connect(c).connect(e),l.start(s),l.stop(s+.42*4)}if(Math.random()<.45){let l=r.createOscillator(),c=r.createGain();l.type="triangle",l.frequency.value=n[Math.floor(Math.random()*n.length)]*(Math.random()<.3?2:1),c.gain.setValueAtTime(1e-4,s),c.gain.exponentialRampToValueAtTime(.18,s+.01),c.gain.exponentialRampToValueAtTime(1e-4,s+.9),l.connect(c).connect(e),l.start(s),l.stop(s+1)}s+=.42,a++}},100)}var ud=null;function ks(r){let e=r.clone().project(Wn);return[(e.x+1)/2*innerWidth,(1-e.y)/2*innerHeight]}function Md(r,[e,t],n,i){let s=document.createElement("div");s.className="num",s.textContent=r,s.style.color=n,s.style.fontSize=i+"px",s.style.left=e-14+(Math.random()-.5)*20+"px",s.style.top=t-10+"px",document.body.appendChild(s),setTimeout(()=>s.remove(),800)}function Sd(r,e){let[t,n]=ks(r.clone().setY(1)),i=le("goldC").getBoundingClientRect();for(let s=0;s<e;s++){let a=document.createElement("div");a.className="coin",a.style.left=t+(Math.random()-.5)*40+"px",a.style.top=n+(Math.random()-.5)*30+"px",document.body.appendChild(a),setTimeout(()=>{a.style.left=i.left+10+"px",a.style.top=i.top+6+"px",a.style.transform="scale(.6)"},30+s*35),setTimeout(()=>{a.remove(),Ye.coin()},650+s*35)}}var dm=null;function kn(r,e="",t=1600){let n=le("banner");n.innerHTML=`${r}<small>${e}</small>`,n.classList.add("show"),clearTimeout(dm),dm=setTimeout(()=>n.classList.remove("show"),t)}var Mr=0,Ki=r=>Mr=Math.max(Mr,r);function jn(r){le(r).style.display="flex"}function nt(r){le(r).style.display="none"}var pm="";function wd(r){if(!y)return;let e=bi,t="all|"+e.map(n=>ot(n.k)+":"+(y.gold>=Er(n))).join(",")+"|"+(te.tut<1?"h":"");!r&&t===pm||(pm=t,le("ups").innerHTML=e.map(n=>{let i=n.max&&ot(n.k)>=n.max,s=Er(n);return`<div class="up ${te.tut<1&&n.k==="dmg"?"hint":""}" data-k="${n.k}"><div class="hk">${bi.indexOf(n)+1}</div><div class="ic">${n.ic}</div><div class="tx"><b>${n.n}</b><small>${n.v()}</small></div><button class="${i||y.gold<s?"no":""}">${i?"MAX":Ne.coin(14)+dt(s)}</button></div>`}).join(""),le("ups").querySelectorAll(".up button").forEach(n=>n.addEventListener("pointerdown",i=>{i.stopPropagation(),Td(n.closest(".up").dataset.k)})))}function Td(r){if(!y||!y.warm){Ye.no();return}let e=bi.find(n=>n.k===r);if(e.max&&ot(r)>=e.max)return;let t=Er(e);if(y.gold<t){Ye.no();return}y.gold-=t,y.up[r]=ot(r)+1,Ye.buy(),r==="hp"&&(y.hp+=mt()-mt()/(1+.28*ot("hp"))*(1+.28*(ot("hp")-1))),y.buys++,r==="dmg"&&te.tut<1&&ot("dmg")>=2&&(te.tut=1,bn()),wd(!0),Xl(),jl()}var Dm=["Q","SPACE","E"],Um=new Proxy({},{get:(r,e)=>Dm[St().skills.indexOf(e)]||""});function vv(){let r=St().skills;le("skills").innerHTML=r.map(e=>Fs.find(t=>t.k===e)).map(e=>`<button class="sk ${r.indexOf(e.k)===1?"main":""} ${e.need&&!e.need()?"lock":""}" data-k="${e.k}"><span class="key">${Um[e.k]}</span>${e.ic}<div class="cd"></div><small>${e.n}</small></button>`).join(""),le("skills").querySelectorAll(".sk").forEach(e=>e.addEventListener("pointerdown",t=>{t.stopPropagation(),Rr(e.dataset.k)}))}function Rr(r){if(st!=="play"||Jt||!y||y.over)return;if(y.cd[r]>0){Ye.no();return}let e=Fs.find(t=>t.k===r);if(y.cd[r]=yd(e),Ye.skill(),r==="spin"&&(Lt(xe.spin,!1,1.6),y.spinT=1.4,y.spinTick=0,Wt.visible=!0),r==="blast"){y.blastT=1e-4,y.blastAt=se.position.clone(),On.position.set(y.blastAt.x,.2,y.blastAt.z),On.visible=!0,Ye.blast(),Ki(.35),Ns.position.set(y.blastAt.x,1.5,y.blastAt.z),Ns.intensity=160;for(let t=0;t<26;t++)ln(y.blastAt.clone().setY(1),16751164,7);Lt(xe.spin,!0,2.2)}if(r==="volley"){Lt(xe.atk[0],!0,2);let t=18;for(let n=0;n<t;n++){let i=n/t*Math.PI*2;ld("arrow",se.position.clone().setY(1.3),new M(Math.sin(i),0,Math.cos(i)),xt()*1.7,11)}y.used[r]=!0}if(r==="dash"){let t=Gl(),n=t.lengthSq()>.01?new M(t.x,0,t.y).normalize():new M(Math.sin(se.rotation.y),0,Math.cos(se.rotation.y));y.dash={dir:n,t:.2,hit:new Set},y.invuln=.4,Lt(xe.spin,!0,2.2),y.used[r]=!0}if(r==="meteor"){let t=null,n=0;for(let s of Xe)if(s.alive&&s.state!=="rise"){let a=Xe.filter(o=>o.alive&&o.m.position.distanceTo(s.m.position)<3).length;a>n&&(n=a,t=s)}let i=t?t.m.position.clone().setY(0):se.position.clone().add(new M(Math.sin(se.rotation.y)*5,0,Math.cos(se.rotation.y)*5));if(Ar()){let s=cd();s&&Math.hypot(s.x,s.z)<xr+2&&i.copy(s)}y.meteor={at:i,t:0},Ji.position.set(i.x,.06,i.z),Ji.visible=!0,Lt(xe.spin,!0,1.6),y.used[r]=!0}if(r==="nova"){y.novaT=1e-4,y.novaAt=se.position.clone(),pi.position.set(y.novaAt.x,.25,y.novaAt.z),pi.visible=!0,Lt(xe.spin,!0,1.8);for(let t=0;t<26;t++)ln(y.novaAt.clone().setY(1),12577023,6);y.used[r]=!0}if(r==="heal"){y.hp=Math.min(mt(),y.hp+mt()*.45),Md("+"+dt(mt()*.45),ks(se.position.clone().setY(2.6)),"#7cf09a",26);for(let t=0;t<24;t++)ln(se.position.clone().setY(1),8188058,3);Lt(xe.cheer)}}var Us=[{t:"Walk to the fire & upgrade Damage",g:()=>ot("dmg"),n:2,r:20},{t:"Heal by the fire",g:()=>y.healedAtFire?1:0,n:1,r:15},{t:qn?"Use your big skill button":"Use your SPACE skill",g:()=>y.used[St().skills[1]]?1:0,n:1,r:25},{t:"Reach wave 3",g:()=>y.wave>=3?1:0,n:1,r:40},{t:"Slay the boss",g:()=>y.bossKills,n:1,r:120}];function jl(){let r=le("quest");if(!y||y.q>=Us.length||st!=="play"){r.style.display="none";return}let e=Us[y.q],t=Math.min(e.n,e.g()),n=t>=e.n;r.style.display="flex",r.classList.toggle("done",n),r.innerHTML=n?`Claim ${Ne.coin(14)} +${e.r}`:`${e.t} <span style="opacity:.7">${t}/${e.n}</span> ${Ne.coin(14)}+${e.r}`}le("quest").addEventListener("pointerdown",r=>{r.stopPropagation();let e=Us[y.q];!e||e.g()<e.n||(y.gold+=e.r,Sd(se.position,5),y.q++,Ye.buy(),jl())});function Wi(r,e){let t=ot(r);y.up[r]=t+1;let n=e();return y.up[r]=t,n}var _v={dmg:()=>["Every attack deals more damage.",`${dt(xt())} \u2192 <span class="nx">${dt(Wi("dmg",xt))}</span> per hit`],spd:()=>["Attack more often.",`${(1/Tr()).toFixed(2)} \u2192 <span class="nx">${Wi("spd",()=>1/Tr()).toFixed(2)}</span> swings / sec`],range:()=>["Attack skeletons from farther away (the ring around you).",`${Ot().toFixed(1)}m \u2192 <span class="nx">${Wi("range",Ot).toFixed(1)}m</span>`],crit:()=>["Chance for a hit to deal 2.2\xD7 damage.",`${Math.round(qi()*100)}% \u2192 <span class="nx">${Math.round(Wi("crit",qi)*100)}%</span>`],hp:()=>["More health before you fall.",`${dt(mt())} \u2192 <span class="nx">${dt(Wi("hp",mt))}</span> HP`],regen:()=>["Heal a little every second, even away from the fire.",`${Ul().toFixed(1)} \u2192 <span class="nx">${Wi("regen",Ul).toFixed(1)}</span> HP / sec`],armor:()=>["Take less damage from every attack.",`${Math.round(Nl()*100)}% \u2192 <span class="nx">${Math.round(Wi("armor",Nl)*100)}%</span> blocked`],gold:()=>["Skeletons drop more gold.",`\xD7${Ol().toFixed(2)} \u2192 <span class="nx">\xD7${Wi("gold",Ol).toFixed(2)}</span>`]};function xv(r){let e=Fs.find(s=>s.k===r),t=yd(e).toFixed(0),n=Um[r],i=r==="spin"?`Spin for 1.4 seconds, hitting every skeleton within ${(Ot()+1.3).toFixed(1)}m about 5 times for <span class="nx">${dt(xt()*1.1)}</span> each. Best when surrounded.`:r==="blast"?`A ring of fire bursts out from you: <span class="nx">${dt(xt()*3.2)}</span> damage to every skeleton it touches, and it knocks them back.`:r==="volley"?`Fire 18 bolts in every direction, each dealing <span class="nx">${dt(xt()*1.7)}</span>. Great when you are surrounded.`:r==="dash"?`Dash forward in the direction you are moving. You can't be hit for a moment, and you slash through skeletons for <span class="nx">${dt(xt()*1.5)}</span>.`:r==="meteor"?`Call a meteor onto the biggest group of skeletons: <span class="nx">${dt(xt()*5)}</span> damage in a wide circle.`:r==="nova"?`A wave of frost bursts from you: <span class="nx">${dt(xt()*1.6)}</span> damage and every skeleton it touches moves 60% slower for 3.5 seconds.`:`Instantly heal <span class="nx">${dt(mt()*.45)}</span> HP (45% of your health).`;return`<b>${e.n}<span class="k">${n}</span></b>${i}<div class="mu">Cooldown ${t}s</div>`}function yv(r){let e=bi.find(s=>s.k===r),[t,n]=_v[r](),i=e.max&&ot(r)>=e.max;return`<b>${e.n}<span class="k">${bi.indexOf(e)+1}</span></b>${t}<div>${i?"Maxed out":n}</div><div class="mu">Level ${ot(r)}${e.max?" / "+e.max:""} \xB7 buy at the fire</div>`}function Mv(r){let e=Sr[r];return`<b>${e.n}</b>${e.d}<div class="mu">Permanent \xB7 ${te.meta[r]} / ${e.max}</div>`}function Nm(r,e){let t=le("tip");t.innerHTML=r,t.style.display="block";let n=e.getBoundingClientRect(),i=t.offsetWidth,s=t.offsetHeight,a=n.left+n.width/2-i/2,o=n.top-s-10;o<8&&(o=n.bottom+10),a=Math.max(8,Math.min(innerWidth-i-8,a)),n.left>innerWidth*.6&&e.closest("#panel")&&innerWidth>innerHeight&&(a=n.left-i-10,o=Math.max(8,n.top+n.height/2-s/2)),t.style.left=a+"px",t.style.top=o+"px"}var Ed=()=>{le("tip").style.display="none"};function Om(r){if(!y&&!r.closest(".meta"))return null;let e=r.closest(".sk");if(e)return xv(e.dataset.k);let t=r.closest(".up");if(t)return yv(t.dataset.k);let n=r.closest(".meta");if(n){let i=n.querySelector("button");return i&&Mv(i.dataset.k)}return null}document.addEventListener("pointerover",r=>{if(r.pointerType==="touch")return;let e=Om(r.target);e&&Nm(e,r.target.closest(".sk,.up,.meta"))});document.addEventListener("pointerout",r=>{r.pointerType!=="touch"&&r.target.closest(".sk,.up,.meta")&&!(r.relatedTarget&&r.relatedTarget.closest&&r.relatedTarget.closest(".sk,.up,.meta")===r.target.closest(".sk,.up,.meta"))&&Ed()});var dd=null;document.addEventListener("pointerdown",r=>{if(r.pointerType!=="touch")return;let e=r.target.closest(".sk,.up,.meta");e&&(clearTimeout(dd),dd=setTimeout(()=>{let t=Om(e);t&&(Nm(t,e),setTimeout(Ed,2600))},450))},!0);document.addEventListener("pointerup",()=>clearTimeout(dd),!0);function Sv(){let r=le("arrows");if(st!=="play"||!y){r.innerHTML="";return}let e=Xe.filter(n=>n.alive),t=[];for(let n of e){let i=n.m.position.clone().setY(1).project(Wn);Math.abs(i.x)<.95&&Math.abs(i.y)<.85&&i.z<1||t.push(i)}e.length>6&&(t.length=Math.min(t.length,0)),r.innerHTML=t.slice(0,6).map(n=>{let i=n.x,s=n.y;n.z>1&&(i=-i,s=-s);let a=Math.atan2(s,i),o=Math.max(Math.abs(Math.cos(a))/.9,Math.abs(Math.sin(a))/.8),l=(Math.cos(a)/o+1)/2*innerWidth,c=(1-Math.sin(a)/o)/2*innerHeight;return`<div class="earr" style="left:${l-11}px;top:${c-10}px;transform:rotate(${90-a*180/Math.PI}deg)"></div>`}).join("")}function Xl(){if(!y)return;le("goldC").innerHTML=`${Ne.coin()} ${dt(y.gold)}`,le("emberC").innerHTML=`${Ne.ember()} ${dt(te.embers+y.embersRun())}`;let r=y.toSpawn+Xe.filter(e=>e.alive).length;le("waveT").textContent=(y.wave>0&&y.wave%5===0&&!y.trans?"BOSS \xB7 ":"")+(y.dailyMod?"DAILY \xB7 WAVE "+y.wave+"/"+Lr:y.lvl!=null?"LEVEL "+(y.lvl+1)+" \xB7 WAVE "+y.wave+"/"+Lr:"ENDLESS \xB7 WAVE "+y.wave),le("waveB").style.width=100-Math.min(100,r/Math.max(1,y.waveSize)*100)+"%",r>0&&r<=5&&y.toSpawn<=0&&(le("waveT").textContent+=" \xB7 "+r+" LEFT"),Sv()}async function fi(r=null,e=null){Wl(),bv(),nt("title"),nt("result"),nt("forge"),nt("select");let t=e?e.area:r!=null?vd(r):"graveyard";Tm!==t&&await Dl(t);for(let n of Xe)We.remove(n.m);Xe.length=0,yr.length=0,Xi.forEach(n=>We.remove(n.s)),Xi.length=0,Nn.forEach(n=>We.remove(n.mesh)),Nn.length=0,Ji.visible=wr.visible=pi.visible=!1,Dn.visible=Un.visible=!1,y={lvl:r,dailyMod:e?e.mod:null,dailyArea:e?e.area:null,stage:0,wave:0,gold:22+60*te.meta.start+(r||0)*45,earned:0,kills:0,up:{},hp:0,cd:{spin:0,blast:0,heal:0,volley:0,dash:0,meteor:0,nova:0},atkT:.5,toSpawn:0,spawnT:0,waveSize:1,between:1.2,over:!1,buys:0,q:te.runs>0?2:0,used:{},bossKills:0,spinT:0,blastT:0},y.embersRun=()=>y.lvl!=null?Math.floor(y.kills/6+y.wave*(2+y.lvl)):Math.floor((Math.pow(Math.max(0,y.wave-1),1.35)*2+y.kills/8)*(1+.2*y.stage)),y.hp=mt(),se.position.set(0,0,.4),Lt(xe.idle,!1),st="play",le("top").style.display="flex",le("hotbar").style.display="flex",le("hpbar").style.display="none",wd(!0),vv(),Xl(),jl(),vi(!0),Ar()?setTimeout(()=>kn("HOLD LEFT CLICK TO CAST","fireballs fly to your cursor \xB7 Q drops a meteor there",3600),400):te.runs===0&&setTimeout(()=>kn(qn?"DRAG TO MOVE":"WASD TO MOVE","you attack by yourself \xB7 heal and upgrade at the fire",4200),400)}async function wv(){y.trans=!0;let r=y.stage+1,e=Xn[r%Xn.length];kn("STAGE CLEAR","the path leads on\u2026"),Ye.buy(),y.gold+=30+20*r,Sd(se.position,6);for(let[n,i]of Object.entries(Pr))!te.heroes[n]&&i.stage&&r+1>=i.stage&&(te.heroes[n]=!0,bn(),setTimeout(()=>kn("NEW HERO",i.n+" unlocked!"),1900));te.maxStage=Math.max(te.maxStage||0,r),bn(),await new Promise(n=>setTimeout(n,1500));let t=le("fade");t.style.opacity=1,await new Promise(n=>setTimeout(n,650)),await Dl(e),se.position.set(0,0,.4),y.stage=r,y.hp=Math.min(mt(),y.hp+mt()*.3),t.style.opacity=0,kn(La[e].n.toUpperCase(),"stage "+(r+1)),y.trans=!1,y.between=1.2}function Tv(){if(y.trans)return;if(y.lvl!=null&&y.wave>=Lr){Av();return}if(y.lvl==null&&y.wave>0&&y.wave%5===0&&rv(y.wave+1)>y.stage){wv();return}y.wave++;let r=y.wave%5===0,e=Ia();y.waveSize=y.lvl!=null?r?1+Math.min(16,4+Math.floor(y.lvl*1.2)):Math.min(48,8+y.wave*3+Math.floor(y.lvl*1.8)):r?1+Math.min(24,4+e):Math.min(70,8+Math.floor(e*3.6)),y.waveSize=Math.round(y.waveSize*(y.dailyMod&&y.dailyMod.sizeMul||1)),y.dailyMod&&y.dailyMod.bossEvery&&(y.bossPending=!0),y.toSpawn=y.waveSize,y.spawnGap=Math.max(.16,.8-e*.035),y.spawnT=.4,y.bossPending=y.bossPending||r;let t=r?Em[Am()]:null;kn(r?t.n:"WAVE "+y.wave+(y.lvl!=null?" / "+Lr:""),r?t.sub:y.wave===1?(y.lvl!=null?"level "+(y.lvl+1)+" \xB7 ":"")+_d().n.toLowerCase():""),Ye.wave(),r&&Ye.boss(),Xl()}function km(r){let e=y.dailyMod;if(e&&e.force&&Math.random()<(e.forceP||1))return e.force;let t=_d().mix,n=Math.random();return r>=4&&n<.14+t.mage?"mage":r>=3&&n<.32+t.mage+t.warrior?"warrior":r>=2&&n<.55+t.mage+t.warrior+t.rogue?"rogue":"minion"}function Ev(){y.reviveOffer=!0,Jt=!0,vi(!1);let r=7;le("pauseC").innerHTML=`<h2>THE FIRE CALLS YOU BACK</h2><p>Watch a short ad to get back up with 60% health.</p><p style="font-size:40px;font-weight:900;margin:4px 0" id="rvN">${r}</p><button class="big" id="rvYes">REVIVE \u25B6</button><br><button class="big alt" id="rvNo">NO THANKS</button>`,jn("pause");let e=setInterval(()=>{r--,le("rvN")&&(le("rvN").textContent=r),r<=0&&t()},1e3),t=()=>{clearInterval(e),nt("pause"),Jt=!1,y.reviveOffer=!1,y.revived=!0,Ad()};le("rvNo").onclick=t,le("rvYes").onclick=()=>{clearInterval(e),nt("pause"),Bl("rewarded",n=>{if(!n){t();return}y.hp=mt()*.6,y.revived=!0,y.reviveOffer=!1,y.invuln=2.5,Jt=!1,Lt(xe.cheer),y.blastT=1e-4,y.blastAt=se.position.clone(),On.position.set(y.blastAt.x,.2,y.blastAt.z),On.visible=!0,Ye.blast(),kn("BACK ON YOUR FEET",""),vi(!0)})}}function Av(){if(y.over)return;if(y.over=!0,st="dead",Lt(xe.cheer),Ye.boss(),vi(!1),y.dailyMod){let l=te.dailyDone!==od(),c=y.embersRun();if(l){let h=te.dailyDone,u=new Date(Date.now()-864e5),d=u.getFullYear()+"-"+(u.getMonth()+1)+"-"+u.getDate();te.dailyStreak=h===d?(te.dailyStreak||0)+1:1,c+=wm(),te.dailyDone=od()}te.embers+=c,te.runs++,bn(),kn("DAILY CLEAR",y.dailyMod.n),hm(),setTimeout(()=>{le("resultC").innerHTML=`<h2>DAILY CHALLENGE CLEAR!</h2><p style="font-size:22px;font-weight:900">${y.dailyMod.n}</p><div class="stat"><span>Embers earned</span><span style="color:#ff9d5c">${Ne.ember(16)} +${c}</span></div><div class="stat"><span>Daily streak</span><span>${te.dailyStreak||0} day${(te.dailyStreak||0)===1?"":"s"}</span></div><p style="opacity:.75">${l?"A new challenge appears tomorrow.":"Reward already claimed today \u2014 come back tomorrow!"}</p><button class="big" id="toMap">LEVELS</button>`,jn("result"),le("toMap").onclick=()=>{nt("result"),zl()}},1800),le("panel").classList.remove("open"),le("hotbar").style.display="none",le("fireTag").style.display="none",le("quest").style.display="none";return}let r=y.lvl,e=y.hp/mt(),t=e>=.7?3:e>=.35?2:1,n=te.lv[r]||0,i=!n,s=y.embersRun()+(i?25+r*12:0)+Math.max(0,t-n)*10;te.embers+=s,te.lv[r]=Math.max(n,t),te.runs++;let a=[];for(let[l,c]of Object.entries(Pr))!te.heroes[l]&&c.afterLevel!=null&&te.lv[c.afterLevel]&&(te.heroes[l]=!0,a.push(c.n));let o=!te.endless&&te.lv[5];o&&(te.endless=!0),bn(),kn("LEVEL CLEAR","\u2605".repeat(t)),t===3&&hm();for(let l=0;l<40;l++)ln(se.position.clone().setY(1.5),[16766315,16747068,16774364][l%3],8);setTimeout(()=>{le("resultC").innerHTML=`<h2>LEVEL ${r+1} CLEAR!</h2><p style="font-size:46px;margin:4px 0;color:#f6c453;letter-spacing:6px">${"\u2605".repeat(t)}<span style="opacity:.25">${"\u2605".repeat(3-t)}</span></p><p style="margin-top:-4px;opacity:.75">${t<3?"Finish with 70% health for 3 stars":"Flawless defense!"}</p><div class="stat"><span>Skeletons slain</span><span>${y.kills}</span></div><div class="stat"><span>Embers earned</span><span style="color:#ff9d5c">${Ne.ember(16)} +${s}</span></div>`+a.map(l=>`<div class="stat" style="border:2px solid #f6c453"><span>New hero</span><span>${l}</span></div>`).join("")+(o?'<div class="stat" style="border:2px solid #f6c453"><span>Unlocked</span><span>Endless Night</span></div>':"")+`${Fl()?"":"<!--"}<button class="big alt" id="dbl" style="background:linear-gradient(#ff9d5c,#e2574c)">\xD72 EMBERS \u25B6 <small style="font-size:11px">(ad)</small></button><br>${Fl()?"":"-->"}${r<Vl-1?'<button class="big" id="nextL">NEXT LEVEL \u25B6</button>':""}<button class="big alt" id="toMap">LEVELS</button><button class="big alt" id="toForge">FORGE ${Ne.ember(16)}</button>`,jn("result"),le("dbl")&&(le("dbl").onclick=()=>{let l=le("dbl");l.dataset.done||Bl("rewarded",c=>{c&&(te.embers+=s,bn(),l.dataset.done=1,l.innerHTML=`+${s} EMBERS \u2713`,Ye.buy())})}),le("nextL")&&(le("nextL").onclick=()=>{nt("result");let l=()=>fi(r+1);Im()?Bl("midgame",l):l()}),le("toMap").onclick=()=>{nt("result"),zl()},le("toForge").onclick=()=>{nt("result"),Rd(()=>jn("result"))}},1800),le("panel").classList.remove("open"),le("hotbar").style.display="none",le("fireTag").style.display="none",le("quest").style.display="none"}function Ad(){if(y.over)return;y.over=!0,st="dead",vi(!1),Lt(xe.death);let r=y.embersRun();te.embers+=r,te.runs++;let e="stage";te.bestBy[e]=Math.max(te.bestBy[e]||0,y.wave);let t=y.lvl==null&&y.wave>te.best;t&&(te.best=y.wave),bn(),setTimeout(()=>{le("resultC").innerHTML=`<h2>${t?"NEW RECORD!":"THE FIRE DIMS"}</h2><p style="font-size:40px;margin:6px 0;font-weight:900">${y.dailyMod?"DAILY \xB7 WAVE "+y.wave+"/"+Lr:y.lvl!=null?"LEVEL "+(y.lvl+1)+" \xB7 WAVE "+y.wave+"/"+Lr:"WAVE "+y.wave}</p><p style="margin-top:-6px;opacity:.8">${_d().n}${y.lvl==null?" \xB7 stage "+(y.stage+1):""}</p><div class="stat"><span>Skeletons slain</span><span>${y.kills}</span></div>${y.lvl==null?`<div class="stat"><span>Best wave</span><span>${te.best}</span></div>`:""}<div class="stat"><span>Embers earned</span><span style="color:#ff9d5c">${Ne.ember(16)} +${r}</span></div><p style="opacity:.75">Spend embers in the Forge to come back stronger.</p><button class="big" id="toForge">FORGE ${Ne.ember(16)}</button><button class="big alt" id="again">${y.dailyMod?"RETRY DAILY":y.lvl!=null?"RETRY LEVEL "+(y.lvl+1):"FIGHT AGAIN"}</button><button class="big alt" id="toMap2">LEVELS</button>`,jn("result");let n=y.lvl,i=y.dailyMod?bd():null;le("toForge").onclick=()=>{nt("result"),Rd(()=>jn("result"))},le("again").onclick=()=>{nt("result");let s=()=>i?fi(i.lvl,i):n!=null?fi(n):fi(null);Im()?Bl("midgame",s):s()},le("toMap2").onclick=()=>{nt("result"),zl()}},1600),le("panel").classList.remove("open"),le("hotbar").style.display="none",le("fireTag").style.display="none",le("quest").style.display="none"}function Rd(r){let e=()=>{le("forgeC").innerHTML=`<h2>THE FORGE</h2><p>${Ne.ember(18)} <b style="font-size:20px">${dt(te.embers)}</b> embers</p>`+Object.entries(Sr).map(([t,n])=>{let i=te.meta[t],s=i>=n.max,a=n.cost(i);return`<div class="meta"><div class="ic">${n.ic}</div><div class="tx"><b>${n.n} <span style="opacity:.6;font-size:12px">${i}/${n.max}</span></b><small>${n.d}</small></div><button data-k="${t}" class="${s||te.embers<a?"no":""}">${s?"MAX":Ne.ember(14)+dt(a)}</button></div>`}).join("")+'<button class="big" id="fBack">DONE</button>',le("forgeC").querySelectorAll(".meta button").forEach(t=>t.onclick=()=>{let n=t.dataset.k,i=Sr[n],s=te.meta[n];if(s>=i.max)return;let a=i.cost(s);if(te.embers<a){Ye.no();return}te.embers-=a,te.meta[n]++,bn(),Ye.buy(),e()}),le("fBack").onclick=()=>{nt("forge"),(r||ql)()}};e(),jn("forge")}function ql(){le("deskTip").textContent=qn?"Best played on a computer \u2014 also works on phones":"Best played on a computer with keyboard",st="title",le("tSub").textContent="Skeletons rise from the graves every night. Keep the last fire burning.";let r=te.lv.reduce((e,t)=>e+(t||0),0);le("tStats").innerHTML=te.runs?`<div class="stat"><span>Stars</span><span>\u2605 ${r} / 36</span></div>${te.best?`<div class="stat"><span>Endless best</span><span>wave ${te.best}</span></div>`:""}<div class="stat"><span>Embers</span><span>${Ne.ember(16)} ${dt(te.embers)}</span></div>`:"",jn("title")}function Rv(){let r=bd(),e=te.dailyDone===od(),t=`<button class="lvl daily" data-i="daily"><span>DAILY \xB7 ${r.mod.n}</span><small style="color:#fff4dc;opacity:.85">${r.mod.d} \xB7 ${La[r.area].n} \xB7 ${e?"done today \u2713 (play again for fun)":"reward "+wm()+" embers"}${te.dailyStreak?" \xB7 streak "+te.dailyStreak:""}</small></button>`;t+='<div class="lvls">';for(let n=0;n<Vl/3;n++){let i=La[Xn[n%Xn.length]];t+=`<div class="area" style="background:${i.swatch||"linear-gradient(135deg,#3a0c14,#7a1a1a)"}"><b>${i.n}</b><div class="row">`;for(let s=0;s<3;s++){let a=n*3+s,o=a===0||te.lv[a-1],l=te.lv[a]||0;t+=`<button class="lvl ${o?"":"lock"} ${o&&!l?"next":""}" data-i="${a}"><span>${o?a+1:'<svg width="18" height="18" viewBox="0 0 24 24"><rect x="5" y="10.5" width="14" height="10" rx="2.5" fill="#5a6386"/><path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5" fill="none" stroke="#5a6386" stroke-width="2"/></svg>'}</span><small>${o?"\u2605".repeat(l)+"<i>"+"\u2605".repeat(3-l)+"</i>":""}</small></button>`}t+="</div></div>"}return t+=`<button class="lvl endless ${te.endless||te.lv[5]?"":"lock"}" data-i="endless"><span>ENDLESS NIGHT</span><small>${te.endless||te.lv[5]?"best wave "+(te.best||0):"clear level 6 to unlock"}</small></button></div>`,t}function zl(){nt("title"),nt("result");let r=()=>{let e=te.lv.reduce((t,n)=>t+(n||0),0);le("selectC").innerHTML=`<h2>CHOOSE A LEVEL</h2><p style="opacity:.75">\u2605 ${e} / ${Vl*3} \xB7 each level is ${Lr} waves with a boss at the end</p>`+Rv()+'<h3 style="margin:14px 0 0;text-align:left;font-size:15px;opacity:.85">YOUR HERO</h3><div class="heroes">'+Object.entries(Pr).map(([t,n])=>{let i=te.heroes[t],s=te.hero===t,a=(o,l)=>`<div class="sbar"><span style="width:52px">${o}</span><i><b style="width:${l*20}%"></b></i></div>`;return`<div class="hcard ${s?"on":""} ${i?"":"lock"}" data-id="${t}"><div class="role">${n.role}</div><h3>${n.ic} ${n.n}</h3><p>${n.tag}</p>${a("Damage",n.bars[0])}${a("Range",n.bars[1])}${a("Health",n.bars[2])}${a("Speed",n.bars[3])}<div class="hsk">${n.skills.map(o=>`<span>${Fs.find(l=>l.k===o).ic}</span>`).join("")}</div><div class="btn ${i?"":"no"}">${i?s?"SELECTED":"SELECT":`Clear level ${n.afterLevel+1} to unlock`}</div></div>`}).join("")+'</div><button class="big alt" id="selBack">BACK</button>',le("selectC").querySelectorAll(".hcard").forEach(t=>t.onclick=async()=>{let n=t.dataset.id,i=Pr[n];if(!te.heroes[n]){Ye.no();return}if(te.hero!==n){te.hero=n,bn(),t.querySelector(".btn").textContent="LOADING\u2026",await xd(n),r(),Ye.coin();return}}),le("selectC").querySelectorAll(".lvl").forEach(t=>t.onclick=()=>{let n=t.dataset.i;if(n==="daily"){nt("select");let s=bd();fi(s.lvl,s);return}if(n==="endless"){if(!te.endless&&!te.lv[5]){Ye.no();return}nt("select"),fi(null);return}let i=+n;if(i>0&&!te.lv[i-1]){Ye.no();return}nt("select"),fi(i)}),le("selBack").onclick=()=>{nt("select"),ql()}};r(),jn("select")}le("playB").onclick=()=>{te.runs===0&&!te.lv[0]?(nt("title"),fi(0)):zl()};le("forgeB").onclick=()=>{nt("title"),Rd(ql)};le("pauseB").innerHTML=Ne.pause+(qn?"":'<span style="font-size:10px;opacity:.75;margin-left:2px">ESC</span>');le("pauseB").addEventListener("pointerdown",r=>{r.stopPropagation(),!(st!=="play"||y&&y.reviveOffer)&&(Jt=!0,vi(!1),le("pauseC").innerHTML=`<h2>PAUSED</h2><p style="opacity:.7;font-size:13px">${qn?"Drag anywhere to move \xB7 tap skills at the bottom \xB7 upgrade at the fire":`ESC / P to resume \xB7 WASD move \xB7 ${St().skills.map((e,t)=>Dm[t]+" "+Fs.find(n=>n.k===e).n).join(" \xB7 ")} \xB7 1\u20138 upgrade at the fire`}</p><button class="big" id="pRes">RESUME</button><br><button class="big alt" id="pMute">${di.mute?"SOUND ON":"SOUND OFF"}</button><button class="big alt" id="pQuit">GIVE UP</button>`,jn("pause"),le("pRes").onclick=()=>{nt("pause"),Jt=!1,vi(!0)},le("pMute").onclick=()=>{di.mute=!di.mute,localStorage.setItem("lastlight_mute",di.mute?"1":"0"),Os(!1),ud&&(ud.gain.value=di.mute?0:.11),nt("pause"),Jt=!1},le("pQuit").onclick=()=>{nt("pause"),Jt=!1,y.revived=!0,Ad()})});addEventListener("blur",()=>{for(let r in gn)gn[r]=!1;ut.on=!1,Cr.style.display=mi.style.display="none"});document.addEventListener("visibilitychange",()=>{Os(document.hidden),document.hidden&&(bn(),st==="play"&&!Jt&&le("pauseB").dispatchEvent(new Event("pointerdown")))});var xr=11.5,fm=()=>St().speed,gn={};addEventListener("keydown",r=>{let e=r.key.toLowerCase();if(gn[e]=!0,(e==="escape"||e==="p")&&st==="play"&&!r.repeat){if(Jt){if(y&&y.reviveOffer)return;nt("pause"),Jt=!1,vi(!0)}else le("pauseB").dispatchEvent(new Event("pointerdown"));return}st!=="play"||Jt||r.repeat||(e===" "?(r.preventDefault(),Rr(St().skills[1])):e==="q"?Rr(St().skills[0]):e==="e"?Rr(St().skills[2]):/^[1-8]$/.test(e)?Td(bi[+e-1].k):(e==="escape"||e==="p")&&le("pauseB").dispatchEvent(new Event("pointerdown")))});addEventListener("keyup",r=>{gn[r.key.toLowerCase()]=!1});var ut={on:!1,id:null,ox:0,oy:0,x:0,y:0},Cr=document.createElement("div"),mi=document.createElement("div");Cr.style.cssText="position:fixed;z-index:4;width:120px;height:120px;margin:-60px 0 0 -60px;border-radius:50%;border:3px solid rgba(255,244,220,.35);background:rgba(20,26,42,.25);display:none;pointer-events:none";mi.style.cssText="position:fixed;z-index:4;width:54px;height:54px;margin:-27px 0 0 -27px;border-radius:50%;background:rgba(255,244,220,.55);box-shadow:0 0 12px rgba(255,200,120,.5);display:none;pointer-events:none";document.body.append(Cr,mi);Yn.domElement.addEventListener("pointerdown",r=>{st!=="play"||Jt||(ut.on=!0,ut.id=r.pointerId,ut.ox=ut.x=r.clientX,ut.oy=ut.y=r.clientY,Cr.style.left=mi.style.left=r.clientX+"px",Cr.style.top=mi.style.top=r.clientY+"px",Cr.style.display=mi.style.display="block")});addEventListener("pointermove",r=>{if(!ut.on||r.pointerId!==ut.id)return;ut.x=r.clientX,ut.y=r.clientY;let e=ut.x-ut.ox,t=ut.y-ut.oy,n=Math.hypot(e,t),i=n>48?48/n:1;mi.style.left=ut.ox+e*i+"px",mi.style.top=ut.oy+t*i+"px"});var Fm=r=>{r.pointerId===ut.id&&(ut.on=!1,Cr.style.display=mi.style.display="none")};addEventListener("pointerup",Fm);addEventListener("pointercancel",Fm);var Hl=null;function Gl(){let r=new Y;if((gn.w||gn.arrowup)&&(r.y-=1),(gn.s||gn.arrowdown)&&(r.y+=1),(gn.a||gn.arrowleft)&&(r.x-=1),(gn.d||gn.arrowright)&&(r.x+=1),ut.on){let e=ut.x-ut.ox,t=ut.y-ut.oy,n=Math.hypot(e,t);n>8&&r.set(e/Math.max(n,48),t/Math.max(n,48))}return Hl&&r.copy(Hl),r.length()>1&&r.normalize(),r}function Cv(r){if(!y||st!=="play")return;y.trans||(y.toSpawn<=0&&!Xe.some(n=>n.alive)?(y.between-=r,y.between<=0&&(y.between=1.6,Tv())):y.toSpawn>0&&(y.spawnT-=r,y.spawnT<=0&&Xe.filter(n=>n.alive).length<45&&(y.spawnT=y.spawnGap*(.6+Math.random()*.8),y.bossPending?(y.bossPending=!1,Da("boss")):Da(km(Ia())),y.toSpawn--)));for(let n in y.cd)y.cd[n]=Math.max(0,y.cd[n]-r);y.hp=Math.min(mt(),y.hp+Ul()*r);let e=null,t=1e9;for(let n of Xe)if(n.alive&&n.state!=="rise"){let i=n.m.position.distanceTo(se.position)-.35*n.T.scale;i<t&&(t=i,e=n)}if(Ar()){let n=cn.down?cd():null;if(n){let s=Math.atan2(n.x-se.position.x,n.z-se.position.z)-se.rotation.y;s=Math.atan2(Math.sin(s),Math.cos(s)),se.rotation.y+=s*Math.min(1,r*16)}}else if(e&&t<Ot()+.5){let i=Math.atan2(e.m.position.x-se.position.x,e.m.position.z-se.position.z)-se.rotation.y;i=Math.atan2(Math.sin(i),Math.cos(i)),se.rotation.y+=i*Math.min(1,r*12)}y.atkT-=r;{let n=Gl();if(n.lengthSq()>.01){se.position.x+=n.x*fm()*r,se.position.z+=n.y*fm()*r;let a=Math.hypot(se.position.x,se.position.z*1.15);a>xr&&(se.position.x*=xr/a,se.position.z*=xr/a);{let o=(Ar()?cn.down:e&&t<Ot()+.5)?null:Math.atan2(n.x,n.y);if(o!=null){let l=o-se.rotation.y;l=Math.atan2(Math.sin(l),Math.cos(l)),se.rotation.y+=l*Math.min(1,r*14)}}(Nt===xe.idle||Nt!==xe.run&&!Nt.isRunning())&&Lt(xe.run,!1,1.25)}else Nt===xe.run&&Lt(xe.idle,!1);let s=se.position.distanceTo(Ca)<3.2;y.warm=s,s&&!(y.dailyMod&&y.dailyMod.noFireHeal)&&(y.hp<mt()-1&&(y.healedAtFire=!0),y.hp=Math.min(mt(),y.hp+(2.5+mt()*.012)*r))}if(y.spinT>0){if(y.spinT-=r,y.spinTick-=r,Wt.visible=!0,Wt.position.set(se.position.x,.8,se.position.z),Wt.scale.setScalar(Ot()+1.3),Wt.rotation.z+=r*18,Wt.material.opacity=Math.min(1,y.spinT*2)*.8,y.spinTick<=0){y.spinTick=.28,Ye.swing();for(let n of Xe)if(n.alive&&n.state!=="rise"&&n.m.position.distanceTo(se.position)<Ot()+1.3+.35*n.T.scale){let i=Math.random()<qi();Ln(n,xt()*1.1*(i?2.2:1),i,.5)}}y.spinT<=0&&(Wt.visible=!1,Lt(xe.idle,!1),y.used.spin=!0)}else if(Ar()){let n=cn.down&&y.atkT<=0?cd():null;if(n){y.atkT=Tr(),y.combo=((y.combo||0)+1)%4;let i=y.combo===0;{let a=xe.atk[y.combo]||xe.atk[0];sd()&&Nt===xe.run?rd(xe.atkUp[y.combo]||xe.atkUp[0],hi(a)):Lt(a,!0,hi(a),.1)}let s=xe.atk[y.combo]||xe.atk[0];ui(Aa(s,hi(s)),()=>{if(!y||y.over)return;let a=se.position.clone().setY(1.3),o=n.clone().setY(.9),l=Math.max(1.5,Math.min(14,a.distanceTo(o)));ld("fireball",a,o.sub(a),xt()*(i?2.2:1),l/13,null);let c=Nn[Nn.length-1];c.aimed=!0,i&&(c.power=!0,c.mesh.scale.multiplyScalar(1.8)),on("triangle",300,160,.1,.05),y.used.cast=!0})}}else if(e&&t<Ot()&&y.atkT<=0&&St().type!=="melee"){y.atkT=Tr(),y.combo=((y.combo||0)+1)%4;let n=y.combo===0;{let a=xe.atk[y.combo]||xe.atk[0];sd()&&Nt===xe.run?rd(xe.atkUp[y.combo]||xe.atkUp[0],hi(a)):Lt(a,!0,hi(a),.1)}let i=e,s=xe.atk[y.combo]||xe.atk[0];ui(Aa(s,hi(s)),()=>{if(!y||y.over||!i.alive)return;let a=se.position.clone().setY(1.3);if(ld(St().type,a,i.m.position.clone().setY(1.1).sub(a),xt()*(n?2.2:1),2.2,i),n){let o=Nn[Nn.length-1];o.power=!0,o.mesh.scale.multiplyScalar(1.8),St().type==="arrow"&&(o.pierce=3)}on("triangle",St().type==="arrow"?900:300,St().type==="arrow"?600:160,.1,.05)})}else if(e&&t<Ot()&&y.atkT<=0){y.atkT=Tr(),y.combo=((y.combo||0)+1)%4;let n=xe.atk[y.combo===0?3:y.combo-1];sd()&&Nt===xe.run?rd(xe.atkUp[y.combo===0?3:y.combo-1],hi(n)):Lt(n,!0,hi(n),.1);let i=Aa(n,hi(n));ui(Math.max(0,i-.12),()=>Ye.swing()),y.combo===0&&ui(i,()=>{if(!(!y||y.over)){for(let a of Xe)if(a.alive&&a.state!=="rise"&&a.m.position.distanceTo(se.position)<Ot()+.6+.35*a.T.scale){let o=Math.random()<qi();Ln(a,xt()*1.4*(o?2.2:1),o,.6)}Wt.visible=!0,Wt.position.set(se.position.x,.8,se.position.z),Wt.scale.setScalar(Ot()+.6),Wt.material.opacity=.6,ui(.22,()=>{y&&y.spinT<=0&&(Wt.visible=!1)}),Ye.hit(),Ki(.1)}});let s=e;y.combo!==0&&ui(i,()=>{if(!s.alive||!y||y.over||s.m.position.distanceTo(se.position)>Ot()+1.2)return;let a=Math.random()<qi();Ln(s,xt()*(a?2.2:1),a),Ye.hit();for(let o=0;o<6;o++)ln(s.m.position.clone().setY(1),16773824,3.5);a&&Ki(.12)});for(let a of Xe)if(a!==s&&a.alive&&a.state!=="rise"&&a.m.position.distanceTo(s.m.position)<1.1&&a.m.position.distanceTo(se.position)<Ot()+.4){ui(i+.03,()=>a.alive&&Ln(a,xt()*.4,!1));break}}if(Nt&&Nt!==xe.idle&&Nt!==xe.run&&Nt!==xe.death&&!Nt.isRunning()&&y.spinT<=0&&Lt(Gl().lengthSq()>.01?xe.run:xe.idle,!1,1.25,.25),fv(r),y.dash){let n=y.dash;n.t-=r,se.position.addScaledVector(n.dir,24*r);let i=Math.hypot(se.position.x,se.position.z*1.15);i>xr&&(se.position.x*=xr/i,se.position.z*=xr/i);for(let s of Xe)s.alive&&!n.hit.has(s)&&s.m.position.distanceTo(se.position)<1.3&&(n.hit.add(s),Ln(s,xt()*1.5,!1,.6));ln(se.position.clone().setY(.6),9425919,1),n.t<=0&&(y.dash=null)}if(y.invuln>0&&(y.invuln-=r),y.meteor){let n=y.meteor;if(n.t+=r,Ji.material.opacity=.5+Math.sin(n.t*30)*.3,wr.visible=!0,wr.position.set(n.at.x-6*(1-n.t/.7),9*(1-n.t/.7),n.at.z-3*(1-n.t/.7)),wr.rotation.x+=r*8,n.t>=.7){wr.visible=!1,Ji.visible=!1;for(let i of Xe)i.alive&&i.state!=="rise"&&i.m.position.distanceTo(n.at)<3.1&&Ln(i,xt()*5,!0,1.2);for(let i=0;i<40;i++)ln(n.at.clone().setY(.6),16747068,9);Ns.position.set(n.at.x,1.5,n.at.z),Ns.intensity=200,Ye.blast(),Ki(.5),y.meteor=null}}if(y.novaT>0){y.novaT+=r;let n=y.novaT*12;pi.scale.setScalar(n),pi.material.opacity=Math.max(0,1-y.novaT/.45),y.novaHit||(y.novaHit=new Set);for(let i of Xe)i.alive&&!y.novaHit.has(i)&&i.m.position.distanceTo(y.novaAt)<n&&(y.novaHit.add(i),Ln(i,xt()*1.6,!1,.3),i.slow=3.5);y.novaT>.45&&(y.novaT=0,y.novaHit=null,pi.visible=!1)}if(y.blastT>0){y.blastT+=r;let n=y.blastT*14;On.scale.setScalar(n),On.material.opacity=Math.max(0,1-y.blastT/.6),y.blastHit||(y.blastHit=new Set);for(let i of Xe)i.alive&&!y.blastHit.has(i)&&i.m.position.distanceTo(y.blastAt)<n&&(y.blastHit.add(i),Ln(i,xt()*3.2,!0,.9));y.blastT>.6&&(y.blastT=0,y.blastHit=null,On.visible=!1)}for(let n of Xe){if(n.mix.update(r),n.t+=r,n.flash>0){n.flash-=r;let o=Math.max(0,n.flash/.12);n.mats.forEach(l=>l.emissive&&l.emissive.setRGB(o*1.2,o*1.2,o*1.2))}if(n.state==="dead"){n.t>.9&&(n.m.position.y-=r*.8),n.t>2.2&&(We.remove(n.m),n.gone=!0);continue}if(n.state==="rise"){n.t>3.57/3-.1&&(n.state="walk",In(n,n.A.walk));continue}let i=se.position.clone().sub(n.m.position).setY(0),s=i.length();i.normalize(),n.m.position.addScaledVector(n.knock,r*8),n.knock.multiplyScalar(Math.pow(.02,r));{let o=Math.hypot(n.m.position.x,n.m.position.z);o>15&&(n.m.position.x*=15/o,n.m.position.z*=15/o)}let a=n.T.ranged||.95+.35*n.T.scale;if(n.slow>0&&(n.slow-=r,n.mats.forEach(o=>o.emissive&&n.flash<=0&&o.emissive.setRGB(.05,.15,.35)),n.slow<=0&&n.mats.forEach(o=>o.emissive&&o.emissive.setRGB(0,0,0))),n.type==="boss"&&n.def)ov(n,r,s,i);else if(s>a)n.m.position.addScaledVector(i,n.T.spd*(n.slow>0?.4:1)*r),n.m.rotation.y=Math.atan2(i.x,i.z),n.cur!==n.A.walk&&!Rm(n)&&In(n,n.A.walk);else if(n.m.rotation.y=Math.atan2(i.x,i.z),n.atkT-=r,n.atkT<=0)if(n.atkT=n.T.ranged?2.4:n.type==="boss"?2:1.3,In(n,n.A.atk,!0),n.T.ranged){let o=new Ui(new ai({map:Na,color:new he(.6,2.2,2),transparent:!0,depthWrite:!1,blending:Bi}));o.scale.setScalar(.6),o.position.copy(n.m.position).setY(1.4),We.add(o),Xi.push({s:o,dmg:n.dmg,t:0})}else{let o=n;ui(Aa(n.A.atk,1),()=>{o.alive&&y&&!y.over&&o.m.position.distanceTo(se.position)<2.2+.35*o.T.scale&&Ra(o.dmg)})}for(let o of Xe)if(o!==n&&o.alive&&o.state!=="rise"){let l=n.m.position.x-o.m.position.x,c=n.m.position.z-o.m.position.z,h=l*l+c*c,u=.55*(n.T.scale+o.T.scale);if(h<u*u&&h>1e-4){let d=(u-Math.sqrt(h))*.5/Math.sqrt(h);n.m.position.x+=l*d,n.m.position.z+=c*d}}}for(let n=Xe.length-1;n>=0;n--)Xe[n].gone&&Xe.splice(n,1);for(let n=Xi.length-1;n>=0;n--){let i=Xi[n];i.t+=r;let s=se.position.clone().setY(1.2).sub(i.s.position),a=s.length();i.off&&s.applyAxisAngle(new M(0,1,0),i.off*Math.min(1,a/6)),i.s.position.addScaledVector(s.normalize(),Math.min(a,r*9)),a<.4?(Ra(i.dmg),We.remove(i.s),Xi.splice(n,1)):i.t>4&&(We.remove(i.s),Xi.splice(n,1))}y.hp<=0&&!y.reviveOffer&&(!y.revived&&!y.over&&Fl()?Ev():Ad())}function Ra(r){if(y.invuln>0)return;let e=r*(1-Nl());y.hp-=e,Ye.hurt(),Md("-"+dt(e),ks(se.position.clone().setY(2.4)),"#ff6b5b",18),Math.random()<.25&&y.spinT<=0&&Lt(xe.hit,!0,1.6),Ki(.08)}var pd=1,mm=new M(0,.6,1.6);function Bm(){let r=innerWidth/innerHeight;Wn.aspect=r,Wn.fov=r<1?52:36,pd=r<1?1.3:1,Wn.updateProjectionMatrix()}var Pv=new Ts,fd=60,Ls=0,gm=!1;function zm(){{let a=st==="play"&&!Jt&&Ar();a!==gm&&(gm=a,document.documentElement.classList.toggle("aim",a))}let r=Math.min(.05,Pv.getDelta());r>0&&(fd=fd*.9+.1/r),kl=Math.max(0,kl-r);let e=El>0;El=Math.max(0,El-r);let t=Jt?0:e?r*.08:r;Ls+=t,an&&(an.update(t),av(t)),st==="play"&&cv(t),Cv(t);for(let a of xm){let o=(Ls*1.3+a.userData.o)%1;a.position.set(a.userData.x*(1-o),.4+o*2.2,a.userData.z*(1-o));let l=a.userData.s*(1-o*.7)*1.05;a.scale.set(l,l*1.3,l),a.material.opacity=(1-o)*.55}Ns.intensity*=Math.pow(.02,r),Pl.intensity+=(45+Math.sin(Ls*13)*6+Math.sin(Ls*7.3)*5-Pl.intensity)*Math.min(1,r*6);for(let a=Al.length-1;a>=0;a--){let o=Al[a];o.userData.v.y-=9*r,o.position.addScaledVector(o.userData.v,r),o.userData.l-=r,o.material.opacity=Math.max(0,o.userData.l/.6),o.userData.l<=0&&(We.remove(o),Al.splice(a,1))}se&&(Ds.position.set(se.position.x,.03,se.position.z),Ds.scale.setScalar(Ot()),Ds.visible=st==="play");let n=new M(0,25*pd,19*pd);if(Mr>0&&(n.x+=(Math.random()-.5)*Mr,n.y+=(Math.random()-.5)*Mr,Mr=Math.max(0,Mr-r*1.5)),st==="title"){let a=Ls*.06;n.set(Math.sin(a)*18,13,Math.cos(a)*18)}let i=se&&st!=="title"?se.position.x*.45:0,s=se&&st!=="title"?se.position.z*.45:0;if(n.x+=i,n.z+=s,Wn.position.lerp(n,Math.min(1,r*3)),mm.lerp(new M(i,.6,st==="title"?0:1.6+s),Math.min(1,r*3)),Wn.lookAt(mm),y&&st==="play"){Xl(),wd(!1),jl();let[a,o]=ks(se.position.clone().setY(3.2)),l=le("hpbar");l.style.left=a-32+"px",l.style.top=o+"px",le("hpI").style.width=Math.max(0,y.hp/mt()*100)+"%",le("hpbar").style.boxShadow=y.warm?"0 0 10px #7cf09a":"none",le("bigHpI").style.width=Math.max(0,y.hp/mt()*100)+"%",le("bigHpT").textContent=`${dt(Math.max(0,y.hp))} / ${dt(mt())}`,le("bigHp").classList.toggle("warm",!!y.warm),!y.warm&&le("tip").style.display==="block"&&le("tip").innerHTML.includes("buy at the fire")&&Ed(),le("panel").classList.toggle("open",!!y.warm),le("campHead").innerHTML=`${Ne.fire.replace(/34/g,"18")} CAMPFIRE <small>${qn?"tap to upgrade":"press 1\u20138"}</small>`;{let c=bi.some(u=>!(u.max&&ot(u.k)>=u.max)&&y.gold>=Er(u)),h=le("fireTag");if(y.warm)h.style.display="none";else{let[u,d]=ks(Ca.clone().setY(3.4));h.style.display="block",h.style.left=u+"px",h.style.top=d+"px",h.classList.toggle("go",c),h.innerHTML=c?`${Ne.coin(13)} UPGRADE HERE`:"REST HERE"}}document.querySelectorAll(".sk").forEach(c=>{let h=c.dataset.k,u=Fs.find(p=>p.k===h),d=y.cd[h]/yd(u);c.classList.toggle("cool",d>0),c.querySelector(".cd").style.background=d>0?`conic-gradient(rgba(10,14,28,.7) ${d*360}deg, transparent 0)`:"none"})}st!=="play"&&(le("hpbar").style.display=st==="dead"?"block":"none"),Ua.render(),requestAnimationFrame(zm)}addEventListener("resize",()=>{Yn.setSize(innerWidth,innerHeight),Ua.setSize(innerWidth,innerHeight),Bm()});Bm();(async()=>{await Promise.all([Dl("graveyard"),sv(),mv]);{let r=bm();if(r){let e=r.getItem(Rl);e?vm(e):bn()}}await xd(Pr[te.hero]&&te.heroes[te.hero]?te.hero:"knight"),nt("loading"),ql(),zm();try{bt.sdk&&bt.sdk.game.loadingStop&&bt.sdk.game.loadingStop()}catch{}setTimeout(async()=>{for(let r of["pumpkin","village"])await Dl(r,!0)},1500)})().catch(r=>{le("loading").textContent="Could not load: "+r.message});window.__gameState=()=>({phase:st==="play"?"playing":st==="dead"?"lost":"title",level:y?y.wave:0,score:y?y.kills:0,goal:0,hearts:y?Math.round(y.hp):0,time:+Ls.toFixed(1),fps:Math.round(fd),gold:y?y.gold:0,enemies:Xe.filter(r=>r.alive).length,best:te.best,embers:te.embers});window.__autoplay=()=>{if(st!=="play"||!y){Hl=null;return}if(Ar()){let n=Xe.filter(i=>i.alive&&i.state!=="rise").sort((i,s)=>i.m.position.distanceTo(se.position)-s.m.position.distanceTo(se.position))[0];cn.bot=n&&n.m.position.distanceTo(se.position)<Ot()+2?n.m.position:null,cn.down=!!cn.bot}{let n=Xe.filter(a=>a.alive&&a.m.position.distanceTo(se.position)<4),i=new Y,s=bi.some(a=>!(a.max&&ot(a.k)>=a.max)&&y.gold>=Er(a)*1.6);if(y.hp<mt()*.5||s&&!y.warm)i.set(Ca.x-se.position.x,Ca.z-se.position.z);else if(n.length>=3)for(let a of n)i.add(new Y(se.position.x-a.m.position.x,se.position.z-a.m.position.z));else{let a=Xe.filter(o=>o.alive&&o.state!=="rise").sort((o,l)=>o.m.position.distanceTo(se.position)-l.m.position.distanceTo(se.position))[0];a&&a.m.position.distanceTo(se.position)>Ot()&&i.set(a.m.position.x-se.position.x,a.m.position.z-se.position.z)}Hl=i.lengthSq()>.5?i.normalize():null}let r=Xe.filter(n=>n.alive&&n.m.position.distanceTo(se.position)<Ot()+1.3).length,e=St().skills;r>=4&&y.cd[e[1]]<=0&&Rr(e[1]),Xe.filter(n=>n.alive).length>=8&&y.cd[e[0]]<=0&&Rr(e[0]),y.hp<mt()*.4&&y.cd.heal<=0&&te.meta.wind&&Rr("heal"),Us[y.q]&&Us[y.q].g()>=Us[y.q].n&&le("quest").dispatchEvent(new Event("pointerdown"));let t=bi.filter(n=>!(n.max&&ot(n.k)>=n.max)).map(n=>({u:n,c:Er(n)*{dmg:.8,hp:.9,spd:1,regen:1.2,armor:1.1,range:1.4,crit:1.3,gold:1.5}[n.k]})).sort((n,i)=>n.c-i.c);t[0]&&y.gold>=Er(t[0].u)&&Td(t[0].u.k)};window.__enemiesDbg=()=>Xe.filter(r=>r.alive).map(r=>{let e=r.m.position.clone().setY(1).project(Wn);return Math.abs(e.x)<.95&&Math.abs(e.y)<.9&&e.z<1});window.__spawn=(r=1)=>{for(let e=0;e<r;e++)Da(km(Ia()));return Xe.filter(e=>e.alive).length};window.__boss=()=>{y.toSpawn=0;let r=Da("boss");return r.m.position.set(5,0,2),r.hp=r.maxHp=1e6,!0};window.__dbg=()=>({wave:y&&y.wave,toSpawn:y&&y.toSpawn,between:y&&y.between,hero:se.position.toArray().map(r=>+r.toFixed(1)),en:Xe.map(r=>[r.type,r.state,r.alive,+r.hp.toFixed(0),r.m.position.toArray().map(e=>+e.toFixed(1))])});window.__pr={start:(r=0)=>fi(r),hero:async r=>{te.heroes[r]=!0,te.hero=r,await xd(r)},P:te,forge:()=>{for(let r in Sr)for(;te.meta[r]<Sr[r].max&&te.embers>=Sr[r].cost(te.meta[r]);)te.embers-=Sr[r].cost(te.meta[r]),te.meta[r]++;bn()}};
/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
