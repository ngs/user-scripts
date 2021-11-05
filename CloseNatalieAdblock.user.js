// ==UserScript==
// @name         Close natalie adblock
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  TBD
// @author       ngs
// @match        https://natalie.mu/*
// @icon         https://www.google.com/s2/favicons?domain=natalie.mu
// @grant        none
// @homepageURL  https://github.com/ngs/userscripts/CloseNatalieAdblock.user.js$
// @run-at       document-start
// ==/UserScript==

(function () {
  "use strict";

  new MutationObserver(function (mutations) {
    Array.from(document.getElementsByClassName("fc-close")).forEach((btn) =>
      btn.click()
    );
  }).observe(document, { childList: true, subtree: true });
})();
