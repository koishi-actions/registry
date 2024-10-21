var C=Object.defineProperty;var N=Object.getOwnPropertyDescriptor;var T=Object.getOwnPropertyNames;var E=Object.prototype.hasOwnProperty;var B=(n,a)=>()=>(n&&(a=n(n=0)),a);var M=(n,a)=>()=>(a||n((a={exports:{}}).exports,a),a.exports);var k=(n,a,f,b)=>{if(a&&typeof a=="object"||typeof a=="function")for(let h of T(a))!E.call(n,h)&&h!==f&&C(n,h,{get:()=>a[h],enumerable:!(b=N(a,h))||b.enumerable});return n},u=(n,a,f)=>(k(n,a,"default"),f&&k(f,a,"default"));var U=n=>k(C({},"__esModule",{value:!0}),n);import{Buffer as v}from"https://registry.koishi.chat/modules/buffer/index.js";import F from"https://registry.koishi.chat/modules/process/index.js";var d=B(()=>{});var x={};import*as X from"https://registry.koishi.chat/modules/koishi/index.js";var I=B(()=>{d();u(x,X)});import D from"https://registry.koishi.chat/modules/@cordiverse/path/index.js";var P=M((ee,q)=>{d();q.exports=D});var y={};import*as ne from"https://registry.koishi.chat/modules/@cordiverse/fs/index.js";var R=B(()=>{d();u(y,ne)});var O=M(_=>{d();var c=(I(),U(x)),S=new c.Logger("idiom-dictionary"),L=P(),G=(R(),U(y)).promises;_.name="idiom-dictionary";_.inject={optional:["puppeteer"]};_.usage=`
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>成语查询插件使用示例</title>
<style>
.example-container {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 20px;
    background-color: #FFF2E2; /* 浅橙色背景 */
}
.example-heading {
    color: #333; /* 深色文本，适合浅背景 */
}
.example-text {
    font-size: 16px;
    color: #666; /* 深色文本，适合浅背景 */
}
.example-box {
    background-color: #6E7B6C; /* 深灰绿色背景 */
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
.example-content {
    margin-top: 20px;
    border-left: 4px solid #333333;
    padding-left: 16px;
}
.example-link, .example-box .example-heading, .example-box .example-text {
    color: #FFFFFF; /* 白色系文字，用于深色背景 */
}
</style>
</head>
<body>
<div class="example-box example-container">
    <h2 class="example-heading">成语查询交互示例</h2>
    <p class="example-text">了解更多信息，请访问 <a href="https://www.npmjs.com/package/koishi-plugin-idiom-dictionary" target="_blank" class="example-link">成语字典查询插件页面</a>。</p>
    <div class="example-content">
        <h3 class="example-heading">示例1：直接查询</h3>
        <p class="example-text"><strong>输入：</strong>成语查询 一帆风顺</p>
        <p class="example-text"><strong>输出：</strong>“一帆风顺”
        一帆风顺，常用汉语成语，读音是（yī fán fēng shùn ）。ABCD式组合，紧缩式结构，一帆风顺意思是：船满帆；一路顺风行驶。比喻境遇非常顺利；没有任何阻碍、挫折。出自唐・孟郊《送崔爽之湖南》。一般作谓语、定语、宾语，含褒义。</p>
    </div>
    <div class="example-content">
        <h3 class="example-heading">示例2：模糊查询</h3>
        <p class="example-text"><strong>输入：</strong>成语查询 ?帆??</p>
        <p class="example-text"><strong>输出：</strong></p>
        <p>“?帆??”的搜索结果：</p>
        <p>一帆风顺  yī fán fēng shùn</p>
        <p>布帆无恙  bù fán wú yàng</p>
        <p>一帆顺风  yī fān shùn fēng</p>
        <p>千帆竞发  qiān fāng jìng fā</p>
        <p>. . . </p>
    </div>
    <p>近义词、反义词查询不支持模糊查询。</p>
</div>
</body>
</html>

`;_.Config=c.Schema.intersect([c.Schema.object({Maximumidiom:c.Schema.number().description("返回`成语`的最大数量限制").default(10),MaximumnearSynonyms:c.Schema.number().description("返回`近义词`的最大数量限制").default(5),imagifyoutput:c.Schema.boolean().description("图片输出模式 `需要puppeteer服务`").default(!1),consoleinfo:c.Schema.boolean().description("日志调试模式").default(!1)}).description("基础设置")]);async function K(n,a){var f={commands:{成语查询:{description:"成语查询",messages:{not_four_word:"请输入四字成语哦，未知的字可以用【？】代替。",not_found_idiom:"未找到成语释义。",try_failed:"查询失败，请稍后再试。",idiom_result:"的搜索结果："}},近义词查询:{description:"近义词查询",messages:{Incomplete_input:"输入内容不完整哦~",not_found_word:"未找到匹配的",try_failed:"查询失败，请稍后再试。",translation_failed:"翻译失败，请稍后再试。"}},反义词查询:{description:"反义词查询",messages:{Incomplete_input:"输入内容不完整哦~",not_found_word:"未找到匹配的",try_failed:"查询失败，请稍后再试。",translation_failed:"翻译失败，请稍后再试。"}}}};n.i18n.define("zh-CN",f),n.command("成语查询 <idiom>").action(async({session:t},e)=>{if(!e||e.length===0){await t.send(a.helptip);return}if(e.length!=4){await t.send(t.text(".not_four_word"));return}if(!e.includes("?")&&!e.includes("？")){let r=`https://www.hanyuguoxue.com/chengyu/search?words=${encodeURIComponent(e)}`;try{let p=(await n.http.get(r)).match(/<meta content="([^"]+)" name="description">/);if(p&&p[1]){let o=p[1];if(a.imagifyoutput){let s=await j(e,o,0);await t.send(c.h.image(s,"image/png"))}else await t.send(`“${e}”
${o}`)}else await t.send(t.text(".not_found_idiom"))}catch(g){S.error(g),await t.send(t.text(".try_faild"))}}else{let r="";for(let o=0;o<e.length;o++)if(e[o]==="?"||e[o]==="？"){let s=!1;for(let i=o+1;i<e.length;i++)if(e[i]!=="?"&&e[i]!=="？"){s=!0;break}r+=s?"?":"*"}else r+=e[o];let g=`https://www.hanyuguoxue.com/chengyu/search?words=${encodeURIComponent(r)}`,p=a.Maximumidiom;try{let s=(await n.http.get(g)).match(/<div class="title">[\s\S]*?<\/div>/g);if(s&&s.length>0){let i=s.slice(0,p).map(m=>{let $=m.match(/title="([^"]+)">/),w=m.match(/<span class="pinyin">([^<]+)<\/span>/);return`${$[1]}  ${w[1]}`}).join(`
`);if(a.imagifyoutput){let m=await j(e,i,1);await t.send(c.h.image(m,"image/png"))}else await t.send(`“${e}” ${t.text(".idiom_result")}
${i}`)}else await t.send(t.text(".not_found_idiom"))}catch(o){S.error(o),await t.send(t.text(".try_failed"))}}}),n.command("近义词查询 <word>").action(async({session:t},e)=>{await b(e,t,"synonyms")}),n.command("反义词查询 <word>").action(async({session:t},e)=>{await b(e,t,"antonyms")});async function b(t,e,r){if(!t||t.length===0||t.includes("?")||t.includes("？")){await e.send(e.text(".Incomplete_input"));return}let o=`https://www.hanyuguoxue.com${r==="synonyms"?"/jinyici/search":"/fanyici/search"}?words=${encodeURIComponent(t)}`;try{let s=await n.http.get(o),i=/<li>.*?<h3><a[^>]+title=[^>]+>(.*?)<\/a><\/h3>.*?<p class=pinyin>(.*?)<\/p>.*?<p class=summary>(.*?)<\/p>.*?<\/li>/gs,m=[...s.matchAll(i)],$=a.MaximumnearSynonyms;if(m.length>0){let w=m.slice(0,$).map(l=>{let z=l[1],A=l[2],H=l[3].replace(/<span class=more>[\s\S]*?<\/span>/,"").trim();return`${z} (${A}): ${H}
`}).join(`
`);if(a.imagifyoutput){let l=await j(t,w,r==="synonyms"?2:3);await e.send(c.h.image(l,"image/png"))}else await e.send(`${r==="synonyms"?"近义词":"反义词"} [${t}] 查询结果：
${w}`)}else await e.send(`${e.text(".not_found_word")}${r==="synonyms"?"近义词":"反义词"}。`)}catch(s){S.error(s),await e.send(e.text(".try_failed"))}}function h(t,e){let r={0:"【释义】",1:"【成语结果】",2:"【近义词查询结果】",3:"【反义词查询结果】"};return t.replace(/\\3010\\91ca\\4e49\\3011/g,r[e])}async function j(t,e,r=0){let p=await n.puppeteer.browser.createBrowserContext(),o=await p.newPage();await o.setViewport({width:750,height:250,deviceScaleFactor:1});let s=L.join(import.meta.url,"newword.html"),i=await G.readFile(s,{encoding:"utf-8"}),m=t.split("").map(l=>l==="?"||l==="？"?" ":l).map(l=>`
      <div class="word" data-v-1ac9b022>
          <span class="line" data-v-1ac9b022></span>
          <span class="line" data-v-1ac9b022></span>
          <span class="text" data-v-1ac9b022>${l}</span>
      </div>
      `).join("");i=h(i,r);let $=e.split(`
`).map(l=>`<div>${l}</div>`).join("<br>");i=i.replace("<!--词语-->",m),i=i.replace("<!--词语的释义-->",$),await o.setContent(i,{waitUntil:"load"});let w=await o.screenshot({fullPage:!0,type:"png"});return await o.close(),await p.close(),a.consoleinfo&&S.error(`
${t}：
 ${e}`),w}}_.apply=K});export default O();
