import {useState} from "react";
import GameBoard from "./game-board/GameBoard";
import GamePresenter from "./GamePresenter";
import ResultsBoard from "./ResultsBoard";
import InGameStatistics from "./game-staticstics/InGameStatistics";
import useGameController from "./game-controller/GameController";
import GameStarter from "./game-starter/GameStarter";

function GamePage({ defaultNumberOfQuestions, startupCountDown }) {
    const [numberOfQuestions, setNumberOfQuestions] = useState(defaultNumberOfQuestions)
    const gameController = useGameController(numberOfQuestions)

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
                    elapsedTime={gameController.elapsedSeconds}
                    totalNumberOfQuestions={numberOfQuestions}
                    numberOfQuestionsAnsweredCorrectly={gameController.numberOfQuestionsAnsweredCorrectly}
                    numberOfQuestionsAnsweredIncorrectly={gameController.numberOfQuestionsAnsweredIncorrectly}
                    answerHistory={gameController.answerHistory}
                />
            }
        />
    )
}

export default GamePage
