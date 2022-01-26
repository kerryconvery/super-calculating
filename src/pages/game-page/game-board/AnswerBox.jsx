import React from 'react';
import { styled } from '@mui/material/styles'

const InlineContainer = styled('h3')({
    display: 'inline'
})

function AnswerBox({ answer }) {
    return (
        <InlineContainer>
            {answer}
        </InlineContainer>
    )
}

export default AnswerBox
