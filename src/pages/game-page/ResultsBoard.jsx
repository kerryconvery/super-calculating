import React from 'react';
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

const ResultSummaryColumns = [
    {
        title: 'Time taken',
        getDisplayValue: (results) => formatElapsedSeconds(results.elapsedTime)
    },
    {
        title: 'Total questions',
        getDisplayValue: (results) => results.totalNumberOfQuestions
    },
    {
        title: 'Answered correctly',
        getDisplayValue: (results) => results.numberOfQuestionsAnsweredCorrectly
    },
    {
        title: 'Answered incorrectly',
        getDisplayValue: (results) => results.numberOfQuestionsAnsweredIncorrectly
    },
    {
        title: 'Percentage correct',
        getDisplayValue: (results) => `${getPercentageCorrect(results)}%`
    },
]

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
            <ResultSummaryTableBody>
                {column => (
                    <>
                        <TableCell align='left'>{column.title}</TableCell>
                        <TableCell align='right'>{column.getDisplayValue(gameResults)}</TableCell>
                    </>
                )}
            </ResultSummaryTableBody>
        </Table>
    )
}

function ResultSummaryIncludingLastGame({ gameResults, lastGameResults }) {
    return (
        <Table size='small' sx={{ marginTop: '2rem' }}>
            <TableHead>
                <GreyTableRow>
                    <TableCell></TableCell>
                    <TableCell align='right'>Current</TableCell>
                    <TableCell align='right'>Previous</TableCell>
                </GreyTableRow>
            </TableHead>
            <ResultSummaryTableBody>
                {column => (
                    <>
                        <TableCell align='left'>{column.title}</TableCell>
                        <TableCell align='right'>{column.getDisplayValue(gameResults)}</TableCell>
                        <TableCell align='right'>{column.getDisplayValue(lastGameResults)}</TableCell>
                    </>
                )}
            </ResultSummaryTableBody>
        </Table>
    )
}

function ResultSummaryTableBody({ children }) {
    return (
        <TableBody>
            {
                ResultSummaryColumns.map((column, index) => (
                    <GreyTableRow key={index}>
                        {children(column)}
                    </GreyTableRow>
                ))
            }
        </TableBody>
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
