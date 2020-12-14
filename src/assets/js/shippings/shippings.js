"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
    loadShippings();
}

function loadShippings() {
    const companyId = 2;

    getShippings(companyId).then(response => {
        document.querySelector("#shippingResultList").innerHTML = ``;

        const currentDate = new Date();

        response.forEach(shipping => {
            createNewShippingElement(shipping, currentDate);
        });
    });
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
                    <li><span class="fas fa-shipping-fast"></span>Status: ${shipping.status}</li>
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
}
