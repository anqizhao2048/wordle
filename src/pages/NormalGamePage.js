import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import Form from "../components/Form";

function NormalGamePage() {
    const allowedAttemptTime = useSelector((state) => state.gameReducer.allowedAttemptTime)
    const attemptedTime = useSelector((state) => state.gameReducer.attemptedTime)
    const currentWord  = useSelector((state) => state.wordReducer.currentWord)
    const triedWords  = useSelector((state) => state.gameReducer.triedWords)

    const navigate = useNavigate();

    useEffect(() => {
        // Check your condition
        if (currentWord === "") {
            return navigate('/');
        }

    }, [currentWord, navigate]);

    return (
        attemptedTime === allowedAttemptTime? <div> haha </div> :
        <div>
            <div>allow attempt time : {allowedAttemptTime}</div>
            <div>attempted time : {attemptedTime}</div>
            <div>current word: {currentWord}</div>
            <div>tried words:</div>
            {
                triedWords.map((word, index) => <div key={index}>{word}</div>)
            }
            <Form />
        </div>
    );
}

export default NormalGamePage;
