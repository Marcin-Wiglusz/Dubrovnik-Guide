!function(a,c){var b=a();a.fn.dropdownHover=function(d){return"ontouchstart" in document?this:(b=b.add(this.parent()),this.each(function(){function e(){k.parents(".navbar").find(".navbar-toggle").is(":visible")||(c.clearTimeout(n),c.clearTimeout(g),g=c.setTimeout(function(){b.find(":focus").blur(),o.instantlyCloseOthers===!0&&b.removeClass("open"),c.clearTimeout(g),k.attr("aria-expanded","true"),q.addClass("open"),k.trigger(j)},o.hoverDelay))}var n,g,k=a(this),q=k.parent(),p={delay:500,hoverDelay:0,instantlyCloseOthers:!0},f={delay:a(this).data("delay"),hoverDelay:a(this).data("hover-delay"),instantlyCloseOthers:a(this).data("close-others")},j="show.bs.dropdown",m="hide.bs.dropdown",o=a.extend(!0,{},p,d,f);q.hover(function(h){return q.hasClass("open")||k.is(h.target)?void e(h):!0},function(){c.clearTimeout(g),n=c.setTimeout(function(){k.attr("aria-expanded","false"),q.removeClass("open"),k.trigger(m)},o.delay)}),k.hover(function(h){return q.hasClass("open")||q.is(h.target)?void e(h):!0}),q.find(".dropdown-submenu").each(function(){var i,h=a(this);h.hover(function(){c.clearTimeout(i),h.children(".dropdown-menu").show(),h.siblings().children(".dropdown-menu").hide()},function(){var l=h.children(".dropdown-menu");i=c.setTimeout(function(){l.hide()},o.delay)})})}))},a(document).ready(function(){a('[data-hover="dropdown"]').dropdownHover()})}(jQuery,window);$(function(){$('a[href*="#"]:not([href="#"]):not([href="#topView"]):not([href="#lowerView"]):not([href="#oldDubrovnik"]):not([href="#pileStradun"]):not([href="#largeOnofrio"]):not([href="#stSaviour"]):not([href="#franciscanCaro"]):not([href="#sponzaPalace"]):not([href="#orlandoColumn"]):not([href="#luzaSquare"]):not([href="#stBlaise"]):not([href="#rectorsPalace"]):not([href="#cathedralCaro"]):not([href="#wallsCaro"]):not([href="#bokarMinceta"]):not([href="#ploceCaro"]):not([href="#revelinCaro"]):not([href="#johnFortress"])').click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var a=$(this.hash);a=a.length?a:$("[name="+this.hash.slice(1)+"]");if(a.length){$("html, body").animate({scrollTop:a.offset().top},1000);return false}}})});jQuery(document).ready(function(){var b=375;var a=300;jQuery(window).scroll(function(){if(jQuery(this).scrollTop()>b){jQuery(".back-to-top").fadeIn(a)}else{jQuery(".back-to-top").fadeOut(a)}});jQuery(".back-to-top").click(function(c){c.preventDefault();jQuery("html, body").animate({scrollTop:0},a);return false})});$(".carousel").on("touchstart",function(b){var a=b.originalEvent.touches[0].pageX;$(this).one("touchmove",function(d){var c=d.originalEvent.touches[0].pageX;if(Math.floor(a-c)>5){$(".carousel").carousel("next")}else{if(Math.floor(a-c)<-5){$(".carousel").carousel("prev")}}});$(".carousel").on("touchend",function(){$(this).off("touchmove")})});