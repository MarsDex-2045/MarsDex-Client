'use strict';

function addPopUp() {
    document.querySelector('body').innerHTML += `
        <section id="overview-page" class="hidden">
            <h2>MaMiCo</h2>
            <div>
                <nav>
                    <ul>
                        <li id="settings"><span class="fas fa-cog"></span><strong>settings</strong></li>
                        <li id="account"><span class="fas fa-user-circle"></span><strong>account</strong></li>
                        <li><a href="company-about-us.html"><span class="fas fa-info-circle"></span><strong>help</strong></a></li>
                        <li><a href="index.html"><span class="fas fa-sign-out-alt"></span><strong>logout</strong></a></li>
                    </ul>
                </nav>
                <a href="#" class="close"><span class="fas fa-times"></span></a>
            </div>
        </section>

        <section id="settings-page" class="hidden">
            <h2><span class="fas fa-cog"></span><strong>settings</strong></h2>
            <div>
                <h3><span class="fas fa-volume-down"></span><strong>sound</strong></h3>
                <form>
                    <div>
                        <input type="radio" name="sound" id="soundOn" value="on"/>
                        <label for="soundOn">on</label>
                    </div>
                   <div>
                       <input type="radio" name="sound" id="soundOff" value="off" checked/>
                       <label for="soundOff">off</label>
                    </div>
                </form>
            </div>
            <div>
                <h3><span class="fas fa-language"></span><strong>language</strong></h3>
                <form>
                    <div>
                        <input type="radio" name="language" id="english" value="english" checked="checked"/>
                        <label for="english">english</label>
                    </div>
                    <div>
                        <input type="radio" name="language" id="francais" value="francais"/>
                        <label for="francais">francais</label>
                    </div>
                    <div>
                        <input type="radio" name="language" id="nederlands" value="nederlands"/>
                        <label for="nederlands">nederlands</label>
                    </div>
                    <div>
                        <input type="radio" name="language" id="deutsch" value="deutsch"/>
                        <label for="deutsch">deutsch</label>
                    </div>
                </form>
            </div>
            <a href="#" class="close"><span class="fas fa-arrow-left"></span></a>
        </section>

        <section id="account-page" class="hidden">
            <h2><span class="fas fa-user-circle"></span><strong>account</strong></h2>
            <form>
                <label for="registerCompanyName">Company Name</label>
                <input title="companyName" required type="text" value="MaMiCo" id="registerCompanyName">

                <label for="registerEmail">Email</label>
                <input title="email" required type="text" value="mamico@mars.com" id="registerEmail">

                <label for="registerColonyName">Colony Name</label>
                <input title="colonyName" required type="text" value="Durrance Camp" id="registerColonyName">

                <label for="registerCompanyPhoneNumber">Phone Number</label>
                <input title="companyPhoneNumber" required type="tel" value="+3422893567" id="registerCompanyPhoneNumber">

                <label for="registerPassword">Password</label>
                <input title="password" required type="password" id="registerPassword">

                <label for="registerPasswordRepeat">Repeat Password</label>
                <input title="password" required type="password" id="registerPasswordRepeat">

                <input type="submit" value="save changes" title="save changes" id="save">
            </form>
            <a href="#" class="close"><span class="fas fa-arrow-left"></span></a>
        </section>
    `;
}

function generateDetails() {
    document.querySelector('body').innerHTML += `
        <section id="notificationDetails" class="hidden">
            <h2>Details <span id="notificationTitle">Low Resources</span></h2>
            <ul>
                <li><span class="fas fa-cubes"></span><div>Resource: <span id="resourceTitle">Gold</span></div></li>
                <li><span class="fas fa-box-open"></span><div>Remaining resources: <span id="resourceLeft">15kg</span></div></li>
                <li><span class="fas fa-clock"></span><div>Date and time: <span id="dateAndTime">15/03/2065 14:45</span></div></li>
            </ul>
            <h3><span class="fas fa-envelope"></span><strong>Message</strong></h3>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <a href="#" class="close"><span class="fas fa-times"></span></a>
        </section>
    `;
}

function loadShippingHtml() {
    document.querySelector('body').innerHTML += `
        <section id="shipping-details" class="hidden">
            <h2>Shipping ID <span id="shipping-ID">032932243234</span></h2>
            <div class="infoWrapper">
                <ul class="shipping-information">
                    <li><span class="fas fa-clock"></span>Datetime of departure:<span id="send-time" class="info">15/03/2055 08:16:00</span></li>
                    <li><span class="fas fa-city"></span>Colony sender:<span id="sender" class="info">The Crater Bay Colony</span></li>
                    <li><span class="fas fa-hourglass-half"></span>Receive time:<span id="duration" class="info">34 hours</span></li>
                    <li><span class="fas fa-weight-hanging"></span>Weight:<span id="weight" class="info">3500 kilograms</span></li>
                    <li><span class="fas fa-shuttle-van"></span>Status:<span id="status" class="info">train</span></li>
                </ul>
            </div>
            <div class="tableWrapper">
                <ul class="shipping-table">
                    <li>
                        <p>Potato</p>
                        <p><span class="fas fa-weight-hanging"></span>150kg</p>
                    </li>
                    <li>
                        <span class="fas fa-arrow-right"></span>
                    </li>
                    <li>
                        <p>Receive Time</p>
                        <p><span class="fas fa-clock"></span>1h 30m</p>
                    </li>
                    <li>
                        <span class="fas fa-arrow-right"></span>
                    </li>
                    <li>
                        <p id="destination">Your colony</p>
                    </li>
                </ul>
            </div>
            <a href="#" class="close"><span class="fas fa-times"></span></a>
        </section>
    `;
}
