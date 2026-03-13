let a=15
let b=10
if(a>b)
    console.log("a is max",a);
else
    console.log("b is max",b);
let c=20
a>b?a>c?console.log("a is max",a):console.log("c is max",c):b>c?console.log("b is max",b):console.log("c is max",c);
let q=[90,78,65,98];
let sum=0,min=q[0];
for(let i=0;i<q.length;i++){
    sum+=q[i];
    if(q[i]<min)
        min=q[i];
}
console.log("sum is ",sum);
console.log("min is ",min);
