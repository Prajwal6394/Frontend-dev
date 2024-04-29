import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { CardActionArea } from "@mui/material";
import axios from "axios";

function Courses() {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("http://localhost:3000/admin/courses", {
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setCourses(response.data.courses);
        console.log('this is course', response.data);
      } catch (error) {
        console.log("somethign went wront with backend", error);
      }
    };
    fetchCourses();
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
          justifyContent: "center",
        }}
      >
        Courses, you are a creator - Keep up the pace
      </Typography>
      <div
        style={{
          marginTop: 20,
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <Button
          size="large"
          variant="contained"
          onClick={() => {
            navigate("/add-course");
          }}
        >
          Add course
        </Button>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "50px",
          padding: "5%",
          justifyContent: "center",
        }}
      >
        {courses.map((course) => (
          <Card
            onClick={() => {
              navigate("/course/" + course._id);
            }}
            key={course.id}
            sx={{ maxWidth: 345, marginBottom: "20px" }}
          >
            {/* Use the imageLink from the course object */}
            <CardActionArea>
              <CardMedia
                sx={{ height: 140 }}
                image={course.imageLink} // Use the imageLink from the course object
                title="Demo course title" // Use the username as the title
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {course.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {course.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </>
  );
}

export default Courses;
