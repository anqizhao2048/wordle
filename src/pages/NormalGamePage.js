import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import Game from "../components/Game";
import {pickNormalWord, setNormalGame, reset} from "../reducer/gameReducer";

function NormalGamePage() {
    const allowedAttemptTime = useSelector((state) => state.gameReducer.allowedAttemptTime)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(reset())
        dispatch(setNormalGame())
        dispatch(pickNormalWord())

    }, [dispatch]);

    return (
        <Game allowedAttemptTime={allowedAttemptTime} gameType="normal"/>
    );
}

export default NormalGamePage;
