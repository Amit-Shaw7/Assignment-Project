import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide product name"],
    },
    ram: {
        type: String,
        required: [true, "Please provide product ram"],
    },
    rom: {
        type: String,
        required: [true, "Please provide product rom"],
    },
    processor: {
        type: String,
        required: [true, "Please provide product processor"],
    },
    camera: {
        type: String,
        required: [true, "Please provide product camera"],
    },
    desc: {
        type: String,
        required: [true, "Please provide product desc"],
    },
    brand: {
        type: String,
        required: [true, "Please provide product brand"],
    },
    image:{
        type : String,
        default : "https://w7.pngwing.com/pngs/354/488/png-transparent-iphone-6s-plus-apple-iphone-6s-iphone-6-plus-apple-gadget-electronics-mobile-phone-thumbnail.png"
    },
    price: {
        type: Number,
        required: [true, "Please provide product price"],
    },
});

const ProductModel = mongoose.model("Product", ProductSchema);
export default ProductModel;