import {TwoDigitQuestion} from "../../../../utils/questionUtils";

function Question(props) {
    return (
        <div data-testid='question'>{`${TwoDigitQuestion.toString(props.question)} = `}</div>
    )
}

export default Question
