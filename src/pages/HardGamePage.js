import {useSelector} from "react-redux";
import {useNavigate} from 'react-router-dom';
import {useEffect} from "react";
import Game from "../components/Game";


function HardGamePage() {
    const allowedAttemptTime = useSelector((state) => state.gameReducer.allowedAttemptTime)
    const currentWord  = useSelector((state) => state.gameReducer.currentWord)

    const navigate = useNavigate();

    useEffect(() => {
        if (currentWord === "") {
            return navigate('/');
        }

    }, [currentWord, navigate]);

    return (
        <Game allowedAttemptTime={allowedAttemptTime} gameType="hard"/>

    );
}

export default HardGamePage;
