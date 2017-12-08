'use strict'

module.exports = l =>  l.reduce((t, v) => t + calc(v), 0)

function calc([l, w, h]) {
    let sides = [l*w, w*h, h*l]
    let smallest = Math.min(...sides)
    let sum = sides.reduce((t, v) => (2 * v) + t, 0)
    return sum + smallest
}
