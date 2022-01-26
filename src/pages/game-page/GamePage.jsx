import React, {useState} from "react";
import GameBoard from "./game-board/GameBoard";
import GamePresenter from "./GamePresenter";
import ResultsBoard from "./ResultsBoard";
import InGameStatistics from "./game-staticstics/InGameStatistics";
import useGameController from "./game-controller/useGameController";
import GameStarter from "./game-starter/GameStarter";
import useGameResultsStore from "./history-store/useGameResultsStore";
import gameStorageService from "./services/gameStorageService";

function GamePage({ defaultNumberOfQuestions, startupCountDown }) {
    const [numberOfQuestions, setNumberOfQuestions] = useState(defaultNumberOfQuestions)
    const gameController = useGameController(numberOfQuestions)
    const lastGameResults = useGameResultsStore(gameStorageService, getGameResults(gameController), gameController.gameState)

    return (
        <GamePresenter
            gameState={
                gameController.gameState
            }
            gameStarter={
                <GameStarter
                    text={startupCountDown}
                    defaultNumberOfQuestions={defaultNumberOfQuestions}
                    onChangeNumberOfQuestions={setNumberOfQuestions}
                    onCountDownCompleted={gameController.startGame}
                />
            }
            inGameStats={
                <InGameStatistics
                    elapsedSeconds={gameController.elapsedSeconds}
                    questionNumber={gameController.numberOfQuestionsAsked}
                    totalNumberOfQuestions={numberOfQuestions}
                />
            }
            gameBoard={
                <GameBoard
                    hasMoreQuestions={gameController.hasMoreQuestions}
                    onAskNextQuestion={gameController.askNextQuestion}
                    onQuestionAnswered={gameController.questionAnswered}
                    onEndGame={gameController.endGame}
                />
            }
            scoreBoard={
                <ResultsBoard
                    gameResults={getGameResults(gameController)}
                    lastGameResults={lastGameResults}
                    answerHistory={gameController.answerHistory}
                />
            }
        />
    )
}

function getGameResults(gameController) {
    return {
        elapsedTime: gameController.elapsedSeconds,
        totalNumberOfQuestions: gameController.totalNumberOfQuestions,
        numberOfQuestionsAnsweredCorrectly: gameController.numberOfQuestionsAnsweredCorrectly,
        numberOfQuestionsAnsweredIncorrectly: gameController.numberOfQuestionsAnsweredIncorrectly
    }
}

export default GamePage
