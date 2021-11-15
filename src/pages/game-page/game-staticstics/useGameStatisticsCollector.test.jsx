import {act, renderHook} from "@testing-library/react-hooks";
import { waitFor } from "@testing-library/react";
import useGameStatisticsCollector from "./useGameStatisticsCollector";
import {AnswerState} from "../components/game-board/answer/Answer";

describe('useGameStatisticsCollector', () => {
    const totalNumberOfQuestions = 3

    it('returns initial game statistics', () => {
        const { result } = renderHook(() => useGameStatisticsCollector(totalNumberOfQuestions))

        expect(result.current.gameStatistics.totalNumberOfQuestions).toEqual(totalNumberOfQuestions)
        expect(result.current.gameStatistics.numberOfQuestionsAsked).toEqual(0)

    })

    it('returns the number of questions asked and, after a question has been answered, the number remaining', async () => {
        const { result } = renderHook(() => useGameStatisticsCollector(totalNumberOfQuestions))

        await waitFor(() => {
            act(() => {
                result.current.onAskQuestion()
            })
        })

        await waitFor(() => {
            act(() => {
                result.current.onQuestionAnswered()
            })
        })

        expect(result.current.gameStatistics.numberOfQuestionsAsked).toEqual(1)
        expect(result.current.gameStatistics.numberOfQuestionsRemaining).toEqual(2)
    })

    it('returns the number of questions that were answered correctly and incorrectly', async () => {
        const { result } = renderHook(() => useGameStatisticsCollector(totalNumberOfQuestions))

        await waitFor(() => {
            act(() => {
                result.current.onQuestionAnswered(AnswerState.CORRECT)
            })
        })

        await waitFor(() => {
            act(() => {
                result.current.onQuestionAnswered(AnswerState.CORRECT)
            })
        })

        await waitFor(() => {
            act(() => {
                result.current.onQuestionAnswered(AnswerState.WRONG)
            })
        })

        expect(result.current.gameStatistics.numberOfQuestionsAnsweredCorrectly).toEqual(2)
        expect(result.current.gameStatistics.numberOfQuestionsAnsweredIncorrectly).toEqual(1)
    })
})


