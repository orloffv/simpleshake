(function($){

    $.fn.extend({

        simpleShake: function(options) {

            var defaults = {
                amplitude:  20,
                iterations: 3,
                speed:      60
            };

            var options = $.extend(defaults, options);

            return this.each(function(){

                var a = options.amplitude;

                for (var i = 0; i < (options.iterations * 2); i++) {
                    $(this).animate({
                            'margin-left': "+=" + ( a = -a ) + 'px'
                        },
                        options.speed
                    );
                }

            });
        }

    });

})(jQuery);
