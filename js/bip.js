/**
 *  ______  _____              ________
 *  ___  /_ ___(_)________     ______(_)________
 *  __  __ \__  / ___  __ \    _____  / __  ___/
 *  _  /_/ /_  /  __  /_/ /___ ____  /  _(__  )
 *  /_.___/ /_/   _  .___/ _(_)___  /   /____/
 *                /_/          /___/

 * BACKGROUND IMAGE PRELOADER
 * (c) 2013 - zipang - EIDOLON LABS
 * http://github.com/zipang/bip
 * MIT Licence
 */

(function(w) {

    var bip = {
        preload: function(pa_images, p_options) {

            if (document.images) {
                var i = 0, count = pa_images.length, options = p_options || {},
                    h = document.getElementsByTagName("html")[0],
                    className = (options.className ? options.className : "bg-preload"),
                    breakpoints = options.breakpoints || false,
                    loader = options.pathLoader || getImage,
                    callback = options.callback || (w.console ? console.dir : getImage),
                    result = {};

                if (count) h.className += (" " + className);

                function loaded () {
                    h.className = h.className.replace(className, "");
                    callback(result);
                }

                function onloadHandler(success) {
                    return function() {
                        result[this.src] = success;
                        if (!(--count)) onDOMReady(loaded);
                    }
                }

                function watch(img) {
                    img.onload  = onloadHandler(true);
                    img.onerror = onloadHandler(false);
                    return img;
                }

                // find the breakpoint matching our screen resolution
                // Example : breakpoints = [420, 1024, 1600], screenWidth = 800
                // >> breakpoint = 420
                var screenWidth = w.screen.availWidth || w.screen.width,
                    breakpoint = screenWidth;

                if (breakpoints) while ((breakpoint = breakpoints.pop() || "mobile") > screenWidth) {}

                while (i < count) {
                    watch(new Image()).src = loader(breakpoint, pa_images[i++]);
                }
            }
        }
    }; // bip

    /**
     * Utility Belt
     */
    function getImage(breakpoint, image) {
        return image || breakpoint;
    }
    // Taken more or less from jQuery
    function onDOMReady(callback) {

        if ( document.readyState === "complete" ) {
            setTimeout( callback );

        } else {
            function cb_once() {
              if (!callback.called) {
                callback();
                callback.called = true;
              }
            }
            // Use the handy event callback
            document.addEventListener( "DOMContentLoaded", cb_once, false );

            // A fallback to window.onload, that will always work
            window.addEventListener( "load", cb_once, false );
        }        
    }

    w.bip = bip;

})(window);
