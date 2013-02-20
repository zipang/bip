    /**
     *  ______  _____              ________         
     *  ___  /_ ___(_)________     ______(_)________
     *  __  __ \__  / ___  __ \    _____  / __  ___/
     *  _  /_/ /_  /  __  /_/ /___ ____  /  _(__  ) 
     *  /_.___/ /_/   _  .___/ _(_)___  /   /____/  
     *                /_/          /___/            
     * BACKGROUND IMAGE PRELOADER
     
     * Put a class name on the html element while background images are loading..
     * The class name will be removed when all images will have loaded
     * This allows for use of a CSS transition to make images appear
     * @param pa_images {Array} paths of images to preload
     * @param p_options {Object} more options like the className to use on html element
     */
    function preloadImages(pa_images, p_options) {

        if (document.images) {
            var i = 0, count = pa_images.length, options = p_options || {},
                h = document.getElementsByTagName("html")[0],
                className = (options.className ? options.className : "bg-preload");

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

            while (i < count) {
                watch(new Image()).src = pa_images[i++];
            }
        }
    }
