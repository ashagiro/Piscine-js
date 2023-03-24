function repeat(string, number) {
    var s = ""
    for (let i = 0; i < number; i++) {
        s += string
    }
    return s
}

// console.log(repeat('a', 3))