/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import "./App.css";

let counter = 1;
function App() {
  const [todo, setTodo] = useState({
    title: "Hit the gym smart   ",
    description: "Go to the gym from 10-9",
    id: "3",
  });
  console.log('above useEffe')
  useEffect(() => {
    fetch("http://localhost:3000/todos",{
      method: "GET",
    }).then((response) => {
      response.json().then((data) => {
        console.log(data);
      })
    })
  }, [])
  return (
    <div>
      {todo.description} <br/>
      {todo.title}
    </div>
  );
}
export default App;
