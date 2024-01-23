/* eslint-disable react/prop-types */
import { useState } from 'react'
import './App.css'


function App() {
  const [todoForToday, setChangeTodo] = useState({
    title: "Hit the gym",
    description: "Go to the gym from 7-9",
    id: "1"
  });

  let newArray = [
    {
      name: "Prajwal",
      age: 23,
    },
    {
      name: "Rahuk",
      age: 15,
    },
    {
      name: "Sam",
      age: 25,
    },
    {
      name: "Ronnie",
      age: 10,
    },
  ];
  
  // let updatetArray = [];
  
  // for (let i = 0; i < newArray.length; i++) {
  //   if (newArray[i].age > 18) {
  //     updatetArray.push({
  //       name: newArray[i].name,
  //       age: newArray[i].age,
  //       isAllowed: true,
  //     });
  //   } else {
  //     updatetArray.push({
  //       name: newArray[i].name,
  //       age: newArray[i].age,
  //       isAllowed: false,
  //     });
  //   }
  // }
  
  updatetArray = newArray.map((value) => {
    if (value.age > 18) {
      return {
        name: value.name,
        age: value.age,
        isAllowed: false,
      };
    } else {
      return {
        name: value.name,
        age: value.age,
        isAllowed: true,
      };
    }
  });
  
  console.log(updatetArray);
  
// useState hook implementation
  setInterval(() => {
    setChangeTodo({
      title: "Hit the gym smart   " + Math.random(),
      description: "Go to the gym from 10-9",
      id: "3"
    })
  }, 2000);

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
