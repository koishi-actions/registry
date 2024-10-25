import{Buffer as S}from"https://registry.koishi.chat/modules/buffer/index.js";import j from"https://registry.koishi.chat/modules/process/index.js";import{camelize as A,capitalize as E,Context as l,Schema as k}from"https://registry.koishi.chat/modules/koishi/index.js";import{DataService as w}from"https://registry.koishi.chat/modules/@koishijs/console/index.js";import"https://registry.koishi.chat/modules/@cordiverse/path/index.js";var x=Object.defineProperty,i=(e,n)=>x(e,"name",{value:n,configurable:!0});function I(e){return E(A(e))}i(I,"format");function O(e){return e?!e.name||e.name==="apply"?"Anonymous":I(e.name):"App"}i(O,"getName");function p(e){let{state:n}=e.parent;return n.runtime.isForkable?n.uid:n.runtime.uid}i(p,"getSourceId");var m=class extends w{static{i(this,"Insight")}constructor(e){super(e,"insight"),e.console.addEntry(["https://registry.koishi.chat/modules/@koishijs/plugin-insight/dist/index.js","https://registry.koishi.chat/modules/@koishijs/plugin-insight/dist/style.css"]);let n=e.debounce(()=>this.refresh(),0);e.on("internal/fork",n),e.on("internal/runtime",n),e.on("internal/service",n),e.on("internal/status",n)}async get(){let e=[],n=[],g={};for(let[s,{type:u}]of Object.entries(this.ctx.root[l.internal])){if(u!=="service")continue;let c=this.ctx.get(s);if(!(c instanceof Object))continue;let o=Reflect.getOwnPropertyDescriptor(c,l.current)?.value;o?.scope.uid&&(g[o.scope.uid]||=[]).push(s)}for(let s of this.ctx.registry.values()){let u=function(t){return!0},c=function(t){let{uid:r,key:a,disposables:d,status:_}=t,f=d.length,y={uid:r,name:v,weight:f,status:_,isGroup:v==="Group",isRoot:r===0,services:g[r]};a&&(y.name+=` [${a}]`),e.push(y)},o=function(t,r,a){n.push({type:t,source:r,target:a})};i(u,"isActive"),i(c,"addNode"),i(o,"addEdge");let v=O(s.plugin),h=i(t=>{for(let[r,a]of Object.entries(s.inject)){if(!a.required)continue;let d=this.ctx.get(r);if(!(d instanceof Object))continue;let f=Reflect.getOwnPropertyDescriptor(d,l.current)?.value?.state.uid;f&&o("dashed",f,t.uid)}},"addDeps"),b=s.plugin?.reusable;if(!b){if(!u(s))continue;c(s),h(s)}for(let t of s.children)if(s.isForkable){if(!u(t))continue;c(t),o("solid",p(t),t.uid),b?h(t):o("solid",t.uid,s.uid)}else e[e.length-1].weight+=t.disposables.length,o("solid",p(t),s.uid)}return{nodes:e,edges:n}}};(e=>{e.Config=k.object({})})(m||(m={}));var C=m;export{C as default};
