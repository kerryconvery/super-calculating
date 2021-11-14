function InGameStatistics({ elapsedSeconds, questionNumber, totalNumberOfQuestions }) {
    const formatElapsedSeconds = () => {
        return new Date(elapsedSeconds * 1000)
            .toISOString()
            .substr(14, 5)
    }

    return (
        <>
            <div>{`Elapsed time: ${formatElapsedSeconds()}`}</div>
            <div>{`Question ${questionNumber} of ${totalNumberOfQuestions}`}</div>
        </>
    )
}

export default InGameStatistics
