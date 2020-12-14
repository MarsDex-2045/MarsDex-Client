"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
    loadShippings();
    if ( document.querySelector("#buttonResult  a:first-of-type")) {
        document.querySelector("#buttonResult a:first-of-type").addEventListener("click", previousPage);
        document.querySelector("#buttonResult a:last-of-type").addEventListener("click", nextPage);
    }

    document.querySelector("#filtersShipping").addEventListener("change", dynamicSortShippings);
}

const maxShippingsOnPage = 4;
let currentPage = 1;
let maxPages;

const companyShippings = []; // Error that it is not used, but is used in shipping-details.js

function loadShippings() {
    const companyId = 2;

    getShippings(companyId).then(response => {
        response.forEach(shipping => {
            companyShippings.push(shipping);
        });

        maxPages = Math.ceil(response.length / maxShippingsOnPage);
        loadPageShippings(response, 0);
    });
}

function loadPageShippings(response, indexStart) {
    document.querySelector("#shippingResultList").innerHTML = ``;
    document.querySelector("#pageNumber").textContent = `${currentPage}/${maxPages}`;

    for (let i = 0; i < maxShippingsOnPage;) {
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

    document.querySelector("#shippingResultList").innerHTML += `
        <div class="shippingResult">
                <ul>
                    <li>Shipping ID: ${shipping.shippingId}</li>
                    <li><span class="fas fa-shipping-fast"></span>Status: ${shipping.status.replace("_", " ").toLowerCase()}</li>
                </ul>
                <div class="shippingInformation">
                    <ul>
                        <li>
                            <p>Resources: ${resourcesInformation.totalResources}</p>
                            <p><span class="fas fa-weight-hanging"></span>${resourcesInformation.totalWeight}kg</p>
                        </li>
                        <li>
                            <img src="assets/images/arrow.png" alt="arrow" title="arrow"/>
                        </li>
                        <li>
                            <p>Arrival Time</p>
                            <p><span class="fas fa-clock"></span>${receiveTimeDate} ${receiveTime}</p>
                        </li>
                        <li>
                            <img src="assets/images/arrow.png" alt="arrow" title="arrow"/>
                        </li>
                        <li>
                            <p>Your Colony</p>
                        </li>
                    </ul>
                </div>
                <a class="shipping-details-btn"><span class="fas fa-info-circle"></span>details</a>
            </div>
    `;

    document.querySelectorAll(".shipping-details-btn").forEach(button => button.addEventListener("click", showShippingDetails));
    document.querySelector("#shipping-details .close").addEventListener("click", hideShippingDetails);
}

function nextPage(e) {
    e.preventDefault();

    if (currentPage === maxPages) { return; }
    currentPage++;
    loadPageShippings(companyShippings, (currentPage - 1) * maxShippingsOnPage);
}

function previousPage(e) {
    e.preventDefault();

    if (currentPage === 1) { return; }
    currentPage--;
    loadPageShippings(companyShippings, (currentPage - 1) * maxShippingsOnPage);
}

function dynamicSortShippings(e) {
    const sortValue = e.currentTarget.value;

    companyShippings.sort(
        function (a, b) {
            if (a[sortValue] > b[sortValue]) {
                return 1;
            } else if (a[sortValue] < b[sortValue]) {
                return -1;
            }
            return 0;
        }
    );

    loadPageShippings(companyShippings, (currentPage - 1) * maxShippingsOnPage);
}
