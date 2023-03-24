function dayOfTheYear(date) {
    var start = new Date(`${date.getFullYear()}-01-01`)
    var count = 1
    while (start < date){
        count++
        start.setDate(start.getDate()+1)
    }    
    return count
}