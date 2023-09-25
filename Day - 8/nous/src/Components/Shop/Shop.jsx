import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './Shop.css';
import LeftArrow from './left-chevron.png';
import RightArrow from './right-arrow (1).png';

export default function Shop() {
  const products = useSelector((state) => state.products.products);
  
  const navigate = useNavigate();

  return (
    <div className='shop-outer'>
      <div className='shop-title'>Products</div>
      <div className='shop-items'>{products.length} items</div>
      <div className='shop-product-items'>
        <div className='shop-product-items-inner'>
          {products.map((product, index) => (
            <div 
              key={index}
              className='product-link' 
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <div className='shop-product-card'>
                <img src={product.image} alt={`Product ${index + 1}`} />
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
