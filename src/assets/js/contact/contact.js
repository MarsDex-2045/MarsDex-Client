"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
    loadContactForm();
}

function prevent(e) {
    e.preventDefault();
}

function sendMail(e) {
    e.preventDefault();
    if (document.querySelector("#contactUsFullName").value === "") {return;}
    sendError("success", "Mail send", "Mail successfully send, we will reply as quickly as possible.");
}
