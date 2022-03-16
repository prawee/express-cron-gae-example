/**
 * @ Author: Prawee Wongsa (prawee@hotmail.com)
 * @ Create Time: 2022-03-15 17:47:20
 * @ Modified by: Prawee@hotmial.com
 * @ Modified time: 2022-03-16 12:00:28
 * @ Description:
 */

module.exports = function(options) {
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
    
    return function(req, res, next) {
        const data = {
            message: 'this is logger working!',
        }
        logger.info('req from win logger ' + JSON.stringify(data))
        logger.warn(JSON.stringify(data))
        logger.error(JSON.stringify(data))
        next()
    }
}