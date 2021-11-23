import { styled } from '@mui/material/styles'
import {formatElapsedSeconds} from "../../../utils/timeUtils";

const Container = styled('div')({
    paddingBottom: '1rem'
})

const Heading = styled('h3')({
    margin: 0,
    whiteSpace: 'nowrap'
})

function InGameStatistics({ elapsedSeconds, questionNumber, totalNumberOfQuestions }) {
    return (
        <Container>
            <Heading>{`Elapsed time: ${formatElapsedSeconds(elapsedSeconds)}`}</Heading>
            <Heading>{`Question ${questionNumber} of ${totalNumberOfQuestions}`}</Heading>
        </Container>
    )
}

export default InGameStatistics
