import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Shop.css';
import LeftArrow from './left-chevron.png';
import RightArrow from './right-arrow (1).png';

export default function Shop() {
  const [backendProducts, setBackendProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Get the authorization token from local storage
    const token = localStorage.getItem('token');
    console.log(token);
    console.log(backendProducts);
    if (!token) {
      // Handle the case where the token is not found in local storage
      console.error('Authorization token not found.');
      return;
    }


    fetch('http://localhost:8080/api/product/', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const productsWithImages = data.map((product) => ({
          ...product,
        }));
        setBackendProducts(productsWithImages);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div className='shop-outer'>
      <div className='shop-title'>Products</div>
      <div className='shop-items'>{backendProducts.length} items</div>
      <div className='shop-product-items'>
        <div className='shop-product-items-inner'>
          {backendProducts.map((product, index) => (
            <div
              key={index}
              className='product-link'
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <div className='shop-product-card'>
                <img
                  src={`data:image/jpeg;base64,${product.image}`}
                  alt={`Product ${index + 1}`}
                />
                <p className='Brand'>{product.brand}</p>
                <div className='product-titles'>
                  <p className='Name'>{product.name}</p>
                  <p className='price'>${product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='Page-Bar'>
          <div className='Page-Bar-inner'>
            <img className='Page-Bar-buttons' src={LeftArrow} alt='Left Arrow' />
            <div className='Pageno'>1</div>
            <img className='Page-Bar-buttons' src={RightArrow} alt='Right Arrow' />
          </div>
        </div>
      </div>
    </div>
  );
}
