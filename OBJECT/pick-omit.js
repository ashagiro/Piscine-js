/*
Create two functions which takes an object and a string or array of strings. They should return a new object which:

    pick: contains only those keys which appear in the string or array of strings.
    omit: contains only those keys which do not match the string, or do not appear in the array of strings.

*/


function pick(obj, str) {
    let result = {};
    Object.keys(obj).forEach(key => {
        if (typeof str === 'string') {
            if (key === str) result[key] = obj[key]
        } else if (Array.isArray(str)) {
            if (str.includes(key)) result[key] = obj[key]
        }
    });
    return result;
}

function omit(obj, str) {
    let result = {};
    Object.keys(obj).forEach(key => {
        if (typeof str === 'string') {
            if (key !== str) result[key] = obj[key]
        } else if (Array.isArray(str)) {
            if (!str.includes(key)) result[key] = obj[key]
        }
    });
    return result;
}