/**
 * @ Author: Prawee Wongsa (prawee@hotmail.com)
 * @ Create Time: 2022-03-16 15:19:51
 * @ Modified by: Prawee@hotmial.com
 * @ Modified time: 2022-03-16 15:24:04
 * @ Description:
 */
const router = require("express").Router()
const logger = require("../logger/winston")

let count = 0

router.get("/logging/test", (req, res) => {
    logger.info('testing info logger')
    logger.warn('testing warning logger')
    logger.error('testing error logger')
    logger.debug('testing debug logger')
    logger.info(`Running test logging ${count++} time...`)
    res.json({
        route: req.originalUrl
    })
})

module.exports = router