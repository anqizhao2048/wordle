import {Button, Grid} from "@mui/material";
import * as React from "react";
import {useNavigate} from "react-router-dom";

function NavigationButtonGroup(props) {
    const navigate = useNavigate();

    const goToNormalGame = () => {
        navigate("/normal-game")
    }

    const goToHardGame = () => {
        navigate("/hard-game")
    }
    return (
        <Grid container spacing={2}>
            <Grid item xs={1}></Grid>
            <Grid item xs={5}>
                <div style={{textAlign: "center"}}><Button onClick={goToNormalGame}> Normal Game</Button></div>
            </Grid>
            <Grid item xs={5}>
                <div style={{textAlign: "center"}}><Button onClick={goToHardGame}> Hard Game</Button></div>
            </Grid>
            <Grid item xs={1}></Grid>
        </Grid>
    );
}

export default NavigationButtonGroup;
