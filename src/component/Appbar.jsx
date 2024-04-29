import { Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
function Appbar() {
  const naviagte = useNavigate();
  const [email, setEmail] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/admin/me', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        setEmail(response.data.username);
      } catch (error) {
        console.error('Error:', error);
        // Handle error if needed
      }
    };
  
    fetchData();
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
                naviagte("/");
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
            naviagte("/");
          }}
        >
          Sign in
        </Button>
      </div>
    </div>
  );
}

export default Appbar;
