import userEvent from "@testing-library/user-event"
import {screen, render, fireEvent} from "@testing-library/react";
import Answer from "./Answer";
import {answerTheQuestionWith} from "../../../../utils/testUtils";

describe('when presenting a question', () => {
    const answer = 10

    describe('when the answer is correct', () => {
        it('tells the user that the answer is correct', () => {
            renderAnswer()

            answerTheQuestionWith('10')

            expect(screen.getByText('Correct!!')).toBeInTheDocument()
        })
    })

    describe('when the answer is not correct', () => {
        it('tells the user that the answer is correct', () => {
            renderAnswer()

            answerTheQuestionWith('2')

            expect(screen.getByText('Oh No!!')).toBeInTheDocument()
        })
    })

    function renderAnswer() {
        render(<Answer answer={answer} />)
    }
})
