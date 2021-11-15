import {formatElapsedSeconds} from "../../../utils/timeUtils";

function ScoreBoard({ elapsedTime }) {
    return (
        <>
            <div>The end</div>
            <div>{`Time taken: ${formatElapsedSeconds(elapsedTime)}`}</div>
        </>
    )
}

export default ScoreBoard
