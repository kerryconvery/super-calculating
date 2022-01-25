import { styled } from '@mui/material/styles'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody"
import TableRow from "@mui/material/TableRow"
import TableCell from "@mui/material/TableCell"
import TableHead from '@mui/material/TableHead'
import TableContainer from '@mui/material/TableContainer'
import {AnswerState} from "./game-board/answer-pad/AnswerPad";
import {formatElapsedSeconds} from "../../utils/timeUtils";

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
        gameResults,
        lastGameResults,
        answerHistory
    } = props

    return (
        <FlexContainer>
            <Title>It's the end of the game, here are your results.</Title>
            <ResultSummary gameResults={gameResults} lastGameResults={lastGameResults} />
            <AnswerHistory answerHistory={answerHistory} />
        </FlexContainer>
    )
}

function ResultSummary({ gameResults, lastGameResults }) {
    if (isEmptyObject(lastGameResults)) {
        return <ResultSummaryWithoutLastGame gameResults={gameResults}/>
    } else {
        return <ResultSummaryIncludingLastGame gameResults={gameResults} lastGameResults={lastGameResults}/>
    }
}

function isEmptyObject(value) {
    return Object.keys(value).length === 0
}

function ResultSummaryWithoutLastGame({ gameResults }){
    return (
        <Table size='small' sx={{ marginTop: '2rem' }}>
            <TableBody>
                <ResultItem name='Time taken' value={formatElapsedSeconds(gameResults.elapsedTime)} />
                <ResultItem name='Questions asked' value={gameResults.totalNumberOfQuestions} />
                <ResultItem name='Questions answered correctly' value={gameResults.numberOfQuestionsAnsweredCorrectly} />
                <ResultItem name='Questions answered incorrectly' value={gameResults.numberOfQuestionsAnsweredIncorrectly} />
                <ResultItem name='Percentage answered correctly' value={`${getPercentageCorrect(gameResults)}%`} />
            </TableBody>
        </Table>
    )
}

function ResultSummaryIncludingLastGame({ gameResults, lastGameResults }) {
    return (
        <Table size='small' sx={{ marginTop: '2rem' }}>
            <TableHead>
                <GreyTableRow>
                    <TableCell></TableCell>
                    <TableCell align='center'>Current game</TableCell>
                    <TableCell align='center'>Previous game</TableCell>
                </GreyTableRow>
            </TableHead>
            <TableBody>
                <GreyTableRow>
                    <TableCell align='left'>Time taken</TableCell>
                    <TableCell align='right'>{formatElapsedSeconds(gameResults.elapsedTime)}</TableCell>
                    <TableCell align='right'>{formatElapsedSeconds(lastGameResults.elapsedTime)}</TableCell>
                </GreyTableRow>
                <GreyTableRow>
                    <TableCell align='left'>Questions asked</TableCell>
                    <TableCell align='right'>{gameResults.totalNumberOfQuestions}</TableCell>
                    <TableCell align='right'>{lastGameResults.totalNumberOfQuestions}</TableCell>
                </GreyTableRow>
                <GreyTableRow>
                    <TableCell align='left'>Questions answered correctly</TableCell>
                    <TableCell align='right'>{gameResults.numberOfQuestionsAnsweredCorrectly}</TableCell>
                    <TableCell align='right'>{lastGameResults.numberOfQuestionsAnsweredCorrectly}</TableCell>
                </GreyTableRow>
                <GreyTableRow>
                    <TableCell align='left'>Questions answered incorrectly</TableCell>
                    <TableCell align='right'>{gameResults.numberOfQuestionsAnsweredIncorrectly}</TableCell>
                    <TableCell align='right'>{lastGameResults.numberOfQuestionsAnsweredIncorrectly}</TableCell>
                </GreyTableRow>
                <GreyTableRow>
                    <TableCell align='left'>Percentage answered correctly</TableCell>
                    <TableCell align='right'>{`${getPercentageCorrect(gameResults)}%`}</TableCell>
                    <TableCell align='right'>{`${getPercentageCorrect(lastGameResults)}%`}</TableCell>
                </GreyTableRow>
            </TableBody>
        </Table>
    )
}

const getPercentageCorrect = (results) => {
    return (results.numberOfQuestionsAnsweredCorrectly / results.totalNumberOfQuestions) * 100
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
    return (
        <TableRow>
            <TableCell align='center'>{question.value}</TableCell>
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
