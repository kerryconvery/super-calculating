import {useEffect, useReducer, useRef} from "react";
import Button from '@mui/material/Button'
import {getRandomColor} from "../../../utils/colorUtils";
import RandomColorH2 from "./labels/RandomColorH2";

const IntervalState = {
    stopped: 'stopped',
    starting: 'starting',
    incrementing: 'incrementing',
    isIncrementing: (intervalState) => intervalState === IntervalState.incrementing,
    isStopped: (intervalState) => intervalState === IntervalState.stopped,
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

function IntervalButton({ text, onCountDownCompleted }) {
    const [{ count, intervalState }, dispatch] = useReducer(reducer, initialState)
    const intervalRef = useRef(0)

    useEffect(() => {
        if (IntervalState.isIncrementing(intervalState)) {
            incrementInterval()
        }
    }, [count, intervalState])

    useEffect(() => {
        return () => {
            stopInterval()
        }
    }, [])

    const onButtonClick = () => {
        dispatch({ type: IntervalState.starting })
    }

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

    const stopInterval = () => {
        dispatch({ type: IntervalState.stopped })
        clearTimeout(intervalRef.current)
    }

    if(IntervalState.isIncrementing(intervalState)) {
        return <RandomColorH2>{text[count]}</RandomColorH2>
    }

    return <Button variant="outlined" color="secondary" onClick={onButtonClick}>{text[count]}</Button>
}

export default IntervalButton
