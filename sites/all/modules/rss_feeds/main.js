jQuery.fn.extend({
    topMouseover: function(self) {
        this.on('mouseover',function() {
            self.opacity.stop().animate({opacity:"1"},300);
            self.button.stop().animate({opacity:"1"},300);
        });
    },
    topMouseout: function(self) {
        this.on('mouseout',function() {
            self.opacity.stop().animate({opacity:"0"},300);
            self.button.stop().animate({opacity:"0.4"},300);
        });
    },
    wScroll: function(g) {
        if(g == 0) this.removeClass("no-count");
        if(!this.hasClass("no-count")){
            if(g > 500 && this.is(":hidden")){
                this.addClass("visible");
                this.css("cursor","pointer");
                this.fadeIn(500);
                this.click(function(){
                    jQuery("body, html").animate({scrollTop:0},600);
                    this.fadeOut(300);
                    this.addClass("no-count");
                });
            }
            if(g < 200 && this.hasClass("visible")){
                this.removeClass("visible");
                this.fadeOut(300);
            }
        }else{
            this.unbind("click");
        }
    }
});




function toTopBtn(toTop, opacity, btn) {
    this.toTopBtn = jQuery(toTop);
    this.opacity = jQuery(opacity);
    this.button = jQuery(btn);
    this.windowScroll();
    this._init();
    return this;
}

toTopBtn.prototype = {
    _init: function () {
        var self = this;
        this.toTopBtn.topMouseover(self);
        this.toTopBtn.topMouseout(self);
    },
    windowScroll: function() {
        var g = jQuery(window).scrollTop();
        this.toTopBtn.wScroll(g);
    }
}
$(document).ready(function() {
    upButton = new toTopBtn(".toTopWrapper",".toTopOpacity",".toTopBtn");

    jQuery(window).scroll(function(){
        upButton.windowScroll();
    });
});