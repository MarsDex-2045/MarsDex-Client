export function createNewUnmodifiableResourceElement(resource, target) {
    const res = constructBaseHTML(resource, false);
    document.querySelector(target).innerHTML += res;
}

export function createModifiableResourceElement(resource, target){
    const res = constructBaseHTML(resource, true);
    document.querySelector(target).innerHTML += res;
}

function constructBaseHTML(resource, editble){
    let res =`<article class="resourceResult">
        <img src="assets/images/resources/${resource.name.replace(/ /g,"-")}.jpg" height="100" width="100" alt="resource-image" title="resource-image">
            <div class="resourceInformation">
                <h2>${resource.name}</h2>
                <ul>
                    <li><span class="fas fa-box-open"></span>Available Storage - ${resource.weight}kg</li>
                    <li><span class="fas fa-clock"></span>Resource Added: ${resource.added}</li>
                    <li><span class="fas fa-dollar-sign"></span>Price per unit - €${resource.price}</li>
                </ul>
            </div>`;
    if(editble){
        res += `<ul>
                    <li>
                        <a class="edit-resource-button" href="company-edit-resource.html"><span class="fas fa-edit"></span>Edit</a>
                    </li>
                    <li>
                        <a class="delete-resource-button" href="#"><span class="fas fa-trash"></span>Delete</a>
                    </li>
                </ul>`;
    }
    res += `</article>`;
    return res;
}
