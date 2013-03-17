/**
 *  ______  _____              ________
 *  ___  /_ ___(_)________     ______(_)________
 *  __  __ \__  / ___  __ \    _____  / __  ___/
 *  _  /_/ /_  /  __  /_/ /___ ____  /  _(__  )
 *  /_.___/ /_/   _  .___/ _(_)___  /   /____/
 *                /_/          /___/

 * BACKGROUND IMAGE PRELOADER
 * (c) 2013 - zipang - EIDOLON LABS
 * http://github.com/zipang/bip
 * MIT Licence
 */(function(e){function n(e,t){return t||e}function r(e){if(document.readyState==="complete")setTimeout(e);else{function t(){e.called=e.called||e()||!0}document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)}}var t={preload:function(t,i){if(document.images){var s=0,o=t.length,u=i||{},a=document.getElementsByTagName("html")[0],f=u.className?u.className:"bg-preload",l=u.breakpoints||!1,c=u.pathLoader||n,h=u.callback||(e.console?console.dir:n),p={};o&&(a.className+=" "+f);function d(){a.className=a.className.replace(f,""),h(p)}function v(e){return function(){p[this.src]=e,--o||r(d)}}function m(e){return e.onload=v(!0),e.onerror=v(!1),e}var g=e.screen.availWidth||e.screen.width,y=g;if(l)while((y=l.pop()||"mobile")>g);while(s<o)m(new Image).src=c(y,t[s++])}}};e.bip=t})(window);