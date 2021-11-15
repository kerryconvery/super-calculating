export const formatElapsedSeconds = (elapsedSeconds) => {
    return new Date(elapsedSeconds * 1000)
        .toISOString()
        .substr(14, 5)
}
