import { Typography, Button } from "@mui/material";
import {useNavigate} from 'react-router-dom';
function Appbar(){

    const naviagte = useNavigate();
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding:25,
            background: "#36454F"
        }}>
            <Typography variant="h6" style={{color: "white"}}>CourseTech</Typography>
            <div>
            <Button 
            variant="contained" 
            style={{marginRight: 20}}
            onClick={() => {
                naviagte('/signup');
            }}
            >Sign up</Button>
            <Button variant="contained" onClick={() => {
                naviagte('/login');
            }}>Sign in</Button>
            </div>
          
        </div>
    )
}

export default Appbar;