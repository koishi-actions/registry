var O=Object.defineProperty;var Y=Object.getOwnPropertyDescriptor;var A=Object.getOwnPropertyNames;var E=Object.prototype.hasOwnProperty;var D=(i,e)=>()=>(i&&(e=i(i=0)),e);var C=(i,e)=>()=>(e||i((e={exports:{}}).exports,e),e.exports);var Q=(i,e,m,f)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of A(e))!E.call(i,s)&&s!==m&&O(i,s,{get:()=>e[s],enumerable:!(f=Y(e,s))||f.enumerable});return i},d=(i,e,m)=>(Q(i,e,"default"),m&&Q(m,e,"default"));var N=i=>Q(O({},"__esModule",{value:!0}),i);import{Buffer as $}from"https://registry.koishi.chat/modules/buffer/index.js";import S from"https://registry.koishi.chat/modules/process/index.js";var g=D(()=>{});var h={};import*as ne from"https://registry.koishi.chat/modules/koishi/index.js";var I=D(()=>{g();d(h,ne)});import H from"https://registry.koishi.chat/modules/@koishijs/path/index.js";var G=C((se,F)=>{g();F.exports=H});var u={};import*as me from"https://registry.koishi.chat/modules/@koishijs/fs/index.js";var J=D(()=>{g();d(u,me)});var L=C(n=>{g();Object.defineProperty(n,"__esModule",{value:!0});n.apply=n.Config=n.usage=n.name=n.using=void 0;var t=(I(),N(h)),x=G(),B=(J(),N(u));n.using=["puppeteer"];n.name="galwife";n.usage=`
# <center>md功能可能会发不出图，问就是gitee把图删了。</center>

**<center>预计七八月份会更新实质性内容，最近在汉化galgame。摸了😋</center>**

<center>发的比较急，你先别急，让我先急。</center>

**<center>无需配置，启用即可。</center>**

自定义功能使用说明：

填入的文件夹

├─img

│  ├─bgimage

│  │  └─背景文件.jpg

│  ├─fgimage

│  │  └─人物立绘.png

│  ├─icon

│  │  └─游戏图标.png

│  └─image

│......└─角色CG.jpg

└─data.json

背景文件：以game命名，扩展名jpg

人物立绘：推荐比例3：4，以name命名，扩展名png

游戏图标：以game命名，扩展名png

角色CG：以name命名，扩展名jpg

data.json示例：

[
    {
        "name": "クレア・コートニー・クレア",
        "game": "もののあはれは彩の頃。",
        "msg_jp": "「こういうゲーム、好きなんだよね。楽しそうだと思わない？」",
        "msg_zh": "“这样的游戏，很喜欢呢。不觉得很有趣吗？”"
    },
    {
        "name": "鬼無水みさき",
        "game": "もののあはれは彩の頃。",
        "msg_jp": "「私たちがここで出会ったのもきっと、なにかの縁だと思うの」",
        "msg_zh": "“我们在此相遇，一定是某种缘分吧”"
    }
]
`;n.Config=t.Schema.intersect([t.Schema.object({简洁模式:t.Schema.boolean().default(!1).description("※仅发送CG和文字，妈妈再也不用担心小水管爆了ヾ(•ω•`)o"),QQMD模板:t.Schema.boolean().default(!1).description("**✦使用markdown发送消息，不支持自定义和轮换相当于旧版galwife✦** 老婆的大图(╹ڡ╹ )，")}).description("基础功能"),t.Schema.intersect([t.Schema.union([t.Schema.object({QQMD模板:t.Schema.const(!0).required(),模板id:t.Schema.string().description("**※markdown模板id※** 审核通过后使用( •̀ .̫ •́ )✧"),img_url:t.Schema.string().description("**※图片url的key※** 审核通过后使用(≧∀≦)ゞ"),img_dec:t.Schema.string().description("**※图片规格的key※** 审核通过后使用φ(゜▽゜*)♪"),text:t.Schema.string().description("**※文本的key※** 审核通过后使用( •̀ ω •́ )✧")}),t.Schema.object({QQMD模板:t.Schema.const(!1)})])]),t.Schema.object({每日轮换:t.Schema.boolean().default(!0).description("※记录每日与她的邂逅(✿◠‿◠)")}).description("扩展功能"),t.Schema.object({自定义库:t.Schema.boolean().default(!1).description("**☢不会使用请勿开启☢** 允许添加自己的老婆(○｀ 3′○)")}).description("高级功能"),t.Schema.intersect([t.Schema.union([t.Schema.object({自定义库:t.Schema.const(!0).required(),文件夹路径:t.Schema.string().description("**※文件夹的路径※** 向好友分享你自己的老婆库(/▽＼)"),去你妈的傻逼galwife:t.Schema.boolean().default(!0).description("**※清空自带的wife※** 你很迷人，但我要回家玩原神")}),t.Schema.object({自定义库:t.Schema.const(!1)})])])]);async function K(i,e){i.model.extend("galgamewife",{id:"unsigned",user_time:"string",user_id:"string",user_wife:"string",wife_game:"string"});let m=e.去你妈的傻逼galwife?[]:JSON.parse(B.readFileSync(x.resolve(import.meta.url,"data.json"),"utf8")),f=e.文件夹路径==null||e.文件夹路径==""?m:m.concat(JSON.parse(B.readFileSync(`${e.文件夹路径}/data.json`,"utf8")));function s(a,r,_,v){let l,b,w,c;if(m.find(o=>o.name===a&&o.game===r)?(l=x.resolve(import.meta.url,`./img/bgimage/${r}_bg.jpg`),b=x.resolve(import.meta.url,`./img/fgimage/${a}.png`),w=x.resolve(import.meta.url,`./img/icon/${r}_icon.png`),c=x.resolve(import.meta.url,`./img/image/${a}.jpg`)):(l=`${e.文件夹路径}/img/bgimage/${r}.jpg`,b=`${e.文件夹路径}/img/fgimage/${a}.png`,w=`${e.文件夹路径}/img/icon/${r}.png`,c=`${e.文件夹路径}/img/image/${a}.jpg`),e.简洁模式){let o=t.h.text("『"+r+"』で「"+a+`」に出会った。
`+_.replace(/\<br\/\>/g,"")+`
`+v.replace(/\<br\/\>/g,""));return`${t.h.img(`file://${c}`)}${o}`}else return`<html style="width:1920px; height:1080px; margin: 0;">
        <div>
          <img style="position:absolute; width:1920px; height:1080px; object-fit:cover; z-index:0;" src="${l}"/> 
        </div>
        <div style="display:flex; flex-direction:column; width:100%;">
          <div style="display:flex; justify-content:center; width:100%;">
            <img style="position:absolute; top:25px; height:150px; z-index:10;" src="${w}"/> 
          </div>
          <div style="position:relative; top:100px; width:95%; margin-right:2.5%; margin-left:2.5%; display:flex; flex-direction:row; justify-content:space-between;">
            <div style="position:relative; top:25px; display:flex; flex-direction:column; justify-content:center;">
              <div>
                <img  style="height:600px; margin-bottom:30px; box-shadow:6px 6px 15px rgba(0, 0, 0, 0.4); object-fit:scale-down; z-index:4;" src="${c}"/> 
                <p style="text-align:center; font-size:30px;font-weight:bolder; margin: 0; margin-bottom:10px; -webkit-text-stroke:1.5px rgba(118,77,57); color:rgba(255,255,255); z-index:4;">${_}</p>
                <p style="text-align:center; font-size:30px;font-weight:bolder; margin: 0; -webkit-text-stroke:1.5px rgba(118,77,57); color:rgba(255,255,255); z-index:4;">${v}</p>
              </div>
            </div>
            <div>
              <img style="height:980px; z-index:2;" src="${b}"/> 
            </div>
          </div>
        </div>
      </html>`}i.command("galwife","娶二次元老婆").alias("/galwife").action(async({session:a})=>{let r=a.userId,_=await i.database.get("galgamewife",{user_id:r}),v=await i.database.get("galgamewife",{}),l=new Date,b=l.getFullYear(),w=l.getMonth()+1,c=l.getDate(),o=`${b}-${w}-${c}`,{name:p,game:y,msg_jp:j,msg_zh:k}=f[Math.floor(Math.random()*f.length)];if(e.每日轮换)return _.length==0?(await i.database.create("galgamewife",{id:v.length+1,user_time:o,user_id:r,user_wife:p,wife_game:y}),s(p,y,j,k)):_?.[0]?.user_time==o?"你今天已经娶过了":(await i.database.set("galgamewife",{user_id:r},{user_time:o,user_wife:p,wife_game:y}),s(p,y,j,k));if(e.QQMD模板){let P=function(V){let M={"ジュエリー・ハーツ・アカデミア -We will wing wonder world-":["アリアンナ","ベルカ・トリアーデ","メア・アシュリーペッカー","ルビイ"],"ゆまほろめ　時を停めた館で明日を探す迷子たち":["ミーナ","柴田奏子","川崎純麗","岩沼鈴"],"もののあはれは彩の頃。":["クレア・コートニー・クレア","鬼無水みさき","琥珀","野々宮京楓"],"さくら、もゆ。-as the Night's, Reincarnation-":["クロ","杏藤千和","夜月姫織","柊ハル"],縁りて此の葉は紅に:["斑鳩和羽","稜未小乃葉","木那里もみじ","笹浦すずな"],"さくらの雲＊スカアレットの恋":["メリッサ","不知出遠子","水神蓮","所長"],"ふゆから、くるる。":["熾火澱","菊間塔子","空丘夕陽","霜雪しほん","水名とりねこ","星都チエミ","宇賀島ベルリン","宇賀島ユカリ","月角島ヴィカ"],まどひ白きの神隠し:["稲白みこと","高乃椎凪","九十九千代","土御ろか"],"ねこツク、さくら。":["ツキ","久慈恋花","上路弥生","穂高文乃"],"11月のアルカディア":["三刀屋瀬奈","星崎心音","野々宮楓花","羽鳥愛瑠"],あなたに恋する恋愛ルセット:["白咲美絵瑠","大園柚姫","鍵由楓花","橘ののか"],"アンレス・テルミナリア":["りな","ルチア＝ヴァリニャーノ","橘シャロン","御厨恋"],ソラコイ:["アイリ","ソラ","ナミ","ヒカリ"],ハミダシクリエイティブ:["常磐華乃","和泉妃愛","錦あすみ","鎌倉詩桜"],保健室のセンセーとゴスロリの校医:["オトヒメ"],保健室のセンセーとシャボン玉中毒の助手:["シロバナ"],保健室のセンセーと小悪魔な会長:["月森鈴"],"ネコ神さまと、ななつぼし -妹の姉-":["青葉英梨歌"],"鍵を隠したカゴのトリ-Bird in cage hiding the key-":["孔雀石透子","青葉梟みおん","瑞葉伊鶴","燕沢夜"],"空の青と白と／瞬きの夏":["桧ノ原つぼみ"],恋想リレーション:["アリサ・ガーランド","千石唯華","桜坂由羽子","御厨陽葵"],青い空のカミュ:["オオモトサマ","三間坂蛍","込谷燐"],若葉色のカルテット:["アイ","ソフィア・クーゲル・ウェストリン","峰岸都","守谷ひより"],"乙女が紡ぐ恋のキャンバス ～二人のギャラリー～":["鳳怜奈","猫西昭江","乾幸","獅子堂・千晴・フラムスティード","烏丸紫月"],"神頼みしすぎて俺の未来がヤバい。":["坂白花夜","赤城鈴奈","麗","南雲七海","神林真央","周防由香里"],"神様のしっぽ ～干支神さまたちの恩返し～":["あきら","あまね","あんこ","さゆり","じゅん","たかみ","ちづ","はるか","みそら","みゆき","浅葱蓮華"],天気雨:["こん","しろ"],"添いカノ 彼女と添い寝セット":["花塚藍果","片桐つばめ","千雪灯子","熊倉夜明"],星の乙女と六華の姉妹:["九重純玲","茉莉花華恋","山吹ありす","梔子ネリネ"],星降る夜のファルネーゼ:["イブ・クライン","オリヒメ・N・アスティル","ジャクリーン・シュプレンガー","ファルネーゼ・アトラス"],揺り籠のカナリア:["君原結愛","藍野深織","美城ありす","小鳥遊紬","伊集院貴美香"]},q=Object.values(M).flat(),z=q[Math.floor(Math.random()*q.length)],R=Object.keys(M).filter(W=>M[W].includes(z)),T=JSON.stringify(R).replace(/[\[\]"]/g,"");return{content:"111",msg_type:2,markdown:{custom_template_id:`${e.模板id}`,params:[{key:`${e.img_dec}`,values:["图片 #1920px #1080px"]},{key:`${e.img_url}`,values:[`https://gitee.com/rain-linlin/galwife/raw/master/data/${z}.jpg`]},{key:`${e.text}`,values:[`\r\r> 『${T}』で「${z}」に出会った。\r我从未藏起心声，可你却恍然不觉。\rbaby I'll give you my everything🥰.`]}]},keyboard:{content:{rows:[{buttons:[{id:"1",render_data:{label:"😘寻找你的情人",visited_label:"😘寻找你的情人",style:1},action:{type:2,permission:{type:2},unsupport_tips:"兼容文本",data:"/galwife",enter:!0}}]}]}},msg_id:a.messageId,timestamp:a.timestamp,msg_seq:Math.floor(Math.random()*1e6)}}(i);await a.bot.internal.sendMessage(a.channelId,P)}else return s(p,y,j,k)})}n.apply=K});export default L();
