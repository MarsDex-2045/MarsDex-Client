"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
    document.querySelector(".cartDiv form input[type='submit']").addEventListener("click", registerOrLogin);
}

function registerOrLogin(e) {
    e.preventDefault();
    window.location.assign("company-overview.html");
}
