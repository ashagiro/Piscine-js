function first(text) {
    return text[0];
}
function last(text) {
    return text.at(-1);
}

function kiss(text) {
    var arr = [text.at(-1), text.at(0)];
    return arr;
}