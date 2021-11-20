import { styled } from '@mui/material/styles'

const Form = styled('div')({
    'div': {
        marginTop: '1rem'
    }
})

const ButtonGroup = styled('div')({
    display: 'inline',
    'button:first-of-type': {
        marginRight: '1rem'
    },
    '@media (max-width:480px)': {
        'button:first-of-type': {
            marginBottom: '1rem'
        }
    }
})

const AnswerInput = styled('div')({
    marginBottom: '1rem'
})

function AnswerLayout({ answerInput, answerButton, clearButton, errorMessage }) {
    return (
        <Form>
            <AnswerInput>
                {answerInput}
            </AnswerInput>
            <ButtonGroup>
                {answerButton}
                {clearButton}
            </ButtonGroup>
            <div>
                {errorMessage}
            </div>
        </Form>
    )
}

export default AnswerLayout
