import * as React from "react";
import {useSelector} from "react-redux";
import {Grid} from "@mui/material";
import StyledTriedWord from "./StyledTriedWord";

function HintInfo() {
    const allowedAttemptTime = useSelector((state) => state.gameReducer.allowedAttemptTime)
    const attemptedTime = useSelector((state) => state.gameReducer.attemptedTime)
    const currentWord  = useSelector((state) => state.gameReducer.currentWord)
    const triedWords  = useSelector((state) => state.gameReducer.triedWords)

    return (
            <Grid container spacing={2}>
                <Grid item xs={2} ></Grid>
                <Grid item xs={8}>
                    <div style={{fontSize: '20px', fontFamily: "MONOSPACE"}}>
                        <div style={{marginTop: '10px'}}>
                            Please input a <span style={{color: "darkblue"}}>{currentWord.length}-letter</span> word to guess
                        </div>
                        <div style={{marginTop: '10px'}}>You can try <span style={{color: "green"}}>{allowedAttemptTime}</span> times!</div>
                        <div style={{marginTop: '10px'}}>You already tried <span style={{color: "orange"}}>{attemptedTime}</span> times</div>
                        <div style={{marginTop: '10px'}}>current word: {currentWord}</div>
                        <div style={{marginTop: '20px'}}>tried words:</div>
                        {
                            triedWords.map((word, index) => <div style={{marginTop: '10px'}} key={index}><StyledTriedWord word={word} currentWord={currentWord} /></div>)
                        }
                    </div>
                </Grid>
                <Grid item xs={2}></Grid>
            </Grid>
    );
}

export default HintInfo;
