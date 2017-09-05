/*
* Jquery plugin fixorphan
* Description: Fx orphans or widowed text by wrapping last 2 words of a string in a span and style with nowrap
* author: Harma Davtian
* Date: 12/6/2016
* */

(function($){

    $.fn.fixorphan = function(options){

        return this.each(function(){

            var $el = {};

            // properties
            $el.this = $(this);
            $el.text = $el.this.text();
            $el.charCount = $el.text.length;
            $el.words = $el.text.split(' ');
            $el.wordCount = $el.words.length;
            $el.options = (options !== undefined) ? options : {numLastWords:2};

            // testing
            //console.log("this: " + $el.this);
            //console.log("text: " + $el.text);
            //console.log("charCount: " + $el.charCount);
            //console.log("words: " + $el.words);
            //console.log("wordCount: " + $el.wordCount);
            //console.log("connectLastWordsCount: " + $el.options.numLastWords);

            var fixOrphan = function(){

                var newWords = $el.words;

                for (var i=0, l = $el.wordCount; i < l; i++) {

                    if (i == $el.wordCount - $el.options.numLastWords) {
                        newWords.splice(i, 0, '<span class="nowrap">')
                    };

                    if ( i == $el.wordCount ) {
                        newWords.push('</span>')
                    };

                };

                return newWords.join(' ');

            };

            $el.this.html( fixOrphan() );

        });//end each

    }//end $.fn

}(jQuery));