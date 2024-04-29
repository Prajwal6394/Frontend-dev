/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState } from 'recoil'; // Import useRecoilState
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { CardActionArea } from "@mui/material";
import {coursesState} from '../atom/coursesAtom';
import axios from 'axios';

function CourseDetail() {
  
  let { courseId } = useParams();
  const [courses, setCourses] = useRecoilState(coursesState); // Use Recoil state
  const [selectedCourse, setSelectedCourse] = useState(null); // State to hold the selected course
  useEffect(() => {

    const fetchCourse = async () => {
      try {
        let response = await axios.get("http://localhost:3000/admin/courses", {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    setCourses(response.data.courses)
      } catch (error) {
        console.log('something occured');
      } 
    }
    fetchCourse();
  }, [setCourses]);

  useEffect(() => {
    if (courses.length > 0) {
      const course = courses.find(c => c._id === courseId);
      setSelectedCourse(course);
    }
  }, [courseId, courses]);

  if (!selectedCourse) {
    return <div>Loading.....</div>;
  }
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
      <CourseDetailCard course={selectedCourse} />
      <UpdateCourseCard course={selectedCourse} />
    </div>
  );
}

function UpdateCourseCard(props) {

  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageLink, setCourseImageLink] = useState("");
  const [courses, setCourses] = useRecoilState(coursesState); // Use Recoil state

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
      <div style={{
        "display": "flex",
        "justifyContent": "space-between"
      }}>
  <Button
        size="large"
        variant="contained"
        onClick={async () => {
          try {
            const response = await axios.put(
              `http://localhost:3000/admin/courses/${props.course._id}`,
              {
                title,
                imageLink,
                published: true,
                description,
              },
              {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
              }
            );
        
            alert("Course Updated");
            const updatedCourses = courses.map((c) => {
              if (c.id === props.course.id) {
                return {
                  ...c,
                  username: title,
                  description,
                  imageLink,
                };
              }
              return c;
            });
            setCourses(updatedCourses);
          } catch (error) {
            console.error("Error:", error);
            // Handle error if needed
          }
        }}
      >
        Update course
      </Button>

      <Button onClick={() => {
        navigate("/courses");
      }}>Course List</Button>
      </div>
    
    </Card>
  );
}

function CourseDetailCard(prop) {
  return (
    <Card sx={{ maxWidth: 345, marginBottom: "20px" }}>
      <CardActionArea>
        <CardMedia
          sx={{ height: 240 }}
          image={prop.course.imageLink} // Use the imageLink from the course object
          title={prop.course.username} // Use the username as the title
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {prop.course.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {prop.course.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </CardActionArea>
      {/* Use the imageLink from the course object */}
    </Card>
  );
}

export default CourseDetail;
