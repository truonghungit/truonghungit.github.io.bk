
/*
Plugin: jQuery Parallax
Version 1.1.3
Author: Ian Lunn
Twitter: @IanLunn
Author URL: http://www.ianlunn.co.uk/
Plugin URL: http://www.ianlunn.co.uk/plugins/jquery-parallax/

Dual licensed under the MIT and GPL licenses:
http://www.opensource.org/licenses/mit-license.php
http://www.gnu.org/licenses/gpl.html
*/

jQuery(function($) {

    $.fn.parallax = function(xpos, speed) {
        var firstTop, pos;
        return this.each(function(idx, value) {

            var $this = $(value);
            if (arguments.length < 1 || xpos === null) {
                xpos = "50%";
            }
            if (arguments.length < 2 || speed === null) {
                speed = 0.4;
            }

            return ({
                update: function() {
                    firstTop = $this.offset().top;
                    pos = $(window).scrollTop();
                    $this.css('backgroundPosition', xpos + " " + Math.round((firstTop - pos) * speed) + "px");
                },
                init: function() {
                    var self = this;
                    self.update();
                    $(window).on('scroll', self.update);
                }
            }.init());
        });

    };
});