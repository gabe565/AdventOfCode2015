'use strict'

module.exports = function(data) {
    let directions = data.split('')
    let floor = 0
    let pc = 0

    directions.every(e => {
        ++pc
        floor += (e === '(') ? 1 : -1
        if (floor === -1) return false
        return true
    })

    return pc
}
