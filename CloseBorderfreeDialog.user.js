// ==UserScript==
// @name         Close Borderfree Dialog
// @namespace    https://global.danner.com/
// @version      0.1
// @description  TBD
// @author       Atsushi Nagase
// @match        https://global.danner.com/*
// @icon         https://www.google.com/s2/favicons?domain=danner.com
// @homepageURL  https://github.com/ngs/userscripts/CloseBorderfreeDialog.user.js
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  new MutationObserver(function (mutations) {
    const wrapper = document.getElementById("bfx-cc-wrapper-expanded");
    wrapper && wrapper.parentNode && wrapper.parentNode.removeChild(wrapper);
  }).observe(document, { childList: true, subtree: true });
})();
