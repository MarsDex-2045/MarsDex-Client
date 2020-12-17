"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
    document.querySelector("#formSendButton").addEventListener("click", sendMail);
    document.querySelector("#contactUsForm").addEventListener("submit", prevent);
}

function prevent(e) {
    e.preventDefault();
}

function sendMail(e) {
    e.preventDefault();

    sendError("success", "Mail send", "Mail successfully send, we will reply as quickly as possible.");
}
