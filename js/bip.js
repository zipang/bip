/**
 *  ______  _____              ________
 *  ___  /_ ___(_)________     ______(_)________
 *  __  __ \__  / ___  __ \    _____  / __  ___/
 *  _  /_/ /_  /  __  /_/ /___ ____  /  _(__  )
 *  /_.___/ /_/   _  .___/ _(_)___  /   /____/
 *                /_/          /___/
 */

/**
 * BACKGROUND IMAGES PRELOADER
 * (c) 2013 - zipang - EIDOLON LABS
 * http://github.com/zipang/bip
 * MIT Licence
 */
(function(win, doc) {

    var html = doc.getElementsByTagName("html")[0],
        head = doc.getElementsByTagName("head")[0],
        screenWidth = win.screen.width;

    /* ==================
       Utility Belt
       ================== */

	function onDOMReady(callback) { // Taken (more or less) from jQuery

		if (doc.readyState == "complete") {
			setTimeout(callback);

		} else {
			function cb_once() {
				if (!callback.called) {
					callback();
					callback.called = true;
				}
			}
			// Use the handy event callback
			doc.addEventListener("DOMContentLoaded", cb_once, false);

			// A fallback to window.onload, that will always work
			win.addEventListener("load", cb_once, false);
		}
	}

	/**
	 * Background images assignation
	 * Dynamically create the CSS rules to assign background images to the specified targets
	 * @param bgDef : {cssSelector: imageKey, ..}
	 * @param pathLoader {Function} image path resolver (takes an image key and the current breakpoint to return the image path)
	 * @return [] the array of images to load
	 */
    function assignBg(bgDef, pathLoader) {

        if (bgDef.length) return bgDef; // only an array of images > no assignation

        var output = [], images = [], i = 0;
        for (var key in bgDef) {
          output.push(key, " {background-image: url(", pathLoader(images[i++] = bgDef[key]), ");}\n");
        }
        var styleElt = doc.createElement("STYLE"),
            rules = doc.createTextNode(output.join(""));

        styleElt.appendChild(rules);
        head.appendChild(styleElt);
        return images;
    }

	function getImage(image) {
		return image;
	}

    win["bip"] = {
        preload: function(p_images, p_options) {

            if (doc.images) {
                var options = p_options || {},
                    className = (options.className !== undefined ? options.className : "bg-preload"),
                    breakpoints = options.breakpoints || false,
                    breakpoint = screenWidth,
                    callback = options.callback || (win.console ? console.dir : getImage);

                // Find the breakpoint matching our screen resolution
                // example : breakpoints = [420, 1024, 1600], screenWidth = 800 >> breakpoint = 420
                if (breakpoints) while ((breakpoint = breakpoints.pop() || "mobile") > screenWidth) {}

                function loader(img) {
                    return (options.pathLoader || getImage)(img, breakpoint);
                }

                var images = assignBg(p_images, loader),
                    count = images.length, i = 0, result = {};

                if (count && className) html.className += (" " + className);

                function loaded () {
                    if (className) html.className = html.className.replace(className, "");
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

                while (i < count) {
                    watch(new Image()).src = loader(images[i++], breakpoint);
                }
            }
        }
    }; // bip

})(window, document);
