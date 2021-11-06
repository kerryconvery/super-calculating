import { useState } from 'react'

function Question(props) {
    const [question] = useState(props.onNextQuestion())

    return (
        <>
            <div data-testid='question'>{`${question.components.join(' + ')} = `}</div>
            {props.children(question.answer)}
        </>
    )
}

export default Question
