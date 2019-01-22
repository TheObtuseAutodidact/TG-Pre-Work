// Write your code below
let bobsFollowers = ["one", "two", "three", "four"];
let tinasFollowers = ["a", "one", "two"];

let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}

// Intro to nested loops
