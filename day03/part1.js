'use strict'

const move = (e, coords) => {
    switch (e) {
        case '^':
            ++coords[0]
            break
        case '>':
            ++coords[1]
            break
        case 'v':
            --coords[0]
            break
        case '<':
            --coords[1]
            break
    }
    return coords
}

module.exports = function(input) {
    let coords = [0, 0]
    let visited = { '0,0': 1 }
    input.split('').forEach(e => {
        move(e, coords)
        if (!visited[coords.join(',')])
            visited[coords.join(',')] = 1
        else
            ++visited[coords.join(',')]
    })
    return Object.keys(visited).length
}
