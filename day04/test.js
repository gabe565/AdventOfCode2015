'use strict'

const assert = require('assert')

const part1 = require('./part1')
const part2 = require('./part2')

function doTest(fn, input, result) {
    it(input + ' should be ' + result, () => {
        return fn(input).then(response => {
            assert.equal(result, response)
        })
    })
}

console.log('WARNING: These will take a long time.\nI recommend you run this test with \'-t 30000\' so that it does not timeout and error.')
describe('Day 4: The Ideal Stocking Stuffer', () => {
    describe('Part 1', () => {
        doTest(part1, 'abcdef', '609043')
        doTest(part1, 'pqrstuv', '1048970')
    })
    // describe('Part 2', () => {
    //     doTest(part2, 'abcdef', '6742839')
    //     doTest(part2, 'pqrstuv', '5714438')
    // })
})
