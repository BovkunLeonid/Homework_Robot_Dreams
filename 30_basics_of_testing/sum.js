const myArray = [1, 2, 3]; 


function findSumOfArray(arr) {
    let sumElement = 0;
    for (var i = 0; i < myArray.length; i++) {
        if (typeof myArray[i] == typeof 1){
            sumElement = sumElement + myArray[i];     
        }  
    }
    return sumElement;
}

console.log(`sumElement = ${findSumOfArray(myArray)}`);

module.exports = findSumOfArray;