import React from 'react';
import "./productcard.scss";
import { BiRupee } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { MdDelete, MdEdit } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../../redux/actions/ProductAction';

const ProductCard = ({ all, gridView, product }) => {
  const dispatch = useDispatch();

  const handleDelete = async (e) => {
    e.preventDefault();
    dispatch(deleteProduct(product._id))
  }
  return (
    <Link to={`/products/${product._id}`} className='button-hover-transition product-card'>
      <div className={`card ${gridView === true ? "grid" : "list"}`}>
        {
          all === true &&
          <>
            <Link to={`/products/edit/${product._id}`} className='action edit'><MdEdit /></Link>
            <Link to="/products/all" onClick={handleDelete} className='action delete'><MdDelete /></Link>
          </>
        }
        <img src={product?.image ? product?.image : "https://w7.pngwing.com/pngs/354/488/png-transparent-iphone-6s-plus-apple-iphone-6s-iphone-6-plus-apple-gadget-electronics-mobile-phone-thumbnail.png"} alt="" />
        <div className="details">
          <p className='title'>{product?.name}</p>
          <p>{product?.desc}</p>
          <div>
            <p className='price' style={{ fontSize: "1rem" }}><BiRupee /><span>{product?.price}</span></p>
            <p><span>{product?.ram}</span> &nbsp;|&nbsp; <span>{product?.rom}</span></p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard