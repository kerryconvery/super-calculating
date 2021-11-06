import { useState } from 'react'
import AnswerLayout from "./AnswerLayout";

export const AnswerState = {
    NONE: 'none',
    CORRECT: 'correct',
    WRONG: 'wrong'
}

function Answer(props) {
    const [userAnswer, setUserAnswer] = useState('')
    const [correctAnswer] = useState(props.answer)

    const answerChangeHandler = (event) => {
        setUserAnswer(event.target.value)
    }

    const checkAnswerHandler = () => {
        if (correctAnswer == userAnswer) {
            props.onUpdateAnswerState(AnswerState.CORRECT)
        } else {
            props.onUpdateAnswerState(AnswerState.WRONG)
        }
    }

    return (
        <>
            <AnswerLayout
                answerInput={<input type='number' placeholder='Enter your answer' onChange={answerChangeHandler} />}
                answerButton={<button onClick={checkAnswerHandler}>Check Answer</button>}
            />
        </>
    )
}

export default Answer
