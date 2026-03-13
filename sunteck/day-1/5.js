function max(a,b,c){
 let y=(a>b&&a>c)? a :(b>c)? b:c;
 return y;
}
let x= max(5,12,6);
console.log("max is ",x);