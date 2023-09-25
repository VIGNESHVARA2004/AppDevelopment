// ProductDescription.js
import React, { useState } from 'react'; // Import useState
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart } from '../Shop/ProductStore';
import './ProductDetails.css';
import minus from './remove.png';
import add from './add.png';

export default function ProductDescription() {
  const { productId } = useParams();
  const product = useSelector((state) =>
    state.products.products.find((p) => p.id === parseInt(productId))
  );
  const dispatch = useDispatch();

  // Initialize the count state
  const [count, setCount] = useState(1);

  const handleAddToCart = () => {
    // Dispatch the addToCart action with count value
    dispatch(addToCart({ productId: product.id, count }));
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className='product-description'>
      <div className='productdetail-image-container'>
        <img src={product.image} alt={product.name} />
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
