import * as React from "react";
import Congrats from "./Congrats";
import HintInfo from "./HintInfo";
import Form from "./Form";
import {useSelector} from "react-redux";
import FailedGame from "./FailedGame";
import GameButtonGroup from "./GameButtonGroup";

function Game(props) {
    const attemptedTime = useSelector((state) => state.gameReducer.attemptedTime)
    const guessCorrect = useSelector((state) => state.gameReducer.guessCorrect)

    return (
        <div>
            <div> {guessCorrect && <Congrats/>}</div>
            <div> {!guessCorrect && attemptedTime === props.allowedAttemptTime &&
                <FailedGame gameType={props.gameType}/>}</div>
            <div style={{marginTop: "30px"}}><GameButtonGroup gameType={props.gameType}/></div>
            <div style={{marginTop: "30px", textAlign: "center"}}>
                <HintInfo/>
            </div>
            <div style={{marginTop: "60px"}}>
                <Form buttonDisabled={guessCorrect || attemptedTime === props.allowedAttemptTime}/>
            </div>
        </div>
    );
}

export default Game;
