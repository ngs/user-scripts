// ==UserScript==
// @name         Remove Facebook Reels
// @namespace    https://ngs.io
// @version      2024-08-02
// @description  Remove annoying Facebook Reels
// @author       ngs
// @match        https://www.facebook.com
// @icon         https://www.facebook.com/favicon.ico
// @homepageURL  https://github.com/ngs/userscripts/blob/master/RemoveFacebookReels.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    new MutationObserver(function (mutations) {
        const res = document.evaluate('//span[text()="Reels and short videos"]', document, null, XPathResult.ANY_TYPE, null);
        let elm = res.iterateNext()
        let virtualized = false
        while (elm) {
            if (!virtualized && elm.getAttribute('data-virtualized') === 'false') {
                virtualized = true
            }
            if (virtualized && elm.parentNode.childNodes.length > 1) {
                elm.parentNode.removeChild(elm)
                break
            }
            elm = elm.parentNode
        }
    }).observe(document, { childList: true, subtree: true });
})();
