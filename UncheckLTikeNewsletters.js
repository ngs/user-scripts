// ==UserScript==
// @name         Unckeck L-Tike Newsletters
// @namespace    https://l-tike.com/
// @version      0.1
// @description  Unckeck L-Tike Newsletters
// @author       Atsushi Nagase
// @match        https://l-tike.com/*
// @icon         https://www.google.com/s2/favicons?domain=l-tike.com
// @homepageURL  https://github.com/ngs/userscripts/blob/master/UncheckLTikeNewsletters.js
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  new MutationObserver(function (mutations) {
    Array.from(document.querySelectorAll('[name="ARTIST_NAME[]"],[name="GENRE_NAME[]"],[name="LAWSONTICKET_ENTA_MAIL"]')).forEach(input => input.checked = false)
  }).observe(document, {
    childList: true,
    subtree: true,
  });
})();
