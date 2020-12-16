'use strict';
import {baseMap} from "./modules/factory.js";

document.addEventListener('DOMContentLoaded', init);

function init() {
    loadMap();
}

function loadMap() {
    getColonies().then(data => {
        baseMap('map-container');
    });
}
