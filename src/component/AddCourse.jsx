import { Card } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

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
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Button
              size="large"
              variant="contained"
              onClick={async () => {
                try {
                  await axios.post(
                    "http://localhost:3000/admin/courses",
                    {
                      username: title,
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
                  navigate("/courses");
                } catch (error) {
                  console.error("Error:", error);
                  // Handle error if needed
                }
              }}
            >
              Add course
            </Button>

            <Button onClick={() => {
              navigate("/courses");
            }} >List courses</Button>
          </div>
        </Card>
      </div>
    </>
  );
}

export default AddCourse;
