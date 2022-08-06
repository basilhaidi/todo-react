import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';

const ToDoList = ({ todos }) => {
  return (
    <div className="todo-list">
      <List>
        {todos.map((item) => {
          return (
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Checkbox />
                </ListItemIcon>
                <ListItemIcon>
                  <ListItemText>{item}</ListItemText>;
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
