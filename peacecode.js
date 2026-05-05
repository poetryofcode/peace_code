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

function positiveSum(arr) {
  return arr
    .filter((number) => number > 0)
    .reduce((acc, number) => acc + number, 0);
}

function smash(words) {
  let sentence = "";

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    sentence += word;
    if (i < words.length - 1) sentence += " ";
  }

  return sentence;
}

function check(a, x) {
  if (a.includes(x)) return true;
  return false;
}

function sumMix(x) {
  return x
    .map((number) => Number(number))
    .reduce((sum, number) => sum + number, 0);
}

function well(x) {
  let goodKatas = x.filter((kata) => kata === "good").length;
  console.log(goodKatas);

  if (goodKatas === 0) return "Fail!";
  else if (goodKatas < 3) "Publish!";
  else return "I smell a series!";
}

function array(string) {
  let str = string.split(",").slice(1, -1).join(" ");
  return str || null;
}

function toCsvText(array) {
  let result = "";

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      result += array[i][j];
      if (j < array[0].length - 1) {
        result += ",";
      }
    }
    if (i < array.length - 1) {
      result += "\n";
    }
  }

  return result;
}

function isVow(a) {
  let map = new Map([
    [97, "a"],
    [101, "e"],
    [105, "i"],
    [111, "o"],
    [117, "u"],
  ]);

  for (let i = 0; i < a.length; i++) {
    if (map.has(a[i])) {
      a.splice(i, 1, map.get(a[i]));
    }
  }

  return a;
}

const arrowFunc = function (arr) {
  return arr.map((num) => String.fromCodePoint(num)).join("");
};

function uefaEuro2016(teams, scores) {
  const [teamOne, teamTwo] = teams;
  const [scoreOne, scoreTwo] = scores;
  return `At match ${teamOne} - ${teamTwo}, 
    ${
      scoreOne > scoreTwo
        ? `${teamOne} won!`
        : scoreOne < scoreTwo
          ? `${teamTwo} won!`
          : `teams played draw`
    }`;
}


function test(str) {
  return str.slice(1, -1);
}

function repeatStr(n, s) {
  let a = s.repeat(n);
  console.log(a);
}


function DNAtoRNA(input) {
  let a = input.split("T");
  console.log(a);
}

var countSheep = function (input) {
  let sheep = "";

  if (input === 0) return "";

  for (let i = 1; i <= input; i++) {
    sheep += `${i}` + " sheep" + "...";
  }

  return sheep;
};

function reverseWords(input) {
  let words = input.split(" ");
  let result = "";

  for (let i = words.length - 1; i >= 0; i--) {
    result += words[i];

    if (i !== 0) {
      result += " ";
    }
  }

  return result;
}

function greet(name, owner) {
  return name === owner ? "Hello boss" : "Hello guest";
}

function bonusTime(salary, bonus) {
  if (!bonus) {
    return `£${salary}`;
  }
  return `£${10 * salary}`;

  function strCount(word, char) {
  if (word.length === 0) return 0;

  let map = new Map();

  for (let letter of word) {
    if (!map.has(letter)) {
      map.set(letter, 1);
    } else {
      map.set(letter, map.get(letter) + 1);
    }
  }

  return map.get(char);
}
}

String.prototype.isUpperCase = function () {
  return this === this.toUpperCase();
};

function stringy(input) {
  let result = "";
  let i = 1;
  while (i <= 4) {
    if (i % 2 === 1) result += 1;
    else result += 0;
    i++;
  }
  return result;
}

function solution(a, b) {
  return a.length > b.length ? b + a + b : a + b + a;
}

function nameShuffler(str) {
  const [first, last] = str.split(" ");
  return last + " " + first;
}

function mouthSize(animal) {
  return animal.toLowerCase() === "alligator" ? "small" : "wide";
}
*/

let string = "hi!!";

function remove(string) {
  let arr = string.split("");
  if (arr[arr.length - 1] === "!") arr.pop();
  return arr.join("");
}
const result = remove(string);
console.log(result);
