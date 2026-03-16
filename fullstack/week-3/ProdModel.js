import {Schema,model} from 'mongoose'
const ProdSchema=new Schema({
    productId:{
        type:Number,
        required:[true,"product id is required"]
    },
    productName:{
        type:String,
        required:[true,"product name is required"]
    },
    price:{
        type:Number,
        required:[true,"preice is required"],
        min :[10000,"min price is required"],
        max:[50000,"max price is required"]
    },
    brand:{
        type:String,
        required:[true,"brand is requried"]
    }

},{
    versionKey:false,
    timestamps:true
});
export const prodModel=model("product",ProdSchema)