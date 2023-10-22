import {Button, Grid} from "@mui/material";
import * as React from "react";
import {pickAnotherWord} from "../reducer/gameReducer";
import {useDispatch} from "react-redux";

function ResetGameButton(props) {
    const dispatch = useDispatch()
    const resetGame = (event) => {
        dispatch(pickAnotherWord(props.gameType))
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={2} ></Grid>
            <Grid item xs={8}>
                <div style={{}}><Button onClick={resetGame}> reset game</Button></div>
            </Grid>
            <Grid item xs={2}></Grid>
        </Grid>
    );
}

export default ResetGameButton;
