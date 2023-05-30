// ==UserScript==
// @name         Remove Google Sponsored Link
// @namespace    https://ngs.io/
// @version      0.1
// @description  Remove Google Sponsored Links in Search Result
// @author       Atsushi Nagase
// @match        https://www.google.com/search*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  new MutationObserver(function (mutations) {
    const wrapper = Array.from(document.getElementsByTagName('h1')).find(h => h.innerText === 'Ads')?.parentNode?.parentNode;
    wrapper && wrapper.parentNode && wrapper.parentNode.removeChild(wrapper);
  }).observe(document, { childList: true, subtree: true });
})();
