import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const ToDoForm = ({ handleClick }) => {
  const [todo, setTodo] = useState('');

  const submitHandler = (todo) => {
    handleClick(todo);
    setTodo('');
  };

  return (
    <div className="todo-form">
      <p>~ Today I need to ~</p>
      <span>
        <TextField
          value={todo}
          onChange={(event) => {
            setTodo(event.target.value);
          }}
          label="To do"
          variant="outlined"
        />
        <Button onClick={() => submitHandler(todo)} variant="contained">
          Submit
        </Button>
      </span>
    </div>
  );
};

export default ToDoForm;
