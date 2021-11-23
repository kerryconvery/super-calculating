import {useEffect, useRef, useState} from 'react'
import IntervalButton from '../IntervalButton'
import { generateQuestion } from '../../../utils/questionUtils'
import GameBoard from "../game-board/GameBoard";
import GamePresenter, {GameState} from "../GamePresenter";
import ScoreBoard from "../ScoreBoard";
import InGameStatistics from "../game-staticstics/InGameStatistics";
import useGameStatisticsCollector from "../game-staticstics/useGameStatisticsCollector";
import useStopWatchTimer from "../timers/useStopWatchTimer";
import useAnswerRecorder from "../game-staticstics/useAnswerRecorder";

function GameController({ numberOfQuestions, startupCountDown }) {
    const { elapsedSeconds, resumeTimer, pauseTimer } = useStopWatchTimer()
    const [ gameState, setGameState ] = useState(GameState.stopped)
    const { gameStatistics, onAskQuestion, onQuestionAnswered } = useGameStatisticsCollector(numberOfQuestions)
    const { recordAnswer, answerHistory } = useAnswerRecorder()
    const unmountRef = useRef(false)

    useEffect(() => {
        return () => {
            markAsUnmounted()
        }
    }, [])

    const startGame = () => {
        if (componentIsMounted()) {
            setGameState(GameState.started)
            resumeTimer()
        }
    }

    const endGame = () => {
        setGameState(GameState.completed)
    }

    const componentIsMounted = () => {
        return unmountRef.current === false
    }

    const markAsUnmounted = () => {
        unmountRef.current = true
    }

    const handleAskNextQuestion = () => {
        resumeTimer()
        onAskQuestion()
        return generateQuestion()
    }

    const handleQuestionAnswered = (question, userAnswer, answerState) => {
        pauseTimer()
        recordAnswer(question, userAnswer, answerState)
        onQuestionAnswered(answerState)
    }

    return (
        <>
            <GamePresenter
                gameState={gameState}
                inGameStats={
                    <InGameStatistics
                        elapsedSeconds={elapsedSeconds}
                        questionNumber={gameStatistics.numberOfQuestionsAsked}
                        totalNumberOfQuestions={numberOfQuestions}
                    />
                }
                startButton={<IntervalButton text={startupCountDown} onCountDownCompleted={startGame} />}
                gameBoard={
                    <GameBoard
                        hasMoreQuestions={gameStatistics.numberOfQuestionsRemaining > 0}
                        onAskNextQuestion={handleAskNextQuestion}
                        onQuestionAnswered={handleQuestionAnswered}
                        onEndGame={endGame}
                    />
                }
                scoreBoard={
                    <ScoreBoard
                        elapsedTime={elapsedSeconds}
                        totalNumberOfQuestions={numberOfQuestions}
                        numberOfQuestionsAnsweredCorrectly={gameStatistics.numberOfQuestionsAnsweredCorrectly}
                        numberOfQuestionsAnsweredIncorrectly={gameStatistics.numberOfQuestionsAnsweredIncorrectly}
                        answerHistory={answerHistory}
                    />
                }
            />
        </>
    )
}

export default GameController
