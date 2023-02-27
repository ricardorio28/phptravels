/**
* Menu object containing all methods, to interact with the page menu
*/
module.exports = class TopMenu {

    get elemMenuBtFlights() {
        return $('//*[contains(@class, "main-menu-content")]//*[text()="flights"]');
    }
    get elemMenuBtHotels() {
        return $('//*[contains(@class, "main-menu-content")]//*[text()="Hotels"]');
    }
    get elemMenuBtTours() {
        return $('//*[contains(@class, "main-menu-content")]//*[text()="Tours"]');
    }
    get elemMenuBtTransfers() {
        return $('//*[contains(@class, "main-menu-content")]//*[text()="Transfers"]');
    }
    get elemMenuBtVisa() {
        return $('//*[contains(@class, "main-menu-content")]//*[text()="visa"]');
    }
    get elemMenuBtBlog() {
        return $('//*[contains(@class, "main-menu-content")]//*[text()="Blog"]');
    }
    get elemMenuBtOffers() {
        return $('//*[contains(@class, "main-menu-content")]//*[text()="Offers"]');
    }
    get elemMenuBtFAQ() {
        return $('//*[contains(@class, "main-menu-content")]//*[text()="FAQ"]');
    }
    get elemMenuBtAboutUs() {
        return $('//*[contains(@class, "main-menu-content")]//*[text()="About Us"]');
    }
    get elemMenuBtCompany() {
        return $('//*[contains(@class, "main-menu-content")]//*[text()="Company "]');
    }
    constructor() {
    }

    /**
     * @method checkAllElementsArePresent
     * @description for all inportant elements from the Menu, will wait for be displayed. If they do not appear on the configured time, will throw a error
     **/
    async checkAllElementsArePresent() {
        await this.elemMenuBtFlights.waitForDisplayed();
        await this.elemMenuBtHotels.waitForDisplayed();
        await this.elemMenuBtTours.waitForDisplayed();
        await this.elemMenuBtTransfers.waitForDisplayed();
        await this.elemMenuBtVisa.waitForDisplayed();
        await this.elemMenuBtBlog.waitForDisplayed();
        await this.elemMenuBtOffers.waitForDisplayed();
        await this.elemMenuBtFAQ.waitForDisplayed();
        await this.elemMenuBtAboutUs.waitForDisplayed();
        await this.elemMenuBtCompany.waitForDisplayed();
    }

    /**
     * @method clickBtOffers
     * @description will click on the button "Offers" from top menu
     **/
    async clickBtOffers() {
        await this.elemMenuBtOffers.click();
    }

}
