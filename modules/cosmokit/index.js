import{Buffer as y}from"https://registry.koishi.chat/modules/buffer/index.js";import k from"https://registry.koishi.chat/modules/process/index.js";var M=Object.defineProperty,t=(e,r)=>M(e,"name",{value:r,configurable:!0});function L(){}t(L,"noop");function b(e){return e==null}t(b,"isNullable");function H(e){return e&&typeof e=="object"&&!Array.isArray(e)}t(H,"isPlainObject");function E(e,r){return Object.fromEntries(Object.entries(e).filter(([a,u])=>r(a,u)))}t(E,"filterKeys");function x(e,r){return Object.fromEntries(Object.entries(e).map(([a,u])=>[a,r(u,a)]))}t(x,"mapValues");function F(e,r,a){if(!r)return{...e};let u={};for(let i of r)(a||e[i]!==void 0)&&(u[i]=e[i]);return u}t(F,"pick");function N(e,r){if(!r)return{...e};let a={...e};for(let u of r)Reflect.deleteProperty(a,u);return a}t(N,"omit");function P(e,r,a){return Object.defineProperty(e,r,{writable:!0,value:a,enumerable:!1})}t(P,"defineProperty");function U(e,r){return r.every(a=>e.includes(a))}t(U,"contain");function _(e,r){return e.filter(a=>r.includes(a))}t(_,"intersection");function R(e,r){return e.filter(a=>!r.includes(a))}t(R,"difference");function V(e,r){return Array.from(new Set([...e,...r]))}t(V,"union");function Y(e){return[...new Set(e)]}t(Y,"deduplicate");function q(e,r){let a=e?.indexOf(r);return a>=0?(e.splice(a,1),!0):!1}t(q,"remove");function K(e){return Array.isArray(e)?e:b(e)?[]:[e]}t(K,"makeArray");function g(e,r){return arguments.length===1?a=>g(e,a):e in globalThis&&r instanceof globalThis[e]||Object.prototype.toString.call(r).slice(8,-1)===e}t(g,"is");function m(e){return g("ArrayBuffer",e)||g("SharedArrayBuffer",e)}t(m,"isArrayBufferLike");function B(e){return m(e)||ArrayBuffer.isView(e)}t(B,"isArrayBufferSource");var h;(e=>{e.is=m,e.isSource=B;function r(o){return ArrayBuffer.isView(o)?o.buffer.slice(o.byteOffset,o.byteOffset+o.byteLength):o}e.fromSource=r,t(r,"fromSource");function a(o){if(typeof y<"u")return y.from(o).toString("base64");let l="",c=new Uint8Array(o);for(let p=0;p<c.byteLength;p++)l+=String.fromCharCode(c[p]);return btoa(l)}e.toBase64=a,t(a,"toBase64");function u(o){return typeof y<"u"?r(y.from(o,"base64")):Uint8Array.from(atob(o),l=>l.charCodeAt(0))}e.fromBase64=u,t(u,"fromBase64");function i(o){return typeof y<"u"?y.from(o).toString("hex"):Array.from(new Uint8Array(o),l=>l.toString(16).padStart(2,"0")).join("")}e.toHex=i,t(i,"toHex");function s(o){if(typeof y<"u")return r(y.from(o,"hex"));let l=o.length%2===0?o:o.slice(0,o.length-1),c=[];for(let p=0;p<l.length;p+=2)c.push(parseInt(`${l[p]}${l[p+1]}`,16));return Uint8Array.from(c).buffer}e.fromHex=s,t(s,"fromHex")})(h||(h={}));var X=h.fromBase64,T=h.toBase64,ee=h.fromHex,re=h.toHex;function A(e){return!e||typeof e!="object"?e:Array.isArray(e)?e.map(A):g("Date",e)?new Date(e.valueOf()):g("RegExp",e)?new RegExp(e.source,e.flags):m(e)?e.slice(0):ArrayBuffer.isView(e)?e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength):x(e,A)}t(A,"clone");function w(e,r,a){if(e===r||!a&&b(e)&&b(r))return!0;if(typeof e!=typeof r||typeof e!="object"||!e||!r)return!1;function u(i,s){return i(e)?i(r)?s(e,r):!1:i(r)?!1:void 0}return t(u,"check"),u(Array.isArray,(i,s)=>i.length===s.length&&i.every((o,l)=>w(o,s[l])))??u(g("Date"),(i,s)=>i.valueOf()===s.valueOf())??u(g("RegExp"),(i,s)=>i.source===s.source&&i.flags===s.flags)??u(m,(i,s)=>{if(i.byteLength!==s.byteLength)return!1;let o=new Uint8Array(i),l=new Uint8Array(s);for(let c=0;c<o.length;c++)if(o[c]!==l[c])return!1;return!0})??Object.keys({...e,...r}).every(i=>w(e[i],r[i],a))}t(w,"deepEqual");function Z(e){return e.charAt(0).toUpperCase()+e.slice(1)}t(Z,"capitalize");function D(e){return e.charAt(0).toLowerCase()+e.slice(1)}t(D,"uncapitalize");function z(e){return e.replace(/[_-][a-z]/g,r=>r.slice(1).toUpperCase())}t(z,"camelCase");function j(e){return D(e).replace(/_/g,"-").replace(/.[A-Z]+/g,r=>r[0]+"-"+r.slice(1).toLowerCase())}t(j,"paramCase");function I(e){return D(e).replace(/-/g,"_").replace(/.[A-Z]+/g,r=>r[0]+"_"+r.slice(1).toLowerCase())}t(I,"snakeCase");var te=z,ne=j;function C(e){return e.replace(/\/$/,"")}t(C,"trimSlash");function W(e){return e.startsWith("/")||(e="/"+e),C(e)}t(W,"sanitize");var v;(e=>{e.millisecond=1,e.second=1e3,e.minute=e.second*60,e.hour=e.minute*60,e.day=e.hour*24,e.week=e.day*7;let r=new Date().getTimezoneOffset();function a(n){r=n}e.setTimezoneOffset=a,t(a,"setTimezoneOffset");function u(){return r}e.getTimezoneOffset=u,t(u,"getTimezoneOffset");function i(n=new Date,f){return typeof n=="number"&&(n=new Date(n)),f===void 0&&(f=r),Math.floor((n.valueOf()/e.minute-f)/1440)}e.getDateNumber=i,t(i,"getDateNumber");function s(n,f){let $=new Date(n*e.day);return f===void 0&&(f=r),new Date(+$+f*e.minute)}e.fromDateNumber=s,t(s,"fromDateNumber");let o=/\d+(?:\.\d+)?/.source,l=new RegExp(`^${["w(?:eek(?:s)?)?","d(?:ay(?:s)?)?","h(?:our(?:s)?)?","m(?:in(?:ute)?(?:s)?)?","s(?:ec(?:ond)?(?:s)?)?"].map(n=>`(${o}${n})?`).join("")}$`);function c(n){let f=l.exec(n);return f?(parseFloat(f[1])*e.week||0)+(parseFloat(f[2])*e.day||0)+(parseFloat(f[3])*e.hour||0)+(parseFloat(f[4])*e.minute||0)+(parseFloat(f[5])*e.second||0):0}e.parseTime=c,t(c,"parseTime");function p(n){let f=c(n);return f?n=Date.now()+f:/^\d{1,2}(:\d{1,2}){1,2}$/.test(n)?n=`${new Date().toLocaleDateString()}-${n}`:/^\d{1,2}-\d{1,2}-\d{1,2}(:\d{1,2}){1,2}$/.test(n)&&(n=`${new Date().getFullYear()}-${n}`),n?new Date(n):new Date}e.parseDate=p,t(p,"parseDate");function O(n){let f=Math.abs(n);return f>=e.day-e.hour/2?Math.round(n/e.day)+"d":f>=e.hour-e.minute/2?Math.round(n/e.hour)+"h":f>=e.minute-e.second/2?Math.round(n/e.minute)+"m":f>=e.second?Math.round(n/e.second)+"s":n+"ms"}e.format=O,t(O,"format");function d(n,f=2){return n.toString().padStart(f,"0")}e.toDigits=d,t(d,"toDigits");function S(n,f=new Date){return n.replace("yyyy",f.getFullYear().toString()).replace("yy",f.getFullYear().toString().slice(2)).replace("MM",d(f.getMonth()+1)).replace("dd",d(f.getDate())).replace("hh",d(f.getHours())).replace("mm",d(f.getMinutes())).replace("ss",d(f.getSeconds())).replace("SSS",d(f.getMilliseconds(),3))}e.template=S,t(S,"template")})(v||(v={}));export{h as Binary,v as Time,T as arrayBufferToBase64,re as arrayBufferToHex,X as base64ToArrayBuffer,z as camelCase,te as camelize,Z as capitalize,A as clone,U as contain,Y as deduplicate,w as deepEqual,P as defineProperty,R as difference,E as filterKeys,ee as hexToArrayBuffer,ne as hyphenate,_ as intersection,g as is,b as isNullable,H as isPlainObject,K as makeArray,x as mapValues,L as noop,N as omit,j as paramCase,F as pick,q as remove,W as sanitize,I as snakeCase,C as trimSlash,D as uncapitalize,V as union,x as valueMap};