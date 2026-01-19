var p=Object.defineProperty;var _=Object.getOwnPropertyDescriptor;var x=Object.getOwnPropertyNames;var l=Object.prototype.hasOwnProperty;var m=(t,e)=>()=>(t&&(e=t(t=0)),e);var h=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var i=(t,e,o,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of x(e))!l.call(t,r)&&r!==o&&p(t,r,{get:()=>e[r],enumerable:!(s=_(e,r))||s.enumerable});return t},n=(t,e,o)=>(i(t,e,"default"),o&&i(o,e,"default"));var g=t=>i(p({},"__esModule",{value:!0}),t);import{Buffer}from"https://registry.koishi.chat/modules/buffer/index.js";import process from"https://registry.koishi.chat/modules/process/index.js";var c=m(()=>{});var a={};import*as b from"https://registry.koishi.chat/modules/koishi/index.js";var u=m(()=>{c();n(a,b)});var f=h((exports,module)=>{c();var __defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__getOwnPropNames=Object.getOwnPropertyNames,__hasOwnProp=Object.prototype.hasOwnProperty,__name=(t,e)=>__defProp(t,"name",{value:e,configurable:!0}),__export=(t,e)=>{for(var o in e)__defProp(t,o,{get:e[o],enumerable:!0})},__copyProps=(t,e,o,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of __getOwnPropNames(e))!__hasOwnProp.call(t,r)&&r!==o&&__defProp(t,r,{get:()=>e[r],enumerable:!(s=__getOwnPropDesc(e,r))||s.enumerable});return t},__toCommonJS=t=>__copyProps(__defProp({},"__esModule",{value:!0}),t),src_exports={};__export(src_exports,{Config:()=>Config,apply:()=>apply,command:()=>command,name:()=>name,usage:()=>usage});module.exports=__toCommonJS(src_exports);var import_koishi=(u(),g(a)),name="simplecmd",usage=`
## 使用说明
match可为正则表达式或者文本、execute以#开头则发送纯文本不执行命令
eg.  
match: "ece"  
execute: "echo -E"  
发送文本ece <at id="xxxxx"/>则执行echo -E <at id="xxxxx"/>
eg.  
match: "/awa/gi"  
execute: "#qwq"  
发送含有awa(不区分大小写)的文本就恢复qwq，而不执行命令

## 注意
1. 匹配名称不建议与命令名称相同，否则可能导致指令无法使用
2. 如果match为正则表达式，则只能执行execute内的内容，不可包含命令参数
3. 但是如果match为纯文本，则可以加其他参数
如: 
match: "ai", excute: "ai -A",发送“ai 你好”则执行“ai -A 你好”
match: "/qwq/gi", excute: "qwq -a",发送“你好qwq”则执行“qwq -a”

## 正则表达式教程
[Runoob教程-正则表达式](https://www.runoob.com/regexp/regexp-syntax.html)
`,command=import_koishi.Schema.object({match:import_koishi.Schema.string().description("需要匹配的字符串/表达式"),execute:import_koishi.Schema.string().description("执行的命令/发送消息")}),Config=import_koishi.Schema.object({rules:import_koishi.Schema.array(command).description("匹配规则").role("table").collapse()});function apply(ctx,cfg){ctx.on("message",async session=>{for(let rule of cfg.rules){if(!rule.match)return;var exp=isRegex(rule.match);if(exp&&session.content.match(eval(rule.match)))rule.execute.startsWith("#")?session.send(rule.execute.replace("#","")):session.execute(rule.execute);else if(!exp&&session.content.startsWith(rule.match))rule.execute.startsWith("#")?session.send(rule.execute.replace("#","")):session.execute(session.content.replace(rule.match,rule.execute));else return}})}__name(apply,"apply");function isRegex(str){try{let result=eval(str);return result instanceof RegExp}catch(t){return!1}}__name(isRegex,"isRegex")});export default f();
