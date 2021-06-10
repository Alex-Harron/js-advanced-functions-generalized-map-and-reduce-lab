// Add your functions here
function map(arr, callback) {
    const r = [];

    for (let i = 0; i < arr.length; i++) {
        const theElement = arr[i];
        r.push(callback(theElement));
    }
    return r
}

function reduce(arr, callback, start) {
    let total;
    if (start) {
        total = start;
        for (let i =0; i < arr.length; i++) {
            total = callback(arr[i], total);
        }
        return total;
    }else {
        total = arr[0];
        for (let i = 1; i < arr.length; i++) {
            total = callback(arr[i], total);
        }
        return total; 
    }
}