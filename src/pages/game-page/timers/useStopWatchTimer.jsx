import {useEffect, useRef, useState} from "react";

function useStopWatchTimer() {
    const [ numberOfElapsedSeconds, setNumberOfElapsedSeconds ] = useState(0)
    const [ running, setRunning ] = useState(false)
    const timerRef = useRef(0)

    useEffect(() => {
        if (running) {
            incrementElapsedSeconds()
        }
    }, [running, numberOfElapsedSeconds])

    useEffect(() => {
        return () => {
            startTimer()
        }
    }, [])

    const startTimer = () => {
        setRunning(true)
    }

    const incrementElapsedSeconds = () => {
        timerRef.current = setTimeout(() => {
            setNumberOfElapsedSeconds(numberOfElapsedSeconds + 1)
        }, 1000)
    }

    const stopTimer = () => {
        setRunning(false)
        clearInterval(timerRef.current)
    }

    return {
        elapsedSeconds: numberOfElapsedSeconds,
        pauseTimer: stopTimer,
        resumeTimer: startTimer,
    }
}

export default useStopWatchTimer
