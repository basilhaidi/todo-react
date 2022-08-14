import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';

const ToDoList = ({ todos, handleCheckbox }) => {
  return (
    <div className="todo-list">
      <List>
        {todos.map((todo, id) => {
          return (
            <ListItem key={id} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Checkbox
                    checked={todo.complete}
                    onChange={() => handleCheckbox(todo.id)}
                    disableRipple
                  />
                </ListItemIcon>
                <ListItemIcon>
                  <ListItemText primary={todo.task} className={todo.complete && 'complete'} />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

export default ToDoList;
