//FINDING LARGEST OF THREE NUMBERS USING FUNCTIONS
function largest(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } 
    else if (b >= a && b >= c) {
        return b;
    } 
    else {
        return c;
    }
}

let result = largest(10, 30, 6);
console.log(`The largest number is ${result}`)