var _=Object.defineProperty;var d=Object.getOwnPropertyDescriptor;var x=Object.getOwnPropertyNames;var P=Object.prototype.hasOwnProperty;var f=(r,e)=>()=>(r&&(e=r(r=0)),e);var w=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var u=(r,e,o,a)=>{if(e&&typeof e=="object"||typeof e=="function")for(let t of x(e))!P.call(r,t)&&t!==o&&_(r,t,{get:()=>e[t],enumerable:!(a=d(e,t))||a.enumerable});return r},c=(r,e,o)=>(u(r,e,"default"),o&&u(o,e,"default"));var h=r=>u(_({},"__esModule",{value:!0}),r);import{Buffer as m}from"https://registry.koishi.chat/modules/buffer/index.js";import l from"https://registry.koishi.chat/modules/process/index.js";var n=f(()=>{});var p={};import*as H from"https://registry.koishi.chat/modules/koishi/index.js";var s=f(()=>{n();c(p,H)});var M=w((I,b)=>{n();var i=Object.defineProperty,j=Object.getOwnPropertyDescriptor,C=Object.getOwnPropertyNames,S=Object.prototype.hasOwnProperty,k=(r,e)=>i(r,"name",{value:e,configurable:!0}),D=(r,e)=>{for(var o in e)i(r,o,{get:e[o],enumerable:!0})},N=(r,e,o,a)=>{if(e&&typeof e=="object"||typeof e=="function")for(let t of C(e))!S.call(r,t)&&t!==o&&i(r,t,{get:()=>e[t],enumerable:!(a=j(e,t))||a.enumerable});return r},q=r=>N(i({},"__esModule",{value:!0}),r),y={};D(y,{Config:()=>B,apply:()=>g,name:()=>J});b.exports=q(y);var v=(s(),h(p)),B=v.Schema.object({execute:v.Schema.string().default("help").description("要执行的指令。")}),J="at-command";function g(r,e){r.middleware(async(o,a)=>{let{content:t,atSelf:O}=o.stripped;return t||!O?a():o.execute(e.execute)})}k(g,"apply")});export default M();
