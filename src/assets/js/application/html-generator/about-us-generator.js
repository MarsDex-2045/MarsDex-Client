"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
    console.log("TEST");
    loadAboutUs();
}

function loadAboutUs() {
    document.querySelector("main").innerHTML = `
        <article>
            <!-- Image Source: https://www.google.com/search?q=about+icon&sxsrf=ALeKk01zEM9rE8PMk1mRKoCahyMeMBjA8w:
            1605099938276&source=lnms&tbm=isch&sa=X&ved=2ahUKEwilkpmdx_rsAhWEyaQKHWLcBp8Q_AUoAXoECAUQAw&biw=1920&bih=937#imgrc=DqCClroORDNzCM -->
            <img src="assets/images/about-us.png" height="240"
                 width="300" title="about-logo" alt="about-logo">
            <div>
                <h2>About us</h2>
                <p>MarsDex, an online platform that is responsible for the registration and trading of resources or raw materials on Mars.
                 By resources we mean everything that grows on Mars or is in Mars. Our system can be perfectly used by any company to store, trade and purchase all their resources.
                  The purpose of our platform is to map all resources on Mars. Our platform is made for the common people on Mars,
                   for companies that produce, mine or need raw materials and for the ruling party on Mars.
                   Our platform not only knows who has which goods, but also where they are.</p>
            </div>
        </article>
        <article>
            <div>
                <h2>Global Map System</h2>
                <p>To ensure that we have a user friendly web application, we use a global mapping system. On this map you can see which colonies have which resources.
                 We also provide a tracking system on this map so you can follow the resources that are heading to your colony.
                  In later versions of our application, we will make this map interactive. So stay tuned!</p>
            </div>
            <!-- Image Source: https://www.pngegg.com/en/search?q=map+Icon -->
            <img src="assets/images/global-map-system.png"
                 height="240" width="300" title="statistics-logo" alt="statistics-logo">
        </article>
        <article>
            <!-- Image Source: https://www.cleanpng.com/png-order-management-system-inventory-management-softw-1398083/ -->
            <img src="assets/images/global-management-system.png" height="240" width="300"
                 title="management-logo" alt="management-logo">
            <div>
                <h2>Global Management System</h2>
                <p>Since we should be a system that is used over whole Mars, we have created it so that you can register all your company resources and still have a nice overview.
                 On our platform you can manage your resources by adding, editing and removing them in a super easy way.
                  Once our investors are convinced, we will extend our management system to a trading platform. This means you will be able to ask other colonies
                   for resources and you can sell them yourself to through a bidding war on a request for resources. Stay tuned for more!</p>
            </div>
        </article>
    `;
}
