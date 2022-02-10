require('dotenv').config()
const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT ?? 5000
const app = express()
const url = process.env.databaseUrl
const connectDb = require('./db/db.js')
const Logger = require('./logger/logger.js')
const logger = new Logger()
const companyRouter = require('./routes/company.js')
app.use(cors({
    origin: '*'
}))

app.use(express.json())
app.use(companyRouter)

app.listen(PORT, () => {
    connectDb(url).catch((err) => {
        logger.error(err.message)
        app.close
    })
    logger.info(`server start in ${PORT} port`)
})