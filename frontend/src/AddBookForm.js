import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Paper, Box } from '@mui/material';

const AddBookForm = ({ addBookToList }) => {
    const [book, setBook] = useState({
        title: '',
        author: '',
        isbn: ''
    });

    const handleChange = (e) => {
        setBook({
            ...book,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/books', book)
            .then(response => {
                // 在列表中添加新書籍
                addBookToList(response.data);
                // 清除表單
                setBook({
                    title: '',
                    author: '',
                    isbn: ''
                });
            })
            .catch(error => {
                console.error('There was an error adding the book', error);
            });
    };


    return (
        <Paper style={{ margin: 16, padding: 16 }}>
            <form onSubmit={handleSubmit}>
                <TextField
                    name="title"
                    label="書名"
                    value={book.title}
                    onChange={handleChange}
                    fullWidth
                    style={{ marginBottom: 8 }}
                />
                <TextField
                    name="author"
                    label="作者"
                    value={book.author}
                    onChange={handleChange}
                    fullWidth
                    style={{ marginBottom: 8 }}
                />
                <TextField
                    name="isbn"
                    label="ISBN"
                    value={book.isbn}
                    onChange={handleChange}
                    fullWidth
                    style={{ marginBottom: 8 }}
                />
                <Box display="flex" justifyContent="flex-end">
                    <Button variant="contained" color="primary" type="submit">
                        添加書籍
                    </Button>
                </Box>
            </form>
        </Paper>
    );
};

export default AddBookForm;