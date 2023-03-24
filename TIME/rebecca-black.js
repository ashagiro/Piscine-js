function isFriday(date){
    if (date.getDay() == 5){
        return true
    }
    return false
}
function isWeekend(date){
    if (date.getDay() == 0 || date.getDay() == 6){
        return true
    }
    return false
}
function isLeapYear(date){
    let year = date.getFullYear()
    if (year%4 === 0 || year%400 ===0 ){
        return true
    }
    return false
}
function isLastDayOfMonth(date){
    var test = new Date(date.getTime()),
    month = test.getMonth();
test.setDate(test.getDate() + 1);
return test.getMonth() !== month;
}
