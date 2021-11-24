import {render, screen, act, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import * as questionUtils from '../../utils/questionUtils'
import {TwoDigitQuestion} from "../../utils/questionUtils";
import {answerTheQuestionWith, clickTheEndGameButton, clickTheNextButton} from "../../utils/testUtils";
import GamePage from './GamePage'

jest.useFakeTimers()

describe('Game controller', () => {
    describe('When playing the game', () => {
        beforeEach(startTheGame)

        describe('when the start button is pressed', () => {
            it('Counts down from Start to 1', () => {
                expect(screen.getByText('1')).toBeInTheDocument()
            })

            it('Counts down from 1 to GO!', async () => {
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

                expect(screen.getByText('Question 1 of 3')).toBeInTheDocument()
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

                expect(screen.getByText('Question 2 of 3')).toBeInTheDocument()
            })
        })
    })

    describe('When the game has ended', () => {
        it('displays the score board when all the questions have been answered', async () => {
            const { container } = await startTheGame()

            await waitForQuestion()

            act(() => {
                jest.advanceTimersByTime(10000)
            })

            await answerTheQuestionWith('13')
            await clickTheNextButton()

            await answerTheQuestionWith('9')
            await clickTheNextButton()

            await answerTheQuestionWith('10')
            await clickTheEndGameButton()

            expect(container.firstChild).toMatchSnapshot()
        })
    })
})

async function startTheGame() {
    const renderResult = await renderGamePage()

    pressTheStartButton()

    return renderResult
}

function renderGamePage() {
    jest.spyOn(questionUtils, 'generateQuestion')
        .mockReturnValue(TwoDigitQuestion.set(5, 8))

    return render(<GamePage numberOfQuestions={3} startupCountDown={['Start', '1', 'GO!']} />)
}

function pressTheStartButton() {
    userEvent.click(screen.getByText('Start'))
}

const waitForGo = waitForCountdown(1000)
const waitForQuestion = waitForCountdown(2000)

function waitForCountdown(period) {
    return async function() {
        await waitFor(() => {
            jest.advanceTimersByTime(period);
        })
    }
}
