const target1 = "paraparaparadise";
const target2 = "paragraph";

function str_n_gram(n, sentence) {
  result = []
  for (let i = 0; i < sentence.length - n + 1; i++) {
     result.push(sentence.substr(i, n));
  }
  return result;
};

const X = str_n_gram(2, target1);
const Y = str_n_gram(2, target2);

console.log(`X:{${X}}`);
console.log(`Y:{${Y}}`);

//和集合
let result_sum = X.filter(function (x, i, self) {
            return self.indexOf(x) === i;
        });

for (let i = 0; i < Y.length; i++) {
  if (!result_sum.some(function(value) { return value === Y[i];})) {
    result_sum.push(Y[i]);
  } 
}

console.log(`和集合:{${result_sum}}`);

//積集合
let result_times = [];
let unique_X = X.filter(function (x, i, self) {
            return self.indexOf(x) === i;
        });

for (let i = 0; i < Y.length; i++) {
  if (unique_X.some(function(value) { return value === Y[i];})) {
    result_times.push(Y[i]);
  }
}

console.log(`積集合:{${result_times}}`);

//差集合
let result_diff = [];
let flag = 0

for (let i = 0; i < X.length; i++) {
  for (let j = 0; j < Y.length; j++) {
    if (X[i] === Y[j]) {
       flag = 1;
      break;
    } else {  
       flag = 0;
    }
  }
  if (flag === 0) {
    result_diff.push(X[i]);
  }
}

console.log(`差集合:{${result_diff}}`);

if (X.some(function(value) { return value === "se"})) {
  console.log("Xに'se'は含まれる");
} else {
  console.log("Xに'se'は含まれない");
}

if (Y.some(function(value) { return value === "se"})) {
  console.log("Yに'se'は含まれる");
} else {
  console.log("Yに'se'は含まれない");
}
