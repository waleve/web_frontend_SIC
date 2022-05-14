package com.example.backend.repository;

import com.example.backend.entity.Order;
import org.aspectj.weaver.ast.Or;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order,Integer> {

    @Query(value = "from Order where user_id =?1")
    List<Order> getOrders(@Param("user_id") Integer userId);
}
