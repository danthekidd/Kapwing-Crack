// ==UserScript==
// @name         Kapwing Crack
// @version      1.0.0
// @description  we don't like paywalls
// @author       danthekidd
// @match        https://kapwing.com/*
// @match        https://www.kapwing.com/*
// @run-at       document-start
// @icon         https://cdn-useast1.kapwing.com/static/eAW-favicon-32x32.png
// @updateURL    https://raw.githubusercontent.com/danthekidd/Kapwing-Crack/refs/heads/main/Kapwing Crack.user.js
// @grant        none
// ==/UserScript==

const originalJSONParse = JSON.parse;

JSON.parse = function(text, reviver) {
    try {
        const parsedData = originalJSONParse(text, reviver);

        if (Array.isArray(parsedData) && parsedData[0] && parsedData[0].hasOwnProperty('planTier')) {
            parsedData[0].planTier = "enterprise";
        } else if (parsedData.hasOwnProperty('user') && parsedData.user.hasOwnProperty('isFree')) {
            parsedData.user.isFree = false;
        }

        return parsedData;
    } catch (error) {
        console.error('Error parsing JSON:', error);
        throw error;
    }
};

