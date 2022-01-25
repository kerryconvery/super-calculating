
const storageKey = 'super_calculating_game_results'

function parseOfEmpty(jsonString) {
    return jsonString ? JSON.parse(jsonString) : {}
}

const gameStorageService = {
    addGameResults: results => {
        return Promise.resolve(localStorage.setItem(storageKey, JSON.stringify(results)))
    },

    getLastGameResults: () => {
        return Promise.resolve(parseOfEmpty(localStorage.getItem(storageKey)))
    }
}

export default gameStorageService
