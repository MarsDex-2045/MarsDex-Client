"use strict";

function addResourceWithCircle(resource, percentage) {
    return `
        <div class="resourceWithCircle">
            <svg class="circle-chart" viewbox="0 0 33.83098862 33.83098862" width="60" height="60" xmlns="http://www.w3.org/2000/svg">
                <circle class="circle-chart__background" stroke="#ffffff" stroke-width="2" fill="none" cx="16.91549431" cy="16.91549431" r="15.91549431"/>
                <circle class="circle-chart__circle" stroke=var(--fill) stroke-width="2" stroke-dasharray="${percentage},100" stroke-linecap="round" fill="none"
                    cx="16.91549431"
                    cy="16.91549431"
                    r="15.91549431"/>
                <g class="circle-chart__info">
                    <text class="circle-chart__percent" x="16.91549431" y="16.91549431" alignment-baseline="central" text-anchor="middle" font-size="10">${percentage}%</text>
                </g>
            </svg>
            <img src="assets/images/resources/${resource.name.replace(/ /g,"-")}.jpg" alt="resource-icon">
            <p>${resource.name}</p>
        </div>
    `;
}

function addColonyResourceDetails(resource) {
    return `
        <article class="martianColonyDetailsResource">
            <img src="assets/images/resources/${resource.name.replace(/ /g,"-")}.jpg" alt="resource-icon">
            <div class="resourceInformation">
                <h2>${resource.name}</h2>
                <ul>
                    <li><span class="fas fa-box-open"></span><div><strong>Available Resources: </strong>${resource.weight} kg</div></li>
                    <li><span class="fas fa-dollar-sign"></span><div><strong>Price per unit: </strong>€${resource.price}</div></li>
                    <li><span class="fas fa-clock"></span><div><strong>Resource Added: </strong>${resource.added}</div></li>
                </ul>
            </div>
        </article>
    `;
}
