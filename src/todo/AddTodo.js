import {useState} from "react";
import {nanoid} from "nanoid";
function AddTodo({setTodos,user}) {
    const [todo,setTodo] = useState('')
    const submitHandle = e => {
        e.preventDefault()
        setTodos(todos => [
            {
                title: todo,
                done: false,
                id: nanoid(),
                user: user.id //todo giriş yapan üyenin id sini ekle
            },...todos
        ])
        setTodo('')
    }
    return (
        <form onSubmit={submitHandle}>
            <input type="text" value={todo} onChange={e => setTodo(e.target.value) }/>
            <button disabled={!todo || !user}  type="submit">Ekle</button>
        </form>
    );
}

export default AddTodo;