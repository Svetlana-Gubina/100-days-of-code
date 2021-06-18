function factorial(n) {
    if(n <= 0) {
        return 0;
    }
    let count = 1;
    for(let i = n; n >= 1; n--) {
        count *= n;
    }
    return count;
}

function recursiveFactorial(n) {
    if(n <= 0) {
        return 0;
    }
    if(n === 1) {
        return 1;
    }

    return n * recursiveFactorial(n - 1);
    // 5 * 24
    // 4 * 6
    // 3 * 2
    // 2 * 1
}

function fibonacci(n) {
    if(n <= 0) {
        return 0;
    }
    if(n === 1 || n === 2) {
        return 1;
    }

    let result = 0;
    let prev = 0;
    let current = 1;
    for(let i = 1; i <= n - 1; i++ ) {
        result = prev + current;
        prev = current;
        current = result;
    }
    return result;
}

function recursiveFibonacci(n) {
    if(n <= 0) {
        return 0;
    }
    if(n === 1 || n === 2) {
        return 1;
    }

    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

// console.log(recursiveFibonacci(7));

function someFunction (previousValue, currentValue, index, array) {
    return previousValue + currentValue;
}

function customReduce(array, reducer, initialValue=array[0]) {
    let accumulator = initialValue;
    array.forEach((it) => {
        accumulator = reducer(accumulator, it, array);
    });
    
    return accumulator;
}

// const arr = [1, 2, 3, 4, 5];
// console.log(customReduce(arr, someFunction, 0));