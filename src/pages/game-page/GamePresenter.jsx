import { styled } from '@mui/material/styles'
import { GameState } from "./game-controller/types";

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

function GamePresenter({ gameState, inGameStats, gameBoard, startButton, scoreBoard }) {
    const gameStateToView = () => {
        switch (gameState) {
            case GameState.stopped:
                return (
                    <VerticalCenter>
                        {startButton}
                    </VerticalCenter>
                )
            case GameState.started:
                return (
                    <VerticalCenter>
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
