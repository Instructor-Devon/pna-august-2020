
function contains(arr, value) {
    // true/false does this value exist in the array?
    // loop the array
    for (let i = 0; i < arr.length; i++) {
        if(value === arr[i]) {
            return true;
        }
    }
    return false;
        // see if each item is the value we seek!
        // if so, return true
    // if we finish looping, we havent found the value
    // so... return false
}

function binarySearch(sorted, value) {
    // s    m s   e
    // [2,4,6,8,10]
    var start = 0;
    var end = sorted.length - 1;
    while(start <= end) {
        var middle = Math.floor((start+end)/2)
        if(sorted[middle] === value) {
            // look for value in the middle!
            // if we found it, return true!
            return true;
        }
        // if value is less than middle, look left
        if(value < sorted[middle]) {
            end = middle - 1;
        } else {
            // look right, if value is greater than middle
            start = middle + 1;
        }
    }
    return false;
}
function rBinarySearch(arr, value, start=0, end=null) {
    if(end === null) {
        end = arr.length - 1;
    }
    if(start > end) {
        return false;
    }
    var middle = Math.floor((start+end)/2);
    if(arr[middle] === value) {
        return true;
    }
    if(value < arr[middle]) {
        // look left
        return rBinarySearch(arr, value, start, middle-1);
    } else {
        // look right
        return rBinarySearch(arr, value, middle+1, end);
    }
}
var result = rBinarySearch([2,4,6,8,10], 10);