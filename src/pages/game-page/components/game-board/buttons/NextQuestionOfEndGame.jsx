import NextButton from "./NextButton";
import EndGameButton from "./EndGameButton";

function NextQuestionOrEndGame({ hasMoreQuestions, onNextQuestion, onEndGame }) {
    return hasMoreQuestions ? <NextButton onNext={onNextQuestion} /> : <EndGameButton onEndGame={onEndGame} />
}

export default NextQuestionOrEndGame
