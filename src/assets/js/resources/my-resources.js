"use strict";

loadMyResources();

let myResources = [];

function loadMyResources() {
    const companyId = 2;

    getMyResources(companyId).then(response => {
        console.log(response);

        const companyResources = response.resources;

        companyResources.forEach(resource => {
            console.log(resource);
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
                        <a href="company-edit-resource.html"><span class="fas fa-edit"></span>Edit</a>
                    </li>
                    <li>
                        <a href="#"><span class="fas fa-trash"></span>Delete</a>
                    </li>
                </ul>
            </article>`;
        });
    });
}
