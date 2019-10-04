/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.__precacheManifest = (self.__precacheManifest || []).concat([
  {
    "revision": "5484e2f3b16a11d86f7c0a479bbd194b",
    "url": "/index.html"
  },
  {
    "revision": "d37f55c532262eaf416d",
    "url": "/static/css/main.d2a9886e.chunk.css"
  },
  {
    "revision": "8f9f9f703c671000de7b",
    "url": "/static/js/2.3e91e924.chunk.js"
  },
  {
    "revision": "d37f55c532262eaf416d",
    "url": "/static/js/main.6a0c9971.chunk.js"
  },
  {
    "revision": "d0a01327a639b374b49a",
    "url": "/static/js/runtime~main.191b7bc3.js"
  },
  {
    "revision": "eb219d0defd6f4f9f6fbb16bace29123",
    "url": "/static/media/LOGO.eb219d0d.png"
  },
  {
    "revision": "a4f2cb80ff2ae2772e80bf30e9d78d4c",
    "url": "/static/media/loading.a4f2cb80.gif"
  },
  {
    "revision": "9d378898517e631cb3c02db6e3920a2c",
    "url": "/static/media/wallpaper.9d378898.jpg"
  }
]);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("/index.html"), { blacklist: [/^\/_/,/\/[^\/?]+\.[^\/]+$/],});
