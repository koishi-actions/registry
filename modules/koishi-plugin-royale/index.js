var L=Object.defineProperty;var x=Object.getOwnPropertyDescriptor;var U=Object.getOwnPropertyNames;var D=Object.prototype.hasOwnProperty;var C=(e,r)=>()=>(e&&(r=e(e=0)),r);var $=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var I=(e,r,t,u)=>{if(r&&typeof r=="object"||typeof r=="function")for(let s of U(r))!D.call(e,s)&&s!==t&&L(e,s,{get:()=>r[s],enumerable:!(u=x(r,s))||u.enumerable});return e},f=(e,r,t)=>(I(e,r,"default"),t&&I(t,r,"default"));var v=e=>I(L({},"__esModule",{value:!0}),e);import{Buffer as l}from"https://registry.koishi.chat/modules/buffer/index.js";import m from"https://registry.koishi.chat/modules/process/index.js";var o=C(()=>{});var h={};import*as ie from"https://registry.koishi.chat/modules/koishi/index.js";var w=C(()=>{o();f(h,ie)});var p={};import*as ce from"https://registry.koishi.chat/modules/axios/index.js";var b=C(()=>{o();f(p,ce)});var _=$(y=>{"use strict";o();Object.defineProperty(y,"__esModule",{value:!0});y.success=J;y.failure=k;y.formatResponse=O;function J(e,r){return{success:!0,message:e,data:r}}function k(e,r){return{success:!1,message:e,error:r}}function O(e){return e.success?e.data&&typeof e.data=="object"&&"type"in e.data||e.data&&typeof e.data=="string"?e.data:e.message:`${e.error?`错误详情: ${e.error}`:e.message}`}});var q=$(P=>{"use strict";o();var T=P&&P.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(P,"__esModule",{value:!0});P.playerinfo=K;var G=T((b(),v(p))),n=_(),B="https://api.clashroyale.com/v1/players/%23";async function K(e,r){if(!e||e.trim()==="")return(0,n.formatResponse)((0,n.failure)("参数不足","请输入玩家tag"));if(!r||r.trim()==="")return(0,n.formatResponse)((0,n.failure)("配置错误","未设置API密钥，请在插件配置中设置 Clash Royale API密钥 (可从 https://developer.clashroyale.com 申请)"));try{e=e.trim(),e.startsWith("#")&&(e=e.substring(1));let u=(await G.default.get(`${B}${e}`,{headers:{Authorization:`Bearer ${r}`,Accept:"application/json"}})).data,s=E(u);return(0,n.formatResponse)((0,n.success)(`玩家 #${e} 的信息`,s))}catch(t){return G.default.isAxiosError(t)&&t.response?t.response.status===404?(0,n.formatResponse)((0,n.failure)("查询失败",`找不到玩家，请检查tag是否正确: #${e}`)):t.response.status===403?(0,n.formatResponse)((0,n.failure)("查询失败","访问API失败，请检查API密钥是否正确或是否已授权")):(0,n.formatResponse)((0,n.failure)("查询失败",`错误码: ${t.response.status}, 请稍后再试`)):(0,n.formatResponse)((0,n.failure)("查询失败","查询玩家信息时发生未知错误，请稍后再试"))}}function S(e,r){let t=e+r;return t===0?"无记录":`${(e/t*100).toFixed(2)}%`}function z(e,r){return r===0?"0.00%":`${(e/r*100).toFixed(2)}%`}function E(e){let r=e.badges?.length||0;return`
【玩家信息】
名称: ${e.name}
标签: ${e.tag}
奖杯: ${e.trophies}
最高奖杯: ${e.bestTrophies}
等级: ${e.expLevel}
竞技场: ${e.arena?.name||"未知"}
${e.clan?`部落: ${e.clan.name} (${e.clan.tag})`:"未加入部落"}
${e.role?`部落角色: ${e.role}`:""}

【战绩统计】
胜利场次: ${e.wins||0}
失败场次: ${e.losses||0}
三冠胜利: ${e.threeCrownWins||0}
胜率: ${S(e.wins||0,e.losses||0)}
三冠率: ${z(e.threeCrownWins||0,e.wins||0)}


【挑战赛】
挑战赛获得卡牌: ${e.challengeCardsWon||0}
挑战赛最高胜场: ${e.challengeMaxWins||0}

【锦标赛】
锦标赛获得卡牌: ${e.tournamentCardsWon||0}
锦标赛对战次数: ${e.tournamentBattleCount||0}

【部落互动】
捐献次数: ${e.donations||0}
接收捐献: ${e.donationsReceived||0}
总捐献数: ${e.totalDonations||0}

【成就徽章】
徽章总数: ${r}
`.trim()}});var g=$(R=>{"use strict";o();var F=R&&R.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(R,"__esModule",{value:!0});R.claninfo=N;var M=F((b(),v(p))),a=_(),H="https://api.clashroyale.com/v1/clans/%23";async function N(e,r){if(!e||e.trim()==="")return(0,a.formatResponse)((0,a.failure)("参数不足","请输入部落tag"));if(!r||r.trim()==="")return(0,a.formatResponse)((0,a.failure)("配置错误","未设置API密钥，请在插件配置中设置 Clash Royale API密钥 (可从 https://developer.clashroyale.com 申请)"));try{e=e.trim(),e.startsWith("#")&&(e=e.substring(1));let u=(await M.default.get(`${H}${e}`,{headers:{Authorization:`Bearer ${r}`,Accept:"application/json"}})).data,s=Q(u);return(0,a.formatResponse)((0,a.success)(`部落 #${e} 的信息`,s))}catch(t){return M.default.isAxiosError(t)&&t.response?t.response.status===404?(0,a.formatResponse)((0,a.failure)("查询失败",`找不到部落，请检查tag是否正确: #${e}`)):t.response.status===403?(0,a.formatResponse)((0,a.failure)("查询失败","访问API失败，请检查API密钥是否正确或是否已授权")):(0,a.formatResponse)((0,a.failure)("查询失败",`错误码: ${t.response.status}, 请稍后再试`)):(0,a.formatResponse)((0,a.failure)("查询失败","查询部落信息时发生未知错误，请稍后再试"))}}function Q(e){let r=e.members||0;return`
【部落信息】
名称: ${e.name}
标签: ${e.tag}
描述: ${e.description||"无描述"}
类型: ${V(e.type)}
成员数量: ${r}/50
奖杯要求: ${e.requiredTrophies||0}
部落奖杯: ${e.clanScore||0}
部落战奖杯: ${e.clanWarTrophies||0}
每周捐献: ${e.donationsPerWeek||0}
`.trim()}function V(e){return{open:"开放",inviteOnly:"仅邀请",closed:"关闭"}[e]||e}});var W=$(A=>{"use strict";o();Object.defineProperty(A,"__esModule",{value:!0});A.usage=void 0;A.usage=`
## 命令说明
* \`royale.playerinfo <tag>\` - 查询 Clash Royale 玩家个人信息。
* \`royale.claninfo <tag>\` - 查询 Clash Royale 部落信息。
* \`royale.setkey <key>\` - 设置API密钥（需要管理员权限）。

## 参数说明
* \`tag\` - 玩家或部落的标签，以 # 开头，例如 #CJ2L9PGLG。

## 示例
* \`/royale.playerinfo #CJ2L9PGLG\` - 查询标签为 #CJ2L9PGLG 的玩家信息。
* \`/royale.claninfo #2LUGUPJ\` - 查询标签为 #2LUGUPJ 的部落信息。

## 配置说明
* 请在插件设置页面配置API密钥
* 也可以使用命令 \`royale.setkey <key>\` 直接设置（管理员权限）
* 获取API密钥方法：
  1. 访问 Clash Royale 开发者门户网站 https://developer.clashroyale.com
  2. 注册或登录您的账号
  3. 在 My Account → Keys 页面创建一个新的API密钥
  4. 设置IP地址白名单（必填项，可填写您服务器的IP地址）
  5. 复制生成的API密钥到插件配置中
  
## 故障排除
如果查询失败，请检查：
1. 玩家或部落标签是否正确（区分大小写）
2. API密钥是否已正确配置
3. 服务器IP地址是否已添加到密钥的白名单中
4. API密钥是否已过期或超出使用限制
`});var re=$(d=>{o();Object.defineProperty(d,"__esModule",{value:!0});d.Config=d.name=void 0;d.apply=ee;var j=(w(),v(h)),X=q(),Y=g(),i=_(),Z=W();d.name="royale";d.Config=j.Schema.object({apiKey:j.Schema.string().description("Clash Royale API密钥 (可从开发者官网 https://developer.clashroyale.com 申请)").default("").required(!1)});function ee(e,r){!r.apiKey||r.apiKey.trim();let t=e.command("royale","Clash Royale相关功能").usage(Z.usage);t.subcommand(".setkey <key:string>","设置API密钥").option("admin","-a 需要管理员权限",{authority:3}).action(async({session:u,options:s},c)=>!c||c.trim()===""?(0,i.formatResponse)((0,i.failure)("参数不足","请提供有效的API密钥")):(r.apiKey=c.trim(),(0,i.formatResponse)((0,i.success)("配置成功","API密钥已成功设置，此设置将在重启后失效")))),t.subcommand(".playerinfo <tag>","查询一些玩家个人信息").example("/royale.playerinfo #CJ2L9PGLG").action(async(u,s)=>{if(!s||s.trim()==="")return(0,i.formatResponse)((0,i.failure)("参数不足","请提供玩家标签"));try{return await(0,X.playerinfo)(s,r.apiKey)}catch(c){return(0,i.formatResponse)((0,i.failure)("查询玩家信息失败",c.message))}}),t.subcommand(".claninfo <tag>","查询部落信息").example("/royale.claninfo #2LUGUPJ").action(async(u,s)=>{if(!s||s.trim()==="")return(0,i.formatResponse)((0,i.failure)("参数不足","请提供部落标签"));try{return await(0,Y.claninfo)(s,r.apiKey)}catch(c){return(0,i.formatResponse)((0,i.failure)("查询部落信息失败",c.message))}})}});export default re();
