import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css"

const NavBar = () => {
    return (
        <>
            <nav className='navbar'>
                <Link to ="/" >Trang chủ 🏠</Link>
                <Link to ="/products" >Đồ ăn 🍔</Link>
                <Link to ="/checkout" >Giỏ hàng 💵</Link>
            </nav>
        </>
    );
};

export default NavBar;