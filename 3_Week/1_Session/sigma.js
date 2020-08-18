// 5 + 4 + 3 + 2 + 1
// 3 + 2 + 1

// 5 * 4 * 3 * 2 * 1
function sigma(n) {
    if(n < 2) {
        return 1;
    }
    return n + sigma(n - 1);
}

function factorial(n) {
    if(n < 2) {
        return 1;
    }
    return n * factorial(n - 1);
}

function fibbonacci(pos) {
    if(pos < 2) {
        return pos;
    }
    return fibbonacci(pos - 1) + fibbonacci(pos - 2);
}
console.log(fibbonacci(5));
console.log(fibbonacci(6));
console.log(fibbonacci(7));
console.log(fibbonacci(8));