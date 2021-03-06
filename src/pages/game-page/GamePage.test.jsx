import {render, screen, act, waitFor, within, fireEvent} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import * as QuestionGenerator from '../../question-genertor/questionGenerator'
import {answerTheQuestionWith, clickTheEndGameButton, clickTheNextButton} from "../../utils/testUtils";
import GamePage from './GamePage'
import Question from "../../question-genertor/Question";
import gameStorageService from "./services/gameStorageService";

const lastGameResults = {
    elapsedTime: 120,
    totalNumberOfQuestions: 10,
    numberOfQuestionsAnsweredCorrectly: 2,
    numberOfQuestionsAnsweredIncorrectly: 8
}

jest.mock('./services/gameStorageService', () => {
    return {
        addGameResults: jest.fn().mockResolvedValue(undefined),
        getLastGameResults: jest.fn().mockResolvedValue(lastGameResults)
    };
});

jest.useFakeTimers()

jest.mock('@mui/material/Slider', () => (props) => {
    const { id, name, min, max, defaultValue, onChange } = props;
    return (
        <input
            aria-labelledby={props['aria-labelledby']}
            type="range"
            id={id}
            name={name}
            min={min}
            max={max}
            value={defaultValue}
            onChange={onChange}
        />
    );
});

describe('Game page', () => {
    describe('before starting the game', () => {
        it('Sets a default number of questions', async () => {
            await renderGamePage()

            expect(screen.getByLabelText(/Number of questions:/).value).toEqual('3')
        })

        it('allows the player to select the number of questions from a predefined list', async () => {
            await renderGamePage()

            fireEvent.change( screen.getByLabelText(/Number of questions:/), { target: { value: 2 } })

            await pressTheStartButton()

            await waitForQuestion()

            expect(screen.getByText('Question 1 of 2')).toBeInTheDocument()
        })

        it('asks only the selected number of questions before ending the game', async () => {
            await renderGamePage()

            fireEvent.change( screen.getByLabelText(/Number of questions:/), { target: { value: 2 } })

            await pressTheStartButton()

            await waitForQuestion()

            await answerTheQuestionWith('13')
            await clickTheNextButton()

            await answerTheQuestionWith('9')

            expect(screen.getByText('End game')).toBeInTheDocument()
        })
    })

    describe('Playing the game', () => {
        beforeEach(async () => {
            await startTheGame()
        })

        describe('when the start button is pressed', () => {
            it('hides the question selector', () => {
                expect(screen.queryByLabelText(/Number of questions:/)).not.toBeInTheDocument()
            })

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

        describe('while playing the game', () => {
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

    describe('after the game has ended', () => {
        let container

        beforeEach(async () => {
            const component = await startTheGame()

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

            container = component.container
        })

        it('stores the game results for later retrieval', async () => {
            const addGameResults = jest.spyOn(gameStorageService, 'addGameResults')

            expect(addGameResults).toHaveBeenCalledWith({
                elapsedTime: expect.anything(),
                totalNumberOfQuestions: expect.anything(),
                numberOfQuestionsAnsweredCorrectly: expect.anything(),
                numberOfQuestionsAnsweredIncorrectly: expect.anything(),
            })
        })

        it('displays the score board when all the questions have been answered', async () => {
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
    jest.spyOn(QuestionGenerator, 'generateQuestion')
        .mockReturnValue(Question.create({ question: '5 + 8', answer: 13 }))

    return waitFor(() => render(<GamePage defaultNumberOfQuestions={3} startupCountDown={['Start', '1', 'GO!']} />))
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
