const url = /http(s)?:\/\/(www\.)?[?a-zA-Z0-9-@:%.-_\+~#=]{2,256}\.?[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=\[\],]*)/gi;
function getURL(dataSet) {
    // return all URL present
    return dataSet.match(url)
}

function greedyQuery(dataSet) {
    // return URLs with at least 3 query parameters
    let list = dataSet.match(url);
    let arr = [];
    for (let i = 0; i < list.length; i++) {
        let found = list[i].split("?")[1];
        if (found) {
            let items = found.split("&");
            if (items.length >= 3) {
                arr.push(list[i])
            }
        }
    }
    return arr
}

function notSoGreedy(dataSet) {
    // return URLs with at least 2 but no more than 3 query parameters
    let list = dataSet.match(url);
    let arr = [];
    for (let i = 0; i < list.length; i++) {
        let found = list[i].split("?")[1];
        if (found) {
            let items = found.split("&");
            if ((items.length >= 2) && (items.length <= 3)) {
                arr.push(list[i])
            }
        }
    }
    return arr
}

