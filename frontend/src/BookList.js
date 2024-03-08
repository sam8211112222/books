import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { List, ListItem, ListItemText, Paper } from '@mui/material';
import BookDetails from "./BookDetails";

const BookList = ({ books }) => {

    return (
        <Paper style={{ margin: 16, padding: 16 }}>
            <List>
                {books.map((book,index) => (
                    <ListItem key={book.id} divider>
                        <ListItemText primary={`${index}. ${book.title}`} />
                        <BookDetails bookId={book.id} />
                    </ListItem>
                ))}
            </List>
        </Paper>
    );
};

export default BookList;