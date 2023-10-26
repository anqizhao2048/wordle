import * as React from "react";
import {wordColorCheck} from "../utils/wordCheck";

function StyledTriedWord(props) {
    let word = props.word

    let colors = wordColorCheck(word, props.currentWord)

    return (
        <div>
            {word.split("").map((char, index) => (
                <span key={index} style={{backgroundColor: colors[index], margin: "1px"}}>
                    {char}
                </span>
            ))}

        </div>
    );
}

export default StyledTriedWord;
