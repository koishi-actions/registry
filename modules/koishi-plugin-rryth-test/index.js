var y=Object.defineProperty;var F=Object.getOwnPropertyDescriptor;var L=Object.getOwnPropertyNames;var N=Object.prototype.hasOwnProperty;var h=(r,e)=>()=>(r&&(e=r(r=0)),e);var U=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var l=(r,e,a,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let t of L(e))!N.call(r,t)&&t!==a&&y(r,t,{get:()=>e[t],enumerable:!(o=F(e,t))||o.enumerable});return r},n=(r,e,a)=>(l(r,e,"default"),a&&l(a,e,"default"));var x=r=>l(y({},"__esModule",{value:!0}),r);import{Buffer as u}from"https://registry.koishi.chat/modules/buffer/index.js";import g from"https://registry.koishi.chat/modules/process/index.js";var i=h(()=>{});var p={};import*as W from"https://registry.koishi.chat/modules/koishi/index.js";var v=h(()=>{i();n(p,W)});var s={};import*as Z from"https://registry.koishi.chat/modules/@satorijs/element/jsx-runtime/index.js";var w=h(()=>{i();n(s,Z)});var H=U(($,P)=>{i();var m=Object.defineProperty,X=Object.getOwnPropertyDescriptor,B=Object.getOwnPropertyNames,J=Object.prototype.hasOwnProperty,_=(r,e)=>m(r,"name",{value:e,configurable:!0}),M=(r,e)=>{for(var a in e)m(r,a,{get:e[a],enumerable:!0})},z=(r,e,a,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let t of B(e))!J.call(r,t)&&t!==a&&m(r,t,{get:()=>e[t],enumerable:!(o=X(e,t))||o.enumerable});return r},A=r=>z(m({},"__esModule",{value:!0}),r),j={};M(j,{Config:()=>G,apply:()=>O,name:()=>E});P.exports=A(j);var d=(v(),x(p)),f=(w(),x(s)),E="rryth-test";function O(r,e){let a=_(o=>+o&-64,"resolution");r.command("rryth-test <prompt:text>","人人有图画测试服 v0.0.7").usage(`这里会不定期更新一些有意思的功能，也随时会关闭服务
这次的是 FLUX，它好像啥风格都能画。rt 为原版、rtx 为竖版、rta 为动漫风格。`).example("rta -x 2333 1girl").alias("rt",{options:{width:768,height:512}}).alias("rtx",{options:{width:512,height:768}}).alias("rta",{options:{width:512,height:768},args:["anime"]}).option("seed","-x <seed:number> 种子").option("width","-w <width:number> 宽",{fallback:768,type:a}).option("height","-g <height:number> 高",{fallback:512,type:a}).action(async({session:o,options:t},...k)=>{let b=k.join(", ");if(!b)return o.execute("help rt");let C={prompt:b,...t},S=await _(async q=>{let{images:D}=await r.http.post("https://rr.elchapo.cn",q,{headers:{api:"FLUX.0"}}).catch(c=>r.logger.error(c));return D.map(c=>e.censor?(0,f.jsx)("censor",{children:(0,f.jsx)("img",{src:"data:image/png;base64,"+c})}):(0,f.jsx)("img",{src:"data:image/png;base64,"+c}))},"rr")(C);o.send(S)})}_(O,"apply");var G=d.Schema.object({censor:d.Schema.boolean().description("是否启用图像审查。").default(!1),batch:d.Schema.number().description("默认出图数量。").default(1).max(4).min(1).role("slider").disabled().hidden()})});export default H();
