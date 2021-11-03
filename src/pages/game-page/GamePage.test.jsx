import {render, screen, act, waitFor, fireEvent} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import GamePage from './GamePage'
import * as questionUtils from '../../utils/questionUtils'
import {answerTheQuestionWith} from "../../utils/testUtils";

jest.useFakeTimers()

describe('When playing the game', () => {
    beforeEach(startTheGame)

    describe('when the start button is pressed', () => {
        it('Counts down from 3', () => {
            expect(screen.getByText('3')).toBeInTheDocument()
        })

        it('Counts down from 3 to 2', async () => {
            await waitForTwo()

            expect(screen.getByText('2')).toBeInTheDocument()
        })

        it('Counts down from 2 to 1', async () => {
            await waitForOne()

            expect(screen.getByText('1')).toBeInTheDocument()
        })

        it('Counts down from 1 to START', async () => {
            await waitForGo()

            expect(screen.getByText('GO!')).toBeInTheDocument()
        })

        it('displays a mathematics question when the count down reaches zero', async () => {
            await waitForQuestion()

            expect(screen.getByText('5 + 8 =')).toBeInTheDocument()
        })
    })

    describe('When the user enters an answer and presses Check Answer', () => {
        it('displays whether the entered answer is right or wrong', async () => {
            await waitForQuestion()

            answerTheQuestionWith('13')

            expect(screen.getByText('Correct!!')).toBeInTheDocument()
        })
    })
})

async function startTheGame() {
    await renderGamePage()

    return pressTheStartButton()
}

function renderGamePage() {
    jest.spyOn(questionUtils, 'generateQuestion')
        .mockReturnValue({ components: [5, 8], answer: 13 })

    render(<GamePage />)
}

function pressTheStartButton() {
    userEvent.click(screen.getByText('Start'))
}

const waitForTwo = waitForCountdown(1000)
const waitForOne = waitForCountdown(2000)
const waitForGo = waitForCountdown(3000)
const waitForQuestion = waitForCountdown(4000)

function waitForCountdown(period) {
    return async function() {
        await waitFor(() => {
            jest.advanceTimersByTime(period);
        })
    }
}