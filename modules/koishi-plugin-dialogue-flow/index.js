var S=Object.defineProperty;var $=Object.getOwnPropertyDescriptor;var q=Object.getOwnPropertyNames;var M=Object.prototype.hasOwnProperty;var w=(s,t)=>()=>(s&&(t=s(s=0)),t);var A=(s,t)=>()=>(t||s((t={exports:{}}).exports,t),t.exports);var y=(s,t,d,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let e of q(t))!M.call(s,e)&&e!==d&&S(s,e,{get:()=>t[e],enumerable:!(o=$(t,e))||o.enumerable});return s},l=(s,t,d)=>(y(s,t,"default"),d&&y(d,t,"default"));var b=s=>y(S({},"__esModule",{value:!0}),s);import{Buffer as P}from"https://registry.koishi.chat/modules/buffer/index.js";import O from"https://registry.koishi.chat/modules/process/index.js";var m=w(()=>{});var h={};import*as Y from"https://registry.koishi.chat/modules/koishi/index.js";var T=w(()=>{m();l(h,Y)});var v={};import*as ee from"https://registry.koishi.chat/modules/koishi-plugin-dialogue/index.js";var j=w(()=>{m();l(v,ee)});var H=A((oe,z)=>{m();var _=Object.defineProperty,G=Object.getOwnPropertyDescriptor,D=Object.getOwnPropertyNames,L=Object.prototype.hasOwnProperty,R=(s,t)=>_(s,"name",{value:t,configurable:!0}),U=(s,t)=>function(){return t||(0,s[D(s)[0]])((t={exports:{}}).exports,t),t.exports},C=(s,t)=>{for(var d in t)_(s,d,{get:t[d],enumerable:!0})},F=(s,t,d,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let e of D(t))!L.call(s,e)&&e!==d&&_(s,e,{get:()=>t[e],enumerable:!(o=G(t,e))||o.enumerable});return s},I=s=>F(_({},"__esModule",{value:!0}),s),J=U({"plugins/dialogue/packages/flow/src/locales/zh.yml"(s,t){t.exports={commands:{teach:{options:{setPred:"设置前置问题",addPred:"添加前置问题",setSucc:"设置后置问题",addSucc:"添加后置问题",createSuccessor:"创建并添加后继问答",successorTimeout:"设置允许触发后继的时间","context.true":"允许后继问答被任何人触发","context.false":"后继问答只能被同一人触发"},messages:{flowgraph:{"not-found":"没有搜索到任何问答。",detail:{"context-mode":"后继问答可以被上下文内任何人触发",timeout:"可触发后继时间：<i18n:time value={successorTimeout}/>",predecessors:"前置问答：",successors:"后继问答："},abstract:{"has-pred":"存在前置","context-mode":"上下文后置"}}}}}}}}),x={};C(x,{apply:()=>k,name:()=>N,using:()=>B});z.exports=I(x);var p=(T(),b(h)),f=(j(),b(v)),N="koishi-plugin-dialogue-flow",B=["dialogue"];function k(s,t){s.i18n.define("zh",J()),s.model.extend("dialogue",{predecessors:"list(255)",successorTimeout:"unsigned"}),s.on("dialogue/usage",o=>{o.add(`前置与后继：
　设置前置问题：　< id
　添加前置问题：　<< id
　设置后继问题：　> id
　添加后继问题：　>> id
　上下文触发后继：-c/-C
　前置生效时间：　-z secs
　创建新问答并作为后继：>#`,200)});let{successorTimeout:d=2e4}=t;s.command("teach").option("setPred","< <ids:string>",{type:f.RE_DIALOGUES}).option("addPred","<< <ids:string>",{type:f.RE_DIALOGUES}).option("setSucc","> <ids:string>",{type:f.RE_DIALOGUES}).option("addSucc",">> <ids:string>",{type:f.RE_DIALOGUES}).option("createSuccessor","># <op:text>").option("successorTimeout","-z [time:posint]").option("context","-c").option("context","-C",{value:!1}).before(o=>{let{options:e,session:r}=o;if("setPred"in e){if("addPred"in e)return r.text(".options-conflict",["--set-pred, --add-pred"]);(0,p.defineProperty)(e,"predecessors",(0,f.split)(e.setPred)),(0,p.defineProperty)(e,"predOverwrite",!0)}else"addPred"in e&&((0,p.defineProperty)(e,"predecessors",(0,f.split)(e.addPred)),(0,p.defineProperty)(e,"predOverwrite",!1));if("setSucc"in e){if("addSucc"in e)return r.text(".options-conflict",["--set-succ, --add-succ"]);(0,p.defineProperty)(e,"successors",(0,f.split)(e.setSucc)),(0,p.defineProperty)(e,"succOverwrite",!0)}else"addSucc"in e&&((0,p.defineProperty)(e,"successors",(0,f.split)(e.addSucc)),(0,p.defineProperty)(e,"succOverwrite",!1));e.action==="remove"&&((0,p.defineProperty)(e,"successors",[]),(0,p.defineProperty)(e,"succOverwrite",!0))}),s.dialogue.flag("context"),s.on("dialogue/modify",(o,e)=>{let{predOverwrite:r,predecessors:i}=o.argv.options;e.predecessors||(e.predecessors=[]),i&&(r?(0,f.equal)(e.predecessors,i)||(e.predecessors=i.map(String)):(0,p.contain)(e.predecessors,i)||(e.predecessors=(0,p.union)(e.predecessors,i.map(String))))}),s.on("dialogue/modify",(o,e)=>{let{options:r}=o.argv;r.successorTimeout&&(e.successorTimeout=r.successorTimeout*1e3)}),s.on("dialogue/after-modify",async o=>{let{succOverwrite:e,successors:r,dialogues:i}=o.argv.options;if(!r)return;let a=i.map(c=>""+c.id),n=await s.dialogue.get(r),u=n.map(c=>c.id);if(o.argv.options.unknown=(0,p.difference)(r,u),e)for(let c of await s.dialogue.get({predecessors:a}))u.includes(c.id)||(u.push(c.id),n.push(c));let g=(0,f.prepareTargets)(o,n);for(let c of g)r.includes(c.id)?(0,p.contain)(c.predecessors,a)||(c.predecessors=(0,p.union)(c.predecessors,a)):c.predecessors=(0,p.difference)(c.predecessors,a);await s.dialogue.update(g,o)}),s.on("dialogue/after-modify",async o=>{let{createSuccessor:e,dialogues:r}=o.argv.options;if(!e)return;if(!r.length)return o.send(o.text(".flowgraph.not-found"));let i=s.command("teach"),a={...i.parse(e),session:o,command:i},n=a.options.setPred=r.map(u=>u.id).join(",");a.source=`# ${e} < ${n}`,await i.execute(o.argv)}),s.before("dialogue/detail",async o=>{let{action:e,dialogues:r}=o.argv.options;if(e==="modify")return;let i=new Set;for(let n of r)for(let u of n.predecessors)i.add(+u);let a={};for(let n of await s.dialogue.get([...i]))a[n.id]=n;for(let n of r){let u=n.predecessors.map(g=>a[g]);Object.defineProperty(n,"_predecessors",{writable:!0,value:u})}}),s.on("dialogue/detail",(o,e,r)=>{o.flag&f.Dialogue.Flag.context&&e.add(r.text(".flowgraph.detail.context-mode"),300),(o.successorTimeout||d)!==d&&e.add(r.text(".flowgraph.detail.timeout",o),300),o._predecessors.length&&e.add([r.text(".flowgraph.detail.predecessors"),...s.dialogue.list(r,o._predecessors)].join(`
`),300),o._successors.length&&e.add([r.text(".flowgraph.detail.successors"),...s.dialogue.list(r,o._successors)].join(`
`),300)}),s.on("dialogue/abstract",(o,e,r)=>{(o.successorTimeout||d)!==d&&e.push(`z=${o.successorTimeout/1e3}`),o.predecessors.length&&e.push(r.text(".flowgraph.abstract.has-pred")),o.flag&f.Dialogue.Flag.context&&e.push(r.text(".flowgraph.abstract.context-mode"))}),s.on("dialogue/search",async(o,e,r)=>{var i;let{options:a}=o.argv,n=a.dialogueMap||(a.dialogueMap={}),u=r.filter(c=>{if(!c._successors)return n[c.id]=c,Object.defineProperty(c,"_successors",{writable:!0,value:[]}),!0}).map(c=>c.id);if(!u.length)return;let g=(await s.dialogue.get({...e,question:void 0,answer:void 0,predecessors:u})).filter(c=>!Object.keys(n).includes(""+c.id));for(let c of g)for(let E of c.predecessors)(i=n[E])==null||i._successors.push(c);await s.parallel("dialogue/search",o,e,g)}),s.on("dialogue/appendix",({_successors:o},e,r,i)=>{o&&e.push(...i.app.dialogue.list(i,o,r+"> "))}),s.on("dialogue/state",o=>{o.predecessors={}}),s.on("dialogue/receive",({test:o,predecessors:e,userId:r})=>{o.stateful=!0,o.predecessors=Object.keys({...e[0],...e[r]})}),s.on("dialogue/prepare",({dialogues:o,isSearch:e})=>{if(e)for(let r of o)r.predecessors.length&&(r._weight=0);else if(o.some(r=>r.predecessors.length))for(let r of o)r.predecessors.length||(r._weight=0)}),s.before("dialogue/send",({dialogue:o,predecessors:e,userId:r})=>{let i=Date.now();o.flag&f.Dialogue.Flag.context&&(r="");let a=e[r]||(e[r]={});for(let n of o.predecessors)delete a[n];a[o.id]=i,setTimeout(()=>{a[o.id]===i&&delete a[o.id]},o.successorTimeout||d)}),s.on("dialogue/query",({predecessors:o,stateful:e,noRecursive:r},i)=>{if(r)i.predecessors={$size:0};else if(o!==void 0){let a=o.map(u=>u.toString()),n=[];e&&n.push({predecessors:{$size:0}}),a.length&&n.push({predecessors:{$el:a}}),n.length&&i.$and.push({$or:n})}})}R(k,"apply")});export default H();
