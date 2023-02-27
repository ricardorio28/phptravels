/**
* LocalDate object containing all methods manipudate dates
*/
class LocalDate {

  monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  /**
   * @method convert_mmDDYYYY_to_MMDDYYYY
   * @description will receive a date in the format "mm/DD/YYYY" (example:"01/01/2023") and return a string with the date in the format "MM DD YYYY" (Example: "January 1 1970")
   * @param {String} strDate_mmDDYYYY date in the format "mm/DD/YYYY" (example:"01/01/2023")
   * @returns {String} date in the format "MM DD YYYY" (Example: "January 1 1970")
   **/
  async convert_mmDDYYYY_to_MMDDYYYY(strDate_mmDDYYYY) {

    let strDateArray = strDate_mmDDYYYY.split("/");
    const day = parseInt(strDateArray[0]);
    const month = parseInt(strDateArray[1]);
    const year = parseInt(strDateArray[2]);
    const monthName = this.monthNames[month - 1];
    return monthName + " " + day + " " + year;
  }

}

module.exports = new LocalDate();