import React, { useState } from 'react';
import "./navbar.scss";
import { MdAccountBox, MdClose, MdMenu } from 'react-icons/md';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div className='navbar'>

      {/* Logo */}
      <div className='left'>
        <span className='logo'>EM<span>a</span>rt<span>z</span></span>
      </div>

      {/* Links */}
      <div className='center large-screen'>
        <ul>
          <li><Link to="/" className='button-hover-transition' href='/'>Home</Link></li>
          <li><Link to="/products/all" className='button-hover-transition' >Products</Link></li>
        </ul>
      </div>

      <div className='small-screen button-hover-transition' style={{ height: `${menu === true ? "60vh" : "0px"}` }}>
        <ul>
          <li><Link to="/" className='button-hover-transition'>Home</Link></li>
          <li><Link to="/products/all" className='button-hover-transition' href='/'>Products</Link></li>
        </ul>
      </div>

      {/* Buttons */}
      <div className='right'>
        <span><MdAccountBox className='icons button-hover-transition' /></span>
        <span onClick={() => { setMenu(!menu) }} className='menu'>{menu !== true ? <MdMenu className='icons button-hover-transition' /> : <MdClose className='icons button-hover-transition' />}</span>
      </div>
    </div>
  );
}

export default Navbar;