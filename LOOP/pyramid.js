function pyramid(str, depth) {
    var tri = "";
    var gap = "";
    for (var t = 0; t < str.length; t++) { gap += " " }
    for (let i = 0; i < depth; i++) {
        for (let h = depth - i - 1; h > 0; h--) { tri += gap }
        for (let j = 1; j <= i; j++) { tri += str }
        for (let j = 0; j <= i; j++) { tri += str }
        tri += "\n";
    }
    return tri.slice(0, tri.length - 1);
}
// console.log(pyramid('(YYY)', 5))