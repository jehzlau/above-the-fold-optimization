!function(p,k,u){function F(a,c,b){caches.open(q).then(function(d){function g(b){b=new Response(b,{status:c.status,statusText:c.statusText,headers:e});d.put(a,b)}var e={};c.headers.forEach(function(a,d){e[d]=a});e["x-abtf-sw"]=m();b&&b.max_age&&(e["x-abtf-sw-expire"]=b.max_age);c.headers.get("content-type").match(/text/i)?c.text().then(g):c.blob().then(g)})}function D(a){a&&("string"==typeof a&&(a=new Request(a,{mode:"no-cors"})),r(a).then(function(c){return c||n(a,{conditions:null})}))}function r(a){return caches.open(q).then(function(c){return c.match(a)})}
function x(a,c){return a=new Request(a),r(a).then(function(a){return a?a.text().then(function(d){return new Response(d,{status:503,statusText:"Offline",headers:a.headers})}):k(c)["catch"](function(a){throw a;})})}function G(a,c,b,d){var g=b.headers.get("etag"),e=b.headers.get("last-modified");g||e?(b=new Request(a.url,{method:"HEAD",headers:a.headers,mode:"no-cors"}),k(b).then(function(b){var l=!1,f=b.headers.get("etag");b=b.headers.get("last-modified");return(f&&f!==g?l=!0:b&&b!==e&&(l=!0),l)?(l=
n(a,c),d&&(l=l.then(d)),l):null})["catch"](function(){var b=n(a,c);return d&&(b=b.then(d)),b})):(b=n(a,c),d&&(b=b.then(d)))}function n(a,c,b){return k(a).then(function(d){if(d.ok&&400>d.status&&c){var b=!0;c.conditions&&c.conditions.forEach(function(e){if(b)switch(e.type){case "url":e.regex?(c=v(e.pattern))?(f=c.test(a.url),e.not?f&&(b=!1):f||(b=!1)):b=!1:(f=-1!==a.url.indexOf(e.pattern),e.not?f&&(b=!1):f||(b=!1));break;case "header":var g=d.headers.get(e.name);if(g)if(e.regex){var c=v(e.pattern);
c?(f=c.test(g),e.not?f&&(b=!1):f||(b=!1)):b=!1}else if("object"==typeof e.pattern)if(e.pattern.operator)if(g=parseFloat(g),c=parseFloat(e.pattern.value),isNaN(g)||isNaN(c))b=!1;else{switch(e.pattern.operator){case "<":f=g<c;break;case ">":f=g>c;break;case "=":var f=g===c;break;default:b=!1}b&&(e.not?f&&(b=!1):f||(b=!1))}else b=!1;else-1===g.indexOf(e.pattern)&&(b=!1);else b=!1}});b&&F(a,d.clone(),c)}return d})["catch"](function(d){return b?b(a,null,d):null})}function E(){y||(!z||z<m()-10)&&(y=!0,
z=m(),caches.keys().then(function(a){return a&&0!==a.length?Promise.all(a.map(function(a){if(0!==a.indexOf(q))return caches["delete"](a);caches.open(a).then(function(a){a.keys().then(function(b){if(b.length<w)return this;var d=[],e=[],c=[];return b.forEach(function(b){e.push(b);c.push(a.match(b))}),Promise.all(c).then(function(b){var c=m();return b.forEach(function(b,g){if(b&&b.headers){var f=b.headers.get("x-abtf-sw");if(f){var l=b.headers.get("x-abtf-sw-expire");if(l&&f&&f<m()-l)return void a["delete"](e[g])}else f=
c;!1!==d&&d.push({t:f,r:e[g]})}}),d&&d.length>w&&(d.sort(function(a,b){return a.t>b.t?-1:a.t<b.t?1:0}),d.slice(w).forEach(function(b){a["delete"](b.r)})),this})})})})).then(function(){y=!1}):Promise.resolve()}))}function v(a){if(a=a.match(H)){try{var c=new RegExp(a[1],a[2])}catch(b){}return c||!1}}function m(){return Math.round(Date.now()/1E3)}function A(){return k("./abtf-pwa-policy.json",{mode:"no-cors"}).then(function(a){if(a&&a.ok&&400>a.status)return a.json().then(function(a){if(h=a,t=m(),h&&
0<h.length){var b=[];h.forEach(function(a){a.offline&&-1===b.indexOf(a.offline)&&b.push(a.offline)});b.forEach(function(a){D(a)})}});throw h=!1,Error("cache policy not found: ./abtf-pwa-policy.json");})["catch"](function(a){throw h=!1,a;})}function B(a){return new Promise(function(c,b){if(h&&c(h),!h||!t||a&&a>t){var d=!h;A().then(function(){d&&(h?c(h):b())})["catch"](function(){d&&b()})}else if(t<m()-300){var g=new Request("./abtf-pwa-policy.json",{method:"HEAD",mode:"no-cors"});k(g).then(function(a){a=
a.headers.get("last-modified");(!a||a&&a>t)&&A()})}})}var q,h=!1,t=!1,w=1E3;u.prototype.add||(u.prototype.add=function(a){return this.addAll([a])});u.prototype.addAll||(u.prototype.addAll=function(a){function c(a){this.name="NetworkError";this.code=19;this.message=a}var b=this;return c.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(1>arguments.length)throw new TypeError;return a=a.map(function(a){return a instanceof Request?a:String(a)}),Promise.all(a.map(function(a){"string"==
typeof a&&(a=new Request(a));var b=(new URL(a.url)).protocol;if("http:"!==b&&"https:"!==b)throw new c("Invalid scheme");return k(a.clone())["catch"](function(a){throw a;})}))}).then(function(d){return Promise.all(d.map(function(d,e){return b.put(a[e],d)}))}).then(function(){})});CacheStorage.prototype.match||(CacheStorage.prototype.match=function(a,c){var b=this;return this.keys().then(function(d){var g;return d.reduce(function(d,h){return d.then(function(){return g||b.open(h).then(function(b){return b.match(a,
c)}).then(function(a){return g=a})})},Promise.resolve())})});p.addEventListener("install",function(a){a.waitUntil(A().then(function(){p.skipWaiting()})["catch"](function(){p.skipWaiting()}))});p.addEventListener("activate",function(a){a.waitUntil(p.clients.claim())});var C,H=/^\/(.*)\/([gimuy]+)?$/,z=!1,y=!1;p.addEventListener("fetch",function(a){if("GET"===a.request.method&&!(a.request.url.match(/wp-admin/)||a.request.url.match(/preview=true/)||a.request.url.match(/\/wp-login\./))){if(h&&q)return a.respondWith(B().then(function(c){if(!c||
0===c.length)return k(a.request)["catch"](function(a){throw a;});if(C)try{clearTimeout(C)}catch(d){}C=setTimeout(E,500);var b=!1;if(c.forEach(function(d){if(!b&&d.match&&0!==d.match.length){var c=!0;d.match.forEach(function(b){if(c)switch(b.type){case "url":if(b.regex)(e=v(b.pattern))?(f=e.test(a.request.url),b.not?f&&(c=!1):f||(c=!1)):c=!1;else if(b.pattern instanceof Array){var d=!1;b.pattern.forEach(function(b){d||-1!==a.request.url.indexOf(b)&&(d=!0)});b.not?d&&(c=!1):d||(c=!1)}else f=-1!==a.request.url.indexOf(b.pattern),
b.not?f&&(c=!1):f||(c=!1);break;case "header":if(f=a.request.headers.get(b.name))if(b.regex){var e=v(b.pattern);e?(f=e.test(f),b.not?f&&(c=!1):f||(c=!1)):c=!1}else{var f=-1!==f.indexOf(b.pattern);b.not?f&&(c=!1):f||(c=!1)}else b.not||(c=!1)}});c&&(b=d)}}),!b)return k(a.request)["catch"](function(a){throw a;});switch(b.strategy){case "cache":return r(a.request).then(function(c){if(c&&b.cache.max_age&&c.headers.get("x-abtf-sw")<m()-b.cache.max_age&&(c=!1),c){var d=!0,e=b.cache.update_interval?!isNaN(parseInt(b.cache.update_interval))&&
parseInt(b.cache.update_interval):!1;if(e){var h=c.headers.get("x-abtf-sw");h&&parseInt(h)>m()-e&&(d=!1)}return d&&function(a,c){setTimeout(function(){var d;if(b.cache.head_update&&(d=function(){clients.matchAll().then(function(b){b.forEach(function(b){b.postMessage([2,a.url])})})}),b.cache.head_update)G(a,b.cache,c,d);else{var e=n(a,b.cache);d&&e.then(d)}},10)}(a.request.clone(),c.clone()),c}return n(a.request,b.cache,function(c,d){return b.offline?x(b.offline,c.clone()):d||k(a.request.clone())["catch"](function(a){throw a;
})})});case "event":return r(a.request).then(function(c){return c&&b.cache.max_age&&c.headers.get("x-abtf-sw")<m()-b.cache.max_age&&(c=!1),c||n(a.request,null,function(c,d){return b.offline?x(b.offline,c.clone()):d||k(a.request)["catch"](function(a){throw a;})})});default:return n(a.request,b.cache,function(c,g){return r(c).then(function(d){return d||(b.offline?x(b.offline,c.clone()):g||k(a.request)["catch"](function(a){throw a;}))})})}}));B()}});p.addEventListener("message",function(a){if(a&&a.data&&
a.data instanceof Array){if(1===a.data[0]){a.data[1]&&!isNaN(parseInt(a.data[1]))&&B(parseInt(a.data[1]));a.data[3]&&!isNaN(parseInt(a.data[3]))&&(w=parseInt(a.data[3]));var c="abtf:"+(a.data[2]?a.data[2]+":":"");c!==q&&(q=c);E()}if(2===a.data[0]&&a.data[1]){var b;"string"==typeof a.data[1]||a.data[1]instanceof Request?b=[a.data[1]]:a.data[1]instanceof Array&&(b=a.data[1]);b&&b.forEach(function(a){D(a)})}}})}(self,self.fetch,Cache);
