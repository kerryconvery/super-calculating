import Answer, { AnswerState } from "./answer/Answer";
import Question from "./Question";
import { generateQuestion } from "../../../../utils/questionUtils";
import { useState } from "react";
import CorrectAnswer from "./CorrectAnswer";
import WrongAnswer from "./WrongAnswer";

function GameBoard() {
    const [ nextQuestion ] = useState(generateQuestion())
    const [answerState, setAnswerState] = useState(AnswerState.NONE)

    switch (answerState) {
        case AnswerState.NONE: {
            return (
                <>
                    <Question question={nextQuestion.components} />
                    <Answer answer={nextQuestion.answer} onUpdateAnswerState={setAnswerState}  />
                </>
            )
        }
        case AnswerState.CORRECT: {
            return <CorrectAnswer />
        }
        case AnswerState.WRONG: {
            return <WrongAnswer correctAnswer={nextQuestion.answer} />
        }
        default: {
            throw new Error(`Unsupported answer state ${answerState}`)
        }
    }
}

export default GameBoard
