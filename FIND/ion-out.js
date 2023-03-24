const reg = new RegExp(/\w*t(?=[ion])/g) 
function ionOut(str) {

return str.match(reg)|| []
}
console.log(ionOut("protecion"))