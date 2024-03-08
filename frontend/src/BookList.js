import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { List, ListItem, ListItemText, Paper } from '@mui/material';
import BookDetails from "./BookDetails";

const BookList = ({ books }) => {

    return (
        <Paper style={{ margin: 16, padding: 16 }}>
            <List>
                {books.map(book => (
                    <ListItem key={book.id} divider>
                        <ListItemText primary={book.title} secondary={`作者: ${book.author}`} />
                        <BookDetails bookId={book.id} />
                    </ListItem>
                ))}
            </List>
        </Paper>
    );
};

export default BookList;