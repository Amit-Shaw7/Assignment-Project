import {configureStore} from "@reduxjs/toolkit";
import { ProductReducer } from "./reducers/ProductReducer";

const Store = configureStore({
    reducer:{
        product : ProductReducer
    }
});

export const host = "http://localhost:5000/api/v1";
export default Store;
