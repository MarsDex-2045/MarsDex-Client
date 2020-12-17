"use strict";

function generateShippingResult(shipment, resourcesInformation, receiveTimeDate, receiveTime, colonyName) {
    let res = generateBaseHTML(shipment, resourcesInformation, receiveTimeDate, receiveTime, colonyName);
    res += `<a class="shipping-details-btn"><span class="fas fa-info-circle"></span>details</a>
            </div>`;
    return res;
}

function generateShippingResultWithoutDetails(shipment, resourcesInformation, receiveTimeDate, receiveTime, colonyName) {
    let res = generateBaseHTML(shipment, resourcesInformation, receiveTimeDate, receiveTime, colonyName);
    res += `</div>`;
    return res;
}

function generateBaseHTML(shipment, resourcesInformation, receiveTimeDate, receiveTime, colonyName){
    return `<div class="shippingResult">
        <ul>
            <li>Shipping ID: ${shipment.shippingId}</li>
            <li><span class="fas fa-shipping-fast"></span>Status: ${shipment.status.replace("_", " ").toLowerCase()}
            </li>
        </ul>
        <div class="shippingInformation">
            <ul>
                <li>
                    <p>Resources: ${resourcesInformation.totalResources}</p>
                    <p><span class="fas fa-weight-hanging"></span> ${resourcesInformation.totalWeight} kg</p>
                </li>
                <li>
                    <img src="assets/images/arrow.png" alt="arrow"/>
                </li>
                <li>
                    <p>Arrival Time</p>
                    <p><span class="fas fa-clock"></span>${receiveTimeDate} ${receiveTime}</p>
                </li>
                <li>
                    <img src="assets/images/arrow.png" alt="arrow" title="arrow"/>
                </li>
<li>
                            <p>${colonyName}</p>
                        </li>
                    </ul>
                </div>`;
}
