package com.learning.ComputerShop.entity;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import java.sql.Date;

@Data
@Entity
@Table(name = "order_detail")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY
    )
    private Long id;
    private String customerName;
    private String customerNumber;
    private String customerAddress;
    private int totalQuantity;
    private Long totalPrice;
    @Column(length = 1000)
    private String productName;
    private String status;
    @CreationTimestamp
    private Date createdAt;
}
