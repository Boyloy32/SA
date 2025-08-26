package com.learning.ComputerShop.service;

import com.learning.ComputerShop.entity.Order;
import com.learning.ComputerShop.entity.Product;
import com.learning.ComputerShop.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class OrderService {
    @Autowired
    OrderRepository orderRepository;

    public Order CreateOrderDetail(Order order) {
        return orderRepository.save(order);
    }

    public Page<Order> getOrderDetail(int page, int size, String sortDirection) {
        Sort sort = Sort.by(Sort.Direction.fromString(sortDirection), "createdAt");
        Pageable pageable = PageRequest.of(page, size, sort);
        return orderRepository.findAll(pageable);
    }


    public Optional<Order> getOrderDetailById(Long id) {
        return orderRepository.findById(id);
    }

    public void deleteOrderDetail(Long id) throws Exception {
        if (!orderRepository.existsById(id)) {
            throw new Exception("Product with ID " + id + " not found");
        }
        orderRepository.deleteById(id);
    }

    public Order UpdateOrderDetail(Long id, Order updatedOrder) throws Exception {
        if (!orderRepository.existsById(id)) {
            throw new Exception("Product with ID " + id + " not found");
        }
        updatedOrder.setId(id);
        return orderRepository.save(updatedOrder);
    }

}
