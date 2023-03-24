function round(num) {
    if (impossible(num)) { return num; }
    var check = false
    if (num < 0) { check = true; num = -num; }
    if (num === 0) { return 0; }
    var rem = remain(num);
    if ((rem < 0.4) || (rem === 0)) {
        if (check) { return -(num - rem); }
        return num - rem;
    }
    if (check) { return -(num - rem) - 1 }
    return num - rem + 1;
}

function ceil(num) {
    if (impossible(num)) { return num; }
    var check = false
    if (num < 0) { check = true; num = -num; }
    if (num === 0) { return 0; }
    var rem = remain(num);
    if (rem === 0) {
        if (check) { return -(num); }
        return num;
    }
    if (check) { return -(num - rem) }
    return num - rem + 1;
}

function floor(num) {
    if (impossible(num)) { return num; }
    var check = false
    if (num < 0) { check = true; num = -num; }
    if (num === 0) { return 0; }
    var rem = remain(num);
    if (rem === 0) {
        if (check) { return -(num - rem); }
        return num - rem;
    }
    if (check) { return -(num - rem) - 1 }
    return num - rem;
}

function trunc(num) {
    if (impossible(num)) { return num; }
    var check = false
    if (num < 0) { check = true; num = -num; }
    if (num === 0) { return 0; }
    var rem = remain(num);
    if (rem === 0) {
        if (check) { return -(num); }
        return num;
    }
    if (check) { return -(num - rem) }
    return num - rem;
}

function remain(num) {
    while (num > 1000000000000000) { num -= 1000000000000000; }
    while (num > 100000000000000) { num -= 100000000000000; }
    while (num > 10000000000000) { num -= 10000000000000; }
    while (num > 1000000000000) { num -= 1000000000000; }
    while (num > 100000000000) { num -= 100000000000; }
    while (num > 10000000000) { num -= 10000000000; }
    while (num > 1000000000) { num -= 1000000000; }
    while (num > 100000000) { num -= 100000000; }
    while (num > 10000000) { num -= 10000000; }
    while (num > 1000000) { num -= 1000000; }
    while (num > 100000) { num -= 100000; }
    while (num > 10000) { num -= 10000; }
    while (num > 1000) { num -= 1000; }
    while (num > 100) { num -= 100; }
    while (num > 10) { num -= 10; }
    while (num > 1) { num-- }
    return num
}

function impossible(num) {
    // if ((num === Number.MAX_SAFE_INTEGER) || (num === Number.MAX_VALUE) || (num === Number.MIN_SAFE_INTEGER) || (num === Number.MIN_VALUE)) {
    //     return true
    // }
    if ((num === Number.NaN) || (num === Number.NEGATIVE_INFINITY) || (num === Number.POSITIVE_INFINITY)) {
        return true
    }
    return false
}

console.log(round(Number.MAX_SAFE_INTEGER))
// console.log(round((2343455647145.5)))
