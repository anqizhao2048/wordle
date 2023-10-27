import * as React from "react";
import {Button, Grid} from "@mui/material";
import {useNavigate} from "react-router-dom";

function LandingPage() {
    const navigate = useNavigate();
    const goToRule = () => {
        navigate("/rule")
    }

    const goToNormalGame = () => {
        navigate("/normal-game")
    }

    const goToHardGame = () => {
        navigate("/hard-game")
    }
    return (
        <div>
            <div style={{marginLeft: "100px", marginTop: "100px", marginRight: "100px", textAlign: "center"}}>
                <Grid container spacing={2}>
                    <Grid item xs={2}/>
                    <Grid item xs={8}>
                        <Button variant="contained" onClick={goToRule}>Rule</Button>
                    </Grid>
                    <Grid item xs={2}/>
                </Grid>
                <div style={{marginTop: "50px"}}></div>
                <Grid container spacing={2}>
                    <Grid item xs={2}/>
                    <Grid item xs={8}>
                        <Button variant="contained" onClick={goToNormalGame}>Normal Game</Button>
                    </Grid>
                    <Grid item xs={2}/>
                </Grid>
                <div style={{marginTop: "50px"}}></div>
                <Grid container spacing={2}>
                    <Grid item xs={2}/>
                    <Grid item xs={8}>
                        <Button variant="contained" onClick={goToHardGame}>Difficult Game</Button>
                    </Grid>
                    <Grid item xs={2}/>
                </Grid>
            </div>

        </div>
    );
}

export default LandingPage;
