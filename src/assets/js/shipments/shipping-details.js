"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
    loadShippingHtml();
}

function showShippingDetails(e) {
    e.preventDefault();
    document.getElementById("shipping-details").classList.remove("hidden");

    const sliceNumberGetId = 13;
    const divTarget = e.target.closest("div");
    const shippingId = divTarget.querySelector("ul > li:first-of-type").textContent.slice(sliceNumberGetId);
    const shippingInformation = getShippingInformation(shippingId);
    const shippingDetailsContainer = document.querySelector('#shipping-details');
    const shippingDetailsInfoWrapperContainer = shippingDetailsContainer.querySelector(".infoWrapper");
    const resourcesInformation = mapResourcesInformation(shippingInformation.resources);

    let receiveTimeDate = ``;
    let receiveTime;

    if (shippingInformation.receiveTime === null) {
        receiveTime = "to be confirmed";
    } else {
        receiveTime = shippingInformation.receiveTime.time;
        receiveTimeDate = shippingInformation.receiveTime.date;
    }

    shippingDetailsContainer.querySelector("h2").textContent = `Shipping ID: ${shippingInformation.shippingId}`;
    shippingDetailsInfoWrapperContainer.querySelector("#send-time").textContent = `${shippingInformation.sendTime.date} ${shippingInformation.sendTime.time}`;
    shippingDetailsInfoWrapperContainer.querySelector("#sender").textContent = `${shippingInformation.sender.name}`;
    shippingDetailsInfoWrapperContainer.querySelector("#duration").textContent = `${receiveTimeDate} ${receiveTime}`;
    shippingDetailsInfoWrapperContainer.querySelector("#weight").textContent = `${resourcesInformation.totalWeight}kg`;
    shippingDetailsInfoWrapperContainer.querySelector("#status").textContent = `${shippingInformation.status.toLowerCase().replace("_", " ")}`;
}

function getShippingInformation(shippingId) {
    for (let i = 0; i < companyShipments.length; i++) {
        if (companyShipments[i].shippingId === parseInt(shippingId)) {
            return companyShipments[i];
        }
    }
    return false;
}

function hideShippingDetails(e) {
    e.preventDefault();
    document.getElementById("shipping-details").classList.add("hidden");
}
