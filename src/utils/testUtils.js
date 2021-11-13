import {fireEvent, screen, waitFor} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

export async function answerTheQuestionWith(answerValue) {
    const answerInputField = screen.getByPlaceholderText('Enter your answer')

    await waitFor(() => {
        fireEvent.change(answerInputField, {target: {value: answerValue}})
    })

    return clickTheCheckAnswerButton()
}

export function clickTheCheckAnswerButton() {
    const checkAnswerButton = screen.getByText('Check Answer')

    return waitFor(() => {
        userEvent.click(checkAnswerButton)
    })
}

export function clickTheNextButton()  {
    return waitFor(() => {
        userEvent.click(screen.getByText('Next question'))
    })
}
