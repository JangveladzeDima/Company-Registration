const Company = require('../db/company/model.js')

class CompanyRepository {
    async addCompany(companyProperties) {
        const newCompany = new Company(companyProperties)
        return newCompany.save()
    }
    async findCompanyByCompanyName(companyName){
        return Company.findOne({companyName})
    }
}

module.exports = CompanyRepository