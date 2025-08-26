package com.learning.ComputerShop.repository;

import com.learning.ComputerShop.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.sql.Date;

public interface OrderRepository extends JpaRepository<Order,Long> {
    @Query("SELECT SUM(o.totalQuantity) FROM Order o")
    int getTotalQuantitySum();
    @Query("SELECT SUM(o.totalPrice) FROM Order o")
    int getTotalPrice();
    @Query("SELECT COALESCE(SUM(o.totalQuantity), 0) FROM Order o WHERE o.createdAt >= :startDate AND o.createdAt <= :endDate")
    Integer getTotalQuantitySumByDate(@Param("startDate") Date startDate, @Param("endDate") Date endDate);

    @Query("SELECT COALESCE(SUM(o.totalPrice), 0) FROM Order o WHERE o.createdAt >= :startDate AND o.createdAt <= :endDate")
    Integer getTotalPriceByDate(@Param("startDate") Date startDate, @Param("endDate") Date endDate);

}
