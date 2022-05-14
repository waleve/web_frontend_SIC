package com.example.backend.serviceimpl;

import com.example.backend.dao.UserDao;
import com.example.backend.entity.Cart;
import com.example.backend.entity.Order;
import com.example.backend.entity.UserAuth;
import com.example.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class UserServiceImpl implements UserService {


    @Autowired
    private UserDao userDao;

    @Override
    public UserAuth checkUser(String username, String password) {
        return userDao.checkUser(username,password);
    }

    // 这个还需要重写一下
    @Override
    public List<Cart> getCartsById(Integer userId) {
        return userDao.getCarts(userId);
    }

    @Override
    public List<Order> getOrderById(Integer userId){
        return userDao.getOrders(userId);
    }


}
