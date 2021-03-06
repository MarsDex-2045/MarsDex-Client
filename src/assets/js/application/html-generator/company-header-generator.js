"use strict";

document.addEventListener("DOMContentLoaded", initHtmlGenerator);

function initHtmlGenerator() {
    localStorage.setItem("company-id", 2);
    buildCompanyHeader("MaMiCo");
    loadFooter();
}

function buildCompanyHeader(name) {
    const container = document.querySelector("header");
    container.innerHTML =
        `<h1><a href="company-overview.html"><span id="companyName"><em class="dropCap">M</em>ars<em class="dropCap">D</em>ex</span></a></h1>

        <nav>
            <ul>
                <li>
                    <a href="company-overview.html"><span class="fas fa-home"></span><div>Home</div></a>
                </li>
                <li class="dropdown">
                    <div class="heading dropbtn"><span class="fas fa-cubes"></span><div>Resources</div></div>
                    <div class="dropdown-content">
                        <div>
                            <a href="company-my-resources.html" class="resourcesDropDown"><span class="fas fa-user-shield"></span><div>my resources</div></a>
                        </div>
                        <div>
                            <a href="company-all-resources.html" class="resourcesDropDown"><span class="fas fa-globe-europe"></span><div>Colony resources</div></a>
                        </div>
                    </div>
                </li>
                <li>
                    <a href="company-colonies.html"><span class="fas fa-city"></span><div>Colonies</div></a>
                </li>
                <li>
                    <a href="company-shipping.html"><span class="fas fa-plane-departure"></span><div>Shipping</div></a>
                </li>
                <li>
                    <a href="company-global-map.html"><span class="fas fa-map-marked-alt"></span><div>Global Map</div></a>
                </li>
                <li>
                    <a href="company-about-us.html"><span class="fas fa-info"></span><div>About Us</div></a>
                </li>
                <li>
                    <a href="company-contact.html"><span class="fas fa-comment"></span><div>Contact</div></a>
                </li>
                <li class="dropdown">
                    <div class="heading dropbtn"><span class="fas fa-bell"></span><div>Notifications</div></div>
                    <div class="dropdown-content">
                        <!-- these are examples, please add correct notifications -->
                        <div>
                            <p>Resources Low</p>
                            <ul>
                                <li><span class="fas fa-cubes"></span><div>Benitoite</div></li>
                                <li><span class="fas fa-box-open"></span><div>150KG left</div></li>
                            </ul>
                            <p class="details">details</p>
                        </div>
                        <!-- end of example -->
                    </div>
                </li>
                <li id="company-button">
                    <p>${name}</p>
                </li>
            </ul>
        </nav>`;
}
