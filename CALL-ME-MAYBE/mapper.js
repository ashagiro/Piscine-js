function map(arr, func){
    let res = [];
    for (let i = 0; i < arr.length; i++){
        res.push(func(arr[i], i, arr))
    }
    return res
}
function flatMap(arr, func) {
    return flat(map(arr, func))
}

function flat(arr) { 
    var res = [];
    for (var i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            var layer = arr[i];
            for (var j = 0; j < layer.length; j++) {
                res.push(layer[j])
            }
        } else {
            res.push(arr[i])
        }
    }
    return res
}