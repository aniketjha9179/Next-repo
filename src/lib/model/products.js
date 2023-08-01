import mongoose from "mongoose";


const productModel = new mongoose.Schema({
    name:String, 
    price:String,
    category:String,
    company:String,
    color:String,
  
    
})
export const Product = mongoose.models.Product || mongoose.model("Product", productModel)