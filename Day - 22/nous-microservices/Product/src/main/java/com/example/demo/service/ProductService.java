package com.example.demo.service;

import com.example.demo.entity.Product;
import com.example.demo.entity.ProductRequest;
import com.example.demo.entity.ProductResponse;
import com.example.demo.repostiory.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.sql.Blob;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ProductService {

    private final ProductRepository productRepository;

    public List<ProductResponse> getAllProducts() throws SQLException {

        List<Product> products = productRepository.findAll();
        List<ProductResponse> productDTOs = new ArrayList<>();
        for (Product prod : products) {
            ProductResponse productDTO = new ProductResponse();
            productDTO.setId(prod.getId());
            productDTO.setBrand(prod.getBrand());
            productDTO.setName(prod.getName());
            productDTO.setPrice(prod.getPrice());
            productDTO.setDesciption(prod.getDesciption());

            // Convert Blob to byte array
            byte[] imageBytes = prod.getImage().getBytes((long) 1, (int) prod.getImage().length());
            productDTO.setImage(imageBytes);
            productDTOs.add(productDTO);
        }

        return productDTOs;
    }

    public String addProduct(ProductRequest product) throws IOException, SQLException {
        byte[] bytes = product.getFile().getBytes();
        Blob bolb = new javax.sql.rowset.serial.SerialBlob(bytes);
        System.out.println(product);
        Product product1 = Product.builder()
                .brand(product.getBrand())
                .name(product.getName())
                .price(product.getPrice())
                .desciption(product.getDesciption())
                .build();
        productRepository.save(product1);
        return "Successful add the product";
    }

    public ProductResponse getProductById(int id) throws SQLException {
        Product product = productRepository.findById(id);
        byte[] imageBytes = product.getImage().getBytes((long) 1, (int) product.getImage().length());
        ProductResponse productResponse = ProductResponse.builder()
                .brand(product.getBrand())
                .desciption(product.getDesciption())
                .id(product.getId())
                .name(product.getName())
                .price(product.getPrice())
                .image(imageBytes)
                .build();
        return productResponse;
    }
}
