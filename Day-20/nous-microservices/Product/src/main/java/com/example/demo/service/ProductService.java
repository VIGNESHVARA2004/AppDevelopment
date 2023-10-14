package com.example.demo.service;

import com.example.demo.entity.Product;
import com.example.demo.entity.ProductRequest;
import com.example.demo.entity.ProductResponse;
import com.example.demo.repostiory.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.sql.Blob;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

@Service

@RequiredArgsConstructor
public class ProductService {

    private final ProductRepository productRepository;

    public List<ProductResponse> getAllProducts() throws SQLException {

        List<Product> products = productRepository.findAll();
        List<ProductResponse> productDTOs = new ArrayList<>();
        for (Product product : products) {
            ProductResponse productDTO = new ProductResponse();
            productDTO.setId(product.getId());
            productDTO.setBrand(product.getBrand());
            productDTO.setName(product.getName());
            productDTO.setPrice(product.getPrice());
            productDTO.setDesciption(product.getDesciption());

            // Convert Blob to byte array
            byte[] imageBytes = product.getImage().getBytes((long) 1, (int) product.getImage().length());
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
                .image(bolb).build();
        productRepository.save(product1);
        return "Successful add the product";
    }
}
