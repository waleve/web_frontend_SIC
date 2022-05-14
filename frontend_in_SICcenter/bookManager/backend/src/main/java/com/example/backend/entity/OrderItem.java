package com.example.backend.entity;


import com.example.backend.dao.BookDao;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "order_item")
public class OrderItem {

    @Id
    @Column(name = "order_item_id")
    private int order_item_id;

    private int num;
    private int order_id;
    private int id;

    @ManyToOne
    @JoinColumn(name = "book_id")
    private Book book;

}
