import {useEffect, useRef, useState} from 'react'
import IntervalButton from './components/IntervalButton'
import { generateQuestion } from '../../utils/questionUtils'
import GameBoard from "./components/game-board/GameBoard";
import GamePresenter, {GameState} from "./GamePresenter";
import useQuestionCountTimer from "./timers/questionCountTimer";
import ScoreBoard from "./components/ScoreBoard";

const startupSteps = ['Start', '3', '2', '1', 'GO!']

function GameController({ numberOfQuestions }) {
    const [gameState, setGametState] = useState(GameState.stopped)
    const { onAskQuestion } = useQuestionCountTimer(numberOfQuestions, () => setGametState(GameState.completed))
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

    const componentIsMounted = () => {
        return unmountRef.current === false
    }

    const markAsUnmounted = () => {
        unmountRef.current = true
    }

    const generateNextQuestion = () => {
        onAskQuestion()
        return generateQuestion()
    }
    return (
        <GamePresenter
            gameState={gameState}
            startButton={<IntervalButton text={startupSteps} onCountDownCompleted={startGame} />}
            gameBoard={<GameBoard onAskNextQuestion={generateNextQuestion} />}
            scoreBoard={<ScoreBoard />}
        />
    )
}

export default GameController
