"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
    const id = 2;
    loadCompanyResources(id);
    loadCompanyRecentShipments(id);
    loadCompanyName(id);
}

function loadCompanyName(companyId) {
    getCompany(companyId).then(companyObject => {
        setCompanyName(companyObject.name);
    });
}

function setCompanyName(name) {
    document.querySelector("#company-name").innerText = name;
}

function loadCompanyResources(companyId) {
    getCompanyResources(companyId).then(companyResourcesObject => {
        const sortedResources = resourceFilter(sortResourcesByAlphabet(companyResourcesObject.resources));
        loadGraphs(sortedResources);
    });
}

function loadCompanyRecentShipments(companyId) {
    getShipments(companyId).then(shipmentArray => {
        const shipments = sortShipmentsByDateTime(shipmentArray);
        if (shipments.length !== 0) {
            if (shipments.length > 4) {
                const mostRecentShipments = [];
                for (let i = 0; i < 4; i++) {
                    mostRecentShipments.push(shipments[i]);
                }
                addShipments(mostRecentShipments, companyId);
            } else {
                addShipments(shipments, companyId);
            }
        }
    });
}

function sortShipmentsByDateTime(shipmentsToSort) {
    const shipments = [];
    shipmentsToSort.forEach(shipment => {
        if (shipment.receiveTime !== null) {
            shipments.push(shipment);
        }
    });
    return shipments.sort((a,b) => (a.receiveTime.date > b.receiveTime.date) ? 1 : -1);
}

function addShipments(shipments, companyId) {
    getCompany(companyId).then(companyObject => {
        for (let i = 0; i < shipments.length; i++) {
            let receiveTimeDate = ``;
            let receiveTime;
            const resourcesInformation = mapResourcesInformation(shipments[i].resources);
            if (shipments[i].receiveTime === null) {
                receiveTime = "to be confirmed";
            } else {
                receiveTime = shipments[i].receiveTime.time;
                receiveTimeDate = shipments[i].receiveTime.date;
            }
            document.querySelector("#shippingResultList").innerHTML +=
                generateShippingResultWithoutDetails(shipments[i], resourcesInformation, receiveTimeDate, receiveTime, companyObject.colony);
        }
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
