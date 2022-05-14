package com.example.backend.controllers;


import com.example.backend.entity.Cart;
import com.example.backend.entity.Order;
import com.example.backend.service.UserService;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.logging.Logger;

@RestController
public class OrderController {
    @Autowired
    private UserService userService;


    @RequestMapping("/getOrders")
    public List<Order> getCarts(@RequestParam("userId") Integer userId){
        return userService.getOrderById(userId);
    }

}
