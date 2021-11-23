import React from 'react';
import GameController from './pages/game-page/game-controller/GameController'
import {styled} from "@mui/material";
import RandomBodyBackground from "./pages/game-page/body-background/RandomBodyBackground";

const HorizontalCenter = styled('div')({
    textAlign: 'center'
})

const Title = styled('h1')({
    margin: 0
})

const App = () => (
    <HorizontalCenter>
        <RandomBodyBackground />
        <Title>Super Calculating</Title>
        <GameController
            numberOfQuestions={2}
            startupCountDown={['Start', '5']}
        />
    </HorizontalCenter>
)

export default App;
