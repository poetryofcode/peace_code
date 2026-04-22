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
*/

let n = -3;

function testEven(n) {
  if (n % 1 === 0) {
    if (n % 2 === 0) return true;
    if (n % 2 === 1) return false;
  }
  return false;
}

console.log(testEven(n));
