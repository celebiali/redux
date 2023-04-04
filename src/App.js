import {useState} from "react";
import Header from "./todo/Header";
import AddTodo from "./todo/AddTodo";
import TodoList from "./todo/TodoList";
import Modal from "./todo/Modal";
import {useSelector} from "react-redux";
import './utils'

function App() {

  const {open: isModalOpen} = useSelector(state => state.modal)
  const [language,setLanguage] = useState('tr')
  const [dark,setDark] = useState(true)


  return (
      <main>
          {isModalOpen && <Modal/>}
        <Header />
          <AddTodo   />
          <TodoList  />
      </main>
      );
}

export default App;
