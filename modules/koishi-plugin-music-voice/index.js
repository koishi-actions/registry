var A=Object.defineProperty;var Y=Object.getOwnPropertyDescriptor;var Z=Object.getOwnPropertyNames;var K=Object.prototype.hasOwnProperty;var L=(a,e)=>()=>(a&&(e=a(a=0)),e);var R=(a,e)=>()=>(e||a((e={exports:{}}).exports,e),e.exports);var N=(a,e,o,m)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of Z(e))!K.call(a,r)&&r!==o&&A(a,r,{get:()=>e[r],enumerable:!(m=Y(e,r))||m.enumerable});return a},T=(a,e,o)=>(N(a,e,"default"),o&&N(o,e,"default"));var V=a=>N(A({},"__esModule",{value:!0}),a);import{Buffer as F}from"https://registry.koishi.chat/modules/buffer/index.js";import z from"https://registry.koishi.chat/modules/process/index.js";var $=L(()=>{});var b={};import*as ge from"https://registry.koishi.chat/modules/koishi/index.js";var G=L(()=>{$();T(b,ge)});var me=R((fe,X)=>{$();var E=Object.defineProperty,W=Object.getOwnPropertyDescriptor,ee=Object.getOwnPropertyNames,te=Object.prototype.hasOwnProperty,w=(a,e)=>E(a,"name",{value:e,configurable:!0}),ae=(a,e)=>{for(var o in e)E(a,o,{get:e[o],enumerable:!0})},ie=(a,e,o,m)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of ee(e))!te.call(a,r)&&r!==o&&E(a,r,{get:()=>e[r],enumerable:!(m=W(e,r))||m.enumerable});return a},ne=a=>ie(E({},"__esModule",{value:!0}),a),H={};ae(H,{Config:()=>ce,apply:()=>U,inject:()=>oe,name:()=>re,usage:()=>se});X.exports=ne(H);var t=(G(),V(b)),re="music-voice",oe={required:["http"],optional:["puppeteer"]},se=`
<a target="_blank" href="https://github.com/idranme/koishi-plugin-music-voice?tab=readme-ov-file#%E4%BD%BF%E7%94%A8%E8%AF%A5%E6%8F%92%E4%BB%B6%E6%90%9C%E7%B4%A2%E5%B9%B6%E8%8E%B7%E5%8F%96%E6%AD%8C%E6%9B%B2">食用方法点此获取</a>
`,ce=t.Schema.intersect([t.Schema.object({generationTip:t.Schema.string().description("生成语音时返回的文字提示内容").default("生成语音中…"),waitTimeout:t.Schema.natural().role("ms").min(t.Time.second).step(t.Time.second).description("等待用户选择歌曲序号的最长时间").default(45*t.Time.second)}).description("基础设置"),t.Schema.object({imageMode:t.Schema.boolean().description("开启后返回图片歌单，关闭后返回文本歌单").required(),darkMode:t.Schema.boolean().description("是否开启图片歌单暗黑模式").default(!0)}).description("歌单设置"),t.Schema.object({exitCommand:t.Schema.string().description("退出选择指令，多个指令间请用逗号分隔开").default("0, 不听了"),menuExitCommandTip:t.Schema.boolean().description("是否在歌单内容的后面，加上退出选择指令的文字提示").default(!1),recall:t.Schema.boolean().description("是否在发送语音后撤回 generationTip").default(!0),maxDuration:t.Schema.natural().role("ms").min(t.Time.minute).step(t.Time.minute).description("歌曲最长持续时间，单位为毫秒").default(70*t.Time.minute)}).description("进阶设置")]);function P(a,e,o){let m=a.map((r,q)=>{let n=`${q+o+1}. ${r.songname} -- ${r.name}`;return r.msgdown&&(n=`<s>${n}</s>`),n}).join("<br/>");return`<b>${e}</b>:<br/>${m}`}w(P,"formatSongList");function J(a){let e=a.replace("秒","").split("分").map(Number);return e.length===2?e[0]*60+e[1]:e[0]}w(J,"timeStringToSeconds");function U(a,e){let o=a.logger("music-voice");function m(n,p){let d=n==="NetEase Music"?"/NetEase_CloudMusic_new/":"/QQmusicVIP/";return a.http.get(`https://api.xingzhige.com/API${d}`,{params:p})}w(m,"searchXZG");function r(n){return a.http.post("https://u6.y.qq.com/cgi-bin/musicu.fcg",{comm:{ct:11,cv:"1929"},request:{module:"music.search.SearchCgiService",method:"DoSearchForQQMusicLite",param:{search_id:"83397431192690042",remoteplace:"search.android.keyboard",query:n,search_type:0,num_per_page:10,page_num:1,highlight:0,nqc_flag:0,page_id:1,grp:1}}},{responseType:"json"})}w(r,"searchQQ");async function q(n,p){let d=p.darkMode?255:0,g=p.darkMode?0:255,u=`
      <!DOCTYPE html>
      <html lang="zh">
        <head>
          <title>music</title>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <style>
            body {
              margin: 0;
              font-family: "PingFang SC", "Hiragino Sans GB", "Noto Sans CJK SC", "Noto Sans SC", "Microsoft YaHei", SimSun, sans-serif;
              font-size: 16px;
              background: rgb(${g} ${g} ${g});
              color: rgb(${d} ${d} ${d});
              min-height: 100vh;
            }
            #song-list {
              padding: 20px;
              display: inline-block; /* 使div适应内容宽度 */
              max-width: 100%; /* 防止内容溢出 */
              white-space: nowrap; /* 防止歌曲名称换行 */
              transform: scale(0.9);
            }
            s {
              text-decoration-thickness: 1.5px;
            }
          </style>
        </head>
        <body>
          <div id="song-list">${n}</div>
        </body>
      </html>
    `,l=await a.puppeteer.page();await l.setContent(u);let M=await(await l.$("#song-list")).screenshot({});return l.close(),M}w(q,"generateSongListImage"),a.command("music <keyword:text>","搜索歌曲并生成语音").alias("mdff","点歌").action(async({session:n},p)=>{if(!p)return"请输入歌曲相关信息。";let d,g;try{let i=await r(p),h=i.request?.data?.body?.item_song;d={code:i.code,msg:"",data:Array.isArray(h)?h.map(c=>({songname:c.title,album:c.album.name,songid:c.id,songurl:`https://y.qq.com/n/ryqq/songDetail/${c.mid}`,name:c.singer.map(f=>f.name).join("/"),msgdown:c.action.msgdown})):[]}}catch(i){o.warn("获取QQ音乐数据时发生错误",i.message)}try{g=await m("NetEase Music",{name:p})}catch(i){o.warn("获取网易云音乐数据时发生错误",i.message)}let u=d?.data??[],l=g?.data??[];if(!u.length&&!l.length)return"无法获取歌曲列表，请稍后再试。";let D=u.length?P(u,"QQ Music",0):"<b>QQ Music</b>: 无法获取歌曲列表",M=l.length?P(l,"NetEase Music",u.length):"<b>NetEase Music</b>: 无法获取歌曲列表",k=`${D}<br/><br/>${M}`,O=e.exitCommand.split(/[,，]/).map(i=>i.trim()),I=e.menuExitCommandTip?`退出选择请发[${O}]中的任意内容<br/><br/>`:"",s=n.messageId;if(e.imageMode){if(!a.puppeteer)throw new Error("发送图片歌单需启用 puppeteer 服务");let i=await q(k,e),h=[t.h.quote(s),t.h.image(i,"image/png"),t.h.text(`${I.replaceAll("<br/>",`
`)}请在 `),(0,t.h)("i18n:time",{value:e.waitTimeout}),t.h.text(`内，
`),t.h.text("输入歌曲对应的序号")];s=(await n.send(h)).at(-1)}else{let i=`${t.h.quote(s)}${k}<br/><br/>${I}请在 <i18n:time value="${e.waitTimeout}"/>内，<br/>输入歌曲对应的序号`;s=(await n.send(i)).at(-1)}let C=await n.prompt(i=>(s=i.messageId,t.h.select(i.elements,"text").join("")),{timeout:e.waitTimeout});if((0,t.isNullable)(C))return`${s?t.h.quote(s):""}输入超时，已取消点歌。`;if(O.includes(C))return`${t.h.quote(s)}已退出歌曲选择。`;let _=+C;if(!Number.isInteger(_)||_<1||_>u.length+l.length)return`${t.h.quote(s)}序号输入错误，已退出歌曲选择。`;let Q=[];u.length&&Q.push(...u),l.length&&Q.push(...l);let v,j,x=Q[_-1];if(x.songurl.includes(".163.com/")?(v="NetEase Music",j=x.id):x.songurl.includes(".qq.com/")&&(v="QQ Music",j=x.songid),!v)return`${t.h.quote(s)}获取歌曲失败。`;let[y]=await n.send(t.h.quote(s)+e.generationTip),B=await m(v,{songid:j}),{channelId:S}=n;if(B.code===0){let{src:i,interval:h}=B.data;if(!i)return e.recall&&n.bot.deleteMessage(S,y),`${t.h.quote(s)}获取歌曲失败。`;try{let c=J(h);if(c*1e3>e.maxDuration)return e.recall&&n.bot.deleteMessage(S,y),`${t.h.quote(s)}歌曲持续时间超出限制。`;let f=new URL(i);f.host.startsWith("ws.stream")&&(f.host=f.host.replace("ws.stream","isure6.stream")),await n.send(t.h.audio(f.href,{duration:c}))}catch(c){throw e.recall&&n.bot.deleteMessage(S,y),c}e.recall&&n.bot.deleteMessage(S,y)}else{e.recall&&n.bot.deleteMessage(S,y);let i=B.msg||"";return i&&([",",".","!","，","。","！"].includes(i.at(-1))&&(i=i.slice(0,-1)),i+="，"),`${t.h.quote(s)}${i}获取歌曲失败。`}})}w(U,"apply")});export default me();
