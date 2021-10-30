import { useState } from 'react'
import CorrectAnswer from "./CorrectAnswer";
import WrongAnswer from "./WrongAnswer";


const AnswerState = {
    NONE: 'none',
    CORRECT: 'correct',
    WRONG: 'wrong',
    isCorrectAnswer: answerState => answerState === AnswerState.CORRECT,
    isWrongAnswer: answerState => answerState === AnswerState.WRONG,
}

function Question() {
    const [answer, setAnswer] = useState('')
    const [answerState, setAnswerState] = useState(AnswerState.NONE)

    const answerChangeHandler = (event) => {
        setAnswer(event.target.value)
    }

    const checkAnswerHandler = () => {
        if (answer === '5') {
            setAnswerState(AnswerState.CORRECT)
        } else {
            setAnswerState(AnswerState.WRONG)
        }
    }

    return (
        <>
            <div>2 + 3 =</div>
            <label htmlFor='answer-input'>Enter your answer</label>
            <input id='answer-input' type='number' onChange={answerChangeHandler} />
            <button onClick={checkAnswerHandler}>Check Answer</button>
            <CorrectAnswer show={AnswerState.isCorrectAnswer(answerState)} />
            <WrongAnswer show={AnswerState.isWrongAnswer(answerState)} />
        </>
    )
}

export default Question
