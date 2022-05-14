package com.example.backend.service;

import com.example.backend.entity.Cart;
import com.example.backend.entity.Order;
import com.example.backend.entity.UserAuth;

import java.util.List;

public interface UserService {

    UserAuth checkUser(String username, String password);

    List<Cart> getCartsById(Integer userId);

    List<Order> getOrderById(Integer userId);

}
