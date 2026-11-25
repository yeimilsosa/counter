(()=>{var Bd=Object.defineProperty;var ea=(e,t,i)=>()=>{if(i)throw i[0];try{return e&&(t=e(e=0)),t}catch(r){throw i=[r],r}};var zd=(e,t)=>{for(var i in t)Bd(e,i,{get:t[i],enumerable:!0})};function Bi(e){let t=window.__TTC_INLINE__;if(!t)return e;if(t[e])return t[e];let i=e.replace("-sm.webp",".webp");return t[i]||t[i.replace("-4k.","-2k.")]||t[i.replace("-2k.","-4k.")]||e}function Gl(){if(new URLSearchParams(location.search).has("nowebgl"))return!1;try{let e=document.createElement("canvas"),t=e.getContext("webgl2")||e.getContext("webgl");if(!t)return!1;let i=t.getExtension("WEBGL_lose_context");return i&&i.loseContext(),!0}catch{return!1}}function Hl(){let e=new URLSearchParams(location.search).get("quality");if(e==="high"||e==="medium"||e==="low")return e;let t=window.matchMedia("(pointer: coarse)").matches,i=Math.min(screen.width,screen.height)<820,r=navigator.hardwareConcurrency||4,a=navigator.deviceMemory||4;return r<=2||a<=2?"low":t||i||r<=4||a<=4?"medium":"high"}var zi,ds,tr,dt,bt,ka,ps,ms,Vl,mr=ea(()=>{zi=()=>window.matchMedia("(prefers-reduced-motion: reduce)").matches;ds=(e,t=0,i=1)=>Math.min(i,Math.max(t,e)),tr=(e,t,i)=>e+(t-e)*i,dt=(e,t,i)=>ds((e-t)/(i-t)),bt=e=>e*e*(3-2*e),ka=e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,ps=e=>1-Math.pow(1-e,3),ms=e=>1-Math.pow(1-e,4),Vl=e=>-(Math.cos(Math.PI*e)-1)/2});function Sp(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Mp(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function _a(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function bp(){let e=_a("canvas");return e.style.display="block",e}function nh(...e){let t="THREE."+e.shift();Hr?Hr("log",t,...e):console.log(t,...e)}function Ic(e){let t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){let i=e[1];i&&i.isStackTrace?e[0]+=" "+i.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function ze(...e){e=Ic(e);let t="THREE."+e.shift();if(Hr)Hr("warn",t,...e);else{let i=e[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...e)}}function He(...e){e=Ic(e);let t="THREE."+e.shift();if(Hr)Hr("error",t,...e);else{let i=e[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...e)}}function Tn(...e){let t=e.join(" ");t in ah||(ah[t]=!0,ze(...e))}function Ep(e,t,i){return new Promise(function(r,a){function n(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:a();break;case e.TIMEOUT_EXPIRED:setTimeout(n,i);break;default:r()}}setTimeout(n,i)})}function jr(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Bt[e&255]+Bt[e>>8&255]+Bt[e>>16&255]+Bt[e>>24&255]+"-"+Bt[t&255]+Bt[t>>8&255]+"-"+Bt[t>>16&15|64]+Bt[t>>24&255]+"-"+Bt[i&63|128]+Bt[i>>8&255]+"-"+Bt[i>>16&255]+Bt[i>>24&255]+Bt[r&255]+Bt[r>>8&255]+Bt[r>>16&255]+Bt[r>>24&255]).toLowerCase()}function it(e,t,i){return Math.max(t,Math.min(i,e))}function Tp(e,t){return(e%t+t)%t}function Ms(e,t,i){return(1-i)*e+i*t}function Ap(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function Jo(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Rp(e,t){if(t.constructor===Float32Array)return e;let i=Jo(t);if(i===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(e/i,-1)}function Cp(e,t){if(t.constructor===Float32Array)return e;let i=Jo(t);if(i===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(e*i)}function Ip(){let e={enabled:!0,workingColorSpace:Un,spaces:{},convert:function(a,n,s){return this.enabled===!1||n===s||!n||!s||(this.spaces[n].transfer===pt&&(a.r=Pi(a.r),a.g=Pi(a.g),a.b=Pi(a.b)),this.spaces[n].primaries!==this.spaces[s].primaries&&(a.applyMatrix3(this.spaces[n].toXYZ),a.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===pt&&(a.r=Ur(a.r),a.g=Ur(a.g),a.b=Ur(a.b))),a},workingToColorSpace:function(a,n){return this.convert(a,this.workingColorSpace,n)},colorSpaceToWorking:function(a,n){return this.convert(a,n,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===oi?Nn:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,n=this.workingColorSpace){return a.fromArray(this.spaces[n].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,n,s){return a.copy(this.spaces[s].fromXYZ).multiply(this.spaces[n].toXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Un]:{primaries:t,whitePoint:r,transfer:Nn,toXYZ:oh,fromXYZ:lh,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Wt},outputColorSpaceConfig:{drawingBufferColorSpace:Wt}},[Wt]:{primaries:t,whitePoint:r,transfer:pt,toXYZ:oh,fromXYZ:lh,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Wt}}}),e}function Pi(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Ur(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}function ws(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?Lp.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(ze("Texture: Unable to serialize Texture."),{})}function Cs(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(t-e)*6*i:i<1/2?t:i<2/3?e+(t-e)*6*(2/3-i):e}function Fs(e,t,i,r,a){for(let n=0,s=e.length-3;n<=s;n+=3){rr.fromArray(e,n);let o=a.x*Math.abs(rr.x)+a.y*Math.abs(rr.y)+a.z*Math.abs(rr.z),l=t.dot(rr),h=i.dot(rr),c=r.dot(rr);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>o)return!1}return!0}function Vp(){let e=new ArrayBuffer(4),t=new Float32Array(e),i=new Uint32Array(e),r=new Uint32Array(512),a=new Uint32Array(512);for(let l=0;l<256;++l){let h=l-127;h<-27?(r[l]=0,r[l|256]=32768,a[l]=24,a[l|256]=24):h<-14?(r[l]=1024>>-h-14,r[l|256]=1024>>-h-14|32768,a[l]=-h-1,a[l|256]=-h-1):h<=15?(r[l]=h+15<<10,r[l|256]=h+15<<10|32768,a[l]=13,a[l|256]=13):h<128?(r[l]=31744,r[l|256]=64512,a[l]=24,a[l|256]=24):(r[l]=31744,r[l|256]=64512,a[l]=13,a[l|256]=13)}let n=new Uint32Array(2048),s=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let h=l<<13,c=0;for(;(h&8388608)===0;)h<<=1,c-=8388608;h&=-8388609,c+=947912704,n[l]=h|c}for(let l=1024;l<2048;++l)n[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)s[l]=l<<23;s[31]=1199570944,s[32]=2147483648;for(let l=33;l<63;++l)s[l]=2147483648+(l-32<<23);s[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:t,uint32View:i,baseTable:r,shiftTable:a,mantissaTable:n,exponentTable:s,offsetTable:o}}function Zp(e,t,i,r,a,n,s,o){let l;if(t.side===Ot?l=r.intersectTriangle(s,n,a,!0,o):l=r.intersectTriangle(a,n,s,t.side===hr,o),l===null)return null;an.copy(o),an.applyMatrix4(e.matrixWorld);let h=i.ray.origin.distanceTo(an);return h<i.near||h>i.far?null:{distance:h,point:an.clone(),object:e}}function nn(e,t,i,r,a,n,s,o,l,h){e.getVertexPosition(o,Qa),e.getVertexPosition(l,en),e.getVertexPosition(h,tn);let c=Zp(e,t,i,r,Qa,en,tn,yh);if(c){let d=new R;Ir.getBarycoord(yh,Qa,en,tn,d),a&&(c.uv=Ir.getInterpolatedAttribute(a,o,l,h,d,new ne)),n&&(c.uv1=Ir.getInterpolatedAttribute(n,o,l,h,d,new ne)),s&&(c.normal=Ir.getInterpolatedAttribute(s,o,l,h,d,new R),c.normal.dot(r.direction)>0&&c.normal.multiplyScalar(-1));let u={a:o,b:l,c:h,normal:new R,materialIndex:0};Ir.getNormal(Qa,en,tn,u.normal),c.face=u,c.barycoord=d}return c}function ln(e,t,i,r,a,n,s){let o=e.geometry.attributes.position;if(Fn.fromBufferAttribute(o,a),Bn.fromBufferAttribute(o,n),i.distanceSqToSegment(Fn,Bn,Vs,Mh)>r)return;Vs.applyMatrix4(e.matrixWorld);let l=t.ray.origin.distanceTo(Vs);if(!(l<t.near||l>t.far))return{distance:l,point:Mh.clone().applyMatrix4(e.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:e}}function Th(e,t,i,r,a,n,s){let o=zo.distanceSqToPoint(e);if(o<i){let l=new R;zo.closestPointToPoint(e,l),l.applyMatrix4(r);let h=a.ray.origin.distanceTo(l);if(h<a.near||h>a.far)return;n.push({distance:h,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:s})}}function el(){let e=0,t=0,i=0,r=0;function a(n,s,o,l){e=n,t=o,i=-3*n+3*s-2*o-l,r=2*n-2*s+o+l}return{initCatmullRom:function(n,s,o,l,h){a(s,o,h*(o-n),h*(l-s))},initNonuniformCatmullRom:function(n,s,o,l,h,c,d){let u=(s-n)/h-(o-n)/(h+c)+(o-s)/c,p=(o-s)/c-(l-s)/(c+d)+(l-o)/d;u*=c,p*=c,a(s,o,u,p)},calc:function(n){let s=n*n,o=s*n;return e+t*n+i*s+r*o}}}function Ch(e,t,i,r,a){let n=(r-t)*.5,s=(a-i)*.5,o=e*e,l=e*o;return(2*i-2*r+n+s)*l+(-3*i+3*r-2*n-s)*o+n*e+i}function cm(e,t){let i=1-e;return i*i*t}function um(e,t){return 2*(1-e)*e*t}function dm(e,t){return e*e*t}function da(e,t,i,r){return cm(e,t)+um(e,i)+dm(e,r)}function pm(e,t){let i=1-e;return i*i*i*t}function mm(e,t){let i=1-e;return 3*i*i*e*t}function fm(e,t){return 3*(1-e)*e*e*t}function gm(e,t){return e*e*e*t}function pa(e,t,i,r,a){return pm(e,t)+mm(e,i)+fm(e,r)+gm(e,a)}function xm(e,t,i=2){let r=t&&t.length,a=r?t[0]*i:e.length,n=ou(e,0,a,i,!0),s=[];if(!n||n.next===n.prev)return s;let o,l,h;if(r&&(n=wm(e,t,n,i)),e.length>80*i){o=e[0],l=e[1];let c=o,d=l;for(let u=i;u<a;u+=i){let p=e[u],g=e[u+1];p<o&&(o=p),g<l&&(l=g),p>c&&(c=p),g>d&&(d=g)}h=Math.max(c-o,d-l),h=h!==0?32767/h:0}return Sa(n,s,i,o,l,h,0),s}function ou(e,t,i,r,a){let n;if(a===Om(e,t,i,r)>0)for(let s=t;s<i;s+=r)n=Lh(s/r|0,e[s],e[s+1],n);else for(let s=i-r;s>=t;s-=r)n=Lh(s/r|0,e[s],e[s+1],n);return n&&Wr(n,n.next)&&(ba(n),n=n.next),n}function ur(e,t){if(!e)return e;t||(t=e);let i=e,r;do if(r=!1,!i.steiner&&(Wr(i,i.next)||Et(i.prev,i,i.next)===0)){if(ba(i),i=t=i.prev,i===i.next)break;r=!0}else i=i.next;while(r||i!==t);return t}function Sa(e,t,i,r,a,n,s){if(!e)return;!s&&n&&Im(e,r,a,n);let o=e;for(;e.prev!==e.next;){let l=e.prev,h=e.next;if(n?Mm(e,r,a,n):Sm(e)){t.push(l.i,e.i,h.i),ba(e),e=h.next,o=h.next;continue}if(e=h,e===o){s?s===1?(e=bm(ur(e),t),Sa(e,t,i,r,a,n,2)):s===2&&Em(e,t,i,r,a,n):Sa(ur(e),t,i,r,a,n,1);break}}}function Sm(e){let t=e.prev,i=e,r=e.next;if(Et(t,i,r)>=0)return!1;let a=t.x,n=i.x,s=r.x,o=t.y,l=i.y,h=r.y,c=Math.min(a,n,s),d=Math.min(o,l,h),u=Math.max(a,n,s),p=Math.max(o,l,h),g=r.next;for(;g!==t;){if(g.x>=c&&g.x<=u&&g.y>=d&&g.y<=p&&ha(a,o,n,l,s,h,g.x,g.y)&&Et(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Mm(e,t,i,r){let a=e.prev,n=e,s=e.next;if(Et(a,n,s)>=0)return!1;let o=a.x,l=n.x,h=s.x,c=a.y,d=n.y,u=s.y,p=Math.min(o,l,h),g=Math.min(c,d,u),_=Math.max(o,l,h),f=Math.max(c,d,u),m=ko(p,g,t,i,r),x=ko(_,f,t,i,r),b=e.prevZ,y=e.nextZ;for(;b&&b.z>=m&&y&&y.z<=x;){if(b.x>=p&&b.x<=_&&b.y>=g&&b.y<=f&&b!==a&&b!==s&&ha(o,c,l,d,h,u,b.x,b.y)&&Et(b.prev,b,b.next)>=0||(b=b.prevZ,y.x>=p&&y.x<=_&&y.y>=g&&y.y<=f&&y!==a&&y!==s&&ha(o,c,l,d,h,u,y.x,y.y)&&Et(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;b&&b.z>=m;){if(b.x>=p&&b.x<=_&&b.y>=g&&b.y<=f&&b!==a&&b!==s&&ha(o,c,l,d,h,u,b.x,b.y)&&Et(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;y&&y.z<=x;){if(y.x>=p&&y.x<=_&&y.y>=g&&y.y<=f&&y!==a&&y!==s&&ha(o,c,l,d,h,u,y.x,y.y)&&Et(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function bm(e,t){let i=e;do{let r=i.prev,a=i.next.next;!Wr(r,a)&&hu(r,i,i.next,a)&&Ma(r,a)&&Ma(a,r)&&(t.push(r.i,i.i,a.i),ba(i),ba(i.next),i=e=a),i=i.next}while(i!==e);return ur(i)}function Em(e,t,i,r,a,n){let s=e;do{let o=s.next.next;for(;o!==s.prev;){if(s.i!==o.i&&Dm(s,o)){let l=cu(s,o);s=ur(s,s.next),l=ur(l,l.next),Sa(s,t,i,r,a,n,0),Sa(l,t,i,r,a,n,0);return}o=o.next}s=s.next}while(s!==e)}function wm(e,t,i,r){let a=[];for(let n=0,s=t.length;n<s;n++){let o=t[n]*r,l=n<s-1?t[n+1]*r:e.length,h=ou(e,o,l,r,!1);h===h.next&&(h.steiner=!0),a.push(Pm(h))}a.sort(Tm);for(let n=0;n<a.length;n++)i=Am(a[n],i);return i}function Tm(e,t){let i=e.x-t.x;if(i===0&&(i=e.y-t.y,i===0)){let r=(e.next.y-e.y)/(e.next.x-e.x),a=(t.next.y-t.y)/(t.next.x-t.x);i=r-a}return i}function Am(e,t){let i=Rm(e,t);if(!i)return t;let r=cu(i,e);return ur(r,r.next),ur(i,i.next)}function Rm(e,t){let i=t,r=e.x,a=e.y,n=-1/0,s;if(Wr(e,i))return i;do{if(Wr(e,i.next))return i.next;if(a<=i.y&&a>=i.next.y&&i.next.y!==i.y){let d=i.x+(a-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(d<=r&&d>n&&(n=d,s=i.x<i.next.x?i:i.next,d===r))return s}i=i.next}while(i!==t);if(!s)return null;let o=s,l=s.x,h=s.y,c=1/0;i=s;do{if(r>=i.x&&i.x>=l&&r!==i.x&&lu(a<h?r:n,a,l,h,a<h?n:r,a,i.x,i.y)){let d=Math.abs(a-i.y)/(r-i.x);Ma(i,e)&&(d<c||d===c&&(i.x>s.x||i.x===s.x&&Cm(s,i)))&&(s=i,c=d)}i=i.next}while(i!==o);return s}function Cm(e,t){return Et(e.prev,e,t.prev)<0&&Et(t.next,e,e.next)<0}function Im(e,t,i,r){let a=e;do a.z===0&&(a.z=ko(a.x,a.y,t,i,r)),a.prevZ=a.prev,a.nextZ=a.next,a=a.next;while(a!==e);a.prevZ.nextZ=null,a.prevZ=null,Lm(a)}function Lm(e){let t,i=1;do{let r=e,a;e=null;let n=null;for(t=0;r;){t++;let s=r,o=0;for(let h=0;h<i&&(o++,s=s.nextZ,!!s);h++);let l=i;for(;o>0||l>0&&s;)o!==0&&(l===0||!s||r.z<=s.z)?(a=r,r=r.nextZ,o--):(a=s,s=s.nextZ,l--),n?n.nextZ=a:e=a,a.prevZ=n,n=a;r=s}n.nextZ=null,i*=2}while(t>1);return e}function ko(e,t,i,r,a){return e=(e-i)*a|0,t=(t-r)*a|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function Pm(e){let t=e,i=e;do(t.x<i.x||t.x===i.x&&t.y<i.y)&&(i=t),t=t.next;while(t!==e);return i}function lu(e,t,i,r,a,n,s,o){return(a-s)*(t-o)>=(e-s)*(n-o)&&(e-s)*(r-o)>=(i-s)*(t-o)&&(i-s)*(n-o)>=(a-s)*(r-o)}function ha(e,t,i,r,a,n,s,o){return!(e===s&&t===o)&&lu(e,t,i,r,a,n,s,o)}function Dm(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!Um(e,t)&&(Ma(e,t)&&Ma(t,e)&&Nm(e,t)&&(Et(e.prev,e,t.prev)||Et(e,t.prev,t))||Wr(e,t)&&Et(e.prev,e,e.next)>0&&Et(t.prev,t,t.next)>0)}function Et(e,t,i){return(t.y-e.y)*(i.x-t.x)-(t.x-e.x)*(i.y-t.y)}function Wr(e,t){return e.x===t.x&&e.y===t.y}function hu(e,t,i,r){let a=fn(Et(e,t,i)),n=fn(Et(e,t,r)),s=fn(Et(i,r,e)),o=fn(Et(i,r,t));return!!(a!==n&&s!==o||a===0&&mn(e,i,t)||n===0&&mn(e,r,t)||s===0&&mn(i,e,r)||o===0&&mn(i,t,r))}function mn(e,t,i){return t.x<=Math.max(e.x,i.x)&&t.x>=Math.min(e.x,i.x)&&t.y<=Math.max(e.y,i.y)&&t.y>=Math.min(e.y,i.y)}function fn(e){return e>0?1:e<0?-1:0}function Um(e,t){let i=e;do{if(i.i!==e.i&&i.next.i!==e.i&&i.i!==t.i&&i.next.i!==t.i&&hu(i,i.next,e,t))return!0;i=i.next}while(i!==e);return!1}function Ma(e,t){return Et(e.prev,e,e.next)<0?Et(e,t,e.next)>=0&&Et(e,e.prev,t)>=0:Et(e,t,e.prev)<0||Et(e,e.next,t)<0}function Nm(e,t){let i=e,r=!1,a=(e.x+t.x)/2,n=(e.y+t.y)/2;do i.y>n!=i.next.y>n&&i.next.y!==i.y&&a<(i.next.x-i.x)*(n-i.y)/(i.next.y-i.y)+i.x&&(r=!r),i=i.next;while(i!==e);return r}function cu(e,t){let i=Go(e.i,e.x,e.y),r=Go(t.i,t.x,t.y),a=e.next,n=t.prev;return e.next=t,t.prev=e,i.next=a,a.prev=i,r.next=i,i.prev=r,n.next=r,r.prev=n,r}function Lh(e,t,i,r){let a=Go(e,t,i);return r?(a.next=r.next,a.prev=r,r.next.prev=a,r.next=a):(a.prev=a,a.next=a),a}function ba(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Go(e,t,i){return{i:e,x:t,y:i,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Om(e,t,i,r){let a=0;for(let n=t,s=i-r;n<i;n+=r)a+=(e[s]-e[n])*(e[n+1]+e[s+1]),s=n;return a}function Ph(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function Dh(e,t){for(let i=0;i<t.length;i++)e.push(t[i].x),e.push(t[i].y)}function km(e,t,i){if(i.shapes=[],Array.isArray(e))for(let r=0,a=e.length;r<a;r++){let n=e[r];i.shapes.push(n.uuid)}else i.shapes.push(e.uuid);return i.options=Object.assign({},t),t.extrudePath!==void 0&&(i.options.extrudePath=t.extrudePath.toJSON()),i}function jm(e,t){if(t.shapes=[],Array.isArray(e))for(let i=0,r=e.length;i<r;i++){let a=e[i];t.shapes.push(a.uuid)}else t.shapes.push(e.uuid);return t}function Uh(e,t,i){let r=`${e.x},${e.y},${e.z}-${t.x},${t.y},${t.z}`,a=`${t.x},${t.y},${t.z}-${e.x},${e.y},${e.z}`;return i.has(r)===!0||i.has(a)===!0?!1:(i.add(r),i.add(a),!0)}function Xr(e){let t={};for(let i in e){t[i]={};for(let r in e[i]){let a=e[i][r];if(Nh(a))a.isRenderTargetTexture?(ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=a.clone();else if(Array.isArray(a))if(Nh(a[0])){let n=[];for(let s=0,o=a.length;s<o;s++)n[s]=a[s].clone();t[i][r]=n}else t[i][r]=a.slice();else t[i][r]=a}}return t}function Vt(e){let t={};for(let i=0;i<e.length;i++){let r=Xr(e[i]);for(let a in r)t[a]=r[a]}return t}function Nh(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Km(e){let t=[];for(let i=0;i<e.length;i++)t.push(e[i].clone());return t}function Eu(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:nt.workingColorSpace}function wr(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function gn(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}function wu(e,t,i,r,a){let n=1-e;return n*n*n*t+3*n*n*e*i+3*n*e*e*r+e*e*e*a}function cf(e,t,i,r,a){let n=1-e;return 3*n*n*(i-t)+6*n*e*(r-i)+3*e*e*(a-r)}function uf(e,t,i,r,a){let n=(e-t)/(a-t);for(let s=0;s<8;s++){let o=wu(n,t,i,r,a)-e;if(Math.abs(o)<1e-10)break;let l=cf(n,t,i,r,a);if(Math.abs(l)<1e-10)break;n=Math.max(0,Math.min(1,n-o/l))}return n}function Oh(e,t){for(let i=0,r=e.length;i!==r;i+=2)e[i]+=t}function Fh(e,t){for(let i=0,r=e.length;i!==r;i+=2)e[i]*=t}function Bh(e){try{let t=e.slice(e.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}function Gh(e,t,i,r){let a=If(r);switch(i){case Ec:return e*t;case Tc:return e*t/a.components*a.byteLength;case qo:return e*t/a.components*a.byteLength;case cr:return e*t*2/a.components*a.byteLength;case Yo:return e*t*2/a.components*a.byteLength;case wc:return e*t*3/a.components*a.byteLength;case vi:return e*t*4/a.components*a.byteLength;case $o:return e*t*4/a.components*a.byteLength;case Mn:case bn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case En:case wn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case oo:case ho:return Math.max(e,16)*Math.max(t,8)/4;case so:case lo:return Math.max(e,8)*Math.max(t,8)/2;case co:case uo:case mo:case fo:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case po:case Ln:case go:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case vo:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case _o:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case yo:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case xo:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case So:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Mo:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case bo:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Eo:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case wo:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case To:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Ao:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Ro:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Co:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Io:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Lo:case Po:case Do:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Uo:case No:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Pn:case Oo:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function If(e){switch(e){case ti:case xc:return{byteLength:1,components:1};case va:case Sc:case xi:return{byteLength:2,components:1};case Xo:case jo:return{byteLength:2,components:4};case yi:case Wo:case gi:return{byteLength:4,components:1};case Mc:case bc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}function Ru(){let e=null,t=!1,i=null,r=null;function a(n,s){r=e.requestAnimationFrame(a),i(n,s)}return{start:function(){t!==!0&&i!==null&&e!==null&&(r=e.requestAnimationFrame(a),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(n){i=n},setContext:function(n){e=n}}}function Lf(e){let t=new WeakMap;function i(o,l){let h=o.array,c=o.usage,d=h.byteLength,u=e.createBuffer();e.bindBuffer(l,u),e.bufferData(l,h,c),o.onUploadCallback();let p;if(h instanceof Float32Array)p=e.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)p=e.HALF_FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?p=e.HALF_FLOAT:p=e.UNSIGNED_SHORT;else if(h instanceof Int16Array)p=e.SHORT;else if(h instanceof Uint32Array)p=e.UNSIGNED_INT;else if(h instanceof Int32Array)p=e.INT;else if(h instanceof Int8Array)p=e.BYTE;else if(h instanceof Uint8Array)p=e.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)p=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:u,type:p,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:d}}function r(o,l,h){let c=l.array,d=l.updateRanges;if(e.bindBuffer(h,o),d.length===0)e.bufferSubData(h,0,c);else{d.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<d.length;p++){let g=d[u],_=d[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,d[u]=_)}d.length=u+1;for(let p=0,g=d.length;p<g;p++){let _=d[p];e.bufferSubData(h,_.start*c.BYTES_PER_ELEMENT,c,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function n(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let c=t.get(o);(!c||c.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let h=t.get(o);if(h===void 0)t.set(o,i(o,l));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,o,l),h.version=o.version}}return{get:a,remove:n,update:s}}function d1(e,t,i,r,a,n){let s=new Ye(0),o=a===!0?0:1,l,h,c=null,d=0,u=null;function p(x){let b=x.isScene===!0?x.background:null;if(b&&b.isTexture){let y=x.backgroundBlurriness>0;b=t.get(b,y)}return b}function g(x){let b=!1,y=p(x);y===null?f(s,o):y&&y.isColor&&(f(y,1),b=!0);let w=e.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,n):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,n),(e.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function _(x,b){let y=p(b);y&&y.isCubeTexture?(h===void 0&&(h=new qt(new Hn(1,1,1),new Zt({name:"BackgroundCubeMaterial",uniforms:Xr(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:Ot,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,A,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(u1.makeRotationFromEuler(b.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(Cu),h.material.toneMapped=nt.getTransfer(y.colorSpace)!==pt,(c!==y||d!==y.version||u!==e.toneMapping)&&(h.material.needsUpdate=!0,c=y,d=y.version,u=e.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new qt(new tl(2,2),new Zt({name:"BackgroundMaterial",uniforms:Xr(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:hr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=nt.getTransfer(y.colorSpace)!==pt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(c!==y||d!==y.version||u!==e.toneMapping)&&(l.material.needsUpdate=!0,c=y,d=y.version,u=e.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function f(x,b){x.getRGB(yn,Eu(e)),i.buffers.color.setClear(yn.r,yn.g,yn.b,b,n)}function m(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(x,b=1){s.set(x),o=b,f(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,f(s,o)},render:g,addToRenderList:_,dispose:m}}function p1(e,t){let i=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},a=u(null),n=a,s=!1;function o(L,F,j,I,G){let J=!1,H=d(L,I,j,F);n!==H&&(n=H,h(n.object)),J=p(L,I,j,G),J&&g(L,I,j,G),G!==null&&t.update(G,e.ELEMENT_ARRAY_BUFFER),(J||s)&&(s=!1,y(L,F,j,I),G!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return e.createVertexArray()}function h(L){return e.bindVertexArray(L)}function c(L){return e.deleteVertexArray(L)}function d(L,F,j,I){let G=I.wireframe===!0,J=r[F.id];J===void 0&&(J={},r[F.id]=J);let H=L.isInstancedMesh===!0?L.id:0,de=J[H];de===void 0&&(de={},J[H]=de);let q=de[j.id];q===void 0&&(q={},de[j.id]=q);let X=q[G];return X===void 0&&(X=u(l()),q[G]=X),X}function u(L){let F=[],j=[],I=[];for(let G=0;G<i;G++)F[G]=0,j[G]=0,I[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:j,attributeDivisors:I,object:L,attributes:{},index:null}}function p(L,F,j,I){let G=n.attributes,J=F.attributes,H=0,de=j.getAttributes();for(let q in de)if(de[q].location>=0){let X=G[q],ee=J[q];if(ee===void 0&&(q==="instanceMatrix"&&L.instanceMatrix&&(ee=L.instanceMatrix),q==="instanceColor"&&L.instanceColor&&(ee=L.instanceColor)),X===void 0||X.attribute!==ee||ee&&X.data!==ee.data)return!0;H++}return n.attributesNum!==H||n.index!==I}function g(L,F,j,I){let G={},J=F.attributes,H=0,de=j.getAttributes();for(let q in de)if(de[q].location>=0){let X=J[q];X===void 0&&(q==="instanceMatrix"&&L.instanceMatrix&&(X=L.instanceMatrix),q==="instanceColor"&&L.instanceColor&&(X=L.instanceColor));let ee={};ee.attribute=X,X&&X.data&&(ee.data=X.data),G[q]=ee,H++}n.attributes=G,n.attributesNum=H,n.index=I}function _(){let L=n.newAttributes;for(let F=0,j=L.length;F<j;F++)L[F]=0}function f(L){m(L,0)}function m(L,F){let j=n.newAttributes,I=n.enabledAttributes,G=n.attributeDivisors;j[L]=1,I[L]===0&&(e.enableVertexAttribArray(L),I[L]=1),G[L]!==F&&(e.vertexAttribDivisor(L,F),G[L]=F)}function x(){let L=n.newAttributes,F=n.enabledAttributes;for(let j=0,I=F.length;j<I;j++)F[j]!==L[j]&&(e.disableVertexAttribArray(j),F[j]=0)}function b(L,F,j,I,G,J,H){H===!0?e.vertexAttribIPointer(L,F,j,G,J):e.vertexAttribPointer(L,F,j,I,G,J)}function y(L,F,j,I){_();let G=I.attributes,J=j.getAttributes(),H=F.defaultAttributeValues;for(let de in J){let q=J[de];if(q.location>=0){let X=G[de];if(X===void 0&&(de==="instanceMatrix"&&L.instanceMatrix&&(X=L.instanceMatrix),de==="instanceColor"&&L.instanceColor&&(X=L.instanceColor)),X!==void 0){let ee=X.normalized,Ie=X.itemSize,Y=t.get(X);if(Y===void 0)continue;let Q=Y.buffer,Ee=Y.type,Ue=Y.bytesPerElement,Pe=Ee===e.INT||Ee===e.UNSIGNED_INT||X.gpuType===Wo;if(X.isInterleavedBufferAttribute){let le=X.data,We=le.isInterleavedBuffer===!0?le.stride:le.itemSize,et=X.offset;if(le.isInstancedInterleavedBuffer||le.isInstancedBufferAttribute){for(let Re=0;Re<q.locationSize;Re++)m(q.location+Re,le.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Re=0;Re<q.locationSize;Re++)f(q.location+Re);e.bindBuffer(e.ARRAY_BUFFER,Q);for(let Re=0;Re<q.locationSize;Re++)b(q.location+Re,Ie/q.locationSize,Ee,ee,We*Ue,(et+Ie/q.locationSize*Re)*Ue,Pe)}else{if(X.isInstancedBufferAttribute){for(let le=0;le<q.locationSize;le++)m(q.location+le,X.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let le=0;le<q.locationSize;le++)f(q.location+le);e.bindBuffer(e.ARRAY_BUFFER,Q);for(let le=0;le<q.locationSize;le++)b(q.location+le,Ie/q.locationSize,Ee,ee,Ie*Ue,Ie/q.locationSize*le*Ue,Pe)}}else if(H!==void 0){let ee=H[de];if(ee!==void 0)switch(ee.length){case 2:e.vertexAttrib2fv(q.location,ee);break;case 3:e.vertexAttrib3fv(q.location,ee);break;case 4:e.vertexAttrib4fv(q.location,ee);break;default:e.vertexAttrib1fv(q.location,ee)}}}}x()}function w(){C();for(let L in r){let F=r[L];for(let j in F){let I=F[j];for(let G in I){let J=I[G];for(let H in J)c(J[H].object),delete J[H];delete I[G]}}delete r[L]}}function A(L){if(r[L.id]===void 0)return;let F=r[L.id];for(let j in F){let I=F[j];for(let G in I){let J=I[G];for(let H in J)c(J[H].object),delete J[H];delete I[G]}}delete r[L.id]}function v(L){for(let F in r){let j=r[F];for(let I in j){let G=j[I];if(G[L.id]===void 0)continue;let J=G[L.id];for(let H in J)c(J[H].object),delete J[H];delete G[L.id]}}}function M(L){for(let F in r){let j=r[F],I=L.isInstancedMesh===!0?L.id:0,G=j[I];if(G!==void 0){for(let J in G){let H=G[J];for(let de in H)c(H[de].object),delete H[de];delete G[J]}delete j[I],Object.keys(j).length===0&&delete r[F]}}}function C(){D(),s=!0,n!==a&&(n=a,h(n.object))}function D(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:C,resetDefaultState:D,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfObject:M,releaseStatesOfProgram:v,initAttributes:_,enableAttribute:f,disableUnusedAttributes:x}}function m1(e,t,i){let r;function a(l){r=l}function n(l,h){e.drawArrays(r,l,h),i.update(h,r,1)}function s(l,h,c){c!==0&&(e.drawArraysInstanced(r,l,h,c),i.update(h,r,c))}function o(l,h,c){if(c===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,l,0,h,0,c);let d=0;for(let u=0;u<c;u++)d+=h[u];i.update(d,r,1)}this.setMode=a,this.render=n,this.renderInstances=s,this.renderMultiDraw=o}function f1(e,t,i,r){let a;function n(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){let v=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(v){return!(v!==vi&&r.convert(v)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(v){let M=v===xi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(v!==ti&&v!==gi&&!M&&r.convert(v)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function l(v){if(v==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp",c=l(h);c!==h&&(ze("WebGLRenderer:",h,"not supported, using",c,"instead."),h=c);let d=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=i.logarithmicDepthBuffer===!0&&d===!1;i.reversedDepthBuffer===!0&&d===!1&&ze("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),i.logarithmicDepthBuffer===!0&&d===!0&&ze("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),g=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=e.getParameter(e.MAX_TEXTURE_SIZE),f=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),m=e.getParameter(e.MAX_VERTEX_ATTRIBS),x=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),b=e.getParameter(e.MAX_VARYING_VECTORS),y=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),w=e.getParameter(e.MAX_SAMPLES),A=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:n,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:f,maxAttributes:m,maxVertexUniforms:x,maxVaryings:b,maxFragmentUniforms:y,maxSamples:w,samples:A}}function g1(e){let t=this,i=null,r=0,a=!1,n=!1,s=new Xi,o=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let p=d.length!==0||u||r!==0||a;return a=u,r=d.length,p},this.beginShadows=function(){n=!0,c(null)},this.endShadows=function(){n=!1},this.setGlobalState=function(d,u){i=c(d,u,0)},this.setState=function(d,u,p){let g=d.clippingPlanes,_=d.clipIntersection,f=d.clipShadows,m=e.get(d);if(!a||g===null||g.length===0||n&&!f)n?c(null):h();else{let x=n?0:r,b=x*4,y=m.clippingState||null;l.value=y,y=c(g,u,b,p);for(let w=0;w!==b;++w)y[w]=i[w];m.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function h(){l.value!==i&&(l.value=i,l.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function c(d,u,p,g){let _=d!==null?d.length:0,f=null;if(_!==0){if(f=l.value,g!==!0||f===null){let m=p+_*4,x=u.matrixWorldInverse;o.getNormalMatrix(x),(f===null||f.length<m)&&(f=new Float32Array(m));for(let b=0,y=p;b!==_;++b,y+=4)s.copy(d[b]).applyMatrix4(x,o),s.normal.toArray(f,y),f[y+3]=s.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,f}}function Wh(e,t,i){return new sl(e,{minFilter:fi,generateMipmaps:t,type:xi,colorSpace:Un,depthBuffer:i})}function Ca(e,t,i){return new Zt({name:e,uniforms:t,vertexShader:Ze.cube_vert,fragmentShader:i,side:Ot,blending:Dr,depthTest:!1,depthWrite:!1})}function M1(){return Ca("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Iu}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function b1(){return Ca("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Lu}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function E1(){return Ca("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${_1}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Xh(){return Ca("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function jh(){return Ca("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function w1(e){let t=new WeakMap,i=new WeakMap,r=null;function a(u,p=!1){return u==null?null:p?s(u):n(u)}function n(u){if(u&&u.isTexture){let p=u.mapping;if(p===vs||p===_s)if(t.has(u)){let g=t.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let _=new sl(g.height);return _.fromEquirectangularTexture(e,u),t.set(u,_),u.addEventListener("dispose",h),o(_.texture,u.mapping)}else return null}}return u}function s(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let p=u.mapping,g=p===vs||p===_s,_=p===kr||p===ga;if(g||_){let f=i.get(u),m=f!==void 0?f.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return r===null&&(r=new Vh(e)),f=g?r.fromEquirectangular(u,f):r.fromCubemap(u,f),f.texture.pmremVersion=u.pmremVersion,i.set(u,f),f.texture;if(f!==void 0)return f.texture;{let x=u.image;return g&&x&&x.height>0||_&&x&&l(x)?(r===null&&(r=new Vh(e)),f=g?r.fromEquirectangular(u):r.fromCubemap(u),f.texture.pmremVersion=u.pmremVersion,i.set(u,f),u.addEventListener("dispose",c),f.texture):null}}}return u}function o(u,p){return p===vs?u.mapping=kr:p===_s&&(u.mapping=ga),u}function l(u){let p=0,g=6;for(let _=0;_<g;_++)u[_]!==void 0&&p++;return p===g}function h(u){let p=u.target;p.removeEventListener("dispose",h);let g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function c(u){let p=u.target;p.removeEventListener("dispose",c);let g=i.get(p);g!==void 0&&(i.delete(p),g.dispose())}function d(){t=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:a,dispose:d}}function T1(e){let t={};function i(r){if(t[r]!==void 0)return t[r];let a=e.getExtension(r);return t[r]=a,a}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){let a=i(r);return a===null&&Tn("WebGLRenderer: "+r+" extension not supported."),a}}}function A1(e,t,i,r){let a={},n=new WeakMap,s=new FinalizationRegistry(g=>delete a[g]);function o(g){l(g.target)}function l(g){g.index!==null&&t.remove(g.index);for(let f in g.attributes)t.remove(g.attributes[f]);g.removeEventListener("dispose",o),delete a[g.id],s.unregister(g);let _=n.get(g);_&&(t.remove(_),n.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function h(g,_){return a[_.id]!==void 0||(_.addEventListener("dispose",o),a[_.id]=new WeakRef(_),s.register(_,_.id,_),i.memory.geometries++),_}function c(g){let _=g.attributes;for(let f in _)t.update(_[f],e.ARRAY_BUFFER)}function d(g){let _=g.index,f=g.attributes.position,m=0;if(f===void 0)return;let x=_!==null?_.array.length:f.array.length/3-1,b=f.count>=65535?Fc:Oc,y=new b(Math.ceil(x/3)*6,1),w=y.array;if(_!==null){let v=_.array;m=_.version;for(let M=0,C=0;M<x;M+=3){let D=v[M+0],L=v[M+1],F=v[M+2];w[C++]=D,w[C++]=L,w[C++]=L,w[C++]=F,w[C++]=F,w[C++]=D}}else{m=f.version;for(let v=0,M=0;v<x;v+=3){let C=v+0,D=v+1,L=v+2;w[M++]=C,w[M++]=D,w[M++]=D,w[M++]=L,w[M++]=L,w[M++]=C}}y.version=m;let A=n.get(g);A&&t.remove(A),n.set(g,y)}function u(g){let _=n.get(g);if(_){let f=g.index;f!==null&&_.version<f.version&&d(g)}else d(g);return n.get(g)}function p(){for(let g in a){let _=a[g].deref();_!==void 0&&l(_)}}return{get:h,update:c,getWireframeAttribute:u,dispose:p}}function R1(e,t,i){let r;function a(d){r=d}let n,s;function o(d){n=d.type,s=d.bytesPerElement}function l(d,u){e.drawElements(r,u,n,d*s),i.update(u,r,1)}function h(d,u,p){p!==0&&(e.drawElementsInstanced(r,u,n,d*s,p),i.update(u,r,p))}function c(d,u,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,u,0,n,d,0,p);let g=0;for(let _=0;_<p;_++)g+=u[_];i.update(g,r,1)}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=h,this.renderMultiDraw=c}function C1(e){let t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(n,s,o){switch(i.calls++,s){case e.TRIANGLES:i.triangles+=o*(n/3);break;case e.LINES:i.lines+=o*(n/2);break;case e.LINE_STRIP:i.lines+=o*(n-1);break;case e.LINE_LOOP:i.lines+=o*n;break;case e.POINTS:i.points+=o*n;break;default:He("WebGLInfo: Unknown draw mode:",s);break}}function a(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:a,update:r}}function I1(e,t,i){let r=new WeakMap,a=new gt;function n(s,o,l){let h=s.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=c!==void 0?c.length:0,u=r.get(o);if(u===void 0||u.count!==d){let p=function(){M.dispose(),r.delete(o),o.removeEventListener("dispose",p)};u!==void 0&&u.texture.dispose();let g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,f=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],y=0;g===!0&&(y=1),_===!0&&(y=2),f===!0&&(y=3);let w=o.attributes.position.count*y,A=1;w>t.maxTextureSize&&(A=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);let v=new Float32Array(w*A*4*d),M=new Lc(v,w,A,d);M.type=gi,M.needsUpdate=!0;let C=y*4;for(let D=0;D<d;D++){let L=m[D],F=x[D],j=b[D],I=w*A*4*D;for(let G=0;G<L.count;G++){let J=G*C;g===!0&&(a.fromBufferAttribute(L,G),v[I+J+0]=a.x,v[I+J+1]=a.y,v[I+J+2]=a.z,v[I+J+3]=0),_===!0&&(a.fromBufferAttribute(F,G),v[I+J+4]=a.x,v[I+J+5]=a.y,v[I+J+6]=a.z,v[I+J+7]=0),f===!0&&(a.fromBufferAttribute(j,G),v[I+J+8]=a.x,v[I+J+9]=a.y,v[I+J+10]=a.z,v[I+J+11]=j.itemSize===4?a.w:1)}}u={count:d,texture:M,size:new ne(w,A)},r.set(o,u),o.addEventListener("dispose",p)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",s.morphTexture,i);else{let p=0;for(let _=0;_<h.length;_++)p+=h[_];let g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(e,"morphTargetBaseInfluence",g),l.getUniforms().setValue(e,"morphTargetInfluences",h)}l.getUniforms().setValue(e,"morphTargetsTexture",u.texture,i),l.getUniforms().setValue(e,"morphTargetsTextureSize",u.size)}return{update:n}}function L1(e,t,i,r,a){let n=new WeakMap;function s(h){let c=a.render.frame,d=h.geometry,u=t.get(h,d);if(n.get(u)!==c&&(t.update(u),n.set(u,c)),h.isInstancedMesh&&(h.hasEventListener("dispose",l)===!1&&h.addEventListener("dispose",l),n.get(h)!==c&&(i.update(h.instanceMatrix,e.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,e.ARRAY_BUFFER),n.set(h,c))),h.isSkinnedMesh){let p=h.skeleton;n.get(p)!==c&&(p.update(),n.set(p,c))}return u}function o(){n=new WeakMap}function l(h){let c=h.target;c.removeEventListener("dispose",l),r.releaseStatesOfObject(c),i.remove(c.instanceMatrix),c.instanceColor!==null&&i.remove(c.instanceColor)}return{update:s,dispose:o}}function D1(e,t,i,r,a,n){let s=new _i(t,i,{type:e,depthBuffer:a,stencilBuffer:n,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,h=null,c=new Mt;c.setAttribute("position",new ke([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ke([0,2,0,0,2,0],2));let d=new rf({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new qt(c,d),p=new yf(-1,1,1,-1,0,1),g=null,_=null,f=!1,m,x=null,b=[],y=!1;this.setSize=function(w,A){s.setSize(w,A),o!==null&&o.setSize(w,A),l!==null&&l.setSize(w,A);for(let v=0;v<b.length;v++){let M=b[v];M.setSize&&M.setSize(w,A)}},this.setEffects=function(w){b=w,y=b.length>0&&b[0].isRenderPass===!0;let A=s.width,v=s.height;b.length>0&&o===null&&(o=new _i(A,v,{type:xi,depthBuffer:!1,stencilBuffer:!1}),l=new _i(A,v,{type:xi,depthBuffer:!1,stencilBuffer:!1}));let M=a===!0&&b.some(C=>C.needsDepthTexture===!0);M!==(s.depthTexture!==null)&&(M===!0&&h===null&&(h=new Vr(A,v),n===!0&&(h.format=ji,h.type=Gr)),s.dispose(),s.depthTexture=M?h:null,s.resolveDepthBuffer=M,s.storeMultisampledDepthBuffer=M);for(let C=0;C<b.length;C++){let D=b[C];D.setSize&&D.setSize(A,v),M&&D.needsDepthTexture===!0&&D.setDepthTexture&&D.setDepthTexture(h)}},this.begin=function(w,A){if(f||w.toneMapping===Li&&b.length===0)return!1;if(x=A,A!==null){let v=A.width,M=A.height;(s.width!==v||s.height!==M)&&this.setSize(v,M)}return y===!1&&w.setRenderTarget(s),m=w.toneMapping,w.toneMapping=Li,!0},this.hasRenderPass=function(){return y},this.end=function(w,A){w.toneMapping=m,f=!0;let v=s,M=o;for(let C=0;C<b.length;C++){let D=b[C];D.enabled!==!1&&(D.render(w,M,v,A),D.needsSwap!==!1&&(v=M,M=M===o?l:o))}if(g!==w.outputColorSpace||_!==w.toneMapping){g=w.outputColorSpace,_=w.toneMapping,d.defines={},nt.getTransfer(g)===pt&&(d.defines.SRGB_TRANSFER="");let C=P1[_];C&&(d.defines[C]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=v.texture,w.setRenderTarget(x),w.render(u,p),x=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){s.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),d.dispose()}}function Yr(e,t,i){let r=e[0];if(r<=0||r>0)return e;let a=t*i,n=qh[a];if(n===void 0&&(n=new Float32Array(a),qh[a]=n),t!==0){r.toArray(n,0);for(let s=1,o=0;s!==t;++s)o+=i,e[s].toArray(n,o)}return n}function It(e,t){if(e.length!==t.length)return!1;for(let i=0,r=e.length;i<r;i++)if(e[i]!==t[i])return!1;return!0}function Lt(e,t){for(let i=0,r=t.length;i<r;i++)e[i]=t[i]}function Vn(e,t){let i=Yh[t];i===void 0&&(i=new Int32Array(t),Yh[t]=i);for(let r=0;r!==t;++r)i[r]=e.allocateTextureUnit();return i}function U1(e,t){let i=this.cache;i[0]!==t&&(e.uniform1f(this.addr,t),i[0]=t)}function N1(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(It(i,t))return;e.uniform2fv(this.addr,t),Lt(i,t)}}function O1(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(It(i,t))return;e.uniform3fv(this.addr,t),Lt(i,t)}}function F1(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(It(i,t))return;e.uniform4fv(this.addr,t),Lt(i,t)}}function B1(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(It(i,t))return;e.uniformMatrix2fv(this.addr,!1,t),Lt(i,t)}else{if(It(i,r))return;Zh.set(r),e.uniformMatrix2fv(this.addr,!1,Zh),Lt(i,r)}}function z1(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(It(i,t))return;e.uniformMatrix3fv(this.addr,!1,t),Lt(i,t)}else{if(It(i,r))return;Jh.set(r),e.uniformMatrix3fv(this.addr,!1,Jh),Lt(i,r)}}function k1(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(It(i,t))return;e.uniformMatrix4fv(this.addr,!1,t),Lt(i,t)}else{if(It(i,r))return;$h.set(r),e.uniformMatrix4fv(this.addr,!1,$h),Lt(i,r)}}function G1(e,t){let i=this.cache;i[0]!==t&&(e.uniform1i(this.addr,t),i[0]=t)}function H1(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(It(i,t))return;e.uniform2iv(this.addr,t),Lt(i,t)}}function V1(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(It(i,t))return;e.uniform3iv(this.addr,t),Lt(i,t)}}function W1(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(It(i,t))return;e.uniform4iv(this.addr,t),Lt(i,t)}}function X1(e,t){let i=this.cache;i[0]!==t&&(e.uniform1ui(this.addr,t),i[0]=t)}function j1(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(It(i,t))return;e.uniform2uiv(this.addr,t),Lt(i,t)}}function q1(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(It(i,t))return;e.uniform3uiv(this.addr,t),Lt(i,t)}}function Y1(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(It(i,t))return;e.uniform4uiv(this.addr,t),Lt(i,t)}}function Wn(e){return e.version===0&&(e.compareFunction=Cc,e.needsUpdate=!0),e}function $1(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a);let n;this.type===e.SAMPLER_2D_SHADOW?n=Wn(Uu):n=Du,i.setTexture2D(t||n,a)}function J1(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture3D(t||Fu,a)}function Z1(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a);let n;this.type===e.SAMPLER_CUBE_SHADOW?n=Wn(Nu):n=Bu,i.setTextureCube(t||n,a)}function K1(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture2DArray(t||Ou,a)}function Q1(e){switch(e){case 5126:return U1;case 35664:return N1;case 35665:return O1;case 35666:return F1;case 35674:return B1;case 35675:return z1;case 35676:return k1;case 5124:case 35670:return G1;case 35667:case 35671:return H1;case 35668:case 35672:return V1;case 35669:case 35673:return W1;case 5125:return X1;case 36294:return j1;case 36295:return q1;case 36296:return Y1;case 35678:case 36198:case 36298:case 36306:case 35682:return $1;case 35679:case 36299:case 36307:return J1;case 35680:case 36300:case 36308:case 36293:return Z1;case 36289:case 36303:case 36311:case 36292:return K1}}function ev(e,t){e.uniform1fv(this.addr,t)}function tv(e,t){let i=Yr(t,this.size,2);e.uniform2fv(this.addr,i)}function iv(e,t){let i=Yr(t,this.size,3);e.uniform3fv(this.addr,i)}function rv(e,t){let i=Yr(t,this.size,4);e.uniform4fv(this.addr,i)}function av(e,t){let i=Yr(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,i)}function nv(e,t){let i=Yr(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,i)}function sv(e,t){let i=Yr(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,i)}function ov(e,t){e.uniform1iv(this.addr,t)}function lv(e,t){e.uniform2iv(this.addr,t)}function hv(e,t){e.uniform3iv(this.addr,t)}function cv(e,t){e.uniform4iv(this.addr,t)}function uv(e,t){e.uniform1uiv(this.addr,t)}function dv(e,t){e.uniform2uiv(this.addr,t)}function pv(e,t){e.uniform3uiv(this.addr,t)}function mv(e,t){e.uniform4uiv(this.addr,t)}function fv(e,t,i){let r=this.cache,a=t.length,n=Vn(i,a);It(r,n)||(e.uniform1iv(this.addr,n),Lt(r,n));let s;this.type===e.SAMPLER_2D_SHADOW?s=Wn(Uu):s=Du;for(let o=0;o!==a;++o)i.setTexture2D(t[o]||s,n[o])}function gv(e,t,i){let r=this.cache,a=t.length,n=Vn(i,a);It(r,n)||(e.uniform1iv(this.addr,n),Lt(r,n));for(let s=0;s!==a;++s)i.setTexture3D(t[s]||Fu,n[s])}function vv(e,t,i){let r=this.cache,a=t.length,n=Vn(i,a);It(r,n)||(e.uniform1iv(this.addr,n),Lt(r,n));let s;this.type===e.SAMPLER_CUBE_SHADOW?s=Wn(Nu):s=Bu;for(let o=0;o!==a;++o)i.setTextureCube(t[o]||s,n[o])}function _v(e,t,i){let r=this.cache,a=t.length,n=Vn(i,a);It(r,n)||(e.uniform1iv(this.addr,n),Lt(r,n));for(let s=0;s!==a;++s)i.setTexture2DArray(t[s]||Ou,n[s])}function yv(e){switch(e){case 5126:return ev;case 35664:return tv;case 35665:return iv;case 35666:return rv;case 35674:return av;case 35675:return nv;case 35676:return sv;case 5124:case 35670:return ov;case 35667:case 35671:return lv;case 35668:case 35672:return hv;case 35669:case 35673:return cv;case 5125:return uv;case 36294:return dv;case 36295:return pv;case 36296:return mv;case 35678:case 36198:case 36298:case 36306:case 35682:return fv;case 35679:case 36299:case 36307:return gv;case 35680:case 36300:case 36308:case 36293:return vv;case 36289:case 36303:case 36311:case 36292:return _v}}function Kh(e,t){e.seq.push(t),e.map[t.id]=t}function bv(e,t,i){let r=e.name,a=r.length;for($s.lastIndex=0;;){let n=$s.exec(r),s=$s.lastIndex,o=n[1],l=n[2]==="]",h=n[3];if(l&&(o=o|0),h===void 0||h==="["&&s+2===a){Kh(i,h===void 0?new xv(o,e,t):new Sv(o,e,t));break}else{let c=i.map[o];c===void 0&&(c=new Mv(o),Kh(i,c)),i=c}}}function Qh(e,t,i){let r=e.createShader(t);return e.shaderSource(r,i),e.compileShader(r),r}function Tv(e,t){let i=e.split(`
`),r=[],a=Math.max(t-6,0),n=Math.min(t+6,i.length);for(let s=a;s<n;s++){let o=s+1;r.push(`${o===t?">":" "} ${o}: ${i[s]}`)}return r.join(`
`)}function Av(e){nt._getMatrix(ec,nt.workingColorSpace,e);let t=`mat3( ${ec.elements.map(i=>i.toFixed(4))} )`;switch(nt.getTransfer(e)){case Nn:return[t,"LinearTransferOETF"];case pt:return[t,"sRGBTransferOETF"];default:return ze("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function tc(e,t,i){let r=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(r&&a==="")return"";let n=/ERROR: 0:(\d+)/.exec(a);if(n){let s=parseInt(n[1]);return i.toUpperCase()+`

`+a+`

`+Tv(e.getShaderSource(t),s)}else return a}function Rv(e,t){let i=Av(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${i[1]}( vec4( ${i[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}function Iv(e,t){let i=Cv[t];return i===void 0?(ze("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}function Lv(){nt.getLuminanceCoefficients(xn);let e=xn.x.toFixed(4),t=xn.y.toFixed(4),i=xn.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Pv(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ca).join(`
`)}function Dv(e){let t=[];for(let i in e){let r=e[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function Uv(e,t){let i={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){let n=e.getActiveAttrib(t,a),s=n.name,o=1;n.type===e.FLOAT_MAT2&&(o=2),n.type===e.FLOAT_MAT3&&(o=3),n.type===e.FLOAT_MAT4&&(o=4),i[s]={type:n.type,location:e.getAttribLocation(t,s),locationSize:o}}return i}function ca(e){return e!==""}function ic(e,t){let i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function rc(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}function Vo(e){return e.replace(Nv,Ov)}function Ov(e,t){let i=Ze[t];if(i===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Vo(i)}function ac(e){return e.replace(Fv,Bv)}function Bv(e,t,i,r){let a="";for(let n=parseInt(t);n<parseInt(i);n++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return a}function nc(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function kv(e){return zv[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function Hv(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":Gv[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}function Wv(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":Vv[e.combine]||"ENVMAP_BLENDING_NONE"}function Xv(e,t,i,r){let a=e.getContext(),n=i.defines,s=i.vertexShader,o=i.fragmentShader,l=kv(i),h=i.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",c=Hv(i),d=Wv(i),u=Pv(i),p=Dv(n),g=a.createProgram(),_,f,m=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,p].filter(ca).join(`
`),_.length>0&&(_+=`
`),f=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,p].filter(ca).join(`
`),f.length>0&&(f+=`
`)):(_=[nc(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,p,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+c:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+i.diffuseRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ca).join(`
`),f=[nc(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,p,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+c:"",i.envMap?"#define "+d:"",i.envMapPMREM?"#define ENVMAP_MAX_LOD "+i.envMapMaxLod+".0":"",i.envMapPMREM?"#define ENVMAP_SIZE "+i.envMapSize+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",i.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Li?"#define TONE_MAPPING":"",i.toneMapping!==Li?Ze.tonemapping_pars_fragment:"",i.toneMapping!==Li?Iv("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,Rv("linearToOutputTexel",i.outputColorSpace),Lv(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(ca).join(`
`)),s=Vo(s),s=ic(s,i),s=rc(s,i),o=Vo(o),o=ic(o,i),o=rc(o,i),s=ac(s),o=ac(o),i.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,_=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,f=["#define varying in",i.glslVersion===rh?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===rh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let x=m+_+s,b=m+f+o,y=Qh(a,a.VERTEX_SHADER,x),w=Qh(a,a.FRAGMENT_SHADER,b);a.attachShader(g,y),a.attachShader(g,w),i.index0AttributeName!==void 0?a.bindAttribLocation(g,0,i.index0AttributeName):i.hasPositionAttribute===!0&&a.bindAttribLocation(g,0,"position"),a.linkProgram(g);function A(D){if(e.debug.checkShaderErrors){let L=a.getProgramInfoLog(g)||"",F=a.getShaderInfoLog(y)||"",j=a.getShaderInfoLog(w)||"",I=L.trim(),G=F.trim(),J=j.trim(),H=!0,de=!0;if(a.getProgramParameter(g,a.LINK_STATUS)===!1)if(H=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,g,y,w);else{let q=tc(a,y,"vertex"),X=tc(a,w,"fragment");He("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(g,a.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+I+`
`+q+`
`+X)}else I!==""?ze("WebGLProgram: Program Info Log:",I):(G===""||J==="")&&(de=!1);de&&(D.diagnostics={runnable:H,programLog:I,vertexShader:{log:G,prefix:_},fragmentShader:{log:J,prefix:f}})}a.deleteShader(y),a.deleteShader(w),v=new In(a,g),M=Uv(a,g)}let v;this.getUniforms=function(){return v===void 0&&A(this),v};let M;this.getAttributes=function(){return M===void 0&&A(this),M};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=a.getProgramParameter(g,Ev)),C},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(g),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=wv++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=y,this.fragmentShader=w,this}function $v(e){return e===cr||e===Ln||e===Pn}function Jv(e,t,i,r,a,n){let s=new Dc,o=new qv,l=new Set,h=[],c=new Map,d=r.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return l.add(v),v===0?"uv":`uv${v}`}function g(v,M,C,D,L,F){let j=D.fog,I=L.geometry,G=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?D.environment:null,J=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,H=t.get(v.envMap||G,J),de=u[v.type],q=r.precision;v.precision!==null&&(q=r.getMaxPrecision(v.precision),q!==v.precision&&ze("WebGLProgram.getParameters:",v.precision,"not supported, using",q,"instead."));let X=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,ee=X!==void 0?X.length:0,Ie=0;I.morphAttributes.position!==void 0&&(Ie=1),I.morphAttributes.normal!==void 0&&(Ie=2),I.morphAttributes.color!==void 0&&(Ie=3);let Y,Q,Ee,Ue;if(de){let Te=mi[de];Y=Te.vertexShader,Q=Te.fragmentShader}else{Y=v.vertexShader,Q=v.fragmentShader;let Te=o.getVertexShaderStage(v),xt=o.getFragmentShaderStage(v);o.update(v,Te,xt),Ee=Te.id,Ue=xt.id}let Pe=e.getRenderTarget(),le=e.state.buffers.depth.getReversed(),We=L.isInstancedMesh===!0,et=L.isBatchedMesh===!0,Re=!!v.map,$e=!!v.matcap,ae=!!H,he=ae&&H.isPMREMTexture===!0,se=!!v.aoMap,be=!!v.lightMap,Z=!!v.bumpMap&&v.wireframe===!1,pe=!!v.normalMap,fe=!!v.displacementMap,Ve=!!v.emissiveMap,Le=!!v.metalnessMap,Ke=!!v.roughnessMap,U=v.anisotropy>0,mt=v.clearcoat>0,Be=v.diffuseRoughness>0,ct=v.dispersion>0,ce=v.retroreflectivity>0,Je=v.iridescence>0,Ae=v.sheen>0,Ne=v.transmission>0,_t=U&&!!v.anisotropyMap,T=mt&&!!v.clearcoatMap,S=mt&&!!v.clearcoatNormalMap,B=mt&&!!v.clearcoatRoughnessMap,ie=Be&&!!v.diffuseRoughnessMap,$=Je&&!!v.iridescenceMap,me=Je&&!!v.iridescenceThicknessMap,ge=Ae&&!!v.sheenColorMap,O=Ae&&!!v.sheenRoughnessMap,K=!!v.specularMap,Me=!!v.specularColorMap,P=!!v.specularIntensityMap,W=Ne&&!!v.transmissionMap,te=Ne&&!!v.thicknessMap,oe=!!v.gradientMap,ye=!!v.alphaMap,ve=v.alphaTest>0,Oe=!!v.alphaHash,re=!!v.extensions,Xe=Li;v.toneMapped&&(Pe===null||Pe.isXRRenderTarget===!0)&&(Xe=e.toneMapping);let Ge=he?H.isCompressedCubeTexture?H.image[0].mipmaps:H.mipmaps:null,at={shaderID:de,shaderType:v.type,shaderName:v.name,vertexShader:Y,fragmentShader:Q,defines:v.defines,customVertexShaderID:Ee,customFragmentShaderID:Ue,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:q,batching:et,batchingColor:et&&L._colorsTexture!==null,instancing:We,instancingColor:We&&L.instanceColor!==null,instancingMorph:We&&L.morphTexture!==null,outputColorSpace:Pe===null?e.outputColorSpace:Pe.isXRRenderTarget===!0?Pe.texture.colorSpace:nt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Re,matcap:$e,envMap:ae,envMapMode:ae&&H.mapping,envMapPMREM:he,envMapMaxLod:he?Ge.length-1:null,envMapSize:he?Ge[0].width:null,aoMap:se,lightMap:be,bumpMap:Z,normalMap:pe,displacementMap:fe,emissiveMap:Ve,normalMapObjectSpace:pe&&v.normalMapType===pp,normalMapTangentSpace:pe&&v.normalMapType===ih,packedNormalMap:pe&&v.normalMapType===ih&&$v(v.normalMap.format),metalnessMap:Le,roughnessMap:Ke,anisotropy:U,anisotropyMap:_t,clearcoat:mt,clearcoatMap:T,clearcoatNormalMap:S,clearcoatRoughnessMap:B,diffuseRoughness:Be,diffuseRoughnessMap:ie,dispersion:ct,retroreflection:ce,iridescence:Je,iridescenceMap:$,iridescenceThicknessMap:me,sheen:Ae,sheenColorMap:ge,sheenRoughnessMap:O,specularMap:K,specularColorMap:Me,specularIntensityMap:P,transmission:Ne,transmissionMap:W,thicknessMap:te,gradientMap:oe,opaque:v.transparent===!1&&v.blending===ua&&v.alphaToCoverage===!1,alphaMap:ye,alphaTest:ve,alphaHash:Oe,combine:v.combine,mapUv:Re&&p(v.map.channel),aoMapUv:se&&p(v.aoMap.channel),lightMapUv:be&&p(v.lightMap.channel),bumpMapUv:Z&&p(v.bumpMap.channel),normalMapUv:pe&&p(v.normalMap.channel),displacementMapUv:fe&&p(v.displacementMap.channel),emissiveMapUv:Ve&&p(v.emissiveMap.channel),metalnessMapUv:Le&&p(v.metalnessMap.channel),roughnessMapUv:Ke&&p(v.roughnessMap.channel),anisotropyMapUv:_t&&p(v.anisotropyMap.channel),clearcoatMapUv:T&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:S&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&p(v.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ie&&p(v.diffuseRoughnessMap.channel),iridescenceMapUv:$&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:me&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:O&&p(v.sheenRoughnessMap.channel),specularMapUv:K&&p(v.specularMap.channel),specularColorMapUv:Me&&p(v.specularColorMap.channel),specularIntensityMapUv:P&&p(v.specularIntensityMap.channel),transmissionMapUv:W&&p(v.transmissionMap.channel),thicknessMapUv:te&&p(v.thicknessMap.channel),alphaMapUv:ye&&p(v.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(pe||U),vertexNormals:!!I.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!I.attributes.uv&&(Re||ye),fog:!!j,useFog:v.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||I.attributes.normal===void 0&&pe===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:le,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:Ie,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:F.filter(Te=>Te.texture!==null).length,numClippingPlanes:n.numPlanes,numClipIntersection:n.numIntersection,dithering:v.dithering,shadowMapEnabled:e.shadowMap.enabled&&C.length>0,shadowMapType:e.shadowMap.type,toneMapping:Xe,decodeVideoTexture:Re&&v.map.isVideoTexture===!0&&nt.getTransfer(v.map.colorSpace)===pt,decodeVideoTextureEmissive:Ve&&v.emissiveMap.isVideoTexture===!0&&nt.getTransfer(v.emissiveMap.colorSpace)===pt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ii,flipSided:v.side===Ot,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:re&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&v.extensions.multiDraw===!0||et)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return at.vertexUv1s=l.has(1),at.vertexUv2s=l.has(2),at.vertexUv3s=l.has(3),l.clear(),at}function _(v){let M=[];if(v.shaderID?M.push(v.shaderID):(M.push(v.customVertexShaderID),M.push(v.customFragmentShaderID)),v.defines!==void 0)for(let C in v.defines)M.push(C),M.push(v.defines[C]);return v.isRawShaderMaterial===!1&&(f(M,v),m(M,v),M.push(e.outputColorSpace)),M.push(v.customProgramCacheKey),M.join()}function f(v,M){v.push(M.precision),v.push(M.outputColorSpace),v.push(M.envMapMode),v.push(M.envMapPMREM),v.push(M.envMapMaxLod),v.push(M.envMapSize),v.push(M.mapUv),v.push(M.alphaMapUv),v.push(M.lightMapUv),v.push(M.aoMapUv),v.push(M.bumpMapUv),v.push(M.normalMapUv),v.push(M.displacementMapUv),v.push(M.emissiveMapUv),v.push(M.metalnessMapUv),v.push(M.roughnessMapUv),v.push(M.anisotropyMapUv),v.push(M.clearcoatMapUv),v.push(M.clearcoatNormalMapUv),v.push(M.clearcoatRoughnessMapUv),v.push(M.diffuseRoughnessMapUv),v.push(M.iridescenceMapUv),v.push(M.iridescenceThicknessMapUv),v.push(M.sheenColorMapUv),v.push(M.sheenRoughnessMapUv),v.push(M.specularMapUv),v.push(M.specularColorMapUv),v.push(M.specularIntensityMapUv),v.push(M.transmissionMapUv),v.push(M.thicknessMapUv),v.push(M.combine),v.push(M.fogExp2),v.push(M.sizeAttenuation),v.push(M.morphTargetsCount),v.push(M.numSunLights),v.push(M.numDirLights),v.push(M.numPointLights),v.push(M.numSpotLights),v.push(M.numSpotLightMaps),v.push(M.numHemiLights),v.push(M.numRectAreaLights),v.push(M.numSunLightShadows),v.push(M.numDirLightShadows),v.push(M.numPointLightShadows),v.push(M.numSpotLightShadows),v.push(M.numSpotLightShadowsWithMaps),v.push(M.numLightProbes),v.push(M.numLightProbeGrids),v.push(M.shadowMapType),v.push(M.toneMapping),v.push(M.numClippingPlanes),v.push(M.numClipIntersection),v.push(M.depthPacking)}function m(v,M){s.disableAll(),M.instancing&&s.enable(0),M.instancingColor&&s.enable(1),M.instancingMorph&&s.enable(2),M.matcap&&s.enable(3),M.envMap&&s.enable(4),M.normalMapObjectSpace&&s.enable(5),M.normalMapTangentSpace&&s.enable(6),M.clearcoat&&s.enable(7),M.iridescence&&s.enable(8),M.alphaTest&&s.enable(9),M.vertexColors&&s.enable(10),M.vertexAlphas&&s.enable(11),M.vertexUv1s&&s.enable(12),M.vertexUv2s&&s.enable(13),M.vertexUv3s&&s.enable(14),M.vertexTangents&&s.enable(15),M.anisotropy&&s.enable(16),M.alphaHash&&s.enable(17),M.batching&&s.enable(18),M.dispersion&&s.enable(19),M.retroreflection&&s.enable(24),M.diffuseRoughness&&s.enable(25),M.batchingColor&&s.enable(20),M.gradientMap&&s.enable(21),M.packedNormalMap&&s.enable(22),M.vertexNormals&&s.enable(23),v.push(s.mask),s.disableAll(),M.fog&&s.enable(0),M.useFog&&s.enable(1),M.flatShading&&s.enable(2),M.logarithmicDepthBuffer&&s.enable(3),M.reversedDepthBuffer&&s.enable(4),M.skinning&&s.enable(5),M.morphTargets&&s.enable(6),M.morphNormals&&s.enable(7),M.morphColors&&s.enable(8),M.premultipliedAlpha&&s.enable(9),M.shadowMapEnabled&&s.enable(10),M.doubleSided&&s.enable(11),M.flipSided&&s.enable(12),M.useDepthPacking&&s.enable(13),M.dithering&&s.enable(14),M.transmission&&s.enable(15),M.sheen&&s.enable(16),M.opaque&&s.enable(17),M.pointsUvs&&s.enable(18),M.decodeVideoTexture&&s.enable(19),M.decodeVideoTextureEmissive&&s.enable(20),M.alphaToCoverage&&s.enable(21),M.numLightProbeGrids>0&&s.enable(22),M.hasPositionAttribute&&s.enable(23),v.push(s.mask)}function x(v){let M=u[v.type],C;if(M){let D=mi[M];C=Qm.clone(D.uniforms)}else C=v.uniforms;return C}function b(v,M){let C=c.get(M);return C!==void 0?++C.usedTimes:(C=new Xv(e,M,v,a),h.push(C),c.set(M,C)),C}function y(v){if(--v.usedTimes===0){let M=h.indexOf(v);h[M]=h[h.length-1],h.pop(),c.delete(v.cacheKey),v.destroy()}}function w(v){o.remove(v)}function A(){o.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:x,acquireProgram:b,releaseProgram:y,releaseShaderCache:w,programs:h,dispose:A}}function Zv(){let e=new WeakMap;function t(s){return e.has(s)}function i(s){let o=e.get(s);return o===void 0&&(o={},e.set(s,o)),o}function r(s){e.delete(s)}function a(s,o,l){e.get(s)[o]=l}function n(){e=new WeakMap}return{has:t,get:i,remove:r,update:a,dispose:n}}function Kv(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function sc(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function oc(){let e=[],t=0,i=[],r=[],a=[];function n(){t=0,i.length=0,r.length=0,a.length=0}function s(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function o(u,p,g,_,f,m){let x=e[t];return x===void 0?(x={id:u.id,object:u,geometry:p,material:g,materialVariant:s(u),groupOrder:_,renderOrder:u.renderOrder,z:f,group:m},e[t]=x):(x.id=u.id,x.object=u,x.geometry=p,x.material=g,x.materialVariant=s(u),x.groupOrder=_,x.renderOrder=u.renderOrder,x.z=f,x.group=m),t++,x}function l(u,p,g,_,f,m,x){x.reversedDepth===!0&&(f=-f);let b=o(u,p,g,_,f,m);g.transmission>0?r.push(b):g.transparent===!0?a.push(b):i.push(b)}function h(u,p,g,_,f,m){let x=o(u,p,g,_,f,m);g.transmission>0?r.unshift(x):g.transparent===!0?a.unshift(x):i.unshift(x)}function c(u,p){i.length>1&&i.sort(u||Kv),r.length>1&&r.sort(p||sc),a.length>1&&a.sort(p||sc)}function d(){for(let u=t,p=e.length;u<p;u++){let g=e[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:i,transmissive:r,transparent:a,init:n,push:l,unshift:h,finish:d,sort:c}}function Qv(){let e=new WeakMap;function t(r,a){let n=e.get(r),s;return n===void 0?(s=new oc,e.set(r,[s])):a>=n.length?(s=new oc,n.push(s)):s=n[a],s}function i(){e=new WeakMap}return{get:t,dispose:i}}function e_(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={direction:new R,color:new Ye};break;case"SpotLight":i={position:new R,direction:new R,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new R,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":i={direction:new R,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":i={color:new Ye,position:new R,halfWidth:new R,halfHeight:new R};break}return e[t.id]=i,i}}}function t_(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=i,i}}}function r_(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function a_(e){let t=new e_,i=t_(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new R);let a=new R,n=new rt,s=new rt;function o(h){let c=0,d=0,u=0;for(let F=0;F<9;F++)r.probe[F].set(0,0,0);let p=0,g=0,_=0,f=0,m=0,x=0,b=0,y=0,w=0,A=0,v=0,M=0,C=0,D=0;h.sort(r_);for(let F=0,j=h.length;F<j;F++){let I=h[F],G=I.color,J=I.intensity,H=I.distance,de=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===cr?de=I.shadow.map.texture:de=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)c+=G.r*J,d+=G.g*J,u+=G.b*J;else if(I.isLightProbe){for(let q=0;q<9;q++)r.probe[q].addScaledVector(I.sh.coefficients[q],J);D++}else if(I.isSunLight){let q=t.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let X=I.shadow,ee=i.get(I);ee.shadowIntensity=X.intensity,ee.shadowBias=X.bias,ee.shadowNormalBias=X.normalBias,ee.shadowRadius=X.radius,ee.shadowMapSize.copy(X.mapSize).multiply(X.getFrameExtents()),r.sunShadow[g]=ee,r.sunShadowMap[g]=de;let Ie=X.getViewportCount();for(let Y=0;Y<Ie;Y++)r.sunShadowMatrix[_+Y]=X.getMatrix(Y),r.sunShadowCascade[_+Y]=X._cascadeData[Y];_+=Ie,g++}r.sun[p]=q,p++}else if(I.isDirectionalLight){let q=t.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let X=I.shadow,ee=i.get(I);ee.shadowIntensity=X.intensity,ee.shadowBias=X.bias,ee.shadowNormalBias=X.normalBias,ee.shadowRadius=X.radius,ee.shadowMapSize=X.mapSize,r.directionalShadow[f]=ee,r.directionalShadowMap[f]=de,r.directionalShadowMatrix[f]=I.shadow.matrix,w++}r.directional[f]=q,f++}else if(I.isSpotLight){let q=t.get(I);q.position.setFromMatrixPosition(I.matrixWorld),q.color.copy(G).multiplyScalar(J),q.distance=H,q.coneCos=Math.cos(I.angle),q.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),q.decay=I.decay,r.spot[x]=q;let X=I.shadow;if(I.map&&(r.spotLightMap[M]=I.map,M++,X.updateMatrices(I),I.castShadow&&C++),r.spotLightMatrix[x]=X.matrix,I.castShadow){let ee=i.get(I);ee.shadowIntensity=X.intensity,ee.shadowBias=X.bias,ee.shadowNormalBias=X.normalBias,ee.shadowRadius=X.radius,ee.shadowMapSize=X.mapSize,r.spotShadow[x]=ee,r.spotShadowMap[x]=de,v++}x++}else if(I.isRectAreaLight){let q=t.get(I);q.color.copy(G).multiplyScalar(J),q.halfWidth.set(I.width*.5,0,0),q.halfHeight.set(0,I.height*.5,0),r.rectArea[b]=q,b++}else if(I.isPointLight){let q=t.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),q.distance=I.distance,q.decay=I.decay,I.castShadow){let X=I.shadow,ee=i.get(I);ee.shadowIntensity=X.intensity,ee.shadowBias=X.bias,ee.shadowNormalBias=X.normalBias,ee.shadowRadius=X.radius,ee.shadowMapSize=X.mapSize,ee.shadowCameraNear=X.camera.near,ee.shadowCameraFar=X.camera.far,r.pointShadow[m]=ee,r.pointShadowMap[m]=de,r.pointShadowMatrix[m]=I.shadow.matrix,A++}r.point[m]=q,m++}else if(I.isHemisphereLight){let q=t.get(I);q.skyColor.copy(I.color).multiplyScalar(J),q.groundColor.copy(I.groundColor).multiplyScalar(J),r.hemi[y]=q,y++}}b>0&&(e.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Se.LTC_FLOAT_1,r.rectAreaLTC2=Se.LTC_FLOAT_2):(r.rectAreaLTC1=Se.LTC_HALF_1,r.rectAreaLTC2=Se.LTC_HALF_2)),r.ambient[0]=c,r.ambient[1]=d,r.ambient[2]=u;let L=r.hash;(L.sunLength!==p||L.directionalLength!==f||L.pointLength!==m||L.spotLength!==x||L.rectAreaLength!==b||L.hemiLength!==y||L.numSunShadows!==g||L.numDirectionalShadows!==w||L.numPointShadows!==A||L.numSpotShadows!==v||L.numSpotMaps!==M||L.numLightProbes!==D)&&(r.sun.length=p,r.directional.length=f,r.spot.length=x,r.rectArea.length=b,r.point.length=m,r.hemi.length=y,r.sunShadow.length=g,r.sunShadowMap.length=g,r.sunShadowMatrix.length=_,r.sunShadowCascade.length=_,r.directionalShadow.length=w,r.directionalShadowMap.length=w,r.directionalShadowMatrix.length=w,r.pointShadow.length=A,r.pointShadowMap.length=A,r.pointShadowMatrix.length=A,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+M-C,r.spotLightMap.length=M,r.numSpotLightShadowsWithMaps=C,r.numLightProbes=D,L.sunLength=p,L.directionalLength=f,L.pointLength=m,L.spotLength=x,L.rectAreaLength=b,L.hemiLength=y,L.numSunShadows=g,L.numDirectionalShadows=w,L.numPointShadows=A,L.numSpotShadows=v,L.numSpotMaps=M,L.numLightProbes=D,r.version=i_++)}function l(h,c){let d=0,u=0,p=0,g=0,_=0,f=0,m=c.matrixWorldInverse;for(let x=0,b=h.length;x<b;x++){let y=h[x];if(y.isSunLight){let w=r.sun[d];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(m),d++}else if(y.isDirectionalLight){let w=r.directional[u];w.direction.setFromMatrixPosition(y.matrixWorld),a.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(a),w.direction.transformDirection(m),u++}else if(y.isSpotLight){let w=r.spot[g];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(y.matrixWorld),a.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(a),w.direction.transformDirection(m),g++}else if(y.isRectAreaLight){let w=r.rectArea[_];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(m),s.identity(),n.copy(y.matrixWorld),n.premultiply(m),s.extractRotation(n),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(s),w.halfHeight.applyMatrix4(s),_++}else if(y.isPointLight){let w=r.point[p];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(m),p++}else if(y.isHemisphereLight){let w=r.hemi[f];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(m),f++}}}return{setup:o,setupView:l,state:r}}function lc(e){let t=new a_(e),i=[],r=[],a=[];function n(d){c.camera=d,i.length=0,r.length=0,a.length=0}function s(d){d.isLightProbeGrid?a.push(d):i.push(d)}function o(d){r.push(d)}function l(){t.setup(i),a.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function h(d){t.setupView(i,d)}let c={lightsArray:i,shadowsArray:r,lightProbeGridArray:a,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:n,state:c,setupLights:l,setupLightsView:h,pushLight:s,pushShadow:o}}function n_(e){let t=new WeakMap;function i(a,n=0){let s=t.get(a),o;return s===void 0?(o=new lc(e),t.set(a,[o])):n>=s.length?(o=new lc(e),s.push(o)):o=s[n],o}function r(){t=new WeakMap}return{get:i,dispose:r}}function c_(e,t,i){let r=new xa,a=new ne,n=new ne,s=new gt,o=new af,l=new nf,h={},c=i.maxTextureSize,d={[hr]:Ot,[Ot]:hr,[Ii]:Ii},u=new Zt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:s_,fragmentShader:o_}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let g=new Mt;g.setAttribute("position",new ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new qt(g,u),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sn;let m=this.type;this.render=function(A,v,M){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||A.length===0)return;this.type===Wd&&(ze("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Sn);let C=e.getRenderTarget(),D=e.getActiveCubeFace(),L=e.getActiveMipmapLevel(),F=e.state;F.setBlending(Dr),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let j=m!==this.type;j&&v.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(G=>G.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,G=A.length;I<G;I++){let J=A[I],H=J.shadow;if(H===void 0){ze("WebGLShadowMap:",J,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;a.copy(H.mapSize);let de=H.getFrameExtents();a.multiply(de),n.copy(H.mapSize),(a.x>c||a.y>c)&&(a.x>c&&(n.x=Math.floor(c/de.x),a.x=n.x*de.x,H.mapSize.x=n.x),a.y>c&&(n.y=Math.floor(c/de.y),a.y=n.y*de.y,H.mapSize.y=n.y));let q=e.state.buffers.depth.getReversed();if(H.camera._reversedDepth=q,H.map===null||j===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===la){if(J.isPointLight){ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new _i(a.x,a.y,{format:cr,type:xi,minFilter:jt,magFilter:jt,generateMipmaps:!1}),H.map.texture.name=J.name+".shadowMap",H.map.depthTexture=new Vr(a.x,a.y,gi),H.map.depthTexture.name=J.name+".shadowMapDepth",H.map.depthTexture.format=qi,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Nt,H.map.depthTexture.magFilter=Nt}else J.isPointLight?(H.map=new sl(a.x),H.map.depthTexture=new Xc(a.x,yi)):(H.map=new _i(a.x,a.y),H.map.depthTexture=new Vr(a.x,a.y,yi)),H.map.depthTexture.name=J.name+".shadowMap",H.map.depthTexture.format=qi,this.type===Sn?(H.map.depthTexture.compareFunction=q?Rc:Ac,H.map.depthTexture.minFilter=jt,H.map.depthTexture.magFilter=jt):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Nt,H.map.depthTexture.magFilter=Nt);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==a.x||H.map.height!==a.y)&&H.map.setSize(a.x,a.y);let X=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();J.isPointLight!==!0&&H.updateMatrices(J,M);let ee=(H.camera.layers.mask&4294967294)!==0?H.camera.layers:M.layers;for(let Ie=0;Ie<X;Ie++){let Y=H.getCamera(Ie);if(J.isPointLight){let Q=H.camera,Ee=H.matrix,Ue=J.distance||Q.far;Ue!==Q.far&&(Q.far=Ue,Q.updateProjectionMatrix()),oa.setFromMatrixPosition(J.matrixWorld),Q.position.copy(oa),Js.copy(Q.position),Js.add(l_[Ie]),Q.up.copy(h_[Ie]),Q.lookAt(Js),Q.updateMatrixWorld(),Ee.makeTranslation(-oa.x,-oa.y,-oa.z),hc.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),H._frustum.setFromProjectionMatrix(hc,Q.coordinateSystem,Q.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)e.setRenderTarget(H.map,Ie),e.clear();else{Ie===0&&(e.setRenderTarget(H.map),e.clear());let Q=H.getViewport(Ie);s.set(n.x*Q.x,n.y*Q.y,n.x*Q.z,n.y*Q.w),F.viewport(s)}r=H.getFrustum(Ie),y(v,M,Y,J,ee,this.type)}H.isPointLightShadow!==!0&&this.type===la&&x(H,M),H.needsUpdate=!1}m=this.type,f.needsUpdate=!1,e.setRenderTarget(C,D,L)};function x(A,v){let M=t.update(_);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null?A.mapPass=new _i(a.x,a.y,{format:cr,type:xi}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),u.uniforms.shadow_pass.value=A.map.depthTexture,u.uniforms.resolution.value.set(A.map.width,A.map.height),u.uniforms.radius.value=A.radius,e.setRenderTarget(A.mapPass),e.clear(),e.renderBufferDirect(v,null,M,u,_,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value.set(A.map.width,A.map.height),p.uniforms.radius.value=A.radius,e.setRenderTarget(A.map),e.clear(),e.renderBufferDirect(v,null,M,p,_,null)}function b(A,v,M,C){let D=null,L=M.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)D=L;else if(D=M.isPointLight===!0?l:o,e.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){let F=D.uuid,j=v.uuid,I=h[F];I===void 0&&(I={},h[F]=I);let G=I[j];G===void 0&&(G=D.clone(),I[j]=G,v.addEventListener("dispose",w)),D=G}if(D.visible=v.visible,D.wireframe=v.wireframe,C===la?D.side=v.shadowSide!==null?v.shadowSide:v.side:D.side=v.shadowSide!==null?v.shadowSide:d[v.side],D.alphaMap=v.alphaMap,D.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,D.map=v.map,D.clipShadows=v.clipShadows,D.clippingPlanes=v.clippingPlanes,D.clipIntersection=v.clipIntersection,D.displacementMap=v.displacementMap,D.displacementScale=v.displacementScale,D.displacementBias=v.displacementBias,D.wireframeLinewidth=v.wireframeLinewidth,D.linewidth=v.linewidth,M.isPointLight===!0&&D.isMeshDistanceMaterial===!0){let F=e.properties.get(D);F.light=M}return D}function y(A,v,M,C,D,L){if(A.visible===!1)return;if(A.layers.test(D)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&L===la)&&(!A.frustumCulled||A.intersectsFrustum(r))){A.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,A.matrixWorld);let j=t.update(A),I=A.material;if(Array.isArray(I)){let G=j.groups;for(let J=0,H=G.length;J<H;J++){let de=G[J],q=I[de.materialIndex];if(q&&q.visible){let X=b(A,q,C,L);A.onBeforeShadow(e,A,v,M,j,X,de),e.renderBufferDirect(M,null,j,X,A,de),A.onAfterShadow(e,A,v,M,j,X,de)}}}else if(I.visible){let G=b(A,I,C,L);A.onBeforeShadow(e,A,v,M,j,G,null),e.renderBufferDirect(M,null,j,G,A,null),A.onAfterShadow(e,A,v,M,j,G,null)}}let F=A.children;for(let j=0,I=F.length;j<I;j++)y(F[j],v,M,C,D,L)}function w(A){A.target.removeEventListener("dispose",w);for(let v in h){let M=h[v],C=A.target.uuid;C in M&&(M[C].dispose(),delete M[C])}}}function u_(e,t){function i(){let P=!1,W=new gt,te=null,oe=new gt(0,0,0,0);return{setMask:function(ye){te!==ye&&!P&&(e.colorMask(ye,ye,ye,ye),te=ye)},setLocked:function(ye){P=ye},setClear:function(ye,ve,Oe,re,Xe){Xe===!0&&(ye*=re,ve*=re,Oe*=re),W.set(ye,ve,Oe,re),oe.equals(W)===!1&&(e.clearColor(ye,ve,Oe,re),oe.copy(W))},reset:function(){P=!1,te=null,oe.set(-1,0,0,0)}}}function r(){let P=!1,W=!1,te=null,oe=null,ye=null;return{setReversed:function(ve){if(W!==ve){let Oe=t.get("EXT_clip_control");ve?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT),W=ve;let re=ye;ye=null,this.setClear(re)}},getReversed:function(){return W},setTest:function(ve){ve?le(e.DEPTH_TEST):We(e.DEPTH_TEST)},setMask:function(ve){te!==ve&&!P&&(e.depthMask(ve),te=ve)},setFunc:function(ve){if(W&&(ve=wp[ve]),oe!==ve){switch(ve){case Zs:e.depthFunc(e.NEVER);break;case Ks:e.depthFunc(e.ALWAYS);break;case Qs:e.depthFunc(e.LESS);break;case fa:e.depthFunc(e.LEQUAL);break;case eo:e.depthFunc(e.EQUAL);break;case to:e.depthFunc(e.GEQUAL);break;case io:e.depthFunc(e.GREATER);break;case ro:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}oe=ve}},setLocked:function(ve){P=ve},setClear:function(ve){ye!==ve&&(ye=ve,W&&(ve=1-ve),e.clearDepth(ve))},reset:function(){P=!1,te=null,oe=null,ye=null,W=!1}}}function a(){let P=!1,W=null,te=null,oe=null,ye=null,ve=null,Oe=null,re=null,Xe=null;return{setTest:function(Ge){P||(Ge?le(e.STENCIL_TEST):We(e.STENCIL_TEST))},setMask:function(Ge){W!==Ge&&!P&&(e.stencilMask(Ge),W=Ge)},setFunc:function(Ge,at,Te){(te!==Ge||oe!==at||ye!==Te)&&(e.stencilFunc(Ge,at,Te),te=Ge,oe=at,ye=Te)},setOp:function(Ge,at,Te){(ve!==Ge||Oe!==at||re!==Te)&&(e.stencilOp(Ge,at,Te),ve=Ge,Oe=at,re=Te)},setLocked:function(Ge){P=Ge},setClear:function(Ge){Xe!==Ge&&(e.clearStencil(Ge),Xe=Ge)},reset:function(){P=!1,W=null,te=null,oe=null,ye=null,ve=null,Oe=null,re=null,Xe=null}}}let n=new i,s=new r,o=new a,l={},h=new WeakMap,c={},d={},u={},p=new WeakMap,g=[],_=null,f=!1,m=null,x=null,b=null,y=null,w=null,A=null,v=null,M=new Ye(0,0,0),C=0,D=!1,L=null,F=null,j=null,I=null,G=null,J=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,de=0,q=e.getParameter(e.VERSION);q.indexOf("WebGL")!==-1?(de=parseFloat(/^WebGL (\d)/.exec(q)[1]),H=de>=1):q.indexOf("OpenGL ES")!==-1&&(de=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),H=de>=2);let X=null,ee={},Ie=e.getParameter(e.SCISSOR_BOX),Y=e.getParameter(e.VIEWPORT),Q=new gt().fromArray(Ie),Ee=new gt().fromArray(Y);function Ue(P,W,te,oe){let ye=new Uint8Array(4),ve=e.createTexture();e.bindTexture(P,ve),e.texParameteri(P,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(P,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Oe=0;Oe<te;Oe++)P===e.TEXTURE_3D||P===e.TEXTURE_2D_ARRAY?e.texImage3D(W,0,e.RGBA,1,1,oe,0,e.RGBA,e.UNSIGNED_BYTE,ye):e.texImage2D(W+Oe,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,ye);return ve}let Pe={};Pe[e.TEXTURE_2D]=Ue(e.TEXTURE_2D,e.TEXTURE_2D,1),Pe[e.TEXTURE_CUBE_MAP]=Ue(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),Pe[e.TEXTURE_2D_ARRAY]=Ue(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),Pe[e.TEXTURE_3D]=Ue(e.TEXTURE_3D,e.TEXTURE_3D,1,1),n.setClear(0,0,0,1),s.setClear(1),o.setClear(0),le(e.DEPTH_TEST),s.setFunc(fa),Z(!1),pe($l),le(e.CULL_FACE),se(Dr);function le(P){c[P]!==!0&&(e.enable(P),c[P]=!0)}function We(P){c[P]!==!1&&(e.disable(P),c[P]=!1)}function et(P,W){return u[P]!==W?(e.bindFramebuffer(P,W),u[P]=W,P===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=W),P===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=W),!0):!1}function Re(P,W){let te=g,oe=!1;if(P){te=p.get(W),te===void 0&&(te=[],p.set(W,te));let ye=P.textures;if(te.length!==ye.length||te[0]!==e.COLOR_ATTACHMENT0){for(let ve=0,Oe=ye.length;ve<Oe;ve++)te[ve]=e.COLOR_ATTACHMENT0+ve;te.length=ye.length,oe=!0}}else te[0]!==e.BACK&&(te[0]=e.BACK,oe=!0);oe&&e.drawBuffers(te)}function $e(P){return _!==P?(e.useProgram(P),_=P,!0):!1}let ae={[Cr]:e.FUNC_ADD,[jd]:e.FUNC_SUBTRACT,[qd]:e.FUNC_REVERSE_SUBTRACT};ae[Yd]=e.MIN,ae[$d]=e.MAX;let he={[Jd]:e.ZERO,[Zd]:e.ONE,[Kd]:e.SRC_COLOR,[cc]:e.SRC_ALPHA,[ap]:e.SRC_ALPHA_SATURATE,[ip]:e.DST_COLOR,[ep]:e.DST_ALPHA,[Qd]:e.ONE_MINUS_SRC_COLOR,[uc]:e.ONE_MINUS_SRC_ALPHA,[rp]:e.ONE_MINUS_DST_COLOR,[tp]:e.ONE_MINUS_DST_ALPHA,[np]:e.CONSTANT_COLOR,[sp]:e.ONE_MINUS_CONSTANT_COLOR,[op]:e.CONSTANT_ALPHA,[lp]:e.ONE_MINUS_CONSTANT_ALPHA};function se(P,W,te,oe,ye,ve,Oe,re,Xe,Ge){if(P===Dr){f===!0&&(We(e.BLEND),f=!1);return}if(f===!1&&(le(e.BLEND),f=!0),P!==Xd){if(P!==m||Ge!==D){if((x!==Cr||w!==Cr)&&(e.blendEquation(e.FUNC_ADD),x=Cr,w=Cr),Ge)switch(P){case ua:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case ma:e.blendFunc(e.ONE,e.ONE);break;case Jl:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Zl:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:He("WebGLState: Invalid blending: ",P);break}else switch(P){case ua:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case ma:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case Jl:He("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Zl:He("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:He("WebGLState: Invalid blending: ",P);break}b=null,y=null,A=null,v=null,M.set(0,0,0),C=0,m=P,D=Ge}return}ye=ye||W,ve=ve||te,Oe=Oe||oe,(W!==x||ye!==w)&&(e.blendEquationSeparate(ae[W],ae[ye]),x=W,w=ye),(te!==b||oe!==y||ve!==A||Oe!==v)&&(e.blendFuncSeparate(he[te],he[oe],he[ve],he[Oe]),b=te,y=oe,A=ve,v=Oe),(re.equals(M)===!1||Xe!==C)&&(e.blendColor(re.r,re.g,re.b,Xe),M.copy(re),C=Xe),m=P,D=!1}function be(P,W){P.side===Ii?We(e.CULL_FACE):le(e.CULL_FACE);let te=P.side===Ot;W&&(te=!te),Z(te),P.blending===ua&&P.transparent===!1?se(Dr):se(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),s.setFunc(P.depthFunc),s.setTest(P.depthTest),s.setMask(P.depthWrite),n.setMask(P.colorWrite);let oe=P.stencilWrite;o.setTest(oe),oe&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Ve(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?le(e.SAMPLE_ALPHA_TO_COVERAGE):We(e.SAMPLE_ALPHA_TO_COVERAGE)}function Z(P){L!==P&&(P?e.frontFace(e.CW):e.frontFace(e.CCW),L=P)}function pe(P){P!==Hd?(le(e.CULL_FACE),P!==F&&(P===$l?e.cullFace(e.BACK):P===Vd?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):We(e.CULL_FACE),F=P}function fe(P){P!==j&&(H&&e.lineWidth(P),j=P)}function Ve(P,W,te){P?(le(e.POLYGON_OFFSET_FILL),(I!==W||G!==te)&&(I=W,G=te,s.getReversed()&&(W=-W,te=-te),e.polygonOffset(W,te))):We(e.POLYGON_OFFSET_FILL)}function Le(P){P?le(e.SCISSOR_TEST):We(e.SCISSOR_TEST)}function Ke(P){P===void 0&&(P=e.TEXTURE0+J-1),X!==P&&(e.activeTexture(P),X=P)}function U(P,W,te){te===void 0&&(X===null?te=e.TEXTURE0+J-1:te=X);let oe=ee[te];oe===void 0&&(oe={type:void 0,texture:void 0},ee[te]=oe),(oe.type!==P||oe.texture!==W)&&(X!==te&&(e.activeTexture(te),X=te),e.bindTexture(P,W||Pe[P]),oe.type=P,oe.texture=W)}function mt(){let P=ee[X];P!==void 0&&P.type!==void 0&&(e.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function Be(){try{e.compressedTexImage2D(...arguments)}catch(P){He("WebGLState:",P)}}function ct(){try{e.compressedTexImage3D(...arguments)}catch(P){He("WebGLState:",P)}}function ce(){try{e.texSubImage2D(...arguments)}catch(P){He("WebGLState:",P)}}function Je(){try{e.texSubImage3D(...arguments)}catch(P){He("WebGLState:",P)}}function Ae(){try{e.compressedTexSubImage2D(...arguments)}catch(P){He("WebGLState:",P)}}function Ne(){try{e.compressedTexSubImage3D(...arguments)}catch(P){He("WebGLState:",P)}}function _t(){try{e.texStorage2D(...arguments)}catch(P){He("WebGLState:",P)}}function T(){try{e.texStorage3D(...arguments)}catch(P){He("WebGLState:",P)}}function S(){try{e.texImage2D(...arguments)}catch(P){He("WebGLState:",P)}}function B(){try{e.texImage3D(...arguments)}catch(P){He("WebGLState:",P)}}function ie(P){return d[P]!==void 0?d[P]:e.getParameter(P)}function $(P,W){d[P]!==W&&(e.pixelStorei(P,W),d[P]=W)}function me(P){Q.equals(P)===!1&&(e.scissor(P.x,P.y,P.z,P.w),Q.copy(P))}function ge(P){Ee.equals(P)===!1&&(e.viewport(P.x,P.y,P.z,P.w),Ee.copy(P))}function O(P,W){let te=h.get(W);te===void 0&&(te=new WeakMap,h.set(W,te));let oe=te.get(P);oe===void 0&&(oe=e.getUniformBlockIndex(W,P.name),e.uniformBlockBinding(W,oe,oe),te.set(P,oe))}function K(P,W,te){let oe=h.get(W).get(P);l[oe]!==te&&(e.bindBufferBase(e.UNIFORM_BUFFER,oe,te),l[oe]=te)}function Me(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),s.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),c={},d={},X=null,ee={},u={},l={},p=new WeakMap,g=[],_=null,f=!1,m=null,x=null,b=null,y=null,w=null,A=null,v=null,M=new Ye(0,0,0),C=0,D=!1,L=null,F=null,j=null,I=null,G=null,Q.set(0,0,e.canvas.width,e.canvas.height),Ee.set(0,0,e.canvas.width,e.canvas.height),n.reset(),s.reset(),o.reset()}return{buffers:{color:n,depth:s,stencil:o},enable:le,disable:We,bindFramebuffer:et,drawBuffers:Re,useProgram:$e,setBlending:se,setMaterial:be,setFlipSided:Z,setCullFace:pe,setLineWidth:fe,setPolygonOffset:Ve,setScissorTest:Le,activeTexture:Ke,bindTexture:U,unbindTexture:mt,compressedTexImage2D:Be,compressedTexImage3D:ct,texImage2D:S,texImage3D:B,pixelStorei:$,getParameter:ie,updateUBOMapping:O,uniformBlockBinding:K,texStorage2D:_t,texStorage3D:T,texSubImage2D:ce,texSubImage3D:Je,compressedTexSubImage2D:Ae,compressedTexSubImage3D:Ne,scissor:me,viewport:ge,reset:Me}}function d_(e,t,i,r,a,n,s){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new ne,c=new WeakMap,d=new Set,u,p=new WeakMap,g=new Set,_=new FinalizationRegistry(T=>g.delete(T)),f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(T,S){return f?new OffscreenCanvas(T,S):_a("canvas")}function x(T,S,B){let ie=1,$=_t(T);if(($.width>B||$.height>B)&&(ie=B/Math.max($.width,$.height)),ie<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let me=Math.floor(ie*$.width),ge=Math.floor(ie*$.height);u===void 0&&(u=m(me,ge));let O=S?m(me,ge):u;return O.width=me,O.height=ge,O.getContext("2d").drawImage(T,0,0,me,ge),ze("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+me+"x"+ge+")."),O}else return"data"in T&&ze("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),T;return T}function b(T){return T.generateMipmaps}function y(T){e.generateMipmap(T)}function w(T){return T.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?e.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function A(T,S,B,ie,$,me=!1){if(T!==null){if(e[T]!==void 0)return e[T];ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ge;ie&&(ge=t.get("EXT_texture_norm16"),ge||ze("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let O=S;if(S===e.RED&&(B===e.FLOAT&&(O=e.R32F),B===e.HALF_FLOAT&&(O=e.R16F),B===e.UNSIGNED_BYTE&&(O=e.R8),B===e.UNSIGNED_SHORT&&ge&&(O=ge.R16_EXT),B===e.SHORT&&ge&&(O=ge.R16_SNORM_EXT)),S===e.RED_INTEGER&&(B===e.UNSIGNED_BYTE&&(O=e.R8UI),B===e.UNSIGNED_SHORT&&(O=e.R16UI),B===e.UNSIGNED_INT&&(O=e.R32UI),B===e.BYTE&&(O=e.R8I),B===e.SHORT&&(O=e.R16I),B===e.INT&&(O=e.R32I)),S===e.RG&&(B===e.FLOAT&&(O=e.RG32F),B===e.HALF_FLOAT&&(O=e.RG16F),B===e.UNSIGNED_BYTE&&(O=e.RG8),B===e.UNSIGNED_SHORT&&ge&&(O=ge.RG16_EXT),B===e.SHORT&&ge&&(O=ge.RG16_SNORM_EXT)),S===e.RG_INTEGER&&(B===e.UNSIGNED_BYTE&&(O=e.RG8UI),B===e.UNSIGNED_SHORT&&(O=e.RG16UI),B===e.UNSIGNED_INT&&(O=e.RG32UI),B===e.BYTE&&(O=e.RG8I),B===e.SHORT&&(O=e.RG16I),B===e.INT&&(O=e.RG32I)),S===e.RGB_INTEGER&&(B===e.UNSIGNED_BYTE&&(O=e.RGB8UI),B===e.UNSIGNED_SHORT&&(O=e.RGB16UI),B===e.UNSIGNED_INT&&(O=e.RGB32UI),B===e.BYTE&&(O=e.RGB8I),B===e.SHORT&&(O=e.RGB16I),B===e.INT&&(O=e.RGB32I)),S===e.RGBA_INTEGER&&(B===e.UNSIGNED_BYTE&&(O=e.RGBA8UI),B===e.UNSIGNED_SHORT&&(O=e.RGBA16UI),B===e.UNSIGNED_INT&&(O=e.RGBA32UI),B===e.BYTE&&(O=e.RGBA8I),B===e.SHORT&&(O=e.RGBA16I),B===e.INT&&(O=e.RGBA32I)),S===e.RGB&&(B===e.UNSIGNED_SHORT&&ge&&(O=ge.RGB16_EXT),B===e.SHORT&&ge&&(O=ge.RGB16_SNORM_EXT),B===e.UNSIGNED_INT_5_9_9_9_REV&&(O=e.RGB9_E5),B===e.UNSIGNED_INT_10F_11F_11F_REV&&(O=e.R11F_G11F_B10F)),S===e.RGBA){let K=me?Nn:nt.getTransfer($);B===e.FLOAT&&(O=e.RGBA32F),B===e.HALF_FLOAT&&(O=e.RGBA16F),B===e.UNSIGNED_BYTE&&(O=K===pt?e.SRGB8_ALPHA8:e.RGBA8),B===e.UNSIGNED_SHORT&&ge&&(O=ge.RGBA16_EXT),B===e.SHORT&&ge&&(O=ge.RGBA16_SNORM_EXT),B===e.UNSIGNED_SHORT_4_4_4_4&&(O=e.RGBA4),B===e.UNSIGNED_SHORT_5_5_5_1&&(O=e.RGB5_A1)}return(O===e.R16F||O===e.R32F||O===e.RG16F||O===e.RG32F||O===e.RGBA16F||O===e.RGBA32F)&&t.get("EXT_color_buffer_float"),O}function v(T,S){let B;return T?S===null||S===yi||S===Gr?B=e.DEPTH24_STENCIL8:S===gi?B=e.DEPTH32F_STENCIL8:S===va&&(B=e.DEPTH24_STENCIL8,ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===yi||S===Gr?B=e.DEPTH_COMPONENT24:S===gi?B=e.DEPTH_COMPONENT32F:S===va&&(B=e.DEPTH_COMPONENT16),B}function M(T,S){return b(T)===!0||T.isFramebufferTexture&&T.minFilter!==Nt&&T.minFilter!==jt?Math.log2(Math.max(S.width,S.height))+1:T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?S.mipmaps.length:1}function C(T){let S=new WeakRef(T);r.get(T).__ref=S,g.add(S),_.register(T,S,S)}function D(T){let S=r.get(T).__ref;S!==void 0&&(g.delete(S),_.unregister(S))}function L(T){j(T.target)}function F(T){I(T.target)}function j(T){T.removeEventListener("dispose",L),D(T),J(T),T.isVideoTexture&&c.delete(T),T.isHTMLTexture&&d.delete(T)}function I(T){T.removeEventListener("dispose",F),D(T),de(T)}function G(){for(let T of g){let S=T.deref();S!==void 0&&(S.isRenderTarget===!0?I(S):j(S))}g.clear(),d.clear()}function J(T){let S=r.get(T);if(S.__webglInit===void 0)return;let B=T.source,ie=p.get(B);if(ie){let $=ie[S.__cacheKey];$.usedTimes--,$.usedTimes===0&&H(T),Object.keys(ie).length===0&&p.delete(B)}r.remove(T)}function H(T){let S=r.get(T);e.deleteTexture(S.__webglTexture);let B=T.source,ie=p.get(B);delete ie[S.__cacheKey],s.memory.textures--}function de(T){let S=r.get(T);S.__depthDisposeCallback&&S.__depthDisposeCallback();let B=T.depthTexture;if(B&&B.renderTarget===T&&j(B),T.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(S.__webglFramebuffer[$]))for(let me=0;me<S.__webglFramebuffer[$].length;me++)e.deleteFramebuffer(S.__webglFramebuffer[$][me]);else e.deleteFramebuffer(S.__webglFramebuffer[$]);S.__webglDepthbuffer&&e.deleteRenderbuffer(S.__webglDepthbuffer[$])}else{if(Array.isArray(S.__webglFramebuffer))for(let $=0;$<S.__webglFramebuffer.length;$++)e.deleteFramebuffer(S.__webglFramebuffer[$]);else e.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&e.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&e.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let $=0;$<S.__webglColorRenderbuffer.length;$++)S.__webglColorRenderbuffer[$]&&e.deleteRenderbuffer(S.__webglColorRenderbuffer[$]);S.__webglDepthRenderbuffer&&e.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let ie=T.textures;for(let $=0,me=ie.length;$<me;$++){let ge=r.get(ie[$]);ge.__webglTexture&&(e.deleteTexture(ge.__webglTexture),s.memory.textures--),r.remove(ie[$])}r.remove(T)}let q=0;function X(){q=0}function ee(){return q}function Ie(T){q=T}function Y(){let T=q;return T>=a.maxTextures&&ze("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+a.maxTextures),q+=1,T}function Q(T){let S=[];return S.push(T.wrapS),S.push(T.wrapT),S.push(T.wrapR||0),S.push(T.magFilter),S.push(T.minFilter),S.push(T.anisotropy),S.push(T.internalFormat),S.push(T.format),S.push(T.type),S.push(T.generateMipmaps),S.push(T.mipmapsAutoUpdate),S.push(T.premultiplyAlpha),S.push(T.flipY),S.push(T.unpackAlignment),S.push(T.colorSpace),S.join()}function Ee(T,S){let B=r.get(T);if(T.isVideoTexture&&Ae(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&B.__version!==T.version){let ie=T.image;if(ie===null)ze("WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)ze("WebGLRenderer: Texture marked for update but image is incomplete");else{be(B,T,S);return}}else T.isExternalTexture&&(B.__webglTexture=T.sourceTexture?T.sourceTexture:null);i.bindTexture(e.TEXTURE_2D,B.__webglTexture,e.TEXTURE0+S)}function Ue(T,S){let B=r.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){be(B,T,S);return}else T.isExternalTexture&&(B.__webglTexture=T.sourceTexture?T.sourceTexture:null);i.bindTexture(e.TEXTURE_2D_ARRAY,B.__webglTexture,e.TEXTURE0+S)}function Pe(T,S){let B=r.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){be(B,T,S);return}i.bindTexture(e.TEXTURE_3D,B.__webglTexture,e.TEXTURE0+S)}function le(T,S){let B=r.get(T);if(T.version>0&&B.__version!==T.version){Z(B,T,S);return}i.bindTexture(e.TEXTURE_CUBE_MAP,B.__webglTexture,e.TEXTURE0+S)}let We={[ao]:e.REPEAT,[li]:e.CLAMP_TO_EDGE,[no]:e.MIRRORED_REPEAT},et={[Nt]:e.NEAREST,[up]:e.NEAREST_MIPMAP_NEAREST,[Ha]:e.NEAREST_MIPMAP_LINEAR,[jt]:e.LINEAR,[ys]:e.LINEAR_MIPMAP_NEAREST,[fi]:e.LINEAR_MIPMAP_LINEAR},Re={[fp]:e.NEVER,[Cc]:e.ALWAYS,[gp]:e.LESS,[Ac]:e.LEQUAL,[vp]:e.EQUAL,[Rc]:e.GEQUAL,[_p]:e.GREATER,[yp]:e.NOTEQUAL};function $e(T,S){if(S.type===gi&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===jt||S.magFilter===ys||S.magFilter===Ha||S.magFilter===fi||S.minFilter===jt||S.minFilter===ys||S.minFilter===Ha||S.minFilter===fi)&&ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(T,e.TEXTURE_WRAP_S,We[S.wrapS]),e.texParameteri(T,e.TEXTURE_WRAP_T,We[S.wrapT]),(T===e.TEXTURE_3D||T===e.TEXTURE_2D_ARRAY)&&e.texParameteri(T,e.TEXTURE_WRAP_R,We[S.wrapR]),e.texParameteri(T,e.TEXTURE_MAG_FILTER,et[S.magFilter]),e.texParameteri(T,e.TEXTURE_MIN_FILTER,et[S.minFilter]),S.compareFunction&&(e.texParameteri(T,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(T,e.TEXTURE_COMPARE_FUNC,Re[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Nt||S.minFilter!==Ha&&S.minFilter!==fi||S.type===gi&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||r.get(S).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");e.texParameterf(T,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,a.getMaxAnisotropy())),r.get(S).__currentAnisotropy=S.anisotropy}}}function ae(T,S){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,S.addEventListener("dispose",L),C(S));let ie=S.source,$=p.get(ie);$===void 0&&($={},p.set(ie,$));let me=Q(S);if(me!==T.__cacheKey){$[me]===void 0&&($[me]={texture:e.createTexture(),usedTimes:0},s.memory.textures++,B=!0),$[me].usedTimes++;let ge=$[T.__cacheKey];ge!==void 0&&($[T.__cacheKey].usedTimes--,ge.usedTimes===0&&H(S)),T.__cacheKey=me,T.__webglTexture=$[me].texture}return B}function he(T,S,B){return Math.floor(Math.floor(T/B)/S)}function se(T,S,B,ie){let $=T.updateRanges;if($.length===0)i.texSubImage2D(e.TEXTURE_2D,0,0,0,S.width,S.height,B,ie,S.data);else{$.sort((Me,P)=>Me.start-P.start);let me=0;for(let Me=1;Me<$.length;Me++){let P=$[me],W=$[Me],te=P.start+P.count,oe=he(W.start,S.width,4),ye=he(P.start,S.width,4);W.start<=te+1&&oe===ye&&he(W.start+W.count-1,S.width,4)===oe?P.count=Math.max(P.count,W.start+W.count-P.start):(++me,$[me]=W)}$.length=me+1;let ge=i.getParameter(e.UNPACK_ROW_LENGTH),O=i.getParameter(e.UNPACK_SKIP_PIXELS),K=i.getParameter(e.UNPACK_SKIP_ROWS);i.pixelStorei(e.UNPACK_ROW_LENGTH,S.width);for(let Me=0,P=$.length;Me<P;Me++){let W=$[Me],te=Math.floor(W.start/4),oe=Math.ceil(W.count/4),ye=te%S.width,ve=Math.floor(te/S.width),Oe=oe;i.pixelStorei(e.UNPACK_SKIP_PIXELS,ye),i.pixelStorei(e.UNPACK_SKIP_ROWS,ve),i.texSubImage2D(e.TEXTURE_2D,0,ye,ve,Oe,1,B,ie,S.data)}T.clearUpdateRanges(),i.pixelStorei(e.UNPACK_ROW_LENGTH,ge),i.pixelStorei(e.UNPACK_SKIP_PIXELS,O),i.pixelStorei(e.UNPACK_SKIP_ROWS,K)}}function be(T,S,B){let ie=e.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ie=e.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ie=e.TEXTURE_3D);let $=ae(T,S),me=S.source;i.bindTexture(ie,T.__webglTexture,e.TEXTURE0+B);let ge=r.get(me);if(me.version!==ge.__version||$===!0){if(i.activeTexture(e.TEXTURE0+B),!(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)){let re=nt.getPrimaries(nt.workingColorSpace),Xe=S.colorSpace===oi?null:nt.getPrimaries(S.colorSpace),Ge=S.colorSpace===oi||re===Xe?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge)}i.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment);let O=x(S.image,!1,a.maxTextureSize);O=Ne(S,O);let K=n.convert(S.format,S.colorSpace),Me=n.convert(S.type),P=A(S.internalFormat,K,Me,S.normalized,S.colorSpace,S.isVideoTexture);$e(ie,S);let W,te=S.mipmaps,oe=S.isVideoTexture!==!0,ye=ge.__version===void 0||$===!0,ve=me.dataReady,Oe=M(S,O);if(S.isDepthTexture)P=v(S.format===ji,S.type),ye&&(oe?i.texStorage2D(e.TEXTURE_2D,1,P,O.width,O.height):i.texImage2D(e.TEXTURE_2D,0,P,O.width,O.height,0,K,Me,null));else if(S.isDataTexture)if(te.length>0){oe&&ye&&i.texStorage2D(e.TEXTURE_2D,Oe,P,te[0].width,te[0].height);for(let re=0,Xe=te.length;re<Xe;re++)W=te[re],oe?ve&&i.texSubImage2D(e.TEXTURE_2D,re,0,0,W.width,W.height,K,Me,W.data):i.texImage2D(e.TEXTURE_2D,re,P,W.width,W.height,0,K,Me,W.data);S.generateMipmaps=!1}else oe?(ye&&i.texStorage2D(e.TEXTURE_2D,Oe,P,O.width,O.height),ve&&se(S,O,K,Me)):i.texImage2D(e.TEXTURE_2D,0,P,O.width,O.height,0,K,Me,O.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){oe&&ye&&i.texStorage3D(e.TEXTURE_2D_ARRAY,Oe,P,te[0].width,te[0].height,O.depth);for(let re=0,Xe=te.length;re<Xe;re++)if(W=te[re],S.format!==vi)if(K!==null)if(oe){if(ve)if(S.layerUpdates.size>0){let Ge=Gh(W.width,W.height,S.format,S.type);for(let at of S.layerUpdates){let Te=W.data.subarray(at*Ge/W.data.BYTES_PER_ELEMENT,(at+1)*Ge/W.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,re,0,0,at,W.width,W.height,1,K,Te)}}else i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,re,0,0,0,W.width,W.height,O.depth,K,W.data)}else i.compressedTexImage3D(e.TEXTURE_2D_ARRAY,re,P,W.width,W.height,O.depth,0,W.data,0,0);else ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else oe?ve&&i.texSubImage3D(e.TEXTURE_2D_ARRAY,re,0,0,0,W.width,W.height,O.depth,K,Me,W.data):i.texImage3D(e.TEXTURE_2D_ARRAY,re,P,W.width,W.height,O.depth,0,K,Me,W.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{oe&&ye&&i.texStorage2D(e.TEXTURE_2D,Oe,P,te[0].width,te[0].height);for(let re=0,Xe=te.length;re<Xe;re++)W=te[re],S.format!==vi?K!==null?oe?ve&&i.compressedTexSubImage2D(e.TEXTURE_2D,re,0,0,W.width,W.height,K,W.data):i.compressedTexImage2D(e.TEXTURE_2D,re,P,W.width,W.height,0,W.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?ve&&i.texSubImage2D(e.TEXTURE_2D,re,0,0,W.width,W.height,K,Me,W.data):i.texImage2D(e.TEXTURE_2D,re,P,W.width,W.height,0,K,Me,W.data)}else if(S.isDataArrayTexture)if(oe){if(ye&&i.texStorage3D(e.TEXTURE_2D_ARRAY,Oe,P,O.width,O.height,O.depth),ve)if(S.layerUpdates.size>0){let re=Gh(O.width,O.height,S.format,S.type);for(let Xe of S.layerUpdates){let Ge=O.data.subarray(Xe*re/O.data.BYTES_PER_ELEMENT,(Xe+1)*re/O.data.BYTES_PER_ELEMENT);i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,Xe,O.width,O.height,1,K,Me,Ge)}S.clearLayerUpdates()}else i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,O.width,O.height,O.depth,K,Me,O.data)}else i.texImage3D(e.TEXTURE_2D_ARRAY,0,P,O.width,O.height,O.depth,0,K,Me,O.data);else if(S.isData3DTexture)oe?(ye&&i.texStorage3D(e.TEXTURE_3D,Oe,P,O.width,O.height,O.depth),ve&&i.texSubImage3D(e.TEXTURE_3D,0,0,0,0,O.width,O.height,O.depth,K,Me,O.data)):i.texImage3D(e.TEXTURE_3D,0,P,O.width,O.height,O.depth,0,K,Me,O.data);else if(S.isFramebufferTexture){if(ye)if(oe)i.texStorage2D(e.TEXTURE_2D,Oe,P,O.width,O.height);else{let re=O.width,Xe=O.height;for(let Ge=0;Ge<Oe;Ge++)i.texImage2D(e.TEXTURE_2D,Ge,P,re,Xe,0,K,Me,null),re>>=1,Xe>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in e){let re=e.canvas;if(re.hasAttribute("layoutsubtree")||re.setAttribute("layoutsubtree","true"),O.parentNode!==re){re.appendChild(O),d.add(S),re.onpaint=Xe=>{let Ge=Xe.changedElements;for(let at of d)Ge.includes(at.image)&&(at.needsUpdate=!0)},re.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,O);else{let Xe=e.RGBA,Ge=e.RGBA,at=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,Xe,Ge,at,O)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(te.length>0){if(oe&&ye){let re=_t(te[0]);i.texStorage2D(e.TEXTURE_2D,Oe,P,re.width,re.height)}for(let re=0,Xe=te.length;re<Xe;re++)W=te[re],oe?ve&&i.texSubImage2D(e.TEXTURE_2D,re,0,0,K,Me,W):i.texImage2D(e.TEXTURE_2D,re,P,K,Me,W);S.generateMipmaps=!1}else if(oe){if(ye){let re=_t(O);i.texStorage2D(e.TEXTURE_2D,Oe,P,re.width,re.height)}ve&&i.texSubImage2D(e.TEXTURE_2D,0,0,0,K,Me,O)}else i.texImage2D(e.TEXTURE_2D,0,P,K,Me,O);b(S)&&S.mipmapsAutoUpdate===!0&&y(ie),ge.__version=me.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function Z(T,S,B){if(S.image.length!==6)return;let ie=ae(T,S),$=S.source;i.bindTexture(e.TEXTURE_CUBE_MAP,T.__webglTexture,e.TEXTURE0+B);let me=r.get($);if($.version!==me.__version||ie===!0){i.activeTexture(e.TEXTURE0+B);let ge=nt.getPrimaries(nt.workingColorSpace),O=S.colorSpace===oi?null:nt.getPrimaries(S.colorSpace),K=S.colorSpace===oi||ge===O?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);let Me=S.isCompressedTexture||S.image[0].isCompressedTexture,P=S.image[0]&&S.image[0].isDataTexture,W=[];for(let Te=0;Te<6;Te++)!Me&&!P?W[Te]=x(S.image[Te],!0,a.maxCubemapSize):W[Te]=P?S.image[Te].image:S.image[Te],W[Te]=Ne(S,W[Te]);let te=W[0],oe=n.convert(S.format,S.colorSpace),ye=n.convert(S.type),ve=A(S.internalFormat,oe,ye,S.normalized,S.colorSpace),Oe=S.isVideoTexture!==!0,re=me.__version===void 0||ie===!0,Xe=$.dataReady,Ge=M(S,te);$e(e.TEXTURE_CUBE_MAP,S);let at;if(S.isDepthTexture){if(ve=v(S.format===ji,S.type),re)if(Oe)i.texStorage2D(e.TEXTURE_CUBE_MAP,1,ve,te.width,te.height);else for(let Te=0;Te<6;Te++)i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,ve,te.width,te.height,0,oe,ye,null)}else if(Me){Oe&&re&&i.texStorage2D(e.TEXTURE_CUBE_MAP,Ge,ve,te.width,te.height);for(let Te=0;Te<6;Te++){at=W[Te].mipmaps;for(let xt=0;xt<at.length;xt++){let St=at[xt];S.format!==vi?oe!==null?Oe?Xe&&i.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Te,xt,0,0,St.width,St.height,oe,St.data):i.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Te,xt,ve,St.width,St.height,0,St.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?Xe&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Te,xt,0,0,St.width,St.height,oe,ye,St.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Te,xt,ve,St.width,St.height,0,oe,ye,St.data)}}}else{if(at=S.mipmaps,Oe&&re){at.length>0&&Ge++;let Te=_t(W[0]);i.texStorage2D(e.TEXTURE_CUBE_MAP,Ge,ve,Te.width,Te.height)}for(let Te=0;Te<6;Te++)if(P){Oe?Xe&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,W[Te].width,W[Te].height,oe,ye,W[Te].data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,ve,W[Te].width,W[Te].height,0,oe,ye,W[Te].data);for(let xt=0;xt<at.length;xt++){let St=at[xt].image[Te].image;Oe?Xe&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Te,xt+1,0,0,St.width,St.height,oe,ye,St.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Te,xt+1,ve,St.width,St.height,0,oe,ye,St.data)}}else{Oe?Xe&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,oe,ye,W[Te]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,ve,oe,ye,W[Te]);for(let xt=0;xt<at.length;xt++){let St=at[xt];Oe?Xe&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Te,xt+1,0,0,oe,ye,St.image[Te]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Te,xt+1,ve,oe,ye,St.image[Te])}}}b(S)&&S.mipmapsAutoUpdate===!0&&y(e.TEXTURE_CUBE_MAP),me.__version=$.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function pe(T,S,B,ie,$,me){let ge=n.convert(B.format,B.colorSpace),O=n.convert(B.type),K=A(B.internalFormat,ge,O,B.normalized,B.colorSpace),Me=r.get(S),P=r.get(B);if(P.__renderTarget=S,!Me.__hasExternalTextures){let W=Math.max(1,S.width>>me),te=Math.max(1,S.height>>me);$===e.TEXTURE_3D||$===e.TEXTURE_2D_ARRAY?i.texImage3D($,me,K,W,te,S.depth,0,ge,O,null):i.texImage2D($,me,K,W,te,0,ge,O,null)}i.bindFramebuffer(e.FRAMEBUFFER,T),Je(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ie,$,P.__webglTexture,0,ce(S)):($===e.TEXTURE_2D||$>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,ie,$,P.__webglTexture,me),i.bindFramebuffer(e.FRAMEBUFFER,null)}function fe(T,S,B){if(e.bindRenderbuffer(e.RENDERBUFFER,T),S.depthBuffer){let ie=S.depthTexture,$=ie&&ie.isDepthTexture?ie.type:null,me=v(S.stencilBuffer,$),ge=S.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Je(S)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ce(S),me,S.width,S.height):B?e.renderbufferStorageMultisample(e.RENDERBUFFER,ce(S),me,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,me,S.width,S.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,ge,e.RENDERBUFFER,T)}else{let ie=S.textures;for(let $=0;$<ie.length;$++){let me=ie[$],ge=n.convert(me.format,me.colorSpace),O=n.convert(me.type),K=A(me.internalFormat,ge,O,me.normalized,me.colorSpace);Je(S)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ce(S),K,S.width,S.height):B?e.renderbufferStorageMultisample(e.RENDERBUFFER,ce(S),K,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,K,S.width,S.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Ve(T,S,B){let ie=S.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(e.FRAMEBUFFER,T),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let $=r.get(S.depthTexture);$.__renderTarget=S;let me=ie?S.depthTexture.image[0]:S.depthTexture.image;(!$.__webglTexture||me.width!==S.width||me.height!==S.height)&&(me.width=S.width,me.height=S.height,S.depthTexture.needsUpdate=!0),ie?le(S.depthTexture,0):Ee(S.depthTexture,0);let ge=$.__webglTexture,O=ce(S),K=ie?e.TEXTURE_CUBE_MAP_POSITIVE_X+B:e.TEXTURE_2D,Me=S.depthTexture.format===ji?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(S.depthTexture.format===qi)Je(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Me,K,ge,0,O):e.framebufferTexture2D(e.FRAMEBUFFER,Me,K,ge,0);else if(S.depthTexture.format===ji)Je(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Me,K,ge,0,O):e.framebufferTexture2D(e.FRAMEBUFFER,Me,K,ge,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Le(T){let S=r.get(T),B=T.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==T.depthTexture){let ie=T.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),ie){let $=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,ie.removeEventListener("dispose",$)};ie.addEventListener("dispose",$),S.__depthDisposeCallback=$}S.__boundDepthTexture=ie}if(T.depthTexture&&!S.__autoAllocateDepthBuffer)if(B)for(let ie=0;ie<6;ie++)Ve(S.__webglFramebuffer[ie],T,ie);else T.texture.mipmaps.length>0?Ve(S.__webglFramebuffer[0],T,0):Ve(S.__webglFramebuffer,T,0);else if(B){S.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(i.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer[ie]),S.__webglDepthbuffer[ie]===void 0)S.__webglDepthbuffer[ie]=e.createRenderbuffer(),fe(S.__webglDepthbuffer[ie],T,!1);else{let $=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,me=S.__webglDepthbuffer[ie];e.bindRenderbuffer(e.RENDERBUFFER,me),e.framebufferRenderbuffer(e.FRAMEBUFFER,$,e.RENDERBUFFER,me)}}else if(T.texture.mipmaps.length>0?i.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer[0]):i.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=e.createRenderbuffer(),fe(S.__webglDepthbuffer,T,!1);else{let ie=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,$=S.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,$),e.framebufferRenderbuffer(e.FRAMEBUFFER,ie,e.RENDERBUFFER,$)}i.bindFramebuffer(e.FRAMEBUFFER,null)}function Ke(T,S,B){let ie=r.get(T);S!==void 0&&pe(ie.__webglFramebuffer,T,T.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),B!==void 0&&Le(T)}function U(T){let S=T.texture,B=r.get(T),ie=r.get(S);T.addEventListener("dispose",F),C(T);let $=T.textures,me=T.isWebGLCubeRenderTarget===!0,ge=$.length>1;if(ge||(ie.__webglTexture===void 0&&(ie.__webglTexture=e.createTexture()),ie.__version=S.version,s.memory.textures++),me){B.__webglFramebuffer=[];for(let O=0;O<6;O++)if(S.mipmaps.length>0){B.__webglFramebuffer[O]=[];for(let K=0;K<S.mipmaps.length;K++)B.__webglFramebuffer[O][K]=e.createFramebuffer()}else B.__webglFramebuffer[O]=e.createFramebuffer()}else{if(S.mipmaps.length>0){B.__webglFramebuffer=[];for(let O=0;O<S.mipmaps.length;O++)B.__webglFramebuffer[O]=e.createFramebuffer()}else B.__webglFramebuffer=e.createFramebuffer();if(ge)for(let O=0,K=$.length;O<K;O++){let Me=r.get($[O]);Me.__webglTexture===void 0&&(Me.__webglTexture=e.createTexture(),s.memory.textures++)}if(T.samples>0&&Je(T)===!1){B.__webglMultisampledFramebuffer=e.createFramebuffer(),B.__webglColorRenderbuffer=[],i.bindFramebuffer(e.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let O=0;O<$.length;O++){let K=$[O];B.__webglColorRenderbuffer[O]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,B.__webglColorRenderbuffer[O]);let Me=n.convert(K.format,K.colorSpace),P=n.convert(K.type),W=A(K.internalFormat,Me,P,K.normalized,K.colorSpace,T.isXRRenderTarget===!0),te=ce(T);e.renderbufferStorageMultisample(e.RENDERBUFFER,te,W,T.width,T.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+O,e.RENDERBUFFER,B.__webglColorRenderbuffer[O])}e.bindRenderbuffer(e.RENDERBUFFER,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=e.createRenderbuffer(),fe(B.__webglDepthRenderbuffer,T,!0)),i.bindFramebuffer(e.FRAMEBUFFER,null)}}if(me){i.bindTexture(e.TEXTURE_CUBE_MAP,ie.__webglTexture),$e(e.TEXTURE_CUBE_MAP,S);for(let O=0;O<6;O++)if(S.mipmaps.length>0)for(let K=0;K<S.mipmaps.length;K++)pe(B.__webglFramebuffer[O][K],T,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+O,K);else pe(B.__webglFramebuffer[O],T,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+O,0);b(S)?y(e.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),i.unbindTexture()}else if(ge){for(let O=0,K=$.length;O<K;O++){let Me=$[O],P=r.get(Me),W=e.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(W=T.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(W,P.__webglTexture),$e(W,Me),pe(B.__webglFramebuffer,T,Me,e.COLOR_ATTACHMENT0+O,W,0),b(Me)&&y(W)}i.unbindTexture()}else{let O=e.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(O=T.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(O,ie.__webglTexture),$e(O,S),S.mipmaps.length>0)for(let K=0;K<S.mipmaps.length;K++)pe(B.__webglFramebuffer[K],T,S,e.COLOR_ATTACHMENT0,O,K);else pe(B.__webglFramebuffer,T,S,e.COLOR_ATTACHMENT0,O,0);b(S)?y(O):S.mipmaps.length>0&&e.texParameteri(O,e.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),i.unbindTexture()}T.depthBuffer&&Le(T)}function mt(T){let S=T.textures;for(let B=0,ie=S.length;B<ie;B++){let $=S[B];if(b($)&&$.mipmapsAutoUpdate===!0){let me=w(T),ge=r.get($).__webglTexture;i.bindTexture(me,ge),y(me),i.unbindTexture()}}}let Be=[];function ct(T){if(T.samples>0){if(Je(T)===!1){let S=T.textures,B=T.width,ie=T.height,$=e.COLOR_BUFFER_BIT,me=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ge=r.get(T),O=S.length>1;if(O)for(let K=0;K<S.length;K++)i.bindFramebuffer(e.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+K,e.RENDERBUFFER,null),i.bindFramebuffer(e.FRAMEBUFFER,ge.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+K,e.TEXTURE_2D,null,0);i.bindFramebuffer(e.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),T.texture.mipmaps.length>0?i.bindFramebuffer(e.DRAW_FRAMEBUFFER,ge.__webglFramebuffer[0]):i.bindFramebuffer(e.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let K=0;K<S.length;K++){if(T.resolveDepthBuffer&&(T.depthBuffer&&($|=e.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&($|=e.STENCIL_BUFFER_BIT)),O){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,ge.__webglColorRenderbuffer[K]);let Me=r.get(S[K]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Me,0)}e.blitFramebuffer(0,0,B,ie,0,0,B,ie,$,e.NEAREST),l===!0&&(Be.length=0,Be.push(e.COLOR_ATTACHMENT0+K),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&Be.push(me),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Be))}if(i.bindFramebuffer(e.READ_FRAMEBUFFER,null),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),O)for(let K=0;K<S.length;K++){i.bindFramebuffer(e.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+K,e.RENDERBUFFER,ge.__webglColorRenderbuffer[K]);let Me=r.get(S[K]).__webglTexture;i.bindFramebuffer(e.FRAMEBUFFER,ge.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+K,e.TEXTURE_2D,Me,0)}i.bindFramebuffer(e.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&l){let S=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[S])}}}function ce(T){return Math.min(a.maxSamples,T.samples)}function Je(T){let S=r.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ae(T){let S=s.render.frame;c.get(T)!==S&&(c.set(T,S),T.update())}function Ne(T,S){let B=T.colorSpace,ie=T.format,$=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||B!==Un&&B!==oi&&(nt.getTransfer(B)===pt?(ie!==vi||$!==ti)&&ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):He("WebGLTextures: Unsupported texture color space:",B)),S}function _t(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(h.width=T.naturalWidth||T.width,h.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(h.width=T.displayWidth,h.height=T.displayHeight):(h.width=T.width,h.height=T.height),h}this.allocateTextureUnit=Y,this.resetTextureUnits=X,this.getTextureUnits=ee,this.setTextureUnits=Ie,this.setTexture2D=Ee,this.setTexture2DArray=Ue,this.setTexture3D=Pe,this.setTextureCube=le,this.rebindTextures=Ke,this.setupRenderTarget=U,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=ct,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=Je,this.dispose=G}function p_(e,t){function i(r,a=oi){let n,s=nt.getTransfer(a);if(r===ti)return e.UNSIGNED_BYTE;if(r===Xo)return e.UNSIGNED_SHORT_4_4_4_4;if(r===jo)return e.UNSIGNED_SHORT_5_5_5_1;if(r===Mc)return e.UNSIGNED_INT_5_9_9_9_REV;if(r===bc)return e.UNSIGNED_INT_10F_11F_11F_REV;if(r===xc)return e.BYTE;if(r===Sc)return e.SHORT;if(r===va)return e.UNSIGNED_SHORT;if(r===Wo)return e.INT;if(r===yi)return e.UNSIGNED_INT;if(r===gi)return e.FLOAT;if(r===xi)return e.HALF_FLOAT;if(r===Ec)return e.ALPHA;if(r===wc)return e.RGB;if(r===vi)return e.RGBA;if(r===qi)return e.DEPTH_COMPONENT;if(r===ji)return e.DEPTH_STENCIL;if(r===Tc)return e.RED;if(r===qo)return e.RED_INTEGER;if(r===cr)return e.RG;if(r===Yo)return e.RG_INTEGER;if(r===$o)return e.RGBA_INTEGER;if(r===Mn||r===bn||r===En||r===wn)if(s===pt)if(n=t.get("WEBGL_compressed_texture_s3tc_srgb"),n!==null){if(r===Mn)return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===bn)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===En)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===wn)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(n=t.get("WEBGL_compressed_texture_s3tc"),n!==null){if(r===Mn)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===bn)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===En)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===wn)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===so||r===oo||r===lo||r===ho)if(n=t.get("WEBGL_compressed_texture_pvrtc"),n!==null){if(r===so)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===oo)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===lo)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ho)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===co||r===uo||r===po||r===mo||r===fo||r===Ln||r===go)if(n=t.get("WEBGL_compressed_texture_etc"),n!==null){if(r===co||r===uo)return s===pt?n.COMPRESSED_SRGB8_ETC2:n.COMPRESSED_RGB8_ETC2;if(r===po)return s===pt?n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:n.COMPRESSED_RGBA8_ETC2_EAC;if(r===mo)return n.COMPRESSED_R11_EAC;if(r===fo)return n.COMPRESSED_SIGNED_R11_EAC;if(r===Ln)return n.COMPRESSED_RG11_EAC;if(r===go)return n.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===vo||r===_o||r===yo||r===xo||r===So||r===Mo||r===bo||r===Eo||r===wo||r===To||r===Ao||r===Ro||r===Co||r===Io)if(n=t.get("WEBGL_compressed_texture_astc"),n!==null){if(r===vo)return s===pt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:n.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===_o)return s===pt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:n.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===yo)return s===pt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:n.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===xo)return s===pt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:n.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===So)return s===pt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:n.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Mo)return s===pt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:n.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===bo)return s===pt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:n.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Eo)return s===pt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:n.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===wo)return s===pt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:n.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===To)return s===pt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:n.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ao)return s===pt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:n.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ro)return s===pt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:n.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Co)return s===pt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:n.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Io)return s===pt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:n.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Lo||r===Po||r===Do)if(n=t.get("EXT_texture_compression_bptc"),n!==null){if(r===Lo)return s===pt?n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:n.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Po)return n.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Do)return n.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Uo||r===No||r===Pn||r===Oo)if(n=t.get("EXT_texture_compression_rgtc"),n!==null){if(r===Uo)return n.COMPRESSED_RED_RGTC1_EXT;if(r===No)return n.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Pn)return n.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Oo)return n.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Gr?e.UNSIGNED_INT_24_8:e[r]!==void 0?e[r]:null}return{convert:i}}function y_(e,t){function i(f,m){f.matrixAutoUpdate===!0&&f.updateMatrix(),m.value.copy(f.matrix)}function r(f,m){m.color.getRGB(f.fogColor.value,Eu(e)),m.isFog?(f.fogNear.value=m.near,f.fogFar.value=m.far):m.isFogExp2&&(f.fogDensity.value=m.density)}function a(f,m,x,b,y){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?n(f,m):m.isMeshLambertMaterial?(n(f,m),m.envMap&&(f.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(n(f,m),d(f,m)):m.isMeshPhongMaterial?(n(f,m),c(f,m),m.envMap&&(f.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(n(f,m),u(f,m),m.isMeshPhysicalMaterial&&p(f,m,y)):m.isMeshMatcapMaterial?(n(f,m),g(f,m)):m.isMeshDepthMaterial?n(f,m):m.isMeshDistanceMaterial?(n(f,m),_(f,m)):m.isMeshNormalMaterial?n(f,m):m.isLineBasicMaterial?(s(f,m),m.isLineDashedMaterial&&o(f,m)):m.isPointsMaterial?l(f,m,x,b):m.isSpriteMaterial?h(f,m):m.isShadowMaterial?(f.color.value.copy(m.color),f.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function n(f,m){f.opacity.value=m.opacity,m.color&&f.diffuse.value.copy(m.color),m.emissive&&f.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(f.map.value=m.map,i(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,i(m.alphaMap,f.alphaMapTransform)),m.bumpMap&&(f.bumpMap.value=m.bumpMap,i(m.bumpMap,f.bumpMapTransform),f.bumpScale.value=m.bumpScale,m.side===Ot&&(f.bumpScale.value*=-1)),m.normalMap&&(f.normalMap.value=m.normalMap,i(m.normalMap,f.normalMapTransform),f.normalScale.value.copy(m.normalScale),m.side===Ot&&f.normalScale.value.negate()),m.displacementMap&&(f.displacementMap.value=m.displacementMap,i(m.displacementMap,f.displacementMapTransform),f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias),m.emissiveMap&&(f.emissiveMap.value=m.emissiveMap,i(m.emissiveMap,f.emissiveMapTransform)),m.specularMap&&(f.specularMap.value=m.specularMap,i(m.specularMap,f.specularMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest);let x=t.get(m),b=x.envMap,y=x.envMapRotation;b&&(f.envMap.value=b,f.envMapRotation.value.setFromMatrix4(__.makeRotationFromEuler(y)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&f.envMapRotation.value.premultiply(zu),f.reflectivity.value=m.reflectivity,f.ior.value=m.ior,f.refractionRatio.value=m.refractionRatio),m.lightMap&&(f.lightMap.value=m.lightMap,f.lightMapIntensity.value=m.lightMapIntensity,i(m.lightMap,f.lightMapTransform)),m.aoMap&&(f.aoMap.value=m.aoMap,f.aoMapIntensity.value=m.aoMapIntensity,i(m.aoMap,f.aoMapTransform))}function s(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,m.map&&(f.map.value=m.map,i(m.map,f.mapTransform))}function o(f,m){f.dashSize.value=m.dashSize,f.totalSize.value=m.dashSize+m.gapSize,f.scale.value=m.scale}function l(f,m,x,b){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.size.value=m.size*x,f.scale.value=b*.5,m.map&&(f.map.value=m.map,i(m.map,f.uvTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,i(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function h(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.rotation.value=m.rotation,m.map&&(f.map.value=m.map,i(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,i(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function c(f,m){f.specular.value.copy(m.specular),f.shininess.value=Math.max(m.shininess,1e-4)}function d(f,m){m.gradientMap&&(f.gradientMap.value=m.gradientMap)}function u(f,m){f.metalness.value=m.metalness,m.metalnessMap&&(f.metalnessMap.value=m.metalnessMap,i(m.metalnessMap,f.metalnessMapTransform)),f.roughness.value=m.roughness,m.roughnessMap&&(f.roughnessMap.value=m.roughnessMap,i(m.roughnessMap,f.roughnessMapTransform)),m.envMap&&(f.envMapIntensity.value=m.envMapIntensity)}function p(f,m,x){f.ior.value=m.ior,m.diffuseRoughness>0&&(f.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(f.diffuseRoughnessMap.value=m.diffuseRoughnessMap,i(m.diffuseRoughnessMap,f.diffuseRoughnessMapTransform))),m.sheen>0&&(f.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),f.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(f.sheenColorMap.value=m.sheenColorMap,i(m.sheenColorMap,f.sheenColorMapTransform)),m.sheenRoughnessMap&&(f.sheenRoughnessMap.value=m.sheenRoughnessMap,i(m.sheenRoughnessMap,f.sheenRoughnessMapTransform))),m.clearcoat>0&&(f.clearcoat.value=m.clearcoat,f.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(f.clearcoatMap.value=m.clearcoatMap,i(m.clearcoatMap,f.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,i(m.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(f.clearcoatNormalMap.value=m.clearcoatNormalMap,i(m.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ot&&f.clearcoatNormalScale.value.negate())),m.dispersion>0&&(f.dispersion.value=m.dispersion),m.retroreflectivity>0&&(f.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(f.iridescence.value=m.iridescence,f.iridescenceIOR.value=m.iridescenceIOR,f.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,f.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(f.iridescenceMap.value=m.iridescenceMap,i(m.iridescenceMap,f.iridescenceMapTransform)),m.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=m.iridescenceThicknessMap,i(m.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),m.transmission>0&&(f.transmission.value=m.transmission,f.transmissionSamplerMap.value=x.texture,f.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(f.transmissionMap.value=m.transmissionMap,i(m.transmissionMap,f.transmissionMapTransform)),f.thickness.value=m.thickness,m.thicknessMap&&(f.thicknessMap.value=m.thicknessMap,i(m.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=m.attenuationDistance,f.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(f.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(f.anisotropyMap.value=m.anisotropyMap,i(m.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=m.specularIntensity,f.specularColor.value.copy(m.specularColor),m.specularColorMap&&(f.specularColorMap.value=m.specularColorMap,i(m.specularColorMap,f.specularColorMapTransform)),m.specularIntensityMap&&(f.specularIntensityMap.value=m.specularIntensityMap,i(m.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,m){m.matcap&&(f.matcap.value=m.matcap)}function _(f,m){let x=t.get(m).light;f.referencePosition.value.setFromMatrixPosition(x.matrixWorld),f.nearDistance.value=x.shadow.camera.near,f.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function x_(e,t,i,r){let a={},n={};function s(x,b){let y=b.program;r.uniformBlockBinding(x,y,a[x.id])}function o(x,b){let y=a[x.id];y===void 0&&(g(x),y=l(x),a[x.id]=y,x.addEventListener("dispose",f));let w=b.program;r.updateUBOMapping(x,w);let A=t.render.frame;n[x.id]!==A&&(h(x),n[x.id]=A)}function l(x){let b=e.createBuffer(),y=x.__size,w=x.usage;return e.bindBuffer(e.UNIFORM_BUFFER,b),e.bufferData(e.UNIFORM_BUFFER,y,w),e.bindBuffer(e.UNIFORM_BUFFER,null),b}function h(x){let b=a[x.id],y=x.uniforms,w=x.__cache;e.bindBuffer(e.UNIFORM_BUFFER,b);for(let A=0,v=y.length;A<v;A++){let M=y[A];if(Array.isArray(M))for(let C=0,D=M.length;C<D;C++)c(M[C],A,C,w);else c(M,A,0,w)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function c(x,b,y,w){if(u(x,b,y,w)===!0){let A=x.__offset,v=x.value;if(Array.isArray(v)){let M=0;for(let C=0;C<v.length;C++){let D=v[C],L=_(D,!0);d(D,x.__data,M),M+=L.storage/Float32Array.BYTES_PER_ELEMENT}}else d(v,x.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,A,x.__data)}}function d(x,b,y){typeof x=="number"||typeof x=="boolean"?b[y]=x:x.isMatrix3?(b[y]=x.elements[0],b[y+1]=x.elements[1],b[y+2]=x.elements[2],b[y+3]=0,b[y+4]=x.elements[3],b[y+5]=x.elements[4],b[y+6]=x.elements[5],b[y+7]=0,b[y+8]=x.elements[6],b[y+9]=x.elements[7],b[y+10]=x.elements[8],b[y+11]=0):ArrayBuffer.isView(x)?b.set(x.subarray(0,b.length-y),y):x.toArray(b,y)}function u(x,b,y,w){let A=x.value,v=b+"_"+y;if(Array.isArray(A)){w[v]===void 0&&(w[v]=[]);let M=w[v],C=!1;for(let D=0;D<A.length;D++)p(A[D],M,D)===!0&&(C=!0);return C}return p(A,w,v)}function p(x,b,y){if(b[y]===void 0)return typeof x=="number"||typeof x=="boolean"?b[y]=x:ArrayBuffer.isView(x)?b[y]=x.slice():b[y]=x.clone(),!0;{let w=b[y];if(typeof x=="number"||typeof x=="boolean"){if(w!==x)return b[y]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(w.equals(x)===!1)return w.copy(x),!0}}return!1}function g(x){let b=x.uniforms,y=0,w=16;for(let v=0,M=b.length;v<M;v++){let C=Array.isArray(b[v])?b[v]:[b[v]];for(let D=0,L=C.length;D<L;D++){let F=C[D],j=Array.isArray(F.value)?F.value:[F.value],I=Array.isArray(b[v])||Array.isArray(F.value),G=y;for(let H=0,de=j.length;H<de;H++){let q=j[H],X=_(q,I),ee=y%w,Ie=ee%X.boundary,Y=ee+Ie;y+=Ie,Y!==0&&w-Y<X.storage&&(y+=w-Y),H===0&&(G=y),y+=X.storage}let J=F.type==="int"?Int32Array:F.type==="uint"?Uint32Array:Float32Array;F.__data=new J((y-G)/Float32Array.BYTES_PER_ELEMENT),F.__offset=G}}let A=y%w;return A>0&&(y+=w-A),x.__size=y,x.__cache={},this}function _(x,b){let y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=16,y.storage=48):x.isMatrix4?(y.boundary=16,y.storage=64):x.isTexture?ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(y.boundary=16,y.storage=x.byteLength):ze("WebGLRenderer: Unsupported uniform value type.",x),b===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function f(x){let b=x.target;b.removeEventListener("dispose",f),e.deleteBuffer(a[b.id]),delete a[b.id],delete n[b.id]}function m(){for(let x in a)e.deleteBuffer(a[x]);a={},n={}}return{bind:s,update:o,dispose:m}}function M_(){return pi===null&&(pi=new Kp(S_,16,16,cr,xi),pi.name="DFG_LUT",pi.minFilter=jt,pi.magFilter=jt,pi.wrapS=li,pi.wrapT=li,pi.generateMipmaps=!1,pi.needsUpdate=!0),pi}var Hd,$l,Vd,Sn,Wd,la,hr,Ot,Ii,Dr,ua,ma,Jl,Zl,Xd,Cr,jd,qd,Yd,$d,Jd,Zd,Kd,Qd,cc,uc,ep,tp,ip,rp,ap,np,sp,op,lp,Zs,Ks,Qs,fa,eo,to,io,ro,dc,hp,cp,Li,pc,mc,fc,kn,gc,vc,_c,yc,kr,ga,vs,_s,ao,li,no,Nt,up,Ha,jt,ys,fi,ti,xc,Sc,va,Wo,yi,gi,xi,Xo,jo,Gr,Mc,bc,Ec,wc,vi,qi,ji,Tc,qo,cr,Yo,$o,Mn,bn,En,wn,so,oo,lo,ho,co,uo,po,mo,fo,Ln,go,vo,_o,yo,xo,So,Mo,bo,Eo,wo,To,Ao,Ro,Co,Io,Lo,Po,Do,Uo,No,Pn,Oo,Dn,Fo,xs,Kl,Ql,eh,th,dp,ih,pp,oi,Wt,Un,Nn,pt,Ss,mp,fp,gp,vp,Ac,_p,yp,Rc,Cc,xp,rh,hi,On,ah,Hr,wp,dr,Bt,An,Bo,Nr,ne,Yt,Or,R,bs,sh,Fr,qe,Es,oh,lh,nt,fr,Lp,Pp,Zo,Dp,Ts,Kt,Br,gt,Up,_i,Lc,Np,lr,rt,gr,ai,Op,Fp,ki,Va,$t,hh,ch,ya,Dc,Bp,uh,vr,wi,Wa,ia,zp,kp,dh,ph,mh,fh,Gp,_r,As,ui,sr,Hp,Rs,Uc,Gi,Xa,Ye,zt,Nc,ni,Ti,Is,Ai,yr,xr,gh,Ls,Ps,Ds,Us,Ns,Os,Ir,Yi,Ri,si,ja,Sr,Mr,br,Hi,Vi,ir,ra,qa,Ya,rr,ey,Ct,$a,Wp,ci,Oc,Fc,ke,Xp,aa,Bs,$i,jp,Qt,zs,Er,Jt,na,Dt,Mt,ty,ks,qp,Yp,Xi,$p,qr,iy,ry,ay,ny,sy,oy,ly,hy,cy,uy,dy,py,my,fy,Ci,Gs,Ja,Za,Gn,Jp,vh,ar,Ka,_h,Qa,en,tn,Hs,rn,yh,an,qt,gy,vy,_y,yy,xy,Sy,My,by,Ey,Kp,wy,Ty,Ay,Ry,Cy,Iy,Ly,Py,nr,Qp,sn,xa,xh,zc,em,Dy,Uy,Ny,Oy,Fy,By,zy,ky,Gy,Hy,Vy,Wy,Ko,Fn,Bn,Sh,sa,on,Vs,Mh,tm,bh,Eh,Gc,im,wh,zo,hn,cn,Hc,Vc,Wc,Vr,Xc,jc,Hn,rm,am,Jc,nm,Ea,sm,un,dn,Ws,pn,om,Si,Qo,lm,Ah,Rh,Xs,js,qs,hm,tu,vm,iu,_m,ru,au,nu,zn,ym,Ih,su,Fm,or,Bm,zm,Gm,Hm,Vm,tl,Wm,Xm,wa,qm,Ym,$m,Jm,Zm,Xy,Qm,ef,tf,Zt,rf,af,nf,Ta,sf,of,lf,hf,Mi,Aa,df,pf,mf,Tu,Ra,ff,Ys,gf,vf,il,Tr,_f,Au,jy,qy,Yy,vn,_n,di,rl,Wi,zh,kh,ei,yf,$y,Jy,Zy,Ar,Rr,Ho,xf,Ky,Qy,ex,tx,ix,rx,ax,nx,sx,al,Sf,nl,Mf,bf,Ef,wf,Tf,Af,Rf,Cf,At,ox,lx,zr,hx,cx,ux,dx,px,mx,fx,gx,vx,_x,yx,xx,Sx,Mx,bx,Ex,wx,Tx,Ax,Rx,Cx,Ix,Lx,Pf,Df,Uf,Nf,Of,Ff,Bf,zf,kf,Gf,Hf,Vf,Wf,Xf,jf,qf,Yf,$f,Jf,Zf,Kf,Qf,eg,tg,ig,rg,ag,ng,sg,og,lg,hg,cg,ug,dg,pg,mg,fg,gg,vg,_g,yg,xg,Sg,Mg,bg,Eg,wg,Tg,Ag,Rg,Cg,Ig,Lg,Pg,Dg,Ug,Ng,Og,Fg,Bg,zg,kg,Gg,Hg,Vg,Wg,Xg,jg,qg,Yg,$g,Jg,Zg,Kg,Qg,e0,t0,i0,r0,a0,n0,s0,o0,l0,h0,c0,u0,d0,p0,m0,f0,g0,v0,_0,y0,x0,S0,M0,b0,E0,w0,T0,A0,R0,C0,I0,L0,P0,D0,U0,N0,O0,F0,B0,z0,k0,G0,H0,V0,W0,X0,j0,q0,Y0,$0,J0,Z0,K0,Q0,e1,t1,i1,r1,a1,n1,s1,o1,l1,h1,c1,Ze,Se,mi,yn,u1,Cu,sl,Hh,v1,_1,Iu,Lu,y1,x1,S1,Vh,P1,Du,Uu,Nu,Ou,Fu,Bu,qh,Yh,$h,Jh,Zh,xv,Sv,Mv,$s,In,Ev,wv,ec,Cv,xn,Nv,Fv,zv,Gv,Vv,jv,qv,Yv,i_,s_,o_,l_,h_,hc,oa,Js,m_,f_,g_,v_,__,zu,S_,pi,ku,Gu=ea(()=>{Hd=0,$l=1,Vd=2,Sn=1,Wd=2,la=3,hr=0,Ot=1,Ii=2,Dr=0,ua=1,ma=2,Jl=3,Zl=4,Xd=5,Cr=100,jd=101,qd=102,Yd=103,$d=104,Jd=200,Zd=201,Kd=202,Qd=203,cc=204,uc=205,ep=206,tp=207,ip=208,rp=209,ap=210,np=211,sp=212,op=213,lp=214,Zs=0,Ks=1,Qs=2,fa=3,eo=4,to=5,io=6,ro=7,dc=0,hp=1,cp=2,Li=0,pc=1,mc=2,fc=3,kn=4,gc=5,vc=6,_c=7,yc=300,kr=301,ga=302,vs=303,_s=304,ao=1e3,li=1001,no=1002,Nt=1003,up=1004,Ha=1005,jt=1006,ys=1007,fi=1008,ti=1009,xc=1010,Sc=1011,va=1012,Wo=1013,yi=1014,gi=1015,xi=1016,Xo=1017,jo=1018,Gr=1020,Mc=35902,bc=35899,Ec=1021,wc=1022,vi=1023,qi=1026,ji=1027,Tc=1028,qo=1029,cr=1030,Yo=1031,$o=1033,Mn=33776,bn=33777,En=33778,wn=33779,so=35840,oo=35841,lo=35842,ho=35843,co=36196,uo=37492,po=37496,mo=37488,fo=37489,Ln=37490,go=37491,vo=37808,_o=37809,yo=37810,xo=37811,So=37812,Mo=37813,bo=37814,Eo=37815,wo=37816,To=37817,Ao=37818,Ro=37819,Co=37820,Io=37821,Lo=36492,Po=36494,Do=36495,Uo=36283,No=36284,Pn=36285,Oo=36286,Dn=2300,Fo=2301,xs=2302,Kl=2303,Ql=2400,eh=2401,th=2402,dp=3200,ih=0,pp=1,oi="",Wt="srgb",Un="srgb-linear",Nn="linear",pt="srgb",Ss=7680,mp=519,fp=512,gp=513,vp=514,Ac=515,_p=516,yp=517,Rc=518,Cc=519,xp=35044,rh="300 es",hi=2e3,On=2001;ah={},Hr=null;wp={[Zs]:Zs,[Qs]:io,[eo]:eo,[fa]:to,[Ks]:Ks,[io]:Qs,[ro]:ro,[to]:fa},dr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let a=0,n=r.length;a<n;a++)r[a].call(this,e);e.target=null}}},Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],An=Math.PI/180,Bo=180/Math.PI;ne=(Nr=class{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let i=this.x,r=this.y,a=t.elements;return this.x=a[0]*i+a[3]*r+a[6],this.y=a[1]*i+a[4]*r+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=it(this.x,t.x,i.x),this.y=it(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=it(this.x,t,i),this.y=it(this.y,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(it(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos(it(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){let r=Math.cos(i),a=Math.sin(i),n=this.x-t.x,s=this.y-t.y;return this.x=n*r-s*a+t.x,this.y=n*a+s*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Nr.prototype.isVector2=!0,Nr),Yt=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,n,s){let o=i[r+0],l=i[r+1],h=i[r+2],c=i[r+3],d=a[n+0],u=a[n+1],p=a[n+2],g=a[n+3];if(c!==g||o!==d||l!==u||h!==p){let _=o*d+l*u+h*p+c*g;_<0&&(d=-d,u=-u,p=-p,g=-g,_=-_);let f=1-s;if(_<.9995){let m=Math.acos(_),x=Math.sin(m);f=Math.sin(f*m)/x,s=Math.sin(s*m)/x,o=o*f+d*s,l=l*f+u*s,h=h*f+p*s,c=c*f+g*s}else{o=o*f+d*s,l=l*f+u*s,h=h*f+p*s,c=c*f+g*s;let m=1/Math.sqrt(o*o+l*l+h*h+c*c);o*=m,l*=m,h*=m,c*=m}}e[t]=o,e[t+1]=l,e[t+2]=h,e[t+3]=c}static multiplyQuaternionsFlat(e,t,i,r,a,n){let s=i[r],o=i[r+1],l=i[r+2],h=i[r+3],c=a[n],d=a[n+1],u=a[n+2],p=a[n+3];return e[t]=s*p+h*c+o*u-l*d,e[t+1]=o*p+h*d+l*c-s*u,e[t+2]=l*p+h*u+s*d-o*c,e[t+3]=h*p-s*c-o*d-l*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,a=e._z,n=e._order,s=Math.cos,o=Math.sin,l=s(i/2),h=s(r/2),c=s(a/2),d=o(i/2),u=o(r/2),p=o(a/2);switch(n){case"XYZ":this._x=d*h*c+l*u*p,this._y=l*u*c-d*h*p,this._z=l*h*p+d*u*c,this._w=l*h*c-d*u*p;break;case"YXZ":this._x=d*h*c+l*u*p,this._y=l*u*c-d*h*p,this._z=l*h*p-d*u*c,this._w=l*h*c+d*u*p;break;case"ZXY":this._x=d*h*c-l*u*p,this._y=l*u*c+d*h*p,this._z=l*h*p+d*u*c,this._w=l*h*c-d*u*p;break;case"ZYX":this._x=d*h*c-l*u*p,this._y=l*u*c+d*h*p,this._z=l*h*p-d*u*c,this._w=l*h*c+d*u*p;break;case"YZX":this._x=d*h*c+l*u*p,this._y=l*u*c+d*h*p,this._z=l*h*p-d*u*c,this._w=l*h*c-d*u*p;break;case"XZY":this._x=d*h*c-l*u*p,this._y=l*u*c-d*h*p,this._z=l*h*p+d*u*c,this._w=l*h*c+d*u*p;break;default:ze("Quaternion: .setFromEuler() encountered an unknown order: "+n)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],a=t[8],n=t[1],s=t[5],o=t[9],l=t[2],h=t[6],c=t[10],d=i+s+c;if(d>0){let u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(h-o)*u,this._y=(a-l)*u,this._z=(n-r)*u}else if(i>s&&i>c){let u=2*Math.sqrt(1+i-s-c);this._w=(h-o)/u,this._x=.25*u,this._y=(r+n)/u,this._z=(a+l)/u}else if(s>c){let u=2*Math.sqrt(1+s-i-c);this._w=(a-l)/u,this._x=(r+n)/u,this._y=.25*u,this._z=(o+h)/u}else{let u=2*Math.sqrt(1+c-i-s);this._w=(n-r)/u,this._x=(a+l)/u,this._y=(o+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,a=e._z,n=e._w,s=t._x,o=t._y,l=t._z,h=t._w;return this._x=i*h+n*s+r*l-a*o,this._y=r*h+n*o+a*s-i*l,this._z=a*h+n*l+i*o-r*s,this._w=n*h-i*s-r*o-a*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,a=e._z,n=e._w,s=this.dot(e);s<0&&(i=-i,r=-r,a=-a,n=-n,s=-s);let o=1-t;if(s<.9995){let l=Math.acos(s),h=Math.sin(l);o=Math.sin(o*l)/h,t=Math.sin(t*l)/h,this._x=this._x*o+i*t,this._y=this._y*o+r*t,this._z=this._z*o+a*t,this._w=this._w*o+n*t,this._onChangeCallback()}else this._x=this._x*o+i*t,this._y=this._y*o+r*t,this._z=this._z*o+a*t,this._w=this._w*o+n*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=(Or=class{constructor(t=0,i=0,r=0){this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(sh.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(sh.setFromAxisAngle(t,i))}applyMatrix3(t){let i=this.x,r=this.y,a=this.z,n=t.elements;return this.x=n[0]*i+n[3]*r+n[6]*a,this.y=n[1]*i+n[4]*r+n[7]*a,this.z=n[2]*i+n[5]*r+n[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let i=this.x,r=this.y,a=this.z,n=t.elements,s=1/(n[3]*i+n[7]*r+n[11]*a+n[15]);return this.x=(n[0]*i+n[4]*r+n[8]*a+n[12])*s,this.y=(n[1]*i+n[5]*r+n[9]*a+n[13])*s,this.z=(n[2]*i+n[6]*r+n[10]*a+n[14])*s,this}applyQuaternion(t){let i=this.x,r=this.y,a=this.z,n=t.x,s=t.y,o=t.z,l=t.w,h=2*(s*a-o*r),c=2*(o*i-n*a),d=2*(n*r-s*i);return this.x=i+l*h+s*d-o*c,this.y=r+l*c+o*h-n*d,this.z=a+l*d+n*c-s*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let i=this.x,r=this.y,a=this.z,n=t.elements;return this.x=n[0]*i+n[4]*r+n[8]*a,this.y=n[1]*i+n[5]*r+n[9]*a,this.z=n[2]*i+n[6]*r+n[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=it(this.x,t.x,i.x),this.y=it(this.y,t.y,i.y),this.z=it(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=it(this.x,t,i),this.y=it(this.y,t,i),this.z=it(this.z,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(it(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){let r=t.x,a=t.y,n=t.z,s=i.x,o=i.y,l=i.z;return this.x=a*l-n*o,this.y=n*s-r*l,this.z=r*o-a*s,this}projectOnVector(t){let i=t.lengthSq();if(i===0)return this.set(0,0,0);let r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return bs.copy(this).projectOnVector(t),this.sub(bs)}reflect(t){return this.sub(bs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos(it(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y,a=this.z-t.z;return i*i+r*r+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){let a=Math.sin(i)*t;return this.x=a*Math.sin(r),this.y=Math.cos(i)*t,this.z=a*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){let i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=a,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Or.prototype.isVector3=!0,Or),bs=new R,sh=new Yt,qe=(Fr=class{constructor(t,i,r,a,n,s,o,l,h){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,a,n,s,o,l,h)}set(t,i,r,a,n,s,o,l,h){let c=this.elements;return c[0]=t,c[1]=a,c[2]=o,c[3]=i,c[4]=n,c[5]=l,c[6]=r,c[7]=s,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,a=i.elements,n=this.elements,s=r[0],o=r[3],l=r[6],h=r[1],c=r[4],d=r[7],u=r[2],p=r[5],g=r[8],_=a[0],f=a[3],m=a[6],x=a[1],b=a[4],y=a[7],w=a[2],A=a[5],v=a[8];return n[0]=s*_+o*x+l*w,n[3]=s*f+o*b+l*A,n[6]=s*m+o*y+l*v,n[1]=h*_+c*x+d*w,n[4]=h*f+c*b+d*A,n[7]=h*m+c*y+d*v,n[2]=u*_+p*x+g*w,n[5]=u*f+p*b+g*A,n[8]=u*m+p*y+g*v,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],h=t[7],c=t[8];return i*s*c-i*o*h-r*n*c+r*o*l+a*n*h-a*s*l}invert(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],h=t[7],c=t[8],d=c*s-o*h,u=o*l-c*n,p=h*n-s*l,g=i*d+r*u+a*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=d*_,t[1]=(a*h-c*r)*_,t[2]=(o*r-a*s)*_,t[3]=u*_,t[4]=(c*i-a*l)*_,t[5]=(a*n-o*i)*_,t[6]=p*_,t[7]=(r*l-h*i)*_,t[8]=(s*i-r*n)*_,this}transpose(){let t,i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,a,n,s,o){let l=Math.cos(n),h=Math.sin(n);return this.set(r*l,r*h,-r*(l*s+h*o)+s+t,-a*h,a*l,-a*(-h*s+l*o)+o+i,0,0,1),this}scale(t,i){return Tn("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Es.makeScale(t,i)),this}rotate(t){return Tn("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Es.makeRotation(-t)),this}translate(t,i){return Tn("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Es.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){let i=this.elements,r=t.elements;for(let a=0;a<9;a++)if(i[a]!==r[a])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Fr.prototype.isMatrix3=!0,Fr),Es=new qe,oh=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),lh=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);nt=Ip();Lp=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{fr===void 0&&(fr=_a("canvas")),fr.width=e.width,fr.height=e.height;let r=fr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=fr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=_a("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let n=0;n<a.length;n++)a[n]=Pi(a[n]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Pi(t[i]/255)*255):t[i]=Pi(t[i]);return{data:t,width:e.width,height:e.height}}else return ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Pp=0,Zo=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Pp++}),this.uuid=jr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let n=0,s=r.length;n<s;n++)r[n].isDataTexture?a.push(ws(r[n].image)):a.push(ws(r[n]))}else a=ws(r);i.url=a}return t||(e.images[this.uuid]=i),i}};Dp=0,Ts=new R,Kt=class Rn extends dr{constructor(t=Rn.DEFAULT_IMAGE,i=Rn.DEFAULT_MAPPING,r=li,a=li,n=jt,s=fi,o=vi,l=ti,h=Rn.DEFAULT_ANISOTROPY,c=oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dp++}),this.uuid=jr(),this.name="",this.source=new Zo(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=n,this.minFilter=s,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Ts).x}get height(){return this.source.getSize(Ts).y}get depth(){return this.source.getSize(Ts).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let i in t){let r=t[i];if(r===void 0){ze(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}let a=this[i];if(a===void 0){ze(`Texture.setValues(): property '${i}' does not exist.`);continue}a&&r&&a.isVector2&&r.isVector2||a&&r&&a.isVector3&&r.isVector3||a&&r&&a.isMatrix3&&r.isMatrix3?a.copy(r):this[i]=r}}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==yc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ao:t.x=t.x-Math.floor(t.x);break;case li:t.x=t.x<0?0:1;break;case no:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ao:t.y=t.y-Math.floor(t.y);break;case li:t.y=t.y<0?0:1;break;case no:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Kt.DEFAULT_IMAGE=null;Kt.DEFAULT_MAPPING=yc;Kt.DEFAULT_ANISOTROPY=1;gt=(Br=class{constructor(t=0,i=0,r=0,a=1){this.x=t,this.y=i,this.z=r,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,a){return this.x=t,this.y=i,this.z=r,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let i=this.x,r=this.y,a=this.z,n=this.w,s=t.elements;return this.x=s[0]*i+s[4]*r+s[8]*a+s[12]*n,this.y=s[1]*i+s[5]*r+s[9]*a+s[13]*n,this.z=s[2]*i+s[6]*r+s[10]*a+s[14]*n,this.w=s[3]*i+s[7]*r+s[11]*a+s[15]*n,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,a,n,s=t.elements,o=s[0],l=s[4],h=s[8],c=s[1],d=s[5],u=s[9],p=s[2],g=s[6],_=s[10];if(Math.abs(l-c)<.01&&Math.abs(h-p)<.01&&Math.abs(u-g)<.01){if(Math.abs(l+c)<.1&&Math.abs(h+p)<.1&&Math.abs(u+g)<.1&&Math.abs(o+d+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;let m=(o+1)/2,x=(d+1)/2,b=(_+1)/2,y=(l+c)/4,w=(h+p)/4,A=(u+g)/4;return m>x&&m>b?m<.01?(r=0,a=.707106781,n=.707106781):(r=Math.sqrt(m),a=y/r,n=w/r):x>b?x<.01?(r=.707106781,a=0,n=.707106781):(a=Math.sqrt(x),r=y/a,n=A/a):b<.01?(r=.707106781,a=.707106781,n=0):(n=Math.sqrt(b),r=w/n,a=A/n),this.set(r,a,n,i),this}let f=Math.sqrt((g-u)*(g-u)+(h-p)*(h-p)+(c-l)*(c-l));return Math.abs(f)<.001&&(f=1),this.x=(g-u)/f,this.y=(h-p)/f,this.z=(c-l)/f,this.w=Math.acos((o+d+_-1)/2),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=it(this.x,t.x,i.x),this.y=it(this.y,t.y,i.y),this.z=it(this.z,t.z,i.z),this.w=it(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=it(this.x,t,i),this.y=it(this.y,t,i),this.z=it(this.z,t,i),this.w=it(this.w,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(it(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Br.prototype.isVector4=!0,Br),Up=class extends dr{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t),this.textures=[];let r=i.count;for(let a=0;a<r;a++)this.textures[a]=new Kt({width:e,height:t,depth:i.depth}),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Zo(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},_i=class extends Up{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Lc=class extends Kt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Np=class extends Kt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},rt=(lr=class{constructor(t,i,r,a,n,s,o,l,h,c,d,u,p,g,_,f){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,a,n,s,o,l,h,c,d,u,p,g,_,f)}set(t,i,r,a,n,s,o,l,h,c,d,u,p,g,_,f){let m=this.elements;return m[0]=t,m[4]=i,m[8]=r,m[12]=a,m[1]=n,m[5]=s,m[9]=o,m[13]=l,m[2]=h,m[6]=c,m[10]=d,m[14]=u,m[3]=p,m[7]=g,m[11]=_,m[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lr().fromArray(this.elements)}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){let i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){let i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return this.determinantAffine()===0?(t.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let i=this.elements,r=t.elements,a=1/gr.setFromMatrixColumn(t,0).length(),n=1/gr.setFromMatrixColumn(t,1).length(),s=1/gr.setFromMatrixColumn(t,2).length();return i[0]=r[0]*a,i[1]=r[1]*a,i[2]=r[2]*a,i[3]=0,i[4]=r[4]*n,i[5]=r[5]*n,i[6]=r[6]*n,i[7]=0,i[8]=r[8]*s,i[9]=r[9]*s,i[10]=r[10]*s,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){let i=this.elements,r=t.x,a=t.y,n=t.z,s=Math.cos(r),o=Math.sin(r),l=Math.cos(a),h=Math.sin(a),c=Math.cos(n),d=Math.sin(n);if(t.order==="XYZ"){let u=s*c,p=s*d,g=o*c,_=o*d;i[0]=l*c,i[4]=-l*d,i[8]=h,i[1]=p+g*h,i[5]=u-_*h,i[9]=-o*l,i[2]=_-u*h,i[6]=g+p*h,i[10]=s*l}else if(t.order==="YXZ"){let u=l*c,p=l*d,g=h*c,_=h*d;i[0]=u+_*o,i[4]=g*o-p,i[8]=s*h,i[1]=s*d,i[5]=s*c,i[9]=-o,i[2]=p*o-g,i[6]=_+u*o,i[10]=s*l}else if(t.order==="ZXY"){let u=l*c,p=l*d,g=h*c,_=h*d;i[0]=u-_*o,i[4]=-s*d,i[8]=g+p*o,i[1]=p+g*o,i[5]=s*c,i[9]=_-u*o,i[2]=-s*h,i[6]=o,i[10]=s*l}else if(t.order==="ZYX"){let u=s*c,p=s*d,g=o*c,_=o*d;i[0]=l*c,i[4]=g*h-p,i[8]=u*h+_,i[1]=l*d,i[5]=_*h+u,i[9]=p*h-g,i[2]=-h,i[6]=o*l,i[10]=s*l}else if(t.order==="YZX"){let u=s*l,p=s*h,g=o*l,_=o*h;i[0]=l*c,i[4]=_-u*d,i[8]=g*d+p,i[1]=d,i[5]=s*c,i[9]=-o*c,i[2]=-h*c,i[6]=p*d+g,i[10]=u-_*d}else if(t.order==="XZY"){let u=s*l,p=s*h,g=o*l,_=o*h;i[0]=l*c,i[4]=-d,i[8]=h*c,i[1]=u*d+_,i[5]=s*c,i[9]=p*d-g,i[2]=g*d-p,i[6]=o*c,i[10]=_*d+u}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Op,t,Fp)}lookAt(t,i,r){let a=this.elements;return $t.subVectors(t,i),$t.lengthSq()===0&&($t.z=1),$t.normalize(),ki.crossVectors(r,$t),ki.lengthSq()===0&&(Math.abs(r.z)===1?$t.x+=1e-4:$t.z+=1e-4,$t.normalize(),ki.crossVectors(r,$t)),ki.normalize(),Va.crossVectors($t,ki),a[0]=ki.x,a[4]=Va.x,a[8]=$t.x,a[1]=ki.y,a[5]=Va.y,a[9]=$t.y,a[2]=ki.z,a[6]=Va.z,a[10]=$t.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,a=i.elements,n=this.elements,s=r[0],o=r[4],l=r[8],h=r[12],c=r[1],d=r[5],u=r[9],p=r[13],g=r[2],_=r[6],f=r[10],m=r[14],x=r[3],b=r[7],y=r[11],w=r[15],A=a[0],v=a[4],M=a[8],C=a[12],D=a[1],L=a[5],F=a[9],j=a[13],I=a[2],G=a[6],J=a[10],H=a[14],de=a[3],q=a[7],X=a[11],ee=a[15];return n[0]=s*A+o*D+l*I+h*de,n[4]=s*v+o*L+l*G+h*q,n[8]=s*M+o*F+l*J+h*X,n[12]=s*C+o*j+l*H+h*ee,n[1]=c*A+d*D+u*I+p*de,n[5]=c*v+d*L+u*G+p*q,n[9]=c*M+d*F+u*J+p*X,n[13]=c*C+d*j+u*H+p*ee,n[2]=g*A+_*D+f*I+m*de,n[6]=g*v+_*L+f*G+m*q,n[10]=g*M+_*F+f*J+m*X,n[14]=g*C+_*j+f*H+m*ee,n[3]=x*A+b*D+y*I+w*de,n[7]=x*v+b*L+y*G+w*q,n[11]=x*M+b*F+y*J+w*X,n[15]=x*C+b*j+y*H+w*ee,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[4],a=t[8],n=t[12],s=t[1],o=t[5],l=t[9],h=t[13],c=t[2],d=t[6],u=t[10],p=t[14],g=t[3],_=t[7],f=t[11],m=t[15],x=l*p-h*u,b=o*p-h*d,y=o*u-l*d,w=s*p-h*c,A=s*u-l*c,v=s*d-o*c;return i*(_*x-f*b+m*y)-r*(g*x-f*w+m*A)+a*(g*b-_*w+m*v)-n*(g*y-_*A+f*v)}determinantAffine(){let t=this.elements,i=t[0],r=t[4],a=t[8],n=t[1],s=t[5],o=t[9],l=t[2],h=t[6],c=t[10];return i*(s*c-o*h)-r*(n*c-o*l)+a*(n*h-s*l)}transpose(){let t=this.elements,i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){let a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=i,a[14]=r),this}invert(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],h=t[7],c=t[8],d=t[9],u=t[10],p=t[11],g=t[12],_=t[13],f=t[14],m=t[15],x=i*o-r*s,b=i*l-a*s,y=i*h-n*s,w=r*l-a*o,A=r*h-n*o,v=a*h-n*l,M=c*_-d*g,C=c*f-u*g,D=c*m-p*g,L=d*f-u*_,F=d*m-p*_,j=u*m-p*f,I=x*j-b*F+y*L+w*D-A*C+v*M;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let G=1/I;return t[0]=(o*j-l*F+h*L)*G,t[1]=(a*F-r*j-n*L)*G,t[2]=(_*v-f*A+m*w)*G,t[3]=(u*A-d*v-p*w)*G,t[4]=(l*D-s*j-h*C)*G,t[5]=(i*j-a*D+n*C)*G,t[6]=(f*y-g*v-m*b)*G,t[7]=(c*v-u*y+p*b)*G,t[8]=(s*F-o*D+h*M)*G,t[9]=(r*D-i*F-n*M)*G,t[10]=(g*A-_*y+m*x)*G,t[11]=(d*y-c*A-p*x)*G,t[12]=(o*C-s*L-l*M)*G,t[13]=(i*L-r*C+a*M)*G,t[14]=(_*b-g*w-f*x)*G,t[15]=(c*w-d*b+u*x)*G,this}scale(t){let i=this.elements,r=t.x,a=t.y,n=t.z;return i[0]*=r,i[4]*=a,i[8]*=n,i[1]*=r,i[5]*=a,i[9]*=n,i[2]*=r,i[6]*=a,i[10]*=n,i[3]*=r,i[7]*=a,i[11]*=n,this}getMaxScaleOnAxis(){let t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,a))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){let i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){let r=Math.cos(i),a=Math.sin(i),n=1-r,s=t.x,o=t.y,l=t.z,h=n*s,c=n*o;return this.set(h*s+r,h*o-a*l,h*l+a*o,0,h*o+a*l,c*o+r,c*l-a*s,0,h*l-a*o,c*l+a*s,n*l*l+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,a,n,s){return this.set(1,r,n,0,t,1,s,0,i,a,1,0,0,0,0,1),this}compose(t,i,r){let a=this.elements,n=i._x,s=i._y,o=i._z,l=i._w,h=n+n,c=s+s,d=o+o,u=n*h,p=n*c,g=n*d,_=s*c,f=s*d,m=o*d,x=l*h,b=l*c,y=l*d,w=r.x,A=r.y,v=r.z;return a[0]=(1-(_+m))*w,a[1]=(p+y)*w,a[2]=(g-b)*w,a[3]=0,a[4]=(p-y)*A,a[5]=(1-(u+m))*A,a[6]=(f+x)*A,a[7]=0,a[8]=(g+b)*v,a[9]=(f-x)*v,a[10]=(1-(u+_))*v,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,i,r){let a=this.elements;t.x=a[12],t.y=a[13],t.z=a[14];let n=this.determinantAffine();if(n===0)return r.set(1,1,1),i.identity(),this;let s=gr.set(a[0],a[1],a[2]).length(),o=gr.set(a[4],a[5],a[6]).length(),l=gr.set(a[8],a[9],a[10]).length();n<0&&(s=-s),ai.copy(this);let h=1/s,c=1/o,d=1/l;return ai.elements[0]*=h,ai.elements[1]*=h,ai.elements[2]*=h,ai.elements[4]*=c,ai.elements[5]*=c,ai.elements[6]*=c,ai.elements[8]*=d,ai.elements[9]*=d,ai.elements[10]*=d,i.setFromRotationMatrix(ai),r.x=s,r.y=o,r.z=l,this}makePerspective(t,i,r,a,n,s,o=hi,l=!1){let h=this.elements,c=2*n/(i-t),d=2*n/(r-a),u=(i+t)/(i-t),p=(r+a)/(r-a),g,_;if(l)g=n/(s-n),_=s*n/(s-n);else if(o===hi)g=-(s+n)/(s-n),_=-2*s*n/(s-n);else if(o===On)g=-s/(s-n),_=-s*n/(s-n);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return h[0]=c,h[4]=0,h[8]=u,h[12]=0,h[1]=0,h[5]=d,h[9]=p,h[13]=0,h[2]=0,h[6]=0,h[10]=g,h[14]=_,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,i,r,a,n,s,o=hi,l=!1){let h=this.elements,c=2/(i-t),d=2/(r-a),u=-(i+t)/(i-t),p=-(r+a)/(r-a),g,_;if(l)g=1/(s-n),_=s/(s-n);else if(o===hi)g=-2/(s-n),_=-(s+n)/(s-n);else if(o===On)g=-1/(s-n),_=-n/(s-n);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return h[0]=c,h[4]=0,h[8]=0,h[12]=u,h[1]=0,h[5]=d,h[9]=0,h[13]=p,h[2]=0,h[6]=0,h[10]=g,h[14]=_,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){let i=this.elements,r=t.elements;for(let a=0;a<16;a++)if(i[a]!==r[a])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}},lr.prototype.isMatrix4=!0,lr),gr=new R,ai=new rt,Op=new R(0,0,0),Fp=new R(1,1,1),ki=new R,Va=new R,$t=new R,hh=new rt,ch=new Yt,ya=class Pc{constructor(t=0,i=0,r=0,a=Pc.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,a=this._order){return this._x=t,this._y=i,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let a=t.elements,n=a[0],s=a[4],o=a[8],l=a[1],h=a[5],c=a[9],d=a[2],u=a[6],p=a[10];switch(i){case"XYZ":this._y=Math.asin(it(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-s,n)):(this._x=Math.atan2(u,h),this._z=0);break;case"YXZ":this._x=Math.asin(-it(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-d,n),this._z=0);break;case"ZXY":this._x=Math.asin(it(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-s,h)):(this._y=0,this._z=Math.atan2(l,n));break;case"ZYX":this._y=Math.asin(-it(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,n)):(this._x=0,this._z=Math.atan2(-s,h));break;case"YZX":this._z=Math.asin(it(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-d,n)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-it(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(u,h),this._y=Math.atan2(o,n)):(this._x=Math.atan2(-c,p),this._y=0);break;default:ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return hh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(hh,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return ch.setFromEuler(this),this.setFromQuaternion(ch,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ya.DEFAULT_ORDER="XYZ";Dc=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Bp=0,uh=new R,vr=new Yt,wi=new rt,Wa=new R,ia=new R,zp=new R,kp=new Yt,dh=new R(1,0,0),ph=new R(0,1,0),mh=new R(0,0,1),fh={type:"added"},Gp={type:"removed"},_r={type:"childadded",child:null},As={type:"childremoved",child:null},ui=class Cn extends dr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bp++}),this.uuid=jr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Cn.DEFAULT_UP.clone();let t=new R,i=new ya,r=new Yt,a=new R(1,1,1);function n(){r.setFromEuler(i,!1)}function s(){i.setFromQuaternion(r,void 0,!1)}i._onChange(n),r._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new rt},normalMatrix:{value:new qe}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=Cn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return vr.setFromAxisAngle(t,i),this.quaternion.multiply(vr),this}rotateOnWorldAxis(t,i){return vr.setFromAxisAngle(t,i),this.quaternion.premultiply(vr),this}rotateX(t){return this.rotateOnAxis(dh,t)}rotateY(t){return this.rotateOnAxis(ph,t)}rotateZ(t){return this.rotateOnAxis(mh,t)}translateOnAxis(t,i){return uh.copy(t).applyQuaternion(this.quaternion),this.position.add(uh.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(dh,t)}translateY(t){return this.translateOnAxis(ph,t)}translateZ(t){return this.translateOnAxis(mh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(wi.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Wa.copy(t):Wa.set(t,i,r);let a=this.parent;this.updateWorldMatrix(!0,!1),ia.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wi.lookAt(ia,Wa,this.up):wi.lookAt(Wa,ia,this.up),this.quaternion.setFromRotationMatrix(wi),a&&(wi.extractRotation(a.matrixWorld),vr.setFromRotationMatrix(wi),this.quaternion.premultiply(vr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(He("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(fh),_r.child=t,this.dispatchEvent(_r),_r.child=null):He("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(Gp),As.child=t,this.dispatchEvent(As),As.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),wi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),wi.multiply(t.parent.matrixWorld)),t.applyMatrix4(wi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(fh),_r.child=t,this.dispatchEvent(_r),_r.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,a=this.children.length;r<a;r++){let n=this.children[r].getObjectByProperty(t,i);if(n!==void 0)return n}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let a=this.children;for(let n=0,s=a.length;n<s;n++)a[n].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ia,t,zp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ia,kp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let i=t.x,r=t.y,a=t.z,n=this.matrix.elements;n[12]+=i-n[0]*i-n[4]*r-n[8]*a,n[13]+=r-n[1]*i-n[5]*r-n[9]*a,n[14]+=a-n[2]*i-n[6]*r-n[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i,r=!1){let a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){let n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].updateWorldMatrix(!1,!0,r)}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let a={};a.uuid=this.uuid,a.type=this.type,a.name=this.name,a.castShadow=this.castShadow,a.receiveShadow=this.receiveShadow,a.visible=this.visible,a.frustumCulled=this.frustumCulled,a.renderOrder=this.renderOrder,a.static=this.static,a.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(t),a.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function n(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=n(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){let d=l[h];n(t.shapes,d)}else n(t.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(n(t.materials,this.material[l]));a.material=o}else a.material=n(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];a.animations.push(n(t.animations,l))}}if(i){let o=s(t.geometries),l=s(t.materials),h=s(t.textures),c=s(t.images),d=s(t.shapes),u=s(t.skeletons),p=s(t.animations),g=s(t.nodes);o.length>0&&(r.geometries=o),l.length>0&&(r.materials=l),h.length>0&&(r.textures=h),c.length>0&&(r.images=c),d.length>0&&(r.shapes=d),u.length>0&&(r.skeletons=u),p.length>0&&(r.animations=p),g.length>0&&(r.nodes=g)}return r.object=a,r;function s(o){let l=[];for(let h in o){let c=o[h];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let a=t.children[r];this.add(a.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};ui.DEFAULT_UP=new R(0,1,0);ui.DEFAULT_MATRIX_AUTO_UPDATE=!0;ui.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;sr=class extends ui{constructor(){super(),this.isGroup=!0,this.type="Group"}},Hp={type:"move"},Rs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new sr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new sr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new sr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,n=null,s=this._targetRay,o=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){n=!0;for(let g of e.hand.values()){let _=t.getJointPose(g,i),f=this._getHandJoint(l,g);_!==null&&(f.matrix.fromArray(_.transform.matrix),f.matrix.decompose(f.position,f.quaternion,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=_.radius),f.visible=_!==null}let h=l.joints["index-finger-tip"],c=l.joints["thumb-tip"],d=h.position.distanceTo(c.position),u=.02,p=.005;l.inputState.pinching&&d>u+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=u-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,o.eventsEnabled&&o.dispatchEvent({type:"gripUpdated",data:e,target:this})));s!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.quaternion,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(Hp)))}return s!==null&&(s.visible=r!==null),o!==null&&(o.visible=a!==null),l!==null&&(l.visible=n!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new sr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Uc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gi={h:0,s:0,l:0},Xa={h:0,s:0,l:0};Ye=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=nt.workingColorSpace){return this.r=e,this.g=t,this.b=i,nt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=nt.workingColorSpace){if(e=Tp(e,1),t=it(t,0,1),i=it(i,0,1),t===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+t):i+t-i*t,n=2*i-a;this.r=Cs(n,a,e+1/3),this.g=Cs(n,a,e),this.b=Cs(n,a,e-1/3)}return nt.colorSpaceToWorking(this,r),this}setStyle(e,t=Wt){function i(a){a!==void 0&&parseFloat(a)<1&&ze("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a,n=r[1],s=r[2];switch(n){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(100,parseFloat(a[1]))/100,Math.min(100,parseFloat(a[2]))/100,Math.min(100,parseFloat(a[3]))/100,t);break;case"hsl":case"hsla":if(a=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(s))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:ze("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let a=r[1],n=a.length;if(n===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(n===6)return this.setHex(parseInt(a,16),t);ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Wt){let i=Uc[e.toLowerCase()];return i!==void 0?this.setHex(i,t):ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pi(e.r),this.g=Pi(e.g),this.b=Pi(e.b),this}copyLinearToSRGB(e){return this.r=Ur(e.r),this.g=Ur(e.g),this.b=Ur(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wt){return nt.workingToColorSpace(zt.copy(this),e),Math.round(it(zt.r*255,0,255))*65536+Math.round(it(zt.g*255,0,255))*256+Math.round(it(zt.b*255,0,255))}getHexString(e=Wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.workingToColorSpace(zt.copy(this),t);let i=zt.r,r=zt.g,a=zt.b,n=Math.max(i,r,a),s=Math.min(i,r,a),o,l,h=(s+n)/2;if(s===n)o=0,l=0;else{let c=n-s;switch(l=h<=.5?c/(n+s):c/(2-n-s),n){case i:o=(r-a)/c+(r<a?6:0);break;case r:o=(a-i)/c+2;break;case a:o=(i-r)/c+4;break}o/=6}return e.h=o,e.s=l,e.l=h,e}getRGB(e,t=nt.workingColorSpace){return nt.workingToColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=Wt){nt.workingToColorSpace(zt.copy(this),e);let t=zt.r,i=zt.g,r=zt.b;return e!==Wt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Gi),this.setHSL(Gi.h+e,Gi.s+t,Gi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Gi),e.getHSL(Xa);let i=Ms(Gi.h,Xa.h,t),r=Ms(Gi.s,Xa.s,t),a=Ms(Gi.l,Xa.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},zt=new Ye;Ye.NAMES=Uc;Nc=class extends ui{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ya,this.environmentIntensity=1,this.environmentRotation=new ya,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},ni=new R,Ti=new R,Is=new R,Ai=new R,yr=new R,xr=new R,gh=new R,Ls=new R,Ps=new R,Ds=new R,Us=new gt,Ns=new gt,Os=new gt,Ir=class Lr{constructor(t=new R,i=new R,r=new R){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,a){a.subVectors(r,i),ni.subVectors(t,i),a.cross(ni);let n=a.lengthSq();return n>0?a.multiplyScalar(1/Math.sqrt(n)):a.set(0,0,0)}static getBarycoord(t,i,r,a,n){ni.subVectors(a,i),Ti.subVectors(r,i),Is.subVectors(t,i);let s=ni.dot(ni),o=ni.dot(Ti),l=ni.dot(Is),h=Ti.dot(Ti),c=Ti.dot(Is),d=s*h-o*o;if(d===0)return n.set(0,0,0),null;let u=1/d,p=(h*l-o*c)*u,g=(s*c-o*l)*u;return n.set(1-p-g,g,p)}static containsPoint(t,i,r,a){return this.getBarycoord(t,i,r,a,Ai)===null?!1:Ai.x>=0&&Ai.y>=0&&Ai.x+Ai.y<=1}static getInterpolation(t,i,r,a,n,s,o,l){return this.getBarycoord(t,i,r,a,Ai)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(n,Ai.x),l.addScaledVector(s,Ai.y),l.addScaledVector(o,Ai.z),l)}static getInterpolatedAttribute(t,i,r,a,n,s){return Us.setScalar(0),Ns.setScalar(0),Os.setScalar(0),Us.fromBufferAttribute(t,i),Ns.fromBufferAttribute(t,r),Os.fromBufferAttribute(t,a),s.setScalar(0),s.addScaledVector(Us,n.x),s.addScaledVector(Ns,n.y),s.addScaledVector(Os,n.z),s}static isFrontFacing(t,i,r,a){return ni.subVectors(r,i),Ti.subVectors(t,i),ni.cross(Ti).dot(a)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,a){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,i,r,a){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ni.subVectors(this.c,this.b),Ti.subVectors(this.a,this.b),ni.cross(Ti).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Lr.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Lr.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,a,n){return Lr.getInterpolation(t,this.a,this.b,this.c,i,r,a,n)}containsPoint(t){return Lr.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Lr.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){let r=this.a,a=this.b,n=this.c,s,o;yr.subVectors(a,r),xr.subVectors(n,r),Ls.subVectors(t,r);let l=yr.dot(Ls),h=xr.dot(Ls);if(l<=0&&h<=0)return i.copy(r);Ps.subVectors(t,a);let c=yr.dot(Ps),d=xr.dot(Ps);if(c>=0&&d<=c)return i.copy(a);let u=l*d-c*h;if(u<=0&&l>=0&&c<=0&&l-c>0)return s=l/(l-c),i.copy(r).addScaledVector(yr,s);Ds.subVectors(t,n);let p=yr.dot(Ds),g=xr.dot(Ds);if(g>=0&&p<=g)return i.copy(n);let _=p*h-l*g;if(_<=0&&h>=0&&g<=0)return o=h/(h-g),i.copy(r).addScaledVector(xr,o);let f=c*g-p*d;if(f<=0&&d-c>=0&&p-g>=0)return gh.subVectors(n,a),o=(d-c)/(d-c+(p-g)),i.copy(a).addScaledVector(gh,o);let m=1/(f+_+u);return s=_*m,o=u*m,i.copy(r).addScaledVector(yr,s).addScaledVector(xr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Yi=class{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let n=0,s=a.count;n<s;n++)e.isMesh===!0?e.getVertexPosition(n,si):si.fromBufferAttribute(a,n),si.applyMatrix4(e.matrixWorld),this.expandByPoint(si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ja.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ja.copy(i.boundingBox)),ja.applyMatrix4(e.matrixWorld),this.union(ja)}let r=e.children;for(let a=0,n=r.length;a<n;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,si),si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ra),qa.subVectors(this.max,ra),Sr.subVectors(e.a,ra),Mr.subVectors(e.b,ra),br.subVectors(e.c,ra),Hi.subVectors(Mr,Sr),Vi.subVectors(br,Mr),ir.subVectors(Sr,br);let t=[0,-Hi.z,Hi.y,0,-Vi.z,Vi.y,0,-ir.z,ir.y,Hi.z,0,-Hi.x,Vi.z,0,-Vi.x,ir.z,0,-ir.x,-Hi.y,Hi.x,0,-Vi.y,Vi.x,0,-ir.y,ir.x,0];return!Fs(t,Sr,Mr,br,qa)||(t=[1,0,0,0,1,0,0,0,1],!Fs(t,Sr,Mr,br,qa))?!1:(Ya.crossVectors(Hi,Vi),t=[Ya.x,Ya.y,Ya.z],Fs(t,Sr,Mr,br,qa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ri=[new R,new R,new R,new R,new R,new R,new R,new R],si=new R,ja=new Yi,Sr=new R,Mr=new R,br=new R,Hi=new R,Vi=new R,ir=new R,ra=new R,qa=new R,Ya=new R,rr=new R;ey=Vp();Ct=new R,$a=new ne,Wp=0,ci=class extends dr{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Wp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=xp,this.updateRanges=[],this.gpuType=gi,this.version=0,this._normalizationScale=e!==void 0?Jo(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)$a.fromBufferAttribute(this,t),$a.applyMatrix3(e),this.setXY(t,$a.x,$a.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),r=this._normalize(r),a=this._normalize(a)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Rp(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Cp(e,this.array)}},Oc=class extends ci{constructor(e,t,i){super(new Uint16Array(e),t,i)}},Fc=class extends ci{constructor(e,t,i){super(new Uint32Array(e),t,i)}},ke=class extends ci{constructor(e,t,i){super(new Float32Array(e),t,i)}},Xp=new Yi,aa=new R,Bs=new R,$i=class{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Xp.setFromPoints(e).getCenter(i);let r=0;for(let a=0,n=e.length;a<n;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;aa.subVectors(e,this.center);let t=aa.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(aa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Bs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(aa.copy(e.center).add(Bs)),this.expandByPoint(aa.copy(e.center).sub(Bs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},jp=0,Qt=new rt,zs=new ui,Er=new R,Jt=new Yi,na=new Yi,Dt=new R,Mt=class Bc extends dr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jp++}),this.uuid=jr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Sp(t)?Fc:Oc)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){let i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);let r=this.attributes.normal;if(r!==void 0){let n=new qe().getNormalMatrix(t);r.applyNormalMatrix(n),r.needsUpdate=!0}let a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Qt.makeRotationFromQuaternion(t),this.applyMatrix4(Qt),this}rotateX(t){return Qt.makeRotationX(t),this.applyMatrix4(Qt),this}rotateY(t){return Qt.makeRotationY(t),this.applyMatrix4(Qt),this}rotateZ(t){return Qt.makeRotationZ(t),this.applyMatrix4(Qt),this}translate(t,i,r){return Qt.makeTranslation(t,i,r),this.applyMatrix4(Qt),this}scale(t,i,r){return Qt.makeScale(t,i,r),this.applyMatrix4(Qt),this}lookAt(t){return zs.lookAt(t),zs.updateMatrix(),this.applyMatrix4(zs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Er).negate(),this.translate(Er.x,Er.y,Er.z),this}setFromPoints(t){let i=this.getAttribute("position");if(i===void 0){let r=[];for(let a=0,n=t.length;a<n;a++){let s=t[a];r.push(s.x,s.y,s.z||0)}this.setAttribute("position",new ke(r,3))}else{let r=Math.min(t.length,i.count);for(let a=0;a<r;a++){let n=t[a];i.setXYZ(a,n.x,n.y,n.z||0)}t.length>i.count&&ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yi);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){He("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,a=i.length;r<a;r++){let n=i[r];Jt.setFromBufferAttribute(n),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,Jt.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,Jt.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(Jt.min),this.boundingBox.expandByPoint(Jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&He('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $i);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){He("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){let r=this.boundingSphere.center;if(Jt.setFromBufferAttribute(t),i)for(let n=0,s=i.length;n<s;n++){let o=i[n];na.setFromBufferAttribute(o),this.morphTargetsRelative?(Dt.addVectors(Jt.min,na.min),Jt.expandByPoint(Dt),Dt.addVectors(Jt.max,na.max),Jt.expandByPoint(Dt)):(Jt.expandByPoint(na.min),Jt.expandByPoint(na.max))}Jt.getCenter(r);let a=0;for(let n=0,s=t.count;n<s;n++)Dt.fromBufferAttribute(t,n),a=Math.max(a,r.distanceToSquared(Dt));if(i)for(let n=0,s=i.length;n<s;n++){let o=i[n],l=this.morphTargetsRelative;for(let h=0,c=o.count;h<c;h++)Dt.fromBufferAttribute(o,h),l&&(Er.fromBufferAttribute(t,h),Dt.add(Er)),a=Math.max(a,r.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&He('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){He("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let r=i.position,a=i.normal,n=i.uv,s=this.getAttribute("tangent");(s===void 0||s.count!==r.count)&&(s=new ci(new Float32Array(4*r.count),4),this.setAttribute("tangent",s));let o=[],l=[],h=new Uint8Array(r.count);for(let C=0;C<r.count;C++)o[C]=new R,l[C]=new R;let c=new R,d=new R,u=new R,p=new ne,g=new ne,_=new ne,f=new R,m=new R;function x(C,D,L){h[C]=h[D]=h[L]=1,c.fromBufferAttribute(r,C),d.fromBufferAttribute(r,D),u.fromBufferAttribute(r,L),p.fromBufferAttribute(n,C),g.fromBufferAttribute(n,D),_.fromBufferAttribute(n,L),d.sub(c),u.sub(c),g.sub(p),_.sub(p);let F=1/(g.x*_.y-_.x*g.y);isFinite(F)&&(f.copy(d).multiplyScalar(_.y).addScaledVector(u,-g.y).multiplyScalar(F),m.copy(u).multiplyScalar(g.x).addScaledVector(d,-_.x).multiplyScalar(F),o[C].add(f),o[D].add(f),o[L].add(f),l[C].add(m),l[D].add(m),l[L].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let C=0,D=b.length;C<D;++C){let L=b[C],F=L.start,j=L.count;for(let I=F,G=F+j;I<G;I+=3)x(t.getX(I+0),t.getX(I+1),t.getX(I+2))}let y=new R,w=new R,A=new R,v=new R;function M(C){A.fromBufferAttribute(a,C),v.copy(A);let D=o[C];y.copy(D),y.sub(A.multiplyScalar(A.dot(D))).normalize(),w.crossVectors(v,D);let L=w.dot(l[C])<0?-1:1;s.setXYZW(C,y.x,y.y,y.z,L)}for(let C=0,D=r.count;C<D;++C)h[C]&&M(C);this._transformed=!0}computeVertexNormals(){let t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new ci(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let u=0,p=r.count;u<p;u++)r.setXYZ(u,0,0,0);let a=new R,n=new R,s=new R,o=new R,l=new R,h=new R,c=new R,d=new R;if(t)for(let u=0,p=t.count;u<p;u+=3){let g=t.getX(u+0),_=t.getX(u+1),f=t.getX(u+2);a.fromBufferAttribute(i,g),n.fromBufferAttribute(i,_),s.fromBufferAttribute(i,f),c.subVectors(s,n),d.subVectors(a,n),c.cross(d),o.fromBufferAttribute(r,g),l.fromBufferAttribute(r,_),h.fromBufferAttribute(r,f),o.add(c),l.add(c),h.add(c),r.setXYZ(g,o.x,o.y,o.z),r.setXYZ(_,l.x,l.y,l.z),r.setXYZ(f,h.x,h.y,h.z)}else for(let u=0,p=i.count;u<p;u+=3)a.fromBufferAttribute(i,u+0),n.fromBufferAttribute(i,u+1),s.fromBufferAttribute(i,u+2),c.subVectors(s,n),d.subVectors(a,n),c.cross(d),r.setXYZ(u+0,c.x,c.y,c.z),r.setXYZ(u+1,c.x,c.y,c.z),r.setXYZ(u+2,c.x,c.y,c.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)Dt.fromBufferAttribute(t,i),Dt.normalize(),t.setXYZ(i,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function t(o,l){let h=o.array,c=o.itemSize,d=o.normalized,u=new h.constructor(l.length*c),p=0,g=0;for(let _=0,f=l.length;_<f;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*c;for(let m=0;m<c;m++)u[g++]=h[p++]}return new ci(u,c,d)}if(this.index===null)return ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let i=new Bc,r=this.index.array,a=this.attributes;for(let o in a){let l=a[o],h=t(l,r);i.setAttribute(o,h)}let n=this.morphAttributes;for(let o in n){let l=[],h=n[o];for(let c=0,d=h.length;c<d;c++){let u=h[c],p=t(u,r);l.push(p)}i.morphAttributes[o]=l}i.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,l=s.length;o<l;o++){let h=s[o];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};let i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});let r=this.attributes;for(let l in r){let h=r[l];t.data.attributes[l]=h.toJSON(t.data)}let a={},n=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],c=[];for(let d=0,u=h.length;d<u;d++){let p=h[d];c.push(p.toJSON(t.data))}c.length>0&&(a[l]=c,n=!0)}n&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let i={};this.name=t.name;let r=t.index;r!==null&&this.setIndex(r.clone());let a=t.attributes;for(let h in a){let c=a[h];this.setAttribute(h,c.clone(i))}let n=t.morphAttributes;for(let h in n){let c=[],d=n[h];for(let u=0,p=d.length;u<p;u++)c.push(d[u].clone(i));this.morphAttributes[h]=c}this.morphTargetsRelative=t.morphTargetsRelative;let s=t.groups;for(let h=0,c=s.length;h<c;h++){let d=s[h];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ty=new R,ks=new R,qp=new R,Yp=new qe,Xi=class{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=ks.subVectors(i,t).cross(qp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let r=e.delta(ks),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let n=-(e.start.dot(this.normal)+this.constant)/a;return i===!0&&(n<0||n>1)?null:t.copy(e.start).addScaledVector(r,n)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Yp.getNormalMatrix(e),r=this.coplanarPoint(ks).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},$p=0,qr=class extends dr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$p++}),this.uuid=jr(),this.name="",this.type="Material",this.blending=ua,this.side=hr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cc,this.blendDst=uc,this.blendEquation=Cr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=fa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ss,this.stencilZFail=Ss,this.stencilZPass=Ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){ze(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){ze(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){let n=[];for(let s in a){let o=a[s];delete o.metadata,n.push(o)}return n}if(t){let a=r(e.textures),n=r(e.images);a.length>0&&(i.textures=a),n.length>0&&(i.images=n)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ye().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Xi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ne().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ne().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},iy=new R,ry=new R,ay=new R,ny=new ne,sy=new ne,oy=new rt,ly=new R,hy=new R,cy=new R,uy=new ne,dy=new ne,py=new ne,my=new R,fy=new R,Ci=new R,Gs=new R,Ja=new R,Za=new R,Gn=class{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ci.copy(this.origin).addScaledVector(this.direction,t),Ci.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Gs.copy(e).add(t).multiplyScalar(.5),Ja.copy(t).sub(e).normalize(),Za.copy(this.origin).sub(Gs);let a=e.distanceTo(t)*.5,n=-this.direction.dot(Ja),s=Za.dot(this.direction),o=-Za.dot(Ja),l=Za.lengthSq(),h=Math.abs(1-n*n),c,d,u,p;if(h>0)if(c=n*o-s,d=n*s-o,p=a*h,c>=0)if(d>=-p)if(d<=p){let g=1/h;c*=g,d*=g,u=c*(c+n*d+2*s)+d*(n*c+d+2*o)+l}else d=a,c=Math.max(0,-(n*d+s)),u=-c*c+d*(d+2*o)+l;else d=-a,c=Math.max(0,-(n*d+s)),u=-c*c+d*(d+2*o)+l;else d<=-p?(c=Math.max(0,-(-n*a+s)),d=c>0?-a:Math.min(Math.max(-a,-o),a),u=-c*c+d*(d+2*o)+l):d<=p?(c=0,d=Math.min(Math.max(-a,-o),a),u=d*(d+2*o)+l):(c=Math.max(0,-(n*a+s)),d=c>0?a:Math.min(Math.max(-a,-o),a),u=-c*c+d*(d+2*o)+l);else d=n>0?-a:a,c=Math.max(0,-(n*d+s)),u=-c*c+d*(d+2*o)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,c),r&&r.copy(Gs).addScaledVector(Ja,d),u}intersectSphere(e,t){if(e.radius<0)return null;Ci.subVectors(e.center,this.origin);let i=Ci.dot(this.direction),r=Ci.dot(Ci)-i*i,a=e.radius*e.radius;if(r>a)return null;let n=Math.sqrt(a-r),s=i-n,o=i+n;return o<0?null:s<0?this.at(o,t):this.at(s,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,n,s,o,l=1/this.direction.x,h=1/this.direction.y,c=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),h>=0?(a=(e.min.y-d.y)*h,n=(e.max.y-d.y)*h):(a=(e.max.y-d.y)*h,n=(e.min.y-d.y)*h),i>n||a>r||((a>i||isNaN(i))&&(i=a),(n<r||isNaN(r))&&(r=n),c>=0?(s=(e.min.z-d.z)*c,o=(e.max.z-d.z)*c):(s=(e.max.z-d.z)*c,o=(e.min.z-d.z)*c),i>o||s>r)||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Ci)!==null}intersectTriangle(e,t,i,r,a){let n=this.origin,s=this.direction,o=s.x,l=s.y,h=s.z,c=e.x-n.x,d=e.y-n.y,u=e.z-n.z,p=t.x-n.x,g=t.y-n.y,_=t.z-n.z,f=i.x-n.x,m=i.y-n.y,x=i.z-n.z,b=Math.abs(o),y=Math.abs(l),w=Math.abs(h),A,v,M,C,D,L,F,j,I,G,J,H;if(b>=y&&b>=w?(M=o,L=c,I=p,H=f,o>=0?(A=l,v=h,C=d,D=u,F=g,j=_,G=m,J=x):(A=h,v=l,C=u,D=d,F=_,j=g,G=x,J=m)):y>=w?(M=l,L=d,I=g,H=m,l>=0?(A=h,v=o,C=u,D=c,F=_,j=p,G=x,J=f):(A=o,v=h,C=c,D=u,F=p,j=_,G=f,J=x)):(M=h,L=u,I=_,H=x,h>=0?(A=o,v=l,C=c,D=d,F=p,j=g,G=f,J=m):(A=l,v=o,C=d,D=c,F=g,j=p,G=m,J=f)),M===0)return null;let de=A/M,q=v/M,X=1/M,ee=C-de*L,Ie=D-q*L,Y=F-de*I,Q=j-q*I,Ee=G-de*H,Ue=J-q*H,Pe=Ee*Q-Ue*Y,le=ee*Ue-Ie*Ee,We=Y*Ie-Q*ee;if(r){if(Pe<0||le<0||We<0)return null}else if((Pe<0||le<0||We<0)&&(Pe>0||le>0||We>0))return null;let et=Pe+le+We;if(et===0)return null;let Re=X*(Pe*L+le*I+We*H);return(et>0?Re<0:Re>0)?null:this.at(Re/et,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Jp=class extends qr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ya,this.combine=dc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},vh=new rt,ar=new Gn,Ka=new $i,_h=new R,Qa=new R,en=new R,tn=new R,Hs=new R,rn=new R,yh=new R,an=new R,qt=class extends ui{constructor(e=new Mt,t=new Jp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,n=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let s=this.morphTargetInfluences;if(a&&s){rn.set(0,0,0);for(let o=0,l=a.length;o<l;o++){let h=s[o],c=a[o];h!==0&&(Hs.fromBufferAttribute(c,e),n?rn.addScaledVector(Hs,h):rn.addScaledVector(Hs.sub(t),h))}t.add(rn)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ka.copy(i.boundingSphere),Ka.applyMatrix4(a),ar.copy(e.ray).recast(e.near),!(Ka.containsPoint(ar.origin)===!1&&(ar.intersectSphere(Ka,_h)===null||ar.origin.distanceToSquared(_h)>(e.far-e.near)**2))&&(vh.copy(a).invert(),ar.copy(e.ray).applyMatrix4(vh),!(i.boundingBox!==null&&ar.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ar)))}_computeIntersections(e,t,i){let r,a=this.geometry,n=this.material,s=a.index,o=a.attributes.position,l=a.attributes.uv,h=a.attributes.uv1,c=a.attributes.normal,d=a.groups,u=a.drawRange;if(s!==null)if(Array.isArray(n))for(let p=0,g=d.length;p<g;p++){let _=d[p],f=n[_.materialIndex],m=Math.max(_.start,u.start),x=Math.min(s.count,Math.min(_.start+_.count,u.start+u.count));for(let b=m,y=x;b<y;b+=3){let w=s.getX(b),A=s.getX(b+1),v=s.getX(b+2);r=nn(this,f,e,i,l,h,c,w,A,v),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{let p=Math.max(0,u.start),g=Math.min(s.count,u.start+u.count);for(let _=p,f=g;_<f;_+=3){let m=s.getX(_),x=s.getX(_+1),b=s.getX(_+2);r=nn(this,n,e,i,l,h,c,m,x,b),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}else if(o!==void 0)if(Array.isArray(n))for(let p=0,g=d.length;p<g;p++){let _=d[p],f=n[_.materialIndex],m=Math.max(_.start,u.start),x=Math.min(o.count,Math.min(_.start+_.count,u.start+u.count));for(let b=m,y=x;b<y;b+=3){let w=b,A=b+1,v=b+2;r=nn(this,f,e,i,l,h,c,w,A,v),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{let p=Math.max(0,u.start),g=Math.min(o.count,u.start+u.count);for(let _=p,f=g;_<f;_+=3){let m=_,x=_+1,b=_+2;r=nn(this,n,e,i,l,h,c,m,x,b),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}}};gy=new gt,vy=new gt,_y=new gt,yy=new gt,xy=new rt,Sy=new R,My=new $i,by=new rt,Ey=new Gn,Kp=class extends Kt{constructor(e=null,t=1,i=1,r,a,n,s,o,l=Nt,h=Nt,c,d){super(null,n,s,o,l,h,r,a,c,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},wy=new rt,Ty=new rt,Ay=new rt,Ry=new rt,Cy=new Yi,Iy=new rt,Ly=new qt,Py=new $i,nr=new $i,Qp=new ne(.5,.5),sn=new R,xa=class{constructor(e=new Xi,t=new Xi,i=new Xi,r=new Xi,a=new Xi,n=new Xi){this.planes=[e,t,i,r,a,n]}set(e,t,i,r,a,n){let s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(i),s[3].copy(r),s[4].copy(a),s[5].copy(n),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=hi,i=!1){let r=this.planes,a=e.elements,n=a[0],s=a[1],o=a[2],l=a[3],h=a[4],c=a[5],d=a[6],u=a[7],p=a[8],g=a[9],_=a[10],f=a[11],m=a[12],x=a[13],b=a[14],y=a[15];if(r[0].setComponents(l-n,u-h,f-p,y-m).normalize(),r[1].setComponents(l+n,u+h,f+p,y+m).normalize(),r[2].setComponents(l+s,u+c,f+g,y+x).normalize(),r[3].setComponents(l-s,u-c,f-g,y-x).normalize(),i)r[4].setComponents(o,d,_,b).normalize(),r[5].setComponents(l-o,u-d,f-_,y-b).normalize();else if(r[4].setComponents(l-o,u-d,f-_,y-b).normalize(),t===hi)r[5].setComponents(l+o,u+d,f+_,y+b).normalize();else if(t===On)r[5].setComponents(o,d,_,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),nr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),nr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(nr)}intersectsSprite(e){nr.center.set(0,0,0);let t=Qp.distanceTo(e.center);return nr.radius=.7071067811865476+t,nr.applyMatrix4(e.matrixWorld),this.intersectsSphere(nr)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(sn.x=r.normal.x>0?e.max.x:e.min.x,sn.y=r.normal.y>0?e.max.y:e.min.y,sn.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(sn)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},xh=new rt,zc=class kc{constructor(){this.coordinateSystem=hi,this._frustums=[],this._count=0}setFromArrayCamera(t){let i=t.cameras,r=this._frustums;for(let a=0;a<i.length;a++){let n=i[a];xh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),r[a]===void 0&&(r[a]=new xa),r[a].setFromProjectionMatrix(xh,n.coordinateSystem,n.reversedDepth)}return this._count=i.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsObject(t))return!0;return!1}intersectsSprite(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsSphere(t))return!0;return!1}intersectsBox(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsBox(t))return!0;return!1}containsPoint(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let i=this._frustums,r=t._frustums;for(let a=0;a<t._count;a++)i[a]===void 0&&(i[a]=new xa),i[a].copy(r[a]);return this._count=t._count,this}clone(){return new kc().copy(this)}},em=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,i,r){let a=this.pool,n=this.list;this.index>=a.length&&a.push({start:-1,count:-1,z:-1,index:-1});let s=a[this.index];n.push(s),this.index++,s.start=e,s.count=t,s.z=i,s.index=r}reset(){this.list.length=0,this.index=0}},Dy=new rt,Uy=new Ye(1,1,1),Ny=new xa,Oy=new zc,Fy=new Yi,By=new $i,zy=new R,ky=new R,Gy=new R,Hy=new R,Vy=new em,Wy=new qt,Ko=class extends qr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Fn=new R,Bn=new R,Sh=new rt,sa=new Gn,on=new $i,Vs=new R,Mh=new R,tm=class extends ui{constructor(e=new Mt,t=new Ko){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,a=t.count;r<a;r++)Fn.fromBufferAttribute(t,r-1),Bn.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Fn.distanceTo(Bn);e.setAttribute("lineDistance",new ke(i,1))}else ze("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,n=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),on.copy(i.boundingSphere),on.applyMatrix4(r),on.radius+=a,e.ray.intersectsSphere(on)===!1)return;Sh.copy(r).invert(),sa.copy(e.ray).applyMatrix4(Sh);let s=a/((this.scale.x+this.scale.y+this.scale.z)/3),o=s*s,l=this.isLineSegments?2:1,h=i.index,c=i.attributes.position;if(h!==null){let d=Math.max(0,n.start),u=Math.min(h.count,n.start+n.count);for(let p=d,g=u-1;p<g;p+=l){let _=h.getX(p),f=h.getX(p+1),m=ln(this,e,sa,o,_,f,p);m&&t.push(m)}if(this.isLineLoop){let p=h.getX(u-1),g=h.getX(d),_=ln(this,e,sa,o,p,g,u-1);_&&t.push(_)}}else{let d=Math.max(0,n.start),u=Math.min(c.count,n.start+n.count);for(let p=d,g=u-1;p<g;p+=l){let _=ln(this,e,sa,o,p,p+1,p);_&&t.push(_)}if(this.isLineLoop){let p=ln(this,e,sa,o,u-1,d,u-1);p&&t.push(p)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}};bh=new R,Eh=new R,Gc=class extends tm{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let r=0,a=t.count;r<a;r+=2)bh.fromBufferAttribute(t,r),Eh.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+bh.distanceTo(Eh);e.setAttribute("lineDistance",new ke(i,1))}else ze("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},im=class extends qr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},wh=new rt,zo=new Gn,hn=new $i,cn=new R,Hc=class extends ui{constructor(e=new Mt,t=new im){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,n=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),hn.copy(i.boundingSphere),hn.applyMatrix4(r),hn.radius+=a,e.ray.intersectsSphere(hn)===!1)return;wh.copy(r).invert(),zo.copy(e.ray).applyMatrix4(wh);let s=a/((this.scale.x+this.scale.y+this.scale.z)/3),o=s*s,l=i.index,h=i.attributes.position;if(l!==null){let c=Math.max(0,n.start),d=Math.min(l.count,n.start+n.count);for(let u=c,p=d;u<p;u++){let g=l.getX(u);cn.fromBufferAttribute(h,g),Th(cn,g,o,r,e,t,this)}}else{let c=Math.max(0,n.start),d=Math.min(h.count,n.start+n.count);for(let u=c,p=d;u<p;u++)cn.fromBufferAttribute(h,u),Th(cn,u,o,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}};Vc=class extends Kt{constructor(e=[],t=kr,i,r,a,n,s,o,l,h){super(e,t,i,r,a,n,s,o,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Wc=class extends Kt{constructor(e,t,i,r,a,n,s,o,l){super(e,t,i,r,a,n,s,o,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Vr=class extends Kt{constructor(e,t,i=yi,r,a,n,s=Nt,o=Nt,l,h=qi,c=1){if(h!==qi&&h!==ji)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:c};super(d,r,a,n,s,o,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Zo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Xc=class extends Vr{constructor(e,t=yi,i=kr,r,a,n=Nt,s=Nt,o,l=qi){let h={width:e,height:e,depth:1},c=[h,h,h,h,h,h];super(e,e,t,i,r,a,n,s,o,l),this.image=c,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},jc=class extends Kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Hn=class qc extends Mt{constructor(t=1,i=1,r=1,a=1,n=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:a,heightSegments:n,depthSegments:s};let o=this;a=Math.floor(a),n=Math.floor(n),s=Math.floor(s);let l=[],h=[],c=[],d=[],u=0,p=0;g("z","y","x",-1,-1,r,i,t,s,n,0),g("z","y","x",1,-1,r,i,-t,s,n,1),g("x","z","y",1,1,t,r,i,a,s,2),g("x","z","y",1,-1,t,r,-i,a,s,3),g("x","y","z",1,-1,t,i,r,a,n,4),g("x","y","z",-1,-1,t,i,-r,a,n,5),this.setIndex(l),this.setAttribute("position",new ke(h,3)),this.setAttribute("normal",new ke(c,3)),this.setAttribute("uv",new ke(d,2));function g(_,f,m,x,b,y,w,A,v,M,C){let D=y/v,L=w/M,F=y/2,j=w/2,I=A/2,G=v+1,J=M+1,H=0,de=0,q=new R;for(let X=0;X<J;X++){let ee=X*L-j;for(let Ie=0;Ie<G;Ie++){let Y=Ie*D-F;q[_]=Y*x,q[f]=ee*b,q[m]=I,h.push(q.x,q.y,q.z),q[_]=0,q[f]=0,q[m]=A>0?1:-1,c.push(q.x,q.y,q.z),d.push(Ie/v),d.push(1-X/M),H+=1}}for(let X=0;X<M;X++)for(let ee=0;ee<v;ee++){let Ie=u+ee+G*X,Y=u+ee+G*(X+1),Q=u+(ee+1)+G*(X+1),Ee=u+(ee+1)+G*X;l.push(Ie,Y,Ee),l.push(Y,Q,Ee),de+=6}o.addGroup(p,de,C),p+=de,u+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qc(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},rm=class Yc extends Mt{constructor(t=1,i=1,r=4,a=8,n=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:i,capSegments:r,radialSegments:a,heightSegments:n},i=Math.max(0,i),r=Math.max(1,Math.floor(r)),a=Math.max(3,Math.floor(a)),n=Math.max(1,Math.floor(n));let s=[],o=[],l=[],h=[],c=i/2,d=Math.PI/2*t,u=i,p=2*d+u,g=r*2+n,_=a+1,f=new R,m=new R;for(let x=0;x<=g;x++){let b=0,y=0,w=0,A=0;if(x<=r){let C=x/r,D=C*Math.PI/2;y=-c-t*Math.cos(D),w=t*Math.sin(D),A=-t*Math.cos(D),b=C*d}else if(x<=r+n){let C=(x-r)/n;y=-c+C*i,w=t,A=0,b=d+C*u}else{let C=(x-r-n)/r,D=C*Math.PI/2;y=c+t*Math.sin(D),w=t*Math.cos(D),A=t*Math.sin(D),b=d+u+C*d}let v=Math.max(0,Math.min(1,b/p)),M=0;x===0?M=.5/a:x===g&&(M=-.5/a);for(let C=0;C<=a;C++){let D=C/a,L=D*Math.PI*2,F=Math.sin(L),j=Math.cos(L);m.x=-w*j,m.y=y,m.z=w*F,o.push(m.x,m.y,m.z),f.set(-w*j,A,w*F),f.normalize(),l.push(f.x,f.y,f.z),h.push(D+M,v)}if(x>0){let C=(x-1)*_;for(let D=0;D<a;D++){let L=C+D,F=C+D+1,j=x*_+D,I=x*_+D+1;s.push(L,F,j),s.push(F,I,j)}}}this.setIndex(s),this.setAttribute("position",new ke(o,3)),this.setAttribute("normal",new ke(l,3)),this.setAttribute("uv",new ke(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yc(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},am=class $c extends Mt{constructor(t=1,i=32,r=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:i,thetaStart:r,thetaLength:a},i=Math.max(3,i);let n=[],s=[],o=[],l=[],h=new R,c=new ne;s.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=i;d++,u+=3){let p=r+d/i*a;h.x=t*Math.cos(p),h.y=t*Math.sin(p),s.push(h.x,h.y,h.z),o.push(0,0,1),c.x=(s[u]/t+1)/2,c.y=(s[u+1]/t+1)/2,l.push(c.x,c.y)}for(let d=1;d<=i;d++)n.push(d,d+1,0);this.setIndex(n),this.setAttribute("position",new ke(s,3)),this.setAttribute("normal",new ke(o,3)),this.setAttribute("uv",new ke(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $c(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Jc=class Zc extends Mt{constructor(t=1,i=1,r=1,a=32,n=1,s=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:r,radialSegments:a,heightSegments:n,openEnded:s,thetaStart:o,thetaLength:l};let h=this;a=Math.floor(a),n=Math.floor(n);let c=[],d=[],u=[],p=[],g=0,_=[],f=r/2,m=0;x(),s===!1&&(t>0&&b(!0),i>0&&b(!1)),this.setIndex(c),this.setAttribute("position",new ke(d,3)),this.setAttribute("normal",new ke(u,3)),this.setAttribute("uv",new ke(p,2));function x(){let y=new R,w=new R,A=0,v=(i-t)/r;for(let M=0;M<=n;M++){let C=[],D=M/n,L=D*(i-t)+t;for(let F=0;F<=a;F++){let j=F/a,I=j*l+o,G=Math.sin(I),J=Math.cos(I);w.x=L*G,w.y=-D*r+f,w.z=L*J,d.push(w.x,w.y,w.z),y.set(G,v,J).normalize(),u.push(y.x,y.y,y.z),p.push(j,1-D),C.push(g++)}_.push(C)}for(let M=0;M<a;M++)for(let C=0;C<n;C++){let D=_[C][M],L=_[C+1][M],F=_[C+1][M+1],j=_[C][M+1];(t>0||C!==0)&&(c.push(D,L,j),A+=3),(i>0||C!==n-1)&&(c.push(L,F,j),A+=3)}h.addGroup(m,A,0),m+=A}function b(y){let w=g,A=new ne,v=new R,M=0,C=y===!0?t:i,D=y===!0?1:-1;for(let F=1;F<=a;F++)d.push(0,f*D,0),u.push(0,D,0),p.push(.5,.5),g++;let L=g;for(let F=0;F<=a;F++){let j=F/a*l+o,I=Math.cos(j),G=Math.sin(j);v.x=C*G,v.y=f*D,v.z=C*I,d.push(v.x,v.y,v.z),u.push(0,D,0),A.x=I*.5+.5,A.y=G*.5*D+.5,p.push(A.x,A.y),g++}for(let F=0;F<a;F++){let j=w+F,I=L+F;y===!0?c.push(I,I+1,j):c.push(I+1,I,j),M+=3}h.addGroup(m,M,y===!0?1:2),m+=M}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zc(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},nm=class Kc extends Jc{constructor(t=1,i=1,r=32,a=1,n=!1,s=0,o=Math.PI*2){super(0,t,i,r,a,n,s,o),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:r,heightSegments:a,openEnded:n,thetaStart:s,thetaLength:o}}static fromJSON(t){return new Kc(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ea=class Qc extends Mt{constructor(t=[],i=[],r=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:i,radius:r,detail:a};let n=[],s=[];o(a),h(r),c(),this.setAttribute("position",new ke(n,3)),this.setAttribute("normal",new ke(n.slice(),3)),this.setAttribute("uv",new ke(s,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function o(x){let b=new R,y=new R,w=new R;for(let A=0;A<i.length;A+=3)p(i[A+0],b),p(i[A+1],y),p(i[A+2],w),l(b,y,w,x)}function l(x,b,y,w){let A=w+1,v=[];for(let M=0;M<=A;M++){v[M]=[];let C=x.clone().lerp(y,M/A),D=b.clone().lerp(y,M/A),L=A-M;for(let F=0;F<=L;F++)F===0&&M===A?v[M][F]=C:v[M][F]=C.clone().lerp(D,F/L)}for(let M=0;M<A;M++)for(let C=0;C<2*(A-M)-1;C++){let D=Math.floor(C/2);C%2===0?(u(v[M][D+1]),u(v[M+1][D]),u(v[M][D])):(u(v[M][D+1]),u(v[M+1][D+1]),u(v[M+1][D]))}}function h(x){let b=new R;for(let y=0;y<n.length;y+=3)b.x=n[y+0],b.y=n[y+1],b.z=n[y+2],b.normalize().multiplyScalar(x),n[y+0]=b.x,n[y+1]=b.y,n[y+2]=b.z}function c(){let x=new R;for(let b=0;b<n.length;b+=3){x.x=n[b+0],x.y=n[b+1],x.z=n[b+2];let y=f(x)/2/Math.PI+.5,w=m(x)/Math.PI+.5;s.push(y,1-w)}g(),d()}function d(){for(let x=0;x<s.length;x+=6){let b=s[x+0],y=s[x+2],w=s[x+4],A=Math.max(b,y,w),v=Math.min(b,y,w);A>.9&&v<.1&&(b<.2&&(s[x+0]+=1),y<.2&&(s[x+2]+=1),w<.2&&(s[x+4]+=1))}}function u(x){n.push(x.x,x.y,x.z)}function p(x,b){let y=x*3;b.x=t[y+0],b.y=t[y+1],b.z=t[y+2]}function g(){let x=new R,b=new R,y=new R,w=new R,A=new ne,v=new ne,M=new ne;for(let C=0,D=0;C<n.length;C+=9,D+=6){x.set(n[C+0],n[C+1],n[C+2]),b.set(n[C+3],n[C+4],n[C+5]),y.set(n[C+6],n[C+7],n[C+8]),A.set(s[D+0],s[D+1]),v.set(s[D+2],s[D+3]),M.set(s[D+4],s[D+5]),w.copy(x).add(b).add(y).divideScalar(3);let L=f(w);_(A,D+0,x,L),_(v,D+2,b,L),_(M,D+4,y,L)}}function _(x,b,y,w){w<0&&x.x===1&&(s[b]=x.x-1),y.x===0&&y.z===0&&(s[b]=w/2/Math.PI+.5)}function f(x){return Math.atan2(x.z,-x.x)}function m(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qc(t.vertices,t.indices,t.radius,t.detail)}},sm=class eu extends Ea{constructor(t=1,i=0){let r=(1+Math.sqrt(5))/2,a=1/r,n=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-a,-r,0,-a,r,0,a,-r,0,a,r,-a,-r,0,-a,r,0,a,-r,0,a,r,0,-r,0,-a,r,0,-a,-r,0,a,r,0,a],s=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(n,s,t,i),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new eu(t.radius,t.detail)}},un=new R,dn=new R,Ws=new R,pn=new Ir,om=class extends Mt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let i=Math.pow(10,4),r=Math.cos(An*t),a=e.getIndex(),n=e.getAttribute("position"),s=a?a.count:n.count,o=[0,0,0],l=["a","b","c"],h=new Array(3),c=new Map,d=[];for(let u=0;u<s;u+=3){a?(o[0]=a.getX(u),o[1]=a.getX(u+1),o[2]=a.getX(u+2)):(o[0]=u,o[1]=u+1,o[2]=u+2);let{a:p,b:g,c:_}=pn;if(p.fromBufferAttribute(n,o[0]),g.fromBufferAttribute(n,o[1]),_.fromBufferAttribute(n,o[2]),pn.getNormal(Ws),h[0]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,h[1]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,h[2]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let f=0;f<3;f++){let m=(f+1)%3,x=h[f],b=h[m],y=pn[l[f]],w=pn[l[m]],A=`${x}_${b}`,v=`${b}_${x}`,M=c.get(v);M?(Ws.dot(M.normal)<=r&&(d.push(y.x,y.y,y.z),d.push(w.x,w.y,w.z)),c.set(v,null)):c.has(A)||c.set(A,{index0:o[f],index1:o[m],normal:Ws.clone()})}}for(let u of c.values())if(u){let{index0:p,index1:g}=u;un.fromBufferAttribute(n,p),dn.fromBufferAttribute(n,g),d.push(un.x,un.y,un.z),d.push(dn.x,dn.y,dn.z)}this.setAttribute("position",new ke(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Si=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ze("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),a=0;t.push(0);for(let n=1;n<=e;n++)i=this.getPoint(n/e),a+=i.distanceTo(r),t.push(a),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),r=0,a=i.length,n;t?n=t:n=e*i[a-1];let s=0,o=a-1,l;for(;s<=o;)if(r=Math.floor(s+(o-s)/2),l=i[r]-n,l<0)s=r+1;else if(l>0)o=r-1;else{o=r;break}if(r=o,i[r]===n)return r/(a-1);let h=i[r],c=i[r+1]-h,d=(n-h)/c;return(r+d)/(a-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),n=this.getPoint(r),s=t||(a.isVector2?new ne:new R);return s.copy(n).sub(a).normalize(),s}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new R,r=[],a=[],n=[],s=new R,o=new rt;for(let u=0;u<=e;u++){let p=u/e;r[u]=this.getTangentAt(p,new R)}a[0]=new R,n[0]=new R;let l=Number.MAX_VALUE,h=Math.abs(r[0].x),c=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=l&&(l=h,i.set(1,0,0)),c<=l&&(l=c,i.set(0,1,0)),d<=l&&i.set(0,0,1),s.crossVectors(r[0],i).normalize(),a[0].crossVectors(r[0],s),n[0].crossVectors(r[0],a[0]);for(let u=1;u<=e;u++){if(a[u]=a[u-1].clone(),n[u]=n[u-1].clone(),s.crossVectors(r[u-1],r[u]),s.length()>Number.EPSILON){s.normalize();let p=Math.acos(it(r[u-1].dot(r[u]),-1,1));a[u].applyMatrix4(o.makeRotationAxis(s,p))}n[u].crossVectors(r[u],a[u])}if(t===!0){let u=Math.acos(it(a[0].dot(a[e]),-1,1));u/=e,r[0].dot(s.crossVectors(a[0],a[e]))>0&&(u=-u);for(let p=1;p<=e;p++)a[p].applyMatrix4(o.makeRotationAxis(r[p],u*p)),n[p].crossVectors(r[p],a[p])}return{tangents:r,normals:a,binormals:n}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Qo=class extends Si{constructor(e=0,t=0,i=1,r=1,a=0,n=Math.PI*2,s=!1,o=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=a,this.aEndAngle=n,this.aClockwise=s,this.aRotation=o}getPoint(e,t=new ne){let i=t,r=Math.PI*2,a=this.aEndAngle-this.aStartAngle,n=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=r;for(;a>r;)a-=r;a<Number.EPSILON&&(n?a=0:a=r),this.aClockwise===!0&&!n&&(a===r?a=-r:a=a-r);let s=this.aStartAngle+e*a,o=this.aX+this.xRadius*Math.cos(s),l=this.aY+this.yRadius*Math.sin(s);if(this.aRotation!==0){let h=Math.cos(this.aRotation),c=Math.sin(this.aRotation),d=o-this.aX,u=l-this.aY;o=d*h-u*c+this.aX,l=d*c+u*h+this.aY}return i.set(o,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},lm=class extends Qo{constructor(e,t,i,r,a,n){super(e,t,i,i,r,a,n),this.isArcCurve=!0,this.type="ArcCurve"}};Ah=new R,Rh=new R,Xs=new el,js=new el,qs=new el,hm=class extends Si{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new R){let i=t,r=this.points,a=r.length,n=(a-(this.closed?0:1))*e,s=Math.floor(n),o=n-s;this.closed?s+=s>0?0:(Math.floor(Math.abs(s)/a)+1)*a:o===0&&s===a-1&&(s=a-2,o=1);let l,h;this.closed||s>0?l=r[(s-1)%a]:(Rh.subVectors(r[0],r[1]).add(r[0]),l=Rh);let c=r[s%a],d=r[(s+1)%a];if(this.closed||s+2<a?h=r[(s+2)%a]:(Ah.subVectors(r[a-1],r[a-2]).add(r[a-1]),h=Ah),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,p=Math.pow(l.distanceToSquared(c),u),g=Math.pow(c.distanceToSquared(d),u),_=Math.pow(d.distanceToSquared(h),u);g<1e-4&&(g=1),p<1e-4&&(p=g),_<1e-4&&(_=g),Xs.initNonuniformCatmullRom(l.x,c.x,d.x,h.x,p,g,_),js.initNonuniformCatmullRom(l.y,c.y,d.y,h.y,p,g,_),qs.initNonuniformCatmullRom(l.z,c.z,d.z,h.z,p,g,_)}else this.curveType==="catmullrom"&&(Xs.initCatmullRom(l.x,c.x,d.x,h.x,this.tension),js.initCatmullRom(l.y,c.y,d.y,h.y,this.tension),qs.initCatmullRom(l.z,c.z,d.z,h.z,this.tension));return i.set(Xs.calc(o),js.calc(o),qs.calc(o)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new R().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};tu=class extends Si{constructor(e=new ne,t=new ne,i=new ne,r=new ne){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new ne){let i=t,r=this.v0,a=this.v1,n=this.v2,s=this.v3;return i.set(pa(e,r.x,a.x,n.x,s.x),pa(e,r.y,a.y,n.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},vm=class extends Si{constructor(e=new R,t=new R,i=new R,r=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new R){let i=t,r=this.v0,a=this.v1,n=this.v2,s=this.v3;return i.set(pa(e,r.x,a.x,n.x,s.x),pa(e,r.y,a.y,n.y,s.y),pa(e,r.z,a.z,n.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},iu=class extends Si{constructor(e=new ne,t=new ne){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ne){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ne){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},_m=class extends Si{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ru=class extends Si{constructor(e=new ne,t=new ne,i=new ne){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ne){let i=t,r=this.v0,a=this.v1,n=this.v2;return i.set(da(e,r.x,a.x,n.x),da(e,r.y,a.y,n.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},au=class extends Si{constructor(e=new R,t=new R,i=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new R){let i=t,r=this.v0,a=this.v1,n=this.v2;return i.set(da(e,r.x,a.x,n.x),da(e,r.y,a.y,n.y),da(e,r.z,a.z,n.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},nu=class extends Si{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ne){let i=t,r=this.points,a=(r.length-1)*e,n=Math.floor(a),s=a-n,o=r[n===0?n:n-1],l=r[n],h=r[n>r.length-2?r.length-1:n+1],c=r[n>r.length-3?r.length-1:n+2];return i.set(Ch(s,o.x,l.x,h.x,c.x),Ch(s,o.y,l.y,h.y,c.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new ne().fromArray(r))}return this}},zn=Object.freeze({__proto__:null,ArcCurve:lm,CatmullRomCurve3:hm,CubicBezierCurve:tu,CubicBezierCurve3:vm,EllipseCurve:Qo,LineCurve:iu,LineCurve3:_m,QuadraticBezierCurve:ru,QuadraticBezierCurve3:au,SplineCurve:nu}),ym=class extends Si{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new zn[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),r=this.getCurveLengths(),a=0;for(;a<r.length;){if(r[a]>=i){let n=r[a]-i,s=this.curves[a],o=s.getLength(),l=o===0?0:1-n/o;return s.getPointAt(l,t)}a++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let r=0,a=this.curves;r<a.length;r++){let n=a[r],s=n.isEllipseCurve?e*2:n.isLineCurve||n.isLineCurve3?1:n.isSplineCurve?e*n.points.length:e,o=n.getPoints(s);for(let l=0;l<o.length;l++){let h=o[l];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(new zn[r.type]().fromJSON(r))}return this.cacheLengths=null,this}},Ih=class extends ym{constructor(e){super(),this.type="Path",this.currentPoint=new ne,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new iu(this.currentPoint.clone(),new ne(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){let a=new ru(this.currentPoint.clone(),new ne(e,t),new ne(i,r));return this.curves.push(a),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,a,n){let s=new tu(this.currentPoint.clone(),new ne(e,t),new ne(i,r),new ne(a,n));return this.curves.push(s),this.currentPoint.set(a,n),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new nu(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,a,n){let s=this.currentPoint.x,o=this.currentPoint.y;return this.absarc(e+s,t+o,i,r,a,n),this}absarc(e,t,i,r,a,n){return this.absellipse(e,t,i,i,r,a,n),this}ellipse(e,t,i,r,a,n,s,o){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,i,r,a,n,s,o),this}absellipse(e,t,i,r,a,n,s,o){let l=new Qo(e,t,i,r,a,n,s,o);if(this.curves.length>0){let c=l.getPoint(0);c.equals(this.currentPoint)||this.lineTo(c.x,c.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},su=class extends Ih{constructor(e){super(e),this.uuid=jr(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(new Ih().fromJSON(r))}return this}};Fm=class{static triangulate(e,t,i=2){return xm(e,t,i)}},or=class uu{static area(t){let i=t.length,r=0;for(let a=i-1,n=0;n<i;a=n++)r+=t[a].x*t[n].y-t[n].x*t[a].y;return r*.5}static isClockWise(t){return uu.area(t)<0}static triangulateShape(t,i){let r=[],a=[],n=[];Ph(t),Dh(r,t);let s=t.length;i.forEach(Ph);for(let l=0;l<i.length;l++)a.push(s),s+=i[l].length,Dh(r,i[l]);let o=Fm.triangulate(r,a);for(let l=0;l<o.length;l+=3)n.push(o.slice(l,l+3));return n}};Bm=class du extends Mt{constructor(t=new su([new ne(.5,.5),new ne(-.5,.5),new ne(-.5,-.5),new ne(.5,-.5)]),i={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:i},t=Array.isArray(t)?t:[t];let r=this,a=[],n=[];for(let o=0,l=t.length;o<l;o++){let h=t[o];s(h)}this.setAttribute("position",new ke(a,3)),this.setAttribute("uv",new ke(n,2)),this.computeVertexNormals();function s(o){let l=[],h=i.curveSegments!==void 0?i.curveSegments:12,c=i.steps!==void 0?i.steps:1,d=i.depth!==void 0?i.depth:1,u=i.bevelEnabled!==void 0?i.bevelEnabled:!0,p=i.bevelThickness!==void 0?i.bevelThickness:.2,g=i.bevelSize!==void 0?i.bevelSize:p-.1,_=i.bevelOffset!==void 0?i.bevelOffset:0,f=i.bevelSegments!==void 0?i.bevelSegments:3,m=i.extrudePath,x=i.UVGenerator!==void 0?i.UVGenerator:zm,b,y=!1,w,A,v,M;if(m){b=m.getSpacedPoints(c),y=!0,u=!1;let ae=m.isCatmullRomCurve3?m.closed:!1;w=m.computeFrenetFrames(c,ae),A=new R,v=new R,M=new R}u||(f=0,p=0,g=0,_=0);let C=o.extractPoints(h),D=C.shape,L=C.holes;if(!or.isClockWise(D)){D=D.reverse();for(let ae=0,he=L.length;ae<he;ae++){let se=L[ae];or.isClockWise(se)&&(L[ae]=se.reverse())}}function F(ae){let he=10000000000000001e-36,se=ae[0];for(let be=1;be<=ae.length;be++){let Z=be%ae.length,pe=ae[Z],fe=pe.x-se.x,Ve=pe.y-se.y,Le=fe*fe+Ve*Ve,Ke=Math.max(Math.abs(pe.x),Math.abs(pe.y),Math.abs(se.x),Math.abs(se.y)),U=he*Ke*Ke;if(Le<=U){ae.splice(Z,1),be--;continue}se=pe}}F(D),L.forEach(F);let j=L.length,I=D;for(let ae=0;ae<j;ae++){let he=L[ae];D=D.concat(he)}function G(ae,he,se){return he||He("ExtrudeGeometry: vec does not exist"),ae.clone().addScaledVector(he,se)}let J=D.length;function H(ae,he,se){let be,Z,pe,fe=ae.x-he.x,Ve=ae.y-he.y,Le=se.x-ae.x,Ke=se.y-ae.y,U=fe*fe+Ve*Ve,mt=fe*Ke-Ve*Le;if(Math.abs(mt)>Number.EPSILON){let Be=Math.sqrt(U),ct=Math.sqrt(Le*Le+Ke*Ke),ce=he.x-Ve/Be,Je=he.y+fe/Be,Ae=se.x-Ke/ct,Ne=se.y+Le/ct,_t=((Ae-ce)*Ke-(Ne-Je)*Le)/(fe*Ke-Ve*Le);be=ce+fe*_t-ae.x,Z=Je+Ve*_t-ae.y;let T=be*be+Z*Z;if(T<=2)return new ne(be,Z);pe=Math.sqrt(T/2)}else{let Be=!1;fe>Number.EPSILON?Le>Number.EPSILON&&(Be=!0):fe<-Number.EPSILON?Le<-Number.EPSILON&&(Be=!0):Math.sign(Ve)===Math.sign(Ke)&&(Be=!0),Be?(be=-Ve,Z=fe,pe=Math.sqrt(U)):(be=fe,Z=Ve,pe=Math.sqrt(U/2))}return new ne(be/pe,Z/pe)}let de=[];for(let ae=0,he=I.length,se=he-1,be=ae+1;ae<he;ae++,se++,be++)se===he&&(se=0),be===he&&(be=0),de[ae]=H(I[ae],I[se],I[be]);let q=[],X,ee=de.concat();for(let ae=0,he=j;ae<he;ae++){let se=L[ae];X=[];for(let be=0,Z=se.length,pe=Z-1,fe=be+1;be<Z;be++,pe++,fe++)pe===Z&&(pe=0),fe===Z&&(fe=0),X[be]=H(se[be],se[pe],se[fe]);q.push(X),ee=ee.concat(X)}let Ie;if(f===0)Ie=or.triangulateShape(I,L);else{let ae=[],he=[];for(let se=0;se<f;se++){let be=se/f,Z=p*Math.cos(be*Math.PI/2),pe=g*Math.sin(be*Math.PI/2)+_;for(let fe=0,Ve=I.length;fe<Ve;fe++){let Le=G(I[fe],de[fe],pe);le(Le.x,Le.y,-Z),be===0&&ae.push(Le)}for(let fe=0,Ve=j;fe<Ve;fe++){let Le=L[fe];X=q[fe];let Ke=[];for(let U=0,mt=Le.length;U<mt;U++){let Be=G(Le[U],X[U],pe);le(Be.x,Be.y,-Z),be===0&&Ke.push(Be)}be===0&&he.push(Ke)}}Ie=or.triangulateShape(ae,he)}let Y=Ie.length,Q=g+_;for(let ae=0;ae<J;ae++){let he=u?G(D[ae],ee[ae],Q):D[ae];y?(v.copy(w.normals[0]).multiplyScalar(he.x),A.copy(w.binormals[0]).multiplyScalar(he.y),M.copy(b[0]).add(v).add(A),le(M.x,M.y,M.z)):le(he.x,he.y,0)}for(let ae=1;ae<=c;ae++)for(let he=0;he<J;he++){let se=u?G(D[he],ee[he],Q):D[he];y?(v.copy(w.normals[ae]).multiplyScalar(se.x),A.copy(w.binormals[ae]).multiplyScalar(se.y),M.copy(b[ae]).add(v).add(A),le(M.x,M.y,M.z)):le(se.x,se.y,d/c*ae)}for(let ae=f-1;ae>=0;ae--){let he=ae/f,se=p*Math.cos(he*Math.PI/2),be=g*Math.sin(he*Math.PI/2)+_;for(let Z=0,pe=I.length;Z<pe;Z++){let fe=G(I[Z],de[Z],be);le(fe.x,fe.y,d+se)}for(let Z=0,pe=L.length;Z<pe;Z++){let fe=L[Z];X=q[Z];for(let Ve=0,Le=fe.length;Ve<Le;Ve++){let Ke=G(fe[Ve],X[Ve],be);y?le(Ke.x,Ke.y+b[c-1].y,b[c-1].x+se):le(Ke.x,Ke.y,d+se)}}}Ee(),Ue();function Ee(){let ae=a.length/3;if(u){let he=0,se=J*he;for(let be=0;be<Y;be++){let Z=Ie[be];We(Z[2]+se,Z[1]+se,Z[0]+se)}he=c+f*2,se=J*he;for(let be=0;be<Y;be++){let Z=Ie[be];We(Z[0]+se,Z[1]+se,Z[2]+se)}}else{for(let he=0;he<Y;he++){let se=Ie[he];We(se[2],se[1],se[0])}for(let he=0;he<Y;he++){let se=Ie[he];We(se[0]+J*c,se[1]+J*c,se[2]+J*c)}}r.addGroup(ae,a.length/3-ae,0)}function Ue(){let ae=a.length/3,he=0;Pe(I,he),he+=I.length;for(let se=0,be=L.length;se<be;se++){let Z=L[se];Pe(Z,he),he+=Z.length}r.addGroup(ae,a.length/3-ae,1)}function Pe(ae,he){let se=ae.length;for(;--se>=0;){let be=se,Z=se-1;Z<0&&(Z=ae.length-1);for(let pe=0,fe=c+f*2;pe<fe;pe++){let Ve=J*pe,Le=J*(pe+1),Ke=he+be+Ve,U=he+Z+Ve,mt=he+Z+Le,Be=he+be+Le;et(Ke,U,mt,Be)}}}function le(ae,he,se){l.push(ae),l.push(he),l.push(se)}function We(ae,he,se){Re(ae),Re(he),Re(se);let be=a.length/3,Z=x.generateTopUV(r,a,be-3,be-2,be-1);$e(Z[0]),$e(Z[1]),$e(Z[2])}function et(ae,he,se,be){Re(ae),Re(he),Re(be),Re(he),Re(se),Re(be);let Z=a.length/3,pe=x.generateSideWallUV(r,a,Z-6,Z-3,Z-2,Z-1);$e(pe[0]),$e(pe[1]),$e(pe[3]),$e(pe[1]),$e(pe[2]),$e(pe[3])}function Re(ae){a.push(l[ae*3+0]),a.push(l[ae*3+1]),a.push(l[ae*3+2])}function $e(ae){n.push(ae.x),n.push(ae.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),i=this.parameters.shapes,r=this.parameters.options;return km(i,r,t)}static fromJSON(t,i){let r=[];for(let n=0,s=t.shapes.length;n<s;n++){let o=i[t.shapes[n]];r.push(o)}let a=t.options.extrudePath;return a!==void 0&&(t.options.extrudePath=new zn[a.type]().fromJSON(a)),new du(r,t.options)}},zm={generateTopUV:function(e,t,i,r,a){let n=t[i*3],s=t[i*3+1],o=t[r*3],l=t[r*3+1],h=t[a*3],c=t[a*3+1];return[new ne(n,s),new ne(o,l),new ne(h,c)]},generateSideWallUV:function(e,t,i,r,a,n){let s=t[i*3],o=t[i*3+1],l=t[i*3+2],h=t[r*3],c=t[r*3+1],d=t[r*3+2],u=t[a*3],p=t[a*3+1],g=t[a*3+2],_=t[n*3],f=t[n*3+1],m=t[n*3+2];return Math.abs(o-c)<Math.abs(s-h)?[new ne(s,1-l),new ne(h,1-d),new ne(u,1-g),new ne(_,1-m)]:[new ne(o,1-l),new ne(c,1-d),new ne(p,1-g),new ne(f,1-m)]}};Gm=class pu extends Ea{constructor(t=1,i=0){let r=(1+Math.sqrt(5))/2,a=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],n=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(a,n,t,i),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new pu(t.radius,t.detail)}},Hm=class mu extends Mt{constructor(t=[new ne(0,-.5),new ne(.5,0),new ne(0,.5)],i=12,r=0,a=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:i,phiStart:r,phiLength:a},i=Math.floor(i),a=it(a,0,Math.PI*2);let n=[],s=[],o=[],l=[],h=[],c=1/i,d=new R,u=new ne,p=new R,g=new R,_=new R,f=0,m=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:f=t[x+1].x-t[x].x,m=t[x+1].y-t[x].y,p.x=m*1,p.y=-f,p.z=m*0,_.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:_.normalize(),l.push(_.x,_.y,_.z);break;default:f=t[x+1].x-t[x].x,m=t[x+1].y-t[x].y,p.x=m*1,p.y=-f,p.z=m*0,g.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),l.push(p.x,p.y,p.z),_.copy(g)}for(let x=0;x<=i;x++){let b=r+x*c*a,y=Math.sin(b),w=Math.cos(b);for(let A=0;A<=t.length-1;A++){d.x=t[A].x*y,d.y=t[A].y,d.z=t[A].x*w,s.push(d.x,d.y,d.z),u.x=x/i,u.y=A/(t.length-1),o.push(u.x,u.y);let v=l[3*A+0]*y,M=l[3*A+1],C=l[3*A+0]*w;h.push(v,M,C)}}for(let x=0;x<i;x++)for(let b=0;b<t.length-1;b++){let y=b+x*t.length,w=y,A=y+t.length,v=y+t.length+1,M=y+1;n.push(w,A,M),n.push(v,M,A)}this.setIndex(n),this.setAttribute("position",new ke(s,3)),this.setAttribute("uv",new ke(o,2)),this.setAttribute("normal",new ke(h,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mu(t.points,t.segments,t.phiStart,t.phiLength)}},Vm=class fu extends Ea{constructor(t=1,i=0){let r=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],a=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(r,a,t,i),this.type="OctahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new fu(t.radius,t.detail)}},tl=class gu extends Mt{constructor(t=1,i=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:a};let n=t/2,s=i/2,o=Math.floor(r),l=Math.floor(a),h=o+1,c=l+1,d=t/o,u=i/l,p=[],g=[],_=[],f=[];for(let m=0;m<c;m++){let x=m*u-s;for(let b=0;b<h;b++){let y=b*d-n;g.push(y,-x,0),_.push(0,0,1),f.push(b/o),f.push(1-m/l)}}for(let m=0;m<l;m++)for(let x=0;x<o;x++){let b=x+h*m,y=x+h*(m+1),w=x+1+h*(m+1),A=x+1+h*m;p.push(b,y,A),p.push(y,w,A)}this.setIndex(p),this.setAttribute("position",new ke(g,3)),this.setAttribute("normal",new ke(_,3)),this.setAttribute("uv",new ke(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gu(t.width,t.height,t.widthSegments,t.heightSegments)}},Wm=class vu extends Mt{constructor(t=.5,i=1,r=32,a=1,n=0,s=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:r,phiSegments:a,thetaStart:n,thetaLength:s},r=Math.max(3,r),a=Math.max(1,a);let o=[],l=[],h=[],c=[],d=t,u=(i-t)/a,p=new R,g=new ne;for(let _=0;_<=a;_++){for(let f=0;f<=r;f++){let m=n+f/r*s;p.x=d*Math.cos(m),p.y=d*Math.sin(m),l.push(p.x,p.y,p.z),h.push(0,0,1),g.x=(p.x/i+1)/2,g.y=(p.y/i+1)/2,c.push(g.x,g.y)}d+=u}for(let _=0;_<a;_++){let f=_*(r+1);for(let m=0;m<r;m++){let x=m+f,b=x,y=x+r+1,w=x+r+2,A=x+1;o.push(b,y,A),o.push(y,w,A)}}this.setIndex(o),this.setAttribute("position",new ke(l,3)),this.setAttribute("normal",new ke(h,3)),this.setAttribute("uv",new ke(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vu(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Xm=class _u extends Mt{constructor(t=new su([new ne(0,.5),new ne(-.5,-.5),new ne(.5,-.5)]),i=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:i};let r=[],a=[],n=[],s=[],o=0,l=0;if(Array.isArray(t)===!1)h(t);else for(let c=0;c<t.length;c++)h(t[c]),this.addGroup(o,l,c),o+=l,l=0;this.setIndex(r),this.setAttribute("position",new ke(a,3)),this.setAttribute("normal",new ke(n,3)),this.setAttribute("uv",new ke(s,2));function h(c){let d=a.length/3,u=c.extractPoints(i),p=u.shape,g=u.holes;or.isClockWise(p)===!1&&(p=p.reverse());for(let f=0,m=g.length;f<m;f++){let x=g[f];or.isClockWise(x)===!0&&(g[f]=x.reverse())}let _=or.triangulateShape(p,g);for(let f=0,m=g.length;f<m;f++){let x=g[f];p=p.concat(x)}for(let f=0,m=p.length;f<m;f++){let x=p[f];a.push(x.x,x.y,0),n.push(0,0,1),s.push(x.x,x.y)}for(let f=0,m=_.length;f<m;f++){let x=_[f],b=x[0]+d,y=x[1]+d,w=x[2]+d;r.push(b,y,w),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),i=this.parameters.shapes;return jm(i,t)}static fromJSON(t,i){let r=[];for(let a=0,n=t.shapes.length;a<n;a++){let s=i[t.shapes[a]];r.push(s)}return new _u(r,t.curveSegments)}};wa=class yu extends Mt{constructor(t=1,i=32,r=16,a=0,n=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:a,phiLength:n,thetaStart:s,thetaLength:o},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));let l=Math.min(s+o,Math.PI),h=0,c=[],d=new R,u=new R,p=[],g=[],_=[],f=[];for(let m=0;m<=r;m++){let x=[],b=m/r,y=s+b*o,w=t*Math.cos(y),A=Math.sqrt(t*t-w*w),v=0;m===0&&s===0?v=.5/i:m===r&&l===Math.PI&&(v=-.5/i);for(let M=0;M<=i;M++){let C=M/i,D=a+C*n;d.x=-A*Math.cos(D),d.y=w,d.z=A*Math.sin(D),g.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),f.push(C+v,1-b),x.push(h++)}c.push(x)}for(let m=0;m<r;m++)for(let x=0;x<i;x++){let b=c[m][x+1],y=c[m][x],w=c[m+1][x],A=c[m+1][x+1];(m!==0||s>0)&&p.push(b,y,A),(m!==r-1||l<Math.PI)&&p.push(y,w,A)}this.setIndex(p),this.setAttribute("position",new ke(g,3)),this.setAttribute("normal",new ke(_,3)),this.setAttribute("uv",new ke(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yu(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},qm=class xu extends Ea{constructor(t=1,i=0){let r=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],a=[2,1,0,0,3,2,1,3,0,2,3,1];super(r,a,t,i),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new xu(t.radius,t.detail)}},Ym=class Su extends Mt{constructor(t=1,i=.4,r=12,a=48,n=Math.PI*2,s=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:r,tubularSegments:a,arc:n,thetaStart:s,thetaLength:o},r=Math.floor(r),a=Math.floor(a);let l=[],h=[],c=[],d=[],u=new R,p=new R,g=new R;for(let _=0;_<=r;_++){let f=s+_/r*o;for(let m=0;m<=a;m++){let x=m/a*n;p.x=(t+i*Math.cos(f))*Math.cos(x),p.y=(t+i*Math.cos(f))*Math.sin(x),p.z=i*Math.sin(f),h.push(p.x,p.y,p.z),u.x=t*Math.cos(x),u.y=t*Math.sin(x),g.subVectors(p,u).normalize(),c.push(g.x,g.y,g.z),d.push(m/a),d.push(_/r)}}for(let _=1;_<=r;_++)for(let f=1;f<=a;f++){let m=(a+1)*_+f-1,x=(a+1)*(_-1)+f-1,b=(a+1)*(_-1)+f,y=(a+1)*_+f;l.push(m,x,y),l.push(x,b,y)}this.setIndex(l),this.setAttribute("position",new ke(h,3)),this.setAttribute("normal",new ke(c,3)),this.setAttribute("uv",new ke(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Su(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}},$m=class Mu extends Mt{constructor(t=1,i=.4,r=64,a=8,n=2,s=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:i,tubularSegments:r,radialSegments:a,p:n,q:s},r=Math.floor(r),a=Math.floor(a);let o=[],l=[],h=[],c=[],d=new R,u=new R,p=new R,g=new R,_=new R,f=new R,m=new R;for(let b=0;b<=r;++b){let y=b/r*n*Math.PI*2;x(y,n,s,t,p),x(y+.01,n,s,t,g),f.subVectors(g,p),m.addVectors(g,p),_.crossVectors(f,m),m.crossVectors(_,f),_.normalize(),m.normalize();for(let w=0;w<=a;++w){let A=w/a*Math.PI*2,v=-i*Math.cos(A),M=i*Math.sin(A);d.x=p.x+(v*m.x+M*_.x),d.y=p.y+(v*m.y+M*_.y),d.z=p.z+(v*m.z+M*_.z),l.push(d.x,d.y,d.z),u.subVectors(d,p).normalize(),h.push(u.x,u.y,u.z),c.push(b/r),c.push(w/a)}}for(let b=1;b<=r;b++)for(let y=1;y<=a;y++){let w=(a+1)*(b-1)+(y-1),A=(a+1)*b+(y-1),v=(a+1)*b+y,M=(a+1)*(b-1)+y;o.push(w,A,M),o.push(A,v,M)}this.setIndex(o),this.setAttribute("position",new ke(l,3)),this.setAttribute("normal",new ke(h,3)),this.setAttribute("uv",new ke(c,2));function x(b,y,w,A,v){let M=Math.cos(b),C=Math.sin(b),D=w/y*b,L=Math.cos(D);v.x=A*(2+L)*.5*M,v.y=A*(2+L)*C*.5,v.z=A*Math.sin(D)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mu(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}},Jm=class bu extends Mt{constructor(t=new au(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),i=64,r=1,a=8,n=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:i,radius:r,radialSegments:a,closed:n};let s=t.computeFrenetFrames(i,n);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;let o=new R,l=new R,h=new ne,c=new R,d=[],u=[],p=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new ke(d,3)),this.setAttribute("normal",new ke(u,3)),this.setAttribute("uv",new ke(p,2));function _(){for(let b=0;b<i;b++)f(b);f(n===!1?i:0),x(),m()}function f(b){c=t.getPointAt(b/i,c);let y=s.normals[b],w=s.binormals[b];for(let A=0;A<=a;A++){let v=A/a*Math.PI*2,M=Math.sin(v),C=-Math.cos(v);l.x=C*y.x+M*w.x,l.y=C*y.y+M*w.y,l.z=C*y.z+M*w.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=c.x+r*l.x,o.y=c.y+r*l.y,o.z=c.z+r*l.z,d.push(o.x,o.y,o.z)}}function m(){for(let b=1;b<=i;b++)for(let y=1;y<=a;y++){let w=(a+1)*(b-1)+(y-1),A=(a+1)*b+(y-1),v=(a+1)*b+y,M=(a+1)*(b-1)+y;g.push(w,A,M),g.push(A,v,M)}}function x(){for(let b=0;b<=i;b++)for(let y=0;y<=a;y++)h.x=b/i,h.y=y/a,p.push(h.x,h.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new bu(new zn[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}},Zm=class extends Mt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,r=new R,a=new R;if(e.index!==null){let n=e.attributes.position,s=e.index,o=e.groups;o.length===0&&(o=[{start:0,count:s.count,materialIndex:0}]);for(let l=0,h=o.length;l<h;++l){let c=o[l],d=c.start,u=c.count;for(let p=d,g=d+u;p<g;p+=3)for(let _=0;_<3;_++){let f=s.getX(p+_),m=s.getX(p+(_+1)%3);r.fromBufferAttribute(n,f),a.fromBufferAttribute(n,m),Uh(r,a,i)===!0&&(t.push(r.x,r.y,r.z),t.push(a.x,a.y,a.z))}}}else{let n=e.attributes.position;for(let s=0,o=n.count/3;s<o;s++)for(let l=0;l<3;l++){let h=3*s+l,c=3*s+(l+1)%3;r.fromBufferAttribute(n,h),a.fromBufferAttribute(n,c),Uh(r,a,i)===!0&&(t.push(r.x,r.y,r.z),t.push(a.x,a.y,a.z))}}this.setAttribute("position",new ke(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};Xy=Object.freeze({__proto__:null,BoxGeometry:Hn,CapsuleGeometry:rm,CircleGeometry:am,ConeGeometry:nm,CylinderGeometry:Jc,DodecahedronGeometry:sm,EdgesGeometry:om,ExtrudeGeometry:Bm,IcosahedronGeometry:Gm,LatheGeometry:Hm,OctahedronGeometry:Vm,PlaneGeometry:tl,PolyhedronGeometry:Ea,RingGeometry:Wm,ShapeGeometry:Xm,SphereGeometry:wa,TetrahedronGeometry:qm,TorusGeometry:Ym,TorusKnotGeometry:$m,TubeGeometry:Jm,WireframeGeometry:Zm});Qm={clone:Xr,merge:Vt},ef=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Zt=class extends qr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ef,this.fragmentShader=tf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xr(e.uniforms),this.uniformsGroups=Km(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new Ye().setHex(r.value);break;case"v2":this.uniforms[i].value=new ne().fromArray(r.value);break;case"v3":this.uniforms[i].value=new R().fromArray(r.value);break;case"v4":this.uniforms[i].value=new gt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new qe().fromArray(r.value);break;case"m4":this.uniforms[i].value=new rt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},rf=class extends Zt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},af=class extends qr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},nf=class extends qr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};Ta=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],a=t[i-1];i:{e:{let n;t:{r:if(!(e<r)){for(let s=i+2;;){if(r===void 0){if(e<a)break r;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===s)break;if(a=r,r=t[++i],e<r)break e}n=t.length;break t}if(!(e>=a)){let s=t[1];e<s&&(i=2,a=s);for(let o=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===o)break;if(r=a,a=t[--i-1],e>=a)break e}n=i,i=0;break t}break i}for(;i<n;){let s=i+n>>>1;e<t[s]?n=s:i=s+1}if(r=t[i],a=t[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,r)}return this.interpolate_(i,a,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,a=e*r;for(let n=0;n!==r;++n)t[n]=i[a+n];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},sf=class extends Ta{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ql,endingEnd:Ql}}intervalChanged_(e,t,i){let r=this.parameterPositions,a=e-2,n=e+1,s=r[a],o=r[n];if(s===void 0)switch(this.getSettings_().endingStart){case eh:a=e,s=2*t-i;break;case th:a=r.length-2,s=t+r[a]-r[a+1];break;default:a=e,s=i}if(o===void 0)switch(this.getSettings_().endingEnd){case eh:n=e,o=2*i-t;break;case th:n=1,o=i+r[1]-r[0];break;default:n=e-1,o=t}let l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-s),this._weightNext=l/(o-i),this._offsetPrev=a*h,this._offsetNext=n*h}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,h=this._offsetPrev,c=this._offsetNext,d=this._weightPrev,u=this._weightNext,p=(i-t)/(r-t),g=p*p,_=g*p,f=-d*_+2*d*g-d*p,m=(1+d)*_+(-1.5-2*d)*g+(-.5+d)*p+1,x=(-1-u)*_+(1.5+u)*g+.5*p,b=u*_-u*g;for(let y=0;y!==s;++y)a[y]=f*n[h+y]+m*n[l+y]+x*n[o+y]+b*n[c+y];return a}},of=class extends Ta{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,h=(i-t)/(r-t),c=1-h;for(let d=0;d!==s;++d)a[d]=n[l+d]*c+n[o+d]*h;return a}},lf=class extends Ta{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},hf=class extends Ta{interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,h=this.inTangents,c=this.outTangents;if(!h||!c){let p=(i-t)/(r-t),g=1-p;for(let _=0;_!==s;++_)a[_]=n[l+_]*g+n[o+_]*p;return a}let d=s*2,u=e-1;for(let p=0;p!==s;++p){let g=n[l+p],_=n[o+p],f=u*d+p*2,m=c[f],x=c[f+1],b=e*d+p*2,y=h[b],w=h[b+1],A=uf(i,t,m,y,r);a[p]=wu(A,g,x,w,_)}return a}};Mi=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=wr(t,this.TimeBufferType),this.values=wr(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:wr(e.times,Array),values:wr(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r),gn(e.settings)&&(i.settings={inTangents:wr(e.settings.inTangents,Array),outTangents:wr(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new lf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new of(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new sf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new hf(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Dn:t=this.InterpolantFactoryMethodDiscrete;break;case Fo:t=this.InterpolantFactoryMethodLinear;break;case xs:t=this.InterpolantFactoryMethodSmooth;break;case Kl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return ze("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Dn;case this.InterpolantFactoryMethodLinear:return Fo;case this.InterpolantFactoryMethodSmooth:return xs;case this.InterpolantFactoryMethodBezier:return Kl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e;gn(this.settings)&&(Oh(this.settings.inTangents,e),Oh(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e;gn(this.settings)&&(Fh(this.settings.inTangents,e),Fh(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,r=i.length,a=0,n=r-1;for(;a!==r&&i[a]<e;)++a;for(;n!==-1&&i[n]>t;)--n;if(++n,a!==0||n!==r){a>=n&&(n=Math.max(n,1),a=n-1);let s=this.getValueSize();this.times=i.slice(a,n),this.values=this.values.slice(a*s,n*s)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(He("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,a=i.length;a===0&&(He("KeyframeTrack: Track is empty.",this),e=!1);let n=null;for(let s=0;s!==a;s++){let o=i[s];if(typeof o=="number"&&isNaN(o)){He("KeyframeTrack: Time is not a valid number.",this,s,o),e=!1;break}if(n!==null&&n>o){He("KeyframeTrack: Out of order keys.",this,s,o,n),e=!1;break}n=o}if(r!==void 0&&Mp(r))for(let s=0,o=r.length;s!==o;++s){let l=r[s];if(isNaN(l)){He("KeyframeTrack: Value is not a valid number.",this,s,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===xs,a=e.length-1,n=1;for(let s=1;s<a;++s){let o=!1,l=e[s],h=e[s+1];if(l!==h&&(s!==1||l!==e[0]))if(r)o=!0;else{let c=s*i,d=c-i,u=c+i;for(let p=0;p!==i;++p){let g=t[c+p];if(g!==t[d+p]||g!==t[u+p]){o=!0;break}}}if(o){if(s!==n){e[n]=e[s];let c=s*i,d=n*i;for(let u=0;u!==i;++u)t[d+u]=t[c+u]}++n}}if(a>0){e[n]=e[a];for(let s=a*i,o=n*i,l=0;l!==i;++l)t[o+l]=t[s+l];++n}return n!==e.length?(this.times=e.slice(0,n),this.values=t.slice(0,n*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,gn(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};Mi.prototype.ValueTypeName="";Mi.prototype.TimeBufferType=Float32Array;Mi.prototype.ValueBufferType=Float32Array;Mi.prototype.DefaultInterpolation=Fo;Aa=class extends Mi{constructor(e,t,i){super(e,t,i)}};Aa.prototype.ValueTypeName="bool";Aa.prototype.ValueBufferType=Array;Aa.prototype.DefaultInterpolation=Dn;Aa.prototype.InterpolantFactoryMethodLinear=void 0;Aa.prototype.InterpolantFactoryMethodSmooth=void 0;df=class extends Mi{constructor(e,t,i,r){super(e,t,i,r)}};df.prototype.ValueTypeName="color";pf=class extends Mi{constructor(e,t,i,r){super(e,t,i,r)}};pf.prototype.ValueTypeName="number";mf=class extends Ta{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=(i-t)/(r-t),l=e*s;for(let h=l+s;l!==h;l+=4)Yt.slerpFlat(a,0,n,l-s,n,l,o);return a}},Tu=class extends Mi{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new mf(this.times,this.values,this.getValueSize(),e)}};Tu.prototype.ValueTypeName="quaternion";Tu.prototype.InterpolantFactoryMethodSmooth=void 0;Ra=class extends Mi{constructor(e,t,i){super(e,t,i)}};Ra.prototype.ValueTypeName="string";Ra.prototype.ValueBufferType=Array;Ra.prototype.DefaultInterpolation=Dn;Ra.prototype.InterpolantFactoryMethodLinear=void 0;Ra.prototype.InterpolantFactoryMethodSmooth=void 0;ff=class extends Mi{constructor(e,t,i,r){super(e,t,i,r)}};ff.prototype.ValueTypeName="vector";Ys={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(Bh(e)||(this.files[e]=t))},get:function(e){if(this.enabled!==!1&&!Bh(e))return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};gf=class{constructor(e,t,i){let r=this,a=!1,n=0,s=0,o,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){s++,a===!1&&r.onStart!==void 0&&r.onStart(h,n,s),a=!0},this.itemEnd=function(h){n++,r.onProgress!==void 0&&r.onProgress(h,n,s),n===s&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),o?o(h):h},this.setURLModifier=function(h){return o=h,this},this.addHandler=function(h,c){return l.push(h,c),this},this.removeHandler=function(h){let c=l.indexOf(h);return c!==-1&&l.splice(c,2),this},this.getHandler=function(h){for(let c=0,d=l.length;c<d;c+=2){let u=l[c],p=l[c+1];if(u.global&&(u.lastIndex=0),u.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},vf=new gf,il=class{constructor(e){this.manager=e!==void 0?e:vf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,a){i.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};il.DEFAULT_MATERIAL_NAME="__DEFAULT";Tr=new WeakMap,_f=class extends il{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let a=this,n=Ys.get(`image:${e}`);if(n!==void 0){if(n.complete===!0)a.manager.itemStart(e),setTimeout(function(){t&&t(n),a.manager.itemEnd(e)},0);else{let c=Tr.get(n);c===void 0&&(c=[],Tr.set(n,c)),c.push({onLoad:t,onError:r})}return n}let s=_a("img");function o(){h(),t&&t(this);let c=Tr.get(this)||[];for(let d=0;d<c.length;d++){let u=c[d];u.onLoad&&u.onLoad(this)}Tr.delete(this),a.manager.itemEnd(e)}function l(c){h(),r&&r(c),Ys.remove(`image:${e}`);let d=Tr.get(this)||[];for(let u=0;u<d.length;u++){let p=d[u];p.onError&&p.onError(c)}Tr.delete(this),a.manager.itemError(e),a.manager.itemEnd(e)}function h(){s.removeEventListener("load",o,!1),s.removeEventListener("error",l,!1)}return s.addEventListener("load",o,!1),s.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),Ys.add(`image:${e}`,s),a.manager.itemStart(e),s.fetchPriority=this.priority,s.src=e,s}},Au=class extends il{constructor(e){super(e)}load(e,t,i,r){let a=new Kt,n=new _f(this.manager);return n.setPriority(this.priority),n.setCache(this.cache),n.setCrossOrigin(this.crossOrigin),n.setPath(this.path),n.load(e,function(s){a.image=s,a.needsUpdate=!0,t!==void 0&&t(a)},i,r),a}},jy=new rt,qy=new R,Yy=new R,vn=new R,_n=new Yt,di=new R,rl=class extends ui{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(vn,_n,di),di.x===1&&di.y===1&&di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(vn,_n,di.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(vn,_n,di),di.x===1&&di.y===1&&di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(vn,_n,di.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Wi=new R,zh=new ne,kh=new ne,ei=class extends rl{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Bo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(An*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bo*2*Math.atan(Math.tan(An*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z),Wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z)}getViewSize(e,t){return this.getViewBounds(e,zh,kh),t.subVectors(kh,zh)}setViewOffset(e,t,i,r,a,n){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(An*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r,n=this.view;if(this.view!==null&&this.view.enabled){let o=n.fullWidth,l=n.fullHeight;a+=n.offsetX*r/o,t-=n.offsetY*i/l,r*=n.width/o,i*=n.height/l}let s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},yf=class extends rl{constructor(e=-1,t=1,i=1,r=-1,a=.1,n=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=n,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,n){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,a=i-e,n=i+e,s=r+t,o=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,n=a+l*this.view.width,s-=h*this.view.offsetY,o=s-h*this.view.height}this.projectionMatrix.makeOrthographic(a,n,s,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},$y=new rt,Jy=new rt,Zy=new rt,Ar=-90,Rr=1,Ho=class extends ui{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new ei(Ar,Rr,e,t);r.layers=this.layers,this.add(r);let a=new ei(Ar,Rr,e,t);a.layers=this.layers,this.add(a);let n=new ei(Ar,Rr,e,t);n.layers=this.layers,this.add(n);let s=new ei(Ar,Rr,e,t);s.layers=this.layers,this.add(s);let o=new ei(Ar,Rr,e,t);o.layers=this.layers,this.add(o);let l=new ei(Ar,Rr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,a,n,s,o]=t;for(let l of t)this.remove(l);if(e===hi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),n.up.set(0,0,1),n.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===On)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),n.up.set(0,0,-1),n.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[a,n,s,o,l,h]=this.children,c=e.getRenderTarget(),d=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let g=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,1,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,n),e.setRenderTarget(i,2,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,3,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,4,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.mipmapsAutoUpdate=g,e.setRenderTarget(i,5,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(c,d,u),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},xf=class extends ei{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},Ky=new R,Qy=new Yt,ex=new R,tx=new R,ix=new R,rx=new R,ax=new Yt,nx=new R,sx=new R,al="\\[\\]\\.:\\/",Sf=new RegExp("["+al+"]","g"),nl="[^"+al+"]",Mf="[^"+al.replace("\\.","")+"]",bf=/((?:WC+[\/:])*)/.source.replace("WC",nl),Ef=/(WCOD+)?/.source.replace("WCOD",Mf),wf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",nl),Tf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",nl),Af=new RegExp("^"+bf+Ef+wf+Tf+"$"),Rf=["material","materials","bones","map"],Cf=class{constructor(e,t,i){let r=i||At.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,a=i.length;r!==a;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},At=class Pr{constructor(t,i,r){this.path=i,this.parsedPath=r||Pr.parseTrackName(i),this.node=Pr.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new Pr.Composite(t,i,r):new Pr(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Sf,"")}static parseTrackName(t){let i=Af.exec(t);if(i===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},a=r.nodeName&&r.nodeName.lastIndexOf(".");if(a!==void 0&&a!==-1){let n=r.nodeName.substring(a+1);Rf.indexOf(n)!==-1&&(r.nodeName=r.nodeName.substring(0,a),r.objectName=n)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(n){for(let s=0;s<n.length;s++){let o=n[s];if(o.name===i||o.uuid===i)return o;let l=r(o.children);if(l)return l}return null},a=r(t.children);if(a)return a}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)t[i++]=r[a]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,a=i.propertyName,n=i.propertyIndex;if(t||(t=Pr.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){ze("PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let h=i.objectIndex;switch(r){case"materials":if(!t.material){He("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){He("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){He("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let c=0;c<t.length;c++)if(t[c].name===h){h=c;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){He("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){He("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){He("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(h!==void 0){if(t[h]===void 0){He("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let s=t[a];if(s===void 0){let h=i.nodeName;He("PropertyBinding: Trying to update property for track: "+h+"."+a+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(n!==void 0){if(a==="morphTargetInfluences"){if(!t.geometry){He("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){He("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[n]!==void 0&&(n=t.morphTargetDictionary[n])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=n}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=a;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};At.Composite=Cf;At.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};At.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};At.prototype.GetterByBindingType=[At.prototype._getValue_direct,At.prototype._getValue_array,At.prototype._getValue_arrayElement,At.prototype._getValue_toArray];At.prototype.SetterByBindingTypeAndVersioning=[[At.prototype._setValue_direct,At.prototype._setValue_direct_setNeedsUpdate,At.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[At.prototype._setValue_array,At.prototype._setValue_array_setNeedsUpdate,At.prototype._setValue_array_setMatrixWorldNeedsUpdate],[At.prototype._setValue_arrayElement,At.prototype._setValue_arrayElement_setNeedsUpdate,At.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[At.prototype._setValue_fromArray,At.prototype._setValue_fromArray_setNeedsUpdate,At.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];ox=new Float32Array(1),lx=new rt,hx=(zr=class{constructor(t,i,r,a){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,r,a)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let r=0;r<4;r++)this.elements[r]=t[r+i];return this}set(t,i,r,a){let n=this.elements;return n[0]=t,n[2]=i,n[1]=r,n[3]=a,this}},zr.prototype.isMatrix2=!0,zr),cx=new ne,ux=new R,dx=new R,px=new R,mx=new R,fx=new R,gx=new R,vx=new R,_x=new R,yx=new R,xx=new rt,Sx=new rt,Mx=new R,bx=new Ye,Ex=new Ye,wx=new R,Tx=new R,Ax=new R,Rx=new R,Cx=new rl,Ix=new Yi,Lx=new R;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");Pf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Df=`#ifdef USE_ALPHAHASH
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
#endif`,Uf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Nf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Of=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ff=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bf=`#ifdef USE_AOMAP
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
#endif`,zf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kf=`#ifdef USE_BATCHING
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
#endif`,Gf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Xf=`#ifdef USE_IRIDESCENCE
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
#endif`,jf=`#ifdef USE_BUMPMAP
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
#endif`,qf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Yf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$f=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Kf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Qf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,eg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,tg=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,ig=`vec3 transformedNormal = objectNormal;
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
#endif`,rg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ag=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ng=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,og="gl_FragColor = linearToOutputTexel( gl_FragColor );",lg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,cg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,ug=`#ifdef USE_ENVMAP
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
#endif`,dg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,mg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_g=`#ifdef USE_GRADIENTMAP
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
}`,yg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Mg=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,bg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Eg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ag=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Rg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
#endif`,Cg=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		return 0.5 / max( gv + gl, EPSILON );
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
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
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
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
}`,Ig=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Lg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Pg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Dg=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Ug=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ng=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Og=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Bg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Gg=`#if defined( USE_POINTS_UV )
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
#endif`,Hg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Xg=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qg=`#ifdef USE_MORPHTARGETS
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
#endif`,Yg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$g=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Jg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Zg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,e0=`#ifdef USE_NORMALMAP
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
#endif`,t0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,i0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,r0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,a0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,n0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,s0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,o0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,l0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,h0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,c0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,u0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,d0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,p0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
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
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
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
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
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
#endif`,m0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,f0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,g0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
}`,v0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_0=`#ifdef USE_SKINNING
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
#endif`,y0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,x0=`#ifdef USE_SKINNING
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
#endif`,S0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,M0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,b0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,E0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,w0=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,T0=`#ifdef USE_TRANSMISSION
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
#endif`,A0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,R0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,C0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`,I0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,L0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,P0=`uniform sampler2D t2D;
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
}`,D0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,U0=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,O0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,F0=`#include <common>
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
}`,B0=`#if DEPTH_PACKING == 3200
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
}`,z0=`#define DISTANCE
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
}`,k0=`#define DISTANCE
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
void main() {
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
}`,G0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,H0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,V0=`uniform float scale;
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
}`,W0=`uniform vec3 diffuse;
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
}`,X0=`#include <common>
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
}`,j0=`uniform vec3 diffuse;
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
}`,q0=`#define LAMBERT
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
}`,Y0=`#define LAMBERT
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
}`,$0=`#define MATCAP
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
}`,J0=`#define MATCAP
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
}`,Z0=`#define NORMAL
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
}`,K0=`#define NORMAL
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
}`,Q0=`#define PHONG
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
}`,e1=`#define PHONG
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
}`,t1=`#define STANDARD
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
}`,i1=`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
}`,r1=`#define TOON
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
}`,a1=`#define TOON
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
}`,n1=`uniform float size;
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
}`,s1=`uniform vec3 diffuse;
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
}`,o1=`#include <common>
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
}`,l1=`uniform vec3 color;
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
}`,h1=`uniform float rotation;
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
}`,c1=`uniform vec3 diffuse;
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
}`,Ze={alphahash_fragment:Pf,alphahash_pars_fragment:Df,alphamap_fragment:Uf,alphamap_pars_fragment:Nf,alphatest_fragment:Of,alphatest_pars_fragment:Ff,aomap_fragment:Bf,aomap_pars_fragment:zf,batching_pars_vertex:kf,batching_vertex:Gf,begin_vertex:Hf,beginnormal_vertex:Vf,bsdfs:Wf,iridescence_fragment:Xf,bumpmap_pars_fragment:jf,clipping_planes_fragment:qf,clipping_planes_pars_fragment:Yf,clipping_planes_pars_vertex:$f,clipping_planes_vertex:Jf,color_fragment:Zf,color_pars_fragment:Kf,color_pars_vertex:Qf,color_vertex:eg,common:tg,defaultnormal_vertex:ig,displacementmap_pars_vertex:rg,displacementmap_vertex:ag,emissivemap_fragment:ng,emissivemap_pars_fragment:sg,colorspace_fragment:og,colorspace_pars_fragment:lg,envmap_fragment:hg,envmap_common_pars_fragment:cg,envmap_pars_fragment:ug,envmap_pars_vertex:dg,envmap_physical_pars_fragment:bg,envmap_vertex:pg,fog_vertex:mg,fog_pars_vertex:fg,fog_fragment:gg,fog_pars_fragment:vg,gradientmap_pars_fragment:_g,lightmap_pars_fragment:yg,lights_lambert_fragment:xg,lights_lambert_pars_fragment:Sg,lights_pars_begin:Mg,lights_toon_fragment:Eg,lights_toon_pars_fragment:wg,lights_phong_fragment:Tg,lights_phong_pars_fragment:Ag,lights_physical_fragment:Rg,lights_physical_pars_fragment:Cg,lights_fragment_begin:Ig,lights_fragment_maps:Lg,lights_fragment_end:Pg,lightprobes_pars_fragment:Dg,logdepthbuf_fragment:Ug,logdepthbuf_pars_fragment:Ng,logdepthbuf_pars_vertex:Og,logdepthbuf_vertex:Fg,map_fragment:Bg,map_pars_fragment:zg,map_particle_fragment:kg,map_particle_pars_fragment:Gg,metalnessmap_fragment:Hg,metalnessmap_pars_fragment:Vg,morphinstance_vertex:Wg,morphcolor_vertex:Xg,morphnormal_vertex:jg,morphtarget_pars_vertex:qg,morphtarget_vertex:Yg,normal_fragment_begin:$g,normal_fragment_maps:Jg,normal_pars_fragment:Zg,normal_pars_vertex:Kg,normal_vertex:Qg,normalmap_pars_fragment:e0,clearcoat_normal_fragment_begin:t0,clearcoat_normal_fragment_maps:i0,clearcoat_pars_fragment:r0,iridescence_pars_fragment:a0,opaque_fragment:n0,packing:s0,premultiplied_alpha_fragment:o0,project_vertex:l0,dithering_fragment:h0,dithering_pars_fragment:c0,roughnessmap_fragment:u0,roughnessmap_pars_fragment:d0,shadowmap_pars_fragment:p0,shadowmap_pars_vertex:m0,shadowmap_vertex:f0,shadowmask_pars_fragment:g0,skinbase_vertex:v0,skinning_pars_vertex:_0,skinning_vertex:y0,skinnormal_vertex:x0,specularmap_fragment:S0,specularmap_pars_fragment:M0,tonemapping_fragment:b0,tonemapping_pars_fragment:E0,transmission_fragment:w0,transmission_pars_fragment:T0,uv_pars_fragment:A0,uv_pars_vertex:R0,uv_vertex:C0,worldpos_vertex:I0,background_vert:L0,background_frag:P0,backgroundCube_vert:D0,backgroundCube_frag:U0,cube_vert:N0,cube_frag:O0,depth_vert:F0,depth_frag:B0,distance_vert:z0,distance_frag:k0,equirect_vert:G0,equirect_frag:H0,linedashed_vert:V0,linedashed_frag:W0,meshbasic_vert:X0,meshbasic_frag:j0,meshlambert_vert:q0,meshlambert_frag:Y0,meshmatcap_vert:$0,meshmatcap_frag:J0,meshnormal_vert:Z0,meshnormal_frag:K0,meshphong_vert:Q0,meshphong_frag:e1,meshphysical_vert:t1,meshphysical_frag:i1,meshtoon_vert:r1,meshtoon_frag:a1,points_vert:n1,points_frag:s1,shadow_vert:o1,shadow_frag:l1,sprite_vert:h1,sprite_frag:c1},Se={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},mi={basic:{uniforms:Vt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:Vt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Ye(0)},envMapIntensity:{value:1}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:Vt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:Vt([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:Vt([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:Vt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:Vt([Se.points,Se.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:Vt([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:Vt([Se.common,Se.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:Vt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:Vt([Se.sprite,Se.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distance:{uniforms:Vt([Se.common,Se.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distance_vert,fragmentShader:Ze.distance_frag},shadow:{uniforms:Vt([Se.lights,Se.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};mi.physical={uniforms:Vt([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new qe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};yn={r:0,b:0,g:0},u1=new rt,Cu=new qe;Cu.set(-1,0,0,0,1,0,0,0,1);sl=class extends _i{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Vc(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Hn(5,5,5),a=new Zt({name:"CubemapFromEquirect",uniforms:Xr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ot,blending:Dr});a.uniforms.tEquirect.value=t;let n=new qt(r,a),s=t.minFilter;return t.minFilter===fi&&(t.minFilter=jt),new Ho(1,10,this).update(e,n),t.minFilter=s,n.geometry.dispose(),n.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let a=e.getRenderTarget();for(let n=0;n<6;n++)e.setRenderTarget(this,n),e.clear(t,i,r);e.setRenderTarget(a)}},Hh=256,v1=3,_1=20,Iu=256,Lu=16,y1=3,x1=new R,S1=new Ye,Vh=class Pu{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ho(1,10,null),this._boxMesh=new qt(new Hn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,i=0,r=.1,a=100,n={}){let{size:s=256,position:o=x1}=n,l=this._renderer;this._setSize(s);let h=this._allocateTarget(),c=this._getSourceTarget(!0);i>0&&(c.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,u=l.autoClearColor,p=l.autoClearDepth,g=l.autoClearStencil,_=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(t.background=l.getClearColor(S1));let f=new Ho(r,a,c);return f.position.copy(o),f.update(l,t),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=p,l.autoClearStencil=g,t.background=_,i>0&&(c.texture.mipmapsAutoUpdate=!0,this._blur(h,i)),this._applyPMREM(h),h}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,i){return i>0?1-Math.sqrt(1-t/i):0}_setSize(t){this._cubeSize=Math.max(Hh,Ap(t))}_fromTexture(t,i){t.mapping===kr||t.mapping===ga?this._setSize(t.image.length===0?Hh:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let r=i||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(r),r}_allocateTarget(){let t=this._cubeSize,i=Wh(t,!1,!1),r=Math.log2(t)-v1;for(let a=0;a<=r;a++)i.texture.mipmaps.push({width:t>>a,height:t>>a});return i.texture.name="PMREM",i.texture.isPMREMTexture=!0,i}_getSourceTarget(t=!1){let i=this._cubeSize,r=this._sourceTarget;return(r===null||r.width!==i||t&&r.depthBuffer===!1)&&(r!==null&&r.dispose(),this._sourceTarget=Wh(i,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,i,r){let a=this._boxMesh,n=this._cubeCamera;a.material=r,n.renderTarget=t,n.activeMipmapLevel=i;let s=t.width>>i;t.viewport.set(0,0,s,s),n.update(this._renderer,a),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let i;t.mapping===kr||t.mapping===ga?(this._cubemapMaterial===null&&(this._cubemapMaterial=jh()),i=this._cubemapMaterial,i.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Xh()),i=this._equirectMaterial),i.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,i)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=M1(),this._integrationMaterial=b1());let i=this._cubeSize,r=t.texture.mipmaps.length-1,a=this._ggxMaterial.uniforms;a.envMap.value=this._sourceTarget.texture;let n=this._integrationMaterial.uniforms;n.envMap.value=this._sourceTarget.texture,n.sourceLod.value=Math.log2(i/Lu);for(let s=0;s<=r;s++){let o=Pu.lodToRoughness(s,r);if(s>r-y1)n.roughness.value=o,this._renderCube(t,s,this._integrationMaterial);else{let l=o>0?Math.log2(i)+.5*Math.log2(6/(Iu*Math.pow(o,4)))+.5:0;a.roughness.value=o,a.lodBias.value=l,this._renderCube(t,s,this._ggxMaterial)}}}_blur(t,i){this._blurMaterial===null&&(this._blurMaterial=E1());let r=this._blurMaterial,a=r.uniforms,n=this._sourceTarget;a.sigma.value=Math.min(i,Math.PI)/Math.SQRT2,a.envMap.value=n.texture,this._renderCube(t,0,r),a.envMap.value=t.texture,this._renderCube(n,0,r)}};P1={[pc]:"LINEAR_TONE_MAPPING",[mc]:"REINHARD_TONE_MAPPING",[fc]:"CINEON_TONE_MAPPING",[kn]:"ACES_FILMIC_TONE_MAPPING",[vc]:"AGX_TONE_MAPPING",[_c]:"NEUTRAL_TONE_MAPPING",[gc]:"CUSTOM_TONE_MAPPING"};Du=new Kt,Uu=new Vr(1,1),Nu=new Xc(1),Ou=new Lc,Fu=new Np,Bu=new Vc,qh=[],Yh=[],$h=new Float32Array(16),Jh=new Float32Array(9),Zh=new Float32Array(4);xv=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Q1(t.type)}},Sv=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=yv(t.type)}},Mv=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let a=0,n=r.length;a!==n;++a){let s=r[a];s.setValue(e,t[s.id],i)}}},$s=/(\w+)(\])?(\[|\.)?/g;In=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let s=e.getActiveUniform(t,n),o=e.getUniformLocation(t,s.name);bv(s,o,this)}let r=[],a=[];for(let n of this.seq)n.type===e.SAMPLER_2D_SHADOW||n.type===e.SAMPLER_CUBE_SHADOW||n.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(n):a.push(n);r.length>0&&(this.seq=r.concat(a))}setValue(e,t,i,r){let a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,n=t.length;a!==n;++a){let s=t[a],o=i[s.id];o.needsUpdate!==!1&&s.setValue(e,o.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,a=e.length;r!==a;++r){let n=e[r];n.id in t&&i.push(n)}return i}};Ev=37297,wv=0;ec=new qe;Cv={[pc]:"Linear",[mc]:"Reinhard",[fc]:"Cineon",[kn]:"ACESFilmic",[vc]:"AgX",[_c]:"Neutral",[gc]:"Custom"};xn=new R;Nv=/^[ \t]*#include +<([\w\d./]+)>/gm;Fv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;zv={[Sn]:"SHADOWMAP_TYPE_PCF",[la]:"SHADOWMAP_TYPE_VSM"};Gv={[ga]:"ENVMAP_MODE_REFRACTION"};Vv={[dc]:"ENVMAP_BLENDING_MULTIPLY",[hp]:"ENVMAP_BLENDING_MIX",[cp]:"ENVMAP_BLENDING_ADD"};jv=0,qv=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Yv(e),t.set(e,i)),i}},Yv=class{constructor(e){this.id=jv++,this.code=e,this.usedTimes=0}};i_=0;s_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,o_=`uniform sampler2D shadow_pass;
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
}`,l_=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],h_=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],hc=new rt,oa=new R,Js=new R;m_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,f_=`
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

}`,g_=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new jc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Zt({vertexShader:m_,fragmentShader:f_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new qt(new tl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},v_=class extends dr{constructor(e,t){super();let i=this,r=null,a=1,n=null,s="local-floor",o=1,l=null,h=null,c=null,d=null,u=null,p=null,g=typeof XRWebGLBinding<"u",_=new g_,f={},m=t.getContextAttributes(),x=null,b=null,y=[],w=[],A=new ne,v=null,M=null,C=new ei;C.viewport=new gt;let D=new ei;D.viewport=new gt;let L=[C,D],F=new xf,j=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let Q=y[Y];return Q===void 0&&(Q=new Rs,y[Y]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(Y){let Q=y[Y];return Q===void 0&&(Q=new Rs,y[Y]=Q),Q.getGripSpace()},this.getHand=function(Y){let Q=y[Y];return Q===void 0&&(Q=new Rs,y[Y]=Q),Q.getHandSpace()};function G(Y){let Q=w.indexOf(Y.inputSource);if(Q===-1)return;let Ee=y[Q];Ee!==void 0&&(Ee.update(Y.inputSource,Y.frame,l||n),Ee.dispatchEvent({type:Y.type,data:Y.inputSource}))}function J(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",J),r.removeEventListener("inputsourceschange",H);for(let Y=0;Y<y.length;Y++){let Q=w[Y];Q!==null&&(w[Y]=null,y[Y].disconnect(Q))}j=null,I=null,_.reset();for(let Y in f)delete f[Y];if(e.setRenderTarget(x),u=null,d=null,c=null,r=null,b=null,Ie.stop(),i.isPresenting=!1,e.setPixelRatio(v),e.setSize(A.width,A.height,!1),M!==null){let Y=M.camera;Y.fov=M.fov,Y.zoom=M.zoom,Y.updateProjectionMatrix(),M=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){a=Y,i.isPresenting===!0&&ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){s=Y,i.isPresenting===!0&&ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||n},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return c===null&&g&&(c=new XRWebGLBinding(r,t)),c},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(x=e.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",J),r.addEventListener("inputsourceschange",H),m.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(A),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let Q=null,Ee=null,Ue=null;m.depth&&(Ue=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=m.stencil?ji:qi,Ee=m.stencil?Gr:yi);let Pe={colorFormat:t.RGBA8,depthFormat:Ue,scaleFactor:a};c=this.getBinding(),d=c.createProjectionLayer(Pe),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new _i(d.textureWidth,d.textureHeight,{format:vi,type:ti,depthTexture:new Vr(d.textureWidth,d.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:a};u=new XRWebGLLayer(r,t,Q),r.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),b=new _i(u.framebufferWidth,u.framebufferHeight,{format:vi,type:ti,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(o),l=null,n=await r.requestReferenceSpace(s),Ie.setContext(r),Ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function H(Y){for(let Q=0;Q<Y.removed.length;Q++){let Ee=Y.removed[Q],Ue=w.indexOf(Ee);Ue>=0&&(w[Ue]=null,y[Ue].disconnect(Ee))}for(let Q=0;Q<Y.added.length;Q++){let Ee=Y.added[Q],Ue=w.indexOf(Ee);if(Ue===-1){for(let le=0;le<y.length;le++)if(le>=w.length){w.push(Ee),Ue=le;break}else if(w[le]===null){w[le]=Ee,Ue=le;break}if(Ue===-1)break}let Pe=y[Ue];Pe&&Pe.connect(Ee)}}function de(Y,Q){Q===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(Q.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let Q=Y.near,Ee=Y.far;_.texture!==null&&(_.depthNear>0&&(Q=_.depthNear),_.depthFar>0&&(Ee=_.depthFar)),F.near=D.near=C.near=Q,F.far=D.far=C.far=Ee,(j!==F.near||I!==F.far)&&(r.updateRenderState({depthNear:F.near,depthFar:F.far}),j=F.near,I=F.far),F.layers.mask=Y.layers.mask|6,C.layers.mask=F.layers.mask&-5,D.layers.mask=F.layers.mask&-3;let Ue=Y.parent,Pe=F.cameras;de(F,Ue);for(let le=0;le<Pe.length;le++)de(Pe[le],Ue);F.projectionMatrix.copy(C.projectionMatrix),F.projectionMatrixInverse.copy(C.projectionMatrixInverse),M===null&&Y.isPerspectiveCamera&&(M={camera:Y,fov:Y.fov,zoom:Y.zoom}),q(Y,F,Ue)};function q(Y,Q,Ee){Ee===null?Y.matrix.copy(Q.matrixWorld):(Y.matrix.copy(Ee.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(Q.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Bo*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(d===null&&u===null))return o},this.setFoveation=function(Y){o=Y,d!==null&&(d.fixedFoveation=Y),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(F)},this.getCameraTexture=function(Y){return f[Y]};let X=null;function ee(Y,Q){if(h=Q.getViewerPose(l||n),p=Q,h!==null){let Ee=h.views;u!==null&&(e.setRenderTargetFramebuffer(b,u.framebuffer),e.setRenderTarget(b));let Ue=!1;Ee.length!==F.cameras.length&&(F.cameras.length=0,Ue=!0);for(let le=0;le<Ee.length;le++){let We=Ee[le],et=null;if(u!==null)et=u.getViewport(We);else{let $e=c.getViewSubImage(d,We);et=$e.viewport,le===0&&(e.setRenderTargetTextures(b,$e.colorTexture,$e.depthStencilTexture),e.setRenderTarget(b))}let Re=L[le];Re===void 0&&(Re=new ei,Re.layers.enable(le),Re.viewport=new gt,L[le]=Re),Re.matrix.fromArray(We.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(We.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(et.x,et.y,et.width,et.height),le===0&&(F.matrix.copy(Re.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Ue===!0&&F.cameras.push(Re)}let Pe=r.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&g){c=i.getBinding();let le=c.getDepthInformation(Ee[0]);le&&le.isValid&&le.texture&&_.init(le,r.renderState)}if(Pe&&Pe.includes("camera-access")&&g){e.state.unbindTexture(),c=i.getBinding();for(let le=0;le<Ee.length;le++){let We=Ee[le].camera;if(We){let et=f[We];et||(et=new jc,f[We]=et);let Re=c.getCameraImage(We);et.sourceTexture=Re}}}}for(let Ee=0;Ee<y.length;Ee++){let Ue=w[Ee],Pe=y[Ee];Ue!==null&&Pe!==void 0&&Pe.update(Ue,Q,l||n)}X&&X(Y,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),p=null}let Ie=new Ru;Ie.setAnimationLoop(ee),this.setAnimationLoop=function(Y){X=Y},this.dispose=function(){}}},__=new rt,zu=new qe;zu.set(-1,0,0,0,1,0,0,0,1);S_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),pi=null;ku=class{constructor(e={}){let{canvas:t=bp(),context:i=null,depth:r=!0,stencil:a=!1,alpha:n=!1,antialias:s=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:c=!1,reversedDepthBuffer:d=!1,outputBufferType:u=ti}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=n;let g=u,_=new Set([$o,Yo,qo]),f=new Set([ti,yi,va,Gr,Xo,jo]),m=new Uint32Array(4),x=new Int32Array(4),b={textures:[],min:[],max:[],resolution:[]},y=null,w=null,A=[],v=[],M=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Li,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,D=!1,L=null,F=null,j=null,I=null;this._outputColorSpace=Wt;let G=0,J=0,H=null,de=-1,q=null,X=new gt,ee=new gt,Ie=null,Y=new Ye(0),Q=0,Ee=t.width,Ue=t.height,Pe=1,le=null,We=null,et=new gt(0,0,Ee,Ue),Re=new gt(0,0,Ee,Ue),$e=!1,ae=new xa,he=new zc,se=!1,be=!1,Z=new rt,pe=new R,fe=new gt,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Le=!1;function Ke(){return H===null?Pe:1}let U=i;function mt(E,N){return t.getContext(E,N)}let Be,ct,ce,Je,Ae,Ne,_t,T,S,B,ie,$,me,ge,O,K,Me,P,W,te,oe,ye,ve;try{let E={alpha:!0,depth:r,stencil:a,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r187"),t.addEventListener("webglcontextlost",Xe,!1),t.addEventListener("webglcontextrestored",Ge,!1),t.addEventListener("webglcontextcreationerror",at,!1),U===null){let N="webgl2";if(U=mt(N,E),U===null)throw mt(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Oe()}catch(E){throw t.removeEventListener("webglcontextlost",Xe,!1),t.removeEventListener("webglcontextrestored",Ge,!1),t.removeEventListener("webglcontextcreationerror",at,!1),He("WebGLRenderer: "+E.message),E}function Oe(){Be=new T1(U),Be.init(),oe=new p_(U,Be),ct=new f1(U,Be,e,oe),ce=new u_(U,Be),ct.reversedDepthBuffer&&d&&ce.buffers.depth.setReversed(!0),F=U.createFramebuffer(),j=U.createFramebuffer(),I=U.createFramebuffer(),Je=new C1(U),Ae=new Zv,Ne=new d_(U,Be,ce,Ae,ct,oe,Je),_t=new w1(C),T=new Lf(U),ye=new p1(U,T),S=new A1(U,T,Je,ye),B=new L1(U,S,T,ye,Je),P=new I1(U,ct,Ne),O=new g1(Ae),ie=new Jv(C,_t,Be,ct,ye,O),$=new y_(C,Ae),me=new Qv,ge=new n_(Be),Me=new d1(C,_t,ce,B,p,o),K=new c_(C,B,ct),ve=new x_(U,Je,ct,ce),W=new m1(U,Be,Je),te=new R1(U,Be,Je),Je.programs=ie.programs,C.capabilities=ct,C.extensions=Be,C.properties=Ae,C.renderLists=me,C.shadowMap=K,C.state=ce,C.info=Je}g!==ti&&(M=new D1(g,t.width,t.height,s,r,a));let re=new v_(C,U);this.xr=re,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let E=Be.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Be.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Pe},this.setPixelRatio=function(E){E!==void 0&&(Pe=E,this.setSize(Ee,Ue,!1))},this.getSize=function(E){return E.set(Ee,Ue)},this.setSize=function(E,N,V=!0){if(re.isPresenting){ze("WebGLRenderer: Can't change size while VR device is presenting.");return}Ee=E,Ue=N,t.width=Math.floor(E*Pe),t.height=Math.floor(N*Pe),V===!0&&(t.style.width=E+"px",t.style.height=N+"px"),M!==null&&M.setSize(t.width,t.height),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(Ee*Pe,Ue*Pe).floor()},this.setDrawingBufferSize=function(E,N,V){Ee=E,Ue=N,Pe=V,t.width=Math.floor(E*V),t.height=Math.floor(N*V),this.setViewport(0,0,E,N)},this.setEffects=function(E){if(g===ti){He("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let N=0;N<E.length;N++)if(E[N].isOutputPass===!0){ze("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}M.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(X)},this.getViewport=function(E){return E.copy(et)},this.setViewport=function(E,N,V,k){E.isVector4?et.set(E.x,E.y,E.z,E.w):et.set(E,N,V,k),ce.viewport(X.copy(et).multiplyScalar(Ke()).round())},this.getScissor=function(E){return E.copy(Re)},this.setScissor=function(E,N,V,k){E.isVector4?Re.set(E.x,E.y,E.z,E.w):Re.set(E,N,V,k),ce.scissor(ee.copy(Re).multiplyScalar(Ke()).round())},this.getScissorTest=function(){return $e},this.setScissorTest=function(E){ce.setScissorTest($e=E)},this.setOpaqueSort=function(E){le=E},this.setTransparentSort=function(E){We=E},this.getClearColor=function(E){return E.copy(Me.getClearColor())},this.setClearColor=function(){Me.setClearColor(...arguments)},this.getClearAlpha=function(){return Me.getClearAlpha()},this.setClearAlpha=function(){Me.setClearAlpha(...arguments)},this.clear=function(E=!0,N=!0,V=!0){let k=0;if(E){let z=!1;if(H!==null){let ue=H.texture.format;z=_.has(ue)}if(z){let ue=H.texture.type,xe=f.has(ue),_e=Me.getClearColor(),we=Me.getClearAlpha(),Fe=_e.r,tt=_e.g,st=_e.b;xe?(m[0]=Fe,m[1]=tt,m[2]=st,m[3]=we,U.clearBufferuiv(U.COLOR,0,m)):(x[0]=Fe,x[1]=tt,x[2]=st,x[3]=we,U.clearBufferiv(U.COLOR,0,x))}else k|=U.COLOR_BUFFER_BIT}N&&(k|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(k|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&U.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),L=E},this.dispose=function(){t.removeEventListener("webglcontextlost",Xe,!1),t.removeEventListener("webglcontextrestored",Ge,!1),t.removeEventListener("webglcontextcreationerror",at,!1),Me.dispose(),me.dispose(),ge.dispose(),Ne.dispose(),Ae.dispose(),_t.dispose(),B.dispose(),S.dispose(),ye.dispose(),ve.dispose(),ie.dispose(),re.dispose(),re.removeEventListener("sessionstart",Ll),re.removeEventListener("sessionend",Pl),Zi.stop()};function Xe(E){E.preventDefault(),nh("WebGLRenderer: Context Lost."),D=!0}function Ge(){nh("WebGLRenderer: Context Restored."),D=!1;let E=Je.autoReset,N=K.enabled,V=K.autoUpdate,k=K.needsUpdate,z=K.type;Oe(),Je.autoReset=E,K.enabled=N,K.autoUpdate=V,K.needsUpdate=k,K.type=z}function at(E){He("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Te(E){let N=E.target;N.removeEventListener("dispose",Te),xt(N)}function xt(E){St(E),Ae.remove(E)}function St(E){let N=Ae.get(E).programs;N!==void 0&&(N.forEach(function(V){ie.releaseProgram(V)}),E.isShaderMaterial&&ie.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,V,k,z,ue){N===null&&(N=Ve);let xe=z.isMesh&&z.matrixWorld.determinantAffine()<0,_e=Nd(E,N,V,k,z);ce.setMaterial(k,xe);let we=V.index,Fe=1;if(k.wireframe===!0){if(we=S.getWireframeAttribute(V),we===void 0)return;Fe=2}let tt=V.drawRange,st=V.attributes.position,Ce=tt.start*Fe,ut=(tt.start+tt.count)*Fe;ue!==null&&(Ce=Math.max(Ce,ue.start*Fe),ut=Math.min(ut,(ue.start+ue.count)*Fe)),we!==null?(Ce=Math.max(Ce,0),ut=Math.min(ut,we.count)):st!=null&&(Ce=Math.max(Ce,0),ut=Math.min(ut,st.count));let Rt=ut-Ce;if(Rt<0||Rt===1/0)return;ye.setup(z,k,_e,V,we);let ft,vt=W;if(we!==null&&(ft=T.get(we),vt=te,vt.setIndex(ft)),z.isMesh)k.wireframe===!0?(ce.setLineWidth(k.wireframeLinewidth*Ke()),vt.setMode(U.LINES)):vt.setMode(U.TRIANGLES);else if(z.isLine){let Tt=k.linewidth;Tt===void 0&&(Tt=1),ce.setLineWidth(Tt*Ke()),z.isLineSegments?vt.setMode(U.LINES):z.isLineLoop?vt.setMode(U.LINE_LOOP):vt.setMode(U.LINE_STRIP)}else z.isPoints?vt.setMode(U.POINTS):z.isSprite&&vt.setMode(U.TRIANGLES);if(z.isBatchedMesh)if(Be.get("WEBGL_multi_draw"))vt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let Tt=z._multiDrawStarts,De=z._multiDrawCounts,Gt=z._multiDrawCount,Ki=we?T.get(we).bytesPerElement:1,Qi=Ae.get(k).currentProgram.getUniforms();for(let Ft=0;Ft<Gt;Ft++)Qi.setValue(U,"_gl_DrawID",Ft),vt.render(Tt[Ft]/Ki,De[Ft])}else if(z.isInstancedMesh)vt.renderInstances(Ce,Rt,z.count);else if(V.isInstancedBufferGeometry){let Tt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,De=Math.min(V.instanceCount,Tt);vt.renderInstances(Ce,Rt,De)}else vt.render(Ce,Rt)};function Il(E,N,V,k){L!==null&&E.isNodeMaterial&&L.setObject(k,E),se===!0&&O.setState(E,V,!1),E.transparent===!0&&E.side===Ii&&E.forceSinglePass===!1?(E.side=Ot,E.needsUpdate=!0,Qr(E,N,k),E.side=hr,E.needsUpdate=!0,Qr(E,N,k),E.side=Ii):Qr(E,N,k)}this.compile=function(E,N,V=null){V===null&&(V=E),L!==null&&L.renderStart(E,N,V),w=ge.get(V),w.init(N),v.push(w),V.traverseVisible(function(z){z.isLight&&z.layers.test(N.layers)&&(w.pushLight(z),z.castShadow&&w.pushShadow(z))}),E!==V&&E.traverseVisible(function(z){z.isLight&&z.layers.test(N.layers)&&(w.pushLight(z),z.castShadow&&w.pushShadow(z))}),w.setupLights(),L!==null&&L.updateLights(w.state.lightsArray),be=this.localClippingEnabled,se=O.init(this.clippingPlanes,be),se===!0&&O.setGlobalState(this.clippingPlanes,N),L!==null&&K.render(w.state.shadowsArray,V,N);let k=new Set;return E.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let ue=z.material;if(ue)if(Array.isArray(ue))for(let xe=0;xe<ue.length;xe++){let _e=ue[xe];Il(_e,V,N,z),k.add(_e)}else Il(ue,V,N,z),k.add(ue)}),w=v.pop(),L!==null&&L.renderEnd(),k},this.compileAsync=function(E,N,V=null){let k=this.compile(E,N,V);return new Promise(z=>{function ue(){if(k.forEach(function(xe){let _e=Ae.get(xe).currentProgram;(_e===void 0||_e.isReady())&&k.delete(xe)}),k.size===0){z(E);return}setTimeout(ue,10)}Be.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let cs=null;function Dd(E){cs&&cs(E)}function Ll(){Zi.stop()}function Pl(){Zi.start()}let Zi=new Ru;Zi.setAnimationLoop(Dd),typeof self<"u"&&Zi.setContext(self),this.setAnimationLoop=function(E){cs=E,re.setAnimationLoop(E),E===null?Zi.stop():Zi.start()},re.addEventListener("sessionstart",Ll),re.addEventListener("sessionend",Pl),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){He("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;L!==null&&L.renderStart(E,N);let V=re.enabled===!0&&re.isPresenting===!0,k=M!==null&&(H===null||V)&&M.begin(C,H);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(M===null||M.isCompositing()===!1)&&(re.cameraAutoUpdate===!0&&re.updateCamera(N),N=re.getCamera()),E.isScene===!0&&E.onBeforeRender(C,E,N,H),w=ge.get(E,v.length),w.init(N),w.state.textureUnits=Ne.getTextureUnits(),v.push(w),Z.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),N.isArrayCamera?he.setFromArrayCamera(N):ae.setFromProjectionMatrix(Z,hi,N.reversedDepth),be=this.localClippingEnabled,se=O.init(this.clippingPlanes,be),y=me.get(E,A.length),y.init(),A.push(y),this.info.render.frame++,re.enabled===!0&&re.isPresenting===!0){let ue=C.xr.getDepthSensingMesh();ue!==null&&us(ue,N,-1/0,C.sortObjects)}us(E,N,0,C.sortObjects),y.finish(),L!==null&&L.updateLights(w.state.lightsArray),C.sortObjects===!0&&y.sort(le,We),Le=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,Le&&Me.addToRenderList(y,E),this.info.autoReset===!0&&this.info.reset(),se===!0&&O.beginShadows();let z=w.state.shadowsArray;if(K.render(z,E,N),se===!0&&O.endShadows(),(k&&M.hasRenderPass())===!1){let ue=y.opaque,xe=y.transmissive;if(w.setupLights(),N.isArrayCamera){let _e=N.cameras;if(xe.length>0)for(let we=0,Fe=_e.length;we<Fe;we++){let tt=_e[we];Ul(ue,xe,E,tt)}Le&&Me.render(E);for(let we=0,Fe=_e.length;we<Fe;we++){let tt=_e[we];Dl(y,E,tt,tt.viewport)}}else xe.length>0&&Ul(ue,xe,E,N),Le&&Me.render(E),Dl(y,E,N)}H!==null&&J===0&&(Ne.updateMultisampleRenderTarget(H),Ne.updateRenderTargetMipmap(H)),k&&M.end(C),E.isScene===!0&&E.onAfterRender(C,E,N),ye.resetDefaultState(),de=-1,q=null,v.pop(),v.length>0?(w=v[v.length-1],Ne.setTextureUnits(w.state.textureUnits),se===!0&&O.setGlobalState(C.clippingPlanes,w.state.camera)):w=null,A.pop(),A.length>0?y=A[A.length-1]:y=null,L!==null&&L.renderEnd()};function us(E,N,V,k){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)V=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)w.pushLight(E),E.castShadow&&w.pushShadow(E);else if(E.isSprite){let ue=N.isArrayCamera?he:ae;if(!E.frustumCulled||E.intersectsFrustum(ue)){k&&fe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Z);let xe=B.update(E),_e=E.material;_e.visible&&y.push(E,xe,_e,V,fe.z,null,N)}}else if(E.isMesh||E.isLine||E.isPoints){let ue=N.isArrayCamera?he:ae;if(!E.frustumCulled||E.intersectsFrustum(ue)){let xe=B.update(E),_e=E.material;if(k&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),fe.copy(E.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),fe.copy(xe.boundingSphere.center)),fe.applyMatrix4(E.matrixWorld).applyMatrix4(Z)),Array.isArray(_e)){let we=xe.groups;for(let Fe=0,tt=we.length;Fe<tt;Fe++){let st=we[Fe],Ce=_e[st.materialIndex];Ce&&Ce.visible&&y.push(E,xe,Ce,V,fe.z,st,N)}}else _e.visible&&y.push(E,xe,_e,V,fe.z,null,N)}}}let z=E.children;for(let ue=0,xe=z.length;ue<xe;ue++)us(z[ue],N,V,k)}function Dl(E,N,V,k){let{opaque:z,transmissive:ue,transparent:xe}=E;w.setupLightsView(V),se===!0&&O.setGlobalState(C.clippingPlanes,V),k&&ce.viewport(X.copy(k)),z.length>0&&Ba(z,N,V),ue.length>0&&Ba(ue,N,V),xe.length>0&&Ba(xe,N,V),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function Ul(E,N,V,k){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[k.id]===void 0){let st=Be.has("EXT_color_buffer_half_float")||Be.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[k.id]=new _i(1,1,{generateMipmaps:!0,type:st?xi:ti,minFilter:fi,samples:Math.max(4,ct.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:nt.workingColorSpace})}let z=w.state.transmissionRenderTarget[k.id],ue=k.viewport||X;z.setSize(ue.z*C.transmissionResolutionScale,ue.w*C.transmissionResolutionScale);let xe=C.getRenderTarget(),_e=C.getActiveCubeFace(),we=C.getActiveMipmapLevel();C.setRenderTarget(z),C.getClearColor(Y),Q=C.getClearAlpha(),Q<1&&C.setClearColor(16777215,.5),C.clear(),Le&&Me.render(V);let Fe=C.toneMapping;C.toneMapping=Li;let tt=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),w.setupLightsView(k),se===!0&&O.setGlobalState(C.clippingPlanes,k),Ba(E,V,k),Ne.updateMultisampleRenderTarget(z),Ne.updateRenderTargetMipmap(z),Be.has("WEBGL_multisampled_render_to_texture")===!1){let st=!1;for(let Ce=0,ut=N.length;Ce<ut;Ce++){let Rt=N[Ce],{object:ft,geometry:vt,material:Tt,group:De}=Rt;if(Tt.side===Ii&&ft.layers.test(k.layers)){let Gt=Tt.side;Tt.side=Ot,Tt.needsUpdate=!0,Nl(ft,V,k,vt,Tt,De),Tt.side=Gt,Tt.needsUpdate=!0,st=!0}}st===!0&&(Ne.updateMultisampleRenderTarget(z),Ne.updateRenderTargetMipmap(z))}C.setRenderTarget(xe,_e,we),C.setClearColor(Y,Q),tt!==void 0&&(k.viewport=tt),C.toneMapping=Fe}function Ba(E,N,V){let k=N.isScene===!0?N.overrideMaterial:null;for(let z=0,ue=E.length;z<ue;z++){let xe=E[z],{object:_e,geometry:we,group:Fe}=xe,tt=xe.material;tt.allowOverride===!0&&k!==null&&(tt=k),_e.layers.test(V.layers)&&Nl(_e,N,V,we,tt,Fe)}}function Nl(E,N,V,k,z,ue){L!==null&&z.isNodeMaterial&&L.setObject(E,z),E.onBeforeRender(C,N,V,k,z,ue),E.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),z.onBeforeRender(C,N,V,k,E,ue),z.transparent===!0&&z.side===Ii&&z.forceSinglePass===!1?(z.side=Ot,z.needsUpdate=!0,C.renderBufferDirect(V,N,k,z,E,ue),z.side=hr,z.needsUpdate=!0,C.renderBufferDirect(V,N,k,z,E,ue),z.side=Ii):C.renderBufferDirect(V,N,k,z,E,ue),E.onAfterRender(C,N,V,k,z,ue)}function Ol(E){let N=0;for(let V of E)V.texture!==null&&N++;return N}function Qr(E,N,V){N.isScene!==!0&&(N=Ve);let k=Ae.get(E),z=w.state.lights,ue=w.state.shadowsArray,xe=z.state.version,_e=ie.getParameters(E,z.state,ue,N,V,w.state.lightProbeGridArray),we=ie.getProgramCacheKey(_e),Fe=k.programs;k.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?N.environment:null,k.fog=N.fog;let tt=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;k.envMap=_t.get(E.envMap||k.environment,tt),k.envMapRotation=k.environment!==null&&E.envMap===null?N.environmentRotation:E.envMapRotation,Fe===void 0&&(E.addEventListener("dispose",Te),Fe=new Map,k.programs=Fe,k.programVariants=new Map);let st=Fe.get(we);if(st!==void 0){if(k.currentProgram===st&&k.lightsStateVersion===xe)return Bl(E,_e),st}else _e.uniforms=ie.getUniforms(E),L!==null&&E.isNodeMaterial&&L.build(E,V,_e),E.onBeforeCompile(_e,C),st=ie.acquireProgram(_e,we),Fe.set(we,st),k.uniforms=_e.uniforms;let Ce=k.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ce.clippingPlanes=O.uniform),Bl(E,_e),k.needsLights=Fd(E),k.lightsStateVersion=xe,k.needsLights&&(Ce.ambientLightColor.value=z.state.ambient,Ce.lightProbe.value=z.state.probe,Ce.sunLights.value=z.state.sun,Ce.sunLightShadows.value=z.state.sunShadow,Ce.directionalLights.value=z.state.directional,Ce.directionalLightShadows.value=z.state.directionalShadow,Ce.spotLights.value=z.state.spot,Ce.spotLightShadows.value=z.state.spotShadow,Ce.rectAreaLights.value=z.state.rectArea,Ce.ltc_1.value=z.state.rectAreaLTC1,Ce.ltc_2.value=z.state.rectAreaLTC2,Ce.pointLights.value=z.state.point,Ce.pointLightShadows.value=z.state.pointShadow,Ce.hemisphereLights.value=z.state.hemi,Ce.sunShadowMatrix.value=z.state.sunShadowMatrix,Ce.sunShadowCascade.value=z.state.sunShadowCascade,Ce.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ce.spotLightMatrix.value=z.state.spotLightMatrix,Ce.spotLightMap.value=z.state.spotLightMap,Ce.pointShadowMatrix.value=z.state.pointShadowMatrix),k.numLightProbeGrids=Ol(w.state.lightProbeGridArray),k.currentProgram=st,k.uniformsList=null,st}function Ud(E,N,V,k,z){let ue=Ae.get(E),xe=ue.currentProgram.id+","+k+","+z,_e=ue.programVariants.get(xe);return _e===void 0?(_e=Qr(E,N,V),ue.programVariants.set(xe,_e)):(ue.currentProgram=_e,ue.uniformsList=null,ue.outputColorSpace=k,ue.toneMapping=z),_e}function Fl(E){if(E.uniformsList===null){let N=E.currentProgram.getUniforms();E.uniformsList=In.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function Bl(E,N){let V=Ae.get(E);V.outputColorSpace=N.outputColorSpace,V.batching=N.batching,V.batchingColor=N.batchingColor,V.instancing=N.instancing,V.instancingColor=N.instancingColor,V.instancingMorph=N.instancingMorph,V.skinning=N.skinning,V.morphTargets=N.morphTargets,V.morphNormals=N.morphNormals,V.morphColors=N.morphColors,V.morphTargetsCount=N.morphTargetsCount,V.numClippingPlanes=N.numClippingPlanes,V.numIntersection=N.numClipIntersection,V.vertexAlphas=N.vertexAlphas,V.vertexTangents=N.vertexTangents,V.toneMapping=N.toneMapping}function Nd(E,N,V,k,z){N.isScene!==!0&&(N=Ve),Ne.resetTextureUnits();let ue=N.fog,xe=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?N.environment:null,_e=H===null?C.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:nt.workingColorSpace,we=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Fe=_t.get(k.envMap||xe,we),tt=k.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,st=!!V.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Ce=!!V.morphAttributes.position,ut=!!V.morphAttributes.normal,Rt=!!V.morphAttributes.color,ft=Li;k.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(ft=C.toneMapping);let vt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Tt=vt!==void 0?vt.length:0,De=Ae.get(k),Gt=w.state.lights;if(se===!0&&(be===!0||E!==q)){let yt=E===q&&k.id===de;O.setState(k,E,yt)}let Ki=!1,Qi=!1;k.version===De.__version?De.needsLights&&De.lightsStateVersion!==Gt.state.version||z.isBatchedMesh&&De.batching===!1||!z.isBatchedMesh&&De.batching===!0||z.isBatchedMesh&&De.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&De.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&De.instancing===!1||!z.isInstancedMesh&&De.instancing===!0||z.isSkinnedMesh&&De.skinning===!1||!z.isSkinnedMesh&&De.skinning===!0||z.isInstancedMesh&&De.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&De.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&De.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&De.instancingMorph===!1&&z.morphTexture!==null||De.envMap!==Fe||k.fog===!0&&De.fog!==ue||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==O.numPlanes||De.numIntersection!==O.numIntersection)||De.vertexAlphas!==tt||De.vertexTangents!==st||De.morphTargets!==Ce||De.morphNormals!==ut||De.morphColors!==Rt||De.morphTargetsCount!==Tt||De.numLightProbeGrids!==Ol(w.state.lightProbeGridArray)?Ki=!0:(De.outputColorSpace!==_e||De.toneMapping!==ft)&&(Qi=!0):(Ki=!0,De.__version=k.version);let Ft=De.currentProgram;(Ki===!0||Qi===!0)&&(Ft=Qi===!0?Ud(k,N,z,_e,ft):Qr(k,N,z),L&&k.isNodeMaterial&&L.onUpdateProgram(k,Ft,De));let za=!1,Fi=!1,er=!1,ot=Ft.getUniforms(),Ut=De.uniforms;if(ce.useProgram(Ft.program)&&(za=!0,Fi=!0,er=!0),k.id!==de&&(de=k.id,Fi=!0),za||q!==E){ce.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),ot.setValue(U,"projectionMatrix",E.projectionMatrix),ot.setValue(U,"viewMatrix",E.matrixWorldInverse);let yt=ot.map.cameraPosition;yt!==void 0&&yt.setValue(U,pe.setFromMatrixPosition(E.matrixWorld)),ct.logarithmicDepthBuffer&&ot.setValue(U,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&ot.setValue(U,"isOrthographic",E.isOrthographicCamera===!0),q!==E&&(q=E,Fi=!0,er=!0)}if(De.needsLights&&(Gt.state.sunShadowMap.length>0&&ot.setValue(U,"sunShadowMap",Gt.state.sunShadowMap,Ne),Gt.state.directionalShadowMap.length>0&&ot.setValue(U,"directionalShadowMap",Gt.state.directionalShadowMap,Ne),Gt.state.spotShadowMap.length>0&&ot.setValue(U,"spotShadowMap",Gt.state.spotShadowMap,Ne),Gt.state.pointShadowMap.length>0&&ot.setValue(U,"pointShadowMap",Gt.state.pointShadowMap,Ne)),z.isSkinnedMesh){ot.setOptional(U,z,"bindMatrix"),ot.setOptional(U,z,"bindMatrixInverse");let yt=z.skeleton;yt&&(yt.boneTexture===null&&yt.computeBoneTexture(),ot.setValue(U,"boneTexture",yt.boneTexture,Ne))}z.isBatchedMesh&&(ot.setOptional(U,z,"batchingTexture"),ot.setValue(U,"batchingTexture",z._matricesTexture,Ne),ot.setOptional(U,z,"batchingIdTexture"),ot.setValue(U,"batchingIdTexture",z._indirectTexture,Ne),ot.setOptional(U,z,"batchingColorTexture"),z._colorsTexture!==null&&ot.setValue(U,"batchingColorTexture",z._colorsTexture,Ne));let ri=V.morphAttributes;if((ri.position!==void 0||ri.normal!==void 0||ri.color!==void 0)&&P.update(z,V,Ft),(Fi||De.receiveShadow!==z.receiveShadow)&&(De.receiveShadow=z.receiveShadow,ot.setValue(U,"receiveShadow",z.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&N.environment!==null&&(Ut.envMapIntensity.value=N.environmentIntensity),Ut.dfgLUT!==void 0&&(Ut.dfgLUT.value=M_()),Fi){if(ot.setValue(U,"toneMappingExposure",C.toneMappingExposure),De.needsLights&&Od(Ut,er),ue&&k.fog===!0&&$.refreshFogUniforms(Ut,ue),$.refreshMaterialUniforms(Ut,k,Pe,Ue,w.state.transmissionRenderTarget[E.id]),De.needsLights&&De.numLightProbeGrids>0){let yt=b,Ht=0;for(let Ei of w.state.lightProbeGridArray)Ei.texture!==null&&(yt.textures[Ht]=Ei.texture,yt.min[Ht]=Ei.boundingBox.min,yt.max[Ht]=Ei.boundingBox.max,yt.resolution[Ht]=Ei.resolution,Ht++);for(let Ei in yt)yt[Ei].length=Ht;Ut.probesSH.value=yt.textures,Ut.probesMin.value=yt.min,Ut.probesMax.value=yt.max,Ut.probesResolution.value=yt.resolution}In.upload(U,Fl(De),Ut,Ne)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(In.upload(U,Fl(De),Ut,Ne),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&ot.setValue(U,"center",z.center),ot.setValue(U,"modelViewMatrix",z.modelViewMatrix),ot.setValue(U,"normalMatrix",z.normalMatrix),ot.setValue(U,"modelMatrix",z.matrixWorld),k.uniformsGroups!==void 0){let yt=k.uniformsGroups;for(let Ht=0,Ei=yt.length;Ht<Ei;Ht++){let kl=yt[Ht];ve.update(kl,Ft),ve.bind(kl,Ft)}}return Ft}function Od(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.sunLights.needsUpdate=N,E.sunLightShadows.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function Fd(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(E,N,V){let k=Ae.get(E);k.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),Ae.get(E.texture).__webglTexture=N,Ae.get(E.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:V,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,N){let V=Ae.get(E);V.__webglFramebuffer=N,V.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(E,N=0,V=0){H=E,G=N,J=V;let k=null,z=!1,ue=!1;if(E){let xe=Ae.get(E);if(xe.__useDefaultFramebuffer!==void 0){ce.bindFramebuffer(U.FRAMEBUFFER,xe.__webglFramebuffer),X.copy(E.viewport),ee.copy(E.scissor),Ie=E.scissorTest,ce.viewport(X),ce.scissor(ee),ce.setScissorTest(Ie),de=-1;return}else if(xe.__webglFramebuffer===void 0)Ne.setupRenderTarget(E);else if(xe.__hasExternalTextures)Ne.rebindTextures(E,Ae.get(E.texture).__webglTexture,Ae.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Fe=E.depthTexture;if(xe.__boundDepthTexture!==Fe){if(Fe!==null&&Ae.has(Fe)&&(E.width!==Fe.image.width||E.height!==Fe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ne.setupDepthRenderbuffer(E)}}let _e=E.texture;(_e.isData3DTexture||_e.isDataArrayTexture||_e.isCompressedArrayTexture)&&(ue=!0);let we=Ae.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(we[N])?k=we[N][V]:k=we[N],z=!0):E.samples>0&&Ne.useMultisampledRTT(E)===!1?k=Ae.get(E).__webglMultisampledFramebuffer:Array.isArray(we)?k=we[V]:k=we,X.copy(E.viewport),ee.copy(E.scissor),Ie=E.scissorTest}else X.copy(et).multiplyScalar(Pe).floor(),ee.copy(Re).multiplyScalar(Pe).floor(),Ie=$e;if(V!==0&&(k=F),ce.bindFramebuffer(U.FRAMEBUFFER,k)&&ce.drawBuffers(E,k),ce.viewport(X),ce.scissor(ee),ce.setScissorTest(Ie),z){let xe=Ae.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+N,xe.__webglTexture,V)}else if(ue){let xe=N;for(let _e=0;_e<E.textures.length;_e++){let we=Ae.get(E.textures[_e]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+_e,we.__webglTexture,V,xe)}}else if(E!==null&&V!==0){let xe=Ae.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,xe.__webglTexture,V)}de=-1};function zl(E){let N=Ae.get(E);return(N.__readFormat!==E.format||N.__readType!==E.type)&&(N.__readFormat=E.format,N.__readType=E.type,N.__formatReadable=ct.textureFormatReadable(E.format),N.__typeReadable=ct.textureTypeReadable(E.type)),N}this.readRenderTargetPixels=function(E,N,V,k,z,ue,xe,_e=0){if(!(E&&E.isWebGLRenderTarget)){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Ae.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&xe!==void 0&&(we=we[xe],Array.isArray(we)&&(we=we[0])),we){ce.bindFramebuffer(U.FRAMEBUFFER,we);try{let Fe=E.textures[_e],tt=Fe.format,st=Fe.type;E.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+_e);let Ce=zl(Fe);if(Ce.__formatReadable===!1){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ce.__typeReadable===!1){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-k&&V>=0&&V<=E.height-z&&U.readPixels(N,V,k,z,oe.convert(tt),oe.convert(st),ue)}finally{let Fe=H!==null?Ae.get(H).__webglFramebuffer:null;ce.bindFramebuffer(U.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(E,N,V,k,z,ue,xe,_e=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=Ae.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&xe!==void 0&&(we=we[xe],Array.isArray(we)&&(we=we[0])),we)if(N>=0&&N<=E.width-k&&V>=0&&V<=E.height-z){ce.bindFramebuffer(U.FRAMEBUFFER,we);let Fe=E.textures[_e],tt=Fe.format,st=Fe.type;E.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+_e);let Ce=zl(Fe);if(Ce.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ce.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ut=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,ut),U.bufferData(U.PIXEL_PACK_BUFFER,ue.byteLength,U.STREAM_READ),U.readPixels(N,V,k,z,oe.convert(tt),oe.convert(st),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let Rt=H!==null?Ae.get(H).__webglFramebuffer:null;ce.bindFramebuffer(U.FRAMEBUFFER,Rt);let ft=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Ep(U,ft,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,ut),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ue),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(ut),U.deleteSync(ft),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,N=null,V=0){let k=Math.pow(2,-V),z=Math.floor(E.image.width*k),ue=Math.floor(E.image.height*k),xe=N!==null?N.x:0,_e=N!==null?N.y:0;Ne.setTexture2D(E,0),U.copyTexSubImage2D(U.TEXTURE_2D,V,0,0,xe,_e,z,ue),ce.unbindTexture()},this.copyTextureToTexture=function(E,N,V=null,k=null,z=0,ue=0){let xe,_e,we,Fe,tt,st,Ce,ut,Rt,ft=E.isCompressedTexture?E.mipmaps[ue]:E.image;if(V!==null)xe=V.max.x-V.min.x,_e=V.max.y-V.min.y,we=V.isBox3?V.max.z-V.min.z:1,Fe=V.min.x,tt=V.min.y,st=V.isBox3?V.min.z:0;else{let ot=Math.pow(2,-z);xe=Math.floor(ft.width*ot),_e=Math.floor(ft.height*ot),E.isDataArrayTexture?we=ft.depth:E.isData3DTexture?we=Math.floor(ft.depth*ot):we=1,Fe=0,tt=0,st=0}k!==null?(Ce=k.x,ut=k.y,Rt=k.z):(Ce=0,ut=0,Rt=0);let vt=oe.convert(N.format),Tt=oe.convert(N.type),De;N.isData3DTexture?(Ne.setTexture3D(N,0),De=U.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Ne.setTexture2DArray(N,0),De=U.TEXTURE_2D_ARRAY):(Ne.setTexture2D(N,0),De=U.TEXTURE_2D),ce.activeTexture(U.TEXTURE0),ce.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,N.flipY),ce.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),ce.pixelStorei(U.UNPACK_ALIGNMENT,N.unpackAlignment);let Gt=ce.getParameter(U.UNPACK_ROW_LENGTH),Ki=ce.getParameter(U.UNPACK_IMAGE_HEIGHT),Qi=ce.getParameter(U.UNPACK_SKIP_PIXELS),Ft=ce.getParameter(U.UNPACK_SKIP_ROWS),za=ce.getParameter(U.UNPACK_SKIP_IMAGES);ce.pixelStorei(U.UNPACK_ROW_LENGTH,ft.width),ce.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ft.height),ce.pixelStorei(U.UNPACK_SKIP_PIXELS,Fe),ce.pixelStorei(U.UNPACK_SKIP_ROWS,tt),ce.pixelStorei(U.UNPACK_SKIP_IMAGES,st);let Fi=E.isDataArrayTexture||E.isData3DTexture,er=N.isDataArrayTexture||N.isData3DTexture;if(E.isDepthTexture){let ot=Ae.get(E),Ut=Ae.get(N),ri=Ae.get(ot.__renderTarget),yt=Ae.get(Ut.__renderTarget);ce.bindFramebuffer(U.READ_FRAMEBUFFER,ri.__webglFramebuffer),ce.bindFramebuffer(U.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let Ht=0;Ht<we;Ht++)Fi&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ae.get(E).__webglTexture,z,st+Ht),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ae.get(N).__webglTexture,ue,Rt+Ht)),U.blitFramebuffer(Fe,tt,Fe+xe,tt+_e,Ce,ut,Ce+xe,ut+_e,U.DEPTH_BUFFER_BIT,U.NEAREST);ce.bindFramebuffer(U.READ_FRAMEBUFFER,null),ce.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(z!==0||E.isRenderTargetTexture||Ae.has(E)){let ot=Ae.get(E),Ut=Ae.get(N);ce.bindFramebuffer(U.READ_FRAMEBUFFER,j),ce.bindFramebuffer(U.DRAW_FRAMEBUFFER,I);for(let ri=0;ri<we;ri++)Fi?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ot.__webglTexture,z,st+ri):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ot.__webglTexture,z),er?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ut.__webglTexture,ue,Rt+ri):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ut.__webglTexture,ue),z!==0?U.blitFramebuffer(Fe,tt,Fe+xe,tt+_e,Ce,ut,Ce+xe,ut+_e,U.COLOR_BUFFER_BIT,U.NEAREST):er?U.copyTexSubImage3D(De,ue,Ce,ut,Rt+ri,Fe,tt,xe,_e):U.copyTexSubImage2D(De,ue,Ce,ut,Fe,tt,xe,_e);ce.bindFramebuffer(U.READ_FRAMEBUFFER,null),ce.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else er?E.isDataTexture||E.isData3DTexture?U.texSubImage3D(De,ue,Ce,ut,Rt,xe,_e,we,vt,Tt,ft.data):N.isCompressedArrayTexture?U.compressedTexSubImage3D(De,ue,Ce,ut,Rt,xe,_e,we,vt,ft.data):U.texSubImage3D(De,ue,Ce,ut,Rt,xe,_e,we,vt,Tt,ft):E.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,ue,Ce,ut,xe,_e,vt,Tt,ft.data):E.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,ue,Ce,ut,ft.width,ft.height,vt,ft.data):U.texSubImage2D(U.TEXTURE_2D,ue,Ce,ut,xe,_e,vt,Tt,ft);ce.pixelStorei(U.UNPACK_ROW_LENGTH,Gt),ce.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ki),ce.pixelStorei(U.UNPACK_SKIP_PIXELS,Qi),ce.pixelStorei(U.UNPACK_SKIP_ROWS,Ft),ce.pixelStorei(U.UNPACK_SKIP_IMAGES,za),ue===0&&N.generateMipmaps===!0&&N.mipmapsAutoUpdate===!0&&U.generateMipmap(De),ce.unbindTexture()},this.initRenderTarget=function(E){Ae.get(E).__webglFramebuffer===void 0&&Ne.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Ne.setTextureCube(E,0):E.isData3DTexture?Ne.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Ne.setTexture2DArray(E,0):Ne.setTexture2D(E,0),ce.unbindTexture()},this.resetState=function(){G=0,J=0,H=null,ce.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}}});var ol,Hu,Vu=ea(()=>{ol=[[[-78.828,1.434],[-78.814,1.443],[-78.853,1.49],[-78.861,1.559],[-78.9,1.546],[-78.997,1.608],[-79.023,1.638],[-79.008,1.665],[-78.972,1.676],[-78.954,1.693],[-78.925,1.741],[-78.846,1.821],[-78.799,1.833],[-78.76,1.831],[-78.612,1.801],[-78.591,1.784],[-78.573,1.782],[-78.547,1.86],[-78.555,1.892],[-78.544,1.915],[-78.547,1.92],[-78.573,1.897],[-78.591,1.897],[-78.598,1.929],[-78.587,2],[-78.609,2.029],[-78.63,2.025],[-78.648,1.981],[-78.659,1.975],[-78.666,1.983],[-78.67,2.03],[-78.702,2.147],[-78.702,2.191],[-78.673,2.267],[-78.645,2.278],[-78.573,2.434],[-78.558,2.449],[-78.565,2.432],[-78.558,2.381],[-78.526,2.496],[-78.508,2.491],[-78.432,2.587],[-78.346,2.648],[-78.335,2.647],[-78.277,2.542],[-78.256,2.542],[-78.27,2.635],[-78.249,2.663],[-78.234,2.647],[-78.227,2.616],[-78.234,2.593],[-78.209,2.537],[-78.184,2.515],[-78.133,2.493],[-78.087,2.51],[-78.083,2.577],[-78.105,2.641],[-78.097,2.652],[-78.004,2.655],[-77.968,2.677],[-77.95,2.675],[-77.917,2.633],[-77.889,2.635],[-77.907,2.598],[-77.903,2.581],[-77.885,2.572],[-77.838,2.566],[-77.777,2.577],[-77.759,2.591],[-77.752,2.628],[-77.784,2.672],[-77.799,2.675],[-77.777,2.689],[-77.799,2.699],[-77.791,2.717],[-77.806,2.726],[-77.799,2.744],[-77.813,2.748],[-77.813,2.765],[-77.795,2.758],[-77.734,2.787],[-77.745,2.793],[-77.77,2.785],[-77.784,2.795],[-77.766,2.815],[-77.709,2.812],[-77.691,2.792],[-77.698,2.814],[-77.734,2.822],[-77.723,2.841],[-77.68,2.854],[-77.669,2.868],[-77.64,2.846],[-77.637,2.869],[-77.658,2.876],[-77.709,2.861],[-77.716,2.876],[-77.709,2.918],[-77.698,2.929],[-77.683,2.927],[-77.644,2.898],[-77.619,2.932],[-77.622,2.949],[-77.64,2.956],[-77.622,2.983],[-77.626,2.991],[-77.651,2.996],[-77.655,3.005],[-77.655,2.991],[-77.665,2.984],[-77.687,2.986],[-77.691,2.998],[-77.712,2.974],[-77.723,2.969],[-77.723,2.983],[-77.647,3.074],[-77.572,3.138],[-77.539,3.197],[-77.507,3.195],[-77.503,3.224],[-77.478,3.227],[-77.5,3.244],[-77.539,3.238],[-77.543,3.246],[-77.507,3.283],[-77.464,3.302],[-77.478,3.314],[-77.478,3.334],[-77.457,3.356],[-77.399,3.369],[-77.381,3.388],[-77.345,3.329],[-77.32,3.32],[-77.367,3.386],[-77.363,3.418],[-77.352,3.43],[-77.338,3.406],[-77.334,3.411],[-77.345,3.432],[-77.327,3.491],[-77.334,3.511],[-77.313,3.511],[-77.316,3.481],[-77.284,3.486],[-77.266,3.471],[-77.266,3.481],[-77.284,3.498],[-77.273,3.504],[-77.298,3.511],[-77.291,3.523],[-77.277,3.518],[-77.277,3.533],[-77.327,3.531],[-77.323,3.548],[-77.277,3.547],[-77.298,3.558],[-77.277,3.567],[-77.284,3.58],[-77.266,3.585],[-77.244,3.587],[-77.248,3.572],[-77.208,3.58],[-77.226,3.59],[-77.197,3.633],[-77.19,3.663],[-77.169,3.653],[-77.118,3.678],[-77.172,3.677],[-77.176,3.693],[-77.136,3.704],[-77.125,3.717],[-77.187,3.704],[-77.205,3.726],[-77.201,3.744],[-77.194,3.758],[-77.169,3.737],[-77.125,3.734],[-77.165,3.746],[-77.176,3.758],[-77.143,3.759],[-77.125,3.778],[-77.143,3.788],[-77.151,3.813],[-77.133,3.827],[-77.118,3.81],[-77.122,3.8],[-77.107,3.813],[-77.115,3.852],[-77.068,3.867],[-77.032,3.916],[-77.093,3.91],[-77.079,3.921],[-77.125,3.93],[-77.122,3.886],[-77.179,3.852],[-77.251,3.84],[-77.291,3.861],[-77.273,3.886],[-77.313,3.908],[-77.302,3.969],[-77.269,3.986],[-77.259,3.975],[-77.273,3.964],[-77.208,3.977],[-77.208,3.984],[-77.244,3.977],[-77.19,4.067],[-77.205,4.068],[-77.208,4.08],[-77.226,4.077],[-77.266,4.109],[-77.259,4.099],[-77.266,4.067],[-77.291,4.072],[-77.298,4.046],[-77.32,4.053],[-77.32,4.006],[-77.341,3.964],[-77.345,3.93],[-77.374,3.937],[-77.381,3.95],[-77.374,3.964],[-77.424,4.004],[-77.435,4.03],[-77.431,4.045],[-77.41,4.046],[-77.431,4.094],[-77.435,4.154],[-77.428,4.18],[-77.403,4.193],[-77.377,4.193],[-77.37,4.214],[-77.349,4.225],[-77.32,4.2],[-77.298,4.203],[-77.237,4.266],[-77.338,4.269],[-77.388,4.347],[-77.352,4.403],[-77.345,4.445],[-77.313,4.472],[-77.313,4.479],[-77.334,4.472],[-77.32,4.546],[-77.32,4.683],[-77.298,4.656],[-77.291,4.681],[-77.295,4.696],[-77.32,4.71],[-77.327,4.752],[-77.302,4.749],[-77.259,4.703],[-77.269,4.735],[-77.313,4.788],[-77.32,4.821],[-77.341,4.813],[-77.349,4.854],[-77.374,5.149],[-77.345,5.245],[-77.359,5.254],[-77.359,5.298],[-77.374,5.316],[-77.381,5.375],[-77.395,5.37],[-77.41,5.385],[-77.41,5.402],[-77.392,5.396],[-77.381,5.402],[-77.392,5.409],[-77.403,5.458],[-77.435,5.472],[-77.464,5.5],[-77.493,5.505],[-77.511,5.485],[-77.521,5.495],[-77.554,5.492],[-77.561,5.504],[-77.525,5.531],[-77.493,5.595],[-77.449,5.602],[-77.406,5.629],[-77.356,5.608],[-77.334,5.615],[-77.316,5.647],[-77.32,5.662],[-77.302,5.662],[-77.295,5.678],[-77.269,5.693],[-77.244,5.735],[-77.248,5.787],[-77.313,5.897],[-77.313,5.919],[-77.352,6.025],[-77.359,6.025],[-77.359,5.998],[-77.367,5.998],[-77.41,6.083],[-77.471,6.157],[-77.485,6.189],[-77.478,6.301],[-77.413,6.24],[-77.381,6.301],[-77.377,6.351],[-77.399,6.388],[-77.374,6.404],[-77.359,6.39],[-77.359,6.419],[-77.381,6.444],[-77.341,6.544],[-77.345,6.566],[-77.413,6.637],[-77.41,6.694],[-77.464,6.721],[-77.507,6.701],[-77.518,6.684],[-77.511,6.67],[-77.539,6.664],[-77.532,6.713],[-77.572,6.8],[-77.593,6.827],[-77.622,6.856],[-77.673,6.88],[-77.683,6.876],[-77.687,6.854],[-77.698,6.849],[-77.701,6.919],[-77.691,6.947],[-77.651,6.976],[-77.665,7.015],[-77.698,7.074],[-77.691,7.055],[-77.698,7.047],[-77.788,7.148],[-77.827,7.164],[-77.838,7.187],[-77.853,7.192],[-77.845,7.197],[-77.896,7.234],[-77.82,7.476],[-77.773,7.474],[-77.755,7.486],[-77.73,7.53],[-77.766,7.626],[-77.763,7.706],[-77.741,7.719],[-77.68,7.672],[-77.669,7.66],[-77.676,7.645],[-77.662,7.64],[-77.626,7.587],[-77.615,7.537],[-77.604,7.527],[-77.579,7.528],[-77.511,7.594],[-77.37,7.68],[-77.341,7.707],[-77.345,7.726],[-77.367,7.744],[-77.381,7.775],[-77.323,7.881],[-77.269,7.918],[-77.165,7.939],[-77.208,7.996],[-77.23,8.099],[-77.259,8.155],[-77.323,8.261],[-77.363,8.273],[-77.374,8.29],[-77.392,8.393],[-77.421,8.457],[-77.449,8.47],[-77.489,8.474],[-77.482,8.526],[-77.428,8.592],[-77.435,8.627],[-77.374,8.651],[-77.367,8.678],[-77.352,8.67],[-77.341,8.633],[-77.298,8.573],[-77.273,8.496],[-77.143,8.421],[-77.053,8.276],[-77.032,8.259],[-76.978,8.254],[-76.963,8.266],[-76.956,8.241],[-76.971,8.246],[-76.963,8.204],[-76.953,8.197],[-76.935,8.205],[-76.935,8.185],[-76.92,8.199],[-76.917,8.188],[-76.927,8.158],[-76.949,8.165],[-76.942,8.129],[-76.917,8.114],[-76.895,8.118],[-76.895,8.136],[-76.834,8.136],[-76.848,8.096],[-76.827,8.102],[-76.827,8.096],[-76.859,8.082],[-76.837,8.055],[-76.866,8.062],[-76.834,8.028],[-76.884,8.047],[-76.909,8.043],[-76.924,8.023],[-76.917,8.021],[-76.935,7.964],[-76.906,7.93],[-76.855,7.913],[-76.769,7.917],[-76.747,7.94],[-76.751,7.962],[-76.737,7.989],[-76.729,8.052],[-76.744,8.102],[-76.744,8.075],[-76.751,8.075],[-76.758,8.114],[-76.747,8.172],[-76.769,8.258],[-76.769,8.398],[-76.776,8.416],[-76.801,8.43],[-76.819,8.479],[-76.837,8.501],[-76.906,8.538],[-76.935,8.541],[-76.935,8.535],[-76.949,8.545],[-76.895,8.621],[-76.672,8.68],[-76.654,8.695],[-76.65,8.729],[-76.639,8.734],[-76.647,8.747],[-76.546,8.785],[-76.427,8.884],[-76.434,8.903],[-76.427,8.911],[-76.323,8.942],[-76.301,8.97],[-76.265,8.996],[-76.258,9.007],[-76.265,9.043],[-76.254,9.072],[-76.193,9.134],[-76.168,9.247],[-76.117,9.266],[-76.11,9.311],[-76.096,9.333],[-76.006,9.365],[-75.952,9.403],[-75.945,9.441],[-75.909,9.428],[-75.819,9.446],[-75.797,9.43],[-75.797,9.418],[-75.826,9.426],[-75.855,9.413],[-75.84,9.404],[-75.826,9.413],[-75.811,9.391],[-75.783,9.413],[-75.739,9.426],[-75.671,9.409],[-75.621,9.453],[-75.595,9.499],[-75.577,9.563],[-75.577,9.62],[-75.617,9.69],[-75.635,9.69],[-75.657,9.705],[-75.703,9.691],[-75.703,9.701],[-75.649,9.757],[-75.639,9.782],[-75.624,9.862],[-75.588,9.965],[-75.574,10.075],[-75.588,10.129],[-75.567,10.144],[-75.541,10.188],[-75.531,10.24],[-75.603,10.196],[-75.642,10.154],[-75.685,10.132],[-75.703,10.134],[-75.689,10.167],[-75.646,10.193],[-75.631,10.213],[-75.617,10.237],[-75.613,10.269],[-75.592,10.269],[-75.599,10.277],[-75.592,10.303],[-75.585,10.282],[-75.516,10.319],[-75.523,10.392],[-75.538,10.387],[-75.552,10.419],[-75.577,10.399],[-75.567,10.433],[-75.513,10.482],[-75.502,10.488],[-75.523,10.433],[-75.505,10.426],[-75.487,10.456],[-75.487,10.502],[-75.509,10.509],[-75.502,10.529],[-75.509,10.559],[-75.523,10.568],[-75.52,10.576],[-75.462,10.603],[-75.455,10.612],[-75.462,10.632],[-75.423,10.644],[-75.405,10.681],[-75.307,10.71],[-75.279,10.743],[-75.257,10.737],[-75.264,10.72],[-75.25,10.706],[-75.221,10.735],[-75.228,10.769],[-75.25,10.748],[-75.271,10.758],[-75.268,10.796],[-75.232,10.807],[-75.207,10.831],[-75.171,10.84],[-75.109,10.88],[-75.048,10.902],[-75.023,10.975],[-74.962,10.995],[-74.926,11.029],[-74.922,11.046],[-74.861,11.049],[-74.847,11.062],[-74.85,11.103],[-74.843,11.11],[-74.523,10.997],[-74.404,10.983],[-74.299,10.992],[-74.361,10.971],[-74.505,10.975],[-74.505,10.944],[-74.519,10.927],[-74.483,10.851],[-74.526,10.883],[-74.537,10.872],[-74.544,10.882],[-74.58,10.889],[-74.598,10.868],[-74.605,10.834],[-74.605,10.789],[-74.598,10.782],[-74.584,10.787],[-74.566,10.831],[-74.562,10.814],[-74.544,10.809],[-74.544,10.762],[-74.512,10.757],[-74.494,10.782],[-74.508,10.775],[-74.523,10.787],[-74.519,10.816],[-74.505,10.833],[-74.508,10.845],[-74.476,10.828],[-74.458,10.748],[-74.397,10.75],[-74.361,10.775],[-74.332,10.838],[-74.332,10.872],[-74.296,10.929],[-74.281,10.99],[-74.217,11.079],[-74.217,11.1],[-74.235,11.125],[-74.227,11.162],[-74.242,11.201],[-74.227,11.218],[-74.235,11.241],[-74.202,11.282],[-74.188,11.317],[-74.152,11.319],[-74.152,11.344],[-74.137,11.324],[-74.127,11.344],[-74.112,11.338],[-74.112,11.358],[-74.083,11.331],[-74.065,11.351],[-74.051,11.344],[-74.029,11.358],[-74.004,11.355],[-73.943,11.317],[-73.828,11.277],[-73.705,11.268],[-73.403,11.277],[-73.291,11.294],[-73.219,11.344],[-73.191,11.385],[-73.144,11.425],[-73.111,11.441],[-73.054,11.495],[-72.935,11.557],[-72.759,11.697],[-72.705,11.721],[-72.643,11.733],[-72.597,11.761],[-72.579,11.756],[-72.535,11.782],[-72.435,11.795],[-72.391,11.826],[-72.359,11.834],[-72.316,11.865],[-72.262,11.886],[-72.233,11.92],[-72.215,11.974],[-72.139,12.104],[-72.147,12.201],[-72.172,12.221],[-72.172,12.234],[-72.139,12.256],[-72.107,12.244],[-72.006,12.263],[-71.97,12.255],[-71.974,12.236],[-72.017,12.194],[-71.999,12.187],[-71.985,12.162],[-71.967,12.153],[-71.934,12.17],[-71.916,12.202],[-71.869,12.209],[-71.862,12.217],[-71.88,12.246],[-71.869,12.256],[-71.895,12.278],[-71.92,12.283],[-71.952,12.27],[-71.959,12.283],[-71.877,12.344],[-71.873,12.363],[-71.83,12.376],[-71.808,12.373],[-71.841,12.352],[-71.844,12.337],[-71.819,12.319],[-71.805,12.324],[-71.805,12.336],[-71.783,12.337],[-71.751,12.356],[-71.74,12.386],[-71.751,12.391],[-71.747,12.4],[-71.722,12.413],[-71.715,12.413],[-71.715,12.386],[-71.693,12.366],[-71.686,12.376],[-71.693,12.393],[-71.632,12.427],[-71.679,12.417],[-71.661,12.44],[-71.693,12.427],[-71.686,12.454],[-71.736,12.413],[-71.74,12.42],[-71.715,12.454],[-71.675,12.469],[-71.603,12.447],[-71.513,12.444],[-71.437,12.396],[-71.391,12.393],[-71.362,12.374],[-71.261,12.342],[-71.221,12.297],[-71.153,12.15],[-71.106,12.076],[-71.139,12.016],[-71.236,11.959],[-71.254,11.937],[-71.301,11.92],[-71.326,11.849],[-71.358,11.851],[-71.409,11.812],[-71.448,11.795],[-71.97,11.662],[-71.992,11.648],[-72.265,11.155],[-72.283,11.15],[-72.341,11.162],[-72.417,11.138],[-72.481,11.133],[-72.499,11.122],[-72.507,11.083],[-72.543,11.04],[-72.575,10.958],[-72.593,10.932],[-72.683,10.856],[-72.755,10.674],[-72.841,10.561],[-72.863,10.509],[-72.917,10.428],[-72.935,10.176],[-72.989,9.999],[-72.996,9.901],[-72.978,9.838],[-72.985,9.813],[-73.072,9.664],[-73.108,9.578],[-73.18,9.522],[-73.198,9.479],[-73.277,9.362],[-73.324,9.256],[-73.378,9.213],[-73.392,9.195],[-73.392,9.173],[-73.378,9.164],[-73.212,9.173],[-73.126,9.234],[-73.075,9.254],[-73.032,9.294],[-73.011,9.296],[-72.993,9.252],[-72.996,9.235],[-72.982,9.22],[-72.975,9.191],[-72.975,9.129],[-72.957,9.104],[-72.935,9.099],[-72.874,9.134],[-72.834,9.134],[-72.827,9.143],[-72.791,9.114],[-72.787,9.102],[-72.802,9.08],[-72.777,9.041],[-72.676,8.651],[-72.654,8.617],[-72.481,8.43],[-72.445,8.394],[-72.402,8.371],[-72.384,8.322],[-72.395,8.273],[-72.391,8.234],[-72.337,8.104],[-72.334,8.065],[-72.352,8.043],[-72.406,8.043],[-72.442,7.977],[-72.489,7.949],[-72.492,7.937],[-72.46,7.893],[-72.453,7.832],[-72.474,7.755],[-72.485,7.65],[-72.463,7.57],[-72.481,7.508],[-72.478,7.484],[-72.453,7.44],[-72.413,7.413],[-72.323,7.39],[-72.24,7.391],[-72.208,7.381],[-72.165,7.334],[-72.175,7.28],[-72.165,7.221],[-72.1,7.088],[-72.006,7.018],[-71.848,6.985],[-71.801,7.01],[-71.772,7.012],[-71.776,7.028],[-71.697,7.035],[-71.671,7.028],[-71.668,7.052],[-71.621,7.052],[-71.596,7.03],[-71.56,7.042],[-71.549,7.028],[-71.509,7.035],[-71.466,7.013],[-71.412,7.032],[-71.365,7.02],[-71.293,7.025],[-71.283,7.018],[-71.275,6.985],[-71.214,6.978],[-71.185,6.963],[-71.135,6.993],[-71.067,6.985],[-71.013,6.991],[-70.962,7.01],[-70.919,7.04],[-70.897,7.069],[-70.703,7.099],[-70.674,7.081],[-70.638,7.074],[-70.577,7.086],[-70.512,7.01],[-70.451,7.008],[-70.437,6.993],[-70.318,6.939],[-70.289,6.937],[-70.231,6.969],[-70.195,6.978],[-70.131,6.973],[-70.08,6.922],[-69.443,6.122],[-69.331,6.157],[-69.31,6.147],[-69.27,6.098],[-69.245,6.081],[-69.191,6.113],[-69.13,6.171],[-69.061,6.218],[-69.036,6.22],[-68.978,6.198],[-68.96,6.203],[-68.892,6.184],[-68.809,6.184],[-68.636,6.135],[-68.586,6.171],[-68.521,6.174],[-68.428,6.198],[-68.305,6.177],[-68.19,6.218],[-68.147,6.223],[-68.017,6.211],[-67.978,6.218],[-67.924,6.235],[-67.909,6.252],[-67.906,6.275],[-67.87,6.28],[-67.826,6.314],[-67.729,6.302],[-67.574,6.267],[-67.492,6.201],[-67.448,6.198],[-67.488,6.167],[-67.492,6.115],[-67.456,6.057],[-67.427,6.039],[-67.423,5.978],[-67.484,5.944],[-67.6,5.821],[-67.643,5.745],[-67.65,5.656],[-67.636,5.578],[-67.614,5.554],[-67.646,5.483],[-67.7,5.441],[-67.733,5.429],[-67.751,5.409],[-67.772,5.409],[-67.808,5.379],[-67.834,5.34],[-67.844,5.298],[-67.812,5.186],[-67.826,5.12],[-67.794,5.053],[-67.808,5.036],[-67.805,4.992],[-67.826,4.894],[-67.812,4.806],[-67.823,4.744],[-67.841,4.712],[-67.855,4.566],[-67.873,4.546],[-67.873,4.521],[-67.83,4.492],[-67.812,4.443],[-67.794,4.43],[-67.801,4.399],[-67.78,4.35],[-67.801,4.306],[-67.805,4.269],[-67.787,4.173],[-67.74,4.119],[-67.715,4.057],[-67.718,4.04],[-67.7,4.013],[-67.693,3.928],[-67.643,3.835],[-67.632,3.763],[-67.596,3.731],[-67.538,3.736],[-67.499,3.717],[-67.47,3.68],[-67.405,3.504],[-67.376,3.476],[-67.337,3.46],[-67.304,3.425],[-67.308,3.384],[-67.394,3.266],[-67.452,3.244],[-67.837,2.886],[-67.855,2.858],[-67.855,2.79],[-67.823,2.827],[-67.769,2.832],[-67.751,2.842],[-67.69,2.807],[-67.664,2.802],[-67.625,2.814],[-67.585,2.758],[-67.574,2.69],[-67.564,2.682],[-67.499,2.675],[-67.47,2.626],[-67.441,2.609],[-67.373,2.53],[-67.34,2.51],[-67.326,2.474],[-67.189,2.395],[-67.175,2.336],[-67.218,2.285],[-67.218,2.267],[-67.178,2.155],[-67.121,2.12],[-67.114,2.103],[-67.11,2.049],[-67.135,2.003],[-67.132,1.991],[-67.092,1.946],[-67.067,1.893],[-66.98,1.665],[-66.973,1.579],[-66.934,1.502],[-66.934,1.424],[-66.901,1.394],[-66.883,1.35],[-66.883,1.326],[-66.901,1.289],[-66.876,1.223],[-67.067,1.172],[-67.085,1.176],[-67.096,1.201],[-67.099,1.253],[-67.074,1.541],[-67.081,1.605],[-67.117,1.709],[-67.157,1.789],[-67.29,1.975],[-67.34,2.089],[-67.366,2.115],[-67.423,2.138],[-67.441,2.14],[-67.474,2.111],[-67.51,2.108],[-67.553,2.072],[-67.592,2.056],[-67.819,1.784],[-67.859,1.762],[-67.927,1.741],[-67.999,1.75],[-68.032,1.777],[-68.078,1.86],[-68.111,1.942],[-68.186,1.981],[-68.194,2.015],[-68.28,1.829],[-68.248,1.823],[-68.24,1.77],[-68.201,1.768],[-68.19,1.736],[-68.165,1.721],[-69.353,1.72],[-69.544,1.772],[-69.58,1.77],[-69.648,1.738],[-69.731,1.74],[-69.806,1.708],[-69.857,1.708],[-69.85,1.669],[-69.853,1.059],[-69.828,1.058],[-69.763,1.091],[-69.727,1.083],[-69.727,1.061],[-69.716,1.059],[-69.619,1.073],[-69.544,1.056],[-69.479,1.061],[-69.418,1.029],[-69.356,1.068],[-69.288,1.039],[-69.234,.988],[-69.227,.958],[-69.205,.944],[-69.209,.907],[-69.151,.868],[-69.151,.855],[-69.176,.845],[-69.169,.755],[-69.191,.728],[-69.191,.715],[-69.151,.691],[-69.137,.651],[-69.144,.637],[-69.162,.632],[-69.202,.639],[-69.227,.615],[-69.295,.619],[-69.292,.646],[-69.302,.656],[-69.364,.641],[-69.439,.717],[-69.479,.733],[-69.594,.689],[-69.619,.651],[-69.695,.669],[-69.767,.62],[-69.806,.607],[-69.932,.588],[-70.001,.59],[-70.041,.575],[-70.055,.588],[-70.069,-.16],[-69.943,-.305],[-69.857,-.342],[-69.835,-.383],[-69.792,-.408],[-69.763,-.44],[-69.648,-.493],[-69.619,-.525],[-69.605,-.606],[-69.583,-.644],[-69.63,-.734],[-69.572,-.813],[-69.576,-.839],[-69.565,-.864],[-69.536,-.889],[-69.54,-.921],[-69.533,-.933],[-69.493,-.957],[-69.472,-.987],[-69.443,-1.008],[-69.446,-1.092],[-69.4,-1.183],[-69.421,-1.239],[-69.418,-1.284],[-69.436,-1.376],[-69.436,-1.423],[-69.468,-1.561],[-69.947,-4.204],[-69.961,-4.233],[-70.03,-4.131],[-70.163,-4.055],[-70.188,-4.028],[-70.217,-3.925],[-70.275,-3.856],[-70.311,-3.829],[-70.35,-3.816],[-70.379,-3.819],[-70.44,-3.868],[-70.491,-3.878],[-70.545,-3.865],[-70.692,-3.787],[-70.735,-3.782],[-70.051,-2.715],[-70.077,-2.691],[-70.095,-2.632],[-70.105,-2.625],[-70.127,-2.639],[-70.141,-2.667],[-70.152,-2.669],[-70.163,-2.656],[-70.163,-2.635],[-70.185,-2.62],[-70.217,-2.632],[-70.235,-2.625],[-70.275,-2.546],[-70.296,-2.536],[-70.361,-2.561],[-70.375,-2.532],[-70.35,-2.519],[-70.347,-2.497],[-70.357,-2.487],[-70.401,-2.485],[-70.444,-2.499],[-70.458,-2.493],[-70.483,-2.453],[-70.537,-2.436],[-70.577,-2.406],[-70.595,-2.416],[-70.606,-2.451],[-70.649,-2.451],[-70.656,-2.446],[-70.656,-2.409],[-70.699,-2.37],[-70.707,-2.328],[-70.789,-2.308],[-70.905,-2.211],[-70.926,-2.22],[-71.02,-2.196],[-71.031,-2.211],[-71.02,-2.259],[-71.031,-2.264],[-71.056,-2.262],[-71.081,-2.247],[-71.121,-2.252],[-71.142,-2.262],[-71.164,-2.309],[-71.211,-2.34],[-71.254,-2.326],[-71.308,-2.348],[-71.315,-2.335],[-71.419,-2.375],[-71.434,-2.355],[-71.412,-2.326],[-71.455,-2.255],[-71.466,-2.252],[-71.481,-2.266],[-71.499,-2.314],[-71.52,-2.293],[-71.527,-2.232],[-71.538,-2.223],[-71.596,-2.211],[-71.653,-2.174],[-71.679,-2.169],[-71.733,-2.19],[-71.747,-2.132],[-71.837,-2.179],[-71.877,-2.245],[-71.931,-2.289],[-71.949,-2.325],[-72.06,-2.32],[-72.089,-2.331],[-72.161,-2.406],[-72.175,-2.411],[-72.251,-2.396],[-72.283,-2.406],[-72.283,-2.433],[-72.377,-2.451],[-72.413,-2.438],[-72.442,-2.406],[-72.564,-2.384],[-72.607,-2.347],[-72.643,-2.335],[-72.683,-2.404],[-72.712,-2.423],[-72.733,-2.367],[-72.755,-2.38],[-72.762,-2.402],[-72.805,-2.377],[-72.87,-2.412],[-72.935,-2.426],[-72.989,-2.338],[-73.057,-2.299],[-73.083,-2.345],[-73.101,-2.314],[-73.144,-2.304],[-73.162,-2.286],[-73.165,-2.255],[-73.198,-2.213],[-73.201,-2.203],[-73.187,-2.176],[-73.151,-2.144],[-73.111,-2.073],[-73.126,-2.061],[-73.144,-1.999],[-73.169,-1.96],[-73.173,-1.929],[-73.158,-1.896],[-73.194,-1.837],[-73.187,-1.799],[-73.194,-1.789],[-73.248,-1.742],[-73.259,-1.742],[-73.266,-1.772],[-73.317,-1.766],[-73.349,-1.791],[-73.389,-1.761],[-73.439,-1.759],[-73.446,-1.739],[-73.511,-1.698],[-73.533,-1.675],[-73.518,-1.602],[-73.486,-1.573],[-73.497,-1.479],[-73.536,-1.435],[-73.576,-1.416],[-73.583,-1.401],[-73.561,-1.372],[-73.59,-1.35],[-73.597,-1.306],[-73.619,-1.306],[-73.63,-1.264],[-73.68,-1.234],[-73.734,-1.217],[-73.756,-1.183],[-73.803,-1.224],[-73.871,-1.202],[-73.921,-1.114],[-73.936,-1.107],[-73.968,-1.116],[-73.983,-1.107],[-73.972,-1.082],[-73.983,-1.067],[-74.011,-1.09],[-74.037,-1.08],[-74.076,-.991],[-74.094,-1.019],[-74.119,-1.021],[-74.181,-.997],[-74.242,-.987],[-74.267,-.972],[-74.289,-.943],[-74.303,-.898],[-74.346,-.859],[-74.339,-.847],[-74.296,-.847],[-74.289,-.837],[-74.31,-.802],[-74.303,-.785],[-74.339,-.778],[-74.386,-.722],[-74.386,-.704],[-74.364,-.677],[-74.418,-.543],[-74.443,-.535],[-74.476,-.496],[-74.562,-.44],[-74.641,-.341],[-74.688,-.354],[-74.717,-.327],[-74.789,-.312],[-74.757,-.278],[-74.789,-.209],[-74.825,-.17],[-74.836,-.173],[-74.861,-.214],[-74.883,-.222],[-74.955,-.2],[-75.009,-.145],[-75.052,-.135],[-75.102,-.069],[-75.142,-.043],[-75.185,-.032],[-75.221,-.033],[-75.239,-.075],[-75.282,-.108],[-75.466,-.04],[-75.628,.078],[-75.646,.085],[-75.732,.071],[-75.79,.085],[-75.952,.203],[-75.973,.252],[-76.053,.364],[-76.121,.352],[-76.135,.397],[-76.225,.408],[-76.301,.462],[-76.366,.408],[-76.416,.402],[-76.42,.321],[-76.409,.254],[-76.427,.242],[-76.524,.232],[-76.564,.217],[-76.585,.222],[-76.629,.259],[-76.726,.277],[-76.737,.272],[-76.733,.234],[-76.751,.232],[-76.798,.25],[-76.884,.24],[-76.945,.288],[-77.046,.306],[-77.082,.348],[-77.136,.355],[-77.208,.335],[-77.399,.387],[-77.424,.408],[-77.435,.435],[-77.449,.497],[-77.453,.602],[-77.467,.651],[-77.511,.661],[-77.543,.656],[-77.644,.717],[-77.665,.747],[-77.673,.82],[-77.705,.843],[-77.727,.843],[-77.809,.813],[-77.849,.809],[-77.903,.831],[-77.917,.875],[-77.939,.872],[-78.007,.899],[-78.079,.901],[-78.119,.921],[-78.249,1.02],[-78.331,1.046],[-78.375,1.074],[-78.486,1.193],[-78.54,1.205],[-78.569,1.196],[-78.598,1.235],[-78.601,1.264],[-78.666,1.267],[-78.771,1.394],[-78.828,1.434]],[[-78.13,2.628],[-78.097,2.572],[-78.097,2.54],[-78.108,2.513],[-78.133,2.505],[-78.184,2.545],[-78.216,2.598],[-78.195,2.631],[-78.216,2.682],[-78.166,2.685],[-78.144,2.674],[-78.13,2.628]],[[-77.903,2.696],[-77.849,2.638],[-77.784,2.594],[-77.809,2.579],[-77.838,2.577],[-77.889,2.594],[-77.867,2.64],[-77.914,2.658],[-77.917,2.697],[-77.903,2.696]],[[-77.806,2.662],[-77.766,2.633],[-77.755,2.618],[-77.759,2.603],[-77.777,2.601],[-77.845,2.648],[-77.881,2.696],[-77.881,2.724],[-77.86,2.709],[-77.845,2.724],[-77.806,2.662]],[[-77.352,4.266],[-77.334,4.256],[-77.273,4.259],[-77.302,4.217],[-77.334,4.246],[-77.381,4.232],[-77.467,4.237],[-77.503,4.21],[-77.547,4.197],[-77.55,4.205],[-77.543,4.232],[-77.5,4.261],[-77.435,4.259],[-77.464,4.286],[-77.428,4.286],[-77.453,4.291],[-77.449,4.301],[-77.413,4.32],[-77.435,4.327],[-77.428,4.34],[-77.385,4.315],[-77.352,4.266]],[[-81.712,12.523],[-81.715,12.564],[-81.69,12.591],[-81.705,12.504],[-81.719,12.503],[-81.723,12.511],[-81.712,12.523]],[[-81.384,13.318],[-81.388,13.342],[-81.366,13.374],[-81.345,13.349],[-81.352,13.334],[-81.384,13.318]],[[-81.611,3.959],[-81.615,3.969],[-81.6,3.989],[-81.582,3.992],[-81.579,3.975],[-81.611,3.959]],[[-78.187,2.991],[-78.166,3.001],[-78.166,2.959],[-78.195,2.934],[-78.22,2.934],[-78.22,2.944],[-78.205,2.945],[-78.187,2.991]],[[-75.588,10.368],[-75.577,10.379],[-75.538,10.363],[-75.534,10.35],[-75.545,10.34],[-75.577,10.338],[-75.581,10.319],[-75.592,10.319],[-75.588,10.368]]],Hu=[[[-60.018,8.549],[-59.831,8.306],[-59.849,8.248],[-59.964,8.191],[-60.032,8.054],[-60.176,7.993],[-60.382,7.828],[-60.515,7.813],[-60.608,7.648],[-60.72,7.537],[-60.605,7.321],[-60.634,7.21],[-60.583,7.156],[-60.392,7.165],[-60.324,7.134],[-60.353,7.004],[-60.396,6.945],[-60.716,6.768],[-60.875,6.787],[-60.94,6.733],[-61.145,6.695],[-61.202,6.589],[-61.152,6.446],[-61.13,6.214],[-61.39,5.939],[-60.742,5.202],[-60.673,5.164],[-60.605,4.995],[-60.626,4.893],[-60.742,4.775],[-60.907,4.686],[-61.004,4.535],[-61.102,4.504],[-61.282,4.518],[-61.368,4.433],[-61.48,4.401],[-61.555,4.289],[-62.153,4.098],[-62.412,4.157],[-62.61,4.042],[-62.711,4.018],[-62.765,3.672],[-62.858,3.594],[-62.97,3.594],[-63.337,3.943],[-63.528,3.894],[-63.654,3.941],[-64.021,3.929],[-64.194,4.127],[-64.576,4.139],[-64.723,4.275],[-64.788,4.276],[-64.817,4.233],[-64.669,4.013],[-64.223,3.587],[-64.219,3.205],[-64.039,2.801],[-64.01,2.672],[-64.046,2.502],[-63.924,2.452],[-63.388,2.412],[-63.395,2.223],[-63.463,2.136],[-63.571,2.12],[-63.845,1.976],[-64.007,1.931],[-64.115,1.619],[-64.205,1.53],[-64.306,1.455],[-64.486,1.452],[-64.73,1.254],[-64.817,1.257],[-65.105,1.108],[-65.263,.931],[-65.36,.869],[-65.472,.692],[-65.555,.688],[-65.522,.843],[-65.566,.926],[-65.681,.983],[-66.059,.785],[-66.3,.752],[-66.43,.822],[-66.876,1.223],[-66.883,1.358],[-67.214,2.275],[-67.211,2.389],[-67.567,2.69],[-67.618,2.794],[-67.765,2.834],[-67.859,2.794],[-67.834,2.893],[-67.355,3.323],[-67.312,3.415],[-67.499,3.691],[-67.603,3.769],[-67.661,3.865],[-67.783,4.198],[-67.816,4.455],[-67.855,4.507],[-67.805,5.132],[-67.826,5.271],[-67.787,5.375],[-67.693,5.448],[-67.643,5.559],[-67.632,5.709],[-67.574,5.834],[-67.474,5.931],[-67.438,6.026],[-67.481,6.181],[-67.567,6.242],[-67.859,6.29],[-67.938,6.242],[-68.471,6.156],[-68.737,6.156],[-68.939,6.198],[-69.09,6.184],[-69.266,6.099],[-69.356,6.148],[-69.428,6.124],[-70.131,6.953],[-70.386,6.972],[-70.656,7.084],[-70.739,7.09],[-71.013,6.995],[-71.128,6.986],[-71.621,7.033],[-71.891,6.99],[-72.006,7.033],[-72.085,7.097],[-72.208,7.37],[-72.395,7.415],[-72.471,7.524],[-72.445,7.965],[-72.359,8.087],[-72.363,8.153],[-72.417,8.382],[-72.665,8.627],[-72.798,9.109],[-72.96,9.135],[-73.011,9.24],[-73.057,9.259],[-73.194,9.195],[-73.338,9.168],[-73.367,9.195],[-73.007,9.79],[-72.87,10.491],[-72.69,10.835],[-72.445,11.115],[-72.247,11.196],[-71.959,11.667],[-71.535,11.774],[-71.319,11.863]],[[-58.2,-32.471],[-58.124,-32.322],[-58.121,-32.249],[-58.178,-32.119],[-58.16,-31.987],[-58.189,-31.924],[-58.168,-31.872],[-58.042,-31.77],[-57.988,-31.621],[-58.009,-31.534],[-58.052,-31.496],[-58.034,-31.416],[-57.894,-31.195],[-57.869,-31.105],[-57.887,-30.937],[-57.833,-30.918],[-57.811,-30.859],[-57.818,-30.713],[-57.872,-30.591],[-57.833,-30.496],[-57.714,-30.385],[-57.61,-30.188],[-57.552,-30.261],[-57.214,-30.284],[-57.12,-30.145],[-57.034,-30.11],[-56.832,-30.107],[-56.177,-30.628],[-56.044,-30.777],[-56,-30.838],[-56.004,-31.079],[-55.874,-31.07],[-55.666,-30.925],[-55.626,-30.859],[-55.558,-30.876],[-55.367,-31.046],[-55.255,-31.225],[-55.172,-31.28],[-55.09,-31.313],[-55.036,-31.279],[-54.895,-31.392],[-54.589,-31.485],[-54.37,-31.746],[-54.222,-31.855],[-53.92,-31.952],[-53.761,-32.056],[-53.603,-32.404],[-53.491,-32.503],[-53.156,-32.68],[-53.124,-32.737],[-53.484,-33.069],[-53.531,-33.171],[-53.531,-33.655],[-53.372,-33.742]],[[-54.157,5.36],[-54.33,5.188],[-54.452,5.014],[-54.481,4.837],[-54.427,4.584],[-54.442,4.427],[-54.398,4.202],[-54.341,4.139],[-54.352,4.054],[-53.992,3.589],[-54.01,3.448],[-54.204,3.138],[-54.172,2.993],[-54.197,2.818],[-54.402,2.462],[-54.485,2.415],[-54.535,2.342],[-54.618,2.327],[-54.697,2.36],[-54.722,2.441],[-54.877,2.45],[-54.978,2.598],[-55.345,2.488],[-55.385,2.441],[-55.73,2.407],[-55.975,2.516],[-56.022,2.393],[-56.13,2.299],[-56.137,2.259],[-56.072,2.237],[-55.914,2.039],[-55.928,1.888],[-56.018,1.843],[-56.483,1.941],[-56.562,2.006],[-56.706,2.037],[-56.933,2.395],[-57.106,2.768],[-57.21,2.882],[-57.232,3.108],[-57.278,3.164],[-57.304,3.377],[-57.548,3.353],[-57.646,3.395],[-57.649,3.518],[-57.833,3.676],[-57.865,3.787],[-58.031,4.002],[-58.056,4.172],[-57.948,4.349],[-57.847,4.669],[-57.916,4.82],[-57.844,4.922],[-57.71,4.992],[-57.332,5.019],[-57.311,5.106],[-57.21,5.195],[-57.217,5.231],[-57.278,5.247],[-57.318,5.335],[-57.196,5.549]],[[-80.326,-3.388],[-80.272,-3.425],[-80.221,-3.614],[-80.229,-3.739],[-80.178,-3.878],[-80.304,-4.004],[-80.437,-3.978],[-80.491,-4.01],[-80.488,-4.166],[-80.455,-4.206],[-80.355,-4.209],[-80.488,-4.393],[-80.477,-4.43],[-80.383,-4.464],[-80.139,-4.296],[-79.797,-4.477],[-79.638,-4.456],[-79.516,-4.539],[-79.501,-4.671],[-79.332,-4.928],[-79.077,-4.99],[-79.033,-4.97],[-78.976,-4.874],[-78.918,-4.858],[-78.907,-4.714],[-78.688,-4.562],[-78.652,-4.457],[-78.681,-4.325],[-78.551,-3.987],[-78.421,-3.777],[-78.346,-3.397],[-78.285,-3.398],[-78.227,-3.489],[-78.159,-3.464],[-78.184,-3.35],[-77.86,-2.982],[-76.679,-2.563],[-76.089,-2.133],[-75.57,-1.531],[-75.408,-.925],[-75.347,-.966],[-75.25,-.952],[-75.282,-.708],[-75.261,-.59],[-75.264,-.555],[-75.426,-.409],[-75.491,-.248],[-75.631,-.157],[-75.628,-.123],[-75.477,-.157],[-75.34,-.142],[-75.225,-.041],[-75.138,-.05],[-74.944,-.189],[-74.803,-.201],[-74.757,-.298],[-74.616,-.371],[-74.418,-.581],[-74.335,-.85],[-74.245,-.97],[-74.055,-1.029],[-73.864,-1.197],[-73.666,-1.249],[-73.522,-1.449],[-73.493,-1.537],[-73.525,-1.638],[-73.497,-1.694],[-73.349,-1.784],[-73.223,-1.787],[-73.198,-1.831],[-73.126,-2.081],[-73.173,-2.208],[-73.155,-2.279],[-72.989,-2.34],[-72.942,-2.393],[-72.813,-2.405],[-72.625,-2.352],[-72.395,-2.428],[-72.219,-2.4],[-72.053,-2.324],[-71.985,-2.327],[-71.754,-2.152],[-71.56,-2.225],[-71.398,-2.334],[-71.196,-2.313],[-71.113,-2.246],[-70.969,-2.208],[-70.707,-2.341],[-70.649,-2.405],[-70.095,-2.659],[-70.066,-2.702],[-70.735,-3.782],[-70.53,-3.867],[-70.339,-3.815],[-70.239,-3.883],[-70.167,-4.049],[-69.965,-4.235],[-69.972,-4.301],[-70.055,-4.332],[-70.131,-4.287],[-70.239,-4.301],[-70.404,-4.15],[-70.8,-4.173],[-70.973,-4.35],[-71.52,-4.47],[-71.844,-4.504],[-72.352,-4.786],[-72.697,-5.067],[-72.888,-5.122],[-72.978,-5.634],[-73.237,-6.098],[-73.137,-6.344],[-73.137,-6.466],[-73.176,-6.525],[-73.5,-6.68],[-73.759,-6.905],[-73.806,-7.081],[-73.72,-7.31],[-73.965,-7.379],[-73.957,-7.506],[-74.001,-7.556],[-73.821,-7.738],[-73.72,-7.782],[-73.731,-7.876],[-73.774,-7.896],[-73.777,-7.936],[-73.644,-8.074],[-73.551,-8.346],[-73.36,-8.48],[-73.356,-8.567],[-73.302,-8.653],[-73.201,-8.719],[-72.975,-8.994],[-72.971,-9.12],[-73.209,-9.412],[-72.813,-9.41],[-72.381,-9.511],[-72.319,-9.556],[-72.262,-9.775],[-72.172,-9.844],[-72.183,-10.004],[-71.607,-10.006],[-71.239,-9.966],[-70.638,-9.478],[-70.541,-9.438],[-70.599,-9.62],[-70.566,-9.705],[-70.638,-9.823],[-70.642,-11.011],[-70.534,-10.947],[-70.393,-11.059],[-70.289,-11.065],[-69.961,-10.929],[-69.58,-10.952],[-68.687,-12.502],[-68.762,-12.608],[-68.759,-12.688],[-68.867,-12.756],[-68.978,-12.881],[-68.982,-13.497],[-69.076,-13.683],[-68.975,-13.976],[-68.87,-14.17],[-69.004,-14.266],[-69.014,-14.377],[-69.234,-14.597],[-69.277,-14.747],[-69.36,-14.795],[-69.374,-14.964],[-69.173,-15.236],[-69.302,-15.399],[-69.421,-15.641],[-69.216,-16.149],[-69.133,-16.222],[-69.047,-16.217],[-68.914,-16.262],[-68.842,-16.339],[-69.032,-16.476],[-69.022,-16.642],[-69.198,-16.769],[-69.439,-17.089],[-69.504,-17.104],[-69.626,-17.2],[-69.644,-17.248],[-69.522,-17.389],[-69.511,-17.505],[-69.684,-17.649],[-69.806,-17.665],[-69.853,-17.703],[-69.803,-17.99],[-69.925,-18.207],[-70.185,-18.325],[-70.419,-18.345]],[[-77.374,8.658],[-77.478,8.498],[-77.406,8.427],[-77.197,7.972],[-77.345,7.837],[-77.352,7.705],[-77.539,7.566],[-77.586,7.544],[-77.705,7.691],[-77.763,7.698],[-77.745,7.537],[-77.827,7.443],[-77.899,7.229]],[[-82.878,8.071],[-82.914,8.2],[-83.026,8.337],[-82.86,8.453],[-82.842,8.564],[-82.918,8.74],[-82.882,8.806],[-82.727,8.917],[-82.882,9.056],[-82.939,9.061],[-82.939,9.45],[-82.803,9.592],[-82.644,9.505],[-82.565,9.576]],[[-83.641,10.917],[-83.659,10.837],[-83.713,10.786],[-83.919,10.736],[-84.167,10.781],[-84.347,10.979],[-84.635,11.045],[-84.7,11.052],[-84.909,10.946],[-85.585,11.189],[-85.744,11.062]],[[-87.339,12.979],[-87.011,13.009],[-86.961,13.054],[-86.917,13.224],[-86.874,13.267],[-86.73,13.285],[-86.759,13.746],[-86.331,13.771],[-86.151,13.995],[-86.039,14.05],[-85.985,13.965],[-85.787,13.845],[-85.733,13.859],[-85.729,13.932],[-85.683,13.982],[-85.578,14.028],[-85.373,14.224],[-85.179,14.343],[-85.193,14.446],[-85.161,14.526],[-85.038,14.607],[-85.038,14.685],[-84.984,14.753],[-84.862,14.81],[-84.79,14.79],[-84.646,14.661],[-84.538,14.633],[-84.34,14.706],[-84.293,14.687],[-84.239,14.748],[-84.149,14.72],[-84.066,14.786],[-83.868,14.795],[-83.634,14.876],[-83.537,14.977],[-83.415,15.008],[-83.159,14.993]],[[-88.296,18.472],[-88.462,18.477],[-88.523,18.446],[-88.588,18.291],[-88.807,17.965],[-88.897,17.914],[-89.049,18],[-89.135,17.97],[-89.16,17.815],[-90.989,17.817],[-90.993,17.253],[-91.41,17.257],[-90.975,16.868],[-90.712,16.708],[-90.633,16.566],[-90.633,16.51],[-90.417,16.39],[-90.46,16.163],[-90.446,16.073],[-91.738,16.071],[-92.206,15.276],[-92.206,15.238],[-92.076,15.074],[-92.159,14.963],[-92.188,14.819],[-92.159,14.691],[-92.235,14.545]],[[-87.814,13.399],[-87.738,13.451],[-87.731,13.482],[-87.781,13.521],[-87.717,13.812],[-87.803,13.89],[-87.99,13.88],[-88.152,13.988],[-88.483,13.854],[-88.512,13.979],[-88.707,14.033],[-89.002,14.253],[-89.056,14.33],[-89.121,14.37],[-89.362,14.416],[-89.286,14.529],[-89.171,14.607],[-89.221,14.866],[-89.171,15.04],[-88.962,15.152],[-88.228,15.729]],[[-71.779,19.718],[-71.711,19.487],[-71.747,19.286],[-71.646,19.196],[-71.646,19.164],[-71.808,18.987],[-71.733,18.857],[-71.743,18.732],[-71.866,18.614],[-71.999,18.598],[-71.873,18.416],[-71.761,18.342],[-71.736,18.27],[-71.769,18.039]],[[-56.483,1.941],[-56.562,1.907],[-56.616,1.922],[-56.836,1.881],[-57.008,1.921],[-57.12,2.014],[-57.318,1.964],[-57.412,1.908],[-57.545,1.726],[-57.984,1.648],[-58.034,1.52],[-58.142,1.516],[-58.34,1.587],[-58.394,1.481],[-58.506,1.438],[-58.488,1.348],[-58.513,1.285],[-58.686,1.282],[-58.787,1.209],[-58.862,1.204],[-58.967,1.304],[-59.23,1.376],[-59.536,1.7],[-59.665,1.747],[-59.669,1.843],[-59.741,1.874],[-59.755,2.275],[-59.888,2.363],[-59.993,2.69],[-59.971,2.99],[-59.831,3.349],[-59.856,3.587],[-59.68,3.7],[-59.55,3.934],[-59.737,4.226],[-59.705,4.381],[-59.834,4.476],[-60.148,4.533],[-60.032,4.74],[-59.989,5.084],[-60.079,5.144],[-60.14,5.238],[-60.241,5.257],[-60.335,5.2],[-60.461,5.188],[-60.652,5.221],[-60.742,5.202]],[[-89.16,17.815],[-89.236,15.894],[-88.894,15.89]],[[-89.362,14.416],[-89.419,14.43],[-89.574,14.39],[-89.545,14.241],[-89.671,14.182],[-89.751,14.076],[-89.873,14.045],[-90.05,13.904],[-90.104,13.835],[-90.096,13.736]],[[-51.652,4.061],[-51.767,3.993],[-51.828,3.87],[-51.99,3.702],[-52.163,3.365],[-52.328,3.181],[-52.418,2.903],[-52.555,2.648],[-52.559,2.573],[-52.652,2.426],[-52.699,2.363],[-52.872,2.266],[-52.904,2.212],[-53.009,2.181],[-53.228,2.205],[-53.333,2.339],[-53.509,2.254],[-53.736,2.308],[-53.768,2.355],[-54.128,2.12],[-54.434,2.207],[-54.618,2.327]],[[-63.01,18.069],[-63.125,18.069]],[[-78.861,1.455],[-78.681,1.284],[-78.18,.969],[-77.831,.825],[-77.701,.837],[-77.647,.723],[-77.467,.636],[-77.395,.395],[-77.115,.355],[-76.83,.247],[-76.729,.271],[-76.495,.235],[-76.427,.261],[-76.387,.405],[-76.312,.449],[-76.272,.44],[-76.067,.346],[-75.88,.152],[-75.775,.089],[-75.617,.063],[-75.466,-.038],[-75.286,-.107]],[[-66.876,1.223],[-67.081,1.185],[-67.088,1.615],[-67.351,2.086],[-67.402,2.117],[-67.556,2.073],[-67.816,1.79],[-67.934,1.749],[-68.032,1.789],[-68.129,1.955],[-68.194,1.987],[-68.255,1.846],[-68.176,1.719],[-69.32,1.721],[-69.544,1.773],[-69.85,1.709],[-69.853,1.06],[-69.313,1.051],[-69.259,1.016],[-69.162,.863],[-69.155,.643],[-69.284,.627],[-69.472,.73],[-69.806,.608],[-70.055,.579],[-70.069,-.138],[-69.922,-.317],[-69.634,-.51],[-69.59,-.64],[-69.612,-.763],[-69.544,-.918],[-69.45,-.999],[-69.45,-1.091],[-69.4,-1.195],[-69.965,-4.235]],[[-69.511,-17.505],[-69.493,-17.62],[-69.356,-17.771],[-69.313,-17.943],[-69.094,-18.05],[-69.144,-18.144],[-68.978,-18.812],[-68.968,-18.969],[-68.464,-19.432],[-68.698,-19.72],[-68.579,-19.856],[-68.561,-19.967],[-68.6,-20.045],[-68.755,-20.09],[-68.687,-20.311],[-68.759,-20.378],[-68.759,-20.417],[-68.744,-20.458],[-68.485,-20.628],[-68.564,-20.72],[-68.557,-20.903],[-68.435,-20.948],[-68.197,-21.3],[-68.186,-21.618],[-68.111,-21.753],[-68.078,-21.982],[-67.988,-22.057],[-67.949,-22.333],[-67.88,-22.493],[-67.88,-22.823],[-67.794,-22.88],[-67.582,-22.892],[-67.196,-22.821],[-67.009,-23.001],[-67.355,-24.034],[-68.251,-24.392],[-68.507,-24.63],[-68.561,-24.748],[-68.561,-24.838],[-68.528,-24.899],[-68.467,-24.925],[-68.428,-25.052],[-68.384,-25.092],[-68.431,-25.149],[-68.496,-25.163],[-68.539,-25.237],[-68.6,-25.486],[-68.413,-26.154],[-68.575,-26.352],[-68.593,-26.47],[-68.485,-26.67],[-68.32,-26.878],[-68.32,-26.973],[-68.345,-27.027],[-68.536,-27.084],[-68.593,-27.14],[-68.651,-27.149],[-68.708,-27.105],[-68.845,-27.154],[-68.942,-27.406],[-69,-27.449],[-69.173,-27.925],[-69.252,-27.973],[-69.436,-28.192],[-69.49,-28.201],[-69.526,-28.286],[-69.655,-28.414],[-69.734,-28.642],[-69.742,-28.784],[-69.828,-29.103],[-69.997,-29.249],[-70.026,-29.324],[-69.929,-29.768],[-69.961,-30.079],[-69.864,-30.121],[-69.842,-30.175],[-69.958,-30.359],[-70.102,-30.388],[-70.152,-30.36],[-70.17,-30.386],[-70.163,-30.44],[-70.347,-30.902],[-70.311,-31.023],[-70.39,-31.121],[-70.473,-31.112],[-70.519,-31.148],[-70.584,-31.569],[-70.451,-31.841],[-70.393,-31.885],[-70.332,-31.881],[-70.253,-31.957],[-70.293,-32.03],[-70.357,-32.043],[-70.365,-32.084],[-70.321,-32.266],[-70.257,-32.31],[-70.231,-32.431],[-70.17,-32.471],[-70.177,-32.626],[-70.116,-32.808],[-70.023,-32.884],[-70.095,-33.027],[-70.084,-33.202],[-70.019,-33.272],[-69.896,-33.251],[-69.821,-33.284],[-69.799,-33.398],[-69.882,-33.601],[-69.893,-33.732],[-69.853,-34.225],[-70.051,-34.301],[-70.289,-34.733],[-70.393,-35.146],[-70.555,-35.247],[-70.534,-35.308],[-70.469,-35.325],[-70.458,-35.452],[-70.415,-35.523],[-70.379,-35.771],[-70.415,-35.879],[-70.404,-36.061],[-70.458,-36.133],[-70.563,-36.146],[-70.721,-36.284],[-70.75,-36.393],[-70.905,-36.421],[-71.056,-36.523],[-71.067,-36.645],[-71.193,-36.844],[-71.117,-37.115],[-71.2,-37.301],[-71.135,-37.445],[-71.185,-37.631],[-71.167,-37.763],[-71.027,-38.04],[-70.969,-38.447],[-70.847,-38.542],[-70.897,-38.681],[-70.951,-38.738],[-71.088,-38.757],[-71.401,-38.934],[-71.427,-38.985],[-71.419,-39.287],[-71.538,-39.603],[-71.653,-39.594],[-71.722,-39.636],[-71.646,-39.929]],[[-57.61,-30.188],[-57.404,-30.034],[-57.224,-29.782],[-57.088,-29.716],[-56.771,-29.418],[-56.638,-29.202],[-56.476,-29.093],[-56.227,-28.737],[-56.101,-28.652],[-55.986,-28.489],[-55.903,-28.444],[-55.889,-28.371],[-55.687,-28.381],[-55.691,-28.303],[-55.745,-28.256],[-55.727,-28.204],[-55.478,-28.09],[-55.244,-27.899],[-55.1,-27.867],[-55.039,-27.768],[-54.91,-27.709],[-54.877,-27.598],[-54.83,-27.55],[-54.665,-27.527],[-54.553,-27.454],[-54.326,-27.423],[-54.157,-27.255],[-54.114,-27.275],[-54.038,-27.244],[-53.837,-27.121],[-53.718,-26.883],[-53.754,-26.749],[-53.711,-26.352],[-53.668,-26.288],[-53.671,-26.225],[-53.822,-25.96],[-53.891,-25.67],[-53.956,-25.647],[-54.013,-25.578],[-54.085,-25.572],[-54.154,-25.524],[-54.445,-25.625],[-54.539,-25.576],[-54.614,-25.576]],[[-58.16,-20.165],[-58.124,-20.293],[-58.002,-20.465],[-57.98,-20.658],[-57.916,-20.691],[-57.89,-20.748],[-57.901,-20.873],[-57.829,-20.998],[-57.826,-21.133],[-57.894,-21.302],[-57.872,-21.356],[-57.944,-21.495],[-57.916,-21.699],[-57.934,-21.911],[-57.984,-22.047],[-57.955,-22.109],[-57.822,-22.142],[-57.721,-22.099],[-57.57,-22.182],[-57.332,-22.215],[-57.239,-22.196],[-56.936,-22.271],[-56.634,-22.234],[-56.522,-22.102],[-56.447,-22.076],[-56.396,-22.093],[-56.353,-22.179],[-56.245,-22.265],[-55.849,-22.307],[-55.752,-22.409],[-55.748,-22.512],[-55.705,-22.592],[-55.619,-22.672],[-55.651,-22.887],[-55.561,-23.154],[-55.518,-23.416],[-55.54,-23.581],[-55.46,-23.687],[-55.417,-23.951],[-55.288,-24.005],[-55.082,-23.998],[-54.625,-23.812],[-54.244,-24.046],[-54.319,-24.128],[-54.28,-24.307],[-54.452,-25.066],[-54.438,-25.121],[-54.611,-25.434],[-54.632,-26.006],[-54.679,-26.309],[-54.755,-26.532],[-54.827,-26.652],[-54.935,-26.703],[-54.964,-26.76],[-55.129,-26.887],[-55.136,-26.932],[-55.428,-27.01],[-55.45,-27.069],[-55.565,-27.15],[-55.633,-27.357],[-55.716,-27.414],[-55.792,-27.416],[-55.95,-27.326],[-56.162,-27.322],[-56.242,-27.367],[-56.371,-27.538],[-56.436,-27.553],[-56.512,-27.487],[-56.605,-27.468],[-56.807,-27.486],[-56.872,-27.44],[-56.972,-27.435],[-57.113,-27.47],[-57.39,-27.43],[-57.811,-27.317],[-58.168,-27.274],[-58.603,-27.314],[-58.643,-27.196],[-58.618,-27.131],[-58.549,-27.084],[-58.438,-26.921],[-58.322,-26.857],[-58.319,-26.796],[-58.272,-26.77],[-58.193,-26.63],[-58.204,-26.381],[-58.11,-26.18],[-57.89,-26.006],[-57.754,-25.697],[-57.57,-25.534],[-57.563,-25.473],[-57.646,-25.328],[-57.822,-25.137],[-57.959,-25.05],[-58.135,-24.977],[-58.366,-24.96],[-58.52,-24.843],[-58.726,-24.786],[-59.186,-24.562],[-59.892,-24.093],[-60.112,-24.01],[-60.263,-24.014],[-60.504,-23.963],[-60.839,-23.857],[-61.033,-23.755],[-61.084,-23.656],[-61.21,-23.557],[-61.404,-23.458],[-61.8,-23.182],[-61.93,-23.059],[-62.214,-22.613],[-62.372,-22.439],[-62.624,-22.29],[-62.65,-22.234],[-62.275,-21.066],[-62.275,-20.562],[-61.915,-20.055],[-61.757,-19.646],[-60.007,-19.297],[-59.089,-19.286],[-58.178,-19.818],[-58.139,-19.998],[-58.16,-20.165],[-58.092,-20.151],[-58.02,-20.055],[-57.887,-20.021],[-57.862,-19.979],[-58.132,-19.745],[-57.8,-19.082],[-57.718,-19.043],[-57.732,-18.917],[-57.782,-18.915],[-57.574,-18.279],[-57.494,-18.215],[-57.588,-18.122],[-57.833,-17.512],[-57.905,-17.533],[-57.991,-17.512],[-58.394,-17.234],[-58.477,-16.701],[-58.47,-16.649],[-58.351,-16.491],[-58.344,-16.285],[-58.538,-16.328],[-60.176,-16.269],[-60.241,-15.479],[-60.583,-15.099],[-60.274,-15.089],[-60.299,-14.618],[-60.475,-14.184],[-60.403,-14.019],[-60.508,-13.79],[-61.076,-13.49],[-61.512,-13.542],[-61.789,-13.526],[-62.095,-13.242],[-62.117,-13.16],[-62.354,-13.132],[-62.686,-12.995],[-62.765,-12.997],[-63.017,-12.806],[-63.067,-12.669],[-63.118,-12.651],[-63.251,-12.709],[-63.348,-12.681],[-63.69,-12.478],[-63.787,-12.469],[-63.938,-12.53],[-64.421,-12.44],[-64.514,-12.25],[-64.831,-12.03],[-64.993,-11.976],[-65.09,-11.742],[-65.184,-11.749],[-65.177,-11.646],[-65.321,-11.44],[-65.324,-11.365],[-65.389,-11.247],[-65.393,-11.184],[-65.324,-11.025],[-65.447,-10.507],[-65.314,-10.252],[-65.299,-10.146],[-65.328,-9.936],[-65.31,-9.872],[-65.396,-9.712],[-65.638,-9.81],[-65.706,-9.768],[-65.926,-9.785],[-66.574,-9.9],[-66.728,-9.976],[-67.11,-10.27],[-67.416,-10.389],[-67.582,-10.506],[-67.722,-10.683],[-67.834,-10.664],[-68.071,-10.704],[-68.312,-10.974],[-68.622,-11.11],[-68.726,-11.122],[-68.849,-11.011],[-69.227,-10.955],[-69.58,-10.952]],[[-62.65,-22.234],[-62.743,-22.159],[-62.833,-22],[-63.676,-22.005],[-63.715,-22.028],[-63.859,-22.007],[-63.974,-22.073],[-64.266,-22.604],[-64.324,-22.828],[-64.604,-22.229],[-64.993,-22.109],[-65.771,-22.1],[-66.098,-21.835],[-66.221,-21.802],[-66.365,-22.114],[-66.71,-22.217],[-66.8,-22.409],[-67.034,-22.552],[-67.056,-22.651],[-67.196,-22.821]]]});var ll,E_,Wu,Xu,hl,ju,qu,Yu,$u,Ju=ea(()=>{ll=`
varying vec2 vUv;
varying vec3 vN;
varying vec3 vP;
varying vec3 vObj;
varying vec3 vEast;
varying vec3 vNorth;
void main() {
  vUv = uv;
  vObj = position;
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vP = wp.xyz;
  vN = normalize(mat3(modelMatrix) * normal);
  // Marco tangente anal\xEDtico de la esfera (este / norte) para el relieve
  vec3 o = normalize(position);
  float lat = asin(clamp(o.y, -1.0, 1.0));
  float lon = atan(-o.z, o.x);
  vec3 e = vec3(-sin(lon), 0.0, -cos(lon));
  vec3 n = vec3(-sin(lat) * cos(lon), cos(lat), sin(lat) * sin(lon));
  vEast = mat3(modelMatrix) * e;
  vNorth = mat3(modelMatrix) * n;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,E_=`
vec3 latLonOf(vec3 o) {
  o = normalize(o);
  return vec3(degrees(asin(clamp(o.y, -1.0, 1.0))), degrees(atan(-o.z, o.x)), 0.0);
}
// Coordenadas dentro de un rect\xE1ngulo geogr\xE1fico (lonMin, lonMax, latMin, latMax)
vec2 boundsUv(vec3 ll, vec4 b) {
  return vec2((ll.y - b.x) / (b.y - b.x), (ll.x - b.z) / (b.w - b.z));
}
float boundsFade(vec2 m) {
  vec2 e = smoothstep(vec2(0.0), vec2(0.08), m) * smoothstep(vec2(0.0), vec2(0.08), 1.0 - m);
  return e.x * e.y;
}
`,Wu=`
uniform sampler2D uDay;
uniform sampler2D uLights;
uniform sampler2D uGlow;
uniform sampler2D uData;
uniform sampler2D uDetail;
uniform sampler2D uMask;
uniform vec4 uDetailBounds;
uniform vec4 uMaskBounds;
uniform vec2 uTexSize;
uniform vec3 uSun;
uniform vec3 uMoon;
uniform float uSunI;
uniform float uMoonI;
uniform float uReveal;
uniform float uLightGain;
uniform float uLod;
uniform float uMaskA;
uniform float uCloudShift;
uniform float uDayMode;   // 0 = noche (tema oscuro), 1 = d\xEDa (tema claro)
uniform vec3 uDayLight;   // luz del d\xEDa: frente-izquierda, ilumina el hemisferio visible
varying vec2 vUv;
varying vec3 vN;
varying vec3 vP;
varying vec3 vObj;
varying vec3 vEast;
varying vec3 vNorth;
uniform vec2 uDataSize;
uniform vec2 uDetailSize;
${E_}

// Filtrado bic\xFAbico (4 muestras bilineales) para las luces durante el acercamiento
vec4 cubicW(float v) {
  vec4 n = vec4(1.0, 2.0, 3.0, 4.0) - v;
  vec4 s = n * n * n;
  float x = s.x, y = s.y - 4.0 * s.x, z = s.z - 4.0 * s.y + 6.0 * s.x;
  return vec4(x, y, z, 6.0 - x - y - z) * (1.0 / 6.0);
}
vec4 textureBicubic(sampler2D tex, vec2 uv, vec2 size) {
  vec2 inv = 1.0 / size;
  uv = uv * size - 0.5;
  vec2 f = fract(uv);
  uv -= f;
  vec4 xc = cubicW(f.x), yc = cubicW(f.y);
  vec4 c = uv.xxyy + vec2(-0.5, 1.5).xyxy;
  vec4 s = vec4(xc.xz + xc.yw, yc.xz + yc.yw);
  vec4 off = (c + vec4(xc.yw, yc.yw) / s) * inv.xxyy;
  vec4 s0 = textureLod(tex, off.xz, 0.0), s1 = textureLod(tex, off.yz, 0.0);
  vec4 s2 = textureLod(tex, off.xw, 0.0), s3 = textureLod(tex, off.yw, 0.0);
  float sx = s.x / (s.x + s.y), sy = s.z / (s.z + s.w);
  return mix(mix(s3, s2, sx), mix(s1, s0, sx), sy);
}

// Gradiente del relieve por diferencias centrales en el espacio de la textura
vec2 grad(sampler2D t, vec2 uv, vec2 size) {
  vec2 e = 1.0 / size;
  float hx = texture2D(t, uv + vec2(e.x, 0.0)).r - texture2D(t, uv - vec2(e.x, 0.0)).r;
  float hy = texture2D(t, uv + vec2(0.0, e.y)).r - texture2D(t, uv - vec2(0.0, e.y)).r;
  return vec2(hx, hy);
}

void main() {
  vec3 N = normalize(vN);
  vec3 V = normalize(cameraPosition - vP);
  vec3 L = normalize(uSun);
  vec3 M = normalize(uMoon);

  vec3 data = texture2D(uData, vUv).rgb;
  float land = smoothstep(0.16, 0.40, data.g);
  float hp = data.r;
  vec2 g = grad(uData, vUv, uDataSize) * 0.9;

  // Parche de alto detalle sobre Colombia y su entorno durante el acercamiento
  vec3 ll = latLonOf(vObj);
  if (uLod > 0.001) {
    vec2 m = boundsUv(ll, uDetailBounds);
    if (m.x > 0.0 && m.x < 1.0 && m.y > 0.0 && m.y < 1.0) {
      vec2 dt = texture2D(uDetail, m).rg;
      float w = uLod * boundsFade(m);
      g = mix(g, grad(uDetail, m, uDetailSize) * 3.2, w);
      hp = mix(hp, dt.r, w);
      land = mix(land, smoothstep(0.3, 0.7, dt.g), w);
    }
  }

  // Relieve solo en tierra: inclina la normal seg\xFAn la pendiente este/norte
  vec3 Nb = normalize(N - (normalize(vEast) * g.x + normalize(vNorth) * g.y) * land);

  vec3 albedo = texture2D(uDay, vUv).rgb;
  float luma = dot(albedo, vec3(0.2126, 0.7152, 0.0722));
  albedo = mix(vec3(luma), albedo, 0.62); // saturaci\xF3n contenida, m\xE1s fotogr\xE1fica

  float mu = clamp(dot(N, V), 0.0, 1.0);
  float ndl0 = dot(N, L);                // terminador geom\xE9trico
  float ndl = max(dot(Nb, L), 0.0);
  float sunVis = smoothstep(-0.03, 0.10, ndl0);

  // Sombra de nubes sobre el lado diurno
  float cs = texture2D(uData, vUv + vec2(uCloudShift, 0.0) + L.xy * 0.0015).b;
  float cloudShadow = 1.0 - 0.45 * smoothstep(0.35, 0.95, cs);

  // Luz solar directa
  vec3 col = albedo * uSunI * ndl * sunVis * cloudShadow;

  // Brillo especular del sol sobre el oc\xE9ano
  vec3 H = normalize(L + V);
  float fres = 0.02 + 0.98 * pow(1.0 - max(dot(H, V), 0.0), 5.0);
  float spec = pow(max(dot(N, H), 0.0), 420.0) * 1.6 + pow(max(dot(N, H), 0.0), 45.0) * 0.035;
  col += vec3(1.0, 0.97, 0.93) * uSunI * spec * fres * (1.0 - land) * sunVis * cloudShadow;

  // Crep\xFAsculo: luz dispersa en la franja del terminador
  float twilight = smoothstep(-0.18, 0.02, ndl0) * (1.0 - sunVis);
  col += albedo * vec3(0.55, 0.66, 0.9) * uSunI * 0.035 * twilight;

  // Lado nocturno: luz de luna tenue que revela continentes y relieve
  float night = 1.0 - smoothstep(-0.12, 0.06, ndl0);
  float ndm = max(dot(Nb, M), 0.0);
  vec3 moonAlb = mix(vec3(luma) * 1.15, albedo, 0.35) * mix(1.0, 2.2, uLod) * mix(0.55, 1.0, land);
  float reliefTone = mix(1.0, 0.45 + hp * 1.1, land);
  col += moonAlb * vec3(0.78, 0.84, 1.0) * uMoonI * (0.25 + ndm) * reliefTone * night;
  col += vec3(0.8, 0.85, 1.0) * uMoonI * 0.25 * pow(max(dot(N, normalize(M + V)), 0.0), 260.0) * (1.0 - land) * night;

  // Luces de ciudades: sin halos exagerados, atenuadas por las nubes
  float la = texture2D(uLights, vUv).r;
  float lights = la;
  if (uLod > 0.001) {
    // De cerca: bic\xFAbico global y, sobre Colombia, el canal de luces del parche
    // (Black Marble reescalado y enfocado + n\xFAcleos en las ciudades reales de Natural Earth)
    float lb = textureBicubic(uLights, vUv, uTexSize).r;
    lights = mix(la, lb, uLod);
    vec2 m2 = boundsUv(ll, uDetailBounds);
    if (m2.x > 0.0 && m2.x < 1.0 && m2.y > 0.0 && m2.y < 1.0) {
      float pl = texture2D(uDetail, m2).b;
      pl = pl * pl * 1.1; // la textura guarda ra\xEDz aproximada: se linealiza
      lights = mix(lights, pl, uLod * boundsFade(m2));
    }
  }
  float glow = texture2D(uGlow, vUv).r;
  float cl = texture2D(uData, vUv + vec2(uCloudShift, 0.0)).b;
  float occl = 1.0 - 0.7 * smoothstep(0.3, 0.92, cl);
  float nightL = 1.0 - smoothstep(-0.2, 0.05, ndl0);
  vec3 sodium = vec3(1.0, 0.86, 0.68);
  col += sodium * (lights * 2.4 + glow * 0.05) * uLightGain * nightL * occl;

  // Colombia: velo muy sutil durante la llegada
  if (uMaskA > 0.001) {
    vec2 mm = boundsUv(ll, uMaskBounds);
    if (mm.x > 0.0 && mm.x < 1.0 && mm.y > 0.0 && mm.y < 1.0) {
      col += vec3(0.85, 0.88, 0.95) * texture2D(uMask, mm).r * 0.006 * uMaskA;
    }
  }

  // Dispersi\xF3n atmosf\xE9rica sobre la superficie (m\xE1s densa hacia el borde)
  float haze = pow(1.0 - mu, 2.6);
  vec3 rayleigh = vec3(0.26, 0.48, 1.0);
  float hazeLight = smoothstep(-0.25, 0.6, ndl0);
  col = mix(col, rayleigh * uSunI * 0.16 * hazeLight, haze * 0.72 * hazeLight);
  col += rayleigh * uMoonI * 0.25 * haze * night;

  // ---------- Versi\xF3n diurna (tema claro) ----------
  if (uDayMode > 0.001) {
    vec3 Ld = normalize(uDayLight);
    float ndld = max(dot(Nb, Ld), 0.0);
    float ndld0 = dot(N, Ld);
    vec3 albD = mix(vec3(luma), texture2D(uDay, vUv).rgb, 0.62);
    float csd = texture2D(uData, vUv + vec2(uCloudShift, 0.0) + Ld.xy * 0.0016).b;
    float shadowD = 1.0 - 0.32 * smoothstep(0.35, 0.95, csd);
    vec3 dayc = albD * (uSunI * 0.92 * ndld * shadowD + 0.22 + 0.12 * smoothstep(-0.4, 0.4, ndld0));
    vec3 Hd = normalize(Ld + V);
    float fresD = 0.02 + 0.98 * pow(1.0 - max(dot(Hd, V), 0.0), 5.0);
    dayc += vec3(1.0) * uSunI * (pow(max(dot(N, Hd), 0.0), 220.0) * 0.9 + pow(max(dot(N, Hd), 0.0), 30.0) * 0.04) * fresD * (1.0 - land) * shadowD;
    float hazeD = pow(1.0 - mu, 2.1);
    dayc = mix(dayc, vec3(0.64, 0.76, 0.96) * uSunI * 0.28, hazeD * 0.55);
    col = mix(col, dayc, uDayMode);
  }

  gl_FragColor = vec4(col * uReveal, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`,Xu=`
uniform sampler2D uData;
uniform vec3 uSun;
uniform vec3 uMoon;
uniform float uSunI;
uniform float uMoonI;
uniform float uShift;
uniform float uOpacity;
uniform float uReveal;
uniform float uDayMode;
uniform vec3 uDayLight;
varying vec2 vUv;
varying vec3 vN;
varying vec3 vP;
varying vec3 vObj;
void main() {
  float c = texture2D(uData, vUv + vec2(uShift, 0.0)).b;
  float a = pow(smoothstep(0.18, 1.0, c), 1.35);
  vec3 N = normalize(vN);
  vec3 V = normalize(cameraPosition - vP);
  float ndl0 = dot(N, normalize(uSun));
  float sunVis = smoothstep(-0.05, 0.12, ndl0);
  float night = 1.0 - smoothstep(-0.12, 0.06, ndl0);
  vec3 col = vec3(1.0) * uSunI * 0.92 * max(ndl0, 0.0) * sunVis;
  col += vec3(0.7, 0.78, 0.95) * uSunI * 0.03 * smoothstep(-0.18, 0.02, ndl0) * (1.0 - sunVis);
  col += vec3(0.78, 0.84, 1.0) * uMoonI * 0.9 * (0.3 + max(dot(N, normalize(uMoon)), 0.0)) * night;
  float edge = smoothstep(0.0, 0.25, dot(N, V));
  float alpha = a * mix(0.55, 0.96, sunVis) * uOpacity * uReveal * edge;
  // De d\xEDa: nubes blancas, iluminadas desde el frente, algo m\xE1s presentes
  float ndd = dot(N, normalize(uDayLight));
  vec3 colD = vec3(1.0) * (uSunI * 0.85 * max(ndd, 0.0) + 0.42);
  float alphaD = a * 0.82 * uOpacity * uReveal * edge;
  col = mix(col, colD, uDayMode);
  alpha = mix(alpha, alphaD, uDayMode);
  gl_FragColor = vec4(col, alpha);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`,hl=`
varying vec3 vP;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vP = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,ju=`
uniform vec3 uSun;
uniform vec3 uCenter;
uniform float uSunI;
uniform float uReveal;
uniform float uGain;
varying vec3 vP;
void main() {
  vec3 rd = normalize(vP - cameraPosition);
  vec3 oc = uCenter - cameraPosition;
  float t = dot(oc, rd);
  vec3 cp = cameraPosition + rd * t;
  float b = length(cp - uCenter);
  if (b < 1.0 || t < 0.0) discard;
  float alt = b - 1.0;
  float dens = exp(-alt / 0.0085) * 0.9 + exp(-alt / 0.03) * 0.12;
  vec3 dir = normalize(cp - uCenter);
  float s = dot(dir, normalize(uSun));
  float lit = smoothstep(-0.35, 0.5, s);
  float forward = pow(max(dot(rd, normalize(uSun)), 0.0), 8.0) * 0.6;
  vec3 rayleigh = vec3(0.26, 0.48, 1.0);
  vec3 col = rayleigh * uSunI * dens * (0.012 + 0.22 * lit + forward * lit) * uReveal * uGain;
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`,qu=`
attribute float aSize;
attribute float aBright;
uniform float uPR;
uniform float uTime;
varying float vB;
void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = aSize * uPR;
  float tw = 0.85 + 0.15 * sin(uTime * 1.1 + position.x * 0.37 + position.y * 0.13);
  vB = aBright * tw;
}
`,Yu=`
uniform vec3 uCenter;
uniform float uReveal;
uniform float uGain;
varying vec3 vP;
void main() {
  vec3 rd = normalize(vP - cameraPosition);
  vec3 oc = uCenter - cameraPosition;
  float t = dot(oc, rd);
  vec3 cp = cameraPosition + rd * t;
  float b = length(cp - uCenter);
  if (b < 1.0 || t < 0.0) discard;
  float alt = b - 1.0;
  float dens = exp(-alt / 0.012) * 0.75 + exp(-alt / 0.04) * 0.18;
  gl_FragColor = vec4(vec3(0.62, 0.74, 0.95), clamp(dens, 0.0, 1.0) * 0.55 * uReveal * uGain);
  #include <colorspace_fragment>
}
`,$u=`
uniform float uReveal;
varying float vB;
void main() {
  float d = length(gl_PointCoord - 0.5);
  float a = smoothstep(0.5, 0.05, d);
  gl_FragColor = vec4(vec3(0.85, 0.87, 0.91) * a * vB * uReveal * 0.55, 1.0);
}
`});var Ku={};zd(Ku,{EarthScene:()=>cl,latLonToVec3:()=>jn,orientationFor:()=>Zu});function jn(e,t,i=1,r=new R){let a=e*$r,n=t*$r;return r.set(Math.cos(a)*Math.cos(n)*i,Math.sin(a)*i,-Math.cos(a)*Math.sin(n)*i)}function Zu(e,t,i=0,r=new Yt){let a=new Yt().setFromAxisAngle(new R(0,1,0),-t*$r-Math.PI/2),n=new Yt().setFromAxisAngle(new R(1,0,0),e*$r),s=new Yt().setFromAxisAngle(new R(0,0,1),i*$r);return r.copy(s).multiply(n).multiply(a)}var $r,Ia,Xn,cl,Qu=ea(()=>{Gu();mr();Vu();Ju();$r=Math.PI/180;Ia={lonMin:-82.5,lonMax:-65.5,latMin:-5.5,latMax:14.5},Xn={lonMin:-86,lonMax:-60,latMin:-10,latMax:18},cl=class{constructor(t,{tier:i="high"}={}){this.canvas=t,this.tier=i,this.maxDpr=i==="high"?2:i==="medium"?1.6:1.25,this.dpr=Math.min(window.devicePixelRatio||1,this.maxDpr);let r=new ku({canvas:t,antialias:i!=="low",alpha:!1,powerPreference:"high-performance",preserveDrawingBuffer:new URLSearchParams(location.search).has("shot")});r.setClearColor(526603,1),r.outputColorSpace=Wt,r.toneMapping=kn,r.toneMappingExposure=1,r.setPixelRatio(this.dpr),this.renderer=r,this.scene=new Nc,this.camera=new ei(30,1,.01,200),this.camera.position.set(0,0,4),this.earth=new sr,this.holder=new sr,this.holder.add(this.earth),this.scene.add(this.holder),this.sun=new R(1,.18,-.42).normalize(),this.moon=new R(-.55,.35,.76).normalize(),this.dayLight=new R(-.5,.36,.8).normalize(),this._bgNight=new Ye(526603),this._bgDay=new Ye(16250869),this._bg=new Ye,this._lineNight=new Ye(16777215),this._lineDay=new Ye(16777215),this._regionNight=new Ye(14014426),this._regionDay=new Ye(16777215),this._tmpV=new R,this._tmpN=new R,this._contextLost=!1,t.addEventListener("webglcontextlost",a=>{a.preventDefault(),this._contextLost=!0,this.onContextLost?.()})}async load(){let t=this.tier==="high"?"4k":"2k",i=new Au,r=Math.min(8,this.renderer.capabilities.getMaxAnisotropy()),a=(c,d=!1)=>new Promise((u,p)=>i.load(Bi(`assets/textures/${c}`),g=>{g.colorSpace=d?Wt:oi,g.anisotropy=r,g.minFilter=fi,u(g)},void 0,p)),[n,s,o,l,h]=await Promise.all([a(`earth-lights-${t}.png`,!0),a(`earth-bm-${t}.jpg`,!0),a("earth-data-2k.jpg"),a("earth-glow-2k.png",!0),a("colombia-detail.jpg")]);h.wrapS=h.wrapT=li,this.textures={lights:n,day:s,data:o,glow:l,detail:h},this._build(),this.resize()}_build(){let t=this.tier==="high"?192:this.tier==="medium"?128:96,{lights:i,day:r,data:a,glow:n,detail:s}=this.textures,o=this._makeColombiaMask();this.uniforms={uLights:{value:i},uGlow:{value:n},uDay:{value:r},uData:{value:a},uDetail:{value:s},uDetailBounds:{value:new gt(Xn.lonMin,Xn.lonMax,Xn.latMin,Xn.latMax)},uMask:{value:o},uMaskBounds:{value:new gt(Ia.lonMin,Ia.lonMax,Ia.latMin,Ia.latMax)},uTexSize:{value:new ne(i.image.width,i.image.height)},uSun:{value:this.sun},uMoon:{value:this.moon},uSunI:{value:3.2},uMoonI:{value:.11},uDataSize:{value:new ne(a.image.width,a.image.height)},uDetailSize:{value:new ne(s.image.width,s.image.height)},uReveal:{value:0},uLightGain:{value:1},uLod:{value:0},uMaskA:{value:0},uCloudShift:{value:0},uDayMode:{value:0},uDayLight:{value:this.dayLight}};let l=new qt(new wa(1,t,t/2),new Zt({uniforms:this.uniforms,vertexShader:ll,fragmentShader:Wu}));this.earth.add(l),this.cloudUniforms={uData:{value:a},uSun:{value:this.sun},uMoon:{value:this.moon},uSunI:this.uniforms.uSunI,uMoonI:this.uniforms.uMoonI,uDayMode:this.uniforms.uDayMode,uDayLight:{value:this.dayLight},uShift:{value:0},uOpacity:{value:1},uReveal:this.uniforms.uReveal};let h=new qt(new wa(1.004,t,t/2),new Zt({uniforms:this.cloudUniforms,vertexShader:ll,fragmentShader:Xu,transparent:!0,depthWrite:!1}));this.earth.add(h),this.clouds=h,this.atmoUniforms={uSun:{value:this.sun},uCenter:{value:new R},uSunI:this.uniforms.uSunI,uReveal:this.uniforms.uReveal,uGain:{value:1}};let c=new qt(new wa(1.07,128,64),new Zt({uniforms:this.atmoUniforms,vertexShader:hl,fragmentShader:ju,side:Ot,blending:ma,transparent:!0,depthWrite:!1}));this.holder.add(c),this.atmoDayUniforms={uCenter:this.atmoUniforms.uCenter,uReveal:this.uniforms.uReveal,uGain:{value:0}};let d=new qt(c.geometry,new Zt({uniforms:this.atmoDayUniforms,vertexShader:hl,fragmentShader:Yu,side:Ot,transparent:!0,depthWrite:!1,toneMapped:!1}));this.holder.add(d),this.colombiaLine=this._lines(ol,1.0016,16777215),this.regionLine=this._lines(Hu,1.0014,14014426),this.earth.add(this.regionLine,this.colombiaLine);let u=this.tier==="high"?2400:this.tier==="medium"?1500:900,p=new Float32Array(u*3),g=new Float32Array(u),_=new Float32Array(u),f=new R,m=7,x=()=>(m=m*16807%2147483647)/2147483647;for(let y=0;y<u;y++){f.set(x()*2-1,x()*2-1,x()*2-1).normalize().multiplyScalar(90),p.set([f.x,f.y,f.z],y*3);let w=x();g[y]=.6+Math.pow(w,6)*2.4,_[y]=.18+Math.pow(x(),3)*.82}let b=new Mt;b.setAttribute("position",new ci(p,3)),b.setAttribute("aSize",new ci(g,1)),b.setAttribute("aBright",new ci(_,1)),this.starUniforms={uPR:{value:this.dpr},uReveal:{value:0},uTime:{value:0}},this.stars=new Hc(b,new Zt({uniforms:this.starUniforms,vertexShader:qu,fragmentShader:$u,toneMapped:!1,transparent:!0,depthWrite:!1,blending:ma})),this.scene.add(this.stars)}_lines(t,i,r){let a=[],n=new R,s=new R;for(let c of t)for(let d=0;d<c.length-1;d++){let[u,p]=c[d],[g,_]=c[d+1],f=Math.max(1,Math.ceil(Math.hypot(g-u,_-p)/.35));for(let m=0;m<f;m++){let x=m/f,b=(m+1)/f;jn(p+(_-p)*x,u+(g-u)*x,i,n),jn(p+(_-p)*b,u+(g-u)*b,i,s),a.push(n.x,n.y,n.z,s.x,s.y,s.z)}}let o=new Mt;o.setAttribute("position",new ke(a,3));let l=new Ko({color:r,transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1}),h=new Gc(o,l);return h.renderOrder=2,h}_makeColombiaMask(){let r=document.createElement("canvas");r.width=512,r.height=600;let a=r.getContext("2d"),{lonMin:n,lonMax:s,latMin:o,latMax:l}=Ia;a.filter="blur(2px)",a.fillStyle="#fff",a.beginPath();for(let c of ol)c.forEach(([d,u],p)=>{let g=(d-n)/(s-n)*512,_=(l-u)/(l-o)*600;p?a.lineTo(g,_):a.moveTo(g,_)}),a.closePath();a.fill();let h=new Wc(r);return h.colorSpace=oi,h}framing(){let t=this.width/this.height,i=this.camera.fov/2*$r,r=Math.tan(i),a=r*t,n=Math.atan(a),s=t<.9,l=1/Math.sin((s?.84:.66)*Math.min(i,n)),h=Math.max(.295/(.5*2*r),.218/(.7*2*a));return{far:l,near:1+h,end:1+h*.74,portrait:s,aspect:t}}resize(){let t=this.canvas.clientWidth||window.innerWidth,i=this.canvas.clientHeight||window.innerHeight;this.width=t,this.height=i,this.camera.fov=t/i<.9?34:30,this.camera.aspect=t/i,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,i,!1),this.starUniforms&&(this.starUniforms.uPR.value=this.renderer.getPixelRatio())}degrade(){let t=Math.max(1,this.renderer.getPixelRatio()-.35);return t===this.renderer.getPixelRatio()?!1:(this.renderer.setPixelRatio(t),this.resize(),!0)}setState(t){if(!this.uniforms)return;Zu(t.lat,t.lon,t.roll,this.earth.quaternion),this.holder.position.set(t.offX,t.offY,0),this.camera.position.set(0,0,t.dist),this.camera.lookAt(0,0,0),this.uniforms.uReveal.value=t.reveal,this.uniforms.uLod.value=t.lod,this.uniforms.uMaskA.value=t.borders,this.uniforms.uLightGain.value=t.lightGain??1,this.uniforms.uMoonI.value=.11*(1+2.6*t.lod),this.cloudUniforms.uShift.value=t.cloudShift,this.uniforms.uCloudShift.value=t.cloudShift,this.cloudUniforms.uOpacity.value=t.cloudOpacity,this.atmoUniforms.uCenter.value.copy(this.holder.position),this.colombiaLine.material.opacity=(.7+.2*(t.day??0))*t.borders,this.regionLine.material.opacity=(.14+.2*(t.day??0))*t.borders,this.colombiaLine.visible=t.borders>.001,this.regionLine.visible=t.borders>.001,this.stars.rotation.y=t.starSpin;let i=t.day??0;this.uniforms.uDayMode.value=i,this.starUniforms.uReveal.value=t.reveal*(1-i),this.atmoUniforms.uGain.value=1-i,this.atmoDayUniforms.uGain.value=i,this._bg.copy(this._bgNight).lerp(this._bgDay,i),this.renderer.setClearColor(this._bg,1),this.renderer.toneMappingExposure=1+i*.06,this.colombiaLine.material.color.copy(this._lineNight).lerp(this._lineDay,i),this.regionLine.material.color.copy(this._regionNight).lerp(this._regionDay,i),this.starUniforms.uTime.value=t.time}render(){this._contextLost||!this.uniforms||this.renderer.render(this.scene,this.camera)}project(t,i){let r=jn(t,i,1,this._tmpV);this.earth.updateMatrixWorld(!0),r.applyMatrix4(this.earth.matrixWorld);let a=this._tmpN.copy(r).sub(this.holder.position).normalize(),n=this.camera.position.clone().sub(r).normalize(),s=a.dot(n);return r.project(this.camera),{x:(r.x*.5+.5)*this.width,y:(-r.y*.5+.5)*this.height,facing:s}}dispose(){this.scene.traverse(t=>{t.geometry?.dispose(),t.material?.dispose()}),Object.values(this.textures||{}).forEach(t=>t.dispose()),this.renderer.dispose()}}});mr();var jl="ttc-theme",Ga=document.documentElement,fs=new Set,kd=window.matchMedia("(prefers-color-scheme: dark)"),Gd=()=>{try{let e=localStorage.getItem(jl);return e==="light"||e==="dark"?e:null}catch{return null}},ta=()=>Ga.dataset.theme==="dark"?"dark":"light",ql=e=>(fs.add(e),()=>fs.delete(e)),Wl=0;function Xl(e,{persist:t=!0,animate:i=!0}={}){if(e!=="light"&&e!=="dark")return;if(t)try{localStorage.setItem(jl,e)}catch{}if(e===ta()){gs();return}let r=window.matchMedia("(prefers-reduced-motion: reduce)").matches;i&&!r&&(Ga.classList.add("theme-anim"),clearTimeout(Wl),Wl=setTimeout(()=>Ga.classList.remove("theme-anim"),700)),Ga.dataset.theme=e,document.querySelector('meta[name="theme-color"]')?.setAttribute("content",e==="dark"?"#08090B":"#F7F7F5"),gs(),fs.forEach(a=>a(e))}function gs(){let e=ta()==="dark";document.querySelectorAll("[data-theme-toggle]").forEach(t=>{t.setAttribute("aria-pressed",String(e)),t.setAttribute("aria-label",e?"Cambiar a modo claro":"Cambiar a modo oscuro"),t.title=e?"Modo claro":"Modo oscuro"})}function Yl(){document.querySelectorAll("[data-theme-toggle]").forEach(e=>e.addEventListener("click",()=>Xl(ta()==="dark"?"light":"dark"))),kd.addEventListener?.("change",e=>{Gd()||Xl(e.matches?"dark":"light",{persist:!1})}),gs()}var Di={lat:4.4,lon:-73.6},qn={lat:4.711,lon:-74.072},Jr={lat:14,lon:16,roll:23.4},w_=2.4,ed=.0015,T_=(e,t)=>(e%t+t)%t,td=(e,t,i)=>`${Math.abs(e).toFixed(2).replace(".",",")}\xB0 ${e>=0?t:i}`;function id(e,{onProgress:t,onLayout:i,onPlate:r}={}){let a=Z=>e.querySelector(Z),n=a(".journey__stage"),s=a(".journey__canvas"),o=a(".journey__pin"),l=a("[data-read-lat]"),h=a("[data-read-lon]"),c=e.style,d=zi(),u=Gl();e.classList.toggle("is-reduced",d),e.classList.toggle("no-webgl",!u);let p=new URLSearchParams(location.search).get("shot"),g=p!==null?parseFloat(p):null,_=null,f=0,m=0,x=performance.now(),b=0,y=!1,w=0,A=!0,v=!0,M=!0,C=0,D=0,L=0,F=Jr.lon,j=0,I=ta()==="light"?1:0,G=0,J=0,H=0,de="",q=null,X=0;function ee(){X=Math.round(n.clientHeight||window.innerHeight)}let Ie=()=>{j=T_(F-Di.lon,360),j<70&&(j+=360)};Ie();function Y(){let Z=e.getBoundingClientRect(),pe=Math.max(1,e.offsetHeight-window.innerHeight);return ds(-Z.top/pe)}let Q=window.gsap,Ee=window.ScrollTrigger;Q&&Ee&&(Q.registerPlugin(Ee),q=Ee.create({trigger:e,start:"top top",end:"bottom bottom",onUpdate:()=>{f=Y(),$e()},onRefresh:()=>{f=Y()}})),window.addEventListener("scroll",()=>{f=Y(),$e()},{passive:!0}),f=m=Y(),g!==null&&(f=m=g);async function Ue(){if(!u)return Pe();try{let{EarthScene:Z}=await Promise.resolve().then(()=>(Qu(),Ku));if(_=new Z(s,{tier:Hl()}),_.onContextLost=()=>Pe(),await _.load(),e.classList.add("is-ready"),M=!0,g!==null)C=D=1;else if(d)C=D=1;else if(Q){let pe={r:0,l:0};Q.to(pe,{r:1,duration:2.6,ease:"power2.out",onUpdate:()=>{C=pe.r,M=!0}}),Q.to(pe,{l:1,duration:2.8,delay:.7,ease:"power1.inOut",onUpdate:()=>{D=pe.l}})}else C=D=1;$e()}catch(Z){console.warn("[Tu Temporada] La escena 3D no pudo iniciar; se usa la versi\xF3n est\xE1tica.",Z),Pe()}}function Pe(){e.classList.add("no-webgl","is-ready");let Z=a(".journey__fallback");Z&&!Z.childElementCount&&(Z.innerHTML=["dark","light"].map(pe=>{let fe=pe==="light"?"-light":"";return`<img class="fb-far" data-for-theme="${pe}" src="${Bi(`assets/img/fallback/earth-far${fe}.webp`)}" alt="" decoding="async">
        <img class="fb-near" data-for-theme="${pe}" src="${Bi(`assets/img/fallback/earth-near${fe}.webp`)}" alt="" decoding="async">`}).join("")),_?.dispose?.(),_=null,M=!0,$e()}let le=new URLSearchParams(location.search).get("frame");function We(Z,pe){let fe=_.framing();if(le){let Ae=le==="near";return{lat:Ae?qn.lat:Di.lat-6,lon:Ae?qn.lon:Di.lon,roll:Ae?0:8,dist:Ae?fe.near:fe.far*.94,offX:0,offY:0,lod:Ae?1:0,borders:Ae?1:0,cloudShift:0,cloudOpacity:Ae?.32:1,starSpin:0,time:0,reveal:1,lightGain:1,day:I}}if(d)return{lat:Di.lat,lon:Di.lon,roll:0,dist:Math.exp(tr(Math.log(fe.far),Math.log(fe.near),.42)),offX:0,offY:0,lod:.5,borders:1,cloudShift:0,cloudOpacity:.5,starSpin:0,time:0,reveal:C,lightGain:1.15,day:I};let Ve=ka(dt(Z,.03,.42)),Le=ms(bt(dt(Z,.26,.7))),Ke=Vl(dt(Z,.7,.9));Z<ed&&(F-=w_*pe*L,Ie());let U=Di.lon+j*(1-Ve);Z<ed&&(F=U);let mt=1-bt(dt(Z,.16,.62)),Be=fe.portrait?0:.62*mt*(fe.far/3.4),ct=fe.portrait?.3*mt*(fe.far/3.4):.1*mt*(fe.far/3.4),ce=Math.exp(tr(Math.log(fe.far),Math.log(fe.near),Le)+(Math.log(fe.end)-Math.log(fe.near))*Ke),Je=bt(dt(Z,.4,.68));return{lat:tr(Jr.lat,Di.lat,Ve),lon:U,roll:tr(Jr.roll,0,ka(dt(Z,.03,.55))),dist:ce,offX:Be,offY:ct,lod:Je,borders:bt(dt(Z,.48,.66)),cloudShift:b*.0016,cloudOpacity:tr(1,.32,bt(dt(Z,.32,.66))),starSpin:U*.0016,time:b,reveal:C,lightGain:D,day:I}}function et(Z,pe,fe,Ve){let Le=($,me)=>c.setProperty($,me),Ke=n.clientWidth,U=n.clientHeight,mt=Math.hypot(Ke,U)*1.05,Be,ct,ce,Je,Ae,Ne,_t,T;d?(Be=1-bt(dt(Z,.05,.15)),ce=bt(dt(Z,.18,.28)),Je=bt(dt(Z,.5,.56)),ct=ce*(1-Je),Ae=bt(dt(Z,.55,.62))*.5,_t=bt(dt(Z,.6,.7)),Ne=_t,T=1-bt(dt(Z,.56,.64))):(Be=1-bt(dt(Z,.035,.14)),ct=bt(dt(Z,.56,.62))*(1-bt(dt(Z,.8,.84))),ce=bt(dt(Z,.6,.67)),Je=bt(dt(Z,.78,.83)),Ae=bt(dt(Z,.79,.9))*.62,Ne=ka(dt(Z,.85,.97)),_t=Ne,T=1-bt(dt(Z,.81,.86))),Le("--progress",Z.toFixed(4)),Le("--intro-a",Be.toFixed(3)),Le("--intro-y",`${(-36*(1-Be)).toFixed(1)}px`),Le("--chrome",T.toFixed(3)),Le("--arr-a",(ce*(1-Je)).toFixed(3)),Le("--arr-y",`${((1-ce)*24-Je*18).toFixed(1)}px`),Le("--shade",Ae.toFixed(3));let S=pe?pe.x:Ke/2,B=pe?pe.y:U/2,ie=pe?bt(dt(pe.facing,.15,.35)):1;if(Le("--pin-x",`${S.toFixed(1)}px`),Le("--pin-y",`${B.toFixed(1)}px`),Le("--pin-a",(ct*ie).toFixed(3)),Le("--pin-s",(.4+.6*ps(dt(Z,d?.18:.56,d?.28:.645))).toFixed(3)),Le("--stem",`${(46*ps(dt(Z,d?.2:.585,d?.3:.665))).toFixed(1)}px`),Le("--pin-label",bt(dt(Z,d?.22:.635,d?.32:.69)).toFixed(3)),Le("--plate-x",`${S.toFixed(1)}px`),Le("--plate-y",`${B.toFixed(1)}px`),Le("--plate-r",`${(Ne*mt).toFixed(1)}px`),Le("--plate-vis","hidden"),Le("--plate-in",_t.toFixed(3)),r?.({x:S,y:B,r:d?mt:Ne*mt,full:Ne>=1,opacity:d?_t:1}),l){let $=td(fe,"N","S")+"|"+td((Ve+540)%360-180,"E","O");if($!==de){de=$;let[me,ge]=$.split("|");l.textContent=me,h.textContent=ge}}if(!_){let $=ms(bt(dt(Z,.26,.7)));Le("--fb-scale",tr(1,1.6,$).toFixed(3)),Le("--fb-near",bt(dt(Z,.46,.66)).toFixed(3))}return t?.(Z,d?Z>.68:Z>.95),Ne>=1}function Re(Z){w=0;let pe=(Z-x)/1e3,fe=Math.min(.05,pe);x=Z,b+=fe,L=Math.min(1,L+fe/3.2);let Ve=m,Le=d?1:1-Math.exp(-Math.min(.25,pe)*7.5);m+=(f-m)*Le,Math.abs(f-m)<5e-5&&(m=f),g!==null&&(m=g);let Ke=m!==Ve||M;M=!1;let U=null,mt=Jr.lat,Be=F,ct=!1;if(_){let Je=We(m,fe);mt=Je.lat,Be=Je.lon,_.setState(Je),U=_.project(qn.lat,qn.lon),ct=et(m,U,mt,Be),ct||_.render(),!d&&m<.5&&(G++,J+=fe,G>=90&&(J/G>.027&&H<2&&_.degrade()&&H++,G=0,J=0))}else ct=et(m,null,Di.lat,Di.lon);v&&A&&!document.hidden&&(Ke||!d&&!ct&&_)?w=requestAnimationFrame(Re):y=!1}function $e(){y||!v||(y=!0,x=performance.now(),w=requestAnimationFrame(Re))}new IntersectionObserver(([Z])=>{A=Z.isIntersecting,A&&(M=!0,$e())},{threshold:0}).observe(e),document.addEventListener("visibilitychange",()=>{document.hidden||(x=performance.now(),$e())});let he=0;window.addEventListener("resize",()=>{cancelAnimationFrame(he),he=requestAnimationFrame(()=>{ee(),i?.(X),_?.resize(),M=!0,$e()})}),a(".journey__skip")?.addEventListener("click",()=>be());let se=null;ql(Z=>{let pe=Z==="light"?1:0;if(se?.kill?.(),d||!Q){I=pe,M=!0,$e();return}let fe={v:I};se=Q.to(fe,{v:pe,duration:1.4,ease:"power2.inOut",onUpdate:()=>{I=fe.v,M=!0,$e()}})});function be(){let Z=e.offsetTop+e.offsetHeight-window.innerHeight+1;window.scrollTo({top:Z,behavior:d?"auto":"smooth"})}return ee(),document.fonts?.ready.then(()=>{ee(),i?.(X),M=!0,$e()}),Ue(),et(m,null,Jr.lat,Jr.lon),{setActive(Z){v=Z,Z?(ee(),i?.(X),q?.refresh?.(),f=m=Y(),M=!0,$e()):(cancelAnimationFrame(w),y=!1)},progress:()=>m,snap(){f=m=Y(),M=!0,$e()},skip:be,refresh(){ee(),i?.(X),q?.refresh?.(),f=Y(),M=!0,$e()},overlap:()=>X}}var A_={"Nivel L\xE1ser 16 L\xEDneas":{main:"nivel-laser-16-lineas-v2"},"Guada\xF1a El\xE9ctrica":{main:"guadana-electrica",all:!0},"Soldador Inverter 3 en 1":{main:"soldador-inverter-3-en-1"},"Maleta Antirrobo Semipermeable Cuerina Alta Calidad":{main:"maleta-antirrobo"},"Comedero para Mascotas de Rodillo":{main:"comedero-mascotas-rodillo"},"Intercomunicador para Moto":{main:"intercomunicador-moto"},"Set de Arte 208 Piezas":{main:"set-de-arte-208-piezas-rosado",v:{Rosado:"set-de-arte-208-piezas-rosado",Azul:"set-de-arte-208-piezas-azul"}},"Set Reloj, Correa, Billetera, Gorra y Llavero":{main:"set-reloj-correa-billetera-negro-v2",v:{Negro:"set-reloj-correa-billetera-negro-v2",Caf\u00E9:"set-reloj-correa-billetera-cafe-v2",Azul:"set-reloj-correa-billetera-azul-v2",Miel:"set-reloj-correa-billetera-miel-v2"}},"Kit Maleta, Lonchera y Cartuchera":{main:"kit-maleta-lonchera-y-cartuchera-naruto",v:{Naruto:"kit-maleta-lonchera-y-cartuchera-naruto","Cars Azul":"kit-maleta-lonchera-y-cartuchera-cars-azul-ia","Cars Negro":"kit-maleta-lonchera-y-cartuchera-cars-negro",Batman:"kit-maleta-lonchera-y-cartuchera-batman",Sonic:"kit-maleta-lonchera-y-cartuchera-sonic-ia","Buzz Lightyear":"kit-maleta-lonchera-y-cartuchera-buzz-lightyear","Unicornio/arcoiris":"kit-maleta-lonchera-y-cartuchera-unicornio-arcoiris",Frozen:"kit-maleta-lonchera-y-cartuchera-frozen",Sofia:"kit-maleta-lonchera-y-cartuchera-sofia","Paw Patrol":"kit-maleta-lonchera-y-cartuchera-paw-patrol-ia","Encanto Rosada":"kit-maleta-lonchera-y-cartuchera-encanto-rosada-ia","Encanto Azul":"kit-maleta-lonchera-y-cartuchera-encanto-azul","Frozen Rosada":"kit-maleta-lonchera-y-cartuchera-frozen-rosada","Frozen Morada":"kit-maleta-lonchera-y-cartuchera-frozen-morada-ia",Unicornio:"kit-maleta-lonchera-y-cartuchera-unicornio-ia"}},"Pistola Burbuja 132 Huecos":{main:"pistola-burbuja-132-huecos",v:{Verde:"pistola-burbuja-132-huecos-verde",Azul:"pistola-burbuja-132-huecos-azul",Rosada:"pistola-burbuja-132-huecos-rosada"}},"Licuadora Port\xE1til Digital Inal\xE1mbrica":{main:"licuadora-portatil-digital-inalambrica",all:!0},"Encendedor Electr\xF3nico":{main:"encendedor-electronico"},"Pistola El\xE9ctrica de Chorro":{main:"pistola-electrica-de-chorro"},"Aceite de Magnesio":{main:"aceite-de-magnesio"},"Organizador de Ba\xFAl para Carro Plegable":{main:"organizador-de-baul-para-carro-plegable"},"Vinagre de Manzana en Gomitas":{main:"vinagre-de-manzana-en-gomitas"},"Cargador Inal\xE1mbrico 3 en 1":{main:"cargador-inalambrico-3-en-1",all:!0},"Ventilador Port\xE1til de Cuello":{main:"ventilador-portatil-de-cuello"},"Scooter El\xE9ctrico con Luces":{main:"scooter-electrica-con-luces-led-kidshop-rojo",v:{Rojo:"scooter-electrica-con-luces-led-kidshop-rojo",Azul:"scooter-electrica-con-luces-led-kidshop-azul"}},"Carro Antigravedad con Control Remoto":{main:"carro-antigravedad-con-control-remoto-rojo",v:{Rojo:"carro-antigravedad-con-control-remoto-rojo",Azul:"carro-antigravedad-con-control-remoto-azul"}},"Dron Doble C\xE1mara 4K con Malet\xEDn":{main:"dron-doble-camara-4k-con-maletin"},"Mini Aspiradora Robot":{main:"mini-aspiradora-robot"}};var R_=!1,rd=e=>`assets/img/products/estudio/${e}.webp`;function ad(e){for(let[t,i]of Object.entries(A_)){let r=e.find(s=>s.n===t);if(!r){console.warn("[fotos] Producto no encontrado:",t);continue}let a=R_||i.all,n=(s,o)=>a?[o,...(s||[]).filter(l=>l!==o)]:[o];i.main&&(r.img=n(r.img,rd(i.main)),a||(r.s=[]));for(let[s,o]of Object.entries(i.v||{})){let l=(r.v||[]).find(h=>h.n===s);if(!l){console.warn("[fotos] Variante no encontrada:",t,s);continue}l.img=n(l.img,rd(o))}}}var nd="573165298792",Ui=[["EQUIPOS","Equipos","\u2699\uFE0F"],["HERRAMIENTAS","Herramientas","\u{1F527}"],["HOGAR","Hogar","\u{1F3E0}"],["TECNOLOGIA","Tecnolog\xEDa","\u{1F4F1}"],["SALUD","Salud y bienestar","\u{1F49A}"],["VEHICULOS","Veh\xEDculos y motos","\u{1F3CD}\uFE0F"],["BOLSOS, MORRALES, MALETAS","Bolsos y maletas","\u{1F392}"],["Marroquiner\xEDa","Marroquiner\xEDa","\u{1F45C}"],["JUGUETERIA","Jugueter\xEDa","\u{1F9F8}"],["MASCOTAS","Mascotas","\u{1F43E}"],["NAVIDAD","De temporada","\u{1F384}"]],Xt=[{n:"Nivel L\xE1ser 16 L\xEDneas",c:"EQUIPOS",p:259999,f:["16 l\xEDneas l\xE1ser verde de alta precisi\xF3n","Tipo DeWalt, cobertura 360\xB0","Autonivelaci\xF3n inteligente","Bater\xEDa recargable de larga duraci\xF3n","Incluye tr\xEDpode ajustable, cargador y bater\xEDa","Incluye gafas protectoras y placa de soporte","Incluye malet\xEDn de transporte"],img:["assets/img/products/nivel-laser-16-lineas-b85191ff55.webp"],id:"2148020"},{n:"Guada\xF1a El\xE9ctrica",c:"EQUIPOS",p:159999,f:["El\xE9ctrica con bater\xEDa y cargador","Incluye guantes y cuchillas"],img:["assets/img/products/guadana-electrica-50259e6966.webp","assets/img/products/guadana-electrica-7e7d5f834e.webp","assets/img/products/guadana-electrica-941b0bab9f.webp"],id:"963485"},{n:"Soldador Inverter 3 en 1",c:"EQUIPOS",p:489990,f:["Inverter 380 AMP","3 en 1","Incluye cables y accesorios","\u{1F4E6} Incluye:","Antorcha MIG","Pinza porta electrodo","Pinza tierra","Regulador de arg\xF3n","Careta protectora","Guantes","Rollo de alambre","Accesorios completos"],img:["assets/img/products/soldador-inverter-3-en-1-d7f256d12d.webp"],id:"2113507"},{n:"Luces Cortina LED Inteligente 3x3",c:"NAVIDAD",p:22e4,f:["LED inteligente","Medida 3 x 3","Decoraci\xF3n navide\xF1a"],img:[],id:"2334686"},{n:"Maleta Antirrobo Semipermeable Cuerina Alta Calidad",c:"BOLSOS, MORRALES, MALETAS",p:45e3,f:["Dise\xF1o antirrobo con clave de seguridad","Lona semi impermeable y cuerina de alta calidad","Puerto USB integrado","Tipo bandolera cruzada, pechera semi acolchada y ajustable","Medidas: 32 cm de alto, 21 cm de ancho y 9 cm de grosor","Color negro","Interfaz de carga USB","Mango c\xF3modo","Barra luminosa reflectiva","Hebilla para usar en el hombro izquierdo o derecho","Impermeable y a prueba de rayones"],img:["assets/img/products/maleta-antirrobo-semipermeable-cuerina-alta-cali-b88aca2450.webp","assets/img/products/maleta-antirrobo-semipermeable-cuerina-alta-cali-d70e9ba5e3.webp","assets/img/products/maleta-antirrobo-semipermeable-cuerina-alta-cali-061e97965f.webp","assets/img/products/maleta-antirrobo-semipermeable-cuerina-alta-cali-841a59f7a1.webp","assets/img/products/maleta-antirrobo-semipermeable-cuerina-alta-cali-3fae3a7a38.webp","assets/img/products/maleta-antirrobo-semipermeable-cuerina-alta-cali-e88f02adb9.webp","assets/img/products/maleta-antirrobo-semipermeable-cuerina-alta-cali-6404943505.webp","assets/img/products/maleta-antirrobo-semipermeable-cuerina-alta-cali-513bfef0b8.webp","assets/img/products/maleta-antirrobo-semipermeable-cuerina-alta-cali-5dc0c53639.webp","assets/img/products/maleta-antirrobo-semipermeable-cuerina-alta-cali-20bdae6f4a.webp","assets/img/products/maleta-antirrobo-semipermeable-cuerina-alta-cali-fd160a7452.webp","assets/img/products/maleta-antirrobo-semipermeable-cuerina-alta-cali-dad4903be5.webp","assets/img/products/maleta-antirrobo-semipermeable-cuerina-alta-cali-b6e3316dca.webp","assets/img/products/maleta-antirrobo-semipermeable-cuerina-alta-cali-36f51a215d.webp","assets/img/products/maleta-antirrobo-semipermeable-cuerina-alta-cali-b58548a682.webp","assets/img/products/maleta-antirrobo-semipermeable-cuerina-alta-cali-f93954d0f4.webp","assets/img/products/maleta-antirrobo-semipermeable-cuerina-alta-cali-7fe00fe1bf.webp","assets/img/products/maleta-antirrobo-semipermeable-cuerina-alta-cali-8920a3f291.webp","assets/img/products/maleta-antirrobo-semipermeable-cuerina-alta-cali-f35bab4d1d.webp","assets/img/products/maleta-antirrobo-semipermeable-cuerina-alta-cali-f33edc064f.webp","assets/img/products/maleta-antirrobo-semipermeable-cuerina-alta-cali-0201536146.webp","assets/img/products/maleta-antirrobo-semipermeable-cuerina-alta-cali-e50c1909e3.webp","assets/img/products/maleta-antirrobo-semipermeable-cuerina-alta-cali-b75ff71716.webp","assets/img/products/maleta-antirrobo-semipermeable-cuerina-alta-cali-97ad14cb68.webp","assets/img/products/maleta-antirrobo-semipermeable-cuerina-alta-cali-5f8d689aa4.webp","assets/img/products/maleta-antirrobo-semipermeable-cuerina-alta-cali-419ecb880a.webp","assets/img/products/maleta-antirrobo-semipermeable-cuerina-alta-cali-62ae3a2f54.webp"],id:"2023178"},{n:"Comedero para Mascotas de Rodillo",c:"MASCOTAS",p:65e3,f:["Comedero lento con rodillo interactivo","Juguete de entrenamiento para perros y gatos","Dos salidas de alimento: grano grande y grano peque\xF1o","Base con puntas que hace m\xE1s lento el comer","F\xE1cil de armar","Apto para perros de diferentes tama\xF1os","Se recomienda supervisar el juego"],img:["assets/img/products/comedero-para-mascotas-de-rodillo-6f83154696.webp","assets/img/products/comedero-para-mascotas-de-rodillo-206bc53a6f.webp","assets/img/products/comedero-para-mascotas-de-rodillo-52d6baee18.webp"],id:"631293"},{n:"Intercomunicador para Moto",c:"VEHICULOS",p:13e4,f:["Modelo Q58-Max","Comunicaci\xF3n entre motociclistas con alcance de hasta 500 m","Pantalla LCD y luz LED de colores","Conexi\xF3n con tel\xE9fono, m\xFAsica y navegador","Permite compartir m\xFAsica con el acompa\xF1ante"],img:["assets/img/products/intercomunicador-para-moto-585db6502b.webp","assets/img/products/intercomunicador-para-moto-50fb54c001.webp","assets/img/products/intercomunicador-para-moto-3cd2773509.webp","assets/img/products/intercomunicador-para-moto-f14d91cf6d.webp"],id:"2004205"},{n:"Closet de Tela Ref. 2",c:"HOGAR",p:null,f:["Closet de tela","Referencia 2"],img:[],id:"158243 / 402640"},{n:"Kit Maleta, Lonchera y Cartuchera",c:"BOLSOS, MORRALES, MALETAS",p:185e3,f:["Kit de 3 piezas","Maleta, lonchera y cartuchera","## Detalles","Material f\xE1cil de limpiar","Tirantes ajustables y acolchados para mayor comodidad de carga","Cremallera reforzada","Altos detalles","Lonchera reforzada","Interior t\xE9rmico aislante fr\xEDo y caliente","Correa ajustable","## Medidas aproximadas","Morral: 40 cm x 31 cm","Cartuchera: largo 23 cm x 5 cm","Lonchera: 19 cm x 24 cm x 6 cm","Peso: 1 kg"],img:["assets/img/products/kit-maleta-lonchera-y-cartuchera-55e1a8dd9b.webp"],id:"1621311",nd:!0,vl:"Color y dise\xF1o",v:[{n:"Naruto",id:"1131834",img:["assets/img/products/kit-maleta-lonchera-y-cartuchera-naruto-facb734504.webp"]},{n:"Cars Azul",id:"1131835",img:["assets/img/products/kit-maleta-lonchera-y-cartuchera-cars-azul-4de5ab710e.webp"]},{n:"Cars Negro",id:"1131836",img:["assets/img/products/kit-maleta-lonchera-y-cartuchera-cars-negro-ee86d645d4.webp"]},{n:"Batman",id:"1131837",img:["assets/img/products/kit-maleta-lonchera-y-cartuchera-batman-52570e4093.webp"]},{n:"Sonic",id:"1131838",img:["assets/img/products/kit-maleta-lonchera-y-cartuchera-sonic-aa097fbb4f.webp"]},{n:"Buzz Lightyear",id:"1131839",img:["assets/img/products/kit-maleta-lonchera-y-cartuchera-buzz-lightyear-f30adda146.webp"]},{n:"Unicornio/arcoiris",id:"1131830",img:["assets/img/products/kit-maleta-lonchera-y-cartuchera-unicornio-arcoiris-e1da917b54.webp"]},{n:"Frozen",id:"1131831",img:["assets/img/products/kit-maleta-lonchera-y-cartuchera-frozen-4306ccd9d7.webp"]},{n:"Sofia",id:"1131832",img:["assets/img/products/kit-maleta-lonchera-y-cartuchera-sofia-95650c6aa6.webp"]},{n:"Paw Patrol",id:"1131833",img:["assets/img/products/kit-maleta-lonchera-y-cartuchera-paw-patrol-c6845666ac.webp"]},{n:"Encanto Rosada",id:"1131829",img:["assets/img/products/kit-maleta-lonchera-y-cartuchera-encanto-rosada-023e9fa599.webp"]},{n:"Encanto Azul",id:"1131828",img:["assets/img/products/kit-maleta-lonchera-y-cartuchera-encanto-azul-47325b6ff9.webp"]},{n:"Frozen Rosada",id:"1131827",img:["assets/img/products/kit-maleta-lonchera-y-cartuchera-frozen-rosada-6ad428d81d.webp","assets/img/products/kit-maleta-lonchera-y-cartuchera-frozen-rosada-18129a5142.webp"]},{n:"Frozen Morada",id:"1131826",img:["assets/img/products/kit-maleta-lonchera-y-cartuchera-frozen-morada-b35d28aed0.webp"]},{n:"Unicornio",id:"1131825",img:["assets/img/products/kit-maleta-lonchera-y-cartuchera-unicornio-a9cb790bb6.webp"]}]},{n:"Set de Arte 208 Piezas",c:"JUGUETERIA",p:55e3,f:["208 piezas","Con malet\xEDn plegable"],img:["assets/img/products/set-de-arte-208-piezas-bc5a32b349.webp"],id:"398360",v:[{n:"Rosado",id:"252421",img:["assets/img/products/set-de-arte-208-piezas-bc5a32b349.webp"]},{n:"Azul",id:"252420",img:["assets/img/products/set-de-arte-208-piezas-azul-83b805776f.webp"]}]},{n:"Pistola Burbuja 132 Huecos",c:"JUGUETERIA",p:97500,f:["132 huecos","Bater\xEDa extra\xEDble y recargable","Incluye 4 l\xEDquidos de burbujas","Incluye cable USB (no incluye cargador)"],img:["assets/img/products/pistola-burbuja-132-huecos-84628e481f.webp"],id:"1984698",v:[{n:"Verde",id:"1828947",img:["assets/img/products/pistola-burbuja-132-huecos-verde-abd3ab03cc.webp"]},{n:"Azul",id:"1828948",img:["assets/img/products/pistola-burbuja-132-huecos-azul-d244696ee6.webp"]},{n:"Rosada",id:"1828949",img:["assets/img/products/pistola-burbuja-132-huecos-rosada-0c1ec45877.webp"]}],s:["assets/img/products/pistola-burbuja-132-huecos-84628e481f.webp","assets/img/products/pistola-burbuja-132-huecos-bddf6b49ac.webp"]},{n:"Licuadora Port\xE1til Digital Inal\xE1mbrica",c:"HOGAR",p:75e3,f:["Port\xE1til e inal\xE1mbrica","Recargable por USB","Panel digital inteligente","Cuchillas de acero inoxidable","Prepara jugos, batidos y m\xE1s"],img:["assets/img/products/licuadora-portatil-digital-inalambrica-1bd752f342.webp","assets/img/products/licuadora-portatil-digital-inalambrica-f16cf6af64.webp","assets/img/products/licuadora-portatil-digital-inalambrica-1bb6f7acee.webp","assets/img/products/licuadora-portatil-digital-inalambrica-39e6898c4d.webp","assets/img/products/licuadora-portatil-digital-inalambrica-0bf8e8915f.webp"],id:"2093639"},{n:"Encendedor Electr\xF3nico",c:"HOGAR",p:26500,f:["Electr\xF3nico y recargable por USB","Cuello largo y flexible para mayor alcance","Sin gas y sin llama tradicional","Multiusos: velas, parrilla y estufa"],img:["assets/img/products/encendedor-electronico-5fffd4a57c.webp","assets/img/products/encendedor-electronico-740b4d0a2e.webp","assets/img/products/encendedor-electronico-2801a8ef63.webp","assets/img/products/encendedor-electronico-2285eb33a2.webp"],id:"1905014"},{n:"Pistola El\xE9ctrica de Chorro",c:"JUGUETERIA",p:118e3,f:["El\xE9ctrica","Lanza chorro de agua","Capacidad aproximada de 550 ml","Incluye bater\xEDa recargable y cable USB"],img:["assets/img/products/pistola-electrica-de-chorro-aac102e0e6.webp","assets/img/products/pistola-electrica-de-chorro-feb1e8da54.webp","assets/img/products/pistola-electrica-de-chorro-2332c2378c.webp","assets/img/products/pistola-electrica-de-chorro-478739e769.webp"],id:"592479"},{n:"Aceite de Magnesio",c:"SALUD",p:54500,f:["Aceite de magnesio con aloe vera: loci\xF3n (250 ml) y spray (450 ml)","Alivio de dolores y molestias musculares","Relajaci\xF3n del estr\xE9s y tensi\xF3n","F\xE1cil de aplicar, de absorci\xF3n r\xE1pida","F\xF3rmula no grasa"],img:["assets/img/products/aceite-de-magnesio-789629c073.webp","assets/img/products/aceite-de-magnesio-c36be3e7db.webp","assets/img/products/aceite-de-magnesio-be04ff08d8.webp","assets/img/products/aceite-de-magnesio-147c8118bb.webp"],id:"2229765"},{n:"Organizador de Ba\xFAl para Carro Plegable",c:"VEHICULOS",p:75e3,f:["Plegable y compacto","Antideslizante","Material impermeable","Asas resistentes","Divisiones ajustables","Velcro de seguridad","Para ba\xFAl de carro, casa (garaje / bodega), exteriores (picnic / camping) y compras"],img:["assets/img/products/organizador-de-baul-para-carro-plegable-0adaa03793.webp","assets/img/products/organizador-de-baul-para-carro-plegable-dd63b51b7f.webp","assets/img/products/organizador-de-baul-para-carro-plegable-42687c4fc5.webp"],id:"2293869"},{n:"Vinagre de Manzana en Gomitas",c:"SALUD",p:55e3,f:["Goma masticable a base de gelatina con vinagre de manzana, fortificada con vitamina C","Aporta 83.000 \xB5g de vitamina C por porci\xF3n","60 gomitas (150 g), 60 porciones por envase","Sabor manzana","Contiene edulcorantes"],img:["assets/img/products/vinagre-de-manzana-en-gomitas-13b0f9b0e7.webp","assets/img/products/vinagre-de-manzana-en-gomitas-56019a46b9.webp","assets/img/products/vinagre-de-manzana-en-gomitas-9e7a0719fe.webp"],id:"2145783"},{n:"Cargador Inal\xE1mbrico 3 en 1",c:"TECNOLOGIA",p:55e3,f:["Compatible con dispositivos Apple y Android","Dise\xF1o compacto y moderno","Carga r\xE1pida y segura (tecnolog\xEDa Qi)","Protecci\xF3n contra sobrecarga y sobrecalentamiento","Ideal para escritorio, mesa de noche u oficina","Peso: 115 g","Medidas: 18 cm x 2 cm x 17 cm"],img:["assets/img/products/cargador-inalambrico-3-en-1-collage-6b08cf3713.webp"],id:"1898334"},{n:"Ventilador Port\xE1til de Cuello",c:"TECNOLOGIA",p:55e3,f:["Port\xE1til","Se usa en el cuello"],img:["assets/img/products/ventilador-portatil-de-cuello-32d0e1e87f.webp"],id:"291552"},{n:"Set Reloj, Correa, Billetera, Gorra y Llavero",c:"Marroquiner\xEDa",p:193e3,f:["Correa y billetera en cuero 100%","Llavero en cuero genuino","Reloj de lujo","Gorra hombre tipo V\xE9lez","Presentado en caja de madera"],img:["assets/img/products/set-reloj-correa-billetera-gorra-y-llavero-e8163bec1c.webp"],id:"2072930",nd:!0,v:[{n:"Negro",id:"1967499",img:["assets/img/products/set-reloj-correa-billetera-gorra-y-llavero-negro-359be9febe.webp"]},{n:"Caf\xE9",id:"1967500",img:["assets/img/products/set-reloj-correa-billetera-gorra-y-llavero-cafe-7fad85598c.webp"]},{n:"Azul",id:"1967502",img:["assets/img/products/set-reloj-correa-billetera-gorra-y-llavero-azul-9cdb2aee2a.webp"]},{n:"Miel",id:"1967501",img:["assets/img/products/set-reloj-correa-billetera-gorra-y-llavero-miel-ebaf127985.webp"]}],s:["assets/img/products/set-reloj-correa-billetera-gorra-y-llavero-e8163bec1c.webp"]},{n:"Scooter El\xE9ctrico con Luces",c:"JUGUETERIA",p:602e3,f:["Marca: Kidshop","Modelo: Pt08","Capacidad de la bater\xEDa: 4.5 Ah","Tipo de bater\xEDa: plomo \xE1cido","Voltaje de la bater\xEDa: 24 V","Tiempo de carga: 4 h","Sistema de frenos: manual","Velocidad m\xE1xima: 12 km/h","Peso m\xE1ximo soportado: 70 kg","Edad m\xEDnima recomendada: 5 a\xF1os","Altura: 94 cm","Largo: 74 cm","Es plegable: No"],img:["assets/img/products/scooter-electrica-con-luces-led-kidshop-pt10-8b9003cbc3.webp"],id:"1968812",vl:"Color",v:[{n:"Rojo",id:"1968812",img:["assets/img/products/scooter-electrica-con-luces-led-kidshop-pt10-rojo-06932811b0.webp"]},{n:"Azul",id:"1968812",img:["assets/img/products/scooter-electrica-con-luces-led-kidshop-pt10-azul-cf175c64f5.webp"]}]},{n:"Carro Antigravedad con Control Remoto",c:"JUGUETERIA",p:15e4,f:["Carro antigravedad: corre en paredes, techos y pisos","Se adhiere a superficies lisas","Rotaci\xF3n 360\xB0","Luces LED","Control remoto f\xE1cil de usar","Carga por USB","Incluye carro, control remoto, bater\xEDa recargable y cable USB","## Medidas aproximadas","Largo: 14 cm","Ancho: 9 cm","Tipo de medida: aproximada"],img:["assets/img/products/carro-antigravedad-con-control-remoto-26c4a03297.webp"],id:"2289247",vl:"Color",v:[{n:"Rojo",id:"2289247",img:["assets/img/products/carro-antigravedad-con-control-remoto-rojo-05f93065f3.webp","assets/img/products/carro-antigravedad-con-control-remoto-rojo-62a97ff2df.webp"]},{n:"Azul",id:"2289247",img:["assets/img/products/carro-antigravedad-con-control-remoto-azul-cd2c4cb72e.webp","assets/img/products/carro-antigravedad-con-control-remoto-azul-5acfbcbb42.webp"]}]},{n:"Dron Doble C\xE1mara 4K con Malet\xEDn",c:"JUGUETERIA",p:175e3,f:["Dron plegable con doble c\xE1mara y video 4K Ultra HD","Transmisi\xF3n de imagen por WiFi","Toma fotos y videos","Giroscopio integrado para vuelo estable","Control remoto 2.4 GHz","Despegue y aterrizaje con una sola tecla","Retenci\xF3n de altura y modo sin cabeza (headless)","Vuelos con giro de 360\xB0","Bater\xEDa modular","Incluye malet\xEDn de transporte","## Contenido del paquete","x1 Dron doble c\xE1mara","x1 Bater\xEDa para dron","x1 Cable de carga USB","x4 Fundas protectoras","x4 H\xE9lices de repuesto","x1 Destornillador","x1 Manual de usuario","x1 Malet\xEDn para dron"],img:["assets/img/products/dron-doble-camara-4k-con-maletin-a5464d651c.webp"],id:"809534",s:["assets/img/products/dron-doble-camara-4k-con-maletin-156dc4d632.webp","assets/img/products/dron-doble-camara-4k-con-maletin-4ded50e60f.webp","assets/img/products/dron-doble-camara-4k-con-maletin-ef5418056c.webp"]},{n:"Mini Aspiradora Robot",c:"HOGAR",p:65e3,f:["Aspira polvo y suciedad","F\xE1cil de usar","Recargable y eficiente","## Especificaciones","Marca: Clean Smart Robot","Colores: negro y blanco","Tama\xF1o: 20 x 20 x 8 cm","Material: pl\xE1stico ABS de alta calidad","Carga por USB, con bater\xEDa recargable de 1200 mAh","## Incluye","1 aspiradora robot","Cepillo de limpieza","Pa\xF1o","Cable USB"],img:["assets/img/products/mini-aspiradora-robot-d1fa2a9471.webp","assets/img/products/mini-aspiradora-robot-b0e1570446.webp"],id:"1688850"}];mr();ad(Xt);var C_=Object.fromEntries(Ui.map(e=>[e[0],e[1]])),pr=e=>C_[e]||e,lt=e=>String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),Ji=e=>e==null?"Consultar precio":"$"+e.toLocaleString("es-CO"),La=e=>`https://wa.me/${nd}?text=${encodeURIComponent(e)}`,Yn=()=>Xt.map((e,t)=>[e,t]);function I_(){let e={};return Xt.forEach(t=>e[t.c]=(e[t.c]||0)+1),e}var $n=()=>{let e=I_();return Ui.map((t,i)=>({code:t[0],name:t[1],index:i,count:e[t[0]]||0})).filter(t=>t.count)};function Jn(e){let t=[...e.img,...e.s||[]];return(e.v||[]).forEach(i=>i.img&&i.img[0]&&t.push(i.img[0])),[...new Set(t)]}var Ni=e=>Bi(e.replace(/\.webp$/,"-sm.webp")),Pa=e=>/\/estudio\//.test(e||""),Zn=e=>Pa(e)?' class="is-studio"':"",Kn=e=>Bi(e);var L_=e=>[e.n,e.id,pr(e.c),...(e.v||[]).map(t=>t.n+" "+t.id)].join(" ").toLowerCase();function sd({q:e="",cat:t="",min:i="",max:r="",sort:a=""}){let n=e.toLowerCase().trim(),s=Yn().filter(([o])=>(!t||o.c===t)&&(!n||L_(o).includes(n))&&(i===""||o.p!=null&&o.p>=+i)&&(r===""||o.p!=null&&o.p<=+r));return a==="a"||a==="d"?s.sort((o,l)=>(o[0].p==null)-(l[0].p==null)||(o[0].p-l[0].p)*(a==="d"?-1:1)):a==="n"&&s.sort((o,l)=>o[0].n.localeCompare(l[0].n,"es")),s}function od(e){let t=[],i=new Map;return[...e.img,...e.s||[]].forEach(r=>{i.has(r)||(i.set(r,t.length),t.push({s:r,vi:-1,l:"Vista general",r:e.id}))}),(e.v||[]).forEach((r,a)=>{(r.img&&r.img.length?r.img:[null]).forEach(n=>{if(n&&i.has(n)){let s=t[i.get(n)];(s.also||(s.also=[])).push(a);return}n&&i.set(n,t.length),t.push({s:n,vi:a,l:r.n,r:r.id})})}),t}var ul=(e,t)=>e.vi===t||(e.also||[]).includes(t);function ld(e){return e.f.map(t=>t.startsWith("##")?{h:t.replace(/^##\s*/,"")}:{t})}function Qn(e){let t=document.querySelector("meta[name=description]"),i="Los productos que necesitas cuando los necesitas. Env\xEDos a nivel nacional.",r=e?e.f.filter(n=>!n.startsWith("##")):[];t&&(t.content=e?`${e.n} \u2013 ${pr(e.c)}. ${r.slice(0,3).join(", ")}. Env\xEDos a nivel nacional.`.slice(0,300):i);let a=document.getElementById("ld");if(!e){a&&a.remove();return}a||(a=document.createElement("script"),a.id="ld",a.type="application/ld+json",document.head.appendChild(a)),a.textContent=JSON.stringify({"@context":"https://schema.org","@type":"Product",name:e.n,sku:e.id,category:pr(e.c),description:r.join(". "),...e.p!=null?{offers:{"@type":"Offer",priceCurrency:"COP",price:e.p}}:{}}).replace(/</g,"\\u003c")}var CS=Object.freeze({cart:!1}),es=(e,t)=>{try{return JSON.parse(localStorage.getItem(e))??t}catch{return t}},ts=(e,t)=>{try{localStorage.setItem(e,JSON.stringify(t))}catch{}},dl=new Set,Qe={saved:es("fav",[]),recent:es("rec",[]),galleryMode:es("gm","c"),galleryCols:es("gc",3),filters:{q:"",cat:"",min:"",max:"",sort:""}};function hd(e){return dl.add(e),()=>dl.delete(e)}var P_=()=>dl.forEach(e=>e(Qe)),Zr=e=>Qe.saved.includes(e);function cd(e){return Qe.saved=Zr(e)?Qe.saved.filter(t=>t!==e):[...Qe.saved,e],ts("fav",Qe.saved),P_(),Zr(e)}function ud(e){Qe.recent=[e,...Qe.recent.filter(t=>t!==e)].slice(0,8),ts("rec",Qe.recent)}function pl(e){Qe.galleryMode=e,ts("gm",e)}function dd(e){Qe.galleryCols=e,ts("gc",e)}var wt=(e,t="icon")=>`<svg class="${t}" aria-hidden="true"><use href="#i-${e}"/></svg>`,pd=e=>e.p!=null&&e.o>e.p,D_=e=>Math.round(100-e.p*100/e.o);function ml(e,t="card__price"){return e.p==null?`<p class="${t} ${t}--ask price--ask">Consultar precio</p>`:`<p class="${t}">${Ji(e.p)}${pd(e)?`<s>${Ji(e.o)}</s>`:""}</p>`}function U_(e,t){let i=Jn(e),r=i.length,a=lt(e.n),n=r?`<img class="is-on${Pa(i[0])?" is-studio":""}" src="${Ni(i[0])}" alt="" loading="lazy" decoding="async" data-k="0">`:`<span class="card__placeholder">${wt("image")}Imagen no disponible</span>`,s=Zr(t),o=r>1?`<button class="card__nav card__nav--prev" type="button" data-slide="-1" aria-label="Foto anterior de ${a}">${wt("left")}</button>
      <button class="card__nav card__nav--next" type="button" data-slide="1" aria-label="Foto siguiente de ${a}">${wt("right")}</button>
      <span class="card__dots" aria-hidden="true">${r<=6?Array.from({length:r},(l,h)=>`<i${h?"":' class="is-on"'}></i>`).join(""):`<b data-pos>1</b>&thinsp;/&thinsp;${r}`}</span>`:"";return`<article class="card" data-card data-i="${t}"${r>1?` data-slides="${r}"`:""}>
    <a class="card__link" href="#producto-${t}">
      <div class="card__media"><div class="card__slides">${n}</div>${pd(e)?`<span class="card__badge">-${D_(e)}%</span>`:""}</div>
      <h3 class="card__title">${a}</h3>
      <p class="card__cat">${lt(pr(e.c))}</p>
      ${ml(e)}
    </a>
    <div class="card__over">
      <button class="card__fav" type="button" data-save="${t}" data-name="${a}" aria-pressed="${s}" aria-label="${s?"Quitar de guardados":"Guardar"}: ${a}">${wt("heart")}</button>
      ${o}
    </div>
  </article>`}var is=e=>`<div class="grid" data-grid>${e.map(([t,i])=>U_(t,i)).join("")}</div>`;var N_=[["","Relevancia"],["a","Precio: menor a mayor"],["d","Precio: mayor a menor"],["n","Nombre: A\u2013Z"]];function md(e){let t=$n(),i=[`<button type="button" class="chip" data-cat="" aria-pressed="${!e.cat}">Todos <small>${Xt.length}</small></button>`].concat(t.map(a=>`<button type="button" class="chip" data-cat="${lt(a.code)}" aria-pressed="${e.cat===a.code}">${lt(a.name)} <small>${a.count}</small></button>`)).join(""),r=e.min!==""||e.max!=="";return`
  <section class="market" aria-labelledby="h-market">
    <div class="wrap">
      <header class="welcome">
        <h1 class="welcome__title" id="h-market">Explora nuestra tienda.</h1>
        <p class="welcome__sub">${Xt.length} productos para cada momento, con env\xEDos a toda Colombia.</p>
      </header>
      <div class="market__bar" data-market-bar>
        <nav class="chips" aria-label="Categor\xEDas" data-chips>${i}</nav>
        <div class="tools">
          <span class="market__count" data-count aria-live="polite"></span>
          <div class="tools__wrap">
            <button type="button" class="tool${r?" is-active":""}" data-price-toggle aria-expanded="false" aria-controls="price-pop">${wt("sliders")}<span class="tool__text">Precio</span></button>
            <form class="price-pop" id="price-pop" data-price-form hidden>
              <div class="price-pop__row">
                <label class="field"><span>M\xEDnimo</span><input name="min" type="number" min="0" inputmode="numeric" placeholder="$" value="${lt(e.min)}"></label>
                <label class="field"><span>M\xE1ximo</span><input name="max" type="number" min="0" inputmode="numeric" placeholder="$" value="${lt(e.max)}"></label>
              </div>
              <div class="price-pop__actions">
                <button type="button" class="link-btn" data-price-clear>Limpiar</button>
                <button type="submit" class="btn btn--solid">Aplicar</button>
              </div>
            </form>
          </div>
          <label class="tool tool--select">${wt("sort","icon tool__sort-icon")}<span class="sr-only">Ordenar</span>
            <select data-sort>${N_.map(([a,n])=>`<option value="${a}"${e.sort===a?" selected":""}>${n}</option>`).join("")}</select>
          </label>
        </div>
      </div>
      <div class="market__meta" data-meta></div>
      <div class="market__results" data-results></div>
    </div>
  </section>`}function fd(e,t){let i=[];if(e.q.trim()&&i.push(`<button type="button" class="pill" data-clear="q">\xAB${lt(e.q.trim())}\xBB ${wt("close")}<span class="sr-only">Quitar b\xFAsqueda</span></button>`),e.min!==""||e.max!==""){let r=e.min!==""&&e.max!==""?`${Ji(+e.min)} \u2013 ${Ji(+e.max)}`:e.min!==""?`Desde ${Ji(+e.min)}`:`Hasta ${Ji(+e.max)}`;i.push(`<button type="button" class="pill" data-clear="price">${r} ${wt("close")}<span class="sr-only">Quitar filtro de precio</span></button>`)}return i.join("")}function gd(e){let t=sd(e);return t.length?{count:t.length,html:is(t)}:{count:0,html:'<div class="empty"><h2>No hay productos con estos filtros</h2><p>Prueba con otra palabra, cambia el rango de precio o revisa todas las categor\xEDas.</p><button type="button" class="btn btn--ghost" data-clear="all">Ver todos los productos</button></div>'}}function fl(){let e=Qe.saved.filter(t=>Xt[t]).map(t=>[Xt[t],t]);return`<div class="wrap">
    <header class="page-head">
      <nav class="crumbs" aria-label="Ruta"><a href="#catalogo">Tienda</a><span aria-hidden="true">/</span><span>Guardados</span></nav>
      <h1>Guardados<sup>${e.length||""}</sup></h1>
    </header>
    ${e.length?is(e):'<div class="empty"><h2>A\xFAn no tienes productos guardados</h2><p>Toca el coraz\xF3n de un producto en el cat\xE1logo o en su p\xE1gina y aparecer\xE1 aqu\xED.</p><a class="btn btn--solid" href="#catalogo">Ver productos</a></div>'}
  </div><div class="related"></div>`}function vd(e,t){let i=Xt[e],r=t.v>=0?i.v[t.v]:null,a=r&&r.id||i.id,n=Ui.findIndex(c=>c[0]===i.c),s=ld(i).map(c=>c.h?`<li class="features__h"><h3>${lt(c.h)}</h3></li>`:`<li>${lt(c.t)}</li>`).join(""),o=i.v?`<div class="pdp__block">
        <p class="pdp__label"><span>${lt(i.vl||"Opciones")} \xB7 ${i.v.length} referencias</span><b data-variant-name>${r?lt(r.n):""}</b></p>
        <div class="variants" role="group" aria-label="${lt(i.vl||"Opciones")}">${i.v.map((c,d)=>{let u=c.img&&c.img[0];return`<button type="button" class="variant${u?"":" variant--text"}" data-variant="${d}" aria-pressed="${d===t.v}">${u?`<img src="${Ni(u)}" alt="" loading="lazy" decoding="async">`:""}${lt(c.n)}</button>`}).join("")}</div>
      </div>`:"",l=Yn().filter(([c,d])=>c.c===i.c&&d!==e).concat(Yn().filter(([c])=>c.c!==i.c)).slice(0,4),h=Zr(e);return`<div class="wrap">
    <div class="pdp">
      <div class="pdp__gallery" data-gallery></div>
      <div class="pdp__info">
        <nav class="crumbs" aria-label="Ruta"><a href="#catalogo">Tienda</a><span aria-hidden="true">/</span><a href="#cat-${n}">${lt(pr(i.c))}</a></nav>
        <h1>${lt(i.n)}</h1>
        ${a?`<p class="pdp__ref">Ref. <span data-ref>${lt(a)}</span></p>`:""}
        ${ml(i,"pdp__price")}
        ${o}
        <div class="pdp__block">
          <p class="pdp__label"><span>Caracter\xEDsticas</span></p>
          <ul class="features">${s}</ul>
        </div>
        <div class="pdp__actions">
          <a class="btn btn--solid" data-wa-product target="_blank" rel="noopener" href="${La(gl(i,r))}">${wt("chat")}Consultar por WhatsApp</a>
          <button class="btn btn--ghost" type="button" data-save="${e}" aria-pressed="${h}" aria-label="${h?"Quitar de guardados":"Guardar producto"}">${wt("heart")}</button>
          <button class="btn btn--ghost" type="button" data-share aria-label="Compartir producto">${wt("share")}</button>
        </div>
        <p class="pdp__note">Env\xEDos a toda Colombia. Confirmamos disponibilidad, costo y tiempo de entrega por WhatsApp.</p>
      </div>
    </div>
  </div>
  <section class="related" aria-labelledby="h-rel">
    <div class="wrap">
      <h2 id="h-rel">Tambi\xE9n te puede interesar</h2>
      ${is(l)}
    </div>
  </section>`}function gl(e,t){let i=t&&t.id||e.id;return`Hola, me interesa: ${e.n}${t?" - "+t.n:""}${i?" (Ref. "+i+")":""}`}var kt=null;function _d(e,t,i,{onVariant:r}={}){let a=od(t),n=a.length,s=null,o=0;function l(){if(!n){e.innerHTML=`<div class="stage stage--empty">${wt("image")}<span>Imagen no disponible</span></div>`;return}let g=n>1?Qe.galleryMode:"c",_=n>1?`<div class="gallery__bar">
          <div class="seg" role="group" aria-label="Modo de visualizaci\xF3n">
            <button type="button" data-mode="c" aria-pressed="${g==="c"}">${wt("single")}Carrusel</button>
            <button type="button" data-mode="g" aria-pressed="${g==="g"}">${wt("grid")}Collage</button>
          </div>
          ${g==="g"?`<div class="seg seg--cols" role="group" aria-label="Columnas del collage">${[2,3,4].map(f=>`<button type="button" class="cols-${f}" data-cols="${f}" aria-pressed="${Qe.galleryCols===f}" aria-label="${f} columnas">${f}</button>`).join("")}</div>`:`<span class="gallery__count">${n} im\xE1genes</span>`}
        </div>`:"";if(g==="g"){e.innerHTML=_+`<div class="mosaic" data-cols="${Qe.galleryCols}">${a.map((f,m)=>f.s?`<button type="button" data-open="${m}" aria-label="Ampliar: ${lt(f.l)}"><img${Zn(f.s)} src="${m===0?Kn(f.s):Ni(f.s)}" alt="${lt(t.n+" \u2013 "+f.l)}" loading="${m<3?"eager":"lazy"}" decoding="async"></button>`:"").join("")}</div>`,s=null;return}e.innerHTML=_+`
      <div class="stage">
        <div class="stage__track" role="region" aria-roledescription="carrusel" aria-label="Im\xE1genes de ${lt(t.n)}" tabindex="0">
          ${a.map((f,m)=>`<button type="button" class="stage__slide" data-open="${m}" aria-label="Ampliar imagen ${m+1} de ${n}">${f.s?`<img${Zn(f.s)} src="${Kn(f.s)}" alt="${lt(t.n+" \u2013 "+f.l+(n>1?` (imagen ${m+1} de ${n})`:""))}" ${m===0?'fetchpriority="high"':'loading="lazy"'} decoding="async">`:wt("image")}</button>`).join("")}
        </div>
        ${n>1?`<button type="button" class="stage__nav stage__nav--prev" data-step="-1" aria-label="Imagen anterior">${wt("left")}</button>
        <button type="button" class="stage__nav stage__nav--next" data-step="1" aria-label="Imagen siguiente">${wt("right")}</button>`:""}
        <span class="stage__zoom" aria-hidden="true">${wt("expand")}</span>
      </div>
      <div class="stage__caption" aria-live="polite" data-caption></div>
      ${n>1?`<div class="thumbs">${a.map((f,m)=>`<button type="button" data-thumb="${m}" aria-label="${lt(f.l)}">${f.s?`<img${Zn(f.s)} src="${Ni(f.s)}" alt="" loading="lazy" decoding="async">`:""}</button>`).join("")}</div>`:""}`,s=e.querySelector(".stage__track"),s.addEventListener("scroll",d,{passive:!0}),s.addEventListener("scrollend",()=>{h!=null&&(h=null,d())},{passive:!0}),i.k&&s.scrollTo({left:i.k*s.clientWidth,behavior:"instant"}),u()}let h=null,c=0;function d(){cancelAnimationFrame(o),o=requestAnimationFrame(()=>{let g=Math.round(s.scrollLeft/s.clientWidth);if(h!=null){g===h&&(h=null);return}g!==i.k&&g>=0&&g<n&&(i.k=g,u())})}function u(){let g=a[i.k];if(!g)return;let _=e.querySelector("[data-caption]");_&&(_.innerHTML=`<b>${lt(g.l)}${g.vi>=0&&g.r?` <span>\xB7 Ref. ${lt(g.r)}</span>`:""}</b><span>${i.k+1} / ${n}</span>`),e.querySelectorAll("[data-thumb]").forEach(m=>m.setAttribute("aria-current",String(+m.dataset.thumb===i.k)));let f=e.querySelector('[data-thumb][aria-current="true"]');f&&f.parentElement&&f.parentElement.scrollTo({left:f.offsetLeft-f.parentElement.clientWidth/2+34,behavior:"smooth"}),ul(g,i.v)||(i.v=g.vi,r?.(i.v))}function p(g,_=!0){i.k=(g+n)%n,Qe.galleryMode==="g"&&n>1&&(pl("c"),l()),s&&(h=_&&Math.abs(s.scrollLeft-i.k*s.clientWidth)>2?i.k:null,clearTimeout(c),c=setTimeout(()=>{h=null},2e3),s.scrollTo({left:i.k*s.clientWidth,behavior:_?"smooth":"instant"})),u()}return e.addEventListener("click",g=>{let _=g.target.closest("[data-mode],[data-cols],[data-step],[data-thumb],[data-open]");_&&(_.dataset.mode?(pl(_.dataset.mode),l()):_.dataset.cols?(dd(+_.dataset.cols),l()):_.dataset.step?p(i.k+ +_.dataset.step):_.dataset.thumb!=null?p(+_.dataset.thumb):_.dataset.open!=null&&F_(t,a,+_.dataset.open,f=>{i.k=f,s&&s.scrollTo({left:f*s.clientWidth,behavior:"instant"}),u()}))}),e.addEventListener("keydown",g=>{!s||!/^Arrow(Left|Right)$/.test(g.key)||(g.preventDefault(),p(i.k+(g.key==="ArrowRight"?1:-1)))}),l(),{showVariant(g){let _=a.findIndex(f=>ul(f,g));_<0||(i.v!==g&&(i.v=g,r?.(g)),p(_))}}}function F_(e,t,i,r){let a=i,n=document.activeElement;kt||(kt=document.createElement("div"),kt.className="lightbox",kt.setAttribute("role","dialog"),kt.setAttribute("aria-modal","true"),kt.setAttribute("aria-label","Imagen ampliada"),document.body.appendChild(kt));let s=t.length,o=()=>{let u=t[a];kt.innerHTML=`<button type="button" class="lightbox__btn lightbox__close" data-lb="close" aria-label="Cerrar">${wt("close")}</button>
      ${s>1?`<button type="button" class="lightbox__btn lightbox__prev" data-lb="-1" aria-label="Anterior">${wt("left")}</button>
      <button type="button" class="lightbox__btn lightbox__next" data-lb="1" aria-label="Siguiente">${wt("right")}</button>`:""}
      <div class="lightbox__img">${u.s?`<img src="${Kn(u.s)}" alt="${lt(e.n+" \u2013 "+u.l)}">`:""}</div>
      <p class="lightbox__cap"><b>${lt(u.l)}</b>${u.vi>=0&&u.r?` \xB7 Ref. ${lt(u.r)}`:""} \xB7 ${a+1} / ${s}</p>`},l=u=>{a=(a+u+s)%s,o()},h=()=>{kt.classList.remove("is-open"),document.body.style.overflow="",document.removeEventListener("keydown",c),kt.onclick=null,r?.(a),n?.focus?.({preventScroll:!0})},c=u=>{u.key==="Escape"?h():u.key==="ArrowRight"?l(1):u.key==="ArrowLeft"&&l(-1)};kt.onclick=u=>{let p=u.target.closest("[data-lb]");if(p)return p.dataset.lb==="close"?h():l(+p.dataset.lb);let g=u.target.closest(".lightbox__img");g&&u.target.tagName==="IMG"?(g.classList.toggle("is-zoomed"),g.classList.contains("is-zoomed")&&(g.scrollLeft=(g.scrollWidth-g.clientWidth)/2,g.scrollTop=(g.scrollHeight-g.clientHeight)/2)):g&&h()};let d=null;kt.ontouchstart=u=>{d=u.touches.length===1&&!kt.querySelector(".is-zoomed")?u.touches[0].clientX:null},kt.ontouchend=u=>{if(d==null)return;let p=u.changedTouches[0].clientX-d;d=null,Math.abs(p)>50&&l(p<0?1:-1)},o(),kt.classList.add("is-open"),document.body.style.overflow="hidden",document.addEventListener("keydown",c),kt.querySelector(".lightbox__close").focus()}mr();var rs=null,vl=()=>zi()?null:window.gsap;function _l(e){let t=vl();if(rs?.disconnect(),!t)return;let i=e.getBoundingClientRect().top,r=[...e.querySelectorAll("[data-card]")].filter(s=>s.getBoundingClientRect().top-i>window.innerHeight*.9);t.set(r,{opacity:0,y:12});let a=0,n=0;rs=new IntersectionObserver(s=>{let o=performance.now();o-n>120&&(a=0),n=o,s.forEach(l=>{l.isIntersecting&&(rs.unobserve(l.target),t.to(l.target,{opacity:1,y:0,duration:.7,ease:"power2.out",delay:Math.min(a++,6)*.05,clearProps:"opacity,transform"}))})},{rootMargin:"0px 0px -6% 0px",threshold:.01}),r.forEach(s=>rs.observe(s))}function yd(e,t,i){let r=vl();if(!r||!e.firstElementChild){e.innerHTML=t,i?.();return}e.style.minHeight=e.offsetHeight+"px",r.to(e,{opacity:0,duration:.16,ease:"power1.in",onComplete(){e.innerHTML=t,i?.(),r.fromTo(e,{opacity:0},{opacity:1,duration:.3,ease:"power1.out"}),r.fromTo(e.querySelectorAll("[data-card]"),{y:8},{y:0,duration:.45,ease:"power2.out",stagger:.015,clearProps:"transform"}),requestAnimationFrame(()=>{e.style.minHeight=""})}})}function yl(e){let t=vl();t&&t.fromTo(e,{opacity:0},{opacity:1,duration:.45,ease:"power2.out",clearProps:"opacity"})}mr();var xl=new Map,B_=e=>(xl.has(e)||xl.set(e,Jn(Xt[e])),xl.get(e)),Sd=e=>+e.dataset.slides||0,Md=e=>+(e.dataset.k||0);function bd(e,t){let i=e.querySelector(".card__slides"),r=i.querySelector(`img[data-k="${t}"]`);if(!r){r=new Image,r.alt="",r.decoding="async",r.dataset.k=t;let a=B_(+e.dataset.i)[t];Pa(a)&&(r.className="is-studio"),r.src=Ni(a),i.appendChild(r)}return r}function z_(e,t){let i=Sd(e);if(i<2)return;t=(t%i+i)%i;let r=e._token=(e._token||0)+1;e.dataset.k=t;let a=bd(e,t),n=()=>{e._token===r&&(e.querySelectorAll(".card__slides img.is-on").forEach(h=>h!==a&&h.classList.remove("is-on")),a.classList.add("is-on"))};(a.complete&&a.naturalWidth?Promise.resolve():a.decode().catch(()=>{})).then(n),e.querySelectorAll(".card__dots i").forEach((h,c)=>h.classList.toggle("is-on",c===t));let o=e.querySelector("[data-pos]");o&&(o.textContent=t+1);let l=e.querySelector(".card__title")?.textContent||"";e.querySelector(".card__nav--prev")?.setAttribute("aria-label",`Foto anterior de ${l} (${t+1} de ${i})`),e.querySelector(".card__nav--next")?.setAttribute("aria-label",`Foto siguiente de ${l} (${t+1} de ${i})`)}var Sl=(e,t)=>z_(e,Md(e)+t);function xd(e){let t=Sd(e);t<2||e._pre||(e._pre=!0,bd(e,(Md(e)+1)%t))}function Ed(){document.addEventListener("click",t=>{let i=t.target.closest("[data-slide]");i&&(t.preventDefault(),Sl(i.closest("[data-card]"),+i.dataset.slide))}),document.addEventListener("keydown",t=>{if(t.key!=="ArrowLeft"&&t.key!=="ArrowRight")return;let i=t.target.closest?.("[data-card][data-slides]");!i||t.altKey||t.ctrlKey||t.metaKey||(t.preventDefault(),Sl(i,t.key==="ArrowLeft"?-1:1))}),document.addEventListener("pointerover",t=>{if(t.pointerType!=="mouse")return;let i=t.target.closest?.("[data-card][data-slides]");i&&xd(i)});let e=null;document.addEventListener("pointerdown",t=>{if(t.pointerType==="mouse"||!t.isPrimary)return;let i=t.target.closest?.("[data-slides] .card__media");if(!i)return;let r=i.closest("[data-card]");xd(r),e={card:r,x:t.clientX,y:t.clientY,id:t.pointerId}},{passive:!0}),document.addEventListener("pointerup",t=>{if(!e||t.pointerId!==e.id)return;let i=t.clientX-e.x,r=t.clientY-e.y;Math.abs(i)>32&&Math.abs(i)>Math.abs(r)*1.4&&(e.card._swiped=performance.now(),Sl(e.card,i<0?1:-1)),e=null},{passive:!0}),document.addEventListener("pointercancel",()=>{e=null},{passive:!0}),document.addEventListener("click",t=>{let i=t.target.closest?.("[data-card]");i&&i._swiped&&performance.now()-i._swiped<500&&(t.preventDefault(),t.stopPropagation(),i._swiped=0)},!0)}var ht=(e,t=document)=>t.querySelector(e),Kr=(e,t=document)=>[...t.querySelectorAll(e)],je=ht("#app"),Td=ht("#header"),ii=ht("#journey"),Da=ht(".toast"),Oi=ht("#hsearch"),ns=ht("[data-search-clear]"),k_="Tu Temporada Colombia \xB7 Tienda en l\xEDnea",hs=()=>zi()?"auto":"smooth",Pt=null,Na=!1,Ua=null,ss=id(ii,{onProgress(e,t){t!==Na&&(Na=t,bl())},onLayout:Rd,onPlate:G_});function G_({x:e,y:t,r:i,full:r,opacity:a}){if(Ad(),Pt!=="market"||ii.hidden||r){Ua!==""&&(je.style.clipPath="",je.style.opacity="",Ua="");return}let n=je.getBoundingClientRect().top,s=`circle(${i.toFixed(1)}px at ${e.toFixed(1)}px ${(t-n).toFixed(1)}px)`;s!==Ua&&(je.style.clipPath=s,Ua=s),je.style.opacity=a<1?a.toFixed(3):""}function Ad(){if(Pt!=="market"||ii.hidden){je.style.transform="";return}let e=ii.offsetTop+ii.offsetHeight-window.innerHeight,t=Math.min(0,window.scrollY-e);je.style.transform=t<0?`translate3d(0, ${t}px, 0)`:""}window.addEventListener("scroll",Ad,{passive:!0});function Rd(e=ss.overlap()){je.style.marginTop=Pt==="market"&&!ii.hidden?`${-e}px`:""}(function(){let t=window.gsap;!t||zi()||(t.from("[data-intro-line]",{yPercent:112,duration:1.7,ease:"expo.out",delay:1.1,stagger:.14}),t.from(".journey__cue, .journey__top",{opacity:0,duration:1.2,delay:2.2,ease:"power1.out",clearProps:"opacity"}))})();Yl();Ed();var H_=La("Hola, quiero informaci\xF3n de Tu Temporada Colombia.");Kr("[data-wa]").forEach(e=>e.href=H_);ht("[data-year]").textContent=new Date().getFullYear();var Tl=$n();ht("[data-cat-panel]").innerHTML=Tl.map(e=>`<a class="cat-panel__item" href="#cat-${e.index}">${lt(e.name)}<small>${e.count}</small></a>`).join("");ht("[data-mobile-cats]").innerHTML=Tl.map(e=>`<a href="#cat-${e.index}">${lt(e.name)}<small>${e.count}</small></a>`).join("");ht("[data-footer-cats]").innerHTML=Tl.map(e=>`<li><a href="#cat-${e.index}">${lt(e.name)}</a></li>`).join("");var Ml=ht("[data-cat-toggle]"),V_=ht("#cat-panel");function Oa(e){Ml.setAttribute("aria-expanded",String(e)),V_.classList.toggle("is-open",e)}Ml.addEventListener("click",()=>Oa(Ml.getAttribute("aria-expanded")!=="true"));var as=ht("[data-menu-toggle]"),Al=ht("#mobile-menu");function os(e){Al.classList.toggle("is-open",e),as.setAttribute("aria-expanded",String(e)),as.setAttribute("aria-label",e?"Cerrar men\xFA":"Abrir men\xFA"),as.innerHTML=`<svg class="icon" aria-hidden="true"><use href="#i-${e?"close":"menu"}"/></svg>`,document.body.style.overflow=e?"hidden":""}as.addEventListener("click",()=>os(!Al.classList.contains("is-open")));function bl(){let e=Pt!=="market"||ii.hidden||Na;Td.classList.toggle("is-visible",e),document.body.classList.toggle("is-home",Pt==="market"&&!ii.hidden&&!Na)}var Cd=window.matchMedia("(max-width: 760px)"),Id=()=>Oi.placeholder=Cd.matches?"Buscar productos":"Buscar por nombre, referencia o categor\xEDa";Id();Cd.addEventListener?.("change",Id);var wd=0;Oi.addEventListener("input",()=>{Qe.filters.q=Oi.value,ns.hidden=!Oi.value,Pt==="market"&&(clearTimeout(wd),wd=setTimeout(()=>bi({animate:!0,reveal:!0}),160))});ht("[data-search-form]").addEventListener("submit",e=>{e.preventDefault(),Qe.filters.q=Oi.value,Oi.blur(),Pt==="market"?bi({animate:!0,reveal:!0}):location.hash="catalogo"});ns.addEventListener("click",()=>{Oi.value="",Qe.filters.q="",ns.hidden=!0,Oi.focus(),Pt==="market"&&bi({animate:!0})});function Ld(){Kr("[data-saved-count]").forEach(e=>e.textContent=Qe.saved.length||""),Kr("[data-save]").forEach(e=>{let t=Qe.saved.includes(+e.dataset.save);e.setAttribute("aria-pressed",String(t)),e.setAttribute("aria-label",e.dataset.name?`${t?"Quitar de guardados":"Guardar"}: ${e.dataset.name}`:t?"Quitar de guardados":"Guardar producto")})}hd(Ld);Ld();function El(e){Da.textContent=e,Da.classList.add("is-on"),clearTimeout(Da._t),Da._t=setTimeout(()=>Da.classList.remove("is-on"),1900)}document.addEventListener("click",e=>{if(e.target.closest("#cat-panel, [data-cat-toggle]")||Oa(!1),e.target.closest(".skip-link")){e.preventDefault(),Pt==="market"?(ls(!1),je.focus({preventScroll:!0})):je.focus();return}let t=e.target.closest("[data-save]");if(t){e.preventDefault();let r=+t.dataset.save,a=cd(r);t.classList.remove("is-pop"),a&&(t.offsetWidth,t.classList.add("is-pop")),El(a?"Guardado":"Quitado de guardados"),!a&&Pt==="saved"&&W_(t.closest("[data-card]"));return}if(e.target.closest("[data-home]")){e.preventDefault(),os(!1),X_();return}e.target.closest("#mobile-menu a")&&os(!1),e.target.closest(".cat-panel a")&&Oa(!1)});document.addEventListener("keydown",e=>{e.key==="Escape"&&(Al.classList.contains("is-open")&&os(!1),Oa(!1),Fa())});function W_(e){if(!e)return;let t=()=>{e.remove();let i=ht(".page-head sup",je);i&&(i.textContent=Qe.saved.length||""),ht("[data-card]",je)||(je.innerHTML=fl(),yl(je))};if(zi()||!window.gsap)return t();window.gsap.to(e,{opacity:0,scale:.97,duration:.3,ease:"power2.in",onComplete:t})}function X_(){location.hash&&history.pushState(null,"",location.pathname+location.search),Qe.filters.cat="",Pt!=="market"?Rl({land:!0}):(bi({animate:!0}),ls(!0))}function ls(e){let t=ii.hidden?0:ii.offsetTop+ii.offsetHeight-window.innerHeight+1;window.scrollTo({top:t,behavior:e?hs():"auto"}),e||ss.snap()}function Pd(){let e=ht("[data-market-bar]",je);if(!e)return;let t=e.getBoundingClientRect(),i=Td.offsetHeight;if(t.top<i-1&&je.getBoundingClientRect().top<i){let r=ht("[data-results]",je),a=window.scrollY+r.getBoundingClientRect().top-i-e.offsetHeight-8;window.scrollY>a&&window.scrollTo({top:a,behavior:hs()})}}function j_(){let e=decodeURIComponent(location.hash.slice(1));return e.startsWith("producto-")?{name:"detail",i:+e.slice(9)}:e==="catalogo"||e==="colecciones"?{name:"market",cat:"",land:!0}:e.startsWith("cat-")?{name:"market",cat:(Ui[+e.slice(4)]||[""])[0],land:!0}:e==="favoritos"?{name:"saved"}:e==="carrito"?{name:"redirect",to:"catalogo"}:{name:"market",cat:null}}function Rl(e={}){let t=j_();if(t.name==="redirect"){location.replace("#"+t.to);return}if(t.name==="detail"&&!Xt[t.i]){location.hash="catalogo";return}if(Oa(!1),Fa(),t.name==="market"&&Pt==="market"){t.cat!==null&&(Qe.filters.cat=t.cat),bi({animate:!0}),t.land&&(Na?Pd():ls(!0));return}let i=Pt;Pt=t.name;let r=Pt==="market";ii.hidden=!r,ss.setActive(r),document.body.classList.toggle("is-market",r),r?(t.cat!==null&&(Qe.filters.cat=t.cat),je.innerHTML=md(Qe.filters),q_(),bi({animate:!1}),Rd(),bl(),requestAnimationFrame(()=>{ss.refresh(),(e.land||t.land||i&&i!=="market")&&ls(!1)})):(je.style.marginTop="",je.style.transform="",je.style.clipPath="",je.style.opacity="",Ua="",Pt==="saved"?(document.title="Guardados \xB7 Tu Temporada Colombia",Qn(null),je.innerHTML=fl()):J_(t.i),bl(),window.scrollTo(0,0),yl(je),_l(je)),Kr("[data-nav]").forEach(a=>a.dataset.nav==="favoritos"&&Pt==="saved"?a.setAttribute("aria-current","page"):a.removeAttribute("aria-current"))}var Cl=()=>ht("[data-price-form]",je);function Fa(){let e=Cl();!e||e.hidden||(e.hidden=!0,ht("[data-price-toggle]",je)?.setAttribute("aria-expanded","false"))}function q_(){ht("[data-sort]",je).addEventListener("change",e=>{Qe.filters.sort=e.target.value,bi({animate:!0,reveal:!0})}),ht("[data-price-form]",je).addEventListener("submit",e=>{e.preventDefault();let t=new FormData(e.target);Qe.filters.min=String(t.get("min")||""),Qe.filters.max=String(t.get("max")||""),Fa(),bi({animate:!0,reveal:!0})})}je.addEventListener("click",e=>{Pt==="market"?Y_(e):Pt==="detail"&&$_(e)});function Y_(e){let t=e.target.closest("[data-cat]");if(t){Qe.filters.cat=t.dataset.cat;let a=Ui.findIndex(n=>n[0]===t.dataset.cat);history.replaceState(null,"",a>=0?`#cat-${a}`:location.pathname+location.search+(location.hash?"#catalogo":"")),bi({animate:!0,reveal:!0}),t.scrollIntoView({block:"nearest",inline:"nearest",behavior:hs()});return}let i=e.target.closest("[data-price-toggle]");if(i){let a=Cl();a.hidden=!a.hidden,i.setAttribute("aria-expanded",String(!a.hidden)),a.hidden||a.querySelector("input").focus();return}e.target.closest(".tools__wrap")||Fa();let r=e.target.closest("[data-clear], [data-price-clear]");if(r){let a=r.dataset.clear||"price";if((a==="q"||a==="all")&&(Qe.filters.q="",Oi.value="",ns.hidden=!0),(a==="price"||a==="all")&&(Qe.filters.min="",Qe.filters.max=""),a==="all"){Qe.filters.cat="",Qe.filters.sort="";let n=ht("[data-sort]",je);n&&(n.value="")}Fa(),bi({animate:!0,reveal:!0})}}function bi({animate:e,reveal:t}={}){let i=Qe.filters,r=Ui.find(h=>h[0]===i.cat);document.title=r?`${r[1]} \xB7 Tu Temporada Colombia`:k_,Qn(null),Kr("[data-cat]",je).forEach(h=>h.setAttribute("aria-pressed",String(h.dataset.cat===(i.cat||""))));let a=i.min!==""||i.max!=="";ht("[data-price-toggle]",je)?.classList.toggle("is-active",a);let n=Cl();n&&(n.min.value=i.min,n.max.value=i.max);let{count:s,html:o}=gd(i);ht("[data-meta]",je).innerHTML=fd(i,s),ht("[data-count]",je).textContent=`${s} ${s===1?"producto":"productos"}`;let l=ht("[data-results]",je);e?yd(l,o):(l.innerHTML=o,_l(je)),t&&Pd()}var wl=null;function $_(e){if(!wl)return;let{p:t,gal:i}=wl,r=e.target.closest("[data-variant]");if(r&&(i.showVariant(+r.dataset.variant),window.innerWidth<=760&&ht("[data-gallery]",je).scrollIntoView({behavior:hs(),block:"start"})),e.target.closest("[data-share]")){let a=location.href;navigator.share?navigator.share({title:t.n,url:a}).catch(()=>{}):navigator.clipboard&&navigator.clipboard.writeText(a).then(()=>El("Enlace copiado"),()=>El("No se pudo copiar el enlace"))}}function J_(e){let t=Xt[e];ud(e),document.title=`${t.n} \xB7 Tu Temporada Colombia`,Qn(t);let i={i:e,k:0,v:-1};je.innerHTML=vd(e,i);let r=_d(ht("[data-gallery]",je),t,i,{onVariant:a});function a(n){let s=n>=0?t.v[n]:null;Kr("[data-variant]",je).forEach(c=>c.setAttribute("aria-pressed",String(+c.dataset.variant===n)));let o=ht("[data-variant-name]",je);o&&(o.textContent=s?s.n:"");let l=ht("[data-ref]",je);l&&(l.textContent=s&&s.id||t.id||"");let h=ht("[data-wa-product]",je);h&&(h.href=La(gl(t,s)))}a(i.v),wl={p:t,gal:r}}window.addEventListener("hashchange",()=>Rl());Rl();})();
