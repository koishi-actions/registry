var le=Object.defineProperty;var $e=Object.getOwnPropertyDescriptor;var Ee=Object.getOwnPropertyNames;var Me=Object.prototype.hasOwnProperty;var O=(t,e)=>()=>(t&&(e=t(t=0)),e);var Y=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var X=(t,e,i,m)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of Ee(e))!Me.call(t,s)&&s!==i&&le(t,s,{get:()=>e[s],enumerable:!(m=$e(e,s))||m.enumerable});return t},E=(t,e,i)=>(X(t,e,"default"),i&&X(i,e,"default"));var A=t=>X(le({},"__esModule",{value:!0}),t);import{Buffer as U}from"https://registry.koishi.chat/modules/buffer/index.js";import Q from"https://registry.koishi.chat/modules/process/index.js";var I=O(()=>{});var D={};import*as Xe from"https://registry.koishi.chat/modules/koishi/index.js";var G=O(()=>{I();E(D,Xe)});import Le from"https://registry.koishi.chat/modules/@cordiverse/path/index.js";var K=Y((et,de)=>{I();de.exports=Le});var R={};import*as rt from"https://registry.koishi.chat/modules/@cordiverse/fs/index.js";var ee=O(()=>{I();E(R,rt)});var q={};import*as it from"https://registry.koishi.chat/modules/@cordiverse/url/index.js";var te=O(()=>{I();E(q,it)});import ve from"https://registry.koishi.chat/modules/crypto-browserify/index.js";var pe=Y((st,ue)=>{I();ue.exports=ve});var Ge=Y((lt,Se)=>{I();var Ue=Object.create,z=Object.defineProperty,De=Object.getOwnPropertyDescriptor,Ce=Object.getOwnPropertyNames,Te=Object.getPrototypeOf,Ae=Object.prototype.hasOwnProperty,y=(t,e)=>z(t,"name",{value:e,configurable:!0}),Re=(t,e)=>{for(var i in e)z(t,i,{get:e[i],enumerable:!0})},_e=(t,e,i,m)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of Ce(e))!Ae.call(t,s)&&s!==i&&z(t,s,{get:()=>e[s],enumerable:!(m=De(e,s))||m.enumerable});return t},T=(t,e,i)=>(i=t!=null?Ue(Te(t)):{},_e(e||!t||!t.__esModule?z(i,"default",{value:t,enumerable:!0}):i,t)),qe=t=>_e(z({},"__esModule",{value:!0}),t),be={};Re(be,{Config:()=>We,apply:()=>xe,inject:()=>ze,name:()=>He,reusable:()=>Oe,usage:()=>Ne});Se.exports=qe(be);var x=(G(),A(D)),a=(G(),A(D)),p=T(K()),Ne=`
<h2><a href="https://www.npmjs.com/package/koishi-plugin-emojihub-bili" target="_blank">如何额外添加自己喜欢的表情包</a></h2>
<p>添加额外的表情包到 <strong>EmojiHub-bili</strong> 中非常简单！只需按照以下步骤操作：</p>
<ol>
<li><strong>安装扩展（用户脚本管理器）</strong>：<br>在浏览器中添加扩展：<a href="https://docs.scriptcat.org/" target="_blank">ScriptCat---脚本猫</a>。</li>
<li><strong>安装脚本</strong>：<br>在用户脚本管理器中添加脚本：<a href="https://greasyfork.org/zh-CN/scripts/521666-bilibili%E4%B8%93%E6%A0%8F%E5%8E%9F%E5%9B%BE%E9%93%BE%E6%8E%A5%E6%8F%90%E5%8F%962024%E6%94%B9%E7%89%88" target="_blank">（点击右侧文字查看）Bilibili专栏原图链接提取2024改版</a>。</li>
<li><strong>搜索表情包</strong>：<br>开启扩展后，打开<a href="https://search.bilibili.com/article/" target="_blank">哔哩哔哩专栏搜索</a>，在专栏中搜索您需要的表情包。</li>
<li><strong>提取链接</strong>：<br>点击进入具体的某个专栏帖子，屏幕靠近右下角会有一个绿色的【提取链接】按钮。点击该按钮，即可下载包含当前专栏所有图片的 URL 的 txt 文件。并且按下一次后会变成红色，防止误触，不可二次触发。如需再次下载，请刷新页面。</li>
<li><strong>配置 EmojiHub-bili</strong>：<br>将同一类表情包图片的 URL 整合到同一个 txt 文件中。然后，在 Koishi 的配置项中填入相应的指令名称与 txt 文件路径。（无需像自带的txt一样省略前缀，写完整URL即可）</li>
<li><strong>保存并重载</strong>：<br>完成配置后，保存您的配置并重载插件，您就可以使用自定义的指令发送表情包啦！🌟📚</li>
</ol>
<p> </p>
<h2>温馨提示：</h2>
<p><br>请勿将自定义的txt文件与本插件放置在同一目录下，以免插件更新导致文件丢失。</p>
<p>目前EmojiHub-bili默认提供 <code>43套</code> 表情包。若您的配置内容有误差，请点击 <code>MoreEmojiHubList</code> 表格右上角按钮内的 <code>恢复默认值</code>。</p>
<p>若开启插件后，指令不出现，<a href="/market?keyword=commands">请重新开关commands插件</a></p>
`,Qe=[{command:"随机emojihub表情包",source_url:"无效路径/内容会调用随机表情包。注意与【随机表情包】指令的功能一致，但【随机表情包】不可被填入表格使用，【随机emojihub表情包】可以，因为在这个配置项里。"},{command:"本地图库示例",source_url:p.default.join(import.meta.url,"txts")},{command:"网络图片示例",source_url:"https://i0.hdslb.com/bfs/article/afc31d0e398204d94478473a497028e6352074746.gif"},{command:"2233娘小剧场表情包",source_url:p.default.join(import.meta.url,"../txts/2233娘小剧场.txt")},{command:"acomu414表情包",source_url:p.default.join(import.meta.url,"../txts/acomu414.txt")},{command:"ba表情包",source_url:p.default.join(import.meta.url,"../txts/ba.txt")},{command:"capoo表情包",source_url:p.default.join(import.meta.url,"../txts/capoo.txt")},{command:"chiikawa表情包",source_url:p.default.join(import.meta.url,"../txts/chiikawa.txt")},{command:"downvote表情包",source_url:p.default.join(import.meta.url,"../txts/Downvote.txt")},{command:"doro表情包",source_url:p.default.join(import.meta.url,"../txts/doro.txt")},{command:"eveonecat表情包",source_url:p.default.join(import.meta.url,"../txts/eveonecat.txt")},{command:"fufu表情包",source_url:p.default.join(import.meta.url,"../txts/fufu.txt")},{command:"girlsbandcry",source_url:p.default.join(import.meta.url,"../txts/GirlsBandCry.txt")},{command:"kemomimi表情包",source_url:p.default.join(import.meta.url,"../txts/kemomimi酱表情包.txt")},{command:"koishi-meme表情包",source_url:p.default.join(import.meta.url,"../txts/koimeme.txt")},{command:"mygo表情包",source_url:p.default.join(import.meta.url,"../txts/mygo.txt")},{command:"seseren表情包",source_url:p.default.join(import.meta.url,"../txts/seseren.txt")},{command:"阿夸表情包",source_url:p.default.join(import.meta.url,"../txts/阿夸.txt")},{command:"阿尼亚表情包",source_url:p.default.join(import.meta.url,"../txts/阿尼亚.txt")},{command:"白圣女表情包",source_url:p.default.join(import.meta.url,"../txts/白圣女.txt")},{command:"白圣女漫画表情包",source_url:p.default.join(import.meta.url,"../txts/白圣女黑白.txt")},{command:"败犬女主表情包",source_url:p.default.join(import.meta.url,"../txts/败犬女主.txt")},{command:"柴郡表情包",source_url:p.default.join(import.meta.url,"../txts/柴郡.txt")},{command:"初音Q版表情包",source_url:p.default.join(import.meta.url,"../txts/初音未来Q.txt")},{command:"甘城猫猫表情包",source_url:p.default.join(import.meta.url,"../txts/甘城猫猫.txt")},{command:"孤独摇滚表情包",source_url:p.default.join(import.meta.url,"../txts/孤独摇滚.txt")},{command:"狗妈表情包",source_url:p.default.join(import.meta.url,"../txts/狗妈.txt")},{command:"滑稽表情包",source_url:p.default.join(import.meta.url,"../txts/滑稽.txt")},{command:"疾旋鼬表情包",source_url:p.default.join(import.meta.url,"../txts/疾旋鼬.txt")},{command:"卡拉彼丘表情包",source_url:p.default.join(import.meta.url,"../txts/卡拉彼丘.txt")},{command:"流萤表情包",source_url:p.default.join(import.meta.url,"../txts/流萤.txt")},{command:"龙图表情包",source_url:p.default.join(import.meta.url,"../txts/龙图.txt")},{command:"鹿乃子表情包",source_url:p.default.join(import.meta.url,"../txts/鹿乃子.txt")},{command:"玛丽猫表情包",source_url:p.default.join(import.meta.url,"../txts/玛丽猫.txt")},{command:"小c表情包",source_url:p.default.join(import.meta.url,"../txts/蜜汁工坊.txt")},{command:"男娘武器库表情包",source_url:p.default.join(import.meta.url,"../txts/男娘武器库.txt")},{command:"千恋万花表情包",source_url:p.default.join(import.meta.url,"../txts/0721.txt")},{command:"赛马娘表情包",source_url:p.default.join(import.meta.url,"../txts/赛马娘.txt")},{command:"瑟莉亚表情包",source_url:p.default.join(import.meta.url,"../txts/瑟莉亚.txt")},{command:"藤田琴音表情包",source_url:p.default.join(import.meta.url,"../txts/藤田琴音.txt")},{command:"小黑子表情包",source_url:p.default.join(import.meta.url,"../txts/小黑子.txt")},{command:"心海表情包",source_url:p.default.join(import.meta.url,"../txts/心海.txt")},{command:"绪山真寻表情包",source_url:p.default.join(import.meta.url,"../txts/绪山真寻.txt")},{command:"亚托莉表情包",source_url:p.default.join(import.meta.url,"../txts/亚托莉表情包.txt")},{command:"永雏小菲表情包",source_url:p.default.join(import.meta.url,"../txts/永雏小菲.txt")},{command:"宇佐紀表情包",source_url:p.default.join(import.meta.url,"../txts/宇佐紀.txt")}],We=a.Schema.intersect([a.Schema.object({emojihub_bili_command:a.Schema.string().default("emojihub-bili").description("`父级指令`的指令名称").pattern(/^\S+$/),emojihub_onemore:a.Schema.string().default("再来一张").description("`再来一张`的指令名称").pattern(/^\S+$/),emojihub_randompic:a.Schema.string().default("随机表情包").description("`随机表情包`的指令名称").pattern(/^\S+$/),MoreEmojiHubList:a.Schema.array(a.Schema.object({command:a.Schema.string().description("注册的指令名称"),source_url:a.Schema.string().description("表情包文件地址")})).role("table").default(Qe).description("表情包指令映射表<br>▶ 若丢失了旧版本`MoreEmojiHub`配置 请先回退到 1.3.0 版本<br>▶ 若出现配置问题 请点击右方按钮 可以恢复到默认值<br>右列`文件地址`可以填入`txt绝对路径`、`文件夹绝对路径`、`图片直链`、`图片文件绝对路径`。支持格式 详见[➩项目README](https://github.com/shangxueink/koishi-shangxue-apps/tree/main/plugins/emojihub-bili)"),deleteMsg:a.Schema.boolean().description("`开启后`自动撤回表情").default(!1),optionsname:a.Schema.string().description("多图返回的 选项名称").default("n"),maxexecutetime:a.Schema.number().description("`-n 选项`指定 允许单次返回的 表情包最大数<br>例如默认10 ：`ba表情包 -n 30`，可以返回10张").default(10)}).description("表情包设置"),a.Schema.union([a.Schema.object({deleteMsg:a.Schema.const(!0).required(),deleteMsgtime:a.Schema.number().default(30).description("若干`秒`后 撤回表情").min(1)}),a.Schema.object({})]),a.Schema.object({repeatCommandDifferentiation:a.Schema.union([a.Schema.const("channelId").description("按频道ID区分"),a.Schema.const("userId").description("按用户ID区分")]).role("radio").default("channelId").description("`再来一张`指令的区分逻辑。<br>按频道ID区分：触发指令后发送当前频道最后触发的表情包<br>按用户ID区分：触发指令后发送当前用户最后触发的表情包"),searchSubfolders:a.Schema.boolean().description("本地发图，输入文件名称参数时，是否递归搜索文件夹。<br>`开启后 对于本地文件夹地址 会搜索其子文件夹内全部的图片`").default(!0),searchSubfoldersWithfilename:a.Schema.boolean().description("递归搜索时，是否把`子文件夹`的名称纳入名称匹配范围<br>例如：`C:/中文/456.png`被视作`中文456.png`文件名处理匹配").default(!1),localPictureToName:a.Schema.string().role("textarea",{rows:[4,4]}).description("对于本地图片/文件，是否输出文件名<br>仅图片：`${IMAGE}`<br>图+文件名：`${IMAGE}\\n${NAME}`<br>文件名+图：`${NAME}\\n${IMAGE}`<br>文本+变量：`今天你的幸运神：${NAME}\\n${IMAGE}`<br>全部变量示例：`${IMAGE}\\n文件名称：${NAME}\\n文件大小：${SIZE}\\n修改日期：${TIME}\\n文件路径：${PATH}`<br>其中`\\n`就是换行，可以写字也可以直接回车。<br>可用替换变量有：IMAGE、 NAME、 SIZE、 TIME、 PATH<br>仅对指令发送本地图片有效。<br>更多说明，详见[➩项目README](https://github.com/shangxueink/koishi-shangxue-apps/tree/main/plugins/emojihub-bili)").default("${IMAGE}")}).description("进阶设置"),a.Schema.object({autoEmoji:a.Schema.union(["取消应用","定量消息发送","定时发送"]).description("打开后，开启自动表情包功能 <br>▶ 定量消息发送: `达到一定消息数量 自动触发表情包`<br>▶ 定时发送: `使用cron表达式定时触发表情包`此项需要`cron`服务").default("取消应用")}).description("自动表情包设置"),a.Schema.union([a.Schema.object({autoEmoji:a.Schema.const("定量消息发送").required(),middleware:a.Schema.boolean().description("开启后使用前置中间件").default(!0),triggerprobability:a.Schema.percent().default(.8).description("达到消息数量阈值时，发送表情包的概率 `范围为 0 到 1 `"),groupListmapping:a.Schema.array(a.Schema.object({groupList:a.Schema.string().description("开启自动表情包的群组ID"),defaultemojicommand:a.Schema.string().description("表情包指令名称 `应与上方指令表格对应`"),count:a.Schema.number().description("触发自动表情包的消息数量的阈值").default(30),enable:a.Schema.boolean().description("勾选后 屏蔽该群 的自动表情包").default(!1)})).role("table").description("表情包指令映射 `注意群组ID不要多空格什么的`<br>私聊频道有`private:`前缀<br>表情包名称请通过逗号分隔").default([{groupList:"114514",defaultemojicommand:"koishi-meme，白圣女表情包，男娘武器库",count:30,enable:!1},{groupList:"private:1919810",defaultemojicommand:"随机emojihub表情包",count:30,enable:!0}]),allgroupautoEmoji:a.Schema.boolean().description("`全部群组` 开启自动表情包").default(!1),count:a.Schema.number().description("`全部群组` 触发自动表情包的消息数量的阈值").default(30),allgroupemojicommand:a.Schema.string().role("textarea",{rows:[2,4]}).description("`全部群组的` 表情包指令映射`一行一个指令 或者 逗号分隔`   <br> 可以同时在`groupListmapping`指定群组的表情包内容").default(`宇佐紀表情包
白圣女表情包
白圣女漫画表情包`)}),a.Schema.object({autoEmoji:a.Schema.const("定时发送").required(),botId:a.Schema.string().description("定时消息由哪个bot发出？▶ 填入bot对应的Id"),triggerprobability:a.Schema.percent().default(.8).description("达到预定时间时，发送表情包的概率 `范围为 0 到 1 `"),groupListmapping:a.Schema.array(a.Schema.object({groupList:a.Schema.string().description("开启自动表情包的群组ID"),defaultemojicommand:a.Schema.string().description("表情包指令名称 `应与上方指令表格对应`"),cronTime:a.Schema.string().description("定时设置:cron语法"),enable:a.Schema.boolean().description("勾选后 屏蔽该群 的自动表情包").default(!1)})).role("table").description("表情包指令映射 `注意群组ID不要多空格什么的`<br>私聊频道有`private:`前缀<br>表情包名称请通过逗号分隔<br>▶ cron 定时语法 见 https://cron.koishi.chat/").default([{groupList:"114514",defaultemojicommand:"白圣女表情包，白圣女漫画表情包",enable:!1,cronTime:"15,45 * * * *"},{groupList:"private:1919810",defaultemojicommand:"白圣女表情包",enable:!0,cronTime:"15,45 * * * *"}])}),a.Schema.object({})]),a.Schema.object({markdown_button_mode:a.Schema.union([a.Schema.const("unset").description("取消应用此配置项"),a.Schema.const("json").description("json按钮-----------20 群（频道不可用）"),a.Schema.const("markdown").description("被动md模板--------2000 DAU / 私域"),a.Schema.const("markdown_raw_json").description("被动md模板--------2000 DAU - 原生按钮"),a.Schema.const("raw").description("原生md------------10000 DAU")]).role("radio").description("markdown/按钮模式选择").default("unset")}).description("QQ官方按钮设置"),a.Schema.union([a.Schema.object({markdown_button_mode:a.Schema.const("json").required(),markdown_button_mode_initiative:a.Schema.boolean().description("开启后，使用 主动消息 发送markdown。<br>即开启后不带`messageId`发送<br>适用于私域机器人频道使用。私域机器人需要使用`被动md模板、json模板`并且开启此配置项").default(!1),markdown_button_mode_keyboard:a.Schema.boolean().description("开启后，markdown加上按钮。关闭后，不加按钮内容哦<br>不影响markdown发送，多用于调试功能使用").default(!0).experimental(),markdown_button_mode_without_emojilist_keyboard:a.Schema.boolean().description("开启后，表情包列表使用下方`nestedlist`配置的表情包列表按钮。关闭后，仅发送普通的文字列表").default(!0).experimental(),nested:a.Schema.object({json_button_template_id:a.Schema.string().description("模板ID<br>形如 `123456789_1234567890` 的ID编号<br>更多说明，详见[➩项目README](https://github.com/shangxueink/koishi-shangxue-apps/tree/main/plugins/emojihub-bili)").pattern(/^\d+_\d+$/)}).collapse().description('➢表情包--按钮设置<br>更多说明，详见[➩项目README](https://github.com/shangxueink/koishi-shangxue-apps/tree/main/plugins/emojihub-bili)<hr style="border: 2px solid red;"><hr style="border: 2px solid red;">'),nestedlist:a.Schema.object({json_button_template_id:a.Schema.string().description("模板ID<br>形如 `123456789_1234567890` 的ID编号<br>更多说明，详见[➩项目README](https://github.com/shangxueink/koishi-shangxue-apps/tree/main/plugins/emojihub-bili)").pattern(/^\d+_\d+$/)}).collapse().description('➣表情包列表--按钮设置<br>更多说明，详见[➩项目README](https://github.com/shangxueink/koishi-shangxue-apps/tree/main/plugins/emojihub-bili)<hr style="border: 2px solid red;"><hr style="border: 2px solid red;">')}),a.Schema.object({markdown_button_mode:a.Schema.const("markdown").required(),markdown_button_mode_initiative:a.Schema.boolean().description("开启后，使用 主动消息 发送markdown。<br>即开启后不带`messageId`发送<br>适用于私域机器人频道使用。私域机器人需要使用`被动md模板、json模板`并且开启此配置项").default(!1),markdown_button_mode_keyboard:a.Schema.boolean().description("开启后，markdown加上按钮。关闭后，不加按钮内容哦<br>不影响markdown发送，多用于调试功能使用").default(!0).experimental(),markdown_button_mode_without_emojilist_keyboard:a.Schema.boolean().description("开启后，表情包列表使用下方`nestedlist`配置的表情包列表按钮。关闭后，仅发送普通的文字列表").default(!0).experimental(),nested:a.Schema.object({markdown_button_template_id:a.Schema.string().description("md模板ID<br>形如 `123456789_1234567890` 的ID编号，发送markdown").pattern(/^\d+_\d+$/),markdown_button_keyboard_id:a.Schema.string().description("按钮模板ID<br>形如 `123456789_1234567890` 的ID编号，发送按钮").pattern(/^\d+_\d+$/),markdown_button_content_table:a.Schema.array(a.Schema.object({raw_parameters:a.Schema.string().description("原始参数名称"),replace_parameters:a.Schema.string().description("替换参数名称")})).role("table").default([{raw_parameters:"your_markdown_text_1",replace_parameters:"表情包来啦！"},{raw_parameters:"your_markdown_text_2",replace_parameters:"这是你的表情包哦😽"},{raw_parameters:"your_markdown_img",replace_parameters:"${img_pxpx}"},{raw_parameters:"your_markdown_url",replace_parameters:"${img_url}"}]).description("替换参数映射表<br>本插件会替换模板变量，请在左侧填入模板变量，右侧填入真实变量值。<br>本插件提供的参数有`command`、`img_pxpx`、`img_url`、`ctx`、`session`、`config`<br>`img_pxpx`会被替换为`img#...px #...px`<br>`img_url`会被替换为`一个链接`，其中img_pxpx参数需要使用`canvas`服务<br>▶比如你可以使用`{{.session.userId}}`，这会被本插件替换为`真实的userId值`，若无匹配变量，则视为文本<br>更多说明，详见[➩项目README](https://github.com/shangxueink/koishi-shangxue-apps/tree/main/plugins/emojihub-bili)")}).collapse().description('➢表情包--按钮设置<br>更多说明，详见[➩项目README](https://github.com/shangxueink/koishi-shangxue-apps/tree/main/plugins/emojihub-bili)<hr style="border: 2px solid red;"><hr style="border: 2px solid red;">'),nestedlist:a.Schema.object({markdown_button_template_id:a.Schema.string().description("md模板ID<br>形如 `123456789_1234567890` 的ID编号，发送markdown").pattern(/^\d+_\d+$/),markdown_button_keyboard_id:a.Schema.string().description("按钮模板ID<br>形如 `123456789_1234567890` 的ID编号，发送按钮").pattern(/^\d+_\d+$/),markdown_button_content_table:a.Schema.array(a.Schema.object({raw_parameters:a.Schema.string().description("原始参数名称"),replace_parameters:a.Schema.string().description("替换参数名称")})).role("table").default([{raw_parameters:"your_markdown_text_1",replace_parameters:"表情包列表~"},{raw_parameters:"your_markdown_text_2",replace_parameters:"点击下面的按钮触发哦！"}]).description("替换参数映射表<br>本插件会替换模板变量，请在左侧填入模板变量，右侧填入真实变量值。<br>本插件提供的参数有`command`、`img_pxpx`、`img_url`、`ctx`、`session`、`config`<br>`img_pxpx`会被替换为`img#...px #...px`<br>`img_url`会被替换为`一个链接`，其中img_pxpx参数需要使用`canvas`服务<br>▶比如你可以使用`{{.session.userId}}`，这会被本插件替换为`真实的userId值`，若无匹配变量，则视为文本<br>更多说明，详见[➩项目README](https://github.com/shangxueink/koishi-shangxue-apps/tree/main/plugins/emojihub-bili)")}).collapse().description('➣表情包列表--按钮设置<br>更多说明，详见[➩项目README](https://github.com/shangxueink/koishi-shangxue-apps/tree/main/plugins/emojihub-bili)<hr style="border: 2px solid red;"><hr style="border: 2px solid red;">')}),a.Schema.object({markdown_button_mode:a.Schema.const("markdown_raw_json").required(),markdown_button_mode_initiative:a.Schema.boolean().description("开启后，使用 主动消息 发送markdown。<br>即开启后不带`messageId`发送<br>适用于私域机器人频道使用。私域机器人需要使用`被动md模板、json模板`并且开启此配置项").default(!1),markdown_button_mode_keyboard:a.Schema.boolean().description("开启后，markdown加上按钮。关闭后，不加按钮内容哦<br>不影响markdown发送，多用于调试功能使用").default(!0).experimental(),markdown_button_mode_without_emojilist_keyboard:a.Schema.boolean().description("开启后，表情包列表使用下方`nestedlist`配置的表情包列表按钮。关闭后，仅发送普通的文字列表").default(!0).experimental(),nested:a.Schema.object({markdown_raw_json_button_template_id:a.Schema.string().description("markdown模板ID。**注意不是按钮模板ID**<br>形如 `123456789_1234567890` 的ID编号，发送markdown").pattern(/^\d+_\d+$/),markdown_raw_json_button_content_table:a.Schema.array(a.Schema.object({raw_parameters:a.Schema.string().description("原始参数名称"),replace_parameters:a.Schema.string().description("替换参数名称")})).role("table").default([{raw_parameters:"your_markdown_text_1",replace_parameters:"表情包来啦！"},{raw_parameters:"your_markdown_text_2",replace_parameters:"这是你的表情包哦😽"},{raw_parameters:"your_markdown_img",replace_parameters:"${img_pxpx}"},{raw_parameters:"your_markdown_url",replace_parameters:"${img_url}"}]).description("替换参数映射表<br>本插件会替换模板变量，请在左侧填入模板变量，右侧填入真实变量值。<br>本插件提供的参数有`command`、`img_pxpx`、`img_url`、`ctx`、`session`、`config`<br>`img_pxpx`会被替换为`img#...px #...px`<br>`img_url`会被替换为`一个链接`，其中img_pxpx参数需要使用`canvas`服务<br>▶比如你可以使用`{{.session.userId}}`，这会被本插件替换为`真实的userId值`，若无匹配变量，则视为文本<br>更多说明，详见[➩项目README](https://github.com/shangxueink/koishi-shangxue-apps/tree/main/plugins/emojihub-bili)"),markdown_raw_json_button_keyboard:a.Schema.string().role("textarea",{rows:[12,12]}).collapse().default(`{
    "rows": [
        {
            "buttons": [
                {
                    "render_data": {
                        "label": "再来一张😺",
                        "style": 2
                    },
                    "action": {
                        "type": 2,
                        "permission": {
                            "type": 2
                        },
                        "data": "/\${command}",
                        "enter": true
                    }
                },
                {
                    "render_data": {
                        "label": "返回列表😽",
                        "style": 2
                    },
                    "action": {
                        "type": 2,
                        "permission": {
                            "type": 2
                        },
                        "data": "/\${config.emojihub_bili_command}",
                        "enter": true
                    }
                }
            ]
        }
    ]
}`).description("实现QQ官方bot的按钮效果<br>在这里填入你的按钮内容，注意保持json格式，推荐在编辑器中编辑好后粘贴进来")}).collapse().description('➢表情包--按钮设置<br>更多说明，详见[➩项目README](https://github.com/shangxueink/koishi-shangxue-apps/tree/main/plugins/emojihub-bili)<hr style="border: 2px solid red;"><hr style="border: 2px solid red;">'),nestedlist:a.Schema.object({markdown_raw_json_button_template_id:a.Schema.string().description("markdown模板ID。**注意不是按钮模板ID**<br>形如 `123456789_1234567890` 的ID编号，发送markdown").pattern(/^\d+_\d+$/),markdown_raw_json_button_content_table:a.Schema.array(a.Schema.object({raw_parameters:a.Schema.string().description("原始参数名称"),replace_parameters:a.Schema.string().description("替换参数名称")})).role("table").default([{raw_parameters:"your_markdown_text_1",replace_parameters:"表情包列表~"},{raw_parameters:"your_markdown_text_2",replace_parameters:"点击下面的按钮触发哦！"}]).description("替换参数映射表<br>本插件会替换模板变量，请在左侧填入模板变量，右侧填入真实变量值。<br>本插件提供的参数有`command`、`img_pxpx`、`img_url`、`ctx`、`session`、`config`<br>`img_pxpx`会被替换为`img#...px #...px`<br>`img_url`会被替换为`一个链接`，其中img_pxpx参数需要使用`canvas`服务<br>▶比如你可以使用`{{.session.userId}}`，这会被本插件替换为`真实的userId值`，若无匹配变量，则视为文本<br>更多说明，详见[➩项目README](https://github.com/shangxueink/koishi-shangxue-apps/tree/main/plugins/emojihub-bili)"),markdown_raw_json_button_keyboard:a.Schema.string().role("textarea",{rows:[12,12]}).collapse().default(`{
    "rows": [
        {
            "buttons": [
                {
                    "render_data": {
                        "label": "随机emojihub表情包",
                        "style": 1
                    },
                    "action": {
                        "type": 2,
                        "permission": {
                            "type": 2
                        },
                        "data": "/随机emojihub表情包",
                        "enter": true
                    }
                },
                {
                    "render_data": {
                        "label": "acomu414",
                        "style": 1
                    },
                    "action": {
                        "type": 2,
                        "permission": {
                            "type": 2
                        },
                        "data": "/acomu414",
                        "enter": true
                    }
                },
                {
                    "render_data": {
                        "label": "ba表情包",
                        "style": 1
                    },
                    "action": {
                        "type": 2,
                        "permission": {
                            "type": 2
                        },
                        "data": "/ba表情包",
                        "enter": true
                    }
                },
                {
                    "render_data": {
                        "label": "downvote",
                        "style": 1
                    },
                    "action": {
                        "type": 2,
                        "permission": {
                            "type": 2
                        },
                        "data": "/downvote",
                        "enter": true
                    }
                }
            ]
        },
        {
            "buttons": [
                {
                    "render_data": {
                        "label": "doro",
                        "style": 1
                    },
                    "action": {
                        "type": 2,
                        "permission": {
                            "type": 2
                        },
                        "data": "/doro",
                        "enter": true
                    }
                },
                {
                    "render_data": {
                        "label": "eveonecat",
                        "style": 1
                    },
                    "action": {
                        "type": 2,
                        "permission": {
                            "type": 2
                        },
                        "data": "/eveonecat",
                        "enter": true
                    }
                },
                {
                    "render_data": {
                        "label": "fufu",
                        "style": 1
                    },
                    "action": {
                        "type": 2,
                        "permission": {
                            "type": 2
                        },
                        "data": "/fufu",
                        "enter": true
                    }
                },
                {
                    "render_data": {
                        "label": "mygo",
                        "style": 1
                    },
                    "action": {
                        "type": 2,
                        "permission": {
                            "type": 2
                        },
                        "data": "/mygo",
                        "enter": true
                    }
                }
            ]
        },
        {
            "buttons": [
                {
                    "render_data": {
                        "label": "seseren",
                        "style": 1
                    },
                    "action": {
                        "type": 2,
                        "permission": {
                            "type": 2
                        },
                        "data": "/seseren",
                        "enter": true
                    }
                },
                {
                    "render_data": {
                        "label": "白圣女",
                        "style": 1
                    },
                    "action": {
                        "type": 2,
                        "permission": {
                            "type": 2
                        },
                        "data": "/白圣女",
                        "enter": true
                    }
                },
                {
                    "render_data": {
                        "label": "白圣女漫画",
                        "style": 1
                    },
                    "action": {
                        "type": 2,
                        "permission": {
                            "type": 2
                        },
                        "data": "/白圣女漫画",
                        "enter": true
                    }
                },
                {
                    "render_data": {
                        "label": "柴郡",
                        "style": 1
                    },
                    "action": {
                        "type": 2,
                        "permission": {
                            "type": 2
                        },
                        "data": "/柴郡",
                        "enter": true
                    }
                }
            ]
        },
        {
            "buttons": [
                {
                    "render_data": {
                        "label": "初音Q版",
                        "style": 1
                    },
                    "action": {
                        "type": 2,
                        "permission": {
                            "type": 2
                        },
                        "data": "/初音Q版",
                        "enter": true
                    }
                },
                {
                    "render_data": {
                        "label": "甘城猫猫",
                        "style": 1
                    },
                    "action": {
                        "type": 2,
                        "permission": {
                            "type": 2
                        },
                        "data": "/甘城猫猫",
                        "enter": true
                    }
                },
                {
                    "render_data": {
                        "label": "疾旋鼬",
                        "style": 1
                    },
                    "action": {
                        "type": 2,
                        "permission": {
                            "type": 2
                        },
                        "data": "/疾旋鼬",
                        "enter": true
                    }
                },
                {
                    "render_data": {
                        "label": "流萤",
                        "style": 1
                    },
                    "action": {
                        "type": 2,
                        "permission": {
                            "type": 2
                        },
                        "data": "/流萤",
                        "enter": true
                    }
                }
            ]
        },
        {
            "buttons": [
                {
                    "render_data": {
                        "label": "赛马娘",
                        "style": 1
                    },
                    "action": {
                        "type": 2,
                        "permission": {
                            "type": 2
                        },
                        "data": "/赛马娘",
                        "enter": true
                    }
                },
                {
                    "render_data": {
                        "label": "瑟莉亚",
                        "style": 1
                    },
                    "action": {
                        "type": 2,
                        "permission": {
                            "type": 2
                        },
                        "data": "/瑟莉亚",
                        "enter": true
                    }
                },
                {
                    "render_data": {
                        "label": "藤田琴音",
                        "style": 1
                    },
                    "action": {
                        "type": 2,
                        "permission": {
                            "type": 2
                        },
                        "data": "/藤田琴音",
                        "enter": true
                    }
                },
                {
                    "render_data": {
                        "label": "亚托莉",
                        "style": 1
                    },
                    "action": {
                        "type": 2,
                        "permission": {
                            "type": 2
                        },
                        "data": "/亚托莉",
                        "enter": true
                    }
                }
            ]
        }
    ]
}`).description("实现QQ官方bot的按钮效果<br>在这里填入你的按钮内容，注意保持json格式，推荐在编辑器中编辑好后粘贴进来")}).collapse().description('➣表情包列表--按钮设置<br>更多说明，详见[➩项目README](https://github.com/shangxueink/koishi-shangxue-apps/tree/main/plugins/emojihub-bili)<hr style="border: 2px solid red;"><hr style="border: 2px solid red;">')}),a.Schema.object({markdown_button_mode:a.Schema.const("raw").required(),markdown_button_mode_initiative:a.Schema.boolean().description("开启后，使用 主动消息 发送markdown。<br>即开启后不带`messageId`发送<br>适用于私域机器人频道使用。私域机器人需要使用`被动md模板、json模板`并且开启此配置项").default(!1),markdown_button_mode_keyboard:a.Schema.boolean().description("开启后，markdown加上按钮。关闭后，不加按钮内容哦<br>不影响markdown发送，多用于调试功能使用").default(!0).experimental(),markdown_button_mode_without_emojilist_keyboard:a.Schema.boolean().description("开启后，表情包列表使用下方`nestedlist`配置的表情包列表按钮。关闭后，仅发送普通的文字列表").default(!0).experimental(),nested:a.Schema.object({raw_markdown_button_content:a.Schema.string().role("textarea",{rows:[6,6]}).collapse().default("## **表情包~😺**\n### 😽来了哦！\n![${img_pxpx}](${img_url})").description("实现QQ官方bot的按钮效果，需要`canvas`服务。<br>在这里填入你的markdown内容。本插件会替换形如`{{.xxx}}`或`${xxx}`的参数为`xxx`。<br>本插件提供的参数有`command`、`img_pxpx`、`img_url`、`ctx`、`session`、`config`<br>`img_pxpx`会被替换为`img#...px #...px`<br>`img_url`会被替换为`一个链接`更多说明，详见[➩项目README](https://github.com/shangxueink/koishi-shangxue-apps/tree/main/plugins/emojihub-bili)"),raw_markdown_button_keyboard:a.Schema.string().role("textarea",{rows:[12,12]}).collapse().default(`{
    "rows": [
        {
            "buttons": [
                {
                    "render_data": {
                        "label": "再来一张😺",
                        "style": 2
                    },
                    "action": {
                        "type": 2,
                        "permission": {
                            "type": 2
                        },
                        "data": "/\${command}",
                        "enter": true
                    }
                },
                {
                    "render_data": {
                        "label": "返回列表😽",
                        "style": 2
                    },
                    "action": {
                        "type": 2,
                        "permission": {
                            "type": 2
                        },
                        "data": "/\${config.emojihub_bili_command}",
                        "enter": true
                    }
                }
            ]
        }
    ]
}`).description("实现QQ官方bot的按钮效果<br>在这里填入你的按钮内容，注意保持json格式，推荐在编辑器中编辑好后粘贴进来")}).collapse().description('➢表情包--按钮设置<br>更多说明，详见[➩项目README](https://github.com/shangxueink/koishi-shangxue-apps/tree/main/plugins/emojihub-bili)<hr style="border: 2px solid red;"><hr style="border: 2px solid red;">'),nestedlist:a.Schema.object({raw_markdown_button_content:a.Schema.string().role("textarea",{rows:[6,6]}).collapse().default(`## **表情包列表**
### 😻列表如下：点击按钮触发哦！`).description("实现QQ官方bot的按钮效果，需要`canvas`服务。<br>在这里填入你的markdown内容。本插件会替换形如`{{.xxx}}`或`${xxx}`的参数为`xxx`。<br>本插件提供的参数有`command`、`img_pxpx`、`img_url`、`ctx`、`session`、`config`<br>`img_pxpx`会被替换为`img#...px #...px`<br>`img_url`会被替换为`一个链接`更多说明，详见[➩项目README](https://github.com/shangxueink/koishi-shangxue-apps/tree/main/plugins/emojihub-bili)"),raw_markdown_button_keyboard:a.Schema.string().role("textarea",{rows:[12,12]}).collapse().default(`{
    "rows": [
        {
            "buttons": [
                {
                    "render_data": {
                        "label": "随机emojihub表情包",
                        "style": 1
                    },
                    "action": {
                        "type": 2,
                        "permission": {
                            "type": 2
                        },
                        "data": "/随机emojihub表情包",
                        "enter": true
                    }
                },
                {
                    "render_data": {
                        "label": "acomu414",
                        "style": 1
                    },
                    "action": {
                        "type": 2,
                        "permission": {
                            "type": 2
                        },
                        "data": "/acomu414",
                        "enter": true
                    }
                },
                {
                    "render_data": {
                        "label": "ba表情包",
                        "style": 1
                    },
                    "action": {
                        "type": 2,
                        "permission": {
                            "type": 2
                        },
                        "data": "/ba表情包",
                        "enter": true
                    }
                },
                {
                    "render_data": {
                        "label": "downvote",
                        "style": 1
                    },
                    "action": {
                        "type": 2,
                        "permission": {
                            "type": 2
                        },
                        "data": "/downvote",
                        "enter": true
                    }
                }
            ]
        },
        {
            "buttons": [
                {
                    "render_data": {
                        "label": "doro",
                        "style": 1
                    },
                    "action": {
                        "type": 2,
                        "permission": {
                            "type": 2
                        },
                        "data": "/doro",
                        "enter": true
                    }
                },
                {
                    "render_data": {
                        "label": "eveonecat",
                        "style": 1
                    },
                    "action": {
                        "type": 2,
                        "permission": {
                            "type": 2
                        },
                        "data": "/eveonecat",
                        "enter": true
                    }
                },
                {
                    "render_data": {
                        "label": "fufu",
                        "style": 1
                    },
                    "action": {
                        "type": 2,
                        "permission": {
                            "type": 2
                        },
                        "data": "/fufu",
                        "enter": true
                    }
                },
                {
                    "render_data": {
                        "label": "mygo",
                        "style": 1
                    },
                    "action": {
                        "type": 2,
                        "permission": {
                            "type": 2
                        },
                        "data": "/mygo",
                        "enter": true
                    }
                }
            ]
        },
        {
            "buttons": [
                {
                    "render_data": {
                        "label": "seseren",
                        "style": 1
                    },
                    "action": {
                        "type": 2,
                        "permission": {
                            "type": 2
                        },
                        "data": "/seseren",
                        "enter": true
                    }
                },
                {
                    "render_data": {
                        "label": "白圣女",
                        "style": 1
                    },
                    "action": {
                        "type": 2,
                        "permission": {
                            "type": 2
                        },
                        "data": "/白圣女",
                        "enter": true
                    }
                },
                {
                    "render_data": {
                        "label": "白圣女漫画",
                        "style": 1
                    },
                    "action": {
                        "type": 2,
                        "permission": {
                            "type": 2
                        },
                        "data": "/白圣女漫画",
                        "enter": true
                    }
                },
                {
                    "render_data": {
                        "label": "柴郡",
                        "style": 1
                    },
                    "action": {
                        "type": 2,
                        "permission": {
                            "type": 2
                        },
                        "data": "/柴郡",
                        "enter": true
                    }
                }
            ]
        },
        {
            "buttons": [
                {
                    "render_data": {
                        "label": "初音Q版",
                        "style": 1
                    },
                    "action": {
                        "type": 2,
                        "permission": {
                            "type": 2
                        },
                        "data": "/初音Q版",
                        "enter": true
                    }
                },
                {
                    "render_data": {
                        "label": "甘城猫猫",
                        "style": 1
                    },
                    "action": {
                        "type": 2,
                        "permission": {
                            "type": 2
                        },
                        "data": "/甘城猫猫",
                        "enter": true
                    }
                },
                {
                    "render_data": {
                        "label": "疾旋鼬",
                        "style": 1
                    },
                    "action": {
                        "type": 2,
                        "permission": {
                            "type": 2
                        },
                        "data": "/疾旋鼬",
                        "enter": true
                    }
                },
                {
                    "render_data": {
                        "label": "流萤",
                        "style": 1
                    },
                    "action": {
                        "type": 2,
                        "permission": {
                            "type": 2
                        },
                        "data": "/流萤",
                        "enter": true
                    }
                }
            ]
        },
        {
            "buttons": [
                {
                    "render_data": {
                        "label": "赛马娘",
                        "style": 1
                    },
                    "action": {
                        "type": 2,
                        "permission": {
                            "type": 2
                        },
                        "data": "/赛马娘",
                        "enter": true
                    }
                },
                {
                    "render_data": {
                        "label": "瑟莉亚",
                        "style": 1
                    },
                    "action": {
                        "type": 2,
                        "permission": {
                            "type": 2
                        },
                        "data": "/瑟莉亚",
                        "enter": true
                    }
                },
                {
                    "render_data": {
                        "label": "藤田琴音",
                        "style": 1
                    },
                    "action": {
                        "type": 2,
                        "permission": {
                            "type": 2
                        },
                        "data": "/藤田琴音",
                        "enter": true
                    }
                },
                {
                    "render_data": {
                        "label": "亚托莉",
                        "style": 1
                    },
                    "action": {
                        "type": 2,
                        "permission": {
                            "type": 2
                        },
                        "data": "/亚托莉",
                        "enter": true
                    }
                }
            ]
        }
    ]
}`).description("实现QQ官方bot的按钮效果<br>在这里填入你的按钮内容，注意保持json格式，推荐在编辑器中编辑好后粘贴进来")}).collapse().description('➣表情包列表--按钮设置<br>更多说明，详见[➩项目README](https://github.com/shangxueink/koishi-shangxue-apps/tree/main/plugins/emojihub-bili)<hr style="border: 2px solid red;"><hr style="border: 2px solid red;">')}),a.Schema.object({})]),a.Schema.object({LocalSendNetworkPicturesList:a.Schema.string().role("textarea",{rows:[2,4]}).description("将`下列指令`对应的内容下载至本地，作为本地图片发送<br>请使用逗号分隔指令").default("").experimental(),deletePictime:a.Schema.number().default(10).description("若干`秒`后 删除下载的本地临时文件").experimental(),localPicToBase64:a.Schema.boolean().description("`开启后`本地图片以base64发出 `日常使用无需开启，且不建议发送markdown的时候使用（直接发图还是可以考虑的）`").experimental().default(!1),QQPicToChannelUrl:a.Schema.boolean().description("`开启后`， `img_url`会先上传QQ频道，拿到频道URL，用于发送markdown<br>被动md需要URL白名单，仅对原生发本地文件夹的图有意义。").experimental().default(!1),QQchannelId:a.Schema.string().description("`填入QQ频道的频道ID`，将该ID的频道作为中转频道 <br> 频道ID可以用[inspect插件来查看](/market?keyword=inspect) `频道ID应为纯数字`").experimental().pattern(/^\S+$/)}).description("调试选项"),a.Schema.object({consoleinfo:a.Schema.boolean().default(!1).description("日志调试模式`日常使用无需开启`")}).description("日志调试选项"),a.Schema.union([a.Schema.object({consoleinfo:a.Schema.const(!0).required(),allfileinfo:a.Schema.boolean().description("输出allfile调试内容`MoreEmojiHubList 列表详细内容`")}),a.Schema.object({})])]),Fe=(G(),A(D)),ce=T((ee(),A(R))),ae=T(K()),C=new Fe.Logger("emojihub-bili");function M(t,e,i,m){t.consoleinfo&&(e?C.info(`
${e} 频道触发表情包
使用指令： ${i}
${m}`):C.info(m))}y(M,"logInfoformat");function w(t){C.error(t)}y(w,"logError");function k(t,...e){t.consoleinfo&&C.info(...e)}y(k,"logInfo");function S(t,e,i=!1){if(typeof t=="string"){if(!/\{\{\.([^}]+)\}\}|\$\{([^}]+)\}/.test(t))return i?t:[t];let m=t.replace(/\{\{\.([^}]+)\}\}|\$\{([^}]+)\}/g,(s,b,r)=>(b||r).split(".").reduce((u,l)=>u?.[l],e)||s);return i?m:[m]}if(typeof t=="object"&&t!==null){if(Array.isArray(t))return t.map(m=>S(m,e,i));{let m={};for(let s in t)m[s]=S(t[s],e,i);return m}}return t}y(S,"replacePlaceholders");function me(t,e=[]){return ce.default.readdirSync(t).forEach(m=>{let s=ae.default.join(t,m);ce.default.statSync(s).isDirectory()?e=me(s,e):e.push(s)}),e}y(me,"getAllFiles");function he(t,e){return ae.default.relative(e,t).split(ae.default.sep).join("")}y(he,"getVirtualFilename");var $=T((ee(),A(R))),B=T((te(),A(q))),L=T(K()),Be=T(pe());async function ge(t,e,i,m,s,b){async function r(l){let{access_token:d,expires_in:g}=await t.http.post("https://bots.qq.com/app/getAppAccessToken",{appId:l.appId,clientSecret:l.secret});l.token=d,t.setTimeout(()=>r(l),(g-30)*1e3)}y(r,"refreshToken");let n={appId:m,secret:s,channelId:b,token:""};await r(n),typeof i=="string"&&(new URL(i).protocol==="file:"?i=await $.default.promises.readFile(B.default.fileURLToPath(i)):(i=await t.http.get(i,{responseType:"arraybuffer"}),i=U.from(i)));let o=new FormData;o.append("msg_id","0"),o.append("file_image",new Blob([i],{type:"image/png"}),"image.jpg"),await t.http.post(`https://api.sgroup.qq.com/channels/${n.channelId}/messages`,o,{headers:{Authorization:`QQBot ${n.token}`,"X-Union-Appid":n.appId}});let u=Be.default.createHash("md5").update(i).digest("hex").toUpperCase();return b!==void 0&&e&&C.info(`使用本地图片*QQ频道  发送URL为： https://gchat.qpic.cn/qmeetpic/0/0-0-${u}/0`),{url:`https://gchat.qpic.cn/qmeetpic/0/0-0-${u}/0`}}y(ge,"uploadImageToChannel");async function W(t){try{let e=t;return t.startsWith("file://")&&(e=B.default.fileURLToPath(t)),$.default.readFileSync(e).toString("base64")}catch(e){return C.error("Error converting image to base64:",e),null}}y(W,"getImageAsBase64");async function P(t,e,i,m,s,b=null){if(oe(t)){let n=t;return t.startsWith("file:///")&&(n=decodeURIComponent(t.substring(8))),await ne(n,e,i,m,s,b)}if(t.startsWith("http://")||t.startsWith("https://"))return M(e,i,m,`直接的图片链接: ${t}`),{imageUrl:t,isLocal:!1};if(re(t)){let n=t;if(t.startsWith("file:///")&&(n=decodeURIComponent(t.substring(8))),!$.default.existsSync(n))return w(`错误:路径不存在： ${t}`),{imageUrl:null,isLocal:!1};M(e,i,m,`本地图片的绝对路径: ${t}`);let o=$.default.statSync(n);return{imageUrl:B.default.pathToFileURL(n).href,isLocal:!0,imageName:L.default.basename(n),imageTime:o.mtime,imageSize:o.size,imagePath:n}}if(ie(t)){let n=t;return t.startsWith("file:///")&&(n=decodeURIComponent(t.substring(8))),await se(n,e,i,m,s)}let r=fe(e);if(e.consoleinfo&&e.allfileinfo&&C.info(r),r.length>0)t=r[Math.floor(Math.random()*r.length)];else return{imageUrl:null,isLocal:!1};if(t.startsWith("http://")||t.startsWith("https://"))return M(e,i,m,`随机选择的网络图片链接: ${t}`),{imageUrl:t,isLocal:!1};if(oe(t)){let n=t;return t.startsWith("file:///")&&(n=decodeURIComponent(t.substring(8))),await ne(n,e,i,m,s,b)}else if(ie(t)){let n=t;return t.startsWith("file:///")&&(n=decodeURIComponent(t.substring(8))),await se(n,e,i,m,s)}else if(re(t)){let n=t;t.startsWith("file:///")&&(n=decodeURIComponent(t.substring(8))),M(e,i,m,`随机选择的本地图片路径: ${t}`);let o=$.default.statSync(t);return{imageUrl:B.default.pathToFileURL(t).href,isLocal:!0,imageName:L.default.basename(t),imageTime:o.mtime,imageSize:o.size,imagePath:t}}return{imageUrl:null,isLocal:!1}}y(P,"determineImagePath");function ye(t){let e=t.MoreEmojiHubList.map(i=>i.command);return e.length>0?e[Math.floor(Math.random()*e.length)]:null}y(ye,"getRandomEmojiHubCommand");function re(t){let e=t.toLowerCase();return(L.default.isAbsolute(t)||t.startsWith("file:///"))&&(e.endsWith(".jpg")||e.endsWith(".png")||e.endsWith(".gif")||e.endsWith(".bmp")||e.endsWith(".webp"))}y(re,"isLocalImagePath");function oe(t){if(t.startsWith("file:///"))try{let e=decodeURIComponent(t.substring(8));return $.default.lstatSync(e).isDirectory()}catch{return!1}return L.default.isAbsolute(t)&&$.default.lstatSync(t).isDirectory()}y(oe,"isLocalDirectory");function ie(t){return(t.startsWith("file:///")||L.default.isAbsolute(t))&&t.endsWith(".txt")}y(ie,"isLocalTextFile");function fe(t){return t.MoreEmojiHubList.filter(e=>{let i=e.source_url;return L.default.isAbsolute(i)||i.startsWith("http://")||i.startsWith("https://")||i.startsWith("file:///")}).map(e=>e.source_url)}y(fe,"getAllValidPaths");async function ne(t,e,i,m,s,b){if(!$.default.existsSync(t))return w(`错误:路径不存在： ${t}`),{imageUrl:null,isLocal:!1};let r=e.searchSubfolders?me(t):$.default.readdirSync(t).map(u=>L.default.join(t,u));if(r=r.filter(u=>{let l=u.toLowerCase();return l.endsWith(".jpg")||l.endsWith(".png")||l.endsWith(".gif")||l.endsWith(".bmp")||l.endsWith(".webp")}),r.length===0)return w("文件夹中未找到有效图片文件（jpg,png,gif,webp,bmp）"),{imageUrl:null,isLocal:!1};if(b?.length>0&&(r=r.filter(u=>{let l;e.searchSubfoldersWithfilename&&e.searchSubfolders?l=he(u,t):l=L.default.basename(u);let d=l.toLowerCase();return b.every(g=>d.includes(g.toLowerCase()))}),r.length===0))return w(`未找到匹配关键词 "${b.join(" ")}" 的图片文件`),{imageUrl:null,isLocal:!1};e.consoleinfo&&e.allfileinfo&&C.info(`文件夹 ${t} 下的所有文件: 
${r.join(`
`)}`);let n=r[Math.floor(Math.random()*r.length)];M(e,i,m,`使用文件夹 ${t} 
发送本地图片为 ${n}`);let o=$.default.statSync(n);return{imageUrl:B.default.pathToFileURL(n).href,isLocal:!0,imageName:L.default.basename(n),imageTime:o.mtime,imageSize:o.size,imagePath:n}}y(ne,"getRandomImageFromFolder");async function se(t,e,i,m,s){let b,r;try{b=$.default.readFileSync(t,"utf8").split(`
`).filter(d=>d.trim()!=="")}catch(d){return d instanceof Error&&d.message==="ENOENT"?{imageUrl:null,isLocal:!1}:(w(d),{imageUrl:null,isLocal:!1})}if(b.length===0)return w(`错误！无有效URL可用：${t}`),{imageUrl:null,isLocal:!1};let n=Math.floor(Math.random()*b.length),o=b[n].trim(),u="https:",l="https://i0.hdslb.com/bfs/";if(o.startsWith(u+l)&&(o=o.replace(u,"")),!o.startsWith("https://")&&!o.startsWith("http://")&&(o=l+o),r=o.trim(),e.LocalSendNetworkPicturesList&&e.LocalSendNetworkPicturesList.length>0){let d=e.LocalSendNetworkPicturesList.split(/\n|,|，/).map(c=>c.trim().toLowerCase()),g=m.toLowerCase();if(d.includes(g)){let c=L.default.join(import.meta.url,`${Date.now()}.png`);try{return r=await we(o,c,s),s.setTimeout(()=>{$.default.unlinkSync(r),M(e,null,null,`临时文件已删除：${r}`)},e.deletePictime*1e3),M(e,i,m,`下载并发送本地图片: ${r}`),{imageUrl:r,isLocal:!0}}catch(_){return w(`图片下载失败：${_.message}`),{imageUrl:null,isLocal:!1}}}}return M(e,i,m,`使用文件 ${t} 
发送URL为 ${r}`),{imageUrl:r,isLocal:!1}}y(se,"getRandomImageUrlFromFile");async function we(t,e,i){try{let m=await i.http.get(t,{responseType:"arraybuffer"}),s=U.from(m);return await $.default.promises.writeFile(e,s),e}catch(m){throw w(`下载图片失败: ${m.message}`),m}}y(we,"downloadImage");function ke(t){let e=t.MoreEmojiHubList.map(i=>i.command);return e.length===0&&w("未找到任何表情包指令。"),e}y(ke,"listAllCommands");var J=T((te(),A(q)));function je(t,e){let i={msg_id:"",msg_type:2,markdown:{},keyboard:{}};if(e.markdown_button_mode_initiative||(i.msg_id=t.messageId),e.markdown_button_mode==="json"&&!e.markdown_button_mode_initiative){e.markdown_button_mode_initiative?i={msg_type:2,keyboard:{}}:i={msg_id:t.messageId,msg_type:2,keyboard:{}};let m=e.nestedlist.json_button_template_id;e.markdown_button_mode_keyboard&&(i.keyboard={id:m})}else if(e.markdown_button_mode==="markdown"){let m=e.nestedlist.markdown_button_template_id,s=e.nestedlist.markdown_button_keyboard_id,r=e.nestedlist.markdown_button_content_table.map(n=>({key:n.raw_parameters,values:S(n.replace_parameters,{session:t,config:e})}));i.markdown={custom_template_id:m,params:r},e.markdown_button_mode_keyboard&&(i.keyboard={id:s})}else if(e.markdown_button_mode==="markdown_raw_json"){let m=e.nestedlist.markdown_raw_json_button_template_id,s=e.nestedlist.markdown_raw_json_button_content_table,b=JSON.parse(e.nestedlist.markdown_raw_json_button_keyboard);b=S(b,{session:t,config:e},!0);let r=s.map(n=>({key:n.raw_parameters,values:S(n.replace_parameters,{session:t,config:e})}));i.markdown={custom_template_id:m,params:r},e.markdown_button_mode_keyboard&&(i.keyboard={content:b})}else if(e.markdown_button_mode==="raw")try{let m=e.nestedlist.raw_markdown_button_content,s=e.nestedlist.raw_markdown_button_keyboard,b=S(m,{session:t,config:e},!0),r=S(s,{session:t,config:e},!0).replace(/^[\s\S]*?"keyboard":\s*/,"").replace(/\\n/g,"").replace(/\\"/g,'"').trim(),n=JSON.parse(r);i.markdown={content:b},e.markdown_button_mode_keyboard&&(i.keyboard={content:n})}catch(m){return w(`解析原生 Markdown 出错: ${m}`),null}return k(e,`Markdown 模板参数: ${JSON.stringify(i,null,2)}`),i}y(je,"command_list_markdown");async function F(t,e,i,m,s,b){let r={msg_id:"",msg_type:2,markdown:{},keyboard:{}};s.markdown_button_mode_initiative||(r.msg_id=e.messageId);let n,o,u=m.match(/\?px=(\d+)x(\d+)$/);if(u)n=parseInt(u[1],10),o=parseInt(u[2],10);else{let l=await t.canvas.loadImage(b||m);n=l.naturalWidth||l.width,o=l.naturalHeight||l.height}if(s.markdown_button_mode==="markdown"){let l=s.nested.markdown_button_template_id,d=s.nested.markdown_button_keyboard_id,c=s.nested.markdown_button_content_table.map(_=>({key:_.raw_parameters,values:S(_.replace_parameters,{session:e,config:s,img_pxpx:`img#${n}px #${o}px`,img_url:m,command:i})}));r.markdown={custom_template_id:l,params:c},s.markdown_button_mode_keyboard&&(r.keyboard={id:d})}else if(s.markdown_button_mode==="markdown_raw_json"){let l=s.nested.markdown_raw_json_button_template_id,d=s.nested.markdown_raw_json_button_content_table,g=JSON.parse(s.nested.markdown_raw_json_button_keyboard);g=S(g,{session:e,config:s,img_pxpx:`img#${n}px #${o}px`,img_url:m,command:i},!0);let c=d.map(_=>({key:_.raw_parameters,values:S(_.replace_parameters,{session:e,config:s,img_pxpx:`img#${n}px #${o}px`,img_url:m,command:i})}));r.markdown={custom_template_id:l,params:c},s.markdown_button_mode_keyboard&&(r.keyboard={content:g})}else if(s.markdown_button_mode==="raw")try{let l=s.nested.raw_markdown_button_content,d=s.nested.raw_markdown_button_keyboard,g=S(l,{session:e,config:s,img_pxpx:`img#${n}px #${o}px`,img_url:m,command:i},!0),c=S(d,{session:e,config:s,command:i},!0).replace(/^[\s\S]*?"keyboard":\s*/,"").replace(/\\n/g,"").replace(/\\"/g,'"').trim(),_=JSON.parse(c);r.markdown={content:g},s.markdown_button_mode_keyboard&&(r.keyboard={content:_})}catch(l){return w(`解析原生 Markdown 出错: ${l}`),null}return k(s,`Markdown 模板参数: ${JSON.stringify(r,null,2)}`),r}y(F,"markdown");async function N(t,e,i,m){m&&k(m,"正在调用sendmarkdownMessage发送md");try{let{guild:s,user:b}=e.event,{qq:r,qqguild:n,channelId:o}=e;s?.id?r?await r.sendMessage(o,i):n&&await n.sendMessage(o,i):b?.id&&r&&await r.sendPrivateMessage(b.id,i)}catch(s){t.logger.error("发送markdown消息时出错:",s)}}y(N,"sendmarkdownMessage");var ze={optional:["canvas"]},He="emojihub-bili",Oe=!0;function xe(t,e){let i=e.emojihub_bili_command;t.i18n.define("zh-CN",{commands:{[i]:{description:"表情包功能",messages:{notfound_txt:"ERROR！找不到文件或文件为空！指令：{0}",List_of_emojis:"可用的表情包指令：{0}",notallowednum:`{0}次超出单次返回最大值
请使用指令：{1} -${e.optionsname} {2}`}},[e.emojihub_onemore]:{description:"触发上次的表情包",messages:{nocommand:`没有找到上一个命令，请先执行一个命令！
➣例如： ${e.emojihub_randompic}`}},[e.emojihub_randompic]:{description:"从全部表情包里随机抽",messages:{noemoji:"没有任何表情包配置，请检查插件配置项！"}}}});let m={};function s(r,n){m[r]=n,k(e,"记录到command为： "+n+" 区别ID： "+r)}y(s,"updateLastCommand");async function b(r,n,o){let u=e.maxexecutetime||10;if(o>u){await r.send(x.h.text(r.text(`commands.${i}.messages.notallowednum`,[o,n,u])));return}let l=Math.min(o||1,u);for(let d=0;d<l;d++)if(n===e.emojihub_onemore){let g=e.repeatCommandDifferentiation==="userId"?r.userId:r.channelId,c=m[g];if(c)await r.execute(c);else{await r.send(r.text(".nocommand"));return}}else await r.execute(n)}if(y(b,"sendMultipleEmojis"),t.command(e.emojihub_bili_command).action(async({session:r})=>{let n=ke(e);if(k(e,"指令列表txtCommandList：  "+n),e.markdown_button_mode_without_emojilist_keyboard&&(e.markdown_button_mode==="markdown"||e.markdown_button_mode==="raw"||e.markdown_button_mode==="json"||e.markdown_button_mode==="markdown_raw_json")){let o=je(r,e);await N(t,r,o,e)}else{let o=n.join(`
`);await r.send(x.h.text(r.text(`commands.${i}.messages.List_of_emojis`,[`
${o}`])))}}),t.on("ready",()=>{e.MoreEmojiHubList.forEach(({command:r,source_url:n})=>{t.command(`${e.emojihub_bili_command}/${r} [local_picture_name...]`).example(`${r} 关键词1 关键词2 关键词3`).option("numpics",`-${e.optionsname} <numpics:number> 指定返回数量`).action(async({session:o,options:u},...l)=>{if(u?.numpics){await b(o,`${r} ${l.join(" ")}`.trim(),u.numpics);return}let d=await P(n,e,o.channelId,r,t,l);if(!d.imageUrl){await o.send(x.h.text(o.text(`commands.${i}.messages.notfound_txt`,[r])));return}let g=e.repeatCommandDifferentiation==="userId"?o.userId:o.channelId;s(g,r);try{let c;if((o.platform==="qq"||o.platform==="qqguild")&&(e.markdown_button_mode==="markdown"||e.markdown_button_mode==="raw"||e.markdown_button_mode==="markdown_raw_json"))if(d.isLocal)if(e.localPicToBase64){let h="data:image/png;base64,"+await W(d.imageUrl);c=await F(t,o,r,h,e),await N(t,o,c,e)}else if((o.platform==="qq"||o.platform==="qqguild")&&e.QQPicToChannelUrl){let _=J.default.pathToFileURL(d.imageUrl).href,f="data:image/png;base64,"+await W(d.imageUrl),j=await ge(t,e.consoleinfo,_,o.bot.config.id,o.bot.config.secret,e.QQchannelId);c=await F(t,o,r,j.url,e,f),await N(t,o,c,e)}else{let _=J.default.pathToFileURL(d.imageUrl).href;c=await F(t,o,r,_,e),await N(t,o,c,e)}else c=await F(t,o,r,d.imageUrl,e),await N(t,o,c,e);else{if(d.isLocal&&e.localPicToBase64){let _=e.localPictureToName;k(e,d.imageUrl);let h=(d.imageSize/1024).toFixed(2),f=(d.imageSize/(1024*1024)).toFixed(2),j=d.imageSize<1024*1024?`${h} KB`:`${f} MB`,v=d.imageTime.toLocaleString("zh-CN",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}).replace(/\//g,"-"),V=await W(d.imageUrl),H={IMAGE:(0,x.h)("image",{url:"data:image/png;base64,"+V}),NAME:d.imageName,TIME:v,SIZE:j,PATH:d.imagePath},Z=S(_,H);k(e,"变量替换本地文件名称，messageContent： base64太长了不打印了");try{c=await o.send(x.h.unescape(`${Z}`.replace(/\\n/g,`
`)))}catch(Ie){t.logger.error("发送本地图片失败：",Ie)}}else if(d.isLocal){let _=e.localPictureToName;k(e,d.imageUrl);let h=(d.imageSize/1024).toFixed(2),f=(d.imageSize/(1024*1024)).toFixed(2),j=d.imageSize<1024*1024?`${h} KB`:`${f} MB`,v=d.imageTime.toLocaleString("zh-CN",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}).replace(/\//g,"-"),V={IMAGE:x.h.image(d.imageUrl),NAME:d.imageName,TIME:v,SIZE:j,PATH:d.imagePath},H=S(_,V);k(e,"变量替换本地文件名称，messageContent："),k(e,H);try{c=await o.send(x.h.unescape(`${H}`.replace(/\\n/g,`
`)))}catch(Z){t.logger.error("发送本地图片失败：",Z)}}else try{c=await o.send(x.h.image(d.imageUrl))}catch(_){t.logger.error("发送网络图片失败：",_)}if((o.platform==="qq"||o.platform==="qqguild")&&e.markdown_button_mode==="json"){let _=e.nested.json_button_template_id,h={msg_id:o.messageId,msg_type:2,content:"",keyboard:{id:_}};k(e,h),await N(t,o,h,e)}}e.deleteMsg&&t.setTimeout(async()=>{try{await o.bot.deleteMessage(o.channelId,c)}catch(_){w(`撤回消息失败: ${_}`),w(_)}},e.deleteMsgtime*1e3)}catch(c){w(`Error sending image:  ${c}`),w(c)}})})}),t.command(`${e.emojihub_bili_command}/${e.emojihub_onemore}`).action(async({session:r,options:n})=>{let o=e.repeatCommandDifferentiation==="userId"?r.userId:r.channelId,u=m[o];k(e,"尝试在区分ID "+o+" 中执行最后一个命令： "+u),u?await r.execute(`${u}`):await r.send(r.text(".nocommand"))}),t.command(`${e.emojihub_bili_command}/${e.emojihub_randompic}`).action(async({session:r,options:n})=>{let o=ye(e);if(o){await r.execute(o),M(e,r.channelId,o,e.emojihub_randompic);return}else await r.send(r.text(".noemoji"))}),e.autoEmoji==="定量消息发送"&&(e.groupListmapping.length||e.allgroupautoEmoji)){let r={};e.groupListmapping.forEach(({groupList:n,defaultemojicommand:o,count:u,enable:l})=>{l===!0?r[n]={blacklisted:!0}:r[n]={emojicommand:o,threshold:u}}),t.middleware(async(n,o)=>{let u=n.channelId,l=r[u];if(l&&l.blacklisted)return o();if(!l&&e.allgroupautoEmoji&&(l={count:0,emojicommand:e.allgroupemojicommand,threshold:e.count},r[u]=l),l&&(l.count=(l.count||0)+1,k(e,`${u} ：${l.count} ：${n.content}`),l.count>=l.threshold)){let d=Math.random();if(d<=e.triggerprobability){k(e,`定量消息发送：概率判断：${d} <= ${e.triggerprobability} 触发表情包`);let g=l.emojicommand.split(/\n|,|，/).map(h=>h.trim()),c=g[Math.floor(Math.random()*g.length)];k(e,`随机选择的指令: ${c}`);let _=e.MoreEmojiHubList.find(({command:h})=>h===c);if(_){let h=await P(_.source_url,e,u,_.command,t);if(h.imageUrl)try{l.count=0;let f;if(h.isLocal)if(e.localPicToBase64){let v=await W(h.imageUrl);f=(0,x.h)("image",{url:"data:image/png;base64,"+v})}else{let v=J.default.pathToFileURL(h.imageUrl).href;f=x.h.image(v)}else f=x.h.image(h.imageUrl);let j=await n.send(f);e.deleteMsg&&t.setTimeout(async()=>{try{await n.bot.deleteMessage(n.channelId,j[0])}catch(v){w(`撤回消息失败: ${v}`)}},e.deleteMsgtime*1e3)}catch(f){w(`发送图片错误: ${f}`)}else l.count=0}}else{l.count=0;let g=d<=e.triggerprobability?"<=":">";k(e,`定量消息发送：概率判断：${d} ${g} ${e.triggerprobability}
此次不发送表情包，并且重置计数。`)}}return o()},e.middleware)}t.on("ready",()=>{if(e.autoEmoji==="定时发送"&&e.groupListmapping.length&&t.cron){let r=Object.values(t.bots).find(o=>o.selfId===e.botId||o.user?.id===e.botId);if(!r||r.status!==x.Universal.Status.ONLINE){t.logger.error(`[定时发送] 机器人离线或未找到: ${e.botId}`);return}else t.logger.info(`定时成功：将由 ${e.botId} 执行`);if(r==null)return;let n={};e.groupListmapping.forEach(({groupList:o,defaultemojicommand:u,cronTime:l,enable:d})=>{d===!0?n[o]={blacklisted:!0}:n[o]={emojicommand:u,cronTime:l}});for(let o in n){let u=n[o];u&&u.blacklisted||u&&u&&t.inject(["cron"],l=>{l.cron(u.cronTime,async()=>{let d=Math.random();if(d<=e.triggerprobability){k(e,`尝试向 ${o} 定时发送表情包中...`);let g=u.emojicommand.split(/\n|,|，/).map(h=>h.trim()),c=g[Math.floor(Math.random()*g.length)],_=e.MoreEmojiHubList.find(({command:h})=>h===c);if(_){let h=await P(_.source_url,e,o,_.command,l);if(h.imageUrl)try{let f;if(h.isLocal)if(e.localPicToBase64){let j=await W(h.imageUrl);f=(0,x.h)("image",{url:"data:image/png;base64,"+j})}else{let j=J.default.pathToFileURL(h.imageUrl).href;f=x.h.image(j)}else f=x.h.image(h.imageUrl);if(!o.includes("private"))await r.sendMessage(o,f);else{let j=o.replace("private:","");await r.sendPrivateMessage(j,f)}e.deleteMsg&&l.setTimeout(async()=>{try{await r.deleteMessage(o,f)}catch(j){w(`撤回消息失败: ${j}`)}},e.deleteMsgtime*1e3)}catch(f){w(`发送图片错误: ${f}`)}}}else{let g=d<=e.triggerprobability?"<=":">";k(e,`定时发送：概率判断结果：${d} ${g} ${e.triggerprobability}
此次不发送表情包。`)}})})}}else e.autoEmoji==="定时发送"&&e.groupListmapping.length&&!t.cron&&t.logger.error("cron 服务加载失败！")})}y(xe,"apply")});export default Ge();
