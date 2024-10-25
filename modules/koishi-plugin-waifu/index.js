var k=Object.defineProperty;var R=Object.getOwnPropertyDescriptor;var B=Object.getOwnPropertyNames;var J=Object.prototype.hasOwnProperty;var L=(a,t)=>()=>(a&&(t=a(a=0)),t);var H=(a,t)=>()=>(t||a((t={exports:{}}).exports,t),t.exports);var j=(a,t,c,e)=>{if(t&&typeof t=="object"||typeof t=="function")for(let u of B(t))!J.call(a,u)&&u!==c&&k(a,u,{get:()=>t[u],enumerable:!(e=R(t,u))||e.enumerable});return a},q=(a,t,c)=>(j(a,t,"default"),c&&j(c,t,"default"));var Q=a=>j(k({},"__esModule",{value:!0}),a);import{Buffer as N}from"https://registry.koishi.chat/modules/buffer/index.js";import O from"https://registry.koishi.chat/modules/process/index.js";var I=L(()=>{});var _={};import*as ce from"https://registry.koishi.chat/modules/koishi/index.js";var P=L(()=>{I();q(_,ce)});var ae=H((oe,G)=>{I();var x=Object.defineProperty,E=Object.getOwnPropertyDescriptor,U=Object.getOwnPropertyNames,F=Object.prototype.hasOwnProperty,S=(a,t)=>x(a,"name",{value:t,configurable:!0}),K=(a,t)=>function(){return t||(0,a[U(a)[0]])((t={exports:{}}).exports,t),t.exports},V=(a,t)=>{for(var c in t)x(a,c,{get:t[c],enumerable:!0})},W=(a,t,c,e)=>{if(t&&typeof t=="object"||typeof t=="function")for(let u of U(t))!F.call(a,u)&&u!==c&&x(a,u,{get:()=>t[u],enumerable:!(e=E(t,u))||e.enumerable});return a},X=a=>W(x({},"__esModule",{value:!0}),a),C=K({"src/locales/zh-CN.yml"(a,t){t.exports={avoidNtr:"是否避免用户抽中他人的老婆",onlyActiveUser:"是否只让用户抽中活跃的群友",activeDays:"活跃天数最小值 (onlyActiveUser 判断活跃的标准)",excludeUsers:{$description:"排除的用户",$value:{uid:"平台名与用户 ID, 格式: platform:userId",note:"备注 (可不填)"}},commands:{waifu:{description:"娶群友",messages:{marriages:"{quote}你今日的群友老婆是：{name} {avatar}","members-too-few":"潜在的老婆太少啦，快去拐骗（？）点回来吧！或者骗出来聊天！"}},"force-marry":{description:"强娶群友",messages:{"force-marry":"{quote}好啦好啦，群友「{name}」已经被你强娶回家了 {avatar}","no-target":"{quote}强娶谁呀~","already-marriage":"{quote}你已经娶了老婆，今天别再娶啦！","members-too-few":"能娶的群友没有这位，或许可以先把对方骗出来聊天？！","target-self":"{quote}娶自己干嘛！"}},propose:{description:"向群友求婚",messages:{success:"{quote}群友「{name}」答应了你，愿意当你今日的对象！",failure:"{quote}对方拒绝了","no-target":"{quote}向谁求婚呀~","already-marriage":"{quote}你已经有对象了，今天别再求婚啦！","members-too-few":"能求婚的群友没有这位，或许可以先把对方骗出来聊天？！","target-self":"{quote}向自己求婚干嘛！",request:"{targetAt} {targetAvatar}<br/>群友「{name}」向你求婚，那么...你愿意嫁给ta吗？在{time}秒内发送【{agree}】或者【{reject}】，回应对方哦！"}},divorce:{description:"和群友离婚",messages:{"not-married":"{quote}你还是只单身狗，不能离婚！",divorcement:"{quote}你已经离婚，江湖有缘再相见~"}}}}}}),D={};V(D,{Config:()=>ee,apply:()=>z,inject:()=>Z,name:()=>Y});G.exports=X(D);var r=(P(),Q(_));function $(){let a=Date.now(),t=new Date;return t.setHours(24,0,0,0),t.getTime()-a}S($,"getMaxAge");function y(a,t){let c=a?.nick||a?.user?.nick||a?.user?.name||t,e=a?.avatar||a?.user?.avatar;return[c,e]}S(y,"getMemberInfo");var Y="waifu",Z=["cache"],ee=r.Schema.intersect([r.Schema.object({avoidNtr:r.Schema.boolean().default(!1),onlyActiveUser:r.Schema.boolean().default(!1),activeDays:r.Schema.natural().default(7),excludeUsers:r.Schema.array(r.Schema.object({uid:r.Schema.string().required(),note:r.Schema.string()})).role("table").default([{uid:"red:2854196310",note:"Q群管家"}])}).i18n({"zh-CN":C()}),r.Schema.object({forceMarry:r.Schema.boolean().description("是否启用强娶指令").default(!1),propose:r.Schema.boolean().description("是否启用求婚指令").experimental().default(!1),divorce:r.Schema.boolean().description("是否启用离婚指令").experimental().default(!1)}).description("附加指令")]);function z(a,t){a.i18n.define("zh-CN",C()),a.guild().on("message-created",async e=>{if((0,r.isNullable)(e.userId)||e.userId==="0")return;let u={user:e.event.user,...e.event.member};await a.cache.set(`waifu_members_${e.gid}`,e.userId,u,4*r.Time.day),await a.cache.set(`waifu_members_active_${e.gid}`,e.userId,"",t.activeDays*r.Time.day)}),a.on("guild-member-removed",e=>{(0,r.isNullable)(e.userId)||e.userId==="0"||(a.cache.delete(`waifu_members_${e.gid}`,e.userId),a.cache.delete(`waifu_members_active_${e.gid}`,e.userId))});async function c(e,u){let m=[];try{let{data:o,next:v}=await e.bot.getGuildMemberList(e.guildId);if(m=o,v){let{data:l}=await e.bot.getGuildMemberList(e.guildId,v);m.push(...l)}}catch{}if(!m.length)for await(let o of a.cache.values(`waifu_members_${u}`))m.push(o);return m}S(c,"getMemberList"),a.command("waifu").alias("marry","娶群友","今日老婆").action(async({session:e})=>{if(!e.guildId)return e.text(".members-too-few");let{gid:u}=e,m=await a.cache.get(`waifu_marriages_${u}`,e.userId);if(m){let i;try{i=await e.bot.getGuildMember(e.guildId,m)}catch{}try{let h=await a.cache.get(`waifu_members_${u}`,m);i?(i.nick??=h.nick,i.user??=h.user,i.user.name??=h.user.name):i=h}catch{}try{i??={user:await e.bot.getUser(m)}}catch{}let[g,s]=y(i,m);return e.text(".marriages",{quote:r.h.quote(e.messageId),name:g,avatar:s&&r.h.image(s)})}let o=t.excludeUsers.map(({uid:i})=>i);o.push(e.uid,e.sid);let l=(await c(e,u)).filter(i=>i.user&&!o.includes(`${e.platform}:${i.user.id}`)&&!i.user.isBot);if(t.onlyActiveUser){let i=[];for await(let g of a.cache.keys(`waifu_members_active_${u}`))i.push(g);l=l.filter(g=>i.find(s=>s===g.user.id))}if(l.length===0)return e.text(".members-too-few");let d=r.Random.pick(l),n=d.user.id;if(await a.cache.get(`waifu_marriages_${u}`,n)&&(d=r.Random.pick(l),n=d.user.id),t.avoidNtr){let i=0;for(;await a.cache.get(`waifu_marriages_${u}`,n);){d=r.Random.pick(l),n=d.user.id;if(i++,i>l.length)return e.text(".members-too-few")}}let w=$();await a.cache.set(`waifu_marriages_${u}`,e.userId,n,w),await a.cache.set(`waifu_marriages_${u}`,n,e.userId,w);let[f,p]=y(d,n);return e.text(".marriages",{quote:r.h.quote(e.messageId),name:f,avatar:p&&r.h.image(p)})}),t.forceMarry&&a.command("force-marry <target:user>").alias("强娶").action(async({session:e},u)=>{if(!e.guildId)return e.text(".members-too-few");if(!u)return e.text(".no-target",{quote:r.h.quote(e.messageId)});let m=u.slice(e.platform.length+1);if(m===e.userId)return e.text(".target-self");let{gid:o}=e;if(await a.cache.get(`waifu_marriages_${o}`,e.userId))return e.text(".already-marriage",{quote:r.h.quote(e.messageId)});let d=(await c(e,o)).find(p=>p.user.id==m);if(!d)return e.text(".members-too-few");let n=d.user.id,b=$();await a.cache.set(`waifu_marriages_${o}`,e.userId,n,b),await a.cache.set(`waifu_marriages_${o}`,n,e.userId,b);let[w,f]=y(d,n);return e.text(".force-marry",{quote:r.h.quote(e.messageId),name:w,avatar:f&&r.h.image(f)})}),t.propose&&a.command("propose <target:user>").alias("求婚").action(async({session:e},u)=>{if(!e.guildId)return e.text(".members-too-few");if(!u)return e.text(".no-target",{quote:r.h.quote(e.messageId)});let m=u.slice(e.platform.length+1);if(m===e.userId)return e.text(".target-self");let{gid:o}=e;if(await a.cache.get(`waifu_marriages_${o}`,e.userId))return e.text(".already-marriage",{quote:r.h.quote(e.messageId)});let d=(await c(e,o)).find(s=>s.user.id==m);if(!d)return e.text(".members-too-few");let n=d.user.id,[b,w]=y(d,n);await e.send(e.text(".request",{targetAt:r.h.at(d.user.id),targetAvatar:r.h.image(w),name:e.username,agree:"我愿意",reject:"我拒绝",time:"90"}));let f,p=e.messageId,i=e.userId,g=a.platform(e.platform).user(d.user.id).guild(e.guildId).on("message-created",async({elements:s,text:h,send:M})=>{let A=r.h.select(s,"text").join("").trim();if(A==="我愿意"){g(),clearTimeout(f);let T=$();await a.cache.set(`waifu_marriages_${o}`,i,n,T),await a.cache.set(`waifu_marriages_${o}`,n,i,T),await M(h("commands.propose.messages.success",{quote:r.h.quote(p),name:b}))}else A==="我拒绝"&&(g(),clearTimeout(f),await M(h("commands.propose.messages.failure",{quote:r.h.quote(p)})))});f=setTimeout(()=>{g()},90*r.Time.second)}),t.divorce&&a.command("divorce").alias("离婚").action(async({session:e})=>{let{gid:u}=e;return await a.cache.get(`waifu_marriages_${u}`,e.userId)?(a.cache.delete(`waifu_marriages_${u}`,e.userId),e.text(".divorcement",{quote:r.h.quote(e.messageId)})):e.text(".not-married",{quote:r.h.quote(e.messageId)})})}S(z,"apply")});export default ae();
