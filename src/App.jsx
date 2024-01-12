/* eslint-disable react/prop-types */
import { useState } from 'react'
import './App.css'


function App() {
  const [todoForToday, setChangeTodo] = useState({
    title: "Hit the gym",
    description: "Go to the gym from 7-9",
    id: "1"
  });


// useState hook implementation
  setInterval(() => {
    setChangeTodo({
      title: "Hit the gym smart   " + Math.random(),
      description: "Go to the gym from 10-9",
      id: "3"
    })
  }, 2000);

  // starting with custom hooks
  return (
    <div>
      <RenderWithProp  todoForToday={todoForToday} ></RenderWithProp>
    </div>
  )
}

function RenderWithProp(props){
  return <div>
    {props.todoForToday.title}
  </div>
}
export default App
