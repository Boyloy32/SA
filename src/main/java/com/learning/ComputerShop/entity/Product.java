package com.learning.ComputerShop.entity;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import java.util.Date;

@Entity
@Data
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY
    )
    private long id;
    private String title;
    private String code;
    private Double price;
    private String category;
    private String brand;
    private boolean onSale;
    private Integer discountPercent;
    private Long quantityInStock;
    private Long sold;
    private String thumbnail;
    private String description;
    @CreationTimestamp
    private Date createdAt;
}
