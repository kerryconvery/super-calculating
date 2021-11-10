import PageCenter from "./PageCenter";
import NextButton from "./NextButton";

function WrongAnswer(props) {
    return (
        <>
            <img src='assets/oh-no.png'></img>
            <div>Oh No!!</div>
            <div>{`The correct answer is ${props.correctAnswer}`}</div>
            <NextButton onNext={props.onNext} />
        </>
    )
}

export default WrongAnswer
