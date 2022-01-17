import {useState} from "react";
import IntervalButton from './IntervalButton'
import GameBoard from "./game-board/GameBoard";
import GamePresenter from "./GamePresenter";
import ResultsBoard from "./ResultsBoard";
import InGameStatistics from "./game-staticstics/InGameStatistics";
import GameController from './game-controller/GameController';
import QuestionCountSelector from "./question-count-selector/QuestionCountSelector";

function GamePage({ defaultNumberOfQuestions, startupCountDown }) {
    const [numberOfQuestions, setNumberOfQuestions] = useState(defaultNumberOfQuestions)
    const [gameStarting, setGameStarting] = useState(false)

    return (
        <GameController numberOfQuestions={numberOfQuestions}>
            {props => (
                <GamePresenter
                    questionSelector={
                        <QuestionCountSelector
                            hide={gameStarting}
                            defaultNumberOfQuestions={defaultNumberOfQuestions}
                            onChange={setNumberOfQuestions}
                        />
                    }
                    gameState={props.gameState}
                    inGameStats={
                        <InGameStatistics
                            elapsedSeconds={props.elapsedSeconds}
                            questionNumber={props.numberOfQuestionsAsked}
                            totalNumberOfQuestions={numberOfQuestions}
                        />
                    }
                    startButton={
                        <IntervalButton
                            text={startupCountDown}
                            onCountDownStarted={() => setGameStarting(true)}
                            onCountDownCompleted={props.onStartGame}
                        />
                    }
                    gameBoard={
                        <GameBoard
                            hasMoreQuestions={props.hasMoreQuestions}
                            onAskNextQuestion={props.onAskNextQuestion}
                            onQuestionAnswered={props.onQuestionAnswered}
                            onEndGame={props.onEndGame}
                        />
                    }
                    scoreBoard={
                        <ResultsBoard
                            elapsedTime={props.elapsedSeconds}
                            totalNumberOfQuestions={numberOfQuestions}
                            numberOfQuestionsAnsweredCorrectly={props.numberOfQuestionsAnsweredCorrectly}
                            numberOfQuestionsAnsweredIncorrectly={props.numberOfQuestionsAnsweredIncorrectly}
                            answerHistory={props.answerHistory}
                        />
                    }
                />
            )}
        </GameController>
    )
}

export default GamePage
