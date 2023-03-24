
/*
Create a function named invert which takes an object and returns a new one with its keys and values inverted.
*/

function invert(obj) {
    let result = {};
    Object.keys(obj).forEach(key => {
        result[obj[key]] = key
    })

    return result
}