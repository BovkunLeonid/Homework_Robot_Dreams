// Task 1 __________________________________________

const myArray = [1, 2, 3, 4, 5, 6, 7];

class Degree {
    constructor(arr) {
        this.arr = arr;
    }

    pow(n) {
        for (let i = 0; i < this.arr.length; i++){
            let result = 0;
            result = this.arr[i] ** n;
            console.log(result);
        }
    }
}

let myArrayDegree = new Degree(myArray);
myArrayDegree.pow(2);

// Task 2 __________________________________________

class Message {
    message() {
        alert('test');
    } 
    defer(n) {
        setTimeout(this.message, n);
    }
}

let messageAlert = new Message();

messageAlert.defer(2000);