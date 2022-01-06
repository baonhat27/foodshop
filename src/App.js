import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import NavBar from './NavBar/NavBar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { CartContext } from './Context/CartContext';



function App() {
    const [allFood, setAllFood] = useState([])
    const [addToCart, setAddToCart]= useState([])
    const [total, setTotal]=useState(0)
    //Call API
    useEffect(() => {
        async function getData(){
            const res = await axios.get("https://freeapi.code4func.com/api/v1/food/list/0/20")
            return res
        }
        getData().then((res) => {
                // console.log(res.data.data);
                setAllFood(res.data.data)
            })
        getData().catch( (err) => console.log(err))
    }, [])
  return (
      <CartContext.Provider value={{ addToCart , setAddToCart, total, setTotal}} >
        <Router>
            <NavBar/>
            <div className='page-container'>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/products" element={<Products allFood = {allFood} />} />
                    <Route path="/checkout" element={<Cart/>} />
                </Routes>
            </div>
        </Router>
      </CartContext.Provider>
  );
}
export default App;
