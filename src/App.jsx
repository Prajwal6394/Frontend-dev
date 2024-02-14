import "./App.css";
import Appbar from "./component/Appbar";
import Signin from "./component/Signin";
import Signup from "./component/Signup";
import AddCourse from "./component/AddCourse";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "#FDFBF2",
      }}
    >
      <Appbar/>
      <Router>
        <Routes>

          <Route path="/addcourse" element={<AddCourse />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/singup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
