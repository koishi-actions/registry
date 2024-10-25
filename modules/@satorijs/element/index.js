import{Buffer as q}from"https://registry.koishi.chat/modules/buffer/index.js";import tt from"https://registry.koishi.chat/modules/process/index.js";import{arrayBufferToBase64 as Y,camelize as it,defineProperty as D,hyphenate as st,is as J,isNullable as T,makeArray as at}from"https://registry.koishi.chat/modules/cosmokit/index.js";var et=Object.defineProperty,rt=Object.getOwnPropertyNames,o=(C,m)=>et(C,"name",{value:m,configurable:!0}),nt=(C,m)=>function(){return m||(0,C[rt(C)[0]])((m={exports:{}}).exports,m),m.exports},ot=nt({"src/index.ts"(C,m){var N=Symbol.for("satori.element"),k=class{static{o(this,"ElementConstructor")}get data(){return this.attrs}getTagName(){return this.type==="component"?this.attrs.is?.name??"component":this.type}toAttrString(){return Object.entries(this.attrs).map(([n,l])=>T(l)?"":(n=st(n),l===!0?` ${n}`:l===!1?` no-${n}`:` ${n}="${y.escape(""+l,!0)}"`)).join("")}toString(n=!1){if(this.type==="text"&&"content"in this.attrs)return n?this.attrs.content:y.escape(this.attrs.content);let l=this.children.map(x=>x.toString(n)).join("");if(n)return l;let g=this.toAttrString(),h=this.getTagName();return this.children.length?`<${h}${g}>${l}</${h}>`:`<${h}${g}/>`}};D(k,"name","Element"),D(k.prototype,N,!0);function y(n,...l){let g=Object.create(k.prototype),h={},x=[];if(l[0]&&typeof l[0]=="object"&&!y.isElement(l[0])&&!Array.isArray(l[0])){let S=l.shift();for(let[v,w]of Object.entries(S))T(w)||(v==="children"?l.push(...at(w)):h[it(v)]=w)}for(let S of l)x.push(...y.toElementArray(S));return typeof n=="function"&&(h.is=n,n="component"),Object.assign(g,{type:n,attrs:h,children:x})}o(y,"Element");var P=new Function("expr","context",`
  try {
    with (context) {
      return eval(expr)
    }
  } catch {}
`);(n=>{n.jsx=n,n.jsxs=n,n.jsxDEV=n,n.Fragment="template";function l(e){return e&&typeof e=="object"&&e[N]}n.isElement=l,o(l,"isElement");function g(e){if(typeof e=="string"||typeof e=="number"||typeof e=="boolean"){if(e=""+e,e)return n("text",{content:e})}else{if(l(e))return e;if(!T(e))throw new TypeError(`Invalid content: ${e}`)}}n.toElement=g,o(g,"toElement");function h(e){return Array.isArray(e)?e.map(g).filter(t=>t):[g(e)].filter(t=>t)}n.toElementArray=h,o(h,"toElementArray");function x(e,t){return typeof e=="string"?b(e,t):h(e)}n.normalize=x,o(x,"normalize");function S(e,t=!1){let r=(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");return t?r.replace(/"/g,"&quot;"):r}n.escape=S,o(S,"escape");function v(e){return e.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#(\d+);/g,(t,r)=>r==="38"?t:String.fromCharCode(+r)).replace(/&#x([0-9a-f]+);/gi,(t,r)=>r==="26"?t:String.fromCharCode(parseInt(r,16))).replace(/&(amp|#38|#x26);/g,"&")}n.unescape=v,o(v,"unescape");function w(e,t={}){let r=b(e);return t.caret?t.type&&r[0]?.type!==t.type?void 0:r[0]:_(r,t.type||"*")[0]}n.from=w,o(w,"from");let G=/ *([ >+~]) */g;function F(e){return e.split(",").map(t=>{let r=[];t=t.trim();let i,a=" ";for(;i=G.exec(t);)r.push({type:t.slice(0,i.index),combinator:a}),a=i[1],t=t.slice(i.index+i[0].length);return r.push({type:t,combinator:a}),r})}n.parseSelector=F,o(F,"parseSelector");function _(e,t){if(!e||!t)return[];if(typeof e=="string"&&(e=b(e)),typeof t=="string"&&(t=F(t)),!t.length)return[];let r=[],i=[];for(let[a,s]of e.entries()){let f=[],u=[...t,...r];r=[];let p=!1;for(let c of u){let{type:d,combinator:I}=c[0];(d===s.type||d==="*")&&(c.length===1?p=!0:[" ",">"].includes(c[1].combinator)?f.push(c.slice(1)):c[1].combinator==="+"?r.push(c.slice(1)):t.push(c.slice(1))),I===" "&&f.push(c)}p&&i.push(e[a]),i.push(..._(s.children,f))}return i}n.select=_,o(_,"select");function O(e,t){if(e=e.trim(),!/^[\w.]+$/.test(e))return P(e,t)??"";let r=t;for(let i of e.split("."))if(r=r[i],T(r))return"";return r??""}n.interpolate=O,o(O,"interpolate");let H=/(?<comment><!--[\s\S]*?-->)|(?<tag><(\/?)([^!\s>/]*)([^>]*?)\s*(\/?)>)/,K=/(?<comment><!--[\s\S]*?-->)|(?<tag><(\/?)([^!\s>/]*)([^>]*?)\s*(\/?)>)|(?<curly>\{(?<derivative>[@:/#][^\s}]*)?[\s\S]*?\})/,Q=/([^\s=]+)(?:="(?<value1>[^"]*)"|='(?<value2>[^']*)')?/g,X=/([^\s=]+)(?:="(?<value1>[^"]*)"|='(?<value2>[^']*)'|=\{(?<curly>[^}]+)\})?/g,L;(e=>{e[e.OPEN=0]="OPEN",e[e.CLOSE=1]="CLOSE",e[e.EMPTY=2]="EMPTY",e[e.CONTINUE=3]="CONTINUE"})(L||(L={}));function b(e,t){let r=[];function i(p){p&&r.push(p)}o(i,"pushText");let a=t?K:H,s,f=!0;for(;s=a.exec(e);){let p=!s.groups.curly;u(e.slice(0,s.index),f,p),f=p,e=e.slice(s.index+s[0].length);let[c,,,d,I,Z,E]=s;if(!s.groups.comment){if(s.groups.curly){let V="",W=2;s.groups.derivative&&(V=s.groups.derivative.slice(1),W={"@":2,"#":0,"/":1,":":3}[s.groups.derivative[0]]),r.push({type:"curly",name:V,position:W,source:s.groups.curly,extra:s.groups.curly.slice(1+(s.groups.derivative??"").length,-1)});continue}r.push({type:"angle",source:c,name:I||n.Fragment,position:d?1:E?2:0,extra:Z})}}u(e,f,!0);function u(p,c,d){p=v(p),c&&(p=p.replace(/^\s*\n\s*/,"")),d&&(p=p.replace(/\s*\n\s*$/,"")),i(p)}return o(u,"parseContent"),A(M(r),t)}n.parse=b,o(b,"parse");function M(e){let t=[[{type:"angle",name:n.Fragment,position:0,source:"",extra:"",children:{default:[]}},"default"]];function r(...i){let[a,s]=t[0];a.children[s].push(...i)}o(r,"pushToken");for(let i of e){if(typeof i=="string"){r(i);continue}let{name:a,position:s}=i;s===1?t[0][0].name===a&&t.shift():s===3?(t[0][0].children[a]=[],t[0][1]=a):s===0?(r(i),i.children={default:[]},t.unshift([i,"default"])):r(i)}return t[t.length-1][0].children.default}o(M,"foldTokens");function A(e,t){let r=[];for(let i of e)if(typeof i=="string")r.push(n("text",{content:i}));else if(i.type==="angle"){let a={},s=t?X:Q,f;for(;f=s.exec(i.extra);){let[,u,p,c=p,d]=f;d?a[u]=O(d,t):T(c)?u.startsWith("no-")?a[u.slice(3)]=!1:a[u]=!0:a[u]=v(c)}r.push(n(i.name,a,i.children&&A(i.children.default,t)))}else if(!i.name)r.push(...h(O(i.extra,t)));else if(i.name==="if")P(i.extra,t)?r.push(...A(i.children.default,t)):r.push(...A(i.children.else||[],t));else if(i.name==="each"){let[a,s]=i.extra.split(/\s+as\s+/),f=O(a,t);if(!f||!f[Symbol.iterator])continue;for(let u of f)r.push(...A(i.children.default,{...t,[s]:u}))}return r}o(A,"parseTokens");function R(e,t,r){let{type:i,attrs:a,children:s}=e;if(typeof t=="function")return t(e,r);{let f=t[typeof i=="string"?i:""]??t.default??!0;return typeof f=="function"&&(f=f(a,s,r)),f}}o(R,"visit");function B(e,t,r){let i=typeof e=="string"?b(e):e,a=[];return i.forEach(s=>{let{type:f,attrs:u,children:p}=s,c=R(s,t,r);c===!0?a.push(n(f,u,B(p,t,r))):c!==!1&&a.push(...h(c))}),typeof e=="string"?a.join(""):a}n.transform=B,o(B,"transform");async function z(e,t,r){let i=typeof e=="string"?b(e):e,a=(await Promise.all(i.map(async s=>{let{type:f,attrs:u,children:p}=s,c=await R(s,t,r);return c===!0?[n(f,u,await z(p,t,r))]:c!==!1?h(c):[]}))).flat(1);return typeof e=="string"?a.join(""):a}n.transformAsync=z,o(z,"transformAsync");function $(e,...t){return(...r)=>{let i=n(e);return t.forEach((a,s)=>{T(r[s])||(i.attrs[a]=r[s])}),r[t.length]&&Object.assign(i.attrs,r[t.length]),i}}o($,"createFactory"),n.warn=o(()=>{},"warn");function j(e){return(t,...r)=>{let i="base64://";return typeof r[0]=="string"&&(i=`data:${r.shift()};base64,`),J("Buffer",t)?t=i+t.toString("base64"):J("ArrayBuffer",t)?t=i+Y(t):ArrayBuffer.isView(t)&&(t=i+Y(t.buffer)),t.startsWith("base64://")&&(0,n.warn)('protocol "base64:" is deprecated and will be removed in the future, please use "data:" instead'),n(e,{...r[0],src:t})}}o(j,"createAssetFactory"),n.text=$("text","content"),n.at=$("at","id"),n.sharp=$("sharp","id"),n.quote=$("quote","id"),n.image=j("img"),n.img=j("img"),n.video=j("video"),n.audio=j("audio"),n.file=j("file");function U(e,t){return n("i18n",typeof e=="string"?{path:e}:e,t)}n.i18n=U,o(U,"i18n")})(y||(y={})),m.exports=y}}),ut=ot();export{ut as default};