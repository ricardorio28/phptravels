/**
* StringValidations object containing all methods validate Strings
*/
class StringValidations {

    /**
     * @method isValidEmail
     * @description will validate if the received String is a valid email or not
     * @param {String} email string to be checked
     * @returns {boolean} true if is a valid email and false if not
     **/
    async isValidEmail(email) {
        return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email));
    }

}
module.exports = new StringValidations();