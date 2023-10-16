import React,{useEffect, useState} from 'react';
import { Box, Button, Divider, IconButton, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import styled from '@emotion/styled';
import axios from 'axios'; 

import {
  setIsCartOpen,
} from '../Shop/ProductStore';
import { useNavigate, useLocation } from 'react-router-dom';

const FlexBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CartMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [cart, setCart] = useState([]); 
  const [totalPrice, setTotalPrice] = useState(0);
  const isCartOpen = useSelector((state) => state.products.isCartOpen);
  let Color = '#000';
  let Font = '#fff';
  if (location.pathname === '/') {
    Color = '#000';
    Font = '#f5f5f5';
  } else {
    Color = '#000';
    Font = '#fff';
  }
  console.log(cart);
  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem('token'); 
  console.log(user);
  const fetchCartProducts = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem('token');
    console.log(user);
    if (user && user.id) {
      fetch(`http://localhost:8080/api/cart/${user.id}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
        .then((response) => {
          console.log(response);
          if (!response.ok) {
            throw new Error(`Request failed with status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setCart(data);
        })
        .catch((error) => {
          console.error('Error fetching cart products:', error);
        });
    }

  };
  
  const handleIncrement = (item) => {
    try {
      const updatedCart = cart.map((cartItem) => {
        if (cartItem.id === item.id) {
          const updatedItem = { ...cartItem, count: cartItem.count + 1 };
          updateProductCount(updatedItem);
          return updatedItem;
        }
        return cartItem;
      });

      setCart(updatedCart);
    } catch (error) {
      console.error('Error incrementing product count:', error);
    }
  };

  const handleDecrement = (item) => {
    if (item.count === 1) {
      removeFromCart(item);
    } else {
      try {
        const updatedCart = cart.map((cartItem) => {
          if (cartItem.id === item.id) {
            const updatedItem = { ...cartItem, count: cartItem.count - 1 };
            updateProductCount(updatedItem);
            return updatedItem;
          }
          return cartItem;
        });

        setCart(updatedCart);
      } catch (error) {
        console.error('Error decrementing product count:', error);
      }
    }
  };

  const updateProductCount =  (updatedItem) => {
    try {
      fetch('http://localhost:8080/api/cart', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ updatedItem }),
      });
  
      // Handle the response if needed.
    } catch (error) {
      console.error('Error updating product count in the backend:', error);
    }
  };
  

  const removeFromCart =  (item) => {
    try {
      fetch(`http://localhost:8080/api/cart/delete/${item.productid}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);
      setCart(updatedCart);
    } catch (error) {
      console.error('Error removing product from the cart:', error);
    }
  };
  

  useEffect(() => {
    fetchCartProducts();
  }, []);

  useEffect(() => {
    const newTotalPrice = cart.reduce((total, item) => total + item.count * item.price, 0);
    setTotalPrice(newTotalPrice);
  }, [cart]);

  return (
    <Box
      display={isCartOpen ? 'block' : 'none'}
      backgroundColor="rgba(0,0,0,0.4)"
      zIndex={10}
      width="100%"
      height="100%"
      left="0"
      top="0"
      overflow="auto"
    >
      <Box
        position="fixed"
        right="0"
        bottom="0"
        width="max(400px,30%)"
        height="100%"
        backgroundColor={Font}
        color={Color}
      >
        <Box padding="30px" overflow="auto" height="100%" marginTop="100px">
          <FlexBox mb="15px">
            <Typography variant="h5" sx={{ fontFamily: 'SF-Bold' }}>
              SHOPPING BAG ({cart.length})
            </Typography>
            <IconButton onClick={() => dispatch(setIsCartOpen())}>
              <CloseIcon />
            </IconButton>
          </FlexBox>
          <Box>
            {cart.map((item) => (
              <Box key={`${item.productid}`}>
                <FlexBox>
                  <Box flex="1 1 40%">
                    <img
                      alt={item.name}
                      width="123px"
                      height="164px"
                      src={`data:image/jpeg;base64,${item.image}`}
                    />
                  </Box>
                  <Box flex="1 1 60%" justifyItems="left">
                    <FlexBox mb="5px">
                      <Typography
                        variant="h5"
                        fontFamily={'SF-Regular'}
                      >
                        {item.name}
                      </Typography>
                      <IconButton
                        sx={{ color: { Font } }}
                        onClick={() => removeFromCart(item)}
                      >
                        <CloseIcon />
                      </IconButton>
                    </FlexBox>
                    <FlexBox m="15px 0">
                      <Box
                        display="flex"
                        alignItems="center"
                        border={`1.5px solid white`}
                      >
                        <IconButton
                          onClick={() => handleDecrement(item)}
                          sx={{ color: { Font } }}
                        >
                          <RemoveIcon />
                        </IconButton>
                        <Typography>{item.count}</Typography>
                        <IconButton
                          onClick={() => handleIncrement(item)}
                          sx={{ color: { Font } }}
                        >
                          <AddIcon />
                        </IconButton>
                      </Box>
                      <Typography fontFamily={'SF-Regular'}>
                        Rs.{item.price}
                      </Typography>
                    </FlexBox>
                  </Box>
                </FlexBox>
                <Divider />
              </Box>
            ))}
          </Box>
          <Box m="20px 0">
            <FlexBox m="20px 0">
              <Typography fontWeight="bold">SUBTOTAL</Typography>
              <Typography fontWeight="bold">Rs.{totalPrice}</Typography>
            </FlexBox>
            <Button
              sx={{
                backgroundColor: 'black',
                color: 'white',
                border: 1.5,
                borderBlockStyle: 'solid',
                borderRadius: 0,
                letterSpacing: 0.2,
                borderColor: 'white',
                minWidth: '100%',
                padding: '10px 20px',
                m: '20px 0',
              }}
            >
              Checkout
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CartMenu;
