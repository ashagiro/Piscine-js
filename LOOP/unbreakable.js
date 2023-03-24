function split(str, sep) {
    if (typeof str !== "string") {
        return
    }
    var word = "";
    var arr = [];
    if (sep === undefined) {
        return [str];
    }
    if (sep === "") {
        for (let i = 0; i < str.length; i++) {
            arr.push(str[i])
        }
        return arr;
    }
    for (let i = 0; i < str.length; i++) {
        if ((str.slice(i, i + sep.length) === sep)) {
            arr.push(word)
            word = "";
            i = i + sep.length - 1;
        } else {
            word += str[i]
        }
    }
    arr.push(word)
    return arr;
}
function join(arr, sep) {
    if (!(Array.isArray(arr))) {
        return
    }
    if (sep === undefined) {
        sep = ",";
    }
    var str = "";
    for (let i = 0; i < arr.length; i++) {
        str += arr[i] + sep;
    }
    if (sep === "") {
        return str;
    }
    return str.slice(0, str.length - sep.length);
}




