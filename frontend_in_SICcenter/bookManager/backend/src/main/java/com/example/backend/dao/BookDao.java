package com.example.backend.dao;


import com.example.backend.entity.Book;

import java.util.List;


public interface BookDao {

    Book findOne(Integer id);

    List<Book> getBooks();  //操作reposity的接口，reposity里有SQL直接操作entity（数据库）
}
