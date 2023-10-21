import { configureStore } from '@reduxjs/toolkit'
import wordReducer from "../reducer/wordReducer";
import gameReducer from "../reducer/gameReducer";

export default configureStore({
    reducer: {
        wordReducer: wordReducer,
        gameReducer: gameReducer,
    },
})