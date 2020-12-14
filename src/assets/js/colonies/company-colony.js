"use strict";

const colonyResultDiv = document.querySelector("#martianColonies");

document.addEventListener("DOMContentLoaded", init);

function init () {
    loadColonies();
}

function loadColonies() {
    clearAllColonies();

    getColonies().then(resultList => {
        resultList.forEach(colony => {
            document.querySelector("#martianColonies").innerHTML += `
                <article class="martianColony">
                    <img src="assets/images/colony-flags/colony-flag2.png" alt=${colony.name} title=${colony.name}>
                    <div class="colonyInformation">
                        <h2>${colony.name}</h2>
                        <ul>
                            <li><span class="fas fa-map-marker-alt"></span><div><strong>Location: </strong>${calculateLocation(colony.location)}</div></li>
                        </ul>
                    </div>
                    <a href="#" id=${colony.id} class="martianColonyDetails"><span class="fas fa-info-circle"></span>details</a>
                </article>`;
        });
        document.querySelectorAll(".martianColonyDetails").forEach(detailsButton => {
            detailsButton.addEventListener("click", doSomeShit);
        });
    });
}

function doSomeShit(e) {
    e.preventDefault();
    localStorage.setItem("colony-id", e.target.closest("article").querySelector("a").getAttribute("id"));
    window.location.assign("company-colony-details.html");
}

function clearAllColonies() {
    colonyResultDiv.innerHTML = "";
}
