import { styled } from '@mui/material/styles'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody"
import TableRow from "@mui/material/TableRow"
import TableCell from "@mui/material/TableCell"
import TableHead from '@mui/material/TableHead'
import TableContainer from '@mui/material/TableContainer'
import {AnswerState} from "./game-board/answer-pad/AnswerPad";
import {formatElapsedSeconds} from "../../utils/timeUtils";
import {TwoDigitQuestion} from "../../utils/questionUtils";

const FlexContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
})

const Title = styled('h3')({
    marginTop: '2rem'
})

function ResultsBoard(props) {
    const {
        elapsedTime,
        totalNumberOfQuestions,
        numberOfQuestionsAnsweredCorrectly,
        numberOfQuestionsAnsweredIncorrectly,
        answerHistory
    } = props

    return (
        <FlexContainer>
            <Title>It's the end of the game, here are your results.</Title>
            <ResultSummary
                elapsedTime={elapsedTime}
                totalNumberOfQuestions={totalNumberOfQuestions}
                numberOfQuestionsAnsweredCorrectly={numberOfQuestionsAnsweredCorrectly}
                numberOfQuestionsAnsweredIncorrectly={numberOfQuestionsAnsweredIncorrectly}
            />
            <AnswerHistory answerHistory={answerHistory} />
        </FlexContainer>
    )
}

function ResultSummary({ elapsedTime, totalNumberOfQuestions, numberOfQuestionsAnsweredCorrectly, numberOfQuestionsAnsweredIncorrectly }){
    return (
        <Table size='small' sx={{ marginTop: '2rem' }}>
            <TableBody>
                <ResultItem name='Time taken' value={formatElapsedSeconds(elapsedTime)} />
                <ResultItem name='Questions asked' value={totalNumberOfQuestions} />
                <ResultItem name='Questions answered correctly' value={numberOfQuestionsAnsweredCorrectly} />
                <ResultItem name='Questions answered incorrectly' value={numberOfQuestionsAnsweredIncorrectly} />
            </TableBody>
        </Table>
    )
}

const GreyTableRow = styled(TableRow)({
    backgroundColor: '#f0f0f5'
})

function ResultItem({ name, value }) {
    return (
        <GreyTableRow>
            <TableCell align='left'>
                {name}
            </TableCell>
            <TableCell align='right'>
                {value}
            </TableCell>
        </GreyTableRow>
    )
}

function AnswerHistory({ answerHistory }) {
    return (
            <TableContainer sx={{ flex: '1 0px', marginTop: '1rem' }}>
                <Table size='small' stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell align='center'>Question</TableCell>
                            <TableCell align='center'>You answered</TableCell>
                            <TableCell align='center'>Correct answer</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            answerHistory.map((answeredQuestion, index) => (
                                    <Answer
                                        key={index}
                                        question={answeredQuestion.question}
                                        userAnswer={answeredQuestion.userAnswer}
                                        answerState={answeredQuestion.answerState}
                                    />
                                )
                            )
                        }
                    </TableBody>
                </Table>
            </TableContainer>
    )
}

function Answer({ question, userAnswer, answerState }) {
    const questionString = TwoDigitQuestion.toString(question)

    return (
        <TableRow>
            <TableCell align='center'>{questionString}</TableCell>
            <TableCell align='center'>{userAnswer}</TableCell>
            <TableCell align='center'>{question.answer}</TableCell>
            <TableCell align='center'>{answerStateToEmoji(answerState)}</TableCell>
        </TableRow>
    )
}

const answerStateToEmoji = answerState => {
    if (answerState === AnswerState.CORRECT) {
        return <p>&#9989;</p>
    }

    if (answerState === AnswerState.WRONG) {
        return <p>&#10060;</p>
    }

    return ''
}

export default ResultsBoard
