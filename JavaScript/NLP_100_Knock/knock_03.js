let target = "Now I need a drink, alcoholic of course, after the heavy lectures involving quantum mechanics.";
target = target.replace(",", "");
target = target.replace(".", "");

const word = target.split(" ");
let result = [];

for (let i = 0; i < word.length; i++) {
  result.push(word[i].length);
}

console.log(result);
