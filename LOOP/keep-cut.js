function cutFirst(string) {
    return string.slice(2)
}
function cutLast(string) {
    return string.slice(0, string.length - 2)
}
function cutFirstLast(string) {
    return string.slice(2, string.length - 2)
}
function keepFirst(string) {
    return string.slice(0, 2)
}
function keepLast(string) {
    return string.slice(string.length - 2, string.length)
}
function keepFirstLast(string) {
    if (string.length < 5) {
        return string
    }
    return string.slice(0, 2) + string.slice(string.length - 2, string.length)
}

// console.log(keepFirstLast('af'))