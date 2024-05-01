// const { response } = require("../../../app")
const Product = require("../model/Product")

async function getAllProducts(req,res,next){
    try{
        let foundAllProducts = await Product.find({})
        res.json({message: "success",payload:foundAllProducts})
    } catch(error){
        res.json({message:error, error})
    }
}

async function createProduct(req,res,next){
    try{
        const product = req.body.product
        let newProduct = new Product({
            product: product
        })
        let finishedProduct = await newProduct.save()
        res.json({message:"success", payload: finishedProduct})
    } catch(e){
        res.json({message:"error", error:e.message})
    }
}

async function updateProduct(req,res,next){
    try{
        let updatedProduct = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.json({message:"success",payload:updatedProduct})
    }catch(e){
        res.json({message: "error",error:e.message})
    }
}

async function deleteProduct(req,res,next){
    try{
        let deletedProduct = await Product.findByIdAndDelete(req.params.id)
        res.json({message:"successfully deleted", payload:deletedProduct})
    } catch(e){
        res.json({message:"error",error:e.message})
    }
}


module.exports = {
    getAllProducts,
    updateProduct,
    createProduct,
    deleteProduct
}