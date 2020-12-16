"use strict";

document.addEventListener("DOMContentLoaded", init);
const companyId = 2;

function init() {
    try {
        getColonyOfCompany().then(response => {
            console.log(response[0].id, response);
            getColonyDetails(response[0].id).then(details => {
                let resources = resourceFilter(sortResourcesByAlphabet(details.resources));
                console.log(resources);
            });
        });
    } catch (ex) {
        sendError(ex.message);
    }
}

function getColonyOfCompany() {
    return getCompany(2).then(company => {
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
