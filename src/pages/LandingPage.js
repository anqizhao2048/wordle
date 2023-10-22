import * as React from "react";
import {Button, Grid} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setHardGame, setNormalGame, pickHardWord, pickNormalWord} from "../reducer/gameReducer";

function LandingPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const goToRule = () => {
        navigate("/rule")
    }

    const goToNormalGame = () => {
        dispatch(setNormalGame())
        dispatch(pickNormalWord())
        navigate("/normal-game")
    }

    const goToHardGame = () => {
        dispatch(setHardGame())
        dispatch(pickHardWord())
        navigate("/hard-game")
    }
    return (
        <div>
            <div style={{marginLeft: "100px", marginTop: "100px", marginRight: "100px",  textAlign: "center"}}>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <div>
                            <Button variant="contained" onClick={goToRule}>Rule</Button>
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        <Button variant="contained" onClick={goToNormalGame}>Normal Game</Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button variant="contained" onClick={goToHardGame}>Difficult Game</Button>
                    </Grid>
                </Grid>
            </div>

        </div>
    );
}

export default LandingPage;
