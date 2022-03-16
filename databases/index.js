/**
 * @ Author: Prawee Wongsa (prawee@hotmail.com)
 * @ Create Time: 2022-03-16 15:10:35
 * @ Modified by: Prawee@hotmial.com
 * @ Modified time: 2022-03-16 15:17:39
 * @ Description:
 */
const mysql = require("mysql")

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

module.exports = pool