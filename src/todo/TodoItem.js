import React from 'react';

function TodoItem({setTodos,todo,user,setModal}) {

    const deleteHandle = () => {
        setTodos(todos => todos.filter(t => t.id !== todo.id))
    }
    const editHandle = () => {
        setModal({
            name: 'edit-todo',
            data:todo
        })
    }

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