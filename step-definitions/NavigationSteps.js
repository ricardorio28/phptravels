const { Given, When, Then } = require('@wdio/cucumber-framework');

const LoginPage = require('../pageObjects/login.page');
const AccountPage = require('../pageObjects/account.page');
const OffersPage = require('../pageObjects/offers.page');

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


