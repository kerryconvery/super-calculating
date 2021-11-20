import {fireEvent, screen, waitFor} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

export function answerTheQuestionWith(answerValue) {
    enterAnswer(answerValue)

    return clickTheCheckAnswerButton()
}

export function enterAnswer(answerValue) {
    for (let charIndex = 0; charIndex < answerValue.length; charIndex++) {
        const char = answerValue.charAt(charIndex)
        const button = screen.getByText(char)

        userEvent.click(button)
    }
}

export function clickTheCheckAnswerButton() {
    const checkAnswerButton = screen.getByText('Check Answer')

    return waitFor(() => {
        userEvent.click(checkAnswerButton)
    })
}

export function clickTheNextButton() {
    return waitFor(() => {
        userEvent.click(screen.getByText('Next question'))
    })
}

export function clickTheEndGameButton() {
    return waitFor(() => {
        userEvent.click(screen.getByText('End game'))
    })
}
