package com.example.backend.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Table(name = "cart_item")

public class Cart_item {
    @Id
    @Column(name = "cart_item_id")
    private int cartItemId;

    //不用写这个
//    private int cartId;
    private int num;


    // 许多cart_item会指向同一个book，然后这个JoinColumn是利用的外键联合
    //
    @ManyToOne
    @JoinColumn(name = "book_id")
    private Book book;


}
