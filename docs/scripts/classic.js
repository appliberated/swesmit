/*
 *  SWESMIT. Copyright (c) 2018-2020 Appliberated. MIT License.
 *  https://github.com/appliberated/swesmit
 */

/* eslint-disable strict */

(function () {
    "use strict";

    const logEl = document.getElementById("log");
    window.docLog = message => logEl.insertAdjacentHTML("beforeend", `<p>${message}</p>`);

    document.getElementById("browser").innerText = navigator.userAgent;
    window.docLog("Hello from <b><code>/scripts/classic.js</code></b>, a classic JavaScript file<br>");
}());
