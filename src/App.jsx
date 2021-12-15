import React from 'react';
import {styled} from "@mui/material";
import RotateBodyBackgroundColor from "./pages/game-page/body-background/RotateBodyBackgroundColor";
import { getRandomColor } from "./utils/colorUtils";
import GamePage from './pages/game-page/GamePage'

const GridContainer = styled('div')({
    display: 'grid',
    gridTemplateRows: 'auto 1fr',
    justifyItems: 'center',
    minHeight: '100%'
})

const Title = styled('h1')({
    margin: 0,
    gridRow: 1
})

const Content = styled('div')({
    gridRow: 2,
    textAlign: 'center',
})

const App = () => (
    <>
        <RotateBodyBackgroundColor interval={2000} onNextColor={getRandomColor} />
        <GridContainer>
            <Title>Super Calculating</Title>
            <Content>
                <GamePage defaultNumberOfQuestions={10} startupCountDown={['Start', '5', '4', '3', '2', '1', 'GO!']} />
            </Content>
        </GridContainer>
    </>
)

export default App;
