//  Task 1 (Array)
console.log(`____________ Task 1 (Array)_____________`);

let myArray = [555, 'abc', 717, 20, true, 300, 777, '', 7, 111];
console.log(myArray);

//  Task 2 && 4 (sum)
console.log(`___________ Task 2 && 4 (sum)____________`);

let sumElement = 0;

for (var i = 0; i < myArray.length; i++) {
   if (typeof myArray[i] == typeof 1){
      sumElement = sumElement + myArray[i];
   }  
}

console.log(`sumElement = ${sumElement}`);

//  Task 3 && 4 (min, max)
console.log(`_________ Task 3 && 4 (min, max)_________`);

let minElement = myArray[0];
let maxElement = myArray[0]; 

for (var i = 0; i < myArray.length; i++) {
   if (typeof myArray[i] == typeof 1){
      if (myArray[i] > maxElement){
         maxElement = myArray[i];
      } else if (myArray[i] < minElement) {
         minElement = myArray[i];
      }
   }  
}

console.log(`minElement = ${minElement}`);
console.log(`maxElement = ${maxElement}`);

//  Task 5 (#)
console.log(`_______________ Task 5 (#)_______________`);
//  Version 1 (for)
console.log(`____________ Version 1 (for)_____________`);

let imgElementLong = '#';
let imgElementOne = '#';

for (let i = 0; i < 5; i++) {
   console.log(imgElementLong);
   imgElementLong = imgElementLong + imgElementOne;
}

// Version 2 (while)
console.log(`___________ Version 2 (while)____________`);

let imgElementLong2 = '#';
let imgElementOne2 = '#';
let x = 0;

while (x < 5) {
   console.log(imgElementLong2);
   imgElementLong2 = imgElementLong2 + imgElementOne2;
    x++;
}

// Version 3 (do .. while)
console.log(`________ Version 3 (do .. while)_________`);

let imgElementLong3 = '#';
let imgElementOne3 = '#';
let s = 0;

do {
   console.log(imgElementLong3);
   imgElementLong3 = imgElementLong3 + imgElementOne3;
    s++;
} while (s < 5)