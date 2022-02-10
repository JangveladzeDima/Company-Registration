const CompanyRepository = require('../repositories/company-repository.js')
const ValidationError = require('../errors/validation-error.js')

class CompanyService {
    constructor() {
        this.companyRepository = new CompanyRepository()
    }

    async addCompany(companyName, email, password) {
        return this.companyRepository.addCompany({
            companyName: companyName,
            email: email,
            password: password
        })
    }

    async findCompanyByCompanyName(companyName) {
        const company = await this.companyRepository.findCompanyByCompanyName(companyName)
        if (company === null) throw new ValidationError('this company alredy exists')
    }

    async checkIfCompanyExists(companyName) {
        try {
            await this.findCompanyByCompanyName(companyName)
            return true
        } catch (err) {
            return false
        }
    }
}

module.exports = CompanyService