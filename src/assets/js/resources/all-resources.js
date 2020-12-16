"use strict";
import {createNewUnmodifiableResourceElement as resourceElement} from "./modules/factory.js";

document.addEventListener("DOMContentLoaded", init);
const companyId = 2;
let page = 0;
const maxResults = 6;
let maxPages;
let totalResources;
let searchResults;
const pageCounter = "#pageNumber";

function init() {
    try {
        getColonyOfCompany().then(response => {
            getColonyDetails(response[0].id).then(details => {
                totalResources = resourceFilter(sortResourcesByAlphabet(details.resources));
                maxPages = Math.ceil(totalResources.length / maxResults);
                displayResults(totalResources);
                console.log(totalResources);
                document.querySelector(pageCounter).innerHTML = `${page + 1}/${maxPages}`;
            });
        });
    } catch (ex) {
        sendError(ex.message);
    }
    document.querySelector("#nextPage").addEventListener("click", nextPage);
    document.querySelector("#previousPage").addEventListener("click", previousPage);
    document.querySelector("#filtersResources").addEventListener("change", sortResults);
    document.querySelector("#searchAllResources").addEventListener("change", filterResults);
    document.querySelector("#search-all-resources-form").addEventListener("submit", e => e.preventDefault());
}

function getColonyOfCompany() {
    return getCompany(companyId).then(company => {
        return getColonies().then(colonies => {
            return crossReferenceColonyName(company, colonies);
        });
    });

    function crossReferenceColonyName(needle, haystack) {
        const res = haystack.filter(colony => colony.name.toLowerCase() === needle.colony.toLowerCase());
        if (res === undefined) {
            throw new Error("No colony found");
        } else {
            return res;
        }
    }
}

function displayResults(resources) {
    document.querySelector("#resourcesResultList").innerHTML = "";
    const max = (maxResults + (page * maxResults)) > totalResources.length ? totalResources.length : (maxResults + (page * maxResults));
    const count = (page * maxResults);
    for (let i = count; i < max; i++) {
        resourceElement(resources[i], "#resourcesResultList");
    }
}

function nextPage(e) {
    e.preventDefault();
    if (page < maxPages - 1 && totalResources.length > maxResults) {
        page++;
        displayResults(totalResources);
        document.querySelector(pageCounter).innerHTML = `${page + 1}/${maxPages}`;
    }
}

function previousPage(e) {
    e.preventDefault();
    if (page > 0) {
        page--;
        displayResults(totalResources);
        document.querySelector(pageCounter).innerHTML = `${page + 1}/${maxPages}`;
    }
}

function sortResults(e) {
    e.preventDefault();
    const filter = document.querySelector("#filtersResources").value;
    switch (filter) {
        case "name": {
            displayResults(totalResources.sort((a, b) => a.name > b.name));
            break;
        }
        case "weight": {
            displayResults(totalResources.sort((a,b) => a.weight > b.weight));
            break;
        }
        case "price": {
            displayResults(totalResources.sort((a,b) => a.price > b.price));
            break;
        }
        default: {
            displayResults(totalResources);
            break;
        }
    }
}

function filterResults(e) {
    e.preventDefault();
    searchResults = totalResources;
    const filter = document.querySelector("#searchAllResources").value.toLowerCase();
    if(filter === ""){
        searchResults = null;
        return displayResults(totalResources);
    }
    return displayResults(searchResults.filter(resource => resource.name.toLowerCase().includes(filter)));
}
