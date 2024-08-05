import React, { useEffect, useState } from 'react';
// import { useEffect } from 'react';
import {HomeImg} from '../assets/Images'
import { useAppContext } from '../Context/ContextProvider';
import toast from "react-hot-toast";
// import fetchProducts from '../services/api';

const Home = () => {
const [count, setCount] = useState(1000);
const [productss, setProductss] = useState([]);
const {user,dispatch}= useAppContext()

  const addToCart = (product) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: product,
    });
    toast.success(`${product.name} added to cart`);
  }

  function increaseCount(){
    setCount(count+1)
  }

  async function fetchProducts(url){
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setProductss(data)
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    fetchProducts("https://664f05f9fafad45dfae1f2d3.mockapi.io/api/v1/products/products")
  }, [])
  

  return (
    <div className='home'>
        <img src={HomeImg} alt="" style={{width:'100%'}}  />
        <section className="product" style={{padding:'2rem'}}>
          <h1 className='headings'>Products Overview</h1>
          <div className="counting">
            <button className="minus" onClick={()=>setCount(count-1)}>-</button>
            <span className="number">{count}</span>
            <button className="add" onClick={increaseCount}>+</button>
          </div>
          <ul className="product-container" >
            {
              !user? productss.slice(0,3).map((product) => (
                <li key={product.id}>
                  <div className="p-image" style={{background:'wheat',height:''}}>
                    <img src={product.image} alt="" width={200}/>
                  </div>
                  <h3 className="p-name">{product.name}</h3>
                  <p className="p-use">{product.benefit}</p>
                  <div className="price-cart" style={{display:'flex',alignItems:'center'}}>
                    <p className="p-price">₦{product.price}</p>
                    <button onClick={()=>addToCart(product)}>Add to Cart</button>
                  </div>
                </li>
              )):productss.map((product) => (
                <li key={product.id}>
                  <div className="p-image" style={{background:'wheat',height:''}}>
                    <img src={product.image} alt="" width={200}/>
                  </div>
                  <h3 className="p-name">{product.name}</h3>
                  <p className="p-use">{product.benefit}</p>
                  <div className="price-cart" style={{display:'flex'}}>
                    <p className="p-price">₦{product.price}</p>
                    <button onClick={()=>addToCart(product)}>Add to Cart</button>
                  </div>
                </li>
              ))
            }
            
          </ul>
        </section>
    </div>
  )
}

export default Home