import React, {useEffect, useReducer, useRef} from "react";
import Button from '@mui/material/Button'
import RandomColorH2 from "../RandomColorH2";
import Audio from "../Audio";
import useSound from "use-sound";

const IntervalState = {
    stopped: 'stopped',
    starting: 'starting',
    incrementing: 'incrementing',
    isIncrementing: (intervalState) => intervalState === IntervalState.incrementing,
    isStopped: (intervalState) => intervalState === IntervalState.stopped,
}

function IntervalButton({ text, onCountDownStarted, onCountDownCompleted }) {
    const { value, isCountingDown, startCountdown } = useCountdown(text, onCountDownStarted, onCountDownCompleted)

    useCountdownSound(isCountingDown, value)

    if(isCountingDown) {
        return <RandomColorH2>{value}</RandomColorH2>
    }

    return <Button variant="outlined" color="secondary" onClick={startCountdown}>{value}</Button>
}

const reducer = (state, action) => {
    switch (action.type) {
        case IntervalState.starting: return { ...state, intervalState: IntervalState.incrementing, count: 1 }
        case IntervalState.incrementing: return { ...state, count: state.count + 1 }
        case IntervalState.stopped: return { ...state, intervalState: IntervalState.stopped }
    }
}

const initialState = {
    intervalState: IntervalState.Stopped,
    count: 0
}

function useCountdownSound(isCountingDown, countdownValue) {
    const [play] = useSound('simple-beep.wav')

    useEffect(() => {
        if(isCountingDown) {
            play()
        }
    }, [countdownValue])
}

function useCountdown(text, onCountDownStarted, onCountDownCompleted) {
    const [{ count, intervalState }, dispatch] = useReducer(reducer, initialState)
    const intervalRef = useRef(0)

    useEffect(() => {
        if (IntervalState.isIncrementing(intervalState)) {
            incrementInterval()
        }
    }, [count, intervalState])

    useEffect(() => {
        return () => {
            stopCountdown()
        }
    }, [])

    const incrementInterval = () => {
        return setTimeout(() => {
            if (IntervalState.isStopped(intervalState)) {
                return;
            }

            if (count < text.length -1) {
                dispatch({ type: IntervalState.incrementing })
            } else {
                onCountDownCompleted()
            }
        }, 1000)
    }

    const stopCountdown = () => {
        dispatch({ type: IntervalState.stopped })
        clearTimeout(intervalRef.current)
    }

    const startCountdown = () => {
        onCountDownStarted()

        dispatch({ type: IntervalState.starting })
    }

    return {
        value: text[count],
        isCountingDown: IntervalState.isIncrementing(intervalState),
        startCountdown,
    }
}

export default IntervalButton
