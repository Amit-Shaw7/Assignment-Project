import { host } from "../Store";
import axios from "axios";
import { toast } from "react-hot-toast";

export const fetchAllProducts = (all, filter) => async (dispatch) => {

    try {
        dispatch({ type: "FETCH_ALL_PRODUCTS" });
        let url = "";
        if (all === false) {
            url = `${host}/products/`;
        } else {
            url = `${host}/products/all`;
        }

        if (filter) {
            url = `${host}/products/all/${filter}`
        }
        const res = await axios.get(url);
        if (res.data.success === true) {
            dispatch({ type: "FETCH_ALL_PRODUCTS_SUCCESS", payload: res.data.allProducts })
        }
    } catch (error) {
        dispatch({ type: "FETCH_ALL_PRODUCTS_FAILURE", payload: error.response.data.msg })
    }
};

export const sortProducts = (sort) => async (dispatch) => {
    try {
        dispatch({ type: "FETCH_ALL_PRODUCTS" });
        let url = `${host}/products/sort/ascend`;
        if (sort === "descend") {
            url = `${host}/products/sort/descend`
        }
        const res = await axios.get(url);
        if (res.data.success === true) {
            dispatch({ type: "FETCH_ALL_PRODUCTS_SUCCESS", payload: res.data.allProducts })
        }

    } catch (error) {
        dispatch({ type: "FETCH_ALL_PRODUCTS_FAILURE", payload: error.response.data.msg })
    }

};


export const deleteProduct = (productId) => async (dispatch) => {
    try {
        dispatch({ type: "DELETE_PRODUCT_REQUEST" });
        const url = `${host}/products/${productId}`;
        const res = await axios.delete(url);
        if (res.data.success === true) {
            dispatch({ type: "DELETE_PRODUCT_SUCCESS", payload: res.data.allProducts })
        }
    } catch (error) {
        dispatch({ type: "DELETE_PRODUCT_FAILURE", payload: error.response.data.msg })
    }
};

export const updateProduct = (data, productId) => async (dispatch) => {
    try {
        dispatch({ type: "UPDATE_PRODUCT_REQUEST" });
        const url = `${host}/products/${productId}`;
        const res = await axios.put(url, { ...data });
        if (res.data.success === true) {
            dispatch({ type: "UPDATE_PRODUCT_SUCCESS", payload: res.data.product })
            toast.success("Updated Succesfully")
        }
    } catch (error) {
        dispatch({ type: "UPDATE_PRODUCT_FAILURE", payload: error.response.data.msg })
    }
};

export const addProduct = (data) => async (dispatch) => {
    let image = "";

    switch (data.brand) {
        case ("Vivo" || "vivo"):
            image = "https://w7.pngwing.com/pngs/533/538/png-transparent-vivo-v9-vivo-x20-64gb-matte-black-vivo-v7-iphone-others-gadget-mobile-phone-mobile-phones-thumbnail.png"
            break;
        case ("Oppo" || "oppo"):
            image = "https://w7.pngwing.com/pngs/768/403/png-transparent-oppo-r11-oneplus-one-oppo-digital-camera-smartphone-oppo-mobile-phone-display-rack-thumbnail.png"
            break;
        case ("Samsung" || "samsung"):
            image = "https://w7.pngwing.com/pngs/97/285/png-transparent-samsung-galaxy-note-8-samsung-galaxy-s9-samsung-galaxy-s8-samsung-galaxy-s7-samsung-galaxy-a8-gadget-mobile-phone-samsung-galaxy-s7-thumbnail.png"
            break;
        case ("Realme" || "realme"):
            image = "https://themayanagari.com/wp-content/uploads/2021/04/Real-Me-8-Pro.png"
            break;
        case ("Redmi" || "redmi"):
            image = "https://w7.pngwing.com/pngs/423/418/png-transparent-redmi-note-8-redmi-mobile-xiaomi-smartphone-camera-android-phone-device-digital-thumbnail.png"
            break;

        default:
            break;
    }
    try {
        dispatch({ type: "ADD_PRODUCT_REQUEST" });
        const url = `${host}/products`;
        const dataObj = image ? { ...data, image } : { ...data };
      
        const res = await axios.post(url, { ...dataObj });
        if (res.data.success === true) {
            dispatch({ type: "ADD_PRODUCT_SUCCESS", payload: res.data.product })
            toast.success("Product Added")
        }
    } catch (error) {
        dispatch({ type: "ADD_PRODUCT_FAILURE", payload: error.response.data.msg })
    }
};

export const fetchProductDetails = (productId) => async (dispatch) => {
    try {
        dispatch({ type: "FETCH_PRODUCT_DETAILS_REQUEST" });
        const url = `${host}/products/${productId}`;
        const res = await axios.get(url);
        if (res.data.success === true) {
            dispatch({ type: "FETCH_PRODUCT_DETAILS_SUCCESS", payload: res.data.product })
        }
    } catch (error) {
        dispatch({ type: "FETCH_PRODUCT_DETAILS_FAILURE", payload: error.response.data.msg })
    }
};

