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
                    <img src="assets/images/colony-flags/${colony.name.replace(/ /g,"-")}.png" alt="colony-icon">
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
            detailsButton.addEventListener("click", loadColonyDetails);
        });
    });
}

function clearAllColonies() {
    colonyResultDiv.innerHTML = "";
}
