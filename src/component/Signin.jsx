import { Card, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import axios from "axios";
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
            onClick={async () => {
              try {
                const response = await axios.post(
                  "http://localhost:3000/admin/login",
                  {
                    username: userName,
                    password,
                  },
                  {
                    headers: {
                      "Content-Type": "application/json",
                    },
                  }
                );
            
                localStorage.setItem("token", response.data.token);
                navigate("/courses");
              } catch (error) {
                console.log("Something went wrong with backend");
                // You can also handle the error here if needed
              }
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
