const { When, Then, Given, } = require('@cucumber/cucumber')
const { POOManager } = require('../../pageobjects/POOManager');
const { expect } = require('@playwright/test');
const playwright = require('@playwright/test');
const { EmployePage } = require('../../pageobjects/EmployePage');
const { LoginPage } = require('../../pageobjects/LoginPage');



Given('I login to BrightHR application with valid data {string} and {string}', { timeout: 100 * 1000 }, async function (username, password) {
    const loginPage = this.pooManager.getLoginPage();
    await loginPage.goTo();
    await loginPage.validLogin(username, password);

});