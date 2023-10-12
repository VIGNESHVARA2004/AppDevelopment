package com.example.nous.service;


import com.example.nous.entity.Cart;
import com.example.nous.entity.CartRequest;
import com.example.nous.repository.CartRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartService {

    private CartRepository cartRepository;

    public void addProduct(CartRequest cartRequest){
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

    public List<Cart> getAllProduct(int Userid)
    {
        return cartRepository.findByUserid(Userid);
    }

    public void updateProduct(CartRequest cartRequest){
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
}
