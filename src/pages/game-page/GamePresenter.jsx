import PageCenter from "./game-board/PageCenter";
import { GameState } from "./game-controller/types";

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
