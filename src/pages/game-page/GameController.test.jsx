import {render, screen, act, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import GameController from './GameController'
import * as questionUtils from '../../utils/questionUtils'
import {TwoDigitQuestion} from "../../utils/questionUtils";
import {answerTheQuestionWith, clickTheEndGameButton, clickTheNextButton} from "../../utils/testUtils";

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

    describe('when playing the game', () => {
        it('displays the initial question number out of the total number of questions', async () => {
            await waitForQuestion()

            expect(screen.getByText('Question 1 of 2')).toBeInTheDocument()
        })

        it('displays the initial elapsed time as zero', async () => {
            await waitForQuestion()

            expect(screen.getByText('Elapsed time: 00:00')).toBeInTheDocument()
        })

        it('displays the elapsed number of seconds since the game started', async () => {
            await waitForQuestion()

            act(() => {
                jest.advanceTimersByTime(2000)
            })

            expect(screen.getByText('Elapsed time: 00:02')).toBeInTheDocument()
        })

        it('pauses the timer while displaying the result of the answer', async () => {
            await waitForQuestion()

            act(() => {
                jest.advanceTimersByTime(2000)
            })

            await answerTheQuestionWith('10')

            act(() => {
                jest.advanceTimersByTime(3000)
            })

            await clickTheNextButton()

            act(() => {
                jest.advanceTimersByTime(1000)
            })

            expect(screen.getByText('Elapsed time: 00:03')).toBeInTheDocument()
        })

        it('displays the updated question number out of the total number of questions', async () => {
            await waitForQuestion()

            await answerTheQuestionWith('10')
            await clickTheNextButton()

            expect(screen.getByText('Question 2 of 2')).toBeInTheDocument()
        })

        it('displays the end when all the questions have been asked', async () => {
            await waitForQuestion()

            await answerTheQuestionWith('10')
            await clickTheNextButton()

            await answerTheQuestionWith('10')
            await clickTheEndGameButton()

            expect(screen.getByText('The end')).toBeInTheDocument()
        })
    })
})

async function startTheGame() {
    await renderGamePage()

    return pressTheStartButton()
}

function renderGamePage() {
    jest.spyOn(questionUtils, 'generateQuestion')
        .mockReturnValue(TwoDigitQuestion.set(5, 8))

    return render(<GameController numberOfQuestions={2} />)
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
