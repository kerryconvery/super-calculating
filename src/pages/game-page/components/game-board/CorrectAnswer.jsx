import PageCenter from "./PageCenter";
import NextButton from "./NextButton";

function CorrectAnswer(props) {
    return (
        <>
            <img src='assets/correct.png'></img>
            <div>Correct!!</div>
            <NextButton onNext={props.onNext} />
        </>
    )
}

export default CorrectAnswer
