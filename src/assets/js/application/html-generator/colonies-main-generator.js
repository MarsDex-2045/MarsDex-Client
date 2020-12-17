"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
    document.querySelector("main").innerHTML = `
        <h2 class="subTitle"><span class="fas fa-city"></span>Colonies</h2>
        <div class="margin-left">
            <form id="search-martian-colonies-form">
                <div>
                    <label for="searchMartianColonies"></label>
                    <input type="text" id="searchMartianColonies" name="search" placeholder="Search for a colony ...">
                    <span class="fas fa-search"></span>
                </div>
                <label for="filtersMartianColonies"></label>
                <select name="filters" id="filtersMartianColonies">
                    <option value="name">Name</option>
                    <option value="altitude">Altitude</option>
                </select>
            </form>
        </div>
        <!-- fill div with articles and colonies -->
        <div id="martianColonies"></div>
    `;
}
