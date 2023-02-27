/**
* Menu object containing all methods, to interact with the page menu
*/
module.exports = class Menu {

    get elemMenuBtDashboard() {
        return $('//*[@class="sidebar-nav-body"]//*[contains(text(),"Dashboard")]');
    }
    get elemMenuBtMyBookings() {
        return $('//*[@class="sidebar-nav-body"]//*[contains(text(),"My Bookings")]');
    }
    get elemMenuBtAddFunds() {
        return $('//*[@class="sidebar-nav-body"]//*[contains(text(),"Add Funds")]');
    }
    get elemMenuBtMyProfile() {
        return $('//*[@class="sidebar-nav-body"]//*[contains(text(),"My Profile")]');
    }
    get elemMenuBtLogout() {
        return $('//*[@class="sidebar-nav-body"]//*[contains(text(),"Logout")]');
    }

    constructor() {
    }

    /**
     * @method checkAllElementsArePresent
     * @description for all inportant elements from the Menu, will wait for be displayed. If they do not appear on the configured time, will throw a error
     **/
    async checkAllElementsArePresent() {
        await this.elemMenuBtDashboard.waitForDisplayed();
        await this.elemMenuBtMyBookings.waitForDisplayed();
        await this.elemMenuBtAddFunds.waitForDisplayed();
        await this.elemMenuBtMyProfile.waitForDisplayed();
        await this.elemMenuBtLogout.waitForDisplayed();
    }

}
