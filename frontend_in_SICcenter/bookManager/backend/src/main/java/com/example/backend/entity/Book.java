package com.example.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


//注解相当重要！！！！

@Data
@Entity
@Table(name = "book")
@JsonIgnoreProperties(value = {"handler","hibernateLazyInitializer","Handler"})
public class Book {

    @Id
    @Column(name = "id")//这个地方
    private int bookId;

    private String isbn;
    private String name;
    private String type;
    private String author;
    private Double price;
    private String description;
    private Integer inventory;
    private String image;

//    Awa

//    public Book(String isbn,String name,String type,String author,Double price,
//        String description,Integer inventory,String image
//    )
//    {
//        this.isbn = isbn;
//        this.name =name;
//        this.type = type;
//        this.author = author;
//        this.price = price;
//        this.description = description;
//        this.inventory = inventory;
//        this.image = image;
//    }

}
