import PageCenter from "./PageCenter";
import NextButton from "./NextButton";

function CorrectAnswer(props) {
    return (
        <PageCenter>
            <div>Correct!!</div>
            <NextButton onNext={props.onNext} />
        </PageCenter>
    )
}

export default CorrectAnswer
