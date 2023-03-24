function words(text) {
    return text.split(" ");
}
function sentence(arr) {
    return arr.join(" ");
}
function yell(text) {
    return text.toUpperCase();
}
function whisper(text) {
    return "*" + text.toLowerCase() + "*";
}
function capitalize(text) {
    text = text.toLowerCase()
    return text.at(0).toUpperCase() + text.slice(1);
}
