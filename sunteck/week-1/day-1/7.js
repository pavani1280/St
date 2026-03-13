function search(arr,s) 
{
    let i=0,f=0
    for( i=0;i<arr.length;i++){
    if(arr[i]=== s){
        f=1;
        break;
    }
}
    if(f===1)
        return i;
    else 
        return "not found";
    
}
let arr =[1,2,3,4,5]
console.log("the index is :",search(arr,1))