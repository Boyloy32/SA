package com.learning.ComputerShop.controller;

import com.learning.ComputerShop.entity.Order;
import com.learning.ComputerShop.entity.SaleReport;
import com.learning.ComputerShop.repository.OrderRepository;
import com.learning.ComputerShop.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.time.LocalDate;

@RestController
@RequestMapping("/api/v1")
public class OrderController {
    @Autowired
    private OrderService orderService;
    @Autowired
    private OrderRepository orderRepository;

    @PostMapping("/orders")
    public Order createOrderDetails(@RequestBody Order order) {
        return orderService.CreateOrderDetail(order);
    }

    @GetMapping("/orders")
    public ResponseEntity<Page<Order>> getOrderDetail(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "asc") String sortDirection) {
        Page<Order> orders = orderService.getOrderDetail(page, size, sortDirection);
        return new ResponseEntity<>(orders, HttpStatus.OK);
    }

    @GetMapping("/orders/total")
    public ResponseEntity<SaleReport> getAllTotalSale(@RequestParam(value = "startDate", required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate startDate,
                                                      @RequestParam(value = "endDate", required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate endDate) {

        if (startDate == null) {
            startDate = LocalDate.of(2000, 1, 1);
        }
        if (endDate == null) {
            endDate = LocalDate.now();
        }

        Date startDateConverted = java.sql.Date.valueOf(startDate);
        Date endDateConverted = java.sql.Date.valueOf(endDate);

        int totalQuantitySum = orderRepository.getTotalQuantitySumByDate(startDateConverted, endDateConverted) != null
                ? orderRepository.getTotalQuantitySumByDate(startDateConverted, endDateConverted)
                : 0;

        int totalPriceSum = orderRepository.getTotalPriceByDate(startDateConverted, endDateConverted) != null
                ? orderRepository.getTotalPriceByDate(startDateConverted, endDateConverted)
                : 0;

        SaleReport saleReport = new SaleReport(totalQuantitySum, totalPriceSum);
        return new ResponseEntity<>(saleReport, HttpStatus.OK);
    }

}
