import React from 'react';
import {useSelector} from "react-redux";
import {deleteTodoHandle, modal} from "../utils";
function TodoItem({todo}) {
    const {user} = useSelector(state => state.auth)
    const deleteHandle = () => {
        deleteTodoHandle(todo.id)
    }
    console.log(todo,"todo")
    const editHandle = () => {
       modal('edit-todo',todo)}
    return (
      <li>
          <span style={{textDecoration: todo.done ? "line-through" : false}}>
              {todo.title} - {todo.user}
          </span>
          {todo.user === user.id && (
              <>
                  <button onClick={editHandle}>Düzenle</button>
                  <button onClick={deleteHandle}>Sil</button>
              </>

          )}
      </li>
    );
}

export default TodoItem;