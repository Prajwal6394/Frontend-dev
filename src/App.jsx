import { useState } from 'react'
import './App.css'


function App() {
  const [todoForToday, setChangeTodo] = useState({
    title: "Hit the gym",
    description: "Go to the gym from 7-9",
    id: "1"
  });

  setInterval(() => {
    setChangeTodo({
      title: "Hit the gym smart",
      description: "Go to the gym from 10-9",
      id: "3"
    })
  }, 2000);
  return (
    <div>
    {todoForToday.id}<br/>
    {todoForToday.title}<br/>
    {todoForToday.description}
    </div>
  )
}
export default App
