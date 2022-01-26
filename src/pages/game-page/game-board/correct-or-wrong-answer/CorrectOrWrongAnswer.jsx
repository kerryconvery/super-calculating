import React from 'react';
import {AnswerState} from "../answer-pad/AnswerPad";
import CorrectAnswer from "./CorrectAnswer";
import WrongAnswer from "./WrongAnswer";

function CorrectOrWrongAnswer({ answerState, correctAnswer }) {
    if (answerState === AnswerState.CORRECT) {
        return <CorrectAnswer />
    }

    if (answerState === AnswerState.WRONG) {
        return <WrongAnswer correctAnswer={correctAnswer} />
    }

    return <></>
}

export default CorrectOrWrongAnswer
