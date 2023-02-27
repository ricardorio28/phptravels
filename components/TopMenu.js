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
     * @method clickBtFlights
     * @description will click on the button "Flights" from top menu
     **/
    async clickBtFlights() {
        await this.elemMenuBtFlights.click();
    }
    /**
     * @method clickBtHotels
     * @description will click on the button "Hotels" from top menu
     **/
    async clickBtHotels() {
        await this.elemMenuBtHotels.click();
    }
    /**
     * @method clickBtTours
     * @description will click on the button "Tours" from top menu
     **/
    async clickBtTours() {
        await this.elemMenuBtTours.click();
    }
    /**
     * @method clickBtTransfers
     * @description will click on the button "Transfers" from top menu
     **/
    async clickBtTransfers() {
        await this.elemMenuBtTransfers.click();
    }
    /**
     * @method clickBtVisa
     * @description will click on the button "Visa" from top menu
     **/
    async clickBtVisa() {
        await this.elemMenuBtVisa.click();
    }
    /**
     * @method clickBtBlog
     * @description will click on the button "Blog" from top menu
     **/
    async clickBtBlog() {
        await this.elemMenuBtBlog.click();
    }
    /**
     * @method clickBtOffers
     * @description will click on the button "Offers" from top menu
     **/
    async clickBtOffers() {
        await this.elemMenuBtOffers.click();
    }
    /**
     * @method clickBtFAQ
     * @description will click on the button "FAQ" from top menu
     **/
    async clickBtFAQ() {
        await this.elemMenuBtFAQ.click();
    }
    /**
     * @method clickBtAboutUs
     * @description will click on the button "About Us" from top menu
     **/
    async clickBtAboutUs() {
        await this.elemMenuBtAboutUs.click();
    }
    /**
     * @method clickBtCompany
     * @description will click on the button "Company" from top menu
     **/
    async clickBtCompany() {
        await this.elemMenuBtCompany.click();
    }

}
