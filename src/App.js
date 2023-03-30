import {useState} from "react";
import Header from "./todo/Header";
import AddTodo from "./todo/AddTodo";
import TodoList from "./todo/TodoList";
import Modal from "./todo/Modal";
function App() {

  const [todos,setTodos] = useState([])
  const [user,setUser] = useState(false)
  const [language,setLanguage] = useState('tr')
  const [dark,setDark] = useState(true)
  const [modal,setModal] = useState(false)

   const close = () => setModal(false)

  return (
      <main>
          {modal && <Modal close={close} name={modal.name} data={modal.data}/>}
        <Header user={user} setUser={setUser}/>
          <AddTodo setTodos={setTodos} user={user} />
          <TodoList setModal={setModal}   todos={todos} setTodos={setTodos} user={user}/>
      </main>
      );
}

export default App;
