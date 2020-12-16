export function createNewUnmodifiableResourceElement(resource, target) {
    document.querySelector(target).innerHTML += `
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
                            <span class="fas fa-dollar-sign"></span>
                            Price per unit - €${resource.price}
                        </li>
                    </ul>
                </div>
           </article>`;
}
