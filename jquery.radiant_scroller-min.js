(function(e){e.radiantScroller=function(t,n){var r=e(t);r.vars=e.extend({},e.radiantScroller.defaults,n);r.data("radiantscroller",r);r.animating=false;var i=r.find(".scroller-el"),s=i.size(),o=r.vars.elementWidth+r.vars.elementMargin,u=Math.ceil(s/r.vars.rows),a=0;r.width(o*u-r.vars.elementMargin);do e(i.slice(0,u)).wrapAll('<div class="radiant_scroller_row" />');while((i=i.slice(u)).length>0);r.wrap('<div class="radiant_scroller"></div>').wrap('<div class="radiant_scroller_wrapper" />');var f=r.parent(".radiant_scroller_wrapper");var l=f.parent(".radiant_scroller");f.css("max-width",r.vars.cols*o-r.vars.elementMargin+"px");var c=e('<div class="radiant-navigation" />').insertAfter(f);var h=c.append(e('<div class="radiant-prev">prev</div>'));var p=c.append(e('<div class="radiant-next">next</div>'));r.calculateVisibleElements=function(){a=Math.floor((f.width()+r.vars.elementMargin)/o)};r.moveElements=function(e,t,n){if(!r.animating){r.animating=true;var i=0;if(typeof t==="undefined"){i=a*o}else{i=a*o*t}var s=0;if(e==="left"){s=-i}else{s=i}f.animate({scrollLeft:f.scrollLeft()+s},r.vars.animateDuration,r.vars.easingType,function(){r.animating=false});f.current_page.removeClass("current-page");if(typeof n==="undefined"){if(e==="right"){if(f.current_page.next().size()>0)f.current_page=f.current_page.next()}else{if(f.current_page.prev().size()>0)f.current_page=f.current_page.prev()}}else{f.current_page=n}f.current_page.addClass("current-page")}};r.createPagination=function(){if(typeof this.visible_els==="undefined"||this.visible_els!==a){this.visible_els=a;var t=Math.ceil(u/a);if(l.find(".radiant-pagination").size()>0)l.find(".radiant-pagination").remove();var n=e('<div class="radiant-pagination" />').insertAfter(f);for(var r=0;r<t;r++){n.append('<div class="radiant-page" data-page="'+(r+1)+'">page</div>')}if(typeof f.current_page==="undefined"){f.current_page=n.find(".radiant-page").first()}else{var i=Math.ceil(f.scrollLeft()/(a*o));f.current_page=e(n.find(".radiant-page").get(i))}f.current_page.addClass("current-page")}};e(window).bindWithDelay("resize",function(){r.calculateVisibleElements();r.createPagination()},500,true);c.on("click",".radiant-next",function(){r.moveElements("right",1)});c.on("click",".radiant-prev",function(){r.moveElements("left",1)});if(r.vars.useMouseWheel){f.on("mousewheel",function(e){e.preventDefault();if(e.deltaY>0){r.moveElements("right")}else{r.moveElements("left")}})}l.on("click",".radiant-page",function(){var t=e(this);if(f.current_page.get(0)!==t.get(0)){var n=f.current_page.data("page");var i=t.data("page");if(n>i){r.moveElements("left",n-i,t)}else{r.moveElements("right",i-n,t)}}});r.calculateVisibleElements();r.createPagination()};e.radiantScroller.defaults={cols:2,elementWidth:200,elementMargin:10,easingType:"swing",animateDuration:700,rows:2,useMouseWheel:false};e.fn.radiantScroller=function(t){if(t===undefined)t={};if(typeof t==="object"){new e.radiantScroller(this,t)}else{var n=e(this).data("radiantscroller");switch(t){case"next":n.moveElements("right");break;case"prev":n.moveElements("left");break}}return this}})(jQuery);(function(e){e.fn.bindWithDelay=function(t,n,r,i,s){if(e.isFunction(n)){s=i;i=r;r=n;n=undefined}r.guid=r.guid||e.guid&&e.guid++;return this.each(function(){function u(){var t=e.extend(true,{},arguments[0]);var n=this;var u=function(){o=null;r.apply(n,[t])};if(!s){clearTimeout(o);o=null}if(!o){o=setTimeout(u,i)}}var o=null;u.guid=r.guid;e(this).bind(t,n,u)})}})(jQuery)