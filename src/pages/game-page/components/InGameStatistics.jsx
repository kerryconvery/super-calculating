import { styled } from '@mui/material/styles'
import {formatElapsedSeconds} from "../../../utils/timeUtils";

const Container = styled('div')({
    marginBottom: '4rem'
})

const Heading = styled('h2')({
    margin: 0
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
