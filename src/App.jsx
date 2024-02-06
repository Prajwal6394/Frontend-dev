/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import "./App.css";

function useTodo(){
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/todos",{
      method: "GET",
    }).then((response) => {
      response.json().then((data) => {
        console.log(data);
        setTodos(data);
      })
    })
  }, [])
  return todos; 
}
function App() {
  console.log('above useEffe')
  const todos = useTodo();
  return (
    <div>
      {todos.map((todo) => {
        return <div className="container">
          {todo.title}
          {todo.description}
          <button>Delete</button>
          <br/>
        </div>
      })}
    </div>
  );
}
export default App;
