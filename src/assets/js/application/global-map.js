'use strict';

document.addEventListener('DOMContentLoaded', init);

function init() {
    loadArrows();
}

function loadArrows() {
    generateArrowSpans('.oneTwo', 7);
    generateArrowSpans('.twoThree', 8);
    generateArrowSpans('.twoFour', 7);
    generateArrowSpans('.fourOne', 7);
    generateArrowSpans('.threeSix', 5);
    generateArrowSpans('.sixTwo', 7);
    generateArrowSpans('.fourSix', 7);
    generateArrowSpans('.fourEight', 7);
    generateArrowSpans('.eightFive', 5);
    generateArrowSpans('.fiveFour', 7);
    generateArrowSpans('.sixSeven', 7);
    generateArrowSpans('.sevenEight', 7);
    generateArrowSpans('.eightSix', 8);
    generateArrowSpans('.sevenThree', 8);
}

function generateArrowSpans(selector, spans) {
    document.querySelector(selector).innerHTML = generateSpans(spans);
}

function generateSpans(amount) {
    let html = ``;
    for (let i = 0; i < amount; i++) {
        html += `<span></span>`;
    }
    return html;
}
