package com.example.demo.controller;


import com.example.demo.entity.Product;
import com.example.demo.entity.ProductRequest;
import com.example.demo.entity.ProductResponse;
import com.example.demo.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.sql.Blob;
import java.sql.SQLException;
import java.util.List;

@RestController
@RequestMapping("/api/product/")
@RequiredArgsConstructor
public class ProductController {
    private final ProductService productService;

    @GetMapping
    public List<ProductResponse> GetAllProducts() throws SQLException {
        return productService.getAllProducts();
    }

    @GetMapping(value="/test")
    public String test()
    {
        return "Success";
    }

    @PostMapping(value="/add", consumes = { "multipart/form-data" })
    public String addProduct(@RequestParam("file") MultipartFile file, @RequestParam("brand") String brand,
                             @RequestParam("name") String name, @RequestParam("price") float price, @RequestParam("description") String desciption) throws IOException, SQLException {
        ProductRequest product = ProductRequest.builder()
                .file(file)
                .brand(brand)
                .desciption(desciption)
                .name(name)
                .price(price)
                .build();
        return productService.addProduct(product);
    }

    @GetMapping("/{id}")
    public ProductResponse getProduct(@PathVariable("id") int id) throws SQLException {
        return productService.getProductById(id);
    }
}
