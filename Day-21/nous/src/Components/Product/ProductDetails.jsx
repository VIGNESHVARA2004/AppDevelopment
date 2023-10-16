
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart } from '../Shop/ProductStore';
import './ProductDetails.css';
import minus from './remove.png';
import add from './add.png';

export default function ProductDescription() {
  const { productId } = useParams();
  console.log(productId);
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);

  const userid = JSON.parse(localStorage.getItem("user")).id;
  useEffect(() => {
    fetchProductDetails(productId);
    console.log(product);
  }, [productId]);

  const fetchProductDetails = (productId) => {
    const token = localStorage.getItem('token');
    console.log(productId); 
    console.log(token);
    fetch(`http://localhost:8080/api/product/${productId}`, {
  method: 'GET',
  headers: {
    "Authorization": `Bearer ${token}`,
  },
})
  .then((response) => {
    return response.json(); // Return the parsed JSON
  })
  .then((data) => {
    setProduct(data);
    console.log(data);
  })
  .catch((error) => console.error('Error fetching product details:', error));
  };

  const handleAddToCart = () => {
    const token = localStorage.getItem('token');
    const productWithCount = { ...product, count };
    console.log(JSON.parse(localStorage.getItem("user")).id);

    const cartRequest = {
      userid : userid,
      productid : product.id,
      count : count,
      brand : product.brand,
      name : product.name,
      price : product.price,
      image : product.image,
      description : product.desciption
    }

    console.log(cartRequest);

      fetch('http://localhost:8080/api/cart/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(cartRequest),
      })
        .then((response) => {
          if (response.status === 200) {
            console.log('Product added to cart');
          } else {
            console.error('Failed to add product to cart');
          }
        })
        .catch((error) => console.error('Error adding product to cart:', error));
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className='product-description'>
      <div className='productdetail-image-container'>
        <img src={`data:image/jpeg;base64,${product.image}`} alt={product.name} />
      </div>
      <div className='product-details'>
        <div>
          <p className='Brand'>{product.brand}</p>
          <h2 className='Product-Name'>{product.name}</h2>
        </div>
        <div className='Product-price'>
          <p>${product.price}</p>
        </div>
        <div className='Product-desciption'>
          <h3>Desciption</h3>
          <p>{product.desciption}</p>
        </div>
        <div className='product-button'>
          <div className='count'>
            <div className='right' onClick={() => setCount(count - 1)}>
              <img src={minus} alt="Minus" />
            </div>
            <div>{count}</div>
            <div className='left' onClick={() => setCount(count + 1)}>
              <img src={add} alt="Add" />
            </div>
          </div>
          <div className='atc'>
            <input type='button' value='Add to Cart' onClick={handleAddToCart} />
          </div>
        </div>
      </div>
    </div>
  );
}
