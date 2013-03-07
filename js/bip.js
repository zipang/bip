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
                    breakpoints = options.breakpoints || [],
                    loader = breakpoints.length ? options.pathLoader || defaultPathLoader : getImage;

                if (count) h.className += (" " + className);

                function onload() {
                    if (!(--count)) {
                        h.className = h.className.replace(className, "");
                        if (options.callback) options.callback(pa_images);
                    }
                }

                function watch(img) {
                    img.onload = onload;
                    return img;
                }

                // find the breakpoint matching our screen resolution
                // breakpoints = [420, 1024, 1600]
                // screenWidth = 800
                // >> breakpoint = 420
                var j = breakpoints.length,
                    screenWidth = w.screen.availWidth || w.screen.width;

                while (breakpoints[j - 1] > screenWidth) j--;
                var breakpoint = j ? breakpoints[j - 1] : "mobile";
                console.log("detected resolution > " + breakpoint);

                while (i < count) {
                    watch(new Image()).src = loader(breakpoint, pa_images[i++]);
                }
            }
        }
    }; // bip

    /**
     * Utility Belt
     */
    function defaultPathLoader(breakpoint, image) {
        return "images/" + breakpoint + "/" + image;
    }
    function getImage(breakpoint, image) {
        return image;
    }

    w.bip = bip;

})(window);
