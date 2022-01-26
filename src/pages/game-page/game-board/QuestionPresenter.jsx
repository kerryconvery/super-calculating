import React from 'react';
import {styled} from "@mui/material/styles";

const InlineContainer = styled('h3')({
    display: 'inline'
})

function QuestionPresenter({ question }) {
    return (
        <InlineContainer>{`${question.value} = `}</InlineContainer>
    )
}

export default QuestionPresenter
