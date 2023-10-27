import {Typography} from "@mui/material";
import * as React from "react";
import {useDispatch} from "react-redux";
import {pickAnotherWord} from "../reducer/gameReducer";

function FinalResult(props) {
    const dispatch = useDispatch()

    const handleTryAgain = () => {
        dispatch(pickAnotherWord(props.gameType))
    }

    return (
        <div style={{marginTop: "40px"}}>
            {
                props.guessCorrect ?
                    <Typography variant="h5" color="orange" align="center" gutterBottom>
                        Congrats!
                    </Typography>
                    : <Typography variant="h5" color="black" align="center" gutterBottom>
                        Oops! You didn't find the word.
                    </Typography>
            }
            <Typography variant="h5" color="black" align="center" gutterBottom>
                Do you want to <span style={{color: "blue", cursor: 'default'}}
                                     onClick={handleTryAgain}>try again</span> ?
            </Typography>
        </div>
    );
}

export default FinalResult;
