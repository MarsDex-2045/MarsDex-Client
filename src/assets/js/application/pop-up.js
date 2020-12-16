'use strict';

document.addEventListener('DOMContentLoaded', init);

const overviewPageName = 'overview-page';
const settingsPageName = 'settings-page';
const accountPageName = 'account-page';

function init() {
    // add html
    addHtmlPopUp();
    addHtmlDetailsPopup();
    // view
    document.querySelector('#company-button').addEventListener('click', showOverview);
    document.querySelector('#settings').addEventListener('click', showSettings);
    document.querySelector('#account').addEventListener('click', showAccount);
    document.querySelectorAll('.details').forEach(detailButton => detailButton.addEventListener('click', showDetails));
    // hide
    document.querySelector('#overview-page .close').addEventListener('click', hidePopUp);
    document.querySelector('#settings-page .close').addEventListener('click', showOverview);
    document.querySelector('#account-page .close').addEventListener('click', showOverview);
    document.querySelector('#notificationDetails .close').addEventListener('click', hidePopUp);
}

function addHtmlPopUp() {
    addPopUp();
}

function addHtmlDetailsPopup() {
    generateDetails();
}

function showDetails(e) {
    e.preventDefault();
    document.getElementById('notificationDetails').classList.remove('hidden');
}

function showOverview(e) {
    e.preventDefault();
    document.getElementById(overviewPageName).classList.remove('hidden');
    document.getElementById(settingsPageName).classList.add('hidden');
    document.getElementById(accountPageName).classList.add('hidden');
}

function showSettings(e) {
    e.preventDefault();
    document.getElementById(settingsPageName).classList.remove('hidden');
    document.getElementById(accountPageName).classList.add('hidden');
    document.getElementById(overviewPageName).classList.add('hidden');
}

function showAccount(e) {
    e.preventDefault();
    document.getElementById(accountPageName).classList.remove('hidden');
    document.getElementById(overviewPageName).classList.add('hidden');
    document.getElementById(settingsPageName).classList.add('hidden');
}

function hidePopUp(e) {
    e.preventDefault();
    document.getElementById(overviewPageName).classList.add('hidden');
    document.getElementById(settingsPageName).classList.add('hidden');
    document.getElementById(accountPageName).classList.add('hidden');
    document.getElementById('notificationDetails').classList.add('hidden');
}
