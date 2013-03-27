// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
$.debounce = function(fn, delay) {
    var delay = delay || 250;
    return function() {
        var ctx = this, args = arguments;
        clearTimeout(fn.hnd);
        fn.hnd = setTimeout(function() {
            fn.apply(ctx, args);
        }, delay);
    };
};


/**
 * Copyright (c) 2007-2012 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * @author Ariel Flesler
 * @version 1.4.5 BETA
 */
(function($){var h=$.scrollTo=function(a,b,c){$(window).scrollTo(a,b,c)};h.defaults={axis:'xy',duration:parseFloat($.fn.jquery)>=1.3?0:1,limit:true};h.window=function(a){return $(window)._scrollable()};$.fn._scrollable=function(){return this.map(function(){var a=this,isWin=!a.nodeName||$.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!isWin)return a;var b=(a.contentWindow||a).document||a.ownerDocument||a;return/webkit/i.test(navigator.userAgent)||b.compatMode=='BackCompat'?b.body:b.documentElement})};$.fn.scrollTo=function(e,f,g){if(typeof f=='object'){g=f;f=0}if(typeof g=='function')g={onAfter:g};if(e=='max')e=9e9;g=$.extend({},h.defaults,g);f=f||g.duration;g.queue=g.queue&&g.axis.length>1;if(g.queue)f/=2;g.offset=both(g.offset);g.over=both(g.over);return this._scrollable().each(function(){if(e==null)return;var d=this,$elem=$(d),targ=e,toff,attr={},win=$elem.is('html,body');switch(typeof targ){case'number':case'string':if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(targ)){targ=both(targ);break}targ=$(targ,this);if(!targ.length)return;case'object':if(targ.is||targ.style)toff=(targ=$(targ)).offset()}$.each(g.axis.split(''),function(i,a){var b=a=='x'?'Left':'Top',pos=b.toLowerCase(),key='scroll'+b,old=d[key],max=h.max(d,a);if(toff){attr[key]=toff[pos]+(win?0:old-$elem.offset()[pos]);if(g.margin){attr[key]-=parseInt(targ.css('margin'+b))||0;attr[key]-=parseInt(targ.css('border'+b+'Width'))||0}attr[key]+=g.offset[pos]||0;if(g.over[pos])attr[key]+=targ[a=='x'?'width':'height']()*g.over[pos]}else{var c=targ[pos];attr[key]=c.slice&&c.slice(-1)=='%'?parseFloat(c)/100*max:c}if(g.limit&&/^\d+$/.test(attr[key]))attr[key]=attr[key]<=0?0:Math.min(attr[key],max);if(!i&&g.queue){if(old!=attr[key])animate(g.onAfterFirst);delete attr[key]}});animate(g.onAfter);function animate(a){$elem.animate(attr,f,g.easing,a&&function(){a.call(this,e,g)})}}).end()};h.max=function(a,b){var c=b=='x'?'Width':'Height',scroll='scroll'+c;if(!$(a).is('html,body'))return a[scroll]-$(a)[c.toLowerCase()]();var d='client'+c,html=a.ownerDocument.documentElement,body=a.ownerDocument.body;return Math.max(html[scroll],body[scroll])-Math.min(html[d],body[d])};function both(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);

/**
 * Copyright (c) 2007-2010 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * @author Ariel Flesler
 * @version 1.2.8b
 */
(function($){var g=location.href.replace(/#.*/,'');var h=$.localScroll=function(a){$('body').localScroll(a)};h.defaults={duration:1000,axis:'y',event:'click',stop:true,target:window,reset:true};h.hash=function(a){if(location.hash){a=$.extend({},h.defaults,a);a.hash=false;if(a.reset){var d=a.duration;delete a.duration;$(a.target).scrollTo(0,a);a.duration=d}scroll(0,location,a)}};$.fn.localScroll=function(b){b=$.extend({},h.defaults,b);return b.lazy?this.bind(b.event,function(e){var a=$([e.target,e.target.parentNode]).filter(filter)[0];if(a)scroll(e,a,b)}):this.find('a,area').filter(filter).bind(b.event,function(e){scroll(e,this,b)}).end().end();function filter(){return!!this.href&&!!this.hash&&this.href.replace(this.hash,'')==g&&(!b.filter||$(this).is(b.filter))}};function scroll(e,a,b){var c=a.hash.slice(1),elem=document.getElementById(c)||document.getElementsByName(c)[0];if(!elem)return;if(e)e.preventDefault();var d=$(b.target);if(b.lock&&d.is(':animated')||b.onBefore&&b.onBefore(e,elem,d)===false)return;if(b.stop)d._scrollable().stop(true);if(b.hash){var f=elem.id==c?'id':'name',$a=$('<a> </a>').attr(f,c).css({position:'absolute',top:$(window).scrollTop(),left:$(window).scrollLeft()});elem[f]='';$('body').prepend($a);location=a.hash;$a.remove();elem[f]=c}d.scrollTo(elem,b).trigger('notify.serialScroll',[elem])}})(jQuery);

/**
 * hijs - JavaScript Syntax Highlighting
 * @author Alexis Sellier
 * https://github.com/cloudhead/hijs
 */
(function(e){function c(e){return e.replace(/</g,"&lt;").replace(/>/g,"&gt;")}function h(e,t){return o[t=e.split("").map(function(e){return e.charCodeAt(0)>127?e:String.fromCharCode(e.charCodeAt(0)+10240)}).join("")]=e,t}function p(e){return e in o?o[e]:e.trim().split("").map(function(e){return e.charCodeAt(0)-10240>127?e:String.fromCharCode(e.charCodeAt(0)-10240)}).join("")}var t=e||"code",n="var function if else for while break switch case do new null in with void continue delete return this true false throw catch typeof with instanceof".split(" "),r="eval window document undefined NaN Infinity parseInt parseFloat encodeURI decodeURI encodeURIComponent decodeURIComponent".split(" "),i=[["comment",/(\/\*(?:[^*\n]|\*+[^\/*])*\*+\/)/g],["comment",/(\/\/[^\n]*)/g],["string",/("(?:(?!")[^\\\n]|\\.)*"|'(?:(?!')[^\\\n]|\\.)*')/g],["regexp",/(\/.+\/[mgi]*)(?!\s*\w)/g],["class",/\b([A-Z][a-zA-Z]+)\b/g],["number",/\b([0-9]+(?:\.[0-9]+)?)\b/g],["keyword",new RegExp("\\b("+n.join("|")+")\\b","g")],["special",new RegExp("\\b("+r.join("|")+")\\b","g")]],s,o={};/^[a-z]+$/.test(t)?s=document.getElementsByTagName(t):/^\.[\w-]+$/.test(t)?s=document.getElementsByClassName(t.slice(1)):document.querySelectorAll?s=document.querySelectorAll(t):s=[];for(var u=0,a;u<s.length;u++){a=s[u].childNodes;for(var f=0,l;f<a.length;f++)code=a[f],code.length>=0&&(/^\$\s/.test(code.nodeValue.trim())||i.forEach(function(e){var t=e[0],n=e[1];code.nodeValue=code.nodeValue.replace(n,function(e,n){return"«"+h(t)+"·"+h(n)+"·"+h(t)+"»"})}))}for(var u=0;u<s.length;u++)s[u].innerHTML=s[u].innerHTML.replace(/\u00ab(.+?)\u00b7(.+?)\u00b7\1\u00bb/g,function(e,t,n){return n=n.replace(/\u00ab[^\u00b7]+\u00b7/g,"").replace(/\u00b7[^\u00bb]+\u00bb/g,""),'<span class="'+p(t)+'">'+c(p(n))+"</span>"})})(window.hijs);
