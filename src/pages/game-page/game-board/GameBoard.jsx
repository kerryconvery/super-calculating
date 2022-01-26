import AnswerPad, { AnswerState } from "./answer-pad/AnswerPad";
import QuestionPresenter from "./QuestionPresenter";
import React, {useEffect, useState} from "react";
import NextQuestionOrEndGame from "./buttons/NextQuestionOfEndGame";
import CorrectOrWrongAnswer from "./correct-or-wrong-answer/CorrectOrWrongAnswer";
import AnswerBox from "./AnswerBox";
import Question from "../../../question-genertor/Question";

function GameBoard({ hasMoreQuestions, onAskNextQuestion, onQuestionAnswered, onEndGame }) {
    const { nextQuestion, askNextQuestion } = useNextQuestion(onAskNextQuestion)
    const { userAnswer, clearUserAnswer, updateUserAnswer } = useUserAnswer()
    const { answerState, checkAnswer, resetAnswerState } = useAnswerChecker(nextQuestion, userAnswer, onQuestionAnswered)

    const handleNextQuestion = () => {
        clearUserAnswer()
        resetAnswerState()
        askNextQuestion()
    }

    const submitUserAnswer = () => {
        checkAnswer()
    }

    if(answerState === AnswerState.UNANSWERED) {
        return (
            <>
                <QuestionPresenter question={nextQuestion} />
                <AnswerBox answer={userAnswer} />
                <AnswerPad
                    userAnswer={userAnswer}
                    onEnterAnswer={updateUserAnswer}
                    onCheckAnswer={submitUserAnswer}
                    onClearAnswer={clearUserAnswer}
                />
            </>
        )
    } else {
        return (
            <>
                <CorrectOrWrongAnswer answerState={answerState} correctAnswer={nextQuestion.answer}/>
                <NextQuestionOrEndGame
                    hasMoreQuestions={hasMoreQuestions}
                    onNextQuestion={handleNextQuestion}
                    onEndGame={onEndGame}
                />
            </>
        )
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

function useUserAnswer() {
    const [ userAnswer, setUserAnswer ] = useState('')

    const clearUserAnswer = () => {
        setUserAnswer('')
    }

    const updateUserAnswer = (answer) => {
        setUserAnswer(answer)
    }

    return {
        userAnswer,
        clearUserAnswer,
        updateUserAnswer,
    }
}

function useAnswerChecker(nextQuestion, userAnswer, onQuestionAnswered) {
    const [ answerState, setAnswerState ] = useState(AnswerState.UNANSWERED)

    const resetAnswerState = () => {
        setAnswerState(AnswerState.UNANSWERED)
    }

    const checkAnswer = () => {
        let newAnswerState = nextQuestion.answer === parseInt(userAnswer) ? AnswerState.CORRECT : AnswerState.WRONG

        setAnswerState(newAnswerState)
        onQuestionAnswered(nextQuestion, userAnswer, newAnswerState)
    }

    return {
        answerState,
        resetAnswerState,
        checkAnswer
    }
}

export default GameBoard
