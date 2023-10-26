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
        <div style={{marginLeft: "100px", marginTop: "40px", marginRight: "100px", textAlign: "center"}}>
            <Grid container spacing={2}>
                <Grid item xs={1}/>
                <Grid item xs={5}>
                    <Button variant="contained" onClick={goToNormalGame}>Normal Game</Button>
                </Grid>
                <Grid item xs={5}>
                    <Button variant="contained" onClick={goToHardGame}>Difficult Game</Button>
                </Grid>
                <Grid item xs={1}/>
            </Grid>
        </div>
    );
}

export default NavigationButtonGroup;
