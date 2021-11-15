import {TwoDigitQuestion} from "../../../../utils/questionUtils";

function Question({ question }) {
    return (
        <div data-testid='question'>{`${TwoDigitQuestion.toString(question)} = `}</div>
    )
}

export default Question
