// ==UserScript==
// @name         Tweak X
// @namespace    https://x.com/
// @version      0.1.6
// @description  Remove unwanted contents from X
// @author       Atsushi Nagase
// @match        https://x.com/*
// @icon         https://www.google.com/s2/favicons?domain=x.com
// @homepageURL  https://github.com/ngs/userscripts/blob/master/TweakX.user.js
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
    removeIfExists(document.querySelector('[aria-label="Premium"]'));
    removeIfExists(document.querySelector('[aria-label="Subscribe to Premium"]'));
    removeIfExists(document.querySelector('[aria-label="Grok"]'));
    removeIfExists(document.querySelector('[aria-label="Who to follow"]'));
    removeIfExists(document.querySelector('[aria-label="Verified Orgs"]'));
    Array.from(document.querySelectorAll('a[href$="/quick_promote_web/intro"]')).forEach(removeIfExists);

    let res = document.evaluate('//span[text()="Ad"]', document, null, XPathResult.ANY_TYPE, null);
    let elm = res.iterateNext();
    while (elm) {
      let tgt = elm;
      while (tgt.nodeName !== 'ARTICLE' && tgt) {
        tgt = tgt.parentNode;
      }
      if (tgt) {
        tgt.styles.display = 'none';
      }
      elm = res.iterateNext();
    }
  }).observe(document, {
    childList: true,
    subtree: true,
  });
})();
