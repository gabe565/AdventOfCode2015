'use strict'

const assert = require('assert')

const part1 = require('./part1')
const part2 = require('./part2')

function doTest(text, fn, input, result) {
    it(text + ' of ' + input[0].join('x') + ' should be ' + result, () => {
        assert.equal(result, fn(input))
    })
}

describe('Day 2: I Was Told There Would Be No Math', () => {
    describe('Part 1', () => {
        doTest('square feet', part1, [[2, 3, 4]], 58)
        doTest('square feet', part1, [[1, 1, 10]], 43)
    })
    describe('Part 2', () => {
        doTest('total feet', part2, [[2, 3, 4]], 34)
        doTest('total feet', part2, [[1, 1, 10]], 14)
    })
})
