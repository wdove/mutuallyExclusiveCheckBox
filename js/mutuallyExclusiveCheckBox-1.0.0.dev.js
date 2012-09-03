;(function ($) {
	'use strict';

    var MutuallyExclusiveCheckBox = function (input, options) {
        var $input = $(input),
			keys = $.fn.mutuallyExclusiveCheckBox.Keys,        
			ar = keys[options.Key];
			
        if (ar === null) {
            ar = keys[options.Key] = [];
        }
        ar.push($input);

        $input.click(function() {
            var ar = $.fn.mutuallyExclusiveCheckBox.Keys[options.Key],
				i = 0,
				s = ar.length,
				b;
				
            for(;i < s; i++) {
                b = ar[i];
                if (b != $input) {
                    b.removeAttr("checked").trigger("change");
                }
            }
        });
    };

    $.fn.mutuallyExclusiveCheckBox = function(options) {
		options = $.extend({}, $.fn.mutuallyExclusiveCheckBox.defaults, options);
		return this.each(function () {
			new MutuallyExclusiveCheckBox($(this), options);			
		});		
	};

    $.fn.mutuallyExclusiveCheckBox.Keys = [];

    $.fn.mutuallyExclusiveCheckBox.defaults = {
		Key: null
	};

})(jQuery);