import React, { useState } from 'react';
import { Button, TextareaAutosize, Container } from '@mui/material';
import {useDispatch, useSelector} from "react-redux";
import {attempt} from "../reducer/gameReducer";

function MyForm() {
    const [text, setText] = useState('');

    const currentWord  = useSelector((state) => state.wordReducer.currentWord)
    const letterNumber  = useSelector((state) => state.gameReducer.letterNumber)

    const dispatch = useDispatch()
    const handleSubmit = (event) => {
        event.preventDefault();

        if (text.length !== letterNumber) {
            alert('please input correct length of the word')
        } else {
            if (text === currentWord) {
                alert("YES")
            }
            dispatch(attempt(text));
        }

    };

    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <div>
                    <TextareaAutosize
                        minRows={5}
                        placeholder="Write something..."
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        style={{ width: '100%', padding: '10px' }}
                    />
                </div>
                <div style={{ marginTop: '20px' }}>
                    <Button variant="contained" color="primary" type="submit">
                        Submit
                    </Button>
                </div>
            </form>
        </Container>
    );
}

export default MyForm;
