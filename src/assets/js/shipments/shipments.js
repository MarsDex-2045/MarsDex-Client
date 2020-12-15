"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
    loadShipments(2);
    if (document.querySelector("#buttonResult a:first-of-type")) {
        document.querySelector("#buttonResult a:first-of-type").addEventListener("click", previousPage);
        document.querySelector("#buttonResult a:last-of-type").addEventListener("click", nextPage);
    }
    document.querySelector("#filtersShipping").addEventListener("change", dynamicSortShipments);
    document.querySelector("#search-form").addEventListener("submit", preventSubmit);
    document.querySelector("#searchShipping").addEventListener("search", searchResult);
}

const maxShipmentsOnPage = 4;
let currentPage = 1;
let maxPages;

const companyShipments = [];

function loadShipments(companyId) {
    getShipments(companyId).then(response => {
        response.forEach(shipping => {
            companyShipments.push(shipping);
        });
        maxPages = Math.ceil(response.length / maxShipmentsOnPage);
        loadPageShipments(response, 0);
    });
}

function loadPageShipments(response, indexStart) {
    maxPages = Math.ceil(response.length / maxShipmentsOnPage);

    document.querySelector("#shippingResultList").innerHTML = ``;
    document.querySelector("#pageNumber").textContent = `${currentPage}/${maxPages}`;

    for (let i = 0; i < maxShipmentsOnPage;) {
        if (response[indexStart + i] !== undefined) {
            createNewShippingElement(response[indexStart + i]);
        }
        i++;
    }
}

function mapResourcesInformation(resources) {
    let totalWeight = 0;
    let totalResources = 0;

    resources.forEach(resource => {
        totalResources += 1;
        totalWeight += resource.weight;
    });

    return {
        "totalResources": totalResources,
        "totalWeight": totalWeight
    };
}

function createNewShippingElement(shipping) {
    let receiveTimeDate = ``;
    let receiveTime;
    const resourcesInformation = mapResourcesInformation(shipping.resources);

    if (shipping.receiveTime === null) {
        receiveTime = "to be confirmed";
    } else {
        receiveTime = shipping.receiveTime.time;
        receiveTimeDate = shipping.receiveTime.date;
    }

    document.querySelector("#shippingResultList").innerHTML += generateShippingResult(shipping, resourcesInformation, receiveTimeDate, receiveTime);

    document.querySelectorAll(".shipping-details-btn").forEach(button => button.addEventListener("click", showShippingDetails));
    document.querySelector("#shipping-details .close").addEventListener("click", hideShippingDetails);
}

function nextPage(e) {
    e.preventDefault();

    if (currentPage === maxPages) { return; }
    currentPage++;
    loadPageShipments(companyShipments, (currentPage - 1) * maxShipmentsOnPage);
}

function previousPage(e) {
    e.preventDefault();

    if (currentPage === 1) { return; }
    currentPage--;
    loadPageShipments(companyShipments, (currentPage - 1) * maxShipmentsOnPage);
}

function dynamicSortShipments(e) {
    const sortValue = e.currentTarget.value;

    companyShipments.sort(
        function (a, b) {
            if (a[sortValue] > b[sortValue]) {
                return 1;
            } else if (a[sortValue] < b[sortValue]) {
                return -1;
            }
            return 0;
        }
    );

    loadPageShipments(companyShipments, (currentPage - 1) * maxShipmentsOnPage);
}

function preventSubmit(e) {
    e.preventDefault();
}

function searchResult(e) {
    e.preventDefault();

    const searchRequest = e.target.value;
    if (searchRequest === "" || searchRequest === " ") { return; }
    const sortValue = document.querySelector("#filtersShipping").value;

    const searchResultShipping = [];

    companyShipments.forEach(shipping => {
        if (shipping[sortValue] === parseInt(searchRequest)) {
            searchResultShipping.push(shipping);
        } else if (sortValue === "status" && JSON.stringify(shipping[sortValue]).toLowerCase().replace("_", " ").match(searchRequest)) {
            searchResultShipping.push(shipping);
        }
    });

    if (searchResultShipping.length === 0) {
        return;
    }

    loadPageShipments(searchResultShipping, (currentPage - 1) * maxShipmentsOnPage);
}
