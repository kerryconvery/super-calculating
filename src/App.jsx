import React from 'react';
import {styled} from "@mui/material";
import RandomBodyBackground from "./pages/game-page/body-background/RandomBodyBackground";
import GamePage from './pages/game-page/GamePage'

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
        <GamePage
            numberOfQuestions={10}
            startupCountDown={['Start', '5', '4', '3', '2', '1', 'GO!']}
        />
    </HorizontalCenter>
)

export default App;
