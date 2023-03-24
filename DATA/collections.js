function strToArr(str) { return str.split("") };
function strToSet(str) { return new Set(strToArr(str)) };
function arrToSet(arr) { return new Set(arr) };
function arrToStr(arr) { return arr.join("") };
function setToArr(set) { return Array.from(set) };
function setToStr(set) { return Array.from(set).join("") };
// function mapToObj(map) { return Object.fromEntries(map) }
function mapToObj(map) {
    const obj = {};
    map.forEach((value, key) => {
        obj[key] = value;
    });
    return obj;
}
function objToMap(obj) { return new Map(Object.entries(obj)) }
function objToArr(obj) { return Object.values(obj) }
function arrToObj(arr) { return { ...arr } }
function strToObj(str) { return { ...strToArr(str) } }


function superTypeOf(value) {
    if (value instanceof Map) {
        return "Map"
    }
    if (value instanceof Set) {
        return "Set"
    }
    if ((typeof value === "object") && Array.isArray(value)) {
        return "Array"
    }
    if ((typeof value === "object") && !(Array.isArray(value)) && value !== null) {
        return "Object"
    }
    if ((typeof value === "number") || ((typeof value === "number") && (isNaN(value))) ) {
        return "Number"
    }
    if (typeof value === "function") {
        return "Function"
    }
    if (typeof value === "boolean") {
        return "Boolean"
    }
    if (typeof value === "string") {
        return "String"
    }
    if (typeof value === "undefined") {
        return "undefined"
    }
    return "null"
}



//https://javascript.info/map-set