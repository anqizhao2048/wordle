import {Typography} from "@mui/material";
import * as React from "react";

function FailedGame() {
    return (
        <div style={{marginTop: "50px"}} >
            <Typography variant="h5" color="primary" align="center" gutterBottom>
                Oops! You didn't find the word. Do you want to try again?
            </Typography>
        </div>
    );
}

export default FailedGame;
