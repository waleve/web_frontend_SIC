package com.example.backend.serviceimpl;

import com.example.backend.dao.BookDao;
import com.example.backend.entity.Book;
import com.example.backend.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

//在service的方法上需要加注解
//继承上面的对象，就会又小箭头
@Service
public class BookServiceImpl implements BookService {

    @Autowired
    private BookDao bookDao;

    @Override
    public Book findBookById(Integer id){
        return bookDao.findOne(id);
    }

    @Override
    public List<Book> getBooks(){
        return  bookDao.getBooks();
    }

}
