import { Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function Appbar() {
  const naviagte = useNavigate();
  const [email, setEmail] = useState(null)
  useEffect(() => {
    fetch('http://localhost:3000/admin/me', {
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem('token')}`
          },
        method: "GET",
    }).then((res) => {
        return res.json();
    }).then((data) => {
        setEmail(data.userName);
    })
  }, []);

  if(email){
    return (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 25,
            background: "#36454F",
          }}
        >
          <Typography variant="h6" style={{ color: "white" }}>
            CourseTech
          </Typography>
          <div>
            {email};
            <Button
              variant="contained"
              style={{ marginRight: 20 }}
              onClick={() => {
                localStorage.setItem('token', null)
                naviagte("/signup");
              }}
            >
              Log out
            </Button>
          </div>
        </div>
      );
  }
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 25,
        background: "#36454F",
      }}
    >
      <Typography variant="h6" style={{ color: "white" }}>
        CourseTech
      </Typography>
      <div>
        <Button
          variant="contained"
          style={{ marginRight: 20 }}
          onClick={() => {
            naviagte("/signup");
          }}
        >
          Sign up
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            naviagte("/login");
          }}
        >
          Sign in
        </Button>
      </div>
    </div>
  );
}

export default Appbar;
