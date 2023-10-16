package com.example.demo.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Blob;


@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CartRequest {

    private int userid;
    private int productid;

    private int count;
    private String brand;
    private String name;
    private float price;
    private byte[] image;
    private String desciption;
}
