"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
    document.querySelector("main").innerHTML += `
        <section id="colonyDetailsInformation">
            <h2 class="subTitle"><span class="fas fa-info-circle"></span>Colony information</h2>
            <div>
                <div id="colony-flag"></div>
                <ul>
                    <li><strong>Colony name: </strong><span class="colony-title">The crater bay colony</span></li>
                    <li><strong>Population: </strong>63478 inhabitants</li>
                    <li><strong>Surface: </strong>60,4 km²</li>
                    <li><strong>Location: </strong><span class="colony-location"></span></li>
                    <li><strong>Population density: </strong>1050,97 inhabitants/km²</li>
                    <li><strong>Mayor: </strong>X Æ A-12 (Mars Ruling Party MRP)</li>
                </ul>
            </div>
        </section>
    `;
}
