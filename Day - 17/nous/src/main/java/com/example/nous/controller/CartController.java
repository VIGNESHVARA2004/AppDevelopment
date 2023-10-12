package com.example.nous.controller;

import com.example.nous.entity.Cart;
import com.example.nous.entity.CartRequest;
import com.example.nous.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cart")
public class CartController {

    @Autowired
    private CartService cartService;

    @GetMapping("/{Userid}")
    public List<Cart> GetProdocts(@PathVariable("Userid") int Userid)
    {
        return cartService.getAllProduct(Userid);
    }

    @PostMapping
    public void addProducts(@RequestBody CartRequest cartRequest)
    {
        cartService.addProduct(cartRequest);
    }

    @PutMapping
    public void updateProducts(@RequestBody CartRequest cartRequest)
    {
        cartService.updateProduct(cartRequest);
    }

    @GetMapping(value="/test")
    public String test()
    {
        return "Success";
    }
}
