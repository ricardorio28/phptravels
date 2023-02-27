const TopMenu = require('../components/TopMenu');

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {

    base_url = 'https://www.phptravels.net';
    topMenu = new TopMenu();

    /**
     * @method open
     * @description will open the URL in the browser
     **/
    async open(path) {
        return browser.url(this.base_url + path);
    }

    /**
     * @method searchMessage
     * @description will search for a text in a page
     **/
    async searchMessage(message) {
        await $('//*[contains(text(), "' + message + '")]').waitForDisplayed();
    }

    /**
     * @method navigationBack
     * @description navigate back to the previous page
     **/
    async navigationBack() {
        await browser.back();
    }

    /**
     * @method topMenuIsPresent
     * @description validate if the top menu is present
     **/
    async topMenuIsPresent() {
        await this.topMenu.checkAllElementsArePresent();
    }
}
