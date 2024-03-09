import { Card } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddCourse() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageLink, setCourseImageLink] = useState("");
  const navigate = useNavigate();
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: 120,
        }}
      >
        {/* <h5>Add course, getting started your teaching journey</h5> */}
        <Card
          style={{
            width: 400,
            padding: 20,
          }}
        >
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
              fetch("http://localhost:3000/admin/courses", {
                method: "POST",
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
                  navigate('/courses')
                });
            }}
          >
            Add course
          </Button>
        </Card>
      </div>
    </>
  );
}

export default AddCourse;
