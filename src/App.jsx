/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import "./App.css";

let counter = 1;
function App() {
  const [todos, setTodos] = useState([]);
  console.log('above useEffe')
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
