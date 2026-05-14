// Searching an element in array using function
function search(arr, x) {
    for (let i = 0; i < arr.length; i++) {
        if (x === arr[i]) {
            return i;
        }
    }
    return -1 
}
let arr = [10, 89, 56, 45, 65]
let x = 9
let result = search(arr, x)
console.log("Array:", arr)
console.log("Element to search:", x)

if (result !== -1) {
    console.log(`Element ${x} found at index ${result}`)
} else {
    console.log(`Element ${x} not found in the array`)
}