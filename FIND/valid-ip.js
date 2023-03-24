function findIP(str) {
    const regex = /((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)\.?\b){4}((:)[1-9]\d*\d\d?)*/g;
    let list = str.match(regex)
    let nlist = [];
    for (let i = 0; i < list.length; i++) {
        let num = list[i].split(":")
        if (num[1]) {
            if (num[1] > 65535) {
                continue
            }
        }
        nlist.push(list[i])
    }
    return nlist
}
