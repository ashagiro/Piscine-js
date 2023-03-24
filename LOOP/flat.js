function flat(arr, depth) {
    if (depth === Infinity) {
        depth = 100;
    }
    if (depth === undefined) {
        depth = 1
    }
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
    if (depth > 1) {
        depth--;
        res = flat(res, depth)
    }
    return res

}

// console.log(flat([0, 1, 2, [[[3, 4]]]], Infinity))