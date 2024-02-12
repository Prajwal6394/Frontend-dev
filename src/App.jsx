/* eslint-disable react/prop-types */
import "./App.css";
import Appbar from "./component/Appbar";
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
   <div style={{
    width: "100vw",
    height: "100vh",
    background: "#FDFBF2"
   }}>
    <Appbar />
    <Signup />
   </div>
  );
}
export default App;
