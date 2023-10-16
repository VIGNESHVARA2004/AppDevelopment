package com.example.demo.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Blob;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "_cart")
public class Cart {

    @Id
    @GeneratedValue
    private int id;
    private int userid;
    private int productid;
    private int count;
    private String brand;
    private String name;
    private float price;
    private byte[] image;

    @Column(columnDefinition = "text")
    private String desciption;
}
