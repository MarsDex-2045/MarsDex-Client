"use strict";

function generateShippingResult(shipping, resourcesInformation, receiveTimeDate, receiveTime) {
    return `
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
}
