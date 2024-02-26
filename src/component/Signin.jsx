import { Card, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signin() {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
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
          Welcome back, sign in to proceed
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
            id="outlined-basic"
            label="Email"
            variant="outlined"
            fullWidth
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <br />
          <br />
          <TextField
            id="outlined-basic"
            type="password"
            label="Passoword"
            variant="outlined"
            fullWidth
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br />
          <br />
          <Button
            size="large"
            onClick={() => {
              console.log('this is body',
              JSON.toString({
                username: userName,
                password: password,
              }))
              fetch("http://localhost:3000/admin/login", {
                body: JSON.stringify({
                  username: userName,
                  password: password,
                }),
                headers: {
                  "Content-type": "application/json",
                },
                method: "POST",
              })
                .then((res) => {
                  return res.json();
                })
                .then((data) => {
                  console.log('this is data',data)
                  localStorage.setItem("token", data.token);
                  navigate('/add-course')
                });
            }}
            variant="contained"
          >
            Sign in
          </Button>
        </Card>
      </div>
    </div>
  );
}

export default Signin;
