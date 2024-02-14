import { Card, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
function Signin() {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <div style={{ 
        width: "50%",
        background: "white",
        height: "90vh",
        textAlign: "center",
        paddingTop: 140
         }}>
          <h1>Hello I will be your course tech dude !!</h1>
         </div>
      <div style={{ width: "50%" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
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
              Sign in
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Signin;
