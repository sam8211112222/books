package org.sam.todos.repository;

import org.sam.todos.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository  extends JpaRepository<Book, Long> {
    // This will allow you to perform basic CRUD operations on the Book entity
}
