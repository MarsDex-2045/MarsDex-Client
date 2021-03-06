"use strict";

let apiAddress;

function apiGetCall(apiURI, httpVerb, requestBody) {
    return loadAPI().then((api) => {
        const request = new Request(api + apiURI, {
            method: httpVerb,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody)
        });
        return fetch(request)
            .then(response => response.json());
    });
}

function getColonies() {
    return apiGetCall("colony", "GET");
}

function getColonyDetails(colony_id) {
    return apiGetCall(`colony/${colony_id}`, "GET");
}

function addResource(companyId, resourceName, resourceWeight, resourcePrice) {
    return apiGetCall(`company/${companyId}/resource`, "PUT",
        {
            "name": resourceName,
            "weight": parseFloat(resourceWeight),
            "price": resourcePrice
        }
    );
}

function getShipments(companyId) {
    return apiGetCall(`company/${companyId}/transport`, "GET");
}

function getMyResources(companyId) {
    return apiGetCall(`company/${companyId}/resource`, "GET");
}

function updatedResource(companyId, resourceName, resourceWeight) {
    return apiGetCall(`company/${companyId}/resource`, "PATCH", {
        "name": resourceName,
        "weight": parseFloat(resourceWeight)
    });
}

function removeResourceFetch(companyId, resource) {
    return apiGetCall(`company/${companyId}/resource/${resource.id}`, "DELETE");
}

function getCompanyResources(companyId) {
    return apiGetCall(`company/${companyId}/resource`, "GET");
}

function getCompany(companyId) {
    return apiGetCall(`company/${companyId}`, "GET");
}
function getNotifications(companyId, pushId) {
    return apiGetCall(`push/${pushId}/${companyId}`, "GET");
}
function addSubscription(endpoint, auth, p256dh) {
    return apiGetCall(`saveSubscription`, "POST",
        {
            "endpoint": endpoint,
            "auth": auth,
            "p256dh": p256dh
        }
    );
}
