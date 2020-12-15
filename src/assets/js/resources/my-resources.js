"use strict";

loadMyResources();

const myResources = [];

function loadMyResources() {
    if (!document.querySelector("#resourcesResultList")) {return;}
    const companyId = 2;

    getMyResources(companyId).then(response => {
        const companyResources = response.resources;
        companyResources.forEach(resource => {
            myResources.push(resource);
            createNewResourceElement(resource);
        });
    });
}

function createNewResourceElement(resource) {
    document.querySelector("#resourcesResultList").innerHTML += `
                <article class="resourceResult">
                <img src="assets/images/resources/${resource.name}.jpg" height="100" width="100" alt="resource-image" title="resource-image">

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
                            <span class="fas fa-coins"></span>
                            Price - ${resource.price}
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
    myResources.forEach(resource => {
        if (resource.name === resourceName) {
            localStorage.setItem("editResource", JSON.stringify(resource));
            window.location.assign("company-edit-resource.html");
        }
    });
}
