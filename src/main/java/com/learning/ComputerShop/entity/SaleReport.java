package com.learning.ComputerShop.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SaleReport {
    private int totalSale;
    private int totalPrice;
}
