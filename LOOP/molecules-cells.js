function RNA(left) {
    var DNA = ""
    for (let i = 0; i < left.length; i++) {
        if (left[i] === "A") {
            DNA += "U"
        }
        if (left[i] === "T") {
            DNA += "A"
        }
        if (left[i] === "C") {
            DNA += "G"
        }
        if (left[i] === "G") {
            DNA += "C"
        }
    }
    return DNA;
}
function DNA(left) {
    var RNA = '';
    for (let i = 0; i < left.length; i++) {
        if (left[i] === "A") {
            RNA += "T"
        }
        if (left[i] === "U") {
            RNA += "A"
        }
        if (left[i] === "C") {
            RNA += "G"
        }
        if (left[i] === "G") {
            RNA += "C"
        }
    }
    return RNA;
}
// console.log(RNA(DNA('CAUG')))
// console.log(DNA(RNA('GCAT')))
