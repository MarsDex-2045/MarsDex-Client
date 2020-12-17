"use strict";

const colonyResultDiv = document.querySelector("#martianColonies");
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
    document.querySelector("#martianColonies").innerHTML = "";
    dataset.forEach(colony => {
        document.querySelector("#martianColonies").innerHTML += `
                <article class="martianColony">
                    <img src="assets/images/colony-flags/${colony.name}.png" alt=${colony.name} title=${colony.name}>
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
    colonyResultDiv.innerHTML = "";
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
    const filter = document.querySelector("#filtersMartianColonies").value;
    if(filter.toLowerCase() === "name"){
        searchResults === null || searchResults === undefined
            ? displayResults(colonies.sort((a, b) => a.name > b.name))
            : displayResults(searchResults.sort((a, b) => a.name > b.name));
    } else{
        searchResults === null || searchResults === undefined
            ? displayResults(colonies.sort((a,b) => a.location.altitude < b.location.altitude))
            : displayResults(searchResults.sort((a,b) => a.location.altitude < b.location.altitude));
    }
}
