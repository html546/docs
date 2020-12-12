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

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "952d9ee7cb763b59ab4575608ed58ec3"
  },
  {
    "url": "about.html",
    "revision": "7a6ab2a5531e7e0e257f31193fde2c4a"
  },
  {
    "url": "about1.html",
    "revision": "b408e07399f12f13f0fc5a567647e7b6"
  },
  {
    "url": "about2.html",
    "revision": "d8a67103474fe3e7e604653b7e360c09"
  },
  {
    "url": "assets/css/0.styles.b2e24b99.css",
    "revision": "59c068941581214817fa488e0f57a52b"
  },
  {
    "url": "assets/img/hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.391235ac.js",
    "revision": "62f4031a2d5bd246eeb06d30859f21e9"
  },
  {
    "url": "assets/js/11.ff28b37f.js",
    "revision": "cebf27586de4508b4a47e88929dfd6c5"
  },
  {
    "url": "assets/js/12.4265ef5a.js",
    "revision": "ee0ffff0cfdb1fb90f17a2361c88b70e"
  },
  {
    "url": "assets/js/13.026eba76.js",
    "revision": "2948b16f0617ace01add2d0bcc0f3138"
  },
  {
    "url": "assets/js/14.8e37f870.js",
    "revision": "467e435d6482f61b4887f19043700d0b"
  },
  {
    "url": "assets/js/15.b16e5fe8.js",
    "revision": "d65b120091e803fe253975b2747b9001"
  },
  {
    "url": "assets/js/16.f0c06ae4.js",
    "revision": "68a1338c4461cf4cf8da4c1cc574c585"
  },
  {
    "url": "assets/js/17.8ee3aefd.js",
    "revision": "7e6c16b7d25ee1a2b3a9ea87afbc6242"
  },
  {
    "url": "assets/js/18.3c2d2e14.js",
    "revision": "c92ac285fd5c691e2a6843e64e35fc76"
  },
  {
    "url": "assets/js/19.e24613a1.js",
    "revision": "d0f3f361b09d41c35d67510c4c7f5533"
  },
  {
    "url": "assets/js/2.4a6be114.js",
    "revision": "05540c75246923e89701ec095e80327a"
  },
  {
    "url": "assets/js/20.2a9e5a12.js",
    "revision": "5f3c3b1432d011ef75928df09fa3df54"
  },
  {
    "url": "assets/js/21.dc57b7e2.js",
    "revision": "e040ef7b6206d50001e4b360de344ba6"
  },
  {
    "url": "assets/js/22.052798c7.js",
    "revision": "307d91a525fae09719e76711131621f0"
  },
  {
    "url": "assets/js/3.134c4f26.js",
    "revision": "b4f56e78d67a78d5a12b0d49afa422f4"
  },
  {
    "url": "assets/js/4.3e9f2a57.js",
    "revision": "e78b7dbd243ca78f01e202ef0f294ce2"
  },
  {
    "url": "assets/js/5.cb822a83.js",
    "revision": "74612f9f9eacd6d20281e6d8b8bae9e5"
  },
  {
    "url": "assets/js/6.a0cf6571.js",
    "revision": "47fd267bee695c961aad4908cddb6d36"
  },
  {
    "url": "assets/js/7.4cfbeeb7.js",
    "revision": "f77dca749ae83ad5e48529dc2900ac46"
  },
  {
    "url": "assets/js/8.7d5bef70.js",
    "revision": "e06d569096fe3ed80f6c6b30e6e19c4c"
  },
  {
    "url": "assets/js/9.a885a9a1.js",
    "revision": "3b7c5811a25917e6cb6603b16cf458d2"
  },
  {
    "url": "assets/js/app.268efb94.js",
    "revision": "bf7d13d3ff62b8c82ac4e21c332af5ac"
  },
  {
    "url": "css/c-aaa.html",
    "revision": "1f581139f50e9b4edb635600a8d01054"
  },
  {
    "url": "css/c-bbb.html",
    "revision": "35375bedf7e44e6c0c8ad5738301b1e1"
  },
  {
    "url": "css/c-ccc.html",
    "revision": "2302bcf72fee57f55d94ae2e665582ae"
  },
  {
    "url": "css/index.html",
    "revision": "43754653848ecaad2d82ce1e04135854"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "179afe819990d75a0bd83fe87556cdce"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "4321b824bcb20f2cf5556ccbe7ea00de"
  },
  {
    "url": "index.html",
    "revision": "93f0eed9b83fe2a9019b3d3c3d7cc0c4"
  },
  {
    "url": "javascript/index.html",
    "revision": "58cb58441357cdd32bfcd1c250942a40"
  },
  {
    "url": "javascript/j-aaa.html",
    "revision": "edbcd00cdf11b07222bd998b08cbaeaf"
  },
  {
    "url": "javascript/j-bbb.html",
    "revision": "b3dde25d1ef2c21ab1316d80ff2c8fb8"
  },
  {
    "url": "javascript/j-ccc.html",
    "revision": "bedded203f518d57acf0618ed3c2c3b2"
  },
  {
    "url": "quanxue.html",
    "revision": "0e2e59510c4e6942b40d5a0b096c08d8"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
