package com.example.backend.entity;


import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Table(name = "order")
public class Order {

    @Id
    @Column(name = "order_id")
    private int order_id;

    private int user_id;
    private int total_price;

    @OneToMany
    @JoinColumn(name = "order_id")
    private List<OrderItem> items;

}
