import React, {useState,useRef, useEffect} from 'react'
import './App.css';
import TodoList from './components/TodoList'
import uuidv4 from 'uuid/dist/v4'

const LOCAL_STORAGE_KEY = 'TodoList.Todos'
function App() {

  const [todos,setTodos] = useState([]);
  const inputTodo = useRef();

  useEffect(()=>{
    const storedValues = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(storedValues) setTodos(storedValues);
  },[])

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(todos))
  },[todos])

  function handleTodos(){
    const inputName = inputTodo.current.value;
    if(inputName.length){
      setTodos(todos =>{
        return [...todos,{id:uuidv4(),name:inputName,checked:false}];
      })
      inputTodo.current.value = "";
    }
  }

  function ToggleInput(id){
    const newTodos = [...todos];
    const todo = newTodos.find((todos) => (todos.id === id));
    todo.checked = !todo.checked;
    setTodos(newTodos);
  }

  function clearCompletedTodos(){
    const newTodos = [...todos];
    const newTodoList = newTodos.filter((todo) => (todo.checked === false))
    setTodos(newTodoList);
  }

  return (
    <div className="container">
      <h1>TODO APP</h1>
      <input ref = {inputTodo} className="user-input"/>
      <div className="buttons">
        <button onClick={handleTodos}>Add Item</button>
        <button onClick={clearCompletedTodos}>Clear Completed</button>
      </div>
      <p>{todos.filter(todo => !todo.checked).length} Todos Left</p>
      <TodoList todos = {todos} toggleInput = {ToggleInput}/>
    </div>

  );
}

export default App;
