function isPrime(num){
    if (num <= 1) return false;
    if (num <= 3) return true; // 2 and 3 are prime

    // Shortcut to eliminate multiples of 2 and 3
    if (num % 2 === 0 || num % 3 === 0) return false;

    // Check increments of 6
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
}

module.exports = {
    isPrime
};