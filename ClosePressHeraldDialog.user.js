// ==UserScript==
// @name         Close Press Herald Dialog
// @namespace    https://www.pressherald.com/
// @version      0.1
// @description  TBD
// @author       Atsushi Nagase
// @match        https://www.pressherald.com/*
// @icon         https://www.google.com/s2/favicons?domain=www.pressherald.com/
// @homepageURL  https://github.com/ngs/userscripts/blob/master/ClosePressHeraldDialog.user.js
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  new MutationObserver(function (mutations) {
    const wrapper = document.getElementsByClassName("fc-ab-root")[0];
    wrapper && wrapper.parentNode && wrapper.parentNode.removeChild(wrapper);
    /overflow:\s*hidden;/.test(document.body.getAttribute('style')) && document.body.removeAttribute('style');
    
  }).observe(document, { childList: true, subtree: true, attributes: true });
})();
