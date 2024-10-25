var R=Object.defineProperty;var D=Object.getOwnPropertyDescriptor;var E=Object.getOwnPropertyNames;var O=Object.prototype.hasOwnProperty;var T=(s,i)=>()=>(s&&(i=s(s=0)),i);var j=(s,i)=>()=>(i||s((i={exports:{}}).exports,i),i.exports);var y=(s,i,o,r)=>{if(i&&typeof i=="object"||typeof i=="function")for(let e of E(i))!O.call(s,e)&&e!==o&&R(s,e,{get:()=>i[e],enumerable:!(r=D(i,e))||r.enumerable});return s},S=(s,i,o)=>(y(s,i,"default"),o&&y(o,i,"default"));var z=s=>y(R({},"__esModule",{value:!0}),s);import{Buffer as v}from"https://registry.koishi.chat/modules/buffer/index.js";import M from"https://registry.koishi.chat/modules/process/index.js";var d=T(()=>{});var f={};import*as te from"https://registry.koishi.chat/modules/koishi/index.js";var $=T(()=>{d();S(f,te)});var k=j(C=>{"use strict";d();Object.defineProperty(C,"__esModule",{value:!0});C.ColorIdent=void 0;var p=($(),z(f)),A=new p.Logger("color-ident");function L(){return p.Random.int(2)*2-1}function _(s){return s*=256,s>255?"ff":s<0?"00":Math.floor(s).toString(16).padStart(2,"0")}function w(s,i,o){return`#${_(s)}${_(i)}${_(o)}`}function P(s,i=1,o=1){let r=o*i,e=s/60,n=o-r,t=r*(1-Math.abs(e%2-1))+n;switch(r=r+n,Math.floor(e)){case 0:return w(r,t,n);case 1:return w(t,r,n);case 2:return w(n,r,t);case 3:return w(n,t,r);case 4:return w(t,n,r);case 5:return w(r,n,t)}}var X=[2,2,2,3,3,3,3,3,3,3],F=[2,2,2,2,2,2,2,3,3,3],G=[300,270,240,210,180,160,140,120,100,80],J=[.75,.7,.675,.65,.625,.6,.575,.55,.525,.5],K=[.75,.7,.675,.65,.625,.6,.575,.55,.525,.5],q=class{level;width;height;line;row;bgColor;fgColor;grid=[];base;constructor(i){this.level=i;let o=p.Random.real(360),r=p.Random.real(.4,.9),e=p.Random.real(.4,.9);this.base=P(o,r,e),this.width=X[i],this.height=F[i],this.line=Math.floor(Math.random()*this.height),this.row=Math.floor(Math.random()*this.width);let n=r<.2&&e>.8;this.bgColor=n?"#000000":"#ffffff",this.fgColor=n?"#ffffff":"#000000";for(let t=0;t<this.height;t++){this.grid.push([]);for(let a=0;a<this.width;a++){if(t===this.line&&a===this.row){A.debug("base = hsv(%d, %d, %d)",o,r,e),this.grid[t].push(this.base);continue}let l=Math.random()*.4+.3,c=1-l,I=c*(Math.random()*.6+.2),V=c-I,u=I*J[i];u+r>1?u*=-1:u<=r&&(u*=L());let g=V*K[i];g+e>1?g*=-1:g<=e&&(g*=L());let B=l*G[i]*L(),m=o+B;m<0?m+=360:m>=360&&(m-=360),A.debug("biased = hsv(%d, %d, %d)",m,r+u,e+g),this.grid[t].push(P(m,r+u,e+g))}}}async render(i){let r=await i.app.canvas.render((this.width+1.5)*256,(this.height+1.5)*256,e=>{e.fillStyle=this.bgColor,e.fillRect(0,0,(this.width+1.5)*256,(this.height+1.5)*256),e.textAlign="center",e.textBaseline="middle",e.font="128px sans-serif",e.fillStyle=this.fgColor;for(let t=1;t<=this.width;++t)e.fillText(String(t),(t+.5)*256,153.6);for(let t=1;t<=this.height;++t)e.fillText(String.fromCharCode(t+64),153.6,(t+.5)*256);let n=.4;for(let t=0;t<this.height;t+=1)for(let a=0;a<this.width;a+=1){let l=a+1.5,c=t+1.5;e.fillStyle=this.grid[t][a],e.beginPath(),e.moveTo((l-n)*256,(c-n)*256),e.lineTo((l+n)*256,(c-n)*256),e.lineTo((l+n)*256,(c+n)*256),e.lineTo((l-n)*256,(c+n)*256),e.closePath(),e.fill()}});return[`请输入最接近 ${this.base} 的颜色的坐标。`,r]}};C.ColorIdent=q});var U=j(h=>{d();Object.defineProperty(h,"__esModule",{value:!0});h.apply=h.Config=h.using=h.name=void 0;var b=($(),z(f)),H=k(),N=9;h.name="color-ident";h.using=["canvas"];h.Config=b.Schema.object({submission:b.Schema.union([b.Schema.const("strict").description("只接受指令输入"),b.Schema.const("loose").description("允许直接输入答案文本"),b.Schema.const("mention").description("仅在私聊或被提及时接受直接输入")]).role("radio").description("答案提交方式。").default("mention")});function Q(s,i){let o={};s.middleware(async(r,e)=>{if(!o[r.channelId]||i.submission==="strict")return e();let{content:t,atSelf:a}=r.stripped;return!r.isDirect&&!a&&i.submission!=="loose"||!/^([a-z]\d|\d[a-z])$/i.test(t)?e():r.execute({name:"color-ident",args:[t]})}),s.command("color-ident [position]","色彩识别测试").alias("色彩识别").option("quit","-q  停止测试").action(async({session:r,options:e},n)=>{let t=r.channelId;if(!o[t])return n||e.quit?"没有正在进行的色彩识别测试。输入“色彩识别”开始一轮测试。":(o[t]=new H.ColorIdent(0),await r.send("测试开始。"),await o[t].render(r));if(e.quit)return delete o[t],"测试已停止。";let a=o[t];if(!n)return await o[t].render(r);if(!/^([a-z]\d|\d[a-z])$/i.test(n))return"请输入由字母+数字构成的坐标。";let l,c;return n[0]>"9"?(l=n.charCodeAt(0)%32-1,c=parseInt(n.slice(1))-1):(l=n.charCodeAt(n.length-1)%32-1,c=parseInt(n.slice(0,-1))-1),l!==a.line||c!==a.row?"回答错误。":a.level===N?(delete o[t],`恭喜 ${r.username} 成功通关，本次测试结束。`):(o[t]=new H.ColorIdent(a.level+1),await r.send(`恭喜 ${r.username} 回答正确，下面进入第 ${a.level+2} 题。`),await o[t].render(r))})}h.apply=Q});export default U();
