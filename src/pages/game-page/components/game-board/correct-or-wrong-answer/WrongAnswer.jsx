function WrongAnswer({ correctAnswer }) {
    return (
        <>
            <img src='assets/oh-no.png'></img>
            <div>Oh No!!</div>
            <div>{`The correct answer is ${correctAnswer}`}</div>
        </>
    )
}

export default WrongAnswer
