/**
* Alert object containing all methods,to interact with a alert in the page
*/
module.exports = class Alert {

    elemAlert;

    constructor(elemXpath) {
        this.browser = browser;
        this.elemAlert = $(elemXpath);
    }

    /**
     * @method checkIsVisible
     * @description will wait X seconds until the object is visible. If the object do not appear on the configured time, will throw a error
     **/
    async checkIsVisible() {
        await this.elemAlert.waitForDisplayed();
    }

    /**
     * @method checkIsNotVisible
     * @description will wait X seconds until the object does not exist. If the object does not disappear on the configured time, will throw an error
     **/
    async checkIsNotVisible() {
        await this.elemAlert.waitForExist({ reverse: true });
    }

    /**
     * @method checkIsVisibleAndThenDisappear
     * @description will check if the alert appears in the screen and then disappear. If not, will throw an error
     **/
    async checkIsVisibleAndThenDisappear() {
        await this.checkIsVisible();
        await this.checkIsNotVisible();
    }

}
