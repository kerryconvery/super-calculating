import useGameResultsStore from "./useGameResultsStore"
import { renderHook} from "@testing-library/react-hooks";
import {GameState} from "../game-controller/types";

describe('Game results store', () => {
    const existingGameResults = {
        elapsedTime: 120,
        totalNumberOfQuestions: 10,
        numberOfQuestionsAnsweredCorrectly: 2,
        numberOfQuestionsAnsweredIncorrectly: 8
    }

    const newGameResults = {
        elapsedTime: 100,
        totalNumberOfQuestions: 10,
        numberOfQuestionsAnsweredCorrectly: 4,
        numberOfQuestionsAnsweredIncorrectly: 4
    }

    const gameStorageService = {
        getLastGameResults: jest.fn().mockResolvedValue(existingGameResults),
        addGameResults: jest.fn().mockResolvedValue(newGameResults)
    }

    it('returns back an empty object by default', async () => {
        const { waitForNextUpdate, result } = renderHook(() => useGameResultsStore(gameStorageService, newGameResults, GameState.notStarted))

        expect(result.current).toEqual({})

        await waitForNextUpdate()
    })

    it('retrieves the last game results from storage on startup', async () => {
        const { waitForNextUpdate, result } = renderHook(() => useGameResultsStore(gameStorageService, newGameResults, GameState.notStarted))

        await waitForNextUpdate()

        expect(result.current).toEqual(existingGameResults)
    })

    it('saves the current game results to storage when the game completes', async () => {
        const { waitForNextUpdate } = renderHook(() => useGameResultsStore(gameStorageService, newGameResults, GameState.completed))

        await waitForNextUpdate()

        expect(gameStorageService.addGameResults).toHaveBeenCalledWith(newGameResults)
    })
})
