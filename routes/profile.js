/**
 * @ Author: Prawee Wongsa (prawee@hotmail.com)
 * @ Create Time: 2022-03-16 14:56:21
 * @ Modified by: Prawee@hotmial.com
 * @ Modified time: 2022-03-16 15:54:26
 * @ Description:
 */
const router = require("express").Router()
const pool = require("../databases")
const logger = require("../logger/winston")

router.get("/user/:email", (req, res) => {
    const query = "select id, name from users where email = ?"
    logger.info(query)
    
    pool.query(query, [req.params.email], (error, results) => {
        if (!results[0]) {
            let msg = `email ${req.params.email} not found`
            logger.warn(msg)
            res.status(404)
            res.json({ status: msg })
        } else {
            logger.info(JSON.stringify(results[0]))
            res.json(results[0])
        }
    })
})

module.exports = router
