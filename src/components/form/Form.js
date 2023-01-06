import React, { useEffect, useState } from 'react';
import "./form.scss";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, fetchProductDetails, updateProduct } from '../../redux/actions/ProductAction';
import Loader from '../../layout/loader/Loader';
import { toast } from 'react-hot-toast';

const Form = ({ type }) => {
    const dispatch = useDispatch();
    const params = useParams();
    const {loading , error} = useSelector(state => state.product)

    useEffect(() => {
        error && toast.error(error.message);
        dispatch({ type: "CLEAR_ERROR" })
    }, [dispatch, error]);

    const [name, SetName] = useState("")
    const [brand, SetBrand] = useState("")
    const [ram, SetRam] = useState("")
    const [rom, SetRom] = useState("")
    const [processor, SetProcessor] = useState("")
    const [camera, SetCamera] = useState("")
    const [desc, SetDesc] = useState("")
    const [price, SetPrice] = useState("")

    const handleSubmit = (e) => {
        const data = {
            name,
            brand,
            ram,
            rom,
            processor,
            camera,
            desc,
            price
        }
        e.preventDefault();
        switch (type) {
            case "add":
                dispatch(addProduct(data));
                break;
            case "edit":
                dispatch(updateProduct(data, params.productId));
                break;

            default:
                break;
        }
    }

    return (
        <>
            {loading === true
                ?
                <Loader />
                :
                <div className='form'>
                    <h2>{(type === "login" && "Login") || (type === "signup" && "Signup") || (type === "edit" && "Edit Product") || (type === "add" && "Add Product")}</h2>
                    <form onSubmit={handleSubmit}>

                        <input onChange={(e) => SetName(e.target.value)} required type="text" placeholder='Name' />
                        <input onChange={(e) => SetBrand(e.target.value)} required type="text" placeholder='Brand' />
                        <input onChange={(e) => SetRam(e.target.value)} required type="text" placeholder='Ram' />
                        <input onChange={(e) => SetRom(e.target.value)} required type="text" placeholder='Rom' />
                        <input onChange={(e) => SetCamera(e.target.value)} required type="text" placeholder='Camera' />
                        <input onChange={(e) => SetDesc(e.target.value)} required type="text" placeholder='Description' />
                        <input onChange={(e) => SetProcessor(e.target.value)} required type="text" placeholder='Processor' />
                        <input onChange={(e) => SetPrice(e.target.value)} required type="text" placeholder='Price' />

                        <button type='submit'>{(type === "edit" && "Submit") || (type === "add" && "Add Product")}</button>
                    </form>
                </div>}
        </>
    )
}

export default Form;