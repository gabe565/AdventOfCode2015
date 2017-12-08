'use strict'

const assert = require('assert')

const part1 = require('./part1')
const part2 = require('./part2')

function doTest(fn, input, result) {
    it(input + ' should be floor ' + result, () => {
        assert.equal(result, fn(input))
    })
}

describe('Day 1: Elevator Floors', () => {
    describe('Part 1', () => {
        doTest(part1, '(())', 0)
        doTest(part1, '()()', 0)
        doTest(part1, '(((', 3)
        doTest(part1, '(()(()(', 3)
        doTest(part1, '))(((((', 3)
        doTest(part1, '())', -1)
        doTest(part1, '))(', -1)
        doTest(part1, ')))', -3)
        doTest(part1, ')())())', -3)
    })
    describe('Part 2', () => {
        doTest(part2, ')', 1)
        doTest(part2, '()())', 5)
    })
})
