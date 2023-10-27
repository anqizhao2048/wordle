import * as React from "react";
import HintInfo from "./HintInfo";
import Form from "./Form";
import {useSelector} from "react-redux";
import GameButtonGroup from "./GameButtonGroup";
import FinalResult from "./FinalResult";

function Game(props) {
    const attemptedTime = useSelector((state) => state.gameReducer.attemptedTime)
    const guessCorrect = useSelector((state) => state.gameReducer.guessCorrect)

    return (
        <div>
            {(guessCorrect || attemptedTime === props.allowedAttemptTime) &&
                <FinalResult gameType={props.gameType} guessCorrect={guessCorrect}/>}
            <div style={{marginTop: "50px"}}><GameButtonGroup gameType={props.gameType}/></div>
            <div style={{marginTop: "30px", textAlign: "center"}}>
                <HintInfo/>
            </div>
            <div style={{marginTop: "60px"}}>
                <Form buttonDisabled={guessCorrect || attemptedTime === props.allowedAttemptTime} gameType={props.gameType}/>
            </div>
        </div>
    );
}

export default Game;
