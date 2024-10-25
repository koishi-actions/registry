var D=Object.defineProperty;var H=Object.getOwnPropertyDescriptor;var U=Object.getOwnPropertyNames;var J=Object.prototype.hasOwnProperty;var N=(e,r)=>()=>(e&&(r=e(e=0)),r);var B=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var S=(e,r,c,m)=>{if(r&&typeof r=="object"||typeof r=="function")for(let u of U(r))!J.call(e,u)&&u!==c&&D(e,u,{get:()=>r[u],enumerable:!(m=H(r,u))||m.enumerable});return e},_=(e,r,c)=>(S(e,r,"default"),c&&S(c,r,"default"));var L=e=>S(D({},"__esModule",{value:!0}),e);import{Buffer as P}from"https://registry.koishi.chat/modules/buffer/index.js";import k from"https://registry.koishi.chat/modules/process/index.js";var x=N(()=>{});var h={};import*as ie from"https://registry.koishi.chat/modules/koishi/index.js";var I=N(()=>{x();_(h,ie)});var Z=B((ue,E)=>{x();var b=Object.defineProperty,R=Object.getOwnPropertyDescriptor,M=Object.getOwnPropertyNames,A=Object.prototype.hasOwnProperty,g=(e,r)=>b(e,"name",{value:r,configurable:!0}),F=(e,r)=>function(){return r||(0,e[M(e)[0]])((r={exports:{}}).exports,r),r.exports},G=(e,r)=>{for(var c in r)b(e,c,{get:r[c],enumerable:!0})},K=(e,r,c,m)=>{if(r&&typeof r=="object"||typeof r=="function")for(let u of M(r))!A.call(e,u)&&u!==c&&b(e,u,{get:()=>r[u],enumerable:!(m=R(r,u))||m.enumerable});return e},Q=e=>K(b({},"__esModule",{value:!0}),e),V=F({"external/common/packages/schedule/src/locales/zh-CN.yml"(e,r){r.exports={general:{days:["日","一","二","三","四","五","六"],everyday:"每天 {0}",everyweek:"每周{0} {1}",interval:"每隔 <i18n:time value={0}/> (剩余 <i18n:time value={1}/>)"},commands:{schedule:{description:"设置定时命令",options:{rest:"要执行的指令",interval:"设置触发的间隔秒数",list:"查看已经设置的日程",ensure:"错过时间也确保执行",full:"查找全部上下文",delete:"删除已经设置的日程"},messages:{context:"，上下文：{0}","context.private":"私聊 {user.id}","context.guild":"频道 {channel.id}","delete-success":"日程 {0} 已删除。","create-success":"日程已创建，编号为 {0}。","list-empty":"当前没有等待执行的日程。","command-expected":"请输入要执行的指令。","date-invalid":"请输入合法的日期。","date-invalid-suggestion":"请输入合法的日期。你要输入的是不是 {0}s？","date-expected":"请输入执行时间。","date-past":"不能指定过去的时间为执行时间。","interval-invalid":"请输入合法的时间间隔。","interval-too-short":"时间间隔过短。"}}}}}}),$={};G($,{Config:()=>Y,apply:()=>C,inject:()=>X,name:()=>W});E.exports=Q($);var s=(I(),L(h)),W="schedule",X=["database"],Y=s.Schema.object({minInterval:s.Schema.computed(s.Schema.natural().role("ms")).description("允许的最小时间间隔。").default(s.Time.minute)});function j(e){return`${s.Time.toDigits(e.getHours())}:${s.Time.toDigits(e.getMinutes())}`}g(j,"toHourMinute");function C(e,{minInterval:r}){let c=e.logger("schedule");e.i18n.define("zh-CN",V());function m(t,a,n){if(a){if(a===s.Time.day)return n.text("general.everyday",[j(t)]);if(a===s.Time.week)return n.text("general.everyweek",[n.text("general.days."+t.getDay()),j(t)]);{let i=Date.now();return n.text("general.interval",[a,+t<i?a-(i-+t)%a:+t-i])}}else return s.Time.template("yyyy-MM-dd hh:mm:ss",t)}g(m,"formatInterval"),e.model.extend("schedule",{id:"unsigned",assignee:"string",time:"timestamp",lastCall:"timestamp",interval:"integer",command:"text",event:"json"},{autoInc:!0});async function u(t){return(await e.database.get("schedule",[t])).length}g(u,"hasSchedule");async function w({id:t,interval:a,command:n,time:i,lastCall:o},p){let d=Date.now(),f=i.valueOf();async function l(){c.debug("execute %d: %c",t,n);try{await p.execute(n)}catch(y){c.warn(y)}!o||!a||(o=new Date,await e.database.set("schedule",t,{lastCall:o}))}if(g(l,"executeSchedule"),!a){if(f<d){e.database.remove("schedule",[t]),o&&l();return}return c.debug("prepare %d: %c at %s",t,n,i),e.setTimeout(async()=>{await u(t)&&(e.database.remove("schedule",[t]),l())},f-d)}c.debug("prepare %d: %c from %s every %s",t,n,i,s.Time.format(a));let v=f<d?a-(d-f)%a:f-d;return o&&v+d-a>+o&&l(),e.setTimeout(async()=>{if(!await u(t))return;let y=e.setInterval(async()=>{if(!await u(t))return y();l()},a);l()},v)}g(w,"prepareSchedule"),e.on("ready",async()=>{let t=await e.database.get("schedule",{}),a={};t.forEach(n=>{let{event:i,assignee:o}=n;if(!i)return;let p=e.bots[o];p?w(n,p.session(i)):(a[o]||(a[o]=[])).push(n)}),e.on("bot-status-updated",n=>{if(n.status!==s.Universal.Status.ONLINE)return;let i=a[n.sid];i&&(delete a[n.sid],i.forEach(o=>{w(o,n.session(o.event))}))})}),e.command("schedule [time]",{authority:3,checkUnknown:!0}).option("rest","-- <command:text>").option("interval","/ <interval:string>",{authority:4}).option("list","-l").option("ensure","-e").option("full","-f",{authority:4}).option("delete","-d <id:number>").action(async({session:t,options:a},...n)=>{if(a.delete)return await e.database.remove("schedule",[a.delete]),t.text(".delete-success",[a.delete]);if(a.list){let l=await e.database.get("schedule",{assignee:[t.sid]});return l=l.filter(v=>v.event),a.full||(l=l.filter(v=>t.channelId===v.event.channel.id)),l.length?l.map(({id:v,time:y,interval:q,command:z,event:T})=>{let O=`${v}. ${m(y,q,t)}：${z}`;return a.full&&(O+=t.text(".context",[T.channel.type===s.Universal.Channel.Type.DIRECT?t.text(".context.private",T):t.text(".context.guild",T)])),O}).join(`
`):t.text(".list-empty")}if(!a.rest)return t.text(".command-expected");let i=n.join("-"),o=s.Time.parseDate(i),p=+o;if(Number.isNaN(p)||p>2147483647e3)return/^\d+$/.test(i)?t.text(".date-invalid-suggestion",[i]):t.text(".date-invalid");if(!a.interval)if(i){if(p<=Date.now())return t.text(".date-past")}else return t.text(".date-expected");let d=s.Time.parseTime(a.interval);if(!d&&a.interval)return t.text(".interval-invalid");if(d&&d<t.resolve(r))return t.text(".interval-too-short");let f=await e.database.create("schedule",{time:o,assignee:t.sid,interval:d,command:a.rest,event:t.event});return w(f,t),t.text(".create-success",[f.id])})}g(C,"apply")});export default Z();
