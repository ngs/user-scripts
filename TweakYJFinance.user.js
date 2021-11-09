// ==UserScript==
// @name         Tweak Yahoo Japan Finance
// @namespace    https://finance.yahoo.co.jp/
// @version      0.1
// @description  Remove unwanted contents from Yahoo Japan Finance
// @author       Atsushi Nagase
// @match        https://finance.yahoo.co.jp/*
// @icon         https://www.google.com/s2/favicons?domain=finance.yahoo.co.jp
// @homepageURL  https://github.com/ngs/userscripts/blob/master/TweakYJFinance.user.js
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  new MutationObserver(function (mutations) {
    $('.ignoreComment').parent().parent().remove()
  }).observe(document, {
    childList: true,
    subtree: true,
  });
})();
