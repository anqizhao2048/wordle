import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

function NormalGamePage() {
    const allowedAttemptTime = useSelector((state) => state.gameReducer.allowedAttemptTime)
    const currentWord  = useSelector((state) => state.wordReducer.currentWord)

    const navigate = useNavigate();

    useEffect(() => {
        // Check your condition
        if (currentWord === "") {
            return navigate('/');
        }

    }, [currentWord, navigate]);

    return (
        <div>
            Normal Game Page
            <div>{allowedAttemptTime}</div>
            <div>{currentWord}</div>
        </div>
    );
}

export default NormalGamePage;
