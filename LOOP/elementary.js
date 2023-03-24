function multiply(a, b) {
    var ans = 0
    var check = false
    if ((b < 0) && (a >= 0)) {
        b = -b
        check = true
    }
    if ((b > 0) && (a < 0)) {
        a = -a
        check = true
    }
    if ((b < 0) && (a < 0)) {
        a = -a
        b = -b
    }
    if (a === 0) {
        return 0
    }
    for (let i = 0; i < b; i++) {
        ans += a
    }
    if (check) {
        return -ans
    }
    return ans
}
function divide(a, b) {
    var ans = 0
    var check = false
    if ((b < 0) && (a >= 0)) {
        b = -b
        check = true
    }
    if ((b > 0) && (a < 0)) {
        a = -a
        check = true
    }
    if ((b < 0) && (a < 0)) {
        a = -a
        b = -b
    }
    if (b === 0) {
        return NaN
    }

    while (a > b) {
        a -= b
        ans++
    }
    if (check) {
        return -ans
    }
    return ans
}
function modulo(a, b) {
    // if b < 0 --- return positive module
    // if a < 0 --- return negative module
    // if both < 0 --- return negative module
    var check = false
    if ((b < 0) && (a >= 0)) {
        b = -b
    }
    if ((b > 0) && (a < 0)) {
        a = -a
        check = true
    }
    if ((b < 0) && (a < 0)) {
        a = -a
        b = -b
        check = true
    }
    while (a > b) {
        a -= b
    }
    if (check) {
        return -a
    }
    return a
}

// console.log(modulo(34, 78))
// console.log(modulo(78, 34))
// console.log(modulo(123, 22))
// console.log(modulo(123, -22))
// console.log(modulo(-123, 22))
// console.log(modulo(-123, -22))






