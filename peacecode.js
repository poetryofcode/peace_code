/*
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.

let string = "abc";

function count(string) {
    let obj = {};
    if (string.length === 0) return obj;
    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        if (obj[char]) {
            obj[char]++;
        } else obj[char] = 1;
    }
    return obj;
}


The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

For example:

1.08 --> 30

function cockroachSpeed(s) {
  let fastCockroach = (s * 100000) / 3600;
  return Math.floor(fastCockroach);
}
*/

let a = 1;
b = 10;

function sumDigPow(a, b) {}

console.log(sumDigPow(a, b));
