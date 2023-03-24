/*
Create defaultCurry, which curries two objects. It mergers the objects together. 
If the key exists in both objects, the value from the second object override the value from the first object.

Create mapCurry, which replicates function .map (but for an object). The first entry is the function, and the second entry is the object.

Create reduceCurry, which replicates the .reduce method (but from an object). The first entry is the function, and the second is the object and initial value).

Create filterCurry which replicates the .filter method (but for an object). The first entry is the function, and the second is an object.

Using each curry function create the following functions with a parameter personnel:
    reduceScore: that will return the total value of the scores of the people who use the force. (this function can have one additional parameter).
    filterForce: that will return the force users with shootingScores equal to or higher than 80.
    mapAverage: that will return a new object with the property averageScore, that is the average of the scores for each person.

*/

const defaultCurry = (a) =>
    (b) => {
        let result = {};
        Object.keys(a).forEach(key => result[key] = a[key]);
        Object.keys(b).forEach(key => result[key] = b[key]);
        return result;
    }

const mapCurry = (func) => (obj) => {
    let result = {};
    Object.keys(obj).forEach(key => result[func([key, obj[key]])[0]] = func([key, obj[key]])[1]);
    return result;
}

const reduceCurry = (func) => (obj, initial) => {
    if (initial === undefined) return Object.keys(obj).reduce((pKey, key) => func(pKey, [key, obj[key]]))
    return Object.keys(obj).reduce((pKey, key) => func(pKey, [key, obj[key]]), initial)
}

const filterCurry = (func) => (obj) => {
    let result = {};
    Object.keys(obj).forEach(key => func([key, obj[key]]) ? result[key] = obj[key] : null)
    return result
}

const reduceScore = (obj, start) => {
    let result = {}, total
    Object.keys(obj).forEach(key => obj[key].isForceUser ? result[key] = obj[key] : null)
    start !== undefined ? total = start : total = 0
    return reduceCurry((key, nextKey) => key + result[nextKey[0]].pilotingScore + result[nextKey[0]].shootingScore)(result, total)
}

const filterForce = (obj) => filterCurry((obj1) => obj[obj1[0]]['isForceUser'] && obj[obj1[0]]['shootingScore'] >= 80)(obj)

const mapAverage = (obj) => {
    let result = {}
    Object.keys(obj).forEach(nestedObj => {
        result[nestedObj] = mapCurry( x => ['averageScore', (obj[nestedObj]['pilotingScore'] + obj[nestedObj]['shootingScore']) / 2])(nestedObj)
        Object.keys(obj[nestedObj]).forEach(key => result[nestedObj][key] = obj[nestedObj][key])
    })
    return result
}