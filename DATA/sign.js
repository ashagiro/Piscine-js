function sign(nm) {
    if (nm > 0) {
        return 1;
    } else if (nm < 0) {
        return -1;
    }
    return 0;
}
function sameSign(nm1, nm2) {
    if ((nm1 > 0 && nm2 > 0) || (nm1 < 0 && nm2 < 0) || (nm1 === nm2 )) {
        return true;
    } 
    return false
}
// console.log(sign(-8))
// console.log(sameSign(22, 26662))
