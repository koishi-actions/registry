var Mt=(r,e)=>()=>(r&&(e=r(r=0)),e);var g=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);import{Buffer as d}from"https://registry.koishi.chat/modules/buffer/index.js";import s from"https://registry.koishi.chat/modules/process/index.js";var i=Mt(()=>{});var Ar=g((Jo,Zr)=>{"use strict";i();Zr.exports=function(){if(typeof Symbol!="function"||typeof Object.getOwnPropertySymbols!="function")return!1;if(typeof Symbol.iterator=="symbol")return!0;var e={},t=Symbol("test"),n=Object(t);if(typeof t=="string"||Object.prototype.toString.call(t)!=="[object Symbol]"||Object.prototype.toString.call(n)!=="[object Symbol]")return!1;var o=42;e[t]=o;for(t in e)return!1;if(typeof Object.keys=="function"&&Object.keys(e).length!==0||typeof Object.getOwnPropertyNames=="function"&&Object.getOwnPropertyNames(e).length!==0)return!1;var a=Object.getOwnPropertySymbols(e);if(a.length!==1||a[0]!==t||!Object.prototype.propertyIsEnumerable.call(e,t))return!1;if(typeof Object.getOwnPropertyDescriptor=="function"){var f=Object.getOwnPropertyDescriptor(e,t);if(f.value!==o||f.enumerable!==!0)return!1}return!0}});var L=g((Zo,Yr)=>{"use strict";i();var _t=Ar();Yr.exports=function(){return _t()&&!!Symbol.toStringTag}});var Qr=g((Ko,Kr)=>{"use strict";i();Kr.exports=Error});var re=g((Xo,Xr)=>{"use strict";i();Xr.exports=EvalError});var te=g((ei,ee)=>{"use strict";i();ee.exports=RangeError});var oe=g((ni,ne)=>{"use strict";i();ne.exports=ReferenceError});var Sr=g((ii,ie)=>{"use strict";i();ie.exports=SyntaxError});var M=g((fi,ae)=>{"use strict";i();ae.exports=TypeError});var ue=g((si,fe)=>{"use strict";i();fe.exports=URIError});var ce=g((ci,ye)=>{"use strict";i();var se=typeof Symbol<"u"&&Symbol,Nt=Ar();ye.exports=function(){return typeof se!="function"||typeof Symbol!="function"||typeof se("foo")!="symbol"||typeof Symbol("bar")!="symbol"?!1:Nt()}});var le=g((li,pe)=>{"use strict";i();var wr={__proto__:null,foo:{}},Ct=Object;pe.exports=function(){return{__proto__:wr}.foo===wr.foo&&!(wr instanceof Ct)}});var be=g((di,de)=>{"use strict";i();var Gt="Function.prototype.bind called on incompatible ",Wt=Object.prototype.toString,zt=Math.max,Vt="[object Function]",ge=function(e,t){for(var n=[],o=0;o<e.length;o+=1)n[o]=e[o];for(var a=0;a<t.length;a+=1)n[a+e.length]=t[a];return n},Lt=function(e,t){for(var n=[],o=t||0,a=0;o<e.length;o+=1,a+=1)n[a]=e[o];return n},Jt=function(r,e){for(var t="",n=0;n<r.length;n+=1)t+=r[n],n+1<r.length&&(t+=e);return t};de.exports=function(e){var t=this;if(typeof t!="function"||Wt.apply(t)!==Vt)throw new TypeError(Gt+t);for(var n=Lt(arguments,1),o,a=function(){if(this instanceof o){var h=t.apply(this,ge(n,arguments));return Object(h)===h?h:this}return t.apply(e,ge(n,arguments))},f=zt(0,t.length-n.length),u=[],y=0;y<f;y++)u[y]="$"+y;if(o=Function("binder","return function ("+Jt(u,",")+"){ return binder.apply(this,arguments); }")(a),t.prototype){var b=function(){};b.prototype=t.prototype,o.prototype=new b,b.prototype=null}return o}});var J=g((mi,me)=>{"use strict";i();var Ht=be();me.exports=Function.prototype.bind||Ht});var ve=g((vi,he)=>{"use strict";i();var Zt=Function.prototype.call,Yt=Object.prototype.hasOwnProperty,Kt=J();he.exports=Kt.call(Zt,Yt)});var R=g((Si,Pe)=>{"use strict";i();var p,Qt=Qr(),Xt=re(),rn=te(),en=oe(),U=Sr(),x=M(),tn=ue(),Oe=Function,Or=function(r){try{return Oe('"use strict"; return ('+r+").constructor;")()}catch{}},P=Object.getOwnPropertyDescriptor;if(P)try{P({},"")}catch{P=null}var Pr=function(){throw new x},nn=P?function(){try{return arguments.callee,Pr}catch{try{return P(arguments,"callee").get}catch{return Pr}}}():Pr,B=ce()(),on=le()(),m=Object.getPrototypeOf||(on?function(r){return r.__proto__}:null),T={},an=typeof Uint8Array>"u"||!m?p:m(Uint8Array),j={__proto__:null,"%AggregateError%":typeof AggregateError>"u"?p:AggregateError,"%Array%":Array,"%ArrayBuffer%":typeof ArrayBuffer>"u"?p:ArrayBuffer,"%ArrayIteratorPrototype%":B&&m?m([][Symbol.iterator]()):p,"%AsyncFromSyncIteratorPrototype%":p,"%AsyncFunction%":T,"%AsyncGenerator%":T,"%AsyncGeneratorFunction%":T,"%AsyncIteratorPrototype%":T,"%Atomics%":typeof Atomics>"u"?p:Atomics,"%BigInt%":typeof BigInt>"u"?p:BigInt,"%BigInt64Array%":typeof BigInt64Array>"u"?p:BigInt64Array,"%BigUint64Array%":typeof BigUint64Array>"u"?p:BigUint64Array,"%Boolean%":Boolean,"%DataView%":typeof DataView>"u"?p:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":Qt,"%eval%":eval,"%EvalError%":Xt,"%Float32Array%":typeof Float32Array>"u"?p:Float32Array,"%Float64Array%":typeof Float64Array>"u"?p:Float64Array,"%FinalizationRegistry%":typeof FinalizationRegistry>"u"?p:FinalizationRegistry,"%Function%":Oe,"%GeneratorFunction%":T,"%Int8Array%":typeof Int8Array>"u"?p:Int8Array,"%Int16Array%":typeof Int16Array>"u"?p:Int16Array,"%Int32Array%":typeof Int32Array>"u"?p:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":B&&m?m(m([][Symbol.iterator]())):p,"%JSON%":typeof JSON=="object"?JSON:p,"%Map%":typeof Map>"u"?p:Map,"%MapIteratorPrototype%":typeof Map>"u"||!B||!m?p:m(new Map()[Symbol.iterator]()),"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":typeof Promise>"u"?p:Promise,"%Proxy%":typeof Proxy>"u"?p:Proxy,"%RangeError%":rn,"%ReferenceError%":en,"%Reflect%":typeof Reflect>"u"?p:Reflect,"%RegExp%":RegExp,"%Set%":typeof Set>"u"?p:Set,"%SetIteratorPrototype%":typeof Set>"u"||!B||!m?p:m(new Set()[Symbol.iterator]()),"%SharedArrayBuffer%":typeof SharedArrayBuffer>"u"?p:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":B&&m?m(""[Symbol.iterator]()):p,"%Symbol%":B?Symbol:p,"%SyntaxError%":U,"%ThrowTypeError%":nn,"%TypedArray%":an,"%TypeError%":x,"%Uint8Array%":typeof Uint8Array>"u"?p:Uint8Array,"%Uint8ClampedArray%":typeof Uint8ClampedArray>"u"?p:Uint8ClampedArray,"%Uint16Array%":typeof Uint16Array>"u"?p:Uint16Array,"%Uint32Array%":typeof Uint32Array>"u"?p:Uint32Array,"%URIError%":tn,"%WeakMap%":typeof WeakMap>"u"?p:WeakMap,"%WeakRef%":typeof WeakRef>"u"?p:WeakRef,"%WeakSet%":typeof WeakSet>"u"?p:WeakSet};if(m)try{null.error}catch(r){Ae=m(m(r)),j["%Error.prototype%"]=Ae}var Ae,fn=function r(e){var t;if(e==="%AsyncFunction%")t=Or("async function () {}");else if(e==="%GeneratorFunction%")t=Or("function* () {}");else if(e==="%AsyncGeneratorFunction%")t=Or("async function* () {}");else if(e==="%AsyncGenerator%"){var n=r("%AsyncGeneratorFunction%");n&&(t=n.prototype)}else if(e==="%AsyncIteratorPrototype%"){var o=r("%AsyncGenerator%");o&&m&&(t=m(o.prototype))}return j[e]=t,t},Se={__proto__:null,"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},_=J(),H=ve(),un=_.call(Function.call,Array.prototype.concat),sn=_.call(Function.apply,Array.prototype.splice),we=_.call(Function.call,String.prototype.replace),Z=_.call(Function.call,String.prototype.slice),yn=_.call(Function.call,RegExp.prototype.exec),cn=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,pn=/\\(\\)?/g,ln=function(e){var t=Z(e,0,1),n=Z(e,-1);if(t==="%"&&n!=="%")throw new U("invalid intrinsic syntax, expected closing `%`");if(n==="%"&&t!=="%")throw new U("invalid intrinsic syntax, expected opening `%`");var o=[];return we(e,cn,function(a,f,u,y){o[o.length]=u?we(y,pn,"$1"):f||a}),o},gn=function(e,t){var n=e,o;if(H(Se,n)&&(o=Se[n],n="%"+o[0]+"%"),H(j,n)){var a=j[n];if(a===T&&(a=fn(n)),typeof a>"u"&&!t)throw new x("intrinsic "+e+" exists, but is not available. Please file an issue!");return{alias:o,name:n,value:a}}throw new U("intrinsic "+e+" does not exist!")};Pe.exports=function(e,t){if(typeof e!="string"||e.length===0)throw new x("intrinsic name must be a non-empty string");if(arguments.length>1&&typeof t!="boolean")throw new x('"allowMissing" argument must be a boolean');if(yn(/^%?[^%]*%?$/,e)===null)throw new U("`%` may not be present anywhere but at the beginning and end of the intrinsic name");var n=ln(e),o=n.length>0?n[0]:"",a=gn("%"+o+"%",t),f=a.name,u=a.value,y=!1,b=a.alias;b&&(o=b[0],sn(n,un([0,1],b)));for(var h=1,O=!0;h<n.length;h+=1){var v=n[h],I=Z(v,0,1),z=Z(v,-1);if((I==='"'||I==="'"||I==="`"||z==='"'||z==="'"||z==="`")&&I!==z)throw new U("property names with quotes must have matching quotes");if((v==="constructor"||!O)&&(y=!0),o+="."+v,f="%"+o+"%",H(j,f))u=j[f];else if(u!=null){if(!(v in u)){if(!t)throw new x("base intrinsic for "+e+" exists, but the property is not available.");return}if(P&&h+1>=n.length){var V=P(u,v);O=!!V,O&&"get"in V&&!("originalValue"in V.get)?u=V.get:u=u[v]}else O=H(u,v),u=u[v];O&&!y&&(j[f]=u)}}return u}});var K=g((Oi,je)=>{"use strict";i();var dn=R(),Y=dn("%Object.defineProperty%",!0)||!1;if(Y)try{Y({},"a",{value:1})}catch{Y=!1}je.exports=Y});var X=g((ji,Ee)=>{"use strict";i();var bn=R(),Q=bn("%Object.getOwnPropertyDescriptor%",!0);if(Q)try{Q([],"length")}catch{Q=null}Ee.exports=Q});var Te=g((Fi,Be)=>{"use strict";i();var Fe=K(),mn=Sr(),D=M(),Ie=X();Be.exports=function(e,t,n){if(!e||typeof e!="object"&&typeof e!="function")throw new D("`obj` must be an object or a function`");if(typeof t!="string"&&typeof t!="symbol")throw new D("`property` must be a string or a symbol`");if(arguments.length>3&&typeof arguments[3]!="boolean"&&arguments[3]!==null)throw new D("`nonEnumerable`, if provided, must be a boolean or null");if(arguments.length>4&&typeof arguments[4]!="boolean"&&arguments[4]!==null)throw new D("`nonWritable`, if provided, must be a boolean or null");if(arguments.length>5&&typeof arguments[5]!="boolean"&&arguments[5]!==null)throw new D("`nonConfigurable`, if provided, must be a boolean or null");if(arguments.length>6&&typeof arguments[6]!="boolean")throw new D("`loose`, if provided, must be a boolean");var o=arguments.length>3?arguments[3]:null,a=arguments.length>4?arguments[4]:null,f=arguments.length>5?arguments[5]:null,u=arguments.length>6?arguments[6]:!1,y=!!Ie&&Ie(e,t);if(Fe)Fe(e,t,{configurable:f===null&&y?y.configurable:!f,enumerable:o===null&&y?y.enumerable:!o,value:n,writable:a===null&&y?y.writable:!a});else if(u||!o&&!a&&!f)e[t]=n;else throw new mn("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.")}});var Re=g((Bi,Ue)=>{"use strict";i();var jr=K(),xe=function(){return!!jr};xe.hasArrayLengthDefineBug=function(){if(!jr)return null;try{return jr([],"length",{value:1}).length!==1}catch{return!0}};Ue.exports=xe});var Me=g((xi,$e)=>{"use strict";i();var hn=R(),De=Te(),vn=Re()(),qe=X(),ke=M(),An=hn("%Math.floor%");$e.exports=function(e,t){if(typeof e!="function")throw new ke("`fn` is not a function");if(typeof t!="number"||t<0||t>4294967295||An(t)!==t)throw new ke("`length` must be a positive 32-bit integer");var n=arguments.length>2&&!!arguments[2],o=!0,a=!0;if("length"in e&&qe){var f=qe(e,"length");f&&!f.configurable&&(o=!1),f&&!f.writable&&(a=!1)}return(o||a||!n)&&(vn?De(e,"length",t,!0,!0):De(e,"length",t)),e}});var Fr=g((Ri,rr)=>{"use strict";i();var Er=J(),er=R(),Sn=Me(),wn=M(),Ce=er("%Function.prototype.apply%"),Ge=er("%Function.prototype.call%"),We=er("%Reflect.apply%",!0)||Er.call(Ge,Ce),_e=K(),On=er("%Math.max%");rr.exports=function(e){if(typeof e!="function")throw new wn("a function is required");var t=We(Er,Ge,arguments);return Sn(t,1+On(0,e.length-(arguments.length-1)),!0)};var Ne=function(){return We(Er,Ce,arguments)};_e?_e(rr.exports,"apply",{value:Ne}):rr.exports.apply=Ne});var Ir=g((qi,Le)=>{"use strict";i();var ze=R(),Ve=Fr(),Pn=Ve(ze("String.prototype.indexOf"));Le.exports=function(e,t){var n=ze(e,!!t);return typeof n=="function"&&Pn(e,".prototype.")>-1?Ve(n):n}});var Ze=g(($i,He)=>{"use strict";i();var jn=L()(),En=Ir(),Br=En("Object.prototype.toString"),tr=function(e){return jn&&e&&typeof e=="object"&&Symbol.toStringTag in e?!1:Br(e)==="[object Arguments]"},Je=function(e){return tr(e)?!0:e!==null&&typeof e=="object"&&typeof e.length=="number"&&e.length>=0&&Br(e)!=="[object Array]"&&Br(e.callee)==="[object Function]"},Fn=function(){return tr(arguments)}();tr.isLegacyArguments=Je;He.exports=Fn?tr:Je});var Qe=g((_i,Ke)=>{"use strict";i();var In=Object.prototype.toString,Bn=Function.prototype.toString,Tn=/^\s*(?:function)?\*/,Ye=L()(),Tr=Object.getPrototypeOf,xn=function(){if(!Ye)return!1;try{return Function("return function*() {}")()}catch{}},xr;Ke.exports=function(e){if(typeof e!="function")return!1;if(Tn.test(Bn.call(e)))return!0;if(!Ye){var t=In.call(e);return t==="[object GeneratorFunction]"}if(!Tr)return!1;if(typeof xr>"u"){var n=xn();xr=n?Tr(n):!1}return Tr(e)===xr}});var tt=g((Ci,et)=>{"use strict";i();var rt=Function.prototype.toString,q=typeof Reflect=="object"&&Reflect!==null&&Reflect.apply,Rr,nr;if(typeof q=="function"&&typeof Object.defineProperty=="function")try{Rr=Object.defineProperty({},"length",{get:function(){throw nr}}),nr={},q(function(){throw 42},null,Rr)}catch(r){r!==nr&&(q=null)}else q=null;var Un=/^\s*class\b/,Dr=function(e){try{var t=rt.call(e);return Un.test(t)}catch{return!1}},Ur=function(e){try{return Dr(e)?!1:(rt.call(e),!0)}catch{return!1}},or=Object.prototype.toString,Rn="[object Object]",Dn="[object Function]",qn="[object GeneratorFunction]",kn="[object HTMLAllCollection]",$n="[object HTML document.all class]",Mn="[object HTMLCollection]",_n=typeof Symbol=="function"&&!!Symbol.toStringTag,Nn=!(0 in[,]),qr=function(){return!1};typeof document=="object"&&(Xe=document.all,or.call(Xe)===or.call(document.all)&&(qr=function(e){if((Nn||!e)&&(typeof e>"u"||typeof e=="object"))try{var t=or.call(e);return(t===kn||t===$n||t===Mn||t===Rn)&&e("")==null}catch{}return!1}));var Xe;et.exports=q?function(e){if(qr(e))return!0;if(!e||typeof e!="function"&&typeof e!="object")return!1;try{q(e,null,Rr)}catch(t){if(t!==nr)return!1}return!Dr(e)&&Ur(e)}:function(e){if(qr(e))return!0;if(!e||typeof e!="function"&&typeof e!="object")return!1;if(_n)return Ur(e);if(Dr(e))return!1;var t=or.call(e);return t!==Dn&&t!==qn&&!/^\[object HTML/.test(t)?!1:Ur(e)}});var it=g((Wi,ot)=>{"use strict";i();var Cn=tt(),Gn=Object.prototype.toString,nt=Object.prototype.hasOwnProperty,Wn=function(e,t,n){for(var o=0,a=e.length;o<a;o++)nt.call(e,o)&&(n==null?t(e[o],o,e):t.call(n,e[o],o,e))},zn=function(e,t,n){for(var o=0,a=e.length;o<a;o++)n==null?t(e.charAt(o),o,e):t.call(n,e.charAt(o),o,e)},Vn=function(e,t,n){for(var o in e)nt.call(e,o)&&(n==null?t(e[o],o,e):t.call(n,e[o],o,e))},Ln=function(e,t,n){if(!Cn(t))throw new TypeError("iterator must be a function");var o;arguments.length>=3&&(o=n),Gn.call(e)==="[object Array]"?Wn(e,t,o):typeof e=="string"?zn(e,t,o):Vn(e,t,o)};ot.exports=Ln});var ft=g((Vi,at)=>{"use strict";i();at.exports=["Float32Array","Float64Array","Int8Array","Int16Array","Int32Array","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array"]});var st=g((Ji,ut)=>{"use strict";i();var kr=ft(),Jn=globalThis;ut.exports=function(){for(var e=[],t=0;t<kr.length;t++)typeof Jn[kr[t]]=="function"&&(e[e.length]=kr[t]);return e}});var Cr=g((Zi,lt)=>{"use strict";i();var ar=it(),Hn=st(),yt=Fr(),_r=Ir(),ir=X(),Zn=_r("Object.prototype.toString"),pt=L()(),ct=globalThis,Mr=Hn(),Nr=_r("String.prototype.slice"),$r=Object.getPrototypeOf,Yn=_r("Array.prototype.indexOf",!0)||function(e,t){for(var n=0;n<e.length;n+=1)if(e[n]===t)return n;return-1},fr={__proto__:null};pt&&ir&&$r?ar(Mr,function(r){var e=new ct[r];if(Symbol.toStringTag in e){var t=$r(e),n=ir(t,Symbol.toStringTag);if(!n){var o=$r(t);n=ir(o,Symbol.toStringTag)}fr["$"+r]=yt(n.get)}}):ar(Mr,function(r){var e=new ct[r],t=e.slice||e.set;t&&(fr["$"+r]=yt(t))});var Kn=function(e){var t=!1;return ar(fr,function(n,o){if(!t)try{"$"+n(e)===o&&(t=Nr(o,1))}catch{}}),t},Qn=function(e){var t=!1;return ar(fr,function(n,o){if(!t)try{n(e),t=Nr(o,1)}catch{}}),t};lt.exports=function(e){if(!e||typeof e!="object")return!1;if(!pt){var t=Nr(Zn(e),8,-1);return Yn(Mr,t)>-1?t:t!=="Object"?!1:Qn(e)}return ir?Kn(e):null}});var dt=g((Ki,gt)=>{"use strict";i();var Xn=Cr();gt.exports=function(e){return!!Xn(e)}});var Bt=g(c=>{"use strict";i();var ro=Ze(),eo=Qe(),S=Cr(),bt=dt();function k(r){return r.call.bind(r)}var mt=typeof BigInt<"u",ht=typeof Symbol<"u",A=k(Object.prototype.toString),to=k(Number.prototype.valueOf),no=k(String.prototype.valueOf),oo=k(Boolean.prototype.valueOf);mt&&(vt=k(BigInt.prototype.valueOf));var vt;ht&&(At=k(Symbol.prototype.valueOf));var At;function C(r,e){if(typeof r!="object")return!1;try{return e(r),!0}catch{return!1}}c.isArgumentsObject=ro;c.isGeneratorFunction=eo;c.isTypedArray=bt;function io(r){return typeof Promise<"u"&&r instanceof Promise||r!==null&&typeof r=="object"&&typeof r.then=="function"&&typeof r.catch=="function"}c.isPromise=io;function ao(r){return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?ArrayBuffer.isView(r):bt(r)||wt(r)}c.isArrayBufferView=ao;function fo(r){return S(r)==="Uint8Array"}c.isUint8Array=fo;function uo(r){return S(r)==="Uint8ClampedArray"}c.isUint8ClampedArray=uo;function so(r){return S(r)==="Uint16Array"}c.isUint16Array=so;function yo(r){return S(r)==="Uint32Array"}c.isUint32Array=yo;function co(r){return S(r)==="Int8Array"}c.isInt8Array=co;function po(r){return S(r)==="Int16Array"}c.isInt16Array=po;function lo(r){return S(r)==="Int32Array"}c.isInt32Array=lo;function go(r){return S(r)==="Float32Array"}c.isFloat32Array=go;function bo(r){return S(r)==="Float64Array"}c.isFloat64Array=bo;function mo(r){return S(r)==="BigInt64Array"}c.isBigInt64Array=mo;function ho(r){return S(r)==="BigUint64Array"}c.isBigUint64Array=ho;function ur(r){return A(r)==="[object Map]"}ur.working=typeof Map<"u"&&ur(new Map);function vo(r){return typeof Map>"u"?!1:ur.working?ur(r):r instanceof Map}c.isMap=vo;function sr(r){return A(r)==="[object Set]"}sr.working=typeof Set<"u"&&sr(new Set);function Ao(r){return typeof Set>"u"?!1:sr.working?sr(r):r instanceof Set}c.isSet=Ao;function yr(r){return A(r)==="[object WeakMap]"}yr.working=typeof WeakMap<"u"&&yr(new WeakMap);function So(r){return typeof WeakMap>"u"?!1:yr.working?yr(r):r instanceof WeakMap}c.isWeakMap=So;function Wr(r){return A(r)==="[object WeakSet]"}Wr.working=typeof WeakSet<"u"&&Wr(new WeakSet);function wo(r){return Wr(r)}c.isWeakSet=wo;function cr(r){return A(r)==="[object ArrayBuffer]"}cr.working=typeof ArrayBuffer<"u"&&cr(new ArrayBuffer);function St(r){return typeof ArrayBuffer>"u"?!1:cr.working?cr(r):r instanceof ArrayBuffer}c.isArrayBuffer=St;function pr(r){return A(r)==="[object DataView]"}pr.working=typeof ArrayBuffer<"u"&&typeof DataView<"u"&&pr(new DataView(new ArrayBuffer(1),0,1));function wt(r){return typeof DataView>"u"?!1:pr.working?pr(r):r instanceof DataView}c.isDataView=wt;var Gr=typeof SharedArrayBuffer<"u"?SharedArrayBuffer:void 0;function N(r){return A(r)==="[object SharedArrayBuffer]"}function Ot(r){return typeof Gr>"u"?!1:(typeof N.working>"u"&&(N.working=N(new Gr)),N.working?N(r):r instanceof Gr)}c.isSharedArrayBuffer=Ot;function Oo(r){return A(r)==="[object AsyncFunction]"}c.isAsyncFunction=Oo;function Po(r){return A(r)==="[object Map Iterator]"}c.isMapIterator=Po;function jo(r){return A(r)==="[object Set Iterator]"}c.isSetIterator=jo;function Eo(r){return A(r)==="[object Generator]"}c.isGeneratorObject=Eo;function Fo(r){return A(r)==="[object WebAssembly.Module]"}c.isWebAssemblyCompiledModule=Fo;function Pt(r){return C(r,to)}c.isNumberObject=Pt;function jt(r){return C(r,no)}c.isStringObject=jt;function Et(r){return C(r,oo)}c.isBooleanObject=Et;function Ft(r){return mt&&C(r,vt)}c.isBigIntObject=Ft;function It(r){return ht&&C(r,At)}c.isSymbolObject=It;function Io(r){return Pt(r)||jt(r)||Et(r)||Ft(r)||It(r)}c.isBoxedPrimitive=Io;function Bo(r){return typeof Uint8Array<"u"&&(St(r)||Ot(r))}c.isAnyArrayBuffer=Bo;["isProxy","isExternal","isModuleNamespaceObject"].forEach(function(r){Object.defineProperty(c,r,{enumerable:!1,value:function(){throw new Error(r+" is not supported in userland")}})})});var xt=g((ea,Tt)=>{i();Tt.exports=function(e){return e&&typeof e=="object"&&typeof e.copy=="function"&&typeof e.fill=="function"&&typeof e.readUInt8=="function"}});var Ut=g((na,zr)=>{i();typeof Object.create=="function"?zr.exports=function(e,t){t&&(e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}))}:zr.exports=function(e,t){if(t){e.super_=t;var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e}}});var Go=g(l=>{i();var Rt=Object.getOwnPropertyDescriptors||function(e){for(var t=Object.keys(e),n={},o=0;o<t.length;o++)n[t[o]]=Object.getOwnPropertyDescriptor(e,t[o]);return n},To=/%[sdj%]/g;l.format=function(r){if(!vr(r)){for(var e=[],t=0;t<arguments.length;t++)e.push(w(arguments[t]));return e.join(" ")}for(var t=1,n=arguments,o=n.length,a=String(r).replace(To,function(u){if(u==="%%")return"%";if(t>=o)return u;switch(u){case"%s":return String(n[t++]);case"%d":return Number(n[t++]);case"%j":try{return JSON.stringify(n[t++])}catch{return"[Circular]"}default:return u}}),f=n[t];t<o;f=n[++t])hr(f)||!$(f)?a+=" "+f:a+=" "+w(f);return a};l.deprecate=function(r,e){if(typeof s<"u"&&s.noDeprecation===!0)return r;if(typeof s>"u")return function(){return l.deprecate(r,e).apply(this,arguments)};var t=!1;function n(){if(!t){if(s.throwDeprecation)throw new Error(e);s.traceDeprecation,t=!0}return r.apply(this,arguments)}return n};var lr={},Dt=/^$/;s.env.NODE_DEBUG&&(gr=s.env.NODE_DEBUG,gr=gr.replace(/[|\\{}()[\]^$+?.]/g,"\\$&").replace(/\*/g,".*").replace(/,/g,"$|^").toUpperCase(),Dt=new RegExp("^"+gr+"$","i"));var gr;l.debuglog=function(r){if(r=r.toUpperCase(),!lr[r])if(Dt.test(r)){var e=s.pid;lr[r]=function(){var t=l.format.apply(l,arguments)}}else lr[r]=function(){};return lr[r]};function w(r,e){var t={seen:[],stylize:Uo};return arguments.length>=3&&(t.depth=arguments[2]),arguments.length>=4&&(t.colors=arguments[3]),Jr(e)?t.showHidden=e:e&&l._extend(t,e),F(t.showHidden)&&(t.showHidden=!1),F(t.depth)&&(t.depth=2),F(t.colors)&&(t.colors=!1),F(t.customInspect)&&(t.customInspect=!0),t.colors&&(t.stylize=xo),br(t,r,t.depth)}l.inspect=w;w.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]};w.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"};function xo(r,e){var t=w.styles[e];return t?"\x1B["+w.colors[t][0]+"m"+r+"\x1B["+w.colors[t][1]+"m":r}function Uo(r,e){return r}function Ro(r){var e={};return r.forEach(function(t,n){e[t]=!0}),e}function br(r,e,t){if(r.customInspect&&e&&dr(e.inspect)&&e.inspect!==l.inspect&&!(e.constructor&&e.constructor.prototype===e)){var n=e.inspect(t,r);return vr(n)||(n=br(r,n,t)),n}var o=Do(r,e);if(o)return o;var a=Object.keys(e),f=Ro(a);if(r.showHidden&&(a=Object.getOwnPropertyNames(e)),W(e)&&(a.indexOf("message")>=0||a.indexOf("description")>=0))return Vr(e);if(a.length===0){if(dr(e)){var u=e.name?": "+e.name:"";return r.stylize("[Function"+u+"]","special")}if(G(e))return r.stylize(RegExp.prototype.toString.call(e),"regexp");if(mr(e))return r.stylize(Date.prototype.toString.call(e),"date");if(W(e))return Vr(e)}var y="",b=!1,h=["{","}"];if(qt(e)&&(b=!0,h=["[","]"]),dr(e)){var O=e.name?": "+e.name:"";y=" [Function"+O+"]"}if(G(e)&&(y=" "+RegExp.prototype.toString.call(e)),mr(e)&&(y=" "+Date.prototype.toUTCString.call(e)),W(e)&&(y=" "+Vr(e)),a.length===0&&(!b||e.length==0))return h[0]+y+h[1];if(t<0)return G(e)?r.stylize(RegExp.prototype.toString.call(e),"regexp"):r.stylize("[Object]","special");r.seen.push(e);var v;return b?v=qo(r,e,t,f,a):v=a.map(function(I){return Lr(r,e,t,f,I,b)}),r.seen.pop(),ko(v,y,h)}function Do(r,e){if(F(e))return r.stylize("undefined","undefined");if(vr(e)){var t="'"+JSON.stringify(e).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return r.stylize(t,"string")}if(kt(e))return r.stylize(""+e,"number");if(Jr(e))return r.stylize(""+e,"boolean");if(hr(e))return r.stylize("null","null")}function Vr(r){return"["+Error.prototype.toString.call(r)+"]"}function qo(r,e,t,n,o){for(var a=[],f=0,u=e.length;f<u;++f)$t(e,String(f))?a.push(Lr(r,e,t,n,String(f),!0)):a.push("");return o.forEach(function(y){y.match(/^\d+$/)||a.push(Lr(r,e,t,n,y,!0))}),a}function Lr(r,e,t,n,o,a){var f,u,y;if(y=Object.getOwnPropertyDescriptor(e,o)||{value:e[o]},y.get?y.set?u=r.stylize("[Getter/Setter]","special"):u=r.stylize("[Getter]","special"):y.set&&(u=r.stylize("[Setter]","special")),$t(n,o)||(f="["+o+"]"),u||(r.seen.indexOf(y.value)<0?(hr(t)?u=br(r,y.value,null):u=br(r,y.value,t-1),u.indexOf(`
`)>-1&&(a?u=u.split(`
`).map(function(b){return"  "+b}).join(`
`).slice(2):u=`
`+u.split(`
`).map(function(b){return"   "+b}).join(`
`))):u=r.stylize("[Circular]","special")),F(f)){if(a&&o.match(/^\d+$/))return u;f=JSON.stringify(""+o),f.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(f=f.slice(1,-1),f=r.stylize(f,"name")):(f=f.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),f=r.stylize(f,"string"))}return f+": "+u}function ko(r,e,t){var n=0,o=r.reduce(function(a,f){return n++,f.indexOf(`
`)>=0&&n++,a+f.replace(/\u001b\[\d\d?m/g,"").length+1},0);return o>60?t[0]+(e===""?"":e+`
 `)+" "+r.join(`,
  `)+" "+t[1]:t[0]+e+" "+r.join(", ")+" "+t[1]}l.types=Bt();function qt(r){return Array.isArray(r)}l.isArray=qt;function Jr(r){return typeof r=="boolean"}l.isBoolean=Jr;function hr(r){return r===null}l.isNull=hr;function $o(r){return r==null}l.isNullOrUndefined=$o;function kt(r){return typeof r=="number"}l.isNumber=kt;function vr(r){return typeof r=="string"}l.isString=vr;function Mo(r){return typeof r=="symbol"}l.isSymbol=Mo;function F(r){return r===void 0}l.isUndefined=F;function G(r){return $(r)&&Hr(r)==="[object RegExp]"}l.isRegExp=G;l.types.isRegExp=G;function $(r){return typeof r=="object"&&r!==null}l.isObject=$;function mr(r){return $(r)&&Hr(r)==="[object Date]"}l.isDate=mr;l.types.isDate=mr;function W(r){return $(r)&&(Hr(r)==="[object Error]"||r instanceof Error)}l.isError=W;l.types.isNativeError=W;function dr(r){return typeof r=="function"}l.isFunction=dr;function _o(r){return r===null||typeof r=="boolean"||typeof r=="number"||typeof r=="string"||typeof r=="symbol"||typeof r>"u"}l.isPrimitive=_o;l.isBuffer=xt();function Hr(r){return Object.prototype.toString.call(r)}l.log=function(){};l.inherits=Ut();l._extend=function(r,e){if(!e||!$(e))return r;for(var t=Object.keys(e),n=t.length;n--;)r[t[n]]=e[t[n]];return r};function $t(r,e){return Object.prototype.hasOwnProperty.call(r,e)}var E=typeof Symbol<"u"?Symbol("util.promisify.custom"):void 0;l.promisify=function(e){if(typeof e!="function")throw new TypeError('The "original" argument must be of type Function');if(E&&e[E]){var t=e[E];if(typeof t!="function")throw new TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(t,E,{value:t,enumerable:!1,writable:!1,configurable:!0}),t}function t(){for(var n,o,a=new Promise(function(y,b){n=y,o=b}),f=[],u=0;u<arguments.length;u++)f.push(arguments[u]);f.push(function(y,b){y?o(y):n(b)});try{e.apply(this,f)}catch(y){o(y)}return a}return Object.setPrototypeOf(t,Object.getPrototypeOf(e)),E&&Object.defineProperty(t,E,{value:t,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(t,Rt(e))};l.promisify.custom=E;function No(r,e){if(!r){var t=new Error("Promise was rejected with a falsy value");t.reason=r,r=t}return e(r)}function Co(r){if(typeof r!="function")throw new TypeError('The "original" argument must be of type Function');function e(){for(var t=[],n=0;n<arguments.length;n++)t.push(arguments[n]);var o=t.pop();if(typeof o!="function")throw new TypeError("The last argument must be of type Function");var a=this,f=function(){return o.apply(a,arguments)};r.apply(this,t).then(function(u){s.nextTick(f.bind(null,null,u))},function(u){s.nextTick(No.bind(null,u,f))})}return Object.setPrototypeOf(e,Object.getPrototypeOf(r)),Object.defineProperties(e,Rt(r)),e}l.callbackify=Co});export default Go();
