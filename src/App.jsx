import React from 'react';
import GameController from './pages/game-page/GameController'
import {styled} from "@mui/material";

const HorizontalCenter = styled('div')({
    marginBottom: '3rem',
    textAlign: 'center'
})

const App = () => (
    <HorizontalCenter>
        <h1>Super Calculating</h1>
        <GameController numberOfQuestions={2} />
    </HorizontalCenter>
)

export default App;
