function sameAmount(str, reg1, reg2) {
    reg1 = new RegExp(reg1, 'g')
    reg2 = new RegExp(reg2, 'g')

    var num1 = str.match(reg1);
    var num2 = str.match(reg2);
    if (!num1 && !num2) { return true }
    if (!num1 || !num2) { return false }

    return num1.length === num2.length;
}
