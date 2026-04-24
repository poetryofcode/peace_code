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

function points(games) {
  let totalScore = 0;
  for (let i = 0; i < games.length; i++) {
    const [x, _, y] = games[i];
    if (Number(x) > Number(y)) totalScore += 3;
    else if (Number(x) === Number(y)) totalScore += 1;
    else continue;
  }
  return totalScore;
}

function abbrevName(name) {
  const fullName = name.split(" ");
  const [firstName, lastName] = fullName;
  const firstInitial = firstName[0].toUpperCase();
  const lastInitial = lastName[0].toUpperCase();
  return `${firstInitial}.${lastInitial}`;
}

function simpleMultiplication(number) {
  return number % 2 === 0 ? number * 8 : number * 9;
}

function solution(nums) {
  if (nums.includes(null) || nums.length === 0) return [];
  return nums.sort((a, b) => a - b);
}
*/

let arr = [1, -4, 7, 12];

function positiveSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {}
}

console.log(positiveSum(arr));
