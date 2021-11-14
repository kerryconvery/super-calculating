import {useEffect, useRef, useState} from 'react'
import IntervalButton from './components/IntervalButton'
import { generateQuestion } from '../../utils/questionUtils'
import GameBoard from "./components/game-board/GameBoard";
import GamePresenter, {GameState} from "./GamePresenter";
import ScoreBoard from "./components/ScoreBoard";
import InGameStatistics from "./components/InGameStatistics";
import useGameStatisticsCollector from "./game-staticstics/useGameStatisticsCollector";

const startupSteps = ['Start', '3', '2', '1', 'GO!']

function GameController({ numberOfQuestions }) {
    const [gameState, setGametState] = useState(GameState.stopped)
    const { gameStatistics, onAskQuestion, onQuestionAnswered } = useGameStatisticsCollector(numberOfQuestions)
    const unmountRef = useRef(false)

    useEffect(() => {
        return () => {
            markAsUnmounted()
        }
    }, [])

    const startGame = () => {
        if (componentIsMounted()) {
            setGametState(GameState.started)
        }
    }

    const endGame = () => {
        setGametState(GameState.completed)
    }

    const componentIsMounted = () => {
        return unmountRef.current === false
    }

    const markAsUnmounted = () => {
        unmountRef.current = true
    }

    const handleAskNextQuestion = () => {
        onAskQuestion()
        return generateQuestion()
    }

    return (
        <>
            <GamePresenter
                gameState={gameState}
                inGameStats={
                    <InGameStatistics
                        questionNumber={gameStatistics.numberOfQuestionsAsked}
                        totalNumberOfQuestions={numberOfQuestions}
                    />
                }
                startButton={<IntervalButton text={startupSteps} onCountDownCompleted={startGame} />}
                gameBoard={
                    <GameBoard
                        hasMoreQuestions={gameStatistics.numberOfQuestionsRemaining > 0}
                        onAskNextQuestion={handleAskNextQuestion}
                        onQuestionAnswered={onQuestionAnswered}
                        onEndGame={endGame}
                    />
                }
                scoreBoard={<ScoreBoard />}
            />
        </>
    )
}

export default GameController
