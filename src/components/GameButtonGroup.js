import {Button, Grid} from "@mui/material";
import * as React from "react";
import {pickAnotherWord} from "../reducer/gameReducer";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

function GameButtonGroup(props) {
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const resetGame = (event) => {
        dispatch(pickAnotherWord(props.gameType))
    };

    const checkRule = () => {
        navigate("/rule");
    }

    return (
        <Grid container spacing={2}>
            <Grid item xs={2}></Grid>
            <Grid item xs={4}>
                <div style={{textAlign: "center"}}><Button onClick={resetGame}> reset game</Button></div>
            </Grid>
            <Grid item xs={4}>
                <div style={{textAlign: "center"}}><Button onClick={checkRule}> check rule</Button></div>
            </Grid>
            <Grid item xs={2}></Grid>
        </Grid>
    );
}

export default GameButtonGroup;
