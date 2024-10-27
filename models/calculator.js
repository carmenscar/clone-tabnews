function sum(num1, num2) {
  if ((typeof num1 !== "number") | (typeof num2 !== "number")) {
    return "ERROR";
  }
  return num1 + num2;
}

exports.sum = sum;
