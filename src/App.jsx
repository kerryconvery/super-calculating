import React from 'react';
import GameController from './pages/game-page/GameController'
import {styled} from "@mui/material";

const HorizontalCenter = styled('div')({
    textAlign: 'center'
})

const Title = styled('h1')({
    margin: 0
})

const App = () => (
    <HorizontalCenter>
        <Title>Super Calculating</Title>
        <GameController numberOfQuestions={2} />
    </HorizontalCenter>
)

export default App;
