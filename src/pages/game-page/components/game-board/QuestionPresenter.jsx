import {styled} from "@mui/material/styles";
import {TwoDigitQuestion} from "../../../../utils/questionUtils";

const InlineContainer = styled('h3')({
    display: 'inline'
})

function QuestionPresenter({ question }) {
    return (
        <InlineContainer>{`${TwoDigitQuestion.toString(question)} = `}</InlineContainer>
    )
}

export default QuestionPresenter
