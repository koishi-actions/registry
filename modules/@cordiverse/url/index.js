import{Buffer as n}from"https://registry.koishi.chat/modules/buffer/index.js";import t from"https://registry.koishi.chat/modules/process/index.js";import{resolve as p,sep as c}from"https://registry.koishi.chat/modules/@cordiverse/path/index.js";function g(e){return typeof e=="string"&&(e=new URL(e)),decodeURIComponent(e.pathname)}function f(e){return e.replace(/%/g,"%25").replace(/\\/g,"%5C").replace(/\n/g,"%0A").replace(/\r/g,"%0D").replace(/\t/g,"%09")}function s(e){let o=new URL("file://"),r=p(e);return e[e.length-1]==="/"&&r[r.length-1]!==c&&(r+="/"),o.pathname=f(r),o}export{g as fileURLToPath,s as pathToFileURL};
