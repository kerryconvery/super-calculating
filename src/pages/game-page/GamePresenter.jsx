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
                        <audio src='assets/Meydan-Fae.mp3' autoPlay />
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
