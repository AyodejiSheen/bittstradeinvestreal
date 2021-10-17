!function(root, factory) {
    "function" == typeof define && define.amd ? // AMD. Register as an anonymous module unless amdModuleId is set
    define([], function() {
        return root.svg4everybody = factory();
    }) : "object" == typeof module && module.exports ? // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory() : root.svg4everybody = factory();
}(this, function() {
    /*! svg4everybody v2.1.9 | github.com/jonathantneal/svg4everybody */
    function embed(parent, svg, target) {
        // if the target exists
        if (target) {
            // create a document fragment to hold the contents of the target
            var fragment = document.createDocumentFragment(), viewBox = !svg.hasAttribute("viewBox") && target.getAttribute("viewBox");
            // conditionally set the viewBox on the svg
            viewBox && svg.setAttribute("viewBox", viewBox);
            // copy the contents of the clone into the fragment
            for (// clone the target
            var clone = target.cloneNode(!0); clone.childNodes.length; ) {
                fragment.appendChild(clone.firstChild);
            }
            // append the fragment into the svg
            parent.appendChild(fragment);
        }
    }
    function loadreadystatechange(xhr) {
        // listen to changes in the request
        xhr.onreadystatechange = function() {
            // if the request is ready
            if (4 === xhr.readyState) {
                // get the cached html document
                var cachedDocument = xhr._cachedDocument;
                // ensure the cached html document based on the xhr response
                cachedDocument || (cachedDocument = xhr._cachedDocument = document.implementation.createHTMLDocument(""), 
                cachedDocument.body.innerHTML = xhr.responseText, xhr._cachedTarget = {}), // clear the xhr embeds list and embed each item
                xhr._embeds.splice(0).map(function(item) {
                    // get the cached target
                    var target = xhr._cachedTarget[item.id];
                    // ensure the cached target
                    target || (target = xhr._cachedTarget[item.id] = cachedDocument.getElementById(item.id)), 
                    // embed the target into the svg
                    embed(item.parent, item.svg, target);
                });
            }
        }, // test the ready state change immediately
        xhr.onreadystatechange();
    }
    function svg4everybody(rawopts) {
        function oninterval() {
            // while the index exists in the live <use> collection
            for (// get the cached <use> index
            var index = 0; index < uses.length; ) {
                // get the current <use>
                var use = uses[index], parent = use.parentNode, svg = getSVGAncestor(parent), src = use.getAttribute("xlink:href") || use.getAttribute("href");
                if (!src && opts.attributeName && (src = use.getAttribute(opts.attributeName)), 
                svg && src) {
                    // if running with legacy support
                    if (nosvg) {
                        // create a new fallback image
                        var img = document.createElement("img");
                        // force display in older IE
                        img.style.cssText = "display:inline-block;height:100%;width:100%", // set the fallback size using the svg size
                        img.setAttribute("width", svg.getAttribute("width") || svg.clientWidth), img.setAttribute("height", svg.getAttribute("height") || svg.clientHeight), 
                        // set the fallback src
                        img.src = fallback(src, svg, use), // replace the <use> with the fallback image
                        parent.replaceChild(img, use);
                    } else {
                        if (polyfill) {
                            if (!opts.validate || opts.validate(src, svg, use)) {
                                // remove the <use> element
                                parent.removeChild(use);
                                // parse the src and get the url and id
                                var srcSplit = src.split("#"), url = srcSplit.shift(), id = srcSplit.join("#");
                                // if the link is external
                                if (url.length) {
                                    // get the cached xhr request
                                    var xhr = requests[url];
                                    // ensure the xhr request exists
                                    xhr || (xhr = requests[url] = new XMLHttpRequest(), xhr.open("GET", url), xhr.send(), 
                                    xhr._embeds = []), // add the svg and id as an item to the xhr embeds list
                                    xhr._embeds.push({
                                        parent: parent,
                                        svg: svg,
                                        id: id
                                    }), // prepare the xhr ready state change event
                                    loadreadystatechange(xhr);
                                } else {
                                    // embed the local id into the svg
                                    embed(parent, svg, document.getElementById(id));
                                }
                            } else {
                                // increase the index when the previous value was not "valid"
                                ++index, ++numberOfSvgUseElementsToBypass;
                            }
                        }
                    }
                } else {
                    // increase the index when the previous value was not "valid"
                    ++index;
                }
            }
            // continue the interval
            (!uses.length || uses.length - numberOfSvgUseElementsToBypass > 0) && requestAnimationFrame(oninterval, 67);
        }
        var nosvg, fallback, opts = Object(rawopts);
        // configure the fallback method
        fallback = opts.fallback || function(src) {
            return src.replace(/\?[^#]+/, "").replace("#", ".").replace(/^\./, "") + ".png" + (/\?[^#]+/.exec(src) || [ "" ])[0];
        }, // set whether to shiv <svg> and <use> elements and use image fallbacks
        nosvg = "nosvg" in opts ? opts.nosvg : /\bMSIE [1-8]\b/.test(navigator.userAgent), 
        // conditionally shiv <svg> and <use>
        nosvg && (document.createElement("svg"), document.createElement("use"));
        // set whether the polyfill will be activated or not
        var polyfill, olderIEUA = /\bMSIE [1-8]\.0\b/, newerIEUA = /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/, webkitUA = /\bAppleWebKit\/(\d+)\b/, olderEdgeUA = /\bEdge\/12\.(\d+)\b/, edgeUA = /\bEdge\/.(\d+)\b/, inIframe = window.top !== window.self;
        polyfill = "polyfill" in opts ? opts.polyfill : olderIEUA.test(navigator.userAgent) || newerIEUA.test(navigator.userAgent) || (navigator.userAgent.match(olderEdgeUA) || [])[1] < 10547 || (navigator.userAgent.match(webkitUA) || [])[1] < 537 || edgeUA.test(navigator.userAgent) && inIframe;
        // create xhr requests object
        var requests = {}, requestAnimationFrame = window.requestAnimationFrame || setTimeout, uses = document.getElementsByTagName("use"), numberOfSvgUseElementsToBypass = 0;
        // conditionally start the interval if the polyfill is active
        polyfill && oninterval();
    }
    function getSVGAncestor(node) {
        for (var svg = node; "svg" !== svg.nodeName.toLowerCase() && (svg = svg.parentNode); ) {}
        return svg;
    }
    return svg4everybody;
});
/*!
 * jQuery Placeholder Plugin v2.3.1
 * https://github.com/mathiasbynens/jquery-placeholder
 *
 * Copyright 2011, 2015 Mathias Bynens
 * Released under the MIT license
 */
(function(factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery'], factory);
    } else if (typeof module === 'object' && module.exports) {
        factory(require('jquery'));
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function($) {

    /****
     * Allows plugin behavior simulation in modern browsers for easier debugging. 
     * When setting to true, use attribute "placeholder-x" rather than the usual "placeholder" in your inputs/textareas 
     * i.e. <input type="text" placeholder-x="my placeholder text" />
     */
    var debugMode = false; 

    // Opera Mini v7 doesn't support placeholder although its DOM seems to indicate so
    var isOperaMini = Object.prototype.toString.call(window.operamini) === '[object OperaMini]';
    var isInputSupported = 'placeholder' in document.createElement('input') && !isOperaMini && !debugMode;
    var isTextareaSupported = 'placeholder' in document.createElement('textarea') && !isOperaMini && !debugMode;
    var valHooks = $.valHooks;
    var propHooks = $.propHooks;
    var hooks;
    var placeholder;
    var settings = {};

    if (isInputSupported && isTextareaSupported) {

        placeholder = $.fn.placeholder = function() {
            return this;
        };

        placeholder.input = true;
        placeholder.textarea = true;

    } else {

        placeholder = $.fn.placeholder = function(options) {

            var defaults = {customClass: 'placeholder'};
            settings = $.extend({}, defaults, options);

            return this.filter((isInputSupported ? 'textarea' : ':input') + '[' + (debugMode ? 'placeholder-x' : 'placeholder') + ']')
                .not('.'+settings.customClass)
                .not(':radio, :checkbox, [type=hidden]')
                .bind({
                    'focus.placeholder': clearPlaceholder,
                    'blur.placeholder': setPlaceholder
                })
                .data('placeholder-enabled', true)
                .trigger('blur.placeholder');
        };

        placeholder.input = isInputSupported;
        placeholder.textarea = isTextareaSupported;

        hooks = {
            'get': function(element) {

                var $element = $(element);
                var $passwordInput = $element.data('placeholder-password');

                if ($passwordInput) {
                    return $passwordInput[0].value;
                }

                return $element.data('placeholder-enabled') && $element.hasClass(settings.customClass) ? '' : element.value;
            },
            'set': function(element, value) {

                var $element = $(element);
                var $replacement;
                var $passwordInput;

                if (value !== '') {

                    $replacement = $element.data('placeholder-textinput');
                    $passwordInput = $element.data('placeholder-password');

                    if ($replacement) {
                        clearPlaceholder.call($replacement[0], true, value) || (element.value = value);
                        $replacement[0].value = value;

                    } else if ($passwordInput) {
                        clearPlaceholder.call(element, true, value) || ($passwordInput[0].value = value);
                        element.value = value;
                    }
                }

                if (!$element.data('placeholder-enabled')) {
                    element.value = value;
                    return $element;
                }

                if (value === '') {
                    
                    element.value = value;
                    
                    // Setting the placeholder causes problems if the element continues to have focus.
                    if (element != safeActiveElement()) {
                        // We can't use `triggerHandler` here because of dummy text/password inputs :(
                        setPlaceholder.call(element);
                    }

                } else {
                    
                    if ($element.hasClass(settings.customClass)) {
                        clearPlaceholder.call(element);
                    }

                    element.value = value;
                }
                // `set` can not return `undefined`; see http://jsapi.info/jquery/1.7.1/val#L2363
                return $element;
            }
        };

        if (!isInputSupported) {
            valHooks.input = hooks;
            propHooks.value = hooks;
        }

        if (!isTextareaSupported) {
            valHooks.textarea = hooks;
            propHooks.value = hooks;
        }

        $(function() {
            // Look for forms
            $(document).delegate('form', 'submit.placeholder', function() {
                
                // Clear the placeholder values so they don't get submitted
                var $inputs = $('.'+settings.customClass, this).each(function() {
                    clearPlaceholder.call(this, true, '');
                });

                setTimeout(function() {
                    $inputs.each(setPlaceholder);
                }, 10);
            });
        });

        // Clear placeholder values upon page reload
        $(window).bind('beforeunload.placeholder', function() {

            var clearPlaceholders = true;

            try {
                // Prevent IE javascript:void(0) anchors from causing cleared values
                if (document.activeElement.toString() === 'javascript:void(0)') {
                    clearPlaceholders = false;
                }
            } catch (exception) { }

            if (clearPlaceholders) {
                $('.'+settings.customClass).each(function() {
                    this.value = '';
                });
            }
        });
    }

    function args(elem) {
        // Return an object of element attributes
        var newAttrs = {};
        var rinlinejQuery = /^jQuery\d+$/;

        $.each(elem.attributes, function(i, attr) {
            if (attr.specified && !rinlinejQuery.test(attr.name)) {
                newAttrs[attr.name] = attr.value;
            }
        });

        return newAttrs;
    }

    function clearPlaceholder(event, value) {
        
        var input = this;
        var $input = $(this);
        
        if (input.value === $input.attr((debugMode ? 'placeholder-x' : 'placeholder')) && $input.hasClass(settings.customClass)) {
            
            input.value = '';
            $input.removeClass(settings.customClass);

            if ($input.data('placeholder-password')) {

                $input = $input.hide().nextAll('input[type="password"]:first').show().attr('id', $input.removeAttr('id').data('placeholder-id'));
                
                // If `clearPlaceholder` was called from `$.valHooks.input.set`
                if (event === true) {
                    $input[0].value = value;

                    return value;
                }

                $input.focus();

            } else {
                input == safeActiveElement() && input.select();
            }
        }
    }

    function setPlaceholder(event) {
        var $replacement;
        var input = this;
        var $input = $(this);
        var id = input.id;

        // If the placeholder is activated, triggering blur event (`$input.trigger('blur')`) should do nothing.
        if (event && event.type === 'blur' && $input.hasClass(settings.customClass)) {
            return;
        }

        if (input.value === '') {
            if (input.type === 'password') {
                if (!$input.data('placeholder-textinput')) {
                    
                    try {
                        $replacement = $input.clone().prop({ 'type': 'text' });
                    } catch(e) {
                        $replacement = $('<input>').attr($.extend(args(this), { 'type': 'text' }));
                    }

                    $replacement
                        .removeAttr('name')
                        .data({
                            'placeholder-enabled': true,
                            'placeholder-password': $input,
                            'placeholder-id': id
                        })
                        .bind('focus.placeholder', clearPlaceholder);

                    $input
                        .data({
                            'placeholder-textinput': $replacement,
                            'placeholder-id': id
                        })
                        .before($replacement);
                }

                input.value = '';
                $input = $input.removeAttr('id').hide().prevAll('input[type="text"]:first').attr('id', $input.data('placeholder-id')).show();

            } else {
                
                var $passwordInput = $input.data('placeholder-password');

                if ($passwordInput) {
                    $passwordInput[0].value = '';
                    $input.attr('id', $input.data('placeholder-id')).show().nextAll('input[type="password"]:last').hide().removeAttr('id');
                }
            }

            $input.addClass(settings.customClass);
            $input[0].value = $input.attr((debugMode ? 'placeholder-x' : 'placeholder'));

        } else {
            $input.removeClass(settings.customClass);
        }
    }

    function safeActiveElement() {
        // Avoid IE9 `document.activeElement` of death
        try {
            return document.activeElement;
        } catch (exception) {}
    }
}));

// open and close menu
function CoHeaderMenu(element) {
    if ($(element).hasClass('active')){
        $(element).removeClass('active');
        $('body').css('overflow-y','auto')
    }
    else
    {
        $(element).addClass('active');
        $('body').css('overflow-y','hidden')
    }
}

$(function () {

    svg4everybody();

    // cf input box
    $(".form-control").click(function () {
        $(".input-box .icon").removeClass('focus');
        $(this).closest('.input-box').find('.icon').addClass('focus');$(this).closest('.input-box').find('.icon').addClass('focus');
        $(this).closest('.input-box').find('.text').addClass('focus');
    });
    $(".form-control").blur(function () {
        $(".input-box .icon").removeClass('focus');
        $(".input-box .text").removeClass('focus');
    });

    $("[data-role='input-box2']").click(function () {
        $(this).closest('.input-box2').addClass('focus');
    });
    $("[data-role='input-box2']").blur(function () {
        $(this).closest('.input-box2').removeClass('focus');
    });

    // cf auth modal
    function showModal(target){
        $('.cf-mask').removeClass('active');
        $(target).find('iframe').each(function() {
            $(this).attr('src', $(this).attr('src'));
            $("#iframe-loading").show();
        });

        if ($(target).hasClass('active')){
            $(target).removeClass('active');
            $('body').css('overflow-y','auto')
        }
        else{
            $(target).addClass('active');
            $('body').css('overflow-y','hidden')
        }
    }

    $('.cf-auth-mask').click(function(event) {
        if ($(event.target).closest(".cf-auth-mask .main").length == 0) {
            $("body").find('.cf-mask').removeClass('active');
            $('body').css('overflow-y','auto')
        }
    });

    $("[data-modal='true']").click(function () {
        var target = $(this).data('target');
        showModal(target);
    });

    $(".close-mask").click(function () {
        $(this).closest('.cf-mask').removeClass('active');
        $('body').css('overflow-y','auto')
    });

    //retype
    $("[data-retype='true']").keyup(function () {
        var target=$(this).data('target');
        if(target)
            $(target).val($(this).val());
    }).trigger('keyup');
    
    
    $('.drop-down').click(function () {
        $(this).children('.drp').toggleClass('active');
    });
    $('.drop-down .drp .item').click(function () {
        var name = $(this).children('.name').text();
        var icon = $(this).children('svg').html();
        $(this).parents('.drop-down').children('.selected').html('' +
            '<span class="name">'+name+'</span>' +
            '<svg class="icon">'+icon+'</svg>' +
            ''
        );
    })


});

function backToTop() {
    $("html, body").animate({ scrollTop: 0 }, 1000);
}
