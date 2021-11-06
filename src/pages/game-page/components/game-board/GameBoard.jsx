import Answer, { AnswerState } from "./answer/Answer";
import Question from "./Question";
import { TwoDigitQuestion} from "../../../../utils/questionUtils";
import {useEffect, useState} from "react";
import CorrectAnswer from "./CorrectAnswer";
import WrongAnswer from "./WrongAnswer";

function GameBoard(props) {
    const { nextQuestion, askNextQuestion } = useNextQuestion(props.onAskNextQuestion)
    const [answerState, setAnswerState] = useState(AnswerState.NONE)

    const handleNextQuestion = () => {
        setAnswerState(AnswerState.NONE)
        askNextQuestion()
    }

    switch (answerState) {
        case AnswerState.NONE: {
            return (
                <>
                    <Question question={nextQuestion} />
                    <Answer answer={nextQuestion.answer} onUpdateAnswerState={setAnswerState}  />
                </>
            )
        }
        case AnswerState.CORRECT: {
            return <CorrectAnswer onNext={handleNextQuestion} />
        }
        case AnswerState.WRONG: {
            return <WrongAnswer correctAnswer={nextQuestion.answer} onNext={handleNextQuestion} />
        }
        default: {
            throw new Error(`Unsupported answer state ${answerState}`)
        }
    }
}

function useNextQuestion(generateQuestion) {
    const [ nextQuestion, setNextQuestion ] = useState(TwoDigitQuestion.empty())
    const askNextQuestion = () => setNextQuestion(generateQuestion())

    useEffect(() => {
        askNextQuestion()
    }, [])

    return {
        nextQuestion,
        askNextQuestion,
    }
}

export default GameBoard
