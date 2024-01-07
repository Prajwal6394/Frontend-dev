import { useState } from 'react'
import './App.css'
 
// let todos = [
//   {
//   title: "go to gym",
//   description: "go to gym at 8:00 pm",
//   id: "1241351bfjbkj351k32"
//   },{
//     title: "go to dinner",
//     description: "go to dinner at 10:00 pm",
//     id: "1241351bfjbkj35vsdt232"
//   },{
//     title: "wake up",
//     description: "wake up at 9:00 am in the morning",
//     id: "1241351bfjbkj351v12342"
//   }    
// ];

function App() {
  const [todo, setTodo] = useState({
    title: "go to dinner",
    description: "go to dinner at 10:00 pm",
    id: "1241351bfjbkj35vsdt232"
  })

  setInterval(() => {
    setTodo({
      title: "Hello, I am changesd",
      description: "I am descp",
      id: "Hello, Id would be  - `99913`24"
    })
  }, 2000);
  return (
    <div>
      <h1>Hii there </h1>
      <h5>{todo.title}</h5>
      <h5>{todo.description}</h5>
      <h5>{todo.id}</h5>
    </div>
  )
}

export default App
