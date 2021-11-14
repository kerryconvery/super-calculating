import {
    answerTheQuestionWith,
    clickTheCheckAnswerButton,
    clickTheEndGameButton,
    clickTheNextButton
} from "../../../../utils/testUtils";
import {render, screen} from "@testing-library/react";
import GameBoard from "./GameBoard";
import {TwoDigitQuestion} from "../../../../utils/questionUtils";

const questions = [TwoDigitQuestion.set(5, 8), TwoDigitQuestion.set(12, 3)]

describe('Game board', () => {
    const onQuestionAnswered = jest.fn()
    const onEndGame = jest.fn()

    describe('When there are more questions', () => {
        beforeEach(() => renderGameBoard( { hasMoreQuestions: true }))

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

            it('triggers a question answered event', async () => {
                await answerTheQuestionWith('13')

                expect(onQuestionAnswered).toHaveBeenCalled()
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

    describe('When there are no more questions remaining', () => {
        beforeEach(async () => {
            renderGameBoard({ hasMoreQuestions: false })
            await answerTheQuestionWith('10')
        })

        it('displays an end game button', async () => {
            expect(screen.getByText('End game')).toBeInTheDocument()
        })

        it('triggers the end game event when the user pressed on the end game button', async () => {
            await clickTheEndGameButton()

            expect(onEndGame).toHaveBeenCalled()
        })
    })

    function renderGameBoard({ hasMoreQuestions }) {
        render(
            <GameBoard
                hasMoreQuestions={hasMoreQuestions}
                onQuestionAnswered={onQuestionAnswered}
                onAskNextQuestion={createQuestionGenerator()}
                onEndGame={onEndGame}
            />
        )
    }
})

function createQuestionGenerator() {
    let nextQuestionIndex = 0

    return () => {
        const nextQuestion = questions[nextQuestionIndex]

        nextQuestionIndex++

        return nextQuestion
    }
}
