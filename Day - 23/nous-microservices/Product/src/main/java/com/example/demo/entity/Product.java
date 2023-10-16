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
@Table(name = "_product")
public class Product {
    @Id
    @GeneratedValue
    private int id;
    private String brand;
    private String name;
    private float price;

    @Lob
    private Blob image;

    @Column(columnDefinition = "text")
    private String desciption;
}
