"use strict";

function removeResource(e) {
    e.preventDefault();
    getResourceFromTarget(e.currentTarget);
    console.log('Clicked Remove');
}
