var $=Object.defineProperty;var ae=Object.getOwnPropertyDescriptor;var re=Object.getOwnPropertyNames;var ne=Object.prototype.hasOwnProperty;var C=(i,e)=>()=>(i&&(e=i(i=0)),e);var T=(i,e)=>()=>(e||i((e={exports:{}}).exports,e),e.exports);var I=(i,e,t,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of re(e))!ne.call(i,a)&&a!==t&&$(i,a,{get:()=>e[a],enumerable:!(s=ae(e,a))||s.enumerable});return i},_=(i,e,t)=>(I(i,e,"default"),t&&I(t,e,"default"));var q=i=>I($({},"__esModule",{value:!0}),i);import{Buffer as S}from"https://registry.koishi.chat/modules/buffer/index.js";import E from"https://registry.koishi.chat/modules/process/index.js";var g=C(()=>{});var M={};import*as Pe from"https://registry.koishi.chat/modules/koishi/index.js";var N=C(()=>{g();_(M,Pe)});var U={};import*as fe from"https://registry.koishi.chat/modules/axios/index.js";var x=C(()=>{g();_(U,fe)});var H=T(V=>{"use strict";g();Object.defineProperty(V,"__esModule",{value:!0});V.RequiredError=V.BaseAPI=V.COLLECTION_FORMATS=V.BASE_PATH=void 0;var ie=(x(),q(U));V.BASE_PATH="https://api.openai.com/v1".replace(/\/+$/,"");V.COLLECTION_FORMATS={csv:",",ssv:" ",tsv:"	",pipes:"|"};var w=class{constructor(e,t=V.BASE_PATH,s=ie.default){this.basePath=t,this.axios=s,e&&(this.configuration=e,this.basePath=e.basePath||this.basePath)}};V.BaseAPI=w;var L=class extends Error{constructor(e,t){super(t),this.field=e,this.name="RequiredError"}};V.RequiredError=L});var K=T(A=>{"use strict";g();var Y=A&&A.__awaiter||function(i,e,t,s){function a(r){return r instanceof t?r:new t(function(n){n(r)})}return new(t||(t=Promise))(function(r,n){function c(u){try{d(s.next(u))}catch(O){n(O)}}function l(u){try{d(s.throw(u))}catch(O){n(O)}}function d(u){u.done?r(u.value):a(u.value).then(c,l)}d((s=s.apply(i,e||[])).next())})};Object.defineProperty(A,"__esModule",{value:!0});A.createRequestFunction=A.toPathString=A.serializeDataIfNeeded=A.setSearchParams=A.setOAuthToObject=A.setBearerAuthToObject=A.setBasicAuthToObject=A.setApiKeyToObject=A.assertParamExists=A.DUMMY_BASE_URL=void 0;var oe=H();A.DUMMY_BASE_URL="https://example.com";A.assertParamExists=function(i,e,t){if(t==null)throw new oe.RequiredError(e,`Required parameter ${e} was null or undefined when calling ${i}.`)};A.setApiKeyToObject=function(i,e,t){return Y(this,void 0,void 0,function*(){if(t&&t.apiKey){let s=typeof t.apiKey=="function"?yield t.apiKey(e):yield t.apiKey;i[e]=s}})};A.setBasicAuthToObject=function(i,e){e&&(e.username||e.password)&&(i.auth={username:e.username,password:e.password})};A.setBearerAuthToObject=function(i,e){return Y(this,void 0,void 0,function*(){if(e&&e.accessToken){let t=typeof e.accessToken=="function"?yield e.accessToken():yield e.accessToken;i.Authorization="Bearer "+t}})};A.setOAuthToObject=function(i,e,t,s){return Y(this,void 0,void 0,function*(){if(s&&s.accessToken){let a=typeof s.accessToken=="function"?yield s.accessToken(e,t):yield s.accessToken;i.Authorization="Bearer "+a}})};function D(i,e,t=""){e!=null&&(typeof e=="object"?Array.isArray(e)?e.forEach(s=>D(i,s,t)):Object.keys(e).forEach(s=>D(i,e[s],`${t}${t!==""?".":""}${s}`)):i.has(t)?i.append(t,e):i.set(t,e))}A.setSearchParams=function(i,...e){let t=new URLSearchParams(i.search);D(t,e),i.search=t.toString()};A.serializeDataIfNeeded=function(i,e,t){let s=typeof i!="string";return(s&&t&&t.isJsonMime?t.isJsonMime(e.headers["Content-Type"]):s)?JSON.stringify(i!==void 0?i:{}):i||""};A.toPathString=function(i){return i.pathname+i.search+i.hash};A.createRequestFunction=function(i,e,t,s){return(a=e,r=t)=>{let n=Object.assign(Object.assign({},i.options),{url:(s?.basePath||r)+i.url});return a.request(n)}}});var k=T(p=>{"use strict";g();var h=p&&p.__awaiter||function(i,e,t,s){function a(r){return r instanceof t?r:new t(function(n){n(r)})}return new(t||(t=Promise))(function(r,n){function c(u){try{d(s.next(u))}catch(O){n(O)}}function l(u){try{d(s.throw(u))}catch(O){n(O)}}function d(u){u.done?r(u.value):a(u.value).then(c,l)}d((s=s.apply(i,e||[])).next())})};Object.defineProperty(p,"__esModule",{value:!0});p.OpenAIApi=p.OpenAIApiFactory=p.OpenAIApiFp=p.OpenAIApiAxiosParamCreator=p.CreateImageRequestResponseFormatEnum=p.CreateImageRequestSizeEnum=p.ChatCompletionResponseMessageRoleEnum=p.ChatCompletionRequestMessageRoleEnum=void 0;var b=(x(),q(U)),o=K(),m=H();p.ChatCompletionRequestMessageRoleEnum={System:"system",User:"user",Assistant:"assistant",Function:"function"};p.ChatCompletionResponseMessageRoleEnum={System:"system",User:"user",Assistant:"assistant",Function:"function"};p.CreateImageRequestSizeEnum={_256x256:"256x256",_512x512:"512x512",_1024x1024:"1024x1024"};p.CreateImageRequestResponseFormatEnum={Url:"url",B64Json:"b64_json"};p.OpenAIApiAxiosParamCreator=function(i){return{cancelFineTune:(e,t={})=>h(this,void 0,void 0,function*(){o.assertParamExists("cancelFineTune","fineTuneId",e);let s="/fine-tunes/{fine_tune_id}/cancel".replace("{fine_tune_id}",encodeURIComponent(String(e))),a=new URL(s,o.DUMMY_BASE_URL),r;i&&(r=i.baseOptions);let n=Object.assign(Object.assign({method:"POST"},r),t),c={},l={};o.setSearchParams(a,l);let d=r&&r.headers?r.headers:{};return n.headers=Object.assign(Object.assign(Object.assign({},c),d),t.headers),{url:o.toPathString(a),options:n}}),createAnswer:(e,t={})=>h(this,void 0,void 0,function*(){o.assertParamExists("createAnswer","createAnswerRequest",e);let s="/answers",a=new URL(s,o.DUMMY_BASE_URL),r;i&&(r=i.baseOptions);let n=Object.assign(Object.assign({method:"POST"},r),t),c={},l={};c["Content-Type"]="application/json",o.setSearchParams(a,l);let d=r&&r.headers?r.headers:{};return n.headers=Object.assign(Object.assign(Object.assign({},c),d),t.headers),n.data=o.serializeDataIfNeeded(e,n,i),{url:o.toPathString(a),options:n}}),createChatCompletion:(e,t={})=>h(this,void 0,void 0,function*(){o.assertParamExists("createChatCompletion","createChatCompletionRequest",e);let s="/chat/completions",a=new URL(s,o.DUMMY_BASE_URL),r;i&&(r=i.baseOptions);let n=Object.assign(Object.assign({method:"POST"},r),t),c={},l={};c["Content-Type"]="application/json",o.setSearchParams(a,l);let d=r&&r.headers?r.headers:{};return n.headers=Object.assign(Object.assign(Object.assign({},c),d),t.headers),n.data=o.serializeDataIfNeeded(e,n,i),{url:o.toPathString(a),options:n}}),createClassification:(e,t={})=>h(this,void 0,void 0,function*(){o.assertParamExists("createClassification","createClassificationRequest",e);let s="/classifications",a=new URL(s,o.DUMMY_BASE_URL),r;i&&(r=i.baseOptions);let n=Object.assign(Object.assign({method:"POST"},r),t),c={},l={};c["Content-Type"]="application/json",o.setSearchParams(a,l);let d=r&&r.headers?r.headers:{};return n.headers=Object.assign(Object.assign(Object.assign({},c),d),t.headers),n.data=o.serializeDataIfNeeded(e,n,i),{url:o.toPathString(a),options:n}}),createCompletion:(e,t={})=>h(this,void 0,void 0,function*(){o.assertParamExists("createCompletion","createCompletionRequest",e);let s="/completions",a=new URL(s,o.DUMMY_BASE_URL),r;i&&(r=i.baseOptions);let n=Object.assign(Object.assign({method:"POST"},r),t),c={},l={};c["Content-Type"]="application/json",o.setSearchParams(a,l);let d=r&&r.headers?r.headers:{};return n.headers=Object.assign(Object.assign(Object.assign({},c),d),t.headers),n.data=o.serializeDataIfNeeded(e,n,i),{url:o.toPathString(a),options:n}}),createEdit:(e,t={})=>h(this,void 0,void 0,function*(){o.assertParamExists("createEdit","createEditRequest",e);let s="/edits",a=new URL(s,o.DUMMY_BASE_URL),r;i&&(r=i.baseOptions);let n=Object.assign(Object.assign({method:"POST"},r),t),c={},l={};c["Content-Type"]="application/json",o.setSearchParams(a,l);let d=r&&r.headers?r.headers:{};return n.headers=Object.assign(Object.assign(Object.assign({},c),d),t.headers),n.data=o.serializeDataIfNeeded(e,n,i),{url:o.toPathString(a),options:n}}),createEmbedding:(e,t={})=>h(this,void 0,void 0,function*(){o.assertParamExists("createEmbedding","createEmbeddingRequest",e);let s="/embeddings",a=new URL(s,o.DUMMY_BASE_URL),r;i&&(r=i.baseOptions);let n=Object.assign(Object.assign({method:"POST"},r),t),c={},l={};c["Content-Type"]="application/json",o.setSearchParams(a,l);let d=r&&r.headers?r.headers:{};return n.headers=Object.assign(Object.assign(Object.assign({},c),d),t.headers),n.data=o.serializeDataIfNeeded(e,n,i),{url:o.toPathString(a),options:n}}),createFile:(e,t,s={})=>h(this,void 0,void 0,function*(){o.assertParamExists("createFile","file",e),o.assertParamExists("createFile","purpose",t);let a="/files",r=new URL(a,o.DUMMY_BASE_URL),n;i&&(n=i.baseOptions);let c=Object.assign(Object.assign({method:"POST"},n),s),l={},d={},u=new(i&&i.formDataCtor||FormData);e!==void 0&&u.append("file",e),t!==void 0&&u.append("purpose",t),l["Content-Type"]="multipart/form-data",o.setSearchParams(r,d);let O=n&&n.headers?n.headers:{};return c.headers=Object.assign(Object.assign(Object.assign(Object.assign({},l),u.getHeaders()),O),s.headers),c.data=u,{url:o.toPathString(r),options:c}}),createFineTune:(e,t={})=>h(this,void 0,void 0,function*(){o.assertParamExists("createFineTune","createFineTuneRequest",e);let s="/fine-tunes",a=new URL(s,o.DUMMY_BASE_URL),r;i&&(r=i.baseOptions);let n=Object.assign(Object.assign({method:"POST"},r),t),c={},l={};c["Content-Type"]="application/json",o.setSearchParams(a,l);let d=r&&r.headers?r.headers:{};return n.headers=Object.assign(Object.assign(Object.assign({},c),d),t.headers),n.data=o.serializeDataIfNeeded(e,n,i),{url:o.toPathString(a),options:n}}),createImage:(e,t={})=>h(this,void 0,void 0,function*(){o.assertParamExists("createImage","createImageRequest",e);let s="/images/generations",a=new URL(s,o.DUMMY_BASE_URL),r;i&&(r=i.baseOptions);let n=Object.assign(Object.assign({method:"POST"},r),t),c={},l={};c["Content-Type"]="application/json",o.setSearchParams(a,l);let d=r&&r.headers?r.headers:{};return n.headers=Object.assign(Object.assign(Object.assign({},c),d),t.headers),n.data=o.serializeDataIfNeeded(e,n,i),{url:o.toPathString(a),options:n}}),createImageEdit:(e,t,s,a,r,n,c,l={})=>h(this,void 0,void 0,function*(){o.assertParamExists("createImageEdit","image",e),o.assertParamExists("createImageEdit","prompt",t);let d="/images/edits",u=new URL(d,o.DUMMY_BASE_URL),O;i&&(O=i.baseOptions);let v=Object.assign(Object.assign({method:"POST"},O),l),P={},f={},F=new(i&&i.formDataCtor||FormData);e!==void 0&&F.append("image",e),s!==void 0&&F.append("mask",s),t!==void 0&&F.append("prompt",t),a!==void 0&&F.append("n",a),r!==void 0&&F.append("size",r),n!==void 0&&F.append("response_format",n),c!==void 0&&F.append("user",c),P["Content-Type"]="multipart/form-data",o.setSearchParams(u,f);let se=O&&O.headers?O.headers:{};return v.headers=Object.assign(Object.assign(Object.assign(Object.assign({},P),F.getHeaders()),se),l.headers),v.data=F,{url:o.toPathString(u),options:v}}),createImageVariation:(e,t,s,a,r,n={})=>h(this,void 0,void 0,function*(){o.assertParamExists("createImageVariation","image",e);let c="/images/variations",l=new URL(c,o.DUMMY_BASE_URL),d;i&&(d=i.baseOptions);let u=Object.assign(Object.assign({method:"POST"},d),n),O={},v={},P=new(i&&i.formDataCtor||FormData);e!==void 0&&P.append("image",e),t!==void 0&&P.append("n",t),s!==void 0&&P.append("size",s),a!==void 0&&P.append("response_format",a),r!==void 0&&P.append("user",r),O["Content-Type"]="multipart/form-data",o.setSearchParams(l,v);let f=d&&d.headers?d.headers:{};return u.headers=Object.assign(Object.assign(Object.assign(Object.assign({},O),P.getHeaders()),f),n.headers),u.data=P,{url:o.toPathString(l),options:u}}),createModeration:(e,t={})=>h(this,void 0,void 0,function*(){o.assertParamExists("createModeration","createModerationRequest",e);let s="/moderations",a=new URL(s,o.DUMMY_BASE_URL),r;i&&(r=i.baseOptions);let n=Object.assign(Object.assign({method:"POST"},r),t),c={},l={};c["Content-Type"]="application/json",o.setSearchParams(a,l);let d=r&&r.headers?r.headers:{};return n.headers=Object.assign(Object.assign(Object.assign({},c),d),t.headers),n.data=o.serializeDataIfNeeded(e,n,i),{url:o.toPathString(a),options:n}}),createSearch:(e,t,s={})=>h(this,void 0,void 0,function*(){o.assertParamExists("createSearch","engineId",e),o.assertParamExists("createSearch","createSearchRequest",t);let a="/engines/{engine_id}/search".replace("{engine_id}",encodeURIComponent(String(e))),r=new URL(a,o.DUMMY_BASE_URL),n;i&&(n=i.baseOptions);let c=Object.assign(Object.assign({method:"POST"},n),s),l={},d={};l["Content-Type"]="application/json",o.setSearchParams(r,d);let u=n&&n.headers?n.headers:{};return c.headers=Object.assign(Object.assign(Object.assign({},l),u),s.headers),c.data=o.serializeDataIfNeeded(t,c,i),{url:o.toPathString(r),options:c}}),createTranscription:(e,t,s,a,r,n,c={})=>h(this,void 0,void 0,function*(){o.assertParamExists("createTranscription","file",e),o.assertParamExists("createTranscription","model",t);let l="/audio/transcriptions",d=new URL(l,o.DUMMY_BASE_URL),u;i&&(u=i.baseOptions);let O=Object.assign(Object.assign({method:"POST"},u),c),v={},P={},f=new(i&&i.formDataCtor||FormData);e!==void 0&&f.append("file",e),t!==void 0&&f.append("model",t),s!==void 0&&f.append("prompt",s),a!==void 0&&f.append("response_format",a),r!==void 0&&f.append("temperature",r),n!==void 0&&f.append("language",n),v["Content-Type"]="multipart/form-data",o.setSearchParams(d,P);let F=u&&u.headers?u.headers:{};return O.headers=Object.assign(Object.assign(Object.assign(Object.assign({},v),f.getHeaders()),F),c.headers),O.data=f,{url:o.toPathString(d),options:O}}),createTranslation:(e,t,s,a,r,n={})=>h(this,void 0,void 0,function*(){o.assertParamExists("createTranslation","file",e),o.assertParamExists("createTranslation","model",t);let c="/audio/translations",l=new URL(c,o.DUMMY_BASE_URL),d;i&&(d=i.baseOptions);let u=Object.assign(Object.assign({method:"POST"},d),n),O={},v={},P=new(i&&i.formDataCtor||FormData);e!==void 0&&P.append("file",e),t!==void 0&&P.append("model",t),s!==void 0&&P.append("prompt",s),a!==void 0&&P.append("response_format",a),r!==void 0&&P.append("temperature",r),O["Content-Type"]="multipart/form-data",o.setSearchParams(l,v);let f=d&&d.headers?d.headers:{};return u.headers=Object.assign(Object.assign(Object.assign(Object.assign({},O),P.getHeaders()),f),n.headers),u.data=P,{url:o.toPathString(l),options:u}}),deleteFile:(e,t={})=>h(this,void 0,void 0,function*(){o.assertParamExists("deleteFile","fileId",e);let s="/files/{file_id}".replace("{file_id}",encodeURIComponent(String(e))),a=new URL(s,o.DUMMY_BASE_URL),r;i&&(r=i.baseOptions);let n=Object.assign(Object.assign({method:"DELETE"},r),t),c={},l={};o.setSearchParams(a,l);let d=r&&r.headers?r.headers:{};return n.headers=Object.assign(Object.assign(Object.assign({},c),d),t.headers),{url:o.toPathString(a),options:n}}),deleteModel:(e,t={})=>h(this,void 0,void 0,function*(){o.assertParamExists("deleteModel","model",e);let s="/models/{model}".replace("{model}",encodeURIComponent(String(e))),a=new URL(s,o.DUMMY_BASE_URL),r;i&&(r=i.baseOptions);let n=Object.assign(Object.assign({method:"DELETE"},r),t),c={},l={};o.setSearchParams(a,l);let d=r&&r.headers?r.headers:{};return n.headers=Object.assign(Object.assign(Object.assign({},c),d),t.headers),{url:o.toPathString(a),options:n}}),downloadFile:(e,t={})=>h(this,void 0,void 0,function*(){o.assertParamExists("downloadFile","fileId",e);let s="/files/{file_id}/content".replace("{file_id}",encodeURIComponent(String(e))),a=new URL(s,o.DUMMY_BASE_URL),r;i&&(r=i.baseOptions);let n=Object.assign(Object.assign({method:"GET"},r),t),c={},l={};o.setSearchParams(a,l);let d=r&&r.headers?r.headers:{};return n.headers=Object.assign(Object.assign(Object.assign({},c),d),t.headers),{url:o.toPathString(a),options:n}}),listEngines:(e={})=>h(this,void 0,void 0,function*(){let t="/engines",s=new URL(t,o.DUMMY_BASE_URL),a;i&&(a=i.baseOptions);let r=Object.assign(Object.assign({method:"GET"},a),e),n={},c={};o.setSearchParams(s,c);let l=a&&a.headers?a.headers:{};return r.headers=Object.assign(Object.assign(Object.assign({},n),l),e.headers),{url:o.toPathString(s),options:r}}),listFiles:(e={})=>h(this,void 0,void 0,function*(){let t="/files",s=new URL(t,o.DUMMY_BASE_URL),a;i&&(a=i.baseOptions);let r=Object.assign(Object.assign({method:"GET"},a),e),n={},c={};o.setSearchParams(s,c);let l=a&&a.headers?a.headers:{};return r.headers=Object.assign(Object.assign(Object.assign({},n),l),e.headers),{url:o.toPathString(s),options:r}}),listFineTuneEvents:(e,t,s={})=>h(this,void 0,void 0,function*(){o.assertParamExists("listFineTuneEvents","fineTuneId",e);let a="/fine-tunes/{fine_tune_id}/events".replace("{fine_tune_id}",encodeURIComponent(String(e))),r=new URL(a,o.DUMMY_BASE_URL),n;i&&(n=i.baseOptions);let c=Object.assign(Object.assign({method:"GET"},n),s),l={},d={};t!==void 0&&(d.stream=t),o.setSearchParams(r,d);let u=n&&n.headers?n.headers:{};return c.headers=Object.assign(Object.assign(Object.assign({},l),u),s.headers),{url:o.toPathString(r),options:c}}),listFineTunes:(e={})=>h(this,void 0,void 0,function*(){let t="/fine-tunes",s=new URL(t,o.DUMMY_BASE_URL),a;i&&(a=i.baseOptions);let r=Object.assign(Object.assign({method:"GET"},a),e),n={},c={};o.setSearchParams(s,c);let l=a&&a.headers?a.headers:{};return r.headers=Object.assign(Object.assign(Object.assign({},n),l),e.headers),{url:o.toPathString(s),options:r}}),listModels:(e={})=>h(this,void 0,void 0,function*(){let t="/models",s=new URL(t,o.DUMMY_BASE_URL),a;i&&(a=i.baseOptions);let r=Object.assign(Object.assign({method:"GET"},a),e),n={},c={};o.setSearchParams(s,c);let l=a&&a.headers?a.headers:{};return r.headers=Object.assign(Object.assign(Object.assign({},n),l),e.headers),{url:o.toPathString(s),options:r}}),retrieveEngine:(e,t={})=>h(this,void 0,void 0,function*(){o.assertParamExists("retrieveEngine","engineId",e);let s="/engines/{engine_id}".replace("{engine_id}",encodeURIComponent(String(e))),a=new URL(s,o.DUMMY_BASE_URL),r;i&&(r=i.baseOptions);let n=Object.assign(Object.assign({method:"GET"},r),t),c={},l={};o.setSearchParams(a,l);let d=r&&r.headers?r.headers:{};return n.headers=Object.assign(Object.assign(Object.assign({},c),d),t.headers),{url:o.toPathString(a),options:n}}),retrieveFile:(e,t={})=>h(this,void 0,void 0,function*(){o.assertParamExists("retrieveFile","fileId",e);let s="/files/{file_id}".replace("{file_id}",encodeURIComponent(String(e))),a=new URL(s,o.DUMMY_BASE_URL),r;i&&(r=i.baseOptions);let n=Object.assign(Object.assign({method:"GET"},r),t),c={},l={};o.setSearchParams(a,l);let d=r&&r.headers?r.headers:{};return n.headers=Object.assign(Object.assign(Object.assign({},c),d),t.headers),{url:o.toPathString(a),options:n}}),retrieveFineTune:(e,t={})=>h(this,void 0,void 0,function*(){o.assertParamExists("retrieveFineTune","fineTuneId",e);let s="/fine-tunes/{fine_tune_id}".replace("{fine_tune_id}",encodeURIComponent(String(e))),a=new URL(s,o.DUMMY_BASE_URL),r;i&&(r=i.baseOptions);let n=Object.assign(Object.assign({method:"GET"},r),t),c={},l={};o.setSearchParams(a,l);let d=r&&r.headers?r.headers:{};return n.headers=Object.assign(Object.assign(Object.assign({},c),d),t.headers),{url:o.toPathString(a),options:n}}),retrieveModel:(e,t={})=>h(this,void 0,void 0,function*(){o.assertParamExists("retrieveModel","model",e);let s="/models/{model}".replace("{model}",encodeURIComponent(String(e))),a=new URL(s,o.DUMMY_BASE_URL),r;i&&(r=i.baseOptions);let n=Object.assign(Object.assign({method:"GET"},r),t),c={},l={};o.setSearchParams(a,l);let d=r&&r.headers?r.headers:{};return n.headers=Object.assign(Object.assign(Object.assign({},c),d),t.headers),{url:o.toPathString(a),options:n}})}};p.OpenAIApiFp=function(i){let e=p.OpenAIApiAxiosParamCreator(i);return{cancelFineTune(t,s){return h(this,void 0,void 0,function*(){let a=yield e.cancelFineTune(t,s);return o.createRequestFunction(a,b.default,m.BASE_PATH,i)})},createAnswer(t,s){return h(this,void 0,void 0,function*(){let a=yield e.createAnswer(t,s);return o.createRequestFunction(a,b.default,m.BASE_PATH,i)})},createChatCompletion(t,s){return h(this,void 0,void 0,function*(){let a=yield e.createChatCompletion(t,s);return o.createRequestFunction(a,b.default,m.BASE_PATH,i)})},createClassification(t,s){return h(this,void 0,void 0,function*(){let a=yield e.createClassification(t,s);return o.createRequestFunction(a,b.default,m.BASE_PATH,i)})},createCompletion(t,s){return h(this,void 0,void 0,function*(){let a=yield e.createCompletion(t,s);return o.createRequestFunction(a,b.default,m.BASE_PATH,i)})},createEdit(t,s){return h(this,void 0,void 0,function*(){let a=yield e.createEdit(t,s);return o.createRequestFunction(a,b.default,m.BASE_PATH,i)})},createEmbedding(t,s){return h(this,void 0,void 0,function*(){let a=yield e.createEmbedding(t,s);return o.createRequestFunction(a,b.default,m.BASE_PATH,i)})},createFile(t,s,a){return h(this,void 0,void 0,function*(){let r=yield e.createFile(t,s,a);return o.createRequestFunction(r,b.default,m.BASE_PATH,i)})},createFineTune(t,s){return h(this,void 0,void 0,function*(){let a=yield e.createFineTune(t,s);return o.createRequestFunction(a,b.default,m.BASE_PATH,i)})},createImage(t,s){return h(this,void 0,void 0,function*(){let a=yield e.createImage(t,s);return o.createRequestFunction(a,b.default,m.BASE_PATH,i)})},createImageEdit(t,s,a,r,n,c,l,d){return h(this,void 0,void 0,function*(){let u=yield e.createImageEdit(t,s,a,r,n,c,l,d);return o.createRequestFunction(u,b.default,m.BASE_PATH,i)})},createImageVariation(t,s,a,r,n,c){return h(this,void 0,void 0,function*(){let l=yield e.createImageVariation(t,s,a,r,n,c);return o.createRequestFunction(l,b.default,m.BASE_PATH,i)})},createModeration(t,s){return h(this,void 0,void 0,function*(){let a=yield e.createModeration(t,s);return o.createRequestFunction(a,b.default,m.BASE_PATH,i)})},createSearch(t,s,a){return h(this,void 0,void 0,function*(){let r=yield e.createSearch(t,s,a);return o.createRequestFunction(r,b.default,m.BASE_PATH,i)})},createTranscription(t,s,a,r,n,c,l){return h(this,void 0,void 0,function*(){let d=yield e.createTranscription(t,s,a,r,n,c,l);return o.createRequestFunction(d,b.default,m.BASE_PATH,i)})},createTranslation(t,s,a,r,n,c){return h(this,void 0,void 0,function*(){let l=yield e.createTranslation(t,s,a,r,n,c);return o.createRequestFunction(l,b.default,m.BASE_PATH,i)})},deleteFile(t,s){return h(this,void 0,void 0,function*(){let a=yield e.deleteFile(t,s);return o.createRequestFunction(a,b.default,m.BASE_PATH,i)})},deleteModel(t,s){return h(this,void 0,void 0,function*(){let a=yield e.deleteModel(t,s);return o.createRequestFunction(a,b.default,m.BASE_PATH,i)})},downloadFile(t,s){return h(this,void 0,void 0,function*(){let a=yield e.downloadFile(t,s);return o.createRequestFunction(a,b.default,m.BASE_PATH,i)})},listEngines(t){return h(this,void 0,void 0,function*(){let s=yield e.listEngines(t);return o.createRequestFunction(s,b.default,m.BASE_PATH,i)})},listFiles(t){return h(this,void 0,void 0,function*(){let s=yield e.listFiles(t);return o.createRequestFunction(s,b.default,m.BASE_PATH,i)})},listFineTuneEvents(t,s,a){return h(this,void 0,void 0,function*(){let r=yield e.listFineTuneEvents(t,s,a);return o.createRequestFunction(r,b.default,m.BASE_PATH,i)})},listFineTunes(t){return h(this,void 0,void 0,function*(){let s=yield e.listFineTunes(t);return o.createRequestFunction(s,b.default,m.BASE_PATH,i)})},listModels(t){return h(this,void 0,void 0,function*(){let s=yield e.listModels(t);return o.createRequestFunction(s,b.default,m.BASE_PATH,i)})},retrieveEngine(t,s){return h(this,void 0,void 0,function*(){let a=yield e.retrieveEngine(t,s);return o.createRequestFunction(a,b.default,m.BASE_PATH,i)})},retrieveFile(t,s){return h(this,void 0,void 0,function*(){let a=yield e.retrieveFile(t,s);return o.createRequestFunction(a,b.default,m.BASE_PATH,i)})},retrieveFineTune(t,s){return h(this,void 0,void 0,function*(){let a=yield e.retrieveFineTune(t,s);return o.createRequestFunction(a,b.default,m.BASE_PATH,i)})},retrieveModel(t,s){return h(this,void 0,void 0,function*(){let a=yield e.retrieveModel(t,s);return o.createRequestFunction(a,b.default,m.BASE_PATH,i)})}}};p.OpenAIApiFactory=function(i,e,t){let s=p.OpenAIApiFp(i);return{cancelFineTune(a,r){return s.cancelFineTune(a,r).then(n=>n(t,e))},createAnswer(a,r){return s.createAnswer(a,r).then(n=>n(t,e))},createChatCompletion(a,r){return s.createChatCompletion(a,r).then(n=>n(t,e))},createClassification(a,r){return s.createClassification(a,r).then(n=>n(t,e))},createCompletion(a,r){return s.createCompletion(a,r).then(n=>n(t,e))},createEdit(a,r){return s.createEdit(a,r).then(n=>n(t,e))},createEmbedding(a,r){return s.createEmbedding(a,r).then(n=>n(t,e))},createFile(a,r,n){return s.createFile(a,r,n).then(c=>c(t,e))},createFineTune(a,r){return s.createFineTune(a,r).then(n=>n(t,e))},createImage(a,r){return s.createImage(a,r).then(n=>n(t,e))},createImageEdit(a,r,n,c,l,d,u,O){return s.createImageEdit(a,r,n,c,l,d,u,O).then(v=>v(t,e))},createImageVariation(a,r,n,c,l,d){return s.createImageVariation(a,r,n,c,l,d).then(u=>u(t,e))},createModeration(a,r){return s.createModeration(a,r).then(n=>n(t,e))},createSearch(a,r,n){return s.createSearch(a,r,n).then(c=>c(t,e))},createTranscription(a,r,n,c,l,d,u){return s.createTranscription(a,r,n,c,l,d,u).then(O=>O(t,e))},createTranslation(a,r,n,c,l,d){return s.createTranslation(a,r,n,c,l,d).then(u=>u(t,e))},deleteFile(a,r){return s.deleteFile(a,r).then(n=>n(t,e))},deleteModel(a,r){return s.deleteModel(a,r).then(n=>n(t,e))},downloadFile(a,r){return s.downloadFile(a,r).then(n=>n(t,e))},listEngines(a){return s.listEngines(a).then(r=>r(t,e))},listFiles(a){return s.listFiles(a).then(r=>r(t,e))},listFineTuneEvents(a,r,n){return s.listFineTuneEvents(a,r,n).then(c=>c(t,e))},listFineTunes(a){return s.listFineTunes(a).then(r=>r(t,e))},listModels(a){return s.listModels(a).then(r=>r(t,e))},retrieveEngine(a,r){return s.retrieveEngine(a,r).then(n=>n(t,e))},retrieveFile(a,r){return s.retrieveFile(a,r).then(n=>n(t,e))},retrieveFineTune(a,r){return s.retrieveFineTune(a,r).then(n=>n(t,e))},retrieveModel(a,r){return s.retrieveModel(a,r).then(n=>n(t,e))}}};var Q=class extends m.BaseAPI{cancelFineTune(e,t){return p.OpenAIApiFp(this.configuration).cancelFineTune(e,t).then(s=>s(this.axios,this.basePath))}createAnswer(e,t){return p.OpenAIApiFp(this.configuration).createAnswer(e,t).then(s=>s(this.axios,this.basePath))}createChatCompletion(e,t){return p.OpenAIApiFp(this.configuration).createChatCompletion(e,t).then(s=>s(this.axios,this.basePath))}createClassification(e,t){return p.OpenAIApiFp(this.configuration).createClassification(e,t).then(s=>s(this.axios,this.basePath))}createCompletion(e,t){return p.OpenAIApiFp(this.configuration).createCompletion(e,t).then(s=>s(this.axios,this.basePath))}createEdit(e,t){return p.OpenAIApiFp(this.configuration).createEdit(e,t).then(s=>s(this.axios,this.basePath))}createEmbedding(e,t){return p.OpenAIApiFp(this.configuration).createEmbedding(e,t).then(s=>s(this.axios,this.basePath))}createFile(e,t,s){return p.OpenAIApiFp(this.configuration).createFile(e,t,s).then(a=>a(this.axios,this.basePath))}createFineTune(e,t){return p.OpenAIApiFp(this.configuration).createFineTune(e,t).then(s=>s(this.axios,this.basePath))}createImage(e,t){return p.OpenAIApiFp(this.configuration).createImage(e,t).then(s=>s(this.axios,this.basePath))}createImageEdit(e,t,s,a,r,n,c,l){return p.OpenAIApiFp(this.configuration).createImageEdit(e,t,s,a,r,n,c,l).then(d=>d(this.axios,this.basePath))}createImageVariation(e,t,s,a,r,n){return p.OpenAIApiFp(this.configuration).createImageVariation(e,t,s,a,r,n).then(c=>c(this.axios,this.basePath))}createModeration(e,t){return p.OpenAIApiFp(this.configuration).createModeration(e,t).then(s=>s(this.axios,this.basePath))}createSearch(e,t,s){return p.OpenAIApiFp(this.configuration).createSearch(e,t,s).then(a=>a(this.axios,this.basePath))}createTranscription(e,t,s,a,r,n,c){return p.OpenAIApiFp(this.configuration).createTranscription(e,t,s,a,r,n,c).then(l=>l(this.axios,this.basePath))}createTranslation(e,t,s,a,r,n){return p.OpenAIApiFp(this.configuration).createTranslation(e,t,s,a,r,n).then(c=>c(this.axios,this.basePath))}deleteFile(e,t){return p.OpenAIApiFp(this.configuration).deleteFile(e,t).then(s=>s(this.axios,this.basePath))}deleteModel(e,t){return p.OpenAIApiFp(this.configuration).deleteModel(e,t).then(s=>s(this.axios,this.basePath))}downloadFile(e,t){return p.OpenAIApiFp(this.configuration).downloadFile(e,t).then(s=>s(this.axios,this.basePath))}listEngines(e){return p.OpenAIApiFp(this.configuration).listEngines(e).then(t=>t(this.axios,this.basePath))}listFiles(e){return p.OpenAIApiFp(this.configuration).listFiles(e).then(t=>t(this.axios,this.basePath))}listFineTuneEvents(e,t,s){return p.OpenAIApiFp(this.configuration).listFineTuneEvents(e,t,s).then(a=>a(this.axios,this.basePath))}listFineTunes(e){return p.OpenAIApiFp(this.configuration).listFineTunes(e).then(t=>t(this.axios,this.basePath))}listModels(e){return p.OpenAIApiFp(this.configuration).listModels(e).then(t=>t(this.axios,this.basePath))}retrieveEngine(e,t){return p.OpenAIApiFp(this.configuration).retrieveEngine(e,t).then(s=>s(this.axios,this.basePath))}retrieveFile(e,t){return p.OpenAIApiFp(this.configuration).retrieveFile(e,t).then(s=>s(this.axios,this.basePath))}retrieveFineTune(e,t){return p.OpenAIApiFp(this.configuration).retrieveFineTune(e,t).then(s=>s(this.axios,this.basePath))}retrieveModel(e,t){return p.OpenAIApiFp(this.configuration).retrieveModel(e,t).then(s=>s(this.axios,this.basePath))}};p.OpenAIApi=Q});var G=T((Te,ce)=>{ce.exports={name:"openai",version:"3.3.0",description:"Node.js library for the OpenAI API",repository:{type:"git",url:"git@github.com:openai/openai-node.git"},keywords:["openai","open","ai","gpt-3","gpt3"],author:"OpenAI",license:"MIT",main:"./dist/index.js",types:"./dist/index.d.ts",scripts:{build:"tsc --outDir dist/"},dependencies:{axios:"^0.26.0","form-data":"^4.0.0"},devDependencies:{"@types/node":"^12.11.5",typescript:"^3.6.4"}}});var W=T((_e,J)=>{g();J.exports=typeof self=="object"?self.FormData:window.FormData});var X=T(B=>{"use strict";g();Object.defineProperty(B,"__esModule",{value:!0});B.Configuration=void 0;var le=G(),z=class{constructor(e={}){this.apiKey=e.apiKey,this.organization=e.organization,this.username=e.username,this.password=e.password,this.accessToken=e.accessToken,this.basePath=e.basePath,this.baseOptions=e.baseOptions,this.formDataCtor=e.formDataCtor,this.baseOptions||(this.baseOptions={}),this.baseOptions.headers=Object.assign({"User-Agent":`OpenAI/NodeJS/${le.version}`,Authorization:`Bearer ${this.apiKey}`},this.baseOptions.headers),this.organization&&(this.baseOptions.headers["OpenAI-Organization"]=this.organization),this.formDataCtor||(this.formDataCtor=W())}isJsonMime(e){let t=new RegExp("^(application/json|[^;/ 	]+/[^;/ 	]+[+]json)[ 	]*(;.*)?$","i");return e!==null&&(t.test(e)||e.toLowerCase()==="application/json-patch+json")}};B.Configuration=z});var ee=T(y=>{"use strict";g();var de=y&&y.__createBinding||(Object.create?function(i,e,t,s){s===void 0&&(s=t),Object.defineProperty(i,s,{enumerable:!0,get:function(){return e[t]}})}:function(i,e,t,s){s===void 0&&(s=t),i[s]=e[t]}),Z=y&&y.__exportStar||function(i,e){for(var t in i)t!=="default"&&!e.hasOwnProperty(t)&&de(e,i,t)};Object.defineProperty(y,"__esModule",{value:!0});Z(k(),y);Z(X(),y)});var ue=T(R=>{g();Object.defineProperty(R,"__esModule",{value:!0});R.apply=R.Config=R.name=void 0;var j=(N(),q(M)),te=ee();R.name="openai-chatgpt";R.Config=j.Schema.object({apiKey:j.Schema.string().required().description("OpenAI API Key: https://platform.openai.com/account/api-keys"),apiAddress:j.Schema.string().required().default("https://api.openai.com/v1").description("API 请求地址。"),triggerWord:j.Schema.string().default("chat").description("触发机器人回答的关键词。"),model:j.Schema.union(["gpt-3.5-turbo","gpt-3.5-turbo-0301"]).default("gpt-3.5-turbo"),temperature:j.Schema.number().default(1).description("温度，更高的值意味着模型将承担更多的风险。对于更有创造性的应用，可以尝试 0.9，而对于有明确答案的应用，可以尝试 0（argmax 采样）。"),maxTokens:j.Schema.number().default(100).description("生成的最大令牌数。"),topP:j.Schema.number().default(1),frequencyPenalty:j.Schema.number().default(0).description("数值在 -2.0 和 2.0 之间。正值是根据到目前为止它们在文本中的现有频率来惩罚新的标记，减少模型逐字逐句地重复同一行的可能性。"),presencePenalty:j.Schema.number().default(0).description("数值在 -2.0 和 2.0 之间。正值根据新标记在文本中的现有频率对其进行惩罚，减少了模型（model）逐字重复同一行的可能性。"),stop:j.Schema.array(j.Schema.string()).default(null).description("生成的文本将在遇到任何一个停止标记时停止。"),errorMessage:j.Schema.string().default("回答出错了，请联系管理员。").description("回答出错时的提示信息。"),pictureMode:j.Schema.boolean().default(!1).description("开启图片模式。")});async function he(i,e){let t=new te.Configuration({apiKey:e.apiKey,basePath:e.apiAddress}),s=new te.OpenAIApi(t);i.before("send",async a=>{if(e.pictureMode===!0){let r=`
      <html>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/core@1.0.0-beta17/dist/css/tabler.min.css">
      <style> body { background-color: white; } </style>
      <div class="toast show" id="message">
        <div class="toast-header">
          <span class="avatar avatar-xs me-2" style="background-image: url(https://pic.sky390.cn/pics/2023/03/09/6409690ebc4df.png)"></span>
          <strong class="me-auto">ChatGPT</strong>
        </div>
        <div class="toast-body">
          ${a.content.replace(/\n/g,"<br>").replace(/<\/*template>/g,"")}
        </div>
      </div>
      <script>
        const message = document.getElementById('message');
        document.getElementsByTagName('html')[0].style.height = message.offsetHeight;
        document.getElementsByTagName('html')[0].style.width = message.offsetWidth;
      <\/script>
      </html>`;a.content=await i.puppeteer.render(r)}}),i.command(e.triggerWord+" <message:text>").action(async({session:a},r)=>{let n=r;a.send("查询中，请耐心等待...");try{return(await s.createChatCompletion({model:e.model,messages:[{role:"user",content:n}],temperature:e.temperature,max_tokens:e.maxTokens,top_p:e.topP,frequency_penalty:e.frequencyPenalty,presence_penalty:e.presencePenalty,stop:e.stop})).data.choices[0].message.content}catch(c){return c.response,e.errorMessage}})}R.apply=he});export default ue();
