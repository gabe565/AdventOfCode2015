'use strict'

const blacklist = /(ab|cd|pq|xy)/
const doubled   = /([A-Za-z])\1+/
const vowels    = /[aeiou].*[aeiou].*[aeiou]/

module.exports = input => {
    return input.reduce((count, e) => {
        if (!e.match(blacklist) && e.match(vowels) && e.match(doubled))
            return count + 1
        else
            return count
    }, 0)
}
