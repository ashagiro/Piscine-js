function groupPrice(str) {
    const regex = /(USD|\$)[0-9]*\.[0-9]*/gi
    let arr = [];
    let arr0 = [];

    let money = str.match(regex);
    if (!money) { return [] }
    for (let i = 0; i < money.length; i++) {
        arr = []
        let num = money[i].split("USD")[1] || money[i].split("$")[1];
        let n = num.split(".")
        arr.push(money[i])
        for (let j = 0; j < n.length; j++) {
            arr.push(n[j])
        }
        arr0.push(arr)
    }
    return arr0
}

// console.log(groupPrice('product one its $9.98 and the second one its $10.20'))