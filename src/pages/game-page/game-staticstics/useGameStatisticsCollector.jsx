import {useEffect, useState} from 'react'
import {AnswerState} from "../game-board/answer-pad/AnswerPad";

function useGameStatisticsCollector(numberOfQuestions) {
    const [ gameStatistics, setGameStatistics ] = useState({
        totalNumberOfQuestions: numberOfQuestions,
        numberOfQuestionsAsked: 0,
        numberOfQuestionsRemaining: numberOfQuestions,
        numberOfQuestionsAnsweredCorrectly: 0,
        numberOfQuestionsAnsweredIncorrectly: 0,
    })

    useEffect(() => {
        setNumberOfQuestions(numberOfQuestions)
    }, [numberOfQuestions])

    const setNumberOfQuestions = (newNumberOfQuestions) => {
        setGameStatistics({
            ...gameStatistics,
            totalNumberOfQuestions: newNumberOfQuestions,
            numberOfQuestionsRemaining: newNumberOfQuestions,
        })
    }

    const onAskQuestion = () => {
        setGameStatistics({
            ...gameStatistics,
            numberOfQuestionsAsked: incrementNumberOfQuestionsAsked(),
        })
    }

    const incrementNumberOfQuestionsAsked = () => {
        return gameStatistics.numberOfQuestionsAsked + 1
    }

    const onQuestionAnswered = (answerState) => {
        setGameStatistics({
            ...gameStatistics,
            numberOfQuestionsRemaining: decrementQuestionsRemaining(),
            numberOfQuestionsAnsweredCorrectly: incrementNumberOfQuestionsAnsweredCorrectly(answerState),
            numberOfQuestionsAnsweredIncorrectly: incrementNumberOfQuestionsAnsweredIncorrectly(answerState)
        })
    }

    const decrementQuestionsRemaining = () => {
        return gameStatistics.numberOfQuestionsRemaining -1
    }

    const incrementNumberOfQuestionsAnsweredCorrectly = (answerState) => {
        if (answerState === AnswerState.CORRECT) {
            return gameStatistics.numberOfQuestionsAnsweredCorrectly + 1
        }

        return gameStatistics.numberOfQuestionsAnsweredCorrectly
    }

    const incrementNumberOfQuestionsAnsweredIncorrectly = (answerState) => {
        if (answerState === AnswerState.WRONG) {
            return gameStatistics.numberOfQuestionsAnsweredIncorrectly + 1
        }
        return gameStatistics.numberOfQuestionsAnsweredIncorrectly
    }

    return {
        gameStatistics,
        onAskQuestion,
        onQuestionAnswered
    }
}

export default useGameStatisticsCollector
