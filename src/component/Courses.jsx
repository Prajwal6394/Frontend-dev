import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function Courses() {
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

  return (
    <>
      {courses.map((course) => (
        <Card key={course.id} sx={{ maxWidth: 345, marginBottom: "20px" }}>
          {/* Use the imageLink from the course object */}
          <CardMedia
            sx={{ height: 140 }}
            image="CourseImage" // Use the imageLink from the course object
            title="Demo course title" // Use the username as the title
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {course.username}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {course.password}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      ))}
    </>
  );
}

export default Courses;
