import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function Signup() {
  return (
    <div>
      <center>
        <div
          style={{
            border: "2px solid black",
            width: 400,
            marginTop: 120,
            padding: 20
          }}
        >
          <h4>Sign up and explore this course selling app</h4> <br />
          <TextField id="outlined-basic" label="Email" variant="outlined" />
          <br />
          <TextField id="outlined-basic"  type="password" label="Passoword" variant="outlined" />
          <br />
          <Button variant="contained">Sign up</Button>
        </div>
      </center>
    </div>
  );
}

export default Signup;
