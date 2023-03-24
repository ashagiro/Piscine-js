/*
Create 3 functions which work like the .filter, .map and .reduce array methods, but for the entries in the grocery cart.

    filterEntries: filters using both key and value.
    mapEntries: changes the key, the value or both.
    reduceEntries: reduces the entries.

Create 3 additional functions that use your previously created functions and take an object as input:

    totalCalories: that will return the total calories of a cart.
    lowCarbs: that leaves only those items which are lower than 50 grams.
    cartTotal: that will give you the right amount of calories, proteins... and all the other items in your grocery cart.

*/


function filterEntries(obj, func) {
    let result = {}
    Object.entries(obj).forEach((elem) => (func(elem)) ? result[elem[0]] = elem[1] : undefined)
    return result
}

function mapEntries(obj, func) {
    let result = {};
    Object.entries(obj).map(sets => result[func(sets)[0]] = func(sets)[1]);
    return result
}

function reduceEntries(obj, func, start) {
    if (start === undefined) return Object.entries(obj).reduce((acc, key) => func(acc, [key, obj[key]]))
    return Object.keys(obj).reduce((acc, key) => func(acc, [key, obj[key]]), start)
}

const totalCalories = (obj) =>  +(reduceEntries(obj, (prev, next) =>  prev + (nutritionDB[next[0]].calories / 100) * next[1], 0).toFixed(1))

const lowCarbs = (obj) => filterEntries(obj, (pair) => (nutritionDB[pair[0]].carbs / 100) * pair[1] < 50)

const cartTotal = (obj) => mapEntries(obj, set => {
    let total = {}
    Object.keys(nutritionDB[set[0]]).forEach(key => {
        total[key] = +(((nutritionDB[set[0]][key] / 100) * set[1]).toFixed(3))
    })
    let result = [];
    result[0] = set[0]
    result[1] = total
    return result
})