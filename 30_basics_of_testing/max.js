const myArray = [3, 1, 2, 5];

function fnMaxElement(arr) {
    let maxElement = myArray[0];
    for (var i = 0; i < myArray.length; i++) {
        if (typeof myArray[i] == typeof 1){
            if (myArray[i] > maxElement){
                maxElement = myArray[i];   
            }
        }  
    }
    return maxElement;
}

module.exports = fnMaxElement;