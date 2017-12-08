'use strict'

const assert = require('assert')

const part1 = require('./part1')
const part2 = require('./part2')

function doTest(fn, input, result) {
    it(input + ' should be ' + result, () => {
        assert.equal(result, fn(input))
    })
}

describe('Day 3: Perfectly Spherical Houses in a Vacuum', () => {
    describe('Part 1', () => {
        doTest(part1, '>', 2)
        doTest(part1, '^>v<', 4)
        doTest(part1, '^v^v^v^v^v', 2)
    })
    describe('Part 2', () => {
        doTest(part2, '^v', 3)
        doTest(part2, '^>v<', 3)
        doTest(part2, '^v^v^v^v^v', 11)
    })
})
