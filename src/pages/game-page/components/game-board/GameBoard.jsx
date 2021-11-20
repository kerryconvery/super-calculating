import AnswerPad, { AnswerState } from "./answer/AnswerPad";
import Question from "./Question";
import { TwoDigitQuestion} from "../../../../utils/questionUtils";
import {useEffect, useState} from "react";
import NextQuestionOrEndGame from "./buttons/NextQuestionOfEndGame";
import CorrectOrWrongAnswer from "./correct-or-wrong-answer/CorrectOrWrongAnswer";
import AnswerBox from "./answer/AnswerBox";

function GameBoard({ hasMoreQuestions, onAskNextQuestion, onQuestionAnswered, onEndGame }) {
    const { nextQuestion, askNextQuestion } = useNextQuestion(onAskNextQuestion)
    const [ userAnswer, setUserAnswer ] = useState('')
    const [ answerState, setAnswerState ] = useState(AnswerState.NONE)

    const handleNextQuestion = () => {
        clearUserAnswer()
        resetAnswerState()
        askNextQuestion()
    }

    const handleClearAnswer = () => {
        clearUserAnswer()
    }

    const clearUserAnswer = () => {
        setUserAnswer('')
    }

    const resetAnswerState = () => {
        setAnswerState(AnswerState.NONE)
    }

    const handleQuestionAnswered = (userAnswer, answerState) => {
        onQuestionAnswered(nextQuestion, userAnswer, answerState)
        setAnswerState(answerState)
    }

    const handlerEnterAnswer = (answer) => {
        setUserAnswer(answer)
    }

    switch (answerState) {
        case AnswerState.NONE: {
            return (
                <>
                    <Question question={nextQuestion} />
                    <AnswerBox answer={userAnswer} />
                    <AnswerPad
                        actualAnswer={nextQuestion.answer}
                        userAnswer={userAnswer}
                        onEnterAnswer={handlerEnterAnswer}
                        onQuestionAnswered={handleQuestionAnswered}
                        onClearAnswer={handleClearAnswer}
                    />
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
