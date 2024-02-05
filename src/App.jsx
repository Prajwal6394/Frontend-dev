/* eslint-disable react/prop-types */
import { useState } from "react";
import "./App.css";

let counter = 1;
function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "hit the gym",
      description: "hit the gym from 8-9",
    },
    {
      id: 2,
      title: "hit the duty",
      description: "hit the duty from 4-9",
    },
  ]);

  const [todo, setTodo] = useState({
    title: "Hit the gym smart   ",
    description: "Go to the gym from 10-9",
    id: "3",
  });

  React.useEffect(() => {})
  
  

  return (
    <div>
      {todos.map((todo) => {
        return (
          <div>
            <Todo title={todo.title} description={todo.description}></Todo>
            <br />
          </div>
        );
      })}

      {todo.description}
      {todo.title}
    </div>
  );
}
// todo component for better code readability
function Todo(props) {
  return (
    <div>
      {props.title}
      {props.description}
     
    </div>
  );
}
export default App;
