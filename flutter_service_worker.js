'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "39a4248fe5d549f1aae17ee35b71d3a6",
"assets/assets/audio/refresh.mp3": "4769dbf5f83cebf43c3fa08bd8282e34",
"assets/assets/audio/refresh02.mp3": "8fbfbc418f8e022b53d8bdf2ac5725cb",
"assets/assets/audio/refresh03.mp3": "488126dcb269d73800c4a8a09f04da92",
"assets/assets/audio/refresh_trim.mp3": "3eb8def20443a8f712b12c3fbea680c9",
"assets/assets/fonts/OpenSans.ttf": "3ed9575dcc488c3e3a5bd66620bdf5a4",
"assets/assets/gif/ghost.gif": "98f4abb8578b8c5c69a25de206619c14",
"assets/assets/gif/hourglass.gif": "549947b6ecfc963d5df7a46e04847390",
"assets/assets/gif/iphone_spinner.gif": "e5e9172fc240993bd699f593370b2a56",
"assets/assets/gif/spinner.gif": "dfc9998079f87ef42344ddf3eace948b",
"assets/assets/image/alert_icon_close.png": "6d30f267bc503e09f062b07de313d85a",
"assets/assets/image/alert_icon_open.png": "ef12df7dd377b6bb8854c30e5b1515ee",
"assets/assets/image/app_icon.png": "ef12df7dd377b6bb8854c30e5b1515ee",
"assets/assets/image/app_icon_big.png": "fe1fce4043c051f40c9e24fac42d60fe",
"assets/assets/image/app_icon_big_s.png": "5ee83935fa5e8dd06ef21eeb608a3181",
"assets/assets/image/background_big.png": "988818eb69d2ad80316a5c5b6146c12e",
"assets/assets/image/background_top_part.png": "342ffdc4c87256774cab434b90d3b2b7",
"assets/assets/image/back_icon.png": "15f3e7a00eb124b8bee1322dd538da50",
"assets/assets/image/bin_icon.png": "ca60fe06363abafdfc9731c7d8d62359",
"assets/assets/image/calendar_icon.png": "e6e2500093d357be0b8c68fe86e5045e",
"assets/assets/image/clock_icon.png": "dbdb6c1ddf4632049b090f8a7ea78db0",
"assets/assets/image/close_icon.png": "5c2934fe24716dde71dad683161d1132",
"assets/assets/image/cross_icon.png": "505e6b1f283e6bc6ae65bb3f89ad338a",
"assets/assets/image/login_background.png": "4003f04f7523f145081d0c5aca70bf2d",
"assets/assets/image/login_background_new.png": "7975f491c1310ff35b90faae7cc9d1ed",
"assets/assets/image/log_out_icon.png": "c1592575e9e72e7c0ce8828493785a04",
"assets/assets/image/main_background.png": "b28d0231858ce6aac95631f03c27a068",
"assets/assets/image/main_background_new.png": "6b3a8e970076d7003e6a7bf606ca9250",
"assets/assets/image/next_icon.png": "acb532f1eddd7aba7ed95ef83f20a953",
"assets/assets/image/no_image.png": "b1ee9db8f2a902b373d189f2c279d81d",
"assets/assets/image/pin_bell_close.png": "77cc79d5c29a3e28333d55d3e355aa18",
"assets/assets/image/pin_bell_open.png": "30a570454489254e921e65ade39aa27f",
"assets/assets/image/pin_container.png": "4d6d814bdfe1957577bf0220604e9202",
"assets/assets/image/pin_no_icon.png": "93a8bc8976e4644d51c985deb7287185",
"assets/assets/image/pin_yes_icon.png": "16889b269421bd3eba354f2e8946a6c4",
"assets/assets/image/previous_icon.png": "0dc1f29665376d1581b973d5ec3e4add",
"assets/assets/image/profile.png": "c20edc20aac55d49771491172a173c24",
"assets/assets/image/qr_icon.png": "0c92a860e2eefea46e07972622b6fd92",
"assets/assets/image/reminder_background.png": "df9a654713c7979395bb3579674ca702",
"assets/assets/image/reminder_background_new.png": "fbfb3140032e8da076ac4f05ae69e531",
"assets/assets/image/reminder_button.png": "a27b984634a14eb1b6ec7b4d57105f2f",
"assets/assets/image/reminder_button_2.png": "ee61cdbfda4ccd856bccc2b9f3b7126f",
"assets/assets/image/slide_delete.png": "ebc897223690a1a800082e953dc5919b",
"assets/assets/image/slide_pin.png": "e65385b5206f275a953894e75f1e7ca7",
"assets/assets/image/slide_unpin.png": "9e81e121114a6163b9c87e569f78a461",
"assets/assets/image/spinner.gif": "dfc9998079f87ef42344ddf3eace948b",
"assets/assets/image/subscribeAll_icon.png": "079d91cb31381f30598fbe8d0582a704",
"assets/assets/image/subscribeAll_no.png": "dfd8a0b688fd8f1936af30e22f4b25ff",
"assets/assets/image/tick_circle.png": "91093298a9d22ba394c2040c36882651",
"assets/assets/image/tick_confirm.png": "6ff7f59d090112a354d8fa46db631743",
"assets/assets/image/top_bar.png": "7986a1489088c59cc092fb2092d765d2",
"assets/assets/image/top_bar_big.png": "c72b2386e20b2f7fccdc34e138b55031",
"assets/assets/image/warning_icon.png": "4759dfac79698f1cb611e59b4061a938",
"assets/assets/lang/en.json": "2bca4af5bbad323a94fdbe5cbe50ce92",
"assets/assets/lang/tr.json": "3b13d446f93fb5d2a5e27e527476bdef",
"assets/assets/logos/facebook.jpg": "e78b8801fec15b36530841424b13057d",
"assets/assets/logos/google.jpg": "d0991539b51f1520c42d1dee04ba0faa",
"assets/FontManifest.json": "fab63bc7cb4c6c8b15e06fe734509383",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "71adb23492375d6f44a64eeb2ae849a9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "7ad5d25c6e3a662cdcc8d1e2b0941626",
"/": "7ad5d25c6e3a662cdcc8d1e2b0941626",
"main.dart.js": "d655c5d4f528d669ba0fe48f3bb0e2c0",
"manifest.json": "b518f9ff2084a17a1e3d9dbe1425647b",
"version.json": "69755d0790e82fdf4141ac5de78a2697"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
