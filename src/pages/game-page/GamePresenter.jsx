import PageCenter from "./game-board/PageCenter";

export const GameState = {
    stopped: 'stopped',
    started: 'started',
    completed: 'completed'
}

function GamePresenter({ gameState, inGameStats, gameBoard, startButton, scoreBoard }) {
    const gameStateToView = () => {
        switch (gameState) {
            case GameState.stopped:
                return startButton
            case GameState.started:
                return (
                    <>
                        {inGameStats}
                        {gameBoard}
                    </>
                )
            case GameState.completed:
                return scoreBoard
            default:
                throw new Error(`Unknown game state ${gameState}`)
        }
    }

    return (
        <PageCenter>
            {gameStateToView()}
        </PageCenter>
    )
}

export default GamePresenter
