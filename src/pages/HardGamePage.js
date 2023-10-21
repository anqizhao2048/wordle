import {useSelector} from "react-redux";
import {useNavigate} from 'react-router-dom';
import {useEffect} from "react";


function HardGamePage() {
    const allowedAttemptTime = useSelector((state) => state.gameReducer.allowedAttemptTime)
    const currentWord  = useSelector((state) => state.wordReducer.currentWord)
    const navigate = useNavigate();

    useEffect(() => {
        // Check your condition
        if (currentWord === "") {
            return navigate('/');
        }

    }, []);

    return (
        <div>
            <div>
                Hard Game Page
                <div>{allowedAttemptTime}</div>
                <div>{currentWord}</div>
            </div>
        </div>
    );
}

export default HardGamePage;
