
import {Container, CssBaseline} from "@mui/material";
import BookList from "./BookList";
import AddBookForm from "./AddBookForm";
import {useEffect, useState} from "react";
import axios from "axios";

function App() {


    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/books')
            .then(response => {
                setBooks(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the books', error);
            });
    }, [])

    const addBookToList = (book) => {
        setBooks([...books, book]);
    };


    return (
        <>
            <CssBaseline />
            <Container maxWidth="sm">
                <h1>圖書列表</h1>
                <AddBookForm addBookToList={addBookToList}/>
                <BookList books={books}/>
            </Container>
        </>
    );
}

export default App;
