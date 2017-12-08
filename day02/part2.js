'use strict'

module.exports = l =>  l.reduce((t, v) => t + calc(v), 0)

function calc(sides) {
    let largest = sides.slice()
    largest.sort((a, b) => a - b)
    largest.splice(2, 1)
    let ribbon  = largest.reduce((t, v) => (2 * v) + t, 0)
    let bow     = sides.reduce((t, v) => t * v, 1)
    return ribbon + bow
}
