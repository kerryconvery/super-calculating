import {useState} from "react";

const useAnswerRecorder = () => {
    const [ answerHistory, setAnswerHistory ] = useState([])

    const recordAnswer = (question, userAnswer, answerState) => {
        const updatedHistory = [
            ...answerHistory,
            {
                question,
                userAnswer,
                answerState
            }
        ]

        setAnswerHistory(updatedHistory)
    }

    return {
        answerHistory,
        recordAnswer
    }
}

export default useAnswerRecorder
