/*
Create 3 functions that work like the .filter, .map and .reduce array methods, for the values in your object. 
You can see their function names and how they work in the examples.
*/

const filterValues = (obj, cond) => {
    let result = {};
    Object.keys(obj).forEach(key => {
        if (cond(obj[key])) result[key] = obj[key]
    })
    return result
}

const mapValues = (obj, cond) => {
    let result = {};
    Object.keys(obj).forEach(key => {
        result[key] = cond(obj[key])
    })
    return result
}

const reduceValues = (obj, cond, start) => {
    if (start === undefined) start = 0
    let val = start
    Object.keys(obj).forEach(key => {
        console.log
        val = cond(val, obj[key])
    })
    return val
}