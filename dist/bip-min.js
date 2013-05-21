/**
 *  ______  _____              ________
 *  ___  /_ ___(_)________     ______(_)________
 *  __  __ \__  / ___  __ \    _____  / __  ___/
 *  _  /_/ /_  /  __  /_/ /___ ____  /  _(__  )
 *  /_.___/ /_/   _  .___/ _(_)___  /   /____/
 *                /_/          /___/
 *//**
 * BACKGROUND IMAGES PRELOADER
 * (c) 2013 - zipang - EIDOLON LABS
 * http://github.com/zipang/bip
 * MIT Licence
 */(function(e,t){function s(n){if(t.readyState=="complete")setTimeout(n);else{function r(){n.called||(n(),n.called=!0)}t.addEventListener("DOMContentLoaded",r,!1),e.addEventListener("load",r,!1)}}function o(e,n){if(typeof e=="string")return[e];if(e.length)return e;var i=[],s=[],o=0;for(var u in e)i.push(u," {background-image: url(",n(s[o++]=e[u]),");}\n");var a=t.createElement("STYLE"),f=t.createTextNode(i.join(""));return a.appendChild(f),r.appendChild(a),s}function u(e){return e}var n=t.getElementsByTagName("html")[0],r=t.getElementsByTagName("head")[0],i=e.screen.width;e.bip={preload:function(r,a){if(t.images){var f=a||{},l=f.className!==undefined?f.className:"bg-preload",c,h=f.breakpoints||[i],p=f.callback||(e.console?console.dir:u);while((c=h.pop()||"mobile")>i);function d(e){return(f.pathLoader||u)(e,c)}var v=o(r,d),m=v.length,g={};m&&l&&(n.className+=" "+l);function y(){l&&(n.className=n.className.replace(l,"")),p(g)}function b(e){return function(){g[this.src]=e,--m||s(y)}}function w(e){return e.onload=b(!0),e.onerror=b(!1),e}while(v.length)w(new Image).src=d(v.pop())}}}})(window,document);