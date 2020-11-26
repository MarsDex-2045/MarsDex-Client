"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
    loadShippingHtml();
    document.querySelectorAll(".shipping-details-btn").forEach(button => button.addEventListener("click", showShippingDetails));
    document.querySelector("#shipping-details .close").addEventListener("click", hideShippingDetails);
}

function showShippingDetails(e) {
    e.preventDefault();
    document.getElementById("shipping-details").classList.remove("hidden");
}

function hideShippingDetails(e) {
    e.preventDefault();
    document.getElementById("shipping-details").classList.add("hidden");
}
