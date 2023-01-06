import React, { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Loader from '../../layout/loader/Loader';
import { fetchProductDetails } from '../../redux/actions/ProductAction';
import "./productDetails.scss";
import { BiRupee } from "react-icons/bi";

const ProductDetails = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const { loading, productDetails, error } = useSelector(state => state.product);

    useEffect(() => {
        dispatch(fetchProductDetails(params.productId))
    }, [dispatch , params.productId]);
    useEffect(() => {
        error && toast.error(error.message);
        dispatch({ type: "CLEAR_ERROR" })
    }, [dispatch, error]);
    return (
        <>{
            loading === true
                ?
                <Loader />
                :
                <div className='product-details'>
                    <div className='product-details-container'>

                        <div className='product-image'>
                            <img src={productDetails?.image ? productDetails?.image : "https://w7.pngwing.com/pngs/354/488/png-transparent-iphone-6s-plus-apple-iphone-6s-iphone-6-plus-apple-gadget-electronics-mobile-phone-thumbnail.png"} alt="" />
                        </div>

                        <div className='product-details'>
                            <div>
                                <p className='title'>{productDetails?.name}</p>
                                <p className='brand'>Brand - {productDetails?.brand}</p>
                            </div>

                            <div className='features'>
                                <p className='heading'>Features</p>

                                <p><span className='type'>Description - </span> {productDetails?.desc}</p>

                                <p ><span className='type'>CPU - </span> {productDetails?.processor}</p>

                                <p ><span className='type'>Storage - </span> {productDetails?.ram} RAM || {productDetails?.rom} Internal Storage</p>

                                <p ><span className='type'>Camera - </span> {productDetails?.camera}</p>

                                <p className='price'><span className='type'><BiRupee /> </span> {productDetails?.price}</p>

                            </div>
                            <button className="buy">BUY NOW</button>
                        </div>
                    </div>
                </div>
        }
        </>
    )
}

export default ProductDetails