(function ($) {

    $.fn.formtoCSS = function (options) {

        // This is the easiest way to have default options.
        var opts = $.extend({
            // These are the defaults.
            target: '', // target effected selector, single or multiple selector(s)
            targetShow: false, // show target selector in css result ex: #mytargetdiv
            output: '', // output CSS output results, single or multiple selector(s)
            adcss: '', // // add more css from selector hidden textarea
            beautify: true,
            prefix: true, // css3 webkit, moz
            header: true // add css to header in realtime
        }, options);

        var elem = $(this);
        var elemSelector = elem.selector;

        $(elemSelector + " input").on("change keyup paste", function () {
            FormToJSON();
        })
        $(elemSelector + " input[type=range]").on("mousemove", function () {
            FormToJSON();
        });

        FormToJSON(elem);
        //FormToJSON(elem); work even if elem not there?

        //if (opts.onload === true) {
        //  FormToJSON();
        //}

        if (opts.header === true) {
            return $('<style id="formtocss-styles">').prop("type", "text/css").appendTo("head");
        }

        /* FUNCTION FORM TO JSON jquery.serializeJSON plugin */
        /* https://github.com/marioizquierdo/jquery.serializeJSON */
        function FormToJSON(obj) {

            var ftcssfunction = function (val, inputName) {
                if (val === "") return null; // parse empty strings as nulls
                //if (val === "1")  return val+'px'; // parse 0 as null

                //if (!isNaN(val)) return val + 'px'; // parse 0 as null
                //return val;

                if (val === '0px') return 0; // MARCHE PAS

                //console.log(inputName)
                //console.log(val)

                return val;

            }

            var obj = elem.serializeJSON({
                parseWithFunction: ftcssfunction,
                customTypes: {
                    px: function (str) { // value is always a string
                        return str + "px";
                    },
                    em: function (str) { // value is always a string
                        return str + "em";
                    },
                    percent: function (str) { // value is always a string
                        return str + "%";
                    },
                    important: function (str) { // value is always a string
                        return str + " !important";
                    },
                    string: function (str) { // all strings will now end with " override"
                        return str + " override";
                    }
                }

            });

            console.log(obj);
            console.log(JSON.stringify(obj));


            if (opts.target) {

                Object.keys(obj).forEach(function (key) {
                    //console.log(key + ': ' + obj[key]);
                    //console.log(key.replace(key, "#mainID "+ key));  
                    //key = key.replace(/\|/g, "|#mainID "+ key);
                    var newkey = opts.target + " " + key;
                    obj[newkey] = obj[key];
                    delete obj[key];
                });

            }

            //var targetbody = opts.target + " body";

            // GC .replace Object to CSS
            var css;
            css = JSON.stringify(obj);
            css = css.slice(1, -1);
            css = css.replace(/"/g, "")
                .replace(/,/g, ";")
                .replace(/@/g, ":") // special replace @ for :
                .replace(/\|/g, "," + opts.target + " ") // special replace | for ,
                .replace(opts.target + " body", "body") // special replace for body ,
                .replace(/:{/g, "{")
                .replace(/};/g, "}")
                // https://regex101.com/r/eE6cF9/9
                .replace(/([0-9]+)([;]{1})/g, "$1,"); // Fix rgb rgba color


            if (opts.addcss) {
                var addcss = $(opts.addcss).val();
                css = addcss + css;
            }

            if (opts.prefix === true) {
                css = cssParser(css);
            }
            if (opts.beautify === true) {
                css = beautifyCSS(css);
            }

            var reg = '';


            reg = new RegExp(opts.target, "g");
            if (opts.target && (opts.targetShow == false)) {

                cssResult = css.replace(reg, "");
            } else if (opts.target && (opts.targetShow == true)) {
                cssResult = css;
            } else {
                cssResult = css;
            }

            //alert(opts.target);
            //cssResult = css.replace(/\#mainID /g, "");

            $(opts.output).html(cssResult); // .val .text .html ALL WORKING?

            //var el = opts.target;
            //if (el[0].value !== undefined) {
            //  $(opts.target).val(css);
            //} else {
            //  $(opts.target).html(css);
            //}

            if (opts.header === true) {

                var style_tag = '<style id="formtocss-styles" type="text/css">' + css + '</style>';
                $('#formtocss-styles').replaceWith(style_tag);
            }

        };

        /* FormToJSON END */


        function beautifyCSS(css) {

            css = cssbeautify(css, {
                //indent: '    ',
                //openbrace: 'end-of-line',
                //autosemicolon: true
            });

            return css;

        }

        function cssParser(css) {
            var parser = new CSSParser();

            var sheet = parser.parse(css, false, true);
            console.log(sheet.cssText());

            if (sheet)
                return sheet.cssText();
            else
                return ""
        }

    };

}(jQuery));
