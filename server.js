/**
 * @ Author: Prawee Wongsa (prawee@hotmail.com)
 * @ Create Time: 2022-03-08 01:29:25
 * @ Modified by: Prawee@hotmial.com
 * @ Modified time: 2022-03-16 15:27:45
 * @ Description: template for express with cron on gcp
 */
require("dotenv").config()
require('@google-cloud/trace-agent').start();

/**
 * instance
 */
const express = require("express")
const app = express()
const routes = require("./routes")

/**
 * using middleware
 */
app.use(express.json())
// app.use(testLogger({ logger }))
// app.use(logger({ name: 'schedule' }))

/**
 * route
 */
app.use(routes.home)
app.use(routes.profile)
app.use(routes.logging)

/**
 * run application
 */
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`Starting web server on port ${PORT}...`)
})
