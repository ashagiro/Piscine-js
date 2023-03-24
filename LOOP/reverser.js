function reverse(data) {
    var revstr = "";
    var revarr = [];
    if (Array.isArray(data)) {
        for (let i = data.length - 1; i >= 0; i--) {
            revarr.push(data[i])
        }
        return revarr;
    }
    for (let i = data.length - 1; i >= 0; i--) {
        revstr += data[i];
    }
    return revstr;
}
// console.log(reverse("salut c'est cool"))