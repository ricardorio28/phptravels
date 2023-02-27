const Page = require('./page');
const localDate = require('../components/LocalDate');
const stringValidations = require('../components/StringValidations');
const chai = require('chai');
const assert = chai.assert;

module.exports = class OfferPage extends Page {

  urlPath = '/offers';

  /**
   * @method checkAllElementsArePresent
   * @description will convert the spaces in '-' from the received title, and then using it to validate if the URL contains it.
   * Then will call the function "validateOffer" to validate the offers
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
  async checkAllElementsArePresent(elemTitleText, tableWithListOfValidations) {
    await expect(browser).toHaveUrlContaining(this.urlPath + '/' + elemTitleText.replaceAll(' ', '-').toLowerCase());
    await this.validateOffer(elemTitleText, tableWithListOfValidations);
  }

  /**
   * @method getUserCurrency
   * @description will pick the the text from a element in the page with the user currency,
   * will erase the spaces and return it
   * @returns {String} user currency
   **/
  async getUserCurrency() {
    let userCurrency = await $('#currency').getText();
    return userCurrency.trim();
  }

  /**
   * @method validateOfferImage
   * @description on the received WebElement, will search and wait until be displayed the image.
   * If they do not appear at the configured time, will throw an error
   * @param {WebElement} cardItem element to be searched if the image is present
   **/
  async validateOfferImage(cardItem) {
    await cardItem.$('.//img').waitForDisplayed();
  }

  /**
   * @method validateOfferTitle
   * @description on the received WebElement, will search and wait until be displayed the Title.
   * If they do not appear at the configured time, will throw an error.
   * Then will check if the title have the text received on the "elemTitleText"
   * @param {WebElement} cardItem element to be searched if the title is present
   * @param {String} elemTitleText title from the offer what we clicked on the page before
   **/
  async validateOfferTitle(cardItem, elemTitleText) {
    const cardTitle = await cardItem.$('.//*[contains(@class,"card-title")]');
    await cardTitle.waitForDisplayed();
    await expect(cardTitle).toHaveText(elemTitleText);
  }

  /**
   * @method validateOfferDescription
   * @description on the received WebElement, will search and wait until be displayed the description.
   * If they do not appear at the configured time, will throw an error
   * Then will check if the text length is bigger then 0. If not, will throw a error
   * @param {WebElement} cardItem element to be searched if the description is present
   **/
  async validateOfferDescription(cardItem) {
    const elemDescription = await cardItem.$('.//*[@class="card-body"]/p[2]');
    await elemDescription.waitForDisplayed();
    const elemDescriptionText = await elemDescription.getText();
    expect(elemDescriptionText.length).toBeGreaterThan(0);  //not empty
  }

  /**
   * @method validateOfferPrice
   * @description on the received WebElement, will search and wait until be displayed the Price.
   * If they do not appear at the configured time, will throw an error.
   * Then will check if the price has the text length is bigger then 7 (5 word "Phone" + 1 space + 1 char = 7)
   * Then if (validationsPrice == 'equal to user') will check if the String contains the user Currency
   * @param {WebElement} cardItem element to be searched if the Price is present
   * @param {String} validationsPrice if the value is 'equal to user', will check if the WebElement from the Price contains the same currency as the user
   **/
  async validateOfferPrice(cardItem, validationsPrice) {
    const elemAmount = await cardItem.$('.//*[@class="card-body"]//*[contains(text(),"Price")]//ancestor::p');
    let elemAmountText = await elemAmount.getText();
    expect(elemAmountText.length).toBeGreaterThan(7); //
    if (validationsPrice === 'equal to user') {
      const elemAmountArray = elemAmountText.split(" ");
      const userCurrency = await this.getUserCurrency();
      assert.equal(elemAmountArray.includes(userCurrency), true, 'Expected currency is equal to user currency. elemAmountArray=' + elemAmountArray + '|| userCurrency=' + userCurrency);
    }
  }

  /**
   * @method validateOfferPhone
   * @description on the received WebElement, will search and wait until be displayed the phone number.
   * If they do not appear at the configured time, will throw an error
   * Then will check if the text length is equal to 15 (5 word "phone" + 1 space + 9 digits = 15). If not, will throw a error
   * @param {WebElement} cardItem element to be searched if the phone number is present
   **/
  async validateOfferPhone(cardItem) {
    const elemPhone = await cardItem.$('.//*[@class="card-body"]//*[contains(text(),"Phone")]//ancestor::p');
    await elemPhone.waitForDisplayed();
    let elemPhoneText = await elemPhone.getText();
    assert.equal(elemPhoneText.length == 15, true, 'Phone number is incorrect!'); //
  }

  /**
   * @method validateOfferPhone
   * @description on the received WebElement, will search and wait until be displayed the email.
   * If they do not appear at the configured time, will throw an error
   * Then will pick the email from the WebElement text and check if is a valid email. If not, will throw a error
   * @param {WebElement} cardItem element to be searched if the email is present
   **/
  async validateOfferEmail(cardItem) {
    const elemEmail = await cardItem.$('.//*[@class="card-body"]//*[contains(text(),"Email")]//ancestor::p');
    await elemEmail.waitForDisplayed();
    let elemEmailText = await elemEmail.getText();
    let elemEmailArray = elemEmailText.split(" ");
    assert.equal(await stringValidations.isValidEmail(elemEmailArray[1]), true, 'Email is not valid! email="' + elemEmailArray[1] + '"');
  }

  /**
   * @method validateOfferExpiryDate
   * @description on the received WebElement, will search and wait until be displayed the expiry date.
   * If they do not appear at the configured time, will throw an error.
   * Then will check if the expiry date has the text length is bigger then 13 (11 words "Expiry Date" + 1 space + 1 char = 13)
   * Then if the validationsExpiryDate has value, will call the function "convert_mmDDYYYY_to_MMDDYYYY" convert the date format
   * and check if the WebElement contains that data. If not, will throw a error
   * @param {WebElement} cardItem element to be searched if the Price is present
   * @param {String} validationsExpiryDate if the value is "mm/DD/YYYY" (example:"01/01/2023"), will check if the WebElement from the expiry date contains the expiry date
   **/
  async validateOfferExpiryDate(cardItem, validationsExpiryDate) {
    const elemExpiryDate = await cardItem.$('.//*[@class="card-body"]//*[contains(text(),"Expiry Date")]//ancestor::p');
    await elemExpiryDate.waitForDisplayed();
    let elemExpiryDateText = await elemExpiryDate.getText();
    assert.equal(elemExpiryDateText.length > 13, true, 'Expiry Date is incorrect!');
    if (validationsExpiryDate.length > 0) {
      let convertedExpiryDate = await localDate.convert_mmDDYYYY_to_MMDDYYYY(validationsExpiryDate);
      assert.equal(elemExpiryDateText.includes(convertedExpiryDate), true, 'Expiry Date is not correct!');
    }
  }

  /**
   * @method validateOffer
   * @description will check if the JSON has the attributes
   * ('picture', 'title', 'description', 'price', 'phone', 'email', 'expiry date')
   * and for each of them, will call a function to validate that field in the offer
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
  async validateOffer(elemTitleText, tableWithListOfValidations) {
    const validations = tableWithListOfValidations.rowsHash();
    const cardItem = $('//*[contains(@class,"card-item")]');
    if (validations.hasOwnProperty('picture')) {
      await this.validateOfferImage(cardItem);
    }
    if (validations.hasOwnProperty('title')) {
      await this.validateOfferTitle(cardItem, elemTitleText);
    }
    if (validations.hasOwnProperty('description')) {
      await this.validateOfferDescription(cardItem);
    }
    if (validations.hasOwnProperty('price')) {
      await this.validateOfferPrice(cardItem, validations.price);
    }
    if (validations.hasOwnProperty('phone')) {
      await this.validateOfferPhone(cardItem);
    }
    if (validations.hasOwnProperty('email')) {
      await this.validateOfferEmail(cardItem);
    }
    if (validations.hasOwnProperty('expiry date')) {
      await this.validateOfferExpiryDate(cardItem, validations['expiry date']);
    }
  }

}
