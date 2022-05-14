package com.example.backend.daoimpl;

import com.example.backend.dao.BookDao;
import com.example.backend.entity.Book;
import com.example.backend.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class BookDaoImpl implements BookDao {
//    具体的实现都要继承接口类
    @Autowired
    private BookRepository bookRepository;  //操作reposity的接口，reposity里有SQL直接操作entity（数据库）

    @Override
    public Book findOne(Integer id){
        return bookRepository.getOne(id);
    }

    @Override
    public List<Book> getBooks(){return bookRepository.getBooks();};
}
