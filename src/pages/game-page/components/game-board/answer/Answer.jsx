import { useState } from 'react'
import AnswerLayout from "./AnswerLayout";
import ValidationError from "./ValidationError";

export const AnswerState = {
    NONE: 'none',
    CORRECT: 'correct',
    WRONG: 'wrong'
}

function Answer(props) {
    const [userAnswer, setUserAnswer] = useState('')
    const [shouldShowValidationErrors, setShouldShowValidationErrors] = useState(false)

    const answerChangeHandler = (event) => {
        if (shouldShowValidationErrors) {
            setShouldShowValidationErrors(false)
        }

        setUserAnswer(event.target.value)
    }

    const checkAnswerHandler = () => {
        if (userAnswer === '') {
            setShouldShowValidationErrors(true)
            return
        }

        if (props.answer == userAnswer) {
            props.onQuestionAnswered(userAnswer, AnswerState.CORRECT)
        } else {
            props.onQuestionAnswered(userAnswer, AnswerState.WRONG)
        }
    }

    return (
        <AnswerLayout
            answerInput={<input type='number' placeholder='Enter your answer' onChange={answerChangeHandler} />}
            answerButton={<button onClick={checkAnswerHandler}>Check Answer</button>}
            errorMessage={<ValidationError show={shouldShowValidationErrors}>Please enter an answer first</ValidationError>}
        />
    )
}

export default Answer
