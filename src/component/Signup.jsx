import { Card, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h6"
          style={{
            paddingTop: 150,
            marginBottom: 15,
          }}
        >
          Sign up and explore this course selling app
        </Typography>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Card
          style={{
            width: 400,
            padding: 20,
          }}
        >
          <TextField
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            id="username"
            label="Email"
            variant="outlined"
            fullWidth
          />
          <br />
          <br />
          <TextField
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            label="Passoword"
            variant="outlined"
            fullWidth
          />
          <br />
          <br />
          <Button
            size="large"
            variant="contained"
            onClick={() => {
              fetch("http://localhost:3000/admin/signup", {
                method: "POST",
                body: JSON.stringify({
                  username: email,
                  password: password,
                }),
                headers: {
                  "Content-type": "application/json",
                },
              })
                .then((res) => {
                  return res.json();
                })
                .then((data) => {
                  console.log("this is the data", data);
                  localStorage.setItem('token', data.token)
                }).then(() => {
                  navigate('/add-course');
                })
            }}
          >
            Sign up
          </Button>
        </Card>
      </div>
    </div>
  );
}

export default Signup;
