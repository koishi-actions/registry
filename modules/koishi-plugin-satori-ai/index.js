var K=Object.defineProperty;var at=Object.getOwnPropertyDescriptor;var rt=Object.getOwnPropertyNames;var st=Object.prototype.hasOwnProperty;var L=(t,e)=>()=>(t&&(e=t(t=0)),e);var U=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var J=(t,e,n,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of rt(e))!st.call(t,a)&&a!==n&&K(t,a,{get:()=>e[a],enumerable:!(i=at(e,a))||i.enumerable});return t},I=(t,e,n)=>(J(t,e,"default"),n&&J(n,e,"default"));var T=t=>J(K({},"__esModule",{value:!0}),t);import{Buffer as E}from"https://registry.koishi.chat/modules/buffer/index.js";import N from"https://registry.koishi.chat/modules/process/index.js";var C=L(()=>{});var D={};import*as Dt from"https://registry.koishi.chat/modules/koishi/index.js";var A=L(()=>{C();I(D,Dt)});var k={};import*as Ot from"https://registry.koishi.chat/modules/@cordiverse/fs/index.js";var z=L(()=>{C();I(k,Ot)});import ot from"https://registry.koishi.chat/modules/@cordiverse/path/index.js";var Q=U((Mt,B)=>{C();B.exports=ot});var xt=U(($t,it)=>{C();var ct=Object.create,F=Object.defineProperty,lt=Object.getOwnPropertyDescriptor,V=Object.getOwnPropertyNames,ut=Object.getPrototypeOf,ht=Object.prototype.hasOwnProperty,w=(t,e)=>F(t,"name",{value:e,configurable:!0}),mt=(t,e)=>function(){return e||(0,t[V(t)[0]])((e={exports:{}}).exports,e),e.exports},ft=(t,e)=>{for(var n in e)F(t,n,{get:e[n],enumerable:!0})},Y=(t,e,n,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of V(e))!ht.call(t,a)&&a!==n&&F(t,a,{get:()=>e[a],enumerable:!(i=lt(e,a))||i.enumerable});return t},Z=(t,e,n)=>(n=t!=null?ct(ut(t)):{},Y(e||!t||!t.__esModule?F(n,"default",{value:t,enumerable:!0}):n,t)),gt=t=>Y(F({},"__esModule",{value:!0}),t),pt=mt({"src/locales/zh.yml"(t,e){e.exports={commands:{sat:{description:"AI聊天",messages:{notExists:"请先签到哦......",censor:"不合规，请检查输入内容是否含有违禁词。","no-prompt":"你好。使用说明可以看我的空间哦。",tooManyEnglishLetters:"请不要用这么多英文......",err:"寄！{0}",tooLong:"你的话太多了。",content_tooLong:"这个问题有点复杂，你还是去问别人吧。","duplicate-dialogue":"这个刚刚说过了吧......",clean:"舒服了",block1:"我讨厌你！",block2:"我讨厌你们！"}},"sat.clear":{description:"清空所有人的会话"},"sat.common_sense":{description:"添加常识",messages:{"no-prompt":"你想让我知道什么？",succeed:"我知道了，{0}"}}}}}}),G={};ft(G,{default:()=>bt});it.exports=gt(G);var q=(A(),T(D)),r=(A(),T(D)),H=class extends r.Service{static{w(this,"Sat")}static inject={required:["console","database"],optional:["censor"]};output_type;session_config;sessions;personality;sessions_cmd;aliasMap;type;l6k;key_number;maxRetryTimes;constructor(t,e){super(t,"sat",!0)}};(t=>{t.Config=r.Schema.intersect([r.Schema.object({baseURL:r.Schema.string().default("https://api.deepseek.com").description("请求地址"),key:r.Schema.union([r.Schema.array(String).role("secret"),r.Schema.transform(String,e=>[e])]).default([]).role("secret").description("api_key"),enableContext:r.Schema.boolean().default(!0).description("是否启用上下文, 关闭后将减少 token 消耗(无人格)"),appointModel:r.Schema.string().default("deepseek-chat").description("模型"),prompt:r.Schema.string().role("textarea").description("人格设定")}).description("基础设置"),r.Schema.object({max_tokens:r.Schema.number().description("最大请求长度").default(50),content_max_tokens:r.Schema.number().description("最大回答长度").default(100),message_max_length:r.Schema.number().description("最大频道上下文长度").default(10),enable_self_memory:r.Schema.boolean().default(!0).description("是否启用自发言记忆（启用容易发生复读）"),memory_block_words:r.Schema.array(String).default(["好感"]).description("记忆屏蔽词"),remember_min_length:r.Schema.number().description("触发保存到记忆的长度").default(20),dataDir:r.Schema.string().default("./data/satori_ai").description("聊天记录保存位置（长期记忆）"),temperature:r.Schema.number().role("slider").min(0).max(2).step(.01).default(.5).description("温度"),authority:r.Schema.number().role("slider").min(0).max(5).step(1).description("允许使用的最低权限").default(1),enable_fixed_dialogues:r.Schema.boolean().default(!0).description("是否启用固定对话（在dataDir中的fixed_dialogues.json修改）"),alias:r.Schema.array(String).default(["ai"]).description("触发命令;别名"),private:r.Schema.boolean().default(!0).description("开启后私聊AI可触发对话, 不需要使用指令"),mention:r.Schema.boolean().default(!0).description("开启后机器人被提及(at/引用)可触发对话"),randnum:r.Schema.number().role("slider").min(0).max(1).step(.01).default(0).description("随机触发对话的概率，如需关闭可设置为 0"),sentences_divide:r.Schema.boolean().default(!0).description("是否分句发送"),time_interval:r.Schema.number().default(1e3).description("每句话的时间间隔"),maxRetryTimes:r.Schema.number().default(30).description("报错后最大重试次数")}).description("进阶设置"),r.Schema.object({enable_favorability:r.Schema.boolean().default(!1).description("是否开启好感度系统（建议添加p-qiandao插件）"),prompt_0:r.Schema.string().role("textarea").description("厌恶好感补充设定"),favorability_div_1:r.Schema.number().default(15).description("厌恶-陌生分界线"),prompt_1:r.Schema.string().role("textarea").description("陌生好感补充设定"),favorability_div_2:r.Schema.number().default(150).description("陌生-朋友分界线"),prompt_2:r.Schema.string().role("textarea").description("朋友好感补充设定"),favorability_div_3:r.Schema.number().default(500).description("朋友-思慕分界线"),prompt_3:r.Schema.string().role("textarea").description("思慕好感补充设定"),favorability_div_4:r.Schema.number().default(1e3).description("思慕-恋慕分界线"),prompt_4:r.Schema.string().role("textarea").description("恋慕好感补充设定")}).description("好感度设置"),r.Schema.object({blockuser:r.Schema.array(String).default([]).description("屏蔽的用户"),blockchannel:r.Schema.array(String).default([]).description("屏蔽的频道")}).description("过滤器")])})(H||(H={}));var v=Z((z(),T(k))),O=Z(Q()),dt="satori-ai",j=new q.Logger(dt),yt=0,_t=class extends H{static{w(this,"SAt")}pluginConfig;channelDialogues={};constructor(t,e){super(t,e),this.key_number=0,this.sessions={},this.maxRetryTimes=e.maxRetryTimes,this.pluginConfig=e,t.i18n.define("zh",pt()),e.enable_favorability&&t.model.extend("p_system",{id:"unsigned",userid:"string",usersname:"string",p:"integer",favorability:"integer"},{autoInc:!0}),this.personality={人格:[{role:"system",content:`${e.prompt}`}]},this.session_config=Object.values(this.personality)[0],t.middleware(async(n,i)=>this.middleware(n,i)),t.command("sat <text:text>",{authority:e.authority}).alias(...e.alias).action(async({session:n},...i)=>{let a=await this.sat(n,i.join(" "));if(typeof a=="string")return a;let s=a?.attrs?.content;if(!s)return j.error(a),n.text("commands.sat.messages.err");if(s.length>this.pluginConfig.content_max_tokens)return n.text("commands.sat.messages.content_tooLong");if(this.pluginConfig.enable_favorability){let o=await this.ctx.database.get("p_system",{userid:n.userId});if(this.ctx.censor){let h=await this.ctx.censor.transform(s,n);if(/\*\*/g.test(h)){let l=o[0].favorability-10;await this.ctx.database.set("p_system",{userid:o[0].userid},{favorability:l})}if(s=="……"||s=="滚"){let l=o[0].favorability-5;await this.ctx.database.set("p_system",{userid:o[0].userid},{favorability:l})}}}if(this.sessions={},e.sentences_divide){let o=s.split(/(?<=\。)(?!.*\。)/);for(let h of o)await n.sendQueued(q.h.text(h),e.time_interval)}else return s}),t.command("sat.clear","清空会话",{authority:1}).action(({session:n})=>this.clear(n)),t.command("sat.common_sense <text:text>","添加常识",{authority:3}).alias("添加常识").action(async({session:n},...i)=>{let a=i.join(" ");return a?(await X(a,this.pluginConfig.dataDir),n.text("commands.sat.common_sense.messages.succeed",[a])):n.text("commands.sat.common_sense.messages.no-prompt")})}async sat(t,e){let n,i;if(this.pluginConfig.enable_favorability){if(n=await W(this.ctx,t.userId),n&&await this.ctx.database.create("p_system",{userid:t.userId,usersname:t.username,p:0,favorability:0}),i=await this.ctx.database.get("p_system",{userid:t.userId}),i[0].favorability<-30&&i[0].favorability>-900)return t.text("commands.sat.messages.block1");let o=(e.match(/[a-zA-Z]/g)||[]).length;if(i[0].favorability<50&&o>8)return t.text("commands.sat.messages.tooManyEnglishLetters")}if(this.pluginConfig.blockuser.includes(t.userId))return t.text("commands.sat.messages.block1");if(this.pluginConfig.blockchannel.includes(t.channelId))return t.text("commands.sat.messages.block2");if(!e&&!t.quote?.content)return t.text("commands.sat.messages.no-prompt");if(e.length>this.pluginConfig.max_tokens)return t.text("commands.sat.messages.tooLong");let a;if(this.ctx.censor?a=await this.ctx.censor.transform(e,t):a=e,this.pluginConfig.enableContext){this.personality.人格[0].content=this.pluginConfig.prompt;let o=t.channelId,g=(this.channelDialogues[o]||[]).slice(-10),l;if(e.length<=6?l=g.find(c=>c.role===t.username&&(c.content.includes(e)||e.includes(c.content))):l=g.find(c=>c.role===t.username&&c.content.includes(e)),l){if(this.pluginConfig.enable_favorability){let c=await this.ctx.database.get("p_system",{userid:t.userId}),d=c[0].favorability-1;await this.ctx.database.set("p_system",{userid:c[0].userid},{favorability:d})}return t.text("commands.sat.messages.duplicate-dialogue")}}let s=(z(),T(k));if(this.pluginConfig.enable_fixed_dialogues){let o=O.join(this.pluginConfig.dataDir,"fixed_dialogues.json");if(!s.existsSync(o)){let m=[{triggers:["你好","您好"],favorabilityRange:[0,100],probability:1,timeRange:["06:00","08:00"],response:"早上好！很高兴见到你。"},{triggers:["再见","拜拜"],favorabilityRange:[0,100],probability:1,timeRange:["18:00","20:00"],response:"再见！希望很快再见到你。"}];s.writeFileSync(o,JSON.stringify(m,null,2),"utf-8")}let h=JSON.parse(s.readFileSync(o,"utf-8")),g=new Date,l=g.getHours(),c=g.getMinutes(),d=h.filter(m=>{let u=m.triggers.some(S=>a==S),f=m.favorabilityRange?i[0].favorability>=m.favorabilityRange[0]&&i[0].favorability<=m.favorabilityRange[1]:!0,y=m.timeRange?(()=>{let[S,M]=m.timeRange[0].split(":").map(Number),[p,_]=m.timeRange[1].split(":").map(Number),b=S*60+M,x=p*60+_,P=l*60+c;return P>=b&&P<=x})():!0;return u&&f&&y});if(d.length>0){let m=d.reduce((f,y)=>f+y.probability,0),u=Math.random()*m;for(let f of d)if(u-=f.probability,u<=0){if(this.pluginConfig.enable_favorability){let y=i[0].favorability+f.favorability;await this.ctx.database.set("p_system",{userid:i[0].userid},{favorability:y})}return this.channelDialogues[t.channelId]||(this.channelDialogues[t.channelId]=[]),this.channelDialogues[t.channelId].push({role:t.username,content:e}),this.channelDialogues[t.channelId].length>this.pluginConfig.message_max_length&&this.channelDialogues[t.channelId].shift(),f.response}}}if(this.pluginConfig.enableContext){this.personality.人格[0].content=this.pluginConfig.prompt;let o=t.channelId,g=(this.channelDialogues[o]||[]).slice(-10);this.personality.人格[0].content+=`
这是刚刚的聊天记录，禁止你重复其中的内容：{
`+g.map(p=>`${p.role}: ${p.content}`).join(`
`)+`
}`;let l=["的","一","是","了","什","么","我","谁","不","人","在","他","有","这","个","上","们","来","到","时","大","地","为","子","中","你","说","生","国","年","着","就","那","和","要","她","出","也","得","里","后","自","以","会","id=","1","2","3","4","5","6","7","8","9","0"],c=O.join(this.pluginConfig.dataDir,"dialogues",`${t.userId}.txt`),d=(t.username+e).split("").filter(p=>!l.includes(p)),m=[t.userId],u;s.existsSync(c)&&(u=R(c,d),u.length>0&&(this.personality.人格[0].content+=$(JSON.parse(s.readFileSync(c,"utf-8")),u,10,"这是你和发言者较久之前的对话内容：")));let f=O.join(this.pluginConfig.dataDir,"common_sense.txt"),y;if(s.existsSync(f)&&(y=JSON.parse(s.readFileSync(f,"utf-8"))),u=R(f,d),u.length>0&&(this.personality.人格[0].content+=$(y,u,10,"这是你需要知道的信息："),u.length>=3))for(let p=0;p<3;p++){let _=y[u[p].index].content.split("").filter(x=>!l.includes(x)),b=R(f,_);b.length>0&&(this.personality.人格[0].content+=$(y,b,4,`这是第${p+1}条信息的补充信息：`,1))}let S=await nt();this.personality.人格[0].content+=`
当前日期: ${S}
`;let M=await et();if(this.personality.人格[0].content+=`
当前时间: ${M}
`,this.pluginConfig.enable_favorability){if(/\*\*/g.test(a)){let P=i[0].favorability-15;await this.ctx.database.set("p_system",{userid:i[0].userid},{favorability:P})}else await this.ctx.database.set("p_system",{userid:i[0].userid},{favorability:i[0].favorability+1});let _=["厌恶","陌生","朋友","暧昧","恋人"],b=i[0].favorability,x;b<this.pluginConfig.favorability_div_1?(x=_[0],this.personality.人格[0].content+=`
 ${this.pluginConfig.prompt_0} 
`):b<this.pluginConfig.favorability_div_2?(x=_[1],this.personality.人格[0].content+=`
 ${this.pluginConfig.prompt_1} 
`):b<this.pluginConfig.favorability_div_3?(x=_[2],this.personality.人格[0].content+=`
 ${this.pluginConfig.prompt_2} 
`):b<this.pluginConfig.favorability_div_4?(x=_[3],this.personality.人格[0].content+=`
 ${this.pluginConfig.prompt_3} 
`):(x=_[4],this.personality.人格[0].content+=`
 ${this.pluginConfig.prompt_4} 
`),j.info(`名字: ${t.username}, 关系: ${x}`)}return this.personality.人格[0].content+=`发言者的名字: ${t.username}，发言者的id：${t.userId}`,u=R(f,m),u.length>0&&(this.personality.人格[0].content+=$(y,u,1,"这是发言者的真实身份：")),yt&&j.info(this.personality.人格[0].content.slice(-1500)),await this.chat(a,t.userId,t)}else{let o=await this.chat_with_gpt(t,[{role:"user",content:e}]),h=[{role:"user",content:e},{role:"assistant",content:o}];return await this.getContent(t.userId,h,t.messageId,t.bot.selfId)}}async middleware(t,e){let n=t.channelId.match(new RegExp("private","g"));if(this.pluginConfig.private&&n&&n.includes("private"))return this.sat(t,t.content);if(t.stripped.appel&&this.pluginConfig.mention){let a="";for(let s of t.elements.slice(1))s.type==="text"&&(a+=s?.attrs?.content);return this.sat(t,a)}return t.event.message.elements[0].type=="img"||t.event.message.elements[0].type=="at"||t.content.length<20||t.content.length>=this.pluginConfig.max_tokens?e():Math.random()<this.pluginConfig.randnum?await this.sat(t,t.content):e()}async chat_with_gpt(t,e){let n=(0,q.trimSlash)(`${this.pluginConfig.baseURL??"https://api.deepseek.com"}/v1/chat/completions`),i={model:this.pluginConfig.appointModel,max_tokens:this.pluginConfig.max_tokens,temperature:this.pluginConfig.temperature,top_p:1,frequency_penalty:.5,presence_penalty:.5,messages:e},a={timeout:0,headers:{Authorization:`Bearer ${this.pluginConfig.key[this.key_number]}`,"Content-Type":"application/json"}};try{return(await this.ctx.http.post(n,i,a)).choices[0].message.content}catch{return""}}get_chat_session(t){return Object.keys(this.sessions).indexOf(t)==-1&&(this.sessions[t]=[...this.session_config]),this.sessions[t]}async chat(t,e,n){j.info((n.author?.nick||n.username)+":"+t);let i=this.get_chat_session(e);i.push({role:"user",content:t});let a=await this.try_control(this.chat_with_gpt,n,i);i.push({role:"assistant",content:a}),this.sessions[e]=i,j.info("模型返回内容: "+a);let s=n.channelId;this.channelDialogues[s]||(this.channelDialogues[s]=[]),this.channelDialogues[s].push({role:n.username,content:t}),this.pluginConfig.enable_self_memory&&this.channelDialogues[s].push({role:"你",content:a}),this.channelDialogues[s].length>this.pluginConfig.message_max_length&&this.channelDialogues[s].shift();let o=O.join(this.pluginConfig.dataDir,"dialogues",`${e}.txt`);v.mkdirSync(O.dirname(o),{recursive:!0});let h=[];v.existsSync(o)&&(h=JSON.parse(v.readFileSync(o,"utf-8")));let g=i.filter(l=>l.role==="user");for(let l=0;l<this.pluginConfig.memory_block_words.length;l++)if(g[0].content.includes(this.pluginConfig.memory_block_words[l]))return await this.getContent(e,i,n.messageId,n.bot.selfId);if(this.pluginConfig.enable_favorability){let c=(await this.ctx.database.get("p_system",{userid:n.userId}))[0].favorability;(/记住/g.test(g[0].content)||g[0].content.length>this.pluginConfig.remember_min_length)&&c>this.pluginConfig.favorability_div_2&&(h.push(...g),j.info("已记录，长度："+g[0].content.length),v.writeFileSync(o,JSON.stringify(h,null,2)))}return await this.getContent(e,i,n.messageId,n.bot.selfId)}async try_control(t,e,n){let i=0;for(;i<this.pluginConfig.maxRetryTimes;){let a=await t.bind(this)(e,n);if(a!=="")return a;i++,await this.ctx.sleep(500)}return"请求错误，请查看日志"}async getContent(t,e,n,i){return q.h.text(e[e.length-1].content)}clear(t){return this.sessions={},this.channelDialogues={},t.text("commands.sat.messages.clean")}};async function W(t,e){return(await t.database.get("p_system",{userid:e})).length==0}w(W,"isTargetIdExists");async function X(t,e){let n=O.join(e,"common_sense.txt");v.mkdirSync(O.dirname(n),{recursive:!0});let i=[];v.existsSync(n)&&(i=JSON.parse(v.readFileSync(n,"utf-8"))),i.push({role:"user",content:t}),v.writeFileSync(n,JSON.stringify(i,null,2))}w(X,"addCommonSense");function R(t,e){if(!v.existsSync(t))return[];let n=v.readFileSync(t,"utf-8"),i=JSON.parse(n),a=e.map(tt),s=new RegExp(a.join("|"),"gi"),o=/[\u4e00-\u9fa5]/;return i.map((c,d)=>{let m=c.content.match(s),u=0;m&&m.forEach(p=>{let _=(p.match(o)||[]).length,b=p.length-_;u+=_*2+b});let f=(c.content.match(o)||[]).length,y=c.content.length-f,S=f*2+y,M=S>0?u/S:0;return{index:d,count:u,totalCount:S,ratio:M}}).filter(c=>c.count>1).sort((c,d)=>d.ratio-c.ratio)}w(R,"searchKeywordsInFile");function tt(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}w(tt,"escapeRegExp");function $(t,e,n,i,a=0){let s=e.slice(a,n);return`
${i}{
`+s.map(h=>t[h.index].content).join(`
`)+`
}`}w($,"appendTopMatches");async function et(){let e=new Date().getHours(),n;return e>=5&&e<9?n="清晨":e>=9&&e<12?n="上午":e>=12&&e<14?n="中午":e>=14&&e<17?n="下午":e>=17&&e<19?n="傍晚":e>=19&&e<22?n="晚上":n="深夜",n}w(et,"getTimeOfDay");async function nt(){let t=new Date,e=t.getFullYear(),n=t.getMonth()+1,i=t.getDate();return`${e}年${n}月${i}日`}w(nt,"getCurrentDate");var bt=_t});export default xt();
