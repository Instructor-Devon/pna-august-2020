
// Given an array and an additional value, insert this value at the beginning of the array.
//  Do this without using any built-in array methods.
function pushFront(arr, val) {
    // if statement
    // loop
    // temp value!

    //       i
    // arr: [2,4,6,8]
    // val: 10
    // -> [10,4,6,8]

    // loop through the array DONE
    for(var i = arr.length-1; i >= 0; i--) {
        // shift all values forward
        arr[i+1] = arr[i]

    }
    // store "val" in the zeroeth position when we are done
    arr[0] = val;

}
var testArr = [2,4,6,8];
pushFront(testArr, 10);
console.log(testArr)