"use strict";

function apiGetCall(apiURI, httpVerb, requestBody) {
    const request = new Request(api + apiURI, {
        method: httpVerb,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody)
    });
    return fetch(request)
        .then(response => response.json());
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

function getShippings(companyId) {
    return apiGetCall(`company/${companyId}/transport`, "GET");
}

function getMyResources(companyId) {
    return apiGetCall(`company/${companyId}/resource`, "GET");
}
