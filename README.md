# SWESMIT
**Service Worker ECMAScript Modules Issue Tester**

Using the [Cache API](https://developer.mozilla.org/en-US/docs/Web/API/Cache) to add one or more [ECMAScript Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) (aka native JavaScript modules) in a [Service Worker](https://developers.google.com/web/fundamentals/primers/service-workers/) throws errors in Google Chrome, or worse, crashes the browser. That's sad, because:
- Service Workers are a key component for writing [Progressive Web Apps](https://en.wikipedia.org/wiki/Progressive_Web_Apps), and other offline-first ready applications, and
- native JavaScript modules are becoming an essential tool for writing better, lighter, and easier to maintain JavaScript code, especially now when they are supported by most popular browsers.

**[SWESMIT](https://swesmit.hwalab.com)** is a simple and straighforward web app created to test this issue.


| In Chrome on Android | In Chrome on Windows |
| --- | --- |
| ![SWESMIT Chrome Android Screenshot](https://github.com/hwalab-developer/repo-assets/blob/master/swesmit/readme/swesmit-chrome-android.png?raw) | ![SWESMIT Chrome Windows Screenshot](https://github.com/hwalab-developer/repo-assets/blob/master/swesmit/readme/swesmit-chrome-windows.png?raw) |

## Issue Tracking
The main issue on the chromium issue tracking tool:  
[832202 - javascript modules not working with cache-api - chromium - Monorail](https://bugs.chromium.org/p/chromium/issues/detail?id=832202)

and other duplicate or merged issues:  
[833501 - CacheStorage API interaction with ES module (using export) results in runtime error - chromium - Monorail](https://bugs.chromium.org/p/chromium/issues/detail?id=833501)  
[810469 - Caching a JS file with an export result in an error (possibly other JS syntaxes) - chromium - Monorail](https://bugs.chromium.org/p/chromium/issues/detail?id=810469)  
[Precaching modules throws error to console · Issue #1433 · GoogleChrome/workbox](https://github.com/GoogleChrome/workbox/issues/1433)  
[Module Exports in Workbox Failing to Precache · Issue #1286 · GoogleChrome/workbox](https://github.com/GoogleChrome/workbox/issues/1286)  
[Uncaught (in promise) SyntaxError: Unexpected token export at Object · Issue #54 · ionic-team/ionic-pwa-toolkit](https://github.com/ionic-team/ionic-pwa-toolkit/issues/54)  

## Contributions

Contributions are welcome! For feature requests and bug reports please [submit an issue](https://github.com/hwalab-developer/swesmit/issues).

## Sponsor

SWESMIT (and all HWALab free apps) are supported by [East-Tec](http://www.east-tec.com), the home of [east-tec Eraser](http://www.east-tec.com/eraser/), the privacy tool that quickly and securely covers your online and PC tracks.

## License

SWESMIT is licensed under the [MIT License](LICENSE).
