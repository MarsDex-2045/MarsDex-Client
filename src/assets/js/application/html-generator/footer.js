"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
    loadFooter();
}

function loadFooter() {
    document.querySelector("body").innerHTML += `
        <footer>
            <p>&copy; Howest MarsDex 2020</p>
        </footer>
    `;
}
