import {configureStore} from "@reduxjs/toolkit";
import { ProductReducer } from "./reducers/ProductReducer";

const Store = configureStore({
    reducer:{
        product : ProductReducer
    }
});

export const host = "https://assignment-api.onrender.com/api/v1";
export default Store;
