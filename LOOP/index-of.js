function indexOf(arr, element, index) {
    if (index === undefined) {
        index = 0;
    }
    for (let i = index; i < arr.length; i++) {
        if (element === arr[i]) {
            return i
        }
    }
    return -1
}
function lastIndexOf(arr, element, index) {
    if (index === undefined) {
        index = arr.length-1;
    }
    for (let i = index; i >= 0; i--) {
        if (element === arr[i]) {
            return i
        }
    }
    return -1
}
function includes(arr, element) {
    for (let i in arr) {
        if (element === arr[i]) {
            return true
        }
    }
    return false
}
// const scores = [224, 54, 22, 92, 23, 22];
// const t = ""

// console.log(indexOf([1, 2, 3, 4, 5, 4, 3, 2, 1], 2))
// console.log(indexOf([0, 0, t, t], t))
// console.log(indexOf(scores, 22, 3))
// console.log(lastIndexOf(scores, 22, 4))
// console.log(includes(scores, 22))
// console.log(includes(scores, 273))

