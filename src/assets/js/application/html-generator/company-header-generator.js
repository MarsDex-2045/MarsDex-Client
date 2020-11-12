"use strict";

document.addEventListener("DOMContentLoaded", initHtmlGenerator);

function initHtmlGenerator() {
    buildCompanyHeader();
}

function buildCompanyHeader() {
    const container = document.querySelector("header");

    if (container !== undefined && container !== null) {
        container.innerHTML =
        `<h1><span id="companyName"><em class="dropCap">M</em>ars<em class="dropCap">D</em>ex</span></h1>

        <nav>
            <ul>
                <li>
                    <a href="company-overview.html"><span class="fas fa-home"></span><div>Home</div></a>
                </li>
                <li class="dropdown">
                    <div class="heading dropbtn"><span class="fas fa-cubes"></span><div>Resources</div></div>
                    <div class="dropdown-content">
                        <div>
                            <a href="my-resources.html" class="resourcesDropDown"><span class="fas fa-user-shield"></span><div>my resources</div></a>
                        </div>
                        <div>
                            <a href="all-resources.html" class="resourcesDropDown"><span class="fas fa-globe-europe"></span><div>all resources</div></a>
                        </div>
                    </div>
                </li>
                <li>
                    <a href="colonies.html"><span class="fas fa-city"></span><div>Colonies</div></a>
                </li>
                <li>
                    <a href="shipping.html"><span class="fas fa-plane-departure"></span><div>Shipping</div></a>
                </li>
                <li>
                    <a href="global-map.html"><span class="fas fa-map-marked-alt"></span><div>Global Map</div></a>
                </li>
                <li>
                    <a href="about-us.html"><span class="fas fa-info"></span><div>About Us</div></a>
                </li>
                <li>
                    <a href="contact.html"><span class="fas fa-comment"></span><div>Contact</div></a>
                </li>
                <li class="dropdown">
                    <div class="heading dropbtn"><span class="fas fa-bell"></span><div>Notifications</div></div>
                    <div class="dropdown-content">
                        <!-- these are examples, please add correct notifications -->
                        <div>
                            <p>Resources Low</p>
                            <ul>
                                <li><span class="fas fa-cubes"></span><div>Gold</div></li>
                                <li><span class="fas fa-box-open"></span><div>10kg left</div></li>
                            </ul>
                            <p class="details">details</p>
                        </div>
                        <div>
                            <p>Resources Low</p>
                            <ul>
                                <li><span class="fas fa-cubes"></span><div>Gold</div></li>
                                <li><span class="fas fa-box-open"></span><div>10kg left</div></li>
                            </ul>
                            <p class="details">details</p>
                        </div>
                        <div>
                            <p>Resources Low</p>
                            <ul>
                                <li><span class="fas fa-cubes"></span><div>Gold</div></li>
                                <li><span class="fas fa-box-open"></span><div>10kg left</div></li>
                            </ul>
                            <p class="details">details</p>
                        </div>
                        <!-- end of example -->
                    </div>
                </li>
                <li id="company-button">
                    <p>Company</p>
                </li>
            </ul>
        </nav>`;
    }
}
