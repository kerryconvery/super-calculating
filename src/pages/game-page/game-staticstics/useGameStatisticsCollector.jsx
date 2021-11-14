import { useState } from 'react'

function useGameStatisticsCollector(numberOfQuestions) {
    const [ gameStatistics, setGameStatistics ] = useState({
        totalNumberOfQuestions: numberOfQuestions,
        numberOfQuestionsAsked: 0,
        numberOfQuestionsRemaining: numberOfQuestions
    })

    const onAskQuestion = () => {
        setGameStatistics({
            ...gameStatistics,
            numberOfQuestionsAsked: incrementNumberOfQuestionsAsked(),
        })
    }

    const incrementNumberOfQuestionsAsked = () => {
        return gameStatistics.numberOfQuestionsAsked + 1
    }

    const onQuestionAnswered = () => {
        setGameStatistics({
            ...gameStatistics,
            numberOfQuestionsRemaining: decrementQuestionsRemaining(),
        })
    }

    const decrementQuestionsRemaining = () => {
        return gameStatistics.numberOfQuestionsRemaining -1
    }

    return {
        gameStatistics,
        onAskQuestion,
        onQuestionAnswered
    }
}

export default useGameStatisticsCollector
