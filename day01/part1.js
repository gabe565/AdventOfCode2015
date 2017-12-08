'use strict'

module.exports = function(data) {
    let directions = data.split('')
    let floor = 0

    directions.every(e => {
        floor += (e === '(') ? 1 : -1
        return true
    })

    return floor
}
