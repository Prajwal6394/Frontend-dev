/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { CardActionArea } from "@mui/material";
import {atom, useRecoilValue, useSetRecoilState} from 'recoil';


function CourseDetail() {

  let { courseId } = useParams();
  const setCourses = useSetRecoilState(coursesState)
  useEffect(() => {
    fetch("http://localhost:3000/admin/courses", {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCourses(data.courses);
      })
      .catch((error) => console.error("Error fetching courses:", error));
  }, []);
  console.log('this is teh api value', coursesState);
 
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        margin: "auto",
        width: "70%",
        marginTop: "10rem",
      }}
    >
      <CourseDetailCard courseId={courseId} />
      <UpdateCourseCard courseId={courseId} />
    </div>
  );
}
function UpdateCourseCard(props) {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageLink, setCourseImageLink] = useState("");
  const [courses, setCourses] = useSetRecoilState(coursesState)
  return (
    <Card
      sx={{ maxWidth: 15000 }}
      style={{
        width: 400,
        padding: 20,
      }}
    >
      <Typography style={{marginBottom: "20px", textAlign: "center"}} variant="h5">Update course details</Typography>
      <TextField
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        id="username"
        label="Title"
        variant="outlined"
        fullWidth
      />
      <br />
      <br />
      <TextField
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        label="Description"
        variant="outlined"
        fullWidth
      />
      <br />
      <br />
      <TextField
        onChange={(e) => {
          setCourseImageLink(e.target.value);
        }}
        label="Course image link"
        variant="outlined"
        fullWidth
      />
      <br />
      <br />
      <Button
        size="large"
        variant="contained"
        onClick={() => {
          fetch("http://localhost:3000/admin/courses/" + props.course.id, {
            method: "PUT",
            body: JSON.stringify({
              username: title,
              imageLink: imageLink,
              published: true,
              password: description,
            }),
            headers: {
              "Content-type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
            .then((res) => {
              return res.json();
            })
            .then((data) => {
              console.log("this is the data", data);
              alert("course Updated");
              let updatedCourses = [];
              for(let i = 0; i < courses.length; i++){
                if(courses[i].id == props.courseId){
                  updatedCourses.push({
                    id: props.courseId,
                    username: title,
                    password: description,
                    imageLink: imageLink
                  })
                }else{
                  updatedCourses.push(props.courses[i]);
                }
                setCourses(updatedCourses);
              }
            });
        }}
      >
        Update course
      </Button>
    </Card>
  );
}

function CourseDetailCard(props) {

  const courses = useRecoilValue(coursesState);
  let course = null;
  for (let index = 0; index < courses.length; index++) {
    if (courses[index].id === parseInt(props.courseId)) {
      course = courses[index];
    }
  }
  console.log('this the course', courses);
  return (
    <Card sx={{ maxWidth: 345, marginBottom: "20px" }}>
      <CardActionArea>
        <CardMedia
          sx={{ height: 240 }}
          image={course.imageLink} // Use the imageLink from the course object
          title={course.username} // Use the username as the title
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {course.username}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {course.password}
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* Use the imageLink from the course object */}
    </Card>
  );
}


const coursesState = atom({
  key: 'coursesState',
  default: '', 
});

export default CourseDetail;
