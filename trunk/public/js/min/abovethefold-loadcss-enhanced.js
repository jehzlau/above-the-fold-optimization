!function(e,n){var t=e.document;n[14]=function(e,i,o,r){function a(e){if(t.body)return e();setTimeout(function(){a(e)})}function d(){function e(){n[10](function(){l.media=o||"all",r&&r()})}c||(c=!0,l.addEventListener&&l.removeEventListener("load",d),void 0!==n[3]&&parseInt(n[3])>0?setTimeout(e,n[3]):e())}var f,l=t.createElement("link");if(i)f=i;else{var u=(t.body||t.getElementsByTagName("head")[0]).childNodes;f=u[u.length-1]}var s=t.styleSheets;l.rel="stylesheet",l.href=e,l.media="only x";var c=!1,v=function(e){if(!c){for(var n=l.href,t=s.length;t--&&!c;)if(s[t].href===n)return e();setTimeout(function(){v(e)})}};return l.addEventListener?l.addEventListener("load",d):l.onload=d,a(function(){f.parentNode.insertBefore(l,i?f:f.nextSibling),v(d)}),l}}(window,window.Abtf);