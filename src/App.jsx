import React from 'react';
import {styled} from "@mui/material";
import GamePage from './pages/game-page/GamePage'
import useRandomBodyBackgroundColor from "./pages/game-page/body-background/useRandomBodyBackgroundColor";

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

const App = () => {
    useRandomBodyBackgroundColor(2000)

    return (
        <GridContainer>
            <Title>Super Calculating</Title>
            <Content>
                <GamePage defaultNumberOfQuestions={10} startupCountDown={['Start', '5', '4', '3', '2', '1', 'GO!']}/>
            </Content>
        </GridContainer>
    )
}

export default App;
