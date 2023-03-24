function citiesOnly(arr) {
    return arr.map((x) => x.city);
}
function upperCasingStates(arr) {
    return arr.map((x) => capitalize(x));
}
function capitalize(text) {
    let arr = text.split(" ");
    let res = [];
    for (let word of arr) {
        res.push(word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    }
    return res.join(" ")
}
function fahrenheitToCelsius(arr) {
    return arr.map(x => fahrToCel(x))
}
function fahrToCel(str) {
    return Math.floor((+str.slice(0, -2) - 32) * 5 / 9) + '°C'
}
function trimTemp(objArr) {
    objArr.map(x => {
        x.temperature = x.temperature.replaceAll(" ", "")
    })
    return objArr
}
function tempForecasts(arr) {
    return arr.map(x => fahrToCel(x.temperature) + "elsius in " + x.city + ", " + capitalize(x.state))
}
