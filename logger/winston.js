/**
 * @ Author: Prawee Wongsa (prawee@hotmail.com)
 * @ Create Time: 2022-03-16 12:11:43
 * @ Modified by: Prawee@hotmial.com
 * @ Modified time: 2022-03-16 14:00:47
 * @ Description:
 */

const winston = require("winston")

const { LoggingWinston } = require("@google-cloud/logging-winston")
const loggingWinston = new LoggingWinston()
const logger = winston.createLogger({
    level: 'info',
    transports: [
        new winston.transports.Console(),
        loggingWinston,
    ]
})


module.exports = logger