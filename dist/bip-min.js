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
 */(function(e){function n(e,t){return t||e}var t={preload:function(t,r){if(document.images){var i=0,s=t.length,o=r||{},u=document.getElementsByTagName("html")[0],a=o.className?o.className:"bg-preload",f=o.breakpoints||!1,l=o.pathLoader||n,c=o.callback||(e.console?console.dir:n),h={};s&&(u.className+=" "+a);function p(e){return function(){h[this.src]=e,--s||(u.className=u.className.replace(a,""),c(h))}}function d(e){return e.onload=p(!0),e.onerror=p(!1),e}var v=e.screen.availWidth||e.screen.width,m=v;if(f)while((m=f.pop()||"mobile")>v);while(i<s)d(new Image).src=l(m,t[i++])}}};e.bip=t})(window);