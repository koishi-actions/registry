var f=Object.defineProperty;var b=Object.getOwnPropertyDescriptor;var j=Object.getOwnPropertyNames;var v=Object.prototype.hasOwnProperty;var l=(n,t)=>()=>(n&&(t=n(n=0)),t);var _=(n,t)=>()=>(t||n((t={exports:{}}).exports,t),t.exports);var u=(n,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of j(t))!v.call(n,o)&&o!==r&&f(n,o,{get:()=>t[o],enumerable:!(a=b(t,o))||a.enumerable});return n},s=(n,t,r)=>(u(n,t,"default"),r&&u(r,t,"default"));var k=n=>u(f({},"__esModule",{value:!0}),n);import{Buffer as m}from"https://registry.koishi.chat/modules/buffer/index.js";import d from"https://registry.koishi.chat/modules/process/index.js";var p=l(()=>{});var e={};import*as A from"https://registry.koishi.chat/modules/koishi/index.js";var g=l(()=>{p();s(e,A)});var P=_(i=>{p();Object.defineProperty(i,"__esModule",{value:!0});i.apply=i.Config=i.name=void 0;var h=(g(),k(e));i.name="abbr";i.Config=h.Schema.object({endpoint:h.Schema.string().role("link").default("https://lab.magiconch.com/api/nbnhhsh/guess").description("API 地址。")});function x(n){return n.trans?n.trans.join(", "):n.inputting?n.inputting.join(", "):"未找到对应的缩写。"}function C(n,t){n.command("abbr <text:text>","中文缩写查询").action(async(r,a)=>{if(!a)return"请输入文本。";let o=await n.http.post(t.endpoint,{text:a});return o?.length?o.map(c=>`${c.name}：${x(c)}`).join(`
`):"未提取到输入文本。"})}i.apply=C});export default P();
