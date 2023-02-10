import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    allProducts: null,
    productDetails: null,
    error: null,
}
export const ProductReducer = createReducer(initialState, {
    // FETCH ALL PRODUCTS 
    FETCH_ALL_PRODUCTS: (state) => {
        state.loading = true;
        state.allProducts = [];
    },
    FETCH_ALL_PRODUCTS_SUCCESS: (state, action) => {
        state.loading = false;
        state.allProducts = action.payload;
    },
    FETCH_ALL_PRODUCTS_FAILURE: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },


    //DELETE PRODUCTS
    DELETE_PRODUCT_REQUEST: (state) => {
        state.loading = true;
    },
    DELETE_PRODUCT_SUCCESS: (state, action) => {
        state.loading = false;
        state.allProducts = [];
        state.allProducts = action.payload;
    },
    DELETE_PRODUCT_FAILURE: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },

    //ADD PRODUCTS
    ADD_PRODUCT_REQUEST: (state) => {
        state.loading = true;
    },
    ADD_PRODUCT_SUCCESS: (state, action) => {
        state.loading = false;
    },
    ADD_PRODUCT_FAILURE: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },

    //UPDATE PRODUCTS
    UPDATE_PRODUCT_REQUEST: (state) => {
        state.loading = true;
    },
    UPDATE_PRODUCT_SUCCESS: (state, action) => {
        state.loading = false;
        state.productDetails = action.payload;
    },
    UPDATE_PRODUCT_FAILURE: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },

    //FETCH PRODUCT DETAILS
    FETCH_PRODUCT_DETAILS_REQUEST: (state) => {
        state.loading = true;
    },
    FETCH_PRODUCT_DETAILS_SUCCESS: (state, action) => {
        state.loading = false;
        state.productDetails = action.payload;
        console.log(state.productDetails);
    },
    FETCH_PRODUCT_DETAILS_FAILURE: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },

    // CLEAR ERROR
    CLEAR_ERROR: (state) => {
        state.error = null;
    }
})