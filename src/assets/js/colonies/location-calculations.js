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
