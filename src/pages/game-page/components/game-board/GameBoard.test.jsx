import {answerTheQuestionWith, clickTheCheckAnswerButton} from "../../../../utils/testUtils";
import {render, screen, waitFor} from "@testing-library/react";
import * as questionUtils from "../../../../utils/questionUtils";
import GameBoard from "./GameBoard";
import userEvent from "@testing-library/user-event";
import {TwoDigitQuestion} from "../../../../utils/questionUtils";

const questions = [TwoDigitQuestion.set(5, 8), TwoDigitQuestion.set(12, 3)]

describe('Game board', () => {
    beforeEach(renderGameBoard)

    describe('When the user enters an answer and presses the Check Answer button', () => {
        it('displays that the answer is correct', async () => {
            await answerTheQuestionWith('13')

            expect(screen.getByText('Correct!!')).toBeInTheDocument()
        })

        it('displays that the answer is wrong and the correct answer', async () => {
            await answerTheQuestionWith('10')

            expect(screen.getByText('Oh No!!')).toBeInTheDocument()
            expect(screen.getByText('The correct answer is 13')).toBeInTheDocument()
        })
    })

    describe('When the user clicks on the Check Answer button without entering an answer', () => {
        it('tells the user to enter an answer', async () => {
            await clickTheCheckAnswerButton()

            expect(screen.getByText('Please enter an answer first')).toBeInTheDocument()
        })

        it('removes the validation message when the user starts entering an answer', async () => {
            await clickTheCheckAnswerButton()

            await answerTheQuestionWith('1')

            expect(screen.queryByText('Please enter an answer first')).not.toBeInTheDocument()
        })
    })

    describe('When the user enters the correct answer and clicks the Next button', () => {
        it('it asks another question', async () => {
            await answerTheQuestionWith('13')

            await clickTheNextButton()

            expect(screen.getByText('12 + 3 =')).toBeInTheDocument()
        })
    })

    describe('When the user enters the wrong answer and clicks the Next button', () => {
        it('it asks another question', async () => {
            await answerTheQuestionWith('10')

            await clickTheNextButton()

            expect(screen.getByText('12 + 3 =')).toBeInTheDocument()
        })
    })
})

function renderGameBoard() {
    render(<GameBoard onAskNextQuestion={createQuestionGenerator()} />)
}

function createQuestionGenerator() {
    let nextQuestionIndex = 0

    return () => {
        const nextQuestion = questions[nextQuestionIndex]

        nextQuestionIndex++

        return nextQuestion
    }
}

function clickTheNextButton()  {
    return waitFor(() => {
        userEvent.click(screen.getByText('Next question'))
    })
}
