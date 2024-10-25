var W=Object.defineProperty;var ae=Object.getOwnPropertyDescriptor;var ne=Object.getOwnPropertyNames;var ie=Object.prototype.hasOwnProperty;var H=(t,e)=>()=>(t&&(e=t(t=0)),e);var P=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var B=(t,e,r,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of ne(e))!ie.call(t,a)&&a!==r&&W(t,a,{get:()=>e[a],enumerable:!(o=ae(e,a))||o.enumerable});return t},E=(t,e,r)=>(B(t,e,"default"),r&&B(r,e,"default"));var k=t=>B(W({},"__esModule",{value:!0}),t);import{Buffer as I}from"https://registry.koishi.chat/modules/buffer/index.js";import T from"https://registry.koishi.chat/modules/process/index.js";var g=H(()=>{});var v={};import*as xe from"https://registry.koishi.chat/modules/koishi/index.js";var M=H(()=>{g();E(v,xe)});var L=P(b=>{"use strict";g();Object.defineProperty(b,"__esModule",{value:!0});b.parseInput=b.parseForbidden=b.Config=b.PromptConfig=void 0;var c=(M(),k(v)),oe=["nsfw, lowres, bad anatomy, bad hands, text, error, missing fingers","extra digit, fewer digits, cropped, worst quality, low quality","normal quality, jpeg artifacts, signature, watermark, username, blurry"].join(", ");b.PromptConfig=c.Schema.object({basePrompt:c.Schema.string().role("textarea").description("默认附加的标签。").default("masterpiece, best quality"),negativePrompt:c.Schema.string().role("textarea").description("默认附加的反向标签。").default(oe),forbidden:c.Schema.string().role("textarea").description("违禁词列表。请求中的违禁词将会被自动删除。").default(""),placement:c.Schema.union([c.Schema.const("before").description("置于最前"),c.Schema.const("after").description("置于最后")]).description("默认附加标签的位置。").default("after"),translator:c.Schema.boolean().description("是否启用自动翻译。").default(!1),latinOnly:c.Schema.boolean().description("是否只接受英文输入。").default(!1)}).description("输入设置");b.Config=c.Schema.intersect([c.Schema.object({censor:c.Schema.boolean().description("是否启用图像审核。").default(!1)}),b.PromptConfig,c.Schema.object({output:c.Schema.union([c.Schema.const("minimal").description("仅图片"),c.Schema.const("default").description("标准输出"),c.Schema.const("verbose").description("详细输出")]).description("输出方式。").default("default"),requestTimeout:c.Schema.number().role("time").description("当请求超过这个时间时会中止并提示超时。").default(c.Time.minute),recallTimeout:c.Schema.number().role("time").description("图片发送后自动撤回的时间 (设置为 0 以禁用此功能)。").default(0),maxConcurrency:c.Schema.number().description("单个频道下的最大并发数量 (设置为 0 以禁用此功能)。").default(0)}).description("高级设置")]);function se(t){return t.trim().toLowerCase().replace(/，/g,",").split(/(?:,\s*|\s*\n\s*)/g).filter(Boolean).map(e=>{let r=e.endsWith("!");return r&&(e=e.slice(0,-1)),e=e.replace(/[^a-z0-9]+/g," ").trim(),{pattern:e,strict:r}})}b.parseForbidden=se;var K=/@@__BACKSLASH__@@/g;function ce(t,e,r,o){if(t=t.toLowerCase().replace(/\\\\/g,K.source).replace(/，/g,",").replace(/（/g,"(").replace(/）/g,")"),t=t.split("\\{").map(i=>i.replace(/\{/g,"(")).join("\\{").split("\\}").map(i=>i.replace(/\}/g,")")).join("\\}"),t=t.replace(K,"\\").replace(/_/g," "),e.latinOnly&&/[^\s\w"'“”‘’.,:|\\()\[\]{}-]/.test(t))return{errPath:".latin-only"};let a=[],p=(i,l)=>{let m=l.split(/,\s*/g);e.placement==="before"&&m.reverse();for(let f of m)f=f.trim().toLowerCase(),!(!f||i.includes(f))&&(e.placement==="before"?i.unshift(f):i.push(f))},y=t.match(/(,\s*|\s+)(-u\s+|--undesired\s+|negative prompts?:\s*)([\s\S]+)/m);y?.[3]&&(t=t.slice(0,y.index).trim(),p(a,y[3]));let n=t.split(/,\s*/g).filter(i=>{if(i=i.replace(/[\x00-\x7f]/g,l=>l.replace(/[^0-9a-zA-Z]/," ")).replace(/\s+/," ").trim(),!i)return!1;for(let{pattern:l,strict:m}of r){if(m&&i.split(/\W+/g).includes(l))return!1;if(!m&&i.includes(l))return!1}return!0});return o||(p(n,e.basePrompt),p(a,e.negativePrompt)),{errPath:null,positive:n,uc:a.join(", ")}}b.parseInput=ce});var Z=P(()=>{g()});var X=P(h=>{"use strict";g();var ue=h&&h.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(h,"__esModule",{value:!0});h.NetworkError=h.download=h.arrayBufferToBase64=h.getImageSize=void 0;var R=(M(),k(v)),Ce=ue(Z());function le(t){{let e=new Blob([t]),r=new Image;return r.src=URL.createObjectURL(e),(0,R.pick)(r,["width","height"])}}h.getImageSize=le;function V(t){{let e="";for(let o=0;o<t.byteLength;o+=8192)e+=String.fromCharCode.apply(null,t.slice(o,o+8192));return btoa(e)}}h.arrayBufferToBase64=V;var de=10485760,Q=["image/jpeg","image/png","image/webp"];async function pe(t,e,r={}){if(e.startsWith("data:")){let[,o,a]=e.match(/^data:(image\/\w+);base64,(.*)$/);if(!Q.includes(o))throw new x(".unsupported-file-type");let p=atob(a),y=new Uint8Array(p.length);for(let n=0;n<p.length;n++)y[n]=p.charCodeAt(n);return{buffer:y,base64:a,dataUrl:e}}else{let o=await t.http.head(e,{headers:r});if(+o["content-length"]>de)throw new x(".file-too-large");let a=o["content-type"];if(!Q.includes(a))throw new x(".unsupported-file-type");let p=await t.http.get(e,{responseType:"arraybuffer",headers:r}),y=V(p);return{buffer:p,base64:y,dataUrl:`data:${a};base64,${y}`}}}h.download=pe;var x=class t extends Error{params;constructor(e,r={}){super(e),this.params=r}static catch=e=>r=>{if(R.Quester.isAxiosError(r)){let o=r.response?.status;for(let a in e)if(o===+a)throw new t(e[a])}throw r}};h.NetworkError=x});var Y=P((ze,me)=>{me.exports={commands:{rryth:{description:"人人有图画计划2",usage:`输入 sai 空格提示词即可画画，提示词是用逗号分隔的英文
示例 sai 1girl,pink cat ears
本插件基于 novelai-bot 修改完成，旨在提供免费画画方案
好用的话去点个 star https://github.com/t4wefan/rryth`,options:{undesired:"反向提示词(加在提示词后)",override:"去除插件附加的提示词"},messages:{"expect-prompt":"请输入标签。","latin-only":"只接受英文输入。","concurrent-jobs":`<random>
  <>等会再约稿吧，我已经忙不过来了……</>
  <>是数位板没电了，才…才不是我不想画呢！</>
  <>那你得先教我画画（理直气壮</>
</random>`,waiting:`<random>
  <>少女绘画中……</>
  <>在画了在画了</>
  <>你就在此地不要走动，等我给你画一幅</>
</random>`,pending:"在画了在画了，不过前面还有 {0} 个稿……","file-too-large":"文件体积过大。","unsupported-file-type":"不支持的文件格式。","download-error":"图片解析失败。","unknown-error":"发生未知错误。","response-error":"发生未知错误 ({0})。","empty-response":"服务器返回了空白图片，请稍后重试。","request-failed":"请求失败 ({0})，请稍后重试。","request-timeout":"请求超时。"}}}}});var we=P(u=>{g();var he=u&&u.__createBinding||(Object.create?function(t,e,r,o){o===void 0&&(o=r);var a=Object.getOwnPropertyDescriptor(e,r);(!a||("get"in a?!e.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,o,a)}:function(t,e,r,o){o===void 0&&(o=r),t[o]=e[r]}),fe=u&&u.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&he(e,t,r)};Object.defineProperty(u,"__esModule",{value:!0});u.apply=u.name=u.reactive=void 0;var w=(M(),k(v)),G=L(),$=X();fe(L(),u);u.reactive=!0;u.name="rryth";var q=new w.Logger(u.name);function ge(t,e){if(w.Quester.isAxiosError(e)){if(e.response?.data)return q.error(e.response.data),t.text(e.response.data.message);if(e.response?.status===402)return t.text(".unauthorized");if(e.response?.status)return t.text(".response-error",[e.response.status]);if(e.code==="ETIMEDOUT")return t.text(".request-timeout");if(e.code)return t.text(".request-failed",[e.code])}return q.error(e),t.text(".unknown-error")}function be(t,e){t.i18n.define("zh",Y());let r,o=Object.create(null),a=new Set;t.accept(["forbidden"],n=>{r=(0,G.parseForbidden)(n.forbidden)},{immediate:!0});let p=n=>{let i=n.match(/^(\d*\.?\d+)[x×](\d*\.?\d+)$/);if(!i)throw new Error;let l=+i[1],m=+i[2];return{width:l,height:m}},y=t.command(`${u.name} <prompts:text>`).alias("sai","rr").userFields(["authority"]).option("resolution","-r <resolution>",{type:p}).option("override","-O").option("seed","-x <seed:number>").option("scale","-c <scale:number>").option("strength","-N <strength:number>").option("undesired","-u <undesired>").action(async({session:n,options:i},l)=>{if(!l?.trim())return n.execute(`help ${u.name}`);let m,f;if(l=w.h.transform(l,{image(s){return m=s.url,""}}),!l.trim()&&!e.basePrompt)return n.text(".expect-prompt");let{errPath:A,positive:J,uc:U}=(0,G.parseInput)(l,e,r,i.override),O=J.join(", ");if(A)return n.text(A);if(e.translator&&t.translator){let s=O.match(/[\u4e00-\u9fa5]+/g);if(s?.length>0)try{let _=(await t.translator.translate({input:s.join(","),target:"en"})).toLocaleLowerCase().split(",");s.forEach((S,j)=>{O=O.replace(S,_[j]).replace("，",",")})}catch(_){q.warn(_)}}let N=i.seed||Math.floor(Math.random()*Math.pow(2,32)),d={seed:N,prompt:O,uc:U,scale:i.scale??e.scale??11,steps:m?50:28};if(m){try{f=await(0,$.download)(t,m)}catch(s){return s instanceof $.NetworkError?n.text(s.message,s.params):(q.error(s),n.text(".download-error"))}i.resolution||=(0,$.getImageSize)(f.buffer),Object.assign(d,{height:i.resolution.height,width:i.resolution.width,strength:i.strength??e.strength??.3})}else i.resolution||={height:e.hight,width:e.weigh},Object.assign(d,{height:i.resolution.height,width:i.resolution.width});let C=Math.random().toString(36).slice(2);if(e.maxConcurrency){let s=o[n.cid]||=new Set;if(s.size>=e.maxConcurrency)return n.text(".concurrent-jobs");s.add(C)}n.send(a.size?n.text(".pending",[a.size]):n.text(".waiting")),a.add(C);let D=()=>{o[n.cid]?.delete(C),a.delete(C)},F={init_images:f&&[f.dataUrl],prompt:d.prompt,seed:d.seed,negative_prompt:d.uc,cfg_scale:d.scale,width:d.width,height:d.height,denoising_strength:d.strength,steps:d.steps};async function ee(){return q.info(`generating img with prompt: ${F.prompt}`),await t.http.post("https://api.draw.t4wefan.pub/sdapi/v1/txt2img ",F,{timeout:e.requestTimeout,headers:{api:"t4",...e.headers}}).then(function(s){return s.images})}let z;for(;;)try{z=await ee(),D();break}catch(s){return D(),ge(n,s)}async function te(){let s=e.censor?(0,w.h)("censor",(0,w.h)("image",{url:"data:image/png;base64,"+z[0]})):(0,w.h)("image",{url:"data:image/png;base64,"+z[0]}),_={userId:n.userId,nickname:n.author?.nickname||n.username};if(e.output==="minimal")return s;let S=(0,w.h)("figure"),j=[`种子 = ${N}`];return e.output==="verbose"&&(j.push("模型 = Anything 3.0"),j.push(`提示词相关度 = ${d.scale}`),d.image&&j.push(`图转图强度 = ${d.strength}`)),S.children.push((0,w.h)("message",_,j.join(`
`))),S.children.push((0,w.h)("message",_,`关键词 = ${O}`)),e.output==="verbose"&&S.children.push((0,w.h)("message",_,`排除关键词 = ${U}`)),S.children.push(s),e.output==="verbose"&&S.children.push((0,w.h)("message",_,"工作站名称 = 42")),S}let re=await n.send(await te());e.recallTimeout&&t.setTimeout(()=>{for(let s of re)n.bot.deleteMessage(n.channelId,s)},e.recallTimeout)})}u.apply=be});export default we();