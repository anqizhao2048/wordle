import { createSlice } from '@reduxjs/toolkit'
import {getRandomNumber} from "../utils/number";

export const wordSlice = createSlice({
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
            "glisten",
            "sprint",
            "twinge",
            "cradle"
        ],
        currentWord: ""
    },
    reducers: {
        pickNormalWord: (state) => {
            state.currentWord = state.normalWords[getRandomNumber(0, 9)];
        },
        pickHardWord: (state) => {
            state.currentWord = state.hardWords[getRandomNumber(0, 9)];
        },
        reset: (state) => {
            state.currentWord = "";
        },
    },
})
export const { reset, pickNormalWord, pickHardWord } = wordSlice.actions

export default wordSlice.reducer