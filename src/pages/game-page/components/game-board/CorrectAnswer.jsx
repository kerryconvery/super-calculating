import PageCenter from "./PageCenter";
import NextButton from "./NextButton";

function CorrectAnswer(props) {
    return (
        <PageCenter>
            <img src='/assets/correct.png'></img>
            <div>Correct!!</div>
            <NextButton onNext={props.onNext} />
        </PageCenter>
    )
}

export default CorrectAnswer
