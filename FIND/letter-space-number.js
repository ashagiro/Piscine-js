function letterSpaceNumber(str) {
    let found = (str.match(/[a-zA-Z] \d(?![0-9A-Za-z])/g))
    if (found === null) {
        return []
    }
    return found
}

// console.log(letterSpaceNumber("I like 7up."))