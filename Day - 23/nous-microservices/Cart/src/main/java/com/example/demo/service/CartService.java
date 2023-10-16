package com.example.demo.service;


import com.example.demo.entity.Cart;
import com.example.demo.entity.CartRequest;
import com.example.demo.entity.CartResponse;
import com.example.demo.repository.CartRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CartService {

    private final CartRepository cartRepository;

    public String addProduct(CartRequest cartRequest){
        Optional<Cart> existingCartItem = cartRepository.findByUseridAndProductid(cartRequest.getUserid(), cartRequest.getProductid());

        if (existingCartItem.isPresent()) {
            Cart cartItem = existingCartItem.get();
            int newCount = cartItem.getCount() + cartRequest.getCount();
            cartItem.setCount(newCount);
            cartRepository.save(cartItem);
        } else {
            Cart product = Cart.builder()
                    .userid(cartRequest.getUserid())
                    .productid(cartRequest.getProductid())
                    .count(cartRequest.getCount())
                    .brand(cartRequest.getBrand())
                    .name(cartRequest.getName())
                    .price(cartRequest.getPrice())
                    .desciption(cartRequest.getDesciption())
                    .image(cartRequest.getImage())
                    .build();
            cartRepository.save(product);
        }
        return "Succesfully added the product to the cart";
    }

    public List<CartResponse> getAllProduct(int Userid) throws SQLException {

        List<Cart> cartItems = cartRepository.findByUserid(Userid);
        List<CartResponse> cartResponses = new ArrayList<>();

        for (Cart cart : cartItems) {

            CartResponse cartResponse = new CartResponse();
            cartResponse.setProductid(cart.getProductid());
            cartResponse.setCount(cart.getCount());
            cartResponse.setBrand(cart.getBrand());
            cartResponse.setName(cart.getName());
            cartResponse.setPrice(cart.getPrice());
            cartResponse.setDesciption(cart.getDesciption());
            cartResponse.setImage(cart.getImage());
            cartResponses.add(cartResponse);
        }

        return cartResponses;
    }

    public void updateProduct(CartRequest cartRequest) {
        Optional<Cart> optionalCart = cartRepository.findById((long) cartRequest.getProductid());
        if (optionalCart.isPresent()) {
            Cart product = optionalCart.get();
            product.setUserid(cartRequest.getUserid());
            product.setProductid(cartRequest.getProductid());
            product.setCount(cartRequest.getCount());
            product.setBrand(cartRequest.getBrand());
            product.setName(cartRequest.getName());
            product.setPrice(cartRequest.getPrice());
            product.setImage(cartRequest.getImage());
            product.setDesciption(cartRequest.getDesciption());
            cartRepository.save(product);
        }
    }

    @Transactional
    public String deleteProduct(int productId) {
        cartRepository.deleteByProductid(productId);
        return "Product is deleted";
    }
}
