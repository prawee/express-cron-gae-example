/**
 * @ Author: Prawee Wongsa (prawee@hotmail.com)
 * @ Create Time: 2022-03-16 14:56:21
 * @ Modified by: Prawee@hotmial.com
 * @ Modified time: 2022-03-16 15:31:05
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
            let msg = "not found"
            logger.warn("fail", msg)
            res.json({ status: msg })
        } else {
            logger.info("success", results[0])
            res.json(results[0])
        }
    })
})

module.exports = router
