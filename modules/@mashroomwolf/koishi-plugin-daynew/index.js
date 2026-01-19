var b=Object.defineProperty;var j=Object.getOwnPropertyDescriptor;var O=Object.getOwnPropertyNames;var T=Object.prototype.hasOwnProperty;var h=(t,e)=>()=>(t&&(e=t(t=0)),e);var k=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var d=(t,e,n,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of O(e))!T.call(t,r)&&r!==n&&b(t,r,{get:()=>e[r],enumerable:!(o=j(e,r))||o.enumerable});return t},p=(t,e,n)=>(d(t,e,"default"),n&&d(n,e,"default"));var P=t=>d(b({},"__esModule",{value:!0}),t);import{Buffer as w}from"https://registry.koishi.chat/modules/buffer/index.js";import y from"https://registry.koishi.chat/modules/process/index.js";var i=h(()=>{});var s={};import*as H from"https://registry.koishi.chat/modules/koishi/index.js";var f=h(()=>{i();p(s,H)});var U=k((I,S)=>{i();var c=Object.defineProperty,x=Object.getOwnPropertyDescriptor,M=Object.getOwnPropertyNames,N=Object.prototype.hasOwnProperty,l=(t,e)=>c(t,"name",{value:e,configurable:!0}),q=(t,e)=>{for(var n in e)c(t,n,{get:e[n],enumerable:!0})},C=(t,e,n,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of M(e))!N.call(t,r)&&r!==n&&c(t,r,{get:()=>e[r],enumerable:!(o=x(e,r))||o.enumerable});return t},D=t=>C(c({},"__esModule",{value:!0}),t),_={};q(_,{Config:()=>J,apply:()=>$,inject:()=>L,name:()=>F,usage:()=>B});S.exports=D(_);var a=(f(),P(s)),F="daily-news",L={required:["cron","database"],optional:["adapter-onebot"]},B=`
<h1>每日新闻</h1>

<p>目前仅测试了 <b>Onebot</b> 协议</p>

<p>仓库地址：<a href="https://github.com/snowwolfair/daynew">https://github.com/snowwolfair/daynew</a></p>

<p style="color: #f39c12;">插件使用问题 / Bug反馈 请发 issue</p>


<h2>食用方法</h2>

<p>在 <b>发送信息配置</b> 中 <b style="color: #08b402ff;">添加项目</b>, 然后输入机器人所在群号即可</p>
<p>若需要发送到多个群，可以继续添加项目</p>
<hr>
<p>本项目注册了一个名为 <b style="color: #f70404ff;">daily</b> 的命令，和定时任务发出的信息一样</p>
<p>若不需要该命令，请在 <b style="color: #08b402ff;">指令管理</b> 中关闭</p>
`,J=a.Schema.intersect([a.Schema.object({daynews:a.Schema.boolean().default(!0).description("是否发送每日新闻"),sendTime:a.Schema.object({week:a.Schema.number().default(0).description("发送时间-星期几(0-7, 0 表示每天)").min(0).max(7).step(1),month:a.Schema.number().default(0).description("发送时间-哪个月(0-12, 0 表示每个月)").min(0).max(12).step(1),day:a.Schema.number().default(0).description("发送时间-哪一天(0-31, 0 表示每天)").min(0).max(31).step(1),hour:a.Schema.number().default(9).description("发送时间-哪个小时(0-24, 24 表示每小时)(默认为早上9点)").min(0).max(24).step(1),minute:a.Schema.number().default(0).description("发送时间-哪一分钟(0-60, 60 表示每分钟)").min(0).max(60).step(1)}).description("发送时间"),url:a.Schema.object({list:a.Schema.array(a.Schema.string().default("").description("新闻源")).default(["https://60s.viki.moe/v2/60s"]).description("新闻源列表")}).description("新闻源配置")}).description("每日新闻配置"),a.Schema.object({Objective:a.Schema.array(a.Schema.object({platform:a.Schema.union(["onebot","qq","discord","telegram","kook"]).default("onebot").description("目标平台"),group:a.Schema.array(a.Schema.string().default("").description("目标群组")).default([])})).default([]).description("信息目标列表")}).description("发送信息配置")]);function $(t,e){let n=e.url.list;e.daynews&&(t.cron(`${e.sendTime.minute==60?"*":e.sendTime.minute} ${e.sendTime.hour==24?"*":e.sendTime.hour} ${e.sendTime.day==0?"*":e.sendTime.day} ${e.sendTime.month==0?"*":e.sendTime.month} ${e.sendTime.week==0?"*":e.sendTime.week}`,async()=>{let o=await u(t,n),r=e.Objective.flatMap(m=>m.group.map(g=>`${m.platform}:${g}`));t.broadcast(r,o)}),t.command("daily").action(async({session:o})=>{for(let r of n)try{await o.send(await u(t,n));break}catch{}}))}l($,"apply");function v(t){let e=t.getFullYear(),n=t.getMonth()+1,o=t.getDate();return`${e}年${n}月${o}日`}l(v,"dateFormat");async function u(t,e){for(let n of e)try{let r=(await t.http.get(n)).data;return`${v(new Date(r.date))} ${r.day_of_week||""} 农历 ${r.lunar_date||""}
 1. ${r.news[0]||""}
 2. ${r.news[1]||""}
 3. ${r.news[2]||""}
 4. ${r.news[3]||""}
 5. ${r.news[4]||""}
 6. ${r.news[5]||""}
 7. ${r.news[6]||""}
 8. ${r.news[7]||""}
 9. ${r.news[8]||""}
 10. ${r.news[9]||""}

  `}catch{}return"❌ 获取每日新闻失败，请稍后再试。"}l(u,"sendNews")});export default U();
