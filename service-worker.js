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
    "revision": "969521c1bfd7b641aab4c99851c7900f"
  },
  {
    "url": "about/index.html",
    "revision": "379d869f735b90349e8723a6b47f2b72"
  },
  {
    "url": "assets/css/0.styles.c051f0c6.css",
    "revision": "522c7777e8f025e06437206fa3fef056"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/js/1.5b3de7be.js",
    "revision": "0e76dbd900cf6b0b2ff62be1d2813a6e"
  },
  {
    "url": "assets/js/10.ea0ff4de.js",
    "revision": "7444a547f4c4e0270d19f15614a577a5"
  },
  {
    "url": "assets/js/11.7f52bbb3.js",
    "revision": "be0df96bf8891e8f020c085f5cc2b6bd"
  },
  {
    "url": "assets/js/12.a94675ab.js",
    "revision": "1fa7cce12b37cf6037cd752b6d300fe5"
  },
  {
    "url": "assets/js/13.39da978e.js",
    "revision": "4655c011ad2e78a6a3c3cbc82d2a9860"
  },
  {
    "url": "assets/js/14.233672d7.js",
    "revision": "372cd22fc96f518ee75d3d01cc106bb6"
  },
  {
    "url": "assets/js/15.4ea7bea0.js",
    "revision": "4a8f8c092806b4c5ffa11412f95253bf"
  },
  {
    "url": "assets/js/16.f6a5700f.js",
    "revision": "d751e6ae51bf1e842e85ec4c3f84b97f"
  },
  {
    "url": "assets/js/17.6929f774.js",
    "revision": "d4e9977c0f3588512a487a433fd67384"
  },
  {
    "url": "assets/js/18.4e5cdbc2.js",
    "revision": "d79b91416c4c32d716c22ebb01139cc1"
  },
  {
    "url": "assets/js/19.523ee38c.js",
    "revision": "6067991eb2902b3a8e7344f9beeea775"
  },
  {
    "url": "assets/js/20.17e61f0d.js",
    "revision": "2b2cfd82c6d417a086f226e5d409df4d"
  },
  {
    "url": "assets/js/21.a1b16499.js",
    "revision": "cd5dbb7a59a1171af79a0210350ce603"
  },
  {
    "url": "assets/js/22.c13e406e.js",
    "revision": "fff638eb4f8be99fc83c9194b4e3c81d"
  },
  {
    "url": "assets/js/23.99e40580.js",
    "revision": "82a41f4c02369ac0f66af48313751c03"
  },
  {
    "url": "assets/js/24.037e31ac.js",
    "revision": "b088f3a82307a4fb25f84cf3e6fad095"
  },
  {
    "url": "assets/js/25.3c4314bf.js",
    "revision": "59545b97b42e523bff66a9bdb2aa2263"
  },
  {
    "url": "assets/js/26.89e2b6a3.js",
    "revision": "9c7872501300e8296d78270b7bab77c1"
  },
  {
    "url": "assets/js/27.e28b93a0.js",
    "revision": "836d4fa6c1e5adef640340e7eddfdd6b"
  },
  {
    "url": "assets/js/28.68cf1a0f.js",
    "revision": "9cb184079cd559f2f31be3697a421fd6"
  },
  {
    "url": "assets/js/29.91e3fee7.js",
    "revision": "4dd3da8f57487fbe751a674a7b6c252e"
  },
  {
    "url": "assets/js/30.4d944e35.js",
    "revision": "c58d8305e2363c35e43a80afc40df96c"
  },
  {
    "url": "assets/js/31.6154e50e.js",
    "revision": "b3eaccbc1d2e56711e4c5b4729ffb608"
  },
  {
    "url": "assets/js/32.25898266.js",
    "revision": "e3abd3ff46f53b23c14d2156bbf2507f"
  },
  {
    "url": "assets/js/33.072e9379.js",
    "revision": "02f2c0b1468b7c23445b556bdf1a4e0b"
  },
  {
    "url": "assets/js/34.449e99f4.js",
    "revision": "f67fb377cafdba94de61d81b20243c21"
  },
  {
    "url": "assets/js/35.98d5463f.js",
    "revision": "647930855183fcf164ec936189cf26b8"
  },
  {
    "url": "assets/js/36.bdbb90ec.js",
    "revision": "82b39475e1ba7ad37eb6295e02b8103c"
  },
  {
    "url": "assets/js/37.b1b40ef1.js",
    "revision": "d741fe654d593984879383f43c787d6b"
  },
  {
    "url": "assets/js/38.4a7e0940.js",
    "revision": "c0ae707e2b8982b262d2a8f81910cbdb"
  },
  {
    "url": "assets/js/39.5d68bd80.js",
    "revision": "6581db73d34e7ec952ab904a3347f1db"
  },
  {
    "url": "assets/js/4.35dc9c77.js",
    "revision": "58c3f7558e4d57eb1187d7efb934cbe8"
  },
  {
    "url": "assets/js/40.ca234b9f.js",
    "revision": "b8cb663bd21492f553ea9526dff6273d"
  },
  {
    "url": "assets/js/41.b1413e0a.js",
    "revision": "653fe0af7625c8753df2c8c403f64dc2"
  },
  {
    "url": "assets/js/42.f7e04d21.js",
    "revision": "22f1abaf221e41596b95972e102a7011"
  },
  {
    "url": "assets/js/5.cd2f260a.js",
    "revision": "bb5dffc7d1522fb45e41072dee221081"
  },
  {
    "url": "assets/js/6.6ba38e8e.js",
    "revision": "c599913c6bac6d849074733ef72a5841"
  },
  {
    "url": "assets/js/7.5ee21d10.js",
    "revision": "cef6412782c92751e1f60347540e6866"
  },
  {
    "url": "assets/js/8.7d9461ca.js",
    "revision": "ad3fb17287a5e0fa84922fe93223d779"
  },
  {
    "url": "assets/js/9.a857e27d.js",
    "revision": "59ccf372ae3392e5fb0e42189f823d35"
  },
  {
    "url": "assets/js/app.16996126.js",
    "revision": "e49eb4fc009bda1f32fa50a1ffb26ecb"
  },
  {
    "url": "assets/js/vendors~flowchart.eede2435.js",
    "revision": "7dc6e916b31c4f4561d7fd4754b42983"
  },
  {
    "url": "categories/index.html",
    "revision": "5e61062b0860d0d440e2f6e841ec6e10"
  },
  {
    "url": "colorui/docs/button.html",
    "revision": "1411def5750a469ac5dfd8245cbe5f2a"
  },
  {
    "url": "colorui/docs/index.html",
    "revision": "05acb4012ee3d59edce63c30edcafd5a"
  },
  {
    "url": "colorui/docs/text.html",
    "revision": "360f572d4a11b90878e7ce00968d28f8"
  },
  {
    "url": "dotnetcore/examples/Console-Hello-World.html",
    "revision": "ef47a3529574b23aeceabd3a7943eda4"
  },
  {
    "url": "dotnetcore/examples/Console-News-Types.html",
    "revision": "219257e14424959c1497f9f27982d6ae"
  },
  {
    "url": "dotnetcore/examples/FreeSql-in-asp.net-core-webapi-how-to-use.html",
    "revision": "b11eb6c3212224f1cd037254dc03e165"
  },
  {
    "url": "dotnetcore/examples/FreeSql-sample-blog-RESTful-use-automapper.html",
    "revision": "9548248a6ee5d494d5a81a424d19a70f"
  },
  {
    "url": "dotnetcore/examples/IdentityServer4.html",
    "revision": "612bdef975ae8a4fc447a7346fd03ba1"
  },
  {
    "url": "dotnetcore/examples/ImCore-Chat.html",
    "revision": "cf4ad1f3fc20ff5323d011bc8dc32556"
  },
  {
    "url": "dotnetcore/examples/index.html",
    "revision": "7764042ad6cb18e3ab0bb247b920721b"
  },
  {
    "url": "dotnetcore/examples/Qiniu-Object-Storage.html",
    "revision": "35d729af408f9a47b66d50dbc6491f7b"
  },
  {
    "url": "dotnetcore/lin-cms/dependency-injection.html",
    "revision": "9125ca86ffedf2987dbf93b25e2c7e8e"
  },
  {
    "url": "dotnetcore/lin-cms/dev-start.html",
    "revision": "9cc0f6fc518caa0186e8b63630980aa1"
  },
  {
    "url": "dotnetcore/lin-cms/dotnetcore-start.html",
    "revision": "8c6a9235b540bd33f0f5296057814786"
  },
  {
    "url": "dotnetcore/lin-cms/dynamic-authorization-in-asp-net-core.html",
    "revision": "9714170416c1972a0c7f5acc64974238"
  },
  {
    "url": "dotnetcore/lin-cms/error-code.html",
    "revision": "5ecffe3c1ad0442b255a1e034bb5ac4c"
  },
  {
    "url": "dotnetcore/lin-cms/IdentityServer4-JWT.html",
    "revision": "871ca6a57ef1e0aa730e650667286c22"
  },
  {
    "url": "dotnetcore/lin-cms/index.html",
    "revision": "b926829f6571c4b4523f2606cc995fb9"
  },
  {
    "url": "dotnetcore/lin-cms/Newtonsoft.Json-question.html",
    "revision": "6749d2997c0071c8e3c09d3f85748aaa"
  },
  {
    "url": "dotnetcore/lin-cms/Open-source-road.html",
    "revision": "77e9c72f0f2b29ede8c803e6f2f8c7f1"
  },
  {
    "url": "dotnetcore/lin-cms/pm-design-comment.html",
    "revision": "b8a94e157911357eaf65d64f2f4353c0"
  },
  {
    "url": "dotnetcore/lin-cms/pm-design-modules.html",
    "revision": "9b71cd0edd9be8ff627e14e6a5e3b77f"
  },
  {
    "url": "dotnetcore/lin-cms/Production-Design.html",
    "revision": "d508c6152c1e75fd55b1e9ca1fa8f816"
  },
  {
    "url": "dotnetcore/lin-cms/Reflex-Assembly-Get-Controller-Methods-Attribute.html",
    "revision": "e085ad80d3bccb65d8b4646055dd1d67"
  },
  {
    "url": "dotnetcore/lin-cms/spa-github-login.html",
    "revision": "8d946ef3074f89beab8d42428ed85396"
  },
  {
    "url": "dotnetcore/lin-cms/StopWords.html",
    "revision": "3eb807de332390bed060b65f721fc415"
  },
  {
    "url": "dotnetcore/lin-cms/ToolGood.Words.html",
    "revision": "f54d2a3a50edc734946627bf27e40163"
  },
  {
    "url": "dotnetcore/lin-cms/vue-start.html",
    "revision": "c32129a080fb9463bb9ce8bcfc6c9186"
  },
  {
    "url": "head.jpg",
    "revision": "ea5b39ec1dc7d2bbdbf7921aa274caf0"
  },
  {
    "url": "index.html",
    "revision": "515d91d5a7af7e86ca0efd0417c9ebc3"
  },
  {
    "url": "left-logo.png",
    "revision": "bd7a4bd7b69a4500329df1b4196ab1cb"
  },
  {
    "url": "logo.png",
    "revision": "1987e15f6867ab461bbbca84687a1322"
  },
  {
    "url": "tag/index.html",
    "revision": "af3f90174dc4a9caf40b559f08973831"
  },
  {
    "url": "timeline/index.html",
    "revision": "16f3759cea856eee768cc67e2fe9f159"
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
