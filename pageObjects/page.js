/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {

    base_url = 'https://www.phptravels.net';

    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    async open(path) {
        return browser.url(this.base_url + path);
    }

    async searchMessage(message) {
        await $('//*[contains(text(), "' + message + '")]').waitForDisplayed();
    }

    async navigationBack() {
        await browser.back();
    }

    async sleep(seconds) {
        await browser.pause(parseInt(parseInt(seconds) * 1000));
    }


}
