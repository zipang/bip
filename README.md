bip - Background Images Preloader
=================================

Purpose
-------
Background images are _great_. They are repeatable, and maybe even _tilable_, so they really can offer great bang for your bucks.

However, there is a little glitch in all that awesomeness : _you dont know when background images are loaded_ (because there is no onload event on background images..)

When you rely on several big background images to render the mood of your page and if you pay attention to details, this can be a problem at first load : image won't render immediately, and it won't provide the ultimate smooth user experience you'd long for.

Well.. unless you use `bip` (_Background Image Preloader_)

The purpose of `bip.preload()` is to give you a way to react as soon as some background images are loaded, via a CSS hook (a class name) or a JavaScript callback.

What's even more awesome is that `bip` can load the adequate background images for you inside the containers you design, avoiding you the error prone and annoying obligation to maintain 2 declarations for background images (in the CSS and in the bip preload call).

This last feature allows you more in fact : to have the full control over which resource to load in an adaptive context which means that you can choose different images for the mobile version of your site, for the classical old fashioned desktop and for the latest 29' iMac..

In fact, `bip.preload()` can effectively replace all your media queries for background-images declarations.

Examples and Use Cases
----------------------

### Basic use

The most basic usage is just to pre-load a bunch of images files to have them ready as soon as possible.

Without any option, the default `bg-preload` class will be pre-set on the <html>` tag element and will be removed as soon as the images are ready, allowing you for a nice CSS transition..

```javascript
bip.preload([
    'images/bg/myfancybg-0.png',
    'images/bg/myfancybg-1.png'
    // etc..
]);
```

While a CSS transition could be defined this way in the CSS (or LESS) stylesheet :

```css
html.bg-preload bg-zone {
	opacity: 0; // hide the zone with background images when pre-loading
}

bg-zone {
	opacity: 1;
	transition: opacity 2s ease-in-out;
}
```

###More options

While the 1st parameter of bip.preload() is the list of images to load (or a structure containing the list of images), the second parameter is the options.

Let see what this option object parameter can contain :

* `pathLoader` : a function that can interpret your list of files to transform them into real paths. This allows for more succint expressions and adaptive choices.

```javascript
bip.preload([0, 1], {
    pathLoader: function(key) {return 'images/bg/myfancybg-' + key + '.png';}
});
```

* `breakpoints` : an enumeration of screen resolution that will be resolved and passed back to pathLoader as a second parameter.

```javascript
bip.preload(['bg1.png', 'bg2.png'], {
    breakpoints: [420, 960, 1200],
    pathLoader: function(key, breakpoint) {
        // Here we have stored the different versions of the background images in different folders as follows :
        // images/bg-mobile/, images/bg-420/, images/bg-960/, images/bg-1200/
        return 'images/bg-' + breakpoint + '/' + key;
    }
});
```

* `className` : pass it to override the default `bg-preload` class name that is set on the `<html>` element. This will allow you to pass different class names for different batch of images to load, thus allowing several transitions to occur..

```javascript
// load first batch of images
bip.preload(
    ['sky.png'], { className: 'preloading-bg-elements' }
);
// load a second batch of images
bip.preload(
    ['mountains.png', 'clouds.png'], { className: 'preloading-front-elements' }
);
```

* `callback` : function to be called when a batch of images has been fetched.

Sometimes, the sole use of a class name is not enough for the effect you have in mind.

Ìn these cases, use a JavaScript callback and do whatever you want when a bunch of images is loaded. The callback function will receive a status object containing the status (success/error) of each image in the batch. When no callback is provided, a `console.log` is performed instead, thus allowing you to quickly debug image path problems..

```javascript
// load and check the status of each image
bip.preload(
    ['luke', 'leia', 'vador'],
    {
        pathLoader: function(key, breakpoint) {
            return 'images/' + key + '.png';
        },
        callback: function(loadStatus) {
            if (loadStatus.vador === false) {
                alert('Sorry, no Vador could be found.');
            }
        }
    }
);

```
