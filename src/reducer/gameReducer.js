import {createSlice} from '@reduxjs/toolkit'
import {getRandomNumber} from "../utils/number";
import {generateHardWordDict, generateNormalWordDict, hardWords, normalWords} from "../words/gameWords";

export const gameSlice = createSlice({
    name: 'game',
    initialState: {
        allowedAttemptTime: 0,
        attemptedTime: 0,
        currentWord: "",
        guessCorrect: false,
        letterNumber: 0,
        triedWords: [],
        normalWordDict: generateNormalWordDict(),
        hardWordDict: generateHardWordDict(),
    },
    reducers: {
        setNormalGame: (state) => {
            state.allowedAttemptTime = 6;
            state.letterNumber = 6;
        },
        setHardGame: (state) => {
            state.allowedAttemptTime = 5;
            state.letterNumber = 7;
        },
        attempt: (state, action) => {
            state.attemptedTime = state.attemptedTime + 1;
            state.triedWords.push(action.payload)
            if (action.payload === state.currentWord) {
                state.guessCorrect = true;
            }
        },
        reset: (state) => {
            state.attemptedTime = 0;
            state.triedWords = [];
            state.currentWord = "";
            state.guessCorrect = false;
        },
        pickNormalWord: (state) => {
            state.currentWord = normalWords[getRandomNumber(0, 9)];
        },
        pickHardWord: (state) => {
            state.currentWord = hardWords[getRandomNumber(0, 9)];
        },
        pickAnotherWord: (state, action) => {
            state.attemptedTime = 0;
            state.triedWords = [];
            state.guessCorrect = false;
            if (action.payload === "normal") {
                state.currentWord = normalWords[getRandomNumber(0, 9)];
            } else {
                state.currentWord = hardWords[getRandomNumber(0, 9)];
            }
        },
    },
})
export const {
    setNormalGame,
    setHardGame,
    attempt,
    reset,
    pickNormalWord,
    pickHardWord,
    pickAnotherWord
} = gameSlice.actions

export default gameSlice.reducer