var h=Object.defineProperty;var L=Object.getOwnPropertyDescriptor;var S=Object.getOwnPropertyNames;var _=Object.prototype.hasOwnProperty;var g=(e,a)=>()=>(e&&(a=e(e=0)),a);var v=(e,a)=>()=>(a||e((a={exports:{}}).exports,a),a.exports);var d=(e,a,t,r)=>{if(a&&typeof a=="object"||typeof a=="function")for(let n of S(a))!_.call(e,n)&&n!==t&&h(e,n,{get:()=>a[n],enumerable:!(r=L(a,n))||r.enumerable});return e},u=(e,a,t)=>(d(e,a,"default"),t&&d(t,a,"default"));var E=e=>d(h({},"__esModule",{value:!0}),e);import{Buffer as b}from"https://registry.koishi.chat/modules/buffer/index.js";import y from"https://registry.koishi.chat/modules/process/index.js";var m=g(()=>{});var c={};import*as U from"https://registry.koishi.chat/modules/koishi/index.js";var w=g(()=>{m();u(c,U)});var J=v(o=>{m();Object.defineProperty(o,"__esModule",{value:!0});o.apply=o.schema=o.usage=o.name=void 0;var j=(w(),E(c));o.name="recipe";o.usage="这个插件用于提供每日菜单";o.schema=j.Schema.object({json_url:j.Schema.string().default("https://git.yka.moe/yun/recipe-source/raw/branch/main/default.json")});async function R(e,a){let t=a.json_url.toString(),r=new Map,n=await e.http.get(t).catch(()=>{throw new Error("获取json文件失败")});n.data.forEach(l=>r.set(l.name,l.name));let s=k(n),f=A(s,n);e.command("recipe").option("label","-l [label]").action(async({session:l,options:i})=>{if(i.label!=null)await l.send(i.label==""?s.join(`
`):M(f.get(i.label)));else{let p=I(r);await l.send(p.toString())}}),f.forEach((l,i)=>{e.command("recipe/"+i).action(async({session:p})=>{await p.send(M(l))})})}o.apply=R;function k(e){let a=[];return e.data.map(t=>{a.push(...t.label)}),Array.from(new Set(a))}function A(e,a){let t=new Map;return e.forEach(r=>{let n=a.data.map(s=>{if(s.label.includes(r))return s.name});t.set(r,n.filter(s=>s!==void 0))}),t}var I=e=>e.get([...e.keys()][Math.floor(Math.random()*e.size)]),M=e=>e[Math.floor(Math.random()*e.length)]});export default J();