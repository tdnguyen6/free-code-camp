function sym() {
    let diff = []
    Object.values(arguments).forEach(arg => {
        diff = diff2(diff, arg)
    })
    return diff.sort((a, b) => a > b)
}

function diff2(a, b) {
    let a_not_b = a.filter(e => !b.includes(e))
    let b_not_a = b.filter(e => !a.includes(e))
    return [...new Set(a_not_b.concat(b_not_a))]
}

// let res = sym([1, 2, 3], [5, 2, 1, 4])
let res = sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])
console.log(res)
