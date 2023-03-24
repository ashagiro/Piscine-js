function filter(arr, func) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr)) {
            res.push(arr[i])
        }
    }
    return res
}
function reject(arr, func) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (!func(arr[i], i, arr)) {
            res.push(arr[i])
        }
    }
    return res
}
function partition(arr, func) {
    let res1 = [];
    let res2 = [];

    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr)) {
            res1.push(arr[i])
        } else {
            res2.push(arr[i])
        }
    }
    return [res1, res2]
}