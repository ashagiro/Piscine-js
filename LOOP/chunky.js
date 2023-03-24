function chunk(array, size) {
    var matrix = [];
    if (size  <= 0 ) {
        return [];
    }
    for (let i = 0; i < array.length; i += size) {
        const chunk = array.slice(i, i + size);
        matrix.push(chunk)
    }
    return matrix;
}
// console.log(chunk(['a', 'b', 'c', 'd'], 2))
// console.log(chunk(['a', 'b', 'c', 'd'], 0))
// console.log()


