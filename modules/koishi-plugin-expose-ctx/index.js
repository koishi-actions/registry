var O=Object.defineProperty;var k=Object.getOwnPropertyDescriptor;var A=Object.getOwnPropertyNames;var M=Object.prototype.hasOwnProperty;var v=(e,r)=>()=>(e&&(r=e(e=0)),r);var g=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var x=(e,r,o,p)=>{if(r&&typeof r=="object"||typeof r=="function")for(let t of A(r))!M.call(e,t)&&t!==o&&O(e,t,{get:()=>r[t],enumerable:!(p=k(r,t))||p.enumerable});return e},a=(e,r,o)=>(x(e,r,"default"),o&&x(o,r,"default"));var m=e=>x(O({},"__esModule",{value:!0}),e);import{Buffer as l}from"https://registry.koishi.chat/modules/buffer/index.js";import _ from"https://registry.koishi.chat/modules/process/index.js";var s=v(()=>{});var n={};import*as ne from"https://registry.koishi.chat/modules/koishi/index.js";var E=v(()=>{s();a(n,ne)});import D from"https://registry.koishi.chat/modules/@cordiverse/path/index.js";var j=g((ie,h)=>{s();h.exports=D});var c={};import*as ue from"https://registry.koishi.chat/modules/@koishijs/core/index.js";var w=v(()=>{s();a(c,ue)});var i={};import*as fe from"https://registry.koishi.chat/modules/@koishijs/console/index.js";var P=v(()=>{s();a(i,fe)});var re=g((me,N)=>{s();var J=Object.create,u=Object.defineProperty,V=Object.getOwnPropertyDescriptor,$=Object.getOwnPropertyNames,z=Object.getPrototypeOf,F=Object.prototype.hasOwnProperty,f=(e,r)=>u(e,"name",{value:r,configurable:!0}),S=(e,r)=>{for(var o in r)u(e,o,{get:r[o],enumerable:!0})},I=(e,r,o,p)=>{if(r&&typeof r=="object"||typeof r=="function")for(let t of $(r))!F.call(e,t)&&t!==o&&u(e,t,{get:()=>r[t],enumerable:!(p=V(r,t))||p.enumerable});return e},q=(e,r,o)=>(o=e!=null?J(z(e)):{},I(r||!e||!e.__esModule?u(o,"default",{value:e,enumerable:!0}):o,e)),G=e=>I(u({},"__esModule",{value:!0}),e),B={};S(B,{Config:()=>ee,apply:()=>K,inject:()=>Z,name:()=>Y});N.exports=G(B);var L=(E(),m(n)),xe=j(),C={};S(C,{apply:()=>H,createExposer:()=>d});var Q=typeof window<"u"?window:(globalThis!=null,globalThis),R="globalThis",U=["ctx","app","coreExports","importer"],W=q((w(),m(c))),X=q((P(),m(i)));function d(e,r){let o=e.root,p=[];e.effect(()=>()=>p.forEach(r));function t(y){switch(p.push(y),y){case"app":return o;case"ctx":return e;case"importer":if(o.loader)return T=>{var b;return(b=o.loader)==null?void 0:b.import(T)};break;case"coreExports":return W;case"consoleExports":return X}}return f(t,"expose"),{expose:t}}f(d,"createExposer");function H(e){let r=Q[R],o=d(e,p=>delete r[p]);for(let p of U)r[p]=o.expose(p)}f(H,"apply");var Y="expose-ctx",Z=["console"],ee=L.Schema.object({});function K(e){e.console.addEntry(["https://registry.koishi.chat/modules/koishi-plugin-expose-ctx/dist/index.js","https://registry.koishi.chat/modules/koishi-plugin-expose-ctx/dist/style.css"]),e.plugin(C)}f(K,"apply")});export default re();
