import AnswerPad, { AnswerState } from "./answer-pad/AnswerPad";
import QuestionPresenter from "./QuestionPresenter";
import {useEffect, useState} from "react";
import NextQuestionOrEndGame from "./buttons/NextQuestionOfEndGame";
import CorrectOrWrongAnswer from "./correct-or-wrong-answer/CorrectOrWrongAnswer";
import AnswerBox from "./AnswerBox";
import Question from "../../../question-genertor/Question";

function GameBoard({ hasMoreQuestions, onAskNextQuestion, onQuestionAnswered, onEndGame }) {
    const { nextQuestion, askNextQuestion } = useNextQuestion(onAskNextQuestion)
    const { userAnswer, answerState, clearUserAnswer, updateUserAnswer, checkAnswer } = useUserAnswer(nextQuestion, onQuestionAnswered)

    const handleNextQuestion = () => {
        clearUserAnswer()
        askNextQuestion()
    }

    switch (answerState) {
        case AnswerState.NONE: {
            return (
                <>
                    <QuestionPresenter question={nextQuestion} />
                    <AnswerBox answer={userAnswer} />
                    <AnswerPad
                        userAnswer={userAnswer}
                        onEnterAnswer={updateUserAnswer}
                        onCheckAnswer={checkAnswer}
                        onClearAnswer={clearUserAnswer}
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
    const [ nextQuestion, setNextQuestion ] = useState(Question.empty())
    const askNextQuestion = () => setNextQuestion(generateQuestion())

    useEffect(() => {
        askNextQuestion()
    }, [])

    return {
        nextQuestion,
        askNextQuestion,
    }
}

function useUserAnswer(nextQuestion, onQuestionAnswered) {
    const [ userAnswer, setUserAnswer ] = useState('')
    const [ answerState, setAnswerState ] = useState(AnswerState.NONE)

    const clearUserAnswer = () => {
        setUserAnswer('')
        setAnswerState(AnswerState.NONE)
    }

    const updateUserAnswer = (answer) => {
        setUserAnswer(answer)
    }

    const checkAnswer = () => {
        let newAnswerState = nextQuestion.answer === parseInt(userAnswer) ? AnswerState.CORRECT : AnswerState.WRONG

        onQuestionAnswered(nextQuestion, userAnswer, newAnswerState)
        setAnswerState(newAnswerState)
    }

    return {
        userAnswer,
        answerState,
        clearUserAnswer,
        updateUserAnswer,
        checkAnswer
    }
}

export default GameBoard
