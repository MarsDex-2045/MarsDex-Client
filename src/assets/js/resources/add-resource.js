"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
    document.querySelector("#resourceForm").addEventListener("submit", newResourceForm);
}

function newResourceForm(e) {
    e.preventDefault();

    const formElement = document.querySelector("#resourceForm");
    const resourceName = formElement.querySelector("#resourceName").value;
    let resourceWeight = formElement.querySelector("#resourceAmount").value;
    const resourcePrice = 12.500;

    if (isNaN(resourceWeight)) {
        return;
    }

    resourceWeight = parseFloat(resourceWeight).toFixed(3);
    addResource(localStorage.getItem("company-id"), resourceName, resourceWeight, resourcePrice).then(function(response) {
        if (response.processed === true) {
            window.location.assign("company-my-resources.html"); // Temporarily
        } else {
            sendError("error", "Failed adding resource", response.cause);
            document.querySelector("#resourceForm").addEventListener("submit", newResourceForm);
        }
    });
}
