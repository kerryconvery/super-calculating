import Answer, { AnswerState } from "./answer/Answer";
import Question from "./Question";
import { TwoDigitQuestion} from "../../../../utils/questionUtils";
import {useEffect, useState} from "react";
import NextQuestionOrEndGame from "./buttons/NextQuestionOfEndGame";
import CorrectOrWrongAnswer from "./correct-or-wrong-answer/CorrectOrWrongAnswer";

function GameBoard({ hasMoreQuestions, onAskNextQuestion, onQuestionAnswered, onEndGame }) {
    const { nextQuestion, askNextQuestion } = useNextQuestion(onAskNextQuestion)
    const [ answerState, setAnswerState ] = useState(AnswerState.NONE)

    const handleNextQuestion = () => {
        setAnswerState(AnswerState.NONE)
        askNextQuestion()
    }

    const handleQuestionAnswered = (userAnswer, answerState) => {
        onQuestionAnswered(nextQuestion, userAnswer, answerState)
        setAnswerState(answerState)
    }

    switch (answerState) {
        case AnswerState.NONE: {
            return (
                <>
                    <Question question={nextQuestion} />
                    <Answer answer={nextQuestion.answer} onQuestionAnswered={handleQuestionAnswered}  />
                </>
            )
        }
        case AnswerState.CORRECT:
        case AnswerState.WRONG: {
            return  (
                <>
                    <CorrectOrWrongAnswer answerState={answerState} correctAnswer={nextQuestion.answer} />
                    <NextQuestionOrEndGame
                        hasMoreQuestions={hasMoreQuestions}
                        onNextQuestion={handleNextQuestion}
                        onEndGame={onEndGame}
                    />
                </>
            )
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
