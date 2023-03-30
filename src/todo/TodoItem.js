import React from 'react';

function TodoItem({todo}) {

    const deleteHandle = () => {
        //todo
    }
    const editHandle = () => {
        //todo
    }

    return (
      <li>
          <span style={{textDecoration: todo.done ? "line-through" : false}}>
              {todo.title} - {todo.user}
          </span>
          <button onClick={editHandle}>Düzenle</button>
          <button onClick={deleteHandle}>Sil</button>
      </li>
    );
}

export default TodoItem;