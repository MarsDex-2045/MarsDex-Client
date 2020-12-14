"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
    document.querySelector("#submitResourceButton").addEventListener("click", newResourceForm);
}

function newResourceForm(e) {
    e.preventDefault();

    const formElement = document.querySelector("#resourceForm");

    const companyId = 1;

    const resourceName = formElement.querySelector("#resourceName").value;
    let resourceWeight = formElement.querySelector("#resourceAmount").value;
    const resourcePrice = 12.500;

    if (isNaN(resourceWeight)) {
        return;
    }

    resourceWeight = parseFloat(resourceWeight).toFixed(3);

    addResource(companyId, resourceName, resourceWeight, resourcePrice).then(function(response) {
        // Error implementation will be done later
    });
}
