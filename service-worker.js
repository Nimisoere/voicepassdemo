"use strict";var precacheConfig=[["/voicepassdemo/index.html","a8b1ff2e38af3bdaf7d455e54af96344"],["/voicepassdemo/static/css/main.1850ca8c.css","3f65ee84eeca179e1127a3312ffbfeb7"],["/voicepassdemo/static/js/main.8a86d00f.js","5ea02c33020c4cd3eb72000beb1238a6"],["/voicepassdemo/static/media/CircularStd-Bold.56f82cac.eot","56f82cac95e52c85498a25a30d9774e9"],["/voicepassdemo/static/media/CircularStd-Bold.74679a4c.woff","74679a4cc017dca4621d6bcf38381806"],["/voicepassdemo/static/media/CircularStd-Bold.df13ba46.ttf","df13ba46cad8f788b03e29ab535c8f7d"],["/voicepassdemo/static/media/CircularStd-Bold.f685d077.svg","f685d0772787062699c362988dcdc59d"],["/voicepassdemo/static/media/CircularStd-Bold.fdbfc358.woff2","fdbfc358bc6e87a42b57707567214dc6"],["/voicepassdemo/static/media/CircularStd-Book.1d4059ce.eot","1d4059cebfac924cb8427eac31c0e223"],["/voicepassdemo/static/media/CircularStd-Book.36b95d10.woff2","36b95d1079e11cc557e0a868171626d7"],["/voicepassdemo/static/media/CircularStd-Book.43f768f8.ttf","43f768f8fbe2c37b1fb880e517a563d3"],["/voicepassdemo/static/media/CircularStd-Book.a1995f94.svg","a1995f94712901fb099b099e6986619c"],["/voicepassdemo/static/media/CircularStd-Book.d356ee6e.woff","d356ee6e9377e36166652b0dab169354"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,r){var n=new URL(e);return r&&n.pathname.match(r)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],r=new URL(t,self.location),n=createCacheKey(r,hashParamName,a,/\.\w{8}\./);return[r.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,r),e=urlsToCacheKeys.has(a));var n="/voicepassdemo/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});