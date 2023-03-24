function slice(data, start, end) {
    if (end === undefined) {
        end = data.length;
    }
    if (start < 0) {
        start += data.length;
    }
    if (end < 0) {
        end += data.length;
    }
    
    var slice = "";
    var piece = [];
    if (Array.isArray(data)) {
        for (let i = start; i < end; i++) {
            piece.push(data[i]);
        }
        return piece;
    }

    for (let i = start; i < end; i++) {
        slice += data[i];
    }
    return slice;

}

