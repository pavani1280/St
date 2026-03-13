/*
Assignments:
Create REST API for Product resource with below operations:

 
        1. Create new Product({productId,name,brand,price})
        2. Read all products
        3. Read all Product by brand
        4. Update a product
        5. Delete a product by id

Note: Use the same server.js file for both USER & PRODUCT APIs*/
//create product APIwith below operation
//crete a new product({product Id,name,brand,price})
//read all products
//read all product by brand
//update the product 
//delete the product by id
import exp from 'express'
export const productApp =exp.Router()
let cust =[]

productApp.get('/products',(req,res)=>{
    res.json({message:"getting",payload: cust});
})


productApp.post('/products',(req,res)=>{
    
   const newUser=req.body
   cust.push(newUser)
   res.json({message:"user created"})

})
productApp.put('/products',(req,res)=>{
    let modifieduser=req.body
    let index = cust.findIndex(userObj=>userObj.productId===modifieduser.productId)
    if (index ===-1){
    return res.json({message:"not found"})
    }
    cust.splice(index,1,modifieduser)

    res.json({message:"updated successfully"})

})

productApp.delete('/products/:id',(req,res)=>{
   
    //get id of user from url parameter
    let idOfUrl = Number(req.params.id)
    //find the index of the user
    let index= cust.findIndex(userObj => userObj.productId=== idOfUrl)
    //if user not found
    if(index === -1){ 
        return res.json({message:"user not found"})
    }
    //delete user by index
    cust.splice(index,1)
    //send re to client
    res.json({message:"user DELETED"})
})



