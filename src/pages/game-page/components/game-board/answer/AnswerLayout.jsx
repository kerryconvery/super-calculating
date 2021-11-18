import styled from '@mui/material/styles/styled'

const Form = styled('div')({
    'div': {
        marginTop: '1rem'
    }
})

function AnswerLayout(props) {
    return (
        <Form>
            {props.answerInput}
            <div>
                {props.answerButton}
            </div>
            <div>
                {props.errorMessage}
            </div>
        </Form>
    )
}

export default AnswerLayout
