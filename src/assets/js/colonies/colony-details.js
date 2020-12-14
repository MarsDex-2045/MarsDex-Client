"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
    loadColonyDetails(localStorage.getItem("colony-id"));
}

function loadColonyDetails(colony_id) {
    getColonyDetails(colony_id).then(colonyObject => {
        const sortedResources = resourceFilter(sortResourcesByAlphabet(colonyObject.resources));
        loadGraphs(sortedResources);
        setTitles(colonyObject.name);
        setLocation(colonyObject.location);
        loadColonyResources(sortedResources);
    });
}

function loadGraphs(resources) {
    loadDoughnutChart(createListOfResourceWeights(resources));
    emptyResourceList();
    const totalAmountOfResources = calcTotalAmountOfResources(resources);
    resources.forEach(resource => {
        addResourceCircle(resource, totalAmountOfResources);
    });
}

function resourceFilter(allSortedResources) {
    const resources = [];
    allSortedResources.forEach(resource => {
        if (isDoubleResource(resources, resource)) {
            updateResources(resources, resource);
        } else {
            resources.push(resource);
        }
    });
    return resources;
}

function isDoubleResource(listOfUniqueResources, potentialDoubleResource) {
    for(let i=0; i<listOfUniqueResources.length; i++) {
        if(listOfUniqueResources[i].name === (potentialDoubleResource.name)) {
            return true;
        }
    }
    return false;
}

function updateResources(listOfUniqueResource, duplicateResource) {
    listOfUniqueResource.forEach(uniqueResource => {
        if (uniqueResource.name === duplicateResource.name) {
            uniqueResource.weight += duplicateResource.weight;
        }
    });
}

function emptyResourceList() {
    document.querySelector("#resourcesListWithCircle").innerHTML = ``;
}

function calcTotalAmountOfResources(resources) {
    let total = 0;
    resources.forEach(resource => {
        total += resource.weight;
    });
    return total;
}

function addResourceCircle(resource, totalAmountOfResources) {
    const percentage = Math.ceil(calcPercentageResource(resource, totalAmountOfResources));
    document.querySelector("#resourcesListWithCircle").innerHTML += `
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
            <img src="assets/images/resources/${resource.name}.jpg" alt=${resource.name} title=${resource.name}>
            <p>${resource.name}</p>
        </div>
    `;
}

function sortResourcesByAlphabet(resources) {
    return resources.sort((a, b) => (a.name > b.name) ? 1 : -1);
}

function createListOfResourceWeights(sortedResources) {
    const list = [];
    sortedResources.forEach(resource => {
        list.push(resource.weight);
    });
    return list;
}

function calcPercentageResource(resource, totalAmountOfResources) {
    return (resource.weight / totalAmountOfResources) * 100;
}

function setLocation(location) {
    document.querySelector(".colony-location").innerText = calculateLocation(location);
}

function setTitles(colony_name) {
    document.querySelectorAll(".colony-title").forEach(title => {
        title.innerText = colony_name;
    });
}

function loadColonyResources(resources) {
    emptyResources();
    resources.forEach(resource => addResource(resource));
}

function emptyResources() {
    document.querySelector(".martianColonyDetailsResources").innerHTML = ``;
}

function addResource(resource) {
    document.querySelector(".martianColonyDetailsResources").innerHTML += `
        <article class="martianColonyDetailsResource">
            <img src="assets/images/resources/${resource.name}.jpg" alt="${resource.name}" title="${resource.name}">
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

function loadDoughnutChart(listOfSortedWeights) {
    const ctx = document.getElementById('myDoughnutChart').getContext('2d');
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Alexandrite', 'Bauxite', 'Benitoite', 'Bertrandite', 'Coltan', 'LT Diamonds', 'Painite', 'Void Opals'],
            datasets: [{
                label: 'Amount',
                backgroundColor: ['rgb(87, 85, 217)', 'rgb(241, 241, 252)', 'rgb(50, 182, 67)', 'rgb(255, 183, 0)', 'rgb(232, 86, 0)', 'rgb(69, 77, 93)', 'rgb(114, 126, 150)'],
                borderColor: 'rgb(51,101,98)',
                data: [
                    listOfSortedWeights[0],
                    listOfSortedWeights[1],
                    listOfSortedWeights[2],
                    listOfSortedWeights[3],
                    listOfSortedWeights[4],
                    listOfSortedWeights[5],
                    listOfSortedWeights[6],
                    listOfSortedWeights[7],
                ]
            }]
        },
        options: {
            animation: {
                duration: 5000
            }
        }
    });
}
