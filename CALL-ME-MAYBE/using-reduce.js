function adder(arr, init = 0) { return arr.reduce((acc, curr) => acc + curr, init) }

// console.log(adder([2, 3, 4, 5, 6], 10))

function sumOrMul(arr, init = 0) {
    return arr.reduce((acc, curr) => {
        if (curr % 2 === 0) {
            acc *= curr;
        } else {
            acc += curr;
        }
        return acc
    }, init
    )
}
// console.log(sumOrMul([1, 2, 3, 4, 5, 7]))

function funcExec(arr, init = 0) {
    return arr.reduce((acc, curr) => {
        return curr(acc)
    }, init
    )
}