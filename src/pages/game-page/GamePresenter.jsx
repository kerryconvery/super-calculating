import React from 'react';
import { styled } from '@mui/material/styles'
import { GameState } from "./game-controller/types";
import Audio from "./Audio";

const VerticalCenter = styled('div')({
    position: 'relative',
    top: '50%',
    transform: 'translateY(-50%)'
})

const GameContainer = styled('div')({
    marginLeft: '1rem',
    marginRight: '1rem',
    height: '100%'
})

function GamePresenter({ gameState, gameStarter, inGameStats, gameBoard, scoreBoard }) {
    const gameStateToView = () => {
        switch (gameState) {
            case GameState.notStarted:
                return (
                    <VerticalCenter>
                        {gameStarter}
                    </VerticalCenter>
                )
            case GameState.started:
                return (
                    <VerticalCenter>
                        <Audio id='music' src='Positive-Hip-Hop.mp3' volume={0.2} />
                        {inGameStats}
                        {gameBoard}
                    </VerticalCenter>
                )
            case GameState.completed:
                return scoreBoard
            default:
                throw new Error(`Unknown game state ${gameState}`)
        }
    }

    return (
        <GameContainer>
            {gameStateToView()}
        </GameContainer>
    )
}

export default GamePresenter
