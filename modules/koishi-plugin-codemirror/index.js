var l=Object.defineProperty;var P=Object.getOwnPropertyDescriptor;var x=Object.getOwnPropertyNames;var w=Object.prototype.hasOwnProperty;var m=(r,e)=>()=>(r&&(e=r(r=0)),e);var v=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var c=(r,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of x(e))!w.call(r,o)&&o!==t&&l(r,o,{get:()=>e[o],enumerable:!(n=P(e,o))||n.enumerable});return r},i=(r,e,t)=>(c(r,e,"default"),t&&c(t,e,"default"));var h=r=>c(l({},"__esModule",{value:!0}),r);import{Buffer as s}from"https://registry.koishi.chat/modules/buffer/index.js";import f from"https://registry.koishi.chat/modules/process/index.js";var a=m(()=>{});var p={};import*as R from"https://registry.koishi.chat/modules/koishi/index.js";var u=m(()=>{a();i(p,R)});import C from"https://registry.koishi.chat/modules/@cordiverse/path/index.js";var d=v((U,y)=>{a();y.exports=C});var G=v((W,j)=>{a();var _=Object.defineProperty,k=Object.getOwnPropertyDescriptor,q=Object.getOwnPropertyNames,D=Object.prototype.hasOwnProperty,N=(r,e)=>_(r,"name",{value:e,configurable:!0}),S=(r,e)=>{for(var t in e)_(r,t,{get:e[t],enumerable:!0})},B=(r,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of q(e))!D.call(r,o)&&o!==t&&_(r,o,{get:()=>e[o],enumerable:!(n=k(e,o))||n.enumerable});return r},E=r=>B(_({},"__esModule",{value:!0}),r),g={};S(g,{Config:()=>F,apply:()=>O,filter:()=>A,inject:()=>z,name:()=>M});j.exports=E(g);var J=(u(),h(p)),b=d(),M="codemirror",z=["console"],A=!1,F=J.Schema.object({});function O(r){r.console.addEntry({dev:(0,b.resolve)(import.meta.url,"../client/index.ts"),prod:(0,b.resolve)(import.meta.url,"../dist")})}N(O,"apply")});export default G();
