const num1 = "3141592653589793238462643383279502884197169399375105820974944592";
const num2 = "2718281828459045235360287471352662497757247093699959574966967627";

const mult = (num1, num2) => {
  const results = [];
  for (let i = num2.length - 1; i >= 0; i--) {
    let result = new Array(num2.length - i).join("0");
    let rest = 0;
    for (let j = num1.length - 1; j >= 0; j--) {
      const mult = num2[i] * num1[j] + rest;
      if (mult > 9 && j > 0) {
        result += mult % 10;
        rest = Math.floor(mult / 10);
      } else {
        result += mult
          .toString()
          .split("")
          .reverse()
          .join("");
        rest = 0;
      }
    }
    results.push(result);
  }
  const lastResult = results[results.length - 1];
  let finalSum = "";
  let rest = 0;
  for (let i = 0; i < lastResult.length; i++) {
    let sum = 0;
    for (let j = 0; j < results.length; j++) {
      sum += +results[j][i] || 0;
    }
    sum = sum + rest;
    if (sum > 9) {
      finalSum += sum % 10;
      rest = Math.floor(sum / 10);
    } else {
      finalSum += sum
        .toString()
        .split("")
        .reverse()
        .join("");
      rest = 0;
    }
  }

  return finalSum
    .toString()
    .split("")
    .reverse()
    .join("");
};

console.log(mult(num1, num2));
