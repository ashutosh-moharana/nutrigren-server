const Product = require('../models/product.model');

const getAllProducts = async (req,res) =>{
       try {
         const products = await Product.find({});
         res.status(200).json({success:true,products});
       } catch (error) {
        console.log("Error in fetching products: ",error);
        res.status(500).json({ success: false, message: "Server error" });
       }

}

const getProductById = async (req,res) =>{
     try {
        const product = await Product.findById(req.params.id);
        if(!product){
            res.status(404).json({success:false,message:"Product not found!"})
        }
        res.status(200).json({success:true,product})
     } catch (error) {
         console.error("Error fetching product:", error);
        res.status(500).json({ success: false, message: "Server error" });
     }
}

module.exports = {getAllProducts,getProductById}