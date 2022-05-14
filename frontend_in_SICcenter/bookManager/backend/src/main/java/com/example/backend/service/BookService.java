package com.example.backend.service;


import com.example.backend.entity.Book;

import java.util.List;

public interface BookService {

    Book findBookById(Integer id);

    //一些实现对book操作的方法
    List<Book> getBooks();        //爆红是缺少Book对象，
}


