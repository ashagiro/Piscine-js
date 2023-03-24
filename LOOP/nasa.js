function nasa(N) {
    var str = ""
    if (N < 1) {
        return ""
    }
    for (let i = 1; i <= N; i++) {
        if ((i % 3 === 0) && (i % 5 === 0)) {
            str += "NASA" + " "
        } else if (i % 3 === 0) {
            str += "NA" + " "
        } else if (i % 5 === 0) {
            str += "SA" + " "
        } else {
            str += String(i) + " "
        }
    }
    return str.slice(0, str.length - 1)
}
// const toMatches = (results) =>
//     results
//         .split(' ')
//         .map((k) => (/\d/.test(k) ? '_' : k))
//         .reduce((a, k) => ({ ...a, [k]: (a[k] || 0) + 1 }), {})
// console.log(toMatches(nasa(100)))