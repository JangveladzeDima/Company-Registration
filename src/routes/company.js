const express = require('express')
const router = express.Router()
const CompanyMiddleware = require('../middlewares/company-middlewares.js')
const companyMiddleware = new CompanyMiddleware()
const CompanyController = require('../controllers/company-controller.js')
const companyController = new CompanyController()
router.post('/company/register', companyMiddleware.validateCompanyRegistration.bind(companyMiddleware), async (req, res) => {
    await companyController.registerCompany(req, res)
})
module.exports = router