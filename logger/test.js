/**
 * @ Author: Prawee Wongsa (prawee@hotmail.com)
 * @ Create Time: 2022-03-15 17:47:20
 * @ Modified by: Prawee@hotmial.com
 * @ Modified time: 2022-03-16 12:13:18
 * @ Description:
 */

module.exports = function(options) {
    const { logger } = options
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