/* eslint-disable react/prop-types */
import "./App.css";
import Signup from "./component/Signup";
// function useTodo() {
//   const [todos, setTodos] = useState([]);
//   function fectTodo() {
//     fetch("http://localhost:3000/todos", {
//       method: "GET",
//     }).then((response) => {
//       response.json().then((data) => {
//         console.log(data);
//         setTodos(data);
//       });
//     });
//   }
//   useEffect(() => {
//     fectTodo();
//   }, []);

//   return todos;
// }
function App() {
  return (
   <>
    <Signup />
   </>
  );
}
export default App;
