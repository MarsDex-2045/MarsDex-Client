"use strict";

const colonyResultDiv = document.querySelector("#martianColonies");

function loadColonies() {
    clearAllColonies();

    getColonies().then(resultList => {
        resultList.forEach(colony => {
            console.log(colony);
            document.querySelector("#martianColonies").innerHTML += `
                <article class="martianColony">
                    <img src="assets/images/colony-flags/colony-flag2.png" alt=${colony.name} title=${colony.name}>
                    <div class="colonyInformation">
                        <h2>${colony.name}</h2>
                        <ul>
                            <li><span class="fas fa-map-marker-alt"></span><div><strong>Location: </strong>${calculateLocation(colony.location)}</div></li>
                        </ul>
                    </div>
                    <a href="martian-colony-details.html" class="martianColonyDetails"><span class="fas fa-info-circle"></span>details</a>
                </article>`;
        });
    });
}

function calculateLocation(colonyLocation) {
    let colonyLatitude = colonyLocation.latitude.toString();
    let colonyLongitude = colonyLocation.longitude.toString();

    if (colonyLatitude === "0" && colonyLongitude === "0") {
        return "0°N 0°E";
    }

    console.log(colonyLatitude, colonyLongitude);

    // Calculate Latitude to degrees, minutes, seconds
    locationToDegrees(colonyLatitude);
    locationToDegrees(colonyLongitude);

    console.log(locationToDegrees(colonyLatitude), locationToDegrees(colonyLongitude));

    return `${locationToDegrees(colonyLatitude)} ${locationToDegrees(colonyLongitude)}`;
}

function locationToDegrees(location) {
    let degrees = location.substring(0, location.indexOf("."));
    let minutes = "0" + location.substring(location.indexOf("."), location.length);

    let minutesToInt = parseFloat(minutes);

    console.log(minutesToInt);

    return degrees;
}

function clearAllColonies() {
    colonyResultDiv.innerHTML = "";
}
