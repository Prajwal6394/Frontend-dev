/* eslint-disable react/prop-types */
import { useState } from 'react'
import './App.css'


function App() {
  const [todos, setTodos] = useState([{
    id: 1,
    title: 'hit the gym',
    description: 'hit the gym from 8-9'
  },{
    id: 2,
    title: 'hit the duty',
    description: 'hit the duty from 4-9'
  }
]);

  
// useState hook implementation
  // setInterval(() => {
  //   setChangeTodo({
  //     title: "Hit the gym smart   " + Math.random(),
  //     description: "Go to the gym from 10-9",
  //     id: "3"
  //   })
  // }, 2000);

  return (
    <div>
      {todos.map((todo) => {
        return <div>
          <Todo title={todo.title} description={todo.description} ></Todo>
          <br/>
        </div>
      })}
    </div>
  )
}

function Todo(props){
  return <div>
    {props.title}
    {props.description}
  </div>
}
export default App
