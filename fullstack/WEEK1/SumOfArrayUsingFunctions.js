//sum of array numbers using functions
 function arraySum(arr){
    let sum=0
    for(let i=0;i<arr.length;i++){
        sum+=arr[i]
    }
    return sum;
}

let arr=[7,9,20,34,8]
let result=arraySum(arr)
console.log("sum of array numbers:",result)