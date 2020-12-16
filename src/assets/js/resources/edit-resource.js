"use strict";

document.addEventListener("DOMContentLoaded", init);

let resource;

function init() {
    loadEditResource();
    document.querySelector("#editResourceSubmitButton").addEventListener("click", submitEditResource);
}

function loadEditResource() {
    resource = JSON.parse(localStorage.getItem("editResource")) || [];
    if (resource.length === 0) {window.location.assign("company-my-resources.html");}
    localStorage.removeItem("editResource");

    document.querySelector("#resourceName").setAttribute("value", resource.name);
    document.querySelector("#resourceAmount").value = resource.weight;
}

function submitEditResource(e) {
    e.preventDefault();
    let updatedWeight = e.currentTarget.closest("form").querySelector('div:last-of-type input').value;

    if (isNaN(updatedWeight)) {
        return;
    }

    updatedWeight = parseFloat(updatedWeight).toFixed(3);
    const companyId = 2;

    updatedResource(companyId, resource.name, updatedWeight).then(response => {
        if (response.updated === true) {
            window.location.assign("company-my-resources.html");
        } else {
            // Error Implementation
            sendError("error", "Resource updating failed", "The resource weight is not correctly changed.");
        }
    });
}
