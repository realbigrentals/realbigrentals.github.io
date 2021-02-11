(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
var wl;

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=480){cw++;}if(w>=768){cw++;}if(w>=960){cw++;}if(w>=1200){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}
ldsrcset=function(t){var e,r=document.querySelectorAll(t);for(e=0;e<r.length;e++){var c=r[e].getAttribute("data-srcset");r[e].setAttribute("srcset",c)}},ldsrc=function(t){var e=document.querySelector(t),r=e.getAttribute("data-src");e.setAttribute("src",r)};!function(){if("Promise"in window){var e,t,r=document,n=function(){return r.createElement("link")},o=new Set,a=n(),i=a.relList&&a.relList.supports&&a.relList.supports("prefetch"),s=location.href.replace(/#[^#]+$/,"");o.add(s);var c=function(e){var t=location,r="http:",n="https:";if(e&&e.href&&e.origin==t.origin&&[r,n].includes(e.protocol)&&(e.protocol!=r||t.protocol!=n)){var o=e.pathname;if(!(e.hash&&o+e.search==t.pathname+t.search||".html"!=o.substr(-5)&&".html"!=o.substr(-5)&&"/"!=o.substr(-1)))return!0}},u=function(e){var t=e.replace(/#[^#]+$/,"");if(!o.has(t)){if(i){var a=n();a.rel="prefetch",a.href=t,r.head.appendChild(a)}else{var s=new XMLHttpRequest;s.open("GET",t,s.withCredentials=!0),s.send()}o.add(t)}},f=function(e){return e.target.closest("a")},p=function(t){var r=t.relatedTarget;r&&f(t)==r.closest("a")||e&&(clearTimeout(e),e=void 0)},l={capture:!0,passive:!0};r.addEventListener("touchstart",function(e){t=performance.now();var r=f(e);c(r)&&u(r.href)},l),r.addEventListener("mouseover",function(r){if(!(performance.now()-t<1200)){var n=f(r);c(n)&&(n.addEventListener("mouseout",p,{passive:!0}),e=setTimeout(function(){u(n.href),e=void 0},80))}},l)}}();

$(function(){
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=1200){var a='data-src';var e=document.querySelector('.js5');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/f150-cutout-1200.png':'images/f150-cutout-600.png');
var a='data-src';var e=document.querySelector('.js7');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/external-content.duckduckgo-1200.png':'images/external-content.duckduckgo-600.png');
var a='data-src';var e=document.querySelector('.js9');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/rbr-vector-file-high-666.png':'images/rbr-vector-file-high-333.png');
var a='data-src';var e=document.querySelector('.js1 .slide0');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,'images/desert-1840453_1280-1200-1.jpg');
var e=document.querySelector('.js3');e.setAttribute('src',(dpi>1)?'images/external-content.duckduckgo-282.png':'images/external-content.duckduckgo-141.png');
var e=document.querySelector('.js4');e.setAttribute('src',(dpi>1)?'images/external-content.duckduckgo-1-184.png':'images/external-content.duckduckgo-1-92.png');}else if($(window).width()>=960){var a='data-src';var e=document.querySelector('.js5');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/f150-cutout-960.png':'images/f150-cutout-480.png');
var a='data-src';var e=document.querySelector('.js7');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/external-content.duckduckgo-960.png':'images/external-content.duckduckgo-480.png');
var a='data-src';var e=document.querySelector('.js9');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/rbr-vector-file-high-534.png':'images/rbr-vector-file-high-267.png');
var a='data-src';var e=document.querySelector('.js1 .slide0');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/desert-1840453_1280-1920-1.jpg':'images/desert-1840453_1280-960-1.jpg');
var e=document.querySelector('.js3');e.setAttribute('src',(dpi>1)?'images/external-content.duckduckgo-226.png':'images/external-content.duckduckgo-113.png');
var e=document.querySelector('.js4');e.setAttribute('src',(dpi>1)?'images/external-content.duckduckgo-1-148.png':'images/external-content.duckduckgo-1-74.png');}else if($(window).width()>=768){var a='data-src';var e=document.querySelector('.js5');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/f150-cutout-768.png':'images/f150-cutout-384.png');
var a='data-src';var e=document.querySelector('.js7');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/external-content.duckduckgo-768.png':'images/external-content.duckduckgo-384.png');
var a='data-src';var e=document.querySelector('.js9');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/rbr-vector-file-high-426.png':'images/rbr-vector-file-high-213.png');
var a='data-src';var e=document.querySelector('.js1 .slide0');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/desert-1840453_1280-1536-1.jpg':'images/desert-1840453_1280-768-1.jpg');
var e=document.querySelector('.js3');e.setAttribute('src',(dpi>1)?'images/external-content.duckduckgo-180.png':'images/external-content.duckduckgo-90.png');
var e=document.querySelector('.js4');e.setAttribute('src',(dpi>1)?'images/external-content.duckduckgo-1-118.png':'images/external-content.duckduckgo-1-59.png');}else if($(window).width()>=480){var a='data-src';var e=document.querySelector('.js5');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/f150-cutout-822.png':'images/f150-cutout-411.png');
var a='data-src';var e=document.querySelector('.js7');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/external-content.duckduckgo-776.png':'images/external-content.duckduckgo-388.png');
var a='data-src';var e=document.querySelector('.js9');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/rbr-vector-file-high-628.png':'images/rbr-vector-file-high-314.png');
var a='data-src';var e=document.querySelector('.js1 .slide0');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,'images/desert-1840453_1280-480-1.jpg');
var e=document.querySelector('.js3');e.setAttribute('src',(dpi>1)?'images/external-content.duckduckgo-300.png':'images/external-content.duckduckgo-150.png');
var e=document.querySelector('.js4');e.setAttribute('src',(dpi>1)?'images/external-content.duckduckgo-1-156-1.png':'images/external-content.duckduckgo-1-78-1.png');}else{var a='data-src';var e=document.querySelector('.js5');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/f150-cutout-548.png':'images/f150-cutout-274.png');
var a='data-src';var e=document.querySelector('.js7');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/external-content.duckduckgo-518.png':'images/external-content.duckduckgo-259.png');
var a='data-src';var e=document.querySelector('.js9');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/rbr-vector-file-high-418.png':'images/rbr-vector-file-high-209.png');
var a='data-src';var e=document.querySelector('.js1 .slide0');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/desert-1840453_1280-640-1.jpg':'images/desert-1840453_1280-320-1.jpg');
var e=document.querySelector('.js3');e.setAttribute('src',(dpi>1)?'images/external-content.duckduckgo-200.png':'images/external-content.duckduckgo-100.png');
var e=document.querySelector('.js4');e.setAttribute('src',(dpi>1)?'images/external-content.duckduckgo-1-104.png':'images/external-content.duckduckgo-1-52.png');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(i,e){$(e).click(function(){var t=e.hash.length>1?$('[name="'+e.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
ldsrc('.js5');ldsrcset('.js46 source');ldsrc('.js7');ldsrcset('.js47 source');ldsrc('.js9');ldsrcset('.js48 source');$('.js1 .slider').slick({lazyLoad: 'ondemand',slidesToShow: 1,slidesToScroll: 1,overflow: 'hidden',fade: true,slide: 'div',cssEase: 'linear',speed: 300,dots: false,arrows: false,infinite: true,autoplay: true,pauseOnHover: false,autoplaySpeed: 2500});wl=new woolite();
wl.init();
wl.addAnimation($('.js2')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js6')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js8')[0], "1.00s", "0.00s", 1, 100);
wl.start();

});