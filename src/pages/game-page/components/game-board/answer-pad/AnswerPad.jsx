import { useState } from 'react'
import AnswerPadLayout from "./AnswerPadLayout";
import CheckAnswerButton from "../buttons/CheckAnswerButton";
import ClearButton from "../buttons/ClearButton";
import NumberKeyPad from "../key-pad/NumberKeyPad";
import MissingAnswerError from "../validation-errrors/MissingAnswerError";

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

        if (actualAnswer === parseInt(userAnswer)) {
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
        <AnswerPadLayout
            answerInput={<NumberKeyPad onKeyPressed={handleKeyPadKeyPress} />}
            answerButton={<CheckAnswerButton onClick={checkAnswerHandler} />}
            clearButton={<ClearButton onClick={onClearAnswer} />}
            errorMessage={<MissingAnswerError show={shouldShowValidationErrors} />}
        />
    )
}

export default AnswerPad
