package com.example.demo.controller;

import com.example.demo.entity.Cart;
import com.example.demo.entity.CartRequest;
import com.example.demo.entity.CartResponse;
import com.example.demo.service.CartService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.List;

@RestController
@RequestMapping("/api/cart/")
@RequiredArgsConstructor
public class CartController {

    private final CartService cartService;

    @GetMapping("/{Userid}")
    public List<CartResponse> GetProdocts(@PathVariable("Userid") int Userid) throws SQLException {
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

    @DeleteMapping("/delete/{productId}")
    public String DeleteProductById(@PathVariable("productId") int productId)
    {
        return cartService.deleteProduct(productId);
    }
}
