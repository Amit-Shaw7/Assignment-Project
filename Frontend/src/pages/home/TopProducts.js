import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts, sortProducts } from '../../redux/actions/ProductAction';
import Loader from "../../layout/loader/Loader.js"
import ProductCard from "../../components/productcard/ProductCard.js";
import { Link } from 'react-router-dom';

const TopProducts = ({ all, heading }) => {
    const [gridView, setgridView] = useState(true);
    // const [sort, setSort] = useState("");
    // const [filter, setFilter] = useState("");
    const dispatch = useDispatch();
    const { loading, error, allProducts } = useSelector(state => state.product);

    useEffect(() => {
        dispatch(fetchAllProducts(all));
    }, [dispatch, all]);

    useEffect(() => {
        error && toast.error(error);
        dispatch({type:"CLEAR_ERROR"});
    }, [error, dispatch]);

    const fetchFilterProduct = (filter) => {
        dispatch(fetchAllProducts(all, filter))
    }
    const fetchSortedProduct = async (sort) => {
        dispatch(sortProducts(sort))
    }

    return (
        <>
            {
                loading === true ?
                    <Loader />
                    :
                    <div id="products" className='top-products'>
                        <h3>{heading}</h3>
                        <div className='buttons'>
                            {all === true && <>
                                <button className={`${gridView === true ? "selected" : "not-selected"}`} onClick={() => setgridView(true)}>Grid View</button>
                                <button className={`${gridView === false ? "selected" : "not-selected"}`} onClick={() => setgridView(false)}>List View</button>
                            </>}
                        </div>
                        <div className='buttons'>
                            {all === true && <>
                                <div>
                                    <select onChange={(e) => {fetchFilterProduct(e.target.value)}}>
                                        <option value="" >Filter</option>
                                        <option value="?ram=4gb">RAM 4gb</option>
                                        <option value="?ram=6gb">RAM 6gb</option>
                                        <option value="?rom=32gb">Internal Storage 32gb</option>
                                        <option value="?rom=64gb">Internal Storage 64gb</option>
                                        <option value="?rom=128gb">Internal Storage 128gb</option>
                                    </select>
                                </div>

                                <div>
                                    <select onChange={(e) => fetchSortedProduct(e.target.value)}>
                                        <option value="">Sort by</option>
                                        <option value="ascend">Low To High</option>
                                        <option value="descend">High To Low</option>
                                    </select>
                                </div>
                            </>}
                        </div>
                        {all === true && <Link className='add-button' to="/products/add">ADD PRODUCT</Link>}
                        <div className={`products ${gridView === true ? "grid-view" : "list-view"}`}>
                            {
                                allProducts && allProducts.length !== 0 ? allProducts?.map((product) => (
                                    <ProductCard key={product?._id} all={all} gridView={gridView} product={product} />
                                ))
                                    :
                                    <div>NO Products</div>
                            }
                        </div>
                    </div>
            }
        </>
    )
}

export default TopProducts;