var fe=Object.create;var G=Object.defineProperty;var me=Object.getOwnPropertyDescriptor;var pe=Object.getOwnPropertyNames;var Te=Object.getPrototypeOf,Ie=Object.prototype.hasOwnProperty;var Y=(e,t)=>()=>(e&&(t=e(e=0)),t);var Me=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Ae=(e,t)=>{for(var s in t)G(e,s,{get:t[s],enumerable:!0})},v=(e,t,s,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of pe(t))!Ie.call(e,n)&&n!==s&&G(e,n,{get:()=>t[n],enumerable:!(i=me(t,n))||i.enumerable});return e},u=(e,t,s)=>(v(e,t,"default"),s&&v(s,t,"default")),W=(e,t,s)=>(s=e!=null?fe(Te(e)):{},v(t||!e||!e.__esModule?G(s,"default",{value:e,enumerable:!0}):s,e)),M=e=>v(G({},"__esModule",{value:!0}),e);import{Buffer as f}from"https://registry.koishi.chat/modules/buffer/index.js";import P from"https://registry.koishi.chat/modules/process/index.js";var m=Y(()=>{});var h={};import*as ye from"https://registry.koishi.chat/modules/@satorijs/core/index.js";var p=Y(()=>{m();u(h,ye)});var Q=Me((xe,ge)=>{m();var N=Object.defineProperty,we=Object.getOwnPropertyDescriptor,Se=Object.getOwnPropertyNames,ve=Object.prototype.hasOwnProperty,o=(e,t)=>N(e,"name",{value:t,configurable:!0}),K=(e,t)=>{for(var s in t)N(e,s,{get:t[s],enumerable:!0})},Ge=(e,t,s,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Se(t))!ve.call(e,n)&&n!==s&&N(e,n,{get:()=>t[n],enumerable:!(i=we(t,n))||i.enumerable});return e},Le=e=>Ge(N({},"__esModule",{value:!0}),e),X={};K(X,{QQ:()=>j,QQBot:()=>O,QQGuildMessageEncoder:()=>Ee,QQMessageEncoder:()=>ue,WsClient:()=>S,adaptSession:()=>F,decodeChannel:()=>D,decodeGroupMessage:()=>b,decodeGuild:()=>L,decodeGuildMember:()=>x,decodeMessage:()=>U,decodeUser:()=>w,default:()=>Re,escapeMarkdown:()=>he,setupReaction:()=>R});ge.exports=Le(X);var j={};K(j,{AnnounceType:()=>ie,ChannelPrivateType:()=>te,ChannelSpeakPermission:()=>se,ChannelSubType:()=>ee,ChannelType:()=>Z,ChatType:()=>oe,DefaultRoles:()=>z,DeleteHistoryMsgDays:()=>de,EmojiType:()=>ae,Forum:()=>B,Intents:()=>q,Message:()=>A,Opcode:()=>J,ReactionTargetType:()=>ne,RemindType:()=>re});var q=(e=>(e[e.GUILDS=1]="GUILDS",e[e.GUILD_MEMBERS=2]="GUILD_MEMBERS",e[e.GUILD_MESSAGES=512]="GUILD_MESSAGES",e[e.GUILD_MESSAGE_REACTIONS=1024]="GUILD_MESSAGE_REACTIONS",e[e.DIRECT_MESSAGES=4096]="DIRECT_MESSAGES",e[e.OPEN_FORUMS_EVENT=262144]="OPEN_FORUMS_EVENT",e[e.AUDIO_OR_LIVE_CHANNEL_MEMBER=524288]="AUDIO_OR_LIVE_CHANNEL_MEMBER",e[e.USER_MESSAGE=33554432]="USER_MESSAGE",e[e.INTERACTIONS=67108864]="INTERACTIONS",e[e.MESSAGE_AUDIT=134217728]="MESSAGE_AUDIT",e[e.FORUM_EVENT=268435456]="FORUM_EVENT",e[e.AUDIO_ACTION=536870912]="AUDIO_ACTION",e[e.PUBLIC_GUILD_MESSAGES=1073741824]="PUBLIC_GUILD_MESSAGES",e))(q||{}),J=(e=>(e[e.DISPATCH=0]="DISPATCH",e[e.HEARTBEAT=1]="HEARTBEAT",e[e.IDENTIFY=2]="IDENTIFY",e[e.RESUME=6]="RESUME",e[e.RECONNECT=7]="RECONNECT",e[e.INVALID_SESSION=9]="INVALID_SESSION",e[e.HELLO=10]="HELLO",e[e.HEARTBEAT_ACK=11]="HEARTBEAT_ACK",e[e.HTTP_CAKKBACK_ACK=12]="HTTP_CAKKBACK_ACK",e))(J||{}),A;(e=>{let t;(i=>{i[i.TEXT=0]="TEXT",i[i.MIXED=1]="MIXED",i[i.MARKDOWN=2]="MARKDOWN",i[i.ARK=3]="ARK",i[i.EMBED=4]="EMBED",i[i.MEDIA=7]="MEDIA"})(t=e.Type||(e.Type={}));let s;(i=>{let n;(r=>{r[r.IMAGE=1]="IMAGE",r[r.VIDEO=2]="VIDEO",r[r.AUDIO=3]="AUDIO",r[r.FILE=4]="FILE"})(n=i.Type||(i.Type={}))})(s=e.File||(e.File={}))})(A||(A={}));var z=(e=>(e[e.ALL=1]="ALL",e[e.ADMIN=2]="ADMIN",e[e.OWNER=4]="OWNER",e[e.SUBCHANNEL_ADMIN=5]="SUBCHANNEL_ADMIN",e))(z||{}),Z=(e=>(e[e.TEXT=0]="TEXT",e[e.VOICE=2]="VOICE",e[e.GROUP=4]="GROUP",e[e.LIVE=10005]="LIVE",e[e.APPLICATION=10006]="APPLICATION",e[e.FORUM=10007]="FORUM",e))(Z||{}),ee=(e=>(e[e.IDLE=0]="IDLE",e[e.ANNOUNCEMENT=1]="ANNOUNCEMENT",e[e.STRATEGY=2]="STRATEGY",e[e.BLACK=3]="BLACK",e))(ee||{}),te=(e=>(e[e.PUBLIC=0]="PUBLIC",e[e.ADMIN_ONLY=1]="ADMIN_ONLY",e[e.SELECTED_MEMBERS=2]="SELECTED_MEMBERS",e))(te||{}),se=(e=>(e[e.INVALID=0]="INVALID",e[e.ALL=1]="ALL",e[e.SELECTED_MEMBERS=2]="SELECTED_MEMBERS",e))(se||{}),ie=(e=>(e[e.MEMBER=0]="MEMBER",e[e.WELCOME=1]="WELCOME",e))(ie||{}),ne=(e=>(e.MESSAGE="ReactionTargetType_MSG",e.POST="ReactionTargetType_FEED",e.COMMENT="ReactionTargetType_COMMNENT",e.REPLY="ReactionTargetType_REPLY",e))(ne||{}),ae=(e=>(e[e.SYSTEM=1]="SYSTEM",e[e.DEFAULT=2]="DEFAULT",e))(ae||{}),re=(e=>(e.NEVER="0",e.START="1",e.BEFORE_5="2",e.BEFORE_15="3",e.BEFORE_30="4",e.BEFORE_60="5",e))(re||{}),de=(e=>(e[e.ALL=-1]="ALL",e[e.NONE=0]="NONE",e[e.DAY_3=3]="DAY_3",e[e.DAY_7=7]="DAY_7",e[e.DAY_15=15]="DAY_15",e[e.DAY_30=30]="DAY_30",e))(de||{}),B;(e=>{let t;(a=>{a[a.PUBLISH_THREAD=1]="PUBLISH_THREAD",a[a.PUBLISH_POST=2]="PUBLISH_POST",a[a.PUBLISH_REPLY=3]="PUBLISH_REPLY"})(t=e.AuditType||(e.AuditType={}));let s;(a=>{a[a.TEXT=1]="TEXT",a[a.AT=2]="AT",a[a.URL=3]="URL",a[a.EMOJI=4]="EMOJI",a[a.CHANNEL=5]="CHANNEL",a[a.VIDEO=10]="VIDEO",a[a.IMAGE=11]="IMAGE"})(s=e.RichType||(e.RichType={}));let i;(a=>{a[a.AT_EXPLICIT_USER=1]="AT_EXPLICIT_USER",a[a.AT_ROLE_GROUP=2]="AT_ROLE_GROUP",a[a.AT_GUILD=3]="AT_GUILD"})(i=e.AtType||(e.AtType={}));let n;(a=>{a[a.ELEM_TYPE_TEXT=1]="ELEM_TYPE_TEXT",a[a.ELEM_TYPE_IMAGE=2]="ELEM_TYPE_IMAGE",a[a.ELEM_TYPE_VIDEO=3]="ELEM_TYPE_VIDEO",a[a.ELEM_TYPE_URL=4]="ELEM_TYPE_URL"})(n=e.ElemType||(e.ElemType={}));let r;(a=>{a[a.ALIGNMENT_LEFT=0]="ALIGNMENT_LEFT",a[a.ALIGNMENT_MIDDLE=1]="ALIGNMENT_MIDDLE",a[a.ALIGNMENT_RIGHT=2]="ALIGNMENT_RIGHT"})(r||(r={}));let d;(a=>{a[a.FORMAT_TEXT=1]="FORMAT_TEXT",a[a.FORMAT_HTML=2]="FORMAT_HTML",a[a.FORMAT_MARKDOWN=3]="FORMAT_MARKDOWN",a[a.FORMAT_JSON=4]="FORMAT_JSON"})(d=e.PostFormat||(e.PostFormat={}))})(B||(B={}));var oe=(e=>(e[e.GROUP=1]="GROUP",e[e.DIRECT=2]="DIRECT",e[e.CHANNEL=3]="CHANNEL",e))(oe||{}),l=(p(),M(h)),y=(p(),M(h)),c=(p(),M(h)),L=o(e=>({id:e.id,name:e.name}),"decodeGuild"),D=o(e=>({id:e.id,name:e.name,type:c.Universal.Channel.Type.TEXT}),"decodeChannel"),w=o(e=>({id:e.id,name:e.username,isBot:e.bot,avatar:e.avatar}),"decodeUser"),x=o(e=>({user:w(e.user),nick:e.nick,roles:e.roles}),"decodeGuildMember");function b(e,t,s={},i=s){s.id=t.id,s.elements=[],t.content.length&&s.elements.push(c.h.text(t.content));for(let r of t.attachments??[])r.content_type==="file"?s.elements.push(c.h.file(r.url,{filename:r.filename})):r.content_type.startsWith("image/")?s.elements.push(c.h.image(r.url)):r.content_type==="voice"?s.elements.push(c.h.audio(r.url)):r.content_type==="video"&&s.elements.push(c.h.video(r.url));if(s.content=s.elements.join(""),!i)return s;let n=t.timestamp;return n.includes("m=")&&(n=t.timestamp.slice(0,t.timestamp.indexOf("m=")).trim().replace(/\+(\d{4}) CST/,"GMT+$1")),i.timestamp=new Date(n).valueOf(),i.guild=t.group_id&&{id:t.group_id},i.user={id:t.author.id,avatar:`https://q.qlogo.cn/qqapp/${e.config.id}/${t.author.id}/640`},s}o(b,"decodeGroupMessage");async function U(e,t,s={},i=s){s.id=s.messageId=t.id,s.content=(t.content??"").replace(/<@!(\d+)>/g,(r,d)=>c.h.at(d).toString());let{attachments:n=[]}=t;return n.length&&!/\s$/.test(s.content)&&(s.content+=" "),s.content=n.filter(({content_type:r})=>r.startsWith("image")).reduce((r,d)=>r+c.h.image("https://"+d.url),s.content),s.elements=c.h.parse(s.content),s.elements=c.h.transform(s.elements,{text:o(r=>c.h.unescape(r.content),"text")}),t.message_reference&&(s.quote=e.getMessage?await e.getMessage(t.channel_id,t.message_reference.message_id):{id:t.message_reference.message_id}),i&&(i.timestamp=new Date(t.timestamp).valueOf(),i.user=w(t.author),t.direct_message?(i.guild={id:`${t.src_guild_id}_${t.guild_id}`},i.channel={id:`${t.guild_id}_${t.channel_id}`,type:c.Universal.Channel.Type.DIRECT}):(i.guild={id:t.guild_id},i.channel={id:t.channel_id,type:c.Universal.Channel.Type.TEXT})),s}o(U,"decodeMessage");function R(e,t){return e.userId=t.user_id,e.guildId=t.guild_id,e.channelId=t.channel_id,e.content=`${t.emoji.type}:${t.emoji.id}`,e.messageId=t.target.id,e.isDirect=!1,e}o(R,"setupReaction");async function F(e,t){let s=e.session();if(["GROUP_AT_MESSAGE_CREATE","C2C_MESSAGE_CREATE","FRIEND_ADD","FRIEND_DEL","GROUP_ADD_ROBOT","GROUP_DEL_ROBOT","INTERACTION_CREATE"].includes(t.t)?s.setInternal(e.platform,t):(s=e.guildBot.session(),s.setInternal(e.guildBot.platform,t)),t.t==="MESSAGE_CREATE"||t.t==="AT_MESSAGE_CREATE"||t.t==="DIRECT_MESSAGE_CREATE"){if(e.config.type==="private"&&t.t==="AT_MESSAGE_CREATE"&&e.config.intents&512)return;s.type="message",await U(e,t.d,s.event.message={},s.event)}else if(t.t==="MESSAGE_REACTION_ADD"){if(t.d.target.type!=="ReactionTargetType_MSG")return;R(s,t.d),s.type="reaction-added"}else if(t.t==="MESSAGE_REACTION_REMOVE"){if(t.d.target.type!=="ReactionTargetType_MSG")return;R(s,t.d),s.type="reaction-removed"}else if(t.t==="CHANNEL_CREATE"||t.t==="CHANNEL_UPDATE"||t.t==="CHANNEL_DELETE")s.type={CHANNEL_CREATE:"channel-added",CHANNEL_UPDATE:"channel-updated",CHANNEL_DELETE:"channel-deleted"}[t.t],s.guildId=t.d.guild_id,s.event.channel=D(t.d);else if(t.t==="GUILD_CREATE"||t.t==="GUILD_UPDATE"||t.t==="GUILD_DELETE")s.type={GUILD_CREATE:"guild-added",GUILD_UPDATE:"guild-updated",GUILD_DELETE:"guild-deleted"}[t.t],s.event.guild=L(t.d);else if(t.t==="DIRECT_MESSAGE_DELETE"||t.t==="MESSAGE_DELETE"||t.t==="PUBLIC_MESSAGE_DELETE"){if(e.config.type==="private"&&t.t==="PUBLIC_MESSAGE_DELETE"&&e.config.intents&512)return;s.type="message-deleted",s.userId=t.d.message.author.id,s.operatorId=t.d.op_user.id,s.messageId=t.d.message.id,s.isDirect=t.d.message.direct_message,s.isDirect?(s.guildId=`${t.d.message.src_guild_id}_${t.d.message.guild_id}`,s.channelId=`${t.d.message.guild_id}_${t.d.message.channel_id}`):(s.guildId=t.d.message.guild_id,s.channelId=t.d.message.channel_id)}else if(t.t==="GROUP_AT_MESSAGE_CREATE")s.type="message",s.isDirect=!1,b(e,t.d,s.event.message={},s.event),s.channelId=s.guildId,s.elements.unshift(c.h.at(s.selfId));else if(t.t==="C2C_MESSAGE_CREATE")s.type="message",s.isDirect=!0,b(e,t.d,s.event.message={},s.event),s.channelId=s.userId;else if(t.t==="FRIEND_ADD")s.type="friend-added",s.timestamp=t.d.timestamp,s.userId=t.d.openid;else if(t.t==="FRIEND_DEL")s.type="friend-added",s.timestamp=t.d.timestamp,s.userId=t.d.openid;else if(t.t==="GROUP_ADD_ROBOT")s.type="guild-added",s.timestamp=t.d.timestamp,s.guildId=t.d.group_openid,s.operatorId=t.d.op_member_openid;else if(t.t==="GROUP_DEL_ROBOT")s.type="guild-removed",s.timestamp=t.d.timestamp,s.guildId=t.d.group_openid,s.operatorId=t.d.op_member_openid;else if(t.t==="INTERACTION_CREATE")s.type="interaction/button",s.userId=t.d.group_member_openid??t.d.user_openid??t.d.data.resolved.user_id,t.d.chat_type===1?(s.guildId=t.d.group_openid,s.channelId=t.d.group_openid,s.isDirect=!1):t.d.chat_type===3?(s.channelId=t.d.channel_id,s.isDirect=!1):t.d.chat_type===2&&(s.isDirect=!0,s.channelId=s.userId),s.event.button={id:t.d.data.resolved.button_id,data:t.d.data.resolved.button_data},e.config.manualAcknowledge||e.internal.acknowledgeInteraction(t.d.id,{code:0}).catch(()=>{});else if(t.t==="GUILD_MEMBER_ADD"||t.t==="GUILD_MEMBER_DELETE"||t.t==="GUILD_MEMBER_UPDATE")s.type={GUILD_MEMBER_ADD:"guild-member-added",GUILD_MEMBER_UPDATE:"guild-member-updated",GUILD_MEMBER_DELETE:"guild-member-removed"}[t.t],s.guildId=t.d.guild_id,s.operatorId=t.d.op_user_id,s.timestamp=Date.now(),s.event.user=w(t.d.user);else return;return s}o(F,"adaptSession");var S=class extends y.Adapter.WsClient{static{o(this,"WsClient")}_sessionId="";_s=null;_ping;async prepare(){this.bot.config.authType==="bearer"&&await this.bot.getAccessToken();try{let{url:e}=await this.bot.internal.getGateway();return e=e.replace("api.sgroup.qq.com",new URL(this.bot.config.endpoint).host),this.bot.logger.debug("url: %s",e),this.bot.http.ws(e)}catch(e){throw this.bot.http.isError(e)&&e.response&&this.bot.logger.warn("GET /gateway response: %o",e.response.data),e}}heartbeat(){this.socket.send(JSON.stringify({op:1,s:this._s}))}async accept(){this.socket.addEventListener("message",async({data:e})=>{let t=JSON.parse(e.toString());if(this.bot.logger.debug("websocket receives %o",t),t.op===10){let s=this.bot.config.authType==="bearer"?`QQBot ${await this.bot.getAccessToken()}`:`Bot ${this.bot.config.id}.${this.bot.config.token}`;this._sessionId?this.socket.send(JSON.stringify({op:6,d:{token:s,session_id:this._sessionId,seq:this._s}})):this.socket.send(JSON.stringify({op:2,d:{token:s,intents:this.bot.config.intents,shard:[0,1]}})),this._ping=setInterval(()=>this.heartbeat(),t.d.heartbeat_interval)}else if(t.op===9)this._sessionId="",this._s=null,this.bot.logger.warn("offline: invalid session");else if(t.op===7)this.bot.logger.warn("offline: server request reconnect");else if(t.op===0){if(this.bot.dispatch(this.bot.session({type:"internal",_type:"qq/"+t.t.toLowerCase().replace(/_/g,"-"),_data:t.d})),this._s=t.s,t.t==="READY")return this._sessionId=t.d.session_id,this.bot.user=w(t.d.user),this.bot.guildBot.user=this.bot.user,await this.bot.initialize(),this.bot.online();if(t.t==="RESUMED")return this.bot.online();let s=await F(this.bot,t);s&&this.bot.dispatch(s)}}),this.socket.addEventListener("close",e=>{this.bot.logger.debug("websocket closed, code %o, reason: %s",e.code,e.reason),e.code>4e3&&![4008,4009].includes(e.code)&&(this._sessionId="",this._s=null),clearInterval(this._ping)})}};(e=>{e.Options=y.Schema.intersect([y.Adapter.WsClientConfig])})(S||(S={}));var V=(p(),M(h)),De=(p(),M(h)),le=class{constructor(e,t){this.bot=e,this.http=t}static{o(this,"Internal")}static define(e,t,s){for(let i in t)for(let n in t[i]){let r=n;for(let d of(0,De.makeArray)(t[i][r]))(e?$:C).prototype[d]=async function(...a){let I=a.join(", "),g=i.replace(/\{([^}]+)\}/g,()=>{if(!a.length)throw new Error(`too few arguments for ${i}, received ${I}`);return a.shift()}),_={...s};if(a.length===1)r==="GET"||r==="DELETE"?_.params=a[0]:_.data=a[0];else if(a.length===2&&r!=="GET"&&r!=="DELETE")_.data=a[0],_.params=a[1];else if(a.length>1)throw new Error(`too many arguments for ${i}, received ${I}`);let H=this.http();try{this.bot.logger.debug(`${r} ${g} request: %o`,_);let E=await H(g,{..._,method:r});return this.bot.logger.debug(`${r} ${g} response: %o, trace id: %s`,E.data,E.headers.get("x-tps-trace-id")),E.data}catch(E){throw!H.isError(E)||!E.response||this.bot.logger.debug(`${r} ${g} response: %o, trace id: %s`,E.response.data,E.response.headers.get("x-tps-trace-id")),E}}}}},C=class extends le{static{o(this,"GroupInternal")}},$=class extends le{static{o(this,"GuildInternal")}};C.define(!1,{"/v2/groups/{channel.id}/messages":{POST:"sendMessage"},"/v2/groups/{channel.id}/messages/{message.id}":{DELETE:"deleteMessage"},"/v2/users/{user.id}/messages":{POST:"sendPrivateMessage"},"/v2/users/{user.id}/messages/{message.id}":{DELETE:"deletePrivateMessage"},"/v2/users/{user.id}/files":{POST:"sendFilePrivate"},"/v2/groups/{channel.id}/files":{POST:"sendFileGuild"},"/gateway":{GET:"getGateway"},"/gateway/bot":{GET:"getGatewayBot"}});C.define(!1,{"/interactions/{interaction.id}":{PUT:"acknowledgeInteraction"}},{responseType:"text"});$.define(!0,{"/users/@me":{GET:"getMe"},"/users/@me/guilds":{GET:"getGuilds"},"/guilds/{guild.id}":{GET:"getGuild"},"/guilds/{guild.id}/channels":{GET:"getChannels",POST:"createGuildChannel"},"/channels/{channel.id}":{GET:"getChannel",PATCH:"modifyChannel",DELETE:"deleteChannel"},"/channels/{channel.id}/online_nums":{GET:"getChannelOnlineNums"},"/guilds/{guild.id}/members":{GET:"getGuildMembers"},"/guilds/{guild.id}/roles/{role.id}/members":{GET:"getGuildRoleMembers"},"/guilds/{guild.id}/members/{user.id}":{GET:"getGuildMember",DELETE:"removeGuildMember"},"/guilds/{guild.id}/roles":{GET:"getGuildRoles",POST:"createGuildRole"},"/guilds/{guild.id}/roles/{role.id}":{PATCH:"modifyGuildRole",DELETE:"removeGuildRole"},"/guilds/{guild.id}/members/{user.id}/roles/{role.id}":{PUT:"addGuildMemberRole",DELETE:"removeGuildMemberRole"},"/channels/{channel.id}/members/{user.id}/permissions":{GET:"getChannelMemberPermissions",PUT:"modifyChannelMemberPermissions"},"/channels/{channel.id}/roles/{role.id}/permissions":{GET:"getChannelRole",PUT:"modifyChannelRole"},"/channels/{channel.id}/messages/{message.id}":{GET:"getMessage",DELETE:"deleteMessage"},"/channels/{channel.id}/messages":{POST:"sendMessage"},"/dms/{guild.id}/messages":{POST:"sendDM"},"/guilds/{guild.id}/messages/setting":{GET:"getMessageSetting"},"/users/@me/dms":{POST:"createDMS"},"/dms/{guild.id}/messages/{message.id}":{DELETE:"deleteDM"},"/guilds/{guild.id}/mute":{PATCH:"muteGuildOrMembers"},"/guilds/{guild.id}/members/{user.id}/mute":{PATCH:"muteGuildMember"},"/guilds/{guild.id}/announces":{POST:"createGuildAnnounce"},"/guilds/{guild.id}/announces/{message.id}":{DELETE:"removeGuildAnnounce"},"/channels/{channel.id}/pins/{message.id}":{PUT:"createPinsMessage",DELETE:"removePinsMessage"},"/channels/{channel.id}/pins":{GET:"getPinsMessage"},"/channels/{channel.id}/schedules":{GET:"getSchedules",POST:"createSchedule"},"/channels/{channel.id}/schedules/{schedule.id}":{GET:"getSchedule",PATCH:"modifySchedule",DELETE:"removeSchedule"},"/channels/{channel.id}/messages/{message.id}/reactions/{type}/{id}":{PUT:"createReaction",DELETE:"deleteReaction",GET:"getReactions"},"/channels/{channel.id}/threads":{GET:"listThreads",PUT:"createPost"},"/channels/{channel.id}/threads/{thread.id}":{DELETE:"removePost"},"/guilds/{guild.id}/api_permissions":{GET:"getGuildApiPermissions"},"/guilds/{guild.id}/api_permissions/demand":{POST:"createGuildApiPermissionDemand"}});var ce=(p(),M(h)),he=o(e=>e.replace(/([\\`*_[\*_~`\]\-(#!>])/g,"\\$&"),"escapeMarkdown"),Ee=class extends ce.MessageEncoder{static{o(this,"QQGuildMessageEncoder")}content="";file;filename;fileUrl;passiveId;passiveEventId;reference;retry=!1;async flush(){if(!this.content.trim().length&&!this.file&&!this.fileUrl)return;let e=this.channelId.includes("_"),t=`/channels/${this.channelId}/messages`;e&&(t=`/dms/${this.channelId.split("_")[0]}/messages`);let s=!!this.file,i=this.options?.session?.messageId;this.options?.session&&Date.now()-this.options?.session?.timestamp>k&&(i=null),this.passiveId&&(i=this.passiveId);let n;this.bot.logger.debug("use form data %s",s);try{if(s){let d=new FormData;d.append("content",this.content),this.options?.session&&i&&d.append("msg_id",i),this.passiveEventId&&d.append("event_id",this.passiveEventId),this.file&&d.append("file_image",this.file,this.filename),n=await this.bot.http.post(t,d)}else{let d={content:this.content,msg_id:i,image:this.fileUrl,...this.reference?{message_reference:{message_id:this.reference}}:{},...this.passiveEventId?{event_id:this.passiveEventId}:{}};e?n=await this.bot.internal.sendDM(this.channelId.split("_")[0],d):n=await this.bot.internal.sendMessage(this.channelId,d)}}catch(d){this.bot.http.isError(d)&&(this.bot.parent.config.retryWhen.includes(d.response.data.code)&&!this.retry&&this.fileUrl&&(this.bot.logger.warn("retry image sending"),this.retry=!0,await this.resolveFile(null,!0),await this.flush()),s&&this.bot.logger.warn(`POST ${t} response: %o, trace id: %s`,d.response.data,d.response.headers.get("x-tps-trace-id")))}let r=this.bot.session();if(r.type="send",r.guildId=this.session.guildId,r.channelId=this.channelId,r.isDirect=e,n?.id)r.messageId=n.id,r.app.emit(r,"send",r),this.results.push(r.event.message);else if(n?.code===304023&&this.bot.config.parent.intents&134217728)try{let d=await this.audit(n.data.message_audit.audit_id);r.messageId=d.message_id,r.app.emit(r,"send",r),this.results.push(r.event.message)}catch(d){this.bot.logger.error(d)}this.content="",this.file=null,this.filename=null,this.fileUrl=null,this.retry=!1}async audit(e){return new Promise((t,s)=>{let i=this.bot.ctx.on("qq/message-audit-pass",r=>{r.audit_id===e&&(i(),n(),t(r))}),n=this.bot.ctx.on("qq/message-audit-reject",r=>{r.audit_id===e&&(i(),n(),s(r))})})}async resolveFile(e,t=!1){if(!t&&!await this.bot.ctx.http.isLocal(e.src||e.url))return this.fileUrl=e.src||e.url;let{data:s,filename:i,type:n}=await this.bot.ctx.http.file(this.fileUrl||e.src||e.url,e);this.file=new Blob([s],{type:n}),this.filename=i,this.fileUrl=null}async visit(e){let{type:t,attrs:s,children:i}=e;if(t==="text")this.content+=s.content;else if(t==="at")switch(s.type){case"all":this.content+="@everyone";break;default:this.content+=`<@${s.id}>`}else t==="br"?this.content+=`
`:t==="p"?(this.content.endsWith(`
`)||(this.content+=`
`),await this.render(i),this.content.endsWith(`
`)||(this.content+=`
`)):t==="sharp"?this.content+=`<#${s.id}>`:t==="quote"?(this.reference=s.id,await this.flush()):t==="passive"?(s.messageId&&(this.passiveId=s.messageId),s.eventId&&(this.passiveEventId=s.eventId)):(t==="img"||t==="image")&&(s.src||s.url)?(await this.flush(),await this.resolveFile(s),await this.flush()):t==="message"?(await this.flush(),await this.render(i),await this.flush()):await this.render(i)}},k=5*60*1e3-2e3,ue=class extends ce.MessageEncoder{static{o(this,"QQMessageEncoder")}content="";passiveId;passiveSeq;passiveEventId;useMarkdown=!1;rows=[];attachedFile;retry=!1;async flush(){if(!this.content.trim()&&!this.rows.flat().length&&!this.attachedFile)return;this.trimButtons();let e,t,s;this.options?.session?.messageId&&Date.now()-this.options.session.timestamp<k?(this.options.session.seq||=0,e=this.options.session.messageId,t=++this.options.session.seq):this.options?.session?.qq.id&&Date.now()-this.options.session.timestamp<k&&(s=this.options.session.qq.id),this.passiveId&&(e=this.passiveId),this.passiveSeq&&(t=this.passiveSeq),this.passiveEventId&&(s=this.passiveEventId);let i={content:this.content,msg_type:A.Type.TEXT,msg_id:e,msg_seq:t,event_id:s};this.attachedFile&&(i.content.length||(i.content=" "),i.media=this.attachedFile,i.msg_type=A.Type.MEDIA),this.useMarkdown&&(i.msg_type=A.Type.MARKDOWN,delete i.content,i.markdown={content:he(this.content)||" "},this.rows.length&&(i.keyboard={content:{rows:this.exportButtons()}}));let n=this.bot.session();n.type="send";let r=o(async()=>{try{let d=this.session.isDirect?await this.bot.internal.sendPrivateMessage(this.session.channelId,i):await this.bot.internal.sendMessage(this.session.channelId,i);if(d.id&&!d.audit_id)n.messageId=d.id,n.timestamp=new Date(d.timestamp).valueOf(),n.channelId=this.session.channelId,n.guildId=this.session.guildId,n.app.emit(n,"send",n),this.results.push(n.event.message);else if(d.audit_id&&this.bot.config.intents&134217728)try{let a=await this.audit(d.audit_id);n.messageId=a.message_id,n.app.emit(n,"send",n),this.results.push(n.event.message)}catch(a){this.bot.logger.error(a)}}catch(d){if(!this.bot.http.isError(d))throw d;this.errors.push(d),!this.retry&&this.bot.config.retryWhen.includes(d.response.data.code)&&(this.bot.logger.warn("%s retry message sending",this.session.cid),this.retry=!0,await r())}},"send");await r(),this.content="",this.attachedFile=null,this.rows=[],this.retry=!1}async audit(e){return new Promise((t,s)=>{let i=this.bot.ctx.on("qq/message-audit-pass",r=>{r.audit_id===e&&(i(),n(),t(r))}),n=this.bot.ctx.on("qq/message-audit-reject",r=>{r.audit_id===e&&(i(),n(),s(r))})})}async sendFile(e,t){let s=t.src||t.url,i=0;if(e==="img"||e==="image")i=1;else if(e==="video")i=2;else if(e==="audio")i=3;else return;let n={file_type:i,srv_send_msg:!1},r=/^data:([\w/.+-]+);base64,(.*)$/.exec(s);r?.[2]?n.file_data=r[2]:await this.bot.ctx.http.isLocal(s)?n.file_data=f.from((await this.bot.ctx.http.file(s)).data).toString("base64"):n.url=s;let d;try{this.session.isDirect?d=await this.bot.internal.sendFilePrivate(this.options.session.userId,n):d=await this.bot.internal.sendFileGuild(this.session.channelId,n)}catch(a){if(!this.bot.http.isError(a))throw a;this.errors.push(a),!this.retry&&this.bot.config.retryWhen.includes(a.response.data.code)&&(this.bot.logger.warn("%s retry message sending",this.session.cid),this.retry=!0,await this.sendFile(e,t))}return this.retry=!1,d}decodeButton(e,t){return{id:e.id,render_data:{label:t,visited_label:t,style:e.class==="primary"?1:0},action:{type:e.type==="input"?2:e.type==="link"?0:1,permission:{type:2},data:e.type==="input"?e.text:e.type==="link"?e.href:e.id}}}lastRow(){this.rows.length||this.rows.push([]);let e=this.rows[this.rows.length-1];return e.length>=5&&(this.rows.push([]),e=this.rows[this.rows.length-1]),e}trimButtons(){this.rows.length&&this.rows[this.rows.length-1].length===0&&this.rows.pop()}exportButtons(){return this.rows.map(e=>({buttons:e}))}async visit(e){let{type:t,attrs:s,children:i}=e;if(t==="text")this.content+=s.content;else if(t==="passive")s.messageId&&(this.passiveId=s.messageId),s.seq&&(this.passiveSeq=Number(s.seq)),s.eventId&&(this.passiveEventId=s.eventId);else if((t==="img"||t==="image")&&(s.src||s.url)){await this.flush();let n=await this.sendFile(t,s);n&&(this.attachedFile=n)}else if(t==="video"&&(s.src||s.url)){await this.flush();let n=await this.sendFile(t,s);n&&(this.attachedFile=n),await this.flush()}else if(t==="audio"&&(s.src||s.url)){await this.flush();let{data:n}=await this.bot.ctx.http.file(s.src||s.url,s);if(new TextDecoder().decode(n.slice(0,7)).includes("#!SILK")){let r=await this.sendFile(t,{src:"data:audio/amr;base64,"+f.from(n).toString("base64")});this.attachedFile=r}else{let r=this.bot.ctx.get("ntsilk");if(r){let d=await r.encode(n),a=await this.sendFile(t,{src:"data:audio/amr;base64,"+d.output.toString("base64")});a&&(this.attachedFile=a)}else{let d=this.bot.ctx.get("silk");if(!d)return this.bot.logger.warn("missing ntsilk/silk service, cannot send non-silk audio");let a=[8e3,12e3,16e3,24e3,32e3,44100,48e3];if(d.isWav(n)&&a.includes(d.getWavFileInfo(n).fmt.sampleRate)){let I=await d.encode(n,0),g=await this.sendFile(t,{src:"data:audio/amr;base64,"+f.from(I.data).toString("base64")});g&&(this.attachedFile=g)}else{if(!this.bot.ctx.get("ffmpeg"))return this.bot.logger.warn("missing ffmpeg service, cannot send non-silk audio except some wav");let I=await this.bot.ctx.get("ffmpeg").builder().input(f.from(n)).outputOption("-ar","24000","-ac","1","-f","s16le").run("buffer"),g=await d.encode(I,24e3),_=await this.sendFile(t,{src:"data:audio/amr;base64,"+f.from(g.data).toString("base64")});_&&(this.attachedFile=_)}}}await this.flush()}else t==="br"?this.content+=`
`:t==="p"?(this.content.endsWith(`
`)||(this.content+=`
`),await this.render(i),this.content.endsWith(`
`)||(this.content+=`
`)):t==="button-group"?(this.useMarkdown=!0,this.rows.push([]),await this.render(i),this.rows.push([])):t==="button"?(this.useMarkdown=!0,this.lastRow().push(this.decodeButton(s,i.join("")))):t==="message"?(await this.flush(),await this.render(i),await this.flush()):await this.render(i)}},be=class extends V.Bot{static{o(this,"QQGuildBot")}hidden=!0;internal;http;static MessageEncoder=Ee;constructor(e,t){super(e,t,"qq"),this.parent=t.parent,this.parent.guildBot=this,this.platform="qqguild",this.internal=new $(this,()=>t.parent.http),this.http=t.parent.http}get status(){return this.parent.status}set status(e){this.parent.status=e}async getUser(e,t){let{user:s}=await this.getGuildMember(t,e);return s}async getGuildList(e){return{data:(await this.internal.getGuilds()).map(L)}}async getGuild(e){let t=await this.internal.getGuild(e);return L(t)}async getChannelList(e,t){return{data:(await this.internal.getChannels(e)).map(D)}}async getChannel(e){let t=await this.internal.getChannel(e);return D(t)}async getGuildMemberList(e,t){let s=await this.internal.getGuildMembers(e,{limit:400,after:t});return{data:s.map(x),next:s[s.length-1].user.id}}async getGuildMember(e,t){let s=await this.internal.getGuildMember(e,t);return x(s)}async kickGuildMember(e,t){await this.internal.removeGuildMember(e,t)}async muteGuildMember(e,t,s){await this.internal.muteGuildMember(e,t,{mute_seconds:Math.floor(s/1e3)})}async getReactionList(e,t,s,i){let[n,r]=s.split(":"),{users:d,cookie:a}=await this.internal.getReactions(e,t,n,r,{limit:50,cookie:i});return{next:a,data:d.map(w)}}async createReaction(e,t,s){let[i,n]=s.split(":");await this.internal.createReaction(e,t,i,n)}async deleteReaction(e,t,s){let[i,n]=s.split(":");await this.internal.deleteReaction(e,t,i,n)}async getMessage(e,t){let s=await this.internal.getMessage(e,t);return U(this,s)}async deleteMessage(e,t){if(e.includes("_")){let[s]=e.split("_");await this.internal.deleteDM(s,t)}else await this.internal.deleteMessage(e,t)}async getLogin(){return this.parent.getLogin()}async createDirectChannel(e,t){let s=t;return t?.includes("_")&&(s=t.split("_")[0]),{id:`${(await this.internal.createDMS({recipient_id:e,source_guild_id:s})).guild_id}_${s}`,type:V.Universal.Channel.Type.DIRECT}}},O=class extends l.Bot{static{o(this,"QQBot")}static MessageEncoder=ue;static inject=["http"];guildBot;internal;http;_token;_timer;constructor(e,t){super(e,t,"qq");let s=t.endpoint;t.sandbox&&(s=s.replace(/^(https?:\/\/)/,"$1sandbox.")),this.config.authType==="bot"&&(this.http=this.ctx.http.extend({endpoint:s,headers:{Authorization:`Bot ${this.config.id}.${this.config.token}`,"X-Union-Appid":this.config.id}})),this.ctx.plugin(be,{parent:this}),this.internal=new C(this,()=>this.http),this.ctx.plugin(S,this)}async initialize(){try{let e=await this.guildBot.internal.getMe();Object.assign(this.user,e)}catch(e){this.logger.error(e)}}async stop(){clearTimeout(this._timer),this.guildBot&&delete this.ctx.bots[this.guildBot.sid],await super.stop()}async _ensureAccessToken(){try{let e=await this.ctx.http("https://bots.qq.com/app/getAppAccessToken",{method:"POST",data:{appId:this.config.id,clientSecret:this.config.secret}});if(!e.data.access_token)throw this.logger.warn("POST https://bots.qq.com/app/getAppAccessToken response: %o, trace id: %s",e.data,e.headers.get("x-tps-trace-id")),new Error("failed to refresh access token");let t=this.config.endpoint;this.config.sandbox&&(t=t.replace(/^(https?:\/\/)/,"$1sandbox.")),this._token=e.data.access_token,this.http=this.ctx.http.extend({endpoint:t,headers:{Authorization:`QQBot ${this._token}`,"X-Union-Appid":this.config.id}}),this._timer=setTimeout(()=>{this._ensureAccessToken()},(e.data.expires_in-40)*1e3)}catch(e){throw!this.ctx.http.isError(e)||!e.response||this.logger.warn("POST https://bots.qq.com/app/getAppAccessToken response: %o, trace id: %s",e.response.data,e.response.headers.get("x-tps-trace-id")),e}}async getAccessToken(){return this._token||await this._ensureAccessToken(),this._token}async getLogin(){return this.toJSON()}async createDirectChannel(e){return{id:e,type:l.Universal.Channel.Type.DIRECT}}async deleteMessage(e,t){try{await this.internal.deleteMessage(e,t)}catch{await this.internal.deletePrivateMessage(e,t)}}};(e=>{e.Config=l.Schema.intersect([l.Schema.object({id:l.Schema.string().description("机器人 id。").required(),secret:l.Schema.string().description("机器人密钥。").role("secret"),token:l.Schema.string().description("机器人令牌。").role("secret"),type:l.Schema.union(["public","private"]).description("机器人类型。").required(),sandbox:l.Schema.boolean().description("是否开启沙箱模式。").default(!1),endpoint:l.Schema.string().role("link").description("要连接的服务器地址。").default("https://api.sgroup.qq.com/"),authType:l.Schema.union(["bot","bearer"]).description("采用的验证方式。").default("bearer"),intents:l.Schema.bitset(q).description("需要订阅的机器人事件。"),retryWhen:l.Schema.array(Number).description("发送消息遇到平台错误码时重试。").default([])}),S.Options,l.Schema.object({manualAcknowledge:l.Schema.boolean().description("手动响应回调消息。").default(!1)}).description("高级设置")])})(O||(O={}));var Re=O});var T={};Ae(T,{default:()=>Oe});m();var _e=W(Q(),1);u(T,W(Q(),1));var Oe=_e.QQBot;export{Oe as default};