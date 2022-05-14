package com.example.backend.dao;

import com.example.backend.entity.Cart;
import com.example.backend.entity.Order;
import com.example.backend.entity.UserAuth;

import java.util.List;

public interface UserDao {

    UserAuth checkUser(String username, String password);

    List<Order> getOrders(Integer userID);

    List<Cart> getCarts(Integer userID);

}
