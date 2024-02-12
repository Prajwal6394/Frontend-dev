import { Card, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function Signup() {
  return (
    <div>
      <center>
      <Typography variant="h6" style={{
            paddingTop: 150,
            marginBottom: 15
          }}>
            Sign up and explore this course selling app
          </Typography>
      </center>
      <center>
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
          />
          <br />
          <br />
          <TextField
            id="outlined-basic"
            type="password"
            label="Passoword"
            variant="outlined"
            fullWidth
          />
          <br />
          <br />
          <Button size="large" variant="contained">
            Sign up
          </Button>
        </Card>
      </center>
    </div>
  );
}

export default Signup;
