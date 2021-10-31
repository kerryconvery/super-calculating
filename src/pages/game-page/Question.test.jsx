import userEvent from "@testing-library/user-event"
import {screen, waitFor, render, fireEvent} from "@testing-library/react";
import Question from './Question'

describe('when presenting a question', () => {
    const getNextQuestion = () => [3, 7]

    it('presents a random question', () => {
        renderQuestion()

        expect(screen.getByText('3 + 7 =')).toBeInTheDocument()
    })

    describe('when the answer is correct', () => {
        it('tells the user that the answer is correct', () => {
            renderQuestion()

            answerTheQuestionWith('10')

            expect(screen.getByText('Correct!!')).toBeInTheDocument()
        })
    })

    describe('when the answer is not correct', () => {
        it('tells the user that the answer is correct', () => {
            renderQuestion()

            answerTheQuestionWith('2')

            expect(screen.getByText('Oh No!!')).toBeInTheDocument()
        })
    })

    function renderQuestion() {
        render(<Question onNextQuestion={getNextQuestion} />)
    }
})


function answerTheQuestionWith(answerValue) {
    const answerInputField = screen.getByLabelText('Enter your answer')
    const checkAnswerButton = screen.getByText('Check Answer')

    fireEvent.change(answerInputField, {target: {value: answerValue}})
    userEvent.click(checkAnswerButton)
}
