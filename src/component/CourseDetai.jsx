import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";



function CourseDetail() {
   
    let {courseId} = useParams();
  const [courses, setCourses] = useState([]);
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

  let course = null;
  for (let index = 0; index < courses.length; index++) {
    if(courses[index].id === parseInt(courseId)){
        console.log("this is hit");
        course = courses[index];
    }
    
  }
  if(!course){
    return <div>
        Loading.....
    </div>
  }
  return (
    <div
      style={{
      }}
    >
      <h4>Course id: {courseId}</h4>
      <CourseDetailCard course={course} />
      <UpdateCourseCard course={course} />
      

    </div>
  );
}
function UpdateCourseCard(props){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [imageLink, setCourseImageLink] = useState("");
    return   <Card
    style={{
      width: 400,
      padding: 20,
    }}
  >
    <Typography>Update course details</Typography>
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
            alert('course Updated');
          });
      }}
    >
      Update course
    </Button>
  </Card>
}
function CourseDetailCard(prop){
    return <Card sx={{ maxWidth: 345, marginBottom: "20px" }}>
    {/* Use the imageLink from the course object */}
    <CardMedia
      sx={{ height: 240 }}
      image={prop.course.imageLink} // Use the imageLink from the course object
      title={prop.course.username} // Use the username as the title
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {prop.course.username}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {prop.course.password}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Share</Button>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
}

export default CourseDetail;
