const Page = require('./page');
const Alert = require('../components/Alert');

class LoginPage extends Page {

    urlPath = '/login';

    get elemInputUsername() {
        return $('//*[contains(@action,"/login")]//*[@name="email"]');
    }

    get elemInputPassword() {
        return $('//*[contains(@action,"/login")]//*[@name="password"]');
    }

    get elemCheckboxRemember() {
        return $('#rememberchb');
    }

    get elemBtnResetPassword() {
        return $('//*[text()="Reset Password" and @data-bs-target="#reset"]');
    }

    get elemBtSubmit() {
        return $('//button//*[text()="Login"]');
    }

    /**
     * @method open
     * @description will open the URL in the browser
     **/
    async open() {
        return super.open(this.urlPath);
    }

    /**
     * @method checkAllElementsArePresent
     * @description will check if the URL contains what is expected on this Page, 
     * and all important elements from this page will wait to be displayed.
     * If they do not appear at the configured time, will throw an error
     **/
    async checkAllElementsArePresent() {
        await expect(browser).toHaveUrlContaining(this.urlPath);
        await this.topMenuIsPresent();
        await this.elemInputUsername.waitForDisplayed();
        await this.elemInputPassword.waitForDisplayed();
        await this.elemCheckboxRemember.waitForDisplayed();
        await this.elemBtnResetPassword.waitForDisplayed();
        await this.elemBtSubmit.waitForDisplayed();
    }

    /**
     * @method login
     * @description will fill the username and password fields and click on the submit button
     * @param {String} username username
     * @param {String} password password
     **/
    async login(username, password) {
        await this.elemInputUsername.setValue(username);
        await this.elemInputPassword.setValue(password);
        await browser.waitAndClick(this.elemBtSubmit);
    }

    /**
     * @method checkAlertAppearsAndThenDisappears
     * @description will create a Alert object and check if the alert appears in the screen and then disappear.
     * If not, will throw an error
     * @param {String} username username
     * @param {String} password password
     **/
    async checkAlertAppearsAndThenDisappears() {
        const alert = new Alert('//*[contains(@class,"alert alert-danger failed")]');
        await alert.checkIsVisibleAndThenDisappear();
    }

}

module.exports = new LoginPage();
