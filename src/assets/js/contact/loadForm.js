"use strict";

function loadContactForm() {
    document.querySelector("main").innerHTML = `
        <h2 class="subTitle"><span class="fas fa-comment"></span>Contact us</h2>
        <div class="contact-wrapper">
            <div id="contactUsDiv">
                <form action="#" method="post" id="contactUsForm">
                    <div class="formBoxContact">
                        <div class="formInputBox">
                            <span class="fas fa-user"></span>
                            <input placeholder="Full Name" autofocus title="fullName" required type="text" id="contactUsFullName">
                        </div>
                        <div class="formInputBox">
                            <span class="fas fa-building"></span>
                            <input placeholder="Company Name" title="companyName" required type="text" id="contactUsCompanyName">
                        </div>
                    </div>
                    <div class="formBoxContact">
                        <div class="formInputBox">
                            <span class="fas fa-mobile"></span>
                            <input placeholder="Company Phone Number" title="companyPhoneNumber" required type="tel" id="contactUsPhoneNumber">
                        </div>
                        <div class="formInputBox">
                            <span class="fas fa-envelope"></span>
                            <input placeholder="E-mail" title="companyEmail" required type="email" id="contactUsEmail">
                        </div>
                    </div>
                    <div class="formBoxContact">
                        <div class="formInputBox">
                            <span class="fas fa-comment-alt"></span>
                            <input placeholder="Subject" title="companySubject" required type="text" id="contactUsSubject">
                        </div>
                    </div>
                    <div class="formBoxContact">
                        <div class="formAreaBox">
                            <label for="contactUsMessage"></label>
                            <textarea placeholder="Type here your message!" required id="contactUsMessage" name="contactUsMessage"></textarea>
                        </div>
                    </div>
                    <div id="formSendButton">
                        <input type="submit" value="Send" title="Send">
                    </div>
                </form>

            </div>

            <div id="marsDexInformation">
                <div>
                    <h3>MarsDex</h3>
                    <ul>
                        <li><span class="fas fa-map-marker-alt"></span>Somewhere on Mars</li>
                        <li><span class="fas fa-monument"></span>X157-8138</li>
                        <li><span class="fas fa-mobile"></span>0211 15 85 51 45</li>
                        <li><span class="fas fa-envelope"></span>info.marsdex@outlook.com</li>
                    </ul>
                    <!-- Source Image: https://www.google.com/search?q=maps&sxsrf=ALeKk01cPwHhMJJcRSskq3lPkr0FeIEpZQ:
                    1605180869605&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjarqHc9PzsAhVH_KQKHTlgDgoQ_AUoAnoECAUQBA&biw=1920&bih=937#imgrc=ZqnUXmqJFt3PoM -->
                    <img src="assets/images/maps.png" height="200" width="350" title="MarsDex-Location" alt="MarsDex-Location">
                </div>
            </div>
        </div>`;

    document.querySelector("#formSendButton").addEventListener("click", sendMail);
    document.querySelector("#contactUsForm").addEventListener("submit", prevent);
}
