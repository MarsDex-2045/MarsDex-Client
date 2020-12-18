"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
    loadColonyDetails(localStorage.getItem("colony-id"));
}

let searchResourceResults;
let sortedResources;

function loadColonyDetails(colony_id) {
    getColonyDetails(colony_id).then(colonyObject => {
        sortedResources = resourceFilter(sortResourcesByAlphabet(colonyObject.resources));
        loadGraphs(sortedResources);
        setTitles(colonyObject.name);
        setLocation(colonyObject.location);
        loadColonyResources(sortedResources);

        document.querySelector("#filtersColonyDetailsResources").addEventListener("change", sortResourceResult);
        document.querySelector("#searchMyColonyDetailsResources").addEventListener("change", filterResourceResults);
        document.querySelector("#search-colony-details-resources-form").addEventListener("submit", e => e.preventDefault());
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

function sortResourceResult(e) {
    e.preventDefault();
    const sortValue = document.querySelector("#filtersColonyDetailsResources").value;
    if (searchResourceResults === null || searchResourceResults === undefined) {
        loadColonyResources(sortedResources.sort((a, b) => {
            if (a[sortValue] > b[sortValue]) {
                return 1;
            } else if (a[sortValue] < b[sortValue]) {
                return -1;
            }
            return 0;
        }));
    } else {
        loadColonyResources(searchResourceResults.sort((a, b) => {
            if (a[sortValue] > b[sortValue]) {
                return 1;
            } else if (a[sortValue] < b[sortValue]) {
                return -1;
            }
            return 0;
        }));
    }
}

function filterResourceResults(e) {
    e.preventDefault();
    const filter = document.querySelector("#searchMyColonyDetailsResources").value.toLowerCase();
    if (filter === "") {
        searchResourceResults = null;
        return loadColonyResources(sortedResources);
    }
    searchResourceResults = sortedResources.filter(resource => resource.name.toLowerCase().includes(filter));
    return loadColonyResources(searchResourceResults);
}
