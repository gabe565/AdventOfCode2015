'use strict'

const md5 = require('js-md5')

module.exports = input => {
    return new Promise((resolve, reject) => {
        let result = calc(input)
        if (result)
            return resolve(result)
        else
            return reject(Error('Error'))
    })
}

const calc = input => {
    let checksum = md5(input)
    let key = 0
    while (!checksum.match(/^00000/)) {
        ++key
        checksum = md5(input + key)
    }
    return key
}
