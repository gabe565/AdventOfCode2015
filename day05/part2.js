'use strict'

const doubled = /([A-Za-z][A-Za-z]).*\1/
const middle  = /(.).\1/

module.exports = input => {
    return input.reduce((count, e) => {
        if (e.match(doubled) && e.match(middle))
            return count + 1
        else
            return count
    }, 0)
}
