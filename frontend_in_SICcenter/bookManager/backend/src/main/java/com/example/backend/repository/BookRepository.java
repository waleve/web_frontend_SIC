package com.example.backend.repository;

import com.example.backend.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;
import java.util.List;


//注解相当重要
//@Transactional
public interface BookRepository extends JpaRepository<Book,Integer> {
//    估计是它找到了，没能识别BOOK的data，所以返回了29个{}，没有内容

    @Query("select b from Book b")
    List<Book> getBooks();              //直接操作数据库



//刚刚那些就是@query自己能实现的一些对数据的操作


}
