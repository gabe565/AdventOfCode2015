'use strict'

const assert = require('assert')

const part1 = require('./part1')
const part2 = require('./part2')

function doTest(fn, input, result) {
    it(input + ' should be ' + (result ? 'nice' : 'naughty'), () => {
        assert.equal(result, fn(input))
    })
}

describe('Day 5: Doesn\'t He Have Intern-Elves For This?', () => {
    describe('Part 1', () => {
        doTest(part1, ['ugknbfddgicrmopn'], 1)
        doTest(part1, ['aaa'], 1)
        doTest(part1, ['jchzalrnumimnmhp'], 0)
        doTest(part1, ['haegwjzuvuyypxyu'], 0)
        doTest(part1, ['dvszwmarrgswjxmb'], 0)
    })
    describe('Part 2', () => {
        doTest(part2, ['qjhvhtzxzqqjkmpb'], 1)
        doTest(part2, ['xxyxx'], 1)
        doTest(part2, ['uurcxstgmygtbstg'], 0)
        doTest(part2, ['ieodomkazucvgmuy'], 0)
    })
})
