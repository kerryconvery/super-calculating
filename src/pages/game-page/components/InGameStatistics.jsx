import {formatElapsedSeconds} from "../../../utils/timeUtils";

function InGameStatistics({ elapsedSeconds, questionNumber, totalNumberOfQuestions }) {
    return (
        <>
            <div>{`Elapsed time: ${formatElapsedSeconds(elapsedSeconds)}`}</div>
            <div>{`Question ${questionNumber} of ${totalNumberOfQuestions}`}</div>
        </>
    )
}

export default InGameStatistics
