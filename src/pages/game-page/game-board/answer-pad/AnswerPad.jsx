import { useState } from 'react'
import AnswerPadLayout from "./AnswerPadLayout";
import CheckAnswerButton from "../buttons/CheckAnswerButton";
import ClearButton from "../buttons/ClearButton";
import NumberKeyPad from "../key-pad/NumberKeyPad";
import MissingAnswerError from "../validation-errrors/MissingAnswerError";

export const AnswerState = {
    UNANSWERED: 'unanswered',
    CORRECT: 'correct',
    WRONG: 'wrong'
}

function AnswerPad({ userAnswer, onEnterAnswer, onCheckAnswer, onClearAnswer }) {
    const { checkAnswer, keyPadKeyPressed, hasErrors }  = useAnswerPadController(userAnswer, onEnterAnswer, onCheckAnswer)

    return (
        <AnswerPadLayout
            answerInput={<NumberKeyPad onKeyPressed={keyPadKeyPressed} />}
            answerButton={<CheckAnswerButton onClick={checkAnswer} />}
            clearButton={<ClearButton onClick={onClearAnswer} />}
            errorMessage={<MissingAnswerError show={hasErrors} />}
        />
    )
}

function useAnswerPadController(userAnswer, onEnterAnswer, onCheckAnswer) {
    const [shouldShowValidationErrors, setShouldShowValidationErrors] = useState(false)

    const checkAnswer = () => {
        if (userAnswer === '') {
            setShouldShowValidationErrors(true)
            return
        }

        onCheckAnswer()
    }

    const keyPadKeyPressed = (key) => {
        if (shouldShowValidationErrors) {
            setShouldShowValidationErrors(false)
        }

        onEnterAnswer(userAnswer + key)
    }

    return {
        checkAnswer,
        keyPadKeyPressed,
        hasErrors: shouldShowValidationErrors
    }
}

export default AnswerPad
