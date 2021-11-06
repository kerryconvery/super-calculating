function AnswerLayout(props) {
    return (
        <>
            {props.answerInput}
            <div>
                {props.answerButton}
            </div>
            <div>
                {props.errorMessage}
            </div>
        </>
    )
}

export default AnswerLayout
