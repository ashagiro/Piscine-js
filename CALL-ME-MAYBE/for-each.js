// function forEach(arr, func) {
//     return arr.forEach(elem => func(elem));
// }
// forEach([1, 2, 3], console.log)

function forEach(arr, func){
    let res = [];
    for (let i = 0; i < arr.length; i++){
        res.push(func(arr[i], i, arr))
    }
    return res
}