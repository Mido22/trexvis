"use strict";var precacheConfig=[["/index.html","25a4cbd1cceba52090d844006334860b"],["/static/css/main.8174c03c.css","631c063c8376105c9bdb2e3403833411"],["/static/js/main.b7f333bb.js","84f40970fa7d958ad3d256cbf3b5f0fe"],["/static/media/TREXVIS1-fin1.8ab8384d.png","8ab8384d2d83019fb65dba6813769c20"],["/static/media/Visa_processing.21e7cb67.jpg","21e7cb67fa0a1f0ea3b4ade1220a9123"],["/static/media/aboutUs.50ac9235.jpg","50ac9235be1316dd16de24796c1cb6ea"],["/static/media/flags.9c74e172.png","9c74e172f87984c48ddf5c8108cabe67"],["/static/media/force-traveller.d755b8cd.jpg","d755b8cd104c5fee0fca92e7a0e05c5b"],["/static/media/home_luxury.924d8ee6.jpg","924d8ee6153740c151a90a496c0fc3df"],["/static/media/home_sport.694a3e37.jpg","694a3e37dc60e8b587d4f9e6bccb4087"],["/static/media/home_suv.1915855a.jpg","1915855a71b3af93ede1414ef47b59cc"],["/static/media/icons.674f50d2.eot","674f50d287a8c48dc19ba404d20fe713"],["/static/media/icons.912ec66d.svg","912ec66d7572ff821749319396470bde"],["/static/media/icons.af7ae505.woff2","af7ae505a9eed503f8b8e6982036873e"],["/static/media/icons.b06871f2.ttf","b06871f281fee6b241d60582ae9369b9"],["/static/media/icons.fee66e71.woff","fee66e712a8a08eef5805a46892932ad"],["/static/media/service_air.c02216a2.jpg","c02216a223a73f00c4ecc2cb7aeb2a8c"],["/static/media/service_car.f767691d.jpg","f767691d783cd0532fb0f0ba435db387"],["/static/media/service_forex.3f342213.jpg","3f342213848d6551d09067aa74f3c401"],["/static/media/service_hotel.245cf4fb.jpg","245cf4fbcc0ac32cc8660dc06c9dd74d"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),t=urlsToCacheKeys.has(a));var c="/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(c,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});