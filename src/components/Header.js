import {Typography} from "@mui/material";
import * as React from "react";
import {useNavigate} from "react-router-dom";

function Header() {
    const navigate = useNavigate();
    const goBack = () => {
        navigate("/")
    }

    return (
        <div style={{marginTop: "50px", cursor: 'default'}}>
            <Typography variant="h4" color="primary" align="center" gutterBottom onClick={goBack}>
                Wordle
            </Typography>
        </div>
    );
}

export default Header;
