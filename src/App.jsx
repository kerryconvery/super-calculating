import React from 'react';
import GameController from './pages/game-page/GameController'
import {styled} from "@mui/material";
import RandomBodyBackground from "./pages/game-page/components/body-background/RandomBodyBackground";

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
            numberOfQuestions={30}
            startupCountDown={['Start', '5', '4', '3', '2', '1', 'GO!']}
        />
    </HorizontalCenter>
)

export default App;
