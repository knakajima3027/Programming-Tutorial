let target = "I am an NLPer";

function str_n_gram(n, sentence) {
  result = []
  for (let i = 0; i < sentence.length - n + 1; i++) {
     result.push(sentence.substr(i, n));
  }
  return result;
};

function word_n_gram(n, sentence) {
  result = [];
  sentence = sentence.split(" ");
  for (let i = 0; i < sentence.length - n + 1; i++) {
    result.push(sentence.slice(i, i + n));
  }
  return result;
};

console.log(str_n_gram(2, target));
console.log(word_n_gram(2, target));
