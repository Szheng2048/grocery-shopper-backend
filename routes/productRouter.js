const express = require("express")
const router = express.Router()
const{getAllProducts,
    updateProduct,
    createProduct,
    deleteProduct} = require("./basket/controller/productControler")


router.get("/get-all-products",getAllProducts)
router.post("/create-new-product",createProduct)
router.put('/find-and-update/:id',updateProduct)
router.delete("/find-and-delete/:id",deleteProduct)





module.exports = router