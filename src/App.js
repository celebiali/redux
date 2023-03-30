import {useState} from "react";
import Header from "./todo/Header";
import AddTodo from "./todo/AddTodo";
import TodoList from "./todo/TodoList";
function App() {

  const [todos,setTodos] = useState([])
  const [user,setUser] = useState(false)
  const [language,setLanguage] = useState('tr')
  const [dark,setDark] = useState(true)

  return (
      <main>
        <Header user={user} setUser={setUser}/>
          <AddTodo setTodos={setTodos} user={user} />
          <TodoList   todos={todos}/>
      </main>
      );
}

export default App;
