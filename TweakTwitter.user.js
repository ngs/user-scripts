// ==UserScript==
// @name         Tweak Twitter
// @namespace    https://twitter.com/
// @version      0.1.2
// @description  Remove unwanted contents from Twitter
// @author       Atsushi Nagase
// @match        https://twitter.com/*
// @icon         https://www.google.com/s2/favicons?domain=twitter.com
// @homepageURL  https://github.com/ngs/userscripts/blob/master/TweakTwitter.user.js
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  const removeIfExists = (element) =>
    element && element.parentNode && element.parentNode.removeChild(element);

  new MutationObserver(function (mutations) {
    removeIfExists(
      document.querySelector('[aria-label="Timeline: Trending now"]')
    );
    removeIfExists(document.querySelector('[aria-label="Who to follow"]'));
    removeIfExists(document.querySelector('[aria-label="Subscribe to Premium"]'));
    Array.from(document.querySelectorAll('a[href$="/quick_promote_web/intro"]')).forEach(removeIfExists);
    removeIfExists(document.querySelector('[aria-label="Twitter Blue"]'));
    removeIfExists(document.querySelector('[aria-label="Get Verified"]'));
  }).observe(document, {
    childList: true,
    subtree: true,
  });
})();
