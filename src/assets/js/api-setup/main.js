"use strict";

let config;
let api;

document.addEventListener("DOMContentLoaded", init);

async function init() {
    // Temporary hack to allow local testing of the web client and server.
    document.cookie = 'Authorization=Basic cHJvamVjdG1lZGV3ZXJrZXI6dmVya2VlcmQ=';
    config = await loadConfig();
    api = `${config.host ? config.host + '/': ''}${config.group ? config.group + '/' : ''}api/`;

    loadColonies();
}

async function loadConfig() {
    const response = await fetch("config.json");
    return response.json();
}
