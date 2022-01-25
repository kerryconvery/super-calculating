import {useEffect, useState} from "react";
import {GameState} from "../game-controller/types";

function useGameResultsStore(gameStorageService, gameResults, gameState) {
    const [lastGameResults, setLastGameResults] = useState({})

    useEffect(() => {
        gameStorageService.getLastGameResults()
            .then(gameResults => {
                setLastGameResults(gameResults)
            })
    }, [])

    useEffect(() => {
        if (gameState === GameState.completed) {
            gameStorageService.addGameResults(gameResults)
        }
    }, [gameState])

    return lastGameResults
}

export default useGameResultsStore
