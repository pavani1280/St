/*1.Exam portal simulator:
-----------------------------
When a student submits an exam:

        Immediately show: “Exam submitted successfully”
        After 2 seconds → show: “Evaluating answers…”
        After 4 seconds → show: “Result: Pass”



2.OTP Countdown Simulator (Console App)
------------------------------------
        
        Simulate OTP sending flow in Node.js:
        
        Show “OTP Sent Successfully”
        
        Start 10-second countdown
        
        Allow resend only after countdown ends*/
//exam portal
console.log("Exam submitted successfully")
setTimeout(() => {
  console.log("Evaluating answers…")  
}, 2000);
setTimeout(()=>{
    console.log("Result: Pass")
    },4000);

 console.log(" OTP Sent Successfully")
let sec =5
let intervalId =setInterval(() => {
    
    sec--;
    console.log(`sec ${sec}`)
    if(sec===0){
    console.log("resend")
    clearInterval(intervalId)
    }
}, 1000); 
//I will 10000 /- on tomarrow

 let moneytransaction=true
const x = new Promise((fullfilled,rejected)=>{
    setTimeout(() => {
        if(mt)
        {
           fullfilled("successfully sended money 10000...")
        }
        else {
            rejected("failed the transaction ")
        }
    }, 2000);
});
