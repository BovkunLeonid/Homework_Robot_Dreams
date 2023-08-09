const myArray2 = [1, 2, 3, 4];

function fnSumElement(value1, value2) {
  return value1 + value2;
};

function findSumOfArray(arr) {
  let sum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] === typeof 1){
      sum = fnSumElement(sum, arr[i]);
    }
  }
  return sum;
}

console.log(findSumOfArray(myArray2));

module.exports = findSumOfArray;