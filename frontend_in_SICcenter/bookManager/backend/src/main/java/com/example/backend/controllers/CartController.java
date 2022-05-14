package com.example.backend.controllers;

import com.example.backend.entity.Cart;
import com.example.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
public class CartController {


    @Autowired
    private UserService userService;

    @RequestMapping("/getCarts")
    public List<Cart> getCarts(@RequestParam("userId") Integer userId){
        return userService.getCartsById(userId);
    }

}
