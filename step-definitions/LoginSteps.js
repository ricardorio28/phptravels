const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../pageObjects/login.page');


When(/^I login with ([^"]*) and ([^"]*)$/, async (username, password) => {
    await LoginPage.login(username, password);
});

Then(/^I should see an alert and then it will disappear$/, async () => {
    await LoginPage.checkAlertAppearsAndThenDisappears();
});
