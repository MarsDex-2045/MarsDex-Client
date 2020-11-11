function getMessage() {
    return apiCall("message");
}

function apiCall(uri) {
    const request = new Request(api + uri, {
        method: 'GET',
        credentials: 'include'
    });
    return fetch(request)
        .then(response => response.json());
}
