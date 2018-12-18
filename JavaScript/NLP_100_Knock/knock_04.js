let target = "Hi He Lied Because Boron Could Not Oxidize Fluorine. New Nations Might Also Sign Peace Security Clause. Arthur King Can.";
target = target.split(" ");

const exception = [0, 4, 5, 6, 7, 8, 14, 15, 18];
let result = [];

for (let i = 0; i < target.length; i++) {
  if (exception.some(function(value) { return value === i;})) { 
    result.push(target[i][0]);
  } else {
    result.push(target[i][0] + target[i][1]);
  }
}

console.log(result);
