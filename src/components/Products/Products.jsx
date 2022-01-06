import React from 'react';
import ProductContainer from './ProductContainer';
import "./products.css"

const Products = (props) => {
    const {allFood} = props;
    // console.log(allFood);
    return (
        <>
            <div style={{color:"#f77c5e"}}>Menu🍕</div>
            <div className="food-container">
                {allFood.map((food) => 
                    <div key={food.foodId}>
                        <ProductContainer
                            id={food.foodId}
                            name={food.foodName}
                            description={food.description}
                            price = {food.price} 
                            imageUrl={food.images}
                        />
                    </div>
                )}
            </div>
        </>
    );
};

export default Products;