import {act, renderHook} from '@testing-library/react-hooks'
import useQuestionCountTimer from "./questionCountTimer";
import {waitFor} from "@testing-library/react";

describe('Question count timer', () => {
    const onTimerExpired = jest.fn()
    let askAQuestion

    beforeEach(onTimerExpired.mockClear)

    it('triggers an expired timer event after the maximum number of questions have been reached', () => {
        renderUseQuestionCountTimer()

        askAQuestion()
        askAQuestion()
        askAQuestion()

        expect(onTimerExpired).toHaveBeenCalled()
    })

    it('does not trigger an expired timer event before the maximum number of questions has been reached', () => {
        renderUseQuestionCountTimer()

        askAQuestion()
        askAQuestion()

        expect(onTimerExpired).not.toHaveBeenCalled()
    })

    function renderUseQuestionCountTimer() {
        const maximumNumberOfQuestions = 2

        const { result } = renderHook(() => useQuestionCountTimer(maximumNumberOfQuestions, onTimerExpired))

        askAQuestion = () => {
            act(() => {
                result.current.onAskQuestion()
            })
        }
    }
})

