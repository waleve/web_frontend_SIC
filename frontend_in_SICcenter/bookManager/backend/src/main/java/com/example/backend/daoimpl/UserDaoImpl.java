package com.example.backend.daoimpl;


import com.example.backend.dao.UserDao;
import com.example.backend.entity.Cart;
import com.example.backend.entity.Order;
import com.example.backend.entity.UserAuth;
import com.example.backend.repository.CartRepository;
import com.example.backend.repository.OrderRepository;
import com.example.backend.repository.UserAuthRepository;
import com.example.backend.repository.UserRepository;
import org.aspectj.weaver.ast.Or;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class UserDaoImpl implements UserDao {

    @Autowired
    UserAuthRepository userAuthRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    OrderRepository orderRepository;

    @Autowired
    CartRepository cartRepository;

    @Override
    public UserAuth checkUser(String username, String password){

        return userAuthRepository.checkUser(username,password);
    }

    @Override
    public List<Order> getOrders(Integer userId){
        return orderRepository.getOrders(userId);
    }

    @Override
    public List<Cart> getCarts(Integer userId){
        return cartRepository.getCarts(userId);
    }


}
