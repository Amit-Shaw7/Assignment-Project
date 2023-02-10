import Features from "../Features.js";
import ProductModel from "../models/ProductModel.js";
import { asyncError } from "../utils/Error.js";
import ErrorHandler from "../utils/ErrorHanlder.js";

export const addProduct = asyncError(async (req, res, next) => {
    const product = await ProductModel.create(req.body);
    return res.status(200).json({
        msg: "Product Created",
        product,
        success: true,
    });
});

export const updateProduct = asyncError(async (req, res, next) => {
    const product = await ProductModel.findById(req.params.productId);
    if (!product) { return next(new ErrorHandler("Cannot find product", 404)); }

    const newProduct = await ProductModel.findByIdAndUpdate(req.params.productId, req.body, { new: true });

    return res.status(200).json({
        msg: "Updated Succesfully",
        success: true,
        product: newProduct
    });
});

export const deleteProduct = asyncError(async (req, res, next) => {
    const product = await ProductModel.findById(req.params.productId);
    if (!product) { return next(new ErrorHandler("Cannot find product", 404)); }

    await ProductModel.findByIdAndDelete(req.params.productId);
    const allProducts = await ProductModel.find();


    return res.status(200).json({
        msg: "Deleted Succesfully",
        success: true,
        allProducts
    });
});

export const getAllProducts = asyncError(async (req, res, next) => {
    const features = new Features(ProductModel, req.query).filter();
    const allProducts = await features.query;

    // const allProducts  = await ProductModel.find();
    if (!allProducts) { return next(new ErrorHandler("No products found", 404)) }

    return res.status(200).json({
        msg: "Products Fethed succesfully",
        allProducts,
        success: true
    })
});
export const sortAscend = asyncError(async (req, res, next) => {
    
    const allProducts  = await ProductModel.find().sort({price : 1});

    if (!allProducts) { return next(new ErrorHandler("No products found", 404)) }

    return res.status(200).json({
        msg: "Products Fethed succesfully",
        allProducts,
        success: true
    })
});
export const sortDescend = asyncError(async (req, res, next) => {
    
    const allProducts  = await ProductModel.find().sort({price : -1});

    if (!allProducts) { return next(new ErrorHandler("No products found", 404)) }

    return res.status(200).json({
        msg: "Products Fethed succesfully",
        allProducts,
        success: true
    })
});
export const getFeaturedProducts = asyncError(async (req, res, next) => {
    const allProducts = await ProductModel.find().limit(4);

    if (!allProducts) { return next(new ErrorHandler("No products found", 404)) }

    return res.status(200).json({
        msg: "Products Fethed succesfully",
        allProducts,
        success: true
    })
});
export const getProductDetails = asyncError(async (req, res, next) => {
    const product = await ProductModel.findById(req.params.productId);
    if (!product) { return next(new ErrorHandler("product not found", 404)) }

    return res.status(200).json({
        msg: "Products Fethed succesfully",
        product,
        success:true
    })
});