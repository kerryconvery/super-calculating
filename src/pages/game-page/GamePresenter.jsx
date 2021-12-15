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

const QuestionSelector = styled('div')({
    display: 'inline',
})

const StartButton = styled('div')({
    display: 'inline',
    marginLeft: '1rem'
})

function GamePresenter({ questionSelector, gameState, inGameStats, gameBoard, startButton, scoreBoard }) {
    const gameStateToView = () => {
        switch (gameState) {
            case GameState.stopped:
                return (
                    <VerticalCenter>
                        <QuestionSelector>
                            {questionSelector}
                        </QuestionSelector>
                        <StartButton>
                            {startButton}
                        </StartButton>
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
