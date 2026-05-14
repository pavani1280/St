//FINDING SMALLEST NUMBER IN AN ARRAY
let arr = [10, 3, 5, 39, 56, 89, 70]

let min = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i];
    }
}
console.log(`The smallest number is: ${min}`)