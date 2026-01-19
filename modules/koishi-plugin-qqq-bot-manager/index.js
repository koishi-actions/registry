var J=Object.defineProperty;var ce=Object.getOwnPropertyDescriptor;var le=Object.getOwnPropertyNames;var ie=Object.prototype.hasOwnProperty;var B=(o,e)=>()=>(o&&(e=o(o=0)),e);var pe=(o,e)=>()=>(e||o((e={exports:{}}).exports,e),e.exports);var f=(o,e,n,w)=>{if(e&&typeof e=="object"||typeof e=="function")for(let u of le(e))!ie.call(o,u)&&u!==n&&J(o,u,{get:()=>e[u],enumerable:!(w=ce(e,u))||w.enumerable});return o},D=(o,e,n)=>(f(o,e,"default"),n&&f(n,e,"default"));var ue=o=>f(J({},"__esModule",{value:!0}),o);import{Buffer as F}from"https://registry.koishi.chat/modules/buffer/index.js";import z from"https://registry.koishi.chat/modules/process/index.js";var S=B(()=>{});var x={};import*as De from"https://registry.koishi.chat/modules/koishi/index.js";var K=B(()=>{S();D(x,De)});var Qe=pe((Pe,V)=>{S();var P=Object.defineProperty,ge=Object.getOwnPropertyDescriptor,$e=Object.getOwnPropertyNames,be=Object.prototype.hasOwnProperty,M=(o,e)=>P(o,"name",{value:e,configurable:!0}),ye=(o,e)=>{for(var n in e)P(o,n,{get:e[n],enumerable:!0})},qe=(o,e,n,w)=>{if(e&&typeof e=="object"||typeof e=="function")for(let u of $e(e))!be.call(o,u)&&u!==n&&P(o,u,{get:()=>e[u],enumerable:!(w=ge(e,u))||w.enumerable});return o},he=o=>qe(P({},"__esModule",{value:!0}),o),G={};ye(G,{Config:()=>Ie,apply:()=>H,inject:()=>_e,name:()=>we,reusable:()=>Ne,usage:()=>ve});V.exports=he(G);var m=(K(),ue(x)),_e={optional:["qrcode"],required:["i18n"]},we="qqq-bot-manager",Ne=!1,ve=`
---

<p>本插件使用<strong>派生式指令</strong>结构，所有功能均在父级指令 <code>qqqbot</code> 下。</p>

<table>
<thead>
<tr>
<th>父级指令</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td class="command"><code>qqqbot</code></td>
<td>qqbot管理</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
<th>子指令</th>
<th>描述</th>
<th>示例</th>
</tr>
</thead>
<tbody>
<tr>
<td class="command"><code>qqqbot 取消登录</code></td>
<td>取消当前正在进行的登录操作。</td>
<td><code>qqqbot 取消登录</code> 或 <code>qqqbot.取消登录</code></td>
</tr>
<tr>
<td class="command"><code>qqqbot 机器人数据 [天数]</code></td>
<td>查看机器人近日数据</td>
<td><code>qqqbot 机器人数据</code> 或 <code>qqqbot 机器人数据 3</code> (返回最近3天数据)</td>
</tr>
<tr>
<td class="command"><code>qqqbot 查看通知 [数量]</code></td>
<td>查看 QQ 开放平台站内通知信</td>
<td><code>qqqbot 查看通知</code> 或 <code>qqqbot 查看通知 5</code> (返回最近5条通知)</td>
</tr>
<tr>
<td class="command"><code>qqqbot 登录</code></td>
<td>登录 QQ 开放平台后台，用于后续数据查看功能。</td>
<td><code>qqqbot 登录</code> 或 <code>qqqbot.登录</code></td>
</tr>
</tbody>
</table>

<p><strong>注意：</strong>  请使用完整的指令形式，例如 <code>qqqbot.登录</code> 或 <code>qqqbot 机器人数据</code> 等来调用插件功能。</p>

---

<h2>服务依赖</h2>

<p>本插件依赖以下 Koishi 服务：</p>

<table class="dependency-table">
<thead>
<tr>
<th>服务类型</th>
<th>服务名称</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>必须服务：</strong></td>
<td><code>i18n</code></td>
<td>Koishi 的国际化服务，用于插件文本的本地化支持。</td>
</tr>
<tr>
<td><strong>可选服务：</strong></td>
<td><code>qrcode</code></td>
<td>二维码服务。 <strong>如果需要使用二维码方式显示登录链接， <br>则必须安装并启用 <code>koishi-plugin-qrcode-service-null</code> 插件。<br></strong>  如果未安装或未启用，插件将默认使用文本链接形式提供登录地址。</td>
</tr>
</tbody>
</table>

---

<h2>功能特性</h2>

<ul class="feature-list">
<li><strong>登录 QQ 开放平台后台：</strong>  通过指令获取登录链接或二维码，用户使用手机 QQ 扫码或点击链接完成登录授权，插件将保存登录状态以便后续操作。</li>
<li><strong>查看站内信内容：</strong>  获取并显示 QQ 开放平台站内通知信，方便用户及时了解平台通知。可以指定查看最近的站内信数量。</li>
<li><strong>查看机器人近日数据：</strong>  获取并展示机器人的近日运营数据，包括消息量、用户数、留存率等关键指标。可以指定查看最近的天数。</li>
</ul>

---
`,k=new m.Logger("qqq-bot-manager"),Ie=m.Schema.intersect([m.Schema.object({commandName:m.Schema.string().default("qqqbot").description("父级指令的名称"),logincommandName:m.Schema.string().default("登录").description("`登录`的指令名称"),messagecommandName:m.Schema.string().default("查看通知").description("`查看站内通知信`的指令名称"),botdatacommandName:m.Schema.string().default("机器人数据").description("`查看机器人数据`的名称"),cancellogincommandName:m.Schema.string().default("取消登录").description("`取消登录`的指令名称")}).description("基础设置"),m.Schema.object({onlysessiondirect:m.Schema.boolean().default(!0).description("是否 仅允许私聊使用`登录指令`<br>因为涉及登录信息，私信可以确保数据不暴露给群友<br>请务必注意隐私安全！"),qrcodeservice:m.Schema.boolean().default(!1).description("登录地址使用`文本链接` 还是`生成二维码`<br>默认使用文本链接。<br>如果使用二维码请确保`koishi-plugin-qrcode-service-null`插件已经安装并且开启"),expireTimeSec:m.Schema.number().default(180).description("登录链接的超时时间（秒）<br>`开放平台登录二维码默认是180秒失效，请勿随意改动。`"),resolvetime:m.Schema.number().default(3).description("登录状态轮询间隔时间（秒）")}).description("进阶：登录设置"),m.Schema.object({isfigurebotdata:m.Schema.boolean().default(!0).description("使用合并转发发送机器人数据，否则累加发送<br>`仅支持onebot适配器`").experimental(),botdatanumber:m.Schema.number().default(7).description("默认返回的最近几天的数据（天）")}).description("进阶：机器人数据设置"),m.Schema.object({isfigureQQmessage:m.Schema.boolean().default(!0).description("使用合并转发发送站内信，否则累加发送<br>`仅支持onebot适配器`").experimental(),QQmessagenumber:m.Schema.number().default(3).description("默认返回的站内信数量（条）")}).description("进阶：站内信设置"),m.Schema.object({QQQ:m.Schema.boolean().default(!0).description("启用域名大写 以绕过QQ的URL消息限制<br>关闭 则直接发送 原始链接。"),rawmarkdown:m.Schema.boolean().default(!1).description("原生markdown回复"),consolelog:m.Schema.boolean().default(!1).description("日志调试模式`日常使用无需开启`")}).description("日志调试选项")]),b={};function H(o,e){function n(...t){e.consolelog&&o.logger.info(...t)}M(n,"logInfo"),o.i18n.define("zh-CN",{commands:{[e.commandName]:{description:"qqbot管理",messages:{}},[e.logincommandName]:{description:"登录q.qq.com后台",messages:{loginplease:`请使用手机QQ 点击链接登录：（{0}秒后过期）
{1}
开始验证登录状态...
如需取消登录请使用指令:
 ${e.commandName}.${e.cancellogincommandName}`,loginerror:"登录失败：{0}",logintimeout:"登录超时，请重新登录。",loginSuccess:`登录成功！
请使用其他指令以查看后台数据。`,loginSuccess2:`登录成功！
请使用上方按钮 查看后台数据。`,loginInProgress:"您已经有一个登录请求正在进行中，请稍后重试或使用 {0} 指令取消当前登录。",loginCancelled:"已取消当前登录请求。"}},[e.cancellogincommandName]:{description:"取消当前登录q.qq.com后台的操作"},[e.messagecommandName]:{description:"查看qqbot站内通知 [数量]",messages:{noLogin:"请先登录后再使用此功能。",fetchMessageError:"获取站内信失败: {0}",noMessages:"暂无站内信。",messageList:`站内信列表:
{0}`,messageItem:`站内信:
  标题: {0}
  时间: {1}
  内容: {2}`}},[e.botdatacommandName]:{description:"查看qqbot数据 [天数]",messages:{noLogin:"请先登录后再使用此功能。",fetchDataError:"获取机器人数据失败: {0}",noData:"暂无数据。",dataDisplay:`机器人数据（{0}）:
{1}`}}}}),o.command(`${e.commandName}`).action(async({session:t})=>{if(e.rawmarkdown)await u({msg_type:2,msg_id:`${t.messageId}`,markdown:{content:"请使用手机QQ 点击 登录按钮："},keyboard:{content:{rows:[{buttons:[{render_data:{label:`${e.logincommandName}`,style:2},action:{type:2,permission:{type:2},data:`${e.commandName} ${e.logincommandName}`,enter:!0}}]},{buttons:[{render_data:{label:`${e.botdatacommandName}`,style:2},action:{type:2,permission:{type:2},data:`${e.commandName} ${e.botdatacommandName}`,enter:!0}},{render_data:{label:`${e.messagecommandName}`,style:2},action:{type:2,permission:{type:2},data:`${e.commandName} ${e.messagecommandName}`,enter:!0}}]}]}}},t);else{await t.execute(`${e.commandName} -h`);return}}),o.command(`${e.commandName}.${e.logincommandName}`).action(async({session:t})=>{if(e.onlysessiondirect&&!t.isDirect)return"请在私聊中使用此指令";let a=t.userId;if(b[a]&&b[a].loginTime)if(e.rawmarkdown){await u({msg_type:2,msg_id:`${t.messageId}`,markdown:{content:t.text(`commands.${e.logincommandName}.messages.loginInProgress`,[e.commandName+" "+e.cancellogincommandName])},keyboard:{content:{rows:[{buttons:[{render_data:{label:`${e.cancellogincommandName}`,style:2},action:{type:2,permission:{type:2},data:`${e.commandName} ${e.cancellogincommandName}`,enter:!0}}]}]}}},t);return}else return t.text(`commands.${e.logincommandName}.messages.loginInProgress`,[e.commandName+" "+e.cancellogincommandName]);b[a]={loginTime:Date.now()};let r="https://q.qq.com/qrcode/create",d={type:"777"},c={"Content-Type":"application/json"};try{n(`[${a}] 开始请求登录二维码`);let $=await w(r,c,d,"POST");if($.data&&$.data.QrCode){let h=$.data.QrCode,l=`https://q.qq.com/login/applist?client=qq&code=${h}&ticket=null`;e.QQQ&&(l=l.replace("q.qq.com","Q.QQ.COM"));let i=e.expireTimeSec;if(e.qrcodeservice){let s=await o.qrcode.generateQRCode(l,"Text"),_=m.h.text(t.text(`commands.${e.logincommandName}.messages.loginplease`,[i]))+s;await t.send(_)}else if(e.rawmarkdown)await u({msg_type:2,msg_id:`${t.messageId}`,markdown:{content:`请使用手机QQ 点击 登录按钮：
---
登录完成后，请点击下方功能按钮以查询数。`},keyboard:{content:{rows:[{buttons:[{render_data:{label:"点击登录",style:1},action:{type:0,permission:{type:2},data:`${l}`,enter:!0}}]},{buttons:[{render_data:{label:`${e.cancellogincommandName}`,style:2},action:{type:2,permission:{type:2},data:`${e.commandName} ${e.cancellogincommandName}`,enter:!0}}]},{buttons:[{render_data:{label:`${e.botdatacommandName}`,style:2},action:{type:2,permission:{type:2},data:`${e.commandName} ${e.botdatacommandName}`,enter:!0}},{render_data:{label:`${e.messagecommandName}`,style:2},action:{type:2,permission:{type:2},data:`${e.commandName} ${e.messagecommandName}`,enter:!0}}]}]}}},t);else{let s=t.text(`commands.${e.logincommandName}.messages.loginplease`,[i,l]);await t.send(s)}n(`[${a}] 已发送登录链接，等待用户扫码或点击登录，链接: ${l}`);let Q=Date.now(),N=i*1e3;n(`[${a}] 等待 ${e.resolvetime} 秒后开始验证登录状态...`),await new Promise(s=>setTimeout(s,e.resolvetime*1e3));let v=M(async()=>{let s="https://q.qq.com/qrcode/get",_={qrcode:h};try{n(`[${a}] 正在验证登录状态...`);let g=await w(s,c,_,"POST");if(n(`[${a}] 登录验证 API 响应: ${JSON.stringify(g)}`),n("verifyResponse的内容是："),n(g),g.code===0&&g.message==="授权成功"&&g.data&&g.data.data){let p=g.data.data;return n("loginData的内容是：",p),p.uin&&p.developerId&&p.ticket&&p.appId?(b[a]={uin:p.uin,quid:p.developerId,ticket:p.ticket,appid:p.appId,loginTime:Date.now()},n(`[${a}] 登录成功，用户信息: uin=${p.uin}, quid=${p.developerId}`),!0):(n(`[${a}] 登录成功，但是返回数据不完整: ${JSON.stringify(p)}`),!1)}return g.code!==-1?(n(`[${a}] 登录验证 API 返回非 -1 状态码: ${g.code}, message: ${g.message}`),!1):null}catch(g){return k.error(`[${a}] 登录验证过程中发生错误:`,g),!1}},"checkLoginStatus"),I=null;for(;Date.now()-Q<N;){if(!b[a]||!b[a].loginTime){n(`[${a}] 登录已被取消`);return}if(I=await v(),I===!0){e.rawmarkdown?await t.send(t.text(`commands.${e.logincommandName}.messages.loginSuccess2`)):await t.send(t.text(`commands.${e.logincommandName}.messages.loginSuccess`));return}else if(I===!1){await t.send(t.text(`commands.${e.logincommandName}.messages.loginerror`,["验证失败，请重试"])),n(`[${a}] 登录验证失败`),delete b[a];return}await new Promise(s=>setTimeout(s,e.resolvetime*1e3))}await t.send(t.text(`commands.${e.logincommandName}.messages.logintimeout`)),n(`[${a}] 登录超时`),delete b[a]}else await t.send(t.text(`commands.${e.logincommandName}.messages.loginerror`,[$.message||"获取登录链接失败"])),k.error(`[${a}] 获取登录二维码失败:`,$),delete b[a]}catch($){await t.send(t.text(`commands.${e.logincommandName}.messages.loginerror`,[$.message])),k.error(`[${a}] 登录过程中发生异常:`,$),delete b[a]}finally{b[a]&&!b[a].uin&&delete b[a]}}),o.command(`${e.commandName}.${e.cancellogincommandName}`).action(async({session:t})=>{if(e.onlysessiondirect&&!t.isDirect)return"请在私聊中使用此指令";let a=t.userId;b[a]&&b[a].loginTime?(delete b[a],await t.send(t.text(`commands.${e.logincommandName}.messages.loginCancelled`)),n(`[${a}] 用户取消了登录`)):await t.send("当前没有正在进行的登录请求。")}),o.command(`${e.commandName}.${e.messagecommandName} [innumber:number]`).action(async({session:t},a)=>{if(e.onlysessiondirect&&!t.isDirect)return"请在私聊中使用此指令";let r=t.userId,d=b[r];if(!d||!d.uin)if(e.rawmarkdown){await u({msg_type:2,msg_id:`${t.messageId}`,markdown:{content:"请使用手机QQ 点击 登录按钮："},keyboard:{content:{rows:[{buttons:[{render_data:{label:`${e.logincommandName}`,style:2},action:{type:2,permission:{type:2},data:`${e.commandName} ${e.logincommandName}`,enter:!0}}]},{buttons:[{render_data:{label:`${e.botdatacommandName}`,style:2},action:{type:2,permission:{type:2},data:`${e.commandName} ${e.botdatacommandName}`,enter:!0}},{render_data:{label:`${e.messagecommandName}`,style:2},action:{type:2,permission:{type:2},data:`${e.commandName} ${e.messagecommandName}`,enter:!0}}]}]}}},t);return}else return t.text(`commands.${e.messagecommandName}.messages.noLogin`);let c="https://q.qq.com/pb/AppFetchPrivateMsg",$={"Content-Type":"application/json",Cookie:`quin=${d.uin}; quid=${d.quid}; qticket=${d.ticket}; developerId=${d.quid}`},h={page_num:0,page_size:9999,receiver:d.quid,appType:2};try{n(`[${r}] 开始获取站内信`);let l=await w(c,$,h,"POST");if(n("站内信数据内容：",l),l.code===0&&l.data&&l.data.privateMsgs){let i=l.data.privateMsgs;if(i.length>0){let Q=a||e.QQmessagenumber||3,N=Math.min(Q,i.length),v="",I=(0,m.h)("figure"),s={userId:t.userId,nickname:t.author?.nickname||t.username};for(let _=0;_<N;_++){let g=i[_],p=t.text(`commands.${e.messagecommandName}.messages.messageItem`,[g.title,new Date(parseInt(g.send_time)*1e3).toLocaleString(),g.content]);if(e.QQQ){let C=/(https?:\/\/[^\s]+)/g;p=p.replace(C,"")}e.isfigureQQmessage&&t.platform==="onebot"?I.children.push((0,m.h)("message",s,p)):v+=p+`


`}e.isfigureQQmessage&&t.platform==="onebot"?(n(`[${r}] 使用合并转发发送站内信`),await t.send(I)):(n(`[${r}] 使用累加拼接发送站内信`),e.rawmarkdown?await u({msg_type:2,msg_id:`${t.messageId}`,markdown:{content:`\`\`\`
${v}
\`\`\``},keyboard:{content:{rows:[{buttons:[{render_data:{label:`${e.botdatacommandName}`,style:2},action:{type:2,permission:{type:2},data:`${e.commandName} ${e.botdatacommandName}`,enter:!0}},{render_data:{label:`${e.messagecommandName}`,style:2},action:{type:2,permission:{type:2},data:`${e.commandName} ${e.messagecommandName}`,enter:!0}}]}]}}},t):await t.send(v.trim())),n(`[${r}] 成功获取站内信，共 ${i.length} 条，显示 ${N} 条`)}else await t.send(t.text(`commands.${e.messagecommandName}.messages.noMessages`)),n(`[${r}] 暂无站内信`)}else await t.send(t.text(`commands.${e.messagecommandName}.messages.fetchMessageError`,[l.error||l.message||"未知错误"])),k.error(`[${r}] 获取站内信 API 错误:`,l)}catch(l){await t.send(t.text(`commands.${e.messagecommandName}.messages.fetchMessageError`,[l.message])),k.error(`[${r}] 获取站内信过程中发生异常:`,l)}}),o.command(`${e.commandName}.${e.botdatacommandName} [days:number]`).action(async({session:t},a)=>{let r=t.userId,d=b[r];if(!d||!d.uin)return t.text(`commands.${e.botdatacommandName}.messages.noLogin`);let c=a||e.botdatanumber||7;c<=0&&(c=1),c>30&&(c=30);let h=`https://bot.q.qq.com/cgi-bin/datareport/read?bot_appid=${d.appid}&data_type=1&data_range=2&scene_id=1`,l={"Content-Type":"application/json",Cookie:`quin=${d.uin}; quid=${d.quid}; qticket=${d.ticket}; developerId=${d.quid}`};try{n(`[${r}] 开始获取机器人数据，请求30天数据，显示天数: ${c}`);let i=await w(h,l);if(n(i),i.retcode===0&&i.data&&i.data.msg_data&&i.data.msg_data.length>0){let Q=i.data.msg_data;if(Q.length===0)return t.text(`commands.${e.botdatacommandName}.messages.noData`);let N="",v=(0,m.h)("figure"),I={userId:t.userId,nickname:t.author?.nickname||t.username},s=Math.min(c,Q.length),_=Q.slice(0,s),g=0,p=0,C=0,j=0,O=0,L=0,U=0,R=0,T=0;_.forEach(y=>{g+=parseInt(y.up_msg_cnt)||0,p+=parseInt(y.up_msg_uv)||0,C+=parseInt(y.down_msg_cnt)||0,j+=parseInt(y.down_passive_msg_cnt)||0,O+=parseInt(y.down_initiative_msg_cnt)||0,L+=parseInt(y.inline_msg_cnt)||0,U+=parseInt(y.bot_msg_cnt)||0,y.next_day_retention!==void 0&&y.next_day_retention!==0&&y.next_day_retention!=="-"&&(R+=parseFloat(y.next_day_retention)||0,T++)});let W=Math.round(g/s),X=Math.round(p/s),Y=Math.round(C/s),Z=Math.round(j/s),ee=Math.round(O/s),te=Math.round(L/s),ae=Math.round(U/s),ne=T>0?(R/T).toFixed(8):"-",oe=_[s-1].report_date,me=_[0].report_date,re=_[0].scene_name||"全部",de=[`报告日期: ${oe} - ${me}`,`平均上行消息量: ${W}`,`平均上行消息人数: ${X}`,`平均下行消息量: ${Y}`,`平均被动消息数: ${Z}`,`平均主动消息数: ${ee}`,`平均内联消息数: ${te}`,`平均总消息量: ${ae}`,`平均对话用户次日留存: ${ne}`,`场景名称: ${re}`].join(`
`),E=t.text(`commands.${e.botdatacommandName}.messages.dataDisplay`,["以下平均数据",de]);e.isfigurebotdata&&t.platform==="onebot"?v.children.push((0,m.h)("message",I,E)):N+=E+`


`;for(let y=0;y<s;y++){let q=Q[y],se=[`报告日期: ${q.report_date}`,`上行消息量: ${q.up_msg_cnt}`,`上行消息人数: ${q.up_msg_uv}`,`下行消息量: ${q.down_msg_cnt}`,`被动消息数: ${q.down_passive_msg_cnt}`,`主动消息数: ${q.down_initiative_msg_cnt}`,`内联消息数: ${q.inline_msg_cnt}`,`总消息量: ${q.bot_msg_cnt}`,`对话用户次日留存: ${q.next_day_retention!==void 0&&q.next_day_retention!==0?q.next_day_retention:"-"}`,`场景名称: ${q.scene_name}`].join(`
`),A=t.text(`commands.${e.botdatacommandName}.messages.dataDisplay`,[`${q.report_date}`,se]);e.isfigurebotdata&&t.platform==="onebot"?v.children.push((0,m.h)("message",I,A)):N+=A+`


`}e.isfigurebotdata&&t.platform==="onebot"?(n(`[${r}] 使用合并转发发送机器人数据`),await t.send(v)):(n(`[${r}] 发送累加文本机器人数据`),e.rawmarkdown?await u({msg_type:2,msg_id:`${t.messageId}`,markdown:{content:`\`\`\`
${N}
\`\`\``},keyboard:{content:{rows:[{buttons:[{render_data:{label:`${e.botdatacommandName}`,style:2},action:{type:2,permission:{type:2},data:`${e.commandName} ${e.botdatacommandName}`,enter:!0}},{render_data:{label:`${e.messagecommandName}`,style:2},action:{type:2,permission:{type:2},data:`${e.commandName} ${e.messagecommandName}`,enter:!0}}]}]}}},t):await t.send(N.trim())),n(`[${r}] 成功获取机器人数据，共30天数据，显示 ${c} 天`)}else await t.send(t.text(`commands.${e.botdatacommandName}.messages.fetchDataError`,[i.msg||"未知错误"])),k.error(`[${r}] 获取机器人数据 API 错误:`,i)}catch(i){await t.send(t.text(`commands.${e.botdatacommandName}.messages.fetchDataError`,[i.message])),k.error(`[${r}] 获取机器人数据过程中发生异常:`,i)}});async function w(t,a={},r=null,d="GET"){let c={method:d,headers:a};r&&(c.body=JSON.stringify(r));let $=await fetch(t,c);if(!$.ok){let h=`HTTP error! status: ${$.status}`;throw k.error(h),new Error(h)}return await $.json()}M(w,"fetchData");async function u(t,a){try{let{guild:r,user:d}=a.event,{qq:c,qqguild:$,channelId:h}=a;r?.id?c?await c.sendMessage(h,t):$&&await $.sendMessage(h,t):d?.id&&c&&await c.sendPrivateMessage(d.id,t)}catch(r){o.logger.error("发送markdown消息时出错:",r)}}M(u,"sendsomeMessage")}M(H,"apply")});export default Qe();
