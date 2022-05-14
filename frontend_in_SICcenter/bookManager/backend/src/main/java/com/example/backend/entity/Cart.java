package com.example.backend.entity;


import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Table(name = "cart")
public class Cart {


    @Id
    @Column(name = "cart_id")
    private int cartId;

    private int user_id;
    private int total_price;

    @OneToMany
    @JoinColumn(name = "cart_id")
    private List<Cart_item> items;






}
