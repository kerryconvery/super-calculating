import {useEffect, useRef, useState} from 'react'
import { generateQuestion } from '../../../question-genertor/questionGenerator'
import useGameStatisticsCollector from "../game-staticstics/useGameStatisticsCollector";
import useStopWatchTimer from "../timers/useStopWatchTimer";
import useAnswerRecorder from "../game-staticstics/useAnswerRecorder";
import { GameState } from "./types";

function gameController(numberOfQuestions) {
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

    const askNextQuestion = () => {
        resumeTimer()
        onAskQuestion()
        return generateQuestion()
    }

    const questionAnswered = (question, userAnswer, answerState) => {
        pauseTimer()
        recordAnswer(question, userAnswer, answerState)
        onQuestionAnswered(answerState)
    }

    return {
        gameState,
        elapsedSeconds,
        gameStatistics,
        answerHistory,
        hasMoreQuestions: gameStatistics.numberOfQuestionsRemaining > 0,
        numberOfQuestionsAsked: gameStatistics.numberOfQuestionsAsked,
        numberOfQuestionsAnsweredCorrectly: gameStatistics.numberOfQuestionsAnsweredCorrectly,
        numberOfQuestionsAnsweredIncorrectly: gameStatistics.numberOfQuestionsAnsweredIncorrectly,
        startGame,
        endGame,
        askNextQuestion,
        questionAnswered,
    }
}

export default gameController
