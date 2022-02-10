const ErrorCodeGenerator = require('../utils/error-code-generator.js')
const CompanyValidator = require('../core/validation/company-validator.js')

class CompanyMiddlewares {
    constructor() {
        this.errorCodeGenerator = new ErrorCodeGenerator()
        this.companyValidator = new CompanyValidator()
    }

    async validateCompanyRegistration(req, res, next) {
        try {
            const { companyName, email, password } = req.body
            await this.companyValidator.validateCompanyRegister(companyName, email, password)
            next()
        } catch (err) {
            const statusCode = this.errorCodeGenerator.generateErrorCode(err)
            return res.status(statusCode).send({
                message: err.message
            })
        }
    }
}

module.exports = CompanyMiddlewares