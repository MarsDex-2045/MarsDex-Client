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
