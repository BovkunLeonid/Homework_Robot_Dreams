let myArray = [555, 'abc', 717, 20, true, 300, 777, '', 7, 111];

let maxElement = myArray[0] 
let minElement = myArray[0]
let sumElement = 0

for (var i = 0; i < myArray.length; i++) {
   if (typeof myArray[i] == typeof 1){
      sumElement = sumElement + myArray[i]
   }  
}

console.log(`sumElement = ${sumElement}`)

for (var i = 0; i < myArray.length; i++) {
   if (typeof myArray[i] == typeof 1){
      if (myArray[i] > maxElement){
         maxElement = myArray[i]
      } else if (myArray[i] < minElement) {
         minElement = myArray[i]
      }
   }  
}

console.log(`minElement = ${minElement}`)
console.log(`maxElement = ${maxElement}`)


//  Version 1 (for)

let imgElementLong = '#';
let imgElementOne = '#';


for (let i = 0; i < 5; i++) {
   console.log(imgElementLong)
   imgElementLong = imgElementLong + imgElementOne
}

// Version 2 (while)

let imgElementLong2 = '#';
let imgElementOne2 = '#';
let x = 0

while (x < 5) {
   console.log(imgElementLong2)
   imgElementLong2 = imgElementLong2 + imgElementOne2
    x++
}
