import { useState } from 'react'
import CorrectAnswer from "./CorrectAnswer";
import WrongAnswer from "./WrongAnswer";
import { getAnswer } from '../../utils/questionUtils'


const AnswerState = {
    NONE: 'none',
    CORRECT: 'correct',
    WRONG: 'wrong',
    isCorrectAnswer: answerState => answerState === AnswerState.CORRECT,
    isWrongAnswer: answerState => answerState === AnswerState.WRONG,
}

function Question(props) {
    const [userAnswer, setUserAnswer] = useState('')
    const [answerState, setAnswerState] = useState(AnswerState.NONE)
    const [question] = useState(props.onNextQuestion)

    const answerChangeHandler = (event) => {
        setUserAnswer(event.target.value)
    }

    const checkAnswerHandler = () => {
        if (getAnswer(question) == userAnswer) {
            setAnswerState(AnswerState.CORRECT)
        } else {
            setAnswerState(AnswerState.WRONG)
        }
    }

    return (
        <>
            <div>{`${question.join(' + ')} = `}</div>
            <label htmlFor='answer-input'>Enter your answer</label>
            <input id='answer-input' type='number' onChange={answerChangeHandler} />
            <button onClick={checkAnswerHandler}>Check Answer</button>
            <CorrectAnswer show={AnswerState.isCorrectAnswer(answerState)} />
            <WrongAnswer show={AnswerState.isWrongAnswer(answerState)} />
        </>
    )
}

export default Question
