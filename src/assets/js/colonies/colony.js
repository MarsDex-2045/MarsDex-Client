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
    const colonyLatitude = colonyLocation.latitude.toString();
    const colonyLongitude = colonyLocation.longitude.toString();

    if (colonyLatitude === "0" && colonyLongitude === "0") {
        return "0°N 0°E";
    }

    return `${locationToDegrees(colonyLatitude, "latitude")} ${locationToDegrees(colonyLongitude, "longtitude")}`;
}

function locationToDegrees(location, type) {
    const degrees = location.substring(0, location.indexOf("."));
    const minutesCalculation = (parseFloat("0" + location.substring(location.indexOf("."), location.length)) * 60).toString();
    const minutes = minutesCalculation.substring(0, minutesCalculation.indexOf("."));
    const seconds = Math.round(parseFloat("0" + minutesCalculation.substring(minutesCalculation.indexOf("."), minutesCalculation.length)) * 60);

    let locationString = "";
    if (type === "latitude") {
        if (degrees >= "0") { locationString = `${degrees}° ${minutes}' ${seconds}" N`; }
        else if (degrees < "0") { locationString = `${degrees}° ${minutes}' ${seconds}" S`; }
    }
    else if (type === "longtitude") {
        if (degrees >= "0") { locationString = `${degrees}° ${minutes}' ${seconds}" E`; }
        else if (degrees < "0") { locationString = `${degrees}° ${minutes}' ${seconds}" W`; }
    }

    return locationString;
}

function clearAllColonies() {
    colonyResultDiv.innerHTML = "";
}
