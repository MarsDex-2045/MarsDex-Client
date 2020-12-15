function sortResourcesByAlphabet(resources) {
    return resources.sort((a, b) => (a.name > b.name) ? 1 : -1);
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

function loadGraphs(resources) {
    loadDoughnutChart(resources, createListOfResourceWeights(resources));
    emptyResourceList();
    const totalAmountOfResources = calcTotalAmountOfResources(resources);
    resources.forEach(resource => {
        addResourceCircle(resource, totalAmountOfResources);
    });
}

function loadDoughnutChart(resources, listOfSortedWeights) {
    const ctx = document.getElementById('myDoughnutChart').getContext('2d');
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: resources.map(resource => resource.name),
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

function loadColonyResources(resources) {
    emptyResources();
    resources.forEach(resource => addResource(resource));
}

function emptyResourceList() {
    document.querySelector("#resourcesListWithCircle").innerHTML = ``;
}

function emptyResources() {
    document.querySelector(".martianColonyDetailsResources").innerHTML = ``;
}

function calcTotalAmountOfResources(resources) {
    let total = 0;
    resources.forEach(resource => {
        total += resource.weight;
    });
    return total;
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

function addResourceCircle(resource, totalAmountOfResources) {
    const percentage = Math.ceil(calcPercentageResource(resource, totalAmountOfResources));
    document.querySelector("#resourcesListWithCircle").innerHTML += addResourceWithCircle(resource, percentage);
}
