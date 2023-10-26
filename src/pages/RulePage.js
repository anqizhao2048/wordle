import {Grid} from "@mui/material";

function RulePage() {

    return (
        <div style={{marginTop: "50px", fontFamily: "MONOSPACE"}}>
            <Grid container>
                <Grid item xs={4}/>
                <Grid item xs={5}>
                    <h2> Choose difficult level </h2>
                    <ul>
                        <li>
                            <div style={{marginTop: "20px"}}>normal game: guess a 6-letter word with 6 opportunities
                            </div>
                        </li>
                        <li>
                            <div style={{marginTop: "20px"}}>hard game: guess a 7-letter word with 5 opportunities</div>
                        </li>
                    </ul>
                    <div style={{marginTop: "50px"}}/>
                    <h2> Clue </h2>
                    <div style={{marginTop: "20px"}}>
                        For incorrect guess, you will get clues based on the location of the letters
                    </div>
                    <div style={{marginTop: "50px"}}/>
                    <h2> Example </h2>
                    <div style={{marginTop: "20px"}}>
                        correct word: <span style={{}}>faces</span>
                    </div>
                    <div style={{marginTop: "20px"}}>
                        Your guess: eater
                    </div>
                    <div style={{marginTop: "20px"}}>
                        you can see <span style={{backgroundColor: "YELLOW"}}>e</span><span
                        style={{backgroundColor: "green"}}>a</span><span style={{backgroundColor: "grey"}}>t</span><span
                        style={{backgroundColor: "grey"}}>e</span><span style={{backgroundColor: "grey"}}>r</span>
                    </div>
                    <div style={{marginTop: "50px"}}/>
                    <h2> Explanation </h2>
                    <p style={{}}>
                        first <span style={{backgroundColor: "yellow"}}>e</span> is in the word but not in the correct
                        spot
                    </p>
                    <p style={{}}>
                        <span style={{backgroundColor: "green"}}>a</span> is in the word AND in the correct spot
                    </p>
                    <p style={{}}>
                        others in <span style={{backgroundColor: "gray"}}>grey</span> as they are missing letters
                    </p>
                    <p style={{}}>
                        note: the second <span style={{backgroundColor: "gray"}}>e</span> is in grey since e only
                        appears once in the word
                    </p>
                </Grid>
                <Grid item xs={3}/>
            </Grid>
        </div>
    );
}

export default RulePage;
