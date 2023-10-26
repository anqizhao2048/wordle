import {createSlice} from '@reduxjs/toolkit'
import {getRandomNumber} from "../utils/number";

export const gameSlice = createSlice({
    name: 'game',
    initialState: {
        hardWords: [
            "fantasy",
            "gravity",
            "plaster",
            "frosted",
            "gleeful",
            "trickle",
            "flutter",
            "strange",
            "bristle",
            "clarity"
        ],
        normalWords: [
            "bright",
            "gravel",
            "frozen",
            "tangle",
            "mumble",
            "driven",
            "gliste",
            "sprint",
            "twinge",
            "cradle"
        ],
        attemptedTime: 0,
        allowedAttemptTime: 0,
        triedWords: [],
        letterNumber: 0,
        currentWord: "",
        guessCorrect: false,
    },
    reducers: {
        setNormalGame: (state, action) => {
            state.allowedAttemptTime = 6;
            state.letterNumber = 6;
        },
        setHardGame: (state, action) => {
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
            state.currentWord = state.normalWords[getRandomNumber(0, 9)];
        },
        pickHardWord: (state) => {
            state.currentWord = state.hardWords[getRandomNumber(0, 9)];
        },
        pickAnotherWord: (state, action) => {
            state.attemptedTime = 0;
            state.triedWords = [];
            state.guessCorrect = false;
            if (action.payload === "normal") {
                state.currentWord = state.normalWords[getRandomNumber(0, 9)];
            } else {
                state.currentWord = state.hardWords[getRandomNumber(0, 9)];
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