const { Given, When, Then } = require('@wdio/cucumber-framework');

const LoginPage = require('../pageObjects/login.page');
const AccountPage = require('../pageObjects/account.page');
const OffersPage = require('../pageObjects/offers.page');
const chai = require('chai');
const assert = chai.assert;

const pages = {
    login: LoginPage,
    account: AccountPage,
    offers: OffersPage
}

Given(/^I am opening the website on "([^"]*)" page$/, async (page) => {
    await pages[page].open();
});

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].checkAllElementsArePresent();
});

When(/^The user is in the (\w+) page$/, async (page) => {
    await pages[page].checkAllElementsArePresent();
});

Then(/^The user navigates to the (\w+) page$/, async (page) => {
    await pages[page].checkAllElementsArePresent();
});

When(/^The user do not have access to the page see messages "([^"]*)" and "([^"]*)"$/, async (message1, message2) => {
    await AccountPage.searchMessage(message1);
    await AccountPage.searchMessage(message2);
});

When(/^The user click on the "([^"]*)" from top menu$/, async (buttonName) => {
    switch (buttonName) {
        case "offers":
            LoginPage.clickBtTopMenuOffers();
            break;
        default:
            assert.equal(true, false, 'Button name is not valid! buttonName=' + buttonName);
    }
});
