"use strict";

function sendError(typeError, title, description) {
    document.querySelector("body").innerHTML += `
    <div id="error-popup">
        <div id="error-container">
            <img src="assets/images/${typeError}-icon.png" alt="error-icon">
            <div id="error-information">
                <h2 class="color-${typeError}">${title}</h2>
                <p>${description}</p>
            </div>
        </div>
    </div>`;
    setTimeout(function() {
        if (document.querySelector("#error-popup")) {
            document.querySelector("#error-popup").remove();
        }
    }, 5000);
}
