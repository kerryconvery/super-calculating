import { useState } from "react";

function useQuestionCountTimer(maximumNumberOfQuestions, onTimerExpired) {
    const [ countOfQuestions, setCountOfQuestions ] = useState(0)

    const onAskQuestion = () => {
        if (hasReachedMaximumNumberOfQuestions()) {
            onTimerExpired()
        } else {
            incrementCountOfQuestions()
        }
    }

    const hasReachedMaximumNumberOfQuestions = () => {
        return countOfQuestions >= maximumNumberOfQuestions
    }

    const incrementCountOfQuestions = () => {
        setCountOfQuestions(countOfQuestions + 1)
    }

    return {
        onAskQuestion
    }
}

export default useQuestionCountTimer
