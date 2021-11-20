import {styled} from "@mui/material/styles";
import {TwoDigitQuestion} from "../../../../utils/questionUtils";

const InlineContainer = styled('h3')({
    display: 'inline'
})

function Question({ question }) {
    return (
        <InlineContainer data-testid='question'>{`${TwoDigitQuestion.toString(question)} = `}</InlineContainer>
    )
}

export default Question
