const assertStrict = require('node:assert/strict');
const { isPrime } = require('./index.js');

assertStrict.strictEqual(isPrime(11), true);
assertStrict.strictEqual(isPrime(10), false);