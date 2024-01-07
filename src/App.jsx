import './App.css'

let todoForToday = {
  title: "Hit the gym",
  description: "Go to the gym from 7-9",
  id: "1"
}

function App() {
  return (
    <div>
      <h1>Hii there </h1>
      <HelloWorldComponent1></HelloWorldComponent1>
    </div>
  )
}
function HelloWorldComponent1(){
  return <div>
    {todoForToday.id}
    {todoForToday.title}
    {todoForToday.description}
    <HelloWorldComponent2></HelloWorldComponent2>
  </div>
}

function HelloWorldComponent2(){
  return <div>
    Hello world 2
  </div>
}
export default App
