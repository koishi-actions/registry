import{Buffer as l}from"https://registry.koishi.chat/modules/buffer/index.js";import d from"https://registry.koishi.chat/modules/process/index.js";import{Service as p,valueMap as f}from"https://registry.koishi.chat/modules/koishi/index.js";import{Service as y}from"https://registry.koishi.chat/modules/koishi/index.js";import{coerce as m,Context as x,Logger as b,Random as w}from"https://registry.koishi.chat/modules/koishi/index.js";var u=Object.defineProperty,i=(e,t)=>u(e,"name",{value:t,configurable:!0}),o=class extends y{constructor(e,t,s={}){super(e,`console.services.${t}`,s.immediate),this.ctx=e,this.key=t,this.options=s}static{i(this,"DataService")}static filter=!1;static inject=["console"];async get(e,t){return null}start(){this.refresh()}async refresh(e=!0){this.ctx.get("console")?.broadcast("data",async t=>({key:this.key,value:await this.get(e,t)}),this.options)}patch(e){this.ctx.get("console")?.broadcast("patch",{key:this.key,value:e},this.options)}},v=class extends o{static{i(this,"SchemaProvider")}constructor(e){super(e,"schema",{immediate:!0}),e.on("internal/schema",()=>this.refresh())}async get(){return this.ctx.schema._data}},g=class extends o{static{i(this,"PermissionProvider")}constructor(e){super(e,"permissions",{immediate:!0}),e.on("internal/permission",()=>this.refresh())}async get(){return this.ctx.permissions.list()}},a=new b("console"),S=class{constructor(e,t,s){this.ctx=e,this.socket=t,this.request=s,t.addEventListener("message",this.receive),e.on("dispose",()=>{t.removeEventListener("message",this.receive)}),this.refresh()}static{i(this,"Client")}id=w.id();send(e){this.socket.send(JSON.stringify(e))}receive=i(async e=>{let{type:t,args:s,id:r}=JSON.parse(e.data.toString()),n=this.ctx.get("console").listeners[t];if(!n)return a.info("unknown message:",t,...s),this.send({type:"response",body:{id:r,error:"not implemented"}});if(await this.ctx.serial("console/intercept",this,n))return this.send({type:"response",body:{id:r,error:"unauthorized"}});try{let c=await n.callback.call(this,...s);return this.send({type:"response",body:{id:r,value:c}})}catch(c){a.debug(c);let h=m(c);return this.send({type:"response",body:{id:r,error:h}})}},"receive");refresh(){Object.keys(this.ctx.root[x.internal]).forEach(async e=>{if(!e.startsWith("console.services."))return;let t=e.slice(17),s=this.ctx.get(e);if(s){if(await this.ctx.serial("console/intercept",this,s.options))return this.send({type:"data",body:{key:t,value:null}});try{let r=await s.get(!1,this);if(!r)return;this.send({type:"data",body:{key:t,value:r}})}catch(r){a.warn(r)}}})}},P=class{constructor(e,t,s){this.ctx=e,this.files=t,this.data=s,e.console.entries[this.id]=this,e.console.refresh("entry"),this.dispose=e.collect("entry",()=>{delete this.ctx.console.entries[this.id],e.console.refresh("entry")})}static{i(this,"Entry")}id=Math.random().toString(36).slice(2);dispose;refresh(){this.ctx.console.broadcast("entry-data",async e=>({id:this.id,data:await this.data(e)}))}},j=class extends o{static{i(this,"EntryProvider")}static inject=[];constructor(e){super(e,"entry",{immediate:!0})}async get(e,t){return this.ctx.get("console").get(t)}},E=class extends p{constructor(e){super(e,"console",!0),this.ctx=e,e.plugin(j),e.plugin(v),e.plugin(g),this.addListener("ping",()=>"pong")}static{i(this,"Console")}static filter=!1;static inject={optional:["console"]};id=Math.random().toString(36).slice(2);entries=Object.create(null);listeners=Object.create(null);clients=Object.create(null);services=new Proxy({},{get:i((e,t,s)=>typeof t=="symbol"?Reflect.get(e,t,s):this.ctx.get(`console.services.${t}`),"get"),set:i((e,t,s,r)=>!1,"set")});accept(e,t){let s=new S(this.ctx,e,t);e.addEventListener("close",()=>{delete this.clients[s.id],this.ctx.emit("console/connection",s)}),this.clients[s.id]=s,this.ctx.emit("console/connection",s)}async get(e){let t=f(this.entries,({files:s,ctx:r,data:n},c)=>({files:this.resolveEntry(s,c),paths:this.ctx.get("loader")?.paths(r.scope),data:n?.(e)}));return t._id=this.id,t}addEntry(e,t){return new P(this.ctx,e,t)}addListener(e,t,s){this.listeners[e]={callback:t,...s}}async broadcast(e,t,s={}){Object.values(this.clients).length&&await Promise.all(Object.values(this.clients).map(async n=>{if(await this.ctx.serial("console/intercept",n,s))return;let c={type:e,body:t};typeof t=="function"&&(c.body=await t(n)),n.socket.send(JSON.stringify(c))}))}refresh(e){return this.ctx.get(`console.services.${e}`)?.refresh()}patch(e,t){return this.ctx.get(`console.services.${e}`)?.patch(t)}},J=E;export{S as Client,E as Console,o as DataService,P as Entry,j as EntryProvider,J as default};
