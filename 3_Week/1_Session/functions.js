function sumOfArrayValues(arr) {
    var sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function smallestArraySum(arr1, arr2) {
    var sumA = sumOfArrayValues(arr1);
    var sumB = sumOfArrayValues(arr2);
    if (sumA < sumB) {
        return arr1;
    }
    return arr2;
}

var result = smallestArraySum([2,4,6], [3,5,7]);