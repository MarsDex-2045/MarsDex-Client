"use strict";

document.addEventListener("DOMContentLoaded", initHtmlGenerator);

function initHtmlGenerator() {
    buildMartianHeader();
}

function buildMartianHeader() {
    const container = document.querySelector("header");

    if (container !== undefined && container !== null) {
        container.innerHTML = `<h1><span id="companyName"><em class="dropCap">M</em>ars<em class="dropCap">D</em>ex</span></h1>

        <nav>
            <ul>
                <li>
                    <a href="martian-colonies.html"><span class="fas fa-city"></span><div>Colonies</div></a>
                </li>
                <li>
                    <a href="martian-global-map.html"><span class="fas fa-map-marked-alt"></span><div>Global Map</div></a>
                </li>
                <li>
                    <a href="martian-about-us.html"><span class="fas fa-info"></span><div>About Us</div></a>
                </li>
                <li>
                    <a href="martian-contact.html"><span class="fas fa-comment"></span><div>Contact</div></a>
                </li>
                <li id="register-button">
                    <a href="register.html" class="white"><span class="fas fa-user-plus white"></span><div>Register</div></a>
                </li>
                <li id="login-button">
                    <a href="index.html" class="white"><span class="fas fa-sign-in-alt white"></span><div>Login</div></a>
                </li>
            </ul>
        </nav>`;
    }
}
