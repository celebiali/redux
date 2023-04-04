import React from 'react';
import TodoItem from "./TodoItem";
import {useSelector} from "react-redux";
function TodoList() {

    const {todos} = useSelector(state => state.todo)

    return (
      <ul>
              {todos.map((todo,key) => <TodoItem key={key} todo={todo} />)}
      </ul>
    );
}

export default TodoList;