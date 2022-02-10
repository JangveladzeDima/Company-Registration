const ValidationError = require('../../errors/validation-error.js')
const CompanyService = require('../../services/company-service.js')

class CompanyValidator {
    constructor() {
        this.companyService = new CompanyService()
        this.companyNameMaxLength = 20
        this.companyNameMinLength = 3
        this.companyPasswordMaxLength = 10
        this.companyPasswordMinLength = 4
    }

    async validateCompanyRegister(companyName, email, password) {
        this.validateEmail(email)
        this.validatePassword(password)
        await this.validateCompanyName(companyName)
    }

    async validateCompanyName(companyName) {
        const checkIfCompanyExists = await this.companyService.checkIfCompanyExists(companyName)
        if (checkIfCompanyExists) {
            throw new ValidationError('this company already exists')
        }
        if (typeof (companyName) !== 'string') {
            throw new ValidationError('companyName should by string')
        }
        if (companyName.length > this.companyNameMaxLength || companyName.length < this.companyNameMinLength) {
            throw new ValidationError(`companyName max size should by ${this.companyNameMaxLength} and min size should by ${this.companyNameMinLength}`)
        }
    }

    validateEmail(email) {
        if (typeof (email) !== 'string') {
            throw new ValidationError('email should by string')
        }
        const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        const checkEmail = emailRegex.test(email)
        if (checkEmail === false) {
            throw new ValidationError('email not correct')
        }
    }

    validatePassword(password) {
        if (typeof (password) !== 'string') {
            throw new ValidationError('password should by string')
        }
        if (password.length > this.companyPasswordMaxLength || password.length < this.companyPasswordMinLength) {
            throw new ValidationError(`password max length should by ${this.companyPasswordMaxLength} and min length ${this.companyPasswordMinLength}`)
        }
    }

}

module.exports = CompanyValidator