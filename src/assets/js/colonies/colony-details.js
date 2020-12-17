"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
    loadColonyDetails(localStorage.getItem("colony-id"));
}

function loadColonyDetails(colony_id) {
    getColonyDetails(colony_id).then(colonyObject => {
        const sortedResources = resourceFilter(sortResourcesByAlphabet(colonyObject.resources));
        loadGraphs(sortedResources);
        setTitles(colonyObject.name);
        setLocation(colonyObject.location);
        loadColonyResources(sortedResources);
    });
}

function setTitles(colony_name) {
    document.querySelectorAll(".colony-title").forEach(title => {
        title.innerText = colony_name;
    });
    document.querySelector("#colony-title").innerHTML = `
        <img src="assets/images/colony-flags/${colony_name.replace(/ /g,"-")}.png" alt="colony-icon">${colony_name}
    `;
    document.querySelector("#colony-flag").innerHTML = `
        <img src="assets/images/colony-flags/${colony_name.replace(/ /g,"-")}.png" alt="colony-icon">
    `;
}

function addResource(resource) {
    document.querySelector(".martianColonyDetailsResources").innerHTML += addColonyResourceDetails(resource);
}
