/**
 * @ Author: Prawee Wongsa (prawee@hotmail.com)
 * @ Create Time: 2022-03-16 15:10:35
 * @ Modified by: Prawee@hotmial.com
 * @ Modified time: 2022-03-16 16:32:09
 * @ Description:
 */
const mysql = require("mysql")
const util = require("util")

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
pool.query = util.promisify(pool.query)

module.exports = pool