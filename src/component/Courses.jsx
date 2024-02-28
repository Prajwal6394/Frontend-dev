import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import courseImage from '../assets/courses.png'
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
         <Typography
          variant="h5"
          style={{
            marginTop: 20,
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            justifyContent: "center"
          }}
        >
          Courses, you are a creator - Keep up the pace
        </Typography>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '50px', padding: "5%", justifyContent: "center", }}>
      {courses.map((course) => (
        <Card key={course.id} sx={{ maxWidth: 345, marginBottom: "20px" }}>
          {/* Use the imageLink from the course object */}
          <CardMedia
            sx={{ height: 140 }}
            image={courseImage} // Use the imageLink from the course object
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
    </div>
    </>

  );
}

export default Courses;
