function triangle(str, depth) {
    var tri = "";
    for (let i = 0; i <= depth; i++) {
        for (let j = 0; j < i; j++) {
            tri += str
        }
        tri += "\n";
    }
    return tri.slice(1, tri.length -1);
}
// console.log(triangle('{}', 29))