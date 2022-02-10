const CompanyService = require('../services/company-service.js')

class CompanyController {
    constructor() {
        this.companyService = new CompanyService()
    }

    async registerCompany(req, res) {
        try {
            const { companyName, email, password } = req.body
            await this.companyService.addCompany(companyName, email, password)
            return res.status(200).send({
                message: 'Company is Register!'
            })
        } catch (err) {
            return res.status(500).send({
                message: err.message
            })
        }
    }
}

module.exports = CompanyController