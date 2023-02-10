import express from "express";
import { addProduct, deleteProduct, getAllProducts, getFeaturedProducts, getProductDetails, sortAscend, sortDescend, updateProduct } from "../controllers/ProductController.js";
const ProductRouter = express.Router();

ProductRouter.route("/")
    .post(addProduct)
    .get(getFeaturedProducts);

ProductRouter.route("/all").get(getAllProducts);

ProductRouter.get('/sort/ascend' , sortAscend);
ProductRouter.get('/sort/descend' , sortDescend);

ProductRouter.route("/:productId")
    .put(updateProduct)
    .delete(deleteProduct)
    .get(getProductDetails)

export default ProductRouter;