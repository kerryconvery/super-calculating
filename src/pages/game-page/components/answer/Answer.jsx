import { useState } from 'react'
import CorrectAnswer from "./CorrectAnswer";
import WrongAnswer from "./WrongAnswer";
import AnswerLayout from "./AnswerLayout";

const AnswerState = {
    NONE: 'none',
    CORRECT: 'correct',
    WRONG: 'wrong',
    isCorrectAnswer: answerState => answerState === AnswerState.CORRECT,
    isWrongAnswer: answerState => answerState === AnswerState.WRONG,
}

function Answer(props) {
    const [userAnswer, setUserAnswer] = useState('')
    const [answerState, setAnswerState] = useState(AnswerState.NONE)
    const [correctAnswer] = useState(props.answer)

    const answerChangeHandler = (event) => {
        setUserAnswer(event.target.value)
    }

    const checkAnswerHandler = () => {
        if (correctAnswer == userAnswer) {
            setAnswerState(AnswerState.CORRECT)
        } else {
            setAnswerState(AnswerState.WRONG)
        }
    }

    return (
        <>
            <AnswerLayout
                answerInput={<input type='number' placeholder='Enter your answer' onChange={answerChangeHandler} />}
                answerButton={<button onClick={checkAnswerHandler}>Check Answer</button>}
            />
            <CorrectAnswer show={AnswerState.isCorrectAnswer(answerState)} />
            <WrongAnswer show={AnswerState.isWrongAnswer(answerState)} />
        </>
    )
}

export default Answer
