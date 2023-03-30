import React from 'react';
import TodoItem from "./TodoItem";
function TodoList({todos,setTodos,user,setModal}) {
    return (
      <ul>
              {todos.map((todo,key) => <TodoItem key={key} setModal={setModal} setTodos={setTodos} user={user} todo={todo} />)}
      </ul>
    );
}

export default TodoList;