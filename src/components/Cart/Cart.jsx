import React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import "./Cart.css"

const Cart = () => {
    const { addToCart, total, setAddToCart, setTotal } = useContext(CartContext)
    const navigate = useNavigate()
    return (
        <div>
            <div className="cart-container">
                <div className="cart-header">Thanh toán</div>
                <div className="cart-items">
                    {addToCart.map((item, index) => {
                        // console.log(addToCart);
                        return (
                            <div key={index} className="cart-item">
                                <img className="cart-item-img" src={item.imageUrl[0].imageUrl} alt="" />
                                {item.name} : {item.price} VNĐ
                            </div>
                        )
                    })}
                    <div className="cart-total">Tổng giá tiền: {total} VNĐ</div>
                    <button className='cart-checkout'
                        onClick={
                            () => {
                                setTotal(0)
                                setAddToCart([])
                            }
                        }
                    >Hoàn thành</button>
                    <br />
                    <button className='cart-gohome'
                        onClick={() => navigate("/")}
                    >Trở về trang chủ</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;    