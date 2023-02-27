const { Given, When, Then } = require('@wdio/cucumber-framework');
const OffersPage = require('../pageObjects/offers.page');

When(/^Validate with each offer have the correct elements$/, async function (tableWithListOfValidations) {
    await OffersPage.offersValidations(tableWithListOfValidations);
});
