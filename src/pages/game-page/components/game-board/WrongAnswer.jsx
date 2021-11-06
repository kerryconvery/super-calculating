import PageCenter from "./PageCenter";

function WrongAnswer(props) {
    return (
        <PageCenter>
            <div>Oh No!!</div>
            <div>{`The correct answer is ${props.correctAnswer}`}</div>
        </PageCenter>
    )
}

export default WrongAnswer
