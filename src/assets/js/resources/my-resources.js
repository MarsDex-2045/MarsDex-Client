"use strict";

loadMyResources();

const myResources = [];

function loadMyResources() {
    if (!document.querySelector("#resourcesResultList")) {return;} // SonarLint Issue: cannot be resolved.
    const companyId = 2;

    getMyResources(companyId).then(response => {
        const companyResources = response.resources;

        document.querySelector("#resourcesResultList").innerHTML = ``;
        companyResources.forEach(resource => {
            myResources.push(resource);
            createNewResourceElement(resource);
        });

        document.querySelector("#filtersResources").addEventListener("change", dynamicSortResources);
        document.querySelector("#search-my-resources-form").addEventListener("submit", preventSubmitForm);
        document.querySelector("#searchMyResources").addEventListener("search", searchResultResources);
    });
}

function createNewResourceElement(resource) {
    document.querySelector("#resourcesResultList").innerHTML += `
                <article class="resourceResult">
                <img src="assets/images/resources/${resource.name.replace(/ /g,"-")}.jpg" height="100" width="100" alt="resource-image" title="resource-image">

                <div class="resourceInformation">
                    <h2>${resource.name}</h2>

                    <ul>
                        <li>
                            <span class="fas fa-box-open"></span>
                            Available Storage - ${resource.weight}kg
                        </li>
                        <li>
                            <span class="fas fa-clock"></span>
                            Resource Added: ${resource.added}
                        </li>
                        <li>
                            <span class="fas fa-dollar-sign"></span>
                            Price per unit - €${resource.price}
                        </li>
                    </ul>
                </div>

                <ul>
                    <li>
                        <a class="edit-resource-button" href="company-edit-resource.html"><span class="fas fa-edit"></span>Edit</a>
                    </li>
                    <li>
                        <a class="delete-resource-button" href="#"><span class="fas fa-trash"></span>Delete</a>
                    </li>
                </ul>
           </article>`;
    document.querySelectorAll(".edit-resource-button").forEach(editResourceButton => {
        editResourceButton.addEventListener("click", getResourceFromTarget);
    });

    document.querySelectorAll(".delete-resource-button").forEach(deleteResourceButton => {
        deleteResourceButton.addEventListener("click", getResourceFromTarget);
    });
}

function getResourceFromTarget(e) {
    e.preventDefault();
    const resourceName = e.currentTarget.closest("article").querySelector("div h2").textContent;

    if (e.currentTarget.classList.contains("edit-resource-button")) {
        myResources.forEach(resource => {
            if (resource.name === resourceName) {
                localStorage.setItem("editResource", JSON.stringify(resource));
                window.location.assign("company-edit-resource.html");
            }
        });
    } else {
        removeResource(resourceName);
    }
}

function dynamicSortResources(e) {
    const sortValue = e.currentTarget.value;

    myResources.sort(
        function (a, b) {
            if (a[sortValue] > b[sortValue]) {
                return 1;
            } else if (a[sortValue] < b[sortValue]) {
                return -1;
            }
            return 0;
        }
    );

    document.querySelector("#resourcesResultList").innerHTML = ``;
    myResources.forEach(resource => {
        createNewResourceElement(resource);
    });
}

function searchResultResources(e) {
    e.preventDefault();
    const searchRequest = e.target.value;
    const sortValue = document.querySelector("#filtersResources").value;
    const searchResultResourcesList = [];

    myResources.forEach(resource => {
        if (resource[sortValue] === parseInt(searchRequest)) {
            searchResultResourcesList.push(resource);
        } else if (sortValue === "name" && JSON.stringify(resource[sortValue]).toLowerCase().replace("_", " ").match(searchRequest.toLowerCase())) {
            searchResultResourcesList.push(resource);
        }
    });

    document.querySelector("#resourcesResultList").innerHTML = ``;
    searchResultResourcesList.forEach(resource => {
        createNewResourceElement(resource);
    });
}

function preventSubmitForm(e) {
    e.preventDefault();
}

function removeResource(resourceName) {
    let resourceToFind = null;
    myResources.forEach(resource => {
        if (resource.name === resourceName) {
            resourceToFind = resource;
        }
    });

    const companyId = 2;
    if (resourceToFind === null) {return;}
    removeResourceFetch(companyId, resourceToFind).then(response => {
        if (response.deleted === true) {
            loadMyResources();
            sendError("success", "Resource removed", "Resource is removed successfully from your resources.");
        } else {
            sendError("error", "Failed removing resource", "Something went wrong removing the resource, try again later.");
        }
    });
}
