import Answer from "../answer/Answer";
import Question from "../question/Question";
import { generateQuestion } from "../../../../utils/questionUtils";

function GameBoard() {
    return (
        <Question onNextQuestion={generateQuestion}>
            {answer => <Answer answer={answer} />}
        </Question>
    )
}

export default GameBoard
