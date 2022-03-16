/**
 * @ Author: Prawee Wongsa (prawee@hotmail.com)
 * @ Create Time: 2022-03-16 15:24:37
 * @ Modified by: Prawee@hotmial.com
 * @ Modified time: 2022-03-16 15:26:12
 * @ Description:
 */
const router = require("express").Router()

router.get("/", (req, res) => {
    res.send("Hello World Schedule with App Engine")
})

module.exports = router