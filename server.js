/**
 * @ Author: Prawee Wongsa (prawee@hotmail.com)
 * @ Create Time: 2022-03-08 01:29:25
 * @ Modified by: Prawee@hotmial.com
 * @ Modified time: 2022-03-16 14:23:13
 * @ Description: template for express with cron on gcp
 */

/**
 * instance
 */
require("dotenv").config()
require('@google-cloud/trace-agent').start();
const express = require("express")
const mysql = require("mysql")
const app = express()
const logger = require("./logger/winston")
// const testLogger = require("./logger/test")
// const logger = require("./logger")

/**
 * global variable
 */
let count = 0

/**
 * using middleware
 */
app.use(express.json())
// app.use(testLogger({ logger }))
// app.use(logger({ name: 'schedule' }))

/**
 * route
 */
app.get("/", (req, res) => {
  res.send("Hello from App Engine")
})

app.get("/cron", (req, res) => {
  logger.info('testing info logger')
  logger.warn('testing warning logger')
  logger.error('testing error logger')
  logger.debug('testing debug logger')
  console.info(`${count++} Running cron job...`)
  res.end()
})

app.get("/user/:email", (req, res) => {
  // console.info(`[info]: ${JSON.stringify(req.params)}`)
  const query = "select id, name from users where email = ?"
  
  pool.query(query, [req.params.email], (error, results) => {
    if (!results[0]) {
      res.json({ status: "not found!" })
    } else {
      res.json(results[0])
    }
  })
})

/**
 * connect database
 */
let configure = {
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
}
if (process.env.APP_ENV === 'development') {
  configure = {...configure, host: process.env.DB_HOST}
} else {
  configure = {...configure, socketPath: `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`}
}
const pool = mysql.createPool(configure)

/**
 * run application
 */
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`Starting web server on port ${PORT}...`)
})
