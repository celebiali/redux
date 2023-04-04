import {useState} from "react";
import {editTodo} from "../stores/todo";
import {useDispatch} from "react-redux";

function EditTodo({data, close}){

    const dispatch = useDispatch()
    const [todo,setTodo] = useState(data.title)
    const [done,setDone] = useState(data.done)
    const submitHandle = e => {
        e.preventDefault()
        dispatch(editTodo({
            id:data.id,
            todo:data.todo,
            done
        }))
        close()
    }
    return(
        <>
            <form onSubmit={submitHandle}>
                <input type="text" value={todo} onChange={e => setTodo(e.target.value)}/> <br/>
                <label>
                    <input type="checkbox" checked={done} onChange={e => setDone(e.target.checked)}/>
                    Tamamlandı olarak işaretle
                </label>
                <button type="submit">Kaydet</button>
            </form>
            <button onClick={close}>Kapat</button>
        </>
    )
}

export default EditTodo