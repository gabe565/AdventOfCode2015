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
    let coords = {
        'santa': [0, 0],
        'robot': [0, 0]
    }
    let visited = { '0,0': 1 }
    let turn = 'santa'
    input.split('').forEach(e => {
        let curr = coords[turn]
        move(e, curr)
        if (!visited[curr.join(',')])
            visited[curr.join(',')] = 1
            else
            ++visited[curr.join(',')]
        turn = (turn === 'santa') ? 'robot' : 'santa'
    })
    return Object.keys(visited).length
}
