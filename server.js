/**
 * @ Author: Prawee Wongsa (prawee@hotmail.com)
 * @ Create Time: 2022-03-08 01:29:25
 * @ Modified by: Prawee@hotmial.com
 * @ Modified time: 2022-03-09 01:39:34
 * @ Description: template for express with cron on gcp
 */

/**
 * instance
 */
require("dotenv").config()
const express = require("express")
const mysql = require("mysql")
const app = express()

/**
 * global variable
 */
let count = 0

/**
 * using middleware
 */
app.use(express.json())

/**
 * route
 */
app.get("/", (req, res) => {
  res.send("Hello from App Engine")
})

app.get("/cron", (req, res) => {
  console.log(`${count++} Running cron job...`)
  res.end()
})

app.get("/user/:email", (req, res) => {
  console.info(`[info]: ${JSON.stringify(req.params)}`)
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
