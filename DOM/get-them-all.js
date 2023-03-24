export function getArchitects() {
    let arr1 = document.getElementsByTagName("a")
    let arr2 = document.getElementsByTagName('span')
    return [[...arr1], [...arr2]]
}
export function getClassical() {
    let arr1 = document.getElementsByClassName("classical")
    let arr2 = document.querySelectorAll('a:not(.classical)')
    return [[...arr1], [...arr2]]
}
export function getActive() {
    let arr1 = document.getElementsByClassName("classical active")
    let arr2 = document.querySelectorAll('a.classical:not(.active)')
    return [[...arr1], [...arr2]]    
}
export function getBonannoPisano() {
    let nm = document.getElementById("BonannoPisano")
    let arr2 = document.querySelectorAll('a.classical.active:not(#BonannoPisano)')
    return [nm, [...arr2]]       
}