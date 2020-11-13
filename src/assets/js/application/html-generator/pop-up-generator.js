'use strict';

function addPopUp() {
    document.querySelector('body').innerHTML += `
        <section id="overview-page" class="hidden">
            <h2>Temporary name company</h2>
            <div>
                <nav>
                    <ul>
                        <li id="settings"><span class="fas fa-cog"></span><div>settings</div></li>
                        <li id="account"><span class="fas fa-user-circle"></span><div>account</div></li>
                        <li><a href="#"><span class="fas fa-info-circle"></span><div>help</div></a></li>
                        <li><a href="index.html"><span class="fas fa-sign-out-alt"></span><div>logout</div></a></li>
                    </ul>
                </nav>
                <a href="#" class="close"><span class="fas fa-times"></span></a>
            </div>
        </section>

        <section id="settings-page" class="hidden">
            <h2><span class="fas fa-cog"></span><div>settings</div></h2>
            <div>
                <h3><span class="fas fa-volume-down"></span><div>sound</div></h3>
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
                <h3><span class="fas fa-language"></span><div>language</div></h3>
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
            <h2><span class="fas fa-user-circle"></span><div>account</div></h2>
            <form>
                <label for="registerCompanyName">Company Name</label>
                <input title="companyName" required type="text" id="registerCompanyName">

                <label for="registerEmail">Email</label>
                <input autofocus title="email" required type="text" id="registerEmail">

                <label for="registerColonyName">Colony Name</label>
                <input title="colonyName" required type="text" id="registerColonyName">

                <label for="registerCompanyPhoneNumber">Phone Number</label>
                <input title="companyPhoneNumber" required type="tel" id="registerCompanyPhoneNumber">

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
            <h3><span class="fas fa-envelope"></span><div>Message</div></h3>
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
