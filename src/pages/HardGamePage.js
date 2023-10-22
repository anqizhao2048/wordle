import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import Game from "../components/Game";
import {pickHardWord, setHardGame} from "../reducer/gameReducer";


function HardGamePage() {
    const allowedAttemptTime = useSelector((state) => state.gameReducer.allowedAttemptTime)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setHardGame())
        dispatch(pickHardWord())

    }, [dispatch]);

    return (
        <Game allowedAttemptTime={allowedAttemptTime} gameType="hard"/>

    );
}

export default HardGamePage;
