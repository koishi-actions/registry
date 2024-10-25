var W=Object.defineProperty;var ee=Object.getOwnPropertyDescriptor;var te=Object.getOwnPropertyNames;var ne=Object.prototype.hasOwnProperty;var E=(e,t)=>()=>(e&&(t=e(e=0)),t);var C=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var U=(e,t,a,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of te(t))!ne.call(e,r)&&r!==a&&W(e,r,{get:()=>t[r],enumerable:!(n=ee(t,r))||n.enumerable});return e},M=(e,t,a)=>(U(e,t,"default"),a&&U(a,t,"default"));var $=e=>U(W({},"__esModule",{value:!0}),e);import{Buffer as R}from"https://registry.koishi.chat/modules/buffer/index.js";import v from"https://registry.koishi.chat/modules/process/index.js";var b=E(()=>{});var I={};import*as Me from"https://registry.koishi.chat/modules/@satorijs/element/jsx-runtime/index.js";var A=E(()=>{b();M(I,Me)});var j={};import*as je from"https://registry.koishi.chat/modules/koishi/index.js";var P=E(()=>{b();M(j,je)});import re from"https://registry.koishi.chat/modules/assert/index.js";var D=C((ve,B)=>{b();B.exports=re});var K=C(F=>{"use strict";b();Object.defineProperty(F,"__esModule",{value:!0});var H=Object.create(null);Object.assign(H,{n:`
`,r:"\r",t:"	"," ":" ","	":"	"});function ae(e){for(let t=0,a=e.length;t<a;t++){if(e[t]==="\\"){t++;continue}if(e[t]==="=")return[e.slice(0,t),e.slice(t+1)]}}function oe(e){return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function z(e){return e.replace(/\\([\s\S]|$)/g,(t,a)=>{if(!a)throw new SyntaxError("Unexpected backslash immediately before EOF");return H[a]??a.trim()})}function X(e,t=","){let a=[],n=0;for(let r=0,c=e.length;r<c;r++){if(e[r]==="\\"){r++;continue}e[r]===t&&(a.push(e.slice(n,r)),n=r+1)}return a.push(e.slice(n)),a}function*ie(e,t){let a=t?.maxRules??1e3,n=t?.maxMetaRules??100,r=t?.maxIterations??1e5,c=t?.maxStringSize??1e5,m=[];{let f=0;for(let l=0,o=e.length;l<o;l++){if(e[l]==="\\"){l++;continue}[";",`
`,"\r"].includes(e[l])&&(m.push(e.slice(f,l)),f=l+1)}m.push(e.slice(f))}let s=[],d=[],i;for(let f of m){if(f.startsWith("str ")){if(typeof i=="string")throw new SyntaxError("Multiple str statements found");i=z(f.slice(4));continue}let l=ae(f);if(!l)continue;let[o,x]=l,u="";if(o.match(/^[a-z]{3}[ ]/))switch(u=o.slice(0,3),o=o.slice(4),u){case"rep":case"for":if(d.length>=n)throw new RangeError("Too many meta rules");d.push([o,x]);continue;case"fin":case"chr":case"ord":break;default:throw new SyntaxError(`Undefined keyword ${u}, escape with backslash for literal string`)}if(s.length>=a)throw new RangeError("Too many rules");s.push([o,x,u])}if(i??="",i.length>c)throw new RangeError("String too long");for(let[f,l]of d){let o=z(f),x=X(l);s=s.flatMap(([u,w,k])=>{if(!u.includes(o))return[[u,w.replaceAll(o,x[0]),k]];if(x.length>1&&s.length>=a)throw new RangeError(`Too many rules created by meta rule ${u}=${w}`);return x.map(L=>[u.replaceAll(o,L),w.replaceAll(o,L),k])})}let h=s.map(([f,l,o])=>{let x=X(f,"%").map(z),u=X(l,"%").map(z);return[new RegExp(x.map(oe).join(o==="chr"?"([1-9]\\d*)":"(.)"),"s"),(w,...k)=>u.reduce((L,V,Z)=>{let O=k[Math.min(x.length-1,Z)-1]??"%";return o==="chr"?O=String.fromCharCode(parseInt(O)):o==="ord"&&(O=String(O.charCodeAt(0))),L+O+V}),o==="fin"]});yield i;e:for(let f=1;f<r;f++){for(let[l,o,x]of h)if(l.test(i)){if(i=i.replace(l,o),i.length>c)throw new RangeError("String became too long");if(yield i,x)return;continue e}return}throw new RangeError("Too many iterations")}F.default=ie});var G=C(y=>{"use strict";b();Object.defineProperty(y,"__esModule",{value:!0});y.apply=y.Config=y.name=void 0;var p=(P(),$(j));y.name="ma:aux_commands";function T(e,t){return p.Schema.intersect([p.Schema.object({enabled:p.Schema.boolean().description("启用"+t)}).description(""),p.Schema.union([p.Schema.object({enabled:p.Schema.const(!0).required(!0),...e.dict}),p.Schema.object({enabled:p.Schema.const(!1)})])])}y.Config=p.Schema.object({echo:T(p.Schema.object({}),`改良版 echo 指令：不会自动将消息元素转换成 XML 形式，并增加更多转义功能。

若要使用，必须停用官方 echo 插件。`),cat:T(p.Schema.object({fetchMaxLength:p.Schema.number().description("cat 指令抓取 URL 内容的最大长度。").default(4e3),fetchMaxInterpolationLength:p.Schema.number().description("cat 指令在“$()”插值语法中运行时，抓取 URL 内容的最大长度。").default(5e4)})," cat 指令：重复下一条消息，或从 URL 获取文本；同时可进行转义。"),send:T(p.Schema.object({}),` send 指令：发送消息到指定上下文。

补足了官方 echo 具有但上述改良 echo 没有的功能。`)});function Y(e,{escape:t=!1,unescape:a=!1,markov:n=!1,ord:r=!1,hexOrd:c=!1}){return t?p.h.escape(e):a?p.h.unescape(e):n?p.h.transform(e,{text:({content:m})=>String(m).replace(/[\\;=,%]/g,s=>"\\"+s).replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\t/g,"\\t")}):r?p.h.transform(e,{text:({content:m})=>[...m].map(s=>`&#${s.codePointAt(0)};`).join("")}):c?p.h.transform(e,{text:({content:m})=>[...m].map(s=>`&#x${s.codePointAt(0).toString(16)};`).join("")}):e}function ce(e){let t=e.lastIndexOf(":"),a=e.slice(0,t),n=e.slice(t+1);return[a,n]}function le(e,t){let a=e.logger(y.name);t.echo.enabled&&e.command("echo <message:el>",{checkUnknown:!0,showWarning:!0}).option("escape","-e").option("unescape","-E",{authority:3}).option("markov","-M").option("ord","-o").option("hexOrd","-x").action(async({session:n,options:r},c)=>{if(!c?.length){await n.send(n.text(".expect-content"));return}let{escape:m,unescape:s,markov:d,ord:i,hexOrd:h}=r;if(+!!m+ +!!s+ +!!d+ +!!i+ +!!h>1){await n.send(n.text(".conflicting-options"));return}let f=c.join("");return Y(f,r)}),t.cat.enabled&&e.command("cat [url:rawtext]",{checkUnknown:!0,showWarning:!0}).option("escape","-e").option("unescape","-E",{authority:3}).option("markov","-M").option("ord","-o").option("hexOrd","-x").action(async({session:n,options:r,initiator:c},m)=>{let{escape:s,unescape:d,markov:i,ord:h,hexOrd:f}=r;if(+!!s+ +!!d+ +!!i+ +!!h+ + +!!f>1){await n.send(n.text(".conflicting-options"));return}let l="";if(m){try{l=p.h.escape(await e.http.get(m,{responseType:"text"}))}catch(o){await n.send(o?.message||String(o)),a.info(o);return}if(l.length>(c==="$("?t.cat.fetchMaxInterpolationLength:t.cat.fetchMaxLength)){await n.send(n.text(".fetch-content-too-long"));return}}else await n.send(n.text(".awaiting-input")),l=await n.prompt();if(!l){await n.send(n.text(".no-content"));return}return Y(l,r)}),t.send.enabled&&e.command("send <message:el>",{checkUnknown:!0,showWarning:!0}).option("user","-u <user:user>",{authority:3}).option("channel","-c <channel:channel>",{authority:3}).option("guild","-g <guild:string>",{authority:3}).action(async({session:n,options:r},c)=>{if(!c?.length)return n.text(".expect-content");let m=r.user||r.channel;if(m){let[s,d]=ce(m),i=e.bots.find(h=>h.platform===s);if(i)r.user?await i.sendPrivateMessage(d,c,n.guildId):await i.sendMessage(d,c,r.guild);else return n.text(".platform-not-found");return}await n.send(c)})}y.apply=le});var J=C((ze,se)=>{se.exports={commands:{ma:{arguments:{program:"程序"},description:"马尔可夫算法",usage:`程序由一系列规则组成，规则之间用换行或分号分隔。每条规则格式一般为“原字符串=替换字符串”。
原字符串中百分号表示通配符，一般匹配一个字符。原字符串包含通配符时，替换字符串中出现的百分号将被原字符串中各通配符所匹配到的字符代替。若替换字符串中百分号的数量多于原字符串，多余百分号的位置将使用最后一个通配符所匹配到的字符补齐；若替换字符串中百分号的数量少于原字符串，多余通配符所匹配到的字符将被忽略。
若一行以三个小写字母+空格开头，视为关键词。不可出现未定义的关键词。各关键词定义如下：
    for 或 rep：表示该规则是一条元规则，对替换规则本身进行字符串替换。元规则中没有通配符。元规则的替换字符串可以是以逗号分隔的多项：此时，若规则的原字符串包含元规则的原字符串，则该规则将被复制多份，每份对应元规则替换字符串中的一项。若规则的原字符串不包含、而其替换字符串包含元规则的原字符串，则将只使用元规则的第一个替换字符串。规则中未转义的百分号、分隔原字符串与替换字符串的等号和分隔规则的换行等特殊字符不可被元规则匹配。元规则不修改其他元规则或自身。
    chr：该规则替换字符串中的百分号将被替换为通配符所匹配字符的十进制字符编码，而不是字符本身。
    ord：该规则中的通配符将匹配十进制数字，而不是单个任意字符；替换字符串中的百分号将被替换为通配符所匹配数字作为字符编码所对应的字符。
    fin：该规则执行后，停止程序运行。
    str：该规则其余部分为程序操作的初始字符串。程序不可包含多于一个 str 语句。若无 str 语句，初始字符串为空。
使用反斜杠（“\\”）转义具有特殊含义的字符，或使用“\\n”表示换行。`,options:{image:"显示图片（默认开启，使用 --no-image 或简写 -M 关闭）"},messages:{"no-operation":"该程序什么也没有做。","empty-result":"结果为空。","result-too-long":"结果过长。","iterations-ellipsized":"……（{0} 步）……"}},echo:{description:"输出给定内容",options:{escape:"XML 转义输出",unescape:"XML 反转义输出",markov:"ma 转义输出",ord:"XML 字符编码转义",decOrd:"XML 十进制字符编码转义",hexOrd:"XML 十六进制字符编码转义"},messages:{"expect-content":"缺少消息内容。","conflicting-options":"选项冲突。"}},cat:{description:"重复下一条消息，或从 URL 获取文本",options:{escape:"XML 转义输出",unescape:"XML 反转义输出",markov:"ma 转义输出",ord:"XML 字符编码转义",decOrd:"XML 十进制字符编码转义",hexOrd:"XML 十六进制字符编码转义"},messages:{"conflicting-options":"选项冲突。","fetch-content-too-long":"内容过长。","awaiting-input":"请发送内容…","no-content":"无内容可发送。"}},send:{description:"发送消息到指定上下文",options:{user:"发送到用户",channel:"发送到频道",guild:"指定群组编号"},messages:{"expect-content":"缺少消息内容。","platform-not-found":"找不到指定的平台。"}}}}});var ge=C(g=>{b();var ue=g&&g.__createBinding||(Object.create?function(e,t,a,n){n===void 0&&(n=a);var r=Object.getOwnPropertyDescriptor(t,a);(!r||("get"in r?!t.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,n,r)}:function(e,t,a,n){n===void 0&&(n=a),e[n]=t[a]}),de=g&&g.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),fe=g&&g.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var a in e)a!=="default"&&Object.prototype.hasOwnProperty.call(e,a)&&ue(t,e,a);return de(t,e),t},N=g&&g.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(g,"__esModule",{value:!0});g.apply=g.Config=g.inject=g.name=void 0;var _=(A(),$(I)),S=(P(),$(j)),me=N(D()),he=N(K()),Q=fe(G());g.name="ma";g.inject=["component:html"];g.Config=S.Schema.object({maxRules:S.Schema.number().default(1e3).description("规则的最大数量。主要用于限制元规则替换产生过多克隆规则。"),maxMetaRules:S.Schema.number().default(100).description("元规则的最大数量。"),maxIterations:S.Schema.number().default(1e5).description("迭代的最大步数。"),headIterations:S.Schema.number().default(50).description("迭代数量较多时，至少显示开头的迭代数量。"),tailIterations:S.Schema.number().default(50).description("迭代数量较多时，至少显示末尾的迭代数量。"),maxStringSize:S.Schema.number().default(1e5).description("字符串的最大 UTF-16 编码单元数。"),maxResultStringSize:S.Schema.number().default(1e3).description("结果字符串的最大 UTF-16 编码单元数。"),maxInterpolatedResultStringSize:S.Schema.number().default(5e4).description("在“$()”插值语法中运行本指令时，结果字符串的最大 UTF-16 编码单元数。"),maxRenderStringSize:S.Schema.number().default(1e5).description("图片中渲染字符串的最大总 UTF-16 编码单元数。"),maxWidth:S.Schema.string().default("100rem").description("图片的最大宽度。"),fontFamily:S.Schema.string().default("Consolas, Source Han Sans SC, Microsoft YaHei UI, monospace").description("字体。"),backColor:S.Schema.string().default("#000").description("背景颜色。"),foreColor:S.Schema.string().default("#999").description("次要文字颜色。"),codeBackColor:S.Schema.string().default("#222").description("主要文字底色。"),codeForeColor:S.Schema.string().default("#eee").description("主要文字颜色。"),auxCommands:Q.Config.description("辅助指令设置")});function q(e){return e.map(t=>(0,_.jsx)("li",{children:(0,_.jsx)("code",{children:t})}))}function pe(e,t){e.i18n.define("zh",J()),e.plugin(Q,t.auxCommands);async function a(r,c,{image:m=!0}={}){let s=(0,he.default)(c||"",{maxRules:t.maxRules,maxMetaRules:t.maxMetaRules,maxIterations:t.maxIterations,maxStringSize:t.maxStringSize}),d;if(!m)try{s.next();for(let u of s)d=u;return{result:d}}catch(u){return{error:u,result:d}}let i=[],h=[],f=null,l=0,o=0,x=0;try{let u=s.next();(0,me.default)(u.done!==!0),i.push(u.value),x+=u.value.length;for(let w of s)if(d=w,x+=w.length,l===0)i.push(w),(x>t.maxRenderStringSize||i.length>=t.headIterations)&&(l=1);else for(h.push(w);h.length>1&&(x>t.maxRenderStringSize||h.length>=t.tailIterations);)x-=h.shift().length,o++}catch(u){f=u}if(d!=null){let u=[];o===0?u.push((0,_.jsx)("ol",{children:q(i.concat(h))})):u.push((0,_.jsx)("ol",{children:q(i)}),(0,_.jsx)("div",{children:r.text(".iterations-ellipsized",[o])}),(0,_.jsx)("ol",{start:i.length+o+1,children:q(h)}));let w=i.length+o+h.length;await r.send((0,_.jsxs)("html",{style:{fontFamily:t.fontFamily,maxWidth:t.maxWidth,backgroundColor:t.backColor,color:t.foreColor,"--bg":t.codeBackColor,"--fg":t.codeForeColor,padding:"0.5em"},children:[(0,_.jsx)("style",{children:`
            code {
              font-family: inherit;
              background-color: var(--bg, #333);
              color: var(--fg, #eee);
              border-radius: 0.25em;
              white-space: pre-wrap;
              overflow-wrap: break-word;
              margin: 0;
            }
            ol {
              margin: 0;
              padding-left: ${Math.floor(Math.log10(w))+3}ch;
            }`}),u]}))}return{error:f,result:d}}e.command("ma <program:rawtext>",{checkUnknown:!0,showWarning:!0}).option("image","",{fallback:!0}).option("image","-M",{value:!1,hidden:!0}).action(async({options:r,session:c,initiator:m},s)=>{let d=m==="$(",{error:i,result:h}=await a(c,s,r);if(i!=null)return await c.send(String(i)),d?`
`:"";if(h==null)return await c.send(c.text(".no-operation")),d?`
`:"";if(!h.trim())return await c.send(c.text(".empty-result")),d?`
`:"";let f=d?t.maxInterpolatedResultStringSize:t.maxResultStringSize;return h.length>f?(await c.send(c.text(".result-too-long")),d?`
`:""):S.h.escape(h)})}g.apply=pe});export default ge();
