function filterShortStateName(arr) { return arr.filter(x => x.length < 7) }
function filterStartVowel(arr) { return arr.filter(x => isVowel(x[0])) }
function filter5Vowels(arr) { return arr.filter(x => VowelCount(x) >= 5) }
function filter1DistinctVowel(arr) { return arr.filter(x => distinct(x)) }
function multiFilter(arr) {
    return arr.filter(x => (x.capital.length >= 8) && (!isVowel(x.name[0])) && (VowelCount(x.tag) >= 1) && (x.region != "South"))
}
function isVowel(char) {
    let vow = "aeiouAEIOU"
    for (let i in vow) {
        if (vow[i] == char) {
            return true
        }
    }
    return false
}
function VowelCount(word) {
    let count = 0;
    for (let char of word) {
        if (isVowel(char)) {
            count++
        }
    }
    return count
}
function distinct(str) {
    let firstVowel = ""
    for (let i = 0; i < str.length; i++) {
        if (isVowel(str[i])) {
            firstVowel = str[i].toLowerCase();
            break
        }
    }
    for (let i = 0; i < str.length; i++) {
        if (isVowel(str[i]) && str[i].toLowerCase() != firstVowel) {
            return false
        }
    }
    return true
}