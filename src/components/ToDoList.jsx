import React from 'react';

const ToDoList = ({ todos }) => {
  return (
    <div className="todo-list">
      <ul>
        {todos.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default ToDoList;
