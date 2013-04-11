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

Without any option, the default `bg-preload` class will be pre-set on the <html> tag element and will be removes as soon as the images are ready, allowing you for a nice CSS transition..

```javascript
	bip.preload([
		'images/bg/myfancybg-0.png',
		'images/bg/myfancybg-1.png'
		// etc..
	]);
```

```css
html.bg-preload bg-zone {
	opacity: 0; // hide the zone with background images when pre-loading
}

bg-zone {
	opacity: 1;
	transition: opacity 2s ease-in-out;
}
```
