import {Typography} from "@mui/material";
import * as React from "react";
import {useDispatch} from "react-redux";
import {pickAnotherWord} from "../reducer/gameReducer";

function FailedGame(props) {
    const dispatch = useDispatch()

    const handleTryAgain = () => {
        dispatch(pickAnotherWord(props.gameType))
    }

    return (
        <div style={{marginTop: "50px"}}>
            <Typography variant="h5" color="primary" align="center" gutterBottom>
                Oops! You didn't find the word. Do you want to <span style={{color: "blue", cursor: 'default'}}
                                                                     onClick={handleTryAgain}>try again</span> ?
            </Typography>
        </div>
    );
}

export default FailedGame;
