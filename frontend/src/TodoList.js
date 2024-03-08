import React, { useState } from 'react';
import { Container, Paper, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, TextField, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    const addTodo = () => {
        if (newTodo) {
            setTodos([...todos, newTodo]);
            setNewTodo('');
        }
    };

    const removeTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    return (
        <Container maxWidth="sm">
            <Paper style={{ marginTop: 16, padding: 16 }}>
                <List>
                    {todos.map((todo, index) => (
                        <ListItem key={index} divider={index !== todos.length - 1}>
                            <ListItemText primary={todo} />
                            <ListItemSecondaryAction>
                                <IconButton edge="end" aria-label="delete" onClick={() => removeTodo(index)}>
                                    <DeleteIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    ))}
                </List>
                <TextField
                    label="Add a new task"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    margin="normal"
                    fullWidth
                />
                <Button variant="contained" color="primary" onClick={addTodo}>
                    Add
                </Button>
            </Paper>
        </Container>
    );
};

export default TodoList;
