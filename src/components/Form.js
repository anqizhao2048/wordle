import React, { useState } from 'react';
import {Button, TextareaAutosize, Container, Grid} from '@mui/material';
import {useDispatch, useSelector} from "react-redux";
import {attempt} from "../reducer/gameReducer";

function MyForm() {
    const [text, setText] = useState('');

    const letterNumber  = useSelector((state) => state.gameReducer.letterNumber)

    const dispatch = useDispatch()
    const handleSubmit = (event) => {
        event.preventDefault();

        if (text.length !== letterNumber) {
            alert('please input correct length of the word')
        } else {
            dispatch(attempt(text));
        }

    };

    return (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={4}></Grid>
            <Grid item xs={4}>
                <Container>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <TextareaAutosize
                                minRows={1}
                                maxRows={1}
                                placeholder="Please input your guess..."
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                                style={{ width: '100%', padding: '10px' }}
                            />
                        </div>
                        <div style={{ marginTop: '20px', textAlign: "center" }}>
                            <Button variant="contained" color="primary" type="submit">
                                Submit
                            </Button>
                        </div>
                    </form>
                </Container>
            </Grid>
            <Grid item xs={4}></Grid>
        </Grid>
    );
}

export default MyForm;
