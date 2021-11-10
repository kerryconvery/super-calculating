import {useEffect, useRef, useState} from 'react'
import IntervalButton from './components/IntervalButton'
import Question from './components/game-board/Question'
import { generateQuestion } from '../../utils/questionUtils'
import GameBoard from "./components/game-board/GameBoard";
import PageCenter from "./components/game-board/PageCenter";

const GameState = {
    stopped: 'stopped',
    starting: 'starting',
    started: 'started',
    gameStarting: (gameState) => gameState === GameState.starting,
    gameStarted: (gameState) => gameState === GameState.started
}

const startupSteps = ['Start', '3', '2', '1', 'GO!']

function GamePage() {
    const [gameState, setGametState] = useState(GameState.stopped)
    const unmountRef = useRef(false)

    useEffect(() => {
        return () => {
            unmountRef.current = true
        }
    }, [])

    const renderCountDownButton = () => (
        <IntervalButton
            start={GameState.gameStarting(gameState)}
            text={startupSteps}
            onClick={startingGame}
            onCountDownCompleted={startGame}
        />
    )

    const startingGame = () =>  setGametState(GameState.starting)
    const startGame = () => {
        if (!unmountRef.current) {
            setGametState(GameState.started)
        }
    }

    const renderQuestion = () => {
        return <GameBoard onAskNextQuestion={generateQuestion} />
    }

    const getPageContent = () => {
        switch (gameState) {
            case GameState.stopped:
            case GameState.starting:
                return renderCountDownButton()
            case GameState.started:
                return renderQuestion()
            default:
                throw new Error(`Unknown game state ${gameState}`)
        }
    }

    return (
        <PageCenter>
            {getPageContent()}
        </PageCenter>
    )
}

export default GamePage
