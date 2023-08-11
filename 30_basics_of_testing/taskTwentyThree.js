// HomeTask 23 function

function fnMaxElement(arr) {
    let maxElement = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] == typeof 1){
            if (arr[i] > maxElement){
                maxElement = arr[i];   
            }
        }  
    }
    return maxElement;
}

function fnMinElement(arr) {
  let minElement = arr[0];
  for (var i = 0; i < arr.length; i++) {
      if (typeof arr[i] == typeof 1){
          if (arr[i] < minElement){
              minElement = arr[i];   
          }
      }  
  }
  return minElement;
}

function findSumOfArrayOne(arr) {
    let sumElement = 0;
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] == typeof 1){
            sumElement = sumElement + arr[i];     
        }  
    }
    return sumElement;
}

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

module.exports = {fnMaxElement, fnMinElement, findSumOfArrayOne, findSumOfArray};
