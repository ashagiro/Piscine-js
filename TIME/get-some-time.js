function firstDayWeek(w, y) {
    var date = new Date(`${y}-01-01`)
    if (w !== 1) {
        for (let i = 1; i < w; i++) {
            date.setDate(date.getDate() + 7)
        }
        if (y === '2017') {
            date.setDate(date.getDate() - 7)
        }
        date.setDate(date.getDate() - date.getDay() + 1)
    }
    var dd = date.getDate()
    var mm = date.getMonth() + 1
    var yy = date.getFullYear()
    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    for (var i = 1000; i != 0; i /= 10) {
        if (yy < i) {
            yy = '0' + yy
        }
    }
    return `${dd}-${mm}-${yy}`
}
