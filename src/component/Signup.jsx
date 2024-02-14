import { Card, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function Signup() {
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
          <TextField id="username" label="Email" variant="outlined" fullWidth />
          <br />
          <br />
          <TextField
            id="password"
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
              let username = document.getElementById("username").value;
              let password = document.getElementById("password").value;
              fetch("http://localhost:3000/admin/signup", {
                method: "POST",
                body: JSON.stringify({
                  username: username,
                  password: password,
                }),
                headers: {
                  "Content-type": "application/json",
                },
              });
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
