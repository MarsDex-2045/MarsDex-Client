'use strict';

document.addEventListener('DOMContentLoaded', init);

function init() {
    addHtmlPopUp();
    document.querySelector('#company-button').addEventListener('click', showOverview);
    document.querySelector('#settings').addEventListener('click', showSettings);
    document.querySelector('#account').addEventListener('click', showAccount);
    document.querySelector('#overview-page .close').addEventListener('click', hidePopUp);
    document.querySelector('#settings-page .close').addEventListener('click', showOverview);
    document.querySelector('#account-page .close').addEventListener('click', showOverview);
}

function addHtmlPopUp() {
    addPopUp();
}

function showOverview(e) {
    e.preventDefault();
    document.getElementById('overview-page').classList.remove('hidden');
    document.getElementById('settings-page').classList.add('hidden');
    document.getElementById('account-page').classList.add('hidden');
}

function showSettings(e) {
    e.preventDefault();
    document.getElementById('settings-page').classList.remove('hidden');
    document.getElementById('account-page').classList.add('hidden');
    document.getElementById('overview-page').classList.add('hidden');
}

function showAccount(e) {
    e.preventDefault();
    document.getElementById('account-page').classList.remove('hidden');
    document.getElementById('overview-page').classList.add('hidden');
    document.getElementById('settings-page').classList.add('hidden');
}

function hidePopUp(e) {
    e.preventDefault();
    document.getElementById('overview-page').classList.add('hidden');
    document.getElementById('settings-page').classList.add('hidden');
    document.getElementById('account-page').classList.add('hidden');
}
