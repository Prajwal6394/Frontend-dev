import { Card, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

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
            onClick={async () => {
              try {
                const response = await axios.post(
                  "http://localhost:3000/admin/signup",
                  {
                    username: email,
                    password,
                  },
                  {
                    headers: {
                      "Content-Type": "application/json",
                    },
                  }
                );
            
                localStorage.setItem("token", response.data.token);
                navigate("/add-course");
              } catch (error) {
                console.error("Error:", error);
                // Handle error if needed
              }
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
