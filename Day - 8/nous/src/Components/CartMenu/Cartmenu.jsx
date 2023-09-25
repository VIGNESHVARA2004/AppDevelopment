import React from "react";
import { Box, Button, Divider, IconButton, Typography } from "@mui/material";
import { useSelector, useDispatch } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import styled from '@emotion/styled';

import {
    incrementProductCount,
    decrementProductCount,
    removeFromCart,
    setIsCartOpen
} from "../Shop/ProductStore";
import { useNavigate, useLocation } from "react-router-dom";

const FlexBox = styled(Box)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const CartMenu = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const color = "#f5f5f5";
    const cart = useSelector((state) => state.products.cart);
    const productCounts = useSelector((state) => state.products.productCounts);
    const isCartOpen = useSelector((state) => state.products.isCartOpen);
    let Color = '#000';
    let Font = "#fff";
    if(location.pathname === '/' ){
        Color = '#000'
        Font = "#f5f5f5"
    }
    else{
        let Color = '#000';
        let Font = "#fff";
    }
    console.log(cart);
    const totalPrice = cart.reduce((total, item) => {
        console.log(productCounts[item.id])
        return total + item.count * item.price;
    }, 0);

    return (
        <Box
            display={isCartOpen ? 'block' : 'none'}
            backgroundColor="rgba(0,0,0,0.4)"
            zIndex={10}
            width="100%"
            height="100%"
            left="0"
            top='0'
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
                        <Typography variant="h5" sx={{ fontFamily: "SF-Bold" }}>SHOPPING BAG ({cart.length})</Typography>
                        <IconButton onClick={() => dispatch(setIsCartOpen())}>
                            <CloseIcon />
                        </IconButton>
                    </FlexBox>
                    <Box>
                        {cart.map((item) => (

                            <Box key={`${item.name}-${item.slug}`}>
                                <FlexBox>
                                    <Box flex="1 1 40%">
                                        <img
                                            alt={item.name}
                                            width="123px"
                                            height="164px"
                                            src={item.image}
                                        />
                                    </Box>
                                    <Box flex="1 1 60%" justifyItems="left">
                                        <FlexBox mb="5px">
                                            <Typography variant="h5"  fontFamily={"SF-Regular"}>
                                                {item.name}
                                            </Typography>
                                            <IconButton sx={{ color: {Font} }} onClick={() => dispatch(removeFromCart(item))}>
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
                                                    onClick={() => dispatch(decrementProductCount(item))}
                                                    sx={{ color: {Font} }}
                                                >
                                                    <RemoveIcon />
                                                </IconButton>
                                                <Typography>{item.count}</Typography>
                                                <IconButton
                                                    onClick={() => dispatch(incrementProductCount(item))}
                                                    sx={{ color: {Font} }}
                                                >
                                                    <AddIcon />
                                                </IconButton>
                                            </Box>
                                            <Typography fontFamily={"SF-Regular"}>
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
                                backgroundColor: "black",
                                color: "white",
                                border: 1.5,
                                borderBlockStyle: "solid",
                                borderRadius: 0,
                                letterSpacing: 0.2,
                                borderColor: "white",
                                minWidth: "100%",
                                padding: "10px 20px",
                                m: "20px 0"
                            }}
                        >Checkout</Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default CartMenu;
