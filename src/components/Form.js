import React, {useState} from 'react';
import {Button, Container, Grid, TextareaAutosize, Typography} from '@mui/material';
import {useDispatch, useSelector} from "react-redux";
import {attempt} from "../reducer/gameReducer";
import {Box, Modal} from "@mui/joy";

function Form(props) {
    const [text, setText] = useState('');
    const [sizeModelOpen, setSizeModelOpen] = React.useState(false);
    const [isWordModalOpen, setIsWordModalOpen] = React.useState(false);
    const handleSizeModalOpen = () => setSizeModelOpen(true);
    const handleSizeModalClose = () => setSizeModelOpen(false);

    const handleIsWordModalOpen = () => setIsWordModalOpen(true);
    const handleIsWordModalClose = () => setIsWordModalOpen(false);


    const letterNumber = useSelector((state) => state.gameReducer.letterNumber)
    const normalWordDict = useSelector((state) => state.gameReducer.normalWordDict)
    const hardWordDict = useSelector((state) => state.gameReducer.hardWordDict)

    let wordDict = [];
    if (props.gameType === "normal") {
        wordDict = normalWordDict
    } else {
        wordDict = hardWordDict
    }


    const dispatch = useDispatch()
    const handleSubmit = (event) => {
        event.preventDefault();

        if (text.length !== letterNumber) {
            handleSizeModalOpen()
        }  else if (!wordDict.includes(text)) {
            handleIsWordModalOpen()
        } else
        {
            dispatch(attempt(text));
        }

    };

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
        <div>
            <div>
                <Modal
                    open={isWordModalOpen}
                    onClose={handleIsWordModalClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <div style={{textAlign: "center"}}>
                            <Typography id="modal-modal-description" sx={{mt: 2}}>
                                Input Word is not in dictionary
                            </Typography>
                        </div>
                        <div style={{textAlign: "center", marginTop: "5px"}}><Button
                            onClick={handleIsWordModalClose}> close</Button></div>
                    </Box>
                </Modal>
            </div>
            <div>
                <Modal
                    open={sizeModelOpen}
                    onClose={handleSizeModalClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <div style={{textAlign: "center"}}>
                            <Typography id="modal-modal-description" sx={{mt: 2}}>
                                Please input a word of {letterNumber} letters
                            </Typography>
                        </div>
                        <div style={{textAlign: "center", marginTop: "5px"}}><Button
                            onClick={handleSizeModalClose}> close</Button></div>
                    </Box>
                </Modal>
            </div>
            <Grid container rowSpacing={1} columnSpacing={{xs: 1, sm: 2, md: 3}}>
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
                                    style={{width: '100%', padding: '10px'}}
                                />
                            </div>
                            <div style={{marginTop: '20px', textAlign: "center"}}>
                                <Button variant="contained" color="primary" type="submit"
                                        disabled={props.buttonDisabled}>
                                    Submit
                                </Button>
                            </div>
                        </form>
                    </Container>
                </Grid>
                <Grid item xs={4}></Grid>
            </Grid>
        </div>
    );
}

export default Form;
