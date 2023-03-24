const vowels = /[aioueAIOUE]/g;
function vowelDots(str) {
    var newstr = "";
    for (let i = 0; i < str.length; i++) {
        if (!str[i].match(vowels)) {
            newstr += str[i]
        } else {
            newstr += str[i] + "."
        }
    }
    return newstr
}
// const rep = /(a|i|o|u|e|A|I|O|U|E)/g;
// str.replace(rep, '$1.')