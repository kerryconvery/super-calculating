import {fireEvent, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

export function answerTheQuestionWith(answerValue) {
    const answerInputField = screen.getByLabelText('Enter your answer')
    const checkAnswerButton = screen.getByText('Check Answer')

    fireEvent.change(answerInputField, {target: {value: answerValue}})
    userEvent.click(checkAnswerButton)
}
