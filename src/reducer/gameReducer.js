import { createSlice } from '@reduxjs/toolkit'

export const gameSlice = createSlice({
    name: 'game',
    initialState: {
        attemptedTime: 0,
        allowedAttemptTime: 0,
        triedWords: [],
        letterNumber: 0,
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
        },
        reset: (state) => {
            state.attemptedTime = 0;
            state.triedWords =  [];
        },
    },
})
export const { setNormalGame, setHardGame, attempt, reset } = gameSlice.actions

export default gameSlice.reducer