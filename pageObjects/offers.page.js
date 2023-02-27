const Page = require('./page');
const OfferPage = require('./offer.page');


class OffersPage extends Page {

  urlPath = '/offers';

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
    await expect(await $('h2')).toHaveText('SAFA OFFERS');
  }

  /**
   * @method offersValidations
   * @description will seach for all the offers in the page, and for each, will
   * - check if has a image,
   * - check if has a title and save the text in a variable,
   * - open the offer and execute the function "offerPage.checkAllElementsArePresent" where we will sent on the parameters
   * a String with the title of the offer to validate if the page has the correct title and a JSON with the validations list,
   * to execute them to check if all the information from that offer is correct
   * - Then we will go back to the "Offers Page" and validate the next offer
   * @param {String} elemTitleText title from the offer what we clicked on the page before
   * @param {JSON} tableWithListOfValidations JSON with the list of validations. The attributes are the validations what we need to check and the value is a option on that validation
   * @param {String} tableWithListOfValidations.picture should be empty
   * @param {String} tableWithListOfValidations.title should be empty
   * @param {String} tableWithListOfValidations.description should be empty
   * @param {String} tableWithListOfValidations.price empty or with the text 'equal to user'
   * @param {String} tableWithListOfValidations.phone should be empty
   * @param {String} tableWithListOfValidations.email should be empty
   * @param {String} tableWithListOfValidations.['expiry date'] empty or with the date to validate
   **/
  async offersValidations(tableWithListOfValidations) {
    const offerPage = new OfferPage();
    const elemcards = await $$('//*[contains(@class,"card-area")]//*[contains(@class,"card-item")]');
    for (let element of elemcards) {
      await element.$('.//*[@class="card-img"]').waitForDisplayed();
      let elemTitle = await element.$('.//*[contains(@class,"author__title")]');
      await elemTitle.waitForDisplayed();
      let elemTitleText = await elemTitle.getText();
      await elemTitle.click();
      await offerPage.checkAllElementsArePresent(elemTitleText, tableWithListOfValidations);
      await offerPage.navigationBack();
      await this.checkAllElementsArePresent();
    }
  }

}

module.exports = new OffersPage();