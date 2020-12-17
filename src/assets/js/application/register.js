"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
    loadSelection();
}

function loadSelection() {
    getColonies().then(colonies => {
        colonies.forEach(colony => {
            document.querySelector("#colonies").innerHTML += `<option value=${colony.name}>${colony.name}</option>`;
        });
    });
}
