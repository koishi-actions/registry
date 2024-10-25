var G=Object.defineProperty;var j=Object.getOwnPropertyDescriptor;var L=Object.getOwnPropertyNames;var N=Object.prototype.hasOwnProperty;var I=(a,t)=>()=>(a&&(t=a(a=0)),t);var Y=(a,t)=>()=>(t||a((t={exports:{}}).exports,t),t.exports);var C=(a,t,n,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let e of L(t))!N.call(a,e)&&e!==n&&G(a,e,{get:()=>t[e],enumerable:!(o=j(t,e))||o.enumerable});return a},K=(a,t,n)=>(C(a,t,"default"),n&&C(n,t,"default"));var P=a=>C(G({},"__esModule",{value:!0}),a);import{Buffer as z}from"https://registry.koishi.chat/modules/buffer/index.js";import A from"https://registry.koishi.chat/modules/process/index.js";var b=I(()=>{});var h={};import*as V from"https://registry.koishi.chat/modules/koishi/index.js";var B=I(()=>{b();K(h,V)});var S=Y((Z,T)=>{T.exports={commands:{maya:{description:"玛雅日历换算",messages:{"invalid-date":"请输入正确的日期。"}}}}});var U=Y(c=>{b();Object.defineProperty(c,"__esModule",{value:!0});c.apply=c.Config=c.name=void 0;var E=(B(),P(h)),p=[0,31,28,31,30,31,30,31,31,30,31,30,31],H=["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],J=["Pop","Wo'","Sip","Sotz'","Sek","Xul","Yaxk'in","Mol","Ch'en","Yax","Sak'","Keh","Mak","K'ank'in","Muwan","Pax","K'ayab","Kumk'u","Wayeb"],O=["Kin","Uinal","Tun","Ka'tun","Bak'tun","Pictun","Kalabtun","K'inchiltun","Alautun"],$=["Ajaw","Imix","Ik'","Ak'bal","K'an","Chikchan","Kimi","Manik'","Lamat","Muluk","Ok","Chuwen","Eb","Ben","Ix","Men","K'ib","Kaban","Etz'nab","Kawak"];function w(a){return a%4===0&&(a%100!==0||a%400===0)}var y=class a{constructor(t){this.stamp=t}compare(t){return this.stamp>t.stamp?1:this.stamp<t.stamp?-1:0}getDelta(t){return this.stamp-t.stamp}static fromGreg(t,n,o){let e=0,s=-3113,i=8,m=11;t<0&&(t+=1);let l=t-s-1;l<0&&(l=0);let x=0,u=s-s%4,g=t-1-(t>0?(t-1)%4:4+(t-1)%4);u<=g&&(x=Math.floor((g-u)/4)+1);let k=0,d=s-s%100,M=t-1-(t>0?(t-1)%100:100+(t-1)%100);d<=M&&(k=Math.floor((M-d)/100)+1);let f=0,v=s-s%400,D=t-1-(t>0?(t-1)%400:400+(t-1)%400);if(v<=D&&(f=Math.floor((D-v)/400)+1),e+=l*365+x-k+f,s<t){for(let r=i+1;r<=12;r++)e+=p[r];e+=p[i]-m;for(let r=1;r<n;r++)e+=p[r];e+=o}else if(s===t){for(let r=i+1;r<n;r++)e+=p[r];i<n?(e+=p[i]-m,e+=o):i===n&&(e+=o-m)}return w(t)&&n>2&&s<t&&e++,new a(e)}static fromMaya(t){let n=0,o=t.split(".");return o.forEach((e,s)=>{s===o.length-2?n*=18:n*=20,n+=+e}),new a(n)}toGreg(){let t=this.stamp,n=-3113,o=8,e=11,s=Math.floor(t/146097);if(n+=s*400,t%=146097,t>0){let i=!1,m=a.fromGreg(n+(n>0?400-n%400:-(n%400)),2,29),l=Math.floor(t/36524);if(n+=l*100,t%=36524,a.fromGreg(n,o,e).compare(m)>0&&(i=!0,e--),t>0){let u=n+(n>0?100-n%100:-(n%100));u%400===0&&(u+=100);let g=a.fromGreg(u,2,28),k=Math.floor(t/1461);n+=k*4,t%=1461;let d=a.fromGreg(n,o,e);for(d.compare(g)>0&&e++,!i&&d.compare(m)>0&&e--;t>0;){let M=w(n+1)?366:365;if(t>=M)n++,t-=M;else{let f=p[o];w(n)&&o===2&&f++,t>=f?(o++,t-=f,o>12&&(n++,o-=12)):(e+=t,t=0,e>f&&(o++,e-=f),o>12&&(n++,o-=12))}}}}return H[o]+" "+e+", "+(n<=0?Math.abs(n-1)+"BC":n)}toMLC(){let t=this.stamp,n=[];for(n.push(t%20),t=Math.floor(t/20),t>0&&(n.push(t%18),t=Math.floor(t/18));t>0;)n.push(t%20),t=Math.floor(t/20);for(;n.length<5;)n.push(0);return n.map((o,e)=>`${o} ${O[e]}`).reverse().join(", ")}toTzolkin(){let t=this.stamp,n=(t+4)%13,o=$[t%20];return n+" "+o}toHaab(){let t=this.stamp%365,n,o;return t<12?(n=17,o=t+8):t<17?(n=18,o=t-12):(t-=17,n=Math.floor(t/20),o=t%20),o+" "+J[n]}};c.name="maya";c.Config=E.Schema.object({});function q(a){a.i18n.define("zh",S()),a.command("maya <YYYY-MM-DD> [BC|AD]").example("maya 2012-12-21").action(({session:t},n,o)=>{if(!n)return t.text(".invalid-date");let e=n.match(/^(\d+)[-\.](\d+)[-\.](\d+)\.?$/);if(!e)return t.text(".invalid-date");let s=parseInt(e[1])*(o==="BC"?-1:1),i=parseInt(e[2]),m=parseInt(e[3]),l=y.fromGreg(s,i,m);return["Tzolk'in: "+l.toTzolkin(),"Haab: "+l.toHaab(),"Long Count: "+l.toMLC()].join(`
`)})}c.apply=q});export default U();