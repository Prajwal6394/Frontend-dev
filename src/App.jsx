import "./App.css";
import Appbar from "./component/Appbar";
import Signin from "./component/Signin";
import Signup from "./component/Signup";
import AddCourse from "./component/AddCourse";
import Courses from "./component/Courses";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CourseDetail from "./component/CourseDetai";
import {
  RecoilRoot,
} from "recoil";
function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "white",
      }}
    >
      <RecoilRoot>
        <Router>
          <Appbar />
          <Routes>
            <Route path="/" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/add-course" element={<AddCourse />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/course/:courseId" element={<CourseDetail />} />
          </Routes>
        </Router>
      </RecoilRoot>
    </div>
  );
}
export default App;
