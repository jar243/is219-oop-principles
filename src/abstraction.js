class Passport {

  #ssn

  constructor(dob, ssn) {
    this._dob = dob
    this.#ssn = ssn
  }

  getSocialSecurityNum() {
    return this.#ssn
  }

}

module.exports = Passport