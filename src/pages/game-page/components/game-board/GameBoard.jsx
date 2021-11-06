import Answer, { AnswerState } from "./answer/Answer";
import Question from "./Question";
import { generateQuestion } from "../../../../utils/questionUtils";
import { useState } from "react";
import CorrectAnswer from "./CorrectAnswer";
import WrongAnswer from "./WrongAnswer";

function GameBoard() {
    const [answerState, setAnswerState] = useState(AnswerState.NONE)

    return AnswerStateJsxMap[answerState](setAnswerState)
}

const AnswerStateJsxMap = {
    [AnswerState.NONE]: (onUpdateAnswerState) => (
        <Question onNextQuestion={generateQuestion}>
            {answer => <Answer answer={answer} onUpdateAnswerState={onUpdateAnswerState}  />}
        </Question>
    ),
    [AnswerState.CORRECT]: () => (
        <CorrectAnswer />
    ),
    [AnswerState.WRONG]: () => (
        <WrongAnswer />
    )
}

export default GameBoard
