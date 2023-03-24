// const add4 = '+4';
// const mul2 = '*2';

function isPowerOf(num) {
    while (num !== 1) {
        if (num % 2 === 1) {
            return false;
        }
        num /= 2;
    }
    return true;
}

function findExpression(num) {
    if ((num < 2) || (num % 2 !== 0)) {
        return undefined
    }
    var str = "1"
    var count2 = 0;
    var count4 = 0;
    while (!isPowerOf(num)) {
        num = num - 4;
        count4++
    }
    while (num !== 0) {
        if (num % 2 === 0) {
            count2++;
        }
        num = num / 2
    }
    for (var i = 0; i < count2; i++) {
        str += " " + mul2
    }
    for (var j = 0; j < count4; j++) {
        str += " " + add4
    }
    return str
}



// console.log(findExpression(63))