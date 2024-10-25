var y=Object.defineProperty;var P=Object.getOwnPropertyDescriptor;var R=Object.getOwnPropertyNames;var U=Object.prototype.hasOwnProperty;var j=(e,a)=>()=>(e&&(a=e(e=0)),a);var q=(e,a)=>()=>(a||e((a={exports:{}}).exports,a),a.exports);var E=(e,a,i,r)=>{if(a&&typeof a=="object"||typeof a=="function")for(let t of R(a))!U.call(e,t)&&t!==i&&y(e,t,{get:()=>a[t],enumerable:!(r=P(a,t))||r.enumerable});return e},c=(e,a,i)=>(E(e,a,"default"),i&&E(i,a,"default"));var B=e=>E(y({},"__esModule",{value:!0}),e);import{Buffer as k}from"https://registry.koishi.chat/modules/buffer/index.js";import D from"https://registry.koishi.chat/modules/process/index.js";var v=j(()=>{});var F={};import*as Q from"https://registry.koishi.chat/modules/@satorijs/element/jsx-runtime/index.js";var A=j(()=>{v();c(F,Q)});var _={};import*as X from"https://registry.koishi.chat/modules/koishi/index.js";var I=j(()=>{v();c(_,X)});var H=q(s=>{v();Object.defineProperty(s,"__esModule",{value:!0});s.apply=s.using=s.Config=s.name=void 0;var u=(A(),B(F)),x=(I(),B(_));s.name="pixiv-rank";s.Config=x.Schema.object({apiUrl:x.Schema.string().required().description("HibiAPI地址,不要末尾的/"),superuser:x.Schema.array(String).description("超级用户的UID，可以看R18"),limitCount:x.Schema.number().default(5).description("限制搜索次数"),timeOut:x.Schema.number().default(15e3).description("接收搜索结果序号时间(ms)")});s.using=["puppeteer"];function O(e,a){let i=a.superuser;e.command("pixiv/rank <word:text>","查看pixiv排行榜").alias("p站排行").option("page","-p [page:number] 张数").option("next","-n [page:number] 页面数").example("rank -p 2 月榜").action(async({session:r,options:t},w)=>{var g=a.apiUrl+"/api/pixiv/rank";let n=t.next&&t.next>=1?t.next:1;switch(w){case"日榜":var m=await e.http.get(g+`?mode=day&page=${n}`);break;case"周榜":var m=await e.http.get(g+`?mode=week&page=${n}`);break;case"月榜":var m=await e.http.get(g+`?mode=month&page=${n}`);break;case"男性向":var m=await e.http.get(g+`?mode=day_male&page=${n}`);break;case"女性向":var m=await e.http.get(g+`?mode=day_female&page=${n}`);break;case"原创榜":var m=await e.http.get(g+`?mode=week_original&page=${n}`);break;default:return(0,u.jsx)(u.Fragment,{children:`以下可选: 
 日榜
 周榜
 月榜
 男性向(日榜)
 女性向(日榜)
 原创榜(周榜)`})}let l,h=t.page?t.page:0,p=m.illusts.length;l=m.illusts[h];var f=l.meta_single_page.original_image_url?String(l.meta_single_page.original_image_url):String(l.meta_pages[0].image_urls.original);return(0,u.jsxs)("message",{forward:!0,children:[(0,u.jsx)("author",{"user-id":r.selfId,nickname:r.bot.username,avatar:r.bot.avatar}),"pid: ",l.id,`
 uid: `,l.user.id,`
 作者: `,l.user.name,`
 标题: `,l.title,`
`,(0,u.jsx)("image",{url:String(l.image_urls.medium).replace("i.pximg.net","i.pixiv.re")}),`
 url: `,f.replace("i.pximg.net","i.pixiv.re"),`
 作品页面: `,`https://www.pixiv.net/artworks/${l.id}`,`
 Page: (`,h,"/",p,")"]})}),e.command("pixiv/search <word:text>","p站搜索").alias("p站搜索").option("next","-n [page:number] 搜索页页数").action(async({session:r,options:t},w)=>{let g=t.next?t.next:1;if(w){var n=await e.http.get(`${a.apiUrl}/api/pixiv/search?word=${w}&page=${g}`),m=[],l=[],h=[];let C=[];for(var p=0;n.illusts[p];p++)m[p]=n.illusts[p].title,l[p]=n.illusts[p].user.name?n.illusts[p].user.name:"undefined",h[p]=n.illusts[p].tags;r.send((0,u.jsxs)("message",{forward:!0,children:[(0,u.jsx)("author",{"user-id":r.selfId,nickname:r.bot.username,avatar:r.bot.avatar}),(0,u.jsxs)("p",{children:["请选择序号,'$'结束搜索,最多",a.limitCount,`次
`]}),m.map((N,b)=>(0,u.jsxs)("p",{children:[b,"| Title:",N,", user:",l[b],", tags:",h[b].map(o=>((o.name.includes("R-18")||o.name.includes("R18")||o.name.includes("r-18")||o.name.includes("r18"))&&C.push(b),o.translated_name?o.translated_name:o.name)).join(", "),`
`]}))]}));for(var f=!0,$=0;f&&$<a.limitCount;){var d=await r.prompt(a.timeOut);if(!d)return(0,u.jsx)(u.Fragment,{children:"输入超时，自动退出搜索!"});if(d=="$")return(0,u.jsx)(u.Fragment,{children:"搜索结束，感谢使用!"});if(p-Number(d)<=1||Number(d)<0)return(0,u.jsx)(u.Fragment,{children:"请输入有效序列号"});i.includes(r.userId)&&C.includes(Number(d))?r.isDirect?await r.send(S(Number(d),n)):(await r.send("涩涩打咩！"),await M(r,1e3,S(Number(d),n))):C.includes(Number(d))?r.send((0,u.jsx)(u.Fragment,{children:"不可以涩涩哦~"})):await r.send((0,u.jsxs)("message",{forward:!0,children:[(0,u.jsx)("author",{"user-id":r.selfId,nickname:r.bot.username,avatar:r.bot.avatar}),S(Number(d),n)]})),$++}return(0,u.jsx)(u.Fragment,{children:"搜索次数已达上限,结束搜索!"})}else return(0,u.jsx)(u.Fragment,{children:"请输入有效关键词"})})}s.apply=O;function S(e,a){let i,r=a.illusts.length;i=a.illusts[e];var t=i.meta_single_page.original_image_url?String(i.meta_single_page.original_image_url):String(i.meta_pages[0].image_urls.original);return(0,u.jsxs)(u.Fragment,{children:["pid: ",i.id,`
 uid: `,i.user.id,`
 作者: `,i.user.name,`
 标题: `,i.title,`
`,(0,u.jsx)("image",{url:String(i.image_urls.medium).replace("i.pximg.net","i.pixiv.re")}),`
 url: `,t.replace("i.pximg.net","i.pixiv.re"),`
 作品页面: `,`https://www.pixiv.net/artworks/${i.id}`,`
 当前第(`,e,"/",r,")个结果"]})}async function M(e,a,i){return new Promise(r=>setTimeout(()=>{e.bot.sendPrivateMessage(e.userId,i)},a))}});export default H();