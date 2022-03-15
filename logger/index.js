/**
 * @ Author: Prawee Wongsa (prawee@hotmail.com)
 * @ Create Time: 2022-03-15 18:02:06
 * @ Modified by: Prawee@hotmial.com
 * @ Modified time: 2022-03-15 18:11:55
 * @ Description:
 */
module.exports = function(options) {
    console.log('logger middleware is working!')
    return function(req, res, next) {
        console.log('start!!! logger')
        next()
    }
}
