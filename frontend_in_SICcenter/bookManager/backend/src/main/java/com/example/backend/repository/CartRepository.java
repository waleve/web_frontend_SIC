package com.example.backend.repository;

import com.example.backend.entity.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CartRepository extends JpaRepository<Cart,Integer> {

//    @Query(value = "from Cart where user_id =: userId")
    @Query(value = "from Cart where user_id =?1")
    List<Cart> getCarts(@Param("user_id") Integer userId);


}


// 前台发一个cart的信息
// map 解析 -> new Cart(para1 ...) ->  CartRepo.save