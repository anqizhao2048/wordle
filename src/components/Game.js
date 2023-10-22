import * as React from "react";
import Congrats from "./Congrats";
import HintInfo from "./HintInfo";
import Form from "./Form";
import {useSelector} from "react-redux";
import FailedGame from "./FailedGame";
import ResetGameButton from "./ResetGameButton";

function Game(props) {
    const attemptedTime = useSelector((state) => state.gameReducer.attemptedTime)
    const guessCorrect = useSelector((state) => state.gameReducer.guessCorrect)

    return (
            <div>
                <div> {guessCorrect && <Congrats />}</div>
                <div> {!guessCorrect && attemptedTime === props.allowedAttemptTime && <FailedGame />}</div>
                <div style={{marginTop: "30px"}}><ResetGameButton gameType={props.gameType}/></div>
                <div style={{marginTop: "30px"}}>
                    <HintInfo />
                </div>
                <div style={{marginTop: "30px"}}>
                    <Form />
                </div>
            </div>
    );
}

export default Game;
