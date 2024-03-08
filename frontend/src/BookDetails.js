import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Box, Button, Paper, Typography} from '@mui/material';

const BookDetails = ({ bookId }) => {
    const [book, setBook] = useState(null);
    const [showDetails, setShowDetails] = useState(false);

    const fetchBookDetails = () => {
        if (!showDetails) {
            axios.get(`http://localhost:8080/books/${bookId}`)
                .then(response => {
                    setBook(response.data);
                })
                .catch(error => {
                    console.error('There was an error fetching the book details', error);
                });
            setShowDetails(true);
        }else {
            setShowDetails(false);
        }
    };

    return (
        <Box>
            <Button onClick={fetchBookDetails} variant="outlined" color="primary">
                {showDetails ? '隱藏詳情' : '顯示詳情'}
            </Button>
            {showDetails && book && (
                <Paper style={{ margin: 16, padding: 16 }}>
                    <Typography variant="h6">{book.title}</Typography>
                    <Typography variant="subtitle1">{`作者: ${book.author}`}</Typography>
                    <Typography variant="body1">{`ISBN: ${book.isbn}`}</Typography>
                </Paper>
            )}
            {showDetails && !book && <Typography variant="subtitle1">正在加載書籍資訊...</Typography>}
        </Box>
    );
};

export default BookDetails