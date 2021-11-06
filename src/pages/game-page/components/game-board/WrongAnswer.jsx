import PageCenter from "./PageCenter";
import NextButton from "./NextButton";

function WrongAnswer(props) {
    return (
        <PageCenter>
            <img src='/assets/oh-no.png'></img>
            <div>Oh No!!</div>
            <div>{`The correct answer is ${props.correctAnswer}`}</div>
            <NextButton onNext={props.onNext} />
        </PageCenter>
    )
}

export default WrongAnswer
