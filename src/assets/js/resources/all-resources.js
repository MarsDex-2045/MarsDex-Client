"use strict";
import {createNewUnmodifiableResourceElement as resourceElement} from "./modules/factory.js";

document.addEventListener("DOMContentLoaded", init);
const companyId = 2;
let page = 0;
const maxResults = 6;
let maxPages;
let totalResources;

function init() {
    try {
        getColonyOfCompany().then(response => {
            getColonyDetails(response[0].id).then(details => {
                totalResources = resourceFilter(sortResourcesByAlphabet(details.resources));
                maxPages = Math.ceil(totalResources.length / maxResults);
                displayResults(totalResources);
                document.querySelector("#pageNumber").innerHTML = `${page + 1}/${maxPages}`;
            });
        });
    } catch (ex) {
        sendError(ex.message);
    }
    document.querySelector("#nextPage").addEventListener("click", nextPage);
    document.querySelector("#previousPage").addEventListener("click", previousPage);
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
    for (let i = count ; i < max; i++) {
        resourceElement(resources[i], "#resourcesResultList");
    }
}

function nextPage(e){
    e.preventDefault();
    if(page < maxPages - 1 && totalResources.length > maxResults){
        page++;
        displayResults(totalResources);
        document.querySelector("#pageNumber").innerHTML = `${page + 1}/${maxPages}`;
    }
}

function previousPage(e){
    e.preventDefault();
    if(page > 0){
        page--;
        displayResults(totalResources);
        document.querySelector("#pageNumber").innerHTML = `${page + 1}/${maxPages}`;
    }
}
