import { useState } from 'react'
import Button from '@mui/material/Button'
import AnswerLayout from "./AnswerLayout";
import ValidationError from "./ValidationError";
import KeyPad from "../../key-pad/KeyPad";

export const AnswerState = {
    NONE: 'none',
    CORRECT: 'correct',
    WRONG: 'wrong'
}

function AnswerPad({ actualAnswer, userAnswer, onEnterAnswer, onQuestionAnswered, onClearAnswer }) {
    const [shouldShowValidationErrors, setShouldShowValidationErrors] = useState(false)

    const checkAnswerHandler = () => {
        if (userAnswer === '') {
            setShouldShowValidationErrors(true)
            return
        }

        if (actualAnswer == userAnswer) {
            onQuestionAnswered(userAnswer, AnswerState.CORRECT)
        } else {
            onQuestionAnswered(userAnswer, AnswerState.WRONG)
        }
    }

    const handleKeyPadKeyPress = (key) => {
        if (shouldShowValidationErrors) {
            setShouldShowValidationErrors(false)
        }

        onEnterAnswer(userAnswer + key)
    }

    return (
        <AnswerLayout
            answerInput={<KeyPad keys={['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']} onKeyPressed={handleKeyPadKeyPress} />}
            answerButton={<Button variant='contained' color="success" onClick={checkAnswerHandler}>Check Answer</Button>}
            clearButton={<Button variant='contained' color="secondary" onClick={onClearAnswer}>Clear</Button>}
            errorMessage={<ValidationError show={shouldShowValidationErrors}>Please enter an answer first</ValidationError>}
        />
    )
}

export default AnswerPad
