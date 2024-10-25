var y=Object.defineProperty;var L=Object.getOwnPropertyDescriptor;var S=Object.getOwnPropertyNames;var _=Object.prototype.hasOwnProperty;var j=(t,e)=>()=>(t&&(e=t(t=0)),e);var v=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var f=(t,e,o,a)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of S(e))!_.call(t,r)&&r!==o&&y(t,r,{get:()=>e[r],enumerable:!(a=L(e,r))||a.enumerable});return t},u=(t,e,o)=>(f(t,e,"default"),o&&f(o,e,"default"));var w=t=>f(y({},"__esModule",{value:!0}),t);import{Buffer as m}from"https://registry.koishi.chat/modules/buffer/index.js";import h from"https://registry.koishi.chat/modules/process/index.js";var i=j(()=>{});var p={};import*as C from"https://registry.koishi.chat/modules/koishi/index.js";var A=j(()=>{i();u(p,C)});var k=v(g=>{"use strict";i();Object.defineProperty(g,"__esModule",{value:!0});g.LANGUAGES=void 0;g.LANGUAGES=[["assembly","asm"],["ats","dats"],["bash","sh"],["c","c"],["clojure","clj"],["cobol","cob"],["coffeescript","coffee"],["cpp","cpp"],["crystal","cr"],["csharp","cs"],["d","d"],["elixir","ex"],["elm","elm"],["erlang","erl"],["fsharp","fs"],["go","go"],["groovy","groovy"],["hare","hare"],["haskell","hs"],["idris","idr"],["java","java"],["javascript","js"],["julia","jl"],["kotlin","kt"],["lua","lua"],["mercury","m"],["nim","nim"],["nix","nix"],["ocaml","ml"],["perl","pl"],["php","php"],["python","py"],["raku","raku"],["ruby","rb"],["rust","rs"],["sac","sac"],["scala","scala"],["swift","swift"],["typescript","ts"],["zig","zig"]]});var U=v(s=>{i();Object.defineProperty(s,"__esModule",{value:!0});s.apply=s.name=s.Config=void 0;var l=(A(),w(p)),b=k(),$=new l.Logger("glot"),E="https://glot.io/api";async function N(t,e,o,a,r){try{let n={files:[{name:o,content:a}]};return r&&(n.stdin=r),await t.post(`/run/${e}/latest`,n)}catch(n){return $.error(n),null}}s.Config=l.Schema.object({apiToken:l.Schema.string().description("申请到的 API 令牌。"),defaultLanguage:l.Schema.string().default("javascript").description("默认的执行语言。")});s.name="glot";function T(t,e){let o=t.http.extend({endpoint:E,headers:{Authorization:`Token ${e.apiToken}`}});t.command("glot <code:rawtext>","运行代码").usage(`由 glot.io 提供的代码运行
支持的语言: ${b.LANGUAGES.map(a=>a[0]).join(", ")}`).option("language","-l <language:string>").option("stdin","-s <stdin:string>").example("glot console.log('Hello World!')").action(async({options:a},r)=>{var n;let G=(n=a.language)!==null&&n!==void 0?n:e.defaultLanguage,d=b.LANGUAGES.find(x=>x[0]===G);if(!d)return"不支持的语言。";if(!r)return"请输入代码。";let c=await N(o,d[0],`koishi.${d[1]}`,r,a.stdin);return c?c.error?`运行出错: ${l.h.escape(c.error)}
${l.h.escape(c.stderr)}`:l.h.escape(c.stdout+c.stderr):"请求出错。"})}s.apply=T});export default U();