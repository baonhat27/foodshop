import React, { useContext ,useState } from 'react';
import { CartContext } from '../../Context/CartContext';
import "./products.css"


const ProductContainer = (props) => {
    const [added,setAdded] = useState(false)
    const {setAddToCart, setTotal} = useContext(CartContext)
    const {id, name, description, price, imageUrl} = props
    return (
        <>
            <section className="food">
                <div className="food-info">
                    <p>{name}</p>

                </div>
                <div className="food-img-container">
                    {imageUrl.map((imgUrl,index) => 
                        <img className='food-img' key={index} src={imgUrl.imageUrl} alt="" />
                    )}
                </div>
                <div className="food-desc">{description}</div>
                <div className="food-price">{price} VNĐ</div>
                {added ? (
                    <button className="add-food-btn-disabled">Đã thêm </button>
                ) : (
                    <button className="add-food-btn"
                    onClick={() => { 
                        setAdded(true)
                        const newItem = {
                            name: name,
                            price: price,
                            imageUrl : imageUrl
                        }
                        setAddToCart(prev => [...prev,newItem]) 
                        setTotal((total) => (total += Number(price)) )
                    }}
                     >Thêm vào giỏ hàng</button>
                )}
                
            </section>
        </>
    );
};

export default ProductContainer;