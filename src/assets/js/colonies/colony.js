"use strict";

const colonyResultDiv = "#martianColonies";
let colonies;
let searchResults;

document.addEventListener("DOMContentLoaded", init);

function init () {
    loadColonies();
}

function loadColonies() {
    clearAllColonies();
    getColonies().then(resultList => {
        colonies = resultList;
        displayResults(resultList);
        document.querySelector("#searchMartianColonies").addEventListener('change', searchColony);
        document.querySelector("#filtersMartianColonies").addEventListener('change', filterColony);
        document.querySelector("#search-martian-colonies-form").addEventListener("submit", e => e.preventDefault());
    });
}

function displayResults(dataset){
    clearAllColonies();
    dataset.forEach(colony => {
        document.querySelector(colonyResultDiv).innerHTML += `
                <article class="martianColony">
                    <img src="assets/images/colony-flags/${colony.name.replace(/ /g,"-")}.png" alt="colony-icon">
                    <div class="colonyInformation">
                        <h2>${colony.name}</h2>
                        <ul>
                            <li><span class="fas fa-map-marker-alt"></span><div><strong>Location: </strong>${calculateLocation(colony.location)}</div></li>
                        </ul>
                    </div>
                    <a href="#" id=${colony.id} class="martianColonyDetails"><span class="fas fa-info-circle"></span>details</a>
                </article>`;
        document.querySelectorAll(".martianColonyDetails").forEach(detailsButton => {
            detailsButton.addEventListener("click", loadColonyDetails);
        });
    });
}

function clearAllColonies() {
    document.querySelector(colonyResultDiv).innerHTML = "";
}

function searchColony(e) {
    e.preventDefault();
    const filter = document.querySelector("#searchMartianColonies").value.toLowerCase();
    if (filter === ""){
        displayResults(colonies);
        searchResults = null;
    }
    searchResults = colonies.filter(colony => colony.name.toLowerCase().includes(filter));
    displayResults(searchResults);
    console.log("Searching colonies.");
}

function filterColony(e) {
    e.preventDefault();
    console.log("Filtering colonies.");
    const sortValue = document.querySelector("#filtersMartianColonies").value.toLowerCase();

    console.log(colonies);

    if (searchResults === undefined || searchResults === null) {
        sortColoniesWithoutSearchResult(sortValue);
    } else {
        sortColoniesWithSearchResult(sortValue);
    }
}

function sortColoniesWithoutSearchResult(sortValue) {
    displayResults(colonies.sort((a, b) => {
        if (sortValue === "altitude") {
            if (a.location[sortValue] > b.location[sortValue]) {
                return 1;
            } else if (a.location[sortValue] < b.location[sortValue]) {
                return -1;
            }
        } else {
            if (a[sortValue] > b[sortValue]) {
                return 1;
            } else if (a[sortValue] < b[sortValue]) {
                return -1;
            }
        }
        return 0;
    }));
}

function sortColoniesWithSearchResult(sortValue) {
    displayResults(searchResults.sort((a, b) => {
        if (sortValue !== "altitude") {
            if (a[sortValue] > b[sortValue]) {
                return 1;
            } else if (a[sortValue] < b[sortValue]) {
                return -1;
            }
        } else {
            if (a.location[sortValue] > b.location[sortValue]) {
                return 1;
            } else if (a.location[sortValue] < b.location[sortValue]) {
                return -1;
            }
        }
        return 0;
    }));
}
