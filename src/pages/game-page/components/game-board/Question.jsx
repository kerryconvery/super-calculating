function Question(props) {
    return (
        <div data-testid='question'>{`${props.question.join(' + ')} = `}</div>
    )
}

export default Question
