/**
 * @ Author: Prawee Wongsa (prawee@hotmail.com)
 * @ Create Time: 2022-03-15 18:02:06
 * @ Modified by: Prawee@hotmial.com
 * @ Modified time: 2022-03-15 19:12:21
 * @ Description:
 */
module.exports = function(options) {
    const { name } = options
    const startHrTime = process.hrtime()
    // console.log('logger middleware is working!')
    
    return function(req, res, next) {
        console.log(`--------- ${name} is start! ---------`)
        
        res.on('finish', function() {
            const elapsedHrTime = process.hrtime(startHrTime);
            const elapsedTimeInMs = elapsedHrTime[0] * 1000 + elapsedHrTime[1] / 1e6;
            const body = req.body ? JSON.stringify(req.body) : ''
            console.log("%s %s %s %s: %fms",req.method, res.statusCode, req.path, body, elapsedTimeInMs);
        })

        res.on('close', () => {
            console.log(`--------- ${name} is closed ---------`)
        })
        next()
    }
}
