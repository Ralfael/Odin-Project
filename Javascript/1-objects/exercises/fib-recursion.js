// with recursion //

const fib = (num, array = [0, 1]) => {
    if (num <= 2) return array;
    const [nextToLast, last] = array.slice(-2);
    return fib(num -1, [...array, nextToLast + last]);
}

console.log(fib(50));