import { Typography, Button } from "@mui/material";

function Appbar(){
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding:5
        }}>
            <Typography variant="h6">CourseTech</Typography>
            <div>
            <Button variant="contained" style={{marginRight: 20}} >Sign up</Button>
            <Button variant="contained">Sign in</Button>
            </div>
          
        </div>
    )
}

export default Appbar;