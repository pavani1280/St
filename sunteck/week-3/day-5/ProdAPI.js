/*2. REST API with below operations
        a. Create product
        b. Read all products
        c. Read a product by productId
        d. Update a product by productId
        e. Delete a product by productId*/
import exp from "express"
import {prodModel} from "../model/ProdModel.js" 
export const prodApp =exp.Router();
prodApp.post("/products",async(req,res)=>{
    const newprod = req.body;
    const newProdDoc = new prodModel(newprod);
    const result = await newProdDoc.save();
    console.log(result)
    res.status(201).json({message:"created"})
})
prodApp.get("/products",async(req,res)=>{
    const prodList=await prodModel.find();
    res.status(200).json({message:"products",payload:prodList})
})
prodApp.get("/products/:id",async(req,res)=>{
    const pid =req.params.id
    const prodobj =await prodModel.findOne({productId:pid})
    if(prodobj=== null){
       res.status(400).json({message:"id not found"}) 
    }
    res.status(200).json({message:"found",payload:prodobj})
})
prodApp.put("/products/:id",async(req,res)=>{
    const prodobj =req.body
    const pid =req.params.id
    const modifiedprod =await prodModel.findOneAndUpdate({productId:pid},{$set :{...prodobj}},{new:true})
    res.status(201).json({message:"updated",payload:modifiedprod})

})
prodApp.delete("/products/:id",async(req,res)=>{
    const pid =req.params.id;
    const findPid = await prodModel.findOne({productId:pid}) 
    console.log(findPid)

    const deleteProd = await prodModel.findOneAndDelete(pid)
    res.status(201).json({message:"deleted successfully",payload:deleteProd})
})
