import userEvent from "@testing-library/user-event"
import {screen, waitFor, render, fireEvent} from "@testing-library/react";
import Question from './Question'

describe('when the user enter an answer and presses enter', () => {
    describe('when the answer is correct', () => {
        it('tells the user that the answer is correct', () => {
            render(<Question />)

            answerTheQuestionWith('5')

            expect(screen.getByText('Correct!!')).toBeInTheDocument()
        })
    })

    describe('when the answer is not correct', () => {
        it('tells the user that the answer is correct', () => {
            render(<Question />)

            answerTheQuestionWith('2')

            expect(screen.getByText('Oh No!!')).toBeInTheDocument()
        })
    })
})

function answerTheQuestionWith(answerValue) {
    const answerInputField = screen.getByLabelText('Enter your answer')
    const checkAnswerButton = screen.getByText('Check Answer')

    fireEvent.change(answerInputField, {target: {value: answerValue}})
    userEvent.click(checkAnswerButton)
}
