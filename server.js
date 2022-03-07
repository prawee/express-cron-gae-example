/**
 * @ Author: Prawee Wongsa (prawee@hotmail.com)
 * @ Create Time: 2022-03-08 01:29:25
 * @ Modified by: Prawee@hotmial.com
 * @ Modified time: 2022-03-08 01:59:47
 * @ Description:
 */
const express = require("express")
const app = express()

let count = 0

app.get("/", (req, res) => {
  res.send("Hello from App Engine")
})

app.get("/cron", (req, res) => {
  console.log(`${count++} Running cron job...`)
  res.end()
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`Starting web server on port ${PORT}...`)
})
