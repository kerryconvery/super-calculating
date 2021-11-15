import {formatElapsedSeconds} from "../../../utils/timeUtils";
import {AnswerState} from "./game-board/answer/Answer";
import {TwoDigitQuestion} from "../../../utils/questionUtils";

function ScoreBoard(props) {
    const {
        elapsedTime,
        totalNumberOfQuestions,
        numberOfQuestionsAnsweredCorrectly,
        numberOfQuestionsAnsweredIncorrectly,
        answerHistory
    } = props

    return (
        <>
            <div>The end</div>
            <div>{`Time taken: ${formatElapsedSeconds(elapsedTime)}`}</div>
            <div>{`Total number of questions: ${totalNumberOfQuestions}`}</div>
            <div>{`Number of questions answered correctly: ${numberOfQuestionsAnsweredCorrectly}`}</div>
            <div>{`Number of questions answered incorrectly: ${numberOfQuestionsAnsweredIncorrectly}`}</div>
            <AnswerHistory answerHistory={answerHistory} />
        </>
    )
}

function AnswerHistory({ answerHistory }) {
    return answerHistory.map((answeredQuestion, index) => {
        return (
            <Answer key={index} question={answeredQuestion.question} userAnswer={answeredQuestion.userAnswer}>
                {answerStateToString(answeredQuestion.answerState)}
            </Answer>
        )
    })
}

const answerStateToString = answerState => {
    if (answerState === AnswerState.CORRECT) {
        return 'Correct'
    }

    if (answerState === AnswerState.WRONG) {
        return 'Wrong'
    }

    return ''
}

function Answer({ children, question, userAnswer }) {
    const questionString = `${TwoDigitQuestion.toString(question)} = ${ userAnswer }`

    return <div>{`${questionString} - ${children}`}</div>
}



export default ScoreBoard
