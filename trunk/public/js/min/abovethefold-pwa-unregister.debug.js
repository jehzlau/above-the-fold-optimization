Abtf[0](function(t,e){if("serviceWorker"in t.navigator&&e[13]){var r=function(){try{navigator.serviceWorker.getRegistrations().then(function(t){console.warn(t),t&&t.forEach(function(t){if("function"==typeof t.unregister){if(t.active&&t.active.scriptURL&&!t.active.scriptURL.match(/abtf-pwa/))return;console.warn("Abtf.pwa() ➤ unregister Service Worker",t),t.unregister()}})})}catch(t){}};t.addEventListener("load",function(){e[16]?e[16](r):r()})}});