const Page = require('./page');
const Menu = require('../components/Menu');

class AccountPage extends Page {

  urlPath = '/account/dashboard';
  menu = new Menu();

  /**
   * @method checkAllElementsArePresent
   * @description will check if the URL contains what is expected on this Page, 
   * and all important elements from this page will wait to be displayed. If they do not appear at the configured time, will throw an error
   **/
  async checkAllElementsArePresent() {
    await expect(browser).toHaveUrlContaining(this.urlPath);
    await this.menu.checkAllElementsArePresent();
    await this.validateDashboardBoxes();
  }

  /**
   * @method validateDashboardBoxes
   * @description will search for all boxes on the page.
   * Then will wait for an image, a description, and a title to be displayed. If they do not appear at the configured time, will throw an error.
   * Then will check if the page subtitle contains the username string
   **/
  async validateDashboardBoxes() {
    const elemDashboardBoxes = await $$('//*[contains(@class,"dashboard-icon-box")]');
    for (let element of elemDashboardBoxes) {
      await element.$('.//*[contains(@class,"info-icon")]').waitForDisplayed();
      await element.$('.//*[contains(@class,"info__desc")]').waitForDisplayed();
      await element.$('.//*[contains(@class,"info__title")]').waitForDisplayed();
      await expect($('h2')).toHaveTextContaining(await this.getUserName());
    }
  }

  /**
   * @method getUserName
   * @description will get the user Name from the page and return it
   * @returns {String} user name
   **/
  async getUserName() {
    return await $('//*[contains(@class,"author__title")]').getText();
  }

}

module.exports = new AccountPage();