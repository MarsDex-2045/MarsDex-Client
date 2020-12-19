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
                displayResults(totalResources);
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
    maxPages = Math.ceil(resources.length / maxResults);
    const max = (maxResults + (page * maxResults)) > resources.length ? resources.length : (maxResults + (page * maxResults));
    const count = (page * maxResults);
    for (let i = count; i < max; i++) {
        resourceElement(resources[i], "#resourcesResultList");
    }
    document.querySelector(pageCounter).innerHTML = `${page + 1}/${maxPages}`;
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
    if (searchResults === null || searchResults === undefined) {
        displayResults(totalResources.sort((a, b) => {
            return sortFunction(a, b, filter);
        }));
    } else {
        displayResults(searchResults.sort((a, b) => {
            return sortFunction(a, b, filter);
        }));
    }
}

function sortFunction(a, b, sortValue) {
    if (a[sortValue] > b[sortValue]) {
        return 1;
    } else if (a[sortValue] < b[sortValue]) {
        return -1;
    }
    return 0;
}

function filterResults(e) {
    e.preventDefault();
    const filter = document.querySelector("#searchAllResources").value.toLowerCase();
    if (filter === "") {
        searchResults = null;
        return displayResults(totalResources);
    }
    searchResults = totalResources.filter(resource => resource.name.toLowerCase().includes(filter));
    return displayResults(searchResults);
}
