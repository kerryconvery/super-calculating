import React from 'react';
import { styled } from '@mui/material/styles'
import NextButton from "./NextButton";
import EndGameButton from "./EndGameButton";

const Container = styled('div')({
    marginTop: '1rem'
})

function NextQuestionOrEndGame({ hasMoreQuestions, onNextQuestion, onEndGame }) {
    return (
        <Container>
            {hasMoreQuestions ?
                <NextButton onNext={onNextQuestion} /> :
                <EndGameButton onEndGame={onEndGame} />
            }
        </Container>
    )
}

export default NextQuestionOrEndGame
